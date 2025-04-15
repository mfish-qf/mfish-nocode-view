import { defineComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createTextVNode, createVNode } from "vue";
import MfDecorationConfig from "./MfDecorationConfig.js";
import "ant-design-vue";
import { useDesign } from "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, f as ScreenInput, _ as _export_sfc } from "./index2.js";
import "@mfish/core/enums";
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
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDecoration12Config",
  setup(__props) {
    const { prefixCls } = useDesign("decoration12-config");
    const screenEditStore = useScreenEditStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfDecorationConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = createTextVNode(" 扫描动画时长 ")),
            createVNode(unref(ScreenInput), {
              suffix: "秒",
              value: unref(screenEditStore).getCurConfigComponent.chart.options.scanDuration,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.scanDuration = $event),
              placeholder: "扫描动画时长",
              min: 1,
              max: 100,
              maxlength: 3
            }, null, 8, ["value"])
          ]),
          createElementVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = createTextVNode(" 光晕动画时长 ")),
            createVNode(unref(ScreenInput), {
              suffix: "秒",
              value: unref(screenEditStore).getCurConfigComponent.chart.options.haloDuration,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.haloDuration = $event),
              placeholder: "光晕动画时长",
              min: 1,
              max: 100,
              maxlength: 3
            }, null, 8, ["value"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfDecoration12Config = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-630737c8"]]);
export {
  MfDecoration12Config as default
};
