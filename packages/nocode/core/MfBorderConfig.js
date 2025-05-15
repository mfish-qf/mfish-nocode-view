import { defineComponent as o, ref as e, watch as t, createBlock as n, openBlock as r, normalizeClass as i, unref as s, withCtx as a, createElementVNode as m, createVNode as f, renderSlot as u } from "vue";
import { u as l, o as p, _ as c } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign as C } from "@mfish/core/hooks";
import "ant-design-vue";
import "@mfish/core/utils/Is";
import d from "./MfDecorationConfig.js";
const g = c(o({ __name: "MfBorderConfig", setup(o2) {
  const { prefixCls: c2 } = C("border-config"), g2 = e(), h = l();
  function v(o3) {
    _(o3), g2.value = o3;
  }
  function _(o3) {
    h.getCurConfigComponent.chart.options.backgroundColor = o3;
  }
  return t(() => h.getCurConfigComponent, (o3) => {
    o3 && (g2.value = h.getCurConfigComponent.chart.options.backgroundColor);
  }, { immediate: true }), (o3, e2) => (r(), n(d, { class: i(s(c2)) }, { default: a(() => [e2[0] || (e2[0] = m("div", { class: "title" }, "填充色", -1)), f(s(p), { placeholder: "设置填充颜色，格式#FFFFFF", type: 1, value: g2.value, onConfirmChange: v, onInputChange: _ }, null, 8, ["value"]), u(o3.$slots, "default", {}, void 0, true)]), _: 3, __: [0] }, 8, ["class"]));
} }), [["__scopeId", "data-v-87ff2ab3"]]);
export {
  g as default
};
