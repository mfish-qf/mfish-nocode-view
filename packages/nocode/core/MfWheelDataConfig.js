import { defineComponent as t, computed as a, createBlock as e, openBlock as s, normalizeClass as o, unref as n, withCtx as i, createElementVNode as l, createVNode as d, renderSlot as r } from "vue";
import { D as c, a as f } from "./DragInData.js";
import { useDesign as g } from "@mfish/core/hooks";
import { u as p, l as u, _ as m } from "./index.js";
import { InputNumber as C } from "ant-design-vue";
const h = "percentage", v = m(t({ __name: "MfWheelDataConfig", setup(t2) {
  const m2 = p(), { setFields: v2, deleteFields: D, setDataTable: _ } = u(), { prefixCls: x } = g("digits-data-config"), j = a(() => m2.getCurConfigComponent.chart.data.fields ? m2.getCurConfigComponent.chart.data.fields[h] ?? [] : []);
  function F() {
    _();
  }
  function I(t3) {
    t3.length > 0 ? (v2(h, t3), _()) : D(h);
  }
  return (t3, a2) => (s(), e(c, { class: o(n(x)), onRefreshData: F }, { "data-select": i(() => [r(t3.$slots, "data-select", {}, void 0, true)]), "static-data": i(() => [a2[1] || (a2[1] = l("div", { class: "title" }, "百分比", -1)), d(n(C), { style: { width: "100%" }, value: n(m2).getCurConfigComponent.chart.data.dataSet.percentage, "onUpdate:value": a2[0] || (a2[0] = (t4) => n(m2).getCurConfigComponent.chart.data.dataSet.percentage = t4), placeholder: "百分比", step: 1 }, null, 8, ["value"])]), "target-data": i(() => [a2[2] || (a2[2] = l("div", { class: "title" }, "百分比（不包含%）", -1)), d(f, { "max-count": 1, height: 150, onDataChange: I, fields: j.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-48c427c5"]]);
export {
  v as default
};
