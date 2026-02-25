import { defineComponent as e, ref as o, computed as n, watch as t, resolveComponent as a, openBlock as i, createBlock as l, normalizeClass as u, unref as C, withCtx as r, createVNode as s, createElementVNode as p, createTextVNode as c, createElementBlock as g, Fragment as h, renderList as f, toDisplayString as v, createCommentVNode as m } from "vue";
import { S as d } from "./StyleConfig.js";
import { u as F, j as w, d as I, M as x, _ } from "./index.js";
import { debounce as k } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign as b } from "@mfish/core/hooks";
import { Slider as H, Checkbox as B, RadioGroup as G, RadioButton as U } from "ant-design-vue";
import "@mfish/core/utils/Is";
const y = { class: "title" }, R = { class: "title" }, S = { class: "title" }, z = { style: { width: "90px", "font-weight": "500" } }, T = _(e({ __name: "MfTableConfig", setup(e2) {
  const { prefixCls: _2 } = b("scroll-table-config"), T2 = o(), j = o(), M = o(), P = o(), A = F(), D = o(35), $ = o(5), q = o(1.5), E = o(""), J = o(true), K = o("single"), L = o([]), N = [{ title: "左", value: "left" }, { title: "中", value: "center" }, { title: "右", value: "right" }], { setDataTable: O } = w(), Q = o(false), V = n(() => {
    let e3;
    return A.getCurConfigComponent.chart.options.tableInfo.columns && A.getCurConfigComponent.chart.options.tableInfo.columns.length > 0 && (e3 = A.getCurConfigComponent.chart.options.tableInfo.columns.length), e3;
  }), W = o([]);
  function X(e3) {
    Y(e3), T2.value = e3;
  }
  function Y(e3) {
    A.getCurConfigComponent.chart.options.headerBGC = e3;
  }
  t(() => A.getCurConfigComponent, (e3) => {
    e3 && (function() {
      T2.value = A.getCurConfigComponent.chart.options.headerBGC, j.value = A.getCurConfigComponent.chart.options.oddRowBGC, M.value = A.getCurConfigComponent.chart.options.evenRowBGC, P.value = A.getCurConfigComponent.chart.options.hoverRowBGC, void 0 !== A.getCurConfigComponent.chart.options.headerHeight && (D.value = A.getCurConfigComponent.chart.options.headerHeight);
      void 0 !== A.getCurConfigComponent.chart.options.waitTime && (q.value = A.getCurConfigComponent.chart.options.waitTime / 1e3);
      void 0 !== A.getCurConfigComponent.chart.data?.pagination?.pageSize && ($.value = A.getCurConfigComponent.chart.data?.pagination?.pageSize);
      void 0 !== A.getCurConfigComponent.chart.options.indexHeader && (E.value = A.getCurConfigComponent.chart.options.indexHeader);
      void 0 !== A.getCurConfigComponent.chart.options.hoverPause && (J.value = A.getCurConfigComponent.chart.options.hoverPause);
      void 0 !== A.getCurConfigComponent.chart.options.carousel && (K.value = A.getCurConfigComponent.chart.options.carousel);
      if (void 0 !== A.getCurConfigComponent.chart.options.columns) {
        const e4 = [];
        for (let o3 = 0; o3 < V.value; o3++) A.getCurConfigComponent.chart.options.columns[o3] ? e4.push(A.getCurConfigComponent.chart.options.columns[o3].width) : e4.push(0);
        W.value = e4;
        const o2 = [];
        for (let e5 = 0; e5 < V.value; e5++) A.getCurConfigComponent.chart.options.columns[e5] ? o2.push(A.getCurConfigComponent.chart.options.columns[e5].align) : o2.push("center");
        L.value = o2;
      }
      Q.value = false === A.getCurConfigComponent.chart.options?.showHeader;
    })();
  }, { immediate: true }), t(() => A.getCurConfigComponent.chart?.options?.indexHeader, (e3) => {
    e3 && (A.getCurConfigComponent.chart.options.tableInfo.columns[0].title = e3);
  });
  const Z = k(() => {
    O();
  }, 500);
  function ee() {
    A.getCurConfigComponent.chart.data.pagination.pageSize = $.value, 1 === A.getCurConfigComponent.chart.data.type && Z();
  }
  function oe(e3) {
    ne(e3), j.value = e3;
  }
  function ne(e3) {
    A.getCurConfigComponent.chart.options.oddRowBGC = e3;
  }
  function te(e3) {
    ae(e3), M.value = e3;
  }
  function ae(e3) {
    A.getCurConfigComponent.chart.options.evenRowBGC = e3;
  }
  function ie(e3) {
    le(e3), P.value = e3;
  }
  function le(e3) {
    A.getCurConfigComponent.chart.options.hoverRowBGC = e3;
  }
  function ue(e3) {
    const o2 = A.getCurConfigComponent.chart;
    o2.options.index = e3, e3 ? (o2.options.columns.unshift({ width: 80, align: "center", ellipsis: true }), W.value.unshift(80), o2.options.tableInfo.columns.unshift({ title: o2.options.indexHeader || "序号" })) : (W.value.shift(), o2.options.columns.shift(), o2.options.tableInfo.columns.shift());
  }
  function Ce() {
    A.getCurConfigComponent.chart.options.indexHeader = E.value;
  }
  function re() {
    A.getCurConfigComponent.chart.options.headerHeight = D.value;
  }
  function se() {
    A.getCurConfigComponent.chart.options.tableInfo.showHeader = !Q.value;
  }
  return (e3, o2) => {
    const n2 = a("AInput");
    return i(), l(d, { class: u(C(_2)) }, { default: r(() => [s(I, { title: "表头设置" }, { default: r(() => [o2[7] || (o2[7] = p("div", { class: "title" }, " 背景颜色", -1)), s(C(x), { placeholder: "设置背景颜色，格式#FFFFFF", value: T2.value, onConfirmChange: X, onInputChange: Y }, null, 8, ["value"]), p("div", y, [o2[4] || (o2[4] = c(" 行头高度 ", -1)), s(C(H), { value: D.value, "onUpdate:value": o2[0] || (o2[0] = (e4) => D.value = e4), min: 54, max: 1e3, onChange: re }, null, 8, ["value"])]), p("div", R, [s(C(B), { checked: Q.value, "onUpdate:checked": o2[1] || (o2[1] = (e4) => Q.value = e4), onChange: se }, { default: r(() => [...o2[5] || (o2[5] = [c(" 隐藏行头", -1)])]), _: 1 }, 8, ["checked"])]), s(I, { title: "行号设置", "allow-check": true, "title-check": C(A).getCurConfigComponent.chart.options?.index, onChecked: ue }, { default: r(() => [o2[6] || (o2[6] = p("div", { class: "title" }, " 行号表头名称", -1)), s(n2, { value: E.value, "onUpdate:value": o2[2] || (o2[2] = (e4) => E.value = e4), onChange: Ce }, null, 8, ["value"])]), _: 1 }, 8, ["title-check"])]), _: 1 }), s(I, { title: "表体设置" }, { default: r(() => [p("div", S, [o2[8] || (o2[8] = c(" 表行数（行） ", -1)), s(C(H), { value: $.value, "onUpdate:value": o2[3] || (o2[3] = (e4) => $.value = e4), min: 1, max: 50, onChange: ee }, null, 8, ["value"])]), o2[9] || (o2[9] = p("div", { class: "title" }, " 奇数行颜色", -1)), s(C(x), { placeholder: "设置奇数行颜色，格式#FFFFFF", value: j.value, onConfirmChange: oe, onInputChange: ne }, null, 8, ["value"]), o2[10] || (o2[10] = p("div", { class: "title" }, " 偶数行颜色", -1)), s(C(x), { placeholder: "设置偶数行颜色，格式#FFFFFF", value: M.value, onConfirmChange: te, onInputChange: ae }, null, 8, ["value"]), o2[11] || (o2[11] = p("div", { class: "title" }, " 鼠标经过颜色", -1)), s(C(x), { placeholder: "鼠标经过行颜色，格式#FFFFFF", value: P.value, onConfirmChange: ie, onInputChange: le }, null, 8, ["value"])]), _: 1 }), V.value > 0 ? (i(), l(I, { key: 0, title: "列配置" }, { default: r(() => [(i(true), g(h, null, f(V.value, (e4) => (i(), g("div", { key: e4, class: "title" }, [c(v(`${e4}列`) + " 宽度 ", 1), s(C(H), { value: W.value[e4 - 1], "onUpdate:value": (o3) => W.value[e4 - 1] = o3, min: 0, max: 1e3, onChange: (o3) => (function(e5) {
      A.getCurConfigComponent.chart.options.columns[e5].width = W.value[e5];
    })(e4 - 1) }, null, 8, ["value", "onUpdate:value", "onChange"]), p("span", z, [s(C(G), { size: "small", value: L.value[e4 - 1], "onUpdate:value": (o3) => L.value[e4 - 1] = o3, onChange: (o3) => (function(e5) {
      A.getCurConfigComponent.chart.options.columns[e5].align = L.value[e5];
    })(e4 - 1) }, { default: r(() => [(i(), g(h, null, f(N, (e5) => s(C(U), { key: e5.value, value: e5.value }, { default: r(() => [c(v(e5.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value", "onUpdate:value", "onChange"])])]))), 128))]), _: 1 })) : m("", true)]), _: 1 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-59360e97"]]);
export {
  T as default
};
