import { defineComponent as t, createBlock as a, openBlock as r } from "vue";
import { l as e } from "./index.js";
const n = t({ name: "MfDataTag", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup: (t2) => (n2, c) => (r(), a(e, { "chart-contain": t2.chartContain, chart: t2.chart }, null, 8, ["chart-contain", "chart"])) });
export {
  n as default
};
