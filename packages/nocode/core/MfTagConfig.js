import { defineComponent, ref, watch, createBlock, openBlock, normalizeClass, unref, withCtx, renderSlot, createElementBlock, createCommentVNode, createElementVNode, createVNode, createTextVNode } from "vue";
import { useDesign } from "@mfish/core/hooks";
import { Input, Checkbox } from "ant-design-vue";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index.js";
import { S as StyleConfig } from "./StyleConfig.js";
import { IconPicker } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as TitleConfig } from "./TitleConfig.js";
const _hoisted_1 = {
  key: 0,
  class: "title"
};
const _hoisted_2 = { class: "check-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfTagConfig",
  props: {
    hideTitle: { type: Boolean, default: false },
    hideIcon: { type: Boolean, default: false }
  },
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("tag-config");
    const iconColor = ref();
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      iconColor.value = screenEditStore.getCurConfigComponent.chart.options.iconColor;
    }
    function changeIcon(e) {
      screenEditStore.getCurConfigComponent.chart.data.dataSet.icon = e;
    }
    function confirmColor(e) {
      changeColor(e);
      iconColor.value = e;
    }
    function changeColor(e) {
      screenEditStore.getCurConfigComponent.chart.options.numColor = e;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          !__props.hideTitle ? (openBlock(), createElementBlock("div", _hoisted_1, "标签内容")) : createCommentVNode("", true),
          !__props.hideTitle ? (openBlock(), createBlock(unref(Input), {
            key: 1,
            value: unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.title,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.title = $event),
            "show-count": "",
            maxlength: 50
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _cache[3] || (_cache[3] = createElementVNode("div", { class: "title" }, "图标", -1)),
          !__props.hideIcon ? (openBlock(), createBlock(unref(IconPicker), {
            key: 2,
            value: unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.icon,
            onChange: changeIcon
          }, null, 8, ["value"])) : createCommentVNode("", true),
          createVNode(unref(MfishColorPicker), {
            placeholder: "设置图标颜色，格式#FFFFFF",
            type: 1,
            value: iconColor.value,
            onConfirmChange: confirmColor,
            onInputChange: changeColor
          }, null, 8, ["value"]),
          createVNode(TitleConfig),
          createElementVNode("div", _hoisted_2, [
            createVNode(unref(Checkbox), {
              checked: unref(screenEditStore).getCurConfigComponent.chart.options.hide,
              "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.hide = $event)
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode(" 文字超出隐藏")
              ])),
              _: 1
            }, 8, ["checked"])
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfTagConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30f2ad7e"]]);
export {
  MfTagConfig as default
};
