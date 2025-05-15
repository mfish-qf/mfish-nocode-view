import { defineComponent as a, computed as t, createBlock as e, openBlock as o, normalizeClass as s, unref as n, withCtx as i, createElementVNode as l, createVNode as r, renderSlot as d } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as g } from "@mfish/core/hooks";
import { u as m, m as C, _ as u } from "./index.js";
import { J as p } from "./JsonData.js";
const h = "fieldName", D = u(a({ __name: "MfScrollTableDataConfig", setup(a2) {
  const u2 = m(), { setFields: D2, deleteFields: v, setDataTable: _ } = C(), { prefixCls: b } = g("scroll-table-data-config"), S = t(() => u2.getCurConfigComponent.chart.data.fields ? u2.getCurConfigComponent.chart.data.fields[h] ?? [] : []), j = t(() => {
    var _a;
    return ((_a = u2.getCurConfigComponent.chart.data) == null ? void 0 : _a.dataSet) ? JSON.stringify(u2.getCurConfigComponent.chart.data.dataSet) : "";
  });
  function x() {
    _();
  }
  function J(a3) {
    a3.length > 0 ? (D2(h, a3), _()) : v(h);
  }
  function F(a3) {
    a3 && (u2.getCurConfigComponent.chart.data.dataSet = a3);
  }
  return (a3, t2) => (o(), e(f, { class: s(n(b)), onRefreshData: x }, { "data-select": i(() => [d(a3.$slots, "data-select", {}, void 0, true)]), "static-data": i(() => [r(p, { data: j.value, onDataChange: F }, null, 8, ["data"])]), "target-data": i(() => [t2[0] || (t2[0] = l("div", { class: "title" }, "显示内容", -1)), r(c, { height: 500, onDataChange: J, fields: S.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-0c7c15bb"]]);
export {
  D as default
};
