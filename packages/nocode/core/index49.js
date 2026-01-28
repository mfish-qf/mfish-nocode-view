import { defineComponent as e, useTemplateRef as r, onMounted as t, openBlock as a, createElementBlock as n, mergeProps as i, toHandlers as o, unref as c } from "vue";
import { i as f, ar as m } from "./index.js";
const s = e({ name: "MfBar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const s2 = e2, h = r("mfBarRef"), { commonEvents: p } = f(s2.chart);
  return t(() => {
    m(h.value, s2.chart, s2.chartContain);
  }), (e3, r2) => (a(), n("div", i({ ref_key: "mfBarRef", ref: h, style: { width: "100%", height: "100%" } }, o(c(p), true)), null, 16));
} });
export {
  s as default
};
