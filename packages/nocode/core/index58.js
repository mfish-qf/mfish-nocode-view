import { defineComponent as t, useCssVars as e, computed as o, watch as a, createBlock as n, openBlock as r, unref as i, mergeProps as c, toHandlers as s } from "vue";
import { i as p, u as l } from "./index.js";
import { Table as h } from "ant-design-vue";
import { useDesign as d } from "@mfish/core/hooks";
import { ThemeEnum as m } from "@mfish/core/enums";
import { cloneDeep as u } from "lodash-es";
const C = t({ __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  e((t3) => ({ "74993c04": `${B.value}px`, "5934e2a0": x.value, "2500025f": S.value, "0c23db5c": I.value }));
  const C2 = t2, { commonEvents: f, emitEvent: g } = p(C2.chart, void 0, ["rowClick"]), { prefixCls: v } = d("mf-table"), w = o(() => {
    const t3 = u(C2.chart.options.tableInfo.columns);
    if (t3 && t3.length > 0) for (let e2 = 0; e2 < t3.length; e2++) t3[e2] = { ...t3[e2], ...C2.chart.options.columns[e2] }, C2.chart.options.index && 0 === e2 && (t3[e2].customRender = ({ index: t4 }) => `${(C2.chart.data.pagination.current ?? 0) * C2.chart.data.pagination.pageSize + t4 + 1}`);
    return { ...C2.chart.options.tableInfo, columns: t3, pagination: C2.chart.data?.pagination, dataSource: C2.chart.data?.dataSet };
  }), B = o(() => {
    let t3 = (C2.chartContain?.dropInfo.height - 64) / (C2.chart.data?.pagination?.pageSize + 1);
    return (!t3 || t3 < 54.67) && (t3 = 54.67), t3;
  }), F = l(), G = { headerBGC: "#303030", oddRowBGC: "#141414", evenRowBGC: "#1D1D1D" }, b = { headerBGC: "#F0F0F0", oddRowBGC: "#FFFFFF", evenRowBGC: "#FAFAFA" };
  a(() => C2.chartContain?.dropInfo?.height, (t3) => {
    if (t3) {
      let e2 = (t3 - 64) / (F.getCurConfigComponent.chart.data?.pagination?.pageSize + 1);
      (!e2 || e2 < 54.67) && (e2 = 54.67), F.getCurConfigComponent.chart.options?.tableInfo?.scroll?.y && (F.getCurConfigComponent.chart.options.tableInfo.scroll.y = t3 - 64 - e2);
    }
  }), a(() => C2.chart?.data?.type, (t3) => {
    0 === t3 && (F.getCurConfigComponent.chart.data.pagination = { pageSize: F.getCurConfigComponent.chart.data?.pagination?.pageSize || 5 });
  });
  const R = o(() => F.getTheme === m.DARK ? G : b), x = o(() => C2.chart.options.headerBGC || R.value.headerBGC), S = o(() => C2.chart.options.evenRowBGC || R.value.evenRowBGC), I = o(() => C2.chart.options.oddRowBGC || R.value.oddRowBGC);
  function k(t3) {
    return { onClick: () => {
      g("rowClick", t3);
    } };
  }
  const y = o(() => {
    if (C2.chart?.events?.emits && C2.chart.events.emits.length > 0) {
      for (const t3 of C2.chart.events.emits) if ("rowClick" === t3) return "allow-pointer";
    }
  });
  return (t3, e2) => (r(), n(i(h), c({ class: [i(v), y.value] }, w.value, s(i(f)), { "row-class-name": (t4, e3) => e3 % 2 == 1 ? "even-table-striped" : "odd-table-striped", "custom-row": k }), null, 16, ["class", "row-class-name"]));
} });
export {
  C as default
};
