import { defineComponent as t, useCssVars as e, computed as o, watch as a, openBlock as n, createBlock as r, unref as i, mergeProps as c, toHandlers as s } from "vue";
import { i as p, u as h } from "./index.js";
import { Table as l } from "ant-design-vue";
import { useDesign as d } from "@mfish/core/hooks";
import { ThemeEnum as C } from "@mfish/core/enums";
import { cloneDeep as u } from "lodash-es";
const m = t({ __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  e((t3) => ({ v4154c2aa: `${B.value}px`, v2e17cad6: `${G.value}px`, b80977ae: S.value, v2a3d7818: k.value, v6720fc06: z.value, v6af8706a: I.value }));
  const m2 = t2, { commonEvents: v, emitEvent: g } = p(m2.chart, void 0, ["rowClick"]), { prefixCls: f } = d("mf-table"), w = o(() => {
    const t3 = u(m2.chart.options.tableInfo.columns);
    if (t3 && t3.length > 0) for (let e2 = 0; e2 < t3.length; e2++) t3[e2] = { ...t3[e2], ...m2.chart.options.columns[e2] }, m2.chart.options.index && 0 === e2 && (t3[e2].customRender = ({ index: t4 }) => `${((m2.chart.data.pagination.current || 1) - 1) * m2.chart.data.pagination.pageSize + t4 + 1}`);
    return { ...m2.chart.options.tableInfo, columns: t3, pagination: m2.chart.data?.pagination, dataSource: m2.chart.data?.dataSet };
  }), B = o(() => {
    let t3 = (m2.chartContain?.dropInfo.height - 64) / (m2.chart.data?.pagination?.pageSize + 1);
    return (!t3 || t3 < 54.67) && (t3 = 54.67), t3;
  }), G = o(() => m2.chart.options.headerHeight || 54.67), F = h(), R = { headerBGC: "#303030", oddRowBGC: "#141414", evenRowBGC: "#1D1D1D", hoverRowBGC: "#101010" }, b = { headerBGC: "#F0F0F0", oddRowBGC: "#FFFFFF", evenRowBGC: "#FAFAFA", hoverRowBGC: "#FCFCFC" };
  a(() => m2.chartContain?.dropInfo?.height, (t3) => {
    if (t3) {
      let e2 = (t3 - 64) / (F.getCurConfigComponent.chart.data?.pagination?.pageSize + 1);
      (!e2 || e2 < 54.67) && (e2 = 54.67);
      const o2 = t3 - 64 - e2;
      m2.chart.data?.pagination?.pageSize * e2 > o2 ? F.getCurConfigComponent.chart.options.tableInfo.scroll.y = o2 : delete F.getCurConfigComponent.chart.options.tableInfo.scroll.y;
    }
  }), a(() => m2.chart?.data?.type, (t3) => {
    0 === t3 && (F.getCurConfigComponent.chart.data.pagination = { pageSize: F.getCurConfigComponent.chart.data?.pagination?.pageSize || 5 });
  });
  const x = o(() => F.getTheme === C.DARK ? R : b), S = o(() => m2.chart.options.headerBGC || x.value.headerBGC), z = o(() => m2.chart.options.evenRowBGC || x.value.evenRowBGC), I = o(() => m2.chart.options.oddRowBGC || x.value.oddRowBGC), k = o(() => m2.chart.options.hoverRowBGC || x.value.hoverRowBGC);
  function y(t3) {
    return { onClick: () => {
      g("rowClick", t3);
    } };
  }
  const A = o(() => {
    if (m2.chart?.events?.emits && m2.chart.events.emits.length > 0) {
      for (const t3 of m2.chart.events.emits) if ("rowClick" === t3) return "allow-pointer";
    }
  });
  return (t3, e2) => (n(), r(i(l), c({ class: [i(f), A.value] }, w.value, s(i(v)), { "row-class-name": (t4, e3) => e3 % 2 == 1 ? "even-table-striped" : "odd-table-striped", "custom-row": y }), null, 16, ["class", "row-class-name"]));
} });
export {
  m as default
};
