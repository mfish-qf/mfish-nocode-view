import { defineComponent as o, createBlock as t, openBlock as r, unref as e } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { a8 as n } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as a } from "./index.vue_vue_type_script_setup_true_lang.js";
const i = o({ name: "MfDecoration12", __name: "index", props: { chart: { type: Object } }, setup: (o2) => (i2, s) => (r(), t(a, { component: e(n), chart: o2.chart, "scan-duration": o2.chart?.options.scanDuration, "halo-duration": o2.chart?.options.haloDuration }, null, 8, ["component", "chart", "scan-duration", "halo-duration"])) });
export {
  i as default
};
