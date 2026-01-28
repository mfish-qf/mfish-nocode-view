import { defineComponent as e, ref as l, watch as a, openBlock as t, createElementBlock as o, normalizeClass as i, unref as n, createVNode as u, withCtx as s, createElementVNode as v, createTextVNode as r } from "vue";
import { u as b, d as h, O as c, _ as f } from "./index.js";
import { Select as p } from "ant-design-vue";
import { useDesign as d } from "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as g } from "./index59.js";
const m = { class: "title" }, C = f(e({ __name: "EchartsSeriesLabelConfig", props: { series: { type: Object, default: () => {
} } }, emits: ["labelChange"], setup(e2, { emit: f2 }) {
  const C2 = e2, y = f2, { prefixCls: x } = d("echarts-series-label-config"), S = l(C2.series), k = l({}), A = l("inside"), T = [{ label: "上", value: "top" }, { label: "下", value: "bottom" }, { label: "左", value: "left" }, { label: "右", value: "right" }, { label: "内", value: "inside" }, { label: "内左", value: "insideLeft" }, { label: "内右", value: "insideRight" }, { label: "内上", value: "insideTop" }, { label: "内下", value: "insideBottom" }, { label: "内上左", value: "insideTopLeft" }, { label: "内上右", value: "insideTopRight" }, { label: "内下左", value: "insideBottomLeft" }, { label: "内下右", value: "insideBottomRight" }], _ = b();
  function w(e3) {
    S.value.label = { ...S.value.label, show: e3 }, y("labelChange", S.value);
  }
  function L(e3) {
    S.value.label.align = e3.value, y("labelChange", S.value);
  }
  function j(e3) {
    S.value.label.verticalAlign = e3.value, y("labelChange", S.value);
  }
  function z(e3) {
    delete S.value?.label?.fontStyle, delete S.value?.label?.fontWeight, B(e3);
  }
  function B(e3) {
    S.value.label = { ...S.value?.label, ...e3.style }, y("labelChange", S.value);
  }
  function F() {
    S.value.label.position = A.value, y("labelChange", S.value);
  }
  return a(() => _.getCurConfigComponent, (e3) => {
    e3 && (function() {
      void 0 !== S.value.label?.position && (A.value = S.value.label.position);
      k.value = {}, k.value.font = S.value?.label?.fontFamily, k.value.fontSize = S.value?.label?.fontSize?.replace("px", ""), k.value.textColor = S.value?.label?.color;
      const e4 = S.value?.label?.fontStyle ? { italic: true } : {}, l2 = S.value?.label?.fontWeight ? { bold: true } : {};
      k.value.fontStyle = { ...e4, ...l2 }, k.value.hAlignType = S.value?.label?.align, k.value.vAlignType = S.value?.label?.verticalAlign;
    })();
  }, { immediate: true }), (l2, a2) => (t(), o("div", { class: i(n(x)) }, [u(h, { title: "标签设置", "default-expand": false, "allow-check": true, "title-check": e2.series?.label?.show, onChecked: w }, { default: s(() => [u(g, { "hide-font-style": [n(c).Underline, n(c).Strikethrough], "color-type": 1, "vertical-align": true, "text-style": k.value, onFontChange: B, onSizeChange: B, onFontStyleChange: z, onColorChange: B, onHAlignChange: L, onVAlignChange: j }, null, 8, ["hide-font-style", "text-style"]), v("div", m, [a2[1] || (a2[1] = r(" 标签位置 ", -1)), u(n(p), { value: A.value, "onUpdate:value": a2[0] || (a2[0] = (e3) => A.value = e3), options: T, "show-search": false, "filter-option": false, placeholder: "请选择", onChange: F }, null, 8, ["value"])])]), _: 1 }, 8, ["title-check"])], 2));
} }), [["__scopeId", "data-v-21531387"]]);
export {
  C as E
};
