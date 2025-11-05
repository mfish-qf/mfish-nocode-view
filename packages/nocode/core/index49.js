import { defineComponent as e, useTemplateRef as t, onMounted as r, createElementBlock as a, openBlock as n, mergeProps as i, toHandlers as o, unref as s } from "vue";
import { i as c, as as f } from "./index.js";
const m = e({ name: "MfBar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const m2 = e2, h = t("mfBarRef"), { commonEvents: p } = c(m2.chart);
  return r(() => {
    f(h.value, m2.chart, m2.chartContain);
  }), (e3, t2) => (n(), a("div", i({ ref_key: "mfBarRef", ref: h, style: { width: "100%", height: "100%" } }, o(s(p), true)), null, 16));
} });
export {
  m as default
};
