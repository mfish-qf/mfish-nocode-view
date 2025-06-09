import { defineComponent as e, useTemplateRef as o, computed as t, watch as r, nextTick as i, createBlock as n, openBlock as a, unref as s, mergeProps as c, toHandlers as h } from "vue";
import { l as m, u as l, at as f, au as p } from "./index.js";
import "ant-design-vue";
import "@mfish/core/hooks";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import { throttle as u } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const d = e({ name: "MfScrollTable", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const d2 = e2, { commonEvents: w, emitEvent: v } = m(d2.chart, void 0, ["rowClick"]), C = l(), I = o("scrollTableRef"), g = t(() => {
    var _a;
    return { ...d2.chart.options, ...(_a = d2.chart.data) == null ? void 0 : _a.dataSet };
  });
  function x(e3) {
    if (e3.rowIndex >= 0) {
      const o2 = p(d2.chart);
      o2.length > e3.rowIndex && v("rowClick", o2[e3.rowIndex]);
    }
  }
  return r([() => {
    var _a, _b;
    return (_b = (_a = d2.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.width;
  }, () => {
    var _a, _b;
    return (_b = (_a = d2.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
  }], u(() => {
    var _a;
    (_a = I.value) == null ? void 0 : _a.resize();
  }, 100)), r([() => {
    var _a;
    return (_a = d2.chartContain) == null ? void 0 : _a.show;
  }, () => {
    var _a, _b;
    return (_b = (_a = d2.chart) == null ? void 0 : _a.showHide) == null ? void 0 : _b.show;
  }], (e3) => {
    e3 && i(() => {
      var _a;
      (_a = I.value) == null ? void 0 : _a.resize();
    });
  }), (e3, o2) => (a(), n(s(f), c({ ref_key: "scrollTableRef", ref: I, theme: s(C).getTheme, config: g.value }, h(s(w)), { onRowClick: x }), null, 16, ["theme", "config"]));
} });
export {
  d as default
};
