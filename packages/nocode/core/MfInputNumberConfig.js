import { defineComponent as e, ref as t, watch as o, createBlock as n, openBlock as a, normalizeClass as l, unref as u, withCtx as i, createElementVNode as v, createVNode as s, createTextVNode as p } from "vue";
import { S as r } from "./StyleConfig.js";
import { useDesign as c } from "@mfish/core/hooks";
import { u as d, J as h, _ as C } from "./index.js";
import { Input as f, InputNumber as g } from "ant-design-vue";
const m = { class: "title" }, x = { class: "title" }, U = { class: "title" }, w = { class: "title" }, y = { class: "title" }, k = { class: "title" }, b = { class: "title" }, _ = { class: "title" }, j = C(e({ __name: "MfInputNumberConfig", setup(e2) {
  const { prefixCls: C2 } = c("input-config"), j2 = d(), A = t(), B = t(), I = t(true), S = t(false), J = t(), M = t(), N = t(), q = t(false), z = t(), D = t(), E = t();
  function F() {
    j2.getCurConfigComponent.chart.options.addonBefore = A.value;
  }
  function G() {
    j2.getCurConfigComponent.chart.options.addonAfter = B.value;
  }
  function H() {
    j2.getCurConfigComponent.chart.options.bordered = I.value;
  }
  function K() {
    j2.getCurConfigComponent.chart.options.disabled = S.value;
  }
  function L() {
    j2.getCurConfigComponent.chart.options.maxlength = J.value;
  }
  function O() {
    j2.getCurConfigComponent.chart.options.prefix = M.value;
  }
  function P() {
    j2.getCurConfigComponent.chart.options.step = N.value;
  }
  function Q() {
    j2.getCurConfigComponent.chart.options.placeholder = z.value;
  }
  function R() {
    j2.getCurConfigComponent.chart.options.max = D.value;
  }
  function T() {
    j2.getCurConfigComponent.chart.options.min = E.value;
  }
  return o(() => j2.getCurConfigComponent, (e3) => {
    e3 && (function(e4) {
      A.value = e4.chart.options?.addonBefore, B.value = e4.chart.options?.addonAfter, void 0 !== e4.chart.options?.bordered && (I.value = e4.chart.options?.bordered);
      S.value = e4.chart.options?.disabled || false, q.value = e4.chart.options?.showCount || false, e4.chart.options?.maxlength && (J.value = e4.chart.options.maxlength);
      e4.chart.options?.prefix && (M.value = e4.chart.options.prefix);
      e4.chart.options?.step && (N.value = e4.chart.options.step);
      e4.chart.options?.placeholder && (z.value = e4.chart.options.placeholder);
      e4.chart.options?.max && (D.value = e4.chart.options.max);
      e4.chart.options?.min && (E.value = e4.chart.options.min);
    })(e3);
  }, { immediate: true }), (e3, t2) => (a(), n(r, { class: l(u(C2)) }, { default: i(() => [v("div", m, [t2[10] || (t2[10] = p(" 提示信息 ", -1)), v("div", null, [s(u(f), { value: z.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => z.value = e4), onChange: Q }, null, 8, ["value"])])]), v("div", x, [t2[11] || (t2[11] = p(" 最大长度 ", -1)), v("div", null, [s(u(g), { style: { width: "100%" }, value: J.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => J.value = e4), onChange: L }, null, 8, ["value"])])]), v("div", U, [t2[12] || (t2[12] = p(" 前置标签 ", -1)), v("div", null, [s(u(f), { value: A.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => A.value = e4), onChange: F }, null, 8, ["value"])])]), v("div", w, [t2[13] || (t2[13] = p(" 后置标签 ", -1)), v("div", null, [s(u(f), { value: B.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => B.value = e4), onChange: G }, null, 8, ["value"])])]), v("div", y, [t2[14] || (t2[14] = v("span", { style: { width: "55px" } }, "前缀", -1)), v("div", null, [s(u(f), { value: M.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => M.value = e4), onChange: O }, null, 8, ["value"])])]), v("div", k, [t2[15] || (t2[15] = v("span", { style: { width: "55px" } }, "最大值", -1)), v("div", null, [s(u(g), { style: { width: "100%" }, value: D.value, "onUpdate:value": t2[5] || (t2[5] = (e4) => D.value = e4), onChange: R }, null, 8, ["value"])])]), v("div", b, [t2[16] || (t2[16] = v("span", { style: { width: "55px" } }, "最小值", -1)), v("div", null, [s(u(g), { style: { width: "100%" }, value: E.value, "onUpdate:value": t2[6] || (t2[6] = (e4) => E.value = e4), onChange: T }, null, 8, ["value"])])]), v("div", _, [t2[17] || (t2[17] = v("span", { style: { width: "55px" } }, "步数", -1)), v("div", null, [s(u(g), { style: { width: "100%" }, value: N.value, "onUpdate:value": t2[7] || (t2[7] = (e4) => N.value = e4), onChange: P }, null, 8, ["value"])])]), s(h, { title: "显示边框", tooltip: "勾选后显示边框", checked: I.value, "onUpdate:checked": t2[8] || (t2[8] = (e4) => I.value = e4), onChange: H }, null, 8, ["checked"]), s(h, { title: "是否禁用", tooltip: "勾选后禁用输入框，默认否", checked: S.value, "onUpdate:checked": t2[9] || (t2[9] = (e4) => S.value = e4), onChange: K }, null, 8, ["checked"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-da0016c2"]]);
export {
  j as default
};
