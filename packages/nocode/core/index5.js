import { defineComponent as t, createBlock as r, openBlock as a } from "vue";
import { M as e } from "./index.js";
const c = t({ __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup: (t2) => (c2, n) => (a(), r(e, { "chart-contain": t2.chartContain, chart: t2.chart }, null, 8, ["chart-contain", "chart"])) });
export {
  c as default
};
