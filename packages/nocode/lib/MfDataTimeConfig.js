import { defineComponent, ref, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createTextVNode, Fragment, renderList, toDisplayString } from "vue";
import MfTagConfig from "./MfTagConfig.js";
import { useDesign } from "@mfish/core";
import { RadioGroup, RadioButton } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, _ as _export_sfc } from "./index2.js";
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
const MfDataTimeConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20a614a3"]]);
export {
  MfDataTimeConfig as default
};
