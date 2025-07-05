import { defineComponent as t, useCssVars as o, computed as e, watch as a, createBlock as n, openBlock as r, unref as i, mergeProps as c, toHandlers as p } from "vue";
import { l as s, u as d } from "./index.js";
import { Table as l } from "ant-design-vue";
import { useDesign as C } from "@mfish/core/hooks";
import { ThemeEnum as h } from "@mfish/core/enums";
import { cloneDeep as u } from "lodash-es";
const m = t({ __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  o((t3) => ({ d555acaa: `${w.value}px`, "35794dae": x.value, "4edb8706": S.value, "0bcbdccb": I.value }));
  const m2 = t2, { commonEvents: g, emitEvent: f } = s(m2.chart, void 0, ["rowClick"]), { prefixCls: v } = C("mf-table"), b = e(() => {
    var _a, _b;
    const t3 = u(m2.chart.options.tableInfo.columns);
    if (t3 && t3.length > 0) for (let o2 = 0; o2 < t3.length; o2++) t3[o2] = { ...t3[o2], ...m2.chart.options.columns[o2] }, m2.chart.options.index && 0 === o2 && (t3[o2].customRender = ({ index: t4 }) => `${(m2.chart.data.pagination.current ?? 0) * m2.chart.data.pagination.pageSize + t4 + 1}`);
    return { ...m2.chart.options.tableInfo, columns: t3, pagination: (_a = m2.chart.data) == null ? void 0 : _a.pagination, dataSource: (_b = m2.chart.data) == null ? void 0 : _b.dataSet };
  }), w = e(() => {
    var _a, _b, _c;
    let t3 = (((_a = m2.chartContain) == null ? void 0 : _a.dropInfo.height) - 64) / (((_c = (_b = m2.chart.data) == null ? void 0 : _b.pagination) == null ? void 0 : _c.pageSize) + 1);
    return (!t3 || t3 < 54.67) && (t3 = 54.67), t3;
  }), B = d(), F = { headerBGC: "#303030", oddRowBGC: "#141414", evenRowBGC: "#1D1D1D" }, G = { headerBGC: "#F0F0F0", oddRowBGC: "#FFFFFF", evenRowBGC: "#FAFAFA" };
  a(() => {
    var _a, _b, _c;
    return (_c = (_b = (_a = B.getCurConfigComponent) == null ? void 0 : _a.chartContain) == null ? void 0 : _b.dropInfo) == null ? void 0 : _c.height;
  }, (t3) => {
    var _a, _b, _c, _d, _e;
    if (t3) {
      let o2 = (t3 - 64) / (((_b = (_a = B.getCurConfigComponent.chart.data) == null ? void 0 : _a.pagination) == null ? void 0 : _b.pageSize) + 1);
      (!o2 || o2 < 54.67) && (o2 = 54.67), ((_e = (_d = (_c = B.getCurConfigComponent.chart.options) == null ? void 0 : _c.tableInfo) == null ? void 0 : _d.scroll) == null ? void 0 : _e.y) && (B.getCurConfigComponent.chart.options.tableInfo.scroll.y = t3 - 64 - o2);
    }
  }), a(() => {
    var _a, _b, _c;
    return (_c = (_b = (_a = B.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.data) == null ? void 0 : _c.type;
  }, (t3) => {
    var _a, _b;
    0 === t3 && (B.getCurConfigComponent.chart.data.pagination = { pageSize: ((_b = (_a = B.getCurConfigComponent.chart.data) == null ? void 0 : _a.pagination) == null ? void 0 : _b.pageSize) || 5 });
  });
  const R = e(() => B.getTheme === h.DARK ? F : G), x = e(() => m2.chart.options.headerBGC || R.value.headerBGC), S = e(() => m2.chart.options.evenRowBGC || R.value.evenRowBGC), I = e(() => m2.chart.options.oddRowBGC || R.value.oddRowBGC);
  function y(t3) {
    return { onClick: () => {
      f("rowClick", t3);
    } };
  }
  return (t3, o2) => (r(), n(i(l), c({ class: i(v) }, b.value, p(i(g)), { "row-class-name": (t4, o3) => o3 % 2 == 1 ? "even-table-striped" : "odd-table-striped", "custom-row": y }), null, 16, ["class", "row-class-name"]));
} });
export {
  m as default
};
