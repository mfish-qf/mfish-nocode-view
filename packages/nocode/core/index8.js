import { defineComponent, watch, nextTick, createBlock, openBlock, unref, mergeProps, toHandlers } from "vue";
import { VueUiTiremarks } from "vue-data-ui";
import "vue-data-ui/style.css";
import { h as useChartEventHandle, u as useScreenEditStore } from "./index.js";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Modal";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfTireMarks" },
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
      if (!chart.options.style.chart.layout.inactiveColor) {
        chart.options.style.chart.layout.inactiveColor = color[theme];
        return;
      }
      if (chart.options.style.chart.layout.inactiveColor === color.dark || chart.options.style.chart.layout.inactiveColor === color.light) {
        chart.options.style.chart.layout.inactiveColor = color[theme];
      }
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(VueUiTiremarks), mergeProps({
        dataset: ((_a = __props.chart.data) == null ? void 0 : _a.dataSet) || { percentage: 0 },
        config: __props.chart.options
      }, toHandlers(unref(commonEvents))), null, 16, ["dataset", "config"]);
    };
  }
});
export {
  _sfc_main as default
};
