import { defineComponent as e, useCssVars as n, computed as o, ref as a, createBlock as t, openBlock as l, unref as i, normalizeClass as s, withCtx as u, createElementVNode as c, createTextVNode as r, toDisplayString as m, createCommentVNode as d, createVNode as v, onMounted as p, onUnmounted as f, createElementBlock as C, Fragment as g, renderList as h, withModifiers as k, normalizeStyle as _, nextTick as y } from "vue";
import { theme as I, Dropdown as x, InputNumber as A, Checkbox as b, Empty as M, Tooltip as T, Segmented as E } from "ant-design-vue";
import { Icon as N } from "@mfish/core/components/Icon";
import { u as w, _ as O, a as P, s as S, S as U, p as L } from "./index.js";
import { useDesign as z, useRootSetting as R } from "@mfish/core/hooks";
import { ThemeEnum as D } from "@mfish/core/enums";
import { pick as V } from "lodash-es";
import { PauseCircleTwoTone as Y, PlayCircleTwoTone as B } from "@ant-design/icons-vue";
import { ScrollContainer as j } from "@mfish/core/components/Container";
import G from "vuedraggable";
const K = ["onMouseenter"], q = { class: "setting" }, F = e({ __name: "AnimationSet", setup(e2) {
  n((e3) => ({ "536783ac": k2.value }));
  const p2 = w(), f2 = o(() => p2.getCurConfigComponent.chartContain.animations), C2 = a(-1), { prefixCls: g2 } = z("animation-set"), { token: h2 } = I.useToken(), k2 = o(() => h2.value.colorInfoBg), _2 = a(false);
  const y2 = (e3) => {
    const { oldIndex: n2, newIndex: o2 } = e3.moved, a2 = p2.getCurConfigComponent.chartContain.animations.splice(n2, 1)[0];
    p2.getCurConfigComponent.chartContain.animations.splice(o2, 0, a2);
  }, M2 = (e3) => {
    _2.value = e3;
  };
  return (e3, n2) => (l(), t(i(G), { "item-key": "id", class: s(i(g2)), modelValue: f2.value, "onUpdate:modelValue": n2[0] || (n2[0] = (e4) => f2.value = e4), animation: "300", "ghost-class": "ghost", onChange: y2 }, { item: u(({ element: e4, index: o2 }) => [c("div", { class: "animation", onMouseenter: (e5) => function(e6) {
    C2.value = e6;
  }(o2) }, [r(m(e4.label) + " ", 1), c("div", null, [C2.value === o2 ? (l(), t(i(N), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (e5) => function(e6) {
    p2.getCurConfigComponent.chartContain.animations.splice(e6, 1), C2.value = -1;
  }(o2) }, null, 8, ["onClick"])) : d("", true), v(i(x), { placement: "bottom", open: _2.value && C2.value === o2, onOpenChange: M2, arrow: true }, { overlay: u(() => [c("div", q, [v(i(A), { value: e4.duration, "onUpdate:value": (n3) => e4.duration = n3, size: "small", placeholder: "时长 ms", step: 100, min: 0, max: 1e5 }, null, 8, ["value", "onUpdate:value"]), v(i(A), { disabled: e4.loop, value: e4.repeat, "onUpdate:value": (n3) => e4.repeat = n3, size: "small", placeholder: "重复次数", step: 1, min: 0, max: 3 }, null, 8, ["disabled", "value", "onUpdate:value"]), v(i(b), { checked: e4.loop, "onUpdate:checked": (n3) => e4.loop = n3, onChange: (n3) => function(e5) {
    e5.loop && (e5.repeat = void 0);
  }(e4) }, { default: u(() => n2[1] || (n2[1] = [r(" 无限循环")])), _: 2 }, 1032, ["checked", "onUpdate:checked", "onChange"])])]), default: u(() => [v(i(N), { class: "icon", icon: "ant-design:setting-outlined" })]), _: 2 }, 1032, ["open"])])], 40, K)]), _: 1 }, 8, ["class", "modelValue"]));
} }), H = O(F, [["__scopeId", "data-v-27cd3180"]]), J = { key: 1, class: "animation-set" }, Q = { class: "setting" }, W = { class: "mask-layer" }, X = ["onClick", "onMouseenter"], Z = O(e({ name: "AnimationConfig", __name: "index", setup(e2) {
  n((e3) => ({ "02e0c480": $.value, e3e390f6: i(G2) }));
  const x2 = a(""), A2 = a(""), b2 = R().getDarkMode, O2 = o(() => b2.value === D.DARK ? { color: "rgba(255,255,255,0.3)" } : { color: "rgba(0,0,0,0.2)" }), G2 = R().getThemeColor, K2 = w(), q2 = o(() => K2.getCurConfigComponent.chartContain.animations), F2 = o(() => {
    var _a;
    return (_a = P.find((e3) => e3.value === x2.value)) == null ? void 0 : _a.payload.data;
  }), { token: Z2 } = I.useToken(), $ = o(() => Z2.value.colorInfoBg), { prefixCls: ee } = z("animation-config"), ne = a(false), oe = () => {
    ne.value = false;
  };
  function ae(e3) {
    x2.value = e3;
  }
  function te() {
    ne.value = true, y(() => S.emit(U.PLAY_ANIMATION));
  }
  function le() {
    ne.value = false, S.emit(U.STOP_ANIMATION);
  }
  return p(() => {
    x2.value = P[0].value, S.on(U.PLAY_ANIMATION_COMPLETE, oe);
  }), f(() => {
    S.off(U.PLAY_ANIMATION_COMPLETE, oe);
  }), (e3, n2) => (l(), C("div", { class: s(i(ee)) }, [v(i(j), { style: { "min-height": "250px", height: "250px" } }, { default: u(() => [q2.value && 0 !== q2.value.length ? (l(), C("div", J, [v(H), c("div", Q, [v(i(T), { title: ne.value ? "暂停动画" : "播放动画" }, { default: u(() => [c("div", W, [ne.value ? (l(), t(i(Y), { key: 0, "two-tone-color": i(G2), style: { fontSize: "60px" }, onClick: le }, null, 8, ["two-tone-color"])) : (l(), t(i(B), { key: 1, "two-tone-color": i(G2), style: { fontSize: "60px" }, onClick: te }, null, 8, ["two-tone-color"]))])]), _: 1 }, 8, ["title"])])])) : (l(), t(i(M), { key: 0, description: "未添加动画", image: i(M).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }), v(i(E), { class: "segment", value: x2.value, options: i(P), onChange: ae, block: "" }, { label: u(({ value: e4, payload: n3 }) => [n3.icon ? (l(), t(i(N), { key: 0, icon: n3.icon }, null, 8, ["icon"])) : d("", true), r(" " + m(e4), 1)]), _: 1 }, 8, ["value", "options"]), v(i(j), null, { default: u(() => [c("div", { class: "animation-contain", onMouseleave: n2[0] || (n2[0] = (e4) => A2.value = "") }, [(l(true), C(g, null, h(F2.value, (e4) => (l(), C("div", { style: { cursor: "pointer", height: "28px" }, key: e4.value, onClick: (n3) => function(e5) {
    const n4 = V(e5, ["label", "value"]);
    K2.getCurConfigComponent.chartContain.animations ? K2.getCurConfigComponent.chartContain.animations.push(n4) : K2.getCurConfigComponent.chartContain.animations = [n4];
  }(e4), onMouseenter: k((n3) => async function(e5) {
    A2.value = e5.value, await y(), await L(e5.animationRef, [e5]);
  }(e4), ["stop", "prevent"]) }, [c("div", { class: "animation-block", style: _(A2.value === e4.value ? O2.value : {}), ref_for: true, ref: (n3) => {
    e4.animationRef = n3;
  } }, m(e4.label), 5), A2.value === e4.value ? (l(), t(i(N), { key: 0, class: "mask-icon", icon: "ant-design:plus-outlined", size: 24 })) : d("", true)], 40, X))), 128))], 32)]), _: 1 })], 2));
} }), [["__scopeId", "data-v-9602bb09"]]);
export {
  Z as default
};
