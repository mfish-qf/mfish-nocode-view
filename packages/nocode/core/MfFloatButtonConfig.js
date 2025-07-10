import { defineComponent as e, ref as o, computed as t, watch as n, createBlock as a, openBlock as l, normalizeClass as u, unref as i, withCtx as c, renderSlot as r, createElementVNode as C, createVNode as s, createTextVNode as g, createElementBlock as p, Fragment as v, renderList as f, toDisplayString as d } from "vue";
import { useDesign as h } from "@mfish/core/hooks";
import { Input as m, RadioGroup as F, RadioButton as b, InputNumber as _ } from "ant-design-vue";
import { u as k, M as w, d as I, J as S, _ as y } from "./index.js";
import { S as x } from "./StyleConfig.js";
import { IconPicker as U } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const Z = { class: "title" }, j = { class: "title" }, M = { class: "title" }, q = y(e({ __name: "MfFloatButtonConfig", setup(e2) {
  const y2 = k(), { prefixCls: q2 } = h("float-button-config"), z = o(), B = o(), J = o("circle"), $ = [{ title: "圆形", value: "circle" }, { title: "方形", value: "square" }], A = t(() => !!y2.getCurConfigComponent.chart.options.badge), D = o(0), E = o(true), G = o();
  function H(e3) {
    y2.getCurConfigComponent.chart.data.dataSet.icon = e3;
  }
  function K(e3) {
    L(e3), z.value = e3;
  }
  function L(e3) {
    y2.getCurConfigComponent.chart.options.color = e3;
  }
  function N(e3) {
    O(e3), B.value = e3;
  }
  function O(e3) {
    y2.getCurConfigComponent.chart.options.buttonColor = e3;
  }
  function P() {
    y2.getCurConfigComponent.chart.options.shape = J.value;
  }
  function Q(e3) {
    e3 ? y2.getCurConfigComponent.chart.options.badge = { count: D.value, showZero: E.value, color: G.value } : delete y2.getCurConfigComponent.chart.options.badge;
  }
  function R() {
    y2.getCurConfigComponent.chart.options.badge.count = D.value;
  }
  function T(e3) {
    V(e3), G.value = e3;
  }
  function V(e3) {
    y2.getCurConfigComponent.chart.options.badge.color = e3;
  }
  function W() {
    y2.getCurConfigComponent.chart.options.badge.showZero = E.value;
  }
  return n(() => y2.getCurConfigComponent, (e3) => {
    e3 && (z.value = y2.getCurConfigComponent.chart.options.color, B.value = y2.getCurConfigComponent.chart.options.buttonColor, J.value = y2.getCurConfigComponent.chart.options.shape || "circle", D.value = y2.getCurConfigComponent.chart.options.badge?.count || 0, E.value = y2.getCurConfigComponent.chart.options.badge?.showZero || true, G.value = y2.getCurConfigComponent.chart.options.badge?.color || "");
  }, { immediate: true }), (e3, o2) => (l(), a(x, { class: u(i(q2)) }, { default: c(() => [r(e3.$slots, "default", {}, void 0, true), o2[7] || (o2[7] = C("div", { class: "title" }, " 文本 ", -1)), s(i(m), { value: i(y2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": o2[0] || (o2[0] = (e4) => i(y2).getCurConfigComponent.chart.data.dataSet.title = e4), "show-count": "", maxlength: 50 }, null, 8, ["value"]), o2[8] || (o2[8] = C("div", { class: "title" }, " 图标 ", -1)), s(i(U), { value: i(y2).getCurConfigComponent.chart.data.dataSet.icon, onChange: H }, null, 8, ["value"]), o2[9] || (o2[9] = C("div", { class: "title" }, " 文字颜色 ", -1)), s(i(w), { placeholder: "设置文本颜色，格式#FFFFFF", type: 1, value: z.value, onConfirmChange: K, onInputChange: L }, null, 8, ["value"]), o2[10] || (o2[10] = C("div", { class: "title" }, " 按钮颜色 ", -1)), s(i(w), { placeholder: "设置按钮颜色，格式#FFFFFF", value: B.value, onConfirmChange: N, onInputChange: O }, null, 8, ["value"]), C("div", Z, [o2[4] || (o2[4] = g(" 按钮形状 ")), s(i(F), { size: "small", value: J.value, "onUpdate:value": o2[1] || (o2[1] = (e4) => J.value = e4), onChange: P }, { default: c(() => [(l(), p(v, null, f($, (e4) => s(i(b), { key: e4.value, value: e4.value }, { default: c(() => [g(d(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), s(I, { title: "显示徽标", "allow-check": true, "title-check": A.value, onChecked: Q }, { default: c(() => [C("div", j, [o2[5] || (o2[5] = g(" 数值 ")), C("div", null, [s(i(_), { style: { width: "100%" }, value: D.value, "onUpdate:value": o2[2] || (o2[2] = (e4) => D.value = e4), onChange: R }, null, 8, ["value"])])]), C("div", M, [o2[6] || (o2[6] = g(" 颜色 ")), C("div", null, [s(i(w), { placeholder: "设置文本颜色，格式#FFFFFF", type: 1, value: G.value, onConfirmChange: T, onInputChange: V }, null, 8, ["value"])])]), s(S, { title: "0是否显示", tooltip: "当数值为0时，是否展示徽标", checked: E.value, "onUpdate:checked": o2[3] || (o2[3] = (e4) => E.value = e4), onChange: W }, null, 8, ["checked"])]), _: 1 }, 8, ["title-check"])]), _: 3, __: [7, 8, 9, 10] }, 8, ["class"]));
} }), [["__scopeId", "data-v-aa4667e0"]]);
export {
  q as default
};
