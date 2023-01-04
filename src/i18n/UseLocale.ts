/**
 * @description: 多语言操作
 * @author: mfish
 * @date: 2022/10/9 17:12
 */
import { LocaleType } from "/#/config";
import { i18n } from "./SetupI18n";
import { useLocaleStoreWithOut } from "/@/store/modules/I18n";
import { unref, computed } from "vue";
import { loadLocalePool, setHtmlPageLang } from "./Helper";

interface LangModule {
  message: Recordable;
  dateLocale: Recordable;
  dateLocaleName: string;
}

function setI18nLanguage(locale: LocaleType) {
  const localeStore = useLocaleStoreWithOut();
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
  localeStore.setLocaleInfo({ locale });
  setHtmlPageLang(locale);
}

export function useLocale() {
  const localeStore = useLocaleStoreWithOut();
  const getLocale = computed(() => localeStore.getLocale);
  const getShowLocalePicker = computed(() => localeStore.getShowPicker);
  const getAntdLocale = computed((): any => {
    return i18n.global.getLocaleMessage(unref(getLocale))?.antdLocale ?? {};
  });

  // 切换语言将更改useI18n的区域设置并提交配置修改
  async function changeLocale(locale: LocaleType) {
    const globalI18n = i18n.global;
    const currentLocale = unref(globalI18n.locale);
    if (currentLocale === locale) {
      return locale;
    }
    if (loadLocalePool.includes(locale)) {
      setI18nLanguage(locale);
      return locale;
    }
    const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
    if (!langModule) return;
    const { message } = langModule;
    globalI18n.setLocaleMessage(locale, message);
    loadLocalePool.push(locale);
    setI18nLanguage(locale);
    return locale;
  }

  return {
    getLocale,
    getShowLocalePicker,
    changeLocale,
    getAntdLocale
  };
}