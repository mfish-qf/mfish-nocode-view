import { defineComponent, createBlock, openBlock, unref } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { a2 as Decoration10 } from "./index.js";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDecoration10" },
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { component: unref(Decoration10) }, null, 8, ["component"]);
    };
  }
});
export {
  _sfc_main as default
};
