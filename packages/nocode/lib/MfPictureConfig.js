import { defineComponent, resolveComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, createTextVNode } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { useDesign } from "@mfish/core";
import { FileUp } from "@mfish/core/src/components/FileUpDown";
import { Checkbox } from "ant-design-vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfPictureConfig",
  setup(__props) {
    const { prefixCls } = useDesign("picture-config");
    const screenEditStore = useScreenEditStore();
    function uploadPicture(_, fileList) {
      if (fileList && fileList.length > 0) {
        screenEditStore.getCurConfigComponent.chart.data.dataSet.key = fileList[0].fileKey;
      }
    }
    function removePicture() {
      screenEditStore.getCurConfigComponent.chart.data.dataSet.key = "";
    }
    return (_ctx, _cache) => {
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createElementVNode("div", { class: "title" }, "图片", -1)),
          createVNode(unref(FileUp), {
            "file-keys": unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.key,
            accepts: ".jpg,.jpeg,.png,.svg",
            "button-text": "上传图片",
            "max-count": 1,
            "is-pic": true,
            onSuccess: uploadPicture,
            onRemove: removePicture
          }, null, 8, ["file-keys"]),
          _cache[4] || (_cache[4] = createElementVNode("div", { class: "title" }, "图片描述", -1)),
          createVNode(_component_AInput, {
            value: unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.alt,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.alt = $event),
            "show-count": "",
            maxlength: 50
          }, null, 8, ["value"]),
          createVNode(unref(Checkbox), {
            checked: unref(screenEditStore).getCurConfigComponent.chart.options.preview,
            "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.preview = $event)
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode(" 开启预览 ")
            ])),
            _: 1
          }, 8, ["checked"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfPictureConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48823c22"]]);
export {
  MfPictureConfig as default
};
