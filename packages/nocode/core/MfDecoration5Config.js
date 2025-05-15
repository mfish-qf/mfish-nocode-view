import { defineComponent as o, createBlock as t, openBlock as e, normalizeClass as i, unref as r, withCtx as s, createElementVNode as n, createTextVNode as a, createVNode as m } from "vue";
import f from "./MfDecorationConfig.js";
import "ant-design-vue";
import { useDesign as p } from "@mfish/core/hooks";
import { u as c, i as u, _ as l } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const d = { class: "title" }, h = l(o({ __name: "MfDecoration5Config", setup(o2) {
  const { prefixCls: l2 } = p("decoration5-config"), h2 = c();
  return (o3, p2) => (e(), t(f, { class: i(r(l2)) }, { default: s(() => [n("div", d, [p2[1] || (p2[1] = a(" 单次动画时长 ")), m(r(u), { suffix: "秒", value: r(h2).getCurConfigComponent.chart.options.duration, "onUpdate:value": p2[0] || (p2[0] = (o4) => r(h2).getCurConfigComponent.chart.options.duration = o4), placeholder: "单次动画时长", min: 1, max: 100, maxlength: 3 }, null, 8, ["value"])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-1606d90f"]]);
export {
  h as default
};
