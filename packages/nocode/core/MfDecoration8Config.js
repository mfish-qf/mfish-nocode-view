import { defineComponent as o, createBlock as e, openBlock as t, normalizeClass as r, unref as n, withCtx as s, createVNode as i, createTextVNode as a } from "vue";
import { Checkbox as c } from "ant-design-vue";
import f from "./MfDecorationConfig.js";
import { useDesign as m } from "@mfish/core/hooks";
import { u as p, _ as d } from "./index.js";
const u = d(o({ __name: "MfDecoration8Config", setup(o2) {
  const { prefixCls: d2 } = m("decoration2-config"), u2 = p();
  return (o3, m2) => (t(), e(f, { class: r(n(d2)) }, { default: s(() => [i(n(c), { checked: n(u2).getCurConfigComponent.chart.options.reverse, "onUpdate:checked": m2[0] || (m2[0] = (o4) => n(u2).getCurConfigComponent.chart.options.reverse = o4) }, { default: s(() => m2[1] || (m2[1] = [a(" 是否反转", -1)])), _: 1, __: [1] }, 8, ["checked"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-0e946656"]]);
export {
  u as default
};
