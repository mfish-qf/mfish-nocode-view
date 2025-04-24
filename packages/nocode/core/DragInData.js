import { defineComponent as e, createBlock as a, openBlock as t, unref as n, withCtx as o, renderSlot as l, useCssVars as i, computed as s, watch as r, reactive as c, ref as u, createElementBlock as d, normalizeClass as m, createElementVNode as p, createVNode as f, createCommentVNode as v, normalizeStyle as C, toDisplayString as g, withModifiers as h, resolveComponent as y, Fragment as k, renderList as _, nextTick as b, createTextVNode as E, onMounted as N, onUnmounted as I } from "vue";
import { theme as x, Tooltip as D, Empty as T, Dropdown as M, Button as S, Menu as A, Input as w, RadioGroup as R, RadioButton as L, Divider as $ } from "ant-design-vue";
import { useMessage as O, useDesign as V } from "@mfish/core/hooks";
import { Icon as P } from "@mfish/core/components/Icon";
import { useModalInner as B, BasicModal as U, useModal as j } from "@mfish/core/components/Modal";
import { router as z } from "@mfish/core/router";
import { useOutsideOpen as G } from "@mfish/core/utils/OutsideOpenUtils";
import { E as H, _ as F, u as J, F as q, G as K, s as Q, S as W, H as X, I as Y, J as Z, L as ee, K as ae, g as te, N as ne, i as oe, b as le, O as ie, Q as se, R as re, f as ce } from "./index.js";
import "@vueuse/core";
import { debounce as ue, omit as de, cloneDeep as me, throttle as pe, pick as fe } from "lodash-es";
import "@mfish/core/enums";
import { isArray as ve } from "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import { ScrollContainer as Ce } from "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { C as ge } from "./ConfigGroup.js";
import he from "vuedraggable";
const ye = e({ __name: "DataSelectModal", props: { selectData: { type: Object } }, emits: ["success", "register"], setup(e2, { emit: i2 }) {
  const s2 = e2, r2 = i2, [c2, { setModalProps: u2, closeModal: d2 }] = B(async () => {
    u2({ confirmLoading: false, width: "1200px", defaultFullscreen: true });
  }), { createMessage: m2 } = O();
  function p2() {
    if (s2.selectData) return r2("success", s2.selectData), void d2();
    m2.warning("请选择数据源");
  }
  return (e3, i3) => (t(), a(n(U), { width: "1200px", onRegister: n(c2), title: "数据来源", onOk: p2 }, { default: o(() => [l(e3.$slots, "default")]), _: 3 }, 8, ["onRegister"]));
} }), ke = { key: 0, class: "placeholder" }, _e = { key: 0, class: "warning" }, be = { key: 2, class: "icon-group" }, Ee = F(e({ __name: "DataSelect", props: { selectData: { type: Object }, dataId: { type: String, default: "" }, dataName: { type: String, default: "" }, isResource: { type: Boolean, default: false }, screenId: { type: String, default: "" } }, emits: ["dataChange", "dataRefresh"], setup(e2, { emit: y2 }) {
  i((e3) => ({ "54d92964": N2.value }));
  const k2 = e2, _2 = y2;
  r(() => k2.dataId, (e3) => {
    e3 ? (S2.id = e3, S2.name = k2.dataName) : (S2.id = "", S2.name = "");
  });
  const { prefixCls: b2 } = V("data-select"), { token: E2 } = x.useToken(), N2 = s(() => E2.value.colorBorder), I2 = u(""), [T2, { openModal: M2 }] = j(), S2 = c({ id: k2.dataId, name: k2.dataName }), A2 = u(false), { open: w2 } = G(H, J2);
  function R2() {
    S2.id && (I2.value = "ant-design:close-circle-filled");
  }
  function L2() {
    I2.value = "";
  }
  function $2() {
    M2(true, {});
  }
  function O2(e3) {
    S2.id = e3.id, S2.name = e3.name, _2("dataChange", n(S2));
  }
  function B2() {
    S2.id = "", S2.name = "", _2("dataChange", n(S2));
  }
  function U2() {
    let e3;
    e3 = k2.isResource ? { configId: S2.id, screenId: k2.screenId } : { configId: S2.id };
    const a2 = z.resolve({ path: "/low-code/mf-api/config", query: e3 });
    w2(a2);
  }
  const F2 = ue(() => J2(), 200);
  function J2() {
    A2.value = true, setTimeout(() => {
      A2.value = false;
    }, 1e3), _2("dataRefresh");
  }
  return (i2, s2) => (t(), d("div", { class: m(n(b2)) }, [p("div", { class: "input", onMouseenter: R2, onMouseleave: L2, onClick: $2 }, [S2.id ? (t(), a(n(D), { key: 1, title: S2.name }, { default: o(() => [p("div", { class: "title", style: C(e2.isResource ? { textDecoration: "line-through", color: "#999" } : {}) }, g(S2.name), 5), e2.isResource ? (t(), d("div", _e, " 注意：请将样例数据更换为自己的数据")) : v("", true)]), _: 1 }, 8, ["title"])) : (t(), d("div", ke, "请选择数据来源")), I2.value ? (t(), d("div", be, [f(n(D), { title: e2.isResource ? "查看样例数据源配置" : "编辑数据源" }, { default: o(() => [f(n(P), { class: "icon", icon: e2.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined", onClick: h(U2, ["stop"]) }, null, 8, ["icon"])]), _: 1 }, 8, ["title"]), f(n(D), { title: "清空数据源" }, { default: o(() => [f(n(P), { class: "delete-icon", size: 14, icon: I2.value, onClick: h(B2, ["stop"]) }, null, 8, ["icon"])]), _: 1 })])) : v("", true), f(ye, { onRegister: n(T2), onSuccess: O2, "select-data": e2.selectData }, { default: o(() => [l(i2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["onRegister", "select-data"])], 32), f(n(D), { title: "刷新数据源" }, { default: o(() => [f(n(P), { class: "icon", icon: "ant-design:sync-outlined", onClick: n(F2), spin: A2.value }, null, 8, ["onClick", "spin"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-3a060ac3"]]), Ne = ["draggable", "onMouseenter", "onDragstart"], Ie = { class: "title" }, xe = F(e({ __name: "FieldConfig", props: { fieldList: { type: Array, default: () => [] } }, setup(e2) {
  i((e3) => ({ "699b0e88": N2.value }));
  const l2 = e2, r2 = u(-1), c2 = u(-1), C2 = u(""), { prefixCls: h2 } = V("field-config"), { token: E2 } = x.useToken(), N2 = s(() => E2.value.colorInfoBg), I2 = u(), T2 = J();
  function M2() {
    r2.value = -1;
  }
  function S2() {
    c2.value = r2.value, C2.value = l2.fieldList[r2.value].rename ?? l2.fieldList[r2.value].colName, b(() => {
      var _a, _b;
      (_a = I2.value) == null ? void 0 : _a.focus(), (_b = I2.value) == null ? void 0 : _b.select();
    });
  }
  async function A2(e3) {
    if (C2.value !== e3.rename) {
      await K(T2.getCurConfigComponent.chart.data.id, e3.colName, C2.value) && (e3.rename = C2.value);
    }
    w2(), Q.emit(W.DATA_RENAME, e3);
  }
  function w2() {
    c2.value = -1, C2.value = "";
  }
  return (l3, i2) => {
    const s2 = y("AInput");
    return t(), d("div", { class: m(n(h2)) }, [(t(true), d(k, null, _(e2.fieldList, (e3, l4) => (t(), d("div", { class: "field-block", key: e3.id, draggable: c2.value !== l4, onMouseenter: (e4) => function(e5) {
      r2.value = e5;
    }(l4), onMouseleave: M2, onDragstart: (a2) => function(e4, a3) {
      var _a;
      (_a = e4.dataTransfer) == null ? void 0 : _a.setData(X, JSON.stringify(a3));
    }(a2, e3) }, [f(n(P), { class: "icon", icon: n(q)(e3.dataType) }, null, 8, ["icon"]), c2.value !== l4 ? (t(), a(n(D), { key: 0, title: e3.colName + (e3.comment ? `[${e3.comment}]` : ""), placement: "left" }, { default: o(() => [p("div", Ie, g(e3.rename ?? e3.colName), 1)]), _: 2 }, 1032, ["title"])) : (t(), a(s2, { key: 1, bordered: false, value: C2.value, "onUpdate:value": i2[0] || (i2[0] = (e4) => C2.value = e4), ref_for: true, ref: (e4) => I2.value = e4, onPressEnter: (a2) => A2(e3), onBlur: w2 }, null, 8, ["value", "onPressEnter"])), r2.value === l4 && c2.value !== l4 ? (t(), a(n(D), { key: 2, title: "重命名" }, { default: o(() => [f(n(P), { class: "icon edit", icon: "ant-design:edit-outlined", onClick: S2 })]), _: 1 })) : v("", true), c2.value === l4 ? (t(), a(n(D), { key: 3, title: "保存" }, { default: o(() => [f(n(P), { class: "icon edit", icon: "ant-design:save-outlined", onClick: (a2) => A2(e3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true)], 40, Ne))), 128))], 2);
  };
} }), [["__scopeId", "data-v-20f7782b"]]), De = { key: 0, class: "header", style: { width: "120px" } }, Te = { key: 0, class: "divide-line" }, Me = ["title", "onClick"], Se = ["title", "onClick"], Ae = F(e({ __name: "EventSelectItems", props: { componentList: { type: Array, default: () => [] }, value: { type: Object, default: () => {
} }, hideEvent: { type: Boolean, default: false } }, emits: ["selectChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "803cda50": D2.value }));
  const u2 = e2, C2 = l2, h2 = c({ id: "", event: "", param: "" });
  r(() => u2.value, (e3) => {
    e3 ? (h2.id = e3.id, h2.event = e3.event, h2.param = e3.param) : (h2.id = "", h2.event = "", h2.param = "");
  }, { immediate: true });
  const { prefixCls: y2 } = V("event-select-items"), b2 = s(() => Y(u2.componentList, h2.id)), E2 = s(() => {
    var _a;
    const e3 = b2.value;
    return e3 && ((_a = e3.chart.events) == null ? void 0 : _a.emits) ? e3.chart.events.emits : [];
  }), N2 = s(() => {
    var _a;
    const e3 = b2.value;
    if (e3) {
      if (!((_a = e3.chart.data) == null ? void 0 : _a.headers)) return [];
      return Object.values(e3.chart.data.headers) ?? [];
    }
    return [];
  }), { token: I2 } = x.useToken(), D2 = s(() => I2.value.colorInfoBg), M2 = J();
  function S2() {
    M2.setCurHoverComponent("");
  }
  function A2(e3) {
    h2.id !== e3 && (h2.id = e3, E2.value && E2.value.length > 0 ? h2.event = E2.value[0] : h2.event = "", N2.value && N2.value.length > 0 ? h2.param = N2.value[0].colName ?? "" : h2.param = "", R2());
  }
  function w2(e3) {
    A2(e3.chart.id);
  }
  function R2() {
    u2.hideEvent ? C2("selectChange", de(n(h2), "event")) : C2("selectChange", n(h2));
  }
  return (l3, i2) => (t(), d("div", { class: m(n(y2)) }, [p("div", { class: m(`${n(y2)}-headers`) }, [i2[0] || (i2[0] = p("div", { class: "header", style: { width: "150px" } }, "组件", -1)), e2.hideEvent ? v("", true) : (t(), d("div", De, "事件")), i2[1] || (i2[1] = p("div", { class: "header", style: { width: "120px" } }, "参数", -1))], 2), p("div", { class: m(`${n(y2)}-container`) }, [f(n(Ce), { class: m(`${n(y2)}-items`), style: { width: "150px" } }, { default: o(() => {
    var _a;
    return [((_a = e2.componentList) == null ? void 0 : _a.length) > 0 ? (t(true), d(k, { key: 0 }, _(e2.componentList, (e3) => (t(), d("div", { key: e3.chart.id }, [e3.chart.type !== n(Z).MfCombine ? (t(), a(ee, { key: 0, style: { margin: "2px 6px 0 6px" }, "external-select": true, "is-select": h2.id === e3.chart.id, item: e3, "show-eye": false, "show-lock": false, onClick: (a2) => A2(e3.chart.id), onEnter: (a2) => function(e4) {
      M2.setCurHoverComponent(e4.chart.id);
    }(e3), onLeave: S2 }, null, 8, ["is-select", "item", "onClick", "onEnter"])) : (t(), a(ae, { key: 1, style: { margin: "2px", "font-size": "12px" }, "external-select": true, "is-select": h2.id === e3.chart.id, item: e3, "show-eye": false, "show-lock": false, "show-child-eye": false, "show-child-lock": false, expand: true, "child-select": h2.id, onParentClick: (a2) => A2(e3.chart.id), onChildClick: w2 }, null, 8, ["is-select", "item", "child-select", "onParentClick"]))]))), 128)) : (t(), a(n(T), { key: 1, description: "暂无组件", image: n(T).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))];
  }), _: 1 }, 8, ["class"]), e2.hideEvent ? v("", true) : (t(), d("div", Te)), e2.hideEvent ? v("", true) : (t(), a(n(Ce), { key: 1, class: m(`${n(y2)}-items`), style: { width: "120px" } }, { default: o(() => [E2.value.length > 0 ? (t(true), d(k, { key: 0 }, _(E2.value, (e3) => {
    var _a;
    return t(), d("div", { class: m(["item", h2.event === e3 ? "select" : ""]), title: e3, key: e3, onClick: (a2) => {
      return t2 = e3, void (h2.event !== t2 && (h2.event = t2, R2()));
      var t2;
    } }, [p("div", null, g(n(te)(e3, (_a = b2.value) == null ? void 0 : _a.chart.type)), 1)], 10, Me);
  }), 128)) : (t(), a(n(T), { key: 1, description: "暂无事件", image: n(T).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"])), i2[2] || (i2[2] = p("div", { class: "divide-line" }, null, -1)), f(n(Ce), { class: m(`${n(y2)}-items`), style: { width: "120px" } }, { default: o(() => [N2.value.length > 0 ? (t(true), d(k, { key: 0 }, _(N2.value, (e3, a2) => (t(), d("div", { class: m(["item", h2.param === e3.colName ? "select" : ""]), title: `${e3.colName}${e3.rename ? `[${e3.rename}]` : ""}`, key: a2, onClick: (a3) => {
    return t2 = e3.colName, void (h2.param !== t2 && (h2.param = t2 ?? "", R2()));
    var t2;
  } }, [p("div", null, g(e3.rename ?? e3.colName), 1)], 10, Se))), 128)) : (t(), a(n(T), { key: 1, description: "暂无参数", image: n(T).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"]))]), _: 1 }, 8, ["class"])], 2)], 2));
} }), [["__scopeId", "data-v-ba31ce1b"]]), we = ["onMouseenter"], Re = { class: "title" }, Le = F(e({ __name: "EventSelect", props: { events: { type: Array, default: () => [] }, filterSelf: { type: Boolean, default: false } }, emits: ["ok", "delete", "eventLose"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "00be537e": I2.value }));
  const c2 = e2, C2 = l2, { prefixCls: y2 } = V("event-select"), b2 = u(false), { token: N2 } = x.useToken(), I2 = s(() => N2.value.colorInfoBg), T2 = u([]), w2 = J(), R2 = u(), L2 = u(-1), $2 = u(-1), O2 = s(() => {
    if (c2.events && c2.events.length > 0) {
      const e3 = [];
      for (const a2 of c2.events) {
        const t2 = Y(w2.getComponentList, a2.id);
        if (!t2) {
          C2("eventLose", a2.id);
          continue;
        }
        let n2;
        t2.chart.data.headers && (n2 = t2.chart.data.headers[a2.param]), n2 ? e3.push(`${t2.chart.name} / ${te(a2.event, t2.chart.type)} / ${n2.rename ?? n2.colName}`) : e3.push(`${t2.chart.name} / ${te(a2.event, t2.chart.type)}`);
      }
      return e3;
    }
    return [];
  });
  function B2() {
    b2.value = false;
  }
  function U2() {
    C2("ok", { event: me(R2.value), modifyIndex: $2.value }), b2.value = false;
  }
  r(() => {
    var _a;
    return (_a = w2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    b2.value = false;
  });
  const j2 = (e3) => {
    b2.value = e3, $2.value = -1, e3 && z2(), R2.value = void 0;
  };
  function z2() {
    T2.value = [];
    const e3 = (e4) => e4.chart.events && e4.chart.events.emits && e4.chart.events.emits.length > 0 && (c2.filterSelf && e4.chart.id !== w2.getCurConfigComponent.chart.id || !c2.filterSelf);
    for (const a2 of w2.getComponentList) {
      if (a2.chart.type !== Z.MfCombine) {
        e3(a2) && T2.value.push(me(a2));
        continue;
      }
      const t2 = me(a2);
      t2.chart.options.components = t2.chart.options.components.filter((a3) => e3(a3)), (t2.chart.options.components.length > 0 || e3(t2)) && T2.value.push(t2);
    }
  }
  function G2(e3) {
    R2.value = e3;
  }
  function H2() {
    L2.value = -1;
  }
  return (e3, l3) => (t(), a(n(M), { trigger: ["click"], open: b2.value, onOpenChange: j2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "380px" } }, { overlay: o(() => [f(n(A), null, { default: o(() => [f(n(A).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: o(() => [f(Ae, { value: R2.value, "component-list": T2.value, onSelectChange: G2 }, null, 8, ["value", "component-list"]), p("div", { class: m(`${n(y2)}-ok-button`) }, [f(n(S), { class: "mr-2", onClick: B2 }, { default: o(() => l3[1] || (l3[1] = [E("取消")])), _: 1 }), f(n(S), { type: "primary", onClick: U2 }, { default: o(() => l3[2] || (l3[2] = [E("确定")])), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: o(() => [p("div", { class: m(n(y2)) }, [(t(true), d(k, null, _(O2.value, (e4, i2) => (t(), d("div", { class: "item", key: i2, onClick: l3[0] || (l3[0] = h((e5) => b2.value = false, ["stop"])), onMouseenter: (e5) => function(e6) {
    L2.value = e6;
  }(i2), onMouseleave: H2 }, [f(n(D), { title: e4, placement: "left" }, { default: o(() => [p("div", Re, g(e4), 1)]), _: 2 }, 1032, ["title"]), L2.value === i2 ? (t(), a(n(D), { key: 0, title: "修改" }, { default: o(() => [f(n(P), { class: "icon", icon: "ant-design:edit-outlined", onClick: h((e5) => function(e6) {
    z2(), R2.value = c2.events[e6], $2.value = e6, b2.value = true;
  }(i2), ["stop"]) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true), L2.value === i2 ? (t(), a(n(D), { key: 1, title: "删除" }, { default: o(() => [f(n(P), { class: "icon", icon: "ant-design:delete-outlined", onClick: (e5) => function(e6) {
    C2("delete", e6), b2.value = false;
  }(i2) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : v("", true)], 40, we))), 128)), f(n(S), { size: "small", type: "link", class: m(`${n(y2)}-drop-button`) }, { icon: o(() => [f(n(P), { size: 12, icon: "ant-design:plus-outlined" })]), default: o(() => [l3[3] || (l3[3] = p("span", { class: "content" }, "绑定已开启事件", -1))]), _: 1 }, 8, ["class"])], 2)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-f8f8b1d8"]]), $e = F(e({ __name: "VariableSelect", props: { variable: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: l2 }) {
  const i2 = e2, s2 = l2, { prefixCls: c2 } = V("variable-select"), d2 = u(false), C2 = J(), g2 = u(), y2 = u([]), k2 = u(""), _2 = u(false), b2 = () => {
    var _a;
    if ((_a = i2.variable) == null ? void 0 : _a.id) {
      const e3 = Y(C2.getComponentList, i2.variable.id);
      if (!e3) return s2("ok"), "";
      let a2;
      if (e3.chart.data.headers && (a2 = e3.chart.data.headers[i2.variable.param]), a2) return `${e3.chart.name} / ${a2.rename ?? a2.colName}`;
    }
    return "";
  };
  function N2() {
    d2.value = false, k2.value = b2();
  }
  function I2() {
    s2("ok", me(g2.value)), d2.value = false;
  }
  r(() => {
    var _a;
    return (_a = C2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    d2.value = false;
  }), r(() => i2.variable, () => {
    k2.value = b2();
  }, { deep: true, immediate: true });
  const x2 = (e3) => {
    d2.value = e3, e3 ? function() {
      y2.value = [];
      const e4 = (e5) => e5.chart.data && e5.chart.data.dataSet && (i2.filterSelf && e5.chart.id !== C2.getCurConfigComponent.chart.id || !i2.filterSelf);
      for (const a2 of C2.getComponentList) {
        if (a2.chart.type !== Z.MfCombine) {
          e4(a2) && y2.value.push(me(a2));
          continue;
        }
        const t2 = me(a2);
        t2.chart.options.components = t2.chart.options.components.filter((a3) => e4(a3)), (t2.chart.options.components.length > 0 || e4(t2)) && y2.value.push(t2);
      }
    }() : k2.value = b2(), g2.value = me(i2.variable);
  };
  function D2(e3) {
    g2.value = e3;
  }
  function T2() {
    s2("ok", {});
  }
  return (e3, l3) => (t(), a(n(M), { trigger: ["click"], open: d2.value, onOpenChange: x2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "270px" } }, { overlay: o(() => [f(n(A), null, { default: o(() => [f(n(A).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: o(() => [f(Ae, { "hide-event": true, value: g2.value, "component-list": y2.value, onSelectChange: D2 }, null, 8, ["value", "component-list"]), p("div", { class: m(`${n(c2)}-ok-button`) }, [f(n(S), { class: "mr-2", onClick: N2 }, { default: o(() => l3[4] || (l3[4] = [E("取消")])), _: 1 }), f(n(S), { type: "primary", onClick: I2 }, { default: o(() => l3[5] || (l3[5] = [E("确定")])), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: o(() => [p("div", { class: m(n(c2)), onMouseenter: l3[2] || (l3[2] = (e4) => _2.value = true), onMouseleave: l3[3] || (l3[3] = (e4) => _2.value = false) }, [f(n(w), { class: m(`${n(c2)}-drop-input`), placeholder: "请选择参数来源", value: k2.value, "onUpdate:value": l3[0] || (l3[0] = (e4) => k2.value = e4), onChange: l3[1] || (l3[1] = (e4) => d2.value = true) }, { suffix: o(() => [_2.value && k2.value ? (t(), a(n(P), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: h(T2, ["stop"]) })) : v("", true), f(n(P), { class: "drop-icon", size: 12, icon: d2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-e10c5339"]]), Oe = { class: "title" }, Ve = { class: "param" }, Pe = { key: 0, style: { color: "red" } }, Be = { key: 0 }, Ue = { key: 1 }, je = { key: 2 }, ze = F(e({ __name: "DataParamsConfig", props: { params: { type: Array, default: () => [] } }, emits: ["paramChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ 71549546: C2.value }));
  const r2 = l2, { prefixCls: c2 } = V("data-params-config"), { token: u2 } = x.useToken(), C2 = s(() => u2.value.colorBorder), h2 = J(), { createMessage: y2 } = O();
  const b2 = (e3, a2) => {
    const t2 = () => {
      const e4 = "错误：组件参数存在循环引用，请检查";
      throw y2.error(e4), new Error(e4);
    }, n2 = (e4) => {
      const a3 = h2.getComponent(e4);
      if (a3 == null ? void 0 : a3.chart.data.params) {
        for (const e5 of Object.values(a3 == null ? void 0 : a3.chart.data.params)) if (e5 == null ? void 0 : e5.value) if (ve(e5.value)) for (const a4 of e5.value) a4.id === h2.getCurConfigComponent.chart.id && t2(), n2(a4.id);
        else e5.value.id === h2.getCurConfigComponent.chart.id ? t2() : n2(e5.value.id);
      }
      return a3;
    };
    if (e3) {
      const t3 = n2(e3.id);
      if (!t3) return;
      void 0 === h2.getCurConfigComponent.chart.data.priority && (h2.getCurConfigComponent.chart.data.priority = 0), h2.getCurConfigComponent.chart.data.priority <= (t3.chart.data.priority ?? 0) && (h2.getCurConfigComponent.chart.data.priority = t3.chart.data.priority + 1);
      const o2 = 0 === (t3 == null ? void 0 : t3.chart.data.type) ? t3 == null ? void 0 : t3.chart.data.dataSet : t3 == null ? void 0 : t3.chart.data.result;
      if (ve(o2)) return { [a2.name]: o2[0][e3.param] };
      if (o2) return { [a2.name]: o2[e3.param] };
    }
  };
  function N2(e3) {
    const a2 = h2.getCurConfigComponent.chart;
    a2.data.paramsValue ? a2.data.paramsValue = { ...a2.data.paramsValue, ...e3 } : a2.data.paramsValue = e3, r2("paramChange");
  }
  const I2 = pe((e3, a2) => {
    N2({ [a2.name]: e3.target.value });
  }, 500);
  return (l3, i2) => (t(true), d(k, null, _(e2.params, (e3) => (t(), d("div", { class: m(n(c2)), key: e3.name }, [p("div", Oe, [f(n(D), { title: e3.remark }, { default: o(() => [p("div", Ve, [1 === e3.required ? (t(), d("span", Pe, "*")) : v("", true), E(" " + g(e3.name), 1)])]), _: 2 }, 1032, ["title"]), f(n(D), { placement: "topRight" }, { title: o(() => i2[0] || (i2[0] = [p("div", null, [p("span", { style: { "font-weight": "700" } }, "常量："), E("设置固定参数")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "变量："), E("设置其他组件数据或全局参数（第一次加载设置，不会随前者变化） ")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "事件："), E(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")], -1)])), default: o(() => [n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] ? (t(), a(n(R), { key: 0, class: "radio-group", size: "small", value: n(h2).getCurConfigComponent.chart.data.params[e3.name].type, "onUpdate:value": (a2) => n(h2).getCurConfigComponent.chart.data.params[e3.name].type = a2, onChange: (a2) => function(e4, a3) {
    var _a;
    const t2 = me(h2.getCurConfigComponent.chart.data.params);
    switch ((_a = e4.target) == null ? void 0 : _a.value) {
      case ne.VARIABLE:
        t2[a3.name].value = void 0;
        break;
      case ne.EVENT:
        t2[a3.name].value = [];
        break;
      default:
        t2[a3.name].value = a3.defaultValue, a3.defaultValue && N2({ [a3.name]: a3.defaultValue });
    }
    h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, { default: o(() => [f(n(L), { class: "radio-button", value: n(ne).CONSTANT }, { default: o(() => i2[1] || (i2[1] = [E("常量")])), _: 1 }, 8, ["value"]), f(n(L), { class: "radio-button", value: n(ne).VARIABLE }, { default: o(() => i2[2] || (i2[2] = [E("变量")])), _: 1 }, 8, ["value"]), f(n(L), { class: "radio-button", value: n(ne).EVENT }, { default: o(() => i2[3] || (i2[3] = [E("事件")])), _: 1 }, 8, ["value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])) : v("", true)]), _: 2 }, 1024)]), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).CONSTANT ? (t(), d("div", Be, [f(n(w), { value: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, "onUpdate:value": (a2) => n(h2).getCurConfigComponent.chart.data.params[e3.name].value = a2, placeholder: "请输入常量参数", onChange: (a2) => n(I2)(a2, e3) }, null, 8, ["value", "onUpdate:value", "onChange"])])) : v("", true), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).VARIABLE ? (t(), d("div", Ue, [f($e, { "filter-self": true, variable: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = me(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = e4, N2(b2(e4, a3)), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["variable", "onOk"])])) : v("", true), n(h2).getCurConfigComponent.chart.data.params && n(h2).getCurConfigComponent.chart.data.params[e3.name] && n(h2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).EVENT ? (t(), d("div", je, [f(Le, { "filter-self": true, events: n(h2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = e4.event, n2 = me(h2.getCurConfigComponent.chart.data.params);
    let o2 = false;
    n2[a3.name].value || (n2[a3.name].value = [], o2 = true);
    const l4 = n2[a3.name].value.findIndex((e5) => e5.id === t2.id && e5.event === t2.event);
    -1 === l4 ? (e4.modifyIndex >= 0 ? n2[a3.name].value.splice(e4.modifyIndex, 1, t2) : n2[a3.name].value.push(t2), o2 = true) : n2[a3.name].value.param !== t2.param && (n2[a3.name].value.splice(l4, 1, t2), o2 = true), o2 && (N2(b2(e4.event, a3)), h2.getCurConfigComponent.chart.data.params = n2);
  }(a2, e3), onDelete: (a2) => function(e4, a3) {
    var _a;
    const t2 = me(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value.splice(e4, 1), ((_a = t2[a3.name].value) == null ? void 0 : _a.length) > 0 ? N2(b2(t2[a3.name].value[0], a3)) : N2({ [a3.name]: void 0 }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3), onEventLose: (a2) => function(e4, a3) {
    var _a;
    const t2 = me(h2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = t2[a3.name].value.filter((a4) => a4.id !== e4), ((_a = t2[a3.name].value) == null ? void 0 : _a.length) > 0 ? N2(b2(t2[a3.name].value[0], a3)) : N2({ [a3.name]: void 0 }), h2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])])) : v("", true)], 2))), 128));
} }), [["__scopeId", "data-v-004f2837"]]), Ge = { class: "title" }, He = { class: "title" }, Fe = { class: "title" }, Je = { class: "data-header" }, qe = { class: "data-set" }, Ke = { class: "target-data" }, Qe = e({ __name: "DataConfig", props: { selectData: { type: Object } }, emits: ["refreshData"], setup(e2, { emit: i2 }) {
  const s2 = i2, c2 = J(), C2 = [{ label: "静态数据", value: 0 }, { label: "动态数据", value: 1 }], { prefixCls: g2 } = V("data-config"), h2 = u([]), y2 = u([]), { setDataTable: _2 } = oe();
  function b2(e3) {
    var _a;
    c2.getCurConfigComponent.chart.data.id = e3.id, (_a = c2.getCurConfigComponent.chart) == null ? true : delete _a.isResource, c2.getCurConfigComponent.chart.data.name = e3.name;
  }
  function I2() {
    var _a, _b, _c, _d, _e2, _f;
    const e3 = ((_b = (_a = c2.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.isResource) ? `${c2.getId},${(_c = c2.getCurConfigComponent) == null ? void 0 : _c.chart.data.id}` : (_d = c2.getCurConfigComponent) == null ? void 0 : _d.chart.data.id;
    if (e3) {
      const a2 = [], t2 = ((_f = (_e2 = c2.getCurConfigComponent) == null ? void 0 : _e2.chart) == null ? void 0 : _f.isResource) ? ie : se;
      a2.push(t2(e3).then((e4) => {
        h2.value = e4, function(e5) {
          const a3 = {};
          e5.forEach((e6) => {
            e6.colName && (a3[e6.colName] = { colName: e6.colName, rename: e6.rename, dataType: e6.dataType });
          }), c2.getCurConfigComponent.chart.data.headers = a3;
        }(e4), function(e5) {
          if (!c2.getCurConfigComponent.chart.data.fields) return void (c2.getCurConfigComponent.chart.data.fields = {});
          const a3 = Object.keys(c2.getCurConfigComponent.chart.data.fields);
          for (const t3 of a3) {
            const a4 = c2.getCurConfigComponent.chart.data.fields[t3];
            for (let t4 = 0; t4 < a4.length; t4++) {
              const n2 = a4[t4], o2 = e5.find((e6) => e6.colName === n2.colName);
              o2 ? (n2.rename = o2.rename, n2.dataType = o2.dataType) : a4.splice(t4--, 1);
            }
          }
        }(e4);
      }).catch(() => {
        h2.value = [];
      }), async function() {
        var _a2;
        const e4 = await re({ apiId: (_a2 = c2.getCurConfigComponent) == null ? void 0 : _a2.chart.data.id, pageNum: 1, pageSize: 1e4 });
        e4.total > 0 ? (y2.value = e4.list, function(e5) {
          var _a3;
          const a3 = () => {
            const a4 = {}, t4 = {};
            e5.forEach((e6) => {
              a4[e6.name] = { type: ne.CONSTANT, value: e6.defaultValue }, e6.defaultValue && (t4[e6.name] = e6.defaultValue);
            }), c2.getCurConfigComponent.chart.data.params = a4, c2.getCurConfigComponent.chart.data.paramsValue = t4;
          };
          if (!((_a3 = c2.getCurConfigComponent.chart.data) == null ? void 0 : _a3.params)) return void a3();
          let t3 = false;
          for (const a4 of e5) if (!c2.getCurConfigComponent.chart.data.params[a4.name]) {
            t3 = true;
            break;
          }
          for (const a4 of Object.keys(c2.getCurConfigComponent.chart.data.params)) if (!e5.some((e6) => e6.name === a4)) {
            t3 = true;
            break;
          }
          t3 && a3();
        }(e4.list)) : (y2.value = [], c2.getCurConfigComponent.chart.data.params = void 0);
      }()), Promise.all(a2).then(() => {
        s2("refreshData");
      });
    } else h2.value = [], y2.value = [], c2.getCurConfigComponent.chart.data.fields = {};
  }
  function x2(e3) {
    var _a;
    if ((_a = c2.getCurConfigComponent.chart.data) == null ? void 0 : _a.headers) {
      const a2 = c2.getCurConfigComponent.chart.data.headers[e3.colName];
      a2 && (a2.rename = e3.rename);
    }
  }
  return N(() => {
    Q.on(W.DATA_RENAME, x2);
  }), r(() => {
    var _a;
    return (_a = c2.getCurConfigComponent) == null ? void 0 : _a.chart.data.type;
  }, (e3) => {
    var _a;
    if (0 !== e3) I2();
    else {
      const e4 = le[(_a = c2.getCurConfigComponent) == null ? void 0 : _a.chart.type];
      c2.getCurConfigComponent.chart.data.headers = e4.defaultHeaders && e4.defaultHeaders(c2.getCurConfigComponent.chart);
    }
  }, { immediate: true }), r(() => {
    var _a;
    return (_a = c2.getCurConfigComponent) == null ? void 0 : _a.chart.data.id;
  }, () => {
    var _a;
    0 !== ((_a = c2.getCurConfigComponent) == null ? void 0 : _a.chart.data.type) && (I2(), _2());
  }), (i3, r2) => (t(), a(n(Ce), null, { default: o(() => [p("div", { class: m(n(g2)) }, [p("div", Ge, [r2[3] || (r2[3] = E(" 数据类型 ")), f(n(R), { value: n(c2).getCurConfigComponent.chart.data.type, "onUpdate:value": r2[0] || (r2[0] = (e3) => n(c2).getCurConfigComponent.chart.data.type = e3), options: C2, "option-type": "button", "button-style": "solid", size: "small" }, null, 8, ["value"])]), f(n($), { style: { margin: "0" } }), 0 === n(c2).getCurConfigComponent.chart.data.type ? l(i3.$slots, "static-data", { key: 0 }, void 0, true) : (t(), d(k, { key: 1 }, [p("div", He, [f(n(D), { title: "点击右侧输入框切换数据源", placement: "left" }, { default: o(() => r2[4] || (r2[4] = [E(" 数据来源")])), _: 1 }), f(Ee, { "select-data": e2.selectData, "data-id": n(c2).getCurConfigComponent.chart.data.id, "data-name": n(c2).getCurConfigComponent.chart.data.name, "is-resource": n(c2).getCurConfigComponent.chart.isResource, "screen-id": n(c2).getId, onDataChange: b2, onDataRefresh: I2 }, { default: o(() => [l(i3.$slots, "data-select", {}, void 0, true)]), _: 3 }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])]), p("div", Fe, [f(n(D), { title: "接口允许返回数据的最大条数", placement: "left" }, { default: o(() => r2[5] || (r2[5] = [E(" 数据限制")])), _: 1 }), f(n(ce), { value: n(c2).getCurConfigComponent.chart.data.limit, "onUpdate:value": r2[1] || (r2[1] = (e3) => n(c2).getCurConfigComponent.chart.data.limit = e3), max: n(c2).getCurConfigComponent.chart.data.maxLimit <= 0 ? 1 / 0 : n(c2).getCurConfigComponent.chart.data.maxLimit, min: 1, suffix: "条" }, null, 8, ["value", "max"])]), y2.value && y2.value.length > 0 ? (t(), a(ge, { key: 0, title: "参数设置" }, { default: o(() => [f(ze, { params: y2.value, onParamChange: r2[2] || (r2[2] = () => {
    s2("refreshData");
  }) }, null, 8, ["params"])]), _: 1 })) : v("", true), h2.value && h2.value.length > 0 ? (t(), a(ge, { key: 1, title: "数据设置", "allow-collapse": false }, { default: o(() => [p("div", Je, [r2[6] || (r2[6] = p("div", null, "源数据", -1)), f(n(P), { icon: "ant-design:double-right-outlined" }), r2[7] || (r2[7] = p("div", null, "目标数据", -1))]), p("div", qe, [f(xe, { "field-list": h2.value }, null, 8, ["field-list"]), r2[8] || (r2[8] = p("div", { class: "divide-line" }, null, -1)), p("div", Ke, [l(i3.$slots, "target-data", {}, void 0, true)])])]), _: 3 })) : v("", true)], 64)), l(i3.$slots, "default", {}, void 0, true)], 2)]), _: 3 }));
} }), We = F(Qe, [["__scopeId", "data-v-b903d006"]]), Xe = ["onMouseenter"], Ye = { class: "title" }, Ze = e({ __name: "DragInData", props: { fields: { type: Array, default: () => [] }, maxCount: { type: Number, default: 9999 }, height: { type: Number, default: 0 } }, emits: ["dataChange"], setup(e2, { emit: l2 }) {
  i((e3) => ({ "4bae6fc2": E2.value }));
  const c2 = e2, h2 = l2, { prefixCls: y2 } = V("drag-in-data"), k2 = u(c2.fields), _2 = u(-1), { token: b2 } = x.useToken(), E2 = s(() => b2.value.colorInfoBg);
  r(() => c2.fields, () => {
    k2.value = c2.fields;
  });
  const D2 = (e3) => {
    var _a;
    const a2 = (_a = e3.dataTransfer) == null ? void 0 : _a.getData(X);
    if (!a2) return;
    const t2 = JSON.parse(a2);
    k2.value.some((e4) => e4.colName === t2.colName && e4.rename === t2.rename) || (k2.value.length >= c2.maxCount && k2.value.shift(), k2.value.push(fe(t2, ["colName", "rename", "dataType"])), h2("dataChange", k2.value));
  };
  function M2() {
    _2.value = -1;
  }
  function S2(e3) {
    const a2 = k2.value.findIndex((a3) => a3.colName === e3.colName);
    -1 !== a2 && (k2.value[a2].rename = e3.rename, h2("dataChange", k2.value));
  }
  function A2() {
    h2("dataChange", k2.value);
  }
  return N(() => {
    Q.on(W.DATA_RENAME, S2);
  }), I(() => {
    Q.off(W.DATA_RENAME, S2);
  }), (l3, i2) => (t(), d("div", { class: m(n(y2)), style: C(e2.height > 0 ? { height: `${e2.height}px` } : {}), onDrop: D2 }, [0 === k2.value.length ? (t(), a(n(T), { key: 0, class: "empty", description: "拖动数据到此处", image: n(T).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])) : (t(), a(n(Ce), { key: 1 }, { default: o(() => [f(n(he), { "item-key": "id", modelValue: k2.value, "onUpdate:modelValue": i2[0] || (i2[0] = (e3) => k2.value = e3), animation: "300", "ghost-class": "ghost", class: "drag-data", onChange: A2 }, { item: o(({ index: e3, element: o2 }) => [p("div", { class: "field-block", onMouseenter: (a2) => function(e4) {
    _2.value = e4;
  }(e3), onMouseleave: M2 }, [f(n(P), { class: "icon", icon: n(q)(o2.dataType) }, null, 8, ["icon"]), p("div", Ye, g(o2.rename ?? o2.colName), 1), _2.value === e3 ? (t(), a(n(P), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (a2) => function(e4) {
    k2.value.splice(e4, 1), h2("dataChange", k2.value);
  }(e3) }, null, 8, ["onClick"])) : v("", true)], 40, Xe)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))], 38));
} }), ea = F(Ze, [["__scopeId", "data-v-c9719241"]]);
export {
  We as D,
  ea as a
};
