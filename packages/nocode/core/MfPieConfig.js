import { defineComponent as e, ref as l, onMounted as a, createElementBlock as u, openBlock as n, normalizeClass as t, unref as i, createVNode as v, withCtx as o, createElementVNode as s, createTextVNode as r, createBlock as d, Fragment as c, renderList as h } from "vue";
import { S as g } from "./StyleConfig.js";
import { a as f, E as m } from "./EchartsBaseConfig.js";
import { E as p } from "./EchartsLegendConfig.js";
import { u as C, E as y } from "./UseEchartsSeriesConfig.js";
import { h as b, T as S, ao as x, _, u as U } from "./index.js";
import { useDesign as k, useMessage as A } from "@mfish/core/hooks";
import { Slider as j, Checkbox as w } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const E = { class: "title" }, L = { class: "title" }, $ = { class: "title" }, z = { class: "title" }, F = { class: "title" }, I = _(e({ __name: "PieSeriesConfig", props: { title: { type: String, default: "柱体样式" }, series: { type: Object, default: () => {
} } }, emits: ["seriesChange"], setup(e2, { emit: d2 }) {
  const c2 = e2, h2 = d2, { prefixCls: g2 } = k("pie-series-config"), f2 = l(c2.series), { createMessage: m2 } = A(), p2 = l(0), C2 = l(0), y2 = l(50), _2 = l(50), U2 = l(50), I2 = l(), O2 = l(), P = l(), R = l({}), J = l(true), M = l(0);
  function N() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    void 0 !== ((_a = f2.value.itemStyle) == null ? void 0 : _a.borderRadius) && (p2.value = f2.value.itemStyle.borderRadius), void 0 !== f2.value.smooth && (M.value = f2.value.smooth), void 0 !== f2.value.radius && (C2.value = f2.value.radius[0].replace("%", ""), y2.value = f2.value.radius[1].replace("%", "")), void 0 !== f2.value.center && (_2.value = f2.value.center[0].replace("%", ""), U2.value = f2.value.center[1].replace("%", "")), void 0 !== f2.value.startAngle && (I2.value = f2.value.startAngle), void 0 !== f2.value.endAngle && (O2.value = f2.value.endAngle), R.value = {}, R.value.font = (_c = (_b = f2.value) == null ? void 0 : _b.label) == null ? void 0 : _c.fontFamily, R.value.fontSize = (_f = (_e = (_d = f2.value) == null ? void 0 : _d.label) == null ? void 0 : _e.fontSize) == null ? void 0 : _f.replace("px", ""), R.value.textColor = (_h = (_g = f2.value) == null ? void 0 : _g.label) == null ? void 0 : _h.color;
    const e3 = ((_j = (_i = f2.value) == null ? void 0 : _i.label) == null ? void 0 : _j.fontStyle) ? { italic: true } : {}, l2 = ((_l = (_k = f2.value) == null ? void 0 : _k.label) == null ? void 0 : _l.fontWeight) ? { bold: true } : {};
    R.value.fontStyle = { ...e3, ...l2 };
  }
  function W(e3) {
    e3(JSON.stringify({ series: f2.value }));
  }
  function B(e3) {
    const l2 = JSON.parse(e3);
    l2 && l2.series ? (f2.value = l2.series, N(), h2("seriesChange", f2.value)) : m2.warning("粘贴失败，无配置或不匹配");
  }
  function T() {
    var _a;
    f2.value.itemStyle = { ...(_a = f2.value) == null ? void 0 : _a.itemStyle, borderRadius: p2.value }, h2("seriesChange", f2.value);
  }
  function q(e3) {
    f2.value.label = { ...f2.value.label, show: e3 }, h2("seriesChange", f2.value);
  }
  function D(e3) {
    var _a, _b, _c, _d;
    (_b = (_a = f2.value) == null ? void 0 : _a.label) == null ? true : delete _b.fontStyle, (_d = (_c = f2.value) == null ? void 0 : _c.label) == null ? true : delete _d.fontWeight, G(e3);
  }
  function G(e3) {
    var _a;
    f2.value.label = { ...(_a = f2.value) == null ? void 0 : _a.label, ...e3.style }, h2("seriesChange", f2.value);
  }
  function H() {
    var _a;
    f2.value.labelLine = { ...(_a = f2.value) == null ? void 0 : _a.labelLine, show: J.value }, h2("seriesChange", f2.value);
  }
  function K() {
    var _a;
    f2.value.labelLine = { ...(_a = f2.value) == null ? void 0 : _a.labelLine, smooth: M.value }, h2("seriesChange", f2.value);
  }
  function Q() {
    f2.value.radius = [`${C2.value}%`, `${y2.value}%`], h2("seriesChange", f2.value);
  }
  function V() {
    f2.value.center = [`${_2.value}%`, `${U2.value}%`], h2("seriesChange", f2.value);
  }
  function X() {
    void 0 === I2.value || null === I2.value ? delete f2.value.startAngle : f2.value.startAngle = I2.value, h2("seriesChange", f2.value);
  }
  function Y() {
    void 0 === O2.value || null === O2.value ? delete f2.value.endAngle : f2.value.endAngle = O2.value, h2("seriesChange", f2.value);
  }
  function Z() {
    void 0 === P.value || null === P.value ? delete f2.value.padAngle : f2.value.padAngle = P.value, h2("seriesChange", f2.value);
  }
  return a(() => {
    N();
  }), (l2, a2) => (n(), u("div", { class: t(i(g2)) }, [v(b, { title: e2.title, "default-expand": false, "allow-copy": true, onCopy: W, onPaste: B }, { default: o(() => {
    var _a, _b;
    return [v(b, { title: "图形样式" }, { default: o(() => [s("div", E, [a2[10] || (a2[10] = r(" 内圈半径 ")), v(i(j), { value: C2.value, "onUpdate:value": a2[0] || (a2[0] = (e3) => C2.value = e3), min: 0, max: 100, onChange: Q }, null, 8, ["value"]), a2[11] || (a2[11] = r(" 外圈半径 ")), v(i(j), { value: y2.value, "onUpdate:value": a2[1] || (a2[1] = (e3) => y2.value = e3), min: 0, max: 100, onChange: Q }, null, 8, ["value"])]), s("div", L, [a2[12] || (a2[12] = r(" 横向偏移 ")), v(i(j), { value: _2.value, "onUpdate:value": a2[2] || (a2[2] = (e3) => _2.value = e3), min: 0, max: 100, onChange: V }, null, 8, ["value"]), a2[13] || (a2[13] = r(" 纵向偏移 ")), v(i(j), { value: U2.value, "onUpdate:value": a2[3] || (a2[3] = (e3) => U2.value = e3), min: 0, max: 100, onChange: V }, null, 8, ["value"])]), s("div", $, [a2[14] || (a2[14] = r(" 起始角度 ")), v(i(j), { value: I2.value, "onUpdate:value": a2[4] || (a2[4] = (e3) => I2.value = e3), step: 5, min: 0, max: 360, onChange: X }, null, 8, ["value"]), a2[15] || (a2[15] = r(" 结束角度 ")), v(i(j), { value: O2.value, "onUpdate:value": a2[5] || (a2[5] = (e3) => O2.value = e3), step: 5, min: 0, max: 360, onChange: Y }, null, 8, ["value"])]), s("div", z, [a2[16] || (a2[16] = r(" 圆角 ")), v(i(j), { value: p2.value, "onUpdate:value": a2[6] || (a2[6] = (e3) => p2.value = e3), min: 0, max: 50, onChange: T }, null, 8, ["value"]), a2[17] || (a2[17] = r(" 扇区间隔 ")), v(i(j), { value: P.value, "onUpdate:value": a2[7] || (a2[7] = (e3) => P.value = e3), min: 0, max: 360, onChange: Z }, null, 8, ["value"])])]), _: 1 }), v(b, { title: "标签设置", "default-expand": false, "allow-check": true, "title-check": (_b = (_a = e2.series) == null ? void 0 : _a.label) == null ? void 0 : _b.show, onChecked: q }, { default: o(() => [v(i(S), { "hide-font-style": [i(x).Underline, i(x).Strikethrough], "color-type": 1, "hide-align": true, "text-style": R.value, onFontChange: G, onSizeChange: G, onFontStyleChange: D, onColorChange: G }, null, 8, ["hide-font-style", "text-style"]), s("div", F, [v(i(w), { checked: J.value, "onUpdate:checked": a2[8] || (a2[8] = (e3) => J.value = e3), onChange: H }, { default: o(() => a2[18] || (a2[18] = [r(" 显示标签线")])), _: 1, __: [18] }, 8, ["checked"]), a2[19] || (a2[19] = r(" 平滑度 ")), v(i(j), { value: M.value, "onUpdate:value": a2[9] || (a2[9] = (e3) => M.value = e3), step: 0.1, min: 0, max: 1, onChange: K }, null, 8, ["value"])])]), _: 1 }, 8, ["title-check"])];
  }), _: 1 }, 8, ["title"])], 2));
} }), [["__scopeId", "data-v-58ac54a4"]]), O = e({ __name: "MfPieConfig", setup(e2) {
  const l2 = U(), { seriesChange: a2 } = C();
  return (e3, t2) => (n(), d(g, null, { default: o(() => {
    var _a;
    return [v(f), v(m), v(y, { "hide-trigger": true }), v(p), (n(true), u(c, null, h((_a = i(l2).getCurConfigComponent.chart.options) == null ? void 0 : _a.series, (e4, l3) => (n(), d(I, { title: `饼状图-${l3 + 1}`, key: l3, series: e4, onSeriesChange: (e5) => i(a2)(e5, l3) }, null, 8, ["title", "series", "onSeriesChange"]))), 128))];
  }), _: 1 }));
} });
export {
  O as default
};
