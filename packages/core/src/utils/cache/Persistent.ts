import type { LockInfo } from "@mfish/types/src/type/store";
import type { ProjectConfig } from "@mfish/types/src/type/config";
import type { RouteLocationNormalized } from "vue-router";
import { createLocalStorage, createSessionStorage } from "./index";
import { Memory } from "./Memory";
import {
  APP_LOCAL_CACHE_KEY,
  APP_SESSION_CACHE_KEY,
  LOCK_INFO_KEY,
  MULTIPLE_TABS_KEY,
  PROJ_CFG_KEY,
  REFRESH_TOKEN_KEY,
  TENANT_ID_KEY,
  TOKEN_KEY
} from "../../enums";
import { DEFAULT_CACHE_TIME } from "../../settings/EncryptionSetting";
import { toRaw } from "vue";
import { omit, pick } from "lodash-es";
import { Nullable } from "@mfish/types";

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [TENANT_ID_KEY]: string | number | null | undefined;
  [REFRESH_TOKEN_KEY]: string | null | undefined;
  [LOCK_INFO_KEY]: LockInfo;
  [PROJ_CFG_KEY]: ProjectConfig;
  [MULTIPLE_TABS_KEY]: RouteLocationNormalized[];
}

type LocalStore = BasicStore;

type SessionStore = BasicStore;

export type BasicKeys = keyof BasicStore;
type LocalKeys = keyof LocalStore;
type SessionKeys = keyof SessionStore;

const ls = createLocalStorage();
const ss = createSessionStorage();

const localMemory = new Memory(DEFAULT_CACHE_TIME);
const sessionMemory = new Memory(DEFAULT_CACHE_TIME);

function initPersistentMemory() {
  const localCache = ls.get(APP_LOCAL_CACHE_KEY);
  const sessionCache = ss.get(APP_SESSION_CACHE_KEY);
  localCache && localMemory.resetCache(localCache);
  sessionCache && sessionMemory.resetCache(sessionCache);
}

export const Persistent = {
  getLocal<T>(key: LocalKeys | string) {
    return localMemory.get(key)?.value as Nullable<T>;
  },

  setLocal(key: LocalKeys | string, value: LocalStore[LocalKeys], immediate = false): void {
    localMemory.set(key, toRaw(value));
    immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
  },

  removeLocal(key: LocalKeys | string, immediate = false): void {
    localMemory.remove(key);
    immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
  },

  clearLocal(immediate = false): void {
    localMemory.clear();
    immediate && ls.clear();
  },

  getSession<T>(key: SessionKeys | string) {
    return sessionMemory.get(key)?.value as Nullable<T>;
  },

  setSession(key: SessionKeys | string, value: SessionStore[SessionKeys], immediate = false): void {
    sessionMemory.set(key, toRaw(value));
    immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
  },

  removeSession(key: SessionKeys | string, immediate = false): void {
    sessionMemory.remove(key);
    immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
  },

  clearSession(immediate = false): void {
    sessionMemory.clear();
    immediate && ss.clear();
  },

  clearAll(immediate = false) {
    sessionMemory.clear();
    localMemory.clear();
    if (immediate) {
      ls.clear();
      ss.clear();
    }
  }
};

window.addEventListener("beforeunload", () => {
  // TOKEN_KEY 在登录或注销时已经写入到storage了，此处为了解决同时打开多个窗口时token不同步的问题
  // LOCK_INFO_KEY 在锁屏和解锁时写入，此处也不应修改
  ls.set(APP_LOCAL_CACHE_KEY, {
    ...omit(localMemory.getCache, LOCK_INFO_KEY),
    ...pick(ls.get(APP_LOCAL_CACHE_KEY), [TOKEN_KEY, LOCK_INFO_KEY])
  });
  ss.set(APP_SESSION_CACHE_KEY, {
    ...omit(sessionMemory.getCache, LOCK_INFO_KEY),
    ...pick(ss.get(APP_SESSION_CACHE_KEY), [TOKEN_KEY, LOCK_INFO_KEY])
  });
});

function storageChange(e: any) {
  const { key, newValue, oldValue } = e;

  if (!key) {
    Persistent.clearAll();
    return;
  }

  if (!!newValue && !!oldValue) {
    if (APP_LOCAL_CACHE_KEY === key) {
      Persistent.clearLocal();
    }
    if (APP_SESSION_CACHE_KEY === key) {
      Persistent.clearSession();
    }
  }
}

window.addEventListener("storage", storageChange);

initPersistentMemory();
