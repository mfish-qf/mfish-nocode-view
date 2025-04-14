import type { DescriptionProps, DescInstance, UseDescReturnType } from "./Typing";
import { ref, getCurrentInstance, unref } from "vue";
import { isProdMode } from "@core/utils/Env";
import { Nullable } from "@mfish/types";

export function useDescription(props?: Partial<DescriptionProps>): UseDescReturnType {
  if (!getCurrentInstance()) {
    throw new Error("useDescription() can only be used inside setup() or functional components!");
  }
  const desc = ref<Nullable<DescInstance>>(null);
  const loaded = ref(false);

  function register(instance: DescInstance) {
    if (unref(loaded) && isProdMode()) {
      return;
    }
    desc.value = instance;
    props && instance.setDescProps(props);
    loaded.value = true;
  }

  const methods: DescInstance = {
    setDescProps: (descProps: Partial<DescriptionProps>): void => {
      unref(desc)?.setDescProps(descProps);
    },
    getData(): object {
      return unref(desc)?.getData() || {};
    }
  };

  return [register, methods];
}
