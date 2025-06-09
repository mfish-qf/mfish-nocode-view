import { defineComponent as o, ref as e, computed as n, watch as t, resolveComponent as a, createBlock as i, openBlock as l, normalizeClass as u, unref as C, withCtx as r, createVNode as s, createCommentVNode as p, createElementVNode as g, createTextVNode as c, createElementBlock as f, Fragment as h, renderList as m, toDisplayString as v } from "vue";
import { S as d } from "./StyleConfig.js";
import { u as F, m as _, h as x, o as I, _ as w } from "./index.js";
import { debounce as b } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign as k } from "@mfish/core/hooks";
import { Slider as H, RadioGroup as y, RadioButton as B } from "ant-design-vue";
import "@mfish/core/utils/Is";
const G = { class: "title" }, U = { style: { width: "90px", "font-weight": "500" } }, S = w(o({ __name: "MfTableConfig", setup(o2) {
  const { prefixCls: w2 } = k("scroll-table-config"), S2 = e(), z = e(), R = e(), T = F(), j = e(35), P = e(5), A = e(1.5), D = e(""), M = e(true), $ = e("single"), q = e([]), E = [{ title: "左", value: "left" }, { title: "中", value: "center" }, { title: "右", value: "right" }], { setDataTable: J } = _(), K = n(() => {
    let o3;
    return T.getCurConfigComponent.chart.options.tableInfo.columns && T.getCurConfigComponent.chart.options.tableInfo.columns.length > 0 && (o3 = T.getCurConfigComponent.chart.options.tableInfo.columns.length), o3;
  }), L = e([]);
  function N(o3) {
    O(o3), S2.value = o3;
  }
  function O(o3) {
    T.getCurConfigComponent.chart.options.headerBGC = o3;
  }
  t(() => T.getCurConfigComponent, (o3) => {
    o3 && function() {
      var _a, _b, _c, _d;
      S2.value = T.getCurConfigComponent.chart.options.headerBGC, z.value = T.getCurConfigComponent.chart.options.oddRowBGC, R.value = T.getCurConfigComponent.chart.options.evenRowBGC, void 0 !== T.getCurConfigComponent.chart.options.headerHeight && (j.value = T.getCurConfigComponent.chart.options.headerHeight);
      void 0 !== T.getCurConfigComponent.chart.options.waitTime && (A.value = T.getCurConfigComponent.chart.options.waitTime / 1e3);
      void 0 !== ((_b = (_a = T.getCurConfigComponent.chart.data) == null ? void 0 : _a.pagination) == null ? void 0 : _b.pageSize) && (P.value = (_d = (_c = T.getCurConfigComponent.chart.data) == null ? void 0 : _c.pagination) == null ? void 0 : _d.pageSize);
      void 0 !== T.getCurConfigComponent.chart.options.indexHeader && (D.value = T.getCurConfigComponent.chart.options.indexHeader);
      void 0 !== T.getCurConfigComponent.chart.options.hoverPause && (M.value = T.getCurConfigComponent.chart.options.hoverPause);
      void 0 !== T.getCurConfigComponent.chart.options.carousel && ($.value = T.getCurConfigComponent.chart.options.carousel);
      if (void 0 !== T.getCurConfigComponent.chart.options.columns) {
        const o4 = [];
        for (let e3 = 0; e3 < K.value; e3++) T.getCurConfigComponent.chart.options.columns[e3] ? o4.push(T.getCurConfigComponent.chart.options.columns[e3].width) : o4.push(0);
        L.value = o4;
        const e2 = [];
        for (let o5 = 0; o5 < K.value; o5++) T.getCurConfigComponent.chart.options.columns[o5] ? e2.push(T.getCurConfigComponent.chart.options.columns[o5].align) : e2.push("center");
        q.value = e2;
      }
    }();
  }, { immediate: true }), t(() => {
    var _a, _b;
    return (_b = (_a = T.getCurConfigComponent.chart) == null ? void 0 : _a.options) == null ? void 0 : _b.indexHeader;
  }, (o3) => {
    o3 && (T.getCurConfigComponent.chart.options.tableInfo.columns[0].title = o3);
  });
  const Q = b(() => {
    J();
  }, 500);
  function V() {
    T.getCurConfigComponent.chart.data.pagination.pageSize = P.value, 1 === T.getCurConfigComponent.chart.data.type && Q();
  }
  function W(o3) {
    X(o3), z.value = o3;
  }
  function X(o3) {
    T.getCurConfigComponent.chart.options.oddRowBGC = o3;
  }
  function Y(o3) {
    Z(o3), R.value = o3;
  }
  function Z(o3) {
    T.getCurConfigComponent.chart.options.evenRowBGC = o3;
  }
  function oo(o3) {
    const e2 = T.getCurConfigComponent.chart;
    e2.options.index = o3, o3 ? (e2.options.columns.unshift({ width: 80, align: "center", ellipsis: true }), L.value.unshift(80), e2.options.tableInfo.columns.unshift({ title: e2.options.indexHeader || "序号" })) : (L.value.shift(), e2.options.columns.shift(), e2.options.tableInfo.columns.shift());
  }
  function eo() {
    T.getCurConfigComponent.chart.options.indexHeader = D.value;
  }
  return (o3, e2) => {
    const n2 = a("AInput");
    return l(), i(d, { class: u(C(w2)) }, { default: r(() => [s(x, { title: "表头设置" }, { default: r(() => {
      var _a;
      return [e2[3] || (e2[3] = g("div", { class: "title" }, " 背景颜色", -1)), s(C(I), { placeholder: "设置背景颜色，格式#FFFFFF", value: S2.value, onConfirmChange: N, onInputChange: O }, null, 8, ["value"]), s(x, { title: "行号设置", "allow-check": true, "title-check": (_a = C(T).getCurConfigComponent.chart.options) == null ? void 0 : _a.index, onChecked: oo }, { default: r(() => [e2[2] || (e2[2] = g("div", { class: "title" }, " 行号表头名称", -1)), s(n2, { value: D.value, "onUpdate:value": e2[0] || (e2[0] = (o4) => D.value = o4), onChange: eo }, null, 8, ["value"])]), _: 1, __: [2] }, 8, ["title-check"])];
    }), _: 1, __: [3] }), s(x, { title: "表体设置" }, { default: r(() => [g("div", G, [e2[4] || (e2[4] = c(" 表行数（行） ")), s(C(H), { value: P.value, "onUpdate:value": e2[1] || (e2[1] = (o4) => P.value = o4), min: 1, max: 50, onChange: V }, null, 8, ["value"])]), e2[5] || (e2[5] = g("div", { class: "title" }, " 奇数行颜色", -1)), s(C(I), { placeholder: "设置奇数行颜色，格式#FFFFFF", value: z.value, onConfirmChange: W, onInputChange: X }, null, 8, ["value"]), e2[6] || (e2[6] = g("div", { class: "title" }, " 偶数行颜色", -1)), s(C(I), { placeholder: "设置偶数行颜色，格式#FFFFFF", value: R.value, onConfirmChange: Y, onInputChange: Z }, null, 8, ["value"])]), _: 1, __: [5, 6] }), K.value > 0 ? (l(), i(x, { key: 0, title: "列配置" }, { default: r(() => [(l(true), f(h, null, m(K.value, (o4) => (l(), f("div", { key: o4, class: "title" }, [c(v(`${o4}列`) + " 宽度 ", 1), s(C(H), { value: L.value[o4 - 1], "onUpdate:value": (e3) => L.value[o4 - 1] = e3, min: 0, max: 1e3, onChange: (e3) => function(o5) {
      T.getCurConfigComponent.chart.options.columns[o5].width = L.value[o5];
    }(o4 - 1) }, null, 8, ["value", "onUpdate:value", "onChange"]), g("span", U, [s(C(y), { size: "small", value: q.value[o4 - 1], "onUpdate:value": (e3) => q.value[o4 - 1] = e3, onChange: (e3) => function(o5) {
      T.getCurConfigComponent.chart.options.columns[o5].align = q.value[o5];
    }(o4 - 1) }, { default: r(() => [(l(), f(h, null, m(E, (o5) => s(C(B), { key: o5.value, value: o5.value }, { default: r(() => [c(v(o5.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])])]))), 128))]), _: 1 })) : p("", true)]), _: 1 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-aa3abd20"]]);
export {
  S as default
};
