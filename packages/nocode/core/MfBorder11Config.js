import { defineComponent as o, createBlock as e, openBlock as t, normalizeClass as i, unref as r, withCtx as s, createElementVNode as n, createVNode as a } from "vue";
import l from "./MfBorderConfig.js";
import { useDesign as m } from "@mfish/core/hooks";
import { u as p, e as u, _ as f } from "./index.js";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const c = f(o({ __name: "MfBorder11Config", setup(o2) {
  const { prefixCls: f2 } = m("border11-config"), c2 = p();
  return (o3, m2) => (t(), e(l, { class: i(r(f2)) }, { default: s(() => [m2[2] || (m2[2] = n("div", { class: "title" }, "标题", -1)), a(r(u), { value: r(c2).getCurConfigComponent.chart.options.title, "onUpdate:value": m2[0] || (m2[0] = (o4) => r(c2).getCurConfigComponent.chart.options.title = o4), "is-number": false, placeholder: "标题内容" }, null, 8, ["value"]), m2[3] || (m2[3] = n("div", { class: "title" }, "标题宽度", -1)), a(r(u), { suffix: "px", value: r(c2).getCurConfigComponent.chart.options.titleWidth, "onUpdate:value": m2[1] || (m2[1] = (o4) => r(c2).getCurConfigComponent.chart.options.titleWidth = o4), placeholder: "标题宽度", min: 50, max: 1e4, maxlength: 5 }, null, 8, ["value"])]), _: 1, __: [2, 3] }, 8, ["class"]));
} }), [["__scopeId", "data-v-b381667b"]]);
export {
  c as default
};
