import { defineComponent as o, createBlock as e, openBlock as t, normalizeClass as r, unref as s, withCtx as n, createVNode as i, createElementVNode as a, createTextVNode as m } from "vue";
import { Checkbox as p } from "ant-design-vue";
import c from "./MfBorderConfig.js";
import { useDesign as f } from "@mfish/core/hooks";
import { u, e as d, _ as l } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const h = { class: "title" }, C = l(o({ __name: "MfBorder8Config", setup(o2) {
  const { prefixCls: l2 } = f("border8-config"), C2 = u();
  return (o3, f2) => (t(), e(c, { class: r(s(l2)) }, { default: n(() => [i(s(p), { checked: s(C2).getCurConfigComponent.chart.options.reverse, "onUpdate:checked": f2[0] || (f2[0] = (o4) => s(C2).getCurConfigComponent.chart.options.reverse = o4) }, { default: n(() => f2[2] || (f2[2] = [m(" 是否反转", -1)])), _: 1, __: [2] }, 8, ["checked"]), a("div", h, [f2[3] || (f2[3] = m(" 单次动画时长 ", -1)), i(s(d), { suffix: "秒", style: { width: "120px" }, value: s(C2).getCurConfigComponent.chart.options.duration, "onUpdate:value": f2[1] || (f2[1] = (o4) => s(C2).getCurConfigComponent.chart.options.duration = o4), placeholder: "单次动画时长", min: 1, max: 100, maxlength: 3 }, null, 8, ["value"])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-649ee8d3"]]);
export {
  C as default
};
