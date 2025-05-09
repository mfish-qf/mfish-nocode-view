import { defineComponent as n, ref as o, onMounted as t, watch as e, createBlock as a, openBlock as r, unref as i, withCtx as C, createElementVNode as l, normalizeClass as u, createVNode as p, renderSlot as h, createElementBlock as d, createCommentVNode as m, createTextVNode as c } from "vue";
import { useDesign as f } from "@mfish/core/hooks";
import { u as g, f as s, l as v, G as x, _ as I } from "./index.js";
import { Slider as w } from "ant-design-vue";
import { C as y } from "./ConfigGroup.js";
import { ScrollContainer as b } from "@mfish/core/components/Container";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { isNumber as U } from "@mfish/core/utils/Is";
const k = { class: "position" }, _ = { class: "position" }, j = { class: "title" }, G = { key: 0, class: "position" }, M = I(n({ __name: "StyleConfig", setup(n2) {
  const { prefixCls: I2 } = f("style-config"), M2 = g(), S = o(100), H = o(), O = o(), R = o(0);
  function W(n3) {
    n3 && (S.value = 100 * n3.chartContain.opacity, H.value = n3.chartContain.background, O.value = n3.chartContain.border.color);
  }
  function X(n3) {
    n3 || (M2.getCurComponent.chartContain.dropInfo.x = 0);
  }
  function Y(n3) {
    n3 || (M2.getCurComponent.chartContain.dropInfo.y = 0);
  }
  function $(n3) {
    n3 || (M2.getCurComponent.chartContain.dropInfo.rotate = 0);
  }
  function q(n3) {
    n3 || (M2.getCurComponent.chartContain.dropInfo.width = 0);
  }
  function z(n3) {
    n3 || (M2.getCurComponent.chartContain.dropInfo.height = 0);
  }
  function A(n3) {
    U(n3) ? (M2.getCurComponent.chartContain.opacity = n3 / 100, S.value = n3) : (M2.getCurComponent.chartContain.opacity = 1, S.value = 100);
  }
  function B(n3) {
    D(n3), H.value = n3;
  }
  function D(n3) {
    M2.getCurComponent.chartContain.background = n3 || "";
  }
  function E(n3) {
    F(n3), O.value = n3;
  }
  function F(n3) {
    M2.getCurComponent.chartContain.border.color = n3 || void 0;
  }
  return t(() => {
    W(M2.getCurComponent);
  }), e(() => M2.getCurComponent, (n3) => {
    W(n3), R.value++;
  }), (n3, o2) => (r(), a(i(b), null, { default: C(() => [l("div", { class: u(i(I2)) }, [p(y, { title: "通用配置" }, { default: C(() => [o2[10] || (o2[10] = l("div", { class: "title" }, "坐标信息", -1)), l("div", k, [p(i(s), { prefix: "X", style: { width: "108px" }, placeholder: "横坐标", value: i(M2).getCurComponent.chartContain.dropInfo.x, "onUpdate:value": o2[0] || (o2[0] = (n4) => i(M2).getCurComponent.chartContain.dropInfo.x = n4), step: 1, min: 0, max: i(M2).getCanvasConfig.width - i(M2).getCurComponent.chartContain.dropInfo.width, maxlength: 5, onChange: X }, null, 8, ["value", "max"]), p(i(s), { prefix: "Y", style: { width: "108px" }, placeholder: "纵坐标", value: i(M2).getCurComponent.chartContain.dropInfo.y, "onUpdate:value": o2[1] || (o2[1] = (n4) => i(M2).getCurComponent.chartContain.dropInfo.y = n4), step: 1, min: 0, max: i(M2).getCanvasConfig.height - i(M2).getCurComponent.chartContain.dropInfo.height, maxlength: 5, onChange: Y }, null, 8, ["value", "max"]), p(i(s), { prefix: "R", style: { width: "80px" }, suffix: "°", placeholder: "旋转角度", value: i(M2).getCurComponent.chartContain.dropInfo.rotate, "onUpdate:value": o2[2] || (o2[2] = (n4) => i(M2).getCurComponent.chartContain.dropInfo.rotate = n4), step: 1, min: -360, max: 360, maxlength: 4, onChange: $ }, null, 8, ["value"])]), o2[11] || (o2[11] = l("div", { class: "title" }, "组件大小", -1)), l("div", _, [p(i(s), { prefix: "W", style: { width: "108px" }, placeholder: "宽度", value: i(M2).getCurComponent.chartContain.dropInfo.width, "onUpdate:value": o2[3] || (o2[3] = (n4) => i(M2).getCurComponent.chartContain.dropInfo.width = n4), min: 0, max: i(M2).getCanvasConfig.width, maxlength: 5, onChange: q }, null, 8, ["value", "max"]), p(i(s), { prefix: "H", style: { width: "108px" }, placeholder: "高度", value: i(M2).getCurComponent.chartContain.dropInfo.height, "onUpdate:value": o2[4] || (o2[4] = (n4) => i(M2).getCurComponent.chartContain.dropInfo.height = n4), min: 0, max: i(M2).getCanvasConfig.height, maxlength: 5, onChange: z }, null, 8, ["value", "max"]), p(i(s), { prefix: "O", suffix: "%", style: { width: "80px" }, value: S.value, "onUpdate:value": o2[5] || (o2[5] = (n4) => S.value = n4), placeholder: "透明度", min: 0, max: 100, maxlength: 4, onChange: A }, null, 8, ["value"])]), o2[12] || (o2[12] = l("div", { class: "title" }, "背景色", -1)), p(i(v), { value: H.value, onConfirmChange: B, onInputChange: D }, null, 8, ["value"]), l("div", j, [o2[9] || (o2[9] = c(" 圆角 ")), p(i(w), { value: i(M2).getCurComponent.chartContain.border.radius, "onUpdate:value": o2[6] || (o2[6] = (n4) => i(M2).getCurComponent.chartContain.border.radius = n4), step: 1, min: 0, max: i(M2).getCurComponent.chartContain.dropInfo.width > i(M2).getCurComponent.chartContain.dropInfo.height ? Math.round(i(M2).getCurComponent.chartContain.dropInfo.width / 2) : Math.round(i(M2).getCurComponent.chartContain.dropInfo.height / 2) }, null, 8, ["value", "max"])]), l("div", null, [p(i(x), { checked: i(M2).getCurComponent.chartContain.border.show, "onUpdate:checked": o2[7] || (o2[7] = (n4) => i(M2).getCurComponent.chartContain.border.show = n4), title: "是否显示边框", tooltip: "渐变色边框不会跟随圆角变化" }, null, 8, ["checked"])]), i(M2).getCurComponent.chartContain.border.show ? (r(), d("div", G, [p(i(v), { placeholder: "边框颜色，清空显示默认色", title: "清空显示默认色", value: O.value, onConfirmChange: E, onInputChange: F }, null, 8, ["value"]), p(i(s), { prefix: "宽度", suffix: "px", style: { width: "120px" }, value: i(M2).getCurComponent.chartContain.border.width, "onUpdate:value": o2[8] || (o2[8] = (n4) => i(M2).getCurComponent.chartContain.border.width = n4), placeholder: "边框宽度", min: 1, maxlength: 4 }, null, 8, ["value"])])) : m("", true)]), _: 1 }), h(n3.$slots, "default", { key: R.value }, void 0, true)], 2)]), _: 3 }));
} }), [["__scopeId", "data-v-f9055bf8"]]);
export {
  M as S
};
