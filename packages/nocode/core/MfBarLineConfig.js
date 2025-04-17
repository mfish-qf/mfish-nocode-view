import { defineComponent, ref, reactive, computed, watch, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createCommentVNode, createTextVNode, Fragment, renderList, toDisplayString, createBlock } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { useDesign, useMessage } from "@mfish/core/hooks";
import { E as EchartsTitleConfig } from "./EchartsBaseConfig.js";
import { E as EchartsLegendConfig } from "./EchartsLegendConfig.js";
import { E as EchartsGridConfig, a as EchartsAxisConfig } from "./EchartsAxisConfig.js";
import { u as useEchartsSeriesConfig, E as EchartsTooltipConfig } from "./UseEchartsSeriesConfig.js";
import { u as useScreenEditStore, k as MfishColorPicker, ak as getGradientColorClass, al as angleToLinearGradient, _ as _export_sfc } from "./index.js";
import { C as ConfigGroup } from "./ConfigGroup.js";
import { RadioGroup, RadioButton, Slider, Checkbox } from "ant-design-vue";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
import * as echarts from "echarts";
import { E as EchartsSeriesLabelConfig } from "./EchartsSeriesLabelConfig.js";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = {
  key: 0,
  class: "title"
};
const _hoisted_4 = {
  key: 1,
  class: "title"
};
const _hoisted_5 = {
  key: 2,
  class: "title"
};
const _hoisted_6 = {
  key: 3,
  class: "check-group"
};
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "title" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EchartsSeriesConfig",
  props: {
    title: {
      type: String,
      default: "柱体样式"
    },
    series: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["seriesChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("echarts-series-config");
    const curSeries = ref(props.series);
    const { createMessage } = useMessage();
    const screenEditStore = useScreenEditStore();
    const chartType = ref("bar");
    const chartTypes = [
      {
        title: "柱体",
        value: "bar"
      },
      {
        title: "折线",
        value: "line"
      }
    ];
    const barColor = ref();
    const backgroundColor = ref();
    const barAllRadius = ref(0);
    const barRadius = reactive([0, 0, 0, 0]);
    const maxRadius = computed(() => {
      return Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.width / 10);
    });
    const borderRadius = ref(0);
    const smooth = ref(false);
    const area = ref(false);
    const stack = ref(false);
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (val) {
          initValue();
        }
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d, _e, _f;
      if (((_a = curSeries.value.itemStyle) == null ? void 0 : _a.linearGradientColor) !== void 0) {
        barColor.value = (_b = curSeries.value.itemStyle) == null ? void 0 : _b.linearGradientColor;
      } else if (((_c = curSeries.value.itemStyle) == null ? void 0 : _c.color) !== void 0) {
        barColor.value = curSeries.value.itemStyle.color;
      }
      if (((_d = curSeries.value.itemStyle) == null ? void 0 : _d.borderRadius) !== void 0) {
        barAllRadius.value = curSeries.value.itemStyle.borderRadius[0];
        barRadius[0] = curSeries.value.itemStyle.borderRadius[0];
        barRadius[1] = curSeries.value.itemStyle.borderRadius[1];
        barRadius[2] = curSeries.value.itemStyle.borderRadius[2];
        barRadius[3] = curSeries.value.itemStyle.borderRadius[3];
      }
      if (((_e = curSeries.value.backgroundStyle) == null ? void 0 : _e.color) !== void 0) {
        backgroundColor.value = curSeries.value.backgroundStyle.color;
      }
      if (((_f = curSeries.value.backgroundStyle) == null ? void 0 : _f.borderRadius) !== void 0) {
        borderRadius.value = curSeries.value.backgroundStyle.borderRadius;
      }
      if (curSeries.value.smooth !== void 0) {
        smooth.value = curSeries.value.smooth;
      }
      if (curSeries.value.areaStyle !== void 0) {
        area.value = true;
      }
      if (curSeries.value.stack !== void 0) {
        stack.value = true;
      }
      if (curSeries.value.type !== void 0) {
        chartType.value = curSeries.value.type;
      }
    }
    function copyHandle(copy) {
      copy(JSON.stringify({ series: curSeries.value }));
    }
    function chartTypeChange() {
      curSeries.value = {
        ...curSeries.value,
        type: chartType.value
      };
      emit("seriesChange", curSeries.value);
    }
    function pasteHandle(value) {
      const series = JSON.parse(value);
      if (series && series.series) {
        curSeries.value = series.series;
        initValue();
        emit("seriesChange", curSeries.value);
      } else {
        createMessage.warning("粘贴失败，无配置或不匹配");
      }
    }
    function backgroundChecked(checked) {
      curSeries.value = {
        ...curSeries.value,
        showBackground: checked
      };
      emit("seriesChange", curSeries.value);
    }
    function confirmBarColor(e) {
      changeBarColor(e);
      barColor.value = e;
    }
    function changeBarColor(e) {
      var _a, _b, _c;
      if (!e) {
        (_a = curSeries.value.itemStyle) == null ? true : delete _a.color;
        emit("seriesChange", curSeries.value);
        return;
      }
      if (e.startsWith("linear-gradient(")) {
        const color = getGradientColorClass(e);
        const deg = angleToLinearGradient(color.deg);
        const colors = color.colors.map((item) => {
          return {
            offset: item.rgbaLength.replace("%", "") / 100,
            color: item.rgba
          };
        });
        curSeries.value.itemStyle = {
          ...(_b = curSeries.value) == null ? void 0 : _b.itemStyle,
          color: new echarts.graphic.LinearGradient(deg.x1, deg.y1, deg.x2, deg.y2, colors)
        };
        curSeries.value.itemStyle.linearGradientColor = e;
      } else {
        curSeries.value.itemStyle = {
          ...(_c = curSeries.value) == null ? void 0 : _c.itemStyle,
          color: e
        };
        delete curSeries.value.itemStyle.linearGradientColor;
      }
      emit("seriesChange", curSeries.value);
    }
    function barAllRadiusChange() {
      for (const i in barRadius) {
        barRadius[i] = barAllRadius.value;
      }
      barRadiusChange();
    }
    function barRadiusChange() {
      var _a;
      curSeries.value.itemStyle = {
        ...(_a = curSeries.value) == null ? void 0 : _a.itemStyle,
        borderRadius: barRadius
      };
      emit("seriesChange", curSeries.value);
    }
    function confirmBackgroundColor(e) {
      changeBackgroundColor(e);
      backgroundColor.value = e;
    }
    function changeBackgroundColor(e) {
      var _a, _b;
      if (!e) {
        (_a = curSeries.value.backgroundStyle) == null ? true : delete _a.color;
        emit("seriesChange", curSeries.value);
        return;
      }
      curSeries.value.backgroundStyle = {
        ...(_b = curSeries.value) == null ? void 0 : _b.backgroundStyle,
        color: e
      };
      emit("seriesChange", curSeries.value);
    }
    function borderRadiusChange() {
      var _a;
      curSeries.value.backgroundStyle = {
        ...(_a = curSeries.value) == null ? void 0 : _a.backgroundStyle,
        borderRadius: borderRadius.value
      };
      emit("seriesChange", curSeries.value);
    }
    function smoothChange() {
      curSeries.value.smooth = smooth.value;
      emit("seriesChange", curSeries.value);
    }
    function areaChange() {
      if (area.value) {
        curSeries.value.areaStyle = {};
      } else {
        delete curSeries.value.areaStyle;
      }
      emit("seriesChange", curSeries.value);
    }
    function stackChange() {
      if (stack.value) {
        curSeries.value.stack = "total";
      } else {
        delete curSeries.value.stack;
      }
      emit("seriesChange", curSeries.value);
    }
    function labelChange(e) {
      var _a;
      curSeries.value.label = {
        ...(_a = curSeries.value) == null ? void 0 : _a.label,
        ...e.label
      };
      emit("seriesChange", curSeries.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: __props.title,
          "default-expand": false,
          "allow-copy": true,
          onCopy: copyHandle,
          onPaste: pasteHandle
        }, {
          default: withCtx(() => {
            var _a;
            return [
              createVNode(ConfigGroup, { title: "图形样式" }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_1, [
                    _cache[10] || (_cache[10] = createTextVNode(" 图形类型 ")),
                    createVNode(unref(RadioGroup), {
                      size: "small",
                      value: chartType.value,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => chartType.value = $event),
                      onChange: chartTypeChange
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createElementBlock(Fragment, null, renderList(chartTypes, (item, index) => {
                          return createVNode(unref(RadioButton), {
                            key: index,
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
                  ]),
                  createElementVNode("div", _hoisted_2, [
                    _cache[11] || (_cache[11] = createTextVNode(" 图形颜色 ")),
                    createElementVNode("div", null, [
                      createVNode(unref(MfishColorPicker), {
                        placeholder: "设置图形颜色，格式#FFFFFF",
                        value: barColor.value,
                        onConfirmChange: confirmBarColor,
                        onInputChange: changeBarColor
                      }, null, 8, ["value"])
                    ])
                  ]),
                  curSeries.value.type === "bar" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    _cache[12] || (_cache[12] = createTextVNode(" 圆角 ")),
                    createVNode(unref(Slider), {
                      value: barAllRadius.value,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => barAllRadius.value = $event),
                      min: 0,
                      max: maxRadius.value,
                      onChange: barAllRadiusChange
                    }, null, 8, ["value", "max"])
                  ])) : createCommentVNode("", true),
                  curSeries.value.type === "bar" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    _cache[13] || (_cache[13] = createTextVNode(" 左上 ")),
                    createVNode(unref(Slider), {
                      "tip-formatter": (val) => `左上圆角：${val}`,
                      value: barRadius[0],
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => barRadius[0] = $event),
                      min: 0,
                      max: maxRadius.value,
                      onChange: barRadiusChange
                    }, null, 8, ["tip-formatter", "value", "max"]),
                    _cache[14] || (_cache[14] = createTextVNode(" 右上 ")),
                    createVNode(unref(Slider), {
                      "tip-formatter": (val) => `右上圆角：${val}`,
                      value: barRadius[1],
                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => barRadius[1] = $event),
                      min: 0,
                      max: maxRadius.value,
                      onChange: barRadiusChange
                    }, null, 8, ["tip-formatter", "value", "max"])
                  ])) : createCommentVNode("", true),
                  curSeries.value.type === "bar" ? (openBlock(), createElementBlock("div", _hoisted_5, [
                    _cache[15] || (_cache[15] = createTextVNode(" 左下 ")),
                    createVNode(unref(Slider), {
                      "tip-formatter": (val) => `左下圆角：${val}`,
                      value: barRadius[3],
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => barRadius[3] = $event),
                      min: 0,
                      max: maxRadius.value,
                      onChange: barRadiusChange
                    }, null, 8, ["tip-formatter", "value", "max"]),
                    _cache[16] || (_cache[16] = createTextVNode(" 右下 ")),
                    createVNode(unref(Slider), {
                      "tip-formatter": (val) => `右下圆角：${val}`,
                      value: barRadius[2],
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => barRadius[2] = $event),
                      min: 0,
                      max: maxRadius.value,
                      onChange: barRadiusChange
                    }, null, 8, ["tip-formatter", "value", "max"])
                  ])) : createCommentVNode("", true),
                  createVNode(unref(Checkbox), {
                    checked: stack.value,
                    "onUpdate:checked": _cache[6] || (_cache[6] = ($event) => stack.value = $event),
                    onChange: stackChange
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createTextVNode(" 堆叠" + toDisplayString(((_a2 = curSeries.value) == null ? void 0 : _a2.type) === "line" ? "折线图" : "柱状图"), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["checked"]),
                  curSeries.value.type === "line" ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    createVNode(unref(Checkbox), {
                      checked: smooth.value,
                      "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => smooth.value = $event),
                      onChange: smoothChange
                    }, {
                      default: withCtx(() => _cache[17] || (_cache[17] = [
                        createTextVNode(" 平滑折线")
                      ])),
                      _: 1
                    }, 8, ["checked"]),
                    createVNode(unref(Checkbox), {
                      checked: area.value,
                      "onUpdate:checked": _cache[8] || (_cache[8] = ($event) => area.value = $event),
                      onChange: areaChange
                    }, {
                      default: withCtx(() => _cache[18] || (_cache[18] = [
                        createTextVNode(" 面积折线")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(EchartsSeriesLabelConfig, {
                series: __props.series,
                onLabelChange: labelChange
              }, null, 8, ["series"]),
              createVNode(ConfigGroup, {
                title: "背景设置",
                "default-expand": false,
                "allow-check": true,
                "title-check": (_a = __props.series) == null ? void 0 : _a.showBackground,
                onChecked: backgroundChecked
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_7, [
                    _cache[19] || (_cache[19] = createTextVNode(" 背景颜色 ")),
                    createElementVNode("div", null, [
                      createVNode(unref(MfishColorPicker), {
                        placeholder: "设置背景颜色，格式#FFFFFF",
                        type: 1,
                        value: backgroundColor.value,
                        onConfirmChange: confirmBackgroundColor,
                        onInputChange: changeBackgroundColor
                      }, null, 8, ["value"])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_8, [
                    _cache[20] || (_cache[20] = createTextVNode(" 圆角 ")),
                    createVNode(unref(Slider), {
                      value: borderRadius.value,
                      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => borderRadius.value = $event),
                      step: 1,
                      min: 0,
                      max: maxRadius.value,
                      onChange: borderRadiusChange
                    }, null, 8, ["value", "max"])
                  ])
                ]),
                _: 1
              }, 8, ["title-check"])
            ];
          }),
          _: 1
        }, 8, ["title"])
      ], 2);
    };
  }
});
const EchartsSeriesBarConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-93add443"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfBarLineConfig",
  setup(__props) {
    const { prefixCls } = useDesign("bar-line-config");
    const screenEditStore = useScreenEditStore();
    const { seriesChange } = useEchartsSeriesConfig();
    function xAxisChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.xAxis = e;
    }
    function yAxisChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.yAxis = e;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
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
            (openBlock(true), createElementBlock(Fragment, null, renderList((_a = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a.series, (item, index) => {
              return openBlock(), createBlock(EchartsSeriesBarConfig, {
                title: `${(item == null ? void 0 : item.type) === "line" ? "折线图" : "柱状图"}-${index + 1}`,
                key: index,
                series: item,
                onSeriesChange: ($event) => unref(seriesChange)($event, index)
              }, null, 8, ["title", "series", "onSeriesChange"]);
            }), 128))
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfBarLineConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb158c30"]]);
export {
  MfBarLineConfig as default
};
