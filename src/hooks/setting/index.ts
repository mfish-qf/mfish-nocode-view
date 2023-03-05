import type { GlobConfig } from "/#/config";

import { warn } from "/@/utils/Log";
import { getAppEnvConfig } from "/@/utils/Env";

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_LOGIN_TYPE,
    VITE_GLOB_OAUTH2_URL,
    VITE_GLOB_OAUTH2_REDIRECT_URI
  } = getAppEnvConfig();
  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`
    );
  }
  // 采用全局配置
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    loginType: VITE_GLOB_LOGIN_TYPE,
    oauth2Url: VITE_GLOB_OAUTH2_URL,
    oauth2RedirectUri: VITE_GLOB_OAUTH2_REDIRECT_URI
  };
  return glob as Readonly<GlobConfig>;
};
