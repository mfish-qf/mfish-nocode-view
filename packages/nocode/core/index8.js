import { defineComponent as t, watch as a, nextTick as o, createBlock as e, openBlock as r, unref as i, mergeProps as n, toHandlers as c } from "vue";
import { VueUiTiremarks as s } from "vue-data-ui";
import "vue-data-ui/style.css";
import { h as l, u } from "./index.js";
const h = t({ name: "MfTireMarks", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const h2 = t2, { commonEvents: p } = l(h2.chart), d = u();
  return a(() => d.getTheme, (t3) => {
    h2.chart && o().then(() => {
      !function(t4, a2) {
        const o2 = { dark: "#3A3A3A", light: "#E1E5E8" };
        if (!t4.options.style.chart.layout.inactiveColor) return void (t4.options.style.chart.layout.inactiveColor = o2[a2]);
        t4.options.style.chart.layout.inactiveColor !== o2.dark && t4.options.style.chart.layout.inactiveColor !== o2.light || (t4.options.style.chart.layout.inactiveColor = o2[a2]);
      }(h2.chart, t3);
    });
  }, { immediate: true }), (a2, o2) => {
    var _a;
    return r(), e(i(s), n({ dataset: ((_a = t2.chart.data) == null ? void 0 : _a.dataSet) || { percentage: 0 }, config: t2.chart.options }, c(i(p))), null, 16, ["dataset", "config"]);
  };
} });
export {
  h as default
};
