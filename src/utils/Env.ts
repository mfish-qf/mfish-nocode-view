/**
 * @description：环境变量通用方法
 * @author     ：qiufeng
 * @date       ：2022/10/9 11:43
 */
import { warn } from "/@/utils/Log";
import { getConfigFileName } from "../../build/Utils";
import { GlobConfig, GlobEnvConfig } from "/#/config";
import pkg from "../../package.json";

export function getEnvConfig(): Readonly<GlobConfig> {
  const ENV_NAME = getConfigFileName(import.meta.env);
//获取全局配置
  const ENV = (import.meta.env.DEV ? (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig;

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL
  } = ENV;

  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`
    );
  }

  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  };
  return glob as Readonly<GlobConfig>;
}

export function getCommonStoragePrefix() {
  return `${getEnvConfig()}__${getEnv()}`.toUpperCase();
}

// 根据版本生成换成key
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

//获取当前环境
export function getEnv(): string {
  return import.meta.env.MODE;
}

//是否开发模式
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

//是否生成模式
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}