import { defineComponent as a, ref as e, computed as t, watch as n, resolveComponent as o, openBlock as l, createBlock as u, normalizeClass as s, unref as i, withCtx as r, createElementVNode as d, createVNode as f, renderSlot as c } from "vue";
import { D as g, a as C } from "./DragInData.js";
import { useDesign as m } from "@mfish/core/hooks";
import { u as p, j as v, aw as h, _ as D } from "./index.js";
import { InputNumber as x } from "ant-design-vue";
const V = D(a({ __name: "MfInputDataConfig", props: { isNumber: { type: Boolean, default: false } }, setup(a2) {
  const D2 = p(), { setFields: V2, deleteFields: _, getFields: y, setDataTable: b } = v(), { prefixCls: I } = m("input-data-config"), { clearValue: j } = h(), k = e(), w = t(() => D2.getCurConfigComponent.chart.data.fields ? D2.getCurConfigComponent.chart.data.fields?.value ?? [] : []);
  function F() {
    const a3 = y("value");
    a3 && a3.length > 0 ? b() : j(D2.getCurConfigComponent.chart);
  }
  function N(a3) {
    D2.getCurConfigComponent.chart.data.defaultValue = void 0, a3.length > 0 ? (V2("value", a3), b()) : (_("value"), j(D2.getCurConfigComponent.chart));
  }
  function T() {
    D2.getCurConfigComponent.chart.data.defaultValue = k.value;
  }
  function U(a3) {
    0 === a3 && (k.value = D2.getCurConfigComponent.chart.data.dataSet?.value, D2.getCurConfigComponent.chart.data.defaultValue = k.value);
  }
  return n(() => D2.getCurConfigComponent, (a3) => {
    a3 && (function(a4) {
      a4.chart.data.defaultValue && (k.value = a4.chart.data.defaultValue);
    })(a3);
  }, { immediate: true }), (e2, t2) => {
    const n2 = o("AInput");
    return l(), u(g, { class: s(i(I)), onRefreshData: F, onDataTypeChange: U }, { "data-select": r(() => [c(e2.$slots, "data-select", {}, void 0, true)]), "static-data": r(() => [t2[2] || (t2[2] = d("div", { class: "title" }, "默认值", -1)), a2.isNumber ? (l(), u(i(x), { key: 0, style: { width: "100%" }, value: k.value, "onUpdate:value": t2[0] || (t2[0] = (a3) => k.value = a3), maxlength: 500, onChange: T }, null, 8, ["value"])) : (l(), u(n2, { key: 1, value: k.value, "onUpdate:value": t2[1] || (t2[1] = (a3) => k.value = a3), "show-count": "", maxlength: 500, onChange: T }, null, 8, ["value"]))]), "target-data": r(() => [t2[3] || (t2[3] = d("div", { class: "title" }, "默认值", -1)), f(C, { "max-count": 1, height: 150, onDataChange: N, fields: w.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-64bc03f2"]]);
export {
  V as default
};
