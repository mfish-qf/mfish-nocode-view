import type {
  ProjectConfig,
  HeaderSetting,
  MenuSetting,
  TransitionSetting,
  MultiTabsSetting
} from "/#/config";
import type { BeforeMiniState } from "/#/store";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { ThemeEnum } from "/@/enums/AppEnum";
import { APP_DARK_MODE_KEY_ } from "/@/enums/CacheEnum";
import { Persistent } from "/@/utils/cache/Persistent";
import { darkMode } from "/@/settings/DesignSetting";
import { resetRouter } from "/@/router";
import { deepMerge } from "/@/utils";
import projectSetting from "/@/settings/ProjectSetting";

interface AppState {
  darkMode?: ThemeEnum;
  // 页面加载状态
  pageLoading: boolean;
  // 项目配置
  projectConfig: ProjectConfig;
  // 当窗口缩小时，记住一些状态，并在恢复窗口时恢复这些状态
  beforeMiniInfo: BeforeMiniState;
}

let timeId: TimeoutHandle;
export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
    projectConfig: JSON.parse(JSON.stringify(projectSetting)),
    beforeMiniInfo: {}
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
    },
    getDarkMode(): "light" | "dark" | string {
      return this.darkMode || localStorage.getItem(APP_DARK_MODE_KEY_) || darkMode;
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
      return this.getProjectConfig.transitionSetting;
    },
    getMultiTabsSetting(): MultiTabsSetting {
      return this.getProjectConfig.multiTabsSetting;
    }
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },

    setDarkMode(mode: ThemeEnum): void {
      this.darkMode = mode;
      localStorage.setItem(APP_DARK_MODE_KEY_, mode);
    },

    setBeforeMiniInfo(state: BeforeMiniState): void {
      this.beforeMiniInfo = state;
    },

    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      let pConfig = JSON.parse(JSON.stringify(this.projectConfig));
      this.projectConfig = deepMerge(pConfig || {}, config);
      //界面配置已存储到服务端，下面这段存储本地缓存可以根据自己需求放开
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

//需要在setup外使用
export function useAppStoreWithOut() {
  return useAppStore(store);
}
