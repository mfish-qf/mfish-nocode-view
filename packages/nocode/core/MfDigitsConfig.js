import { defineComponent as o, ref as t, watch as n, createBlock as e, openBlock as i, normalizeClass as s, unref as r, withCtx as a, createElementVNode as l, createVNode as u } from "vue";
import { useDesign as p } from "@mfish/core/hooks";
import { u as C, M as m, _ as f } from "./index.js";
import { S as g } from "./StyleConfig.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const c = f(o({ __name: "MfDigitsConfig", setup(o2) {
  const f2 = C(), { prefixCls: c2 } = p("digits-config"), d = t(), h = t();
  function v(o3, t2) {
    F(o3, t2), d.value = t2;
  }
  function F(o3, t2) {
    f2.getCurConfigComponent.chart.options.digits = { ...f2.getCurConfigComponent.chart.options.digits, color: t2 };
  }
  function _(o3, t2) {
    I(o3, t2), h.value = t2;
  }
  function I(o3, t2) {
    f2.getCurConfigComponent.chart.options.digits = { ...f2.getCurConfigComponent.chart.options.digits, skeletonColor: t2 };
  }
  return n(() => f2.getCurConfigComponent, (o3) => {
    o3 && (d.value = f2.getCurConfigComponent.chart.options?.digits?.color, h.value = f2.getCurConfigComponent.chart.options?.digits?.skeletonColor);
  }, { immediate: true }), (o3, t2) => (i(), e(g, { class: s(r(c2)) }, { default: a(() => [t2[0] || (t2[0] = l("div", { class: "title" }, "数字颜色", -1)), u(r(m), { placeholder: "设置数字颜色，格式#FFFFFF", type: 1, value: d.value, onConfirmChange: v, onInputChange: F }, null, 8, ["value"]), t2[1] || (t2[1] = l("div", { class: "title" }, "框架颜色", -1)), u(r(m), { placeholder: "设置框架颜色，格式#FFFFFF", type: 1, value: h.value, onConfirmChange: _, onInputChange: I }, null, 8, ["value"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-18df8f8a"]]);
export {
  c as default
};
