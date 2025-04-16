import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign } from "@mfish/core/hooks";
import "ant-design-vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDecorationConfig",
  setup(__props) {
    const { prefixCls } = useDesign("decoration-config");
    const mainBorderColor = ref();
    const secBorderColor = ref();
    const screenEditStore = useScreenEditStore();
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      mainBorderColor.value = screenEditStore.getCurConfigComponent.chart.options.mainColor;
      secBorderColor.value = screenEditStore.getCurConfigComponent.chart.options.secondColor;
    }
    function confirmMainColor(e) {
      changeMainColor(e);
      mainBorderColor.value = e;
    }
    function changeMainColor(e) {
      screenEditStore.getCurConfigComponent.chart.options.mainColor = e;
    }
    function confirmSecColor(e) {
      changeSecColor(e);
      secBorderColor.value = e;
    }
    function changeSecColor(e) {
      screenEditStore.getCurConfigComponent.chart.options.secondColor = e;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, " 主体色", -1)),
          createVNode(unref(MfishColorPicker), {
            placeholder: "设置主体颜色，格式#FFFFFF",
            type: 1,
            value: mainBorderColor.value,
            onConfirmChange: confirmMainColor,
            onInputChange: changeMainColor
          }, null, 8, ["value"]),
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, " 搭配色", -1)),
          createVNode(unref(MfishColorPicker), {
            placeholder: "设置搭配颜色，格式#FFFFFF",
            type: 1,
            value: secBorderColor.value,
            onConfirmChange: confirmSecColor,
            onInputChange: changeSecColor
          }, null, 8, ["value"]),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfDecorationConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6337d62f"]]);
export {
  MfDecorationConfig as default
};
