import type { LocaleType } from "@mfish/types/src/type/config";
import { set } from "lodash-es";
import { Recordable } from "@mfish/types";

export const loadLocalePool: LocaleType[] = [];

export function setHtmlPageLang(locale: LocaleType) {
  document.querySelector("html")?.setAttribute("lang", locale);
}

export function setLoadLocalePool(cb: (loadLocalePool: LocaleType[]) => void) {
  cb(loadLocalePool);
}

export function genMessage(langMap: Record<string, any>, prefix = "lang") {
  const obj: Recordable = {};
  Object.keys(langMap).forEach((path) => {
    const langFileModule = langMap[path].default;
    let fileName = path.replace(`./${prefix}/`, "").replace(/^\.\//, "");
    const lastIndex = fileName.lastIndexOf(".");
    fileName = fileName.slice(0, Math.max(0, lastIndex));
    const keyList: string[] = fileName.split("/");
    const moduleName = keyList.shift()?.toLowerCase();
    const objKey = keyList.join(".").toLowerCase();

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}
