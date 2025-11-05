import { defineComponent as t, computed as e, createBlock as o, openBlock as r, unref as s, withCtx as i, createElementVNode as m, normalizeStyle as p, toDisplayString as a } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { a7 as n, a8 as c } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as u } from "./index.vue_vue_type_script_setup_true_lang.js";
const h = t({ name: "MfDecoration11", __name: "index", props: { chart: { type: Object } }, setup(t2) {
  const h2 = t2, f = e(() => n(h2?.chart));
  return (e2, n2) => (r(), o(u, { component: s(c), chart: t2.chart }, { default: i(() => [m("div", { style: p(f.value) }, a(t2.chart?.options.title), 5)]), _: 1 }, 8, ["component", "chart"]));
} });
export {
  h as default
};
