import { defineComponent, computed, createBlock, openBlock, unref, withCtx, createElementVNode, normalizeStyle, toDisplayString } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { a3 as getFontStyle, a4 as Decoration11 } from "./index2.js";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDecoration11" },
  __name: "index",
  props: {
    chart: { type: Object }
  },
  setup(__props) {
    const props = __props;
    const fontStyle = computed(() => getFontStyle(props == null ? void 0 : props.chart));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        component: unref(Decoration11),
        chart: __props.chart
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createElementVNode("div", {
              style: normalizeStyle(fontStyle.value)
            }, toDisplayString((_a = __props.chart) == null ? void 0 : _a.options.title), 5)
          ];
        }),
        _: 1
      }, 8, ["component", "chart"]);
    };
  }
});
export {
  _sfc_main as default
};
