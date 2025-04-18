import { defineComponent, watch, nextTick, createBlock, openBlock, unref, mergeProps, toHandlers } from "vue";
import { VueUiDigits } from "vue-data-ui";
import { cloneDeep } from "lodash-es";
import { u as useScreenEditStore, h as useChartEventHandle } from "./index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDigits" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const screenEditStore = useScreenEditStore();
    watch(
      () => screenEditStore.getTheme,
      (val) => {
        if (!props.chart) {
          return;
        }
        nextTick().then(() => {
          changeTheme(props.chart, val);
        });
      },
      { immediate: true }
    );
    const { commonEvents } = useChartEventHandle(props.chart);
    function changeTheme(chart, theme) {
      const colors = {
        dark: "#FFFFFF",
        light: "#2D353C"
      };
      const skeletonColors = {
        dark: "#3A3A3A",
        light: "#E1E5E8"
      };
      if (!chart.options.digits) {
        chart.options.digits = cloneDeep({
          color: colors[theme],
          skeletonColor: skeletonColors[theme]
        });
        return;
      }
      if (chart.options.digits.color === colors.dark || chart.options.digits.color === colors.light) {
        chart.options.digits.color = colors[theme];
      }
      if (chart.options.digits.skeletonColor === skeletonColors.dark || chart.options.digits.skeletonColor === skeletonColors.light) {
        chart.options.digits.skeletonColor = skeletonColors[theme];
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(VueUiDigits), mergeProps({
        dataset: __props.chart.data.dataSet,
        config: __props.chart.options
      }, toHandlers(unref(commonEvents))), null, 16, ["dataset", "config"]);
    };
  }
});
export {
  _sfc_main as default
};
