import { BasicKeys, Persistent } from "../cache/Persistent";
import { CacheTypeEnum, TOKEN_KEY } from "../../enums";
import projectSetting from "../../settings/ProjectSetting";

const { permissionCacheType } = projectSetting;
const isLocal = permissionCacheType === CacheTypeEnum.LOCAL;

export function getToken<T>() {
  return getAuthCache<T>(TOKEN_KEY);
}

export function getAuthCache<T>(key: BasicKeys | string) {
  const fn = isLocal ? Persistent.getLocal : Persistent.getSession;
  return fn(key) as T;
}

export function setAuthCache(key: BasicKeys | string, value: any) {
  const fn = isLocal ? Persistent.setLocal : Persistent.setSession;
  return fn(key, value, true);
}

export function clearAuthCache(immediate = true) {
  const fn = isLocal ? Persistent.clearLocal : Persistent.clearSession;
  return fn(immediate);
}
