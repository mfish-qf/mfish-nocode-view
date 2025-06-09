import { defineComponent as e, useCssVars as t, computed as a, ref as o, watch as l, createBlock as n, openBlock as i, unref as c, mergeProps as r, toHandlers as s, withCtx as u, createCommentVNode as f, createTextVNode as p, toDisplayString as v } from "vue";
import { Segmented as d } from "ant-design-vue";
import { Icon as h } from "@mfish/core/components/Icon";
import { l as m, u as y, au as S } from "./index.js";
import { useDesign as x } from "@mfish/core/hooks";
import { ThemeEnum as g } from "@mfish/core/enums";
const b = e({ name: "MfSegmented", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "0784146e": M.value, "130e28fc": J.value - 6 + "px", eccaf214: _.value, "34a788e2": q.value, "0f383882": `${A.value}px`, "34ab2c76": D.value, "30ea9970": E.value, e86dc0e8: I.value, "02f0aaec": w.value, "3efdbd5a": K.value, "179cd2aa": O.value, "099e5fa6": `${R.value}px`, "17a0763e": T.value, "98f4c4e8": $.value, "412c55f0": B.value }));
  const b2 = e2, { commonEvents: C, emitEvent: k } = m(b2.chart, void 0, ["titleChange"]), z = a(() => {
    var _a, _b;
    return (_b = (_a = b2.chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.map((e3, t2) => ({ title: e3.title, value: e3.value || e3.title, payload: { icon: e3.icon, index: t2 } }));
  }), j = y(), _ = a(() => {
    var _a, _b;
    return (_b = (_a = b2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.textColor;
  }), q = a(() => {
    var _a, _b;
    return (_b = (_a = b2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.font;
  }), A = a(() => {
    var _a, _b;
    return ((_b = (_a = b2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontSize) || 14;
  }), D = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = b2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : "";
  }), E = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = b2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : "";
  }), I = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = b2.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : "";
  }), K = a(() => {
    var _a, _b;
    return ((_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.textColor) || _.value;
  }), O = a(() => {
    var _a, _b;
    return ((_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.font) || q.value;
  }), R = a(() => {
    var _a, _b;
    return ((_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontSize) || A.value;
  }), T = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : D.value;
  }), $ = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : E.value;
  }), B = a(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : I.value;
  }), M = a(() => {
    var _a;
    return ((_a = b2.chart.options) == null ? void 0 : _a.transparent) ? "transparent" : j.getTheme === g.DARK ? "#000000" : "#f5f5f5";
  }), w = a(() => {
    var _a, _b;
    return ((_b = (_a = b2.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.selectBackground) || (j.getTheme === g.DARK ? "#1f1f1f" : "#ffffff");
  }), F = a(() => {
    var _a;
    return ((_a = b2.chart.options) == null ? void 0 : _a.transparent) || false;
  }), G = o(""), { prefixCls: H } = x("mf-segmented"), J = a(() => {
    var _a, _b;
    return (_b = (_a = b2.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
  });
  function L(e3) {
    var _a, _b;
    G.value = e3;
    const t2 = (_b = (_a = z.value.find((t3) => t3.value === e3)) == null ? void 0 : _a.payload) == null ? void 0 : _b.index;
    if (t2 >= 0) {
      const e4 = S(b2.chart);
      (e4 == null ? void 0 : e4.length) > t2 && k("titleChange", e4[t2]);
    }
  }
  return l(() => {
    var _a, _b;
    return (_b = (_a = b2.chart) == null ? void 0 : _a.data) == null ? void 0 : _b.dataSet;
  }, (e3) => {
    var t2;
    e3 && (t2 = e3, (t2 == null ? void 0 : t2.length) > 0 && (G.value = t2[0].value || t2[0].title || ""));
  }, { immediate: true, deep: true }), (e3, t2) => (i(), n(c(d), r({ class: c(H), style: F.value ? { backgroundColor: "transparent" } : {}, value: G.value, options: z.value, onChange: L, block: "" }, s(c(C))), { label: u(({ title: e4, payload: t3 }) => [t3.icon ? (i(), n(c(h), { key: 0, icon: t3.icon, size: A.value }, null, 8, ["icon", "size"])) : f("", true), p(" " + v(e4), 1)]), _: 1 }, 16, ["class", "style", "value", "options"]));
} });
export {
  b as default
};
