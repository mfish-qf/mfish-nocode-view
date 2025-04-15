import { defineComponent, ref, createElementBlock, openBlock, normalizeClass, unref, createElementVNode, createVNode, createTextVNode, toDisplayString, withCtx } from "vue";
import { CodeEditor, MODE } from "@mfish/core/components/CodeEditor";
import { useDesign, useMessage } from "@mfish/core/hooks";
import { Icon } from "@mfish/core/components/Icon";
import { Tooltip } from "ant-design-vue";
import { _ as _export_sfc } from "./index2.js";
const _hoisted_1 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JsonData",
  props: {
    data: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "图表数据"
    }
  },
  emits: ["dataChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("json-data");
    const { createMessage } = useMessage();
    const value = ref(props.data);
    function changeDataSet(value2) {
      try {
        const data = JSON.parse(value2);
        if (data) {
          emit("dataChange", data);
        }
      } catch {
        createMessage.error("数据格式错误，请检查");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1, [
          createTextVNode(toDisplayString(__props.title) + " ", 1),
          createVNode(unref(Tooltip), { title: "静态数据请保持下面的格式" }, {
            default: withCtx(() => [
              createVNode(unref(Icon), { icon: "ant-design:exclamation-circle-outlined" })
            ]),
            _: 1
          })
        ]),
        createVNode(unref(CodeEditor), {
          style: { height: `100%` },
          value: value.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          mode: unref(MODE).JSON,
          onChange: changeDataSet
        }, null, 8, ["value", "mode"])
      ], 2);
    };
  }
});
const JsonData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35a33965"]]);
export {
  JsonData as J
};
