import { defineComponent as e, ref as o, watch as t, createBlock as a, openBlock as s, normalizeClass as r, unref as i, withCtx as n, createVNode as p, createElementVNode as C, createElementBlock as l, createCommentVNode as c, createTextVNode as m } from "vue";
import { S as f } from "./StyleConfig.js";
import { a as g, E as u } from "./EchartsBaseConfig.js";
import { u as h, E as d } from "./UseEchartsSeriesConfig.js";
import { u as v, _ as y } from "./index.js";
import { E as S } from "./EchartsSeriesLabelConfig.js";
import { Checkbox as _, Slider as E } from "ant-design-vue";
import { useDesign as j } from "@mfish/core/hooks";
const k = { class: "title" }, b = { key: 0, class: "title" }, x = y(e({ __name: "MfRadarConfig", setup(e2) {
  const y2 = v(), { seriesChange: x2 } = h(), U = o(false), { prefixCls: L } = j("radar-chart-config");
  function B() {
    var _a;
    U.value ? y2.getCurConfigComponent.chart.options.series[0].areaStyle = { ...y2.getCurConfigComponent.chart.options.series[0].areaStyle, opacity: 0.3 } : (_a = y2.getCurConfigComponent.chart.options.series[0]) == null ? true : delete _a.areaStyle;
  }
  return t(() => y2.getCurConfigComponent, (e3) => {
    var _a;
    U.value = !(!e3 || !((_a = y2.getCurConfigComponent.chart.options.series[0]) == null ? void 0 : _a.areaStyle));
  }, { immediate: true }), (e3, o2) => (s(), a(f, { class: r(i(L)) }, { default: n(() => {
    var _a;
    return [p(g), p(u), p(d, { "hide-trigger": true }), p(S, { series: (_a = i(y2).getCurConfigComponent.chart.options) == null ? void 0 : _a.series[0], onLabelChange: o2[0] || (o2[0] = (e4) => i(x2)(e4, 0)) }, null, 8, ["series"]), C("div", k, [p(i(_), { checked: U.value, "onUpdate:checked": o2[1] || (o2[1] = (e4) => U.value = e4), onChange: B }, { default: n(() => o2[3] || (o2[3] = [m(" 区域设置")])), _: 1 }, 8, ["checked"]), U.value ? (s(), l("div", b, [o2[4] || (o2[4] = m(" 透明度 ")), p(i(E), { value: i(y2).getCurConfigComponent.chart.options.series[0].areaStyle.opacity, "onUpdate:value": o2[2] || (o2[2] = (e4) => i(y2).getCurConfigComponent.chart.options.series[0].areaStyle.opacity = e4), min: 0, max: 1, step: 0.1 }, null, 8, ["value"])])) : c("", true)])];
  }), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-8bb17531"]]);
export {
  x as default
};
