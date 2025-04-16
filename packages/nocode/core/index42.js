import { defineComponent, createBlock, openBlock, unref } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { ad as Decoration9 } from "./index.js";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDecoration9" },
  __name: "index",
  props: {
    chart: { type: Object }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createBlock(_sfc_main$1, {
        component: unref(Decoration9),
        chart: __props.chart,
        duration: ((_a = __props.chart) == null ? void 0 : _a.options.duration) ? (_b = __props.chart) == null ? void 0 : _b.options.duration : 3
      }, null, 8, ["component", "chart", "duration"]);
    };
  }
});
export {
  _sfc_main as default
};
