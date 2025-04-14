import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { useDesign } from "@mfish/core";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, T as TextStyle, am as TextFont, _ as _export_sfc } from "./index2.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfSegmentedStyleConfig",
  setup(__props) {
    const { prefixCls } = useDesign("segmented-style-config");
    const screenEditStore = useScreenEditStore();
    const textStyleInfo = ref({});
    const selectStyleInfo = ref({});
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue(val);
      },
      { immediate: true }
    );
    function initValue(component) {
      var _a, _b, _c, _d;
      textStyleInfo.value = (_b = (_a = component.chart) == null ? void 0 : _a.options) == null ? void 0 : _b.textStyle;
      selectStyleInfo.value = (_d = (_c = component.chart) == null ? void 0 : _c.options) == null ? void 0 : _d.selectStyle;
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "文本样式", -1)),
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
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "选中样式", -1)),
          createVNode(unref(TextStyle), {
            "color-type": 1,
            "text-style": selectStyleInfo.value,
            "hide-align": true,
            "hide-font-style": [unref(TextFont).Strikethrough],
            onColorChange: selectColorChange,
            onFontChange: selectFontChange,
            onSizeChange: selectFontSizeChange,
            onFontStyleChange: selectFontStyleChange
          }, null, 8, ["text-style", "hide-font-style"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfSegmentedStyleConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55b5ac12"]]);
export {
  MfSegmentedStyleConfig as default
};
