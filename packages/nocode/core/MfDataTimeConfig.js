import { defineComponent as e, ref as a, openBlock as t, createElementBlock as o, normalizeClass as l, unref as i, createVNode as s, withCtx as u, createElementVNode as m, createTextVNode as n, Fragment as f, renderList as r, toDisplayString as v } from "vue";
import d from "./MfTagConfig.js";
import { useDesign as p } from "@mfish/core/hooks";
import { RadioGroup as c, RadioButton as g } from "ant-design-vue";
import { u as Y, _ } from "./index.js";
const C = { class: "title" }, H = _(e({ __name: "MfDataTimeConfig", setup(e2) {
  const { prefixCls: _2 } = p("date-time-config"), H2 = a("YYYY-MM-DD HH:mm:ss"), M = [{ title: "日期时间", value: "YYYY-MM-DD HH:mm:ss" }, { title: "时间", value: "HH:mm:ss" }], h = Y();
  function D() {
    h.getCurConfigComponent.chart.options.format = H2.value;
  }
  return (e3, a2) => (t(), o("div", { class: l(i(_2)) }, [s(d, { "hide-title": true }, { default: u(() => [m("div", C, [a2[1] || (a2[1] = n(" 时间格式 ", -1)), s(i(c), { size: "small", value: H2.value, "onUpdate:value": a2[0] || (a2[0] = (e4) => H2.value = e4), onChange: D }, { default: u(() => [(t(), o(f, null, r(M, (e4) => s(i(g), { key: e4.value, value: e4.value }, { default: u(() => [n(v(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-93ac9c5a"]]);
export {
  H as default
};
