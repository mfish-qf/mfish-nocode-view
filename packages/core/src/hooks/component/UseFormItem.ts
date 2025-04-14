import type { UnwrapRef, Ref, WritableComputedRef, DeepReadonly } from "vue";
import { reactive, readonly, computed, getCurrentInstance, watchEffect, unref, toRaw, nextTick } from "vue";
import { isEqual } from "lodash-es";
import { Recordable } from "@mfish/types";

export function useRuleFormItem<T extends Recordable, K extends keyof T, V = UnwrapRef<T[K]>>(
  props: T,
  key?: K,
  changeEvent?: any,
  emitData?: Ref<any[]>
): [WritableComputedRef<V>, (val: V) => void, DeepReadonly<V>];

export function useRuleFormItem<T extends Recordable>(
  props: T,
  //@ts-ignore 忽略类型检查
  key: keyof T = "value",
  changeEvent = "change",
  emitData?: Ref<any[]>
) {
  const instance = getCurrentInstance();
  const emit = instance?.emit;
  const innerState = reactive({
    value: props[key]
  });
  const defaultState = readonly(innerState);
  const setState = (val: UnwrapRef<T[keyof T]>): void => {
    //@ts-ignore 忽略类型检查
    innerState.value = val as T[keyof T];
  };
  watchEffect(() => {
    //@ts-ignore 忽略类型检查
    innerState.value = props[key];
  });
  const state: any = computed({
    get() {
      return innerState.value;
    },
    set(value) {
      if (isEqual(value, defaultState.value)) return;
      //@ts-ignore 忽略类型检查
      innerState.value = value as T[keyof T];
      nextTick(() => {
        emit?.(changeEvent, value, ...(toRaw(unref(emitData)) || []));
      });
    }
  });

  return [state, setState, defaultState];
}
