import { defineComponent as t, computed as a, createBlock as e, openBlock as n, normalizeClass as o, unref as s, withCtx as i, createElementVNode as r, createVNode as l, toDisplayString as u, renderSlot as d } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as C } from "@mfish/core/hooks";
import { u as g, i as m, ao as p, _ as h } from "./index.js";
import { J as x } from "./JsonData.js";
const D = { class: "title" }, y = { class: "title" }, v = h(t({ __name: "MfBarLineDataConfig", props: { xTitle: { type: String, default: "X轴 / 维度" }, yTitle: { type: String, default: "Y轴 / 值" }, xMaxCount: { type: Number, default: 1 }, yMaxCount: { type: Number, default: 100 } }, setup(t2) {
  const h2 = g(), { setFields: v2, deleteFields: S, getFields: _, setDataTable: M } = m(), { resetDefault: T, setStaticData: b } = p(), { prefixCls: j } = C("bar-line-data-config"), F = a(() => {
    var _a, _b;
    return ((_b = (_a = h2.getCurConfigComponent.chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.source) ? JSON.stringify(h2.getCurConfigComponent.chart.data.dataSet.source) : "";
  }), J = a(() => {
    var _a;
    return h2.getCurConfigComponent.chart.data.fields ? ((_a = h2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.dimensions) ?? [] : [];
  }), N = a(() => {
    var _a;
    return h2.getCurConfigComponent.chart.data.fields ? ((_a = h2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.source) ?? [] : [];
  });
  function I() {
    const t3 = _("dimensions");
    t3 && t3.length > 0 ? M() : T(h2.getCurConfigComponent.chart);
  }
  function k(t3) {
    (t3 == null ? void 0 : t3.length) > 0 ? v2("dimensions", t3) : S("dimensions"), I();
  }
  function B(t3) {
    t3.length > 0 ? v2("source", t3) : S("source"), I();
  }
  function L(t3) {
    b(h2.getCurConfigComponent.chart, t3);
  }
  return (a2, C2) => (n(), e(f, { class: o(s(j)), onRefreshData: I }, { "data-select": i(() => [d(a2.$slots, "data-select", {}, void 0, true)]), "static-data": i(() => [l(x, { data: F.value, onDataChange: L }, null, 8, ["data"])]), "target-data": i(() => [r("div", D, u(t2.xTitle), 1), l(c, { "max-count": t2.xMaxCount, height: 150, onDataChange: k, fields: J.value }, null, 8, ["max-count", "fields"]), r("div", y, u(t2.yTitle), 1), l(c, { "max-count": t2.yMaxCount, height: 150, onDataChange: B, fields: N.value }, null, 8, ["max-count", "fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-c1e0ecfc"]]);
export {
  v as default
};
