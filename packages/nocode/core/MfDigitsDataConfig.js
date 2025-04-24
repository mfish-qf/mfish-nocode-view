import { defineComponent as t, computed as a, createBlock as e, openBlock as s, normalizeClass as o, unref as i, withCtx as n, createElementVNode as l, createVNode as d, renderSlot as r } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as u } from "@mfish/core/hooks";
import { InputNumber as g } from "ant-design-vue";
import { u as m, i as p, _ as C } from "./index.js";
const h = "num", v = C(t({ __name: "MfDigitsDataConfig", setup(t2) {
  const C2 = m(), { setFields: v2, deleteFields: D, setDataTable: _ } = p(), { prefixCls: x } = u("digits-data-config"), j = a(() => C2.getCurConfigComponent.chart.data.fields ? C2.getCurConfigComponent.chart.data.fields[h] ?? [] : []);
  function F() {
    _();
  }
  function I(t3) {
    t3.length > 0 ? (v2(h, t3), _()) : D(h);
  }
  return (t3, a2) => (s(), e(f, { class: o(i(x)), onRefreshData: F }, { "data-select": n(() => [r(t3.$slots, "data-select", {}, void 0, true)]), "static-data": n(() => [a2[1] || (a2[1] = l("div", { class: "title" }, "显示内容", -1)), d(i(g), { style: { width: "100%" }, value: i(C2).getCurConfigComponent.chart.data.dataSet, "onUpdate:value": a2[0] || (a2[0] = (t4) => i(C2).getCurConfigComponent.chart.data.dataSet = t4), placeholder: "显示内容", step: 1 }, null, 8, ["value"])]), "target-data": n(() => [a2[2] || (a2[2] = l("div", { class: "title" }, "显示内容", -1)), d(c, { "max-count": 1, height: 150, onDataChange: I, fields: j.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-6c95642a"]]);
export {
  v as default
};
