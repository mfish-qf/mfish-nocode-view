import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, createTextVNode, computed, createElementBlock, Fragment, renderList, toDisplayString, resolveComponent } from "vue";
import { Checkbox, RadioGroup, RadioButton, Slider } from "ant-design-vue";
import { useDesign } from "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, f as ScreenInput, _ as _export_sfc, k as MfishColorPicker, T as TextStyle, am as TextFont } from "./index2.js";
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
import { a as EchartsBaseConfig } from "./EchartsBaseConfig.js";
import { C as ConfigGroup } from "./ConfigGroup.js";
const _hoisted_1$2 = { style: { "display": "flex", "gap": "2px" } };
const _hoisted_2$2 = { class: "check-group" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EchartsGridConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("echarts-grid-config");
    const showGrid = ref(false);
    const left = ref("");
    const right = ref("");
    const top = ref("");
    const bottom = ref("");
    const xyReverse = ref(false);
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (val) {
          console.log(val);
          initValue();
        }
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      xyReverse.value = ((_a = screenEditStore.getCurConfigComponent.chart.options.yAxis) == null ? void 0 : _a.type) === "category";
      if (((_c = (_b = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _b.grid) == null ? void 0 : _c.left) !== void 0) {
        left.value = screenEditStore.getCurConfigComponent.chart.options.grid.left;
      }
      if (((_e = (_d = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _d.grid) == null ? void 0 : _e.right) !== void 0) {
        right.value = screenEditStore.getCurConfigComponent.chart.options.grid.right;
      }
      if (((_g = (_f = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _f.grid) == null ? void 0 : _g.top) !== void 0) {
        top.value = screenEditStore.getCurConfigComponent.chart.options.grid.top;
      }
      if (((_i = (_h = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _h.grid) == null ? void 0 : _i.bottom) !== void 0) {
        bottom.value = screenEditStore.getCurConfigComponent.chart.options.grid.bottom;
      }
    }
    function leftChange(e) {
      console.log(e);
      console.log(left.value);
      screenEditStore.getCurConfigComponent.chart.options.grid.left = left.value;
    }
    function rightChange() {
      screenEditStore.getCurConfigComponent.chart.options.grid.right = right.value;
    }
    function topChange() {
      screenEditStore.getCurConfigComponent.chart.options.grid.top = top.value;
    }
    function bottomChange() {
      screenEditStore.getCurConfigComponent.chart.options.grid.bottom = bottom.value;
    }
    function reverseChange() {
      var _a, _b;
      if (xyReverse.value) {
        (_a = screenEditStore.getCurConfigComponent.chart.options.xAxis) == null ? true : delete _a.type;
        screenEditStore.getCurConfigComponent.chart.options.yAxis.type = "category";
      } else {
        (_b = screenEditStore.getCurConfigComponent.chart.options.yAxis) == null ? true : delete _b.type;
        screenEditStore.getCurConfigComponent.chart.options.xAxis.type = "category";
      }
    }
    function showGridChange() {
      screenEditStore.getCurConfigComponent.chart.options.grid.show = showGrid.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(EchartsBaseConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[8] || (_cache[8] = createElementVNode("div", { class: "title" }, " 图表边距", -1)),
          createElementVNode("div", _hoisted_1$2, [
            createVNode(unref(ScreenInput), {
              prefix: "左",
              "is-number": false,
              placeholder: "数字或百分比",
              value: left.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => left.value = $event),
              onChange: leftChange
            }, null, 8, ["value"]),
            createVNode(unref(ScreenInput), {
              prefix: "右",
              "is-number": false,
              placeholder: "数字或百分比",
              value: right.value,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => right.value = $event),
              onChange: rightChange
            }, null, 8, ["value"]),
            createVNode(unref(ScreenInput), {
              prefix: "上",
              "is-number": false,
              placeholder: "数字或百分比",
              value: top.value,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => top.value = $event),
              onChange: topChange
            }, null, 8, ["value"]),
            createVNode(unref(ScreenInput), {
              prefix: "下",
              "is-number": false,
              placeholder: "数字或百分比",
              value: bottom.value,
              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => bottom.value = $event),
              onChange: bottomChange
            }, null, 8, ["value"])
          ]),
          createElementVNode("div", _hoisted_2$2, [
            createVNode(unref(Checkbox), {
              checked: xyReverse.value,
              "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => xyReverse.value = $event),
              onChange: reverseChange
            }, {
              default: withCtx(() => _cache[6] || (_cache[6] = [
                createTextVNode(" X、Y轴交换")
              ])),
              _: 1
            }, 8, ["checked"]),
            createVNode(unref(Checkbox), {
              checked: showGrid.value,
              "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => showGrid.value = $event),
              onChange: showGridChange
            }, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createTextVNode(" 显示网格")
              ])),
              _: 1
            }, 8, ["checked"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const EchartsGridConfig = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e5e90967"]]);
const _hoisted_1$1 = { class: "title" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = { class: "title" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EchartsLineConfig",
  props: {
    axisType: {
      type: String,
      default: "X"
    },
    lineStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ["lineStyleChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("echarts-line-config");
    const screenEditStore = useScreenEditStore();
    const curLineStyle = ref(props.lineStyle);
    const axisLineColor = ref();
    const lineType = ref("solid");
    const lineTypes = [
      { title: "实线", value: "solid" },
      { title: "方形虚线", value: "dashed" },
      { title: "圆点虚线", value: "dotted" }
    ];
    const maxWidth = computed(() => {
      return props.axisType === "X" ? Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.height / 50) : Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.width / 50);
    });
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        var _a, _b, _c, _d;
        if (val) {
          if (((_a = props.lineStyle) == null ? void 0 : _a.color) !== void 0) {
            axisLineColor.value = props.lineStyle.color;
          }
          if (((_b = props == null ? void 0 : props.lineStyle) == null ? void 0 : _b.type) !== void 0) {
            lineType.value = props.lineStyle.type;
          }
          if (((_c = props == null ? void 0 : props.lineStyle) == null ? void 0 : _c.width) !== void 0) {
            lineWidth.value = (_d = props == null ? void 0 : props.lineStyle) == null ? void 0 : _d.width;
          }
        }
      },
      { immediate: true }
    );
    const lineWidth = ref(1);
    function confirmLineColor(e) {
      changeLineColor(e);
      axisLineColor.value = e;
    }
    function changeLineColor(e) {
      if (!e) {
        delete curLineStyle.value.color;
        emit("lineStyleChange", curLineStyle.value);
        return;
      }
      curLineStyle.value = {
        ...curLineStyle.value,
        color: e
      };
      emit("lineStyleChange", curLineStyle.value);
    }
    function lineTypeChange() {
      curLineStyle.value = {
        ...curLineStyle.value,
        type: lineType.value
      };
      emit("lineStyleChange", curLineStyle.value);
    }
    function lineWidthChange() {
      curLineStyle.value = {
        ...curLineStyle.value,
        width: lineWidth.value
      };
      emit("lineStyleChange", curLineStyle.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$1, [
          _cache[2] || (_cache[2] = createTextVNode(" 线条颜色 ")),
          createElementVNode("div", null, [
            createVNode(unref(MfishColorPicker), {
              placeholder: "设置线条颜色，格式#FFFFFF",
              type: 1,
              value: axisLineColor.value,
              onConfirmChange: confirmLineColor,
              onInputChange: changeLineColor
            }, null, 8, ["value"])
          ])
        ]),
        createElementVNode("div", _hoisted_2$1, [
          _cache[3] || (_cache[3] = createTextVNode(" 线条类型 ")),
          createVNode(unref(RadioGroup), {
            size: "small",
            value: lineType.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => lineType.value = $event),
            onChange: lineTypeChange
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(lineTypes, (item, index) => {
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
        createElementVNode("div", _hoisted_3$1, [
          _cache[4] || (_cache[4] = createTextVNode(" 线条宽度 ")),
          createVNode(unref(Slider), {
            value: lineWidth.value,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => lineWidth.value = $event),
            min: 1,
            max: maxWidth.value,
            onChange: lineWidthChange
          }, null, 8, ["value", "max"])
        ])
      ], 2);
    };
  }
});
const EchartsLineConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9a98d1ec"]]);
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "title" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "title" };
const _hoisted_9 = { class: "title" };
const _hoisted_10 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EchartsAxisConfig",
  props: {
    axisType: {
      type: String,
      default: "X"
    },
    axis: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["axisChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const curAxis = ref(props.axis);
    const { prefixCls } = useDesign("echarts-axis-config");
    const screenEditStore = useScreenEditStore();
    const titleName = ref("");
    const textStyleInfo = ref({});
    const labelTextStyleInfo = ref({});
    const interval = ref("auto");
    const maxWidth = computed(() => {
      return props.axisType === "X" ? Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.width / 50) : Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.height / 50);
    });
    const maxHeight = computed(() => {
      return props.axisType === "X" ? Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.height / 5) : Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.width / 5);
    });
    const intervals = [
      { title: "自动", value: "auto" },
      { title: "全显示", value: "0" }
    ];
    const inside = ref(false);
    const insides = [
      { title: "朝外", value: false },
      { title: "朝内", value: true }
    ];
    const symbol = ref("none");
    const symbols = [
      { title: "无", value: "none" },
      { title: "右箭头", value: "none,arrow" },
      { title: "左箭头", value: "arrow,none" },
      { title: "两端箭头", value: "arrow,arrow" }
    ];
    const position = ref();
    const positions = {
      X: [
        { title: "底部", value: "bottom" },
        { title: "顶部", value: "top" }
      ],
      Y: [
        { title: "左侧", value: "left" },
        { title: "右侧", value: "right" }
      ]
    };
    const tickType = ref("solid");
    const lineTypes = [
      { title: "实线", value: "solid" },
      { title: "方形虚线", value: "dashed" },
      { title: "圆点虚线", value: "dotted" }
    ];
    const margin = ref(8);
    const rotate = ref(0);
    const labelFormatter = ref();
    const tickLength = ref(5);
    const tickWidth = ref(1);
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      textStyleInfo.value = {};
      const axis = props.axis;
      if (!axis) return;
      titleName.value = axis == null ? void 0 : axis.name;
      textStyleInfo.value.font = (_a = axis == null ? void 0 : axis.nameTextStyle) == null ? void 0 : _a.fontFamily;
      textStyleInfo.value.fontSize = (_c = (_b = axis == null ? void 0 : axis.nameTextStyle) == null ? void 0 : _b.fontSize) == null ? void 0 : _c.replace("px", "");
      textStyleInfo.value.textColor = (_d = axis == null ? void 0 : axis.nameTextStyle) == null ? void 0 : _d.color;
      const fontStyle = ((_e = axis == null ? void 0 : axis.nameTextStyle) == null ? void 0 : _e.fontStyle) ? { italic: true } : {};
      const fontWeight = ((_f = axis == null ? void 0 : axis.nameTextStyle) == null ? void 0 : _f.fontWeight) ? { bold: true } : {};
      textStyleInfo.value.fontStyle = { ...fontStyle, ...fontWeight };
      textStyleInfo.value.hAlignType = (axis == null ? void 0 : axis.nameLocation) === "start" ? "left" : (axis == null ? void 0 : axis.nameLocation) === "end" ? "right" : axis == null ? void 0 : axis.nameLocation;
      if (((_g = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _g.interval) !== void 0) {
        interval.value = (_h = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _h.interval;
      }
      if (((_i = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _i.margin) !== void 0) {
        margin.value = (_j = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _j.margin;
      }
      if (((_k = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _k.rotate) !== void 0) {
        rotate.value = (_l = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _l.rotate;
      }
      if (((_m = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _m.formatter) !== void 0) {
        labelFormatter.value = (_n = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _n.formatter;
      }
      if (axis.position === void 0) {
        position.value = positions[props.axisType][0].value;
      } else {
        position.value = axis.position;
      }
      labelTextStyleInfo.value = {};
      if (!axis) return;
      labelTextStyleInfo.value.font = (_o = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _o.fontFamily;
      labelTextStyleInfo.value.fontSize = (_q = (_p = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _p.fontSize) == null ? void 0 : _q.replace("px", "");
      labelTextStyleInfo.value.textColor = (_r = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _r.color;
      const labelFontStyle = ((_s = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _s.fontStyle) ? { italic: true } : {};
      const labelFontWeight = ((_t = axis == null ? void 0 : axis.axisLabel) == null ? void 0 : _t.fontWeight) ? { bold: true } : {};
      labelTextStyleInfo.value.fontStyle = { ...labelFontStyle, ...labelFontWeight };
      if (((_u = axis == null ? void 0 : axis.axisLine) == null ? void 0 : _u.symbol) !== void 0) {
        symbol.value = axis.axisLine.symbol.join(",");
      }
      if (((_v = axis == null ? void 0 : axis.axisTick) == null ? void 0 : _v.inside) !== void 0) {
        inside.value = (_w = axis == null ? void 0 : axis.axisTick) == null ? void 0 : _w.inside;
      }
      if (((_x = axis == null ? void 0 : axis.axisTick) == null ? void 0 : _x.length) !== void 0) {
        tickLength.value = axis.axisTick.length;
      }
      if (((_z = (_y = axis == null ? void 0 : axis.axisTick) == null ? void 0 : _y.lineStyle) == null ? void 0 : _z.width) !== void 0) {
        tickWidth.value = axis.axisTick.lineStyle.width;
      }
      if (((_B = (_A = axis == null ? void 0 : axis.axisTick) == null ? void 0 : _A.lineStyle) == null ? void 0 : _B.type) !== void 0) {
        tickType.value = axis == null ? void 0 : axis.axisTick.lineStyle.type;
      }
    }
    function titleNameChange() {
      curAxis.value.name = titleName.value;
    }
    function fontStyleChange(e) {
      var _a, _b;
      (_a = curAxis.value.nameTextStyle) == null ? true : delete _a.fontStyle;
      (_b = curAxis.value.nameTextStyle) == null ? true : delete _b.fontWeight;
      textStyleChange(e);
    }
    function textStyleChange(e) {
      var _a;
      curAxis.value.nameTextStyle = {
        ...(_a = curAxis.value) == null ? void 0 : _a.nameTextStyle,
        ...e.style
      };
      emit("axisChange", curAxis.value);
    }
    function hAlignChange(e) {
      curAxis.value.nameLocation = e.value === "left" ? "start" : e.value === "right" ? "end" : e.value;
      emit("axisChange", curAxis.value);
    }
    function xAxisChecked(checked) {
      curAxis.value = {
        ...curAxis.value,
        show: checked
      };
      emit("axisChange", curAxis.value);
    }
    function labelChecked(checked) {
      curAxis.value.axisLabel = {
        ...curAxis.value.axisLabel,
        show: checked
      };
      emit("axisChange", curAxis.value);
    }
    function intervalChange() {
      curAxis.value.axisLabel = {
        ...curAxis.value.axisLabel,
        interval: interval.value
      };
      emit("axisChange", curAxis.value);
    }
    function marginChange() {
      curAxis.value.axisLabel = {
        ...curAxis.value.axisLabel,
        margin: margin.value
      };
      emit("axisChange", curAxis.value);
    }
    function rotateChange() {
      curAxis.value.axisLabel = {
        ...curAxis.value.axisLabel,
        rotate: rotate.value
      };
      emit("axisChange", curAxis.value);
    }
    function labelFontStyleChange(e) {
      var _a, _b;
      (_a = curAxis.value.axisLabel) == null ? true : delete _a.fontStyle;
      (_b = curAxis.value.axisLabel) == null ? true : delete _b.fontWeight;
      labelTextStyleChange(e);
    }
    function labelTextStyleChange(e) {
      var _a;
      curAxis.value.axisLabel = {
        ...(_a = curAxis.value) == null ? void 0 : _a.axisLabel,
        ...e.style
      };
      emit("axisChange", curAxis.value);
    }
    function labelFormatterChange() {
      curAxis.value.axisLabel = {
        ...curAxis.value.axisLabel,
        formatter: labelFormatter.value
      };
      emit("axisChange", curAxis.value);
    }
    function lineChecked(checked) {
      curAxis.value.axisLine = {
        ...curAxis.value.axisLine,
        show: checked
      };
    }
    function tickChecked(checked) {
      curAxis.value.axisTick = {
        ...curAxis.value.axisTick,
        show: checked
      };
      emit("axisChange", curAxis.value);
    }
    function positionChange() {
      curAxis.value = {
        ...curAxis.value,
        position: position.value
      };
      emit("axisChange", curAxis.value);
    }
    function symbolChange() {
      curAxis.value.axisLine = {
        ...curAxis.value.axisLine,
        symbol: symbol.value.split(",")
      };
      emit("axisChange", curAxis.value);
    }
    function axisLineChange(e) {
      var _a;
      curAxis.value.axisLine.lineStyle = {
        ...(_a = curAxis.value.axisLine) == null ? void 0 : _a.lineStyle,
        ...e
      };
      emit("axisChange", curAxis.value);
    }
    function insideChange() {
      curAxis.value.axisTick = {
        ...curAxis.value.axisTick,
        inside: inside.value
      };
      emit("axisChange", curAxis.value);
    }
    function tickLengthChange() {
      curAxis.value.axisTick = {
        ...curAxis.value.axisTick,
        length: tickLength.value
      };
      emit("axisChange", curAxis.value);
    }
    function tickWidthChange() {
      var _a;
      curAxis.value.axisTick.lineStyle = {
        ...(_a = curAxis.value.axisTick) == null ? void 0 : _a.lineStyle,
        width: tickWidth.value
      };
      emit("axisChange", curAxis.value);
    }
    function tickTypeChange() {
      var _a;
      curAxis.value.axisTick.lineStyle = {
        ...(_a = curAxis.value.axisTick) == null ? void 0 : _a.lineStyle,
        type: tickType.value
      };
      emit("axisChange", curAxis.value);
    }
    function splitLineChecked(checked) {
      curAxis.value.splitLine = {
        ...curAxis.value.splitLine,
        show: checked
      };
      emit("axisChange", curAxis.value);
    }
    function splitLineChange(e) {
      var _a;
      curAxis.value.splitLine.lineStyle = {
        ...(_a = curAxis.value.splitLine) == null ? void 0 : _a.lineStyle,
        ...e
      };
      emit("axisChange", curAxis.value);
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: `${__props.axisType}轴配置`,
          "default-expand": false,
          "allow-check": true,
          "title-check": (_a = __props.axis) == null ? void 0 : _a.show,
          onChecked: xAxisChecked
        }, {
          default: withCtx(() => {
            var _a2, _b, _c, _d, _e, _f, _g, _h;
            return [
              createElementVNode("div", _hoisted_1, [
                createTextVNode(toDisplayString(`${__props.axisType}轴位置`) + " ", 1),
                createVNode(unref(RadioGroup), {
                  size: "small",
                  value: position.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => position.value = $event),
                  onChange: positionChange
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(positions[__props.axisType], (item, index) => {
                      return openBlock(), createBlock(unref(RadioButton), {
                        key: index,
                        value: item.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              createVNode(ConfigGroup, { title: "名称配置" }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_2, [
                    createElementVNode("div", null, [
                      createVNode(_component_AInput, {
                        value: titleName.value,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => titleName.value = $event),
                        "show-count": "",
                        maxlength: 50,
                        onChange: titleNameChange
                      }, null, 8, ["value"])
                    ])
                  ]),
                  createVNode(unref(TextStyle), {
                    "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough],
                    "color-type": 1,
                    "text-style": textStyleInfo.value,
                    onFontChange: textStyleChange,
                    onSizeChange: textStyleChange,
                    onColorChange: textStyleChange,
                    onHAlignChange: hAlignChange,
                    onFontStyleChange: fontStyleChange
                  }, null, 8, ["hide-font-style", "text-style"])
                ]),
                _: 1
              }),
              createVNode(ConfigGroup, {
                title: "标签配置",
                "default-expand": false,
                "allow-check": true,
                "title-check": (_b = (_a2 = __props.axis) == null ? void 0 : _a2.axisLabel) == null ? void 0 : _b.show,
                onChecked: labelChecked
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_3, [
                    _cache[11] || (_cache[11] = createTextVNode(" 标签间隔 ")),
                    createVNode(unref(RadioGroup), {
                      size: "small",
                      value: interval.value,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => interval.value = $event),
                      onChange: intervalChange
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createElementBlock(Fragment, null, renderList(intervals, (item) => {
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
                  createVNode(unref(TextStyle), {
                    "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough],
                    "hide-align": true,
                    "color-type": 1,
                    "text-style": labelTextStyleInfo.value,
                    onFontChange: labelTextStyleChange,
                    onSizeChange: labelTextStyleChange,
                    onColorChange: labelTextStyleChange,
                    onFontStyleChange: labelFontStyleChange
                  }, null, 8, ["hide-font-style", "text-style"]),
                  createElementVNode("div", _hoisted_4, [
                    _cache[12] || (_cache[12] = createTextVNode(" 标签与轴线间距 ")),
                    createVNode(unref(Slider), {
                      value: margin.value,
                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => margin.value = $event),
                      min: -100,
                      max: 100,
                      onChange: marginChange
                    }, null, 8, ["value"])
                  ]),
                  createElementVNode("div", _hoisted_5, [
                    _cache[13] || (_cache[13] = createTextVNode(" 标签角度 ")),
                    createVNode(unref(Slider), {
                      value: rotate.value,
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => rotate.value = $event),
                      min: -90,
                      max: 90,
                      onChange: rotateChange
                    }, null, 8, ["value"])
                  ]),
                  createElementVNode("div", _hoisted_6, [
                    _cache[14] || (_cache[14] = createTextVNode(" 标签格式 ")),
                    createElementVNode("div", null, [
                      createVNode(_component_AInput, {
                        value: labelFormatter.value,
                        "onUpdate:value": _cache[5] || (_cache[5] = ($event) => labelFormatter.value = $event),
                        placeholder: "格式{value}kg 详情参考echarts formatter属性",
                        onChange: labelFormatterChange
                      }, null, 8, ["value"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title-check"]),
              createVNode(ConfigGroup, {
                title: "轴线配置",
                "default-expand": false,
                "allow-check": true,
                "title-check": (_d = (_c = __props.axis) == null ? void 0 : _c.axisLine) == null ? void 0 : _d.show,
                onChecked: lineChecked
              }, {
                default: withCtx(() => {
                  var _a3, _b2;
                  return [
                    createVNode(EchartsLineConfig, {
                      "axis-type": __props.axisType,
                      "line-style": (_b2 = (_a3 = __props.axis) == null ? void 0 : _a3.axisLine) == null ? void 0 : _b2.lineStyle,
                      onLineStyleChange: axisLineChange
                    }, null, 8, ["axis-type", "line-style"]),
                    createElementVNode("div", _hoisted_7, [
                      _cache[15] || (_cache[15] = createTextVNode(" 轴线箭头 ")),
                      createVNode(unref(RadioGroup), {
                        size: "small",
                        value: symbol.value,
                        "onUpdate:value": _cache[6] || (_cache[6] = ($event) => symbol.value = $event),
                        onChange: symbolChange
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList(symbols, (item, index) => {
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
                    ])
                  ];
                }),
                _: 1
              }, 8, ["title-check"]),
              createVNode(ConfigGroup, {
                title: "刻度配置",
                "default-expand": false,
                "allow-check": true,
                "title-check": (_f = (_e = __props.axis) == null ? void 0 : _e.axisTick) == null ? void 0 : _f.show,
                onChecked: tickChecked
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_8, [
                    _cache[16] || (_cache[16] = createTextVNode(" 刻度方向 ")),
                    createVNode(unref(RadioGroup), {
                      size: "small",
                      value: inside.value,
                      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => inside.value = $event),
                      onChange: insideChange
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createElementBlock(Fragment, null, renderList(insides, (item, index) => {
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
                  createElementVNode("div", _hoisted_9, [
                    _cache[17] || (_cache[17] = createTextVNode(" 刻度类型 ")),
                    createVNode(unref(RadioGroup), {
                      size: "small",
                      value: tickType.value,
                      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => tickType.value = $event),
                      onChange: tickTypeChange
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createElementBlock(Fragment, null, renderList(lineTypes, (item, index) => {
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
                  createElementVNode("div", _hoisted_10, [
                    _cache[18] || (_cache[18] = createTextVNode(" 刻度长度 ")),
                    createVNode(unref(Slider), {
                      value: tickLength.value,
                      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => tickLength.value = $event),
                      min: 1,
                      max: maxHeight.value,
                      onChange: tickLengthChange
                    }, null, 8, ["value", "max"]),
                    _cache[19] || (_cache[19] = createTextVNode(" 刻度宽度 ")),
                    createVNode(unref(Slider), {
                      value: tickWidth.value,
                      "onUpdate:value": _cache[10] || (_cache[10] = ($event) => tickWidth.value = $event),
                      min: 1,
                      max: maxWidth.value,
                      onChange: tickWidthChange
                    }, null, 8, ["value", "max"])
                  ])
                ]),
                _: 1
              }, 8, ["title-check"]),
              createVNode(ConfigGroup, {
                title: "分隔线配置",
                "default-expand": false,
                "allow-check": true,
                "title-check": (_h = (_g = __props.axis) == null ? void 0 : _g.splitLine) == null ? void 0 : _h.show,
                onChecked: splitLineChecked
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(EchartsLineConfig, {
                      "axis-type": __props.axisType,
                      "line-style": (_a3 = __props.axis) == null ? void 0 : _a3.splitLine.lineStyle,
                      onLineStyleChange: splitLineChange
                    }, null, 8, ["axis-type", "line-style"])
                  ];
                }),
                _: 1
              }, 8, ["title-check"])
            ];
          }),
          _: 1
        }, 8, ["title", "title-check"])
      ], 2);
    };
  }
});
const EchartsAxisConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4207db68"]]);
export {
  EchartsGridConfig as E,
  EchartsAxisConfig as a
};
