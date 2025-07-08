import { defineComponent as o, ref as e, computed as n, watch as t, resolveComponent as a, createElementBlock as i, openBlock as l, normalizeClass as s, unref as r, createVNode as c, withCtx as p, Fragment as u, renderList as C, createTextVNode as h, createElementVNode as m, createBlock as f, createCommentVNode as g, renderSlot as d } from "vue";
import { S as v } from "./StyleConfig.js";
import { a as _, E as M } from "./EchartsBaseConfig.js";
import { u as k, h as F, M as I, _ as R, ap as w } from "./index.js";
import { useDesign as y } from "@mfish/core/hooks";
import { Checkbox as x } from "ant-design-vue";
import { cloneDeep as j } from "lodash-es";
import "@mfish/core/enums";
import { Icon as A } from "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
const B = R(o({ __name: "MfColorIntervalConfig", props: { themeColors: { type: Array, default: () => [] } }, setup(o2) {
  const d2 = o2, v2 = k(), { prefixCls: _2 } = y("color-interval-config"), M2 = e(false), R2 = n(() => v2.getCurComponent.chart.options.visualMap?.inRange?.color || []);
  function w2() {
    const o3 = v2.getCurComponent.chart.options.visualMap.inRange.color.length;
    d2.themeColors.length > o3 ? v2.getCurComponent.chart.options.visualMap.inRange.color.push(d2.themeColors[o3]) : v2.getCurComponent.chart.options.visualMap.inRange.color.push("#FF0000");
  }
  function B2() {
    v2.getCurComponent.chart.options.visualMap.show = M2.value;
  }
  return t(() => d2.themeColors, (o3) => {
    o3?.length > 0 && (v2.getCurComponent.chart.options.visualMap.inRange.color = j(o3));
  }), t(() => v2.getCurConfigComponent, (o3) => {
    o3 && void 0 !== v2.getCurConfigComponent.chart.options.visualMap?.show && (M2.value = v2.getCurConfigComponent.chart.options.visualMap?.show || false);
  }, { immediate: true }), (o3, e2) => {
    const n2 = a("AButton");
    return l(), i("div", { class: s(r(_2)) }, [c(F, { title: "颜色区间配置", "default-expand": true }, { action: p(() => [c(r(x), { checked: M2.value, "onUpdate:checked": e2[0] || (e2[0] = (o4) => M2.value = o4), onChange: B2 }, { default: p(() => e2[1] || (e2[1] = [h(" 显示颜色条 ")])), _: 1, __: [1] }, 8, ["checked"])]), default: p(() => [(l(true), i(u, null, C(R2.value, (o4, n3) => (l(), i("div", { class: "title", key: n3 }, [e2[2] || (e2[2] = h(" 区间颜色 ")), m("div", null, [c(r(I), { type: 1, placeholder: "设置区间颜色，格式#FFFFFF", value: o4, "hide-cancel": true, "hide-confirm": true, onInputChange: (o5) => function(o6, e3) {
      v2.getCurComponent.chart.options.visualMap.inRange.color[e3] = o6 || "";
    }(o5, n3) }, null, 8, ["value", "onInputChange"])]), n3 > 0 ? (l(), f(r(A), { key: 0, class: "color-delete", icon: "ant-design:delete-outlined", onClick: (o5) => function(o6) {
      v2.getCurComponent.chart.options.visualMap.inRange.color.splice(o6, 1);
    }(n3) }, null, 8, ["onClick"])) : g("", true)]))), 128)), c(n2, { onClick: w2 }, { icon: p(() => [c(r(A), { icon: "ant-design:plus-outlined" })]), default: p(() => [e2[3] || (e2[3] = h(" 添加区间颜色 "))]), _: 1, __: [3] })]), _: 1 })], 2);
  };
} }), [["__scopeId", "data-v-3f7afd24"]]), E = R(o({ __name: "MfMapConfig", setup(o2) {
  const n2 = k(), { prefixCls: a2 } = y("map-chart-config"), i2 = e(true), u2 = e(j(w[0].color));
  function C2() {
    n2.getCurConfigComponent.chart.options.tooltip = { ...n2.getCurConfigComponent.chart.options.tooltip, show: i2.value };
  }
  function m2(o3) {
    u2.value = j(o3.color);
  }
  return t(() => n2.getCurConfigComponent, (o3) => {
    o3 && void 0 !== n2.getCurConfigComponent.chart.options.tooltip?.show && (i2.value = n2.getCurConfigComponent.chart.options.tooltip?.show || false);
  }, { immediate: true }), (o3, e2) => (l(), f(v, { class: s(r(a2)) }, { default: p(() => [c(_, { onThemeChange: m2 }), c(M), c(r(x), { checked: i2.value, "onUpdate:checked": e2[0] || (e2[0] = (o4) => i2.value = o4), onChange: C2 }, { default: p(() => e2[1] || (e2[1] = [h(" 提示框")])), _: 1, __: [1] }, 8, ["checked"]), d(o3.$slots, "default", {}, void 0, true), c(B, { "theme-colors": u2.value }, null, 8, ["theme-colors"])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-2f6088a9"]]);
export {
  E as M
};
