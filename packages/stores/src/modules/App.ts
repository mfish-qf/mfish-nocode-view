import type {
  ProjectConfig,
  HeaderSetting,
  MenuSetting,
  TransitionSetting,
  MultiTabsSetting
} from "@mfish/types/src/type/config";
import type { BeforeMiniState } from "@mfish/types/src/type/store";
import { defineStore } from "pinia";
import { store } from "../index";
import { RouterTransitionEnum, ThemeEnum } from "@mfish/core/enums";
import { Persistent } from "@mfish/core/src/utils/cache/Persistent";
import { darkMode } from "@mfish/core/src/settings/DesignSetting";
import { resetRouter } from "@mfish/core/src/router";
import { deepMerge } from "@mfish/core/src/utils";
import projectSetting from "@mfish/core/src/settings/ProjectSetting";
import { DeepPartial, TimeoutHandle } from "@mfish/types";

interface AppState {
  // 页面加载状态
  pageLoading: boolean;
  // 项目配置
  projectConfig: ProjectConfig;
  // 当窗口缩小时，记住一些状态，并在恢复窗口时恢复这些状态
  beforeMiniInfo: BeforeMiniState;
}

let timeId: TimeoutHandle;
export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    pageLoading: false,
    projectConfig: JSON.parse(JSON.stringify(projectSetting)),
    beforeMiniInfo: {}
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
    },
    getDarkMode(): ThemeEnum {
      return this.projectConfig.darkMode || darkMode;
    },

    getBeforeMiniInfo(): BeforeMiniState {
      return this.beforeMiniInfo;
    },

    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },

    getHeaderSetting(): HeaderSetting {
      return this.getProjectConfig.headerSetting;
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },
    getTransitionSetting(): TransitionSetting {
      return this.getProjectConfig.transitionSetting || RouterTransitionEnum.FADE_SIDE_LEFT;
    },
    getMultiTabsSetting(): MultiTabsSetting {
      return this.getProjectConfig.multiTabsSetting;
    },
    getThemeColor(): string {
      return this.getProjectConfig.themeColor;
    }
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },

    setDarkMode(mode: ThemeEnum): void {
      this.projectConfig.darkMode = mode;
    },

    setBeforeMiniInfo(state: BeforeMiniState): void {
      this.beforeMiniInfo = state;
    },

    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      const pConfig = JSON.parse(JSON.stringify(this.projectConfig));
      this.projectConfig = deepMerge(pConfig || {}, config);
      // 界面配置已存储到服务端，下面这段存储本地缓存可以根据自己需求放开
      // Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig);
    },

    async resetAllState() {
      resetRouter();
      Persistent.clearAll();
    },
    async setPageLoadingAction(loading: boolean): Promise<void> {
      if (loading) {
        clearTimeout(timeId);
        // Prevent flicker
        timeId = setTimeout(() => {
          this.setPageLoading(loading);
        }, 50);
      } else {
        this.setPageLoading(loading);
        clearTimeout(timeId);
      }
    }
  }
});

// 需要在setup外使用
export function useAppStoreWithOut() {
  return useAppStore(store);
}
