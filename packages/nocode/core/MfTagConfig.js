import { defineComponent as o, ref as e, watch as t, createBlock as n, openBlock as a, normalizeClass as i, unref as r, withCtx as l, renderSlot as s, createElementBlock as u, createCommentVNode as c, createElementVNode as d, createVNode as m, createTextVNode as p } from "vue";
import { useDesign as f } from "@mfish/core/hooks";
import { Input as C, Checkbox as h } from "ant-design-vue";
import { u as g, o as v, _ } from "./index.js";
import { S as k } from "./StyleConfig.js";
import { IconPicker as y } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as F } from "./TitleConfig.js";
const I = { key: 0, class: "title" }, S = { class: "check-group" }, T = _(o({ __name: "MfTagConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(o2) {
  const _2 = g(), { prefixCls: T2 } = f("tag-config"), x = e();
  function j(o3) {
    _2.getCurConfigComponent.chart.data.dataSet.icon = o3;
  }
  function B(o3) {
    U(o3), x.value = o3;
  }
  function U(o3) {
    _2.getCurConfigComponent.chart.options.numColor = o3;
  }
  return t(() => _2.getCurConfigComponent, (o3) => {
    o3 && (x.value = _2.getCurConfigComponent.chart.options.iconColor);
  }, { immediate: true }), (e2, t2) => (a(), n(k, { class: i(r(T2)) }, { default: l(() => [s(e2.$slots, "default", {}, void 0, true), o2.hideTitle ? c("", true) : (a(), u("div", I, "标签内容")), o2.hideTitle ? c("", true) : (a(), n(r(C), { key: 1, value: r(_2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": t2[0] || (t2[0] = (o3) => r(_2).getCurConfigComponent.chart.data.dataSet.title = o3), "show-count": "", maxlength: 50 }, null, 8, ["value"])), t2[3] || (t2[3] = d("div", { class: "title" }, "图标", -1)), o2.hideIcon ? c("", true) : (a(), n(r(y), { key: 2, value: r(_2).getCurConfigComponent.chart.data.dataSet.icon, onChange: j }, null, 8, ["value"])), m(r(v), { placeholder: "设置图标颜色，格式#FFFFFF", type: 1, value: x.value, onConfirmChange: B, onInputChange: U }, null, 8, ["value"]), m(F), d("div", S, [m(r(h), { checked: r(_2).getCurConfigComponent.chart.options.hide, "onUpdate:checked": t2[1] || (t2[1] = (o3) => r(_2).getCurConfigComponent.chart.options.hide = o3) }, { default: l(() => t2[2] || (t2[2] = [p(" 文字超出隐藏")])), _: 1, __: [2] }, 8, ["checked"])])]), _: 3, __: [3] }, 8, ["class"]));
} }), [["__scopeId", "data-v-30f2ad7e"]]);
export {
  T as default
};
