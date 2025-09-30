import { defineComponent as e, ref as t, watch as n, createElementBlock as o, openBlock as a, normalizeClass as l, unref as u, Fragment as i, renderList as c, createVNode as r, createElementVNode as s, toDisplayString as p, resolveComponent as C, withCtx as v, createBlock as m, createCommentVNode as g, createTextVNode as d, withModifiers as f, useCssVars as h, computed as k } from "vue";
import { ScrollContainer as _ } from "@mfish/core/components/Container";
import { useDesign as y } from "@mfish/core/hooks";
import { C as j, u as w, b, g as x, _ as H, P as E, c as U, d as T, e as I, f as S } from "./index.js";
import { Switch as O, RadioGroup as A, RadioButton as R, Dropdown as M, Input as L, Menu as P, Button as $, theme as z, Select as N } from "ant-design-vue";
import { P as B, J as D } from "./JumpParams.js";
import "@vueuse/core";
import { Icon as K } from "@mfish/core/components/Icon";
import { cloneDeep as J } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { E as q } from "./EventSelectItems.js";
import { u as F } from "./UseEventSelect.js";
const V = ["onClick"], W = H(e({ __name: "EventListen", setup(e2) {
  const { prefixCls: C2 } = y("event-listen"), v2 = t({ [j.CHART_BEFORE_MOUNT]: false, [j.CHART_MOUNTED]: false, [j.CHART_CLICK]: false, [j.CHART_DBLCLICK]: false, [j.CHART_MOUSE_ENTER]: false, [j.CHART_MOUSE_LEAVE]: false }), m2 = w();
  function g2() {
    m2.getCurConfigComponent.chart.events.emits || (m2.getCurConfigComponent.chart.events = { emits: [] }), m2.getCurConfigComponent.chart.events.emits = Object.keys(u(v2)).filter((e3) => v2.value[e3]).map((e3) => e3);
  }
  return n(() => m2.getCurConfigComponent.chart.id, (e3) => {
    b[m2.getCurConfigComponent.chart.type].customEvents?.forEach((e4) => {
      v2.value[e4.value] = false;
    }), e3 ? m2.getCurConfigComponent.chart.events?.emits && m2.getCurConfigComponent.chart.events.emits.forEach((e4) => {
      v2.value[e4] = true;
    }) : Object.keys(v2.value).forEach((e4) => {
      v2.value[e4] = false;
    });
  }, { immediate: true }), (e3, t2) => (a(), o("div", { class: l(u(C2)) }, [(a(true), o(i, null, c(Object.keys(v2.value), (e4) => (a(), o("div", { class: "check-item", key: e4 }, [r(u(O), { size: "small", checked: v2.value[e4], "onUpdate:checked": (t3) => v2.value[e4] = t3, "checked-children": "开", "un-checked-children": "关", onChange: g2 }, null, 8, ["checked", "onUpdate:checked"]), s("div", { class: l(v2.value[e4] ? "checked" : ""), onClick: (t3) => (function(e5) {
    v2.value[e5] = !v2.value[e5], g2();
  })(e4) }, p(u(x)(e4, u(m2).getCurConfigComponent?.chart.type)), 11, V)]))), 128))], 2));
} }), [["__scopeId", "data-v-fc1a26b9"]]), G = { class: "title" }, Q = { class: "title" }, X = { key: 2, class: "title" }, Y = e({ name: "PageJumpConfig", __name: "index", setup(e2) {
  const f2 = w(), { prefixCls: h2 } = y("page-jump-config"), k2 = [E.CurPage, E.NewTab, E.Dialog], _2 = t(), b2 = [U.System, U.External], x2 = t(), H2 = t(), S2 = t(), O2 = t(), M2 = t();
  function L2(e3) {
    if (f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, open: e3 }, e3) {
      let e4 = f2.getCurConfigComponent.chart.events?.emits;
      e4 || (e4 = []);
      -1 === e4.indexOf(j.CHART_CLICK) && (e4.push(j.CHART_CLICK), f2.getCurConfigComponent.chart.events = { ...f2.getCurConfigComponent.chart.events, emits: e4 });
    }
  }
  function P2() {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, type: _2.value };
  }
  function $2() {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, pageType: x2.value }, x2.value === U.System ? z2(H2.value) : N2();
  }
  function z2(e3) {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, page: e3 }, O2.value = e3?.width, M2.value = e3?.height;
  }
  function N2() {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, page: { value: S2.value } };
  }
  function K2() {
    f2.getCurConfigComponent.chart.jump.page = { ...f2.getCurConfigComponent.chart.jump.page, width: O2.value };
  }
  function J2() {
    f2.getCurConfigComponent.chart.jump.page = { ...f2.getCurConfigComponent.chart.jump.page, height: M2.value };
  }
  function q2(e3) {
    f2.getCurConfigComponent.chart.jump.params = e3;
  }
  return n(() => f2.getCurConfigComponent?.chart.id, (e3) => {
    e3 && (f2.getCurConfigComponent.chart.jump?.type ? _2.value = f2.getCurConfigComponent.chart.jump?.type : (_2.value = E.CurPage, P2()), f2.getCurConfigComponent.chart.jump?.pageType ? x2.value = f2.getCurConfigComponent.chart.jump?.pageType : (x2.value = U.System, $2()), x2.value === U.System ? H2.value = f2.getCurConfigComponent.chart.jump?.page : S2.value = f2.getCurConfigComponent.chart.jump?.page?.value, O2.value = f2.getCurConfigComponent.chart.jump?.page?.width, M2.value = f2.getCurConfigComponent.chart.jump?.page?.height);
  }, { immediate: true }), (e3, t2) => {
    const n2 = C("AInput");
    return a(), o("div", { class: l(u(h2)) }, [r(T, { title: "页面跳转", "allow-check": true, tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果", "title-check": u(f2).getCurConfigComponent.chart.jump?.open, onChecked: L2 }, { default: v(() => [s("div", G, [t2[5] || (t2[5] = d(" 跳转方式 ", -1)), r(u(A), { size: "small", value: _2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => _2.value = e4), onChange: P2 }, { default: v(() => [(a(), o(i, null, c(k2, (e4, t3) => r(u(R), { key: t3, value: e4 }, { default: v(() => [d(p(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), s("div", Q, [t2[6] || (t2[6] = d(" 跳转页面 ", -1)), r(u(A), { size: "small", value: x2.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => x2.value = e4), onChange: $2 }, { default: v(() => [(a(), o(i, null, c(b2, (e4, t3) => r(u(R), { key: t3, value: e4 }, { default: v(() => [d(p(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), x2.value === u(U).System ? (a(), m(B, { key: 0, page: H2.value, onOk: z2 }, null, 8, ["page"])) : (a(), m(n2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: S2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => S2.value = e4), onChange: N2 }, null, 8, ["value"])), _2.value === u(E).Dialog ? (a(), o("div", X, [r(u(I), { prefix: "W", placeholder: "宽度", value: O2.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => O2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: K2 }, null, 8, ["value"]), r(u(I), { prefix: "H", placeholder: "高度", value: M2.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => M2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: J2 }, null, 8, ["value"])])) : g("", true), t2[7] || (t2[7] = s("div", { class: "title" }, " 跳转参数 ", -1)), r(D, { "params-value": u(f2).getCurConfigComponent.chart.jump?.params, onParamsChange: q2 }, null, 8, ["params-value"])]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), Z = H(Y, [["__scopeId", "data-v-78e6bd04"]]), ee = H(e({ __name: "EventSingleSelect", props: { event: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: o2 }) {
  const i2 = e2, c2 = o2, { prefixCls: p2 } = y("event-single-select"), C2 = t(false), h2 = w(), k2 = t(), _2 = t([]), j2 = t(""), b2 = t(false), { getEventComponents: H2 } = F(), E2 = () => {
    if (i2.event?.id) {
      const e3 = S(h2.getComponentList, i2.event.id);
      if (!e3) return c2("ok"), "";
      let t2;
      return e3.chart.data.headers && (t2 = e3.chart.data.headers[i2.event.param]), t2 ? `${e3.chart.name} / ${x(i2.event.event, e3.chart.type)} / ${t2.rename ?? t2.colName}` : `${e3.chart.name} / ${x(i2.event.event, e3.chart.type)}`;
    }
    return "";
  };
  function U2() {
    C2.value = false, j2.value = E2();
  }
  function T2() {
    c2("ok", J(k2.value)), C2.value = false;
  }
  n(() => h2.getCurConfigComponent?.chart.id, () => {
    C2.value = false;
  }), n(() => i2.event, () => {
    j2.value = E2();
  }, { deep: true, immediate: true });
  const I2 = (e3) => {
    C2.value = e3, e3 ? _2.value = H2(i2.filterSelf) : j2.value = E2(), k2.value = J(i2.event);
  };
  function O2(e3) {
    k2.value = e3;
  }
  function A2() {
    c2("ok", {});
  }
  return (e3, t2) => (a(), m(u(M), { trigger: ["click"], open: C2.value, onOpenChange: I2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "420px" } }, { overlay: v(() => [r(u(P), null, { default: v(() => [r(u(P).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: v(() => [r(q, { value: k2.value, "component-list": _2.value, onSelectChange: O2 }, null, 8, ["value", "component-list"]), s("div", { class: l(`${u(p2)}-ok-button`) }, [r(u($), { class: "mr-2", onClick: U2 }, { default: v(() => [...t2[4] || (t2[4] = [d("取消", -1)])]), _: 1 }), r(u($), { type: "primary", onClick: T2 }, { default: v(() => [...t2[5] || (t2[5] = [d("确定", -1)])]), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: v(() => [s("div", { class: l(u(p2)), onMouseenter: t2[2] || (t2[2] = (e4) => b2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => b2.value = false) }, [r(u(L), { class: l(`${u(p2)}-drop-input`), placeholder: "请选择参数来源", value: j2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => j2.value = e4), onChange: t2[1] || (t2[1] = (e4) => C2.value = true) }, { suffix: v(() => [b2.value && j2.value ? (a(), m(u(K), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(A2, ["stop"]) })) : g("", true), r(u(K), { class: "drop-icon", size: 12, icon: C2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-2ae84dbc"]]), te = ["onMouseenter"], ne = { class: "title" }, oe = { class: "title" }, ae = e({ name: "ShowHideConfig", __name: "index", setup(e2) {
  h((e3) => ({ v5157f5be: _2.value }));
  const { prefixCls: n2 } = y("show-hide-config"), p2 = w(), { token: f2 } = z.useToken(), _2 = k(() => f2.value.colorBorder), j2 = t(-1), b2 = [{ value: "eq", label: "等于" }, { value: "ne", label: "不等于" }, { value: "gt", label: "大于" }, { value: "ge", label: "大于等于" }, { value: "lt", label: "小于" }, { value: "le", label: "小于等于" }];
  function x2(e3) {
    p2.getCurConfigComponent.chart.showHide = { ...p2.getCurConfigComponent.chart.showHide, open: e3 }, delete p2.getCurConfigComponent.chart.showHide.show;
  }
  function H2() {
    p2.getCurConfigComponent.chart.showHide?.conditions || (p2.getCurConfigComponent.chart.showHide.conditions = []), p2.getCurConfigComponent.chart.showHide.conditions.push({ event: {}, condition: "eq", value: "" });
  }
  return (e3, t2) => {
    const f3 = C("AInput");
    return a(), o("div", { class: l(u(n2)) }, [r(T, { title: "条件显隐", "allow-check": true, tooltip: "组件开启条件显示隐藏功能。开启后当事件触发时满足下面设置条件时显示，否则隐藏。", "title-check": u(p2).getCurConfigComponent.chart.showHide?.open, onChecked: x2 }, { default: v(() => [(a(true), o(i, null, c(u(p2).getCurConfigComponent.chart.showHide?.conditions, (e4, n3) => (a(), o("div", { class: "condition", key: n3, onMouseenter: (e5) => j2.value = n3, onMouseleave: t2[0] || (t2[0] = (e5) => j2.value = -1) }, [s("div", ne, [t2[1] || (t2[1] = d(" 触发 ", -1)), r(ee, { "filter-self": true, event: e4.event, onOk: (e5) => (function(e6, t3) {
      p2.getCurConfigComponent.chart.showHide.conditions[e6].event = t3;
    })(n3, e5) }, null, 8, ["event", "onOk"])]), s("div", oe, [t2[2] || (t2[2] = d(" 条件 ", -1)), r(u(N), { style: { flex: "1" }, placeholder: "选择比较条件", class: "select-com", value: e4.condition, "onUpdate:value": (t3) => e4.condition = t3, options: b2 }, null, 8, ["value", "onUpdate:value"]), t2[3] || (t2[3] = d(" 值 ", -1)), r(f3, { style: { width: "120px" }, placeholder: "请输入值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 100 }, null, 8, ["value", "onUpdate:value"])]), j2.value === n3 ? (a(), m(u(K), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => (function(e6) {
      p2.getCurConfigComponent.chart.showHide.conditions.splice(e6, 1), delete p2.getCurConfigComponent.chart.showHide?.show;
    })(n3) }, null, 8, ["onClick"])) : g("", true)], 40, te))), 128)), s("div", { class: "add-button", onClick: H2 }, [r(u(K), { icon: "ant-design:plus-outlined" }), t2[4] || (t2[4] = d(" 添加显隐条件 ", -1))])]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), le = H(ae, [["__scopeId", "data-v-50189189"]]), ue = H(e({ name: "AdvanceConfig", __name: "index", setup(e2) {
  const { prefixCls: t2 } = y("advance-config");
  return (e3, n2) => (a(), m(u(_), null, { default: v(() => [s("div", { class: l(u(t2)) }, [r(T, { title: "事件开启" }, { default: v(() => [r(W)]), _: 1 }), r(Z), r(le)], 2)]), _: 1 }));
} }), [["__scopeId", "data-v-40dab166"]]);
export {
  ue as default
};
