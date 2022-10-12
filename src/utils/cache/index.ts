import { getStorageShortName } from "/@/utils/Env";
import { createStorage as create, CreateStorageParams } from "./StorageCache";
import { enableStorageEncryption } from "/@/settings/EncryptionSetting";
import { DEFAULT_CACHE_TIME } from "/@/settings/EncryptionSetting";

export type Options = Partial<CreateStorageParams>;

const createOptions = (storage: Storage, options: Options = {}): Options => {
  return {
    //调试模式下不加密
    hasEncrypt: enableStorageEncryption,
    storage,
    prefixKey: getStorageShortName(),
    ...options
  };
};

export const WebStorage = create(createOptions(sessionStorage));

export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
  return create(createOptions(storage, options));
};

export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
};

export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
};

export default WebStorage;
