import { defineComponent as t, useCssVars as o, computed as a, watch as e, createBlock as n, openBlock as r, unref as i, mergeProps as c, toHandlers as p } from "vue";
import { l as s, u as d } from "./index.js";
import { Table as l } from "ant-design-vue";
import { useDesign as h } from "@mfish/core/hooks";
import { ThemeEnum as u } from "@mfish/core/enums";
import { cloneDeep as C } from "lodash-es";
const m = t({ __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  o((t3) => ({ "42a70f29": `${B.value}px`, "3990a42a": x.value, "0f71ca84": S.value, "09c0318d": I.value }));
  const m2 = t2, { commonEvents: g, emitEvent: f } = s(m2.chart, void 0, ["rowClick"]), { prefixCls: v } = h("mf-table"), w = a(() => {
    const t3 = C(m2.chart.options.tableInfo.columns);
    if (t3 && t3.length > 0) for (let o2 = 0; o2 < t3.length; o2++) t3[o2] = { ...t3[o2], ...m2.chart.options.columns[o2] }, m2.chart.options.index && 0 === o2 && (t3[o2].customRender = ({ index: t4 }) => `${(m2.chart.data.pagination.current ?? 0) * m2.chart.data.pagination.pageSize + t4 + 1}`);
    return { ...m2.chart.options.tableInfo, columns: t3, pagination: m2.chart.data?.pagination, dataSource: m2.chart.data?.dataSet };
  }), B = a(() => {
    let t3 = (m2.chartContain?.dropInfo.height - 64) / (m2.chart.data?.pagination?.pageSize + 1);
    return (!t3 || t3 < 54.67) && (t3 = 54.67), t3;
  }), F = d(), G = { headerBGC: "#303030", oddRowBGC: "#141414", evenRowBGC: "#1D1D1D" }, R = { headerBGC: "#F0F0F0", oddRowBGC: "#FFFFFF", evenRowBGC: "#FAFAFA" };
  e(() => m2.chartContain?.dropInfo?.height, (t3) => {
    if (t3) {
      let o2 = (t3 - 64) / (F.getCurConfigComponent.chart.data?.pagination?.pageSize + 1);
      (!o2 || o2 < 54.67) && (o2 = 54.67), F.getCurConfigComponent.chart.options?.tableInfo?.scroll?.y && (F.getCurConfigComponent.chart.options.tableInfo.scroll.y = t3 - 64 - o2);
    }
  }), e(() => m2.chart?.data?.type, (t3) => {
    0 === t3 && (F.getCurConfigComponent.chart.data.pagination = { pageSize: F.getCurConfigComponent.chart.data?.pagination?.pageSize || 5 });
  });
  const b = a(() => F.getTheme === u.DARK ? G : R), x = a(() => m2.chart.options.headerBGC || b.value.headerBGC), S = a(() => m2.chart.options.evenRowBGC || b.value.evenRowBGC), I = a(() => m2.chart.options.oddRowBGC || b.value.oddRowBGC);
  function y(t3) {
    return { onClick: () => {
      f("rowClick", t3);
    } };
  }
  return (t3, o2) => (r(), n(i(l), c({ class: i(v) }, w.value, p(i(g)), { "row-class-name": (t4, o3) => o3 % 2 == 1 ? "even-table-striped" : "odd-table-striped", "custom-row": y }), null, 16, ["class", "row-class-name"]));
} });
export {
  m as default
};
