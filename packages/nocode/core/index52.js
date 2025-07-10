import { defineComponent as e, useTemplateRef as t, onMounted as a, createElementBlock as r, openBlock as o, mergeProps as s, toHandlers as n, unref as i } from "vue";
import { u as m } from "./UseEcharts.js";
import { i as p } from "./index.js";
import { cloneDeep as c } from "lodash-es";
import { g as l } from "./geoCoordinate.js";
import { use as u } from "echarts";
import { Lines3DChart as f, Scatter3DChart as h } from "echarts-gl/charts";
import { Geo3DComponent as d } from "echarts-gl/components";
import { u as v } from "./UseEchartsMap.js";
const g = e({ name: "MfMapLine3D", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const g2 = e2;
  v(g2.chart.options.geo3D), u([f, h, d]);
  const y = t("mfMapLineRef"), { commonEvents: x } = p(g2.chart);
  a(() => {
    m(y.value, g2.chart, g2.chartContain, M);
  });
  function M(e3, t2) {
    const a2 = { ...c(g2.chart.options), backgroundColor: "transparent" }, r2 = ((e4) => {
      const t3 = [], a3 = [], r3 = /* @__PURE__ */ new Set();
      let o2 = 0, s2 = e4 && e4.length > 1 && e4[1].length > 2 ? e4[1][2] : 0;
      const n2 = (e5, a4) => {
        if (r3.has(e5)) {
          const r4 = t3.findIndex((t4) => t4.name === e5);
          t3[r4].value[3] += a4, o2 < t3[r4].value[3] && (o2 = t3[r4].value[3]), s2 > t3[r4].value[3] && (s2 = t3[r4].value[3]);
        } else t3.push({ name: e5, value: [...l[e5], 0, a4] }), o2 < a4 && (o2 = a4), s2 > a4 && (s2 = a4), r3.add(e5);
      };
      for (const [t4, r4] of e4.entries()) if (t4 > 0) {
        const e5 = l[r4[0]], t5 = l[r4[1]], o3 = Number.parseFloat(r4[2]) || 0;
        a3.push({ fromName: r4[0], toName: r4[1], coords: [[...e5, 0], [...t5, 0]], value: o3 }), n2(r4[1], o3), n2(r4[0], 0);
      }
      return { lineDataArray: a3, rippleDataArray: t3, max: o2, min: s2 };
    })(t2?.source);
    a2.series[0].data = r2.lineDataArray, a2.series.length > 1 && (a2.series[1].data = r2.rippleDataArray, a2.series[1].tooltip = { trigger: "item", formatter: (e4) => `${e4.name}<br>合计: ${e4.value[3]}` }), a2.visualMap.min = r2.min, a2.visualMap.max = r2.max, e3?.setOption(a2, true);
  }
  return (e3, t2) => (o(), r("div", s({ ref_key: "mfMapLineRef", ref: y, style: { width: "100%", height: "100%" } }, n(i(x), true)), null, 16));
} });
export {
  g as default
};
