import { defineComponent as t, useTemplateRef as e, onMounted as r, openBlock as a, createElementBlock as n, mergeProps as o, toHandlers as s, unref as i } from "vue";
import { i as m, at as p, ar as c } from "./index.js";
import { cloneDeep as u } from "lodash-es";
const h = t({ name: "MfMapChunks", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const h2 = t2, f = e("mfMapChunksRef"), { commonEvents: l } = m(h2.chart);
  p(h2.chart.options.series[0], h2.chart.options), r(() => {
    c(f.value, h2.chart, h2.chartContain, d);
  });
  function d(t3, e2) {
    const r2 = { ...u(h2.chart.options), backgroundColor: "transparent" }, a2 = ((t4) => {
      const e3 = [];
      let r3 = 0, a3 = t4 && t4.length > 1 && t4[1].length > 2 ? t4[1][2] : 0;
      for (const [n2, o2] of t4.entries()) if (n2 > 0) {
        const t5 = Number.parseFloat(o2[1]) || 0;
        e3.push({ name: o2[0], value: t5 }), r3 < t5 && (r3 = t5), a3 > t5 && (a3 = t5);
      }
      return { dataArray: e3, max: r3, min: a3 };
    })(e2.source);
    r2.series[0].data = a2.dataArray, r2.series[0].tooltip = { trigger: "item", formatter: "{b}<br/>{c}" }, r2.visualMap.min = a2.min, r2.visualMap.max = a2.max, t3?.setOption(r2, true);
  }
  return (t3, e2) => (a(), n("div", o({ ref_key: "mfMapChunksRef", ref: f, style: { width: "100%", height: "100%" } }, s(i(l), true)), null, 16));
} });
export {
  h as default
};
