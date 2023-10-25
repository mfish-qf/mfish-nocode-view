import { setCssVar } from "/@/logics/theme/Util";
import { ThemeEnum } from "/@/enums/AppEnum";
import { useAppStore } from "/@/store/modules/App";
import { primaryColor } from "../../../build/config/ThemeConfig";
import { lighten, darken } from "/@/utils/Color";

const MAIN_COLOR = "--main-color";
const MAIN_COLOR_LIGHT = "--main-color-light";
const MAIN_COLOR_DARK = "--main-color-dark";
export async function changeTheme(color: string) {
  if (useAppStore().getDarkMode === ThemeEnum.DARK) {
    color = primaryColor;
  }
  setCssVar(MAIN_COLOR, color);
  setCssVar(MAIN_COLOR_LIGHT, lighten(color, 15));
  setCssVar(MAIN_COLOR_DARK, darken(color, 15));
}
