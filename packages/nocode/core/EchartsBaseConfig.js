import { defineComponent as t, ref as e, watch as o, resolveComponent as n, createElementBlock as l, openBlock as i, normalizeClass as a, unref as u, createVNode as s, withCtx as r, createElementVNode as c, createTextVNode as p, Fragment as f, renderList as C, createBlock as g, toDisplayString as h, normalizeStyle as m, renderSlot as v } from "vue";
import { RadioGroup as d, Tooltip as y, RadioButton as x, Select as S, SelectOption as _ } from "ant-design-vue";
import { useDesign as b } from "@mfish/core/hooks";
import { u as k, h as z, T as U, ao as T, i as A, _ as F, ap as I } from "./index.js";
import "@vueuse/core";
import { Icon as w } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const E = { class: "title" }, W = { style: { display: "flex", gap: "6px" } }, B = F(t({ __name: "EchartsTitleConfig", setup(t2) {
  const g2 = k(), h2 = e({}), m2 = e({}), { prefixCls: v2 } = b("echarts-title-config"), S2 = [{ title: "左", value: "left", icon: "iconfont:icon-mfish-left-align" }, { title: "中", value: "center", icon: "iconfont:icon-mfish-horizontal-center" }, { title: "右", value: "right", icon: "iconfont:icon-mfish-right-align" }], _2 = [{ title: "上", value: "top", icon: "iconfont:icon-mfish-top-align" }, { title: "中", value: "middle", icon: "iconfont:icon-mfish-vertical-center" }, { title: "下", value: "bottom", icon: "iconfont:icon-mfish-bottom-align" }];
  function F2(t3) {
    g2.getCurConfigComponent.chart.options.title.left = t3.value, h2.value.hAlignType = t3.value, m2.value.hAlignType = t3.value;
  }
  function I2(t3) {
    var _a, _b;
    (_a = g2.getCurConfigComponent.chart.options.title.textStyle) == null ? true : delete _a.fontStyle, (_b = g2.getCurConfigComponent.chart.options.title.textStyle) == null ? true : delete _b.fontWeight, B2(t3);
  }
  function B2(t3) {
    g2.getCurConfigComponent.chart.options.title.textStyle = { ...g2.getCurConfigComponent.chart.options.title.textStyle, ...t3.style };
  }
  function H2(t3) {
    var _a, _b;
    (_a = g2.getCurConfigComponent.chart.options.title.subtextStyle) == null ? true : delete _a.fontStyle, (_b = g2.getCurConfigComponent.chart.options.title.subtextStyle) == null ? true : delete _b.fontWeight, j2(t3);
  }
  function j2(t3) {
    g2.getCurConfigComponent.chart.options.title.subtextStyle = { ...g2.getCurConfigComponent.chart.options.title.subtextStyle, ...t3.style };
  }
  function $2(t3) {
    g2.getCurConfigComponent.chart.options.title = { ...g2.getCurConfigComponent.chart.options.title, show: t3 };
  }
  return o(() => g2.getCurConfigComponent, (t3) => {
    t3 && function() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      h2.value = {};
      const t4 = (_c = (_b = (_a = g2.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.options) == null ? void 0 : _c.title;
      if (!t4) return;
      h2.value.font = (_d = t4 == null ? void 0 : t4.textStyle) == null ? void 0 : _d.fontFamily, h2.value.fontSize = (_f = (_e = t4 == null ? void 0 : t4.textStyle) == null ? void 0 : _e.fontSize) == null ? void 0 : _f.replace("px", ""), h2.value.textColor = (_g = t4 == null ? void 0 : t4.textStyle) == null ? void 0 : _g.color, h2.value.fontStyle = ((_h = t4 == null ? void 0 : t4.textStyle) == null ? void 0 : _h.fontStyle) ? { italic: true } : {}, h2.value.hAlignType = t4 == null ? void 0 : t4.left, m2.value = {}, m2.value.font = (_i = t4 == null ? void 0 : t4.subtextStyle) == null ? void 0 : _i.fontFamily, m2.value.fontSize = (_k = (_j = t4 == null ? void 0 : t4.subtextStyle) == null ? void 0 : _j.fontSize) == null ? void 0 : _k.replace("px", ""), m2.value.textColor = (_l = t4 == null ? void 0 : t4.subtextStyle) == null ? void 0 : _l.color;
      const e2 = ((_m = t4 == null ? void 0 : t4.subtextStyle) == null ? void 0 : _m.fontStyle) ? { italic: true } : {}, o2 = ((_n = t4 == null ? void 0 : t4.subtextStyle) == null ? void 0 : _n.fontWeight) ? { bold: true } : {};
      m2.value.fontStyle = { ...e2, ...o2 }, m2.value.hAlignType = t4 == null ? void 0 : t4.left;
    }();
  }, { immediate: true }), (t3, e2) => {
    var _a;
    const o2 = n("AInput");
    return i(), l("div", { class: a(u(v2)) }, [s(z, { title: "标题", "default-expand": false, "allow-check": true, "title-check": (_a = u(g2).getCurConfigComponent.chart.options.title) == null ? void 0 : _a.show, onChecked: $2 }, { default: r(() => [e2[7] || (e2[7] = c("div", { class: "title" }, " 主标题", -1)), s(o2, { value: u(g2).getCurConfigComponent.chart.options.title.text, "onUpdate:value": e2[0] || (e2[0] = (t4) => u(g2).getCurConfigComponent.chart.options.title.text = t4), "show-count": "", maxlength: 50 }, null, 8, ["value"]), s(u(U), { "hide-font-style": [u(T).Underline, u(T).Strikethrough, u(T).Bold], "hide-align": true, "color-type": 1, "text-style": h2.value, onFontChange: B2, onSizeChange: B2, onHAlignChange: F2, onFontStyleChange: I2, onColorChange: B2 }, null, 8, ["hide-font-style", "text-style"]), e2[8] || (e2[8] = c("div", { class: "title" }, " 副标题", -1)), s(o2, { value: u(g2).getCurConfigComponent.chart.options.title.subtext, "onUpdate:value": e2[1] || (e2[1] = (t4) => u(g2).getCurConfigComponent.chart.options.title.subtext = t4), "show-count": "", maxlength: 50 }, null, 8, ["value"]), s(u(U), { "hide-font-style": [u(T).Underline, u(T).Strikethrough], "hide-align": true, "color-type": 1, "text-style": m2.value, onFontChange: j2, onSizeChange: j2, onHAlignChange: F2, onFontStyleChange: H2, onColorChange: j2 }, null, 8, ["hide-font-style", "text-style"]), c("div", E, [e2[6] || (e2[6] = p(" 标题位置 ")), s(u(d), { size: "small", value: u(g2).getCurConfigComponent.chart.options.title.left, "onUpdate:value": e2[2] || (e2[2] = (t4) => u(g2).getCurConfigComponent.chart.options.title.left = t4) }, { default: r(() => [(i(), l(f, null, C(S2, (t4) => s(u(y), { key: t4.value, placement: "top", title: t4.title }, { default: r(() => [s(u(x), { class: "radio-button", value: t4.value }, { default: r(() => [s(u(w), { size: 12, icon: t4.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"])), 64))]), _: 1 }, 8, ["value"]), s(u(d), { size: "small", value: u(g2).getCurConfigComponent.chart.options.title.top, "onUpdate:value": e2[3] || (e2[3] = (t4) => u(g2).getCurConfigComponent.chart.options.title.top = t4) }, { default: r(() => [(i(), l(f, null, C(_2, (t4) => s(u(y), { key: t4.value, placement: "top", title: t4.title }, { default: r(() => [s(u(x), { class: "radio-button", value: t4.value }, { default: r(() => [s(u(w), { size: 12, icon: t4.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"])), 64))]), _: 1 }, 8, ["value"])]), c("div", W, [s(u(A), { prefix: "左", "is-number": false, placeholder: "数字或百分比", value: u(g2).getCurConfigComponent.chart.options.title.left, "onUpdate:value": e2[4] || (e2[4] = (t4) => u(g2).getCurConfigComponent.chart.options.title.left = t4) }, null, 8, ["value"]), s(u(A), { prefix: "上", "is-number": false, placeholder: "数字或百分比", value: u(g2).getCurConfigComponent.chart.options.title.top, "onUpdate:value": e2[5] || (e2[5] = (t4) => u(g2).getCurConfigComponent.chart.options.title.top = t4) }, null, 8, ["value"])])]), _: 1, __: [7, 8] }, 8, ["title-check"])], 2);
  };
} }), [["__scopeId", "data-v-73b5e00b"]]), H = { class: "color-contain" }, j = F(t({ __name: "EchartsThemeConfig", props: { color: { type: String, default: "默认" } }, emits: ["themeChange"], setup(t2, { emit: o2 }) {
  const n2 = o2, s2 = e(t2.color), { prefixCls: v2 } = b("echarts-theme-config");
  function d2() {
    const t3 = I.find((t4) => t4.name === s2.value);
    t3 && n2("themeChange", t3);
  }
  return (t3, e2) => (i(), g(u(S), { value: s2.value, "onUpdate:value": e2[0] || (e2[0] = (t4) => s2.value = t4), placeholder: "选择一个主题", onChange: d2 }, { default: r(() => [(i(true), l(f, null, C(u(I), (t4, e3) => (i(), g(u(_), { label: t4.name, value: t4.name, key: e3 }, { default: r(() => [c("div", { class: a(u(v2)) }, [p(h(t4.name) + " ", 1), c("div", H, [(i(true), l(f, null, C(t4.color, (t5) => (i(), l("div", { class: "color-box", style: m({ backgroundColor: t5 }), key: t5 }, null, 4))), 128))])], 2)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["value"]));
} }), [["__scopeId", "data-v-2778f8a0"]]), $ = F(t({ __name: "EchartsBaseConfig", emits: ["themeChange"], setup(t2, { emit: e2 }) {
  const o2 = e2, n2 = k(), { prefixCls: p2 } = b("echarts-base-config");
  function f2(t3) {
    n2.getCurConfigComponent.chart.options.themeColor = t3.name, n2.getCurConfigComponent.chart.options.color = t3.color, o2("themeChange", t3);
  }
  return (t3, e3) => (i(), l("div", { class: a(u(p2)) }, [s(z, { title: "基础配置" }, { default: r(() => [e3[0] || (e3[0] = c("div", { class: "title" }, " 主题", -1)), s(j, { color: u(n2).getCurConfigComponent.chart.options.themeColor, onThemeChange: f2 }, null, 8, ["color"]), v(t3.$slots, "default", {}, void 0, true)]), _: 3, __: [0] })], 2));
} }), [["__scopeId", "data-v-05e379d5"]]);
export {
  B as E,
  $ as a
};
