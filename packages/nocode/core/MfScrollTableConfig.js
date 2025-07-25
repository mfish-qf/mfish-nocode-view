import { defineComponent as e, ref as t, computed as o, watch as n, resolveComponent as a, createBlock as l, openBlock as u, normalizeClass as i, unref as C, withCtx as r, createVNode as g, createCommentVNode as p, createElementVNode as c, createTextVNode as v, createElementBlock as h, Fragment as s, renderList as d, toDisplayString as f } from "vue";
import { S as m } from "./StyleConfig.js";
import { u as _, d as F, M as k, _ as w } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign as x } from "@mfish/core/hooks";
import { Slider as U, RadioGroup as S, RadioButton as H, Checkbox as I } from "ant-design-vue";
import "@mfish/core/utils/Is";
const y = { class: "title" }, B = { class: "title" }, G = { class: "title" }, R = { class: "title" }, T = { style: { width: "90px", "font-weight": "500" } }, W = w(e({ __name: "MfScrollTableConfig", setup(e2) {
  const { prefixCls: w2 } = x("scroll-table-config"), W2 = t(), M = t(), N = t(), P = _(), b = t(35), j = t(5), z = t(1.5), A = o(() => Math.round(P.getCurConfigComponent.chartContain.dropInfo.height / 2)), $ = t(""), q = t(true), D = t("single"), E = [{ title: "单条", value: "single" }, { title: "整页", value: "page" }], J = t([]), K = [{ title: "左", value: "left" }, { title: "中", value: "center" }, { title: "右", value: "right" }], L = o(() => {
    let e3;
    return P.getCurConfigComponent.chart.data.dataSet?.data && P.getCurConfigComponent.chart.data.dataSet.data.length > 0 ? e3 = P.getCurConfigComponent.chart.data.dataSet.data[0].length : P.getCurConfigComponent.chart.data.dataSet?.header && P.getCurConfigComponent.chart.data.dataSet.header.length > 0 && (e3 = P.getCurConfigComponent.chart.data.dataSet.header.length), P.getCurConfigComponent.chart.options?.index && (e3 += 1), e3;
  }), O = t([]);
  function Q(e3) {
    V(e3), W2.value = e3;
  }
  function V(e3) {
    P.getCurConfigComponent.chart.options.headerBGC = e3;
  }
  function X() {
    P.getCurConfigComponent.chart.options.rowNum = j.value;
  }
  function Y(e3) {
    Z(e3), M.value = e3;
  }
  function Z(e3) {
    P.getCurConfigComponent.chart.options.oddRowBGC = e3;
  }
  function ee(e3) {
    te(e3), N.value = e3;
  }
  function te(e3) {
    P.getCurConfigComponent.chart.options.evenRowBGC = e3;
  }
  function oe(e3) {
    P.getCurConfigComponent.chart.options.showHeader = e3;
  }
  function ne() {
    P.getCurConfigComponent.chart.options.headerHeight = b.value;
  }
  function ae() {
    P.getCurConfigComponent.chart.options.waitTime = 1e3 * z.value;
  }
  function le(e3) {
    P.getCurConfigComponent.chart.options.index = e3;
  }
  function ue() {
    P.getCurConfigComponent.chart.options.indexHeader = $.value;
  }
  function ie() {
    P.getCurConfigComponent.chart.options.hoverPause = q.value;
  }
  function Ce() {
    P.getCurConfigComponent.chart.options.carousel = D.value;
  }
  function re() {
    P.getCurConfigComponent.chart.options.align = J.value;
  }
  function ge() {
    P.getCurConfigComponent.chart.options.columnWidth = O.value;
  }
  return n(() => P.getCurConfigComponent, (e3) => {
    e3 && function() {
      W2.value = P.getCurConfigComponent.chart.options.headerBGC, M.value = P.getCurConfigComponent.chart.options.oddRowBGC, N.value = P.getCurConfigComponent.chart.options.evenRowBGC, void 0 !== P.getCurConfigComponent.chart.options.headerHeight && (b.value = P.getCurConfigComponent.chart.options.headerHeight);
      void 0 !== P.getCurConfigComponent.chart.options.waitTime && (z.value = P.getCurConfigComponent.chart.options.waitTime / 1e3);
      void 0 !== P.getCurConfigComponent.chart.options.rowNum && (j.value = P.getCurConfigComponent.chart.options.rowNum);
      void 0 !== P.getCurConfigComponent.chart.options.indexHeader && ($.value = P.getCurConfigComponent.chart.options.indexHeader);
      void 0 !== P.getCurConfigComponent.chart.options.hoverPause && (q.value = P.getCurConfigComponent.chart.options.hoverPause);
      void 0 !== P.getCurConfigComponent.chart.options.carousel && (D.value = P.getCurConfigComponent.chart.options.carousel);
      if (void 0 === P.getCurConfigComponent.chart.options.columnWidth) for (let e4 = 0; e4 < L.value; e4++) O.value.push(0);
      else {
        const e4 = [];
        for (let t2 = 0; t2 < L.value; t2++) P.getCurConfigComponent.chart.options.columnWidth[t2] ? e4.push(P.getCurConfigComponent.chart.options.columnWidth[t2]) : e4.push(0);
        O.value = e4;
      }
      if (void 0 === P.getCurConfigComponent.chart.options.align) for (let e4 = 0; e4 < L.value; e4++) J.value.push("center");
      else {
        const e4 = [];
        for (let t2 = 0; t2 < L.value; t2++) P.getCurConfigComponent.chart.options.align[t2] ? e4.push(P.getCurConfigComponent.chart.options.align[t2]) : e4.push("center");
        J.value = e4;
      }
    }();
  }, { immediate: true }), (e3, t2) => {
    const o2 = a("AInput");
    return u(), l(m, { class: i(C(w2)) }, { default: r(() => [g(F, { title: "表头设置", "allow-check": true, "title-check": C(P).getCurConfigComponent.chart.options?.showHeader, onChecked: oe }, { default: r(() => [t2[8] || (t2[8] = c("div", { class: "title" }, " 背景颜色", -1)), g(C(k), { placeholder: "设置背景颜色，格式#FFFFFF", value: W2.value, onConfirmChange: Q, onInputChange: V }, null, 8, ["value"]), c("div", y, [t2[6] || (t2[6] = v(" 表头高度 ")), g(C(U), { value: b.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => b.value = e4), min: 0, max: A.value, onChange: ne }, null, 8, ["value", "max"])]), g(F, { title: "行号设置", "allow-check": true, "title-check": C(P).getCurConfigComponent.chart.options?.index, onChecked: le }, { default: r(() => [t2[7] || (t2[7] = c("div", { class: "title" }, " 行号表头名称", -1)), g(o2, { value: $.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => $.value = e4), onChange: ue }, null, 8, ["value"])]), _: 1, __: [7] }, 8, ["title-check"])]), _: 1, __: [8] }, 8, ["title-check"]), g(F, { title: "表体设置" }, { default: r(() => [c("div", B, [t2[9] || (t2[9] = v(" 表行数（行） ")), g(C(U), { value: j.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => j.value = e4), min: 1, max: 50, onChange: X }, null, 8, ["value"])]), t2[13] || (t2[13] = c("div", { class: "title" }, " 奇数行颜色", -1)), g(C(k), { placeholder: "设置奇数行颜色，格式#FFFFFF", value: M.value, onConfirmChange: Y, onInputChange: Z }, null, 8, ["value"]), t2[14] || (t2[14] = c("div", { class: "title" }, " 偶数行颜色", -1)), g(C(k), { placeholder: "设置偶数行颜色，格式#FFFFFF", value: N.value, onConfirmChange: ee, onInputChange: te }, null, 8, ["value"]), c("div", G, [t2[10] || (t2[10] = v(" 轮播方式 ")), c("div", null, [g(C(S), { size: "small", value: D.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => D.value = e4), onChange: Ce }, { default: r(() => [(u(), h(s, null, d(E, (e4) => g(C(H), { key: e4.value, value: e4.value }, { default: r(() => [v(f(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])]), c("div", R, [t2[11] || (t2[11] = v(" 轮播间隔（秒） ")), g(C(U), { value: z.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => z.value = e4), min: 0.1, max: 5, step: 0.1, onChange: ae }, null, 8, ["value"])]), g(C(I), { checked: q.value, "onUpdate:checked": t2[5] || (t2[5] = (e4) => q.value = e4), onChange: ie }, { default: r(() => t2[12] || (t2[12] = [v(" 悬浮暂停轮播")])), _: 1, __: [12] }, 8, ["checked"])]), _: 1, __: [13, 14] }), L.value > 0 ? (u(), l(F, { key: 0, title: "列配置" }, { default: r(() => [(u(true), h(s, null, d(L.value, (e4) => (u(), h("div", { key: e4, class: "title" }, [v(f(`${e4}列`) + " 宽度 ", 1), g(C(U), { value: O.value[e4 - 1], "onUpdate:value": (t3) => O.value[e4 - 1] = t3, min: 0, max: 500, onChange: ge }, null, 8, ["value", "onUpdate:value"]), c("span", T, [g(C(S), { size: "small", value: J.value[e4 - 1], "onUpdate:value": (t3) => J.value[e4 - 1] = t3, onChange: re }, { default: r(() => [(u(), h(s, null, d(K, (e5) => g(C(H), { key: e5.value, value: e5.value }, { default: r(() => [v(f(e5.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 2 }, 1032, ["value", "onUpdate:value"])])]))), 128))]), _: 1 })) : p("", true)]), _: 1 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-23776df6"]]);
export {
  W as default
};
