/**
 * @description: 国际化缓存
 * @author: mfish
 * @date: 2022/10/9 17:16
 */
import type { LocaleSetting, LocaleType } from "@mfish/types/src/type/config";
import { defineStore } from "pinia";
import { store } from "../index";
import { LOCALE_KEY } from "@mfish/core/enums";
import { createLocalStorage } from "@mfish/core/src/utils/cache";
import { localeSetting } from "@mfish/core/src/settings/I18nSetting";

const ls = createLocalStorage();
const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

interface LocaleState {
  localInfo: LocaleSetting;
}

export const useLocaleStore = defineStore("app-locale", {
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting
  }),
  getters: {
    getShowPicker(): boolean {
      return !!this.localInfo?.showPicker;
    },
    getLocale(): LocaleType {
      return this.localInfo?.locale ?? "zh_CN";
    }
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
      ls.set(LOCALE_KEY, this.localInfo);
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo
      });
    }
  }
});

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
