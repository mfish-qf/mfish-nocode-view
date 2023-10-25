import { addClass, hasClass, removeClass } from "/@/utils/DomUtils";
import { changeTheme } from "/@/logics/theme/index";
import { useAppStore } from "/@/store/modules/App";

export async function updateDarkTheme(mode: string | null = "light") {
  const mainHtml = document.getElementById("mainHtml");
  if (!mainHtml) {
    return;
  }
  const hasDarkClass = hasClass(mainHtml, "dark");
  const color = useAppStore().getProjectConfig.themeColor;
  changeTheme(color).then();
  if (mode === "dark") {
    mainHtml.setAttribute("data-theme", "dark");
    if (!hasDarkClass) {
      addClass(mainHtml, "dark");
    }
    return;
  }
  mainHtml.setAttribute("data-theme", "light");
  if (hasDarkClass) {
    removeClass(mainHtml, "dark");
  }
}
