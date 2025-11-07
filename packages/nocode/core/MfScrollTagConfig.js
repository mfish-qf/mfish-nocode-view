import { defineComponent as o, ref as t, watch as e, createBlock as n, openBlock as i, normalizeClass as a, unref as l, withCtx as r, createVNode as s, createElementVNode as p, createTextVNode as m } from "vue";
import { useDesign as u } from "@mfish/core/hooks";
import { InputNumber as C } from "ant-design-vue";
import { u as c, M as f, _ as g } from "./index.js";
import { S as d } from "./StyleConfig.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
import { T as h } from "./TitleConfig.js";
const v = { class: "title" }, S = { class: "title" }, x = { class: "title" }, F = g(o({ __name: "MfScrollTagConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(o2) {
  const g2 = c(), { prefixCls: F2 } = u("scroll-tag-config"), I = t();
  function _(o3) {
    y(o3), I.value = o3;
  }
  function y(o3) {
    g2.getCurConfigComponent.chart.options.iconColor = o3;
  }
  return e(() => g2.getCurConfigComponent, (o3) => {
    o3 && (I.value = g2.getCurConfigComponent.chart.options.iconColor);
  }, { immediate: true }), (o3, t2) => (i(), n(d, { class: a(l(F2)) }, { default: r(() => [s(h, { "hide-align": true }), p("div", v, [t2[2] || (t2[2] = m(" 文字间距 ", -1)), s(l(C), { value: l(g2).getCurConfigComponent.chart.options.letterSpacing, "onUpdate:value": t2[0] || (t2[0] = (o4) => l(g2).getCurConfigComponent.chart.options.letterSpacing = o4), min: 0, max: 100, step: 1 }, null, 8, ["value"])]), p("div", S, [t2[3] || (t2[3] = m(" 滚动速度 ", -1)), s(l(C), { value: l(g2).getCurConfigComponent.chart.options.animationSpeed, "onUpdate:value": t2[1] || (t2[1] = (o4) => l(g2).getCurConfigComponent.chart.options.animationSpeed = o4), min: 1, max: l(g2).getCurConfigComponent.chartContain?.dropInfo.width ?? 100, step: 5 }, null, 8, ["value", "max"])]), p("div", x, [t2[4] || (t2[4] = m(" 图标颜色 ", -1)), p("div", null, [s(l(f), { placeholder: "设置图标颜色，格式#FFFFFF", type: 1, value: I.value, onConfirmChange: _, onInputChange: y }, null, 8, ["value"])])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-acb69441"]]);
export {
  F as default
};
