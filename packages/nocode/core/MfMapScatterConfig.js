import { defineComponent as o, ref as e, watch as t, openBlock as n, createBlock as i, withCtx as r, createVNode as f } from "vue";
import { M as a } from "./MfMapConfig.js";
import { M as s } from "./MfEffectScatterConfig.js";
import { u as p } from "./index.js";
const u = o({ __name: "MfMapScatterConfig", setup(o2) {
  const u2 = p(), C = e();
  function g(o3) {
    u2.getCurConfigComponent.chart.options.series[0] = o3;
  }
  return t(() => u2.getCurConfigComponent, (o3) => {
    o3 && u2.getCurConfigComponent.chart.options.series?.length > 0 && (C.value = u2.getCurConfigComponent.chart.options.series[0]);
  }, { immediate: true }), (o3, e2) => (n(), i(a, null, { default: r(() => [f(s, { "allow-check": false, "default-expand": true, config: C.value, onChange: g }, null, 8, ["config"])]), _: 1 }));
} });
export {
  u as default
};
