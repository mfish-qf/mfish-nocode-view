/**
 * @description: 过度设置
 * @author: mfish
 * @date: 2022/10/11 17:57
 */
import type { TransitionSetting } from "@mfish/types/src/type/config";
import { computed } from "vue";
import { useAppStore } from "@mfish/stores/modules";

export function useTransitionSetting() {
  const appStore = useAppStore();
  const getEnableTransition = computed(() => appStore.getTransitionSetting?.enable);
  const getOpenNProgress = computed(() => appStore.getTransitionSetting?.openNProgress);
  const getOpenPageLoading = computed((): boolean => {
    return !!appStore.getTransitionSetting?.openPageLoading;
  });
  const getBasicTransition = computed(() => appStore.getTransitionSetting?.basicTransition);

  function setTransitionSetting(transitionSetting: Partial<TransitionSetting>) {
    appStore.setProjectConfig({ transitionSetting });
  }

  return {
    setTransitionSetting,
    getEnableTransition,
    getOpenNProgress,
    getOpenPageLoading,
    getBasicTransition
  };
}
