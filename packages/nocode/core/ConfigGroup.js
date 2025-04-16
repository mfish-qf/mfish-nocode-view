import { defineComponent, ref, createElementBlock, openBlock, normalizeClass, unref, createElementVNode, createVNode, createCommentVNode, createBlock, withModifiers, withCtx, createTextVNode, toDisplayString, renderSlot } from "vue";
import { Checkbox, Tooltip } from "ant-design-vue";
import { useDesign } from "@mfish/core/hooks";
import { Icon } from "@mfish/core/components/Icon";
import { NCollapseTransition } from "naive-ui";
import "@vueuse/core";
import "lodash-es";
import { u as useScreenEditStore, _ as _export_sfc } from "./index.js";
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
const _hoisted_1 = { key: 2 };
const _hoisted_2 = {
  key: 0,
  class: "copy-action"
};
const _hoisted_3 = { class: "child-item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfigGroup",
  props: {
    title: { type: String, default: "" },
    allowCollapse: { type: Boolean, default: true },
    allowCheck: { type: Boolean, default: false },
    titleCheck: { type: Boolean, default: false },
    defaultExpand: { type: Boolean, default: true },
    allowCopy: { type: Boolean, default: false },
    tooltip: { type: String, default: "" }
  },
  emits: ["checked", "copy", "paste"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const checked = ref(props.titleCheck);
    const expand = ref(props.defaultExpand);
    const { prefixCls } = useDesign("config-group");
    const screenEditStore = useScreenEditStore();
    function expandHandle() {
      if (!props.allowCollapse) {
        expand.value = true;
        return;
      }
      expand.value = !expand.value;
    }
    function checkChange() {
      expand.value = !!checked.value;
      emit("checked", checked.value);
    }
    function copyHandle() {
      emit("copy", (value) => {
        screenEditStore.setCopyConfig(value);
      });
    }
    function pasteHandle() {
      emit("paste", screenEditStore.getCopyConfig);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", {
          class: normalizeClass(["title", [__props.allowCollapse ? "collapsed" : ""]]),
          onClick: expandHandle
        }, [
          createElementVNode("div", null, [
            __props.allowCheck ? (openBlock(), createBlock(unref(Checkbox), {
              key: 0,
              checked: checked.value,
              "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => checked.value = $event),
              onClick: _cache[1] || (_cache[1] = withModifiers(() => {
              }, ["stop"])),
              onChange: checkChange
            }, null, 8, ["checked"])) : createCommentVNode("", true),
            __props.tooltip ? (openBlock(), createBlock(unref(Tooltip), {
              key: 1,
              title: __props.tooltip
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.title), 1)
              ]),
              _: 1
            }, 8, ["title"])) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(__props.title), 1)),
            !__props.allowCheck && __props.allowCollapse || __props.allowCheck && __props.titleCheck ? (openBlock(), createBlock(unref(Icon), {
              key: 3,
              icon: `ant-design:${expand.value ? "up" : "down"}-outlined`,
              size: 12
            }, null, 8, ["icon"])) : createCommentVNode("", true)
          ]),
          __props.allowCopy ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(unref(Tooltip), {
              placement: "top",
              title: `复制${__props.title}`
            }, {
              default: withCtx(() => [
                createVNode(unref(Icon), {
                  "aria-hidden": "false",
                  size: 12,
                  icon: "iconfont:icon-mfish-copy",
                  onClick: withModifiers(copyHandle, ["stop"])
                })
              ]),
              _: 1
            }, 8, ["title"]),
            createVNode(unref(Tooltip), {
              placement: "top",
              title: `粘贴${__props.title}`
            }, {
              default: withCtx(() => [
                createVNode(unref(Icon), {
                  "aria-hidden": "false",
                  size: 12,
                  icon: "iconfont:icon-mfish-paste",
                  onClick: withModifiers(pasteHandle, ["stop"])
                })
              ]),
              _: 1
            }, 8, ["title"])
          ])) : createCommentVNode("", true)
        ], 2),
        createVNode(unref(NCollapseTransition), {
          show: !__props.allowCheck && expand.value || __props.allowCheck && expand.value && __props.titleCheck
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ]),
          _: 3
        }, 8, ["show"])
      ], 2);
    };
  }
});
const ConfigGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b072661"]]);
export {
  ConfigGroup as C
};
