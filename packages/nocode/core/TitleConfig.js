import { defineComponent as o, ref as t, watch as n, createElementBlock as e, openBlock as i, normalizeClass as r, unref as C, createElementVNode as a, createVNode as l, toDisplayString as g } from "vue";
import "ant-design-vue";
import { useDesign as p } from "@mfish/core/hooks";
import { u, T as s, _ as f } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const m = { class: "title" }, c = f(o({ __name: "TitleConfig", props: { title: { type: String, default: "文本样式" } }, setup(o2) {
  const f2 = u(), c2 = t({}), { prefixCls: h } = p("title-config");
  function v(o3) {
    f2.getCurConfigComponent.chart.options.font = o3;
  }
  function d(o3) {
    f2.getCurConfigComponent.chart.options.fontSize = o3;
  }
  function y(o3) {
    f2.getCurConfigComponent.chart.options.hAlign = o3;
  }
  function S(o3) {
    f2.getCurConfigComponent.chart.options.vAlign = o3;
  }
  function x(o3) {
    f2.getCurConfigComponent.chart.options.fontStyle = o3;
  }
  function A(o3) {
    f2.getCurConfigComponent.chart.options.textColor = o3;
  }
  return n(() => f2.getCurConfigComponent, (o3) => {
    o3 && (c2.value = {}, c2.value.font = f2.getCurConfigComponent.chart.options.font?.value, c2.value.fontSize = f2.getCurConfigComponent.chart.options.fontSize?.value, c2.value.hAlignType = f2.getCurConfigComponent.chart.options.hAlign?.value, c2.value.vAlignType = f2.getCurConfigComponent.chart.options.vAlign?.value, c2.value.textColor = f2.getCurConfigComponent.chart.options.textColor?.value, c2.value.fontStyle = f2.getCurConfigComponent.chart.options.fontStyle?.value);
  }, { immediate: true }), (t2, n2) => (i(), e("div", { class: r(C(h)) }, [a("div", m, g(o2.title), 1), l(C(s), { "text-style": c2.value, onFontChange: v, onSizeChange: d, onHAlignChange: y, onVAlignChange: S, onFontStyleChange: x, onColorChange: A }, null, 8, ["text-style"])], 2));
} }), [["__scopeId", "data-v-d5d58608"]]);
export {
  c as T
};
