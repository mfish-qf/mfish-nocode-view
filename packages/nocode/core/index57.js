import { defineComponent as e, useCssVars as t, computed as a, ref as o, watch as l, createBlock as n, openBlock as r, unref as c, mergeProps as i, toHandlers as u } from "vue";
import { Select as s } from "ant-design-vue";
import { l as v, u as f, av as p } from "./index.js";
import { useDesign as h } from "@mfish/core/hooks";
import { ThemeEnum as d } from "@mfish/core/enums";
const m = e({ name: "MfSelect", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "513005b0": y.value, "599a1f5c": `${g.value}px`, "664ea97a": I.value - 6 + "px", "49ea6574": j.value, "166ec651": k.value, "6278b900": `${$.value}px`, "166cf487": q.value, "3b357bb2": z.value, "4c18fe0a": D.value }));
  const m2 = e2, { commonEvents: b, emitEvent: x } = v(m2.chart, void 0, ["selectChange"]), S = a(() => {
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
  }), E = f(), I = a(() => {
    var _a, _b;
    return (_b = (_a = m2.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
  }), O = o(), { prefixCls: _ } = h("mf-select");
  function A(e3) {
    O.value = e3;
    const t2 = S.value.findIndex((t3) => t3.value === e3);
    if (-1 !== t2) {
      const e4 = p(m2.chart);
      (e4 == null ? void 0 : e4.length) > t2 && x("selectChange", e4[t2]);
    }
  }
  return l(() => {
    var _a, _b;
    return (_b = (_a = m2.chart) == null ? void 0 : _a.options) == null ? void 0 : _b.defaultValue;
  }, (e3) => {
    e3 && (O.value = e3);
  }, { immediate: true }), (e3, t2) => (r(), n(c(s), i({ class: c(_), value: O.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => O.value = e4), options: S.value, onChange: A }, u(c(b)), { bordered: false, "show-search": C.value, "allow-clear": w.value, "option-filter-prop": "label", "dropdown-style": { scale: c(E).getScale, color: j.value, fontFamily: k.value, fontSize: `${$.value}px`, fontWeight: q.value, fontStyle: z.value, textDecoration: D.value, background: y.value } }), null, 16, ["class", "value", "options", "show-search", "allow-clear", "dropdown-style"]));
} });
export {
  m as default
};
