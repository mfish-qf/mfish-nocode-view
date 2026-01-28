import { defineComponent as t, resolveDirective as a, withDirectives as e, openBlock as o, createBlock as s, withCtx as n, renderSlot as r } from "vue";
import f from "./MfBarLineDataConfig.js";
const i = t({ __name: "MfPieDataConfig", setup: (t2) => (t3, i2) => {
  const m = a("s");
  return e((o(), s(f, { "y-max-count": 1 }, { "data-select": n(() => [r(t3.$slots, "data-select")]), _: 3 })), [[m]]);
} });
export {
  i as default
};
