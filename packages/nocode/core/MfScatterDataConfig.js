import { defineComponent, createBlock, openBlock, withCtx, renderSlot } from "vue";
import MfBarLineDataConfig from "./MfBarLineDataConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfScatterDataConfig",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfBarLineDataConfig, {
        "x-title": "X轴 / 值",
        "y-max-count": 1
      }, {
        "data-select": withCtx(() => [
          renderSlot(_ctx.$slots, "data-select")
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as default
};
