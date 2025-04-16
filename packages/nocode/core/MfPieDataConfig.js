import { defineComponent, createBlock, openBlock } from "vue";
import MfBarLineDataConfig from "./MfBarLineDataConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfPieDataConfig",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfBarLineDataConfig, { "y-max-count": 1 });
    };
  }
});
export {
  _sfc_main as default
};
