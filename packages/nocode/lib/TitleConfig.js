import { defineComponent, ref, watch, createElementBlock, openBlock, normalizeClass, unref, createElementVNode, createVNode, toDisplayString } from "vue";
import "ant-design-vue";
import { useDesign } from "@mfish/core";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, T as TextStyle, _ as _export_sfc } from "./index2.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TitleConfig",
  props: {
    title: {
      type: String,
      default: "文本样式"
    }
  },
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const textStyleInfo = ref({});
    const { prefixCls } = useDesign("title-config");
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d, _e, _f;
      textStyleInfo.value = {};
      textStyleInfo.value.font = (_a = screenEditStore.getCurConfigComponent.chart.options.font) == null ? void 0 : _a.value;
      textStyleInfo.value.fontSize = (_b = screenEditStore.getCurConfigComponent.chart.options.fontSize) == null ? void 0 : _b.value;
      textStyleInfo.value.hAlignType = (_c = screenEditStore.getCurConfigComponent.chart.options.hAlign) == null ? void 0 : _c.value;
      textStyleInfo.value.vAlignType = (_d = screenEditStore.getCurConfigComponent.chart.options.vAlign) == null ? void 0 : _d.value;
      textStyleInfo.value.textColor = (_e = screenEditStore.getCurConfigComponent.chart.options.textColor) == null ? void 0 : _e.value;
      textStyleInfo.value.fontStyle = (_f = screenEditStore.getCurConfigComponent.chart.options.fontStyle) == null ? void 0 : _f.value;
    }
    function fontChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.font = e;
    }
    function fontSizeChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.fontSize = e;
    }
    function hAlignChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.hAlign = e;
    }
    function vAlignChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.vAlign = e;
    }
    function fontStyleChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.fontStyle = e;
    }
    function colorChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.textColor = e;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1, toDisplayString(__props.title), 1),
        createVNode(unref(TextStyle), {
          "text-style": textStyleInfo.value,
          onFontChange: fontChange,
          onSizeChange: fontSizeChange,
          onHAlignChange: hAlignChange,
          onVAlignChange: vAlignChange,
          onFontStyleChange: fontStyleChange,
          onColorChange: colorChange
        }, null, 8, ["text-style"])
      ], 2);
    };
  }
});
const TitleConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a73a496"]]);
export {
  TitleConfig as T
};
