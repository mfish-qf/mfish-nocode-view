import { defineComponent as o, ref as e, watch as t, createBlock as n, openBlock as a, normalizeClass as i, unref as r, withCtx as l, renderSlot as s, createElementBlock as c, createCommentVNode as u, createElementVNode as p, createVNode as d, createTextVNode as f } from "vue";
import { useDesign as m } from "@mfish/core/hooks";
import { Input as C, Checkbox as h } from "ant-design-vue";
import { u as g, M as v, _ as k } from "./index.js";
import { S as y } from "./StyleConfig.js";
import { IconPicker as _ } from "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { T as F } from "./TitleConfig.js";
const I = { key: 0, class: "title" }, S = { class: "check-group" }, T = k(o({ __name: "MfTagConfig", props: { hideTitle: { type: Boolean, default: false }, hideIcon: { type: Boolean, default: false } }, setup(o2) {
  const k2 = g(), { prefixCls: T2 } = m("tag-config"), x = e();
  function j(o3) {
    k2.getCurConfigComponent.chart.data.dataSet.icon = o3;
  }
  function B(o3) {
    M(o3), x.value = o3;
  }
  function M(o3) {
    k2.getCurConfigComponent.chart.options.iconColor = o3;
  }
  return t(() => k2.getCurConfigComponent, (o3) => {
    o3 && (x.value = k2.getCurConfigComponent.chart.options.iconColor);
  }, { immediate: true }), (e2, t2) => (a(), n(y, { class: i(r(T2)) }, { default: l(() => [s(e2.$slots, "default", {}, void 0, true), o2.hideTitle ? u("", true) : (a(), c("div", I, "标签内容")), o2.hideTitle ? u("", true) : (a(), n(r(C), { key: 1, value: r(k2).getCurConfigComponent.chart.data.dataSet.title, "onUpdate:value": t2[0] || (t2[0] = (o3) => r(k2).getCurConfigComponent.chart.data.dataSet.title = o3), "show-count": "", maxlength: 50 }, null, 8, ["value"])), t2[3] || (t2[3] = p("div", { class: "title" }, "图标", -1)), o2.hideIcon ? u("", true) : (a(), n(r(_), { key: 2, value: r(k2).getCurConfigComponent.chart.data.dataSet.icon, onChange: j }, null, 8, ["value"])), d(r(v), { placeholder: "设置图标颜色，格式#FFFFFF", type: 1, value: x.value, onConfirmChange: B, onInputChange: M }, null, 8, ["value"]), d(F), p("div", S, [d(r(h), { checked: r(k2).getCurConfigComponent.chart.options.hide, "onUpdate:checked": t2[1] || (t2[1] = (o3) => r(k2).getCurConfigComponent.chart.options.hide = o3) }, { default: l(() => [...t2[2] || (t2[2] = [f(" 文字超出隐藏", -1)])]), _: 1 }, 8, ["checked"])])]), _: 3 }, 8, ["class"]));
} }), [["__scopeId", "data-v-02f8be0a"]]);
export {
  T as default
};
