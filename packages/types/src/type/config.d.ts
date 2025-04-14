import {
  ContentEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  MenuTypeEnum,
  MenuModeEnum,
  TriggerEnum,
  MixSidebarTriggerEnum,
  CacheTypeEnum
} from "@mfish/core/enums";

/**
 * @description: 配置定义
 * @author: mfish
 * @date: 2022/10/8 17:42
 */
//全局环境配置
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // 登录类型
  VITE_GLOB_LOGIN_TYPE: string;
  // oauth2登录地址
  VITE_GLOB_OAUTH2_URL?: string;
  // oauth2回调地址
  VITE_GLOB_OAUTH2_REDIRECT_URI?: string;
  // gitee客户端id
  VITE_GLOB_GITEE_CLIENT_ID?: string;
  // gitee回调地址
  VITE_GLOB_GITEE_REDIRECT_URI?: string;
  // github客户端id
  VITE_GLOB_GITHUB_CLIENT_ID?: string;
  // github回调地址
  VITE_GLOB_GITHUB_REDIRECT_URI?: string;
}

//环境配置转换为只读属性提供使用
export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Project abbreviation
  shortName: string;
  // 登录类型
  loginType: string;
  // oauth2登录地址
  oauth2Url?: string;
  // oauth2回调地址
  oauth2RedirectUri?: string;
  // gitee客户端id
  giteeClientId?: string;
  // gitee回调地址
  giteeRedirectUri?: string;
  // github客户端id
  githubClientId?: string;
  // github回调地址
  githubRedirectUri?: string;
}

//国际化类型
export type LocaleType = "zh-CN" | "en" | "ru" | "ja" | "ko";

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

export interface ProjectConfig {
  // Storage location of permission related information
  permissionCacheType: CacheTypeEnum;
  // Whether to show the configuration button
  showSettingButton: boolean;
  // Whether to show the theme switch button
  showDarkModeToggle: boolean;
  // Configure where the button is displayed
  settingButtonPosition: SettingButtonPositionEnum;
  // 浅色深色模式
  darkMode: ThemeEnum;
  // Website gray mode, open for possible mourning dates
  grayMode: boolean;
  // Whether to turn on the color weak mode
  colorWeak: boolean;
  // Theme color
  themeColor: string;

  // The main interface is displayed in full screen, the menu is not displayed, and the top
  fullContent: boolean;
  // content width
  contentMode: ContentEnum;
  // Whether to display the logo
  showLogo: boolean;
  // Whether to show the global footer
  showFooter: boolean;
  // menuType: MenuTypeEnum;
  headerSetting: HeaderSetting;
  // menuSetting
  menuSetting: MenuSetting;
  // Multi-tab settings
  multiTabsSetting: MultiTabsSetting;
  // Animation configuration
  transitionSetting: TransitionSetting;
  // pageLayout whether to enable keep-alive
  openKeepAlive: boolean;
  // Lock screen time
  lockTime: number;
  // Show breadcrumbs
  showBreadCrumb: boolean;
  // Show breadcrumb icon
  showBreadCrumbIcon: boolean;
  // Use error-handler-plugin
  useErrorHandle: boolean;
  // Whether to open back to top
  useOpenBackTop: boolean;
  // Is it possible to embed iframe pages
  canEmbedIFramePage: boolean;
  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: boolean;
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  removeAllHttpPending: boolean;
}

export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;
  // Turn on full screen
  showFullScreen: boolean;
  // Whether to show the lock screen
  useLockPage: boolean;
  // Show document button
  showDoc: boolean;
  // Show message center button
  showNotice: boolean;
  showSearch: boolean;
}

export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  siderHidden: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: "start" | "center" | "end";
  trigger: TriggerEnum;
  accordion: boolean;
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

export interface TransitionSetting {
  // 是否打开页面切换动画
  enable: boolean;
  // 路由切换动画
  basicTransition: RouterTransitionEnum;
  // 是否打开页面切换加载
  openPageLoading: boolean;
  // 是否打开顶部进度条
  openNProgress: boolean;
}

export interface MultiTabsSetting {
  cache: boolean;
  show: boolean;
  showQuick: boolean;
  canDrag: boolean;
  showRedo: boolean;
  showFold: boolean;
}
