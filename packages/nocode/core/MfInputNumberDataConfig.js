import { defineComponent as t, openBlock as a, createBlock as e, withCtx as o, renderSlot as s } from "vue";
import f from "./MfInputDataConfig.js";
const m = t({ __name: "MfInputNumberDataConfig", setup: (t2) => (t3, m2) => (a(), e(f, { "is-number": true }, { "data-select": o(() => [s(t3.$slots, "data-select")]), _: 3 })) });
export {
  m as default
};
