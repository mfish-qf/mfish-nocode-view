import { defineComponent, createBlock, openBlock, unref } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { Y as BorderBox6 } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfBorder6" },
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { component: unref(BorderBox6) }, null, 8, ["component"]);
    };
  }
});
export {
  _sfc_main as default
};
