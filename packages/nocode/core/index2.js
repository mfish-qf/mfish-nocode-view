import { defineComponent as e, useCssVars as n, computed as o, ref as a, createBlock as t, openBlock as l, unref as i, normalizeClass as s, withCtx as u, createElementVNode as c, createTextVNode as r, toDisplayString as m, createCommentVNode as v, createVNode as d, onMounted as p, onUnmounted as f, createElementBlock as g, Fragment as C, renderList as h, withModifiers as k, normalizeStyle as _, nextTick as y } from "vue";
import { theme as I, Dropdown as x, InputNumber as A, Checkbox as b, Empty as M, Tooltip as E, Segmented as T } from "ant-design-vue";
import { Icon as w } from "@mfish/core/components/Icon";
import { u as O, _ as N, a as P, s as S, S as U, p as L } from "./index.js";
import { useDesign as z, useRootSetting as D } from "@mfish/core/hooks";
import { ThemeEnum as R } from "@mfish/core/enums";
import { pick as V } from "lodash-es";
import { PauseCircleTwoTone as Y, PlayCircleTwoTone as j } from "@ant-design/icons-vue";
import { ScrollContainer as B } from "@mfish/core/components/Container";
import G from "vuedraggable";
import { E as K } from "./EventSelect.js";
const q = ["onMouseenter"], F = { class: "setting" }, H = e({ __name: "AnimationSet", setup(e2) {
  n((e3) => ({ b2a78e38: k2.value }));
  const p2 = O(), f2 = o(() => p2.getCurConfigComponent.chart.animations), g2 = a(-1), { prefixCls: C2 } = z("animation-set"), { token: h2 } = I.useToken(), k2 = o(() => h2.value.colorInfoBg), _2 = a(false);
  const y2 = (e3) => {
    const { oldIndex: n2, newIndex: o2 } = e3.moved, a2 = p2.getCurConfigComponent.chart.animations.splice(n2, 1)[0];
    p2.getCurConfigComponent.chart.animations.splice(o2, 0, a2);
  }, M2 = (e3) => {
    _2.value = e3;
  };
  return (e3, n2) => (l(), t(i(G), { "item-key": "id", class: s(i(C2)), modelValue: f2.value, "onUpdate:modelValue": n2[0] || (n2[0] = (e4) => f2.value = e4), animation: "300", "ghost-class": "ghost", onChange: y2 }, { item: u(({ element: e4, index: o2 }) => [c("div", { class: "animation", onMouseenter: (e5) => function(e6) {
    g2.value = e6;
  }(o2) }, [r(m(e4.label) + " ", 1), c("div", null, [g2.value === o2 ? (l(), t(i(w), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (e5) => function(e6) {
    p2.getCurConfigComponent.chart.animations.splice(e6, 1), g2.value = -1;
  }(o2) }, null, 8, ["onClick"])) : v("", true), d(i(x), { placement: "bottom", trigger: ["click"], open: _2.value && g2.value === o2, onOpenChange: M2, arrow: true }, { overlay: u(() => [c("div", F, [d(i(A), { style: { width: "100%" }, value: e4.duration, "onUpdate:value": (n3) => e4.duration = n3, size: "small", placeholder: "时长 ms", step: 100, min: 0, max: 1e5 }, null, 8, ["value", "onUpdate:value"]), d(i(A), { style: { width: "100%" }, disabled: e4.loop, value: e4.repeat, "onUpdate:value": (n3) => e4.repeat = n3, size: "small", placeholder: "重复次数", step: 1, min: 0, max: 3 }, null, 8, ["disabled", "value", "onUpdate:value"]), d(i(b), { checked: e4.loop, "onUpdate:checked": (n3) => e4.loop = n3, onChange: (n3) => function(e5) {
    e5.loop && (e5.repeat = void 0);
  }(e4) }, { default: u(() => n2[1] || (n2[1] = [r(" 无限循环")])), _: 2, __: [1] }, 1032, ["checked", "onUpdate:checked", "onChange"]), d(K, { "hide-param": true, events: e4?.events, onOk: (n3) => function(e5, n4) {
    n4?.events || (n4.events = []);
    const o3 = n4.events.findIndex((n5) => n5.id === e5.event.id && n5.event === e5.event.event);
    -1 === o3 ? e5.modifyIndex >= 0 ? n4.events.splice(e5.modifyIndex, 1, e5.event) : n4.events.push(e5.event) : n4.events.splice(o3, 1, e5.event);
  }(n3, e4), onDelete: (n3) => function(e5, n4) {
    -1 !== e5 && n4?.events.splice(e5, 1);
  }(n3, e4) }, null, 8, ["events", "onOk", "onDelete"])])]), default: u(() => [d(i(w), { class: "icon", icon: "ant-design:setting-outlined" })]), _: 2 }, 1032, ["open"])])], 40, q)]), _: 1 }, 8, ["class", "modelValue"]));
} }), J = N(H, [["__scopeId", "data-v-8d331eae"]]), Q = { key: 1, class: "animation-set" }, W = { class: "setting" }, X = { class: "mask-layer" }, Z = ["onClick", "onMouseenter"], $ = N(e({ name: "AnimationConfig", __name: "index", setup(e2) {
  n((e3) => ({ "3b9d7e0c": $2.value, "6e53613f": i(G2) }));
  const x2 = a(""), A2 = a(""), b2 = D().getDarkMode, N2 = o(() => b2.value === R.DARK ? { color: "rgba(255,255,255,0.3)" } : { color: "rgba(0,0,0,0.2)" }), G2 = D().getThemeColor, K2 = O(), q2 = o(() => K2.getCurConfigComponent.chart.animations), F2 = o(() => P.find((e3) => e3.value === x2.value)?.payload.data), { token: H2 } = I.useToken(), $2 = o(() => H2.value.colorInfoBg), { prefixCls: ee } = z("animation-config"), ne = a(false), oe = () => {
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
  }), (e3, n2) => (l(), g("div", { class: s(i(ee)) }, [d(i(B), { style: { "min-height": "250px", height: "250px" } }, { default: u(() => [q2.value && 0 !== q2.value.length ? (l(), g("div", Q, [d(J), c("div", W, [d(i(E), { title: ne.value ? "暂停动画" : "播放动画" }, { default: u(() => [c("div", X, [ne.value ? (l(), t(i(Y), { key: 0, "two-tone-color": i(G2), style: { fontSize: "60px" }, onClick: le }, null, 8, ["two-tone-color"])) : (l(), t(i(j), { key: 1, "two-tone-color": i(G2), style: { fontSize: "60px" }, onClick: te }, null, 8, ["two-tone-color"]))])]), _: 1 }, 8, ["title"])])])) : (l(), t(i(M), { key: 0, description: "未添加动画", image: i(M).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }), d(i(T), { class: "segment", value: x2.value, options: i(P), onChange: ae, block: "" }, { label: u(({ value: e4, payload: n3 }) => [n3.icon ? (l(), t(i(w), { key: 0, icon: n3.icon }, null, 8, ["icon"])) : v("", true), r(" " + m(e4), 1)]), _: 1 }, 8, ["value", "options"]), d(i(B), null, { default: u(() => [c("div", { class: "animation-contain", onMouseleave: n2[0] || (n2[0] = (e4) => A2.value = "") }, [(l(true), g(C, null, h(F2.value, (e4) => (l(), g("div", { style: { cursor: "pointer", height: "28px" }, key: e4.value, onClick: (n3) => function(e5) {
    const n4 = V(e5, ["label", "value"]);
    K2.getCurConfigComponent.chart.animations ? K2.getCurConfigComponent.chart.animations.push(n4) : K2.getCurConfigComponent.chart.animations = [n4];
  }(e4), onMouseenter: k((n3) => async function(e5) {
    A2.value = e5.value, await y(), await L(e5.animationRef, [e5]);
  }(e4), ["stop", "prevent"]) }, [c("div", { class: "animation-block", style: _(A2.value === e4.value ? N2.value : {}), ref_for: true, ref: (n3) => {
    e4.animationRef = n3;
  } }, m(e4.label), 5), A2.value === e4.value ? (l(), t(i(w), { key: 0, class: "mask-icon", icon: "ant-design:plus-outlined", size: 24 })) : v("", true)], 40, Z))), 128))], 32)]), _: 1 })], 2));
} }), [["__scopeId", "data-v-031d35c9"]]);
export {
  $ as default
};
