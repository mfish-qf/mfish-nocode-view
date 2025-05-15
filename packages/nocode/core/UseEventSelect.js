import { defineComponent as e, useCssVars as t, computed as a, reactive as n, watch as i, createElementBlock as s, openBlock as l, normalizeClass as o, unref as c, createElementVNode as r, createCommentVNode as d, Fragment as m, createVNode as h, createBlock as v, withCtx as p, renderList as u, toDisplayString as f } from "vue";
import { j as y, u as k, H as C, L as g, I as E, g as x, _ } from "./index.js";
import { theme as P, Empty as w } from "ant-design-vue";
import { useDesign as I } from "@mfish/core/hooks";
import { ScrollContainer as L } from "@mfish/core/components/Container";
import { omit as M, cloneDeep as N } from "lodash-es";
const $ = { key: 0, class: "header", style: { width: "120px" } }, S = { key: 1, class: "header", style: { width: "120px" } }, B = { key: 0, class: "divide-line" }, H = ["title", "onClick"], b = { key: 2, class: "divide-line" }, j = ["title", "onClick"], A = _(e({ __name: "EventSelectItems", props: { componentList: { type: Array, default: () => [] }, value: { type: Object, default: () => {
} }, hideHeader: { type: Boolean, default: false }, hideEvent: { type: Boolean, default: false }, hideParam: { type: Boolean, default: false } }, emits: ["selectChange"], setup(e2, { emit: _2 }) {
  t((e3) => ({ "7dd54e08": F.value, "65c95f37": q.value }));
  const N2 = e2, A2 = _2, T2 = n({ id: "", event: "", param: "" });
  i(() => N2.value, (e3) => {
    e3 ? (T2.id = e3.id, T2.event = e3.event, T2.param = e3.param) : (T2.id = "", T2.event = "", T2.param = "");
  }, { immediate: true });
  const { prefixCls: D } = I("event-select-items"), G = a(() => y(N2.componentList, T2.id)), R = a(() => {
    var _a;
    const e3 = G.value;
    return e3 && ((_a = e3.chart.events) == null ? void 0 : _a.emits) ? e3.chart.events.emits : [];
  }), O = a(() => {
    var _a;
    const e3 = G.value;
    if (e3) {
      if (!((_a = e3.chart.data) == null ? void 0 : _a.headers)) return [];
      return Object.values(e3.chart.data.headers) ?? [];
    }
    return [];
  }), { token: z } = P.useToken(), q = a(() => z.value.colorInfoBg), F = a(() => z.value.colorBorder), J = k();
  function K() {
    J.setCurHoverComponent("");
  }
  function Q(e3) {
    T2.id !== e3 && (T2.id = e3, R.value && R.value.length > 0 ? T2.event = R.value[0] : T2.event = "", O.value && O.value.length > 0 ? T2.param = O.value[0].colName ?? "" : T2.param = "", V());
  }
  function U(e3) {
    Q(e3.chart.id);
  }
  function V() {
    N2.hideEvent ? A2("selectChange", M(c(T2), "event")) : N2.hideParam ? A2("selectChange", M(c(T2), "param")) : A2("selectChange", c(T2));
  }
  return (t2, a2) => (l(), s("div", { class: o(c(D)) }, [r("div", { class: o(`${c(D)}-headers`) }, [e2.hideHeader ? d("", true) : (l(), s(m, { key: 0 }, [a2[0] || (a2[0] = r("div", { class: "header", style: { width: "150px" } }, "组件", -1)), e2.hideEvent ? d("", true) : (l(), s("div", $, "事件")), e2.hideParam ? d("", true) : (l(), s("div", S, "参数"))], 64))], 2), r("div", { class: o(`${c(D)}-container`) }, [h(c(L), { class: o(`${c(D)}-items`), style: { width: "150px" } }, { default: p(() => {
    var _a;
    return [((_a = e2.componentList) == null ? void 0 : _a.length) > 0 ? (l(true), s(m, { key: 0 }, u(e2.componentList, (e3) => (l(), s("div", { key: e3.chart.id }, [e3.chart.type !== c(C).MfCombine ? (l(), v(g, { key: 0, style: { margin: "2px 6px 0 6px" }, "external-select": true, "is-select": T2.id === e3.chart.id, item: e3, "show-eye": false, "show-lock": false, onClick: (t3) => Q(e3.chart.id), onEnter: (t3) => function(e4) {
      J.setCurHoverComponent(e4.chart.id);
    }(e3), onLeave: K }, null, 8, ["is-select", "item", "onClick", "onEnter"])) : (l(), v(E, { key: 1, style: { margin: "2px", "font-size": "12px" }, "external-select": true, "is-select": T2.id === e3.chart.id, item: e3, "show-eye": false, "show-lock": false, "show-child-eye": false, "show-child-lock": false, expand: true, "child-select": T2.id, onParentClick: (t3) => Q(e3.chart.id), onChildClick: U }, null, 8, ["is-select", "item", "child-select", "onParentClick"]))]))), 128)) : (l(), v(c(w), { key: 1, description: "暂无组件", image: c(w).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))];
  }), _: 1 }, 8, ["class"]), e2.hideEvent ? d("", true) : (l(), s("div", B)), e2.hideEvent ? d("", true) : (l(), v(c(L), { key: 1, class: o(`${c(D)}-items`), style: { width: "120px" } }, { default: p(() => [R.value.length > 0 ? (l(true), s(m, { key: 0 }, u(R.value, (e3) => {
    var _a;
    return l(), s("div", { class: o(["item", T2.event === e3 ? "select" : ""]), title: e3, key: e3, onClick: (t3) => {
      return a3 = e3, void (T2.event !== a3 && (T2.event = a3, V()));
      var a3;
    } }, [r("div", null, f(c(x)(e3, (_a = G.value) == null ? void 0 : _a.chart.type)), 1)], 10, H);
  }), 128)) : (l(), v(c(w), { key: 1, description: "暂无事件", image: c(w).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"])), e2.hideParam ? d("", true) : (l(), s("div", b)), e2.hideParam ? d("", true) : (l(), v(c(L), { key: 3, class: o(`${c(D)}-items`), style: { width: "120px" } }, { default: p(() => [O.value.length > 0 ? (l(true), s(m, { key: 0 }, u(O.value, (e3, t3) => (l(), s("div", { class: o(["item", T2.param === e3.colName ? "select" : ""]), title: `${e3.colName}${e3.rename ? `[${e3.rename}]` : ""}`, key: t3, onClick: (t4) => {
    return a3 = e3.colName, void (T2.param !== a3 && (T2.param = a3 ?? "", V()));
    var a3;
  } }, [r("div", null, f(e3.rename ?? e3.colName), 1)], 10, j))), 128)) : (l(), v(c(w), { key: 1, description: "暂无参数", image: c(w).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"]))], 2)], 2));
} }), [["__scopeId", "data-v-f77f165a"]]);
function T() {
  const e2 = k();
  return { getEventComponents: function(t2) {
    const a2 = [], n2 = (a3) => a3.chart.events && a3.chart.events.emits && a3.chart.events.emits.length > 0 && (t2 && a3.chart.id !== e2.getCurConfigComponent.chart.id || !t2);
    for (const t3 of e2.getComponentList) {
      if (t3.chart.type !== C.MfCombine) {
        n2(t3) && a2.push(N(t3));
        continue;
      }
      const e3 = N(t3);
      e3.chart.options.components = e3.chart.options.components.filter((e4) => n2(e4)), (e3.chart.options.components.length > 0 || n2(e3)) && a2.push(e3);
    }
    return a2;
  } };
}
export {
  A as E,
  T as u
};
