export const SIDE_BAR_MINI_WIDTH = 48;
export const SIDE_BAR_SHOW_TIT_MINI_WIDTH = 80;

export enum ContentEnum {
  // auto width
  FULL = "full",
  // fixed width
  FIXED = "fixed"
}

// menu theme enum
export enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system"
}

export enum SettingButtonPositionEnum {
  AUTO = "auto",
  HEADER = "header",
  FIXED = "fixed"
}

// Route switching animation
// 路由切换动画
export enum RouterTransitionEnum {
  FADE = "fade",
  FADE_SIDE_LEFT = "fade-slide-left",
  FADE_SIDE_RIGHT = "fade-slide-right",
  FADE_UP = "fade-up",
  FADE_DOWN = "fade-down",
  FADE_SCALE = "fade-scale",
  ZOOM_FADE = "zoom-fade",
  ZOOM_OUT = "zoom-out"
}
