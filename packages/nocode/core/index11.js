import { defineComponent as t, createBlock as e, openBlock as o, unref as i } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { n as r } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as s } from "./index.vue_vue_type_script_setup_true_lang.js";
const m = t({ name: "MfBorder11", __name: "index", props: { chart: { type: Object } }, setup: (t2) => (m2, p) => {
  var _a, _b;
  return o(), e(s, { component: i(r), chart: t2.chart, title: (_a = t2.chart) == null ? void 0 : _a.options.title, "title-width": (_b = t2.chart) == null ? void 0 : _b.options.titleWidth }, null, 8, ["component", "chart", "title", "title-width"]);
} });
export {
  m as default
};
