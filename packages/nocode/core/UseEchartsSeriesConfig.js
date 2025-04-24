import { defineComponent as t, watch as e, nextTick as o, ref as i, createElementBlock as n, openBlock as a, normalizeClass as l, unref as r, createVNode as s, withCtx as u, createCommentVNode as C, createElementVNode as p, createTextVNode as g, Fragment as c, renderList as f, toDisplayString as v, onMounted as h } from "vue";
import { C as m } from "./ConfigGroup.js";
import { useDesign as d } from "@mfish/core/hooks";
import { u as _, _ as k } from "./index.js";
import { RadioGroup as x, RadioButton as y } from "ant-design-vue";
import { cloneDeep as w } from "lodash-es";
const z = { key: 0, class: "title" }, P = { key: 1, class: "title" }, T = { class: "title" }, U = k(t({ __name: "EchartsTooltipConfig", props: { hideTrigger: { type: Boolean, default: false } }, setup(t2) {
  const { prefixCls: h2 } = d("echarts-tooltip-config"), k2 = _();
  e(() => k2.getCurConfigComponent, (t3) => {
    t3 && o(() => {
      var _a, _b;
      ((_b = (_a = k2.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.axisPointer) == null ? void 0 : _b.type) && (U2.value = k2.getCurConfigComponent.chart.options.tooltip.axisPointer.type);
    });
  }, { immediate: true });
  const w2 = [{ title: "数据项图形触发", value: "item" }, { title: "坐标轴触发", value: "axis" }], U2 = i("line"), j2 = [{ title: "直线", value: "line" }, { title: "阴影", value: "shadow" }, { title: "十字", value: "cross" }, { title: "无", value: "none" }], E = [{ title: "值升序", value: "valueAsc" }, { title: "值降序", value: "valueDesc" }];
  function b(t3) {
    k2.getCurConfigComponent.chart.options.tooltip = { ...k2.getCurConfigComponent.chart.options.tooltip, show: t3 };
  }
  function A() {
    k2.getCurConfigComponent.chart.options.tooltip.axisPointer = { type: U2.value };
  }
  return (e2, o2) => {
    var _a;
    return a(), n("div", { class: l(r(h2)) }, [s(m, { title: "提示框", "default-expand": false, "allow-check": true, "title-check": (_a = r(k2).getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.show, onChecked: b }, { default: u(() => {
      var _a2;
      return [t2.hideTrigger ? C("", true) : (a(), n("div", z, [o2[3] || (o2[3] = g(" 触发条件 ")), p("div", null, [s(r(x), { size: "small", value: r(k2).getCurConfigComponent.chart.options.tooltip.trigger, "onUpdate:value": o2[0] || (o2[0] = (t3) => r(k2).getCurConfigComponent.chart.options.tooltip.trigger = t3) }, { default: u(() => [(a(), n(c, null, f(w2, (t3) => s(r(y), { key: t3.value, value: t3.value }, { default: u(() => [g(v(t3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])])), "axis" === ((_a2 = r(k2).getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a2.trigger) ? (a(), n("div", P, [o2[4] || (o2[4] = g(" 指示器类型 ")), p("div", null, [s(r(x), { size: "small", value: U2.value, "onUpdate:value": o2[1] || (o2[1] = (t3) => U2.value = t3), onChange: A }, { default: u(() => [(a(), n(c, null, f(j2, (t3) => s(r(y), { key: t3.value, value: t3.value }, { default: u(() => [g(v(t3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])])) : C("", true), p("div", T, [o2[5] || (o2[5] = g(" 排序 ")), p("div", null, [s(r(x), { size: "small", value: r(k2).getCurConfigComponent.chart.options.tooltip.order, "onUpdate:value": o2[2] || (o2[2] = (t3) => r(k2).getCurConfigComponent.chart.options.tooltip.order = t3) }, { default: u(() => [(a(), n(c, null, f(E, (t3) => s(r(y), { key: t3.value, value: t3.value }, { default: u(() => [g(v(t3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])])];
    }), _: 1 }, 8, ["title-check"])], 2);
  };
} }), [["__scopeId", "data-v-818b630c"]]);
function j() {
  const t2 = _();
  return h(() => {
    t2.getCurConfigComponent.chart.options.seriesCache || (t2.getCurConfigComponent.chart.options.seriesCache = w(t2.getCurConfigComponent.chart.options.series));
  }), { seriesChange: function(e2, o2) {
    t2.getCurConfigComponent.chart.options.series[o2] && (t2.getCurConfigComponent.chart.options.series[o2] = e2), t2.getCurConfigComponent.chart.options.seriesCache && t2.getCurConfigComponent.chart.options.seriesCache[o2] ? t2.getCurConfigComponent.chart.options.seriesCache[o2] = w(e2) : t2.getCurConfigComponent.chart.options.seriesCache = w(t2.getCurConfigComponent.chart.options.series);
  } };
}
export {
  U as E,
  j as u
};
