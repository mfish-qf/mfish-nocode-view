/**
 * @description：配置定义
 * @author     ：qiufeng
 * @date       ：2022/10/8 17:42
 */

//全局环境配置
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}

//环境配置转换为只读属性提供使用
export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
  // Upload url
  uploadUrl?: string;
}

//国际化类型
export type LocaleType = "zh_CN" | "en" | "ru" | "ja" | "ko";

//国际化设置
export interface LocaleSetting {
  showPicker: boolean;
  // 当前语言
  locale: LocaleType;
  // 默认语言
  fallback: LocaleType;
  // 可用语言
  availableLocales: LocaleType[];
}
