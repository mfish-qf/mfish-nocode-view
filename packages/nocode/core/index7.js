import { defineComponent, watch, nextTick, createBlock, openBlock, unref, mergeProps, toHandlers } from "vue";
import { VueUiWheel } from "vue-data-ui";
import "vue-data-ui/style.css";
import { h as useChartEventHandle, u as useScreenEditStore } from "./index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfWheel" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const { commonEvents } = useChartEventHandle(props.chart);
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
    function changeTheme(chart, theme) {
      const color = {
        dark: "#3A3A3A",
        light: "#E1E5E8"
      };
      if (!chart.options.style.chart.layout.wheel.ticks.inactiveColor) {
        chart.options.style.chart.layout.wheel.ticks.inactiveColor = color[theme];
        return;
      }
      if (!chart.options.style.chart.layout.innerCircle.stroke) {
        chart.options.style.chart.layout.innerCircle.stroke = color[theme];
        return;
      }
      if (chart.options.style.chart.layout.innerCircle.stroke === color.dark || chart.options.style.chart.layout.innerCircle.stroke === color.light) {
        chart.options.style.chart.layout.innerCircle.stroke = color[theme];
      }
      if (chart.options.style.chart.layout.wheel.ticks.inactiveColor === color.dark || chart.options.style.chart.layout.wheel.ticks.inactiveColor === color.light) {
        chart.options.style.chart.layout.wheel.ticks.inactiveColor = color[theme];
      }
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(VueUiWheel), mergeProps({
        dataset: ((_a = __props.chart.data) == null ? void 0 : _a.dataSet) || { percentage: 0 },
        config: __props.chart.options
      }, toHandlers(unref(commonEvents))), null, 16, ["dataset", "config"]);
    };
  }
});
export {
  _sfc_main as default
};
