import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
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
import MfDecorationConfig from "./MfDecorationConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfBorderConfig",
  setup(__props) {
    const { prefixCls } = useDesign("border-config");
    const backgroundColor = ref();
    const screenEditStore = useScreenEditStore();
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        backgroundColor.value = screenEditStore.getCurConfigComponent.chart.options.backgroundColor;
      },
      { immediate: true }
    );
    function confirmBackgroundColor(e) {
      changeBackgroundColor(e);
      backgroundColor.value = e;
    }
    function changeBackgroundColor(e) {
      screenEditStore.getCurConfigComponent.chart.options.backgroundColor = e;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfDecorationConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "填充色", -1)),
          createVNode(unref(MfishColorPicker), {
            placeholder: "设置填充颜色，格式#FFFFFF",
            type: 1,
            value: backgroundColor.value,
            onConfirmChange: confirmBackgroundColor,
            onInputChange: changeBackgroundColor
          }, null, 8, ["value"]),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfBorderConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4d4c8082"]]);
export {
  MfBorderConfig as default
};
