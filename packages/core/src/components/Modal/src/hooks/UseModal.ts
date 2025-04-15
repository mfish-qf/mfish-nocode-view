import type { ModalMethods, ModalProps, ReturnMethods, UseModalInnerReturnType, UseModalReturnType } from "../Typing";
import { computed, getCurrentInstance, nextTick, onUnmounted, reactive, ref, toRaw, unref, watchEffect } from "vue";
import { isProdMode } from "@core/utils/Env.ts";
import { isFunction } from "@core/utils/Is.ts";
import { isEqual } from "lodash-es";
import { tryOnUnmounted } from "@vueuse/core";
import { error } from "@core/utils/Log.ts";
import { Fn, Nullable } from "@mfish/types";

const dataTransfer = reactive<any>({});

const openData = reactive<{ [key: number]: boolean }>({});

/**
 * @description: Applicable to independent modal and call outside
 */
export function useModal(): UseModalReturnType {
  const modal = ref<Nullable<ModalMethods>>(null);
  const loaded = ref<Nullable<boolean>>(false);
  const uid = ref<number>(0);

  function register(modalMethod: ModalMethods, uuid?: number) {
    if (!getCurrentInstance()) {
      throw new Error("useModal() can only be used inside setup() or functional components!");
    }
    uid.value = uuid || 0;
    isProdMode() &&
      onUnmounted(() => {
        modal.value = null;
        loaded.value = false;
        dataTransfer[String(unref(uid))] = null;
      });
    if (unref(loaded) && isProdMode() && modalMethod === unref(modal)) return;

    modal.value = modalMethod;
    loaded.value = true;
    modalMethod.emitOpen = (open: boolean, uid: number) => {
      openData[uid] = open;
    };
  }

  const getInstance = () => {
    const instance = unref(modal);
    if (!instance) {
      error("useModal instance is undefined!");
    }
    return instance;
  };

  const methods: ReturnMethods = {
    setModalProps: (props: Partial<ModalProps>): void => {
      getInstance()?.setModalProps(props);
    },

    getOpen: computed((): boolean => {
      return openData[Math.trunc(unref(uid))];
    }),

    redoModalHeight: () => {
      getInstance()?.redoModalHeight?.();
    },

    openModal: <T = any>(open = true, data?: T, openOnSet = true): void => {
      getInstance()?.setModalProps({
        open
      });

      if (!data) return;
      const id = unref(uid);
      if (openOnSet) {
        dataTransfer[id] = null;
        dataTransfer[id] = toRaw(data);
        return;
      }
      const equal = isEqual(toRaw(dataTransfer[id]), toRaw(data));
      if (!equal) {
        dataTransfer[id] = toRaw(data);
      }
    },
    closeModal: () => {
      getInstance()?.setModalProps({ open: false });
    }
  };
  return [register, methods];
}

export const useModalInner = (callbackFn?: Fn): UseModalInnerReturnType => {
  const modalInstanceRef = ref<Nullable<ModalMethods>>(null);
  const currentInstance = getCurrentInstance();
  const uidRef = ref<number>(0);

  const getInstance = () => {
    const instance = unref(modalInstanceRef);
    if (!instance) {
      error("useModalInner instance is undefined!");
    }
    return instance;
  };

  const register = (modalInstance: ModalMethods, uuid?: number) => {
    isProdMode() &&
      tryOnUnmounted(() => {
        modalInstanceRef.value = null;
      });
    uidRef.value = uuid || 0;
    modalInstanceRef.value = modalInstance;
    currentInstance?.emit("register", modalInstance, uuid);
  };

  watchEffect(() => {
    const data = dataTransfer[unref(uidRef)];
    if (!data) return;
    if (!callbackFn || !isFunction(callbackFn)) return;
    nextTick(() => {
      callbackFn(data);
    }).then();
  });

  return [
    register,
    {
      changeLoading: (loading = true) => {
        getInstance()?.setModalProps({ loading });
      },
      getOpen: computed((): boolean => {
        return openData[Math.trunc(unref(uidRef))];
      }),

      changeOkLoading: (loading = true) => {
        getInstance()?.setModalProps({ confirmLoading: loading });
      },

      closeModal: () => {
        getInstance()?.setModalProps({ open: false });
      },

      setModalProps: (props: Partial<ModalProps>) => {
        getInstance()?.setModalProps(props);
      },

      redoModalHeight: () => {
        const callRedo = getInstance()?.redoModalHeight;
        callRedo && callRedo();
      }
    }
  ];
};
