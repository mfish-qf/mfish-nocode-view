import { defineComponent as t, resolveComponent as e, createBlock as o, openBlock as n, normalizeClass as a, unref as i, withCtx as r, createElementVNode as c, createVNode as s, createTextVNode as p } from "vue";
import { S as u } from "./StyleConfig.js";
import { useDesign as f } from "@mfish/core/hooks";
import { FileUp as l } from "@mfish/core/components/FileUpDown";
import { u as m, _ as d } from "./index.js";
import { Checkbox as g } from "ant-design-vue";
const C = d(t({ __name: "MfPictureConfig", setup(t2) {
  const { prefixCls: d2 } = f("picture-config"), C2 = m();
  function h(t3, e2) {
    e2 && e2.length > 0 && (C2.getCurConfigComponent.chart.data.dataSet.key = e2[0].fileKey);
  }
  function v() {
    C2.getCurConfigComponent.chart.data.dataSet.key = "";
  }
  return (t3, f2) => {
    const m2 = e("AInput");
    return n(), o(u, { class: a(i(d2)) }, { default: r(() => [f2[3] || (f2[3] = c("div", { class: "title" }, "图片", -1)), s(i(l), { "file-keys": i(C2).getCurConfigComponent.chart.data.dataSet.key, accepts: ".jpg,.jpeg,.png,.svg", "button-text": "上传图片", "max-count": 1, "is-pic": true, onSuccess: h, onRemove: v }, null, 8, ["file-keys"]), f2[4] || (f2[4] = c("div", { class: "title" }, "图片描述", -1)), s(m2, { value: i(C2).getCurConfigComponent.chart.data.dataSet.alt, "onUpdate:value": f2[0] || (f2[0] = (t4) => i(C2).getCurConfigComponent.chart.data.dataSet.alt = t4), "show-count": "", maxlength: 50 }, null, 8, ["value"]), s(i(g), { checked: i(C2).getCurConfigComponent.chart.options.preview, "onUpdate:checked": f2[1] || (f2[1] = (t4) => i(C2).getCurConfigComponent.chart.options.preview = t4) }, { default: r(() => f2[2] || (f2[2] = [p(" 开启预览", -1)])), _: 1, __: [2] }, 8, ["checked"])]), _: 1, __: [3, 4] }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-de1c2abf"]]);
export {
  C as default
};
