import { defineComponent as e, openBlock as a, createBlock as t, unref as n, withCtx as o, renderSlot as r, useCssVars as i, watch as l, computed as s, ref as u, reactive as d, createElementBlock as c, normalizeClass as m, createElementVNode as p, normalizeStyle as f, toDisplayString as C, createCommentVNode as g, createVNode as v, withModifiers as h, resolveComponent as y, Fragment as k, renderList as _, nextTick as N, createTextVNode as R, onMounted as I, onUnmounted as b } from "vue";
import { theme as D, Tooltip as E, RadioGroup as T, RadioButton as x, Input as A, Divider as V, Checkbox as M, Slider as O, Empty as S } from "ant-design-vue";
import { useMessage as w, useDesign as U } from "@mfish/core/hooks";
import { Icon as L } from "@mfish/core/components/Icon";
import { useModalInner as P, BasicModal as $, useModal as j } from "@mfish/core/components/Modal";
import { router as B } from "@mfish/core/router";
import { useOutsideOpen as z } from "@mfish/core/utils/OutsideOpenUtils";
import { debounce as q, throttle as J, cloneDeep as F, pick as H } from "lodash-es";
import { API_SAVE as G, renameField as Q, getDataFieldsById as K, getApiParamsList as W } from "@mfish/custom-api";
import { _ as X, u as Y, Q as Z, s as ee, S as ae, R as te, I as ne, b as oe, U as re, V as ie, e as le, d as se } from "./index.js";
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
  return (e3, i3) => (a(), t(n($), { width: "1200px", onRegister: n(u2), title: "数据来源", onOk: p2 }, { default: o(() => [r(e3.$slots, "default")]), _: 3 }, 8, ["onRegister"]));
} }), Ce = { key: 0, class: "placeholder" }, ge = { key: 0, class: "warning" }, ve = { key: 2, class: "icon-group" }, he = X(e({ __name: "DataSelect", props: { selectData: { type: Object }, dataId: { type: String, default: "" }, dataName: { type: String, default: "" }, isResource: { type: Boolean, default: false }, screenId: { type: String, default: "" } }, emits: ["dataChange", "dataRefresh"], setup(e2, { emit: y2 }) {
  i((e3) => ({ v719f0847: I2.value }));
  const k2 = e2, _2 = y2;
  l(() => k2.dataId, (e3) => {
    e3 ? (A2.id = e3, A2.name = k2.dataName) : (A2.id = "", A2.name = "");
  });
  const { prefixCls: N2 } = U("data-select"), { token: R2 } = D.useToken(), I2 = s(() => R2.value.colorBorder), b2 = u(""), [T2, { openModal: x2 }] = j(), A2 = d({ id: k2.dataId, name: k2.dataName }), V2 = u(false), { open: M2 } = z(G, H2);
  function O2() {
    A2.id && (b2.value = "ant-design:close-circle-filled");
  }
  function S2() {
    b2.value = "";
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
    M2(a2);
  }
  const F2 = q(() => H2(), 200);
  function H2() {
    V2.value = true, setTimeout(() => {
      V2.value = false;
    }, 1e3), _2("dataRefresh");
  }
  return (i2, l2) => (a(), c("div", { class: m(n(N2)) }, [p("div", { class: "input", onMouseenter: O2, onMouseleave: S2, onClick: w2 }, [A2.id ? (a(), t(n(E), { key: 1, title: A2.name }, { default: o(() => [p("div", { class: "title", style: f(e2.isResource ? { textDecoration: "line-through", color: "#999" } : {}) }, C(A2.name), 5), e2.isResource ? (a(), c("div", ge, " 注意：请将样例数据更换为自己的数据")) : g("", true)]), _: 1 }, 8, ["title"])) : (a(), c("div", Ce, "请选择数据来源")), b2.value ? (a(), c("div", ve, [v(n(E), { title: e2.isResource ? "查看样例数据源配置" : "编辑数据源" }, { default: o(() => [v(n(L), { class: "icon", icon: e2.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined", onClick: h(J2, ["stop"]) }, null, 8, ["icon"])]), _: 1 }, 8, ["title"]), v(n(E), { title: "清空数据源" }, { default: o(() => [v(n(L), { class: "delete-icon", size: 14, icon: b2.value, onClick: h($2, ["stop"]) }, null, 8, ["icon"])]), _: 1 })])) : g("", true), v(fe, { onRegister: n(T2), onSuccess: P2, "select-data": e2.selectData }, { default: o(() => [r(i2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["onRegister", "select-data"])], 32), v(n(E), { title: "刷新数据源" }, { default: o(() => [v(n(L), { class: "icon", icon: "ant-design:sync-outlined", onClick: n(F2), spin: V2.value }, null, 8, ["onClick", "spin"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-d0458915"]]), ye = ["draggable", "onMouseenter", "onDragstart"], ke = { class: "title" }, _e = X(e({ __name: "FieldConfig", props: { fieldList: { type: Array, default: () => [] } }, setup(e2) {
  i((e3) => ({ v23c892b9: I2.value }));
  const r2 = e2, l2 = u(-1), d2 = u(-1), f2 = u(""), { prefixCls: h2 } = U("field-config"), { token: R2 } = D.useToken(), I2 = s(() => R2.value.colorInfoBg), b2 = u(), T2 = Y();
  function x2() {
    l2.value = -1;
  }
  function A2() {
    d2.value = l2.value, f2.value = r2.fieldList[l2.value].rename ?? r2.fieldList[l2.value].colName, N(() => {
      b2.value?.focus(), b2.value?.select();
    });
  }
  async function V2(e3) {
    if (f2.value && f2.value !== e3.rename) {
      await Q(T2.getCurConfigComponent.chart.data.id, e3.colName, f2.value) && (e3.rename = f2.value);
    }
    O2(), ee.emit(ae.DATA_RENAME, e3);
  }
  async function M2() {
    setTimeout(() => O2(), 200);
  }
  function O2() {
    d2.value = -1, f2.value = "";
  }
  return (r3, i2) => {
    const s2 = y("AInput");
    return a(), c("div", { class: m(n(h2)) }, [(a(true), c(k, null, _(e2.fieldList, (e3, r4) => (a(), c("div", { class: "field-block", key: e3.id, draggable: d2.value !== r4, onMouseenter: (e4) => (function(e5) {
      l2.value = e5;
    })(r4), onMouseleave: x2, onDragstart: (a2) => (function(e4, a3) {
      e4.dataTransfer?.setData(te, JSON.stringify(a3));
    })(a2, e3) }, [v(n(L), { class: "icon", icon: n(Z)(e3.dataType) }, null, 8, ["icon"]), d2.value !== r4 ? (a(), t(n(E), { key: 0, title: e3.colName + (e3.comment ? `[${e3.comment}]` : ""), placement: "left" }, { default: o(() => [p("div", ke, C(e3.rename ?? e3.colName), 1)]), _: 2 }, 1032, ["title"])) : (a(), t(s2, { key: 1, bordered: false, value: f2.value, "onUpdate:value": i2[0] || (i2[0] = (e4) => f2.value = e4), ref_for: true, ref: (e4) => b2.value = e4, onPressEnter: (a2) => V2(e3), onBlur: M2 }, null, 8, ["value", "onPressEnter"])), l2.value === r4 && d2.value !== r4 ? (a(), t(n(E), { key: 2, title: "重命名" }, { default: o(() => [v(n(L), { class: "icon edit", icon: "ant-design:edit-outlined", onClick: A2 })]), _: 1 })) : g("", true), d2.value === r4 ? (a(), t(n(E), { key: 3, title: "保存" }, { default: o(() => [v(n(L), { class: "icon edit", icon: "ant-design:save-outlined", onClick: (a2) => V2(e3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : g("", true)], 40, ye))), 128))], 2);
  };
} }), [["__scopeId", "data-v-e1e66a29"]]), Ne = { class: "title" }, Re = { class: "param" }, Ie = { key: 0, style: { color: "red" } }, be = { key: 0 }, De = { key: 1 }, Ee = { key: 2 }, Te = X(e({ __name: "DataParamsConfig", props: { params: { type: Array, default: () => [] } }, emits: ["paramChange"], setup(e2, { emit: r2 }) {
  const i2 = r2, { prefixCls: l2 } = U("data-params-config"), s2 = Y(), { createMessage: u2 } = w();
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
  function f2(e3) {
    const a2 = s2.getCurConfigComponent.chart;
    a2.data.paramsValue ? a2.data.paramsValue = { ...a2.data.paramsValue, ...e3 } : a2.data.paramsValue = e3, i2("paramChange");
  }
  const h2 = J((e3, a2) => {
    f2({ [a2.name]: e3.target.value });
  }, 500);
  return (r3, i3) => (a(true), c(k, null, _(e2.params, (e3) => (a(), c("div", { class: m(n(l2)), key: e3.name }, [p("div", Ne, [v(n(E), { title: e3.remark }, { default: o(() => [p("div", Re, [1 === e3.required ? (a(), c("span", Ie, "*")) : g("", true), R(" " + C(e3.name), 1)])]), _: 2 }, 1032, ["title"]), v(n(E), { placement: "topRight" }, { title: o(() => [...i3[0] || (i3[0] = [p("div", null, [p("span", { style: { "font-weight": "700" } }, "常量："), R("设置固定参数")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "变量： "), R(" 设置其他组件数据或全局变量（第一次加载设置，不会跟随前者变化。全局变量来自于请求链接中的参数） ")], -1), p("div", null, [p("span", { style: { "font-weight": "700" } }, "事件："), R(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")], -1)])]), default: o(() => [n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] ? (a(), t(n(T), { key: 0, class: "radio-group", size: "small", value: n(s2).getCurConfigComponent.chart.data.params[e3.name].type, "onUpdate:value": (a2) => n(s2).getCurConfigComponent.chart.data.params[e3.name].type = a2, onChange: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    switch (e4.target?.value) {
      case ne.VARIABLE:
        t2[a3.name].value = void 0;
        break;
      case ne.EVENT:
        t2[a3.name].value = [];
        break;
      default:
        t2[a3.name].value = a3.defaultValue, a3.defaultValue && f2({ [a3.name]: a3.defaultValue });
    }
    s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3) }, { default: o(() => [v(n(x), { class: "radio-button", value: n(ne).CONSTANT }, { default: o(() => [...i3[1] || (i3[1] = [R("常量", -1)])]), _: 1 }, 8, ["value"]), v(n(x), { class: "radio-button", value: n(ne).VARIABLE }, { default: o(() => [...i3[2] || (i3[2] = [R("变量", -1)])]), _: 1 }, 8, ["value"]), v(n(x), { class: "radio-button", value: n(ne).EVENT }, { default: o(() => [...i3[3] || (i3[3] = [R("事件", -1)])]), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["value", "onUpdate:value", "onChange"])) : g("", true)]), _: 2 }, 1024)]), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).CONSTANT ? (a(), c("div", be, [v(n(A), { value: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, "onUpdate:value": (a2) => n(s2).getCurConfigComponent.chart.data.params[e3.name].value = a2, placeholder: "请输入常量参数", onChange: (a2) => n(h2)(a2, e3) }, null, 8, ["value", "onUpdate:value", "onChange"])])) : g("", true), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).VARIABLE ? (a(), c("div", De, [v(ce, { "filter-self": true, variable: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = e4, 1 === e4.paramType ? f2(d2(e4, a3)) : f2({ [a3.name]: e4.defaultValue }), s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3) }, null, 8, ["variable", "onOk"])])) : g("", true), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ne).EVENT ? (a(), c("div", Ee, [v(de, { "filter-self": true, events: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => (function(e4, a3) {
    const t2 = e4.event, n2 = F(s2.getCurConfigComponent.chart.data.params);
    let o2 = false;
    n2[a3.name].value || (n2[a3.name].value = [], o2 = true);
    const r4 = n2[a3.name].value.findIndex((e5) => e5.id === t2.id && e5.event === t2.event);
    -1 === r4 ? (e4.modifyIndex >= 0 ? n2[a3.name].value.splice(e4.modifyIndex, 1, t2) : n2[a3.name].value.push(t2), o2 = true) : n2[a3.name].value.param !== t2.param && (n2[a3.name].value.splice(r4, 1, t2), o2 = true), o2 && (f2(d2(e4.event, a3)), s2.getCurConfigComponent.chart.data.params = n2);
  })(a2, e3), onDelete: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value.splice(e4, 1), t2[a3.name].value?.length > 0 ? f2(d2(t2[a3.name].value[0], a3)) : f2({ [a3.name]: void 0 }), s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3), onEventLose: (a2) => (function(e4, a3) {
    const t2 = F(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = t2[a3.name].value.filter((a4) => a4.id !== e4), t2[a3.name].value?.length > 0 ? f2(d2(t2[a3.name].value[0], a3)) : f2({ [a3.name]: void 0 }), s2.getCurConfigComponent.chart.data.params = t2;
  })(a2, e3) }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])])) : g("", true)], 2))), 128));
} }), [["__scopeId", "data-v-76f8c848"]]), xe = { class: "title" }, Ae = { class: "title" }, Ve = { class: "title" }, Me = { class: "title" }, Oe = { key: 0 }, Se = { class: "title" }, we = { class: "data-header" }, Ue = { class: "data-set" }, Le = { class: "target-data" }, Pe = e({ __name: "DataConfig", props: { selectData: { type: Object } }, emits: ["refreshData", "dataTypeChange"], setup(e2, { emit: i2 }) {
  const s2 = i2, f2 = Y(), C2 = [{ label: "静态数据", value: 0 }, { label: "动态数据", value: 1 }], { prefixCls: h2 } = U("data-config"), y2 = u([]), _2 = u([]), N2 = d({ open: false, interval: 5 }), b2 = d({ open: false, events: [] });
  function D2(e3) {
    f2.getCurConfigComponent.chart.data.id = e3.id, delete f2.getCurConfigComponent.chart?.isResource, f2.getCurConfigComponent.chart.data.name = e3.name;
  }
  function x2() {
    const e3 = f2.getCurConfigComponent?.chart?.isResource && f2.getCurConfigComponent?.chart.data.id ? `${f2.getId},${f2.getCurConfigComponent?.chart.data.id}` : f2.getCurConfigComponent?.chart.data.id;
    if (e3) {
      const a2 = [], t2 = f2.getCurConfigComponent?.chart?.isResource ? re : K;
      a2.push(t2(e3).then((e4) => {
        y2.value = e4, (function(e5) {
          const a3 = {};
          e5.forEach((e6) => {
            e6.colName && (a3[e6.colName] = { colName: e6.colName, rename: e6.rename, dataType: e6.dataType });
          }), f2.getCurConfigComponent.chart.data.headers = a3;
        })(e4), (function(e5) {
          if (!f2.getCurConfigComponent.chart.data.fields) return void (f2.getCurConfigComponent.chart.data.fields = {});
          const a3 = Object.keys(f2.getCurConfigComponent.chart.data.fields);
          for (const t3 of a3) {
            const a4 = f2.getCurConfigComponent.chart.data.fields[t3];
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
        }, t3 = f2.getCurConfigComponent?.chart.data.id;
        if (t3) {
          const n2 = await W({ apiId: t3, pageNum: 1, pageSize: 1e4 }), o2 = await ie(t3);
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
              }), f2.getCurConfigComponent.chart.data.params = a5, f2.getCurConfigComponent.chart.data.paramsValue = t5;
            };
            if (!f2.getCurConfigComponent.chart.data?.params) return void a4();
            let t4 = false;
            for (const a5 of e5) if (!f2.getCurConfigComponent.chart.data.params[a5.name]) {
              t4 = true;
              break;
            }
            for (const a5 of Object.keys(f2.getCurConfigComponent.chart.data.params)) if (!e5.some((e6) => e6.name === a5)) {
              t4 = true;
              break;
            }
            t4 && a4();
          })(_2.value);
        }
        _2.value = [], f2.getCurConfigComponent.chart.data.params = void 0;
      })()), Promise.all(a2).then(() => {
        s2("refreshData");
      });
    } else y2.value = [], _2.value = [], f2.getCurConfigComponent.chart.data.fields = {}, s2("refreshData");
  }
  function A2(e3) {
    if (f2.getCurConfigComponent.chart.data?.headers) {
      const a2 = f2.getCurConfigComponent.chart.data.headers[e3.colName];
      a2 && (a2.rename = e3.rename);
    }
  }
  function S2(e3) {
    const a2 = b2.events.findIndex((a3) => a3.id === e3.event.id && a3.event === e3.event.event);
    -1 === a2 ? e3.modifyIndex >= 0 ? b2.events.splice(e3.modifyIndex, 1, e3.event) : b2.events.push(e3.event) : b2.events.splice(a2, 1, e3.event);
  }
  function w2(e3) {
    -1 !== e3 && b2.events.splice(e3, 1);
  }
  return I(() => {
    ee.on(ae.DATA_RENAME, A2), void 0 !== f2.getCurConfigComponent.chart.data?.autoRefresh && (N2.open = f2.getCurConfigComponent.chart.data?.autoRefresh.open, N2.interval = f2.getCurConfigComponent.chart.data?.autoRefresh.interval), void 0 !== f2.getCurConfigComponent.chart.data?.eventRefresh && (b2.open = f2.getCurConfigComponent.chart.data?.eventRefresh.open, b2.events = f2.getCurConfigComponent.chart.data?.eventRefresh.events);
  }), l(N2, (e3) => {
    e3 && (f2.getCurConfigComponent.chart.data.autoRefresh = { open: e3.open, interval: e3.interval });
  }), l(b2, (e3) => {
    e3 && (f2.getCurConfigComponent.chart.data.eventRefresh = { open: e3.open, events: e3.events });
  }), l(() => f2.getCurConfigComponent?.chart.data.type, (e3) => {
    if (0 === e3) {
      const e4 = oe[f2.getCurConfigComponent?.chart.type];
      return void (f2.getCurConfigComponent.chart.data.headers = e4.defaultHeaders && e4.defaultHeaders(f2.getCurConfigComponent.chart));
    }
    x2();
  }, { immediate: true }), l(() => f2.getCurConfigComponent?.chart.data.id, () => {
    0 !== f2.getCurConfigComponent?.chart.data.type && x2();
  }), (i3, l2) => (a(), t(n(me), null, { default: o(() => [p("div", { class: m(n(h2)) }, [p("div", xe, [l2[7] || (l2[7] = R(" 数据类型 ", -1)), v(n(T), { value: n(f2).getCurConfigComponent.chart.data.type, "onUpdate:value": l2[0] || (l2[0] = (e3) => n(f2).getCurConfigComponent.chart.data.type = e3), options: C2, "option-type": "button", "button-style": "solid", size: "small", onChange: l2[1] || (l2[1] = () => {
    s2("dataTypeChange", n(f2).getCurConfigComponent.chart.data.type);
  }) }, null, 8, ["value"])]), v(n(V), { style: { margin: "0" } }), 0 === n(f2).getCurConfigComponent.chart.data.type ? r(i3.$slots, "static-data", { key: 0 }, void 0, true) : (a(), c(k, { key: 1 }, [p("div", Ae, [v(n(E), { title: "点击右侧输入框切换数据源", placement: "left" }, { default: o(() => [...l2[8] || (l2[8] = [R(" 数据来源", -1)])]), _: 1 }), v(he, { "select-data": e2.selectData, "data-id": n(f2).getCurConfigComponent.chart.data.id, "data-name": n(f2).getCurConfigComponent.chart.data.name, "is-resource": n(f2).getCurConfigComponent.chart.isResource, "screen-id": n(f2).getId, onDataChange: D2, onDataRefresh: x2 }, { default: o(() => [r(i3.$slots, "data-select", {}, void 0, true)]), _: 3 }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])]), p("div", Ve, [v(n(E), { title: "接口允许返回数据的最大条数", placement: "left" }, { default: o(() => [...l2[9] || (l2[9] = [R(" 数据限制", -1)])]), _: 1 }), v(n(le), { value: n(f2).getCurConfigComponent.chart.data.limit, "onUpdate:value": l2[2] || (l2[2] = (e3) => n(f2).getCurConfigComponent.chart.data.limit = e3), max: n(f2).getCurConfigComponent.chart.data.maxLimit <= 0 ? 1 / 0 : n(f2).getCurConfigComponent.chart.data.maxLimit, min: 1, suffix: "条" }, null, 8, ["value", "max"])]), v(se, { title: "刷新设置" }, { default: o(() => [p("div", Me, [v(n(E), { title: "数据按照刷新间隔时间更新数据（编辑环境不生效）", placement: "left" }, { default: o(() => [v(n(M), { checked: N2.open, "onUpdate:checked": l2[3] || (l2[3] = (e3) => N2.open = e3) }, { default: o(() => [...l2[10] || (l2[10] = [R(" 自动刷新", -1)])]), _: 1 }, 8, ["checked"])]), _: 1 }), N2.open ? (a(), c("div", Oe, [v(n(O), { style: { margin: "0" }, "tip-formatter": (e3) => `刷新间隔 ${e3}（分钟）`, value: N2.interval, "onUpdate:value": l2[4] || (l2[4] = (e3) => N2.interval = e3), min: 0.5, max: 60, step: 0.5 }, null, 8, ["tip-formatter", "value"])])) : g("", true)]), p("div", Se, [v(n(E), { title: "通过其他组件事件触发数据更新", placement: "left" }, { default: o(() => [v(n(M), { checked: b2.open, "onUpdate:checked": l2[5] || (l2[5] = (e3) => b2.open = e3) }, { default: o(() => [...l2[11] || (l2[11] = [R(" 事件刷新", -1)])]), _: 1 }, 8, ["checked"])]), _: 1 }), b2.open ? (a(), t(de, { key: 0, "filter-self": true, "hide-param": true, events: b2.events, onOk: S2, onDelete: w2 }, null, 8, ["events"])) : g("", true)])]), _: 1 }), _2.value && _2.value.length > 0 ? (a(), t(se, { key: 0, title: "参数设置" }, { default: o(() => [v(Te, { params: _2.value, onParamChange: l2[6] || (l2[6] = () => {
    s2("refreshData");
  }) }, null, 8, ["params"])]), _: 1 })) : g("", true), y2.value && y2.value.length > 0 ? (a(), t(se, { key: 1, title: "数据设置", "allow-collapse": false }, { default: o(() => [p("div", we, [l2[12] || (l2[12] = p("div", null, "源数据", -1)), v(n(L), { icon: "ant-design:double-right-outlined" }), l2[13] || (l2[13] = p("div", null, "目标数据", -1))]), p("div", Ue, [v(_e, { "field-list": y2.value }, null, 8, ["field-list"]), l2[14] || (l2[14] = p("div", { class: "divide-line" }, null, -1)), p("div", Le, [r(i3.$slots, "target-data", {}, void 0, true)])])]), _: 3 })) : g("", true)], 64)), r(i3.$slots, "default", {}, void 0, true)], 2)]), _: 3 }));
} }), $e = X(Pe, [["__scopeId", "data-v-9de4f09a"]]), je = ["onMouseenter"], Be = { class: "title" }, ze = e({ __name: "DragInData", props: { fields: { type: Array, default: () => [] }, maxCount: { type: Number, default: 9999 }, height: { type: Number, default: 0 } }, emits: ["dataChange"], setup(e2, { emit: r2 }) {
  i((e3) => ({ v58b0ea90: R2.value }));
  const d2 = e2, h2 = r2, { prefixCls: y2 } = U("drag-in-data"), k2 = u(d2.fields), _2 = u(-1), { token: N2 } = D.useToken(), R2 = s(() => N2.value.colorInfoBg);
  l(() => d2.fields, () => {
    k2.value = d2.fields;
  });
  const E2 = (e3) => {
    const a2 = e3.dataTransfer?.getData(te);
    if (!a2) return;
    const t2 = JSON.parse(a2);
    k2.value.some((e4) => e4.colName === t2.colName && e4.rename === t2.rename) || (k2.value.length >= d2.maxCount && k2.value.shift(), k2.value.push(H(t2, ["colName", "rename", "dataType"])), h2("dataChange", k2.value));
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
  return I(() => {
    ee.on(ae.DATA_RENAME, x2);
  }), b(() => {
    ee.off(ae.DATA_RENAME, x2);
  }), (r3, i2) => (a(), c("div", { class: m(n(y2)), style: f(e2.height > 0 ? { height: `${e2.height}px` } : {}), onDrop: E2 }, [0 === k2.value.length ? (a(), t(n(S), { key: 0, class: "empty", description: "拖动数据到此处", image: n(S).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])) : (a(), t(n(me), { key: 1 }, { default: o(() => [v(n(pe), { "item-key": "id", modelValue: k2.value, "onUpdate:modelValue": i2[0] || (i2[0] = (e3) => k2.value = e3), animation: "300", "ghost-class": "ghost", class: "drag-data", onChange: A2 }, { item: o(({ index: e3, element: o2 }) => [p("div", { class: "field-block", onMouseenter: (a2) => (function(e4) {
    _2.value = e4;
  })(e3), onMouseleave: T2 }, [v(n(L), { class: "icon", icon: n(Z)(o2.dataType) }, null, 8, ["icon"]), p("div", Be, C(o2.rename ?? o2.colName), 1), _2.value === e3 ? (a(), t(n(L), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (a2) => (function(e4) {
    k2.value.splice(e4, 1), h2("dataChange", k2.value);
  })(e3) }, null, 8, ["onClick"])) : g("", true)], 40, je)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))], 38));
} }), qe = X(ze, [["__scopeId", "data-v-a508a4de"]]);
export {
  $e as D,
  qe as a
};
