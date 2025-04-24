import { defineComponent as o, createBlock as t, openBlock as e, normalizeClass as n, unref as a, withCtx as i, createElementVNode as r, createTextVNode as s, createVNode as m } from "vue";
import l from "./MfDecorationConfig.js";
import "ant-design-vue";
import { useDesign as u } from "@mfish/core/hooks";
import { u as p, f as c, _ as f } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const h = { class: "title" }, d = { class: "title" }, C = f(o({ __name: "MfDecoration12Config", setup(o2) {
  const { prefixCls: f2 } = u("decoration12-config"), C2 = p();
  return (o3, u2) => (e(), t(l, { class: n(a(f2)) }, { default: i(() => [r("div", h, [u2[2] || (u2[2] = s(" 扫描动画时长 ")), m(a(c), { suffix: "秒", value: a(C2).getCurConfigComponent.chart.options.scanDuration, "onUpdate:value": u2[0] || (u2[0] = (o4) => a(C2).getCurConfigComponent.chart.options.scanDuration = o4), placeholder: "扫描动画时长", min: 1, max: 100, maxlength: 3 }, null, 8, ["value"])]), r("div", d, [u2[3] || (u2[3] = s(" 光晕动画时长 ")), m(a(c), { suffix: "秒", value: a(C2).getCurConfigComponent.chart.options.haloDuration, "onUpdate:value": u2[1] || (u2[1] = (o4) => a(C2).getCurConfigComponent.chart.options.haloDuration = o4), placeholder: "光晕动画时长", min: 1, max: 100, maxlength: 3 }, null, 8, ["value"])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-f33675d5"]]);
export {
  C as default
};
