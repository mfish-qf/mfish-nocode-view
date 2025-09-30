import { defineComponent as e, createBlock as a, openBlock as t, unref as n, withCtx as o, renderSlot as r, useCssVars as i, computed as l, watch as s, reactive as u, ref as d, createElementBlock as c, normalizeClass as m, createElementVNode as p, createVNode as f, createCommentVNode as C, normalizeStyle as g, toDisplayString as v, withModifiers as h, resolveComponent as y, Fragment as k, renderList as _, nextTick as N, createTextVNode as R, onMounted as b, onUnmounted as I } from "vue";
import { theme as D, Tooltip as E, RadioGroup as T, RadioButton as x, Input as A, Divider as V, Checkbox as O, Slider as M, Empty as S } from "ant-design-vue";
import { useMessage as w, useDesign as L } from "@mfish/core/hooks";
import { Icon as U } from "@mfish/core/components/Icon";
import { useModalInner as P, BasicModal as $, useModal as j } from "@mfish/core/components/Modal";
import { router as B } from "@mfish/core/router";
import { useOutsideOpen as z } from "@mfish/core/utils/OutsideOpenUtils";
import { debounce as q, throttle as J, cloneDeep as F, pick as H } from "lodash-es";
import { API_SAVE as G, getDataFieldsById as K, getApiParamsList as Q } from "@mfish/custom-api";
import { _ as W, u as X, K as Y, N as Z, s as ee, S as ae, O as te, I as ne, b as oe, Q as re, R as ie, e as le, d as se } from "./index.js";
import "@vueuse/core";
import "@mfish/core/enums";
import { isArray as ue } from "@mfish/core/utils/Is";
import { E as de } from "./EventSelect.js";
import { V as ce } from "./VariableSelect.js";
import { ScrollContainer as me } from "@mfish/core/components/Container";
import pe from "vuedraggable";
const fe = e({ __name: "DataSelectModal", props: { selectData: { type: Object } }, emits: ["success", "register"], setup(e2, { emit: i2 }) {
  const l2 = e2, s2 = i2, [u2, { setModalProps: d2, closeModal: c2 }] = P(async () => {
    d2({ confirmLoading: false, width: "1200px", defaultFullscreen: true });
  }), { createMessage: m2 } = w();
  function p2() {
    if (l2.selectData) return s2("success", l2.selectData), void c2();
    m2.warning("请选择数据源");
  }
  return (e3, i3) => (t(), a(n($), { width: "1200px", onRegister: n(u2), title: "数据来源", onOk: p2 }, { default: o(() => [r(e3.$slots, "default")]), _: 3 }, 8, ["onRegister"]));
} }), Ce = { key: 0, class: "placeholder" }, ge = { key: 0, class: "warning" }, ve = { key: 2, class: "icon-group" }, he = W(e({ __name: "DataSelect", props: { selectData: { type: Object }, dataId: { type: String, default: "" }, dataName: { type: String, default: "" }, isResource: { type: Boolean, default: false }, screenId: { type: String, default: "" } }, emits: ["dataChange", "dataRefresh"], setup(e2, { emit: y2 }) {
  i((e3) => ({ v719f0847: b2.value }));
  const k2 = e2, _2 = y2;
  s(() => k2.dataId, (e3) => {
    e3 ? (A2.id = e3, A2.name = k2.dataName) : (A2.id = "", A2.name = "");
  });
  const { prefixCls: N2 } = L("data-select"), { token: R2 } = D.useToken(), b2 = l(() => R2.value.colorBorder), I2 = d(""), [T2, { openModal: x2 }] = j(), A2 = u({ id: k2.dataId, name: k2.dataName }), V2 = d(false), { open: O2 } = z(G, H2);
  function M2() {
    A2.id && (I2.value = "ant-design:close-circle-filled");
  }
  function S2() {
    I2.value = "";
  }
  function w2() {
    x2(true, {});
  }
  function P2(e3) {
    A2.id = e3.id, A2.name = e3.name, _2("dataChange", n(A2));
  }
  function $2() {
    A2.id = "", A2.name = "", _2("dataChange", n(A2));
  }
  function J2() {
    let e3;
    e3 = k2.isResource ? { configId: A2.id, screenId: k2.screenId } : { configId: A2.id };
    const a2 = B.resolve({ path: "/low-code/mf-api/config", query: e3 });
    O2(a2);
  }
  const F2 = q(() => H2(), 200);
  function H2() {
    V2.value = true, setTimeout(() => {
      V2.value = false;
    }, 1e3), _2("dataRefresh");
  }
  return (i2, l2) => (t(), c("div", { class: m(n(N2)) }, [p("div", { class: "input", onMouseenter: M2, onMouseleave: S2, onClick: w2 }, [A2.id ? (t(), a(n(E), { key: 1, title: A2.name }, { default: o(() => [p("div", { class: "title", style: g(e2.isResource ? { textDecoration: "line-through", color: "#999" } : {}) }, v(A2.name), 5), e2.isResource ? (t(), c("div", ge, " 注意：请将样例数据更换为自己的数据")) : C("", true)]), _: 1 }, 8, ["title"])) : (t(), c("div", Ce, "请选择数据来源")), I2.value ? (t(), c("div", ve, [f(n(E), { title: e2.isResource ? "查看样例数据源配置" : "编辑数据源" }, { default: o(() => [f(n(U), { class: "icon", icon: e2.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined", onClick: h(J2, ["stop"]) }, null, 8, ["icon"])]), _: 1 }, 8, ["title"]), f(n(E), { title: "清空数据源" }, { default: o(() => [f(n(U), { class: "delete-icon", size: 14, icon: I2.value, onClick: h($2, ["stop"]) }, null, 8, ["icon"])]), _: 1 })])) : C("", true), f(fe, { onRegister: n(T2), onSuccess: P2, "select-data": e2.selectData }, { default: o(() => [r(i2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["onRegister", "select-data"])], 32), f(n(E), { title: "刷新数据源" }, { default: o(() => [f(n(U), { class: "icon", icon: "ant-design:sync-outlined", onClick: n(F2), spin: V2.value }, null, 8, ["onClick", "spin"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-d0458915"]]), ye = ["draggable", "onMouseenter", "onDragstart"], ke = { class: "title" }, _e = W(e({ __name: "FieldConfig", props: { fieldList: { type: Array, default: () => [] } }, setup(e2) {
  i((e3) => ({ v362ddaab: b2.value }));
  const r2 = e2, s2 = d(-1), u2 = d(-1), g2 = d(""), { prefixCls: h2 } = L("field-config"), { token: R2 } = D.useToken(), b2 = l(() => R2.value.colorInfoBg), I2 = d(), T2 = X();
  function x2() {
    s2.value = -1;
  }
  function A2() {
    u2.value = s2.value, g2.value = r2.fieldList[s2.value].rename ?? r2.fieldList[s2.value].colName, N(() => {
      I2.value?.focus(), I2.value?.select();
    });
  }
  async function V2(e3) {
    if (g2.value !== e3.rename) {
      await Z(T2.getCurConfigComponent.chart.data.id, e3.colName, g2.value) && (e3.rename = g2.value);
    }
    O2(), ee.emit(ae.DATA_RENAME, e3);
  }
  function O2() {
    u2.value = -1, g2.value = "";
  }
  return (r3, i2) => {
    const l2 = y("AInput");
    return t(), c("div", { class: m(n(h2)) }, [(t(true), c(k, null, _(e2.fieldList, (e3, r4) => (t(), c("div", { class: "field-block", key: e3.id, draggable: u2.value !== r4, onMouseenter: (e4) => (function(e5) {
      s2.value = e5;
    })(r4), onMouseleave: x2, onDragstart: (a2) => (function(e4, a3) {
      e4.dataTransfer?.setData(te, JSON.stringify(a3));
    })(a2, e3) }, [f(n(U), { class: "icon", icon: n(Y)(e3.dataType) }, null, 8, ["icon"]), u2.value !== r4 ? (t(), a(n(E), { key: 0, title: e3.colName + (e3.comment ? `[${e3.comment}]` : ""), placement: "left" }, { default: o(() => [p("div", ke, v(e3.rename ?? e3.colName), 1)]), _: 2 }, 1032, ["title"])) : (t(), a(l2, { key: 1, bordered: false, value: g2.value, "onUpdate:value": i2[0] || (i2[0] = (e4) => g2.value = e4), ref_for: true, ref: (e4) => I2.value = e4, onPressEnter: (a2) => V2(e3), onBlur: O2 }, null, 8, ["value", "onPressEnter"])), s2.value === r4 && u2.value !== r4 ? (t(), a(n(E), { key: 2, title: "重命名" }, { default: o(() => [f(n(U), { class: "icon edit", icon: "ant-design:edit-outlined", onClick: A2 })]), _: 1 })) : C("", true), u2.value === r4 ? (t(), a(n(E), { key: 3, title: "保存" }, { default: o(() => [f(n(U), { class: "icon edit", icon: "ant-design:save-outlined", onClick: (a2) => V2(e3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : C("", true)], 40, ye))), 128))], 2);
  };
} }), [["__scopeId", "data-v-79b53fd9"]]), Ne = { class: "title" }, Re = { class: "param" }, be = { key: 0, style: { color: "red" } }, Ie = { key: 0 }, De = { key: 1 }, Ee = { key: 2 }, Te = W(e({ __name: "DataParamsConfig", props: { params: { type: Array, default: () => [] } }, emits: ["paramChange"], setup(e2, { emit: r2 }) {
  const i2 = r2, { prefixCls: l2 } = L("data-params-config"), s2 = X(), { createMessage: u2 } = w();
  const d2 = (e3, a2) => {
    const t2 = () => {
      const e4 = "错误：组件参数存在循环引用，请检查";
      throw u2.error(e4), new Error(e4);
    }, n2 = (e4) => {
      const a3 = s2.getComponent(e4);
      if (a3?.chart.data.params) {
        for (const e5 of Object.values(a3?.chart.data.params)) if (e5?.value) if (ue(e5.value)) for (const a4 of e5.value) a4.id === s2.getCurConfigComponent.chart.id && t2(), n2(a4.id);
        else e5.value.id === s2.getCurConfigComponent.chart.id ? t2() : n2(e5.value.id);
      }
      return a3;
    };
    if (e3) {
      const t3 = n2(e3.id);
      if (!t3) return;
      void 0 === s2.getCurConfigComponent.chart.data.priority && (s2.getCurConfigComponent.chart.data.priority = 0), s2.getCurConfigComponent.chart.data.priority <= (t3.chart.data.priority ?? 0) && (s2.getCurConfigComponent.chart.data.priority = t3.chart.data.priority + 1);
      const o2 = 0 === t3?.chart.data.type ? t3?.chart.data.dataSet : t3?.chart.data.result;
      if (ue(o2)) return { [a2.name]: o2[0][e3.param] };
      if (o2) return { [a2.name]: o2[e3.param] };
    }
  };
  function g2(e3) {
    const a2 = s2.getCurConfigComponent.chart;
    a2.data.paramsValue ? a2.data.paramsValue = { ...a2.data.paramsValue, ...e3 } : a2.data.paramsValue = e3, i2("paramChange");
  }
  const h2 = J((e3, a2) => {
    g2({ [a2.name]: e3.target.value });
  }, 500);
  return (r3, i3) => (t(true), c(k, null, _(e2.params, (e3) => (t(), c("div", { class: m(n(l2)), key: e3.name }, [p("div", Ne, [f(n(E), { title: e3.remark }, { default: o(() => [p("div", Re, [1 === e3.required ? (t(), c("span", be, "*")) : C("", true), R(" " + v(e3.name), 1)])]), _: 2 }, 1032, ["title"]), f(n(E), { placement: "topRight" }, { title: o(() => [...i3[0] || (i3[0] = [p("div", null, [p("span", { style: { "font-weight": "700" } }, "常量："), R("设置固定参数")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "变量： "), R(" 设置其他组件数据或全局变量（第一次加载设置，不会跟随前者变化。全局变量来自于请求链接中的参数） ")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "事件："), R(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")], -1)])]), default: o(() => [n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] ? (t(), a(n(T), { key: 0, class: "radio-group", size: "small", value: n(s2).getCurConfigComponent.chart.data.params[e3.name].type, "onUpdate:value": (a2) => n(s2).getCurConfigComponent.chart.data.params[e3.name].type = a2, onChange: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    switch (e4.target?.value) {
      case ne.VARIABLE:
        t2[a3.name].value = void 0;
        break;
      case ne.EVENT:
        t2[a3.name].value = [];
        break;
      default:
        t2[a3.name].value = a3.defaultValue, a3.defaultValue && g2({ [a3.name]: a3.defaultValue });
    }
    s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3) }, { default: o(() => [f(n(x), { class: "radio-button", value: n(ne).CONSTANT }, { default: o(() => [...i3[1] || (i3[1] = [R("常量", -1)])]), _: 1 }, 8, ["value"]), f(n(x), { class: "radio-button", value: n(ne).VARIABLE }, { default: o(() => [...i3[2] || (i3[2] = [R("变量", -1)])]), _: 1 }, 8, ["value"]), f(n(x), { class: "radio-button", value: n(ne).EVENT }, { default: o(() => [...i3[3] || (i3[3] = [R("事件", -1)])]), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["value", "onUpdate:value", "onChange"])) : C("", true)]), _: 2 }, 1024)]), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).CONSTANT ? (t(), c("div", Ie, [f(n(A), { value: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, "onUpdate:value": (a2) => n(s2).getCurConfigComponent.chart.data.params[e3.name].value = a2, placeholder: "请输入常量参数", onChange: (a2) => n(h2)(a2, e3) }, null, 8, ["value", "onUpdate:value", "onChange"])])) : C("", true), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).VARIABLE ? (t(), c("div", De, [f(ce, { "filter-self": true, variable: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = e4, 1 === e4.paramType ? g2(d2(e4, a3)) : g2({ [a3.name]: e4.defaultValue }), s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3) }, null, 8, ["variable", "onOk"])])) : C("", true), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).EVENT ? (t(), c("div", Ee, [f(de, { "filter-self": true, events: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => (function(e4, a3) {
    const t2 = e4.event, n2 = F(s2.getCurConfigComponent.chart.data.params);
    let o2 = false;
    n2[a3.name].value || (n2[a3.name].value = [], o2 = true);
    const r4 = n2[a3.name].value.findIndex((e5) => e5.id === t2.id && e5.event === t2.event);
    -1 === r4 ? (e4.modifyIndex >= 0 ? n2[a3.name].value.splice(e4.modifyIndex, 1, t2) : n2[a3.name].value.push(t2), o2 = true) : n2[a3.name].value.param !== t2.param && (n2[a3.name].value.splice(r4, 1, t2), o2 = true), o2 && (g2(d2(e4.event, a3)), s2.getCurConfigComponent.chart.data.params = n2);
  })(a2, e3), onDelete: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value.splice(e4, 1), t2[a3.name].value?.length > 0 ? g2(d2(t2[a3.name].value[0], a3)) : g2({ [a3.name]: void 0 }), s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3), onEventLose: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = t2[a3.name].value.filter((a4) => a4.id !== e4), t2[a3.name].value?.length > 0 ? g2(d2(t2[a3.name].value[0], a3)) : g2({ [a3.name]: void 0 }), s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3) }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])])) : C("", true)], 2))), 128));
} }), [["__scopeId", "data-v-76f8c848"]]), xe = { class: "title" }, Ae = { class: "title" }, Ve = { class: "title" }, Oe = { class: "title" }, Me = { key: 0 }, Se = { class: "title" }, we = { class: "data-header" }, Le = { class: "data-set" }, Ue = { class: "target-data" }, Pe = e({ __name: "DataConfig", props: { selectData: { type: Object } }, emits: ["refreshData", "dataTypeChange"], setup(e2, { emit: i2 }) {
  const l2 = i2, g2 = X(), v2 = [{ label: "静态数据", value: 0 }, { label: "动态数据", value: 1 }], { prefixCls: h2 } = L("data-config"), y2 = d([]), _2 = d([]), N2 = u({ open: false, interval: 5 }), I2 = u({ open: false, events: [] });
  function D2(e3) {
    g2.getCurConfigComponent.chart.data.id = e3.id, delete g2.getCurConfigComponent.chart?.isResource, g2.getCurConfigComponent.chart.data.name = e3.name;
  }
  function x2() {
    const e3 = g2.getCurConfigComponent?.chart?.isResource && g2.getCurConfigComponent?.chart.data.id ? `${g2.getId},${g2.getCurConfigComponent?.chart.data.id}` : g2.getCurConfigComponent?.chart.data.id;
    if (e3) {
      const a2 = [], t2 = g2.getCurConfigComponent?.chart?.isResource ? re : K;
      a2.push(t2(e3).then((e4) => {
        y2.value = e4, (function(e5) {
          const a3 = {};
          e5.forEach((e6) => {
            e6.colName && (a3[e6.colName] = { colName: e6.colName, rename: e6.rename, dataType: e6.dataType });
          }), g2.getCurConfigComponent.chart.data.headers = a3;
        })(e4), (function(e5) {
          if (!g2.getCurConfigComponent.chart.data.fields) return void (g2.getCurConfigComponent.chart.data.fields = {});
          const a3 = Object.keys(g2.getCurConfigComponent.chart.data.fields);
          for (const t3 of a3) {
            const a4 = g2.getCurConfigComponent.chart.data.fields[t3];
            for (let t4 = 0; t4 < a4.length; t4++) {
              const n2 = a4[t4], o2 = e5.find((e6) => e6.colName === n2.colName);
              o2 ? (n2.rename = o2.rename, n2.dataType = o2.dataType) : a4.splice(t4--, 1);
            }
          }
        })(e4);
      }).catch(() => {
        y2.value = [];
      }), (async function() {
        const e4 = [], a3 = (a4) => {
          e4.push({ id: a4.id, name: a4.key, defaultValue: a4.value, isUse: 0, remark: a4.remark || "", required: a4.isRequired ? 1 : 0 });
        }, t3 = g2.getCurConfigComponent?.chart.data.id;
        if (t3) {
          const n2 = await Q({ apiId: t3, pageNum: 1, pageSize: 1e4 }), o2 = await ie(t3);
          if (o2) {
            const e5 = o2.headerParams ? JSON.parse(o2.headerParams) : [], t4 = o2.bodyParams ? JSON.parse(o2.bodyParams) : {};
            e5?.forEach((e6) => {
              a3(e6);
            }), t4?.other?.forEach((e6) => {
              a3(e6);
            }), t4?.page?.checked && (a3({ ...t4.page.pageNum, remark: "当前页" }), a3({ ...t4.page.pageSize, remark: "每页条数" }));
          }
          if (n2.total > 0 || e4.length > 0) return _2.value = n2.list, _2.value.push(...e4), void (function(e5) {
            const a4 = () => {
              const a5 = {}, t5 = {};
              e5.forEach((e6) => {
                a5[e6.name] = { type: ne.CONSTANT, value: e6.defaultValue }, e6.defaultValue && (t5[e6.name] = e6.defaultValue);
              }), g2.getCurConfigComponent.chart.data.params = a5, g2.getCurConfigComponent.chart.data.paramsValue = t5;
            };
            if (!g2.getCurConfigComponent.chart.data?.params) return void a4();
            let t4 = false;
            for (const a5 of e5) if (!g2.getCurConfigComponent.chart.data.params[a5.name]) {
              t4 = true;
              break;
            }
            for (const a5 of Object.keys(g2.getCurConfigComponent.chart.data.params)) if (!e5.some((e6) => e6.name === a5)) {
              t4 = true;
              break;
            }
            t4 && a4();
          })(_2.value);
        }
        _2.value = [], g2.getCurConfigComponent.chart.data.params = void 0;
      })()), Promise.all(a2).then(() => {
        l2("refreshData");
      });
    } else y2.value = [], _2.value = [], g2.getCurConfigComponent.chart.data.fields = {}, l2("refreshData");
  }
  function A2(e3) {
    if (g2.getCurConfigComponent.chart.data?.headers) {
      const a2 = g2.getCurConfigComponent.chart.data.headers[e3.colName];
      a2 && (a2.rename = e3.rename);
    }
  }
  function S2(e3) {
    const a2 = I2.events.findIndex((a3) => a3.id === e3.event.id && a3.event === e3.event.event);
    -1 === a2 ? e3.modifyIndex >= 0 ? I2.events.splice(e3.modifyIndex, 1, e3.event) : I2.events.push(e3.event) : I2.events.splice(a2, 1, e3.event);
  }
  function w2(e3) {
    -1 !== e3 && I2.events.splice(e3, 1);
  }
  return b(() => {
    ee.on(ae.DATA_RENAME, A2), void 0 !== g2.getCurConfigComponent.chart.data?.autoRefresh && (N2.open = g2.getCurConfigComponent.chart.data?.autoRefresh.open, N2.interval = g2.getCurConfigComponent.chart.data?.autoRefresh.interval), void 0 !== g2.getCurConfigComponent.chart.data?.eventRefresh && (I2.open = g2.getCurConfigComponent.chart.data?.eventRefresh.open, I2.events = g2.getCurConfigComponent.chart.data?.eventRefresh.events);
  }), s(N2, (e3) => {
    e3 && (g2.getCurConfigComponent.chart.data.autoRefresh = { open: e3.open, interval: e3.interval });
  }), s(I2, (e3) => {
    e3 && (g2.getCurConfigComponent.chart.data.eventRefresh = { open: e3.open, events: e3.events });
  }), s(() => g2.getCurConfigComponent?.chart.data.type, (e3) => {
    if (0 === e3) {
      const e4 = oe[g2.getCurConfigComponent?.chart.type];
      return void (g2.getCurConfigComponent.chart.data.headers = e4.defaultHeaders && e4.defaultHeaders(g2.getCurConfigComponent.chart));
    }
    x2();
  }, { immediate: true }), s(() => g2.getCurConfigComponent?.chart.data.id, () => {
    0 !== g2.getCurConfigComponent?.chart.data.type && x2();
  }), (i3, s2) => (t(), a(n(me), null, { default: o(() => [p("div", { class: m(n(h2)) }, [p("div", xe, [s2[7] || (s2[7] = R(" 数据类型 ", -1)), f(n(T), { value: n(g2).getCurConfigComponent.chart.data.type, "onUpdate:value": s2[0] || (s2[0] = (e3) => n(g2).getCurConfigComponent.chart.data.type = e3), options: v2, "option-type": "button", "button-style": "solid", size: "small", onChange: s2[1] || (s2[1] = () => {
    l2("dataTypeChange", n(g2).getCurConfigComponent.chart.data.type);
  }) }, null, 8, ["value"])]), f(n(V), { style: { margin: "0" } }), 0 === n(g2).getCurConfigComponent.chart.data.type ? r(i3.$slots, "static-data", { key: 0 }, void 0, true) : (t(), c(k, { key: 1 }, [p("div", Ae, [f(n(E), { title: "点击右侧输入框切换数据源", placement: "left" }, { default: o(() => [...s2[8] || (s2[8] = [R(" 数据来源", -1)])]), _: 1 }), f(he, { "select-data": e2.selectData, "data-id": n(g2).getCurConfigComponent.chart.data.id, "data-name": n(g2).getCurConfigComponent.chart.data.name, "is-resource": n(g2).getCurConfigComponent.chart.isResource, "screen-id": n(g2).getId, onDataChange: D2, onDataRefresh: x2 }, { default: o(() => [r(i3.$slots, "data-select", {}, void 0, true)]), _: 3 }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])]), p("div", Ve, [f(n(E), { title: "接口允许返回数据的最大条数", placement: "left" }, { default: o(() => [...s2[9] || (s2[9] = [R(" 数据限制", -1)])]), _: 1 }), f(n(le), { value: n(g2).getCurConfigComponent.chart.data.limit, "onUpdate:value": s2[2] || (s2[2] = (e3) => n(g2).getCurConfigComponent.chart.data.limit = e3), max: n(g2).getCurConfigComponent.chart.data.maxLimit <= 0 ? 1 / 0 : n(g2).getCurConfigComponent.chart.data.maxLimit, min: 1, suffix: "条" }, null, 8, ["value", "max"])]), f(se, { title: "刷新设置" }, { default: o(() => [p("div", Oe, [f(n(E), { title: "数据按照刷新间隔时间更新数据（编辑环境不生效）", placement: "left" }, { default: o(() => [f(n(O), { checked: N2.open, "onUpdate:checked": s2[3] || (s2[3] = (e3) => N2.open = e3) }, { default: o(() => [...s2[10] || (s2[10] = [R(" 自动刷新", -1)])]), _: 1 }, 8, ["checked"])]), _: 1 }), N2.open ? (t(), c("div", Me, [f(n(M), { style: { margin: "0" }, "tip-formatter": (e3) => `刷新间隔 ${e3}（分钟）`, value: N2.interval, "onUpdate:value": s2[4] || (s2[4] = (e3) => N2.interval = e3), min: 0.5, max: 60, step: 0.5 }, null, 8, ["tip-formatter", "value"])])) : C("", true)]), p("div", Se, [f(n(E), { title: "通过其他组件事件触发数据更新", placement: "left" }, { default: o(() => [f(n(O), { checked: I2.open, "onUpdate:checked": s2[5] || (s2[5] = (e3) => I2.open = e3) }, { default: o(() => [...s2[11] || (s2[11] = [R(" 事件刷新", -1)])]), _: 1 }, 8, ["checked"])]), _: 1 }), I2.open ? (t(), a(de, { key: 0, "filter-self": true, "hide-param": true, events: I2.events, onOk: S2, onDelete: w2 }, null, 8, ["events"])) : C("", true)])]), _: 1 }), _2.value && _2.value.length > 0 ? (t(), a(se, { key: 0, title: "参数设置" }, { default: o(() => [f(Te, { params: _2.value, onParamChange: s2[6] || (s2[6] = () => {
    l2("refreshData");
  }) }, null, 8, ["params"])]), _: 1 })) : C("", true), y2.value && y2.value.length > 0 ? (t(), a(se, { key: 1, title: "数据设置", "allow-collapse": false }, { default: o(() => [p("div", we, [s2[12] || (s2[12] = p("div", null, "源数据", -1)), f(n(U), { icon: "ant-design:double-right-outlined" }), s2[13] || (s2[13] = p("div", null, "目标数据", -1))]), p("div", Le, [f(_e, { "field-list": y2.value }, null, 8, ["field-list"]), s2[14] || (s2[14] = p("div", { class: "divide-line" }, null, -1)), p("div", Ue, [r(i3.$slots, "target-data", {}, void 0, true)])])]), _: 3 })) : C("", true)], 64)), r(i3.$slots, "default", {}, void 0, true)], 2)]), _: 3 }));
} }), $e = W(Pe, [["__scopeId", "data-v-9de4f09a"]]), je = ["onMouseenter"], Be = { class: "title" }, ze = e({ __name: "DragInData", props: { fields: { type: Array, default: () => [] }, maxCount: { type: Number, default: 9999 }, height: { type: Number, default: 0 } }, emits: ["dataChange"], setup(e2, { emit: r2 }) {
  i((e3) => ({ v58b0ea90: R2.value }));
  const u2 = e2, h2 = r2, { prefixCls: y2 } = L("drag-in-data"), k2 = d(u2.fields), _2 = d(-1), { token: N2 } = D.useToken(), R2 = l(() => N2.value.colorInfoBg);
  s(() => u2.fields, () => {
    k2.value = u2.fields;
  });
  const E2 = (e3) => {
    const a2 = e3.dataTransfer?.getData(te);
    if (!a2) return;
    const t2 = JSON.parse(a2);
    k2.value.some((e4) => e4.colName === t2.colName && e4.rename === t2.rename) || (k2.value.length >= u2.maxCount && k2.value.shift(), k2.value.push(H(t2, ["colName", "rename", "dataType"])), h2("dataChange", k2.value));
  };
  function T2() {
    _2.value = -1;
  }
  function x2(e3) {
    const a2 = k2.value.findIndex((a3) => a3.colName === e3.colName);
    -1 !== a2 && (k2.value[a2].rename = e3.rename, h2("dataChange", k2.value));
  }
  function A2() {
    h2("dataChange", k2.value);
  }
  return b(() => {
    ee.on(ae.DATA_RENAME, x2);
  }), I(() => {
    ee.off(ae.DATA_RENAME, x2);
  }), (r3, i2) => (t(), c("div", { class: m(n(y2)), style: g(e2.height > 0 ? { height: `${e2.height}px` } : {}), onDrop: E2 }, [0 === k2.value.length ? (t(), a(n(S), { key: 0, class: "empty", description: "拖动数据到此处", image: n(S).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])) : (t(), a(n(me), { key: 1 }, { default: o(() => [f(n(pe), { "item-key": "id", modelValue: k2.value, "onUpdate:modelValue": i2[0] || (i2[0] = (e3) => k2.value = e3), animation: "300", "ghost-class": "ghost", class: "drag-data", onChange: A2 }, { item: o(({ index: e3, element: o2 }) => [p("div", { class: "field-block", onMouseenter: (a2) => (function(e4) {
    _2.value = e4;
  })(e3), onMouseleave: T2 }, [f(n(U), { class: "icon", icon: n(Y)(o2.dataType) }, null, 8, ["icon"]), p("div", Be, v(o2.rename ?? o2.colName), 1), _2.value === e3 ? (t(), a(n(U), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (a2) => (function(e4) {
    k2.value.splice(e4, 1), h2("dataChange", k2.value);
  })(e3) }, null, 8, ["onClick"])) : C("", true)], 40, je)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))], 38));
} }), qe = W(ze, [["__scopeId", "data-v-a508a4de"]]);
export {
  $e as D,
  qe as a
};
