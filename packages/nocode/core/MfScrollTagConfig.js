import { defineComponent as o, ref as t, watch as e, createBlock as n, openBlock as a, normalizeClass as i, unref as r, withCtx as l, createElementVNode as p, createCommentVNode as s, createVNode as m, createTextVNode as u } from "vue";
import { useDesign as C } from "@mfish/core/hooks";
import { InputNumber as c } from "ant-design-vue";
import { u as f, M as g, _ as d } from "./index.js";
import { S as h } from "./StyleConfig.js";
import { IconPicker as v } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as S } from "./TitleConfig.js";
const I = { class: "title" }, x = { class: "title" }, F = d(o({ __name: "MfScrollTagConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(o2) {
  const d2 = f(), { prefixCls: F2 } = C("scroll-tag-config"), _ = t();
  function y(o3) {
    d2.getCurConfigComponent.chart.data.dataSet.icon = o3;
  }
  function T(o3) {
    j(o3), _.value = o3;
  }
  function j(o3) {
    d2.getCurConfigComponent.chart.options.iconColor = o3;
  }
  return e(() => d2.getCurConfigComponent, (o3) => {
    o3 && (_.value = d2.getCurConfigComponent.chart.options.iconColor);
  }, { immediate: true }), (t2, e2) => (a(), n(h, { class: i(r(F2)) }, { default: l(() => [e2[4] || (e2[4] = p("div", { class: "title" }, "图标", -1)), o2.hideIcon ? s("", true) : (a(), n(r(v), { key: 0, value: r(d2).getCurConfigComponent.chart.data.dataSet.icon, onChange: y }, null, 8, ["value"])), m(r(g), { placeholder: "设置图标颜色，格式#FFFFFF", type: 1, value: _.value, onConfirmChange: T, onInputChange: j }, null, 8, ["value"]), m(S, { "hide-align": true }), p("div", I, [e2[2] || (e2[2] = u(" 文字间距 ", -1)), m(r(c), { value: r(d2).getCurConfigComponent.chart.options.letterSpacing, "onUpdate:value": e2[0] || (e2[0] = (o3) => r(d2).getCurConfigComponent.chart.options.letterSpacing = o3), min: 0, max: 100, step: 1 }, null, 8, ["value"])]), p("div", x, [e2[3] || (e2[3] = u(" 滚动速度 ", -1)), m(r(c), { value: r(d2).getCurConfigComponent.chart.options.animationSpeed, "onUpdate:value": e2[1] || (e2[1] = (o3) => r(d2).getCurConfigComponent.chart.options.animationSpeed = o3), min: 1, max: r(d2).getCurConfigComponent.chartContain?.dropInfo.width ?? 100, step: 5 }, null, 8, ["value", "max"])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-f6c2a69a"]]);
export {
  F as default
};
