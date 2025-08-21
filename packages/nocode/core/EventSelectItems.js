import { defineComponent as e, useCssVars as t, computed as a, reactive as i, watch as l, createElementBlock as n, openBlock as s, normalizeClass as o, unref as r, createElementVNode as c, createCommentVNode as d, Fragment as m, createVNode as v, createBlock as h, withCtx as u, renderList as p, toDisplayString as y } from "vue";
import { f as k, u as f, D as E, L as C, E as g, g as x, _ } from "./index.js";
import { theme as P, Empty as w } from "ant-design-vue";
import { useDesign as I } from "@mfish/core/hooks";
import { ScrollContainer as L } from "@mfish/core/components/Container";
import { omit as N } from "lodash-es";
const $ = { key: 0, class: "header", style: { width: "120px" } }, M = { key: 1, class: "header", style: { width: "120px" } }, S = { key: 0, class: "divide-line" }, B = ["title", "onClick"], A = { key: 2, class: "divide-line" }, D = ["title", "onClick"], H = _(e({ __name: "EventSelectItems", props: { componentList: { type: Array, default: () => [] }, value: { type: Object, default: () => {
} }, hideHeader: { type: Boolean, default: false }, hideEvent: { type: Boolean, default: false }, hideParam: { type: Boolean, default: false } }, emits: ["selectChange"], setup(e2, { emit: _2 }) {
  t((e3) => ({ "7dd54e08": F.value, "65c95f37": q.value }));
  const H2 = e2, T = _2, b = i({ id: "", event: "", param: "" });
  l(() => H2.value, (e3) => {
    e3 ? (b.id = e3.id, b.event = e3.event, b.param = e3.param) : (b.id = "", b.event = "", b.param = "");
  }, { immediate: true });
  const { prefixCls: j } = I("event-select-items"), G = a(() => k(H2.componentList, b.id)), R = a(() => {
    const e3 = G.value;
    return e3 && e3.chart.events?.emits ? e3.chart.events.emits : [];
  }), O = a(() => {
    const e3 = G.value;
    if (e3) {
      if (!e3.chart.data?.headers) return [];
      return Object.values(e3.chart.data.headers) ?? [];
    }
    return [];
  }), { token: z } = P.useToken(), q = a(() => z.value.colorInfoBg), F = a(() => z.value.colorBorder), J = f();
  function K() {
    J.setCurHoverComponent("");
  }
  function Q(e3) {
    b.id !== e3 && (b.id = e3, R.value && R.value.length > 0 ? b.event = R.value[0] : b.event = "", O.value && O.value.length > 0 ? b.param = O.value[0].colName ?? "" : b.param = "", V());
  }
  function U(e3) {
    Q(e3.chart.id);
  }
  function V() {
    H2.hideEvent ? T("selectChange", N(r(b), "event")) : H2.hideParam ? T("selectChange", N(r(b), "param")) : T("selectChange", r(b));
  }
  return (t2, a2) => (s(), n("div", { class: o(r(j)) }, [c("div", { class: o(`${r(j)}-headers`) }, [e2.hideHeader ? d("", true) : (s(), n(m, { key: 0 }, [a2[0] || (a2[0] = c("div", { class: "header", style: { width: "150px" } }, "组件", -1)), e2.hideEvent ? d("", true) : (s(), n("div", $, "事件")), e2.hideParam ? d("", true) : (s(), n("div", M, "参数"))], 64))], 2), c("div", { class: o(`${r(j)}-container`) }, [v(r(L), { class: o(`${r(j)}-items`), style: { width: "150px" } }, { default: u(() => [e2.componentList?.length > 0 ? (s(true), n(m, { key: 0 }, p(e2.componentList, (e3) => (s(), n("div", { key: e3.chart.id }, [e3.chart.type !== r(E).MfCombine ? (s(), h(C, { key: 0, style: { margin: "2px 6px 0 6px" }, "external-select": true, "is-select": b.id === e3.chart.id, item: e3, "show-eye": false, "show-lock": false, onClick: (t3) => Q(e3.chart.id), onEnter: (t3) => (function(e4) {
    J.setCurHoverComponent(e4.chart.id);
  })(e3), onLeave: K }, null, 8, ["is-select", "item", "onClick", "onEnter"])) : (s(), h(g, { key: 1, style: { margin: "2px", "font-size": "12px" }, "external-select": true, "is-select": b.id === e3.chart.id, item: e3, "show-eye": false, "show-lock": false, "show-child-eye": false, "show-child-lock": false, expand: true, "child-select": b.id, onParentClick: (t3) => Q(e3.chart.id), onChildClick: U }, null, 8, ["is-select", "item", "child-select", "onParentClick"]))]))), 128)) : (s(), h(r(w), { key: 1, description: "暂无组件", image: r(w).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"]), e2.hideEvent ? d("", true) : (s(), n("div", S)), e2.hideEvent ? d("", true) : (s(), h(r(L), { key: 1, class: o(`${r(j)}-items`), style: { width: "120px" } }, { default: u(() => [R.value.length > 0 ? (s(true), n(m, { key: 0 }, p(R.value, (e3) => (s(), n("div", { class: o(["item", b.event === e3 ? "select" : ""]), title: e3, key: e3, onClick: (t3) => {
    return a3 = e3, void (b.event !== a3 && (b.event = a3, V()));
    var a3;
  } }, [c("div", null, y(r(x)(e3, G.value?.chart.type)), 1)], 10, B))), 128)) : (s(), h(r(w), { key: 1, description: "暂无事件", image: r(w).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"])), e2.hideParam ? d("", true) : (s(), n("div", A)), e2.hideParam ? d("", true) : (s(), h(r(L), { key: 3, class: o(`${r(j)}-items`), style: { width: "120px" } }, { default: u(() => [O.value.length > 0 ? (s(true), n(m, { key: 0 }, p(O.value, (e3, t3) => (s(), n("div", { class: o(["item", b.param === e3.colName ? "select" : ""]), title: `${e3.colName}${e3.rename ? `[${e3.rename}]` : ""}`, key: t3, onClick: (t4) => {
    return a3 = e3.colName, void (b.param !== a3 && (b.param = a3 ?? "", V()));
    var a3;
  } }, [c("div", null, y(e3.rename ?? e3.colName), 1)], 10, D))), 128)) : (s(), h(r(w), { key: 1, description: "暂无参数", image: r(w).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"]))], 2)], 2));
} }), [["__scopeId", "data-v-f77f165a"]]);
export {
  H as E
};
