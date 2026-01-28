import { defineComponent as e, useCssVars as t, ref as n, computed as l, watch as a, openBlock as o, createBlock as s, unref as i, withCtx as u, createElementVNode as r, normalizeClass as c, createElementBlock as v, Fragment as d, renderList as m, withModifiers as p, createVNode as f, toDisplayString as h, createCommentVNode as y, createTextVNode as k } from "vue";
import { theme as g, Dropdown as C, Tooltip as _, Button as S, Menu as $ } from "ant-design-vue";
import { Icon as b } from "@mfish/core/components/Icon";
import { useDesign as x } from "@mfish/core/hooks";
import { u as E, f as I, g as j, _ as B } from "./index.js";
import { E as L } from "./EventSelectItems.js";
import { cloneDeep as M } from "lodash-es";
import { u as P } from "./UseEventSelect.js";
const w = ["onMouseenter"], z = { class: "title" }, A = B(e({ __name: "EventSelect", props: { events: { type: Array, default: () => [] }, filterSelf: { type: Boolean, default: false }, hideParam: { type: Boolean, default: false } }, emits: ["ok", "delete", "eventLose"], setup(e2, { emit: B2 }) {
  t((e3) => ({ v197b5ed7: q.value }));
  const A2 = e2, N = B2, { prefixCls: O } = x("event-select"), T = n(false), { token: U } = g.useToken(), q = l(() => U.value.colorInfoBg), D = n([]), F = E(), G = n(), H = n(-1), J = n(-1), { getEventComponents: K } = P(), Q = l(() => A2.hideParam ? "300px" : "420px"), R = l(() => {
    if (A2.events && A2.events.length > 0) {
      const e3 = [];
      for (const t2 of A2.events) {
        const n2 = I(F.getComponentList, t2.id);
        if (!n2) {
          N("eventLose", t2.id);
          continue;
        }
        let l2;
        n2.chart.data.headers && (l2 = n2.chart.data.headers[t2.param]), l2 ? e3.push(`${n2.chart.name} / ${j(t2.event, n2.chart.type)} / ${l2.rename ?? l2.colName}`) : e3.push(`${n2.chart.name} / ${j(t2.event, n2.chart.type)}`);
      }
      return e3;
    }
    return [];
  });
  function V() {
    T.value = false;
  }
  function W() {
    N("ok", { event: M(G.value), modifyIndex: J.value }), T.value = false;
  }
  a(() => F.getCurConfigComponent?.chart.id, () => {
    T.value = false;
  });
  const X = (e3) => {
    T.value = e3, J.value = -1, e3 && (D.value = K(A2.filterSelf)), G.value = void 0;
  };
  function Y(e3) {
    G.value = e3;
  }
  function Z() {
    H.value = -1;
  }
  return (t2, n2) => (o(), s(i(C), { trigger: ["click"], open: T.value, onOpenChange: X, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: Q.value } }, { overlay: u(() => [f(i($), null, { default: u(() => [f(i($).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: u(() => [f(L, { "hide-param": e2.hideParam, value: G.value, "component-list": D.value, onSelectChange: Y }, null, 8, ["hide-param", "value", "component-list"]), r("div", { class: c(`${i(O)}-ok-button`) }, [f(i(S), { class: "mr-2", onClick: V }, { default: u(() => [...n2[1] || (n2[1] = [k("取消", -1)])]), _: 1 }), f(i(S), { type: "primary", onClick: W }, { default: u(() => [...n2[2] || (n2[2] = [k("确定", -1)])]), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: u(() => [r("div", { class: c(i(O)) }, [(o(true), v(d, null, m(R.value, (e3, t3) => (o(), v("div", { class: "item", key: t3, onClick: n2[0] || (n2[0] = p((e4) => T.value = false, ["stop"])), onMouseenter: (e4) => (function(e5) {
    H.value = e5;
  })(t3), onMouseleave: Z }, [f(i(_), { title: e3, placement: "left" }, { default: u(() => [r("div", z, h(e3), 1)]), _: 2 }, 1032, ["title"]), H.value === t3 ? (o(), s(i(_), { key: 0, title: "修改" }, { default: u(() => [f(i(b), { class: "icon", icon: "ant-design:edit-outlined", onClick: p((e4) => (function(e5) {
    D.value = K(A2.filterSelf), G.value = A2.events[e5], J.value = e5, T.value = true;
  })(t3), ["stop"]) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : y("", true), H.value === t3 ? (o(), s(i(_), { key: 1, title: "删除" }, { default: u(() => [f(i(b), { class: "icon", icon: "ant-design:delete-outlined", onClick: (e4) => (function(e5) {
    N("delete", e5), T.value = false;
  })(t3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : y("", true)], 40, w))), 128)), f(i(S), { size: "small", type: "link", class: c(`${i(O)}-drop-button`) }, { icon: u(() => [f(i(b), { size: 12, icon: "ant-design:plus-outlined" })]), default: u(() => [n2[3] || (n2[3] = r("span", { class: "content" }, "绑定已开启事件", -1))]), _: 1 }, 8, ["class"])], 2)]), _: 1 }, 8, ["open", "overlay-style"]));
} }), [["__scopeId", "data-v-841baedd"]]);
export {
  A as E
};
