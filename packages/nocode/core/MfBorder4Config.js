import { defineComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createVNode, createTextVNode } from "vue";
import { Checkbox } from "ant-design-vue";
import MfBorderConfig from "./MfBorderConfig.js";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, _ as _export_sfc } from "./index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfBorder4Config",
  setup(__props) {
    const { prefixCls } = useDesign("border4-config");
    const screenEditStore = useScreenEditStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfBorderConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          createVNode(unref(Checkbox), {
            checked: unref(screenEditStore).getCurConfigComponent.chart.options.reverse,
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.reverse = $event)
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(" 是否反转")
            ])),
            _: 1
          }, 8, ["checked"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfBorder4Config = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7564c18c"]]);
export {
  MfBorder4Config as default
};
