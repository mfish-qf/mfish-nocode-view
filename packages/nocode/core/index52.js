import { defineComponent as e, useTemplateRef as a, onMounted as r, createElementBlock as t, openBlock as o, mergeProps as s, toHandlers as n, unref as i } from "vue";
import { i as m, as as p } from "./index.js";
import { cloneDeep as c } from "lodash-es";
import { g as l } from "./geoCoordinate.js";
import { use as u } from "echarts";
import { Lines3DChart as f, Scatter3DChart as h } from "echarts-gl/charts";
import { Geo3DComponent as d } from "echarts-gl/components";
import { u as v } from "./UseEchartsMap.js";
const g = e({ name: "MfMapLine3D", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const g2 = e2;
  v(g2.chart.options.geo3D), u([f, h, d]);
  const y = a("mfMapLineRef"), { commonEvents: x } = m(g2.chart);
  r(() => {
    p(y.value, g2.chart, g2.chartContain, M, { renderer: "canvas" });
  });
  function M(e3, a2) {
    const r2 = { ...c(g2.chart.options), backgroundColor: "transparent" }, t2 = ((e4) => {
      const a3 = [], r3 = [], t3 = /* @__PURE__ */ new Set();
      let o2 = 0, s2 = e4 && e4.length > 1 && e4[1].length > 2 ? e4[1][2] : 0;
      const n2 = (e5, r4) => {
        if (t3.has(e5)) {
          const t4 = a3.findIndex((a4) => a4.name === e5);
          a3[t4].value[3] += r4, o2 < a3[t4].value[3] && (o2 = a3[t4].value[3]), s2 > a3[t4].value[3] && (s2 = a3[t4].value[3]);
        } else a3.push({ name: e5, value: [...l[e5], 0, r4] }), o2 < r4 && (o2 = r4), s2 > r4 && (s2 = r4), t3.add(e5);
      };
      for (const [a4, t4] of e4.entries()) if (a4 > 0) {
        const e5 = l[t4[0]], a5 = l[t4[1]], o3 = Number.parseFloat(t4[2]) || 0;
        r3.push({ fromName: t4[0], toName: t4[1], coords: [[...e5, 0], [...a5, 0]], value: o3 }), n2(t4[1], o3), n2(t4[0], 0);
      }
      return { lineDataArray: r3, rippleDataArray: a3, max: o2, min: s2 };
    })(a2?.source);
    r2.series[0].data = t2.lineDataArray, r2.series.length > 1 && (r2.series[1].data = t2.rippleDataArray, r2.series[1].tooltip = { trigger: "item", formatter: (e4) => `${e4.name}<br>合计: ${e4.value[3]}` }), r2.visualMap.min = t2.min, r2.visualMap.max = t2.max, e3?.setOption(r2, true);
  }
  return (e3, a2) => (o(), t("div", s({ ref_key: "mfMapLineRef", ref: y, style: { width: "100%", height: "100%" } }, n(i(x), true)), null, 16));
} });
export {
  g as default
};
