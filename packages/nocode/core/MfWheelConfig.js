import { defineComponent as t, ref as e, watch as o, createBlock as n, openBlock as a, normalizeClass as l, unref as i, withCtx as r, createVNode as c, createElementVNode as u, createTextVNode as s } from "vue";
import { useDesign as h } from "@mfish/core/hooks";
import { u as C, h as p, M as g, _ as f } from "./index.js";
import { S as m } from "./StyleConfig.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { Slider as y, Checkbox as d } from "ant-design-vue";
import "@mfish/core/utils/Is";
const v = { class: "title" }, k = { class: "title" }, w = { class: "title" }, _ = { class: "title" }, F = { class: "title" }, x = { class: "title" }, I = f(t({ __name: "MfWheelConfig", setup(t2) {
  const f2 = C(), { prefixCls: I2 } = h("wheel-config"), U = e(), z = e(), S = e(1), W = e(48);
  function b(t3) {
    j(t3), U.value = t3;
  }
  function j(t3) {
    f2.getCurConfigComponent.chart.options.style.chart.layout.innerCircle.stroke = t3;
  }
  function H(t3, e2) {
    M(t3, e2), z.value = e2;
  }
  function M(t3, e2) {
    f2.getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.activeColor = e2;
  }
  function R(t3) {
    f2.getCurConfigComponent.chart.options.style.chart.layout.innerCircle.show = t3;
  }
  function q() {
    f2.getCurConfigComponent.chart.options.style.chart.layout.innerCircle.strokeWidth = S.value;
  }
  function A(t3) {
    f2.getCurConfigComponent.chart.options.style.chart.layout.percentage.show = t3;
  }
  function B() {
    f2.getCurConfigComponent.chart.options.style.chart.layout.percentage.fontSize = W.value;
  }
  return o(() => f2.getCurConfigComponent, (t3) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    t3 && (S.value = (_d = (_c = (_b = (_a = f2.getCurConfigComponent.chart) == null ? void 0 : _a.options.style.chart) == null ? void 0 : _b.layout) == null ? void 0 : _c.innerCircle) == null ? void 0 : _d.strokeWidth, U.value = (_h = (_g = (_f = (_e = f2.getCurConfigComponent.chart) == null ? void 0 : _e.options.style.chart) == null ? void 0 : _f.layout) == null ? void 0 : _g.innerCircle) == null ? void 0 : _h.stroke, z.value = (_m = (_l = (_k = (_j = (_i = f2.getCurConfigComponent.chart) == null ? void 0 : _i.options.style.chart) == null ? void 0 : _j.layout) == null ? void 0 : _k.wheel) == null ? void 0 : _l.ticks) == null ? void 0 : _m.activeColor, W.value = (_q = (_p = (_o = (_n = f2.getCurConfigComponent.chart) == null ? void 0 : _n.options.style.chart) == null ? void 0 : _o.layout) == null ? void 0 : _p.percentage) == null ? void 0 : _q.fontSize);
  }, { immediate: true }), (t3, e2) => (a(), n(m, { class: l(i(I2)) }, { default: r(() => {
    var _a, _b, _c, _d, _e, _f;
    return [c(p, { title: "数值样式", "allow-check": true, "title-check": (_c = (_b = (_a = i(f2).getCurConfigComponent.chart.options.style.chart) == null ? void 0 : _a.layout) == null ? void 0 : _b.percentage) == null ? void 0 : _c.show, onChecked: A }, { default: r(() => [u("div", v, [e2[8] || (e2[8] = s(" 字体大小 ")), c(i(y), { value: W.value, "onUpdate:value": e2[0] || (e2[0] = (t4) => W.value = t4), min: 8, max: 100, onChange: B }, null, 8, ["value"]), c(i(d), { checked: i(f2).getCurConfigComponent.chart.options.style.chart.layout.percentage.bold, "onUpdate:checked": e2[1] || (e2[1] = (t4) => i(f2).getCurConfigComponent.chart.options.style.chart.layout.percentage.bold = t4) }, { default: r(() => e2[7] || (e2[7] = [s(" 加粗 ")])), _: 1, __: [7] }, 8, ["checked"])]), u("div", k, [e2[9] || (e2[9] = s(" 小数位数 ")), c(i(y), { value: i(f2).getCurConfigComponent.chart.options.style.chart.layout.percentage.rounding, "onUpdate:value": e2[2] || (e2[2] = (t4) => i(f2).getCurConfigComponent.chart.options.style.chart.layout.percentage.rounding = t4), min: 0, max: 6 }, null, 8, ["value"])])]), _: 1 }, 8, ["title-check"]), c(p, { title: "内环配置", "allow-check": true, "title-check": (_f = (_e = (_d = i(f2).getCurConfigComponent.chart.options.style.chart) == null ? void 0 : _d.layout) == null ? void 0 : _e.innerCircle) == null ? void 0 : _f.show, onChecked: R }, { default: r(() => [e2[11] || (e2[11] = u("div", { class: "title" }, "内环颜色", -1)), c(i(g), { placeholder: "设置数字颜色，格式#FFFFFF", type: 1, value: U.value, onConfirmChange: b, onInputChange: j }, null, 8, ["value"]), u("div", w, [e2[10] || (e2[10] = s("内环宽度 ")), c(i(y), { value: S.value, "onUpdate:value": e2[3] || (e2[3] = (t4) => S.value = t4), max: 25, onChange: q }, null, 8, ["value"])])]), _: 1, __: [11] }, 8, ["title-check"]), c(p, { title: "外环配置" }, { default: r(() => [u("div", _, [e2[12] || (e2[12] = s(" 激活颜色 ")), u("div", null, [c(i(g), { placeholder: "设置外环颜色，格式#FFFFFF", type: 1, value: z.value, onConfirmChange: H, onInputChange: M }, null, 8, ["value"])])]), u("div", F, [c(i(d), { checked: i(f2).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.show, "onUpdate:checked": e2[4] || (e2[4] = (t4) => i(f2).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.show = t4) }, { default: r(() => e2[13] || (e2[13] = [s(" 渐变色 ")])), _: 1, __: [13] }, 8, ["checked"]), c(i(y), { value: i(f2).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity, "onUpdate:value": e2[5] || (e2[5] = (t4) => i(f2).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity = t4), min: 0, max: 100 }, null, 8, ["value"])]), u("div", x, [e2[14] || (e2[14] = s(" 圆环比例 ")), c(i(y), { value: i(f2).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.sizeRatio, "onUpdate:value": e2[6] || (e2[6] = (t4) => i(f2).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.sizeRatio = t4), step: 0.1, min: 0, max: 1 }, null, 8, ["value"])])]), _: 1 })];
  }), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-021a8a7f"]]);
export {
  I as default
};
