import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index2.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/src/components/Icon";
import { useDesign } from "@mfish/core";
import "ant-design-vue";
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
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "填充色 ", -1)),
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
const MfBorderConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b9aaf6f"]]);
export {
  MfBorderConfig as default
};
