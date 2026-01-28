import { defineComponent as a, computed as t, openBlock as e, createBlock as o, normalizeClass as n, unref as s, withCtx as i, createElementVNode as d, createVNode as r, renderSlot as l } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as g } from "@mfish/core/hooks";
import { u as C, j as m, _ as u } from "./index.js";
import { J as p } from "./JsonData.js";
const h = "fieldName", D = u(a({ __name: "MfTableDataConfig", setup(a2) {
  const u2 = C(), { setFields: D2, deleteFields: v, setDataTable: _ } = m(), { prefixCls: j } = g("table-data-config"), S = t(() => u2.getCurConfigComponent.chart.data.fields ? u2.getCurConfigComponent.chart.data.fields[h] ?? [] : []), b = t(() => u2.getCurConfigComponent.chart.data?.dataSet ? JSON.stringify(u2.getCurConfigComponent.chart.data.dataSet) : "");
  function x() {
    _();
  }
  function J(a3) {
    a3.length > 0 ? (D2(h, a3), _()) : v(h);
  }
  function F(a3) {
    a3 && (u2.getCurConfigComponent.chart.data.dataSet = a3);
  }
  return (a3, t2) => (e(), o(f, { class: n(s(j)), onRefreshData: x }, { "data-select": i(() => [l(a3.$slots, "data-select", {}, void 0, true)]), "static-data": i(() => [r(p, { data: b.value, onDataChange: F }, null, 8, ["data"])]), "target-data": i(() => [t2[0] || (t2[0] = d("div", { class: "title" }, "显示内容", -1)), r(c, { height: 500, onDataChange: J, fields: S.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-cc1c4932"]]);
export {
  D as default
};
