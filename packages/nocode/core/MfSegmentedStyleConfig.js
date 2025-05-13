import { defineComponent as t, ref as e, watch as o, createBlock as n, openBlock as l, normalizeClass as i, unref as a, withCtx as s, createElementVNode as r, createVNode as C } from "vue";
import { S as c } from "./StyleConfig.js";
import { useDesign as u } from "@mfish/core/hooks";
import { u as g, T as p, ao as f, I as h, n as m, _ as y } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import "ant-design-vue";
import "@mfish/core/utils/Is";
const S = y(t({ __name: "MfSegmentedStyleConfig", setup(t2) {
  const { prefixCls: y2 } = u("segmented-style-config"), S2 = g(), v = e({}), d = e({}), x = e(false), k = e();
  function _(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.textStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle, textColor: t3.value };
  }
  function I(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.textStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle, font: t3.value };
  }
  function z(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.textStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle, fontSize: t3.value };
  }
  function F(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.textStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.textStyle, fontStyle: t3.value };
  }
  function j(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.selectStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle, textColor: t3.value };
  }
  function B(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.selectStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle, font: t3.value };
  }
  function M(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.selectStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle, fontSize: t3.value };
  }
  function T(t3) {
    var _a;
    S2.getCurConfigComponent.chart.options.selectStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle, fontStyle: t3.value };
  }
  function U(t3) {
    S2.getCurConfigComponent.chart.options.transparent = t3.target.checked;
  }
  function b(t3) {
    q(t3), k.value = t3;
  }
  function q(t3) {
    var _a;
    t3 || (t3 = ""), S2.getCurConfigComponent.chart.options.selectStyle = { ...(_a = S2.getCurConfigComponent.chart.options) == null ? void 0 : _a.selectStyle, selectBackground: t3 };
  }
  return o(() => S2.getCurConfigComponent, (t3) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    var e2;
    t3 && (e2 = t3, v.value = (_b = (_a = e2.chart) == null ? void 0 : _a.options) == null ? void 0 : _b.textStyle, d.value = (_d = (_c = e2.chart) == null ? void 0 : _c.options) == null ? void 0 : _d.selectStyle, x.value = ((_f = (_e = e2.chart) == null ? void 0 : _e.options) == null ? void 0 : _f.transparent) || false, k.value = (_i = (_h = (_g = e2.chart) == null ? void 0 : _g.options) == null ? void 0 : _h.selectStyle) == null ? void 0 : _i.selectBackground);
  }, { immediate: true }), (t3, e2) => (l(), n(c, { class: i(a(y2)) }, { default: s(() => [e2[1] || (e2[1] = r("div", { class: "title" }, "文本样式", -1)), C(a(p), { "color-type": 1, "text-style": v.value, "hide-align": true, "hide-font-style": [a(f).Strikethrough], onColorChange: _, onFontChange: I, onSizeChange: z, onFontStyleChange: F }, null, 8, ["text-style", "hide-font-style"]), e2[2] || (e2[2] = r("div", { class: "title" }, "选中样式", -1)), C(a(p), { "color-type": 1, "text-style": d.value, "hide-align": true, "hide-font-style": [a(f).Strikethrough], onColorChange: j, onFontChange: B, onSizeChange: M, onFontStyleChange: T }, null, 8, ["text-style", "hide-font-style"]), C(a(h), { checked: x.value, "onUpdate:checked": e2[0] || (e2[0] = (t4) => x.value = t4), title: "整体背景透明", tooltip: "设置背景透明后，可以通过通用配置-背景色设置背景颜色", onChange: U }, null, 8, ["checked"]), e2[3] || (e2[3] = r("div", { class: "title" }, "选中项背景色", -1)), C(a(m), { value: k.value, onConfirmChange: b, onInputChange: q }, null, 8, ["value"])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-66e5afa1"]]);
export {
  S as default
};
