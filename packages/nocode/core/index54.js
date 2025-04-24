import { defineComponent as e, useCssVars as t, computed as a, ref as o, watch as l, createBlock as n, openBlock as i, unref as c, mergeProps as r, toHandlers as s, withCtx as u, createCommentVNode as p, createTextVNode as f, toDisplayString as v } from "vue";
import { Segmented as h } from "ant-design-vue";
import { Icon as d } from "@mfish/core/components/Icon";
import { h as m, u as y, as as S } from "./index.js";
import { useDesign as x } from "@mfish/core/hooks";
import { ThemeEnum as b } from "@mfish/core/enums";
const g = e({ __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "608b0640": w.value, "7e98bc4a": L.value - 6 + "px", "7cc76f78": _.value, "0f2e6181": q.value, "7ac2cbd0": `${A.value}px`, "0f2c8fb7": D.value, "027b0ae2": E.value, "786a3e4c": I.value, "5cd6757c": F.value, "6310cc28": K.value, "873001c6": O.value, "77d4c074": `${R.value}px`, "8733a55a": T.value, "47c3b17e": $.value, "653f64be": B.value }));
  const g2 = e2, { commonEvents: C, emitEvent: k } = m(g2.chart, void 0, ["titleChange"]), z = a(() => {
    var _a, _b;
    return (_b = (_a = g2.chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.map((e3, t2) => ({ title: e3.title, value: e3.value || e3.title, payload: { icon: e3.icon, index: t2 } }));
  }), j = y(), _ = a(() => {
    var _a, _b;
    return (_b = (_a = g2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.textColor;
  }), q = a(() => {
    var _a, _b;
    return (_b = (_a = g2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.font;
  }), A = a(() => {
    var _a, _b;
    return ((_b = (_a = g2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontSize) || 14;
  }), D = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = g2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : "";
  }), E = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = g2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : "";
  }), I = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = g2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : "";
  }), K = a(() => {
    var _a, _b;
    return ((_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.textColor) || _.value;
  }), O = a(() => {
    var _a, _b;
    return ((_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.font) || q.value;
  }), R = a(() => {
    var _a, _b;
    return ((_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontSize) || A.value;
  }), T = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : D.value;
  }), $ = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : E.value;
  }), B = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : I.value;
  }), w = a(() => {
    var _a;
    return ((_a = g2.chart.options) == null ? void 0 : _a.transparent) ? "transparent" : j.getTheme === b.DARK ? "#000000" : "#f5f5f5";
  }), F = a(() => {
    var _a, _b;
    return ((_b = (_a = g2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.selectBackground) || (j.getTheme === b.DARK ? "#1f1f1f" : "#ffffff");
  }), G = a(() => {
    var _a;
    return ((_a = g2.chart.options) == null ? void 0 : _a.transparent) || false;
  }), H = o(""), { prefixCls: J } = x("mf-segmented"), L = a(() => {
    var _a, _b;
    return (_b = (_a = g2.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
  });
  function M(e3) {
    var _a, _b;
    H.value = e3;
    const t2 = (_b = (_a = z.value.find((t3) => t3.value === e3)) == null ? void 0 : _a.payload) == null ? void 0 : _b.index;
    if (t2 >= 0) {
      const e4 = S(g2.chart);
      (e4 == null ? void 0 : e4.length) > t2 && k("titleChange", e4[t2]);
    }
  }
  return l(() => {
    var _a, _b;
    return (_b = (_a = g2.chart) == null ? void 0 : _a.data) == null ? void 0 : _b.dataSet;
  }, (e3) => {
    var t2;
    e3 && (t2 = e3, (t2 == null ? void 0 : t2.length) > 0 && (H.value = t2[0].value || t2[0].title || ""));
  }, { immediate: true, deep: true }), (e3, t2) => (i(), n(c(h), r({ class: c(J), style: G.value ? { backgroundColor: "transparent" } : {}, value: H.value, options: z.value, onChange: M, block: "" }, s(c(C))), { label: u(({ title: e4, payload: t3 }) => [t3.icon ? (i(), n(c(d), { key: 0, icon: t3.icon, size: A.value }, null, 8, ["icon", "size"])) : p("", true), f(" " + v(e4), 1)]), _: 1 }, 16, ["class", "style", "value", "options"]));
} });
export {
  g as default
};
