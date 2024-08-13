import { setCssVar } from "@/logics/theme/Util";
import { lighten, darken } from "@/utils/Color";

const MAIN_COLOR = "--main-color";
const MAIN_COLOR_LIGHT = "--main-color-light";
const MAIN_COLOR_DARK = "--main-color-dark";
export async function changeTheme(color: string) {
  setCssVar(MAIN_COLOR, color);
  setCssVar(MAIN_COLOR_LIGHT, lighten(color, 6));
  setCssVar(MAIN_COLOR_DARK, darken(color, 6));
}
