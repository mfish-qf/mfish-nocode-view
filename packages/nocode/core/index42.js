import { defineComponent as o, createBlock as t, openBlock as r, unref as e } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { ae as i } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as n } from "./index.vue_vue_type_script_setup_true_lang.js";
const s = o({ name: "MfDecoration9", __name: "index", props: { chart: { type: Object } }, setup: (o2) => (s2, m) => (r(), t(n, { component: e(i), chart: o2.chart, duration: o2.chart?.options.duration ? o2.chart?.options.duration : 3 }, null, 8, ["component", "chart", "duration"])) });
export {
  s as default
};
