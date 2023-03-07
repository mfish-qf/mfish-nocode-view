import { darkCssIsReady, loadDarkThemeCss } from "@kirklin/vite-plugin-vben-theme/es/client";
import { addClass, hasClass, removeClass } from "/@/utils/DomUtils";

export async function updateDarkTheme(mode: string | null = "light") {
  const mainHtml = document.getElementById("mainHtml");
  if (!mainHtml) {
    return;
  }
  const hasDarkClass = hasClass(mainHtml, "dark");
  if (mode === "dark") {
    if (import.meta.env.PROD && !darkCssIsReady) {
      await loadDarkThemeCss();
    }
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
