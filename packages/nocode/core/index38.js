import { defineComponent as o, createBlock as t, openBlock as r, unref as e } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { a9 as i } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as n } from "./index.vue_vue_type_script_setup_true_lang.js";
const s = o({ name: "MfDecoration5", __name: "index", props: { chart: { type: Object } }, setup: (o2) => (s2, m) => {
  var _a, _b;
  return r(), t(n, { component: e(i), chart: o2.chart, duration: ((_a = o2.chart) == null ? void 0 : _a.options.duration) ? (_b = o2.chart) == null ? void 0 : _b.options.duration : 3 }, null, 8, ["component", "chart", "duration"]);
} });
export {
  s as default
};
