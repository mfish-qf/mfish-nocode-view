import { defineComponent as t, watch as o, nextTick as i, createBlock as e, openBlock as r, unref as s, mergeProps as n, toHandlers as a } from "vue";
import { VueUiDigits as d } from "vue-data-ui";
import { cloneDeep as c } from "lodash-es";
import { u as l, h as p } from "./index.js";
const g = t({ name: "MfDigits", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const g2 = t2, h = l();
  o(() => h.getTheme, (t3) => {
    g2.chart && i().then(() => {
      !function(t4, o2) {
        const i2 = { dark: "#FFFFFF", light: "#2D353C" }, e2 = { dark: "#3A3A3A", light: "#E1E5E8" };
        if (!t4.options.digits) return void (t4.options.digits = c({ color: i2[o2], skeletonColor: e2[o2] }));
        t4.options.digits.color !== i2.dark && t4.options.digits.color !== i2.light || (t4.options.digits.color = i2[o2]);
        t4.options.digits.skeletonColor !== e2.dark && t4.options.digits.skeletonColor !== e2.light || (t4.options.digits.skeletonColor = e2[o2]);
      }(g2.chart, t3);
    });
  }, { immediate: true });
  const { commonEvents: m } = p(g2.chart);
  return (o2, i2) => (r(), e(s(d), n({ dataset: t2.chart.data.dataSet, config: t2.chart.options }, a(s(m))), null, 16, ["dataset", "config"]));
} });
export {
  g as default
};
