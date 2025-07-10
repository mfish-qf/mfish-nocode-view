import { defineComponent as a, computed as t, createBlock as e, openBlock as n, normalizeClass as o, unref as s, withCtx as l, createElementVNode as i, createVNode as d, renderSlot as r } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as u } from "@mfish/core/hooks";
import { u as g, j as C, _ as m } from "./index.js";
import { J as h } from "./JsonData.js";
const p = m(a({ __name: "MfSelectDataConfig", setup(a2) {
  const m2 = g(), { setFields: p2, deleteFields: v, setDataTable: D } = C(), { prefixCls: _ } = u("select-data-config"), b = t(() => m2.getCurConfigComponent.chart.data.fields ? m2.getCurConfigComponent.chart.data.fields?.label ?? [] : []), x = t(() => m2.getCurConfigComponent.chart.data.fields ? m2.getCurConfigComponent.chart.data.fields?.value ?? [] : []), S = t(() => m2.getCurConfigComponent.chart.data?.dataSet ? JSON.stringify(m2.getCurConfigComponent.chart.data.dataSet) : "");
  function j() {
    D();
  }
  function J(a3) {
    a3.length > 0 ? p2("label", a3) : v("label"), D();
  }
  function F(a3) {
    a3.length > 0 ? p2("value", a3) : v("value"), D();
  }
  function I(a3) {
    a3 && (m2.getCurConfigComponent.chart.data.dataSet = a3);
  }
  return (a3, t2) => (n(), e(f, { class: o(s(_)), onRefreshData: j }, { "data-select": l(() => [r(a3.$slots, "data-select", {}, void 0, true)]), "static-data": l(() => [d(h, { data: S.value, onDataChange: I }, null, 8, ["data"])]), "target-data": l(() => [t2[0] || (t2[0] = i("div", { class: "title" }, "标签显示", -1)), d(c, { "max-count": 1, height: 180, onDataChange: J, fields: b.value }, null, 8, ["fields"]), t2[1] || (t2[1] = i("div", { class: "title" }, "标签值", -1)), d(c, { "max-count": 1, height: 180, onDataChange: F, fields: x.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-99b1c7a3"]]);
export {
  p as default
};
