import { defineComponent as e, useCssVars as a, ref as l, computed as n, useTemplateRef as t, watch as o, resolveComponent as u, openBlock as i, createElementBlock as s, normalizeClass as r, unref as v, createBlock as c, withCtx as d, Fragment as p, renderList as m, createElementVNode as f, toDisplayString as g, withDirectives as C, createVNode as h, vShow as k, createCommentVNode as y, createTextVNode as b, createSlots as _, withModifiers as S } from "vue";
import { theme as x, Input as E, Empty as I, Dropdown as z, Tag as M, Menu as P, Segmented as T, Button as V } from "ant-design-vue";
import { Icon as $ } from "@mfish/core/components/Icon";
import { useDesign as B, useRootSetting as U } from "@mfish/core/hooks";
import { u as j, _ as w, f as A, D as L } from "./index.js";
import { E as O } from "./EventSelectItems.js";
import { cloneDeep as R } from "lodash-es";
import { ScrollContainer as D } from "@mfish/core/components/Container";
const G = ["title", "onClick", "onMouseenter"], N = { class: "title" }, F = { class: "title" }, q = { class: "operator" }, H = { key: 1, class: "param-edit" }, J = { key: 2, class: "error" }, K = w(e({ __name: "GlobalParamsSelect", props: { value: { type: Object, default: () => ({}) } }, emits: ["selectChange"], setup(e2, { emit: _2 }) {
  a((e3) => ({ v14eab416: U2.value }));
  const S2 = e2, z2 = _2, { prefixCls: M2 } = B("global-params-select"), P2 = j(), T2 = l([]), { token: V2 } = x.useToken(), U2 = n(() => V2.value.colorInfoBg);
  n(() => V2.value.colorBorder);
  const w2 = l(-1), A2 = l(-1), L2 = l(-1), O2 = l(), K2 = t("scrollContainerRef"), Q2 = l();
  function W() {
    X() && (T2.value.push({ name: "", defaultValue: "" }), A2.value = T2.value.length - 1, w2.value = A2.value, K2.value?.scrollBottom());
  }
  function X() {
    if (-1 === A2.value) return O2.value = "", true;
    const e3 = T2.value[A2.value].name;
    if (!e3) return O2.value = "error", Q2.value = "参数名不能为空", false;
    if (!/^[\u4E00-\u9FA5\w]{1,20}$/.test(e3)) return O2.value = "error", Q2.value = "参数字符只允许中文、字符、数字、下划线", false;
    return T2.value.some((a2, l2) => l2 !== A2.value && a2.name === e3) ? (O2.value = "error", Q2.value = "参数名不能重复", false) : (P2.getCanvasConfig.globalParams = R(T2.value), z2("selectChange", R(T2.value[A2.value])), A2.value = -1, O2.value = "", Q2.value = "", true);
  }
  function Y(e3) {
    T2.value.splice(e3, 1), P2.getCanvasConfig.globalParams = R(T2.value), A2.value = -1;
  }
  return o(() => P2.getCurConfigComponent, (e3) => {
    e3 && (T2.value = R(P2.getCanvasConfig.globalParams || []), w2.value = T2.value.findIndex((e4) => e4.name === S2.value.name));
  }, { immediate: true }), (e3, a2) => {
    const l2 = u("AButton");
    return i(), s("div", { class: r(v(M2)) }, [T2.value.length > 0 ? (i(), c(v(D), { key: 0, ref_key: "scrollContainerRef", ref: K2, class: r(`${v(M2)}-items`) }, { default: d(() => [(i(true), s(p, null, m(T2.value, (e4, n2) => (i(), s(p, { key: n2 }, [A2.value !== n2 ? (i(), s("div", { key: 0, class: r(["item", w2.value === n2 ? "select" : ""]), title: e4.name, onClick: (e5) => (function(e6) {
      w2.value = e6, z2("selectChange", R(T2.value[e6]));
    })(n2), onMouseenter: (e5) => L2.value = n2, onMouseleave: a2[0] || (a2[0] = (e5) => L2.value = -1) }, [f("div", N, g(e4.name), 1), f("div", F, g(e4.defaultValue), 1), f("div", q, [C(h(l2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:edit-outlined", onClick: (e5) => (function(e6) {
      X() && (A2.value = e6, w2.value = e6);
    })(n2) }, null, 8, ["onClick"]), [[k, L2.value === n2]]), C(h(l2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:delete-outlined", onClick: (e5) => (function(e6) {
      X() && Y(e6);
    })(n2) }, null, 8, ["onClick"]), [[k, L2.value === n2]])])], 42, G)) : (i(), s("div", H, [h(v(E), { placeholder: "输入参数名", size: "small", value: e4.name, "onUpdate:value": (a3) => e4.name = a3, status: O2.value, maxlength: 20, onPressEnter: X }, null, 8, ["value", "onUpdate:value", "status"]), h(v(E), { placeholder: "输入默认值", size: "small", value: e4.defaultValue, "onUpdate:value": (a3) => e4.defaultValue = a3, maxlength: 100, onPressEnter: X }, null, 8, ["value", "onUpdate:value"]), h(l2, { type: "link", style: { padding: "0" }, size: "small", "pre-icon": "ant-design:save-outlined", onClick: X }), h(l2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:delete-outlined", onClick: (e5) => Y(n2) }, null, 8, ["onClick"])])), A2.value === n2 && Q2.value ? (i(), s("div", J, g(Q2.value), 1)) : y("", true)], 64))), 128))]), _: 1 }, 8, ["class"])) : (i(), c(v(I), { key: 1, description: "暂无变量", image: v(I).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])), f("div", { class: "add-button", onClick: W }, [h(v($), { icon: "ant-design:plus-outlined" }), a2[1] || (a2[1] = b(" 添加全局变量 ", -1))])], 2);
  };
} }), [["__scopeId", "data-v-0a4e87c4"]]), Q = w(e({ __name: "VariableSelect", props: { variable: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const n2 = e2, t2 = a2, { prefixCls: u2 } = B("variable-select"), s2 = l(false), p2 = j(), m2 = l(), C2 = l([]), k2 = l(""), x2 = l(false), I2 = U().getThemeColor, w2 = l([{ value: 1, payload: "组件变量" }, { value: 2, payload: "全局变量" }]), D2 = l(1), G2 = () => {
    if (n2.variable?.id) {
      const e3 = A(p2.getComponentList, n2.variable.id);
      if (!e3) return t2("ok"), "";
      let a3;
      if (e3.chart.data.headers && (a3 = e3.chart.data.headers[n2.variable.param]), a3) return `${e3.chart.name} / ${a3.rename ?? a3.colName}`;
    }
    return 2 === n2.variable?.paramType ? n2.variable.name : "";
  };
  function N2() {
    s2.value = false, k2.value = G2();
  }
  function F2() {
    t2("ok", R(m2.value)), s2.value = false;
  }
  o(() => p2.getCurConfigComponent?.chart.id, () => {
    s2.value = false;
  }), o(() => n2.variable, () => {
    k2.value = G2();
  }, { deep: true, immediate: true });
  const q2 = (e3) => {
    s2.value = e3, e3 ? (function() {
      C2.value = [];
      const e4 = (e5) => e5.chart.data && e5.chart.data.dataSet && (n2.filterSelf && e5.chart.id !== p2.getCurConfigComponent.chart.id || !n2.filterSelf);
      for (const a3 of p2.getComponentList) {
        if (a3.chart.type !== L.MfCombine) {
          e4(a3) && C2.value.push(R(a3));
          continue;
        }
        const l2 = R(a3);
        l2.chart.options.components = l2.chart.options.components.filter((a4) => e4(a4)), (l2.chart.options.components.length > 0 || e4(l2)) && C2.value.push(l2);
      }
    })() : k2.value = G2(), m2.value = R(n2.variable), D2.value = m2.value?.paramType ?? 1;
  };
  function H2(e3) {
    m2.value = { ...e3, paramType: 1 };
  }
  function J2(e3) {
    m2.value = { ...e3, paramType: 2 };
  }
  function Q2() {
    t2("ok", {});
  }
  function W(e3) {
    D2.value = e3;
  }
  return (a3, l2) => (i(), c(v(z), { trigger: ["click"], open: s2.value, onOpenChange: q2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "300px" } }, { overlay: d(() => [h(v(P), null, { default: d(() => [h(v(P).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [h(v(T), { value: D2.value, options: w2.value, onChange: W, block: "" }, { label: d(({ payload: e3 }) => [b(g(e3), 1)]), _: 1 }, 8, ["value", "options"]), 2 === D2.value ? (i(), c(K, { key: 0, value: m2.value, onSelectChange: J2 }, null, 8, ["value"])) : (i(), c(O, { key: 1, class: "mt-2", "hide-header": true, "hide-event": true, value: m2.value, "component-list": C2.value, onSelectChange: H2 }, null, 8, ["value", "component-list"])), f("div", { class: r(`${v(u2)}-ok-button`) }, [h(v(V), { class: "mr-2", onClick: N2 }, { default: d(() => [...l2[4] || (l2[4] = [b("取消", -1)])]), _: 1 }), h(v(V), { type: "primary", onClick: F2 }, { default: d(() => [...l2[5] || (l2[5] = [b("确定", -1)])]), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: d(() => [f("div", { class: r(v(u2)), onMouseenter: l2[2] || (l2[2] = (e3) => x2.value = true), onMouseleave: l2[3] || (l2[3] = (e3) => x2.value = false) }, [h(v(E), { class: r(`${v(u2)}-drop-input`), placeholder: "请选择变量来源", value: k2.value, "onUpdate:value": l2[0] || (l2[0] = (e3) => k2.value = e3), onChange: l2[1] || (l2[1] = (e3) => s2.value = true) }, _({ suffix: d(() => [x2.value && k2.value ? (i(), c(v($), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: S(Q2, ["stop"]) })) : y("", true), h(v($), { class: "drop-icon", size: 12, icon: s2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [k2.value ? { name: "prefix", fn: d(() => [2 === e2.variable?.paramType ? (i(), c(v(M), { key: 0, color: v(I2) }, { default: d(() => [...l2[6] || (l2[6] = [b("全局", -1)])]), _: 1 }, 8, ["color"])) : (i(), c(v(M), { key: 1, color: v(I2) }, { default: d(() => [...l2[7] || (l2[7] = [b("组件", -1)])]), _: 1 }, 8, ["color"]))]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-c003aba1"]]);
export {
  Q as V
};
