import { defineComponent as o, openBlock as r, createBlock as t } from "vue";
import { M as e } from "./MfMapConfig.js";
import { u as n } from "./index.js";
const s = o({ __name: "MfMapChunksConfig", setup(o2) {
  const s2 = n();
  function i(o3) {
    s2.getCurConfigComponent.chart.options.series[0] && (s2.getCurConfigComponent.chart.options.series[0].itemStyle.borderColor = o3);
  }
  return (o3, n2) => (r(), t(e, { "show-scatter": false, onChangeBorderColor: i }));
} });
export {
  s as default
};
