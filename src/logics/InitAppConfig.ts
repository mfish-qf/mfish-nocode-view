/**
 * Application configuration
 */
import type { ProjectConfig } from "#/config";
import projectSetting from "@/settings/ProjectSetting";
import { updateHeaderBgColor, updateSidebarBgColor } from "@/logics/theme/UpdateBackground";
import { updateColorWeak } from "@/logics/theme/UpdateColorWeak";
import { updateGrayMode } from "@/logics/theme/UpdateGrayMode";
import { updateDarkTheme } from "@/logics/theme/Dark";
import { changeTheme } from "@/logics/theme/UpdateTheme";
import { useAppStore } from "@/store/modules/App";
import { getCommonStoragePrefix, getStorageShortName } from "@/utils/Env";
import { ThemeEnum } from "@/enums/AppEnum";
import { getSysConfig } from "@/api/sys/SysConfig";
import { useUserStoreWithOut } from "@/store/modules/User";
import { sleep } from "@/utils/Utils";
import { useTableSettingStore } from "@/store/modules/TableSetting";

export async function initAppConfigStore() {
  // 设置本地样式
  changeAppConfig(projectSetting);
  // 获取服务端样式配置
  const userStore = useUserStoreWithOut();

  while (!userStore.getUserInfo) {
    await sleep(300);
  }
  setAppConfigStore().then();
}

// 初始化项目配置
async function setAppConfigStore() {
  const sysConfigs = await getSysConfig();
  if (!sysConfigs || sysConfigs.length === 0) {
    return;
  }
  for (const sysConfig of sysConfigs) {
    if (sysConfig.type === 1) {
      useTableSettingStore().setTableSetting(JSON.parse(sysConfig.config));
    } else if (sysConfig.type === 0) {
      const projCfg: ProjectConfig =
        sysConfig && sysConfig.config ? (JSON.parse(sysConfig.config) as ProjectConfig) : projectSetting;
      changeAppConfig(projCfg);
    }
  }
}

export function changeAppConfig(projCfg: ProjectConfig) {
  const { darkMode, colorWeak, grayMode, themeColor } = projCfg;
  try {
    if (themeColor) {
      changeTheme(themeColor).then();
    }
    grayMode && updateGrayMode(grayMode);
    colorWeak && updateColorWeak(colorWeak);
  } catch (error) {
    console.log(error);
  }
  useAppStore().setProjectConfig(projCfg);
  setDarkTheme(darkMode);
  setTimeout(() => {
    clearObsoleteStorage();
  }, 16);
}

// 设置深色浅色模式
export function setDarkTheme(darkMode: ThemeEnum) {
  updateDarkTheme(darkMode).then();
  updateHeaderBgColor();
  updateSidebarBgColor();
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
