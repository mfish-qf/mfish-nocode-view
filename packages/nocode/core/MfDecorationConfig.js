import { defineComponent as o, ref as n, watch as e, createBlock as t, openBlock as i, normalizeClass as a, unref as r, withCtx as s, createElementVNode as l, createVNode as u, renderSlot as m } from "vue";
import { S as c } from "./StyleConfig.js";
import { u as p, n as C, _ as f } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign as g } from "@mfish/core/hooks";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const d = f(o({ __name: "MfDecorationConfig", setup(o2) {
  const { prefixCls: f2 } = g("decoration-config"), d2 = n(), h = n(), v = p();
  function F(o3) {
    _(o3), d2.value = o3;
  }
  function _(o3) {
    v.getCurConfigComponent.chart.options.mainColor = o3;
  }
  function I(o3) {
    x(o3), h.value = o3;
  }
  function x(o3) {
    v.getCurConfigComponent.chart.options.secondColor = o3;
  }
  return e(() => v.getCurConfigComponent, (o3) => {
    o3 && (d2.value = v.getCurConfigComponent.chart.options.mainColor, h.value = v.getCurConfigComponent.chart.options.secondColor);
  }, { immediate: true }), (o3, n2) => (i(), t(c, { class: a(r(f2)) }, { default: s(() => [n2[0] || (n2[0] = l("div", { class: "title" }, " 主体色", -1)), u(r(C), { placeholder: "设置主体颜色，格式#FFFFFF", type: 1, value: d2.value, onConfirmChange: F, onInputChange: _ }, null, 8, ["value"]), n2[1] || (n2[1] = l("div", { class: "title" }, " 搭配色", -1)), u(r(C), { placeholder: "设置搭配颜色，格式#FFFFFF", type: 1, value: h.value, onConfirmChange: I, onInputChange: x }, null, 8, ["value"]), m(o3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-73423ace"]]);
export {
  d as default
};
