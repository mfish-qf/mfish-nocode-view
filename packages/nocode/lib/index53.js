import { defineComponent, useTemplateRef, onMounted, createElementBlock, openBlock, mergeProps, toHandlers, unref } from "vue";
import { u as useEcharts } from "./UseEcharts.js";
import { h as useChartEventHandle } from "./index2.js";
import { cloneDeep } from "lodash-es";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfRadar" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const mfBarRef = useTemplateRef("mfRadarRef");
    const { commonEvents } = useChartEventHandle(props.chart);
    onMounted(() => {
      useEcharts(mfBarRef.value, props.chart, props.chartContain, setOption);
    });
    function setOption(eChart, dataSet) {
      const options = {
        ...cloneDeep(props.chart.options),
        backgroundColor: "transparent"
      };
      options.radar = {
        ...options.radar,
        indicator: cloneDeep(dataSet == null ? void 0 : dataSet.indicator)
      };
      options.series[0].data = cloneDeep(dataSet == null ? void 0 : dataSet.data);
      eChart == null ? void 0 : eChart.setOption(options, true);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref: "mfRadarRef",
        style: { "width": "100%", "height": "100%" }
      }, toHandlers(unref(commonEvents), true)), null, 16);
    };
  }
});
export {
  _sfc_main as default
};
