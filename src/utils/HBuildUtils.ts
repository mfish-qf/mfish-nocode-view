import { h } from "vue";
import { JsonPreview } from "/@/components/general/CodeEditor";

/**
 * @description: vue通过h动态创建组件
 * @author: mfish
 * @date: 2023/2/28 21:03
 */
export function buildJsonPreview(data) {
  if (data === undefined || data === null || data === "" || (!data.startsWith("{") && !data.startsWith("["))) {
    return h("div", data);
  }
  try {
    const json = JSON.parse(data);
    return h(JsonPreview, { data: json });
  } catch (e) {
    return h("div", data);
  }
}