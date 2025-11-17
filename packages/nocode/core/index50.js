import { defineComponent as t, useTemplateRef as e, onMounted as a, createElementBlock as r, openBlock as n, mergeProps as s, toHandlers as o, unref as i } from "vue";
import { i as m, au as p, as as c } from "./index.js";
import { cloneDeep as u } from "lodash-es";
const h = t({ name: "MfMapChunks", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const h2 = t2, f = e("mfMapChunksRef"), { commonEvents: l } = m(h2.chart);
  p(h2.chart.options.series[0], h2.chart.options), a(() => {
    c(f.value, h2.chart, h2.chartContain, d);
  });
  function d(t3, e2) {
    const a2 = { ...u(h2.chart.options), backgroundColor: "transparent" }, r2 = ((t4) => {
      const e3 = [];
      let a3 = 0, r3 = t4 && t4.length > 1 && t4[1].length > 2 ? t4[1][2] : 0;
      for (const [n2, s2] of t4.entries()) if (n2 > 0) {
        const t5 = Number.parseFloat(s2[1]) || 0;
        e3.push({ name: s2[0], value: t5 }), a3 < t5 && (a3 = t5), r3 > t5 && (r3 = t5);
      }
      return { dataArray: e3, max: a3, min: r3 };
    })(e2.source);
    a2.series[0].data = r2.dataArray, a2.series[0].tooltip = { trigger: "item", formatter: "{b}<br/>{c}" }, a2.visualMap.min = r2.min, a2.visualMap.max = r2.max, t3?.setOption(a2, true);
  }
  return (t3, e2) => (n(), r("div", s({ ref_key: "mfMapChunksRef", ref: f, style: { width: "100%", height: "100%" } }, o(i(l), true)), null, 16));
} });
export {
  h as default
};
