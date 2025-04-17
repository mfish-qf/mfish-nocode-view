import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode } from "vue";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index.js";
import { S as StyleConfig } from "./StyleConfig.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDigitsConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("digits-config");
    const numColor = ref();
    const skeletonColor = ref();
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d;
      numColor.value = (_b = (_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.digits) == null ? void 0 : _b.color;
      skeletonColor.value = (_d = (_c = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _c.digits) == null ? void 0 : _d.skeletonColor;
    }
    function confirmNumColor(_, hex) {
      changeNumColor(_, hex);
      numColor.value = hex;
    }
    function changeNumColor(_, hex) {
      screenEditStore.getCurConfigComponent.chart.options.digits = {
        ...screenEditStore.getCurConfigComponent.chart.options.digits,
        color: hex
      };
    }
    function confirmSkeletonColor(_, hex) {
      changeSkeletonColor(_, hex);
      skeletonColor.value = hex;
    }
    function changeSkeletonColor(_, hex) {
      screenEditStore.getCurConfigComponent.chart.options.digits = {
        ...screenEditStore.getCurConfigComponent.chart.options.digits,
        skeletonColor: hex
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "数字颜色", -1)),
          createVNode(unref(MfishColorPicker), {
            placeholder: "设置数字颜色，格式#FFFFFF",
            type: 1,
            value: numColor.value,
            onConfirmChange: confirmNumColor,
            onInputChange: changeNumColor
          }, null, 8, ["value"]),
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "框架颜色", -1)),
          createVNode(unref(MfishColorPicker), {
            placeholder: "设置框架颜色，格式#FFFFFF",
            type: 1,
            value: skeletonColor.value,
            onConfirmChange: confirmSkeletonColor,
            onInputChange: changeSkeletonColor
          }, null, 8, ["value"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfDigitsConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad8834b9"]]);
export {
  MfDigitsConfig as default
};
