import { defineComponent as e, watch as t, nextTick as o, ref as i, createElementBlock as n, openBlock as a, normalizeClass as l, unref as r, createVNode as s, withCtx as u, createCommentVNode as C, createElementVNode as p, createTextVNode as g, Fragment as c, renderList as v, toDisplayString as f, onMounted as h } from "vue";
import { u as m, h as d, _ } from "./index.js";
import { useDesign as k } from "@mfish/core/hooks";
import { RadioGroup as x, RadioButton as y } from "ant-design-vue";
import { cloneDeep as w } from "lodash-es";
const z = { key: 0, class: "title" }, P = { key: 1, class: "title" }, T = { class: "title" }, U = _(e({ __name: "EchartsTooltipConfig", props: { hideTrigger: { type: Boolean, default: false } }, setup(e2) {
  const { prefixCls: h2 } = k("echarts-tooltip-config"), _2 = m();
  t(() => _2.getCurConfigComponent, (e3) => {
    e3 && o(() => {
      var _a, _b;
      ((_b = (_a = _2.getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.axisPointer) == null ? void 0 : _b.type) && (U2.value = _2.getCurConfigComponent.chart.options.tooltip.axisPointer.type);
    });
  }, { immediate: true });
  const w2 = [{ title: "数据项图形触发", value: "item" }, { title: "坐标轴触发", value: "axis" }], U2 = i("line"), E2 = [{ title: "直线", value: "line" }, { title: "阴影", value: "shadow" }, { title: "十字", value: "cross" }, { title: "无", value: "none" }], b = [{ title: "值升序", value: "valueAsc" }, { title: "值降序", value: "valueDesc" }];
  function j(e3) {
    _2.getCurConfigComponent.chart.options.tooltip = { ..._2.getCurConfigComponent.chart.options.tooltip, show: e3 };
  }
  function A() {
    _2.getCurConfigComponent.chart.options.tooltip.axisPointer = { type: U2.value };
  }
  return (t2, o2) => {
    var _a;
    return a(), n("div", { class: l(r(h2)) }, [s(d, { title: "提示框", "default-expand": false, "allow-check": true, "title-check": (_a = r(_2).getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a.show, onChecked: j }, { default: u(() => {
      var _a2;
      return [e2.hideTrigger ? C("", true) : (a(), n("div", z, [o2[3] || (o2[3] = g(" 触发条件 ")), p("div", null, [s(r(x), { size: "small", value: r(_2).getCurConfigComponent.chart.options.tooltip.trigger, "onUpdate:value": o2[0] || (o2[0] = (e3) => r(_2).getCurConfigComponent.chart.options.tooltip.trigger = e3) }, { default: u(() => [(a(), n(c, null, v(w2, (e3) => s(r(y), { key: e3.value, value: e3.value }, { default: u(() => [g(f(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])])), "axis" === ((_a2 = r(_2).getCurConfigComponent.chart.options.tooltip) == null ? void 0 : _a2.trigger) ? (a(), n("div", P, [o2[4] || (o2[4] = g(" 指示器类型 ")), p("div", null, [s(r(x), { size: "small", value: U2.value, "onUpdate:value": o2[1] || (o2[1] = (e3) => U2.value = e3), onChange: A }, { default: u(() => [(a(), n(c, null, v(E2, (e3) => s(r(y), { key: e3.value, value: e3.value }, { default: u(() => [g(f(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])])) : C("", true), p("div", T, [o2[5] || (o2[5] = g(" 排序 ")), p("div", null, [s(r(x), { size: "small", value: r(_2).getCurConfigComponent.chart.options.tooltip.order, "onUpdate:value": o2[2] || (o2[2] = (e3) => r(_2).getCurConfigComponent.chart.options.tooltip.order = e3) }, { default: u(() => [(a(), n(c, null, v(b, (e3) => s(r(y), { key: e3.value, value: e3.value }, { default: u(() => [g(f(e3.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])])];
    }), _: 1 }, 8, ["title-check"])], 2);
  };
} }), [["__scopeId", "data-v-818b630c"]]);
function E() {
  const e2 = m();
  return h(() => {
    e2.getCurConfigComponent.chart.options.seriesCache || (e2.getCurConfigComponent.chart.options.seriesCache = w(e2.getCurConfigComponent.chart.options.series));
  }), { seriesChange: function(t2, o2) {
    e2.getCurConfigComponent.chart.options.series[o2] && (e2.getCurConfigComponent.chart.options.series[o2] = t2), e2.getCurConfigComponent.chart.options.seriesCache && e2.getCurConfigComponent.chart.options.seriesCache[o2] ? e2.getCurConfigComponent.chart.options.seriesCache[o2] = w(t2) : e2.getCurConfigComponent.chart.options.seriesCache = w(e2.getCurConfigComponent.chart.options.series);
  } };
}
export {
  U as E,
  E as u
};
