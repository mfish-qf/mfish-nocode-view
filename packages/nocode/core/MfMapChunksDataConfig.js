import { defineComponent as t, computed as a, createBlock as e, openBlock as n, normalizeClass as o, unref as s, withCtx as i, createElementVNode as r, createVNode as l, renderSlot as d } from "vue";
import { D as f, a as c } from "./DragInData.js";
import { useDesign as u } from "@mfish/core/hooks";
import { u as C, j as g, as as m, _ as h } from "./index.js";
import { J as p } from "./JsonData.js";
const D = h(t({ __name: "MfMapChunksDataConfig", setup(t2) {
  const h2 = C(), { setFields: D2, deleteFields: v, getFields: _, setDataTable: x } = g(), { prefixCls: S } = u("map-chunks-data-config"), { resetDefault: j } = m(), k = a(() => h2.getCurConfigComponent.chart.data.fields ? h2.getCurConfigComponent.chart.data.fields?.name ?? [] : []), F = a(() => h2.getCurConfigComponent.chart.data.fields ? h2.getCurConfigComponent.chart.data.fields?.value ?? [] : []), J = a(() => h2.getCurConfigComponent.chart.data.dataSet?.source ? JSON.stringify(h2.getCurConfigComponent.chart.data.dataSet.source) : "");
  function b() {
    const t3 = _("name");
    t3 && t3.length > 0 ? x() : j(h2.getCurConfigComponent.chart);
  }
  const I = (t3, a2) => {
    a2?.length > 0 ? D2(t3, a2) : v(t3), b();
  };
  function M(t3) {
    I("name", t3);
  }
  function y(t3) {
    I("value", t3);
  }
  function N(t3) {
    t3 ? h2.getCurConfigComponent.chart.data.dataSet.source = t3 : delete h2.getCurConfigComponent.chart.data.dataSet?.source;
  }
  return (t3, a2) => (n(), e(f, { class: o(s(S)), onRefreshData: b }, { "data-select": i(() => [d(t3.$slots, "data-select", {}, void 0, true)]), "static-data": i(() => [l(p, { title: "地图数据", data: J.value, onDataChange: N }, null, 8, ["data"])]), "target-data": i(() => [a2[0] || (a2[0] = r("div", { class: "title" }, "区域", -1)), l(c, { "max-count": 1, height: 100, onDataChange: M, fields: k.value }, null, 8, ["fields"]), a2[1] || (a2[1] = r("div", { class: "title" }, "数据值", -1)), l(c, { "max-count": 1, height: 100, onDataChange: y, fields: F.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-474efcab"]]);
export {
  D as default
};
