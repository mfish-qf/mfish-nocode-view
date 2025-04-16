import { defineComponent, createBlock, openBlock, withCtx, createVNode, unref } from "vue";
import { Empty } from "ant-design-vue";
import { S as StyleConfig } from "./StyleConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfCombineConfig",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StyleConfig, null, {
        default: withCtx(() => [
          createVNode(unref(Empty), {
            description: "组合配置开发中......",
            image: unref(Empty).PRESENTED_IMAGE_SIMPLE
          }, null, 8, ["image"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
