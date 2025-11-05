import { defineComponent as o, ref as n, watch as t, createElementBlock as e, openBlock as i, normalizeClass as C, unref as l, createElementVNode as a, createVNode as g, toDisplayString as r } from "vue";
import { u, _ as p } from "./index.js";
import { useDesign as f } from "@mfish/core/hooks";
import { T as s } from "./index59.js";
const h = { class: "title" }, c = p(o({ __name: "TitleConfig", props: { title: { type: String, default: "文本样式" }, hideAlign: { type: Boolean, default: false } }, setup(o2) {
  const p2 = u(), c2 = n({}), { prefixCls: m } = f("title-config");
  function v(o3) {
    p2.getCurConfigComponent.chart.options.font = o3;
  }
  function d(o3) {
    p2.getCurConfigComponent.chart.options.fontSize = o3;
  }
  function y(o3) {
    p2.getCurConfigComponent.chart.options.hAlign = o3;
  }
  function A(o3) {
    p2.getCurConfigComponent.chart.options.vAlign = o3;
  }
  function x(o3) {
    p2.getCurConfigComponent.chart.options.fontStyle = o3;
  }
  function S(o3) {
    p2.getCurConfigComponent.chart.options.textColor = o3;
  }
  return t(() => p2.getCurConfigComponent, (o3) => {
    o3 && (c2.value = {}, c2.value.font = p2.getCurConfigComponent.chart.options.font?.value, c2.value.fontSize = p2.getCurConfigComponent.chart.options.fontSize?.value, c2.value.hAlignType = p2.getCurConfigComponent.chart.options.hAlign?.value, c2.value.vAlignType = p2.getCurConfigComponent.chart.options.vAlign?.value, c2.value.textColor = p2.getCurConfigComponent.chart.options.textColor?.value, c2.value.fontStyle = p2.getCurConfigComponent.chart.options.fontStyle?.value);
  }, { immediate: true }), (n2, t2) => (i(), e("div", { class: C(l(m)) }, [a("div", h, r(o2.title), 1), g(s, { "hide-align": o2.hideAlign, "text-style": c2.value, onFontChange: v, onSizeChange: d, onHAlignChange: y, onVAlignChange: A, onFontStyleChange: x, onColorChange: S }, null, 8, ["hide-align", "text-style"])], 2));
} }), [["__scopeId", "data-v-033080e0"]]);
export {
  c as T
};
