import { defineComponent as e, ref as l, watch as a, createElementBlock as t, openBlock as o, normalizeClass as i, unref as n, createVNode as u, withCtx as s, createElementVNode as v, createTextVNode as r } from "vue";
import { u as b, d as c, T as h, ap as f, _ as p } from "./index.js";
import { Select as d } from "ant-design-vue";
import { useDesign as g } from "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const m = { class: "title" }, C = p(e({ __name: "EchartsSeriesLabelConfig", props: { series: { type: Object, default: () => {
} } }, emits: ["labelChange"], setup(e2, { emit: p2 }) {
  const C2 = e2, y = p2, { prefixCls: S } = g("echarts-series-label-config"), x = l(C2.series), k = l({}), A = l("inside"), T = [{ label: "上", value: "top" }, { label: "下", value: "bottom" }, { label: "左", value: "left" }, { label: "右", value: "right" }, { label: "内", value: "inside" }, { label: "内左", value: "insideLeft" }, { label: "内右", value: "insideRight" }, { label: "内上", value: "insideTop" }, { label: "内下", value: "insideBottom" }, { label: "内上左", value: "insideTopLeft" }, { label: "内上右", value: "insideTopRight" }, { label: "内下左", value: "insideBottomLeft" }, { label: "内下右", value: "insideBottomRight" }], _ = b();
  function w(e3) {
    x.value.label = { ...x.value.label, show: e3 }, y("labelChange", x.value);
  }
  function L(e3) {
    x.value.label.align = e3.value, y("labelChange", x.value);
  }
  function z(e3) {
    x.value.label.verticalAlign = e3.value, y("labelChange", x.value);
  }
  function B(e3) {
    delete x.value?.label?.fontStyle, delete x.value?.label?.fontWeight, F(e3);
  }
  function F(e3) {
    x.value.label = { ...x.value?.label, ...e3.style }, y("labelChange", x.value);
  }
  function I() {
    x.value.label.position = A.value, y("labelChange", x.value);
  }
  return a(() => _.getCurConfigComponent, (e3) => {
    e3 && function() {
      void 0 !== x.value.label?.position && (A.value = x.value.label.position);
      k.value = {}, k.value.font = x.value?.label?.fontFamily, k.value.fontSize = x.value?.label?.fontSize?.replace("px", ""), k.value.textColor = x.value?.label?.color;
      const e4 = x.value?.label?.fontStyle ? { italic: true } : {}, l2 = x.value?.label?.fontWeight ? { bold: true } : {};
      k.value.fontStyle = { ...e4, ...l2 }, k.value.hAlignType = x.value?.label?.align, k.value.vAlignType = x.value?.label?.verticalAlign;
    }();
  }, { immediate: true }), (l2, a2) => (o(), t("div", { class: i(n(S)) }, [u(c, { title: "标签设置", "default-expand": false, "allow-check": true, "title-check": e2.series?.label?.show, onChecked: w }, { default: s(() => [u(n(h), { "hide-font-style": [n(f).Underline, n(f).Strikethrough], "color-type": 1, "vertical-align": true, "text-style": k.value, onFontChange: F, onSizeChange: F, onFontStyleChange: B, onColorChange: F, onHAlignChange: L, onVAlignChange: z }, null, 8, ["hide-font-style", "text-style"]), v("div", m, [a2[1] || (a2[1] = r(" 标签位置 ")), u(n(d), { value: A.value, "onUpdate:value": a2[0] || (a2[0] = (e3) => A.value = e3), options: T, "show-search": false, "filter-option": false, placeholder: "请选择", onChange: I }, null, 8, ["value"])])]), _: 1 }, 8, ["title-check"])], 2));
} }), [["__scopeId", "data-v-d9fdc70b"]]);
export {
  C as E
};
