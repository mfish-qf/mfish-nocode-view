import { defineComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode } from "vue";
import MfBorderConfig from "./MfBorderConfig.js";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, f as ScreenInput, _ as _export_sfc } from "./index.js";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfBorder11Config",
  setup(__props) {
    const { prefixCls } = useDesign("border11-config");
    const screenEditStore = useScreenEditStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfBorderConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "标题", -1)),
          createVNode(unref(ScreenInput), {
            value: unref(screenEditStore).getCurConfigComponent.chart.options.title,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title = $event),
            "is-number": false,
            placeholder: "标题内容"
          }, null, 8, ["value"]),
          _cache[3] || (_cache[3] = createElementVNode("div", { class: "title" }, "标题宽度", -1)),
          createVNode(unref(ScreenInput), {
            suffix: "px",
            value: unref(screenEditStore).getCurConfigComponent.chart.options.titleWidth,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.titleWidth = $event),
            placeholder: "标题宽度",
            min: 50,
            max: 1e4,
            maxlength: 5
          }, null, 8, ["value"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfBorder11Config = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b381667b"]]);
export {
  MfBorder11Config as default
};
