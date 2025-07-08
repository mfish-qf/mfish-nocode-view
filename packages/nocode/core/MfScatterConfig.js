import { defineComponent as o, createBlock as s, openBlock as n, withCtx as i, createVNode as t, unref as e } from "vue";
import { S as r } from "./StyleConfig.js";
import { E as a } from "./EchartsBaseConfig.js";
import { E as C } from "./EchartsLegendConfig.js";
import { E as f, a as g } from "./EchartsAxisConfig.js";
import { u as m, E as p } from "./UseEchartsSeriesConfig.js";
import { u } from "./index.js";
import { E as x } from "./EchartsSeriesLabelConfig.js";
const c = o({ __name: "MfScatterConfig", setup(o2) {
  const c2 = u(), { seriesChange: h } = m();
  function l(o3) {
    c2.getCurConfigComponent.chart.options.xAxis = o3;
  }
  function E(o3) {
    c2.getCurConfigComponent.chart.options.yAxis = o3;
  }
  return (o3, m2) => (n(), s(r, null, { default: i(() => [t(f), t(a), t(p), t(C), t(g, { axis: e(c2).getCurConfigComponent.chart.options.xAxis, onAxisChange: l }, null, 8, ["axis"]), t(g, { "axis-type": "Y", axis: e(c2).getCurConfigComponent.chart.options.yAxis, onAxisChange: E }, null, 8, ["axis"]), t(x, { series: e(c2).getCurConfigComponent.chart.options?.series[0], onLabelChange: m2[0] || (m2[0] = (o4) => e(h)(o4, 0)) }, null, 8, ["series"])]), _: 1 }));
} });
export {
  c as default
};
