/**
 * @description: 环境变量通用方法
 * @author: mfish
 * @date: 2022/10/9 11:43
 */
import { warn } from "@/utils/Log";
import { GlobEnvConfig } from "#/config";
import pkg from "../../package.json";

const getVariableName = (title: string) => {
  function strToHex(str: string) {
    if (!str) return;
    const result: string[] = [];
    for (let i = 0; i < str.length; ++i) {
      const hex = str.codePointAt(i)?.toString(16);
      result.push(`000${hex}`.slice(-4));
    }
    return result.join("").toUpperCase();
  }
  return `__PRODUCTION__${strToHex(title) || "__APP"}__CONF__`.toUpperCase().replaceAll(/\s/g, "");
};

export function getAppEnvConfig() {
  const ENV_NAME = getVariableName(import.meta.env.VITE_GLOB_APP_TITLE);
  // 获取全局配置(打包时将独立提取配置)
  const ENV = (import.meta.env.DEV
    ? (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig;

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_LOGIN_TYPE,
    VITE_GLOB_OAUTH2_URL,
    VITE_GLOB_OAUTH2_REDIRECT_URI,
    VITE_GLOB_GITEE_CLIENT_ID,
    VITE_GLOB_GITEE_REDIRECT_URI,
    VITE_GLOB_GITHUB_CLIENT_ID,
    VITE_GLOB_GITHUB_REDIRECT_URI
  } = ENV;

  if (!/^[\s_a-z]*$/i.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`
    );
  }

  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_LOGIN_TYPE,
    VITE_GLOB_OAUTH2_URL,
    VITE_GLOB_OAUTH2_REDIRECT_URI,
    VITE_GLOB_GITEE_CLIENT_ID,
    VITE_GLOB_GITEE_REDIRECT_URI,
    VITE_GLOB_GITHUB_CLIENT_ID,
    VITE_GLOB_GITHUB_REDIRECT_URI
  };
}

export function getCommonStoragePrefix() {
  return `${getAppEnvConfig()}__${getEnv()}`.toUpperCase();
}

// 根据版本生成换成key
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}__${pkg.version}__`.toUpperCase();
}

// 获取当前环境
export function getEnv(): string {
  return import.meta.env.MODE;
}

// 是否开发模式
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

// 是否生成模式
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}
