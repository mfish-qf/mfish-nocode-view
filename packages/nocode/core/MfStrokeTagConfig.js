import { defineComponent as e, ref as t, computed as n, watch as o, openBlock as i, createBlock as a, normalizeClass as l, unref as r, withCtx as s, createElementVNode as p, createTextVNode as m, createVNode as c } from "vue";
import { useDesign as u } from "@mfish/core/hooks";
import { Input as g, InputNumber as C, Checkbox as f } from "ant-design-vue";
import { u as h, O as d, M as v, _ as y } from "./index.js";
import { S as k } from "./StyleConfig.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
import { T as x } from "./TextFontStyle.js";
const F = { class: "title" }, S = { class: "title" }, b = { style: { display: "flex", gap: "4px" } }, A = { class: "title" }, I = { class: "title" }, _ = { class: "title" }, B = { class: "title" }, U = { class: "flex gap-2 items-center" }, W = { class: "check-group" }, z = y(e({ __name: "MfStrokeTagConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(e2) {
  const y2 = h(), { prefixCls: z2 } = u("stroke-tag-config"), M = t(true), T = t(""), j = t(""), w = n(() => Math.max(1, Math.round(y2.getCurConfigComponent.chart.options.graphic.elements[0].style.fontSize / 15)));
  function O() {
    y2.getCurConfigComponent.chart.options.graphic.elements[0].style.fontSize || (y2.getCurConfigComponent.chart.options.graphic.elements[0].style.fontSize = 80);
  }
  function q(e3) {
    M.value = !!e3.bold, y2.getCurConfigComponent.chart.options.graphic.elements[0].style.fontWeight = e3.bold ? "bold" : "normal";
  }
  function D(e3) {
    y2.getCurConfigComponent.chart.options.graphic.elements[0].style.stroke = e3 || "black";
  }
  function E(e3) {
    D(e3), T.value = e3 || "black";
  }
  function G(e3) {
    y2.getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.keyframes[2].style.fill = e3 || "black";
  }
  function H(e3) {
    G(e3), j.value = e3 || "black";
  }
  function J() {
    y2.getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.duration || (y2.getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.duration = 3e3);
  }
  function K() {
    y2.getCurConfigComponent.chart.options.graphic.elements[0].style.lineWidth || (y2.getCurConfigComponent.chart.options.graphic.elements[0].style.lineWidth = 1);
  }
  return o(() => y2.getCurConfigComponent, (e3) => {
    e3 && (function() {
      const e4 = y2.getCurConfigComponent.chart.options.graphic.elements[0].style;
      y2.getCurConfigComponent.chart.data.dataSet.text = e4.text, M.value = e4.fontWeight === d.Bold, T.value = e4.stroke || "black", j.value = y2.getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.keyframes[2].style.fill || "black";
    })();
  }, { immediate: true }), (e3, t2) => (i(), a(k, { class: l(r(z2)) }, { default: s(() => [p("div", F, [t2[5] || (t2[5] = m(" 标签文本 ", -1)), p("div", null, [c(r(g), { value: r(y2).getCurConfigComponent.chart.options.graphic.elements[0].style.text, "onUpdate:value": t2[0] || (t2[0] = (e4) => r(y2).getCurConfigComponent.chart.options.graphic.elements[0].style.text = e4), "show-count": "", maxlength: 50 }, null, 8, ["value"])])]), p("div", S, [t2[6] || (t2[6] = m(" 字体大小 ", -1)), p("div", b, [c(r(C), { min: 15, step: 5, value: r(y2).getCurConfigComponent.chart.options.graphic.elements[0].style.fontSize, "onUpdate:value": t2[1] || (t2[1] = (e4) => r(y2).getCurConfigComponent.chart.options.graphic.elements[0].style.fontSize = e4), class: "flex-1", onBlur: O }, null, 8, ["value"]), c(x, { hide: [r(d).Italic, r(d).Strikethrough, r(d).Underline], bold: M.value, onFontStyleChange: q }, null, 8, ["hide", "bold"])])]), p("div", A, [t2[7] || (t2[7] = m(" 填充颜色 ", -1)), p("div", null, [c(r(v), { placeholder: "设置轨迹颜色，格式#FFFFFF", type: 1, value: j.value, onConfirmChange: H, onInputChange: G }, null, 8, ["value"])])]), p("div", I, [t2[8] || (t2[8] = m(" 描边颜色 ", -1)), p("div", null, [c(r(v), { placeholder: "设置轨迹颜色，格式#FFFFFF", type: 1, value: T.value, onConfirmChange: E, onInputChange: D }, null, 8, ["value"])])]), p("div", _, [t2[9] || (t2[9] = m(" 描边宽度 ", -1)), c(r(C), { min: 1, max: w.value, step: 1, value: r(y2).getCurConfigComponent.chart.options.graphic.elements[0].style.lineWidth, "onUpdate:value": t2[2] || (t2[2] = (e4) => r(y2).getCurConfigComponent.chart.options.graphic.elements[0].style.lineWidth = e4), onBlur: K }, null, 8, ["max", "value"])]), p("div", B, [t2[12] || (t2[12] = m(" 动画时长 ", -1)), p("div", U, [c(r(C), { class: "flex-1", min: 1e3, step: 500, value: r(y2).getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.duration, "onUpdate:value": t2[3] || (t2[3] = (e4) => r(y2).getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.duration = e4), onBlur: J }, null, 8, ["value"]), t2[11] || (t2[11] = m(" ms ", -1)), p("div", W, [c(r(f), { checked: r(y2).getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.loop, "onUpdate:checked": t2[4] || (t2[4] = (e4) => r(y2).getCurConfigComponent.chart.options.graphic.elements[0].keyframeAnimation.loop = e4) }, { default: s(() => [...t2[10] || (t2[10] = [m(" 是否循环 ", -1)])]), _: 1 }, 8, ["checked"])])])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-9c22245d"]]);
export {
  z as default
};
