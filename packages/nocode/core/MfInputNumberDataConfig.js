import { defineComponent as t, createBlock as a, openBlock as e, withCtx as o, renderSlot as s } from "vue";
import f from "./MfInputDataConfig.js";
const m = t({ __name: "MfInputNumberDataConfig", setup: (t2) => (t3, m2) => (e(), a(f, { "is-number": true }, { "data-select": o(() => [s(t3.$slots, "data-select")]), _: 3 })) });
export {
  m as default
};
