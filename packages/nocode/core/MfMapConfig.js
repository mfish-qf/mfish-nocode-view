import { defineComponent as o, ref as e, computed as t, watch as n, resolveComponent as i, createElementBlock as a, openBlock as r, normalizeClass as l, unref as p, createVNode as s, withCtx as u, Fragment as C, renderList as c, createTextVNode as g, createElementVNode as m, createBlock as h, createCommentVNode as f, renderSlot as d } from "vue";
import { S as v } from "./StyleConfig.js";
import { a as F, E as M } from "./EchartsBaseConfig.js";
import { u as y, d as _, M as k, _ as I, aq as S } from "./index.js";
import { useDesign as R } from "@mfish/core/hooks";
import { Checkbox as b } from "ant-design-vue";
import { cloneDeep as w } from "lodash-es";
import "@mfish/core/enums";
import { Icon as x } from "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
const B = I(o({ __name: "MfColorIntervalConfig", props: { themeColors: { type: Array, default: () => [] } }, setup(o2) {
  const d2 = o2, v2 = y(), { prefixCls: F2 } = R("color-interval-config"), M2 = e(false), I2 = t(() => v2.getCurComponent.chart.options.visualMap?.inRange?.color || []);
  function S2() {
    const o3 = v2.getCurComponent.chart.options.visualMap.inRange.color.length;
    d2.themeColors.length > o3 ? v2.getCurComponent.chart.options.visualMap.inRange.color.push(d2.themeColors[o3]) : v2.getCurComponent.chart.options.visualMap.inRange.color.push("#FF0000");
  }
  function B2() {
    v2.getCurComponent.chart.options.visualMap.show = M2.value;
  }
  return n(() => d2.themeColors, (o3) => {
    o3?.length > 0 && (v2.getCurComponent.chart.options.visualMap.inRange.color = w(o3));
  }), n(() => v2.getCurConfigComponent, (o3) => {
    o3 && void 0 !== v2.getCurConfigComponent.chart.options.visualMap?.show && (M2.value = v2.getCurConfigComponent.chart.options.visualMap?.show || false);
  }, { immediate: true }), (o3, e2) => {
    const t2 = i("AButton");
    return r(), a("div", { class: l(p(F2)) }, [s(_, { title: "颜色区间配置", "default-expand": true }, { action: u(() => [s(p(b), { checked: M2.value, "onUpdate:checked": e2[0] || (e2[0] = (o4) => M2.value = o4), onChange: B2 }, { default: u(() => [...e2[1] || (e2[1] = [g(" 显示颜色条 ", -1)])]), _: 1 }, 8, ["checked"])]), default: u(() => [(r(true), a(C, null, c(I2.value, (o4, t3) => (r(), a("div", { class: "title", key: t3 }, [e2[2] || (e2[2] = g(" 区间颜色 ", -1)), m("div", null, [s(p(k), { type: 1, placeholder: "设置区间颜色，格式#FFFFFF", value: o4, "hide-cancel": true, "hide-confirm": true, onInputChange: (o5) => (function(o6, e3) {
      v2.getCurComponent.chart.options.visualMap.inRange.color[e3] = o6 || "";
    })(o5, t3) }, null, 8, ["value", "onInputChange"])]), t3 > 0 ? (r(), h(p(x), { key: 0, class: "color-delete", icon: "ant-design:delete-outlined", onClick: (o5) => (function(o6) {
      v2.getCurComponent.chart.options.visualMap.inRange.color.splice(o6, 1);
    })(t3) }, null, 8, ["onClick"])) : f("", true)]))), 128)), s(t2, { onClick: S2 }, { icon: u(() => [s(p(x), { icon: "ant-design:plus-outlined" })]), default: u(() => [e2[3] || (e2[3] = g(" 添加区间颜色 ", -1))]), _: 1 })]), _: 1 })], 2);
  };
} }), [["__scopeId", "data-v-3f7afd24"]]), D = I(o({ __name: "MfMapConfig", emits: ["changeBorderColor"], setup(o2, { emit: t2 }) {
  const i2 = t2, a2 = y(), { prefixCls: C2 } = R("map-chart-config"), c2 = e(true), f2 = e(w(S[0].color)), _2 = e(), I2 = e();
  function x2() {
    a2.getCurConfigComponent.chart.options.tooltip = { ...a2.getCurConfigComponent.chart.options.tooltip, show: c2.value };
  }
  function D2(o3) {
    f2.value = w(o3.color);
  }
  function j(o3, e2) {
    A(o3, e2), _2.value = e2;
  }
  function A(o3, e2) {
    a2.getCurConfigComponent.chart.options.mapColor = e2;
  }
  function E(o3, e2) {
    U(o3, e2), I2.value = e2;
  }
  function U(o3, e2) {
    a2.getCurConfigComponent.chart.options.geo3D ? a2.getCurConfigComponent.chart.options.geo3D.itemStyle.borderColor = e2 : a2.getCurConfigComponent.chart.options.geo.itemStyle.borderColor = e2, i2("changeBorderColor", e2);
  }
  return n(() => a2.getCurConfigComponent, (o3) => {
    o3 && (function() {
      void 0 !== a2.getCurConfigComponent.chart.options?.mapColor && (_2.value = a2.getCurConfigComponent.chart.options.mapColor);
      void 0 !== a2.getCurConfigComponent.chart.options?.geo?.itemStyle?.borderColor && (I2.value = a2.getCurConfigComponent.chart.options.geo.itemStyle.borderColor);
      void 0 !== a2.getCurConfigComponent.chart.options.geo3D?.itemStyle?.borderColor && (I2.value = a2.getCurConfigComponent.chart.options.geo3D.itemStyle.borderColor);
      void 0 !== a2.getCurConfigComponent.chart.options.tooltip?.show && (c2.value = a2.getCurConfigComponent.chart.options.tooltip?.show || false);
    })();
  }, { immediate: true }), (o3, e2) => (r(), h(v, { class: l(p(C2)) }, { default: u(() => [s(F, { onThemeChange: D2, title: "标识颜色" }), e2[2] || (e2[2] = m("div", { class: "title" }, " 地图颜色 ", -1)), s(p(k), { placeholder: "设置地图颜色，格式#FFFFFF", type: 1, value: _2.value, onConfirmChange: j, onInputChange: A }, null, 8, ["value"]), e2[3] || (e2[3] = m("div", { class: "title" }, " 边线颜色 ", -1)), s(p(k), { placeholder: "设置地图边线颜色，格式#FFFFFF", type: 1, value: I2.value, onConfirmChange: E, onInputChange: U }, null, 8, ["value"]), s(M), s(p(b), { checked: c2.value, "onUpdate:checked": e2[0] || (e2[0] = (o4) => c2.value = o4), onChange: x2 }, { default: u(() => [...e2[1] || (e2[1] = [g(" 提示框", -1)])]), _: 1 }, 8, ["checked"]), d(o3.$slots, "default", {}, void 0, true), s(B, { "theme-colors": f2.value }, null, 8, ["theme-colors"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-5c260592"]]);
export {
  D as M
};
