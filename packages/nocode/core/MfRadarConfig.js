import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createVNode, createElementVNode, createElementBlock, createCommentVNode, createTextVNode } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { a as EchartsBaseConfig, E as EchartsTitleConfig } from "./EchartsBaseConfig.js";
import { u as useEchartsSeriesConfig, E as EchartsTooltipConfig } from "./UseEchartsSeriesConfig.js";
import { u as useScreenEditStore, _ as _export_sfc } from "./index.js";
import { E as EchartsSeriesLabelConfig } from "./EchartsSeriesLabelConfig.js";
import { Checkbox, Slider } from "ant-design-vue";
import { useDesign } from "@mfish/core/hooks";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = {
  key: 0,
  class: "title"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfRadarConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { seriesChange } = useEchartsSeriesConfig();
    const areaStyle = ref(false);
    const { prefixCls } = useDesign("radar-chart-config");
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        var _a;
        areaStyle.value = !!(val && ((_a = screenEditStore.getCurConfigComponent.chart.options.series[0]) == null ? void 0 : _a.areaStyle));
      },
      { immediate: true }
    );
    function areaStyleChange() {
      var _a;
      if (areaStyle.value) {
        screenEditStore.getCurConfigComponent.chart.options.series[0].areaStyle = {
          ...screenEditStore.getCurConfigComponent.chart.options.series[0].areaStyle,
          opacity: 0.3
        };
      } else {
        (_a = screenEditStore.getCurConfigComponent.chart.options.series[0]) == null ? true : delete _a.areaStyle;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(EchartsBaseConfig),
            createVNode(EchartsTitleConfig),
            createVNode(EchartsTooltipConfig, { "hide-trigger": true }),
            createVNode(EchartsSeriesLabelConfig, {
              series: (_a = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a.series[0],
              onLabelChange: _cache[0] || (_cache[0] = ($event) => unref(seriesChange)($event, 0))
            }, null, 8, ["series"]),
            createElementVNode("div", _hoisted_1, [
              createVNode(unref(Checkbox), {
                checked: areaStyle.value,
                "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => areaStyle.value = $event),
                onChange: areaStyleChange
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" 区域设置")
                ])),
                _: 1
              }, 8, ["checked"]),
              areaStyle.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                _cache[4] || (_cache[4] = createTextVNode(" 透明度 ")),
                createVNode(unref(Slider), {
                  value: unref(screenEditStore).getCurConfigComponent.chart.options.series[0].areaStyle.opacity,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.series[0].areaStyle.opacity = $event),
                  min: 0,
                  max: 1,
                  step: 0.1
                }, null, 8, ["value"])
              ])) : createCommentVNode("", true)
            ])
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfRadarConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bb17531"]]);
export {
  MfRadarConfig as default
};
