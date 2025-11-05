import { defineComponent as a, useTemplateRef as t, onMounted as r, createElementBlock as e, openBlock as o, mergeProps as n, toHandlers as i, unref as s } from "vue";
import { i as d, as as c } from "./index.js";
import { cloneDeep as m } from "lodash-es";
const p = a({ name: "MfRadar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(a2) {
  const p2 = a2, f = t("mfRadarRef"), { commonEvents: h } = d(p2.chart);
  function u(a3, t2) {
    const r2 = { ...m(p2.chart.options), backgroundColor: "transparent" };
    r2.radar = { ...r2.radar, indicator: m(t2?.indicator) }, r2.series[0].data = m(t2?.data), a3?.setOption(r2, true);
  }
  return r(() => {
    c(f.value, p2.chart, p2.chartContain, u);
  }), (a3, t2) => (o(), e("div", n({ ref: "mfRadarRef", style: { width: "100%", height: "100%" } }, i(s(h), true)), null, 16));
} });
export {
  p as default
};
