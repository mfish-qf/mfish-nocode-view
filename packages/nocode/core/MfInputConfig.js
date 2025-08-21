import { defineComponent as e, ref as o, watch as t, createBlock as n, openBlock as a, normalizeClass as l, unref as u, withCtx as i, createElementVNode as c, createElementBlock as r, createCommentVNode as p, createVNode as v, createTextVNode as s } from "vue";
import { S as d } from "./StyleConfig.js";
import { useDesign as h } from "@mfish/core/hooks";
import { u as f, J as C, _ as g } from "./index.js";
import { Input as m, InputNumber as x } from "ant-design-vue";
const k = { class: "title" }, U = { class: "title" }, y = { key: 0, class: "title" }, w = { key: 1, class: "title" }, A = { key: 2, class: "title" }, _ = { key: 3, class: "title" }, b = g(e({ __name: "MfInputConfig", props: { textArea: { type: Boolean, default: false } }, setup(e2) {
  const { prefixCls: g2 } = h("input-config"), b2 = f(), B = o(), j = o(), I = o(false), S = o(true), J = o(false), M = o(), q = o(), z = o(), D = o(false), E = o();
  function F() {
    b2.getCurConfigComponent.chart.options.addonBefore = B.value;
  }
  function G() {
    b2.getCurConfigComponent.chart.options.addonAfter = j.value;
  }
  function H() {
    b2.getCurConfigComponent.chart.options.allowClear = I.value;
  }
  function K() {
    b2.getCurConfigComponent.chart.options.bordered = S.value;
  }
  function L() {
    b2.getCurConfigComponent.chart.options.disabled = J.value;
  }
  function N() {
    b2.getCurConfigComponent.chart.options.maxlength = M.value;
  }
  function O() {
    b2.getCurConfigComponent.chart.options.prefix = q.value;
  }
  function P() {
    b2.getCurConfigComponent.chart.options.suffix = z.value;
  }
  function Q() {
    b2.getCurConfigComponent.chart.options.showCount = D.value;
  }
  function R() {
    b2.getCurConfigComponent.chart.options.placeholder = E.value;
  }
  return t(() => b2.getCurConfigComponent, (e3) => {
    e3 && (function(e4) {
      B.value = e4.chart.options?.addonBefore, j.value = e4.chart.options?.addonAfter, I.value = e4.chart.options?.allowClear || false, void 0 !== e4.chart.options?.bordered && (S.value = e4.chart.options?.bordered);
      J.value = e4.chart.options?.disabled || false, D.value = e4.chart.options?.showCount || false, e4.chart.options?.maxlength && (M.value = e4.chart.options.maxlength);
      e4.chart.options?.prefix && (q.value = e4.chart.options.prefix);
      e4.chart.options?.suffix && (z.value = e4.chart.options.suffix);
      e4.chart.options?.placeholder && (E.value = e4.chart.options.placeholder);
    })(e3);
  }, { immediate: true }), (o2, t2) => (a(), n(d, { class: l(u(g2)) }, { default: i(() => [c("div", k, [t2[10] || (t2[10] = s(" 提示信息 ", -1)), c("div", null, [v(u(m), { value: E.value, "onUpdate:value": t2[0] || (t2[0] = (e3) => E.value = e3), onChange: R }, null, 8, ["value"])])]), c("div", U, [t2[11] || (t2[11] = s(" 最大长度 ", -1)), c("div", null, [v(u(x), { style: { width: "100%" }, value: M.value, "onUpdate:value": t2[1] || (t2[1] = (e3) => M.value = e3), onChange: N }, null, 8, ["value"])])]), e2.textArea ? p("", true) : (a(), r("div", y, [t2[12] || (t2[12] = s(" 前置标签 ", -1)), c("div", null, [v(u(m), { value: B.value, "onUpdate:value": t2[2] || (t2[2] = (e3) => B.value = e3), onChange: F }, null, 8, ["value"])])])), e2.textArea ? p("", true) : (a(), r("div", w, [t2[13] || (t2[13] = s(" 后置标签 ", -1)), c("div", null, [v(u(m), { value: j.value, "onUpdate:value": t2[3] || (t2[3] = (e3) => j.value = e3), onChange: G }, null, 8, ["value"])])])), e2.textArea ? p("", true) : (a(), r("div", A, [t2[14] || (t2[14] = c("span", { style: { width: "55px" } }, "前缀", -1)), c("div", null, [v(u(m), { value: q.value, "onUpdate:value": t2[4] || (t2[4] = (e3) => q.value = e3), onChange: O }, null, 8, ["value"])])])), e2.textArea ? p("", true) : (a(), r("div", _, [t2[15] || (t2[15] = c("span", { style: { width: "55px" } }, "后缀", -1)), c("div", null, [v(u(m), { value: z.value, "onUpdate:value": t2[5] || (t2[5] = (e3) => z.value = e3), onChange: P }, null, 8, ["value"])])])), v(C, { title: "允许清空", tooltip: "可以点击清除图标删除内容", checked: I.value, "onUpdate:checked": t2[6] || (t2[6] = (e3) => I.value = e3), onChange: H }, null, 8, ["checked"]), v(C, { title: "显示边框", tooltip: "勾选后显示边框", checked: S.value, "onUpdate:checked": t2[7] || (t2[7] = (e3) => S.value = e3), onChange: K }, null, 8, ["checked"]), v(C, { title: "是否禁用", tooltip: "勾选后禁用输入框，默认否", checked: J.value, "onUpdate:checked": t2[8] || (t2[8] = (e3) => J.value = e3), onChange: L }, null, 8, ["checked"]), v(C, { title: "显示字数", tooltip: "勾选后显示字数", checked: D.value, "onUpdate:checked": t2[9] || (t2[9] = (e3) => D.value = e3), onChange: Q }, null, 8, ["checked"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-508cf998"]]);
export {
  b as default
};
