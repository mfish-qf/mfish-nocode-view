import { defineComponent, ref, onMounted, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createTextVNode, createBlock, Fragment, renderList } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { a as EchartsBaseConfig, E as EchartsTitleConfig } from "./EchartsBaseConfig.js";
import { E as EchartsLegendConfig } from "./EchartsLegendConfig.js";
import { u as useEchartsSeriesConfig, E as EchartsTooltipConfig } from "./UseEchartsSeriesConfig.js";
import { C as ConfigGroup } from "./ConfigGroup.js";
import { useDesign, useMessage } from "@mfish/core/hooks";
import { Slider, Checkbox } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { T as TextStyle, am as TextFont, _ as _export_sfc, u as useScreenEditStore } from "./index.js";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "title" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PieSeriesConfig",
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
    const { prefixCls } = useDesign("pie-series-config");
    const curSeries = ref(props.series);
    const { createMessage } = useMessage();
    const barRadius = ref(0);
    const innerRadius = ref(0);
    const outerRadius = ref(50);
    const xOffset = ref(50);
    const yOffset = ref(50);
    const startAngle = ref();
    const endAngle = ref();
    const padAngle = ref();
    const labelStyleInfo = ref({});
    const labelLineShow = ref(true);
    const labelLineSmooth = ref(0);
    onMounted(() => {
      initValue();
    });
    function initValue() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      if (((_a = curSeries.value.itemStyle) == null ? void 0 : _a.borderRadius) !== void 0) {
        barRadius.value = curSeries.value.itemStyle.borderRadius;
      }
      if (curSeries.value.smooth !== void 0) {
        labelLineSmooth.value = curSeries.value.smooth;
      }
      if (curSeries.value.radius !== void 0) {
        innerRadius.value = curSeries.value.radius[0].replace("%", "");
        outerRadius.value = curSeries.value.radius[1].replace("%", "");
      }
      if (curSeries.value.center !== void 0) {
        xOffset.value = curSeries.value.center[0].replace("%", "");
        yOffset.value = curSeries.value.center[1].replace("%", "");
      }
      if (curSeries.value.startAngle !== void 0) {
        startAngle.value = curSeries.value.startAngle;
      }
      if (curSeries.value.endAngle !== void 0) {
        endAngle.value = curSeries.value.endAngle;
      }
      labelStyleInfo.value = {};
      labelStyleInfo.value.font = (_c = (_b = curSeries.value) == null ? void 0 : _b.label) == null ? void 0 : _c.fontFamily;
      labelStyleInfo.value.fontSize = (_f = (_e = (_d = curSeries.value) == null ? void 0 : _d.label) == null ? void 0 : _e.fontSize) == null ? void 0 : _f.replace("px", "");
      labelStyleInfo.value.textColor = (_h = (_g = curSeries.value) == null ? void 0 : _g.label) == null ? void 0 : _h.color;
      const fontStyle = ((_j = (_i = curSeries.value) == null ? void 0 : _i.label) == null ? void 0 : _j.fontStyle) ? { italic: true } : {};
      const fontWeight = ((_l = (_k = curSeries.value) == null ? void 0 : _k.label) == null ? void 0 : _l.fontWeight) ? { bold: true } : {};
      labelStyleInfo.value.fontStyle = { ...fontStyle, ...fontWeight };
    }
    function copyHandle(copy) {
      copy(JSON.stringify({ series: curSeries.value }));
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
    function barRadiusChange() {
      var _a;
      curSeries.value.itemStyle = {
        ...(_a = curSeries.value) == null ? void 0 : _a.itemStyle,
        borderRadius: barRadius.value
      };
      emit("seriesChange", curSeries.value);
    }
    function labelChecked(checked) {
      curSeries.value.label = {
        ...curSeries.value.label,
        show: checked
      };
      emit("seriesChange", curSeries.value);
    }
    function fontStyleChange(e) {
      var _a, _b, _c, _d;
      (_b = (_a = curSeries.value) == null ? void 0 : _a.label) == null ? true : delete _b.fontStyle;
      (_d = (_c = curSeries.value) == null ? void 0 : _c.label) == null ? true : delete _d.fontWeight;
      labelStyleChange(e);
    }
    function labelStyleChange(e) {
      var _a;
      curSeries.value.label = {
        ...(_a = curSeries.value) == null ? void 0 : _a.label,
        ...e.style
      };
      emit("seriesChange", curSeries.value);
    }
    function labelLineShowChange() {
      var _a;
      curSeries.value.labelLine = {
        ...(_a = curSeries.value) == null ? void 0 : _a.labelLine,
        show: labelLineShow.value
      };
      emit("seriesChange", curSeries.value);
    }
    function labelLineSmoothChange() {
      var _a;
      curSeries.value.labelLine = {
        ...(_a = curSeries.value) == null ? void 0 : _a.labelLine,
        smooth: labelLineSmooth.value
      };
      emit("seriesChange", curSeries.value);
    }
    function innerRadiusChange() {
      curSeries.value.radius = [`${innerRadius.value}%`, `${outerRadius.value}%`];
      emit("seriesChange", curSeries.value);
    }
    function offsetChange() {
      curSeries.value.center = [`${xOffset.value}%`, `${yOffset.value}%`];
      emit("seriesChange", curSeries.value);
    }
    function startAngleChange() {
      if (startAngle.value === void 0 || startAngle.value === null) {
        delete curSeries.value.startAngle;
      } else {
        curSeries.value.startAngle = startAngle.value;
      }
      emit("seriesChange", curSeries.value);
    }
    function endAngleChange() {
      if (endAngle.value === void 0 || endAngle.value === null) {
        delete curSeries.value.endAngle;
      } else {
        curSeries.value.endAngle = endAngle.value;
      }
      emit("seriesChange", curSeries.value);
    }
    function padAngleChange() {
      if (padAngle.value === void 0 || padAngle.value === null) {
        delete curSeries.value.padAngle;
      } else {
        curSeries.value.padAngle = padAngle.value;
      }
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
            var _a, _b;
            return [
              createVNode(ConfigGroup, { title: "图形样式" }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_1, [
                    _cache[10] || (_cache[10] = createTextVNode(" 内圈半径 ")),
                    createVNode(unref(Slider), {
                      value: innerRadius.value,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => innerRadius.value = $event),
                      min: 0,
                      max: 100,
                      onChange: innerRadiusChange
                    }, null, 8, ["value"]),
                    _cache[11] || (_cache[11] = createTextVNode(" 外圈半径 ")),
                    createVNode(unref(Slider), {
                      value: outerRadius.value,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => outerRadius.value = $event),
                      min: 0,
                      max: 100,
                      onChange: innerRadiusChange
                    }, null, 8, ["value"])
                  ]),
                  createElementVNode("div", _hoisted_2, [
                    _cache[12] || (_cache[12] = createTextVNode(" 横向偏移 ")),
                    createVNode(unref(Slider), {
                      value: xOffset.value,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => xOffset.value = $event),
                      min: 0,
                      max: 100,
                      onChange: offsetChange
                    }, null, 8, ["value"]),
                    _cache[13] || (_cache[13] = createTextVNode(" 纵向偏移 ")),
                    createVNode(unref(Slider), {
                      value: yOffset.value,
                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => yOffset.value = $event),
                      min: 0,
                      max: 100,
                      onChange: offsetChange
                    }, null, 8, ["value"])
                  ]),
                  createElementVNode("div", _hoisted_3, [
                    _cache[14] || (_cache[14] = createTextVNode(" 起始角度 ")),
                    createVNode(unref(Slider), {
                      value: startAngle.value,
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => startAngle.value = $event),
                      step: 5,
                      min: 0,
                      max: 360,
                      onChange: startAngleChange
                    }, null, 8, ["value"]),
                    _cache[15] || (_cache[15] = createTextVNode(" 结束角度 ")),
                    createVNode(unref(Slider), {
                      value: endAngle.value,
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => endAngle.value = $event),
                      step: 5,
                      min: 0,
                      max: 360,
                      onChange: endAngleChange
                    }, null, 8, ["value"])
                  ]),
                  createElementVNode("div", _hoisted_4, [
                    _cache[16] || (_cache[16] = createTextVNode(" 圆角 ")),
                    createVNode(unref(Slider), {
                      value: barRadius.value,
                      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => barRadius.value = $event),
                      min: 0,
                      max: 50,
                      onChange: barRadiusChange
                    }, null, 8, ["value"]),
                    _cache[17] || (_cache[17] = createTextVNode(" 扇区间隔 ")),
                    createVNode(unref(Slider), {
                      value: padAngle.value,
                      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => padAngle.value = $event),
                      min: 0,
                      max: 360,
                      onChange: padAngleChange
                    }, null, 8, ["value"])
                  ])
                ]),
                _: 1
              }),
              createVNode(ConfigGroup, {
                title: "标签设置",
                "default-expand": false,
                "allow-check": true,
                "title-check": (_b = (_a = __props.series) == null ? void 0 : _a.label) == null ? void 0 : _b.show,
                onChecked: labelChecked
              }, {
                default: withCtx(() => [
                  createVNode(unref(TextStyle), {
                    "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough],
                    "color-type": 1,
                    "hide-align": true,
                    "text-style": labelStyleInfo.value,
                    onFontChange: labelStyleChange,
                    onSizeChange: labelStyleChange,
                    onFontStyleChange: fontStyleChange,
                    onColorChange: labelStyleChange
                  }, null, 8, ["hide-font-style", "text-style"]),
                  createElementVNode("div", _hoisted_5, [
                    createVNode(unref(Checkbox), {
                      checked: labelLineShow.value,
                      "onUpdate:checked": _cache[8] || (_cache[8] = ($event) => labelLineShow.value = $event),
                      onChange: labelLineShowChange
                    }, {
                      default: withCtx(() => _cache[18] || (_cache[18] = [
                        createTextVNode(" 显示标签线")
                      ])),
                      _: 1
                    }, 8, ["checked"]),
                    _cache[19] || (_cache[19] = createTextVNode(" 平滑度 ")),
                    createVNode(unref(Slider), {
                      value: labelLineSmooth.value,
                      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => labelLineSmooth.value = $event),
                      step: 0.1,
                      min: 0,
                      max: 1,
                      onChange: labelLineSmoothChange
                    }, null, 8, ["value"])
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
const PieSeriesConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-58ac54a4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfPieConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { seriesChange } = useEchartsSeriesConfig();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, null, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(EchartsBaseConfig),
            createVNode(EchartsTitleConfig),
            createVNode(EchartsTooltipConfig, { "hide-trigger": true }),
            createVNode(EchartsLegendConfig),
            (openBlock(true), createElementBlock(Fragment, null, renderList((_a = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a.series, (item, index) => {
              return openBlock(), createBlock(PieSeriesConfig, {
                title: `饼状图-${index + 1}`,
                key: index,
                series: item,
                onSeriesChange: ($event) => unref(seriesChange)($event, index)
              }, null, 8, ["title", "series", "onSeriesChange"]);
            }), 128))
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
