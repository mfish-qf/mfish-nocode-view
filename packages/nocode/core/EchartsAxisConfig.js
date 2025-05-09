import { defineComponent as e, ref as a, watch as l, createBlock as t, openBlock as i, normalizeClass as n, unref as o, withCtx as u, createElementVNode as v, createVNode as s, createTextVNode as c, computed as r, createElementBlock as d, Fragment as h, renderList as p, toDisplayString as g, resolveComponent as C } from "vue";
import { Checkbox as f, RadioGroup as x, RadioButton as m, Slider as y } from "ant-design-vue";
import { useDesign as k } from "@mfish/core/hooks";
import { u as S, f as L, _ as b, l as T, T as _, am as w } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { a as U } from "./EchartsBaseConfig.js";
import { C as I } from "./ConfigGroup.js";
const z = { style: { display: "flex", gap: "2px" } }, F = { class: "check-group" }, A = b(e({ __name: "EchartsGridConfig", setup(e2) {
  const r2 = S(), { prefixCls: d2 } = k("echarts-grid-config"), h2 = a(false), p2 = a(""), g2 = a(""), C2 = a(""), x2 = a(""), m2 = a(false);
  function y2(e3) {
    r2.getCurConfigComponent.chart.options.grid.left = p2.value;
  }
  function b2() {
    r2.getCurConfigComponent.chart.options.grid.right = g2.value;
  }
  function T2() {
    r2.getCurConfigComponent.chart.options.grid.top = C2.value;
  }
  function _2() {
    r2.getCurConfigComponent.chart.options.grid.bottom = x2.value;
  }
  function w2() {
    var _a, _b;
    m2.value ? ((_a = r2.getCurConfigComponent.chart.options.xAxis) == null ? true : delete _a.type, r2.getCurConfigComponent.chart.options.yAxis.type = "category") : ((_b = r2.getCurConfigComponent.chart.options.yAxis) == null ? true : delete _b.type, r2.getCurConfigComponent.chart.options.xAxis.type = "category");
  }
  function I2() {
    r2.getCurConfigComponent.chart.options.grid.show = h2.value;
  }
  return l(() => r2.getCurConfigComponent, (e3) => {
    e3 && function() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      m2.value = "category" === ((_a = r2.getCurConfigComponent.chart.options.yAxis) == null ? void 0 : _a.type), void 0 !== ((_c = (_b = r2.getCurConfigComponent.chart.options) == null ? void 0 : _b.grid) == null ? void 0 : _c.left) && (p2.value = r2.getCurConfigComponent.chart.options.grid.left);
      void 0 !== ((_e = (_d = r2.getCurConfigComponent.chart.options) == null ? void 0 : _d.grid) == null ? void 0 : _e.right) && (g2.value = r2.getCurConfigComponent.chart.options.grid.right);
      void 0 !== ((_g = (_f = r2.getCurConfigComponent.chart.options) == null ? void 0 : _f.grid) == null ? void 0 : _g.top) && (C2.value = r2.getCurConfigComponent.chart.options.grid.top);
      void 0 !== ((_i = (_h = r2.getCurConfigComponent.chart.options) == null ? void 0 : _h.grid) == null ? void 0 : _i.bottom) && (x2.value = r2.getCurConfigComponent.chart.options.grid.bottom);
    }();
  }, { immediate: true }), (e3, a2) => (i(), t(U, { class: n(o(d2)) }, { default: u(() => [a2[8] || (a2[8] = v("div", { class: "title" }, " 图表边距", -1)), v("div", z, [s(o(L), { prefix: "左", "is-number": false, placeholder: "数字或百分比", value: p2.value, "onUpdate:value": a2[0] || (a2[0] = (e4) => p2.value = e4), onChange: y2 }, null, 8, ["value"]), s(o(L), { prefix: "右", "is-number": false, placeholder: "数字或百分比", value: g2.value, "onUpdate:value": a2[1] || (a2[1] = (e4) => g2.value = e4), onChange: b2 }, null, 8, ["value"]), s(o(L), { prefix: "上", "is-number": false, placeholder: "数字或百分比", value: C2.value, "onUpdate:value": a2[2] || (a2[2] = (e4) => C2.value = e4), onChange: T2 }, null, 8, ["value"]), s(o(L), { prefix: "下", "is-number": false, placeholder: "数字或百分比", value: x2.value, "onUpdate:value": a2[3] || (a2[3] = (e4) => x2.value = e4), onChange: _2 }, null, 8, ["value"])]), v("div", F, [s(o(f), { checked: m2.value, "onUpdate:checked": a2[4] || (a2[4] = (e4) => m2.value = e4), onChange: w2 }, { default: u(() => a2[6] || (a2[6] = [c(" X、Y轴交换")])), _: 1 }, 8, ["checked"]), s(o(f), { checked: h2.value, "onUpdate:checked": a2[5] || (a2[5] = (e4) => h2.value = e4), onChange: I2 }, { default: u(() => a2[7] || (a2[7] = [c(" 显示网格")])), _: 1 }, 8, ["checked"])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-933ebb53"]]), X = { class: "title" }, j = { class: "title" }, M = { class: "title" }, E = b(e({ __name: "EchartsLineConfig", props: { axisType: { type: String, default: "X" }, lineStyle: { type: Object, default: () => ({}) } }, emits: ["lineStyleChange"], setup(e2, { emit: t2 }) {
  const C2 = e2, f2 = t2, { prefixCls: L2 } = k("echarts-line-config"), b2 = S(), _2 = a(C2.lineStyle), w2 = a(), U2 = a("solid"), I2 = [{ title: "实线", value: "solid" }, { title: "方形虚线", value: "dashed" }, { title: "圆点虚线", value: "dotted" }], z2 = r(() => "X" === C2.axisType ? Math.round(b2.getCurConfigComponent.chartContain.dropInfo.height / 50) : Math.round(b2.getCurConfigComponent.chartContain.dropInfo.width / 50));
  l(() => b2.getCurConfigComponent, (e3) => {
    var _a, _b, _c, _d;
    e3 && (void 0 !== ((_a = C2.lineStyle) == null ? void 0 : _a.color) && (w2.value = C2.lineStyle.color), void 0 !== ((_b = C2 == null ? void 0 : C2.lineStyle) == null ? void 0 : _b.type) && (U2.value = C2.lineStyle.type), void 0 !== ((_c = C2 == null ? void 0 : C2.lineStyle) == null ? void 0 : _c.width) && (F2.value = (_d = C2 == null ? void 0 : C2.lineStyle) == null ? void 0 : _d.width));
  }, { immediate: true });
  const F2 = a(1);
  function A2(e3) {
    E2(e3), w2.value = e3;
  }
  function E2(e3) {
    if (!e3) return delete _2.value.color, void f2("lineStyleChange", _2.value);
    _2.value = { ..._2.value, color: e3 }, f2("lineStyleChange", _2.value);
  }
  function W2() {
    _2.value = { ..._2.value, type: U2.value }, f2("lineStyleChange", _2.value);
  }
  function G2() {
    _2.value = { ..._2.value, width: F2.value }, f2("lineStyleChange", _2.value);
  }
  return (e3, a2) => (i(), d("div", { class: n(o(L2)) }, [v("div", X, [a2[2] || (a2[2] = c(" 线条颜色 ")), v("div", null, [s(o(T), { placeholder: "设置线条颜色，格式#FFFFFF", type: 1, value: w2.value, onConfirmChange: A2, onInputChange: E2 }, null, 8, ["value"])])]), v("div", j, [a2[3] || (a2[3] = c(" 线条类型 ")), s(o(x), { size: "small", value: U2.value, "onUpdate:value": a2[0] || (a2[0] = (e4) => U2.value = e4), onChange: W2 }, { default: u(() => [(i(), d(h, null, p(I2, (e4, a3) => s(o(m), { key: a3, value: e4.value }, { default: u(() => [c(g(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), v("div", M, [a2[4] || (a2[4] = c(" 线条宽度 ")), s(o(y), { value: F2.value, "onUpdate:value": a2[1] || (a2[1] = (e4) => F2.value = e4), min: 1, max: z2.value, onChange: G2 }, null, 8, ["value", "max"])])], 2));
} }), [["__scopeId", "data-v-8514ac74"]]), W = { class: "title" }, G = { class: "title" }, O = { class: "title" }, Y = { class: "title" }, $ = { class: "title" }, B = { class: "title" }, H = { class: "title" }, q = { class: "title" }, D = { class: "title" }, J = { class: "title" }, K = b(e({ __name: "EchartsAxisConfig", props: { axisType: { type: String, default: "X" }, axis: { type: Object, default: () => {
} } }, emits: ["axisChange"], setup(e2, { emit: f2 }) {
  const L2 = e2, b2 = f2, T2 = a(L2.axis), { prefixCls: U2 } = k("echarts-axis-config"), z2 = S(), F2 = a(""), A2 = a({}), X2 = a({}), j2 = a("auto"), M2 = r(() => "X" === L2.axisType ? Math.round(z2.getCurConfigComponent.chartContain.dropInfo.width / 50) : Math.round(z2.getCurConfigComponent.chartContain.dropInfo.height / 50)), K2 = r(() => "X" === L2.axisType ? Math.round(z2.getCurConfigComponent.chartContain.dropInfo.height / 5) : Math.round(z2.getCurConfigComponent.chartContain.dropInfo.width / 5)), N = [{ title: "自动", value: "auto" }, { title: "全显示", value: "0" }], P = a(false), Q = [{ title: "朝外", value: false }, { title: "朝内", value: true }], R = a("none"), V = [{ title: "无", value: "none" }, { title: "右箭头", value: "none,arrow" }, { title: "左箭头", value: "arrow,none" }, { title: "两端箭头", value: "arrow,arrow" }], Z = a(), ee = { X: [{ title: "底部", value: "bottom" }, { title: "顶部", value: "top" }], Y: [{ title: "左侧", value: "left" }, { title: "右侧", value: "right" }] }, ae = a("solid"), le = [{ title: "实线", value: "solid" }, { title: "方形虚线", value: "dashed" }, { title: "圆点虚线", value: "dotted" }], te = a(8), ie = a(0), ne = a(), oe = a(5), ue = a(1);
  function ve() {
    T2.value.name = F2.value;
  }
  function se(e3) {
    var _a, _b;
    (_a = T2.value.nameTextStyle) == null ? true : delete _a.fontStyle, (_b = T2.value.nameTextStyle) == null ? true : delete _b.fontWeight, ce(e3);
  }
  function ce(e3) {
    var _a;
    T2.value.nameTextStyle = { ...(_a = T2.value) == null ? void 0 : _a.nameTextStyle, ...e3.style }, b2("axisChange", T2.value);
  }
  function re(e3) {
    T2.value.nameLocation = "left" === e3.value ? "start" : "right" === e3.value ? "end" : e3.value, b2("axisChange", T2.value);
  }
  function de(e3) {
    T2.value = { ...T2.value, show: e3 }, b2("axisChange", T2.value);
  }
  function he(e3) {
    T2.value.axisLabel = { ...T2.value.axisLabel, show: e3 }, b2("axisChange", T2.value);
  }
  function pe() {
    T2.value.axisLabel = { ...T2.value.axisLabel, interval: j2.value }, b2("axisChange", T2.value);
  }
  function ge() {
    T2.value.axisLabel = { ...T2.value.axisLabel, margin: te.value }, b2("axisChange", T2.value);
  }
  function Ce() {
    T2.value.axisLabel = { ...T2.value.axisLabel, rotate: ie.value }, b2("axisChange", T2.value);
  }
  function fe(e3) {
    var _a, _b;
    (_a = T2.value.axisLabel) == null ? true : delete _a.fontStyle, (_b = T2.value.axisLabel) == null ? true : delete _b.fontWeight, xe(e3);
  }
  function xe(e3) {
    var _a;
    T2.value.axisLabel = { ...(_a = T2.value) == null ? void 0 : _a.axisLabel, ...e3.style }, b2("axisChange", T2.value);
  }
  function me() {
    T2.value.axisLabel = { ...T2.value.axisLabel, formatter: ne.value }, b2("axisChange", T2.value);
  }
  function ye(e3) {
    T2.value.axisLine = { ...T2.value.axisLine, show: e3 };
  }
  function ke(e3) {
    T2.value.axisTick = { ...T2.value.axisTick, show: e3 }, b2("axisChange", T2.value);
  }
  function Se() {
    T2.value = { ...T2.value, position: Z.value }, b2("axisChange", T2.value);
  }
  function Le() {
    T2.value.axisLine = { ...T2.value.axisLine, symbol: R.value.split(",") }, b2("axisChange", T2.value);
  }
  function be(e3) {
    var _a;
    T2.value.axisLine.lineStyle = { ...(_a = T2.value.axisLine) == null ? void 0 : _a.lineStyle, ...e3 }, b2("axisChange", T2.value);
  }
  function Te() {
    T2.value.axisTick = { ...T2.value.axisTick, inside: P.value }, b2("axisChange", T2.value);
  }
  function _e() {
    T2.value.axisTick = { ...T2.value.axisTick, length: oe.value }, b2("axisChange", T2.value);
  }
  function we() {
    var _a;
    T2.value.axisTick.lineStyle = { ...(_a = T2.value.axisTick) == null ? void 0 : _a.lineStyle, width: ue.value }, b2("axisChange", T2.value);
  }
  function Ue() {
    var _a;
    T2.value.axisTick.lineStyle = { ...(_a = T2.value.axisTick) == null ? void 0 : _a.lineStyle, type: ae.value }, b2("axisChange", T2.value);
  }
  function Ie(e3) {
    T2.value.splitLine = { ...T2.value.splitLine, show: e3 }, b2("axisChange", T2.value);
  }
  function ze(e3) {
    var _a;
    T2.value.splitLine.lineStyle = { ...(_a = T2.value.splitLine) == null ? void 0 : _a.lineStyle, ...e3 }, b2("axisChange", T2.value);
  }
  return l(() => z2.getCurConfigComponent, (e3) => {
    e3 && function() {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      A2.value = {};
      const e4 = L2.axis;
      if (!e4) return;
      F2.value = e4 == null ? void 0 : e4.name, A2.value.font = (_a = e4 == null ? void 0 : e4.nameTextStyle) == null ? void 0 : _a.fontFamily, A2.value.fontSize = (_c = (_b = e4 == null ? void 0 : e4.nameTextStyle) == null ? void 0 : _b.fontSize) == null ? void 0 : _c.replace("px", ""), A2.value.textColor = (_d = e4 == null ? void 0 : e4.nameTextStyle) == null ? void 0 : _d.color;
      const a2 = ((_e2 = e4 == null ? void 0 : e4.nameTextStyle) == null ? void 0 : _e2.fontStyle) ? { italic: true } : {}, l2 = ((_f = e4 == null ? void 0 : e4.nameTextStyle) == null ? void 0 : _f.fontWeight) ? { bold: true } : {};
      A2.value.fontStyle = { ...a2, ...l2 }, A2.value.hAlignType = "start" === (e4 == null ? void 0 : e4.nameLocation) ? "left" : "end" === (e4 == null ? void 0 : e4.nameLocation) ? "right" : e4 == null ? void 0 : e4.nameLocation, void 0 !== ((_g = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _g.interval) && (j2.value = (_h = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _h.interval);
      void 0 !== ((_i = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _i.margin) && (te.value = (_j = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _j.margin);
      void 0 !== ((_k = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _k.rotate) && (ie.value = (_l = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _l.rotate);
      void 0 !== ((_m = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _m.formatter) && (ne.value = (_n = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _n.formatter);
      void 0 === e4.position ? Z.value = ee[L2.axisType][0].value : Z.value = e4.position;
      if (X2.value = {}, !e4) return;
      X2.value.font = (_o = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _o.fontFamily, X2.value.fontSize = (_q = (_p = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _p.fontSize) == null ? void 0 : _q.replace("px", ""), X2.value.textColor = (_r = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _r.color;
      const t2 = ((_s = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _s.fontStyle) ? { italic: true } : {}, i2 = ((_t = e4 == null ? void 0 : e4.axisLabel) == null ? void 0 : _t.fontWeight) ? { bold: true } : {};
      X2.value.fontStyle = { ...t2, ...i2 }, void 0 !== ((_u = e4 == null ? void 0 : e4.axisLine) == null ? void 0 : _u.symbol) && (R.value = e4.axisLine.symbol.join(","));
      void 0 !== ((_v = e4 == null ? void 0 : e4.axisTick) == null ? void 0 : _v.inside) && (P.value = (_w = e4 == null ? void 0 : e4.axisTick) == null ? void 0 : _w.inside);
      void 0 !== ((_x = e4 == null ? void 0 : e4.axisTick) == null ? void 0 : _x.length) && (oe.value = e4.axisTick.length);
      void 0 !== ((_z = (_y = e4 == null ? void 0 : e4.axisTick) == null ? void 0 : _y.lineStyle) == null ? void 0 : _z.width) && (ue.value = e4.axisTick.lineStyle.width);
      void 0 !== ((_B = (_A = e4 == null ? void 0 : e4.axisTick) == null ? void 0 : _A.lineStyle) == null ? void 0 : _B.type) && (ae.value = e4 == null ? void 0 : e4.axisTick.lineStyle.type);
    }();
  }, { immediate: true }), (a2, l2) => {
    var _a;
    const r2 = C("AInput");
    return i(), d("div", { class: n(o(U2)) }, [s(I, { title: `${e2.axisType}轴配置`, "default-expand": false, "allow-check": true, "title-check": (_a = e2.axis) == null ? void 0 : _a.show, onChecked: de }, { default: u(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      return [v("div", W, [c(g(`${e2.axisType}轴位置`) + " ", 1), s(o(x), { size: "small", value: Z.value, "onUpdate:value": l2[0] || (l2[0] = (e3) => Z.value = e3), onChange: Se }, { default: u(() => [(i(true), d(h, null, p(ee[e2.axisType], (e3, a3) => (i(), t(o(m), { key: a3, value: e3.value }, { default: u(() => [c(g(e3.title), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["value"])]), s(I, { title: "名称配置" }, { default: u(() => [v("div", G, [v("div", null, [s(r2, { value: F2.value, "onUpdate:value": l2[1] || (l2[1] = (e3) => F2.value = e3), "show-count": "", maxlength: 50, onChange: ve }, null, 8, ["value"])])]), s(o(_), { "hide-font-style": [o(w).Underline, o(w).Strikethrough], "color-type": 1, "text-style": A2.value, onFontChange: ce, onSizeChange: ce, onColorChange: ce, onHAlignChange: re, onFontStyleChange: se }, null, 8, ["hide-font-style", "text-style"])]), _: 1 }), s(I, { title: "标签配置", "default-expand": false, "allow-check": true, "title-check": (_b = (_a2 = e2.axis) == null ? void 0 : _a2.axisLabel) == null ? void 0 : _b.show, onChecked: he }, { default: u(() => [v("div", O, [l2[11] || (l2[11] = c(" 标签间隔 ")), s(o(x), { size: "small", value: j2.value, "onUpdate:value": l2[2] || (l2[2] = (e3) => j2.value = e3), onChange: pe }, { default: u(() => [(i(), d(h, null, p(N, (e3) => s(o(m), { key: e3.value, value: e3.value }, { default: u(() => [c(g(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), s(o(_), { "hide-font-style": [o(w).Underline, o(w).Strikethrough], "hide-align": true, "color-type": 1, "text-style": X2.value, onFontChange: xe, onSizeChange: xe, onColorChange: xe, onFontStyleChange: fe }, null, 8, ["hide-font-style", "text-style"]), v("div", Y, [l2[12] || (l2[12] = c(" 标签与轴线间距 ")), s(o(y), { value: te.value, "onUpdate:value": l2[3] || (l2[3] = (e3) => te.value = e3), min: -100, max: 100, onChange: ge }, null, 8, ["value"])]), v("div", $, [l2[13] || (l2[13] = c(" 标签角度 ")), s(o(y), { value: ie.value, "onUpdate:value": l2[4] || (l2[4] = (e3) => ie.value = e3), min: -90, max: 90, onChange: Ce }, null, 8, ["value"])]), v("div", B, [l2[14] || (l2[14] = c(" 标签格式 ")), v("div", null, [s(r2, { value: ne.value, "onUpdate:value": l2[5] || (l2[5] = (e3) => ne.value = e3), placeholder: "格式{value}kg 详情参考echarts formatter属性", onChange: me }, null, 8, ["value"])])])]), _: 1 }, 8, ["title-check"]), s(I, { title: "轴线配置", "default-expand": false, "allow-check": true, "title-check": (_d = (_c = e2.axis) == null ? void 0 : _c.axisLine) == null ? void 0 : _d.show, onChecked: ye }, { default: u(() => {
        var _a3, _b2;
        return [s(E, { "axis-type": e2.axisType, "line-style": (_b2 = (_a3 = e2.axis) == null ? void 0 : _a3.axisLine) == null ? void 0 : _b2.lineStyle, onLineStyleChange: be }, null, 8, ["axis-type", "line-style"]), v("div", H, [l2[15] || (l2[15] = c(" 轴线箭头 ")), s(o(x), { size: "small", value: R.value, "onUpdate:value": l2[6] || (l2[6] = (e3) => R.value = e3), onChange: Le }, { default: u(() => [(i(), d(h, null, p(V, (e3, a3) => s(o(m), { key: a3, value: e3.value }, { default: u(() => [c(g(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])];
      }), _: 1 }, 8, ["title-check"]), s(I, { title: "刻度配置", "default-expand": false, "allow-check": true, "title-check": (_f = (_e2 = e2.axis) == null ? void 0 : _e2.axisTick) == null ? void 0 : _f.show, onChecked: ke }, { default: u(() => [v("div", q, [l2[16] || (l2[16] = c(" 刻度方向 ")), s(o(x), { size: "small", value: P.value, "onUpdate:value": l2[7] || (l2[7] = (e3) => P.value = e3), onChange: Te }, { default: u(() => [(i(), d(h, null, p(Q, (e3, a3) => s(o(m), { key: a3, value: e3.value }, { default: u(() => [c(g(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), v("div", D, [l2[17] || (l2[17] = c(" 刻度类型 ")), s(o(x), { size: "small", value: ae.value, "onUpdate:value": l2[8] || (l2[8] = (e3) => ae.value = e3), onChange: Ue }, { default: u(() => [(i(), d(h, null, p(le, (e3, a3) => s(o(m), { key: a3, value: e3.value }, { default: u(() => [c(g(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), v("div", J, [l2[18] || (l2[18] = c(" 刻度长度 ")), s(o(y), { value: oe.value, "onUpdate:value": l2[9] || (l2[9] = (e3) => oe.value = e3), min: 1, max: K2.value, onChange: _e }, null, 8, ["value", "max"]), l2[19] || (l2[19] = c(" 刻度宽度 ")), s(o(y), { value: ue.value, "onUpdate:value": l2[10] || (l2[10] = (e3) => ue.value = e3), min: 1, max: M2.value, onChange: we }, null, 8, ["value", "max"])])]), _: 1 }, 8, ["title-check"]), s(I, { title: "分隔线配置", "default-expand": false, "allow-check": true, "title-check": (_h = (_g = e2.axis) == null ? void 0 : _g.splitLine) == null ? void 0 : _h.show, onChecked: Ie }, { default: u(() => {
        var _a3;
        return [s(E, { "axis-type": e2.axisType, "line-style": (_a3 = e2.axis) == null ? void 0 : _a3.splitLine.lineStyle, onLineStyleChange: ze }, null, 8, ["axis-type", "line-style"])];
      }), _: 1 }, 8, ["title-check"])];
    }), _: 1 }, 8, ["title", "title-check"])], 2);
  };
} }), [["__scopeId", "data-v-9459b2a1"]]);
export {
  A as E,
  K as a
};
