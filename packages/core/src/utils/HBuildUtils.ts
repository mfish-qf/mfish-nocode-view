import { h } from "vue";
import { JsonPreview } from "@core/components/CodeEditor";
import { useRootSetting } from "@core/hooks";

/**
 * @description: vue通过h动态创建组件
 * @author: mfish
 * @date: 2023/2/28 21:03
 */
export function buildJsonPreview(data: any) {
  if (data === undefined || data === null || data === "" || (!data.startsWith("{") && !data.startsWith("["))) {
    return h("div", data);
  }
  const darkMode = useRootSetting().getDarkMode;
  try {
    const json = JSON.parse(data);
    return h(JsonPreview, { data: json, theme: darkMode.value, deep: 2 });
  } catch {
    return h("div", data);
  }
}
