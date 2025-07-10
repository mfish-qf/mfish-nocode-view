import { defineComponent as t, useTemplateRef as e, onMounted as r, createElementBlock as a, openBlock as o, mergeProps as s, toHandlers as n, unref as i } from "vue";
import { u as m } from "./UseEcharts.js";
import { i as c } from "./index.js";
import { cloneDeep as p } from "lodash-es";
import { g as u } from "./geoCoordinate.js";
import { u as f } from "./UseEchartsMap.js";
const h = t({ name: "MfMapScatter", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const h2 = t2, l = e("mfMapScatterRef"), { commonEvents: d } = c(h2.chart);
  f(h2.chart.options.geo), r(() => {
    m(l.value, h2.chart, h2.chartContain, g);
  });
  function g(t3, e2) {
    const r2 = { ...p(h2.chart.options), backgroundColor: "transparent" }, a2 = ((t4) => {
      const e3 = [];
      let r3 = 0, a3 = t4 && t4.length > 1 && t4[1].length > 2 ? t4[1][2] : 0;
      for (const [o2, s2] of t4.entries()) if (o2 > 0) {
        const t5 = Number.parseFloat(s2[1]) || 0, o3 = u[s2[0]];
        o3 && e3.push({ name: s2[0], value: [...o3, t5] }), r3 < t5 && (r3 = t5), a3 > t5 && (a3 = t5);
      }
      return { dataArray: e3, max: r3, min: a3 };
    })(e2.source);
    r2.series[0].data = a2.dataArray, r2.series[0].tooltip = { trigger: "item", formatter: (t4) => `${t4.name}<br>${e2.source[0][1]}: ${t4.value[2]}` }, r2.visualMap.min = a2.min, r2.visualMap.max = a2.max, t3?.setOption(r2, true);
  }
  return (t3, e2) => (o(), a("div", s({ ref_key: "mfMapScatterRef", ref: l, style: { width: "100%", height: "100%" } }, n(i(d), true)), null, 16));
} });
export {
  h as default
};
