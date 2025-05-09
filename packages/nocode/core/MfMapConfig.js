import { defineComponent as e, ref as o, computed as t, watch as n, createElementBlock as i, openBlock as a, normalizeClass as l, unref as s, createVNode as r, withCtx as u, createElementVNode as p, createCommentVNode as C, Fragment as c, renderList as g, createTextVNode as f, toDisplayString as m, resolveComponent as h, createBlock as v } from "vue";
import { S as d } from "./StyleConfig.js";
import { a as y, E as _ } from "./EchartsBaseConfig.js";
import { u as b, ao as k, _ as E, l as M, an as x } from "./index.js";
import { useDesign as R } from "@mfish/core/hooks";
import { RadioGroup as F, RadioButton as I, Slider as S, Checkbox as w } from "ant-design-vue";
import { C as U } from "./ConfigGroup.js";
import { E as j } from "./EchartsSeriesLabelConfig.js";
import { cloneDeep as z } from "lodash-es";
import "@mfish/core/enums";
import { Icon as T } from "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
const A = { class: "title" }, B = { key: 0, class: "title" }, L = E(e({ __name: "MfEffectScatterConfig", setup(e2) {
  const { prefixCls: h2 } = R("effect-scatter-config"), v2 = b(), { getSeries: d2 } = k(), y2 = o("circle"), _2 = [{ title: "圆形", value: "circle" }, { title: "方形", value: "rect" }, { title: "三角形", value: "triangle" }, { title: "菱形", value: "diamond" }, { title: "定位", value: "pin" }, { title: "箭头", value: "arrow" }], E2 = o("stroke"), M2 = [{ title: "描边", value: "stroke" }, { title: "填充", value: "fill" }], x2 = o(10), w2 = o(0), z2 = o(true), T2 = o(3), L2 = t(() => {
    var _a;
    return ((_a = v2.getCurConfigComponent.chart.options.series) == null ? void 0 : _a.length) > 1 ? v2.getCurConfigComponent.chart.options.series[1] : {};
  });
  n(() => v2.getCurConfigComponent, (e3) => {
    var _a, _b, _c;
    e3 && ((_a = v2.getCurConfigComponent.chart.options.series) == null ? void 0 : _a.length) > 1 && (void 0 !== v2.getCurConfigComponent.chart.options.series[1].symbol && (y2.value = v2.getCurConfigComponent.chart.options.series[1].symbol), void 0 !== v2.getCurConfigComponent.chart.options.series[1].symbolSize && (x2.value = v2.getCurConfigComponent.chart.options.series[1].symbolSize), void 0 !== v2.getCurConfigComponent.chart.options.series[1].symbolRotate && (w2.value = v2.getCurConfigComponent.chart.options.series[1].symbolRotate), void 0 !== ((_b = v2.getCurConfigComponent.chart.options.series[1].label) == null ? void 0 : _b.show) && (z2.value = v2.getCurConfigComponent.chart.options.series[1].label.show), void 0 !== ((_c = v2.getCurConfigComponent.chart.options.series[1].rippleEffect) == null ? void 0 : _c.brushType) && (E2.value = v2.getCurConfigComponent.chart.options.series[1].rippleEffect.brushType));
  }, { immediate: true });
  const G2 = t(() => v2.getCurConfigComponent.chart.options.series && v2.getCurConfigComponent.chart.options.series.length > 1);
  function q2(e3) {
    v2.getCurConfigComponent.chart.options.series = d2(v2.getCurConfigComponent.chart, Array.from({ length: e3 ? 2 : 1 }));
  }
  function D() {
    v2.getCurConfigComponent.chart.options.series[1].symbol = y2.value;
  }
  function H(e3) {
    v2.getCurConfigComponent.chart.options.series[1].symbolSize = e3;
  }
  function J(e3) {
    v2.getCurConfigComponent.chart.options.series[1].symbolRotate = e3;
  }
  function K(e3) {
    v2.getCurConfigComponent.chart.options.series[1].label = { ...v2.getCurConfigComponent.chart.options.series[1].label, ...e3.label };
  }
  function N() {
    v2.getCurConfigComponent.chart.options.series[1].rippleEffect = { ...v2.getCurConfigComponent.chart.options.series[1].rippleEffect, brushType: E2.value };
  }
  function O(e3) {
    v2.getCurConfigComponent.chart.options.series[1].rippleEffect = { ...v2.getCurConfigComponent.chart.options.series[1].rippleEffect, number: e3 };
  }
  return (e3, o2) => (a(), i("div", { class: l(s(h2)) }, [r(U, { title: "气泡配置", "default-expand": false, "allow-check": true, "title-check": G2.value, onChecked: q2 }, { default: u(() => {
    var _a, _b, _c;
    return [o2[9] || (o2[9] = p("div", { class: "title" }, " 形状", -1)), r(s(F), { size: "small", value: y2.value, "onUpdate:value": o2[0] || (o2[0] = (e4) => y2.value = e4), onChange: D }, { default: u(() => [(a(), i(c, null, g(_2, (e4) => r(s(I), { key: e4.value, value: e4.value }, { default: u(() => [f(m(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"]), p("div", A, [o2[5] || (o2[5] = f(" 大小 ")), r(s(S), { value: x2.value, "onUpdate:value": o2[1] || (o2[1] = (e4) => x2.value = e4), min: 5, max: 50, onChange: H }, null, 8, ["value"]), o2[6] || (o2[6] = f(" 角度 ")), r(s(S), { value: w2.value, "onUpdate:value": o2[2] || (o2[2] = (e4) => w2.value = e4), min: 0, max: 360, onChange: J }, null, 8, ["value"])]), r(j, { series: L2.value, onLabelChange: K }, null, 8, ["series"]), ((_c = (_b = (_a = s(v2).getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.options) == null ? void 0 : _c.geo) ? (a(), i("div", B, [o2[7] || (o2[7] = f(" 涟漪类型 ")), p("div", null, [r(s(F), { size: "small", value: E2.value, "onUpdate:value": o2[3] || (o2[3] = (e4) => E2.value = e4), onChange: N }, { default: u(() => [(a(), i(c, null, g(M2, (e4) => r(s(I), { key: e4.value, value: e4.value }, { default: u(() => [f(m(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), o2[8] || (o2[8] = f(" 数量 ")), r(s(S), { value: T2.value, "onUpdate:value": o2[4] || (o2[4] = (e4) => T2.value = e4), min: 0, max: 10, onChange: O }, null, 8, ["value"])])) : C("", true)];
  }), _: 1 }, 8, ["title-check"])], 2));
} }), [["__scopeId", "data-v-b55e2c44"]]), G = E(e({ __name: "MfColorIntervalConfig", props: { themeColors: { type: Array, default: () => [] } }, setup(e2) {
  const o2 = e2, m2 = b(), { prefixCls: d2 } = R("color-interval-config"), y2 = t(() => {
    var _a, _b;
    return ((_b = (_a = m2.getCurComponent.chart.options.visualMap) == null ? void 0 : _a.inRange) == null ? void 0 : _b.color) || [];
  });
  function _2() {
    const e3 = m2.getCurComponent.chart.options.visualMap.inRange.color.length;
    o2.themeColors.length > e3 ? m2.getCurComponent.chart.options.visualMap.inRange.color.push(o2.themeColors[e3]) : m2.getCurComponent.chart.options.visualMap.inRange.color.push("#FF0000");
  }
  return n(() => o2.themeColors, (e3) => {
    (e3 == null ? void 0 : e3.length) > 0 && (m2.getCurComponent.chart.options.visualMap.inRange.color = z(e3));
  }), n(() => m2.getCurConfigComponent, (e3) => {
  }, { immediate: true }), (e3, o3) => {
    const t2 = h("AButton");
    return a(), i("div", { class: l(s(d2)) }, [r(U, { title: "颜色区间配置", "default-expand": true }, { default: u(() => [(a(true), i(c, null, g(y2.value, (e4, t3) => (a(), i("div", { class: "title", key: t3 }, [o3[0] || (o3[0] = f(" 区间颜色 ")), p("div", null, [r(s(M), { type: 1, placeholder: "设置区间颜色，格式#FFFFFF", value: e4, "hide-cancel": true, "hide-confirm": true, onInputChange: (e5) => function(e6, o4) {
      m2.getCurComponent.chart.options.visualMap.inRange.color[o4] = e6 || "";
    }(e5, t3) }, null, 8, ["value", "onInputChange"])]), t3 > 0 ? (a(), v(s(T), { key: 0, class: "color-delete", icon: "ant-design:delete-outlined", onClick: (e5) => function(e6) {
      m2.getCurComponent.chart.options.visualMap.inRange.color.splice(e6, 1);
    }(t3) }, null, 8, ["onClick"])) : C("", true)]))), 128)), r(t2, { onClick: _2 }, { icon: u(() => [r(s(T), { icon: "ant-design:plus-outlined" })]), default: u(() => [o3[1] || (o3[1] = f(" 添加区间颜色 "))]), _: 1 })]), _: 1 })], 2);
  };
} }), [["__scopeId", "data-v-a73fcec4"]]), q = E(e({ __name: "MfMapConfig", setup(e2) {
  const t2 = b(), { prefixCls: i2 } = R("map-chart-config"), p2 = o(true), C2 = o(z(x[0].color));
  function c2() {
    t2.getCurConfigComponent.chart.options.tooltip = { ...t2.getCurConfigComponent.chart.options.tooltip, show: p2.value };
  }
  function g2(e3) {
    C2.value = z(e3.color);
  }
  return n(() => t2.getCurConfigComponent, (e3) => {
    var _a, _b;
    e3 && void 0 !== ((_a = t2.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.show) && (p2.value = ((_b = t2.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _b.show) || false);
  }, { immediate: true }), (e3, o2) => (a(), v(d, { class: l(s(i2)) }, { default: u(() => [r(y, { onThemeChange: g2 }), r(_), r(s(w), { checked: p2.value, "onUpdate:checked": o2[0] || (o2[0] = (e4) => p2.value = e4), onChange: c2 }, { default: u(() => o2[1] || (o2[1] = [f(" 提示框")])), _: 1 }, 8, ["checked"]), r(L), r(G, { "theme-colors": C2.value }, null, 8, ["theme-colors"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-7970d757"]]);
export {
  q as default
};
