import { defineComponent as o, ref as e, watch as t, openBlock as n, createBlock as a, normalizeClass as i, unref as l, withCtx as r, renderSlot as s, createElementBlock as c, createCommentVNode as u, createVNode as d, createElementVNode as p, createTextVNode as f } from "vue";
import { useDesign as m } from "@mfish/core/hooks";
import { Input as C, Checkbox as h } from "ant-design-vue";
import { u as g, M as v, _ as k } from "./index.js";
import { S as y } from "./StyleConfig.js";
import { IconPicker as _ } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as F } from "./TitleConfig.js";
const I = { key: 0, class: "title" }, S = { class: "check-group" }, T = { class: "title" }, x = { class: "title" }, j = k(o({ __name: "MfTagConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(o2) {
  const k2 = g(), { prefixCls: j2 } = m("tag-config"), B = e();
  function M(o3) {
    k2.getCurConfigComponent.chart.data.dataSet.icon = o3;
  }
  function U(o3) {
    w(o3), B.value = o3;
  }
  function w(o3) {
    k2.getCurConfigComponent.chart.options.iconColor = o3;
  }
  return t(() => k2.getCurConfigComponent, (o3) => {
    o3 && (B.value = k2.getCurConfigComponent.chart.options.iconColor);
  }, { immediate: true }), (e2, t2) => (n(), a(y, { class: i(l(j2)) }, { default: r(() => [s(e2.$slots, "default", {}, void 0, true), o2.hideTitle ? u("", true) : (n(), c("div", I, "文本内容")), o2.hideTitle ? u("", true) : (n(), a(l(C), { key: 1, value: l(k2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": t2[0] || (t2[0] = (o3) => l(k2).getCurConfigComponent.chart.data.dataSet.title = o3), "show-count": "", maxlength: 50 }, null, 8, ["value"])), d(F), p("div", S, [d(l(h), { checked: l(k2).getCurConfigComponent.chart.options.hide, "onUpdate:checked": t2[1] || (t2[1] = (o3) => l(k2).getCurConfigComponent.chart.options.hide = o3) }, { default: r(() => [...t2[2] || (t2[2] = [f(" 文字超出隐藏", -1)])]), _: 1 }, 8, ["checked"])]), p("div", T, [t2[3] || (t2[3] = f(" 图标 ", -1)), p("div", null, [o2.hideIcon ? u("", true) : (n(), a(l(_), { key: 0, value: l(k2).getCurConfigComponent.chart.data.dataSet.icon, onChange: M }, null, 8, ["value"]))])]), p("div", x, [t2[4] || (t2[4] = f(" 图标颜色 ", -1)), p("div", null, [d(l(v), { placeholder: "设置图标颜色，格式#FFFFFF", type: 1, value: B.value, onConfirmChange: U, onInputChange: w }, null, 8, ["value"])])])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-f78283d8"]]);
export {
  j as default
};
