import { defineComponent, resolveDirective, withDirectives, createBlock, openBlock, withCtx, renderSlot } from "vue";
import MfBarLineDataConfig from "./MfBarLineDataConfig.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfPieDataConfig",
  setup(__props) {
    return (_ctx, _cache) => {
      const _directive_s = resolveDirective("s");
      return withDirectives((openBlock(), createBlock(MfBarLineDataConfig, { "y-max-count": 1 }, {
        "data-select": withCtx(() => [
          renderSlot(_ctx.$slots, "data-select")
        ]),
        _: 3
      })), [
        [_directive_s]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
