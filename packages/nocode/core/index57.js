import { defineComponent as e, useCssVars as t, computed as a, ref as l, watch as o, createBlock as n, openBlock as r, unref as c, mergeProps as i, toHandlers as u } from "vue";
import { Select as s } from "ant-design-vue";
import { l as f, u as h, av as v } from "./index.js";
import { useDesign as d } from "@mfish/core/hooks";
import { ThemeEnum as p } from "@mfish/core/enums";
const m = e({ name: "MfSelect", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "03748246": y.value, "5c9fd9fc": `${g.value}px`, "4f36f824": I.value - 6 + "px", ed0e03c4: j.value, "0299eb67": k.value, "4b6107aa": `${$.value}px`, "0298199d": q.value, "6da89970": z.value, e8b0d298: D.value }));
  const m2 = e2, { commonEvents: x, emitEvent: S } = f(m2.chart, void 0, ["selectChange"]), b = a(() => m2.chart.data?.dataSet?.map((e3) => ({ label: e3.label, value: e3.value || e3.label }))), y = a(() => m2.chartContain?.background || (E.getTheme === p.DARK ? "#141414" : "#ffffff")), g = a(() => m2.chartContain?.border?.radius || 4), C = a(() => m2.chart.options?.showSearch || false), w = a(() => m2.chart.options?.allowClear || false), j = a(() => m2.chart.options?.textStyle?.textColor), k = a(() => m2.chart.options?.textStyle?.font), $ = a(() => m2.chart.options?.textStyle?.fontSize || 14), q = a(() => m2.chart.options?.textStyle?.fontStyle?.bold ? "bold" : ""), z = a(() => m2.chart.options?.textStyle?.fontStyle?.italic ? "italic" : ""), D = a(() => m2.chart.options?.textStyle?.fontStyle?.underline ? "underline" : ""), E = h(), I = a(() => m2.chartContain?.dropInfo?.height), O = l(), { prefixCls: V } = d("mf-select");
  function _(e3) {
    O.value = e3;
    const t2 = b.value.findIndex((t3) => t3.value === e3);
    if (-1 === t2) S("selectChange", e3);
    else {
      const e4 = v(m2.chart);
      e4?.length > t2 && S("selectChange", e4[t2]);
    }
  }
  return o(() => m2.chart?.options?.defaultValue, (e3) => {
    e3 && (O.value = e3, m2.chart.data.currentValue = e3);
  }, { immediate: true }), (e3, t2) => (r(), n(c(s), i({ class: c(V), value: O.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => O.value = e4), options: b.value, onChange: _ }, u(c(x)), { bordered: false, "show-search": C.value, "allow-clear": w.value, "option-filter-prop": "label", "dropdown-style": { scale: c(E).getScale, color: j.value, fontFamily: k.value, fontSize: `${$.value}px`, fontWeight: q.value, fontStyle: z.value, textDecoration: D.value, background: y.value } }), null, 16, ["class", "value", "options", "show-search", "allow-clear", "dropdown-style"]));
} });
export {
  m as default
};
