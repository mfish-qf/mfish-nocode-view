import { defineComponent, createBlock, openBlock } from "vue";
import { M as MfTag } from "./index2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfTag, {
        "chart-contain": __props.chartContain,
        chart: __props.chart
      }, null, 8, ["chart-contain", "chart"]);
    };
  }
});
export {
  _sfc_main as default
};
