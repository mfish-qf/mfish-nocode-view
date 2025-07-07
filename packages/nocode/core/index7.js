import { defineComponent as t, watch as e, nextTick as o, createBlock as r, openBlock as i, unref as a, mergeProps as n, toHandlers as s } from "vue";
import { VueUiWheel as l } from "vue-data-ui";
import "vue-data-ui/style.css";
import { l as c, u as h } from "./index.js";
const u = t({ name: "MfWheel", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const u2 = t2, { commonEvents: y } = c(u2.chart), p = h();
  return e(() => p.getTheme, (t3) => {
    u2.chart && o().then(() => {
      !function(t4, e2) {
        const o2 = { dark: "#3A3A3A", light: "#E1E5E8" };
        if (!t4.options.style.chart.layout.wheel.ticks.inactiveColor) return void (t4.options.style.chart.layout.wheel.ticks.inactiveColor = o2[e2]);
        if (!t4.options.style.chart.layout.innerCircle.stroke) return void (t4.options.style.chart.layout.innerCircle.stroke = o2[e2]);
        t4.options.style.chart.layout.innerCircle.stroke !== o2.dark && t4.options.style.chart.layout.innerCircle.stroke !== o2.light || (t4.options.style.chart.layout.innerCircle.stroke = o2[e2]);
        t4.options.style.chart.layout.wheel.ticks.inactiveColor !== o2.dark && t4.options.style.chart.layout.wheel.ticks.inactiveColor !== o2.light || (t4.options.style.chart.layout.wheel.ticks.inactiveColor = o2[e2]);
      }(u2.chart, t3);
    });
  }, { immediate: true }), (e2, o2) => (i(), r(a(l), n({ dataset: t2.chart.data?.dataSet || { percentage: 0 }, config: t2.chart.options }, s(a(y))), null, 16, ["dataset", "config"]));
} });
export {
  u as default
};
