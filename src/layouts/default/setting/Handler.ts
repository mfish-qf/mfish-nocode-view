import { HandlerEnum } from "./Enum";
import { updateHeaderBgColor, updateSidebarBgColor } from "@mfish/core/logics/theme/UpdateBackground";
import { updateColorWeak } from "@mfish/core/logics/theme/UpdateColorWeak";
import { updateGrayMode } from "@mfish/core/logics/theme/UpdateGrayMode";
import { useAppStore } from "@mfish/stores/modules";
import { ProjectConfig } from "@mfish/types/src/type/config";
import { changeTheme } from "@mfish/core/logics/theme/UpdateTheme";
import { updateDarkTheme } from "@mfish/core/logics/theme/Dark";
import { useRootSetting } from "@mfish/core/hooks";
import { DeepPartial } from "@mfish/types";
import { saveSysConfig } from "@/api/sys/SysConfig";
import { unref } from "vue";

export function baseHandler(event: HandlerEnum, value: any) {
  const appStore = useAppStore();
  const config = handler(event, value);
  appStore.setProjectConfig(config);
  if (event === HandlerEnum.CHANGE_THEME || event === HandlerEnum.CHANGE_LAYOUT) {
    updateHeaderBgColor();
    updateSidebarBgColor();
  }
  saveSysConfig({ config: JSON.stringify(unref(appStore.getProjectConfig)), type: 0 }, false).then();
}

export function handler(event: HandlerEnum, value: any): DeepPartial<ProjectConfig> {
  const appStore = useAppStore();

  const { getThemeColor, getDarkMode } = useRootSetting();
  switch (event) {
    case HandlerEnum.CHANGE_LAYOUT: {
      const { mode, type, split } = value;
      const splitOpt = split === undefined ? { split } : {};

      return {
        menuSetting: {
          mode,
          type,
          collapsed: false,
          show: true,
          hidden: false,
          ...splitOpt
        }
      };
    }

    case HandlerEnum.CHANGE_THEME_COLOR: {
      if (getThemeColor.value === value) {
        return {};
      }
      changeTheme(value).then();

      return { themeColor: value };
    }

    case HandlerEnum.CHANGE_THEME: {
      if (getDarkMode.value === value) {
        return {};
      }
      updateDarkTheme(value).then();

      return {};
    }

    case HandlerEnum.MENU_HAS_DRAG: {
      return { menuSetting: { canDrag: value } };
    }

    case HandlerEnum.MENU_ACCORDION: {
      return { menuSetting: { accordion: value } };
    }

    case HandlerEnum.MENU_TRIGGER: {
      return { menuSetting: { trigger: value } };
    }

    case HandlerEnum.MENU_TOP_ALIGN: {
      return { menuSetting: { topMenuAlign: value } };
    }

    case HandlerEnum.MENU_COLLAPSED: {
      return { menuSetting: { collapsed: value } };
    }

    case HandlerEnum.MENU_WIDTH: {
      return { menuSetting: { menuWidth: value } };
    }

    case HandlerEnum.MENU_SHOW_SIDEBAR: {
      return { menuSetting: { show: value } };
    }

    case HandlerEnum.MENU_COLLAPSED_SHOW_TITLE: {
      return { menuSetting: { collapsedShowTitle: value } };
    }

    case HandlerEnum.MENU_THEME: {
      updateSidebarBgColor(value);
      return { menuSetting: { bgColor: value } };
    }

    case HandlerEnum.MENU_SPLIT: {
      return { menuSetting: { split: value } };
    }

    case HandlerEnum.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE: {
      return { menuSetting: { closeMixSidebarOnChange: value } };
    }

    case HandlerEnum.MENU_FIXED: {
      return { menuSetting: { fixed: value } };
    }

    case HandlerEnum.MENU_TRIGGER_MIX_SIDEBAR: {
      return { menuSetting: { mixSideTrigger: value } };
    }

    case HandlerEnum.MENU_FIXED_MIX_SIDEBAR: {
      return { menuSetting: { mixSideFixed: value } };
    }

    // ============transition==================
    case HandlerEnum.OPEN_PAGE_LOADING: {
      appStore.setPageLoading(false);
      return { transitionSetting: { openPageLoading: value } };
    }

    case HandlerEnum.ROUTER_TRANSITION: {
      return { transitionSetting: { basicTransition: value } };
    }

    case HandlerEnum.OPEN_ROUTE_TRANSITION: {
      return { transitionSetting: { enable: value } };
    }

    case HandlerEnum.OPEN_PROGRESS: {
      return { transitionSetting: { openNProgress: value } };
    }
    // ============root==================

    case HandlerEnum.LOCK_TIME: {
      return { lockTime: value };
    }

    case HandlerEnum.FULL_CONTENT: {
      return { fullContent: value };
    }

    case HandlerEnum.CONTENT_MODE: {
      return { contentMode: value };
    }

    case HandlerEnum.SHOW_BREADCRUMB: {
      return { showBreadCrumb: value };
    }

    case HandlerEnum.SHOW_BREADCRUMB_ICON: {
      return { showBreadCrumbIcon: value };
    }

    case HandlerEnum.GRAY_MODE: {
      updateGrayMode(value);
      return { grayMode: value };
    }

    case HandlerEnum.SHOW_FOOTER: {
      return { showFooter: value };
    }

    case HandlerEnum.COLOR_WEAK: {
      updateColorWeak(value);
      return { colorWeak: value };
    }

    case HandlerEnum.SHOW_LOGO: {
      return { showLogo: value };
    }

    // ============tabs==================
    case HandlerEnum.TABS_SHOW_QUICK: {
      return { multiTabsSetting: { showQuick: value } };
    }

    case HandlerEnum.TABS_SHOW: {
      return { multiTabsSetting: { show: value } };
    }

    case HandlerEnum.TABS_SHOW_REDO: {
      return { multiTabsSetting: { showRedo: value } };
    }

    case HandlerEnum.TABS_SHOW_FOLD: {
      return { multiTabsSetting: { showFold: value } };
    }

    // ============header==================
    case HandlerEnum.HEADER_THEME: {
      updateHeaderBgColor(value);
      return { headerSetting: { bgColor: value } };
    }

    case HandlerEnum.HEADER_SEARCH: {
      return { headerSetting: { showSearch: value } };
    }

    case HandlerEnum.HEADER_FIXED: {
      return { headerSetting: { fixed: value } };
    }

    case HandlerEnum.HEADER_SHOW: {
      return { headerSetting: { show: value } };
    }
    default: {
      return {};
    }
  }
}
