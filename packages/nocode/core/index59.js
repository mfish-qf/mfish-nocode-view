import { defineComponent as e, ref as t, watch as n, reactive as l, createElementBlock as a, openBlock as o, normalizeClass as i, unref as r, createVNode as u, withCtx as s, Fragment as c, renderList as d, createBlock as v, useCssVars as g, computed as p, createElementVNode as f, createCommentVNode as y, mergeProps as m } from "vue";
import { useDesign as h } from "@mfish/core/hooks";
import { RadioGroup as C, Tooltip as x, RadioButton as b, theme as S, Select as _, InputNumber as T } from "ant-design-vue";
import { T as A, _ as k, K as B, N as I, M as F, O as j } from "./index.js";
import "lodash-es";
import "@mfish/core/enums";
import { Icon as z } from "@mfish/core/components/Icon";
import "@mfish/core/utils/Is";
import { T as $ } from "./TextFontStyle.js";
const O = k(e({ __name: "TextHAlignStyle", props: { alignType: { type: String, default: void 0 } }, emits: ["alignChange"], setup(e2, { emit: g2 }) {
  const p2 = e2, f2 = g2, y2 = t();
  n(() => p2.alignType, (e3) => {
    y2.value = e3;
  }, { immediate: true });
  const { prefixCls: m2 } = h("h-align-style"), S2 = l({ [A.Left]: { name: "水平居左", icon: "carbon:text-align-left", description: "文字水平居左" }, [A.Center]: { name: "水平居中", icon: "carbon:text-align-center", description: "文字水平居中" }, [A.Right]: { name: "水平居右", icon: "carbon:text-align-right", description: "文字水平居右" } });
  function _2(e3) {
    const t2 = e3.target.value;
    f2("alignChange", t2);
  }
  return (e3, t2) => (o(), a("div", { class: i(r(m2)) }, [u(r(C), { value: y2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.value = e4), onChange: _2 }, { default: s(() => [(o(true), a(c, null, d(Object.keys(S2), (e4) => (o(), v(r(x), { key: e4, placement: "top", title: S2[e4].description }, { default: s(() => [u(r(b), { class: "radio-button", value: e4 }, { default: s(() => [u(r(z), { icon: S2[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 }, 8, ["value"])], 2));
} }), [["__scopeId", "data-v-92e25baf"]]), U = k(e({ __name: "TextVAlignStyle", props: { alignType: { type: String, default: void 0 } }, emits: ["alignChange"], setup(e2, { emit: g2 }) {
  const p2 = e2, f2 = g2, y2 = t();
  n(() => p2.alignType, (e3) => {
    y2.value = e3;
  }, { immediate: true });
  const { prefixCls: m2 } = h("v-align-style"), S2 = l({ [B.Top]: { name: "垂直居上", icon: "carbon:align-vertical-top", description: "文字垂直居上" }, [B.Center]: { name: "垂直居中", icon: "carbon:align-vertical-center", description: "文字垂直居中" }, [B.Bottom]: { name: "垂直居下", icon: "carbon:align-vertical-bottom", description: "文字垂直居下" } });
  function _2(e3) {
    const t2 = e3.target.value;
    f2("alignChange", t2);
  }
  return (e3, t2) => (o(), a("div", { class: i(r(m2)) }, [u(r(C), { value: y2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.value = e4), onChange: _2 }, { default: s(() => [(o(true), a(c, null, d(Object.keys(S2), (e4) => (o(), v(r(x), { key: e4, placement: "top", title: S2[e4].description }, { default: s(() => [u(r(b), { class: "radio-button", value: e4 }, { default: s(() => [u(r(z), { icon: S2[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 }, 8, ["value"])], 2));
} }), [["__scopeId", "data-v-a4066fb0"]]), W = { class: "line" }, D = { class: "input" }, L = { class: "line" }, M = { style: { flex: "1" } }, N = { key: 0, class: "line" }, R = k(e({ name: "TextStyle", __name: "index", props: { verticalAlign: { type: Boolean, default: false }, textStyle: { type: Object, default: () => {
} }, hideFont: { type: Boolean, default: false }, hideAlign: { type: Boolean, default: false }, hideFontStyle: { type: Array, default: () => [] }, colorType: { type: Number, default: 3 } }, emits: ["fontStyleChange", "hAlignChange", "vAlignChange", "fontChange", "sizeChange", "colorChange", "colorConfirm"], setup(e2, { emit: l2 }) {
  g((e3) => ({ v48be0450: x2.value }));
  const s2 = e2, c2 = l2, { prefixCls: d2 } = h("text-style"), { token: C2 } = S.useToken(), x2 = p(() => C2.value.colorBorder), b2 = t(12), k2 = t(I[0].value), z2 = t(), R2 = t();
  function H(e3) {
    const t2 = K(e3);
    z2.value = e3, c2("colorConfirm", t2);
  }
  function K(e3) {
    let t2;
    return t2 = e3 ? e3.startsWith("linear-gradient") ? { value: e3, style: { background: e3, color: "transparent", backgroundClip: "text" } } : { value: e3, style: { color: e3 } } : { value: "", style: {} }, c2("colorChange", t2), q(R2.value, e3), t2;
  }
  function V(e3) {
    R2.value = e3, q(e3, z2.value);
  }
  function q(e3, t2) {
    if (!e3) return;
    const n2 = t2?.startsWith("linear-gradient"), l3 = Math.round((b2.value ?? 12) / 10), a2 = e3?.underline && n2 ? { borderBottom: `${l3}px solid`, borderImage: `${t2} 1` } : e3?.underline ? { borderBottom: `${l3}px solid`, borderColor: `${t2}` } : {}, o2 = e3[j.Bold] ? { fontWeight: "bold" } : {}, i2 = e3[j.Italic] ? { fontStyle: "italic" } : {};
    if (n2) {
      const e4 = t2?.match(new RegExp("(?<=linear-gradient.*?)(rgba\\(.*?\\))", "g"));
      e4 && e4.length > 0 && (t2 = e4[0]);
    }
    const r2 = e3[j.Strikethrough] ? { textDecoration: "line-through", textDecorationColor: t2 } : {};
    c2("fontStyleChange", { value: e3, style: { ...o2, ...i2, ...a2, ...r2 } });
  }
  function w(e3) {
    c2("hAlignChange", { value: e3, style: { justifyContent: e3 === A.Left ? "flex-start" : e3 === A.Center ? "center" : e3 === A.Right ? "flex-end" : "center" } });
  }
  function E(e3) {
    c2("vAlignChange", { value: e3, style: { alignItems: e3 === B.Top ? "flex-start" : e3 === B.Center ? "center" : e3 === B.Bottom ? "flex-end" : "unset" } });
  }
  function G(e3) {
    c2("fontChange", { value: e3, style: { fontFamily: e3 } });
  }
  function J(e3) {
    e3 ? c2("sizeChange", { value: e3, style: { fontSize: `${e3}px` } }) : (b2.value = 12, c2("sizeChange", { value: 12, style: { fontSize: "12px" } })), q(R2.value, z2.value);
  }
  return n(() => s2.textStyle, (e3) => {
    e3 && (b2.value = s2.textStyle?.fontSize ?? 12, k2.value = s2.textStyle?.font ?? I[0].value, z2.value = s2.textStyle?.textColor, R2.value = s2.textStyle?.fontStyle);
  }, { immediate: true, deep: true }), (t2, n2) => (o(), a("div", { class: i(r(d2)) }, [f("div", W, [e2.hideFont ? y("", true) : (o(), v(r(_), { key: 0, style: { flex: "1" }, value: k2.value, "onUpdate:value": n2[0] || (n2[0] = (e3) => k2.value = e3), options: r(I), onChange: G }, null, 8, ["value", "options"])), f("div", D, [u(r(T), { value: b2.value, "onUpdate:value": n2[1] || (n2[1] = (e3) => b2.value = e3), bordered: false, placeholder: "大小", controls: false, min: 6, maxlength: 4, onChange: J }, null, 8, ["value"]), n2[2] || (n2[2] = f("div", { class: "suffix" }, "px", -1))]), e2.hideAlign ? y("", true) : (o(), v(O, { key: 1, "align-type": e2.textStyle?.hAlignType, onAlignChange: w }, null, 8, ["align-type"]))]), f("div", L, [f("div", M, [u(r(F), { type: e2.colorType, "direct-confirm": true, value: z2.value, onConfirmChange: H, onInputChange: K }, null, 8, ["type", "value"])]), u($, m({ hide: e2.hideFontStyle }, R2.value, { onFontStyleChange: V }), null, 16, ["hide"])]), e2.verticalAlign ? (o(), a("div", N, [u(U, { "align-type": e2.textStyle?.vAlignType, onAlignChange: E }, null, 8, ["align-type"])])) : y("", true)], 2));
} }), [["__scopeId", "data-v-ce3a79e4"]]);
export {
  R as T
};
