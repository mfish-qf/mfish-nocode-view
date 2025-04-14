import { defineComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createVNode, createElementVNode, createTextVNode } from "vue";
import { Checkbox } from "ant-design-vue";
import MfBorderConfig from "./MfBorderConfig.js";
import { useDesign } from "@mfish/core";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, f as ScreenInput, _ as _export_sfc } from "./index2.js";
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
  __name: "MfBorder8Config",
  setup(__props) {
    const { prefixCls } = useDesign("border8-config");
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
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode(" 是否反转 ")
            ])),
            _: 1
          }, 8, ["checked"]),
          createElementVNode("div", _hoisted_1, [
            _cache[3] || (_cache[3] = createTextVNode(" 单次动画时长 ")),
            createVNode(unref(ScreenInput), {
              suffix: "秒",
              style: { "width": "120px" },
              value: unref(screenEditStore).getCurConfigComponent.chart.options.duration,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.duration = $event),
              placeholder: "单次动画时长",
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
const MfBorder8Config = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5cb66ea"]]);
export {
  MfBorder8Config as default
};
