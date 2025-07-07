import { defineComponent as t, ref as e, watch as o, createBlock as n, openBlock as a, normalizeClass as l, unref as i, withCtx as u, createVNode as r, createElementVNode as c, createTextVNode as s, createElementBlock as C, Fragment as h, renderList as p, toDisplayString as g, createCommentVNode as v } from "vue";
import { useDesign as f } from "@mfish/core/hooks";
import { u as d, h as m, M as y, _ as k } from "./index.js";
import { S as _ } from "./StyleConfig.js";
import { RadioGroup as U, RadioButton as z, Checkbox as I, Slider as w } from "ant-design-vue";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
const x = { class: "title" }, F = { class: "title" }, b = { class: "title" }, A = { class: "title" }, P = { key: 0, class: "title" }, S = { class: "title" }, M = { class: "title" }, X = { class: "title" }, Y = { class: "title" }, j = k(t({ __name: "MfTireMarksConfig", setup(t2) {
  const k2 = d(), { prefixCls: j2 } = f("wheel-config"), G = e(), H = e(16), T = e("horizontal"), q = [{ title: "横向", value: "horizontal" }, { title: "竖向", value: "vertical" }], B = e("left"), D = [{ title: "左边", value: "left" }, { title: "右边", value: "right" }], E = [{ title: "顶部", value: "top" }, { title: "底部", value: "bottom" }], J = e(10), K = e(10);
  function L() {
    "horizontal" === T.value ? B.value = k2.getCurConfigComponent.chart.options.style.chart.percentage.horizontalPosition ?? "left" : B.value = k2.getCurConfigComponent.chart.options.style.chart.percentage.verticalPosition ?? "bottom";
  }
  function N(t3) {
    k2.getCurConfigComponent.chart.options.style.chart.percentage.show = t3;
  }
  function O() {
    k2.getCurConfigComponent.chart.options.style.chart.percentage.fontSize = H.value;
  }
  function Q() {
    k2.getCurConfigComponent.chart.options.style.chart.layout.display = T.value;
    const t3 = k2.getCurConfigComponent.chartContain.dropInfo.width, e2 = k2.getCurConfigComponent.chartContain.dropInfo.height;
    L(), "horizontal" === T.value && t3 > e2 || "vertical" === T.value && e2 > t3 || (k2.getCurConfigComponent.chartContain.dropInfo.width = e2, k2.getCurConfigComponent.chartContain.dropInfo.height = t3);
  }
  function R() {
    k2.getCurConfigComponent.chart.options.style.chart.percentage.horizontalPosition = B.value;
  }
  function V() {
    k2.getCurConfigComponent.chart.options.style.chart.percentage.verticalPosition = B.value;
  }
  function W() {
    k2.getCurConfigComponent.chart.options.style.chart.layout.curveAngleX = J.value;
  }
  function Z() {
    k2.getCurConfigComponent.chart.options.style.chart.layout.curveAngleY = K.value;
  }
  function $(t3, e2) {
    tt(t3, e2), G.value = e2;
  }
  function tt(t3, e2) {
    k2.getCurConfigComponent.chart.options.style.chart.layout.activeColor = e2;
  }
  return o(() => k2.getCurConfigComponent, (t3) => {
    t3 && (G.value = k2.getCurConfigComponent.chart?.options.style.chart?.layout?.activeColor, H.value = k2.getCurConfigComponent.chart?.options.style.chart?.percentage?.fontSize, T.value = k2.getCurConfigComponent.chart?.options.style.chart?.layout?.display, L(), J.value = k2.getCurConfigComponent.chart?.options.style.chart?.layout?.curveAngleX, K.value = k2.getCurConfigComponent.chart?.options.style.chart?.layout?.curveAngleY);
  }, { immediate: true }), (t3, e2) => (a(), n(_, { class: l(i(j2)) }, { default: u(() => [r(m, { title: "图形配置" }, { default: u(() => [c("div", x, [e2[13] || (e2[13] = s(" 图形方向 ")), r(i(U), { size: "small", value: T.value, "onUpdate:value": e2[0] || (e2[0] = (t4) => T.value = t4), onChange: Q }, { default: u(() => [(a(), C(h, null, p(q, (t4, e3) => r(i(z), { key: e3, value: t4.value }, { default: u(() => [s(g(t4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), c("div", F, [e2[14] || (e2[14] = s(" 激活颜色 ")), c("div", null, [r(i(y), { placeholder: "设置进度颜色，格式#FFFFFF", type: 1, value: G.value, onConfirmChange: $, onInputChange: tt }, null, 8, ["value"])])]), c("div", b, [r(i(I), { checked: i(k2).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.show, "onUpdate:checked": e2[1] || (e2[1] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.show = t4) }, { default: u(() => e2[15] || (e2[15] = [s(" 渐变色 ")])), _: 1, __: [15] }, 8, ["checked"]), r(i(w), { value: i(k2).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.shiftHueIntensity, "onUpdate:value": e2[2] || (e2[2] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.shiftHueIntensity = t4), min: 0, max: 100 }, null, 8, ["value"])]), c("div", A, [r(i(I), { checked: i(k2).getCurConfigComponent.chart.options.style.chart.layout.curved, "onUpdate:checked": e2[3] || (e2[3] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.layout.curved = t4) }, { default: u(() => e2[16] || (e2[16] = [s(" 弧形 ")])), _: 1, __: [16] }, 8, ["checked"]), i(k2).getCurConfigComponent.chart.options.style.chart.layout.curved ? (a(), C("div", P, [e2[17] || (e2[17] = s(" X角度 ")), r(i(w), { value: J.value, "onUpdate:value": e2[4] || (e2[4] = (t4) => J.value = t4), min: 1, max: 30, onChange: W }, null, 8, ["value"]), e2[18] || (e2[18] = s(" Y角度 ")), r(i(w), { value: K.value, "onUpdate:value": e2[5] || (e2[5] = (t4) => K.value = t4), min: 1, max: 30, onChange: Z }, null, 8, ["value"])])) : v("", true)]), c("div", S, [r(i(I), { checked: i(k2).getCurConfigComponent.chart.options.style.chart.layout.crescendo, "onUpdate:checked": e2[6] || (e2[6] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.layout.crescendo = t4) }, { default: u(() => e2[19] || (e2[19] = [s(" 渐强 ")])), _: 1, __: [19] }, 8, ["checked"])])]), _: 1 }), r(m, { title: "数值样式", "allow-check": true, "title-check": i(k2).getCurConfigComponent.chart.options.style.chart?.percentage?.show, onChecked: N }, { default: u(() => [c("div", M, [e2[20] || (e2[20] = s(" 文字位置 ")), "horizontal" === T.value ? (a(), n(i(U), { key: 0, size: "small", value: B.value, "onUpdate:value": e2[7] || (e2[7] = (t4) => B.value = t4), onChange: R }, { default: u(() => [(a(), C(h, null, p(D, (t4, e3) => r(i(z), { key: e3, value: t4.value }, { default: u(() => [s(g(t4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])) : (a(), n(i(U), { key: 1, size: "small", value: B.value, "onUpdate:value": e2[8] || (e2[8] = (t4) => B.value = t4), onChange: V }, { default: u(() => [(a(), C(h, null, p(E, (t4, e3) => r(i(z), { key: e3, value: t4.value }, { default: u(() => [s(g(t4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"]))]), c("div", X, [e2[22] || (e2[22] = s(" 字体大小 ")), r(i(w), { value: H.value, "onUpdate:value": e2[9] || (e2[9] = (t4) => H.value = t4), min: 8, max: 100, onChange: O }, null, 8, ["value"]), r(i(I), { checked: i(k2).getCurConfigComponent.chart.options.style.chart.percentage.bold, "onUpdate:checked": e2[10] || (e2[10] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.percentage.bold = t4) }, { default: u(() => e2[21] || (e2[21] = [s(" 加粗 ")])), _: 1, __: [21] }, 8, ["checked"])]), c("div", Y, [e2[23] || (e2[23] = s(" 小数位数 ")), r(i(w), { value: i(k2).getCurConfigComponent.chart.options.style.chart.percentage.rounding, "onUpdate:value": e2[11] || (e2[11] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.percentage.rounding = t4), min: 0, max: 6 }, null, 8, ["value"])]), r(i(I), { checked: i(k2).getCurConfigComponent.chart.options.style.chart.percentage.useGradientColor, "onUpdate:checked": e2[12] || (e2[12] = (t4) => i(k2).getCurConfigComponent.chart.options.style.chart.percentage.useGradientColor = t4) }, { default: u(() => e2[24] || (e2[24] = [s(" 跟随图形颜色 ")])), _: 1, __: [24] }, 8, ["checked"])]), _: 1 }, 8, ["title-check"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-936c49de"]]);
export {
  j as default
};
