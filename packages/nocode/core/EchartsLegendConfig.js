import { defineComponent as e, ref as t, watch as l, resolveComponent as n, createElementBlock as o, openBlock as i, normalizeClass as a, unref as u, createVNode as r, withCtx as g, createElementVNode as c, createTextVNode as s, Fragment as p, renderList as d, toDisplayString as f } from "vue";
import { u as C, d as v, e as m, T as h, ap as y, J as _, _ as x } from "./index.js";
import { RadioGroup as k, RadioButton as S, Tooltip as z } from "ant-design-vue";
import { useDesign as U } from "@mfish/core/hooks";
import { Icon as b } from "@mfish/core/components/Icon";
import "@vueuse/core";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const I = { class: "title" }, w = { class: "title" }, A = { class: "title" }, F = { class: "title" }, H = { style: { display: "flex", gap: "6px" } }, L = { class: "title" }, E = x(e({ __name: "EchartsLegendConfig", setup(e2) {
  const x2 = C(), { prefixCls: E2 } = U("echarts-legend-config"), M = [{ title: "普通图例", value: "plain" }, { title: "滚动图例", value: "scroll" }], T = [{ title: "横向", value: "horizontal" }, { title: "竖向", value: "vertical" }], W = [{ title: "左", value: "left", icon: "iconfont:icon-mfish-left-align" }, { title: "中", value: "center", icon: "iconfont:icon-mfish-horizontal-center" }, { title: "右", value: "right", icon: "iconfont:icon-mfish-right-align" }], j = [{ title: "上", value: "top", icon: "iconfont:icon-mfish-top-align" }, { title: "中", value: "middle", icon: "iconfont:icon-mfish-vertical-center" }, { title: "下", value: "bottom", icon: "iconfont:icon-mfish-bottom-align" }], J = [{ title: "多选", value: "multiple" }, { title: "单选", value: "single" }, { title: "不可选", value: false }], q = [{ title: "默认", value: "" }, { title: "圆形", value: "circle" }, { title: "方形", value: "rect" }, { title: "三角形", value: "triangle" }, { title: "菱形", value: "diamond" }, { title: "无", value: "none" }], B = t({});
  function D(e3) {
    x2.getCurConfigComponent.chart.options.legend.left = e3.value;
  }
  function G(e3) {
    delete x2.getCurConfigComponent.chart.options.legend.textStyle?.fontStyle, delete x2.getCurConfigComponent.chart.options.legend.textStyle?.fontWeight, K(e3);
  }
  function K(e3) {
    x2.getCurConfigComponent.chart.options.legend.textStyle = { ...x2.getCurConfigComponent.chart.options.legend.textStyle, ...e3.style };
  }
  function N(e3) {
    x2.getCurConfigComponent.chart.options.legend = { ...x2.getCurConfigComponent.chart.options.legend, show: e3 };
  }
  return l(() => x2.getCurConfigComponent, (e3) => {
    e3 && function() {
      B.value = {};
      const e4 = x2.getCurConfigComponent?.chart?.options;
      if (!e4) return;
      B.value.font = e4.legend?.textStyle?.fontFamily, B.value.fontSize = e4.legend?.textStyle?.fontSize?.replace("px", ""), B.value.textColor = e4.legend?.textStyle?.color;
      const t2 = e4.legend?.textStyle?.fontStyle ? { italic: true } : {}, l2 = e4.legend?.textStyle?.fontWeight ? { bold: true } : {};
      B.value.fontStyle = { ...t2, ...l2 }, B.value.hAlignType = e4.legend?.left;
    }();
  }, { immediate: true }), (e3, t2) => {
    const l2 = n("AInput");
    return i(), o("div", { class: a(u(E2)) }, [r(v, { title: "图例配置", "default-expand": false, "allow-check": true, "title-check": u(x2).getCurConfigComponent.chart.options.legend?.show, onChecked: N }, { default: g(() => [c("div", I, [t2[10] || (t2[10] = s(" 图例类型 ")), c("div", null, [r(u(k), { size: "small", value: u(x2).getCurConfigComponent.chart.options.legend.type, "onUpdate:value": t2[0] || (t2[0] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.type = e4) }, { default: g(() => [(i(), o(p, null, d(M, (e4) => r(u(S), { key: e4.value, value: e4.value }, { default: g(() => [s(f(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])]), c("div", w, [t2[11] || (t2[11] = s(" 图例方向 ")), c("div", null, [r(u(k), { size: "small", value: u(x2).getCurConfigComponent.chart.options.legend.orient, "onUpdate:value": t2[1] || (t2[1] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.orient = e4) }, { default: g(() => [(i(), o(p, null, d(T, (e4) => r(u(S), { key: e4.value, value: e4.value }, { default: g(() => [s(f(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])]), c("div", A, [t2[12] || (t2[12] = s(" 选择模式 ")), c("div", null, [r(u(k), { size: "small", value: u(x2).getCurConfigComponent.chart.options.legend.selectedMode, "onUpdate:value": t2[2] || (t2[2] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.selectedMode = e4) }, { default: g(() => [(i(), o(p, null, d(J, (e4, t3) => r(u(S), { key: t3, value: e4.value }, { default: g(() => [s(f(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])])]), c("div", F, [t2[13] || (t2[13] = s(" 图例位置 ")), r(u(k), { size: "small", value: u(x2).getCurConfigComponent.chart.options.legend.left, "onUpdate:value": t2[3] || (t2[3] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.left = e4) }, { default: g(() => [(i(), o(p, null, d(W, (e4) => r(u(z), { key: e4.value, placement: "top", title: e4.title }, { default: g(() => [r(u(S), { class: "radio-button", value: e4.value }, { default: g(() => [r(u(b), { size: 12, icon: e4.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"])), 64))]), _: 1 }, 8, ["value"]), r(u(k), { size: "small", value: u(x2).getCurConfigComponent.chart.options.legend.top, "onUpdate:value": t2[4] || (t2[4] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.top = e4) }, { default: g(() => [(i(), o(p, null, d(j, (e4) => r(u(z), { key: e4.value, placement: "top", title: e4.title }, { default: g(() => [r(u(S), { class: "radio-button", value: e4.value }, { default: g(() => [r(u(b), { size: 12, icon: e4.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"])), 64))]), _: 1 }, 8, ["value"])]), c("div", H, [r(u(m), { prefix: "左", "is-number": false, placeholder: "数字或百分比", value: u(x2).getCurConfigComponent.chart.options.legend.left, "onUpdate:value": t2[5] || (t2[5] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.left = e4) }, null, 8, ["value"]), r(u(m), { prefix: "上", "is-number": false, placeholder: "数字或百分比", value: u(x2).getCurConfigComponent.chart.options.legend.top, "onUpdate:value": t2[6] || (t2[6] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.top = e4) }, null, 8, ["value"])]), t2[15] || (t2[15] = c("div", { class: "title" }, " 图例形状", -1)), r(u(k), { size: "small", value: u(x2).getCurConfigComponent.chart.options.legend.icon, "onUpdate:value": t2[7] || (t2[7] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.icon = e4) }, { default: g(() => [(i(), o(p, null, d(q, (e4) => r(u(S), { key: e4.value, value: e4.value }, { default: g(() => [s(f(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"]), t2[16] || (t2[16] = c("div", { class: "title" }, " 图例字体", -1)), r(u(h), { "hide-font-style": [u(y).Underline, u(y).Strikethrough], "hide-align": true, "color-type": 1, "text-style": B.value, onFontChange: K, onSizeChange: K, onHAlignChange: D, onFontStyleChange: G, onColorChange: K }, null, 8, ["hide-font-style", "text-style"]), c("div", L, [t2[14] || (t2[14] = s(" 图例格式 ")), c("div", null, [r(l2, { value: u(x2).getCurConfigComponent.chart.options.legend.formatter, "onUpdate:value": t2[8] || (t2[8] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.formatter = e4), placeholder: "格式****{name} 详情参考echarts formatter属性" }, null, 8, ["value"])])]), r(u(_), { checked: u(x2).getCurConfigComponent.chart.options.legend.legendHoverLink, "onUpdate:checked": t2[9] || (t2[9] = (e4) => u(x2).getCurConfigComponent.chart.options.legend.legendHoverLink = e4), title: "联动高亮", tooltip: "鼠标移动到图例时高亮对应图形" }, null, 8, ["checked"])]), _: 1, __: [15, 16] }, 8, ["title-check"])], 2);
  };
} }), [["__scopeId", "data-v-205af048"]]);
export {
  E
};
