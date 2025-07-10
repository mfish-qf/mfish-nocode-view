import { defineComponent as e, useTemplateRef as o, computed as t, watch as r, nextTick as i, createBlock as n, openBlock as a, unref as s, mergeProps as c, toHandlers as h } from "vue";
import { i as m, u as l, aw as f, ax as p } from "./index.js";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import { throttle as d } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const u = e({ name: "MfScrollTable", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const u2 = e2, { commonEvents: w, emitEvent: v } = m(u2.chart, void 0, ["rowClick"]), x = l(), C = o("scrollTableRef"), I = t(() => ({ ...u2.chart.options, ...u2.chart.data?.dataSet }));
  function g(e3) {
    if (e3.rowIndex >= 0) {
      const o2 = p(u2.chart);
      o2.length > e3.rowIndex && v("rowClick", o2[e3.rowIndex]);
    }
  }
  return r([() => u2.chartContain?.dropInfo?.width, () => u2.chartContain?.dropInfo?.height], d(() => {
    C.value?.resize();
  }, 100)), r([() => u2.chartContain?.show, () => u2.chart?.showHide?.show], (e3) => {
    e3 && i(() => {
      C.value?.resize();
    });
  }), (e3, o2) => (a(), n(s(f), c({ ref_key: "scrollTableRef", ref: C, theme: s(x).getTheme, config: I.value }, h(s(w)), { onRowClick: g }), null, 16, ["theme", "config"]));
} });
export {
  u as default
};
