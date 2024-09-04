import { addClass, hasClass, removeClass } from "@/utils/DomUtils";
import { changeTheme } from "@/logics/theme/UpdateTheme";
import { useAppStore } from "@/store/modules/App";
import { APP_DARK_MODE_KEY } from "@/enums/CacheEnum";

export async function updateDarkTheme(mode: string | null = "light") {
  const mainHtml = document.querySelector("#mainHtml");
  if (!mainHtml) {
    return;
  }
  const hasDarkClass = hasClass(mainHtml, "dark");
  const color = useAppStore().getProjectConfig.themeColor;
  changeTheme(color).then();
  if (mode === "dark") {
    mainHtml.dataset.theme = "dark";
    if (!hasDarkClass) {
      addClass(mainHtml, "dark");
    }
  } else {
    mainHtml.dataset.theme = "light";
    if (hasDarkClass) {
      removeClass(mainHtml, "dark");
    }
  }
  localStorage.setItem(APP_DARK_MODE_KEY, mode);
}
