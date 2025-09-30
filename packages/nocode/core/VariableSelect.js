import { defineComponent as e, useCssVars as a, computed as l, ref as n, useTemplateRef as t, watch as o, resolveComponent as u, createElementBlock as i, openBlock as s, normalizeClass as r, unref as v, createBlock as c, createElementVNode as d, withCtx as p, Fragment as m, renderList as f, createCommentVNode as g, toDisplayString as C, withDirectives as h, createVNode as k, vShow as y, createTextVNode as b, createSlots as _, withModifiers as S } from "vue";
import { theme as x, Input as E, Empty as I, Dropdown as z, Tag as M, Menu as P, Segmented as T, Button as V } from "ant-design-vue";
import { Icon as $ } from "@mfish/core/components/Icon";
import { useDesign as B, useRootSetting as U } from "@mfish/core/hooks";
import { u as j, _ as w, f as A, D as L } from "./index.js";
import { E as O } from "./EventSelectItems.js";
import { cloneDeep as R } from "lodash-es";
import { ScrollContainer as D } from "@mfish/core/components/Container";
const G = ["title", "onClick", "onMouseenter"], N = { class: "title" }, F = { class: "title" }, q = { class: "operator" }, H = { key: 1, class: "param-edit" }, J = { key: 2, class: "error" }, K = w(e({ __name: "GlobalParamsSelect", props: { value: { type: Object, default: () => ({}) } }, emits: ["selectChange"], setup(e2, { emit: _2 }) {
  a((e3) => ({ v14eab416: U2.value }));
  const S2 = e2, z2 = _2, { prefixCls: M2 } = B("global-params-select"), P2 = j(), T2 = n([]), { token: V2 } = x.useToken(), U2 = l(() => V2.value.colorInfoBg);
  l(() => V2.value.colorBorder);
  const w2 = n(-1), A2 = n(-1), L2 = n(-1), O2 = n(), K2 = t("scrollContainerRef"), Q2 = n();
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
    return s(), i("div", { class: r(v(M2)) }, [T2.value.length > 0 ? (s(), c(v(D), { key: 0, ref_key: "scrollContainerRef", ref: K2, class: r(`${v(M2)}-items`) }, { default: p(() => [(s(true), i(m, null, f(T2.value, (e4, n2) => (s(), i(m, { key: n2 }, [A2.value !== n2 ? (s(), i("div", { key: 0, class: r(["item", w2.value === n2 ? "select" : ""]), title: e4.name, onClick: (e5) => (function(e6) {
      w2.value = e6, z2("selectChange", R(T2.value[e6]));
    })(n2), onMouseenter: (e5) => L2.value = n2, onMouseleave: a2[0] || (a2[0] = (e5) => L2.value = -1) }, [d("div", N, C(e4.name), 1), d("div", F, C(e4.defaultValue), 1), d("div", q, [h(k(l2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:edit-outlined", onClick: (e5) => (function(e6) {
      X() && (A2.value = e6, w2.value = e6);
    })(n2) }, null, 8, ["onClick"]), [[y, L2.value === n2]]), h(k(l2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:delete-outlined", onClick: (e5) => (function(e6) {
      X() && Y(e6);
    })(n2) }, null, 8, ["onClick"]), [[y, L2.value === n2]])])], 42, G)) : (s(), i("div", H, [k(v(E), { placeholder: "输入参数名", size: "small", value: e4.name, "onUpdate:value": (a3) => e4.name = a3, status: O2.value, maxlength: 20, onPressEnter: X }, null, 8, ["value", "onUpdate:value", "status"]), k(v(E), { placeholder: "输入默认值", size: "small", value: e4.defaultValue, "onUpdate:value": (a3) => e4.defaultValue = a3, maxlength: 100, onPressEnter: X }, null, 8, ["value", "onUpdate:value"]), k(l2, { type: "link", style: { padding: "0" }, size: "small", "pre-icon": "ant-design:save-outlined", onClick: X }), k(l2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:delete-outlined", onClick: (e5) => Y(n2) }, null, 8, ["onClick"])])), A2.value === n2 && Q2.value ? (s(), i("div", J, C(Q2.value), 1)) : g("", true)], 64))), 128))]), _: 1 }, 8, ["class"])) : (s(), c(v(I), { key: 1, description: "暂无变量", image: v(I).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])), d("div", { class: "add-button", onClick: W }, [k(v($), { icon: "ant-design:plus-outlined" }), a2[1] || (a2[1] = b(" 添加全局变量 ", -1))])], 2);
  };
} }), [["__scopeId", "data-v-0a4e87c4"]]), Q = w(e({ __name: "VariableSelect", props: { variable: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const l2 = e2, t2 = a2, { prefixCls: u2 } = B("variable-select"), i2 = n(false), m2 = j(), f2 = n(), h2 = n([]), y2 = n(""), x2 = n(false), I2 = U().getThemeColor, w2 = n([{ value: 1, payload: "组件变量" }, { value: 2, payload: "全局变量" }]), D2 = n(1), G2 = () => {
    if (l2.variable?.id) {
      const e3 = A(m2.getComponentList, l2.variable.id);
      if (!e3) return t2("ok"), "";
      let a3;
      if (e3.chart.data.headers && (a3 = e3.chart.data.headers[l2.variable.param]), a3) return `${e3.chart.name} / ${a3.rename ?? a3.colName}`;
    }
    return 2 === l2.variable?.paramType ? l2.variable.name : "";
  };
  function N2() {
    i2.value = false, y2.value = G2();
  }
  function F2() {
    t2("ok", R(f2.value)), i2.value = false;
  }
  o(() => m2.getCurConfigComponent?.chart.id, () => {
    i2.value = false;
  }), o(() => l2.variable, () => {
    y2.value = G2();
  }, { deep: true, immediate: true });
  const q2 = (e3) => {
    i2.value = e3, e3 ? (function() {
      h2.value = [];
      const e4 = (e5) => e5.chart.data && e5.chart.data.dataSet && (l2.filterSelf && e5.chart.id !== m2.getCurConfigComponent.chart.id || !l2.filterSelf);
      for (const a3 of m2.getComponentList) {
        if (a3.chart.type !== L.MfCombine) {
          e4(a3) && h2.value.push(R(a3));
          continue;
        }
        const l3 = R(a3);
        l3.chart.options.components = l3.chart.options.components.filter((a4) => e4(a4)), (l3.chart.options.components.length > 0 || e4(l3)) && h2.value.push(l3);
      }
    })() : y2.value = G2(), f2.value = R(l2.variable), D2.value = f2.value?.paramType ?? 1;
  };
  function H2(e3) {
    f2.value = { ...e3, paramType: 1 };
  }
  function J2(e3) {
    f2.value = { ...e3, paramType: 2 };
  }
  function Q2() {
    t2("ok", {});
  }
  function W(e3) {
    D2.value = e3;
  }
  return (a3, l3) => (s(), c(v(z), { trigger: ["click"], open: i2.value, onOpenChange: q2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "300px" } }, { overlay: p(() => [k(v(P), null, { default: p(() => [k(v(P).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: p(() => [k(v(T), { value: D2.value, options: w2.value, onChange: W, block: "" }, { label: p(({ payload: e3 }) => [b(C(e3), 1)]), _: 1 }, 8, ["value", "options"]), 2 === D2.value ? (s(), c(K, { key: 0, value: f2.value, onSelectChange: J2 }, null, 8, ["value"])) : (s(), c(O, { key: 1, class: "mt-2", "hide-header": true, "hide-event": true, value: f2.value, "component-list": h2.value, onSelectChange: H2 }, null, 8, ["value", "component-list"])), d("div", { class: r(`${v(u2)}-ok-button`) }, [k(v(V), { class: "mr-2", onClick: N2 }, { default: p(() => [...l3[4] || (l3[4] = [b("取消", -1)])]), _: 1 }), k(v(V), { type: "primary", onClick: F2 }, { default: p(() => [...l3[5] || (l3[5] = [b("确定", -1)])]), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: p(() => [d("div", { class: r(v(u2)), onMouseenter: l3[2] || (l3[2] = (e3) => x2.value = true), onMouseleave: l3[3] || (l3[3] = (e3) => x2.value = false) }, [k(v(E), { class: r(`${v(u2)}-drop-input`), placeholder: "请选择变量来源", value: y2.value, "onUpdate:value": l3[0] || (l3[0] = (e3) => y2.value = e3), onChange: l3[1] || (l3[1] = (e3) => i2.value = true) }, _({ suffix: p(() => [x2.value && y2.value ? (s(), c(v($), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: S(Q2, ["stop"]) })) : g("", true), k(v($), { class: "drop-icon", size: 12, icon: i2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [y2.value ? { name: "prefix", fn: p(() => [2 === e2.variable?.paramType ? (s(), c(v(M), { key: 0, color: v(I2) }, { default: p(() => [...l3[6] || (l3[6] = [b("全局", -1)])]), _: 1 }, 8, ["color"])) : (s(), c(v(M), { key: 1, color: v(I2) }, { default: p(() => [...l3[7] || (l3[7] = [b("组件", -1)])]), _: 1 }, 8, ["color"]))]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-c003aba1"]]);
export {
  Q as V
};
