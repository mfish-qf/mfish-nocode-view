import { defineComponent, watch, nextTick, ref, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createCommentVNode, createElementVNode, createTextVNode, Fragment, renderList, toDisplayString, onMounted } from "vue";
import { C as ConfigGroup } from "./ConfigGroup.js";
import { useDesign } from "@mfish/core/hooks";
import { RadioGroup, RadioButton } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import { cloneDeep } from "lodash-es";
import { u as useScreenEditStore, _ as _export_sfc } from "./index2.js";
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
const _hoisted_1 = {
  key: 0,
  class: "title"
};
const _hoisted_2 = {
  key: 1,
  class: "title"
};
const _hoisted_3 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EchartsTooltipConfig",
  props: {
    hideTrigger: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { prefixCls } = useDesign("echarts-tooltip-config");
    const screenEditStore = useScreenEditStore();
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        nextTick(() => {
          var _a, _b;
          if ((_b = (_a = screenEditStore.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.axisPointer) == null ? void 0 : _b.type) {
            axisType.value = screenEditStore.getCurConfigComponent.chart.options.tooltip.axisPointer.type;
          }
        });
      },
      { immediate: true }
    );
    const triggers = [
      { title: "数据项图形触发", value: "item" },
      { title: "坐标轴触发", value: "axis" }
    ];
    const axisType = ref("line");
    const axisTypes = [
      { title: "直线", value: "line" },
      { title: "阴影", value: "shadow" },
      { title: "十字", value: "cross" },
      { title: "无", value: "none" }
    ];
    const orders = [
      { title: "值升序", value: "valueAsc" },
      { title: "值降序", value: "valueDesc" }
    ];
    function tooltipChecked(checked) {
      screenEditStore.getCurConfigComponent.chart.options.tooltip = {
        ...screenEditStore.getCurConfigComponent.chart.options.tooltip,
        show: checked
      };
    }
    function axisTypeChange() {
      screenEditStore.getCurConfigComponent.chart.options.tooltip.axisPointer = { type: axisType.value };
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "提示框",
          "default-expand": false,
          "allow-check": true,
          "title-check": (_a = unref(screenEditStore).getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.show,
          onChecked: tooltipChecked
        }, {
          default: withCtx(() => {
            var _a2;
            return [
              !__props.hideTrigger ? (openBlock(), createElementBlock("div", _hoisted_1, [
                _cache[3] || (_cache[3] = createTextVNode(" 触发条件 ")),
                createElementVNode("div", null, [
                  createVNode(unref(RadioGroup), {
                    size: "small",
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.tooltip.trigger,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.tooltip.trigger = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(triggers, (item) => {
                        return createVNode(unref(RadioButton), {
                          key: item.value,
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["value"])
                ])
              ])) : createCommentVNode("", true),
              ((_a2 = unref(screenEditStore).getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a2.trigger) === "axis" ? (openBlock(), createElementBlock("div", _hoisted_2, [
                _cache[4] || (_cache[4] = createTextVNode(" 指示器类型 ")),
                createElementVNode("div", null, [
                  createVNode(unref(RadioGroup), {
                    size: "small",
                    value: axisType.value,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => axisType.value = $event),
                    onChange: axisTypeChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(axisTypes, (item) => {
                        return createVNode(unref(RadioButton), {
                          key: item.value,
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["value"])
                ])
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_3, [
                _cache[5] || (_cache[5] = createTextVNode(" 排序 ")),
                createElementVNode("div", null, [
                  createVNode(unref(RadioGroup), {
                    size: "small",
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.tooltip.order,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.tooltip.order = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(orders, (item) => {
                        return createVNode(unref(RadioButton), {
                          key: item.value,
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["value"])
                ])
              ])
            ];
          }),
          _: 1
        }, 8, ["title-check"])
      ], 2);
    };
  }
});
const EchartsTooltipConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c90e3a5"]]);
function useEchartsSeriesConfig() {
  const screenEditStore = useScreenEditStore();
  onMounted(() => {
    if (!screenEditStore.getCurConfigComponent.chart.options.seriesCache) {
      screenEditStore.getCurConfigComponent.chart.options.seriesCache = cloneDeep(
        screenEditStore.getCurConfigComponent.chart.options.series
      );
    }
  });
  function seriesChange(value, index) {
    const series = screenEditStore.getCurConfigComponent.chart.options.series[index];
    if (series) {
      screenEditStore.getCurConfigComponent.chart.options.series[index] = value;
    }
    if (!screenEditStore.getCurConfigComponent.chart.options.seriesCache || !screenEditStore.getCurConfigComponent.chart.options.seriesCache[index]) {
      screenEditStore.getCurConfigComponent.chart.options.seriesCache = cloneDeep(
        screenEditStore.getCurConfigComponent.chart.options.series
      );
    } else {
      screenEditStore.getCurConfigComponent.chart.options.seriesCache[index] = cloneDeep(value);
    }
  }
  return { seriesChange };
}
export {
  EchartsTooltipConfig as E,
  useEchartsSeriesConfig as u
};
