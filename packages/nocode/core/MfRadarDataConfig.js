import { defineComponent as t, computed as a, createBlock as e, openBlock as n, normalizeClass as o, unref as i, withCtx as d, createElementVNode as s, createVNode as r, renderSlot as C } from "vue";
import { D as l, a as f } from "./DragInData.js";
import { useDesign as g } from "@mfish/core/hooks";
import { u as c, j as u, av as m, _ as h } from "./index.js";
import { J as p } from "./JsonData.js";
const D = h(t({ __name: "MfRadarDataConfig", setup(t2) {
  const h2 = c(), { setFields: D2, deleteFields: v, getFields: S, setDataTable: _ } = u(), { prefixCls: x } = g("radar-data-config"), { resetDefault: j } = m(), J = a(() => h2.getCurConfigComponent.chart.data.fields ? h2.getCurConfigComponent.chart.data.fields?.dimensions ?? [] : []), F = a(() => h2.getCurConfigComponent.chart.data.fields ? h2.getCurConfigComponent.chart.data.fields?.source ?? [] : []), b = a(() => h2.getCurConfigComponent.chart.data.dataSet?.indicator ? JSON.stringify(h2.getCurConfigComponent.chart.data.dataSet.indicator) : ""), y = a(() => h2.getCurConfigComponent.chart.data.dataSet?.data ? JSON.stringify(h2.getCurConfigComponent.chart.data.dataSet.data) : "");
  function I() {
    const t3 = S("dimensions");
    t3 && t3.length > 0 ? _() : j(h2.getCurConfigComponent.chart);
  }
  function N(t3) {
    t3?.length > 0 ? D2("dimensions", t3) : v("dimensions"), I();
  }
  function O(t3) {
    t3.length > 0 ? D2("source", t3) : v("source"), I();
  }
  function R(t3) {
    t3 ? h2.getCurConfigComponent.chart.data.dataSet.indicator = t3 : delete h2.getCurConfigComponent.chart.data.dataSet.indicator;
  }
  function k(t3) {
    t3 ? h2.getCurConfigComponent.chart.data.dataSet.data = t3 : delete h2.getCurConfigComponent.chart.data.dataSet.data;
  }
  return (t3, a2) => (n(), e(l, { class: o(i(x)), onRefreshData: I }, { "data-select": d(() => [C(t3.$slots, "data-select", {}, void 0, true)]), "static-data": d(() => [r(p, { title: "维度名", data: b.value, onDataChange: R }, null, 8, ["data"]), r(p, { title: "维度值", data: y.value, onDataChange: k }, null, 8, ["data"])]), "target-data": d(() => [a2[0] || (a2[0] = s("div", { class: "title" }, "类型", -1)), r(f, { "max-count": 1, height: 100, onDataChange: N, fields: J.value }, null, 8, ["fields"]), a2[1] || (a2[1] = s("div", { class: "title" }, "维度值", -1)), r(f, { "max-count": 10, height: 250, onDataChange: O, fields: F.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-23efd3ba"]]);
export {
  D as default
};
