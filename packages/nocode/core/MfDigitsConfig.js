import { defineComponent as o, ref as t, watch as n, createBlock as e, openBlock as i, normalizeClass as s, unref as r, withCtx as a, createElementVNode as l, createVNode as u } from "vue";
import { useDesign as p } from "@mfish/core/hooks";
import { u as C, M as m, _ as g } from "./index.js";
import { S as c } from "./StyleConfig.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const f = g(o({ __name: "MfDigitsConfig", setup(o2) {
  const g2 = C(), { prefixCls: f2 } = p("digits-config"), d = t(), h = t();
  function v(o3, t2) {
    F(o3, t2), d.value = t2;
  }
  function F(o3, t2) {
    g2.getCurConfigComponent.chart.options.digits = { ...g2.getCurConfigComponent.chart.options.digits, color: t2 };
  }
  function _(o3, t2) {
    I(o3, t2), h.value = t2;
  }
  function I(o3, t2) {
    g2.getCurConfigComponent.chart.options.digits = { ...g2.getCurConfigComponent.chart.options.digits, skeletonColor: t2 };
  }
  return n(() => g2.getCurConfigComponent, (o3) => {
    o3 && (d.value = g2.getCurConfigComponent.chart.options?.digits?.color, h.value = g2.getCurConfigComponent.chart.options?.digits?.skeletonColor);
  }, { immediate: true }), (o3, t2) => (i(), e(c, { class: s(r(f2)) }, { default: a(() => [t2[0] || (t2[0] = l("div", { class: "title" }, "数字颜色", -1)), u(r(m), { placeholder: "设置数字颜色，格式#FFFFFF", type: 1, value: d.value, onConfirmChange: v, onInputChange: F }, null, 8, ["value"]), t2[1] || (t2[1] = l("div", { class: "title" }, "框架颜色", -1)), u(r(m), { placeholder: "设置框架颜色，格式#FFFFFF", type: 1, value: h.value, onConfirmChange: _, onInputChange: I }, null, 8, ["value"])]), _: 1, __: [0, 1] }, 8, ["class"]));
} }), [["__scopeId", "data-v-ad8834b9"]]);
export {
  f as default
};
