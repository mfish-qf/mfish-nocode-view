import { defineComponent as t, ref as e, watch as o, createBlock as a, openBlock as n, normalizeClass as l, unref as u, withCtx as i, renderSlot as s, createElementVNode as r, createVNode as C, createTextVNode as c, createElementBlock as v, Fragment as p, renderList as f, toDisplayString as d } from "vue";
import { useDesign as g } from "@mfish/core/hooks";
import { Input as m, RadioGroup as h, RadioButton as _, Checkbox as F } from "ant-design-vue";
import { u as k, M as y, _ as S } from "./index.js";
import { S as x } from "./StyleConfig.js";
import { IconPicker as I } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const U = { class: "title" }, b = { class: "title" }, j = { class: "check-group" }, z = S(t({ __name: "MfButtonConfig", setup(t2) {
  const S2 = k(), { prefixCls: z2 } = g("tag-config"), M = e(), w = e(), B = e(), $ = [{ title: "默认", value: "default" }, { title: "圆形", value: "circle" }, { title: "圆角", value: "round" }], q = e(), A = [{ title: "默认", value: "default" }, { title: "虚线", value: "dashed" }, { title: "幽灵", value: "ghost" }, { title: "链接", value: "link" }, { title: "文本", value: "text" }];
  function D(t3) {
    S2.getCurConfigComponent.chart.data.dataSet.icon = t3;
  }
  function E(t3) {
    G(t3), M.value = t3;
  }
  function G(t3) {
    S2.getCurConfigComponent.chart.options.iconColor = t3;
  }
  function H(t3) {
    J(t3), w.value = t3;
  }
  function J(t3) {
    S2.getCurConfigComponent.chart.options.buttonColor = t3;
  }
  function K() {
    S2.getCurConfigComponent.chart.options.shape = B.value;
  }
  function L() {
    S2.getCurConfigComponent.chart.options.type = q.value;
  }
  return o(() => S2.getCurConfigComponent, (t3) => {
    t3 && (M.value = S2.getCurConfigComponent.chart.options.iconColor, w.value = S2.getCurConfigComponent.chart.options.buttonColor, B.value = S2.getCurConfigComponent.chart.options.shape || "default", q.value = S2.getCurConfigComponent.chart.options.type || "default");
  }, { immediate: true }), (t3, e2) => (n(), a(x, { class: l(u(z2)) }, { default: i(() => [s(t3.$slots, "default", {}, void 0, true), e2[7] || (e2[7] = r("div", { class: "title" }, " 文本 ", -1)), C(u(m), { value: u(S2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": e2[0] || (e2[0] = (t4) => u(S2).getCurConfigComponent.chart.data.dataSet.title = t4), "show-count": "", maxlength: 50 }, null, 8, ["value"]), e2[8] || (e2[8] = r("div", { class: "title" }, " 图标 ", -1)), C(u(I), { value: u(S2).getCurConfigComponent.chart.data.dataSet.icon, onChange: D }, null, 8, ["value"]), e2[9] || (e2[9] = r("div", { class: "title" }, " 文字颜色 ", -1)), C(u(y), { placeholder: "设置文本颜色，格式#FFFFFF", type: 1, value: M.value, onConfirmChange: E, onInputChange: G }, null, 8, ["value"]), e2[10] || (e2[10] = r("div", { class: "title" }, " 按钮颜色 ", -1)), C(u(y), { placeholder: "设置按钮颜色，格式#FFFFFF", value: w.value, onConfirmChange: H, onInputChange: J }, null, 8, ["value"]), r("div", U, [e2[4] || (e2[4] = c(" 按钮形状 ", -1)), C(u(h), { size: "small", value: B.value, "onUpdate:value": e2[1] || (e2[1] = (t4) => B.value = t4), onChange: K }, { default: i(() => [(n(), v(p, null, f($, (t4) => C(u(_), { key: t4.value, value: t4.value }, { default: i(() => [c(d(t4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), r("div", b, [e2[6] || (e2[6] = c(" 按钮类型 ", -1)), r("div", j, [C(u(F), { checked: u(S2).getCurConfigComponent.chart.options.ghost, "onUpdate:checked": e2[2] || (e2[2] = (t4) => u(S2).getCurConfigComponent.chart.options.ghost = t4) }, { default: i(() => e2[5] || (e2[5] = [c(" 幽灵模式", -1)])), _: 1, __: [5] }, 8, ["checked"])])]), C(u(h), { size: "small", value: q.value, "onUpdate:value": e2[3] || (e2[3] = (t4) => q.value = t4), onChange: L }, { default: i(() => [(n(), v(p, null, f(A, (t4) => C(u(_), { key: t4.value, value: t4.value }, { default: i(() => [c(d(t4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), _: 3, __: [7, 8, 9, 10] }, 8, ["class"]));
} }), [["__scopeId", "data-v-504946df"]]);
export {
  z as default
};
