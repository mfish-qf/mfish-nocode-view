import { isDevMode } from "/@/utils/Env";

// 默认缓存时间
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// AES密钥
export const cacheCipher = {
  key: "_11111000001111@",
  iv: "@11111000001111_"
};

// 是否使用AES加密缓存
export const enableStorageEncryption = !isDevMode();
