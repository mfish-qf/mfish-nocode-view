import { defineComponent as a, useTemplateRef as r, onMounted as t, openBlock as e, createElementBlock as o, mergeProps as n, toHandlers as i, unref as d } from "vue";
import { i as s, ar as c } from "./index.js";
import { cloneDeep as m } from "lodash-es";
const p = a({ name: "MfRadar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(a2) {
  const p2 = a2, f = r("mfRadarRef"), { commonEvents: h } = s(p2.chart);
  function u(a3, r2) {
    const t2 = { ...m(p2.chart.options), backgroundColor: "transparent" };
    t2.radar = { ...t2.radar, indicator: m(r2?.indicator) }, t2.series[0].data = m(r2?.data), a3?.setOption(t2, true);
  }
  return t(() => {
    c(f.value, p2.chart, p2.chartContain, u);
  }), (a3, r2) => (e(), o("div", n({ ref: "mfRadarRef", style: { width: "100%", height: "100%" } }, i(d(h), true)), null, 16));
} });
export {
  p as default
};
