import { defineComponent as e, ref as a, reactive as l, computed as t, watch as o, openBlock as i, createElementBlock as n, normalizeClass as u, unref as r, createVNode as s, withCtx as v, createElementVNode as c, createTextVNode as d, Fragment as m, renderList as f, toDisplayString as p, createCommentVNode as g, createBlock as h } from "vue";
import { S as C } from "./StyleConfig.js";
import { useDesign as y, useMessage as S } from "@mfish/core/hooks";
import { E as k } from "./EchartsBaseConfig.js";
import { E as b } from "./EchartsLegendConfig.js";
import { E as x, a as _ } from "./EchartsAxisConfig.js";
import { u as F, E } from "./UseEchartsSeriesConfig.js";
import { u as U, d as R, M as j, an as w, ao as A, _ as I } from "./index.js";
import { RadioGroup as L, RadioButton as $, Slider as G, Checkbox as B } from "ant-design-vue";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
import * as M from "echarts";
import { E as O } from "./EchartsSeriesLabelConfig.js";
const J = { class: "title" }, N = { class: "title" }, z = { key: 0, class: "title" }, P = { key: 1, class: "title" }, W = { key: 2, class: "title" }, Y = { key: 3, class: "check-group" }, q = { class: "title" }, D = { class: "title" }, H = I(e({ __name: "EchartsSeriesConfig", props: { title: { type: String, default: "柱体样式" }, series: { type: Object, default: () => {
} } }, emits: ["seriesChange"], setup(e2, { emit: h2 }) {
  const C2 = e2, k2 = h2, { prefixCls: b2 } = y("echarts-series-config"), x2 = a(C2.series), { createMessage: _2 } = S(), F2 = U(), E2 = a("bar"), I2 = [{ title: "柱体", value: "bar" }, { title: "折线", value: "line" }], H2 = a(), K2 = a(), Q = a(0), T = l([0, 0, 0, 0]), V = t(() => Math.round(F2.getCurConfigComponent.chartContain.dropInfo.width / 10)), X = a(0), Z = a(false), ee = a(false), ae = a(false);
  function le() {
    void 0 !== x2.value.itemStyle?.linearGradientColor ? H2.value = x2.value.itemStyle?.linearGradientColor : void 0 !== x2.value.itemStyle?.color && (H2.value = x2.value.itemStyle.color), void 0 !== x2.value.itemStyle?.borderRadius && (Q.value = x2.value.itemStyle.borderRadius[0], T[0] = x2.value.itemStyle.borderRadius[0], T[1] = x2.value.itemStyle.borderRadius[1], T[2] = x2.value.itemStyle.borderRadius[2], T[3] = x2.value.itemStyle.borderRadius[3]), void 0 !== x2.value.backgroundStyle?.color && (K2.value = x2.value.backgroundStyle.color), void 0 !== x2.value.backgroundStyle?.borderRadius && (X.value = x2.value.backgroundStyle.borderRadius), void 0 !== x2.value.smooth && (Z.value = x2.value.smooth), void 0 !== x2.value.areaStyle && (ee.value = true), void 0 !== x2.value.stack && (ae.value = true), void 0 !== x2.value.type && (E2.value = x2.value.type);
  }
  function te(e3) {
    e3(JSON.stringify({ series: x2.value }));
  }
  function oe() {
    x2.value = { ...x2.value, type: E2.value }, k2("seriesChange", x2.value);
  }
  function ie(e3) {
    const a2 = JSON.parse(e3);
    a2 && a2.series ? (x2.value = a2.series, le(), k2("seriesChange", x2.value)) : _2.warning("粘贴失败，无配置或不匹配");
  }
  function ne(e3) {
    x2.value = { ...x2.value, showBackground: e3 }, k2("seriesChange", x2.value);
  }
  function ue(e3) {
    re(e3), H2.value = e3;
  }
  function re(e3) {
    if (!e3) return delete x2.value.itemStyle?.color, void k2("seriesChange", x2.value);
    if (e3.startsWith("linear-gradient(")) {
      const a2 = w(e3), l2 = A(a2.deg), t2 = a2.colors.map((e4) => ({ offset: e4.rgbaLength.replace("%", "") / 100, color: e4.rgba }));
      x2.value.itemStyle = { ...x2.value?.itemStyle, color: new M.graphic.LinearGradient(l2.x1, l2.y1, l2.x2, l2.y2, t2) }, x2.value.itemStyle.linearGradientColor = e3;
    } else x2.value.itemStyle = { ...x2.value?.itemStyle, color: e3 }, delete x2.value.itemStyle.linearGradientColor;
    k2("seriesChange", x2.value);
  }
  function se() {
    for (const e3 in T) T[e3] = Q.value;
    ve();
  }
  function ve() {
    x2.value.itemStyle = { ...x2.value?.itemStyle, borderRadius: T }, k2("seriesChange", x2.value);
  }
  function ce(e3) {
    de(e3), K2.value = e3;
  }
  function de(e3) {
    if (!e3) return delete x2.value.backgroundStyle?.color, void k2("seriesChange", x2.value);
    x2.value.backgroundStyle = { ...x2.value?.backgroundStyle, color: e3 }, k2("seriesChange", x2.value);
  }
  function me() {
    x2.value.backgroundStyle = { ...x2.value?.backgroundStyle, borderRadius: X.value }, k2("seriesChange", x2.value);
  }
  function fe() {
    x2.value.smooth = Z.value, k2("seriesChange", x2.value);
  }
  function pe() {
    ee.value ? x2.value.areaStyle = {} : delete x2.value.areaStyle, k2("seriesChange", x2.value);
  }
  function ge() {
    ae.value ? x2.value.stack = "total" : delete x2.value.stack, k2("seriesChange", x2.value);
  }
  function he(e3) {
    x2.value.label = { ...x2.value?.label, ...e3.label }, k2("seriesChange", x2.value);
  }
  return o(() => F2.getCurConfigComponent, (e3) => {
    e3 && le();
  }, { immediate: true }), (a2, l2) => (i(), n("div", { class: u(r(b2)) }, [s(R, { title: e2.title, "default-expand": false, "allow-copy": true, onCopy: te, onPaste: ie }, { default: v(() => [s(R, { title: "图形样式" }, { default: v(() => [c("div", J, [l2[10] || (l2[10] = d(" 图形类型 ", -1)), s(r(L), { size: "small", value: E2.value, "onUpdate:value": l2[0] || (l2[0] = (e3) => E2.value = e3), onChange: oe }, { default: v(() => [(i(), n(m, null, f(I2, (e3, a3) => s(r($), { key: a3, value: e3.value }, { default: v(() => [d(p(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), c("div", N, [l2[11] || (l2[11] = d(" 图形颜色 ", -1)), c("div", null, [s(r(j), { placeholder: "设置图形颜色，格式#FFFFFF", value: H2.value, onConfirmChange: ue, onInputChange: re }, null, 8, ["value"])])]), "bar" === x2.value.type ? (i(), n("div", z, [l2[12] || (l2[12] = d(" 圆角 ", -1)), s(r(G), { value: Q.value, "onUpdate:value": l2[1] || (l2[1] = (e3) => Q.value = e3), min: 0, max: V.value, onChange: se }, null, 8, ["value", "max"])])) : g("", true), "bar" === x2.value.type ? (i(), n("div", P, [l2[13] || (l2[13] = d(" 左上 ", -1)), s(r(G), { "tip-formatter": (e3) => `左上圆角：${e3}`, value: T[0], "onUpdate:value": l2[2] || (l2[2] = (e3) => T[0] = e3), min: 0, max: V.value, onChange: ve }, null, 8, ["tip-formatter", "value", "max"]), l2[14] || (l2[14] = d(" 右上 ", -1)), s(r(G), { "tip-formatter": (e3) => `右上圆角：${e3}`, value: T[1], "onUpdate:value": l2[3] || (l2[3] = (e3) => T[1] = e3), min: 0, max: V.value, onChange: ve }, null, 8, ["tip-formatter", "value", "max"])])) : g("", true), "bar" === x2.value.type ? (i(), n("div", W, [l2[15] || (l2[15] = d(" 左下 ", -1)), s(r(G), { "tip-formatter": (e3) => `左下圆角：${e3}`, value: T[3], "onUpdate:value": l2[4] || (l2[4] = (e3) => T[3] = e3), min: 0, max: V.value, onChange: ve }, null, 8, ["tip-formatter", "value", "max"]), l2[16] || (l2[16] = d(" 右下 ", -1)), s(r(G), { "tip-formatter": (e3) => `右下圆角：${e3}`, value: T[2], "onUpdate:value": l2[5] || (l2[5] = (e3) => T[2] = e3), min: 0, max: V.value, onChange: ve }, null, 8, ["tip-formatter", "value", "max"])])) : g("", true), s(r(B), { checked: ae.value, "onUpdate:checked": l2[6] || (l2[6] = (e3) => ae.value = e3), onChange: ge }, { default: v(() => [d(" 堆叠" + p("line" === x2.value?.type ? "折线图" : "柱状图"), 1)]), _: 1 }, 8, ["checked"]), "line" === x2.value.type ? (i(), n("div", Y, [s(r(B), { checked: Z.value, "onUpdate:checked": l2[7] || (l2[7] = (e3) => Z.value = e3), onChange: fe }, { default: v(() => [...l2[17] || (l2[17] = [d(" 平滑折线", -1)])]), _: 1 }, 8, ["checked"]), s(r(B), { checked: ee.value, "onUpdate:checked": l2[8] || (l2[8] = (e3) => ee.value = e3), onChange: pe }, { default: v(() => [...l2[18] || (l2[18] = [d(" 面积折线", -1)])]), _: 1 }, 8, ["checked"])])) : g("", true)]), _: 1 }), s(O, { series: e2.series, onLabelChange: he }, null, 8, ["series"]), s(R, { title: "背景设置", "default-expand": false, "allow-check": true, "title-check": e2.series?.showBackground, onChecked: ne }, { default: v(() => [c("div", q, [l2[19] || (l2[19] = d(" 背景颜色 ", -1)), c("div", null, [s(r(j), { placeholder: "设置背景颜色，格式#FFFFFF", type: 1, value: K2.value, onConfirmChange: ce, onInputChange: de }, null, 8, ["value"])])]), c("div", D, [l2[20] || (l2[20] = d(" 圆角 ", -1)), s(r(G), { value: X.value, "onUpdate:value": l2[9] || (l2[9] = (e3) => X.value = e3), step: 1, min: 0, max: V.value, onChange: me }, null, 8, ["value", "max"])])]), _: 1 }, 8, ["title-check"])]), _: 1 }, 8, ["title"])], 2));
} }), [["__scopeId", "data-v-93add443"]]), K = I(e({ __name: "MfBarLineConfig", setup(e2) {
  const { prefixCls: a2 } = y("bar-line-config"), l2 = U(), { seriesChange: t2 } = F();
  function o2(e3) {
    l2.getCurConfigComponent.chart.options.xAxis = e3;
  }
  function c2(e3) {
    l2.getCurConfigComponent.chart.options.yAxis = e3;
  }
  return (e3, d2) => (i(), h(C, { class: u(r(a2)) }, { default: v(() => [s(x), s(k), s(E), s(b), s(_, { axis: r(l2).getCurConfigComponent.chart.options.xAxis, onAxisChange: o2 }, null, 8, ["axis"]), s(_, { "axis-type": "Y", axis: r(l2).getCurConfigComponent.chart.options.yAxis, onAxisChange: c2 }, null, 8, ["axis"]), (i(true), n(m, null, f(r(l2).getCurConfigComponent.chart.options?.series, (e4, a3) => (i(), h(H, { title: `${"line" === e4?.type ? "折线图" : "柱状图"}-${a3 + 1}`, key: a3, series: e4, onSeriesChange: (e5) => r(t2)(e5, a3) }, null, 8, ["title", "series", "onSeriesChange"]))), 128))]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-cb158c30"]]);
export {
  K as default
};
