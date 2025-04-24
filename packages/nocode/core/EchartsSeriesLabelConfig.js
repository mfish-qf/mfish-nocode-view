import { defineComponent as e, ref as l, watch as a, createElementBlock as t, openBlock as o, normalizeClass as i, unref as n, createVNode as u, withCtx as s, createElementVNode as v, createTextVNode as r } from "vue";
import { C as b } from "./ConfigGroup.js";
import { Select as h } from "ant-design-vue";
import { useDesign as c } from "@mfish/core/hooks";
import { u as f, T as p, am as g, _ as m } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const d = { class: "title" }, C = m(e({ __name: "EchartsSeriesLabelConfig", props: { series: { type: Object, default: () => {
} } }, emits: ["labelChange"], setup(e2, { emit: m2 }) {
  const C2 = e2, y = m2, { prefixCls: S } = c("echarts-series-label-config"), x = l(C2.series), k = l({}), A = l("inside"), T = [{ label: "上", value: "top" }, { label: "下", value: "bottom" }, { label: "左", value: "left" }, { label: "右", value: "right" }, { label: "内", value: "inside" }, { label: "内左", value: "insideLeft" }, { label: "内右", value: "insideRight" }, { label: "内上", value: "insideTop" }, { label: "内下", value: "insideBottom" }, { label: "内上左", value: "insideTopLeft" }, { label: "内上右", value: "insideTopRight" }, { label: "内下左", value: "insideBottomLeft" }, { label: "内下右", value: "insideBottomRight" }], _ = f();
  function w(e3) {
    x.value.label = { ...x.value.label, show: e3 }, y("labelChange", x.value);
  }
  function L(e3) {
    x.value.label.align = e3.value, y("labelChange", x.value);
  }
  function j(e3) {
    x.value.label.verticalAlign = e3.value, y("labelChange", x.value);
  }
  function z(e3) {
    var _a, _b, _c, _d;
    (_b = (_a = x.value) == null ? void 0 : _a.label) == null ? true : delete _b.fontStyle, (_d = (_c = x.value) == null ? void 0 : _c.label) == null ? true : delete _d.fontWeight, B(e3);
  }
  function B(e3) {
    var _a;
    x.value.label = { ...(_a = x.value) == null ? void 0 : _a.label, ...e3.style }, y("labelChange", x.value);
  }
  function F() {
    x.value.label.position = A.value, y("labelChange", x.value);
  }
  return a(() => _.getCurConfigComponent, (e3) => {
    e3 && function() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      void 0 !== ((_a = x.value.label) == null ? void 0 : _a.position) && (A.value = x.value.label.position);
      k.value = {}, k.value.font = (_c = (_b = x.value) == null ? void 0 : _b.label) == null ? void 0 : _c.fontFamily, k.value.fontSize = (_f = (_e = (_d = x.value) == null ? void 0 : _d.label) == null ? void 0 : _e.fontSize) == null ? void 0 : _f.replace("px", ""), k.value.textColor = (_h = (_g = x.value) == null ? void 0 : _g.label) == null ? void 0 : _h.color;
      const e4 = ((_j = (_i = x.value) == null ? void 0 : _i.label) == null ? void 0 : _j.fontStyle) ? { italic: true } : {}, l2 = ((_l = (_k = x.value) == null ? void 0 : _k.label) == null ? void 0 : _l.fontWeight) ? { bold: true } : {};
      k.value.fontStyle = { ...e4, ...l2 }, k.value.hAlignType = (_n = (_m = x.value) == null ? void 0 : _m.label) == null ? void 0 : _n.align, k.value.vAlignType = (_p = (_o = x.value) == null ? void 0 : _o.label) == null ? void 0 : _p.verticalAlign;
    }();
  }, { immediate: true }), (l2, a2) => {
    var _a, _b;
    return o(), t("div", { class: i(n(S)) }, [u(b, { title: "标签设置", "default-expand": false, "allow-check": true, "title-check": (_b = (_a = e2.series) == null ? void 0 : _a.label) == null ? void 0 : _b.show, onChecked: w }, { default: s(() => [u(n(p), { "hide-font-style": [n(g).Underline, n(g).Strikethrough], "color-type": 1, "vertical-align": true, "text-style": k.value, onFontChange: B, onSizeChange: B, onFontStyleChange: z, onColorChange: B, onHAlignChange: L, onVAlignChange: j }, null, 8, ["hide-font-style", "text-style"]), v("div", d, [a2[1] || (a2[1] = r(" 标签位置 ")), u(n(h), { value: A.value, "onUpdate:value": a2[0] || (a2[0] = (e3) => A.value = e3), options: T, "show-search": false, "filter-option": false, placeholder: "请选择", onChange: F }, null, 8, ["value"])])]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), [["__scopeId", "data-v-8a072e30"]]);
export {
  C as E
};
