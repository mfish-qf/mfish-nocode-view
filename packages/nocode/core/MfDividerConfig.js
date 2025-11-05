import { defineComponent as o, ref as e, watch as t, createBlock as n, openBlock as a, normalizeClass as i, unref as r, withCtx as l, renderSlot as C, createElementBlock as u, createCommentVNode as c, createVNode as p, createElementVNode as d, createTextVNode as h } from "vue";
import { useDesign as f } from "@mfish/core/hooks";
import { Input as s, Checkbox as g } from "ant-design-vue";
import { u as m, M as v, _ as F } from "./index.js";
import { S as k } from "./StyleConfig.js";
import { IconPicker as I } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as y } from "./TitleConfig.js";
const _ = { key: 0, class: "title" }, S = { class: "check-group" }, T = F(o({ __name: "MfDividerConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(o2) {
  const F2 = m(), { prefixCls: T2 } = f("divider-config"), x = e(), j = e(false), w = e(), U = e(false);
  function B(o3) {
    F2.getCurConfigComponent.chart.data.dataSet.icon = o3;
  }
  function M(o3) {
    b(o3), x.value = o3;
  }
  function b(o3) {
    F2.getCurConfigComponent.chart.options.iconColor = o3;
  }
  function z() {
    F2.getCurConfigComponent.chart.options.type = j.value ? "vertical" : "horizontal";
    const o3 = F2.getCurConfigComponent.chartContain.dropInfo.height, e2 = F2.getCurConfigComponent.chartContain.dropInfo.width;
    F2.getCurConfigComponent.chartContain.dropInfo.width = o3, F2.getCurConfigComponent.chartContain.dropInfo.height = e2;
  }
  function D(o3) {
    $(o3), w.value = o3;
  }
  function $(o3) {
    F2.getCurConfigComponent.chart.options.lineColor = o3;
  }
  function q() {
    F2.getCurConfigComponent.chart.options.dashed = U.value;
  }
  return t(() => F2.getCurConfigComponent, (o3) => {
    o3 && (x.value = F2.getCurConfigComponent.chart.options.iconColor, j.value = "vertical" === F2.getCurConfigComponent.chart.options?.type, w.value = F2.getCurConfigComponent.chart.options.lineColor, U.value = F2.getCurConfigComponent.chart.options.dashed);
  }, { immediate: true }), (e2, t2) => (a(), n(k, { class: i(r(T2)) }, { default: l(() => [C(e2.$slots, "default", {}, void 0, true), o2.hideTitle ? c("", true) : (a(), u("div", _, "标题内容")), o2.hideTitle ? c("", true) : (a(), n(r(s), { key: 1, value: r(F2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": t2[0] || (t2[0] = (o3) => r(F2).getCurConfigComponent.chart.data.dataSet.title = o3), "show-count": "", maxlength: 50 }, null, 8, ["value"])), p(y, { title: "标题样式", "hide-align": true }), t2[5] || (t2[5] = d("div", { class: "title" }, "图标", -1)), o2.hideIcon ? c("", true) : (a(), n(r(I), { key: 2, value: r(F2).getCurConfigComponent.chart.data.dataSet.icon, onChange: B }, null, 8, ["value"])), p(r(v), { placeholder: "设置图标颜色，格式#FFFFFF", type: 1, value: x.value, onConfirmChange: M, onInputChange: b }, null, 8, ["value"]), t2[6] || (t2[6] = d("div", { class: "title" }, "线条颜色", -1)), p(r(v), { type: 1, placeholder: "设置线条颜色，格式#FFFFFF", value: w.value, onConfirmChange: D, onInputChange: $ }, null, 8, ["value"]), d("div", S, [p(r(g), { checked: j.value, "onUpdate:checked": t2[1] || (t2[1] = (o3) => j.value = o3), onChange: z }, { default: l(() => [...t2[3] || (t2[3] = [h(" 垂直方向", -1)])]), _: 1 }, 8, ["checked"]), p(r(g), { checked: U.value, "onUpdate:checked": t2[2] || (t2[2] = (o3) => U.value = o3), onChange: q }, { default: l(() => [...t2[4] || (t2[4] = [h(" 虚线", -1)])]), _: 1 }, 8, ["checked"])])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-64e3b600"]]);
export {
  T as default
};
