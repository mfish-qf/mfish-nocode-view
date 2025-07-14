import { defineComponent as t, ref as e, watch as o, createBlock as n, openBlock as l, normalizeClass as i, unref as a, withCtx as s, createElementVNode as r, createVNode as C } from "vue";
import { S as c } from "./StyleConfig.js";
import { useDesign as u } from "@mfish/core/hooks";
import { u as g, T as p, an as f, J as h, M as m, _ as y } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const S = y(t({ __name: "MfSegmentedStyleConfig", setup(t2) {
  const { prefixCls: y2 } = u("segmented-style-config"), S2 = g(), v = e({}), d = e({}), x = e(false), k = e();
  function _(t3) {
    S2.getCurConfigComponent.chart.options.textStyle = { ...S2.getCurConfigComponent.chart.options?.textStyle, textColor: t3.value };
  }
  function z(t3) {
    S2.getCurConfigComponent.chart.options.textStyle = { ...S2.getCurConfigComponent.chart.options?.textStyle, font: t3.value };
  }
  function F(t3) {
    S2.getCurConfigComponent.chart.options.textStyle = { ...S2.getCurConfigComponent.chart.options?.textStyle, fontSize: t3.value };
  }
  function I(t3) {
    S2.getCurConfigComponent.chart.options.textStyle = { ...S2.getCurConfigComponent.chart.options?.textStyle, fontStyle: t3.value };
  }
  function j(t3) {
    S2.getCurConfigComponent.chart.options.selectStyle = { ...S2.getCurConfigComponent.chart.options?.selectStyle, textColor: t3.value };
  }
  function B(t3) {
    S2.getCurConfigComponent.chart.options.selectStyle = { ...S2.getCurConfigComponent.chart.options?.selectStyle, font: t3.value };
  }
  function M(t3) {
    S2.getCurConfigComponent.chart.options.selectStyle = { ...S2.getCurConfigComponent.chart.options?.selectStyle, fontSize: t3.value };
  }
  function J(t3) {
    S2.getCurConfigComponent.chart.options.selectStyle = { ...S2.getCurConfigComponent.chart.options?.selectStyle, fontStyle: t3.value };
  }
  function T(t3) {
    S2.getCurConfigComponent.chart.options.transparent = t3.target.checked;
  }
  function U(t3) {
    b(t3), k.value = t3;
  }
  function b(t3) {
    t3 || (t3 = ""), S2.getCurConfigComponent.chart.options.selectStyle = { ...S2.getCurConfigComponent.chart.options?.selectStyle, selectBackground: t3 };
  }
  return o(() => S2.getCurConfigComponent, (t3) => {
    var e2;
    t3 && (e2 = t3, v.value = e2.chart?.options?.textStyle, d.value = e2.chart?.options?.selectStyle, x.value = e2.chart?.options?.transparent || false, k.value = e2.chart?.options?.selectStyle?.selectBackground);
  }, { immediate: true }), (t3, e2) => (l(), n(c, { class: i(a(y2)) }, { default: s(() => [e2[1] || (e2[1] = r("div", { class: "title" }, "文本样式", -1)), C(a(p), { "color-type": 1, "text-style": v.value, "hide-align": true, "hide-font-style": [a(f).Strikethrough], onColorChange: _, onFontChange: z, onSizeChange: F, onFontStyleChange: I }, null, 8, ["text-style", "hide-font-style"]), e2[2] || (e2[2] = r("div", { class: "title" }, "选中样式", -1)), C(a(p), { "color-type": 1, "text-style": d.value, "hide-align": true, "hide-font-style": [a(f).Strikethrough], onColorChange: j, onFontChange: B, onSizeChange: M, onFontStyleChange: J }, null, 8, ["text-style", "hide-font-style"]), C(a(h), { checked: x.value, "onUpdate:checked": e2[0] || (e2[0] = (t4) => x.value = t4), title: "整体背景透明", tooltip: "设置背景透明后，可以通过通用配置-背景色设置背景颜色", onChange: T }, null, 8, ["checked"]), e2[3] || (e2[3] = r("div", { class: "title" }, "选中项背景色", -1)), C(a(m), { value: k.value, onConfirmChange: U, onInputChange: b }, null, 8, ["value"])]), _: 1, __: [1, 2, 3] }, 8, ["class"]));
} }), [["__scopeId", "data-v-66e5afa1"]]);
export {
  S as default
};
