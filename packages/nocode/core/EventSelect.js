import { defineComponent as e, useCssVars as t, computed as n, ref as l, watch as a, createBlock as o, openBlock as s, unref as i, withCtx as u, createElementVNode as r, normalizeClass as c, createElementBlock as d, createVNode as v, Fragment as p, renderList as f, withModifiers as m, createCommentVNode as h, toDisplayString as _, createTextVNode as y } from "vue";
import { theme as k, Dropdown as g, Tooltip as C, Button as $, Menu as b } from "ant-design-vue";
import { Icon as x } from "@mfish/core/components/Icon";
import { useDesign as S } from "@mfish/core/hooks";
import { u as E, j as I, g as j, _ as B } from "./index.js";
import { u as L, E as M } from "./UseEventSelect.js";
import { cloneDeep as P } from "lodash-es";
const w = ["onMouseenter"], z = { class: "title" }, A = B(e({ __name: "EventSelect", props: { events: { type: Array, default: () => [] }, filterSelf: { type: Boolean, default: false }, hideParam: { type: Boolean, default: false } }, emits: ["ok", "delete", "eventLose"], setup(e2, { emit: B2 }) {
  t((e3) => ({ "197b5ed7": q.value }));
  const A2 = e2, N = B2, { prefixCls: O } = S("event-select"), T = l(false), { token: U } = k.useToken(), q = n(() => U.value.colorInfoBg), D = l([]), F = E(), G = l(), H = l(-1), J = l(-1), { getEventComponents: K } = L(), Q = n(() => A2.hideParam ? "300px" : "420px"), R = n(() => {
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
    N("ok", { event: P(G.value), modifyIndex: J.value }), T.value = false;
  }
  a(() => {
    var _a;
    return (_a = F.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
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
  return (t2, n2) => (s(), o(i(g), { trigger: ["click"], open: T.value, onOpenChange: X, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: Q.value } }, { overlay: u(() => [v(i(b), null, { default: u(() => [v(i(b).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: u(() => [v(M, { "hide-param": e2.hideParam, value: G.value, "component-list": D.value, onSelectChange: Y }, null, 8, ["hide-param", "value", "component-list"]), r("div", { class: c(`${i(O)}-ok-button`) }, [v(i($), { class: "mr-2", onClick: V }, { default: u(() => n2[1] || (n2[1] = [y("取消")])), _: 1, __: [1] }), v(i($), { type: "primary", onClick: W }, { default: u(() => n2[2] || (n2[2] = [y("确定")])), _: 1, __: [2] })], 2)]), _: 1 })]), _: 1 })]), default: u(() => [r("div", { class: c(i(O)) }, [(s(true), d(p, null, f(R.value, (e3, t3) => (s(), d("div", { class: "item", key: t3, onClick: n2[0] || (n2[0] = m((e4) => T.value = false, ["stop"])), onMouseenter: (e4) => function(e5) {
    H.value = e5;
  }(t3), onMouseleave: Z }, [v(i(C), { title: e3, placement: "left" }, { default: u(() => [r("div", z, _(e3), 1)]), _: 2 }, 1032, ["title"]), H.value === t3 ? (s(), o(i(C), { key: 0, title: "修改" }, { default: u(() => [v(i(x), { class: "icon", icon: "ant-design:edit-outlined", onClick: m((e4) => function(e5) {
    D.value = K(A2.filterSelf), G.value = A2.events[e5], J.value = e5, T.value = true;
  }(t3), ["stop"]) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : h("", true), H.value === t3 ? (s(), o(i(C), { key: 1, title: "删除" }, { default: u(() => [v(i(x), { class: "icon", icon: "ant-design:delete-outlined", onClick: (e4) => function(e5) {
    N("delete", e5), T.value = false;
  }(t3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : h("", true)], 40, w))), 128)), v(i($), { size: "small", type: "link", class: c(`${i(O)}-drop-button`) }, { icon: u(() => [v(i(x), { size: 12, icon: "ant-design:plus-outlined" })]), default: u(() => [n2[3] || (n2[3] = r("span", { class: "content" }, "绑定已开启事件", -1))]), _: 1, __: [3] }, 8, ["class"])], 2)]), _: 1 }, 8, ["open", "overlay-style"]));
} }), [["__scopeId", "data-v-841baedd"]]);
export {
  A as E
};
