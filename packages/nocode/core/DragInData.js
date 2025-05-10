import { defineComponent as e, createBlock as a, openBlock as t, unref as n, withCtx as o, renderSlot as l, useCssVars as i, computed as r, watch as s, reactive as u, ref as c, createElementBlock as d, normalizeClass as m, createElementVNode as p, createVNode as f, createCommentVNode as v, normalizeStyle as C, toDisplayString as g, withModifiers as h, resolveComponent as y, Fragment as k, renderList as _, nextTick as b, createTextVNode as N, onMounted as I, onUnmounted as x } from "vue";
import { theme as D, Tooltip as E, Dropdown as R, Button as T, Menu as A, Input as S, RadioGroup as M, RadioButton as O, Divider as $, Checkbox as V, Slider as w, Empty as L } from "ant-design-vue";
import { useMessage as U, useDesign as B } from "@mfish/core/hooks";
import { Icon as j } from "@mfish/core/components/Icon";
import { useModalInner as P, BasicModal as z, useModal as F } from "@mfish/core/components/Modal";
import { router as H } from "@mfish/core/router";
import { useOutsideOpen as J } from "@mfish/core/utils/OutsideOpenUtils";
import { H as q, _ as G, u as K, I as Q, J as W, s as X, S as Y, K as Z, h as ee, g as ae, E as te, N as ne, j as oe, b as le, O as ie, Q as re, R as se, f as ue } from "./index.js";
import "@vueuse/core";
import { debounce as ce, cloneDeep as de, throttle as me, pick as pe } from "lodash-es";
import "@mfish/core/enums";
import { isArray as fe } from "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import { ScrollContainer as ve } from "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { u as Ce, E as ge } from "./UseEventSelect.js";
import { C as he } from "./ConfigGroup.js";
import ye from "vuedraggable";
const ke = e({ __name: "DataSelectModal", props: { selectData: { type: Object } }, emits: ["success", "register"], setup(e2, { emit: i2 }) {
  const r2 = e2, s2 = i2, [u2, { setModalProps: c2, closeModal: d2 }] = P(async () => {
    c2({ confirmLoading: false, width: "1200px", defaultFullscreen: true });
  }), { createMessage: m2 } = U();
  function p2() {
    if (r2.selectData) return s2("success", r2.selectData), void d2();
    m2.warning("请选择数据源");
  }
  return (e3, i3) => (t(), a(n(z), { width: "1200px", onRegister: n(u2), title: "数据来源", onOk: p2 }, { default: o(() => [l(e3.$slots, "default")]), _: 3 }, 8, ["onRegister"]));
} }), _e = { key: 0, class: "placeholder" }, be = { key: 0, class: "warning" }, Ne = { key: 2, class: "icon-group" }, Ie = G(e({ __name: "DataSelect", props: { selectData: { type: Object }, dataId: { type: String, default: "" }, dataName: { type: String, default: "" }, isResource: { type: Boolean, default: false }, screenId: { type: String, default: "" } }, emits: ["dataChange", "dataRefresh"], setup(e2, { emit: y2 }) {
  i((e3) => ({ "54d92964": I2.value }));
  const k2 = e2, _2 = y2;
  s(() => k2.dataId, (e3) => {
    e3 ? (A2.id = e3, A2.name = k2.dataName) : (A2.id = "", A2.name = "");
  });
  const { prefixCls: b2 } = B("data-select"), { token: N2 } = D.useToken(), I2 = r(() => N2.value.colorBorder), x2 = c(""), [R2, { openModal: T2 }] = F(), A2 = u({ id: k2.dataId, name: k2.dataName }), S2 = c(false), { open: M2 } = J(q, z2);
  function O2() {
    A2.id && (x2.value = "ant-design:close-circle-filled");
  }
  function $2() {
    x2.value = "";
  }
  function V2() {
    T2(true, {});
  }
  function w2(e3) {
    A2.id = e3.id, A2.name = e3.name, _2("dataChange", n(A2));
  }
  function L2() {
    A2.id = "", A2.name = "", _2("dataChange", n(A2));
  }
  function U2() {
    let e3;
    e3 = k2.isResource ? { configId: A2.id, screenId: k2.screenId } : { configId: A2.id };
    const a2 = H.resolve({ path: "/low-code/mf-api/config", query: e3 });
    M2(a2);
  }
  const P2 = ce(() => z2(), 200);
  function z2() {
    S2.value = true, setTimeout(() => {
      S2.value = false;
    }, 1e3), _2("dataRefresh");
  }
  return (i2, r2) => (t(), d("div", { class: m(n(b2)) }, [p("div", { class: "input", onMouseenter: O2, onMouseleave: $2, onClick: V2 }, [A2.id ? (t(), a(n(E), { key: 1, title: A2.name }, { default: o(() => [p("div", { class: "title", style: C(e2.isResource ? { textDecoration: "line-through", color: "#999" } : {}) }, g(A2.name), 5), e2.isResource ? (t(), d("div", be, " 注意：请将样例数据更换为自己的数据")) : v("", true)]), _: 1 }, 8, ["title"])) : (t(), d("div", _e, "请选择数据来源")), x2.value ? (t(), d("div", Ne, [f(n(E), { title: e2.isResource ? "查看样例数据源配置" : "编辑数据源" }, { default: o(() => [f(n(j), { class: "icon", icon: e2.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined", onClick: h(U2, ["stop"]) }, null, 8, ["icon"])]), _: 1 }, 8, ["title"]), f(n(E), { title: "清空数据源" }, { default: o(() => [f(n(j), { class: "delete-icon", size: 14, icon: x2.value, onClick: h(L2, ["stop"]) }, null, 8, ["icon"])]), _: 1 })])) : v("", true), f(ke, { onRegister: n(R2), onSuccess: w2, "select-data": e2.selectData }, { default: o(() => [l(i2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["onRegister", "select-data"])], 32), f(n(E), { title: "刷新数据源" }, { default: o(() => [f(n(j), { class: "icon", icon: "ant-design:sync-outlined", onClick: n(P2), spin: S2.value }, null, 8, ["onClick", "spin"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-3a060ac3"]]), xe = ["draggable", "onMouseenter", "onDragstart"], De = { class: "title" }, Ee = G(e({ __name: "FieldConfig", props: { fieldList: { type: Array, default: () => [] } }, setup(e2) {
  i((e3) => ({ "699b0e88": I2.value }));
  const l2 = e2, s2 = c(-1), u2 = c(-1), C2 = c(""), { prefixCls: h2 } = B("field-config"), { token: N2 } = D.useToken(), I2 = r(() => N2.value.colorInfoBg), x2 = c(), R2 = K();
  function T2() {
    s2.value = -1;
  }
  function A2() {
    u2.value = s2.value, C2.value = l2.fieldList[s2.value].rename ?? l2.fieldList[s2.value].colName, b(() => {
      var _a, _b;
      (_a = x2.value) == null ? void 0 : _a.focus(), (_b = x2.value) == null ? void 0 : _b.select();
    });
  }
  async function S2(e3) {
    if (C2.value !== e3.rename) {
      await W(R2.getCurConfigComponent.chart.data.id, e3.colName, C2.value) && (e3.rename = C2.value);
    }
    M2(), X.emit(Y.DATA_RENAME, e3);
  }
  function M2() {
    u2.value = -1, C2.value = "";
  }
  return (l3, i2) => {
    const r2 = y("AInput");
    return t(), d("div", { class: m(n(h2)) }, [(t(true), d(k, null, _(e2.fieldList, (e3, l4) => (t(), d("div", { class: "field-block", key: e3.id, draggable: u2.value !== l4, onMouseenter: (e4) => function(e5) {
      s2.value = e5;
    }(l4), onMouseleave: T2, onDragstart: (a2) => function(e4, a3) {
      var _a;
      (_a = e4.dataTransfer) == null ? void 0 : _a.setData(Z, JSON.stringify(a3));
    }(a2, e3) }, [f(n(j), { class: "icon", icon: n(Q)(e3.dataType) }, null, 8, ["icon"]), u2.value !== l4 ? (t(), a(n(E), { key: 0, title: e3.colName + (e3.comment ? `[${e3.comment}]` : ""), placement: "left" }, { default: o(() => [p("div", De, g(e3.rename ?? e3.colName), 1)]), _: 2 }, 1032, ["title"])) : (t(), a(r2, { key: 1, bordered: false, value: C2.value, "onUpdate:value": i2[0] || (i2[0] = (e4) => C2.value = e4), ref_for: true, ref: (e4) => x2.value = e4, onPressEnter: (a2) => S2(e3), onBlur: M2 }, null, 8, ["value", "onPressEnter"])), s2.value === l4 && u2.value !== l4 ? (t(), a(n(E), { key: 2, title: "重命名" }, { default: o(() => [f(n(j), { class: "icon edit", icon: "ant-design:edit-outlined", onClick: A2 })]), _: 1 })) : v("", true), u2.value === l4 ? (t(), a(n(E), { key: 3, title: "保存" }, { default: o(() => [f(n(j), { class: "icon edit", icon: "ant-design:save-outlined", onClick: (a2) => S2(e3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true)], 40, xe))), 128))], 2);
  };
} }), [["__scopeId", "data-v-20f7782b"]]), Re = ["onMouseenter"], Te = { class: "title" }, Ae = G(e({ __name: "EventSelect", props: { events: { type: Array, default: () => [] }, filterSelf: { type: Boolean, default: false }, hideParam: { type: Boolean, default: false } }, emits: ["ok", "delete", "eventLose"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "1dd24bcd": x2.value }));
  const u2 = e2, C2 = l2, { prefixCls: y2 } = B("event-select"), b2 = c(false), { token: I2 } = D.useToken(), x2 = r(() => I2.value.colorInfoBg), S2 = c([]), M2 = K(), O2 = c(), $2 = c(-1), V2 = c(-1), { getEventComponents: w2 } = Ce(), L2 = r(() => u2.hideParam ? "300px" : "420px"), U2 = r(() => {
    if (u2.events && u2.events.length > 0) {
      const e3 = [];
      for (const a2 of u2.events) {
        const t2 = ee(M2.getComponentList, a2.id);
        if (!t2) {
          C2("eventLose", a2.id);
          continue;
        }
        let n2;
        t2.chart.data.headers && (n2 = t2.chart.data.headers[a2.param]), n2 ? e3.push(`${t2.chart.name} / ${ae(a2.event, t2.chart.type)} / ${n2.rename ?? n2.colName}`) : e3.push(`${t2.chart.name} / ${ae(a2.event, t2.chart.type)}`);
      }
      return e3;
    }
    return [];
  });
  function P2() {
    b2.value = false;
  }
  function z2() {
    C2("ok", { event: de(O2.value), modifyIndex: V2.value }), b2.value = false;
  }
  s(() => {
    var _a;
    return (_a = M2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    b2.value = false;
  });
  const F2 = (e3) => {
    b2.value = e3, V2.value = -1, e3 && (S2.value = w2(u2.filterSelf)), O2.value = void 0;
  };
  function H2(e3) {
    O2.value = e3;
  }
  function J2() {
    $2.value = -1;
  }
  return (l3, i2) => (t(), a(n(R), { trigger: ["click"], open: b2.value, onOpenChange: F2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: L2.value } }, { overlay: o(() => [f(n(A), null, { default: o(() => [f(n(A).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: o(() => [f(ge, { "hide-param": e2.hideParam, value: O2.value, "component-list": S2.value, onSelectChange: H2 }, null, 8, ["hide-param", "value", "component-list"]), p("div", { class: m(`${n(y2)}-ok-button`) }, [f(n(T), { class: "mr-2", onClick: P2 }, { default: o(() => i2[1] || (i2[1] = [N("取消")])), _: 1 }), f(n(T), { type: "primary", onClick: z2 }, { default: o(() => i2[2] || (i2[2] = [N("确定")])), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: o(() => [p("div", { class: m(n(y2)) }, [(t(true), d(k, null, _(U2.value, (e3, l4) => (t(), d("div", { class: "item", key: l4, onClick: i2[0] || (i2[0] = h((e4) => b2.value = false, ["stop"])), onMouseenter: (e4) => function(e5) {
    $2.value = e5;
  }(l4), onMouseleave: J2 }, [f(n(E), { title: e3, placement: "left" }, { default: o(() => [p("div", Te, g(e3), 1)]), _: 2 }, 1032, ["title"]), $2.value === l4 ? (t(), a(n(E), { key: 0, title: "修改" }, { default: o(() => [f(n(j), { class: "icon", icon: "ant-design:edit-outlined", onClick: h((e4) => function(e5) {
    S2.value = w2(u2.filterSelf), O2.value = u2.events[e5], V2.value = e5, b2.value = true;
  }(l4), ["stop"]) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true), $2.value === l4 ? (t(), a(n(E), { key: 1, title: "删除" }, { default: o(() => [f(n(j), { class: "icon", icon: "ant-design:delete-outlined", onClick: (e4) => function(e5) {
    C2("delete", e5), b2.value = false;
  }(l4) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true)], 40, Re))), 128)), f(n(T), { size: "small", type: "link", class: m(`${n(y2)}-drop-button`) }, { icon: o(() => [f(n(j), { size: 12, icon: "ant-design:plus-outlined" })]), default: o(() => [i2[3] || (i2[3] = p("span", { class: "content" }, "绑定已开启事件", -1))]), _: 1 }, 8, ["class"])], 2)]), _: 1 }, 8, ["open", "overlay-style"]));
} }), [["__scopeId", "data-v-d60d2d25"]]), Se = G(e({ __name: "VariableSelect", props: { variable: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: l2 }) {
  const i2 = e2, r2 = l2, { prefixCls: u2 } = B("variable-select"), d2 = c(false), C2 = K(), g2 = c(), y2 = c([]), k2 = c(""), _2 = c(false), b2 = () => {
    var _a;
    if ((_a = i2.variable) == null ? void 0 : _a.id) {
      const e3 = ee(C2.getComponentList, i2.variable.id);
      if (!e3) return r2("ok"), "";
      let a2;
      if (e3.chart.data.headers && (a2 = e3.chart.data.headers[i2.variable.param]), a2) return `${e3.chart.name} / ${a2.rename ?? a2.colName}`;
    }
    return "";
  };
  function I2() {
    d2.value = false, k2.value = b2();
  }
  function x2() {
    r2("ok", de(g2.value)), d2.value = false;
  }
  s(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    d2.value = false;
  }), s(() => i2.variable, () => {
    k2.value = b2();
  }, { deep: true, immediate: true });
  const D2 = (e3) => {
    d2.value = e3, e3 ? function() {
      y2.value = [];
      const e4 = (e5) => e5.chart.data && e5.chart.data.dataSet && (i2.filterSelf && e5.chart.id !== C2.getCurConfigComponent.chart.id || !i2.filterSelf);
      for (const a2 of C2.getComponentList) {
        if (a2.chart.type !== te.MfCombine) {
          e4(a2) && y2.value.push(de(a2));
          continue;
        }
        const t2 = de(a2);
        t2.chart.options.components = t2.chart.options.components.filter((a3) => e4(a3)), (t2.chart.options.components.length > 0 || e4(t2)) && y2.value.push(t2);
      }
    }() : k2.value = b2(), g2.value = de(i2.variable);
  };
  function E2(e3) {
    g2.value = e3;
  }
  function M2() {
    r2("ok", {});
  }
  return (e3, l3) => (t(), a(n(R), { trigger: ["click"], open: d2.value, onOpenChange: D2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "270px" } }, { overlay: o(() => [f(n(A), null, { default: o(() => [f(n(A).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: o(() => [f(ge, { "hide-event": true, value: g2.value, "component-list": y2.value, onSelectChange: E2 }, null, 8, ["value", "component-list"]), p("div", { class: m(`${n(u2)}-ok-button`) }, [f(n(T), { class: "mr-2", onClick: I2 }, { default: o(() => l3[4] || (l3[4] = [N("取消")])), _: 1 }), f(n(T), { type: "primary", onClick: x2 }, { default: o(() => l3[5] || (l3[5] = [N("确定")])), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: o(() => [p("div", { class: m(n(u2)), onMouseenter: l3[2] || (l3[2] = (e4) => _2.value = true), onMouseleave: l3[3] || (l3[3] = (e4) => _2.value = false) }, [f(n(S), { class: m(`${n(u2)}-drop-input`), placeholder: "请选择参数来源", value: k2.value, "onUpdate:value": l3[0] || (l3[0] = (e4) => k2.value = e4), onChange: l3[1] || (l3[1] = (e4) => d2.value = true) }, { suffix: o(() => [_2.value && k2.value ? (t(), a(n(j), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: h(M2, ["stop"]) })) : v("", true), f(n(j), { class: "drop-icon", size: 12, icon: d2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-0c34a5c2"]]), Me = { class: "title" }, Oe = { class: "param" }, $e = { key: 0, style: { color: "red" } }, Ve = { key: 0 }, we = { key: 1 }, Le = { key: 2 }, Ue = G(e({ __name: "DataParamsConfig", props: { params: { type: Array, default: () => [] } }, emits: ["paramChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "6d74fa88": C2.value }));
  const s2 = l2, { prefixCls: u2 } = B("data-params-config"), { token: c2 } = D.useToken(), C2 = r(() => c2.value.colorBorder), h2 = K(), { createMessage: y2 } = U();
  const b2 = (e3, a2) => {
    const t2 = () => {
      const e4 = "错误：组件参数存在循环引用，请检查";
      throw y2.error(e4), new Error(e4);
    }, n2 = (e4) => {
      const a3 = h2.getComponent(e4);
      if (a3 == null ? void 0 : a3.chart.data.params) {
        for (const e5 of Object.values(a3 == null ? void 0 : a3.chart.data.params)) if (e5 == null ? void 0 : e5.value) if (fe(e5.value)) for (const a4 of e5.value) a4.id === h2.getCurConfigComponent.chart.id && t2(), n2(a4.id);
        else e5.value.id === h2.getCurConfigComponent.chart.id ? t2() : n2(e5.value.id);
      }
      return a3;
    };
    if (e3) {
      const t3 = n2(e3.id);
      if (!t3) return;
      void 0 === h2.getCurConfigComponent.chart.data.priority && (h2.getCurConfigComponent.chart.data.priority = 0), h2.getCurConfigComponent.chart.data.priority <= (t3.chart.data.priority ?? 0) && (h2.getCurConfigComponent.chart.data.priority = t3.chart.data.priority + 1);
      const o2 = 0 === (t3 == null ? void 0 : t3.chart.data.type) ? t3 == null ? void 0 : t3.chart.data.dataSet : t3 == null ? void 0 : t3.chart.data.result;
      if (fe(o2)) return { [a2.name]: o2[0][e3.param] };
      if (o2) return { [a2.name]: o2[e3.param] };
    }
  };
  function I2(e3) {
    const a2 = h2.getCurConfigComponent.chart;
    a2.data.paramsValue ? a2.data.paramsValue = { ...a2.data.paramsValue, ...e3 } : a2.data.paramsValue = e3, s2("paramChange");
  }
  const x2 = me((e3, a2) => {
    I2({ [a2.name]: e3.target.value });
  }, 500);
  return (l3, i2) => (t(true), d(k, null, _(e2.params, (e3) => (t(), d("div", { class: m(n(u2)), key: e3.name }, [p("div", Me, [f(n(E), { title: e3.remark }, { default: o(() => [p("div", Oe, [1 === e3.required ? (t(), d("span", $e, "*")) : v("", true), N(" " + g(e3.name), 1)])]), _: 2 }, 1032, ["title"]), f(n(E), { placement: "topRight" }, { title: o(() => i2[0] || (i2[0] = [p("div", null, [p("span", { style: { "font-weight": "700" } }, "常量："), N("设置固定参数")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "变量："), N("设置其他组件数据或全局参数（第一次加载设置，不会随前者变化） ")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "事件："), N(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")], -1)])), default: o(() => [n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] ? (t(), a(n(M), { key: 0, class: "radio-group", size: "small", value: n(h2).getCurConfigComponent.chart.data.params[e3.name].type, "onUpdate:value": (a2) => n(h2).getCurConfigComponent.chart.data.params[e3.name].type = a2, onChange: (a2) => function(e4, a3) {
    var _a;
    const t2 = de(h2.getCurConfigComponent.chart.data.params);
    switch ((_a = e4.target) == null ? void 0 : _a.value) {
      case ne.VARIABLE:
        t2[a3.name].value = void 0;
        break;
      case ne.EVENT:
        t2[a3.name].value = [];
        break;
      default:
        t2[a3.name].value = a3.defaultValue, a3.defaultValue && I2({ [a3.name]: a3.defaultValue });
    }
    h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, { default: o(() => [f(n(O), { class: "radio-button", value: n(ne).CONSTANT }, { default: o(() => i2[1] || (i2[1] = [N("常量")])), _: 1 }, 8, ["value"]), f(n(O), { class: "radio-button", value: n(ne).VARIABLE }, { default: o(() => i2[2] || (i2[2] = [N("变量")])), _: 1 }, 8, ["value"]), f(n(O), { class: "radio-button", value: n(ne).EVENT }, { default: o(() => i2[3] || (i2[3] = [N("事件")])), _: 1 }, 8, ["value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])) : v("", true)]), _: 2 }, 1024)]), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).CONSTANT ? (t(), d("div", Ve, [f(n(S), { value: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, "onUpdate:value": (a2) => n(h2).getCurConfigComponent.chart.data.params[e3.name].value = a2, placeholder: "请输入常量参数", onChange: (a2) => n(x2)(a2, e3) }, null, 8, ["value", "onUpdate:value", "onChange"])])) : v("", true), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).VARIABLE ? (t(), d("div", we, [f(Se, { "filter-self": true, variable: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = de(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = e4, I2(b2(e4, a3)), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["variable", "onOk"])])) : v("", true), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).EVENT ? (t(), d("div", Le, [f(Ae, { "filter-self": true, events: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = e4.event, n2 = de(h2.getCurConfigComponent.chart.data.params);
    let o2 = false;
    n2[a3.name].value || (n2[a3.name].value = [], o2 = true);
    const l4 = n2[a3.name].value.findIndex((e5) => e5.id === t2.id && e5.event === t2.event);
    -1 === l4 ? (e4.modifyIndex >= 0 ? n2[a3.name].value.splice(e4.modifyIndex, 1, t2) : n2[a3.name].value.push(t2), o2 = true) : n2[a3.name].value.param !== t2.param && (n2[a3.name].value.splice(l4, 1, t2), o2 = true), o2 && (I2(b2(e4.event, a3)), h2.getCurConfigComponent.chart.data.params = n2);
  }(a2, e3), onDelete: (a2) => function(e4, a3) {
    var _a;
    const t2 = de(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value.splice(e4, 1), ((_a = t2[a3.name].value) == null ? void 0 : _a.length) > 0 ? I2(b2(t2[a3.name].value[0], a3)) : I2({ [a3.name]: void 0 }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3), onEventLose: (a2) => function(e4, a3) {
    var _a;
    const t2 = de(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = t2[a3.name].value.filter((a4) => a4.id !== e4), ((_a = t2[a3.name].value) == null ? void 0 : _a.length) > 0 ? I2(b2(t2[a3.name].value[0], a3)) : I2({ [a3.name]: void 0 }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])])) : v("", true)], 2))), 128));
} }), [["__scopeId", "data-v-2f8d4067"]]), Be = { class: "title" }, je = { class: "title" }, Pe = { class: "title" }, ze = { class: "title" }, Fe = { key: 0 }, He = { class: "title" }, Je = { class: "data-header" }, qe = { class: "data-set" }, Ge = { class: "target-data" }, Ke = e({ __name: "DataConfig", props: { selectData: { type: Object } }, emits: ["refreshData"], setup(e2, { emit: i2 }) {
  const r2 = i2, C2 = K(), g2 = [{ label: "静态数据", value: 0 }, { label: "动态数据", value: 1 }], { prefixCls: h2 } = B("data-config"), y2 = c([]), _2 = c([]), { setDataTable: b2 } = oe(), x2 = u({ open: false, interval: 5 }), D2 = u({ open: false, events: [] });
  function R2(e3) {
    var _a;
    C2.getCurConfigComponent.chart.data.id = e3.id, (_a = C2.getCurConfigComponent.chart) == null ? true : delete _a.isResource, C2.getCurConfigComponent.chart.data.name = e3.name;
  }
  function T2() {
    var _a, _b, _c, _d, _e2, _f, _g;
    const e3 = ((_b = (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.isResource) && ((_c = C2.getCurConfigComponent) == null ? void 0 : _c.chart.data.id) ? `${C2.getId},${(_d = C2.getCurConfigComponent) == null ? void 0 : _d.chart.data.id}` : (_e2 = C2.getCurConfigComponent) == null ? void 0 : _e2.chart.data.id;
    if (e3) {
      const a2 = [], t2 = ((_g = (_f = C2.getCurConfigComponent) == null ? void 0 : _f.chart) == null ? void 0 : _g.isResource) ? ie : re;
      a2.push(t2(e3).then((e4) => {
        y2.value = e4, function(e5) {
          const a3 = {};
          e5.forEach((e6) => {
            e6.colName && (a3[e6.colName] = { colName: e6.colName, rename: e6.rename, dataType: e6.dataType });
          }), C2.getCurConfigComponent.chart.data.headers = a3;
        }(e4), function(e5) {
          if (!C2.getCurConfigComponent.chart.data.fields) return void (C2.getCurConfigComponent.chart.data.fields = {});
          const a3 = Object.keys(C2.getCurConfigComponent.chart.data.fields);
          for (const t3 of a3) {
            const a4 = C2.getCurConfigComponent.chart.data.fields[t3];
            for (let t4 = 0; t4 < a4.length; t4++) {
              const n2 = a4[t4], o2 = e5.find((e6) => e6.colName === n2.colName);
              o2 ? (n2.rename = o2.rename, n2.dataType = o2.dataType) : a4.splice(t4--, 1);
            }
          }
        }(e4);
      }).catch(() => {
        y2.value = [];
      }), async function() {
        var _a2;
        const e4 = await se({ apiId: (_a2 = C2.getCurConfigComponent) == null ? void 0 : _a2.chart.data.id, pageNum: 1, pageSize: 1e4 });
        e4.total > 0 ? (_2.value = e4.list, function(e5) {
          var _a3;
          const a3 = () => {
            const a4 = {}, t4 = {};
            e5.forEach((e6) => {
              a4[e6.name] = { type: ne.CONSTANT, value: e6.defaultValue }, e6.defaultValue && (t4[e6.name] = e6.defaultValue);
            }), C2.getCurConfigComponent.chart.data.params = a4, C2.getCurConfigComponent.chart.data.paramsValue = t4;
          };
          if (!((_a3 = C2.getCurConfigComponent.chart.data) == null ? void 0 : _a3.params)) return void a3();
          let t3 = false;
          for (const a4 of e5) if (!C2.getCurConfigComponent.chart.data.params[a4.name]) {
            t3 = true;
            break;
          }
          for (const a4 of Object.keys(C2.getCurConfigComponent.chart.data.params)) if (!e5.some((e6) => e6.name === a4)) {
            t3 = true;
            break;
          }
          t3 && a3();
        }(e4.list)) : (_2.value = [], C2.getCurConfigComponent.chart.data.params = void 0);
      }()), Promise.all(a2).then(() => {
        r2("refreshData");
      });
    } else y2.value = [], _2.value = [], C2.getCurConfigComponent.chart.data.fields = {};
  }
  function A2(e3) {
    var _a;
    if ((_a = C2.getCurConfigComponent.chart.data) == null ? void 0 : _a.headers) {
      const a2 = C2.getCurConfigComponent.chart.data.headers[e3.colName];
      a2 && (a2.rename = e3.rename);
    }
  }
  function S2(e3) {
    const a2 = D2.events.findIndex((a3) => a3.id === e3.event.id && a3.event === e3.event.event);
    -1 === a2 ? e3.modifyIndex >= 0 ? D2.events.splice(e3.modifyIndex, 1, e3.event) : D2.events.push(e3.event) : D2.events.splice(a2, 1, e3.event);
  }
  function O2(e3) {
    -1 !== e3 && D2.events.splice(e3, 1);
  }
  return I(() => {
    var _a, _b, _c, _d, _e2, _f;
    X.on(Y.DATA_RENAME, A2), void 0 !== ((_a = C2.getCurConfigComponent.chart.data) == null ? void 0 : _a.autoRefresh) && (x2.open = (_b = C2.getCurConfigComponent.chart.data) == null ? void 0 : _b.autoRefresh.open, x2.interval = (_c = C2.getCurConfigComponent.chart.data) == null ? void 0 : _c.autoRefresh.interval), void 0 !== ((_d = C2.getCurConfigComponent.chart.data) == null ? void 0 : _d.eventRefresh) && (D2.open = (_e2 = C2.getCurConfigComponent.chart.data) == null ? void 0 : _e2.eventRefresh.open, D2.events = (_f = C2.getCurConfigComponent.chart.data) == null ? void 0 : _f.eventRefresh.events);
  }), s(x2, (e3) => {
    e3 && (C2.getCurConfigComponent.chart.data.autoRefresh = { open: e3.open, interval: e3.interval });
  }), s(D2, (e3) => {
    e3 && (C2.getCurConfigComponent.chart.data.eventRefresh = { open: e3.open, events: e3.events });
  }), s(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.data.type;
  }, (e3) => {
    var _a;
    if (0 !== e3) T2();
    else {
      const e4 = le[(_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.type];
      C2.getCurConfigComponent.chart.data.headers = e4.defaultHeaders && e4.defaultHeaders(C2.getCurConfigComponent.chart);
    }
  }, { immediate: true }), s(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.data.id;
  }, () => {
    var _a;
    0 !== ((_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.data.type) && (T2(), b2());
  }), (i3, s2) => (t(), a(n(ve), null, { default: o(() => [p("div", { class: m(n(h2)) }, [p("div", Be, [s2[6] || (s2[6] = N(" 数据类型 ")), f(n(M), { value: n(C2).getCurConfigComponent.chart.data.type, "onUpdate:value": s2[0] || (s2[0] = (e3) => n(C2).getCurConfigComponent.chart.data.type = e3), options: g2, "option-type": "button", "button-style": "solid", size: "small" }, null, 8, ["value"])]), f(n($), { style: { margin: "0" } }), 0 === n(C2).getCurConfigComponent.chart.data.type ? l(i3.$slots, "static-data", { key: 0 }, void 0, true) : (t(), d(k, { key: 1 }, [p("div", je, [f(n(E), { title: "点击右侧输入框切换数据源", placement: "left" }, { default: o(() => s2[7] || (s2[7] = [N(" 数据来源")])), _: 1 }), f(Ie, { "select-data": e2.selectData, "data-id": n(C2).getCurConfigComponent.chart.data.id, "data-name": n(C2).getCurConfigComponent.chart.data.name, "is-resource": n(C2).getCurConfigComponent.chart.isResource, "screen-id": n(C2).getId, onDataChange: R2, onDataRefresh: T2 }, { default: o(() => [l(i3.$slots, "data-select", {}, void 0, true)]), _: 3 }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])]), p("div", Pe, [f(n(E), { title: "接口允许返回数据的最大条数", placement: "left" }, { default: o(() => s2[8] || (s2[8] = [N(" 数据限制")])), _: 1 }), f(n(ue), { value: n(C2).getCurConfigComponent.chart.data.limit, "onUpdate:value": s2[1] || (s2[1] = (e3) => n(C2).getCurConfigComponent.chart.data.limit = e3), max: n(C2).getCurConfigComponent.chart.data.maxLimit <= 0 ? 1 / 0 : n(C2).getCurConfigComponent.chart.data.maxLimit, min: 1, suffix: "条" }, null, 8, ["value", "max"])]), f(he, { title: "刷新设置" }, { default: o(() => [p("div", ze, [f(n(E), { title: "数据按照刷新间隔时间更新数据（编辑环境不生效）", placement: "left" }, { default: o(() => [f(n(V), { checked: x2.open, "onUpdate:checked": s2[2] || (s2[2] = (e3) => x2.open = e3) }, { default: o(() => s2[9] || (s2[9] = [N(" 自动刷新")])), _: 1 }, 8, ["checked"])]), _: 1 }), x2.open ? (t(), d("div", Fe, [f(n(w), { style: { margin: "0" }, "tip-formatter": (e3) => `刷新间隔 ${e3}（分钟）`, value: x2.interval, "onUpdate:value": s2[3] || (s2[3] = (e3) => x2.interval = e3), min: 0.5, max: 60, step: 0.5 }, null, 8, ["tip-formatter", "value"])])) : v("", true)]), p("div", He, [f(n(E), { title: "通过其他组件事件触发数据更新", placement: "left" }, { default: o(() => [f(n(V), { checked: D2.open, "onUpdate:checked": s2[4] || (s2[4] = (e3) => D2.open = e3) }, { default: o(() => s2[10] || (s2[10] = [N(" 事件刷新")])), _: 1 }, 8, ["checked"])]), _: 1 }), D2.open ? (t(), a(Ae, { key: 0, "filter-self": true, "hide-param": true, events: D2.events, onOk: S2, onDelete: O2 }, null, 8, ["events"])) : v("", true)])]), _: 1 }), _2.value && _2.value.length > 0 ? (t(), a(he, { key: 0, title: "参数设置" }, { default: o(() => [f(Ue, { params: _2.value, onParamChange: s2[5] || (s2[5] = () => {
    r2("refreshData");
  }) }, null, 8, ["params"])]), _: 1 })) : v("", true), y2.value && y2.value.length > 0 ? (t(), a(he, { key: 1, title: "数据设置", "allow-collapse": false }, { default: o(() => [p("div", Je, [s2[11] || (s2[11] = p("div", null, "源数据", -1)), f(n(j), { icon: "ant-design:double-right-outlined" }), s2[12] || (s2[12] = p("div", null, "目标数据", -1))]), p("div", qe, [f(Ee, { "field-list": y2.value }, null, 8, ["field-list"]), s2[13] || (s2[13] = p("div", { class: "divide-line" }, null, -1)), p("div", Ge, [l(i3.$slots, "target-data", {}, void 0, true)])])]), _: 3 })) : v("", true)], 64)), l(i3.$slots, "default", {}, void 0, true)], 2)]), _: 3 }));
} }), Qe = G(Ke, [["__scopeId", "data-v-e1fa213d"]]), We = ["onMouseenter"], Xe = { class: "title" }, Ye = e({ __name: "DragInData", props: { fields: { type: Array, default: () => [] }, maxCount: { type: Number, default: 9999 }, height: { type: Number, default: 0 } }, emits: ["dataChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "4bae6fc2": N2.value }));
  const u2 = e2, h2 = l2, { prefixCls: y2 } = B("drag-in-data"), k2 = c(u2.fields), _2 = c(-1), { token: b2 } = D.useToken(), N2 = r(() => b2.value.colorInfoBg);
  s(() => u2.fields, () => {
    k2.value = u2.fields;
  });
  const E2 = (e3) => {
    var _a;
    const a2 = (_a = e3.dataTransfer) == null ? void 0 : _a.getData(Z);
    if (!a2) return;
    const t2 = JSON.parse(a2);
    k2.value.some((e4) => e4.colName === t2.colName && e4.rename === t2.rename) || (k2.value.length >= u2.maxCount && k2.value.shift(), k2.value.push(pe(t2, ["colName", "rename", "dataType"])), h2("dataChange", k2.value));
  };
  function R2() {
    _2.value = -1;
  }
  function T2(e3) {
    const a2 = k2.value.findIndex((a3) => a3.colName === e3.colName);
    -1 !== a2 && (k2.value[a2].rename = e3.rename, h2("dataChange", k2.value));
  }
  function A2() {
    h2("dataChange", k2.value);
  }
  return I(() => {
    X.on(Y.DATA_RENAME, T2);
  }), x(() => {
    X.off(Y.DATA_RENAME, T2);
  }), (l3, i2) => (t(), d("div", { class: m(n(y2)), style: C(e2.height > 0 ? { height: `${e2.height}px` } : {}), onDrop: E2 }, [0 === k2.value.length ? (t(), a(n(L), { key: 0, class: "empty", description: "拖动数据到此处", image: n(L).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])) : (t(), a(n(ve), { key: 1 }, { default: o(() => [f(n(ye), { "item-key": "id", modelValue: k2.value, "onUpdate:modelValue": i2[0] || (i2[0] = (e3) => k2.value = e3), animation: "300", "ghost-class": "ghost", class: "drag-data", onChange: A2 }, { item: o(({ index: e3, element: o2 }) => [p("div", { class: "field-block", onMouseenter: (a2) => function(e4) {
    _2.value = e4;
  }(e3), onMouseleave: R2 }, [f(n(j), { class: "icon", icon: n(Q)(o2.dataType) }, null, 8, ["icon"]), p("div", Xe, g(o2.rename ?? o2.colName), 1), _2.value === e3 ? (t(), a(n(j), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (a2) => function(e4) {
    k2.value.splice(e4, 1), h2("dataChange", k2.value);
  }(e3) }, null, 8, ["onClick"])) : v("", true)], 40, We)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))], 38));
} }), Ze = G(Ye, [["__scopeId", "data-v-c9719241"]]);
export {
  Qe as D,
  Ze as a
};
