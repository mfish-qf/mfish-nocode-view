import { defineComponent as o, createBlock as r, openBlock as e, unref as t } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { a1 as s } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as i } from "./index.vue_vue_type_script_setup_true_lang.js";
const n = o({ name: "MfBorder8", __name: "index", props: { chart: { type: Object } }, setup: (o2) => (n2, p) => {
  var _a, _b, _c;
  return e(), r(i, { component: t(s), chart: o2.chart, reverse: (_a = o2.chart) == null ? void 0 : _a.options.reverse, duration: ((_b = o2.chart) == null ? void 0 : _b.options.duration) ? (_c = o2.chart) == null ? void 0 : _c.options.duration : 3 }, null, 8, ["component", "chart", "reverse", "duration"]);
} });
export {
  n as default
};
