import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createVNode, createElementVNode, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { RadioGroup, RadioButton, Checkbox, Slider } from "ant-design-vue";
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
import "@vueuse/core";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { S as StyleConfig } from "./StyleConfig.js";
import { C as ConfigGroup } from "./ConfigGroup.js";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = {
  key: 0,
  class: "title"
};
const _hoisted_6 = { class: "title" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "title" };
const _hoisted_9 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfTireMarksConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("wheel-config");
    const activeColor = ref();
    const fontSize = ref(16);
    const display = ref("horizontal");
    const displays = [
      { title: "横向", value: "horizontal" },
      { title: "竖向", value: "vertical" }
    ];
    const position = ref("left");
    const horizontalPositions = [
      { title: "左边", value: "left" },
      { title: "右边", value: "right" }
    ];
    const verticalPositions = [
      { title: "顶部", value: "top" },
      { title: "底部", value: "bottom" }
    ];
    const curveAngleX = ref(10);
    const curveAngleY = ref(10);
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      activeColor.value = (_c = (_b = (_a = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _a.options.style.chart) == null ? void 0 : _b.layout) == null ? void 0 : _c.activeColor;
      fontSize.value = (_f = (_e = (_d = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _d.options.style.chart) == null ? void 0 : _e.percentage) == null ? void 0 : _f.fontSize;
      display.value = (_i = (_h = (_g = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _g.options.style.chart) == null ? void 0 : _h.layout) == null ? void 0 : _i.display;
      setPosition();
      curveAngleX.value = (_l = (_k = (_j = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _j.options.style.chart) == null ? void 0 : _k.layout) == null ? void 0 : _l.curveAngleX;
      curveAngleY.value = (_o = (_n = (_m = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _m.options.style.chart) == null ? void 0 : _n.layout) == null ? void 0 : _o.curveAngleY;
    }
    function setPosition() {
      if (display.value === "horizontal") {
        position.value = screenEditStore.getCurConfigComponent.chart.options.style.chart.percentage.horizontalPosition ?? "left";
      } else {
        position.value = screenEditStore.getCurConfigComponent.chart.options.style.chart.percentage.verticalPosition ?? "bottom";
      }
    }
    function percentageChecked(checked) {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.percentage.show = checked;
    }
    function fontSizeChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.percentage.fontSize = fontSize.value;
    }
    function displayChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.display = display.value;
      const width = screenEditStore.getCurConfigComponent.chartContain.dropInfo.width;
      const height = screenEditStore.getCurConfigComponent.chartContain.dropInfo.height;
      setPosition();
      if (display.value === "horizontal" && width > height || display.value === "vertical" && height > width) {
        return;
      }
      screenEditStore.getCurConfigComponent.chartContain.dropInfo.width = height;
      screenEditStore.getCurConfigComponent.chartContain.dropInfo.height = width;
    }
    function horizontalPositionChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.percentage.horizontalPosition = position.value;
    }
    function verticalPositionChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.percentage.verticalPosition = position.value;
    }
    function curveAngleXChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.curveAngleX = curveAngleX.value;
    }
    function curveAngleYChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.curveAngleY = curveAngleY.value;
    }
    function confirmActiveColor(_, color) {
      changeActiveColor(_, color);
      activeColor.value = color;
    }
    function changeActiveColor(_, color) {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.activeColor = color;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            createVNode(ConfigGroup, { title: "图形配置" }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_1, [
                  _cache[13] || (_cache[13] = createTextVNode(" 图形方向 ")),
                  createVNode(unref(RadioGroup), {
                    size: "small",
                    value: display.value,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => display.value = $event),
                    onChange: displayChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(displays, (item, index) => {
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
                  _cache[14] || (_cache[14] = createTextVNode(" 激活颜色 ")),
                  createElementVNode("div", null, [
                    createVNode(unref(MfishColorPicker), {
                      placeholder: "设置进度颜色，格式#FFFFFF",
                      type: 1,
                      value: activeColor.value,
                      onConfirmChange: confirmActiveColor,
                      onInputChange: changeActiveColor
                    }, null, 8, ["value"])
                  ])
                ]),
                createElementVNode("div", _hoisted_3, [
                  createVNode(unref(Checkbox), {
                    checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.show,
                    "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.show = $event)
                  }, {
                    default: withCtx(() => _cache[15] || (_cache[15] = [
                      createTextVNode(" 渐变色 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(unref(Slider), {
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.shiftHueIntensity,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.ticks.gradient.shiftHueIntensity = $event),
                    min: 0,
                    max: 100
                  }, null, 8, ["value"])
                ]),
                createElementVNode("div", _hoisted_4, [
                  createVNode(unref(Checkbox), {
                    checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.curved,
                    "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.curved = $event)
                  }, {
                    default: withCtx(() => _cache[16] || (_cache[16] = [
                      createTextVNode(" 弧形 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.curved ? (openBlock(), createElementBlock("div", _hoisted_5, [
                    _cache[17] || (_cache[17] = createTextVNode(" X角度 ")),
                    createVNode(unref(Slider), {
                      value: curveAngleX.value,
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => curveAngleX.value = $event),
                      min: 1,
                      max: 30,
                      onChange: curveAngleXChange
                    }, null, 8, ["value"]),
                    _cache[18] || (_cache[18] = createTextVNode(" Y角度 ")),
                    createVNode(unref(Slider), {
                      value: curveAngleY.value,
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => curveAngleY.value = $event),
                      min: 1,
                      max: 30,
                      onChange: curveAngleYChange
                    }, null, 8, ["value"])
                  ])) : createCommentVNode("", true)
                ]),
                createElementVNode("div", _hoisted_6, [
                  createVNode(unref(Checkbox), {
                    checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.crescendo,
                    "onUpdate:checked": _cache[6] || (_cache[6] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.crescendo = $event)
                  }, {
                    default: withCtx(() => _cache[19] || (_cache[19] = [
                      createTextVNode(" 渐强 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            createVNode(ConfigGroup, {
              title: "数值样式",
              "allow-check": true,
              "title-check": (_b = (_a = unref(screenEditStore).getCurConfigComponent.chart.options.style.chart) == null ? void 0 : _a.percentage) == null ? void 0 : _b.show,
              onChecked: percentageChecked
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_7, [
                  _cache[20] || (_cache[20] = createTextVNode(" 文字位置 ")),
                  display.value === "horizontal" ? (openBlock(), createBlock(unref(RadioGroup), {
                    key: 0,
                    size: "small",
                    value: position.value,
                    "onUpdate:value": _cache[7] || (_cache[7] = ($event) => position.value = $event),
                    onChange: horizontalPositionChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(horizontalPositions, (item, index) => {
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
                  }, 8, ["value"])) : (openBlock(), createBlock(unref(RadioGroup), {
                    key: 1,
                    size: "small",
                    value: position.value,
                    "onUpdate:value": _cache[8] || (_cache[8] = ($event) => position.value = $event),
                    onChange: verticalPositionChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(verticalPositions, (item, index) => {
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
                  }, 8, ["value"]))
                ]),
                createElementVNode("div", _hoisted_8, [
                  _cache[22] || (_cache[22] = createTextVNode(" 字体大小 ")),
                  createVNode(unref(Slider), {
                    value: fontSize.value,
                    "onUpdate:value": _cache[9] || (_cache[9] = ($event) => fontSize.value = $event),
                    min: 8,
                    max: 100,
                    onChange: fontSizeChange
                  }, null, 8, ["value"]),
                  createVNode(unref(Checkbox), {
                    checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.percentage.bold,
                    "onUpdate:checked": _cache[10] || (_cache[10] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.percentage.bold = $event)
                  }, {
                    default: withCtx(() => _cache[21] || (_cache[21] = [
                      createTextVNode(" 加粗 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                createElementVNode("div", _hoisted_9, [
                  _cache[23] || (_cache[23] = createTextVNode(" 小数位数 ")),
                  createVNode(unref(Slider), {
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.percentage.rounding,
                    "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.percentage.rounding = $event),
                    min: 0,
                    max: 6
                  }, null, 8, ["value"])
                ]),
                createVNode(unref(Checkbox), {
                  checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.percentage.useGradientColor,
                  "onUpdate:checked": _cache[12] || (_cache[12] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.percentage.useGradientColor = $event)
                }, {
                  default: withCtx(() => _cache[24] || (_cache[24] = [
                    createTextVNode(" 跟随图形颜色 ")
                  ])),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            }, 8, ["title-check"])
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfTireMarksConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18a9cbf2"]]);
export {
  MfTireMarksConfig as default
};
