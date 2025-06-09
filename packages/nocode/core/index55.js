import { defineComponent as e, useCssVars as t, computed as a, ref as o, onMounted as l, createBlock as n, openBlock as r, unref as c, mergeProps as u, toHandlers as i } from "vue";
import { Select as s } from "ant-design-vue";
import { l as p, u as h, au as v } from "./index.js";
import { useDesign as f } from "@mfish/core/hooks";
import { ThemeEnum as d } from "@mfish/core/enums";
const m = e({ name: "MfSelect", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "94e73eec": y.value, "5ec12938": `${g.value}px`, "41f94560": I.value - 6 + "px", "4ceb714c": j.value, bb1266aa: k.value, "3e2354e6": `${$.value}px`, bb160a3e: q.value, "355558e8": z.value, "488e4020": D.value }));
  const m2 = e2, { commonEvents: b, emitEvent: x } = p(m2.chart, void 0, ["selectChange"]), S = a(() => {
    var _a, _b;
    return (_b = (_a = m2.chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.map((e3) => ({ label: e3.label, value: e3.value || e3.label }));
  }), y = a(() => {
    var _a;
    return ((_a = m2.chartContain) == null ? void 0 : _a.background) || (E.getTheme === d.DARK ? "#141414" : "#ffffff");
  }), g = a(() => {
    var _a, _b;
    return ((_b = (_a = m2.chartContain) == null ? void 0 : _a.border) == null ? void 0 : _b.radius) || 4;
  }), C = a(() => {
    var _a;
    return ((_a = m2.chart.options) == null ? void 0 : _a.showSearch) || false;
  }), w = a(() => {
    var _a;
    return ((_a = m2.chart.options) == null ? void 0 : _a.allowClear) || false;
  }), j = a(() => {
    var _a, _b;
    return (_b = (_a = m2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.textColor;
  }), k = a(() => {
    var _a, _b;
    return (_b = (_a = m2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.font;
  }), $ = a(() => {
    var _a, _b;
    return ((_b = (_a = m2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontSize) || 14;
  }), q = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = m2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : "";
  }), z = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = m2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : "";
  }), D = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = m2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : "";
  }), E = h(), I = a(() => {
    var _a, _b;
    return (_b = (_a = m2.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
  }), O = o(), { prefixCls: V } = f("mf-select");
  function _(e3) {
    O.value = e3;
    const t2 = S.value.findIndex((t3) => t3.value === e3);
    if (-1 !== t2) {
      const e4 = v(m2.chart);
      (e4 == null ? void 0 : e4.length) > t2 && x("selectChange", e4[t2]);
    }
  }
  return l(() => {
    var _a, _b;
    ((_a = m2.chart.options) == null ? void 0 : _a.defaultValue) && (O.value = (_b = m2.chart.options) == null ? void 0 : _b.defaultValue);
  }), (e3, t2) => (r(), n(c(s), u({ class: c(V), value: O.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => O.value = e4), options: S.value, onChange: _ }, i(c(b)), { bordered: false, "show-search": C.value, "allow-clear": w.value, "option-filter-prop": "label", "dropdown-style": { scale: c(E).getScale, color: j.value, fontFamily: k.value, fontSize: `${$.value}px`, fontWeight: q.value, fontStyle: z.value, textDecoration: D.value, background: y.value } }), null, 16, ["class", "value", "options", "show-search", "allow-clear", "dropdown-style"]));
} });
export {
  m as default
};
