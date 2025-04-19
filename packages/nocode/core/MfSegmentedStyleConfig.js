import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, T as TextStyle, am as TextFont, D as _sfc_main$1, k as MfishColorPicker, _ as _export_sfc } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfSegmentedStyleConfig",
  setup(__props) {
    const { prefixCls } = useDesign("segmented-style-config");
    const screenEditStore = useScreenEditStore();
    const textStyleInfo = ref({});
    const selectStyleInfo = ref({});
    const transparent = ref(false);
    const selectBackground = ref();
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue(val);
      },
      { immediate: true }
    );
    function initValue(component) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      textStyleInfo.value = (_b = (_a = component.chart) == null ? void 0 : _a.options) == null ? void 0 : _b.textStyle;
      selectStyleInfo.value = (_d = (_c = component.chart) == null ? void 0 : _c.options) == null ? void 0 : _d.selectStyle;
      transparent.value = ((_f = (_e = component.chart) == null ? void 0 : _e.options) == null ? void 0 : _f.transparent) || false;
      selectBackground.value = (_i = (_h = (_g = component.chart) == null ? void 0 : _g.options) == null ? void 0 : _h.selectStyle) == null ? void 0 : _i.selectBackground;
    }
    function colorChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.textStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle,
        textColor: e.value
      };
    }
    function fontChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.textStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle,
        font: e.value
      };
    }
    function fontSizeChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.textStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle,
        fontSize: e.value
      };
    }
    function fontStyleChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.textStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle,
        fontStyle: e.value
      };
    }
    function selectColorChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.selectStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle,
        textColor: e.value
      };
    }
    function selectFontChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.selectStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle,
        font: e.value
      };
    }
    function selectFontSizeChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.selectStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle,
        fontSize: e.value
      };
    }
    function selectFontStyleChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.options.selectStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle,
        fontStyle: e.value
      };
    }
    function transparentChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.transparent = e.target.checked;
    }
    function confirmColor(value) {
      changeColor(value);
      selectBackground.value = value;
    }
    function changeColor(value) {
      var _a;
      if (!value) {
        value = "";
      }
      screenEditStore.getCurConfigComponent.chart.options.selectStyle = {
        ...(_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle,
        selectBackground: value
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "文本样式", -1)),
          createVNode(unref(TextStyle), {
            "color-type": 1,
            "text-style": textStyleInfo.value,
            "hide-align": true,
            "hide-font-style": [unref(TextFont).Strikethrough],
            onColorChange: colorChange,
            onFontChange: fontChange,
            onSizeChange: fontSizeChange,
            onFontStyleChange: fontStyleChange
          }, null, 8, ["text-style", "hide-font-style"]),
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "选中样式", -1)),
          createVNode(unref(TextStyle), {
            "color-type": 1,
            "text-style": selectStyleInfo.value,
            "hide-align": true,
            "hide-font-style": [unref(TextFont).Strikethrough],
            onColorChange: selectColorChange,
            onFontChange: selectFontChange,
            onSizeChange: selectFontSizeChange,
            onFontStyleChange: selectFontStyleChange
          }, null, 8, ["text-style", "hide-font-style"]),
          createVNode(unref(_sfc_main$1), {
            checked: transparent.value,
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => transparent.value = $event),
            title: "整体背景透明",
            tooltip: "设置背景透明后，可以通过通用配置-背景色设置背景颜色",
            onChange: transparentChange
          }, null, 8, ["checked"]),
          _cache[3] || (_cache[3] = createElementVNode("div", { class: "title" }, "选中项背景色", -1)),
          createVNode(unref(MfishColorPicker), {
            value: selectBackground.value,
            onConfirmChange: confirmColor,
            onInputChange: changeColor
          }, null, 8, ["value"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfSegmentedStyleConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66e5afa1"]]);
export {
  MfSegmentedStyleConfig as default
};
