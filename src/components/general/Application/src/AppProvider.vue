<script lang="ts">
import { defineComponent, toRefs, ref, unref } from "vue";
import { createAppProviderContext } from "./UseAppContext";
import { createBreakpointListen } from "/@/hooks/event/UseBreakpoint";
import { prefixCls } from "/@/settings/DesignSetting";
import { useAppStore } from "/@/store/modules/App";
import { MenuModeEnum, MenuTypeEnum } from "/@/enums/MenuEnum";

const props = {
  /**
   * 样式前缀
   */
  prefixCls: { type: String, default: prefixCls }
};
export default defineComponent({
  name: "AppProvider",
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const isMobile = ref(false);
    const isSetState = ref(false);
    const appStore = useAppStore();
    // 监视屏幕更改
    createBreakpointListen(({ screenMap, sizeEnum, width }) => {
      const lgWidth = screenMap.get(sizeEnum.LG);
      if (lgWidth) {
        isMobile.value = width.value - 1 < lgWidth;
      }
      handleRestoreState();
    });
    const { prefixCls } = toRefs(props);
    // 将变量注入全局
    createAppProviderContext({ prefixCls, isMobile });

    /**
     * 用于维护窗口更改前的状态
     */
    function handleRestoreState() {
      if (unref(isMobile)) {
        if (!unref(isSetState)) {
          isSetState.value = true;
          const menuType = appStore.getProjectConfig?.menuSetting?.type ?? MenuTypeEnum.SIDEBAR;
          const menuMode = appStore.getProjectConfig?.menuSetting?.mode ?? MenuModeEnum.INLINE;
          const menuCollapsed = appStore.getProjectConfig?.menuSetting?.collapsed ?? false;
          const menuSplit = appStore.getProjectConfig?.menuSetting?.split ?? false;
          appStore.setProjectConfig({
            menuSetting: {
              type: MenuTypeEnum.SIDEBAR,
              mode: MenuModeEnum.INLINE,
              split: false
            }
          });
          appStore.setBeforeMiniInfo({ menuMode, menuCollapsed, menuType, menuSplit });
        }
      } else {
        if (unref(isSetState)) {
          isSetState.value = false;
          const { menuMode, menuCollapsed, menuType, menuSplit } = appStore.getBeforeMiniInfo;
          appStore.setProjectConfig({
            menuSetting: {
              type: menuType,
              mode: menuMode,
              collapsed: menuCollapsed,
              split: menuSplit
            }
          });
        }
      }
    }

    return () => slots.default?.();
  }
});
</script>
