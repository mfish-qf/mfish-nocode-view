import { defineComponent as e, createBlock as r, openBlock as o, unref as t } from "vue";
import "ant-design-vue";
import "@mfish/core/hooks";
import { X as s } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { _ as m } from "./index.vue_vue_type_script_setup_true_lang.js";
const p = e({ name: "MfBorder4", __name: "index", props: { chart: { type: Object } }, setup: (e2) => (p2, i) => (o(), r(m, { component: t(s), chart: e2.chart, reverse: e2.chart?.options.reverse }, null, 8, ["component", "chart", "reverse"])) });
export {
  p as default
};
