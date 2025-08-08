import { defineComponent as e, createBlock as a, openBlock as t, unref as n, withCtx as o, renderSlot as i, useCssVars as l, computed as r, watch as s, reactive as u, ref as d, createElementBlock as c, normalizeClass as m, createElementVNode as f, createVNode as p, createCommentVNode as C, normalizeStyle as g, toDisplayString as v, withModifiers as h, resolveComponent as y, Fragment as _, renderList as k, nextTick as N, createTextVNode as I, onMounted as R, onUnmounted as b } from "vue";
import { theme as D, Tooltip as E, RadioGroup as T, RadioButton as x, Input as A, Divider as V, Checkbox as M, Slider as O, Empty as S } from "ant-design-vue";
import { useMessage as w, useDesign as L } from "@mfish/core/hooks";
import { Icon as U } from "@mfish/core/components/Icon";
import { useModalInner as $, BasicModal as j, useModal as P } from "@mfish/core/components/Modal";
import { router as B } from "@mfish/core/router";
import { useOutsideOpen as z } from "@mfish/core/utils/OutsideOpenUtils";
import { debounce as q, throttle as F, cloneDeep as H, pick as J } from "lodash-es";
import { API_SAVE as G } from "@mfish/custom-api";
import { _ as K, u as Q, K as W, N as X, s as Y, S as Z, O as ee, I as ae, b as te, Q as ne, R as oe, e as ie, d as le } from "./index.js";
import "@vueuse/core";
import "@mfish/core/enums";
import { isArray as re } from "@mfish/core/utils/Is";
import { defHttp as se } from "@mfish/core/utils/http/axios";
import { E as ue } from "./EventSelect.js";
import { V as de } from "./VariableSelect.js";
import { ScrollContainer as ce } from "@mfish/core/components/Container";
import me from "vuedraggable";
const fe = e({ __name: "DataSelectModal", props: { selectData: { type: Object } }, emits: ["success", "register"], setup(e2, { emit: l2 }) {
  const r2 = e2, s2 = l2, [u2, { setModalProps: d2, closeModal: c2 }] = $(async () => {
    d2({ confirmLoading: false, width: "1200px", defaultFullscreen: true });
  }), { createMessage: m2 } = w();
  function f2() {
    if (r2.selectData) return s2("success", r2.selectData), void c2();
    m2.warning("请选择数据源");
  }
  return (e3, l3) => (t(), a(n(j), { width: "1200px", onRegister: n(u2), title: "数据来源", onOk: f2 }, { default: o(() => [i(e3.$slots, "default")]), _: 3 }, 8, ["onRegister"]));
} }), pe = { key: 0, class: "placeholder" }, Ce = { key: 0, class: "warning" }, ge = { key: 2, class: "icon-group" }, ve = K(e({ __name: "DataSelect", props: { selectData: { type: Object }, dataId: { type: String, default: "" }, dataName: { type: String, default: "" }, isResource: { type: Boolean, default: false }, screenId: { type: String, default: "" } }, emits: ["dataChange", "dataRefresh"], setup(e2, { emit: y2 }) {
  l((e3) => ({ "719f0847": R2.value }));
  const _2 = e2, k2 = y2;
  s(() => _2.dataId, (e3) => {
    e3 ? (A2.id = e3, A2.name = _2.dataName) : (A2.id = "", A2.name = "");
  });
  const { prefixCls: N2 } = L("data-select"), { token: I2 } = D.useToken(), R2 = r(() => I2.value.colorBorder), b2 = d(""), [T2, { openModal: x2 }] = P(), A2 = u({ id: _2.dataId, name: _2.dataName }), V2 = d(false), { open: M2 } = z(G, J2);
  function O2() {
    A2.id && (b2.value = "ant-design:close-circle-filled");
  }
  function S2() {
    b2.value = "";
  }
  function w2() {
    x2(true, {});
  }
  function $2(e3) {
    A2.id = e3.id, A2.name = e3.name, k2("dataChange", n(A2));
  }
  function j2() {
    A2.id = "", A2.name = "", k2("dataChange", n(A2));
  }
  function F2() {
    let e3;
    e3 = _2.isResource ? { configId: A2.id, screenId: _2.screenId } : { configId: A2.id };
    const a2 = B.resolve({ path: "/low-code/mf-api/config", query: e3 });
    M2(a2);
  }
  const H2 = q(() => J2(), 200);
  function J2() {
    V2.value = true, setTimeout(() => {
      V2.value = false;
    }, 1e3), k2("dataRefresh");
  }
  return (l2, r2) => (t(), c("div", { class: m(n(N2)) }, [f("div", { class: "input", onMouseenter: O2, onMouseleave: S2, onClick: w2 }, [A2.id ? (t(), a(n(E), { key: 1, title: A2.name }, { default: o(() => [f("div", { class: "title", style: g(e2.isResource ? { textDecoration: "line-through", color: "#999" } : {}) }, v(A2.name), 5), e2.isResource ? (t(), c("div", Ce, " 注意：请将样例数据更换为自己的数据")) : C("", true)]), _: 1 }, 8, ["title"])) : (t(), c("div", pe, "请选择数据来源")), b2.value ? (t(), c("div", ge, [p(n(E), { title: e2.isResource ? "查看样例数据源配置" : "编辑数据源" }, { default: o(() => [p(n(U), { class: "icon", icon: e2.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined", onClick: h(F2, ["stop"]) }, null, 8, ["icon"])]), _: 1 }, 8, ["title"]), p(n(E), { title: "清空数据源" }, { default: o(() => [p(n(U), { class: "delete-icon", size: 14, icon: b2.value, onClick: h(j2, ["stop"]) }, null, 8, ["icon"])]), _: 1 })])) : C("", true), p(fe, { onRegister: n(T2), onSuccess: $2, "select-data": e2.selectData }, { default: o(() => [i(l2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["onRegister", "select-data"])], 32), p(n(E), { title: "刷新数据源" }, { default: o(() => [p(n(U), { class: "icon", icon: "ant-design:sync-outlined", onClick: n(H2), spin: V2.value }, null, 8, ["onClick", "spin"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-d0458915"]]), he = ["draggable", "onMouseenter", "onDragstart"], ye = { class: "title" }, _e = K(e({ __name: "FieldConfig", props: { fieldList: { type: Array, default: () => [] } }, setup(e2) {
  l((e3) => ({ "362ddaab": R2.value }));
  const i2 = e2, s2 = d(-1), u2 = d(-1), g2 = d(""), { prefixCls: h2 } = L("field-config"), { token: I2 } = D.useToken(), R2 = r(() => I2.value.colorInfoBg), b2 = d(), T2 = Q();
  function x2() {
    s2.value = -1;
  }
  function A2() {
    u2.value = s2.value, g2.value = i2.fieldList[s2.value].rename ?? i2.fieldList[s2.value].colName, N(() => {
      b2.value?.focus(), b2.value?.select();
    });
  }
  async function V2(e3) {
    if (g2.value !== e3.rename) {
      await X(T2.getCurConfigComponent.chart.data.id, e3.colName, g2.value) && (e3.rename = g2.value);
    }
    M2(), Y.emit(Z.DATA_RENAME, e3);
  }
  function M2() {
    u2.value = -1, g2.value = "";
  }
  return (i3, l2) => {
    const r2 = y("AInput");
    return t(), c("div", { class: m(n(h2)) }, [(t(true), c(_, null, k(e2.fieldList, (e3, i4) => (t(), c("div", { class: "field-block", key: e3.id, draggable: u2.value !== i4, onMouseenter: (e4) => function(e5) {
      s2.value = e5;
    }(i4), onMouseleave: x2, onDragstart: (a2) => function(e4, a3) {
      e4.dataTransfer?.setData(ee, JSON.stringify(a3));
    }(a2, e3) }, [p(n(U), { class: "icon", icon: n(W)(e3.dataType) }, null, 8, ["icon"]), u2.value !== i4 ? (t(), a(n(E), { key: 0, title: e3.colName + (e3.comment ? `[${e3.comment}]` : ""), placement: "left" }, { default: o(() => [f("div", ye, v(e3.rename ?? e3.colName), 1)]), _: 2 }, 1032, ["title"])) : (t(), a(r2, { key: 1, bordered: false, value: g2.value, "onUpdate:value": l2[0] || (l2[0] = (e4) => g2.value = e4), ref_for: true, ref: (e4) => b2.value = e4, onPressEnter: (a2) => V2(e3), onBlur: M2 }, null, 8, ["value", "onPressEnter"])), s2.value === i4 && u2.value !== i4 ? (t(), a(n(E), { key: 2, title: "重命名" }, { default: o(() => [p(n(U), { class: "icon edit", icon: "ant-design:edit-outlined", onClick: A2 })]), _: 1 })) : C("", true), u2.value === i4 ? (t(), a(n(E), { key: 3, title: "保存" }, { default: o(() => [p(n(U), { class: "icon edit", icon: "ant-design:save-outlined", onClick: (a2) => V2(e3) }, null, 8, ["onClick"])]), _: 2 }, 1024)) : C("", true)], 40, he))), 128))], 2);
  };
} }), [["__scopeId", "data-v-79b53fd9"]]), ke = { class: "title" }, Ne = { class: "param" }, Ie = { key: 0, style: { color: "red" } }, Re = { key: 0 }, be = { key: 1 }, De = { key: 2 }, Ee = K(e({ __name: "DataParamsConfig", props: { params: { type: Array, default: () => [] } }, emits: ["paramChange"], setup(e2, { emit: i2 }) {
  const l2 = i2, { prefixCls: r2 } = L("data-params-config"), s2 = Q(), { createMessage: u2 } = w();
  const d2 = (e3, a2) => {
    const t2 = () => {
      const e4 = "错误：组件参数存在循环引用，请检查";
      throw u2.error(e4), new Error(e4);
    }, n2 = (e4) => {
      const a3 = s2.getComponent(e4);
      if (a3?.chart.data.params) {
        for (const e5 of Object.values(a3?.chart.data.params)) if (e5?.value) if (re(e5.value)) for (const a4 of e5.value) a4.id === s2.getCurConfigComponent.chart.id && t2(), n2(a4.id);
        else e5.value.id === s2.getCurConfigComponent.chart.id ? t2() : n2(e5.value.id);
      }
      return a3;
    };
    if (e3) {
      const t3 = n2(e3.id);
      if (!t3) return;
      void 0 === s2.getCurConfigComponent.chart.data.priority && (s2.getCurConfigComponent.chart.data.priority = 0), s2.getCurConfigComponent.chart.data.priority <= (t3.chart.data.priority ?? 0) && (s2.getCurConfigComponent.chart.data.priority = t3.chart.data.priority + 1);
      const o2 = 0 === t3?.chart.data.type ? t3?.chart.data.dataSet : t3?.chart.data.result;
      if (re(o2)) return { [a2.name]: o2[0][e3.param] };
      if (o2) return { [a2.name]: o2[e3.param] };
    }
  };
  function g2(e3) {
    const a2 = s2.getCurConfigComponent.chart;
    a2.data.paramsValue ? a2.data.paramsValue = { ...a2.data.paramsValue, ...e3 } : a2.data.paramsValue = e3, l2("paramChange");
  }
  const h2 = F((e3, a2) => {
    g2({ [a2.name]: e3.target.value });
  }, 500);
  return (i3, l3) => (t(true), c(_, null, k(e2.params, (e3) => (t(), c("div", { class: m(n(r2)), key: e3.name }, [f("div", ke, [p(n(E), { title: e3.remark }, { default: o(() => [f("div", Ne, [1 === e3.required ? (t(), c("span", Ie, "*")) : C("", true), I(" " + v(e3.name), 1)])]), _: 2 }, 1032, ["title"]), p(n(E), { placement: "topRight" }, { title: o(() => l3[0] || (l3[0] = [f("div", null, [f("span", { style: { "font-weight": "700" } }, "常量："), I("设置固定参数")], -1), f("div", null, [f("span", { style: { "font-weight": "700" } }, "变量： "), I(" 设置其他组件数据或全局变量（第一次加载设置，不会跟随前者变化。全局变量来自于请求链接中的参数） ")], -1), f("div", null, [f("span", { style: { "font-weight": "700" } }, "事件："), I(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")], -1)])), default: o(() => [n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] ? (t(), a(n(T), { key: 0, class: "radio-group", size: "small", value: n(s2).getCurConfigComponent.chart.data.params[e3.name].type, "onUpdate:value": (a2) => n(s2).getCurConfigComponent.chart.data.params[e3.name].type = a2, onChange: (a2) => function(e4, a3) {
    const t2 = H(s2.getCurConfigComponent.chart.data.params);
    switch (e4.target?.value) {
      case ae.VARIABLE:
        t2[a3.name].value = void 0;
        break;
      case ae.EVENT:
        t2[a3.name].value = [];
        break;
      default:
        t2[a3.name].value = a3.defaultValue, a3.defaultValue && g2({ [a3.name]: a3.defaultValue });
    }
    s2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, { default: o(() => [p(n(x), { class: "radio-button", value: n(ae).CONSTANT }, { default: o(() => l3[1] || (l3[1] = [I("常量", -1)])), _: 1, __: [1] }, 8, ["value"]), p(n(x), { class: "radio-button", value: n(ae).VARIABLE }, { default: o(() => l3[2] || (l3[2] = [I("变量", -1)])), _: 1, __: [2] }, 8, ["value"]), p(n(x), { class: "radio-button", value: n(ae).EVENT }, { default: o(() => l3[3] || (l3[3] = [I("事件", -1)])), _: 1, __: [3] }, 8, ["value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])) : C("", true)]), _: 2 }, 1024)]), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ae).CONSTANT ? (t(), c("div", Re, [p(n(A), { value: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, "onUpdate:value": (a2) => n(s2).getCurConfigComponent.chart.data.params[e3.name].value = a2, placeholder: "请输入常量参数", onChange: (a2) => n(h2)(a2, e3) }, null, 8, ["value", "onUpdate:value", "onChange"])])) : C("", true), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ae).VARIABLE ? (t(), c("div", be, [p(de, { "filter-self": true, variable: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = H(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = e4, 1 === e4.paramType ? g2(d2(e4, a3)) : g2({ [a3.name]: e4.defaultValue }), s2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["variable", "onOk"])])) : C("", true), n(s2).getCurConfigComponent.chart.data.params && n(s2).getCurConfigComponent.chart.data.params[e3.name] && n(s2).getCurConfigComponent.chart.data.params[e3.name].type === n(ae).EVENT ? (t(), c("div", De, [p(ue, { "filter-self": true, events: n(s2).getCurConfigComponent.chart.data.params[e3.name].value, onOk: (a2) => function(e4, a3) {
    const t2 = e4.event, n2 = H(s2.getCurConfigComponent.chart.data.params);
    let o2 = false;
    n2[a3.name].value || (n2[a3.name].value = [], o2 = true);
    const i4 = n2[a3.name].value.findIndex((e5) => e5.id === t2.id && e5.event === t2.event);
    -1 === i4 ? (e4.modifyIndex >= 0 ? n2[a3.name].value.splice(e4.modifyIndex, 1, t2) : n2[a3.name].value.push(t2), o2 = true) : n2[a3.name].value.param !== t2.param && (n2[a3.name].value.splice(i4, 1, t2), o2 = true), o2 && (g2(d2(e4.event, a3)), s2.getCurConfigComponent.chart.data.params = n2);
  }(a2, e3), onDelete: (a2) => function(e4, a3) {
    const t2 = H(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value.splice(e4, 1), t2[a3.name].value?.length > 0 ? g2(d2(t2[a3.name].value[0], a3)) : g2({ [a3.name]: void 0 }), s2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3), onEventLose: (a2) => function(e4, a3) {
    const t2 = H(s2.getCurConfigComponent.chart.data.params);
    t2[a3.name].value = t2[a3.name].value.filter((a4) => a4.id !== e4), t2[a3.name].value?.length > 0 ? g2(d2(t2[a3.name].value[0], a3)) : g2({ [a3.name]: void 0 }), s2.getCurConfigComponent.chart.data.params = t2;
  }(a2, e3) }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])])) : C("", true)], 2))), 128));
} }), [["__scopeId", "data-v-76f8c848"]]), Te = { class: "title" }, xe = { class: "title" }, Ae = { class: "title" }, Ve = { class: "title" }, Me = { key: 0 }, Oe = { class: "title" }, Se = { class: "data-header" }, we = { class: "data-set" }, Le = { class: "target-data" }, Ue = e({ __name: "DataConfig", props: { selectData: { type: Object } }, emits: ["refreshData", "dataTypeChange"], setup(e2, { emit: l2 }) {
  const r2 = l2, g2 = Q(), v2 = [{ label: "静态数据", value: 0 }, { label: "动态数据", value: 1 }], { prefixCls: h2 } = L("data-config"), y2 = d([]), k2 = d([]), N2 = u({ open: false, interval: 5 }), b2 = u({ open: false, events: [] });
  function D2(e3) {
    g2.getCurConfigComponent.chart.data.id = e3.id, delete g2.getCurConfigComponent.chart?.isResource, g2.getCurConfigComponent.chart.data.name = e3.name;
  }
  function x2() {
    const e3 = g2.getCurConfigComponent?.chart?.isResource && g2.getCurConfigComponent?.chart.data.id ? `${g2.getId},${g2.getCurConfigComponent?.chart.data.id}` : g2.getCurConfigComponent?.chart.data.id;
    if (e3) {
      const a2 = [], t2 = g2.getCurConfigComponent?.chart?.isResource ? ne : oe;
      a2.push(t2(e3).then((e4) => {
        y2.value = e4, function(e5) {
          const a3 = {};
          e5.forEach((e6) => {
            e6.colName && (a3[e6.colName] = { colName: e6.colName, rename: e6.rename, dataType: e6.dataType });
          }), g2.getCurConfigComponent.chart.data.headers = a3;
        }(e4), function(e5) {
          if (!g2.getCurConfigComponent.chart.data.fields) return void (g2.getCurConfigComponent.chart.data.fields = {});
          const a3 = Object.keys(g2.getCurConfigComponent.chart.data.fields);
          for (const t3 of a3) {
            const a4 = g2.getCurConfigComponent.chart.data.fields[t3];
            for (let t4 = 0; t4 < a4.length; t4++) {
              const n2 = a4[t4], o2 = e5.find((e6) => e6.colName === n2.colName);
              o2 ? (n2.rename = o2.rename, n2.dataType = o2.dataType) : a4.splice(t4--, 1);
            }
          }
        }(e4);
      }).catch(() => {
        y2.value = [];
      }), async function() {
        const e4 = await (a3 = { apiId: g2.getCurConfigComponent?.chart.data.id, pageNum: 1, pageSize: 1e4 }, se.get({ url: "/nocode/apiParams", params: a3 }));
        var a3;
        e4.total > 0 ? (k2.value = e4.list, function(e5) {
          const a4 = () => {
            const a5 = {}, t4 = {};
            e5.forEach((e6) => {
              a5[e6.name] = { type: ae.CONSTANT, value: e6.defaultValue }, e6.defaultValue && (t4[e6.name] = e6.defaultValue);
            }), g2.getCurConfigComponent.chart.data.params = a5, g2.getCurConfigComponent.chart.data.paramsValue = t4;
          };
          if (!g2.getCurConfigComponent.chart.data?.params) return void a4();
          let t3 = false;
          for (const a5 of e5) if (!g2.getCurConfigComponent.chart.data.params[a5.name]) {
            t3 = true;
            break;
          }
          for (const a5 of Object.keys(g2.getCurConfigComponent.chart.data.params)) if (!e5.some((e6) => e6.name === a5)) {
            t3 = true;
            break;
          }
          t3 && a4();
        }(e4.list)) : (k2.value = [], g2.getCurConfigComponent.chart.data.params = void 0);
      }()), Promise.all(a2).then(() => {
        r2("refreshData");
      });
    } else y2.value = [], k2.value = [], g2.getCurConfigComponent.chart.data.fields = {}, r2("refreshData");
  }
  function A2(e3) {
    if (g2.getCurConfigComponent.chart.data?.headers) {
      const a2 = g2.getCurConfigComponent.chart.data.headers[e3.colName];
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
  return R(() => {
    Y.on(Z.DATA_RENAME, A2), void 0 !== g2.getCurConfigComponent.chart.data?.autoRefresh && (N2.open = g2.getCurConfigComponent.chart.data?.autoRefresh.open, N2.interval = g2.getCurConfigComponent.chart.data?.autoRefresh.interval), void 0 !== g2.getCurConfigComponent.chart.data?.eventRefresh && (b2.open = g2.getCurConfigComponent.chart.data?.eventRefresh.open, b2.events = g2.getCurConfigComponent.chart.data?.eventRefresh.events);
  }), s(N2, (e3) => {
    e3 && (g2.getCurConfigComponent.chart.data.autoRefresh = { open: e3.open, interval: e3.interval });
  }), s(b2, (e3) => {
    e3 && (g2.getCurConfigComponent.chart.data.eventRefresh = { open: e3.open, events: e3.events });
  }), s(() => g2.getCurConfigComponent?.chart.data.type, (e3) => {
    if (0 === e3) {
      const e4 = te[g2.getCurConfigComponent?.chart.type];
      return void (g2.getCurConfigComponent.chart.data.headers = e4.defaultHeaders && e4.defaultHeaders(g2.getCurConfigComponent.chart));
    }
    x2();
  }, { immediate: true }), s(() => g2.getCurConfigComponent?.chart.data.id, () => {
    0 !== g2.getCurConfigComponent?.chart.data.type && x2();
  }), (l3, s2) => (t(), a(n(ce), null, { default: o(() => [f("div", { class: m(n(h2)) }, [f("div", Te, [s2[7] || (s2[7] = I(" 数据类型 ", -1)), p(n(T), { value: n(g2).getCurConfigComponent.chart.data.type, "onUpdate:value": s2[0] || (s2[0] = (e3) => n(g2).getCurConfigComponent.chart.data.type = e3), options: v2, "option-type": "button", "button-style": "solid", size: "small", onChange: s2[1] || (s2[1] = () => {
    r2("dataTypeChange", n(g2).getCurConfigComponent.chart.data.type);
  }) }, null, 8, ["value"])]), p(n(V), { style: { margin: "0" } }), 0 === n(g2).getCurConfigComponent.chart.data.type ? i(l3.$slots, "static-data", { key: 0 }, void 0, true) : (t(), c(_, { key: 1 }, [f("div", xe, [p(n(E), { title: "点击右侧输入框切换数据源", placement: "left" }, { default: o(() => s2[8] || (s2[8] = [I(" 数据来源", -1)])), _: 1, __: [8] }), p(ve, { "select-data": e2.selectData, "data-id": n(g2).getCurConfigComponent.chart.data.id, "data-name": n(g2).getCurConfigComponent.chart.data.name, "is-resource": n(g2).getCurConfigComponent.chart.isResource, "screen-id": n(g2).getId, onDataChange: D2, onDataRefresh: x2 }, { default: o(() => [i(l3.$slots, "data-select", {}, void 0, true)]), _: 3 }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])]), f("div", Ae, [p(n(E), { title: "接口允许返回数据的最大条数", placement: "left" }, { default: o(() => s2[9] || (s2[9] = [I(" 数据限制", -1)])), _: 1, __: [9] }), p(n(ie), { value: n(g2).getCurConfigComponent.chart.data.limit, "onUpdate:value": s2[2] || (s2[2] = (e3) => n(g2).getCurConfigComponent.chart.data.limit = e3), max: n(g2).getCurConfigComponent.chart.data.maxLimit <= 0 ? 1 / 0 : n(g2).getCurConfigComponent.chart.data.maxLimit, min: 1, suffix: "条" }, null, 8, ["value", "max"])]), p(le, { title: "刷新设置" }, { default: o(() => [f("div", Ve, [p(n(E), { title: "数据按照刷新间隔时间更新数据（编辑环境不生效）", placement: "left" }, { default: o(() => [p(n(M), { checked: N2.open, "onUpdate:checked": s2[3] || (s2[3] = (e3) => N2.open = e3) }, { default: o(() => s2[10] || (s2[10] = [I(" 自动刷新", -1)])), _: 1, __: [10] }, 8, ["checked"])]), _: 1 }), N2.open ? (t(), c("div", Me, [p(n(O), { style: { margin: "0" }, "tip-formatter": (e3) => `刷新间隔 ${e3}（分钟）`, value: N2.interval, "onUpdate:value": s2[4] || (s2[4] = (e3) => N2.interval = e3), min: 0.5, max: 60, step: 0.5 }, null, 8, ["tip-formatter", "value"])])) : C("", true)]), f("div", Oe, [p(n(E), { title: "通过其他组件事件触发数据更新", placement: "left" }, { default: o(() => [p(n(M), { checked: b2.open, "onUpdate:checked": s2[5] || (s2[5] = (e3) => b2.open = e3) }, { default: o(() => s2[11] || (s2[11] = [I(" 事件刷新", -1)])), _: 1, __: [11] }, 8, ["checked"])]), _: 1 }), b2.open ? (t(), a(ue, { key: 0, "filter-self": true, "hide-param": true, events: b2.events, onOk: S2, onDelete: w2 }, null, 8, ["events"])) : C("", true)])]), _: 1 }), k2.value && k2.value.length > 0 ? (t(), a(le, { key: 0, title: "参数设置" }, { default: o(() => [p(Ee, { params: k2.value, onParamChange: s2[6] || (s2[6] = () => {
    r2("refreshData");
  }) }, null, 8, ["params"])]), _: 1 })) : C("", true), y2.value && y2.value.length > 0 ? (t(), a(le, { key: 1, title: "数据设置", "allow-collapse": false }, { default: o(() => [f("div", Se, [s2[12] || (s2[12] = f("div", null, "源数据", -1)), p(n(U), { icon: "ant-design:double-right-outlined" }), s2[13] || (s2[13] = f("div", null, "目标数据", -1))]), f("div", we, [p(_e, { "field-list": y2.value }, null, 8, ["field-list"]), s2[14] || (s2[14] = f("div", { class: "divide-line" }, null, -1)), f("div", Le, [i(l3.$slots, "target-data", {}, void 0, true)])])]), _: 3 })) : C("", true)], 64)), i(l3.$slots, "default", {}, void 0, true)], 2)]), _: 3 }));
} }), $e = K(Ue, [["__scopeId", "data-v-bf4c43d4"]]), je = ["onMouseenter"], Pe = { class: "title" }, Be = e({ __name: "DragInData", props: { fields: { type: Array, default: () => [] }, maxCount: { type: Number, default: 9999 }, height: { type: Number, default: 0 } }, emits: ["dataChange"], setup(e2, { emit: i2 }) {
  l((e3) => ({ "58b0ea90": I2.value }));
  const u2 = e2, h2 = i2, { prefixCls: y2 } = L("drag-in-data"), _2 = d(u2.fields), k2 = d(-1), { token: N2 } = D.useToken(), I2 = r(() => N2.value.colorInfoBg);
  s(() => u2.fields, () => {
    _2.value = u2.fields;
  });
  const E2 = (e3) => {
    const a2 = e3.dataTransfer?.getData(ee);
    if (!a2) return;
    const t2 = JSON.parse(a2);
    _2.value.some((e4) => e4.colName === t2.colName && e4.rename === t2.rename) || (_2.value.length >= u2.maxCount && _2.value.shift(), _2.value.push(J(t2, ["colName", "rename", "dataType"])), h2("dataChange", _2.value));
  };
  function T2() {
    k2.value = -1;
  }
  function x2(e3) {
    const a2 = _2.value.findIndex((a3) => a3.colName === e3.colName);
    -1 !== a2 && (_2.value[a2].rename = e3.rename, h2("dataChange", _2.value));
  }
  function A2() {
    h2("dataChange", _2.value);
  }
  return R(() => {
    Y.on(Z.DATA_RENAME, x2);
  }), b(() => {
    Y.off(Z.DATA_RENAME, x2);
  }), (i3, l2) => (t(), c("div", { class: m(n(y2)), style: g(e2.height > 0 ? { height: `${e2.height}px` } : {}), onDrop: E2 }, [0 === _2.value.length ? (t(), a(n(S), { key: 0, class: "empty", description: "拖动数据到此处", image: n(S).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])) : (t(), a(n(ce), { key: 1 }, { default: o(() => [p(n(me), { "item-key": "id", modelValue: _2.value, "onUpdate:modelValue": l2[0] || (l2[0] = (e3) => _2.value = e3), animation: "300", "ghost-class": "ghost", class: "drag-data", onChange: A2 }, { item: o(({ index: e3, element: o2 }) => [f("div", { class: "field-block", onMouseenter: (a2) => function(e4) {
    k2.value = e4;
  }(e3), onMouseleave: T2 }, [p(n(U), { class: "icon", icon: n(W)(o2.dataType) }, null, 8, ["icon"]), f("div", Pe, v(o2.rename ?? o2.colName), 1), k2.value === e3 ? (t(), a(n(U), { key: 0, class: "icon", icon: "ant-design:delete-outlined", onClick: (a2) => function(e4) {
    _2.value.splice(e4, 1), h2("dataChange", _2.value);
  }(e3) }, null, 8, ["onClick"])) : C("", true)], 40, je)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))], 38));
} }), ze = K(Be, [["__scopeId", "data-v-a508a4de"]]);
export {
  $e as D,
  ze as a
};
