import { defineComponent, ref, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createTextVNode, Fragment, renderList, toDisplayString } from "vue";
import MfTagConfig from "./MfTagConfig.js";
import { useDesign } from "@mfish/core/hooks";
import { RadioGroup, RadioButton } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, _ as _export_sfc } from "./index2.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDataTimeConfig",
  setup(__props) {
    const { prefixCls } = useDesign("date-time-config");
    const format = ref("YYYY-MM-DD HH:mm:ss");
    const formats = [
      { title: "日期时间", value: "YYYY-MM-DD HH:mm:ss" },
      { title: "时间", value: "HH:mm:ss" }
    ];
    const screenEditStore = useScreenEditStore();
    function formatChange() {
      screenEditStore.getCurConfigComponent.chart.options.format = format.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(MfTagConfig, { "hide-title": true }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              _cache[1] || (_cache[1] = createTextVNode(" 时间格式 ")),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: format.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => format.value = $event),
                onChange: formatChange
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(formats, (item) => {
                    return createVNode(unref(RadioButton), {
                      key: item.value,
                      value: item.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"])
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const MfDataTimeConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ea85515"]]);
export {
  MfDataTimeConfig as default
};
