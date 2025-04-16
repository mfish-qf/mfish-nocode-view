import type { MultiTabsSetting } from "@mfish/types/src/type/config";
import { computed } from "vue";
import { useAppStore } from "@mfish/stores/modules";

export function useMultipleTabSetting() {
  const appStore = useAppStore();
  const getShowMultipleTab = computed(() => appStore.getMultiTabsSetting.show);
  const getShowQuick = computed(() => appStore.getMultiTabsSetting.showQuick);
  const getShowRedo = computed(() => appStore.getMultiTabsSetting.showRedo);
  const getShowFold = computed(() => appStore.getMultiTabsSetting.showFold);

  function setMultipleTabSetting(multiTabsSetting: Partial<MultiTabsSetting>) {
    appStore.setProjectConfig({ multiTabsSetting });
  }

  return {
    setMultipleTabSetting,
    getShowMultipleTab,
    getShowQuick,
    getShowRedo,
    getShowFold
  };
}
