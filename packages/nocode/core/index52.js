import { defineComponent as e, useTemplateRef as a, onMounted as t, createElementBlock as r, openBlock as o, mergeProps as s, toHandlers as n, unref as i } from "vue";
import { i as m, as as p } from "./index.js";
import { cloneDeep as l } from "lodash-es";
import { g as c } from "./geoCoordinate.js";
import { use as u } from "echarts";
import { Lines3DChart as f, Scatter3DChart as h } from "echarts-gl/charts";
import { Geo3DComponent as d } from "echarts-gl/components";
import { u as v } from "./UseEchartsMap.js";
const g = e({ name: "MfMapLine3D", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const g2 = e2;
  v(g2.chart.options.geo3D), u([f, h, d]);
  const y = a("mfMapLineRef"), { commonEvents: x } = m(g2.chart);
  t(() => {
    p(y.value, g2.chart, g2.chartContain, M);
  });
  function M(e3, a2) {
    const t2 = { ...l(g2.chart.options), backgroundColor: "transparent" }, r2 = ((e4) => {
      const a3 = [], t3 = [], r3 = /* @__PURE__ */ new Set();
      let o2 = 0, s2 = e4 && e4.length > 1 && e4[1].length > 2 ? e4[1][2] : 0;
      const n2 = (e5, t4) => {
        if (r3.has(e5)) {
          const r4 = a3.findIndex((a4) => a4.name === e5);
          a3[r4].value[3] += t4, o2 < a3[r4].value[3] && (o2 = a3[r4].value[3]), s2 > a3[r4].value[3] && (s2 = a3[r4].value[3]);
        } else a3.push({ name: e5, value: [...c[e5], 0, t4] }), o2 < t4 && (o2 = t4), s2 > t4 && (s2 = t4), r3.add(e5);
      };
      for (const [a4, r4] of e4.entries()) if (a4 > 0) {
        const e5 = c[r4[0]], a5 = c[r4[1]], o3 = Number.parseFloat(r4[2]) || 0;
        t3.push({ fromName: r4[0], toName: r4[1], coords: [[...e5, 0], [...a5, 0]], value: o3 }), n2(r4[1], o3), n2(r4[0], 0);
      }
      return { lineDataArray: t3, rippleDataArray: a3, max: o2, min: s2 };
    })(a2?.source);
    t2.series[0].data = r2.lineDataArray, t2.series.length > 1 && (t2.series[1].data = r2.rippleDataArray, t2.series[1].tooltip = { trigger: "item", formatter: (e4) => `${e4.name}<br>合计: ${e4.value[3]}` }), t2.visualMap.min = r2.min, t2.visualMap.max = r2.max, e3?.setOption(t2, true);
  }
  return (e3, a2) => (o(), r("div", s({ ref_key: "mfMapLineRef", ref: y, style: { width: "100%", height: "100%" } }, n(i(x), true)), null, 16));
} });
export {
  g as default
};
