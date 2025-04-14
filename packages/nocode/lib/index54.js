import { defineComponent, useTemplateRef, computed, watch, createBlock, openBlock, unref, mergeProps, toHandlers } from "vue";
import { h as useChartEventHandle, u as useScreenEditStore, ar as ScrollTable, as as getChartData } from "./index2.js";
import "ant-design-vue";
import "@mfish/core";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import { throttle } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/src/utils/Is";
import "@mfish/core/src/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/src/utils/Uuid";
import "@mfish/core/src/components/Container";
import "@mfish/core/src/components/Draggable";
import "@mfish/core/src/components/Modal";
import "@mfish/core/src/components/Form";
import "@mfish/core/src/hooks/web/UseMessage";
import "@mfish/core/src/components/Tree";
import "@mfish/core/src/components/Split";
import "@mfish/core/src/components/Table";
import "@mfish/core/src/components/CodeEditor";
import "@mfish/core/src/i18n/UseLocale";
import "@mfish/core/src/hooks/setting/UseDarkModeTheme";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const { commonEvents, emitEvent } = useChartEventHandle(props.chart, void 0, ["rowClick"]);
    const screenEditStore = useScreenEditStore();
    const scrollTableRef = useTemplateRef("scrollTableRef");
    const config = computed(() => {
      var _a;
      return {
        ...props.chart.options,
        ...(_a = props.chart.data) == null ? void 0 : _a.dataSet
      };
    });
    watch(
      [() => {
        var _a, _b;
        return (_b = (_a = props.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.width;
      }, () => {
        var _a, _b;
        return (_b = (_a = props.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
      }],
      throttle(() => {
        var _a;
        (_a = scrollTableRef.value) == null ? void 0 : _a.resize();
      }, 100)
    );
    function rowClick(ci) {
      if (ci.rowIndex >= 0) {
        const data = getChartData(props.chart);
        if (data.length > ci.rowIndex) {
          emitEvent("rowClick", data[ci.rowIndex]);
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScrollTable), mergeProps({
        ref_key: "scrollTableRef",
        ref: scrollTableRef,
        theme: unref(screenEditStore).getTheme,
        config: config.value
      }, toHandlers(unref(commonEvents)), { onRowClick: rowClick }), null, 16, ["theme", "config"]);
    };
  }
});
export {
  _sfc_main as default
};
