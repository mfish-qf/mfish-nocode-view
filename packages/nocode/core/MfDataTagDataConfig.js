import { defineComponent as t, computed as a, resolveComponent as e, createBlock as n, openBlock as o, normalizeClass as i, unref as l, withCtx as s, createElementVNode as c, createVNode as r, renderSlot as d } from "vue";
import { D as g, a as C } from "./DragInData.js";
import { IconPicker as f } from "@mfish/core/components/Icon";
import { useDesign as u } from "@mfish/core/hooks";
import { u as h, j as m, k as p, _ as v } from "./index.js";
const D = v(t({ __name: "MfDataTagDataConfig", setup(t2) {
  const v2 = h(), { setFields: D2, deleteFields: x, getFields: _, setDataTable: I } = m(), { clearTitle: S, clearIcon: j } = p();
  function F(t3) {
    v2.getCurConfigComponent.chart.data.dataSet.icon = t3;
  }
  const { prefixCls: T } = u("tag-data-config"), k = a(() => v2.getCurConfigComponent.chart.data.fields ? v2.getCurConfigComponent.chart.data.fields?.title ?? [] : []), b = a(() => v2.getCurConfigComponent.chart.data.fields ? v2.getCurConfigComponent.chart.data.fields?.icon ?? [] : []);
  function w() {
    const t3 = _("title"), a2 = _("icon");
    t3 && t3.length > 0 || a2 && a2.length > 0 ? I() : (S(v2.getCurConfigComponent.chart), j(v2.getCurConfigComponent.chart));
  }
  function A(t3) {
    t3.length > 0 ? (D2("title", t3), I()) : (x("title"), S(v2.getCurConfigComponent.chart));
  }
  function M(t3) {
    t3.length > 0 ? (D2("icon", t3), I()) : (x("icon"), j(v2.getCurConfigComponent.chart));
  }
  return (t3, a2) => {
    const u2 = e("AInput");
    return o(), n(g, { class: i(l(T)), onRefreshData: w }, { "data-select": s(() => [d(t3.$slots, "data-select", {}, void 0, true)]), "static-data": s(() => [a2[1] || (a2[1] = c("div", { class: "title" }, "标签内容", -1)), r(u2, { value: l(v2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": a2[0] || (a2[0] = (t4) => l(v2).getCurConfigComponent.chart.data.dataSet.title = t4), "show-count": "", maxlength: 50 }, null, 8, ["value"]), a2[2] || (a2[2] = c("div", { class: "title" }, "图标", -1)), r(l(f), { value: l(v2).getCurConfigComponent.chart.data.dataSet.icon, onChange: F }, null, 8, ["value"])]), "target-data": s(() => [a2[3] || (a2[3] = c("div", { class: "title" }, "标签内容", -1)), r(C, { "max-count": 1, height: 150, onDataChange: A, fields: k.value }, null, 8, ["fields"]), a2[4] || (a2[4] = c("div", { class: "title" }, "图标", -1)), r(C, { "max-count": 1, height: 150, onDataChange: M, fields: b.value }, null, 8, ["fields"])]), _: 3 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-e8ed5d65"]]);
export {
  D as default
};
