/**
 * @description: 国际化设置
 * @author: mfish
 * @date: 2022/10/9 17:37
 */
import type { LocaleSetting, LocaleType } from "@mfish/types/src/type/config";

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: "zh-CN",
  EN_US: "en"
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.ZH_CN,
  // Default locale
  fallback: LOCALE.ZH_CN,
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US]
};

// locale list
export const localeList: any[] = [
  {
    text: "简体中文",
    event: LOCALE.ZH_CN
  },
  {
    text: "English",
    event: LOCALE.EN_US
  }
];
