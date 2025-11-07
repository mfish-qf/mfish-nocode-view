import { defineComponent as t, watch as o, nextTick as i, computed as e, createBlock as r, openBlock as s, unref as n, mergeProps as a, toHandlers as d } from "vue";
import { VueUiDigits as l } from "vue-data-ui";
import { cloneDeep as c } from "lodash-es";
import { u as g, i as p } from "./index.js";
const h = t({ name: "MfDigits", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const h2 = t2, m = g();
  o(() => m.getTheme, (t3) => {
    h2.chart && i().then(() => {
      !(function(t4, o2) {
        if (!t4.options.digits) return void (t4.options.digits = c({ color: f[o2], skeletonColor: k[o2] }));
        t4.options.digits.color !== f.dark && t4.options.digits.color !== f.light || (t4.options.digits.color = f[o2]);
        t4.options.digits.skeletonColor !== k.dark && t4.options.digits.skeletonColor !== k.light || (t4.options.digits.skeletonColor = k[o2]);
      })(h2.chart, t3);
    });
  }, { immediate: true });
  const { commonEvents: u } = p(h2.chart), f = { dark: "#FFFFFF", light: "#2D353C" }, k = { dark: "#3A3A3A", light: "#E1E5E8" }, C = e(() => ({ ...h2.chart.options, digits: { color: h2.chart.options.digits?.color || f[m.getTheme], skeletonColor: h2.chart.options.digits?.skeletonColor || k[m.getTheme] } }));
  return (o2, i2) => (s(), r(n(l), a({ dataset: t2.chart.data.dataSet, config: C.value }, d(n(u))), null, 16, ["dataset", "config"]));
} });
export {
  h as default
};
