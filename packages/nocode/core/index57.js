import { defineComponent as e, useCssVars as t, computed as a, ref as o, watch as l, createBlock as n, openBlock as r, unref as c, mergeProps as i, toHandlers as u } from "vue";
import { Select as s } from "ant-design-vue";
import { i as v, u as d, av as f } from "./index.js";
import { useDesign as h } from "@mfish/core/hooks";
import { ThemeEnum as p } from "@mfish/core/enums";
const m = e({ name: "MfSelect", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "7763483c": y.value, "3e2e4374": `${g.value}px`, "4d71b16e": I.value - 6 + "px", a382bd30: j.value, aa8c3c46: k.value, "499bc0f4": `${$.value}px`, aa8fdfda: q.value, "2db03784": z.value, "9f258c04": D.value }));
  const m2 = e2, { commonEvents: x, emitEvent: b } = v(m2.chart, void 0, ["selectChange"]), S = a(() => m2.chart.data?.dataSet?.map((e3) => ({ label: e3.label, value: e3.value || e3.label }))), y = a(() => m2.chartContain?.background || (E.getTheme === p.DARK ? "#141414" : "#ffffff")), g = a(() => m2.chartContain?.border?.radius || 4), C = a(() => m2.chart.options?.showSearch || false), w = a(() => m2.chart.options?.allowClear || false), j = a(() => m2.chart.options?.textStyle?.textColor), k = a(() => m2.chart.options?.textStyle?.font), $ = a(() => m2.chart.options?.textStyle?.fontSize || 14), q = a(() => m2.chart.options?.textStyle?.fontStyle?.bold ? "bold" : ""), z = a(() => m2.chart.options?.textStyle?.fontStyle?.italic ? "italic" : ""), D = a(() => m2.chart.options?.textStyle?.fontStyle?.underline ? "underline" : ""), E = d(), I = a(() => m2.chartContain?.dropInfo?.height), O = o(), { prefixCls: _ } = h("mf-select");
  function A(e3) {
    O.value = e3;
    const t2 = S.value.findIndex((t3) => t3.value === e3);
    if (-1 === t2) b("selectChange", e3);
    else {
      const e4 = f(m2.chart);
      e4?.length > t2 && b("selectChange", e4[t2]);
    }
  }
  return l(() => m2.chart?.data?.defaultValue, (e3) => {
    void 0 !== e3 && (O.value = e3);
  }, { immediate: true }), (e3, t2) => (r(), n(c(s), i({ class: c(_), value: O.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => O.value = e4), options: S.value, onChange: A }, u(c(x)), { bordered: false, "show-search": C.value, "allow-clear": w.value, "option-filter-prop": "label", "dropdown-style": { scale: c(E).getScale, color: j.value, fontFamily: k.value, fontSize: `${$.value}px`, fontWeight: q.value, fontStyle: z.value, textDecoration: D.value, background: y.value } }), null, 16, ["class", "value", "options", "show-search", "allow-clear", "dropdown-style"]));
} });
export {
  m as default
};
