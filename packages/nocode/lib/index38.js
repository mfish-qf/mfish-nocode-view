import { defineComponent, createBlock, openBlock, unref } from "vue";
import "ant-design-vue";
import "@mfish/core";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { a8 as Decoration4 } from "./index2.js";
import "@mfish/core/enums";
import "@mfish/core/src/utils/Is";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDecoration4" },
  __name: "index",
  props: {
    chart: { type: Object }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createBlock(_sfc_main$1, {
        component: unref(Decoration4),
        chart: __props.chart,
        reverse: (_a = __props.chart) == null ? void 0 : _a.options.reverse,
        duration: ((_b = __props.chart) == null ? void 0 : _b.options.duration) ? (_c = __props.chart) == null ? void 0 : _c.options.duration : 3
      }, null, 8, ["component", "chart", "reverse", "duration"]);
    };
  }
});
export {
  _sfc_main as default
};
