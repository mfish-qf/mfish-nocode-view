import { defineComponent, createBlock, openBlock } from "vue";
import MfTagConfig from "./MfTagConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDataTagStyleConfig",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfTagConfig, {
        "hide-title": true,
        "hide-icon": true
      });
    };
  }
});
export {
  _sfc_main as default
};
