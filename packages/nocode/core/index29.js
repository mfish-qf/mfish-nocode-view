import { defineComponent as o, openBlock as r, createBlock as e, unref as t } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { a2 as s } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as i } from "./index.vue_vue_type_script_setup_true_lang.js";
const n = o({ name: "MfBorder8", __name: "index", props: { chart: { type: Object } }, setup: (o2) => (n2, p) => (r(), e(i, { component: t(s), chart: o2.chart, reverse: o2.chart?.options.reverse, duration: o2.chart?.options.duration ? o2.chart?.options.duration : 3 }, null, 8, ["component", "chart", "reverse", "duration"])) });
export {
  n as default
};
