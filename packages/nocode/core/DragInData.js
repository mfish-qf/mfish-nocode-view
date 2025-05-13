import { defineComponent as e, createBlock as a, openBlock as t, unref as n, withCtx as o, renderSlot as l, useCssVars as i, computed as r, watch as s, reactive as u, ref as c, createElementBlock as d, normalizeClass as m, createElementVNode as p, createVNode as f, createCommentVNode as v, normalizeStyle as C, toDisplayString as g, withModifiers as h, resolveComponent as y, Fragment as k, renderList as _, nextTick as b, useTemplateRef as E, withDirectives as N, vShow as I, createTextVNode as T, onMounted as R, onUnmounted as x } from "vue";
import { theme as D, Tooltip as A, Input as M, Empty as S, Dropdown as V, Tag as O, Menu as U, Segmented as w, Button as L, RadioGroup as $, RadioButton as P, Divider as B, Checkbox as z, Slider as j } from "ant-design-vue";
import { useMessage as F, useDesign as G, useRootSetting as J } from "@mfish/core/hooks";
import { Icon as q } from "@mfish/core/components/Icon";
import { useModalInner as H, BasicModal as K, useModal as Q } from "@mfish/core/components/Modal";
import { router as W } from "@mfish/core/router";
import { useOutsideOpen as X } from "@mfish/core/utils/OutsideOpenUtils";
import { J as Y, _ as Z, u as ee, K as ae, N as te, s as ne, S as oe, O as le, i as ie, G as re, Q as se, l as ue, b as ce, R as de, U as me, V as pe, h as fe, f as ve } from "./index.js";
import "@vueuse/core";
import { debounce as Ce, cloneDeep as ge, throttle as he, pick as ye } from "lodash-es";
import "@mfish/core/enums";
import { isArray as ke } from "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import { ScrollContainer as _e } from "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { E as be } from "./EventSelect.js";
import { E as Ee } from "./UseEventSelect.js";
import Ne from "vuedraggable";
const Ie = e({ __name: "DataSelectModal", props: { selectData: { type: Object } }, emits: ["success", "register"], setup(e2, { emit: i2 }) {
  const r2 = e2, s2 = i2, [u2, { setModalProps: c2, closeModal: d2 }] = H(async () => {
    c2({ confirmLoading: false, width: "1200px", defaultFullscreen: true });
  }), { createMessage: m2 } = F();
  function p2() {
    if (r2.selectData) return s2("success", r2.selectData), void d2();
    m2.warning("请选择数据源");
  }
  return (e3, i3) => (t(), a(n(K), { width: "1200px", onRegister: n(u2), title: "数据来源", onOk: p2 }, { default: o(() => [l(e3.$slots, "default")]), _: 3 }, 8, ["onRegister"]));
} }), Te = { key: 0, class: "placeholder" }, Re = { key: 0, class: "warning" }, xe = { key: 2, class: "icon-group" }, De = Z(e({ __name: "DataSelect", props: { selectData: { type: Object }, dataId: { type: String, default: "" }, dataName: { type: String, default: "" }, isResource: { type: Boolean, default: false }, screenId: { type: String, default: "" } }, emits: ["dataChange", "dataRefresh"], setup(e2, { emit: y2 }) {
  i((e3) => ({ "54d92964": N2.value }));
  const k2 = e2, _2 = y2;
  s(() => k2.dataId, (e3) => {
    e3 ? (x2.id = e3, x2.name = k2.dataName) : (x2.id = "", x2.name = "");
  });
  const { prefixCls: b2 } = G("data-select"), { token: E2 } = D.useToken(), N2 = r(() => E2.value.colorBorder), I2 = c(""), [T2, { openModal: R2 }] = Q(), x2 = u({ id: k2.dataId, name: k2.dataName }), M2 = c(false), { open: S2 } = X(Y, B2);
  function V2() {
    x2.id && (I2.value = "ant-design:close-circle-filled");
  }
  function O2() {
    I2.value = "";
  }
  function U2() {
    R2(true, {});
  }
  function w2(e3) {
    x2.id = e3.id, x2.name = e3.name, _2("dataChange", n(x2));
  }
  function L2() {
    x2.id = "", x2.name = "", _2("dataChange", n(x2));
  }
  function $2() {
    let e3;
    e3 = k2.isResource ? { configId: x2.id, screenId: k2.screenId } : { configId: x2.id };
    const a2 = W.resolve({ path: "/low-code/mf-api/config", query: e3 });
    S2(a2);
  }
  const P2 = Ce(() => B2(), 200);
  function B2() {
    M2.value = true, setTimeout(() => {
      M2.value = false;
    }, 1e3), _2("dataRefresh");
  }
  return (i2, r2) => (t(), d("div", { class: m(n(b2)) }, [p("div", { class: "input", onMouseenter: V2, onMouseleave: O2, onClick: U2 }, [x2.id ? (t(), a(n(A), { key: 1, title: x2.name }, { default: o(() => [p("div", { class: "title", style: C(e2.isResource ? { textDecoration: "line-through", color: "#999" } : {}) }, g(x2.name), 5), e2.isResource ? (t(), d("div", Re, " 注意：请将样例数据更换为自己的数据")) : v("", true)]), _: 1 }, 8, ["title"])) : (t(), d("div", Te, "请选择数据来源")), I2.value ? (t(), d("div", xe, [f(n(A), { title: e2.isResource ? "查看样例数据源配置" : "编辑数据源" }, { default: o(() => [f(n(q), { class: "icon", icon: e2.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined", onClick: h($2, ["stop"]) }, null, 8, ["icon"])]), _: 1 }, 8, ["title"]), f(n(A), { title: "清空数据源" }, { default: o(() => [f(n(q), { class: "delete-icon", size: 14, icon: I2.value, onClick: h(L2, ["stop"]) }, null, 8, ["icon"])]), _: 1 })])) : v("", true), f(Ie, { onRegister: n(T2), onSuccess: w2, "select-data": e2.selectData }, { default: o(() => [l(i2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["onRegister", "select-data"])], 32), f(n(A), { title: "刷新数据源" }, { default: o(() => [f(n(q), { class: "icon", icon: "ant-design:sync-outlined", onClick: n(P2), spin: M2.value }, null, 8, ["onClick", "spin"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-3a060ac3"]]), Ae = ["draggable", "onMouseenter", "onDragstart"], Me = { class: "title" }, Se = Z(e({ __name: "FieldConfig", props: { fieldList: { type: Array, default: () => [] } }, setup(e2) {
  i((e3) => ({ be0a35b0: N2.value }));
  const l2 = e2, s2 = c(-1), u2 = c(-1), C2 = c(""), { prefixCls: h2 } = G("field-config"), { token: E2 } = D.useToken(), N2 = r(() => E2.value.colorInfoBg), I2 = c(), T2 = ee();
  function R2() {
    s2.value = -1;
  }
  function x2() {
    u2.value = s2.value, C2.value = l2.fieldList[s2.value].rename ?? l2.fieldList[s2.value].colName, b(() => {
      var _a, _b;
      (_a = I2.value) == null ? void 0 : _a.focus(), (_b = I2.value) == null ? void 0 : _b.select();
    });
  }
  async function M2(e3) {
    if (C2.value !== e3.rename) {
      await te(T2.getCurConfigComponent.chart.data.id, e3.colName, C2.value) && (e3.rename = C2.value);
    }
    S2(), ne.emit(oe.DATA_RENAME, e3);
  }
  function S2() {
    u2.value = -1, C2.value = "";
  }
  return (l3, i2) => {
    const r2 = y("AInput");
    return t(), d("div", { class: m(n(h2)) }, [(t(true), d(k, null, _(e2.fieldList, (e3, l4) => (t(), d("div", { class: "field-block", key: e3.id, draggable: u2.value !== l4, onMouseenter: (e4) => function(e5) {
      s2.value = e5;
    }(l4), onMouseleave: R2, onDragstart: (a2) => function(e4, a3) {
      var _a;
      (_a = e4.dataTransfer) == null ? void 0 : _a.setData(le, JSON.stringify(a3));
    }(a2, e3) }, [f(n(q), { class: "icon", icon: n(ae)(e3.dataType) }, null, 8, ["icon"]), u2.value !== l4 ? (t(), a(n(A), { key: 0, title: e3.colName + (e3.comment ? `[${e3.comment}]` : ""), placement: "left" }, { default: o(() => [p("div", Me, g(e3.rename ?? e3.colName), 1)]), _: 2 }, 1032, ["title"])) : (t(), a(r2, { key: 1, bordered: false, value: C2.value, "onUpdate:value": i2[0] || (i2[0] = (e4) => C2.value = e4), ref_for: true, ref: (e4) => I2.value = e4, onPressEnter: (a2) => M2(e3), onBlur: S2 }, null, 8, ["value", "onPressEnter"])), s2.value === l4 && u2.value !== l4 ? (t(), a(n(A), { key: 2, title: "重命名" }, { default: o(() => [f(n(q), { class: "icon edit", icon: "ant-design:edit-outlined", onClick: x2 })]), _: 1 })) : v("", true), u2.value === l4 ? (t(), a(n(A), { key: 3, title: "保存" }, { default: o(() => [f(n(q), { class: "icon edit", icon: "ant-design:save-outlined", onClick: (a2) => M2(e3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true)], 40, Ae))), 128))], 2);
  };
} }), [["__scopeId", "data-v-c9e8b19a"]]), Ve = ["title", "onClick", "onMouseenter"], Oe = { class: "title" }, Ue = { class: "title" }, we = { class: "operator" }, Le = { key: 1, class: "param-edit" }, $e = { key: 2, class: "error" }, Pe = Z(e({ __name: "GlobalParamsSelect", props: { value: { type: Object, default: () => ({}) } }, emits: ["selectChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "14636de7": A2.value, "1e6884b8": V2.value }));
  const u2 = e2, C2 = l2, { prefixCls: h2 } = G("global-params-select"), b2 = ee(), R2 = c([]), { token: x2 } = D.useToken(), A2 = r(() => x2.value.colorInfoBg), V2 = r(() => x2.value.colorBorder), O2 = c(-1), U2 = c(-1), w2 = c(-1), L2 = c(), $2 = E("scrollContainerRef"), P2 = c();
  function B2() {
    var _a;
    z2() && (R2.value.push({ name: "", defaultValue: "" }), U2.value = R2.value.length - 1, O2.value = U2.value, (_a = $2.value) == null ? void 0 : _a.scrollBottom());
  }
  function z2() {
    if (-1 === U2.value) return L2.value = "", true;
    const e3 = R2.value[U2.value].name;
    if (!e3) return L2.value = "error", P2.value = "参数名不能为空", false;
    if (!/^[\u4E00-\u9FA5\w]{1,20}$/.test(e3)) return L2.value = "error", P2.value = "参数字符只允许中文、字符、数字、下划线", false;
    return R2.value.some((a2, t2) => t2 !== U2.value && a2.name === e3) ? (L2.value = "error", P2.value = "参数名不能重复", false) : (b2.getCanvasConfig.globalParams = ge(R2.value), C2("selectChange", ge(R2.value[U2.value])), U2.value = -1, L2.value = "", P2.value = "", true);
  }
  function j2(e3) {
    R2.value.splice(e3, 1), b2.getCanvasConfig.globalParams = ge(R2.value), U2.value = -1;
  }
  return s(() => b2.getCurConfigComponent, (e3) => {
    e3 && (R2.value = ge(b2.getCanvasConfig.globalParams || []), O2.value = R2.value.findIndex((e4) => e4.name === u2.value.name));
  }, { immediate: true }), (e3, l3) => {
    const i2 = y("AButton");
    return t(), d("div", { class: m(n(h2)) }, [R2.value.length > 0 ? (t(), a(n(_e), { key: 0, ref_key: "scrollContainerRef", ref: $2, class: m(`${n(h2)}-items`) }, { default: o(() => [(t(true), d(k, null, _(R2.value, (e4, a2) => (t(), d(k, { key: a2 }, [U2.value !== a2 ? (t(), d("div", { key: 0, class: m(["item", O2.value === a2 ? "select" : ""]), title: e4.name, onClick: (e5) => function(e6) {
      O2.value = e6, C2("selectChange", ge(R2.value[e6]));
    }(a2), onMouseenter: (e5) => w2.value = a2, onMouseleave: l3[0] || (l3[0] = (e5) => w2.value = -1) }, [p("div", Oe, g(e4.name), 1), p("div", Ue, g(e4.defaultValue), 1), p("div", we, [N(f(i2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:edit-outlined", onClick: (e5) => function(e6) {
      z2() && (U2.value = e6, O2.value = e6);
    }(a2) }, null, 8, ["onClick"]), [[I, w2.value === a2]]), N(f(i2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:delete-outlined", onClick: (e5) => function(e6) {
      z2() && j2(e6);
    }(a2) }, null, 8, ["onClick"]), [[I, w2.value === a2]])])], 42, Ve)) : (t(), d("div", Le, [f(n(M), { placeholder: "输入参数名", size: "small", value: e4.name, "onUpdate:value": (a3) => e4.name = a3, status: L2.value, maxlength: 20, onPressEnter: z2 }, null, 8, ["value", "onUpdate:value", "status"]), f(n(M), { placeholder: "输入默认值", size: "small", value: e4.defaultValue, "onUpdate:value": (a3) => e4.defaultValue = a3, maxlength: 100, onPressEnter: z2 }, null, 8, ["value", "onUpdate:value"]), f(i2, { type: "link", style: { padding: "0" }, size: "small", "pre-icon": "ant-design:save-outlined", onClick: z2 }), f(i2, { type: "link", size: "small", style: { padding: "0" }, "pre-icon": "ant-design:delete-outlined", onClick: (e5) => j2(a2) }, null, 8, ["onClick"])])), U2.value === a2 && P2.value ? (t(), d("div", $e, g(P2.value), 1)) : v("", true)], 64))), 128))]), _: 1 }, 8, ["class"])) : (t(), a(n(S), { key: 1, description: "暂无变量", image: n(S).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])), p("div", { class: "add-button", onClick: B2 }, [f(n(q), { icon: "ant-design:plus-outlined" }), l3[1] || (l3[1] = T(" 添加全局变量 "))])], 2);
  };
} }), [["__scopeId", "data-v-9ad59919"]]), Be = Z(e({ __name: "VariableSelect", props: { variable: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: l2 }) {
  const i2 = e2, r2 = l2, { prefixCls: u2 } = G("variable-select"), d2 = c(false), C2 = ee(), y2 = c(), k2 = c([]), _2 = c(""), b2 = c(false), E2 = J().getThemeColor, N2 = c([{ value: 1, payload: "组件变量" }, { value: 2, payload: "全局变量" }]), I2 = c(1), R2 = () => {
    var _a, _b;
    if ((_a = i2.variable) == null ? void 0 : _a.id) {
      const e3 = ie(C2.getComponentList, i2.variable.id);
      if (!e3) return r2("ok"), "";
      let a2;
      if (e3.chart.data.headers && (a2 = e3.chart.data.headers[i2.variable.param]), a2) return `${e3.chart.name} / ${a2.rename ?? a2.colName}`;
    }
    return 2 === ((_b = i2.variable) == null ? void 0 : _b.paramType) ? i2.variable.name : "";
  };
  function x2() {
    d2.value = false, _2.value = R2();
  }
  function D2() {
    r2("ok", ge(y2.value)), d2.value = false;
  }
  s(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    d2.value = false;
  }), s(() => i2.variable, () => {
    _2.value = R2();
  }, { deep: true, immediate: true });
  const A2 = (e3) => {
    var _a;
    d2.value = e3, e3 ? function() {
      k2.value = [];
      const e4 = (e5) => e5.chart.data && e5.chart.data.dataSet && (i2.filterSelf && e5.chart.id !== C2.getCurConfigComponent.chart.id || !i2.filterSelf);
      for (const a2 of C2.getComponentList) {
        if (a2.chart.type !== re.MfCombine) {
          e4(a2) && k2.value.push(ge(a2));
          continue;
        }
        const t2 = ge(a2);
        t2.chart.options.components = t2.chart.options.components.filter((a3) => e4(a3)), (t2.chart.options.components.length > 0 || e4(t2)) && k2.value.push(t2);
      }
    }() : _2.value = R2(), y2.value = ge(i2.variable), I2.value = ((_a = y2.value) == null ? void 0 : _a.paramType) ?? 1;
  };
  function S2(e3) {
    y2.value = { ...e3, paramType: 1 };
  }
  function $2(e3) {
    y2.value = { ...e3, paramType: 2 };
  }
  function P2() {
    r2("ok", {});
  }
  function B2(e3) {
    I2.value = e3;
  }
  return (l3, i3) => (t(), a(n(V), { trigger: ["click"], open: d2.value, onOpenChange: A2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "270px" } }, { overlay: o(() => [f(n(U), null, { default: o(() => [f(n(U).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: o(() => [f(n(w), { value: I2.value, options: N2.value, onChange: B2, block: "" }, { label: o(({ payload: e3 }) => [T(g(e3), 1)]), _: 1 }, 8, ["value", "options"]), 2 === I2.value ? (t(), a(Pe, { key: 0, value: y2.value, onSelectChange: $2 }, null, 8, ["value"])) : (t(), a(Ee, { key: 1, class: "mt-2", "hide-header": true, "hide-event": true, value: y2.value, "component-list": k2.value, onSelectChange: S2 }, null, 8, ["value", "component-list"])), p("div", { class: m(`${n(u2)}-ok-button`) }, [f(n(L), { class: "mr-2", onClick: x2 }, { default: o(() => i3[4] || (i3[4] = [T("取消")])), _: 1 }), f(n(L), { type: "primary", onClick: D2 }, { default: o(() => i3[5] || (i3[5] = [T("确定")])), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: o(() => [p("div", { class: m(n(u2)), onMouseenter: i3[2] || (i3[2] = (e3) => b2.value = true), onMouseleave: i3[3] || (i3[3] = (e3) => b2.value = false) }, [f(n(M), { class: m(`${n(u2)}-drop-input`), placeholder: "请选择变量来源", value: _2.value, "onUpdate:value": i3[0] || (i3[0] = (e3) => _2.value = e3), onChange: i3[1] || (i3[1] = (e3) => d2.value = true) }, { prefix: o(() => {
    var _a;
    return [2 === ((_a = e2.variable) == null ? void 0 : _a.paramType) ? (t(), a(n(O), { key: 0, color: n(E2) }, { default: o(() => i3[6] || (i3[6] = [T("全局")])), _: 1 }, 8, ["color"])) : (t(), a(n(O), { key: 1, color: n(E2) }, { default: o(() => i3[7] || (i3[7] = [T("组件")])), _: 1 }, 8, ["color"]))];
  }), suffix: o(() => [b2.value && _2.value ? (t(), a(n(q), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: h(P2, ["stop"]) })) : v("", true), f(n(q), { class: "drop-icon", size: 12, icon: d2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-93509ff0"]]), ze = { class: "title" }, je = { class: "param" }, Fe = { key: 0, style: { color: "red" } }, Ge = { key: 0 }, Je = { key: 1 }, qe = { key: 2 }, He = Z(e({ __name: "DataParamsConfig", props: { params: { type: Array, default: () => [] } }, emits: ["paramChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "2e98f32a": C2.value }));
  const s2 = l2, { prefixCls: u2 } = G("data-params-config"), { token: c2 } = D.useToken(), C2 = r(() => c2.value.colorBorder), h2 = ee(), { createMessage: y2 } = F();
  const b2 = (e3, a2) => {
    const t2 = () => {
      const e4 = "错误：组件参数存在循环引用，请检查";
      throw y2.error(e4), new Error(e4);
    }, n2 = (e4) => {
      const a3 = h2.getComponent(e4);
      if (a3 == null ? void 0 : a3.chart.data.params) {
        for (const e5 of Object.values(a3 == null ? void 0 : a3.chart.data.params)) if (e5 == null ? void 0 : e5.value) if (ke(e5.value)) for (const a4 of e5.value) a4.id === h2.getCurConfigComponent.chart.id && t2(), n2(a4.id);
        else e5.value.id === h2.getCurConfigComponent.chart.id ? t2() : n2(e5.value.id);
      }
      return a3;
    };
    if (e3) {
      const t3 = n2(e3.id);
      if (!t3) return;
      void 0 === h2.getCurConfigComponent.chart.data.priority && (h2.getCurConfigComponent.chart.data.priority = 0), h2.getCurConfigComponent.chart.data.priority <= (t3.chart.data.priority ?? 0) && (h2.getCurConfigComponent.chart.data.priority = t3.chart.data.priority + 1);
      const o2 = 0 === (t3 == null ? void 0 : t3.chart.data.type) ? t3 == null ? void 0 : t3.chart.data.dataSet : t3 == null ? void 0 : t3.chart.data.result;
      if (ke(o2)) return { [a2.name]: o2[0][e3.param] };
      if (o2) return { [a2.name]: o2[e3.param] };
    }
  };
  function E2(e3) {
    const a2 = h2.getCurConfigComponent.chart;
    a2.data.paramsValue ? a2.data.paramsValue = { ...a2.data.paramsValue, ...e3 } : a2.data.paramsValue = e3, s2("paramChange");
  }
  const N2 = he((e3, a2) => {
    E2({ [a2.name]: e3.target.value });
  }, 500);
  return (l3, i2) => (t(true), d(k, null, _(e2.params, (e3) => (t(), d("div", { class: m(n(u2)), key: e3.name }, [p("div", ze, [f(n(A), { title: e3.remark }, { default: o(() => [p("div", je, [1 === e3.required ? (t(), d("span", Fe, "*")) : v("", true), T(" " + g(e3.name), 1)])]), _: 2 }, 1032, ["title"]), f(n(A), { placement: "topRight" }, { title: o(() => i2[0] || (i2[0] = [p("div", null, [p("span", { style: { "font-weight": "700" } }, "常量："), T("设置固定参数")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "变量： "), T(" 设置其他组件数据或全局变量（第一次加载设置，不会跟随前者变化。全局变量来自于请求链接中的参数） ")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "事件："), T(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")], -1)])), default: o(() => [n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] ? (t(), a(n($), { key: 0, class: "radio-group", size: "small", value: n(h2).getCurConfigComponent.chart.data.params[e3.name].type, "onUpdate:value": (a2) => n(h2).getCurConfigComponent.chart.data.params[e3.name].type = a2, onChange: (a2) => function(e4, a3) {
    var _a;
    const t2 = ge(h2.getCurConfigComponent.chart.data.params);
    switch ((_a = e4.target) == null ? void 0 : _a.value) {
      case se.VARIABLE:
        t2[a3.name].value = void 0;
        break;
      case se.EVENT:
        t2[a3.name].value = [];
        break;
      default:
        t2[a3.name].value = a3.defaultValue, a3.defaultValue && E2({ [a3.name]: a3.defaultValue });
    }
    h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, { default: o(() => [f(n(P), { class: "radio-button", value: n(se).CONSTANT }, { default: o(() => i2[1] || (i2[1] = [T("常量")])), _: 1 }, 8, ["value"]), f(n(P), { class: "radio-button", value: n(se).VARIABLE }, { default: o(() => i2[2] || (i2[2] = [T("变量")])), _: 1 }, 8, ["value"]), f(n(P), { class: "radio-button", value: n(se).EVENT }, { default: o(() => i2[3] || (i2[3] = [T("事件")])), _: 1 }, 8, ["value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])) : v("", true)]), _: 2 }, 1024)]), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(se).CONSTANT ? (t(), d("div", Ge, [f(n(M), { value: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, "onUpdate:value": (a2) => n(h2).getCurConfigComponent.chart.data.params[e3.name].value = a2, placeholder: "请输入常量参数", onChange: (a2) => n(N2)(a2, e3) }, null, 8, ["value", "onUpdate:value", "onChange"])])) : v("", true), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(se).VARIABLE ? (t(), d("div", Je, [f(Be, { "filter-self": true, variable: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = ge(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = e4, 1 === e4.paramType ? E2(b2(e4, a3)) : E2({ [a3.name]: e4.defaultValue }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["variable", "onOk"])])) : v("", true), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(se).EVENT ? (t(), d("div", qe, [f(be, { "filter-self": true, events: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = e4.event, n2 = ge(h2.getCurConfigComponent.chart.data.params);
    let o2 = false;
    n2[a3.name].value || (n2[a3.name].value = [], o2 = true);
    const l4 = n2[a3.name].value.findIndex((e5) => e5.id === t2.id && e5.event === t2.event);
    -1 === l4 ? (e4.modifyIndex >= 0 ? n2[a3.name].value.splice(e4.modifyIndex, 1, t2) : n2[a3.name].value.push(t2), o2 = true) : n2[a3.name].value.param !== t2.param && (n2[a3.name].value.splice(l4, 1, t2), o2 = true), o2 && (E2(b2(e4.event, a3)), h2.getCurConfigComponent.chart.data.params = n2);
  }(a2, e3), onDelete: (a2) => function(e4, a3) {
    var _a;
    const t2 = ge(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value.splice(e4, 1), ((_a = t2[a3.name].value) == null ? void 0 : _a.length) > 0 ? E2(b2(t2[a3.name].value[0], a3)) : E2({ [a3.name]: void 0 }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3), onEventLose: (a2) => function(e4, a3) {
    var _a;
    const t2 = ge(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = t2[a3.name].value.filter((a4) => a4.id !== e4), ((_a = t2[a3.name].value) == null ? void 0 : _a.length) > 0 ? E2(b2(t2[a3.name].value[0], a3)) : E2({ [a3.name]: void 0 }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])])) : v("", true)], 2))), 128));
} }), [["__scopeId", "data-v-cb60aef7"]]), Ke = { class: "title" }, Qe = { class: "title" }, We = { class: "title" }, Xe = { class: "title" }, Ye = { key: 0 }, Ze = { class: "title" }, ea = { class: "data-header" }, aa = { class: "data-set" }, ta = { class: "target-data" }, na = e({ __name: "DataConfig", props: { selectData: { type: Object } }, emits: ["refreshData"], setup(e2, { emit: i2 }) {
  const r2 = i2, C2 = ee(), g2 = [{ label: "静态数据", value: 0 }, { label: "动态数据", value: 1 }], { prefixCls: h2 } = G("data-config"), y2 = c([]), _2 = c([]), { setDataTable: b2 } = ue(), E2 = u({ open: false, interval: 5 }), N2 = u({ open: false, events: [] });
  function I2(e3) {
    var _a;
    C2.getCurConfigComponent.chart.data.id = e3.id, (_a = C2.getCurConfigComponent.chart) == null ? true : delete _a.isResource, C2.getCurConfigComponent.chart.data.name = e3.name;
  }
  function x2() {
    var _a, _b, _c, _d, _e2, _f, _g;
    const e3 = ((_b = (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.isResource) && ((_c = C2.getCurConfigComponent) == null ? void 0 : _c.chart.data.id) ? `${C2.getId},${(_d = C2.getCurConfigComponent) == null ? void 0 : _d.chart.data.id}` : (_e2 = C2.getCurConfigComponent) == null ? void 0 : _e2.chart.data.id;
    if (e3) {
      const a2 = [], t2 = ((_g = (_f = C2.getCurConfigComponent) == null ? void 0 : _f.chart) == null ? void 0 : _g.isResource) ? de : me;
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
        const e4 = await pe({ apiId: (_a2 = C2.getCurConfigComponent) == null ? void 0 : _a2.chart.data.id, pageNum: 1, pageSize: 1e4 });
        e4.total > 0 ? (_2.value = e4.list, function(e5) {
          var _a3;
          const a3 = () => {
            const a4 = {}, t4 = {};
            e5.forEach((e6) => {
              a4[e6.name] = { type: se.CONSTANT, value: e6.defaultValue }, e6.defaultValue && (t4[e6.name] = e6.defaultValue);
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
  function D2(e3) {
    var _a;
    if ((_a = C2.getCurConfigComponent.chart.data) == null ? void 0 : _a.headers) {
      const a2 = C2.getCurConfigComponent.chart.data.headers[e3.colName];
      a2 && (a2.rename = e3.rename);
    }
  }
  function M2(e3) {
    const a2 = N2.events.findIndex((a3) => a3.id === e3.event.id && a3.event === e3.event.event);
    -1 === a2 ? e3.modifyIndex >= 0 ? N2.events.splice(e3.modifyIndex, 1, e3.event) : N2.events.push(e3.event) : N2.events.splice(a2, 1, e3.event);
  }
  function S2(e3) {
    -1 !== e3 && N2.events.splice(e3, 1);
  }
  return R(() => {
    var _a, _b, _c, _d, _e2, _f;
    ne.on(oe.DATA_RENAME, D2), void 0 !== ((_a = C2.getCurConfigComponent.chart.data) == null ? void 0 : _a.autoRefresh) && (E2.open = (_b = C2.getCurConfigComponent.chart.data) == null ? void 0 : _b.autoRefresh.open, E2.interval = (_c = C2.getCurConfigComponent.chart.data) == null ? void 0 : _c.autoRefresh.interval), void 0 !== ((_d = C2.getCurConfigComponent.chart.data) == null ? void 0 : _d.eventRefresh) && (N2.open = (_e2 = C2.getCurConfigComponent.chart.data) == null ? void 0 : _e2.eventRefresh.open, N2.events = (_f = C2.getCurConfigComponent.chart.data) == null ? void 0 : _f.eventRefresh.events);
  }), s(E2, (e3) => {
    e3 && (C2.getCurConfigComponent.chart.data.autoRefresh = { open: e3.open, interval: e3.interval });
  }), s(N2, (e3) => {
    e3 && (C2.getCurConfigComponent.chart.data.eventRefresh = { open: e3.open, events: e3.events });
  }), s(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.data.type;
  }, (e3) => {
    var _a;
    if (0 !== e3) x2();
    else {
      const e4 = ce[(_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.type];
      C2.getCurConfigComponent.chart.data.headers = e4.defaultHeaders && e4.defaultHeaders(C2.getCurConfigComponent.chart);
    }
  }, { immediate: true }), s(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.data.id;
  }, () => {
    var _a;
    0 !== ((_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.data.type) && (x2(), b2());
  }), (i3, s2) => (t(), a(n(_e), null, { default: o(() => [p("div", { class: m(n(h2)) }, [p("div", Ke, [s2[6] || (s2[6] = T(" 数据类型 ")), f(n($), { value: n(C2).getCurConfigComponent.chart.data.type, "onUpdate:value": s2[0] || (s2[0] = (e3) => n(C2).getCurConfigComponent.chart.data.type = e3), options: g2, "option-type": "button", "button-style": "solid", size: "small" }, null, 8, ["value"])]), f(n(B), { style: { margin: "0" } }), 0 === n(C2).getCurConfigComponent.chart.data.type ? l(i3.$slots, "static-data", { key: 0 }, void 0, true) : (t(), d(k, { key: 1 }, [p("div", Qe, [f(n(A), { title: "点击右侧输入框切换数据源", placement: "left" }, { default: o(() => s2[7] || (s2[7] = [T(" 数据来源")])), _: 1 }), f(De, { "select-data": e2.selectData, "data-id": n(C2).getCurConfigComponent.chart.data.id, "data-name": n(C2).getCurConfigComponent.chart.data.name, "is-resource": n(C2).getCurConfigComponent.chart.isResource, "screen-id": n(C2).getId, onDataChange: I2, onDataRefresh: x2 }, { default: o(() => [l(i3.$slots, "data-select", {}, void 0, true)]), _: 3 }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])]), p("div", We, [f(n(A), { title: "接口允许返回数据的最大条数", placement: "left" }, { default: o(() => s2[8] || (s2[8] = [T(" 数据限制")])), _: 1 }), f(n(fe), { value: n(C2).getCurConfigComponent.chart.data.limit, "onUpdate:value": s2[1] || (s2[1] = (e3) => n(C2).getCurConfigComponent.chart.data.limit = e3), max: n(C2).getCurConfigComponent.chart.data.maxLimit <= 0 ? 1 / 0 : n(C2).getCurConfigComponent.chart.data.maxLimit, min: 1, suffix: "条" }, null, 8, ["value", "max"])]), f(ve, { title: "刷新设置" }, { default: o(() => [p("div", Xe, [f(n(A), { title: "数据按照刷新间隔时间更新数据（编辑环境不生效）", placement: "left" }, { default: o(() => [f(n(z), { checked: E2.open, "onUpdate:checked": s2[2] || (s2[2] = (e3) => E2.open = e3) }, { default: o(() => s2[9] || (s2[9] = [T(" 自动刷新")])), _: 1 }, 8, ["checked"])]), _: 1 }), E2.open ? (t(), d("div", Ye, [f(n(j), { style: { margin: "0" }, "tip-formatter": (e3) => `刷新间隔 ${e3}（分钟）`, value: E2.interval, "onUpdate:value": s2[3] || (s2[3] = (e3) => E2.interval = e3), min: 0.5, max: 60, step: 0.5 }, null, 8, ["tip-formatter", "value"])])) : v("", true)]), p("div", Ze, [f(n(A), { title: "通过其他组件事件触发数据更新", placement: "left" }, { default: o(() => [f(n(z), { checked: N2.open, "onUpdate:checked": s2[4] || (s2[4] = (e3) => N2.open = e3) }, { default: o(() => s2[10] || (s2[10] = [T(" 事件刷新")])), _: 1 }, 8, ["checked"])]), _: 1 }), N2.open ? (t(), a(be, { key: 0, "filter-self": true, "hide-param": true, events: N2.events, onOk: M2, onDelete: S2 }, null, 8, ["events"])) : v("", true)])]), _: 1 }), _2.value && _2.value.length > 0 ? (t(), a(ve, { key: 0, title: "参数设置" }, { default: o(() => [f(He, { params: _2.value, onParamChange: s2[5] || (s2[5] = () => {
    r2("refreshData");
  }) }, null, 8, ["params"])]), _: 1 })) : v("", true), y2.value && y2.value.length > 0 ? (t(), a(ve, { key: 1, title: "数据设置", "allow-collapse": false }, { default: o(() => [p("div", ea, [s2[11] || (s2[11] = p("div", null, "源数据", -1)), f(n(q), { icon: "ant-design:double-right-outlined" }), s2[12] || (s2[12] = p("div", null, "目标数据", -1))]), p("div", aa, [f(Se, { "field-list": y2.value }, null, 8, ["field-list"]), s2[13] || (s2[13] = p("div", { class: "divide-line" }, null, -1)), p("div", ta, [l(i3.$slots, "target-data", {}, void 0, true)])])]), _: 3 })) : v("", true)], 64)), l(i3.$slots, "default", {}, void 0, true)], 2)]), _: 3 }));
} }), oa = Z(na, [["__scopeId", "data-v-e1fa213d"]]), la = ["onMouseenter"], ia = { class: "title" }, ra = e({ __name: "DragInData", props: { fields: { type: Array, default: () => [] }, maxCount: { type: Number, default: 9999 }, height: { type: Number, default: 0 } }, emits: ["dataChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "58b0ea90": E2.value }));
  const u2 = e2, h2 = l2, { prefixCls: y2 } = G("drag-in-data"), k2 = c(u2.fields), _2 = c(-1), { token: b2 } = D.useToken(), E2 = r(() => b2.value.colorInfoBg);
  s(() => u2.fields, () => {
    k2.value = u2.fields;
  });
  const N2 = (e3) => {
    var _a;
    const a2 = (_a = e3.dataTransfer) == null ? void 0 : _a.getData(le);
    if (!a2) return;
    const t2 = JSON.parse(a2);
    k2.value.some((e4) => e4.colName === t2.colName && e4.rename === t2.rename) || (k2.value.length >= u2.maxCount && k2.value.shift(), k2.value.push(ye(t2, ["colName", "rename", "dataType"])), h2("dataChange", k2.value));
  };
  function I2() {
    _2.value = -1;
  }
  function T2(e3) {
    const a2 = k2.value.findIndex((a3) => a3.colName === e3.colName);
    -1 !== a2 && (k2.value[a2].rename = e3.rename, h2("dataChange", k2.value));
  }
  function A2() {
    h2("dataChange", k2.value);
  }
  return R(() => {
    ne.on(oe.DATA_RENAME, T2);
  }), x(() => {
    ne.off(oe.DATA_RENAME, T2);
  }), (l3, i2) => (t(), d("div", { class: m(n(y2)), style: C(e2.height > 0 ? { height: `${e2.height}px` } : {}), onDrop: N2 }, [0 === k2.value.length ? (t(), a(n(S), { key: 0, class: "empty", description: "拖动数据到此处", image: n(S).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])) : (t(), a(n(_e), { key: 1 }, { default: o(() => [f(n(Ne), { "item-key": "id", modelValue: k2.value, "onUpdate:modelValue": i2[0] || (i2[0] = (e3) => k2.value = e3), animation: "300", "ghost-class": "ghost", class: "drag-data", onChange: A2 }, { item: o(({ index: e3, element: o2 }) => [p("div", { class: "field-block", onMouseenter: (a2) => function(e4) {
    _2.value = e4;
  }(e3), onMouseleave: I2 }, [f(n(q), { class: "icon", icon: n(ae)(o2.dataType) }, null, 8, ["icon"]), p("div", ia, g(o2.rename ?? o2.colName), 1), _2.value === e3 ? (t(), a(n(q), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (a2) => function(e4) {
    k2.value.splice(e4, 1), h2("dataChange", k2.value);
  }(e3) }, null, 8, ["onClick"])) : v("", true)], 40, la)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))], 38));
} }), sa = Z(ra, [["__scopeId", "data-v-a508a4de"]]);
export {
  oa as D,
  sa as a
};
