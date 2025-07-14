import { defineComponent as e, ref as l, onMounted as a, resolveComponent as u, createElementBlock as t, openBlock as n, normalizeClass as v, unref as i, createVNode as o, withCtx as s, createElementVNode as r, createTextVNode as d, Fragment as c, renderList as f, toDisplayString as h, createBlock as g } from "vue";
import { S as m } from "./StyleConfig.js";
import { a as p, E as C } from "./EchartsBaseConfig.js";
import { E as b } from "./EchartsLegendConfig.js";
import { u as y, E as S } from "./UseEchartsSeriesConfig.js";
import { d as x, T as _, an as U, _ as k, u as A } from "./index.js";
import { useDesign as j, useMessage as w } from "@mfish/core/hooks";
import { Slider as E, Checkbox as L, RadioGroup as $, RadioButton as z } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const I = { class: "title" }, F = { class: "title" }, O = { class: "title" }, P = { class: "title" }, R = { class: "title" }, J = { class: "title" }, M = { class: "title" }, N = { class: "title" }, W = k(e({ __name: "PieSeriesConfig", props: { title: { type: String, default: "柱体样式" }, series: { type: Object, default: () => {
} } }, emits: ["seriesChange"], setup(e2, { emit: g2 }) {
  const m2 = e2, p2 = g2, { prefixCls: C2 } = j("pie-series-config"), b2 = l(m2.series), { createMessage: y2 } = w(), S2 = l(0), k2 = l(0), A2 = l(50), W2 = l(50), B2 = l(50), T = l(), q = l(), D = l(), G = l({}), H = l(true), K = l(0), Q = l(), V = [{ title: "外部", value: "outside" }, { title: "内部", value: "inside" }, { title: "中心", value: "center" }], X = l("outside"), Y = l(0);
  function Z() {
    void 0 !== b2.value.itemStyle?.borderRadius && (S2.value = b2.value.itemStyle.borderRadius), void 0 !== b2.value.smooth && (K.value = b2.value.smooth), void 0 !== b2.value.radius && (k2.value = b2.value.radius[0].replace("%", ""), A2.value = b2.value.radius[1].replace("%", "")), void 0 !== b2.value.center && (W2.value = b2.value.center[0].replace("%", ""), B2.value = b2.value.center[1].replace("%", "")), void 0 !== b2.value.startAngle && (T.value = b2.value.startAngle), void 0 !== b2.value.endAngle && (q.value = b2.value.endAngle), G.value = {}, G.value.font = b2.value?.label?.fontFamily, G.value.fontSize = b2.value?.label?.fontSize?.replace("px", ""), G.value.textColor = b2.value?.label?.color;
    const e3 = b2.value?.label?.fontStyle ? { italic: true } : {}, l2 = b2.value?.label?.fontWeight ? { bold: true } : {};
    G.value.fontStyle = { ...e3, ...l2 }, b2.value?.label?.formatter && (Q.value = b2.value.label.formatter), b2.value?.label?.position && (X.value = b2.value.label.position), b2.value?.label?.rotate && (Y.value = b2.value.label.rotate);
  }
  function ee(e3) {
    e3(JSON.stringify({ series: b2.value }));
  }
  function le(e3) {
    const l2 = JSON.parse(e3);
    l2 && l2.series ? (b2.value = l2.series, Z(), p2("seriesChange", b2.value)) : y2.warning("粘贴失败，无配置或不匹配");
  }
  function ae() {
    b2.value.itemStyle = { ...b2.value?.itemStyle, borderRadius: S2.value }, p2("seriesChange", b2.value);
  }
  function ue(e3) {
    b2.value.label = { ...b2.value.label, show: e3 }, p2("seriesChange", b2.value);
  }
  function te(e3) {
    delete b2.value?.label?.fontStyle, delete b2.value?.label?.fontWeight, ne(e3);
  }
  function ne(e3) {
    b2.value.label = { ...b2.value?.label, ...e3.style }, p2("seriesChange", b2.value);
  }
  function ve() {
    b2.value.labelLine = { ...b2.value?.labelLine, show: H.value }, p2("seriesChange", b2.value);
  }
  function ie() {
    b2.value.labelLine = { ...b2.value?.labelLine, smooth: K.value }, p2("seriesChange", b2.value);
  }
  function oe() {
    Q.value ? b2.value.label = { ...b2.value?.label, formatter: Q.value } : delete b2.value?.label?.formatter, p2("seriesChange", b2.value);
  }
  function se() {
    b2.value.radius = [`${k2.value}%`, `${A2.value}%`], p2("seriesChange", b2.value);
  }
  function re() {
    b2.value.center = [`${W2.value}%`, `${B2.value}%`], p2("seriesChange", b2.value);
  }
  function de() {
    void 0 === T.value || null === T.value ? delete b2.value.startAngle : b2.value.startAngle = T.value, p2("seriesChange", b2.value);
  }
  function ce() {
    void 0 === q.value || null === q.value ? delete b2.value.endAngle : b2.value.endAngle = q.value, p2("seriesChange", b2.value);
  }
  function fe() {
    void 0 === D.value || null === D.value ? delete b2.value.padAngle : b2.value.padAngle = D.value, p2("seriesChange", b2.value);
  }
  function he() {
    b2.value.label = { ...b2.value?.label, position: X.value }, p2("seriesChange", b2.value);
  }
  function ge() {
    b2.value.label = { ...b2.value?.label, rotate: Y.value }, p2("seriesChange", b2.value);
  }
  return a(() => {
    Z();
  }), (l2, a2) => {
    const g3 = u("AInput");
    return n(), t("div", { class: v(i(C2)) }, [o(x, { title: e2.title, "default-expand": false, "allow-copy": true, onCopy: ee, onPaste: le }, { default: s(() => [o(x, { title: "图形样式" }, { default: s(() => [r("div", I, [a2[13] || (a2[13] = d(" 内圈半径 ")), o(i(E), { value: k2.value, "onUpdate:value": a2[0] || (a2[0] = (e3) => k2.value = e3), min: 0, max: 100, onChange: se }, null, 8, ["value"]), a2[14] || (a2[14] = d(" 外圈半径 ")), o(i(E), { value: A2.value, "onUpdate:value": a2[1] || (a2[1] = (e3) => A2.value = e3), min: 0, max: 100, onChange: se }, null, 8, ["value"])]), r("div", F, [a2[15] || (a2[15] = d(" 横向偏移 ")), o(i(E), { value: W2.value, "onUpdate:value": a2[2] || (a2[2] = (e3) => W2.value = e3), min: 0, max: 100, onChange: re }, null, 8, ["value"]), a2[16] || (a2[16] = d(" 纵向偏移 ")), o(i(E), { value: B2.value, "onUpdate:value": a2[3] || (a2[3] = (e3) => B2.value = e3), min: 0, max: 100, onChange: re }, null, 8, ["value"])]), r("div", O, [a2[17] || (a2[17] = d(" 起始角度 ")), o(i(E), { value: T.value, "onUpdate:value": a2[4] || (a2[4] = (e3) => T.value = e3), step: 5, min: 0, max: 360, onChange: de }, null, 8, ["value"]), a2[18] || (a2[18] = d(" 结束角度 ")), o(i(E), { value: q.value, "onUpdate:value": a2[5] || (a2[5] = (e3) => q.value = e3), step: 5, min: 0, max: 360, onChange: ce }, null, 8, ["value"])]), r("div", P, [a2[19] || (a2[19] = d(" 圆角 ")), o(i(E), { value: S2.value, "onUpdate:value": a2[6] || (a2[6] = (e3) => S2.value = e3), min: 0, max: 50, onChange: ae }, null, 8, ["value"]), a2[20] || (a2[20] = d(" 扇区间隔 ")), o(i(E), { value: D.value, "onUpdate:value": a2[7] || (a2[7] = (e3) => D.value = e3), min: 0, max: 360, onChange: fe }, null, 8, ["value"])])]), _: 1 }), o(x, { title: "标签设置", "default-expand": false, "allow-check": true, "title-check": e2.series?.label?.show, onChecked: ue }, { default: s(() => [o(i(_), { "hide-font-style": [i(U).Underline, i(U).Strikethrough], "color-type": 1, "hide-align": true, "text-style": G.value, onFontChange: ne, onSizeChange: ne, onFontStyleChange: te, onColorChange: ne }, null, 8, ["hide-font-style", "text-style"]), r("div", R, [o(i(L), { checked: H.value, "onUpdate:checked": a2[8] || (a2[8] = (e3) => H.value = e3), onChange: ve }, { default: s(() => a2[21] || (a2[21] = [d(" 显示标签线")])), _: 1, __: [21] }, 8, ["checked"]), a2[22] || (a2[22] = d(" 平滑度 ")), o(i(E), { value: K.value, "onUpdate:value": a2[9] || (a2[9] = (e3) => K.value = e3), step: 0.1, min: 0, max: 1, onChange: ie }, null, 8, ["value"])]), r("div", J, [a2[23] || (a2[23] = d(" 标签位置 ")), o(i($), { size: "small", value: X.value, "onUpdate:value": a2[10] || (a2[10] = (e3) => X.value = e3), onChange: he }, { default: s(() => [(n(), t(c, null, f(V, (e3, l3) => o(i(z), { key: l3, value: e3.value }, { default: s(() => [d(h(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), r("div", M, [a2[24] || (a2[24] = d(" 标签角度 ")), o(i(E), { value: Y.value, "onUpdate:value": a2[11] || (a2[11] = (e3) => Y.value = e3), min: -90, max: 90, onChange: ge }, null, 8, ["value"])]), r("div", N, [a2[25] || (a2[25] = d(" 标签格式 ")), r("div", null, [o(g3, { value: Q.value, "onUpdate:value": a2[12] || (a2[12] = (e3) => Q.value = e3), placeholder: "格式{a}{b}{c}{d} 详情参考pie label formatter属性", onChange: oe }, null, 8, ["value"])])])]), _: 1 }, 8, ["title-check"])]), _: 1 }, 8, ["title"])], 2);
  };
} }), [["__scopeId", "data-v-7b418964"]]), B = e({ __name: "MfPieConfig", setup(e2) {
  const l2 = A(), { seriesChange: a2 } = y();
  return (e3, u2) => (n(), g(m, null, { default: s(() => [o(p), o(C), o(S, { "hide-trigger": true }), o(b), (n(true), t(c, null, f(i(l2).getCurConfigComponent.chart.options?.series, (e4, l3) => (n(), g(W, { title: `饼状图-${l3 + 1}`, key: l3, series: e4, onSeriesChange: (e5) => i(a2)(e5, l3) }, null, 8, ["title", "series", "onSeriesChange"]))), 128))]), _: 1 }));
} });
export {
  B as default
};
