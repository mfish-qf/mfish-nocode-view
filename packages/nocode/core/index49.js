import { defineComponent as e, useTemplateRef as r, onMounted as t, createElementBlock as a, openBlock as n, mergeProps as o, toHandlers as s, unref as i } from "vue";
import { u as m } from "./UseEcharts.js";
import { h as c } from "./index.js";
const f = e({ name: "MfBar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const f2 = e2, h = r("mfBarRef"), { commonEvents: p } = c(f2.chart);
  return t(() => {
    m(h.value, f2.chart, f2.chartContain);
  }), (e3, r2) => (n(), a("div", o({ ref_key: "mfBarRef", ref: h, style: { width: "100%", height: "100%" } }, s(i(p), true)), null, 16));
} });
export {
  f as default
};
