import { defineComponent as t, watch as a, nextTick as o, createBlock as e, openBlock as r, unref as i, mergeProps as n, toHandlers as c } from "vue";
import { VueUiTiremarks as s } from "vue-data-ui";
import "vue-data-ui/style.css";
import { l, u } from "./index.js";
const p = t({ name: "MfTireMarks", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const p2 = t2, { commonEvents: h } = l(p2.chart), d = u();
  return a(() => d.getTheme, (t3) => {
    p2.chart && o().then(() => {
      !function(t4, a2) {
        const o2 = { dark: "#3A3A3A", light: "#E1E5E8" };
        if (!t4.options.style.chart.layout.inactiveColor) return void (t4.options.style.chart.layout.inactiveColor = o2[a2]);
        t4.options.style.chart.layout.inactiveColor !== o2.dark && t4.options.style.chart.layout.inactiveColor !== o2.light || (t4.options.style.chart.layout.inactiveColor = o2[a2]);
      }(p2.chart, t3);
    });
  }, { immediate: true }), (a2, o2) => (r(), e(i(s), n({ dataset: t2.chart.data?.dataSet || { percentage: 0 }, config: t2.chart.options }, c(i(h))), null, 16, ["dataset", "config"]));
} });
export {
  p as default
};
