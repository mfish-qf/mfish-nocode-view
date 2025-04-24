import { defineComponent as e, ref as l, createElementBlock as o, openBlock as t, normalizeClass as a, unref as i, createElementVNode as n, createVNode as c, createCommentVNode as p, createBlock as s, withModifiers as u, withCtx as d, createTextVNode as f, toDisplayString as C, renderSlot as h } from "vue";
import { Checkbox as k, Tooltip as r } from "ant-design-vue";
import { useDesign as m } from "@mfish/core/hooks";
import { Icon as v } from "@mfish/core/components/Icon";
import { NCollapseTransition as y } from "naive-ui";
import { u as w, _ as g } from "./index.js";
const _ = { key: 2 }, x = { key: 0, class: "copy-action" }, B = { class: "child-item" }, $ = g(e({ __name: "ConfigGroup", props: { title: { type: String, default: "" }, allowCollapse: { type: Boolean, default: true }, allowCheck: { type: Boolean, default: false }, titleCheck: { type: Boolean, default: false }, defaultExpand: { type: Boolean, default: true }, allowCopy: { type: Boolean, default: false }, tooltip: { type: String, default: "" } }, emits: ["checked", "copy", "paste"], setup(e2, { emit: g2 }) {
  const $2 = e2, z = g2, E = l($2.titleCheck), I = l($2.defaultExpand), { prefixCls: S } = m("config-group"), b = w();
  function j() {
    $2.allowCollapse ? I.value = !I.value : I.value = true;
  }
  function G() {
    I.value = !!E.value, z("checked", E.value);
  }
  function U() {
    z("copy", (e3) => {
      b.setCopyConfig(e3);
    });
  }
  function q() {
    z("paste", b.getCopyConfig);
  }
  return (l2, m2) => (t(), o("div", { class: a(i(S)) }, [n("div", { class: a(["title", [e2.allowCollapse ? "collapsed" : ""]]), onClick: j }, [n("div", null, [e2.allowCheck ? (t(), s(i(k), { key: 0, checked: E.value, "onUpdate:checked": m2[0] || (m2[0] = (e3) => E.value = e3), onClick: m2[1] || (m2[1] = u(() => {
  }, ["stop"])), onChange: G }, null, 8, ["checked"])) : p("", true), e2.tooltip ? (t(), s(i(r), { key: 1, title: e2.tooltip }, { default: d(() => [f(C(e2.title), 1)]), _: 1 }, 8, ["title"])) : (t(), o("span", _, C(e2.title), 1)), !e2.allowCheck && e2.allowCollapse || e2.allowCheck && e2.titleCheck ? (t(), s(i(v), { key: 3, icon: `ant-design:${I.value ? "up" : "down"}-outlined`, size: 12 }, null, 8, ["icon"])) : p("", true)]), e2.allowCopy ? (t(), o("div", x, [c(i(r), { placement: "top", title: `复制${e2.title}` }, { default: d(() => [c(i(v), { "aria-hidden": "false", size: 12, icon: "iconfont:icon-mfish-copy", onClick: u(U, ["stop"]) })]), _: 1 }, 8, ["title"]), c(i(r), { placement: "top", title: `粘贴${e2.title}` }, { default: d(() => [c(i(v), { "aria-hidden": "false", size: 12, icon: "iconfont:icon-mfish-paste", onClick: u(q, ["stop"]) })]), _: 1 }, 8, ["title"])])) : p("", true)], 2), c(i(y), { show: !e2.allowCheck && I.value || e2.allowCheck && I.value && e2.titleCheck }, { default: d(() => [n("div", B, [h(l2.$slots, "default", {}, void 0, true)])]), _: 3 }, 8, ["show"])], 2));
} }), [["__scopeId", "data-v-2ae28ab9"]]);
export {
  $ as C
};
