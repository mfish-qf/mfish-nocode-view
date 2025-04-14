import { defineComponent, createBlock, openBlock, withCtx, createVNode, unref } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { E as EchartsTitleConfig } from "./EchartsBaseConfig.js";
import { E as EchartsLegendConfig } from "./EchartsLegendConfig.js";
import { E as EchartsGridConfig, a as EchartsAxisConfig } from "./EchartsAxisConfig.js";
import { u as useEchartsSeriesConfig, E as EchartsTooltipConfig } from "./UseEchartsSeriesConfig.js";
import "ant-design-vue";
import "@mfish/core";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore } from "./index2.js";
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
import { E as EchartsSeriesLabelConfig } from "./EchartsSeriesLabelConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfScatterConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { seriesChange } = useEchartsSeriesConfig();
    function xAxisChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.xAxis = e;
    }
    function yAxisChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.yAxis = e;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, null, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(EchartsGridConfig),
            createVNode(EchartsTitleConfig),
            createVNode(EchartsTooltipConfig),
            createVNode(EchartsLegendConfig),
            createVNode(EchartsAxisConfig, {
              axis: unref(screenEditStore).getCurConfigComponent.chart.options.xAxis,
              onAxisChange: xAxisChange
            }, null, 8, ["axis"]),
            createVNode(EchartsAxisConfig, {
              "axis-type": "Y",
              axis: unref(screenEditStore).getCurConfigComponent.chart.options.yAxis,
              onAxisChange: yAxisChange
            }, null, 8, ["axis"]),
            createVNode(EchartsSeriesLabelConfig, {
              series: (_a = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a.series[0],
              onLabelChange: _cache[0] || (_cache[0] = ($event) => unref(seriesChange)($event, 0))
            }, null, 8, ["series"])
          ];
        }),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
