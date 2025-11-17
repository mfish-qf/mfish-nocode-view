import { defineComponent as e, ref as l, watch as a, createElementBlock as u, openBlock as t, normalizeClass as v, unref as o, createVNode as i, withCtx as n, createElementVNode as c, createCommentVNode as s, Fragment as f, renderList as d, createTextVNode as r, toDisplayString as p } from "vue";
import { u as m, d as h, _ as g } from "./index.js";
import { useDesign as b } from "@mfish/core/hooks";
import { RadioGroup as C, RadioButton as y, Slider as k } from "ant-design-vue";
import { E } from "./EchartsSeriesLabelConfig.js";
const x = { class: "title" }, _ = { key: 0, class: "title" }, w = g(e({ __name: "MfEffectScatterConfig", props: { config: { type: Object, default: void 0 }, allowCheck: { type: Boolean, default: true }, defaultExpand: { type: Boolean, default: false } }, emits: ["change", "showScatterChecked"], setup(e2, { emit: g2 }) {
  const w2 = e2, S = g2, { prefixCls: z } = b("effect-scatter-config"), U = m(), j = l("circle"), R = [{ title: "圆形", value: "circle" }, { title: "方形", value: "rect" }, { title: "三角形", value: "triangle" }, { title: "菱形", value: "diamond" }, { title: "定位", value: "pin" }, { title: "箭头", value: "arrow" }], T = l("stroke"), B = [{ title: "描边", value: "stroke" }, { title: "填充", value: "fill" }], L = l(10), M = l(0), I = l(true), O = l(3), q = l(), A = l(true);
  function D() {
    q.value = w2.config, q.value && (void 0 !== q.value.symbol && (j.value = q.value.symbol), void 0 !== q.value.symbolSize && (L.value = q.value.symbolSize), void 0 !== q.value.symbolRotate && (M.value = q.value.symbolRotate), void 0 !== q.value.label?.show && (I.value = q.value.label.show), void 0 !== q.value.rippleEffect?.brushType && (T.value = q.value.rippleEffect.brushType));
  }
  function F(e3) {
    S("showScatterChecked", e3);
  }
  function G() {
    q.value.symbol = j.value, S("change", q.value);
  }
  function H(e3) {
    q.value.symbolSize = e3, S("change", q.value);
  }
  function J(e3) {
    q.value.symbolRotate = e3, S("change", q.value);
  }
  function K(e3) {
    q.value.label = { ...q.value.label, ...e3.label }, S("change", q.value);
  }
  function N() {
    q.value.rippleEffect = { ...q.value.rippleEffect, brushType: T.value }, S("change", q.value);
  }
  function P(e3) {
    q.value.rippleEffect = { ...q.value.rippleEffect, number: e3 }, S("change", q.value);
  }
  return a(() => U.getCurConfigComponent, (e3) => {
    e3 && D();
  }, { immediate: true }), a(() => w2.config, (e3) => {
    A.value = !!e3, e3 && D();
  }, { immediate: true }), (l2, a2) => (t(), u("div", { class: v(o(z)) }, [i(h, { title: "气泡配置", "default-expand": e2.defaultExpand, "allow-check": e2.allowCheck, "title-check": A.value, onChecked: F }, { default: n(() => [a2[9] || (a2[9] = c("div", { class: "title" }, " 形状", -1)), i(o(C), { size: "small", value: j.value, "onUpdate:value": a2[0] || (a2[0] = (e3) => j.value = e3), onChange: G }, { default: n(() => [(t(), u(f, null, d(R, (e3) => i(o(y), { key: e3.value, value: e3.value }, { default: n(() => [r(p(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"]), c("div", x, [a2[5] || (a2[5] = r(" 大小 ", -1)), i(o(k), { value: L.value, "onUpdate:value": a2[1] || (a2[1] = (e3) => L.value = e3), min: 5, max: 50, onChange: H }, null, 8, ["value"]), a2[6] || (a2[6] = r(" 角度 ", -1)), i(o(k), { value: M.value, "onUpdate:value": a2[2] || (a2[2] = (e3) => M.value = e3), min: 0, max: 360, onChange: J }, null, 8, ["value"])]), i(E, { series: q.value, onLabelChange: K }, null, 8, ["series"]), o(U).getCurConfigComponent?.chart?.options?.geo ? (t(), u("div", _, [a2[7] || (a2[7] = r(" 涟漪类型 ", -1)), i(o(C), { size: "small", value: T.value, "onUpdate:value": a2[3] || (a2[3] = (e3) => T.value = e3), onChange: N }, { default: n(() => [(t(), u(f, null, d(B, (e3) => i(o(y), { key: e3.value, value: e3.value }, { default: n(() => [r(p(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"]), a2[8] || (a2[8] = r(" 数量 ", -1)), c("div", null, [i(o(k), { value: O.value, "onUpdate:value": a2[4] || (a2[4] = (e3) => O.value = e3), min: 0, max: 10, onChange: P }, null, 8, ["value"])])])) : s("", true)]), _: 1 }, 8, ["default-expand", "allow-check", "title-check"])], 2));
} }), [["__scopeId", "data-v-0f7c5b4d"]]);
export {
  w as M
};
