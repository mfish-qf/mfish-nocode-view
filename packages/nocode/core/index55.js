import { defineComponent as e, useTemplateRef as t, computed as o, watch as r, nextTick as s, createBlock as a, openBlock as i, unref as n, mergeProps as c, toHandlers as h } from "vue";
import { i as m, u as l, ax as f, ay as p, _ as d } from "./index.js";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import { throttle as u } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const v = d(e({ name: "MfScrollTable", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const d2 = e2, { commonEvents: v2, emitEvent: w } = m(d2.chart, void 0, ["rowClick"]), C = l(), I = t("scrollTableRef"), g = o(() => ({ ...d2.chart.options, ...d2.chart.data?.dataSet }));
  function x(e3) {
    if (e3.rowIndex >= 0) {
      const t2 = p(d2.chart);
      t2.length > e3.rowIndex && w("rowClick", t2[e3.rowIndex]);
    }
  }
  r([() => d2.chartContain?.dropInfo?.width, () => d2.chartContain?.dropInfo?.height], u(() => {
    I.value?.resize();
  }, 100)), r([() => d2.chartContain?.show, () => d2.chart?.showHide?.show], (e3) => {
    e3 && s(() => {
      I.value?.resize();
    });
  });
  const b = o(() => {
    if (d2.chart?.events?.emits && d2.chart.events.emits.length > 0) {
      for (const e3 of d2.chart.events.emits) if ("rowClick" === e3) return "allow-pointer";
    }
  });
  return (e3, t2) => (i(), a(n(f), c({ class: b.value, ref_key: "scrollTableRef", ref: I, theme: n(C).getTheme, config: g.value }, h(n(v2)), { onRowClick: x }), null, 16, ["class", "theme", "config"]));
} }), [["__scopeId", "data-v-d370b1e5"]]);
export {
  v as default
};
