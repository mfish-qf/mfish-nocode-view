import { defineComponent as e, useTemplateRef as t, onMounted as r, openBlock as a, createElementBlock as i, mergeProps as n, toHandlers as c, unref as o } from "vue";
import { i as m, ar as s } from "./index.js";
const f = e({ name: "MfBar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const f2 = e2, h = t("mfBarRef"), { commonEvents: d, emitEvent: p } = m(f2.chart, void 0, ["clickEcharts"]);
  return r(() => {
    s(h.value, f2.chart, f2.chartContain, p);
  }), (e3, t2) => (a(), i("div", n({ ref_key: "mfBarRef", ref: h, style: { width: "100%", height: "100%" } }, c(o(d), true)), null, 16));
} });
export {
  f as default
};
