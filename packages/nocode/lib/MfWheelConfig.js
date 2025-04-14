import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createVNode, createElementVNode, createTextVNode } from "vue";
import { useDesign } from "@mfish/core";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index2.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/src/components/Icon";
import { Slider, Checkbox } from "ant-design-vue";
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
import "@vueuse/core";
import "@mfish/core/src/components/CodeEditor";
import "@mfish/core/src/i18n/UseLocale";
import "@mfish/core/src/hooks/setting/UseDarkModeTheme";
import { S as StyleConfig } from "./StyleConfig.js";
import { C as ConfigGroup } from "./ConfigGroup.js";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfWheelConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("wheel-config");
    const innerCircleColor = ref();
    const activeColor = ref();
    const strokeWidth = ref(1);
    const fontSize = ref(48);
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
      strokeWidth.value = (_d = (_c = (_b = (_a = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _a.options.style.chart) == null ? void 0 : _b.layout) == null ? void 0 : _c.innerCircle) == null ? void 0 : _d.strokeWidth;
      innerCircleColor.value = (_h = (_g = (_f = (_e = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _e.options.style.chart) == null ? void 0 : _f.layout) == null ? void 0 : _g.innerCircle) == null ? void 0 : _h.stroke;
      activeColor.value = (_m = (_l = (_k = (_j = (_i = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _i.options.style.chart) == null ? void 0 : _j.layout) == null ? void 0 : _k.wheel) == null ? void 0 : _l.ticks) == null ? void 0 : _m.activeColor;
      fontSize.value = (_q = (_p = (_o = (_n = screenEditStore.getCurConfigComponent.chart) == null ? void 0 : _n.options.style.chart) == null ? void 0 : _o.layout) == null ? void 0 : _p.percentage) == null ? void 0 : _q.fontSize;
    }
    function confirmInnerCircleColor(color) {
      changeInnerCircleColor(color);
      innerCircleColor.value = color;
    }
    function changeInnerCircleColor(color) {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.innerCircle.stroke = color;
    }
    function confirmActiveColor(_, color) {
      changeActiveColor(_, color);
      activeColor.value = color;
    }
    function changeActiveColor(_, color) {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.activeColor = color;
    }
    function innerCircleChecked(checked) {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.innerCircle.show = checked;
    }
    function strokeWidthChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.innerCircle.strokeWidth = strokeWidth.value;
    }
    function percentageChecked(checked) {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.percentage.show = checked;
    }
    function fontSizeChange() {
      screenEditStore.getCurConfigComponent.chart.options.style.chart.layout.percentage.fontSize = fontSize.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => {
          var _a, _b, _c, _d, _e, _f;
          return [
            createVNode(ConfigGroup, {
              title: "数值样式",
              "allow-check": true,
              "title-check": (_c = (_b = (_a = unref(screenEditStore).getCurConfigComponent.chart.options.style.chart) == null ? void 0 : _a.layout) == null ? void 0 : _b.percentage) == null ? void 0 : _c.show,
              onChecked: percentageChecked
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_1, [
                  _cache[8] || (_cache[8] = createTextVNode(" 字体大小 ")),
                  createVNode(unref(Slider), {
                    value: fontSize.value,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => fontSize.value = $event),
                    min: 8,
                    max: 100,
                    onChange: fontSizeChange
                  }, null, 8, ["value"]),
                  createVNode(unref(Checkbox), {
                    checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.percentage.bold,
                    "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.percentage.bold = $event)
                  }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode(" 加粗 ")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                createElementVNode("div", _hoisted_2, [
                  _cache[9] || (_cache[9] = createTextVNode(" 小数位数 ")),
                  createVNode(unref(Slider), {
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.percentage.rounding,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.percentage.rounding = $event),
                    min: 0,
                    max: 6
                  }, null, 8, ["value"])
                ])
              ]),
              _: 1
            }, 8, ["title-check"]),
            createVNode(ConfigGroup, {
              title: "内环配置",
              "allow-check": true,
              "title-check": (_f = (_e = (_d = unref(screenEditStore).getCurConfigComponent.chart.options.style.chart) == null ? void 0 : _d.layout) == null ? void 0 : _e.innerCircle) == null ? void 0 : _f.show,
              onChecked: innerCircleChecked
            }, {
              default: withCtx(() => [
                _cache[11] || (_cache[11] = createElementVNode("div", { class: "title" }, "内环颜色", -1)),
                createVNode(unref(MfishColorPicker), {
                  placeholder: "设置数字颜色，格式#FFFFFF",
                  type: 1,
                  value: innerCircleColor.value,
                  onConfirmChange: confirmInnerCircleColor,
                  onInputChange: changeInnerCircleColor
                }, null, 8, ["value"]),
                createElementVNode("div", _hoisted_3, [
                  _cache[10] || (_cache[10] = createTextVNode("内环宽度")),
                  createVNode(unref(Slider), {
                    value: strokeWidth.value,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => strokeWidth.value = $event),
                    max: 25,
                    onChange: strokeWidthChange
                  }, null, 8, ["value"])
                ])
              ]),
              _: 1
            }, 8, ["title-check"]),
            createVNode(ConfigGroup, { title: "外环配置" }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_4, [
                  _cache[12] || (_cache[12] = createTextVNode(" 激活颜色 ")),
                  createElementVNode("div", null, [
                    createVNode(unref(MfishColorPicker), {
                      placeholder: "设置外环颜色，格式#FFFFFF",
                      type: 1,
                      value: activeColor.value,
                      onConfirmChange: confirmActiveColor,
                      onInputChange: changeActiveColor
                    }, null, 8, ["value"])
                  ])
                ]),
                createElementVNode("div", _hoisted_5, [
                  createVNode(unref(Checkbox), {
                    checked: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.show,
                    "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.show = $event)
                  }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode(" 渐变色 ")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(unref(Slider), {
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity,
                    "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity = $event),
                    min: 0,
                    max: 100
                  }, null, 8, ["value"])
                ]),
                createElementVNode("div", _hoisted_6, [
                  _cache[14] || (_cache[14] = createTextVNode(" 圆环比例 ")),
                  createVNode(unref(Slider), {
                    value: unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.sizeRatio,
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.style.chart.layout.wheel.ticks.sizeRatio = $event),
                    step: 0.1,
                    min: 0,
                    max: 1
                  }, null, 8, ["value"])
                ])
              ]),
              _: 1
            })
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfWheelConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69136d31"]]);
export {
  MfWheelConfig as default
};
