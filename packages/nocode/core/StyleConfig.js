import { defineComponent as n, ref as t, onMounted as o, watch as e, createBlock as a, openBlock as r, unref as i, withCtx as C, createElementVNode as l, normalizeClass as u, createVNode as p, renderSlot as h, createElementBlock as d, createCommentVNode as c, createTextVNode as m } from "vue";
import { useDesign as g } from "@mfish/core/hooks";
import { u as s, h as f, i as v, M as x, I, _ as w } from "./index.js";
import { Slider as y } from "ant-design-vue";
import { ScrollContainer as b } from "@mfish/core/components/Container";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { isNumber as U } from "@mfish/core/utils/Is";
const _ = { class: "position" }, k = { class: "position" }, M = { class: "title" }, S = { key: 0, class: "position" }, j = w(n({ __name: "StyleConfig", setup(n2) {
  const { prefixCls: w2 } = g("style-config"), j2 = s(), H = t(100), O = t(), R = t(), W = t(0);
  function X(n3) {
    n3 && (H.value = 100 * n3.chartContain.opacity, O.value = n3.chartContain.background, R.value = n3.chartContain.border.color);
  }
  function Y(n3) {
    n3 || (j2.getCurComponent.chartContain.dropInfo.x = 0);
  }
  function $(n3) {
    n3 || (j2.getCurComponent.chartContain.dropInfo.y = 0);
  }
  function q(n3) {
    n3 || (j2.getCurComponent.chartContain.dropInfo.rotate = 0);
  }
  function z(n3) {
    n3 || (j2.getCurComponent.chartContain.dropInfo.width = 0);
  }
  function A(n3) {
    n3 || (j2.getCurComponent.chartContain.dropInfo.height = 0);
  }
  function B(n3) {
    U(n3) ? (j2.getCurComponent.chartContain.opacity = n3 / 100, H.value = n3) : (j2.getCurComponent.chartContain.opacity = 1, H.value = 100);
  }
  function D(n3) {
    E(n3), O.value = n3;
  }
  function E(n3) {
    j2.getCurComponent.chartContain.background = n3 || "";
  }
  function F(n3) {
    G(n3), R.value = n3;
  }
  function G(n3) {
    j2.getCurComponent.chartContain.border.color = n3 || void 0;
  }
  return o(() => {
    X(j2.getCurComponent);
  }), e(() => j2.getCurComponent, (n3) => {
    X(n3), W.value++;
  }), (n3, t2) => (r(), a(i(b), null, { default: C(() => [l("div", { class: u(i(w2)) }, [p(f, { title: "通用配置" }, { default: C(() => [t2[10] || (t2[10] = l("div", { class: "title" }, "坐标信息", -1)), l("div", _, [p(i(v), { prefix: "X", style: { width: "108px" }, placeholder: "横坐标", value: i(j2).getCurComponent.chartContain.dropInfo.x, "onUpdate:value": t2[0] || (t2[0] = (n4) => i(j2).getCurComponent.chartContain.dropInfo.x = n4), step: 1, min: 0, max: i(j2).getCanvasConfig.width - i(j2).getCurComponent.chartContain.dropInfo.width, maxlength: 5, onChange: Y }, null, 8, ["value", "max"]), p(i(v), { prefix: "Y", style: { width: "108px" }, placeholder: "纵坐标", value: i(j2).getCurComponent.chartContain.dropInfo.y, "onUpdate:value": t2[1] || (t2[1] = (n4) => i(j2).getCurComponent.chartContain.dropInfo.y = n4), step: 1, min: 0, max: i(j2).getCanvasConfig.height - i(j2).getCurComponent.chartContain.dropInfo.height, maxlength: 5, onChange: $ }, null, 8, ["value", "max"]), p(i(v), { prefix: "R", style: { width: "80px" }, suffix: "°", placeholder: "旋转角度", value: i(j2).getCurComponent.chartContain.dropInfo.rotate, "onUpdate:value": t2[2] || (t2[2] = (n4) => i(j2).getCurComponent.chartContain.dropInfo.rotate = n4), step: 1, min: -360, max: 360, maxlength: 4, onChange: q }, null, 8, ["value"])]), t2[11] || (t2[11] = l("div", { class: "title" }, "组件大小", -1)), l("div", k, [p(i(v), { prefix: "W", style: { width: "108px" }, placeholder: "宽度", value: i(j2).getCurComponent.chartContain.dropInfo.width, "onUpdate:value": t2[3] || (t2[3] = (n4) => i(j2).getCurComponent.chartContain.dropInfo.width = n4), min: 0, max: i(j2).getCanvasConfig.width, maxlength: 5, onChange: z }, null, 8, ["value", "max"]), p(i(v), { prefix: "H", style: { width: "108px" }, placeholder: "高度", value: i(j2).getCurComponent.chartContain.dropInfo.height, "onUpdate:value": t2[4] || (t2[4] = (n4) => i(j2).getCurComponent.chartContain.dropInfo.height = n4), min: 0, max: i(j2).getCanvasConfig.height, maxlength: 5, onChange: A }, null, 8, ["value", "max"]), p(i(v), { prefix: "O", suffix: "%", style: { width: "80px" }, value: H.value, "onUpdate:value": t2[5] || (t2[5] = (n4) => H.value = n4), placeholder: "透明度", min: 0, max: 100, maxlength: 4, onChange: B }, null, 8, ["value"])]), t2[12] || (t2[12] = l("div", { class: "title" }, "背景色", -1)), p(i(x), { value: O.value, onConfirmChange: D, onInputChange: E }, null, 8, ["value"]), l("div", M, [t2[9] || (t2[9] = m(" 圆角 ")), p(i(y), { value: i(j2).getCurComponent.chartContain.border.radius, "onUpdate:value": t2[6] || (t2[6] = (n4) => i(j2).getCurComponent.chartContain.border.radius = n4), step: 1, min: 0, max: i(j2).getCurComponent.chartContain.dropInfo.width > i(j2).getCurComponent.chartContain.dropInfo.height ? Math.round(i(j2).getCurComponent.chartContain.dropInfo.width / 2) : Math.round(i(j2).getCurComponent.chartContain.dropInfo.height / 2) }, null, 8, ["value", "max"])]), l("div", null, [p(i(I), { checked: i(j2).getCurComponent.chartContain.border.show, "onUpdate:checked": t2[7] || (t2[7] = (n4) => i(j2).getCurComponent.chartContain.border.show = n4), title: "是否显示边框", tooltip: "渐变色边框不会跟随圆角变化" }, null, 8, ["checked"])]), i(j2).getCurComponent.chartContain.border.show ? (r(), d("div", S, [p(i(x), { placeholder: "边框颜色，清空显示默认色", title: "清空显示默认色", value: R.value, onConfirmChange: F, onInputChange: G }, null, 8, ["value"]), p(i(v), { prefix: "宽度", suffix: "px", style: { width: "120px" }, value: i(j2).getCurComponent.chartContain.border.width, "onUpdate:value": t2[8] || (t2[8] = (n4) => i(j2).getCurComponent.chartContain.border.width = n4), placeholder: "边框宽度", min: 1, maxlength: 4 }, null, 8, ["value"])])) : c("", true)]), _: 1, __: [10, 11, 12] }), h(n3.$slots, "default", { key: W.value }, void 0, true)], 2)]), _: 3 }));
} }), [["__scopeId", "data-v-f9055bf8"]]);
export {
  j as S
};
