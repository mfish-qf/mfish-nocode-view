import { addClass, hasClass, removeClass } from "@core/utils/DomUtils.ts";
import { changeTheme } from "./UpdateTheme.ts";
import { useAppStore } from "@mfish/stores/modules";
import { APP_DARK_MODE_KEY } from "@core/enums";

export async function updateDarkTheme(mode: string = "light") {
  const mainHtml = document.querySelector("#mainHtml");
  if (!mainHtml) {
    return;
  }
  const hasDarkClass = hasClass(mainHtml, "dark");
  const color = useAppStore().getProjectConfig.themeColor;
  changeTheme(color).then();
  if (mode === "dark") {
    //@ts-ignore 忽略属性不存在的错误
    mainHtml.dataset.theme = "dark";
    if (!hasDarkClass) {
      addClass(mainHtml, "dark");
    }
  } else {
    //@ts-ignore 忽略属性不存在的错误
    mainHtml.dataset.theme = "light";
    if (hasDarkClass) {
      removeClass(mainHtml, "dark");
    }
  }
  localStorage.setItem(APP_DARK_MODE_KEY, mode);
}
