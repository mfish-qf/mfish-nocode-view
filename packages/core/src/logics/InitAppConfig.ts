/**
 * Application configuration
 */
import type { ProjectConfig } from "@mfish/types/src/type/config";
import projectSetting from "@core/settings/ProjectSetting.ts";
import { updateHeaderBgColor, updateSidebarBgColor } from "@core/logics/theme/UpdateBackground.ts";
import { updateColorWeak } from "@core/logics/theme/UpdateColorWeak.ts";
import { updateGrayMode } from "@core/logics/theme/UpdateGrayMode.ts";
import { updateDarkTheme } from "@core/logics/theme/Dark.ts";
import { changeTheme } from "@core/logics/theme/UpdateTheme.ts";
import { getCommonStoragePrefix, getStorageShortName } from "@core/utils/Env.ts";
import { ThemeEnum } from "@core/enums";
import { getSysConfig } from "@/api/sys/SysConfig.ts";
import { useAppStore, useTableSettingStore, useUserStoreWithOut } from "@mfish/stores/modules";
import { sleep } from "@core/utils/Utils.ts";

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
    if (sysConfig.type === 1 && sysConfig && sysConfig.config) {
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
