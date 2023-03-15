/**
 * Application configuration
 */
import type { ProjectConfig } from "/#/config";
import projectSetting from "/@/settings/ProjectSetting";
import { updateHeaderBgColor, updateSidebarBgColor } from "/@/logics/theme/UpdateBackground";
import { updateColorWeak } from "/@/logics/theme/UpdateColorWeak";
import { updateGrayMode } from "/@/logics/theme/UpdateGrayMode";
import { updateDarkTheme } from "/@/logics/theme/Dark";
import { changeTheme } from "/@/logics/theme";
import { useAppStore } from "/@/store/modules/App";
import { getCommonStoragePrefix, getStorageShortName } from "/@/utils/Env";
import { ThemeEnum } from "/@/enums/AppEnum";
import { getSysConfig } from "/@/api/sys/SysConfig";
import { useUserStoreWithOut } from "/@/store/modules/User";
import { sleep } from "/@/utils/Utils";

export async function initAppConfigStore() {
  const userStore = useUserStoreWithOut();
  let token = userStore.getToken;
  while (!token) {
    token = userStore.getToken;
    await sleep(100);
  }
  setAppConfigStore().then();
}


// 初始化项目配置
async function setAppConfigStore() {
  let projCfg: ProjectConfig;
  const sysConfig = await getSysConfig();
  if (sysConfig) {
    projCfg = JSON.parse(sysConfig.config) as ProjectConfig;
  } else {
    projCfg = projectSetting;
  }
  changeAppConfig(projCfg);
}

export function changeAppConfig(projCfg: ProjectConfig) {
  const appStore = useAppStore();
  const darkMode = appStore.getDarkMode;
  const {
    colorWeak,
    grayMode,
    themeColor,
    headerSetting: { bgColor: headerBgColor } = {},
    menuSetting: { bgColor } = {}
  } = projCfg;
  try {
    if (themeColor) {
      changeTheme(themeColor).then();
    }
    grayMode && updateGrayMode(grayMode);
    colorWeak && updateColorWeak(colorWeak);
  } catch (error) {
    console.log(error);
  }
  appStore.setProjectConfig(projCfg);
  // init dark mode
  updateDarkTheme(darkMode).then();
  if (darkMode === ThemeEnum.DARK) {
    updateHeaderBgColor();
    updateSidebarBgColor();
  } else {
    headerBgColor && updateHeaderBgColor(headerBgColor);
    bgColor && updateSidebarBgColor(bgColor);
  }

  setTimeout(() => {
    clearObsoleteStorage();
  }, 16);
}

/**
 * As the version continues to iterate, there will be more and more cache keys stored in localStorage.
 * This method is used to delete useless keys
 */
export function clearObsoleteStorage() {
  const commonPrefix = getCommonStoragePrefix();
  const shortPrefix = getStorageShortName();

  [localStorage, sessionStorage].forEach((item: Storage) => {
    Object.keys(item).forEach((key) => {
      if (key && key.startsWith(commonPrefix) && !key.startsWith(shortPrefix)) {
        item.removeItem(key);
      }
    });
  });
}
