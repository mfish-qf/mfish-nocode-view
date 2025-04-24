import { defineComponent as e, createBlock as o, openBlock as r, unref as t } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { ac as s } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as m } from "./index.vue_vue_type_script_setup_true_lang.js";
const i = e({ name: "MfDecoration8", __name: "index", props: { chart: { type: Object } }, setup: (e2) => (i2, p) => {
  var _a;
  return r(), o(m, { component: t(s), chart: e2.chart, reverse: (_a = e2.chart) == null ? void 0 : _a.options.reverse }, null, 8, ["component", "chart", "reverse"]);
} });
export {
  i as default
};
