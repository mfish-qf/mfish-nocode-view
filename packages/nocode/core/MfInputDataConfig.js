import { defineComponent as a, ref as t, computed as e, watch as n, resolveComponent as o, createBlock as l, openBlock as u, normalizeClass as s, unref as i, withCtx as d, createElementVNode as r, createVNode as f, renderSlot as c } from "vue";
import { D as g, a as C } from "./DragInData.js";
import { useDesign as m } from "@mfish/core/hooks";
import { u as h, m as p, au as v, _ as D } from "./index.js";
const _ = D(a({ __name: "MfInputDataConfig", setup(a2) {
  const D2 = h(), { setFields: _2, deleteFields: x, getFields: V, setDataTable: I } = p(), { prefixCls: b } = m("input-data-config"), { clearValue: F } = v(), j = t(), k = e(() => D2.getCurConfigComponent.chart.data.fields ? D2.getCurConfigComponent.chart.data.fields?.value ?? [] : []);
  function w() {
    const a3 = V("value");
    a3 && a3.length > 0 ? I() : F(D2.getCurConfigComponent.chart);
  }
  function A(a3) {
    D2.getCurConfigComponent.chart.data.defaultValue = void 0, a3.length > 0 ? (_2("value", a3), I()) : (x("value"), F(D2.getCurConfigComponent.chart));
  }
  function M() {
    D2.getCurConfigComponent.chart.data.defaultValue = j.value;
  }
  return n(() => D2.getCurConfigComponent, (a3) => {
    a3 && function(a4) {
      a4.chart.data.defaultValue && (j.value = a4.chart.data.defaultValue);
    }(a3);
  }, { immediate: true }), (a3, t2) => {
    const e2 = o("AInput");
    return u(), l(g, { class: s(i(b)), onRefreshData: w }, { "data-select": d(() => [c(a3.$slots, "data-select", {}, void 0, true)]), "static-data": d(() => [t2[1] || (t2[1] = r("div", { class: "title" }, "默认值", -1)), f(e2, { value: j.value, "onUpdate:value": t2[0] || (t2[0] = (a4) => j.value = a4), "show-count": "", maxlength: 50, onChange: M }, null, 8, ["value"])]), "target-data": d(() => [t2[2] || (t2[2] = r("div", { class: "title" }, "默认值", -1)), f(C, { "max-count": 1, height: 150, onDataChange: A, fields: k.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-b9f0d28b"]]);
export {
  _ as default
};
