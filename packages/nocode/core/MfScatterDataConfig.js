import { defineComponent as t, openBlock as a, createBlock as e, withCtx as o, renderSlot as s } from "vue";
import f from "./MfBarLineDataConfig.js";
const r = t({ __name: "MfScatterDataConfig", setup: (t2) => (t3, r2) => (a(), e(f, { "x-title": "X轴 / 值", "y-max-count": 1 }, { "data-select": o(() => [s(t3.$slots, "data-select")]), _: 3 })) });
export {
  r as default
};
