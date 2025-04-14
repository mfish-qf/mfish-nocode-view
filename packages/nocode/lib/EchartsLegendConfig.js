import { defineComponent, ref, watch, resolveComponent, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createTextVNode, Fragment, renderList, toDisplayString } from "vue";
import { C as ConfigGroup } from "./ConfigGroup.js";
import { RadioGroup, RadioButton, Tooltip } from "ant-design-vue";
import { useDesign } from "@mfish/core";
import "@vueuse/core";
import { Icon } from "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, f as ScreenInput, T as TextStyle, am as TextFont, D as _sfc_main$1, _ as _export_sfc } from "./index2.js";
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
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { style: { "display": "flex", "gap": "6px" } };
const _hoisted_6 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EchartsLegendConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("echarts-legend-config");
    const types = [
      { title: "普通图例", value: "plain" },
      { title: "滚动图例", value: "scroll" }
    ];
    const orients = [
      { title: "横向", value: "horizontal" },
      { title: "竖向", value: "vertical" }
    ];
    const leftPositions = [
      { title: "左", value: "left", icon: "iconfont:icon-mfish-left-align" },
      { title: "中", value: "center", icon: "iconfont:icon-mfish-horizontal-center" },
      { title: "右", value: "right", icon: "iconfont:icon-mfish-right-align" }
    ];
    const topPositions = [
      { title: "上", value: "top", icon: "iconfont:icon-mfish-top-align" },
      { title: "中", value: "middle", icon: "iconfont:icon-mfish-vertical-center" },
      { title: "下", value: "bottom", icon: "iconfont:icon-mfish-bottom-align" }
    ];
    const selectModes = [
      { title: "多选", value: "multiple" },
      { title: "单选", value: "single" },
      { title: "不可选", value: false }
    ];
    const icons = [
      { title: "默认", value: "" },
      { title: "圆形", value: "circle" },
      { title: "方形", value: "rect" },
      { title: "三角形", value: "triangle" },
      { title: "菱形", value: "diamond" },
      { title: "无", value: "none" }
    ];
    const textStyleInfo = ref({});
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      textStyleInfo.value = {};
      const options = (_b = (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.options;
      if (!options) return;
      textStyleInfo.value.font = (_d = (_c = options.legend) == null ? void 0 : _c.textStyle) == null ? void 0 : _d.fontFamily;
      textStyleInfo.value.fontSize = (_g = (_f = (_e = options.legend) == null ? void 0 : _e.textStyle) == null ? void 0 : _f.fontSize) == null ? void 0 : _g.replace("px", "");
      textStyleInfo.value.textColor = (_i = (_h = options.legend) == null ? void 0 : _h.textStyle) == null ? void 0 : _i.color;
      const fontStyle = ((_k = (_j = options.legend) == null ? void 0 : _j.textStyle) == null ? void 0 : _k.fontStyle) ? { italic: true } : {};
      const fontWeight = ((_m = (_l = options.legend) == null ? void 0 : _l.textStyle) == null ? void 0 : _m.fontWeight) ? { bold: true } : {};
      textStyleInfo.value.fontStyle = { ...fontStyle, ...fontWeight };
      textStyleInfo.value.hAlignType = (_n = options.legend) == null ? void 0 : _n.left;
    }
    function hAlignChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.legend.left = e.value;
    }
    function fontStyleChange(e) {
      var _a, _b;
      (_a = screenEditStore.getCurConfigComponent.chart.options.legend.textStyle) == null ? true : delete _a.fontStyle;
      (_b = screenEditStore.getCurConfigComponent.chart.options.legend.textStyle) == null ? true : delete _b.fontWeight;
      textStyleChange(e);
    }
    function textStyleChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.legend.textStyle = {
        ...screenEditStore.getCurConfigComponent.chart.options.legend.textStyle,
        ...e.style
      };
    }
    function legendChecked(checked) {
      screenEditStore.getCurConfigComponent.chart.options.legend = {
        ...screenEditStore.getCurConfigComponent.chart.options.legend,
        show: checked
      };
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "图例配置",
          "default-expand": false,
          "allow-check": true,
          "title-check": (_a = unref(screenEditStore).getCurConfigComponent.chart.options.legend) == null ? void 0 : _a.show,
          onChecked: legendChecked
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              _cache[10] || (_cache[10] = createTextVNode(" 图例类型 ")),
              createElementVNode("div", null, [
                createVNode(unref(RadioGroup), {
                  size: "small",
                  value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.type,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.type = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(types, (item) => {
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
            ]),
            createElementVNode("div", _hoisted_2, [
              _cache[11] || (_cache[11] = createTextVNode(" 图例方向 ")),
              createElementVNode("div", null, [
                createVNode(unref(RadioGroup), {
                  size: "small",
                  value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.orient,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.orient = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(orients, (item) => {
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
            ]),
            createElementVNode("div", _hoisted_3, [
              _cache[12] || (_cache[12] = createTextVNode(" 选择模式 ")),
              createElementVNode("div", null, [
                createVNode(unref(RadioGroup), {
                  size: "small",
                  value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.selectedMode,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.selectedMode = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(selectModes, (item, index) => {
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
            ]),
            createElementVNode("div", _hoisted_4, [
              _cache[13] || (_cache[13] = createTextVNode(" 图例位置 ")),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.left,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.left = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(leftPositions, (item) => {
                    return createVNode(unref(Tooltip), {
                      key: item.value,
                      placement: "top",
                      title: item.title
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(RadioButton), {
                          class: "radio-button",
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              size: 12,
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1032, ["title"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"]),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.top,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.top = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(topPositions, (item) => {
                    return createVNode(unref(Tooltip), {
                      key: item.value,
                      placement: "top",
                      title: item.title
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(RadioButton), {
                          class: "radio-button",
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              size: 12,
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1032, ["title"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            createElementVNode("div", _hoisted_5, [
              createVNode(unref(ScreenInput), {
                prefix: "左",
                "is-number": false,
                placeholder: "数字或百分比",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.left,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.left = $event)
              }, null, 8, ["value"]),
              createVNode(unref(ScreenInput), {
                prefix: "上",
                "is-number": false,
                placeholder: "数字或百分比",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.top,
                "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.top = $event)
              }, null, 8, ["value"])
            ]),
            _cache[15] || (_cache[15] = createElementVNode("div", { class: "title" }, " 图例形状 ", -1)),
            createVNode(unref(RadioGroup), {
              size: "small",
              value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.icon,
              "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.icon = $event)
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock(Fragment, null, renderList(icons, (item) => {
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
            _cache[16] || (_cache[16] = createElementVNode("div", { class: "title" }, " 图例字体 ", -1)),
            createVNode(unref(TextStyle), {
              "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough],
              "hide-align": true,
              "color-type": 1,
              "text-style": textStyleInfo.value,
              onFontChange: textStyleChange,
              onSizeChange: textStyleChange,
              onHAlignChange: hAlignChange,
              onFontStyleChange: fontStyleChange,
              onColorChange: textStyleChange
            }, null, 8, ["hide-font-style", "text-style"]),
            createElementVNode("div", _hoisted_6, [
              _cache[14] || (_cache[14] = createTextVNode(" 图例格式 ")),
              createElementVNode("div", null, [
                createVNode(_component_AInput, {
                  value: unref(screenEditStore).getCurConfigComponent.chart.options.legend.formatter,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.formatter = $event),
                  placeholder: "格式****{name} 详情参考echarts formatter属性"
                }, null, 8, ["value"])
              ])
            ]),
            createVNode(unref(_sfc_main$1), {
              checked: unref(screenEditStore).getCurConfigComponent.chart.options.legend.legendHoverLink,
              "onUpdate:checked": _cache[9] || (_cache[9] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.legend.legendHoverLink = $event),
              title: "联动高亮",
              tooltip: "鼠标移动到图例时高亮对应图形"
            }, null, 8, ["checked"])
          ]),
          _: 1
        }, 8, ["title-check"])
      ], 2);
    };
  }
});
const EchartsLegendConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d96806cd"]]);
export {
  EchartsLegendConfig as E
};
