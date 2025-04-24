import { defineComponent as r, useTemplateRef as t, onMounted as a, createElementBlock as e, openBlock as o, mergeProps as n, toHandlers as i, unref as s } from "vue";
import { u as d } from "./UseEcharts.js";
import { h as c } from "./index.js";
import { cloneDeep as m } from "lodash-es";
const p = r({ name: "MfRadar", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(r2) {
  const p2 = r2, f = t("mfRadarRef"), { commonEvents: h } = c(p2.chart);
  function u(r3, t2) {
    const a2 = { ...m(p2.chart.options), backgroundColor: "transparent" };
    a2.radar = { ...a2.radar, indicator: m(t2 == null ? void 0 : t2.indicator) }, a2.series[0].data = m(t2 == null ? void 0 : t2.data), r3 == null ? void 0 : r3.setOption(a2, true);
  }
  return a(() => {
    d(f.value, p2.chart, p2.chartContain, u);
  }), (r3, t2) => (o(), e("div", n({ ref: "mfRadarRef", style: { width: "100%", height: "100%" } }, i(s(h), true)), null, 16));
} });
export {
  p as default
};
