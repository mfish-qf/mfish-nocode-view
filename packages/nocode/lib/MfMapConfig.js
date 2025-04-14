import { defineComponent, ref, computed, watch, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createCommentVNode, Fragment, renderList, createTextVNode, toDisplayString, resolveComponent, createBlock } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { a as EchartsBaseConfig, E as EchartsTitleConfig } from "./EchartsBaseConfig.js";
import { RadioGroup, RadioButton, Slider, Checkbox } from "ant-design-vue";
import { useDesign } from "@mfish/core";
import "@vueuse/core";
import { Icon } from "@mfish/core/src/components/Icon";
import { cloneDeep } from "lodash-es";
import { u as useScreenEditStore, ao as useEchartsData, _ as _export_sfc, k as MfishColorPicker, an as EchartsTheme } from "./index2.js";
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
import { C as ConfigGroup } from "./ConfigGroup.js";
import { E as EchartsSeriesLabelConfig } from "./EchartsSeriesLabelConfig.js";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = {
  key: 0,
  class: "title"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MfEffectScatterConfig",
  setup(__props) {
    const { prefixCls } = useDesign("effect-scatter-config");
    const screenEditStore = useScreenEditStore();
    const { getSeries } = useEchartsData();
    const symbol = ref("circle");
    const symbols = [
      { title: "圆形", value: "circle" },
      { title: "方形", value: "rect" },
      { title: "三角形", value: "triangle" },
      { title: "菱形", value: "diamond" },
      { title: "定位", value: "pin" },
      { title: "箭头", value: "arrow" }
    ];
    const brushType = ref("stroke");
    const brushTypes = [
      { title: "描边", value: "stroke" },
      { title: "填充", value: "fill" }
    ];
    const symbolSize = ref(10);
    const symbolRotate = ref(0);
    const showLabel = ref(true);
    const rippleNumber = ref(3);
    const labelSeries = computed(() => {
      var _a;
      if (((_a = screenEditStore.getCurConfigComponent.chart.options.series) == null ? void 0 : _a.length) > 1) {
        return screenEditStore.getCurConfigComponent.chart.options.series[1];
      }
      return {};
    });
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c;
      if (((_a = screenEditStore.getCurConfigComponent.chart.options.series) == null ? void 0 : _a.length) > 1) {
        if (screenEditStore.getCurConfigComponent.chart.options.series[1].symbol !== void 0) {
          symbol.value = screenEditStore.getCurConfigComponent.chart.options.series[1].symbol;
        }
        if (screenEditStore.getCurConfigComponent.chart.options.series[1].symbolSize !== void 0) {
          symbolSize.value = screenEditStore.getCurConfigComponent.chart.options.series[1].symbolSize;
        }
        if (screenEditStore.getCurConfigComponent.chart.options.series[1].symbolRotate !== void 0) {
          symbolRotate.value = screenEditStore.getCurConfigComponent.chart.options.series[1].symbolRotate;
        }
        if (((_b = screenEditStore.getCurConfigComponent.chart.options.series[1].label) == null ? void 0 : _b.show) !== void 0) {
          showLabel.value = screenEditStore.getCurConfigComponent.chart.options.series[1].label.show;
        }
        if (((_c = screenEditStore.getCurConfigComponent.chart.options.series[1].rippleEffect) == null ? void 0 : _c.brushType) !== void 0) {
          brushType.value = screenEditStore.getCurConfigComponent.chart.options.series[1].rippleEffect.brushType;
        }
      }
    }
    const showScatter = computed(() => {
      return screenEditStore.getCurConfigComponent.chart.options.series && screenEditStore.getCurConfigComponent.chart.options.series.length > 1;
    });
    function showScatterChecked(val) {
      screenEditStore.getCurConfigComponent.chart.options.series = getSeries(
        screenEditStore.getCurConfigComponent.chart,
        Array.from({ length: val ? 2 : 1 })
      );
    }
    function symbolChange() {
      screenEditStore.getCurConfigComponent.chart.options.series[1].symbol = symbol.value;
    }
    function symbolSizeChange(val) {
      screenEditStore.getCurConfigComponent.chart.options.series[1].symbolSize = val;
    }
    function symbolRotateChange(val) {
      screenEditStore.getCurConfigComponent.chart.options.series[1].symbolRotate = val;
    }
    function labelChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.series[1].label = {
        ...screenEditStore.getCurConfigComponent.chart.options.series[1].label,
        ...e.label
      };
    }
    function brushTypeChange() {
      screenEditStore.getCurConfigComponent.chart.options.series[1].rippleEffect = {
        ...screenEditStore.getCurConfigComponent.chart.options.series[1].rippleEffect,
        brushType: brushType.value
      };
    }
    function rippleNumberChange(val) {
      screenEditStore.getCurConfigComponent.chart.options.series[1].rippleEffect = {
        ...screenEditStore.getCurConfigComponent.chart.options.series[1].rippleEffect,
        number: val
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "气泡配置",
          "default-expand": false,
          "allow-check": true,
          "title-check": showScatter.value,
          onChecked: showScatterChecked
        }, {
          default: withCtx(() => {
            var _a, _b, _c;
            return [
              _cache[9] || (_cache[9] = createElementVNode("div", { class: "title" }, " 形状 ", -1)),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: symbol.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => symbol.value = $event),
                onChange: symbolChange
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(symbols, (item) => {
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
              }, 8, ["value"]),
              createElementVNode("div", _hoisted_1, [
                _cache[5] || (_cache[5] = createTextVNode(" 大小 ")),
                createVNode(unref(Slider), {
                  value: symbolSize.value,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => symbolSize.value = $event),
                  min: 5,
                  max: 50,
                  onChange: symbolSizeChange
                }, null, 8, ["value"]),
                _cache[6] || (_cache[6] = createTextVNode(" 角度 ")),
                createVNode(unref(Slider), {
                  value: symbolRotate.value,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => symbolRotate.value = $event),
                  min: 0,
                  max: 360,
                  onChange: symbolRotateChange
                }, null, 8, ["value"])
              ]),
              createVNode(EchartsSeriesLabelConfig, {
                series: labelSeries.value,
                onLabelChange: labelChange
              }, null, 8, ["series"]),
              ((_c = (_b = (_a = unref(screenEditStore).getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.options) == null ? void 0 : _c.geo) ? (openBlock(), createElementBlock("div", _hoisted_2, [
                _cache[7] || (_cache[7] = createTextVNode(" 涟漪类型 ")),
                createElementVNode("div", null, [
                  createVNode(unref(RadioGroup), {
                    size: "small",
                    value: brushType.value,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => brushType.value = $event),
                    onChange: brushTypeChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(brushTypes, (item) => {
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
                ]),
                _cache[8] || (_cache[8] = createTextVNode(" 数量 ")),
                createVNode(unref(Slider), {
                  value: rippleNumber.value,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => rippleNumber.value = $event),
                  min: 0,
                  max: 10,
                  onChange: rippleNumberChange
                }, null, 8, ["value"])
              ])) : createCommentVNode("", true)
            ];
          }),
          _: 1
        }, 8, ["title-check"])
      ], 2);
    };
  }
});
const MfEffectScatterConfig = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-50411e81"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MfColorIntervalConfig",
  props: {
    themeColors: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(__props) {
    const props = __props;
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("effect-scatter-config");
    const colors = computed(() => {
      return screenEditStore.getCurComponent.chart.options.visualMap.inRange.color || [];
    });
    watch(
      () => props.themeColors,
      (val) => {
        if ((val == null ? void 0 : val.length) > 0) {
          screenEditStore.getCurComponent.chart.options.visualMap.inRange.color = cloneDeep(val);
        }
      }
    );
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
      },
      { immediate: true }
    );
    function changeIntervalColor(value, index) {
      if (value) {
        screenEditStore.getCurComponent.chart.options.visualMap.inRange.color[index] = value;
      } else {
        screenEditStore.getCurComponent.chart.options.visualMap.inRange.color[index] = "";
      }
    }
    function deleteColor(index) {
      screenEditStore.getCurComponent.chart.options.visualMap.inRange.color.splice(index, 1);
    }
    function addColor() {
      const length = screenEditStore.getCurComponent.chart.options.visualMap.inRange.color.length;
      if (props.themeColors.length > length) {
        screenEditStore.getCurComponent.chart.options.visualMap.inRange.color.push(props.themeColors[length]);
      } else {
        screenEditStore.getCurComponent.chart.options.visualMap.inRange.color.push("#FF0000");
      }
    }
    return (_ctx, _cache) => {
      const _component_AButton = resolveComponent("AButton");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "颜色区间配置",
          "default-expand": true
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(colors.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "title",
                key: index
              }, [
                _cache[0] || (_cache[0] = createTextVNode(" 区间颜色 ")),
                createElementVNode("div", null, [
                  createVNode(unref(MfishColorPicker), {
                    type: 1,
                    placeholder: "设置区间颜色，格式#FFFFFF",
                    value: item,
                    "hide-cancel": true,
                    "hide-confirm": true,
                    onInputChange: ($event) => changeIntervalColor($event, index)
                  }, null, 8, ["value", "onInputChange"])
                ]),
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  class: "color-delete",
                  icon: "ant-design:delete-outlined",
                  onClick: ($event) => deleteColor(index)
                }, null, 8, ["onClick"])) : createCommentVNode("", true)
              ]);
            }), 128)),
            createVNode(_component_AButton, { onClick: addColor }, {
              icon: withCtx(() => [
                createVNode(unref(Icon), { icon: "ant-design:plus-outlined" })
              ]),
              default: withCtx(() => [
                _cache[1] || (_cache[1] = createTextVNode(" 添加区间颜色 "))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const MfColorIntervalConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ef3febc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfMapConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("map-chart-config");
    const showTooltip = ref(true);
    const themeColor = ref(cloneDeep(EchartsTheme[0].color));
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b;
      if (((_a = screenEditStore.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.show) !== void 0) {
        showTooltip.value = ((_b = screenEditStore.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _b.show) || false;
      }
    }
    function showTooltipChange() {
      screenEditStore.getCurConfigComponent.chart.options.tooltip = {
        ...screenEditStore.getCurConfigComponent.chart.options.tooltip,
        show: showTooltip.value
      };
    }
    function themeChange(e) {
      themeColor.value = cloneDeep(e.color);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          createVNode(EchartsBaseConfig, { onThemeChange: themeChange }),
          createVNode(EchartsTitleConfig),
          createVNode(unref(Checkbox), {
            checked: showTooltip.value,
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => showTooltip.value = $event),
            onChange: showTooltipChange
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(" 提示框 ")
            ])),
            _: 1
          }, 8, ["checked"]),
          createVNode(MfEffectScatterConfig),
          createVNode(MfColorIntervalConfig, { "theme-colors": themeColor.value }, null, 8, ["theme-colors"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfMapConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59b2e044"]]);
export {
  MfMapConfig as default
};
