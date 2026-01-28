import { defineComponent as e, openBlock as o, createBlock as r, normalizeClass as t, unref as s, withCtx as n, createVNode as c, createTextVNode as f } from "vue";
import { Checkbox as i } from "ant-design-vue";
import a from "./MfBorderConfig.js";
import { useDesign as d } from "@mfish/core/hooks";
import { u as m, _ as p } from "./index.js";
const u = p(e({ __name: "MfBorder4Config", setup(e2) {
  const { prefixCls: p2 } = d("border4-config"), u2 = m();
  return (e3, d2) => (o(), r(a, { class: t(s(p2)) }, { default: n(() => [c(s(i), { checked: s(u2).getCurConfigComponent.chart.options.reverse, "onUpdate:checked": d2[0] || (d2[0] = (e4) => s(u2).getCurConfigComponent.chart.options.reverse = e4) }, { default: n(() => [...d2[1] || (d2[1] = [f(" 是否反转", -1)])]), _: 1 }, 8, ["checked"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-7564c18c"]]);
export {
  u as default
};
