import { defineComponent as t, computed as a, createBlock as e, openBlock as n, normalizeClass as o, unref as i, withCtx as s, createElementVNode as l, createVNode as d, renderSlot as f } from "vue";
import { D as r, a as g } from "./DragInData.js";
import { useDesign as c } from "@mfish/core/hooks";
import { u, j as C, _ as m } from "./index.js";
import { J as h } from "./JsonData.js";
const p = m(t({ __name: "MfSegmentedDataConfig", setup(t2) {
  const m2 = u(), { setFields: p2, deleteFields: v, setDataTable: D } = C(), { prefixCls: x } = c("segmented-data-config"), _ = a(() => {
    var _a;
    return m2.getCurConfigComponent.chart.data.fields ? ((_a = m2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.title) ?? [] : [];
  }), S = a(() => {
    var _a;
    return m2.getCurConfigComponent.chart.data.fields ? ((_a = m2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.value) ?? [] : [];
  }), j = a(() => {
    var _a;
    return m2.getCurConfigComponent.chart.data.fields ? ((_a = m2.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.icon) ?? [] : [];
  }), J = a(() => {
    var _a;
    return ((_a = m2.getCurConfigComponent.chart.data) == null ? void 0 : _a.dataSet) ? JSON.stringify(m2.getCurConfigComponent.chart.data.dataSet) : "";
  });
  function F() {
    D();
  }
  function I(t3) {
    t3.length > 0 ? p2("title", t3) : v("title"), D();
  }
  function b(t3) {
    t3.length > 0 ? p2("value", t3) : v("value"), D();
  }
  function k(t3) {
    t3.length > 0 ? p2("icon", t3) : v("icon"), D();
  }
  function y(t3) {
    t3 && (m2.getCurConfigComponent.chart.data.dataSet = t3);
  }
  return (t3, a2) => (n(), e(r, { class: o(i(x)), onRefreshData: F }, { "data-select": s(() => [f(t3.$slots, "data-select", {}, void 0, true)]), "static-data": s(() => [d(h, { data: J.value, onDataChange: y }, null, 8, ["data"])]), "target-data": s(() => [a2[0] || (a2[0] = l("div", { class: "title" }, "标签显示", -1)), d(g, { "max-count": 1, height: 120, onDataChange: I, fields: _.value }, null, 8, ["fields"]), a2[1] || (a2[1] = l("div", { class: "title" }, "标签值", -1)), d(g, { "max-count": 1, height: 120, onDataChange: b, fields: S.value }, null, 8, ["fields"]), a2[2] || (a2[2] = l("div", { class: "title" }, "图标", -1)), d(g, { "max-count": 1, height: 120, onDataChange: k, fields: j.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-d85d4381"]]);
export {
  p as default
};
