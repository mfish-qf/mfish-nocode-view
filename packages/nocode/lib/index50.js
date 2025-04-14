import { defineComponent, useTemplateRef, onMounted, createElementBlock, openBlock, mergeProps, toHandlers, unref } from "vue";
import { u as useEcharts } from "./UseEcharts.js";
import { h as useChartEventHandle } from "./index2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfBar" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const mfBarRef = useTemplateRef("mfBarRef");
    const { commonEvents } = useChartEventHandle(props.chart);
    onMounted(() => {
      useEcharts(mfBarRef.value, props.chart, props.chartContain);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "mfBarRef",
        ref: mfBarRef,
        style: { "width": "100%", "height": "100%" }
      }, toHandlers(unref(commonEvents), true)), null, 16);
    };
  }
});
export {
  _sfc_main as default
};
