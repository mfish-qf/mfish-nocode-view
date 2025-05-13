import { defineComponent as o, createBlock as t, openBlock as e, normalizeClass as i, unref as s, withCtx as r, createElementVNode as n, createVNode as a } from "vue";
import m from "./MfDecorationConfig.js";
import { useDesign as p } from "@mfish/core/hooks";
import { u as c, h as f, _ as l } from "./index.js";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as u } from "./TitleConfig.js";
const d = l(o({ __name: "MfDecoration7Config", setup(o2) {
  const { prefixCls: l2 } = p("decoration7-config"), d2 = c();
  return (o3, p2) => (e(), t(m, { class: i(s(l2)) }, { default: r(() => [p2[1] || (p2[1] = n("div", { class: "title" }, "标题", -1)), a(s(f), { value: s(d2).getCurConfigComponent.chart.options.title, "onUpdate:value": p2[0] || (p2[0] = (o4) => s(d2).getCurConfigComponent.chart.options.title = o4), "is-number": false, placeholder: "标题内容" }, null, 8, ["value"]), a(u)]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-2a6938b0"]]);
export {
  d as default
};
