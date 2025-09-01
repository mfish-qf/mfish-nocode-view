import { colorIsDark, darken, lighten, rgbToHex } from "@core/utils/Color.ts";
import { useAppStore } from "@mfish/stores/modules";
import { ThemeEnum } from "@core/enums";
import { setCssVar } from "./Util.ts";

const HEADER_BG_COLOR_VAR = "--header-bg-color";
const HEADER_COLOR = "--header-color";
const HEADER_BG_HOVER_COLOR_VAR = "--header-bg-hover-color";

const SIDER_BG_COLOR = "--sider-bg-color";
const SIDER_DARKEN_BG_COLOR = "--sider-darken-bg-color";
const SIDER_LIGHTEN_BG_COLOR = "--sider-lighten-bg-color";

/**
 * Change the background color of the top header
 * @param color
 */
export function updateHeaderBgColor(color?: string) {
  const appStore = useAppStore();
  const darkMode = appStore.getDarkMode === ThemeEnum.DARK;
  if (!color) {
    color = appStore.getHeaderSetting.bgColor;
  }
  if (darkMode) {
    color = "#151515";
  }
  // bg color
  setCssVar(HEADER_BG_COLOR_VAR, color);
  color = calcLinearColor(color);
  // 计算当前头色系偏深色 还是偏浅色
  const isDark = colorIsDark(color);
  let hoverColor = darken(color, 6);
  // 为头部菜单时强制设置字体颜色，判断当前背景为深色时候设置浅色字体
  if (isDark) {
    hoverColor = lighten(color, 10);
    setCssVar(HEADER_COLOR, "#E6EDF3");
  } else {
    setCssVar(HEADER_COLOR, "#1F2328");
  }
  // 设置头部组件鼠标移入颜色
  setCssVar(HEADER_BG_HOVER_COLOR_VAR, hoverColor);
  appStore.setProjectConfig({
    headerSetting: {
      theme: isDark || darkMode ? ThemeEnum.DARK : ThemeEnum.LIGHT
    }
  });
}

/**
 * Change the background color of the left menu
 * @param color  bg color
 */
export function updateSidebarBgColor(color?: string) {
  const appStore = useAppStore();
  const darkMode = appStore.getDarkMode === ThemeEnum.DARK;
  if (!color) {
    color = appStore.getMenuSetting.bgColor;
  }
  if (darkMode) {
    color = "#212121";
  }
  setCssVar(SIDER_BG_COLOR, color);
  color = calcLinearColor(color);
  setCssVar(SIDER_DARKEN_BG_COLOR, darken(color, 3));
  setCssVar(SIDER_LIGHTEN_BG_COLOR, lighten(color, 2));
  const isLight = !colorIsDark(color);
  // 如果是亮色且不是深色模式，皮肤设置为亮
  appStore.setProjectConfig({
    menuSetting: {
      theme: isLight && !darkMode ? ThemeEnum.LIGHT : ThemeEnum.DARK
    }
  });
}

export function calcLinearColor(color: string) {
  //如果是渐变色取第一个颜色进行计算
  const isGradient = color?.startsWith("linear-gradient");
  if (isGradient) {
    const colors = color?.match(/(?<=linear-gradient.*?)(rgba\(.*?\))/g);
    if (colors && colors.length > 0) {
      color = rgbToHex(colors[0]);
    }
  }
  return color;
}
