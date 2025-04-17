import { defineComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode } from "vue";
import MfDecorationConfig from "./MfDecorationConfig.js";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, f as ScreenInput, _ as _export_sfc } from "./index.js";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as TitleConfig } from "./TitleConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDecoration7Config",
  setup(__props) {
    const { prefixCls } = useDesign("decoration7-config");
    const screenEditStore = useScreenEditStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfDecorationConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "标题", -1)),
          createVNode(unref(ScreenInput), {
            value: unref(screenEditStore).getCurConfigComponent.chart.options.title,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title = $event),
            "is-number": false,
            placeholder: "标题内容"
          }, null, 8, ["value"]),
          createVNode(TitleConfig)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfDecoration7Config = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a6938b0"]]);
export {
  MfDecoration7Config as default
};
