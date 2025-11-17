import { defineComponent as e, useTemplateRef as a, onMounted as t, createElementBlock as r, openBlock as o, mergeProps as n, toHandlers as s, unref as i } from "vue";
import { au as m, i as p, as as c } from "./index.js";
import { cloneDeep as l } from "lodash-es";
import { g as u } from "./geoCoordinate.js";
import { use as f } from "echarts";
import { Lines3DChart as h, Scatter3DChart as d } from "echarts-gl/charts";
import { Geo3DComponent as v } from "echarts-gl/components";
const g = e({ name: "MfMapLine3D", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const g2 = e2;
  m(g2.chart.options.geo3D, g2.chart.options), f([h, d, v]);
  const y = a("mfMapLineRef"), { commonEvents: x } = p(g2.chart);
  t(() => {
    c(y.value, g2.chart, g2.chartContain, D, { renderer: "canvas" });
  });
  function D(e3, a2) {
    const t2 = { ...l(g2.chart.options), backgroundColor: "transparent" }, r2 = ((e4) => {
      const a3 = [], t3 = [], r3 = /* @__PURE__ */ new Set();
      let o2 = 0, n2 = e4 && e4.length > 1 && e4[1].length > 2 ? e4[1][2] : 0;
      const s2 = (e5, t4) => {
        if (r3.has(e5)) {
          const r4 = a3.findIndex((a4) => a4.name === e5);
          a3[r4].value[3] += t4, o2 < a3[r4].value[3] && (o2 = a3[r4].value[3]), n2 > a3[r4].value[3] && (n2 = a3[r4].value[3]);
        } else a3.push({ name: e5, value: [...u[e5], 0, t4] }), o2 < t4 && (o2 = t4), n2 > t4 && (n2 = t4), r3.add(e5);
      };
      for (const [a4, r4] of e4.entries()) if (a4 > 0) {
        const e5 = u[r4[0]], a5 = u[r4[1]], o3 = Number.parseFloat(r4[2]) || 0;
        t3.push({ fromName: r4[0], toName: r4[1], coords: [[...e5, 0], [...a5, 0]], value: o3 }), s2(r4[1], o3), s2(r4[0], 0);
      }
      return { lineDataArray: t3, rippleDataArray: a3, max: o2, min: n2 };
    })(a2?.source);
    t2.series[0].data = r2.lineDataArray, t2.series.length > 1 && (t2.series[1].data = r2.rippleDataArray, t2.series[1].tooltip = { trigger: "item", formatter: (e4) => `${e4.name}<br>合计: ${e4.value[3]}` }), t2.visualMap.min = r2.min, t2.visualMap.max = r2.max, e3?.setOption(t2, true);
  }
  return (e3, a2) => (o(), r("div", n({ ref_key: "mfMapLineRef", ref: y, style: { width: "100%", height: "100%" } }, s(i(x), true)), null, 16));
} });
export {
  g as default
};
