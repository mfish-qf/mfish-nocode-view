import { defineComponent as t, useTemplateRef as r, onMounted as e, createElementBlock as a, openBlock as s, mergeProps as o, toHandlers as n, unref as i } from "vue";
import { u as m } from "./UseEcharts.js";
import { l as p } from "./index.js";
import { cloneDeep as c } from "lodash-es";
import { u } from "./UseEchartsMap.js";
const h = t({ name: "MfMapChunks", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const h2 = t2, f = r("mfMapChunksRef"), { commonEvents: l } = p(h2.chart);
  u(h2.chart.options.series[0]), e(() => {
    m(f.value, h2.chart, h2.chartContain, d);
  });
  function d(t3, r2) {
    const e2 = { ...c(h2.chart.options), backgroundColor: "transparent" }, a2 = ((t4) => {
      const r3 = [];
      let e3 = 0, a3 = t4 && t4.length > 1 && t4[1].length > 2 ? t4[1][2] : 0;
      for (const [s2, o2] of t4.entries()) if (s2 > 0) {
        const t5 = Number.parseFloat(o2[1]) || 0;
        r3.push({ name: o2[0], value: t5 }), e3 < t5 && (e3 = t5), a3 > t5 && (a3 = t5);
      }
      return { dataArray: r3, max: e3, min: a3 };
    })(r2.source);
    e2.series[0].data = a2.dataArray, e2.series[0].tooltip = { trigger: "item", formatter: "{b}<br/>{c}" }, e2.visualMap.min = a2.min, e2.visualMap.max = a2.max, t3?.setOption(e2, true);
  }
  return (t3, r2) => (s(), a("div", o({ ref_key: "mfMapChunksRef", ref: f, style: { width: "100%", height: "100%" } }, n(i(l), true)), null, 16));
} });
export {
  h as default
};
