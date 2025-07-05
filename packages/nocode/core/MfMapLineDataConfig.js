import { defineComponent as t, computed as a, createBlock as e, openBlock as n, normalizeClass as o, unref as s, withCtx as i, createElementVNode as l, createVNode as d, renderSlot as r } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as u } from "@mfish/core/hooks";
import { u as C, m as g, as as m, _ as h } from "./index.js";
import { J as p } from "./JsonData.js";
const v = h(t({ __name: "MfMapLineDataConfig", setup(t2) {
  const h2 = C(), { setFields: v2, deleteFields: D, getFields: x, setDataTable: _ } = g(), { prefixCls: S } = u("map-line-data-config"), { resetDefault: j } = m(), F = a(() => {
    var _a;
    return h2.getCurConfigComponent.chart.data.fields ? ((_a = h2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.start) ?? [] : [];
  }), J = a(() => {
    var _a;
    return h2.getCurConfigComponent.chart.data.fields ? ((_a = h2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.end) ?? [] : [];
  }), b = a(() => {
    var _a;
    return h2.getCurConfigComponent.chart.data.fields ? ((_a = h2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.value) ?? [] : [];
  }), I = a(() => {
    var _a;
    return ((_a = h2.getCurConfigComponent.chart.data.dataSet) == null ? void 0 : _a.source) ? JSON.stringify(h2.getCurConfigComponent.chart.data.dataSet.source) : "";
  });
  function M() {
    const t3 = x("start"), a2 = x("end");
    t3 && t3.length > 0 && a2 && a2.length > 0 ? _() : j(h2.getCurConfigComponent.chart);
  }
  const k = (t3, a2) => {
    (a2 == null ? void 0 : a2.length) > 0 ? v2(t3, a2) : D(t3), M();
  };
  function y(t3) {
    k("start", t3);
  }
  function L(t3) {
    k("end", t3);
  }
  function N(t3) {
    k("value", t3);
  }
  function O(t3) {
    var _a;
    t3 ? h2.getCurConfigComponent.chart.data.dataSet.source = t3 : (_a = h2.getCurConfigComponent.chart.data.dataSet) == null ? true : delete _a.source;
  }
  return (t3, a2) => (n(), e(f, { class: o(s(S)), onRefreshData: M }, { "data-select": i(() => [r(t3.$slots, "data-select", {}, void 0, true)]), "static-data": i(() => [d(p, { title: "地图数据", data: I.value, onDataChange: O }, null, 8, ["data"])]), "target-data": i(() => [a2[0] || (a2[0] = l("div", { class: "title" }, "开始地", -1)), d(c, { "max-count": 1, height: 100, onDataChange: y, fields: F.value }, null, 8, ["fields"]), a2[1] || (a2[1] = l("div", { class: "title" }, "结束地", -1)), d(c, { "max-count": 1, height: 100, onDataChange: L, fields: J.value }, null, 8, ["fields"]), a2[2] || (a2[2] = l("div", { class: "title" }, "数据值", -1)), d(c, { "max-count": 1, height: 100, onDataChange: N, fields: b.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-ecb05a09"]]);
export {
  v as default
};
