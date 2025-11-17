import { defineComponent as t, useTemplateRef as e, onMounted as a, createElementBlock as r, openBlock as o, mergeProps as n, toHandlers as s, unref as i } from "vue";
import { i as m, au as c, as as p } from "./index.js";
import { cloneDeep as u } from "lodash-es";
import { g as f } from "./geoCoordinate.js";
const l = t({ name: "MfMapScatter", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const l2 = t2, h = e("mfMapScatterRef"), { commonEvents: d } = m(l2.chart);
  c(l2.chart.options.geo, l2.chart.options), a(() => {
    p(h.value, l2.chart, l2.chartContain, g);
  });
  function g(t3, e2) {
    const a2 = { ...u(l2.chart.options), backgroundColor: "transparent" }, r2 = ((t4) => {
      const e3 = [];
      let a3 = 0, r3 = t4 && t4.length > 1 && t4[1].length > 2 ? t4[1][2] : 0;
      for (const [o2, n2] of t4.entries()) if (o2 > 0) {
        const t5 = Number.parseFloat(n2[1]) || 0, o3 = f[n2[0]];
        o3 && e3.push({ name: n2[0], value: [...o3, t5] }), a3 < t5 && (a3 = t5), r3 > t5 && (r3 = t5);
      }
      return { dataArray: e3, max: a3, min: r3 };
    })(e2.source);
    a2.series[0].data = r2.dataArray, a2.series[0].tooltip = { trigger: "item", formatter: (t4) => `${t4.name}<br>${e2.source[0][1]}: ${t4.value[2]}` }, a2.visualMap.min = r2.min, a2.visualMap.max = r2.max, t3?.setOption(a2, true);
  }
  return (t3, e2) => (o(), r("div", n({ ref_key: "mfMapScatterRef", ref: h, style: { width: "100%", height: "100%" } }, s(i(d), true)), null, 16));
} });
export {
  l as default
};
