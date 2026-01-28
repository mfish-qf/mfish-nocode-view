import { defineComponent as o, ref as e, watch as n, openBlock as t, createBlock as r, withCtx as i, createVNode as s } from "vue";
import { M as f } from "./MfMapConfig.js";
import { M as C } from "./MfEffectScatterConfig.js";
import { u as a, aq as g } from "./index.js";
const p = o({ __name: "MfMapLineConfig", setup(o2) {
  const { getSeries: p2 } = g(), u = a(), m = e();
  function c(o3) {
    u.getCurConfigComponent.chart.options.series = p2(u.getCurConfigComponent.chart, Array.from({ length: o3 ? 2 : 1 })), m.value = o3 ? u.getCurConfigComponent.chart.options.series[1] : void 0;
  }
  function h(o3) {
    u.getCurConfigComponent.chart.options.series[1] = o3;
  }
  return n(() => u.getCurConfigComponent, (o3) => {
    o3 && u.getCurConfigComponent.chart.options.series.length > 1 && (m.value = u.getCurConfigComponent.chart.options.series[1]);
  }, { immediate: true }), (o3, e2) => (t(), r(f, null, { default: i(() => [s(C, { config: m.value, onChange: h, onShowScatterChecked: c }, null, 8, ["config"])]), _: 1 }));
} });
export {
  p as default
};
