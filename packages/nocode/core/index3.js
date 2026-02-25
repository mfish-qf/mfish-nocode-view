import { defineComponent as e, ref as t, watch as n, unref as o, openBlock as a, createElementBlock as l, normalizeClass as u, Fragment as i, renderList as c, createVNode as r, createElementVNode as p, toDisplayString as s, computed as C, resolveComponent as v, withCtx as m, createTextVNode as g, createBlock as d, createCommentVNode as h, withModifiers as f, useCssVars as k } from "vue";
import { ScrollContainer as _ } from "@mfish/core/components/Container";
import { useDesign as j } from "@mfish/core/hooks";
import { C as y, u as w, b as E, g as b, _ as x, P as H, c as U, d as T, e as I, f as S } from "./index.js";
import { Switch as O, Select as A, RadioGroup as R, RadioButton as M, Dropdown as L, Input as P, Menu as $, Button as z, theme as N } from "ant-design-vue";
import { P as B, J as D } from "./JumpParams.js";
import "@vueuse/core";
import { Icon as K } from "@mfish/core/components/Icon";
import { cloneDeep as J } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { E as q } from "./EventSelectItems.js";
import { u as F } from "./UseEventSelect.js";
const V = ["onClick"], W = x(e({ __name: "EventListen", setup(e2) {
  const { prefixCls: C2 } = j("event-listen"), v2 = t({ [y.CHART_BEFORE_MOUNT]: false, [y.CHART_MOUNTED]: false, [y.CHART_CLICK]: false, [y.CHART_DBLCLICK]: false, [y.CHART_MOUSE_ENTER]: false, [y.CHART_MOUSE_LEAVE]: false }), m2 = w();
  function g2() {
    m2.getCurConfigComponent.chart.events.emits || (m2.getCurConfigComponent.chart.events = { emits: [] }), m2.getCurConfigComponent.chart.events.emits = Object.keys(o(v2)).filter((e3) => v2.value[e3]).map((e3) => e3);
  }
  return n(() => m2.getCurConfigComponent.chart.id, (e3) => {
    E[m2.getCurConfigComponent.chart.type].customEvents?.forEach((e4) => {
      v2.value[e4.value] = false;
    }), e3 ? m2.getCurConfigComponent.chart.events?.emits && m2.getCurConfigComponent.chart.events.emits.forEach((e4) => {
      v2.value[e4] = true;
    }) : Object.keys(v2.value).forEach((e4) => {
      v2.value[e4] = false;
    });
  }, { immediate: true }), n(() => m2.getCurConfigComponent.chart?.jump?.open, (e3) => {
    e3 && (v2.value[y.CHART_CLICK] = true, g2());
  }), n(() => m2.getCurConfigComponent.chart?.jump?.jumpEvent, (e3) => {
    e3 && (v2.value[e3] = true, g2());
  }), (e3, t2) => (a(), l("div", { class: u(o(C2)) }, [(a(true), l(i, null, c(Object.keys(v2.value), (e4) => (a(), l("div", { class: "check-item", key: e4 }, [r(o(O), { size: "small", checked: v2.value[e4], "onUpdate:checked": (t3) => v2.value[e4] = t3, "checked-children": "开", "un-checked-children": "关", onChange: g2 }, null, 8, ["checked", "onUpdate:checked"]), p("div", { class: u(v2.value[e4] ? "checked" : ""), onClick: (t3) => (function(e5) {
    v2.value[e5] = !v2.value[e5], g2();
  })(e4) }, s(o(b)(e4, o(m2).getCurConfigComponent?.chart.type)), 11, V)]))), 128))], 2));
} }), [["__scopeId", "data-v-1c061c23"]]), G = { class: "title" }, Q = { class: "title" }, X = { class: "title" }, Y = { key: 2, class: "title" }, Z = e({ name: "PageJumpConfig", __name: "index", setup(e2) {
  const f2 = w(), { prefixCls: k2 } = j("page-jump-config"), _2 = [U.CurPage, U.NewTab, U.Dialog], x2 = t(), S2 = [H.System, H.External], O2 = t(), L2 = t(), P2 = t(), $2 = t(), z2 = t(), N2 = C(() => {
    const e3 = [];
    return Object.keys(y).forEach((t2) => {
      const n2 = t2;
      e3.push({ label: b(y[n2], f2.getCurConfigComponent?.chart.type), value: y[n2] });
    }), E[f2.getCurConfigComponent.chart.type]?.customEvents?.forEach((t2) => {
      e3.push({ label: t2.name, value: t2.value });
    }), e3;
  }), K2 = t(y.CHART_CLICK);
  function J2(e3) {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, open: e3 };
  }
  function q2() {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, type: x2.value };
  }
  function F2() {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, pageType: O2.value }, O2.value === H.System ? V2(L2.value) : W2();
  }
  function V2(e3) {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, page: e3 }, $2.value = e3?.width, z2.value = e3?.height;
  }
  function W2() {
    f2.getCurConfigComponent.chart.jump = { ...f2.getCurConfigComponent.chart.jump, page: { value: P2.value } };
  }
  function Z2() {
    f2.getCurConfigComponent.chart.jump.page = { ...f2.getCurConfigComponent.chart.jump.page, width: $2.value };
  }
  function ee2() {
    f2.getCurConfigComponent.chart.jump.page = { ...f2.getCurConfigComponent.chart.jump.page, height: z2.value };
  }
  function te2(e3) {
    f2.getCurConfigComponent.chart.jump.params = e3;
  }
  return n(K2, (e3) => {
    e3 && f2.getCurConfigComponent.chart.jump && (f2.getCurConfigComponent.chart.jump.jumpEvent = e3);
  }), n(() => f2.getCurConfigComponent?.chart.id, (e3) => {
    e3 && (f2.getCurConfigComponent.chart.jump?.type ? x2.value = f2.getCurConfigComponent.chart.jump?.type : (x2.value = U.CurPage, q2()), f2.getCurConfigComponent.chart.jump?.pageType ? O2.value = f2.getCurConfigComponent.chart.jump?.pageType : (O2.value = H.System, F2()), O2.value === H.System ? L2.value = f2.getCurConfigComponent.chart.jump?.page : P2.value = f2.getCurConfigComponent.chart.jump?.page?.value, f2.getCurConfigComponent.chart.jump?.jumpEvent && (K2.value = f2.getCurConfigComponent.chart.jump?.jumpEvent), $2.value = f2.getCurConfigComponent.chart.jump?.page?.width, z2.value = f2.getCurConfigComponent.chart.jump?.page?.height);
  }, { immediate: true }), (e3, t2) => {
    const n2 = v("AInput");
    return a(), l("div", { class: u(o(k2)) }, [r(T, { title: "页面跳转", "allow-check": true, tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果", "title-check": o(f2).getCurConfigComponent.chart.jump?.open, onChecked: J2 }, { default: m(() => [p("div", G, [t2[6] || (t2[6] = g(" 触发事件 ", -1)), r(o(A), { value: K2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => K2.value = e4), options: N2.value, "show-search": false, "filter-option": false, placeholder: "请选择" }, null, 8, ["value", "options"])]), p("div", Q, [t2[7] || (t2[7] = g(" 跳转方式 ", -1)), r(o(R), { size: "small", value: x2.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => x2.value = e4), onChange: q2 }, { default: m(() => [(a(), l(i, null, c(_2, (e4, t3) => r(o(M), { key: t3, value: e4 }, { default: m(() => [g(s(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), p("div", X, [t2[8] || (t2[8] = g(" 跳转页面 ", -1)), r(o(R), { size: "small", value: O2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => O2.value = e4), onChange: F2 }, { default: m(() => [(a(), l(i, null, c(S2, (e4, t3) => r(o(M), { key: t3, value: e4 }, { default: m(() => [g(s(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), O2.value === o(H).System ? (a(), d(B, { key: 0, page: L2.value, onOk: V2 }, null, 8, ["page"])) : (a(), d(n2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: P2.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => P2.value = e4), onChange: W2 }, null, 8, ["value"])), x2.value === o(U).Dialog ? (a(), l("div", Y, [r(o(I), { prefix: "W", placeholder: "宽度", value: $2.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => $2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: Z2 }, null, 8, ["value"]), r(o(I), { prefix: "H", placeholder: "高度", value: z2.value, "onUpdate:value": t2[5] || (t2[5] = (e4) => z2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: ee2 }, null, 8, ["value"])])) : h("", true), t2[9] || (t2[9] = p("div", { class: "title" }, " 跳转参数 ", -1)), r(D, { "params-value": o(f2).getCurConfigComponent.chart.jump?.params, onParamsChange: te2 }, null, 8, ["params-value"])]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), ee = x(Z, [["__scopeId", "data-v-e2da0587"]]), te = x(e({ __name: "EventSingleSelect", props: { event: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: l2 }) {
  const i2 = e2, c2 = l2, { prefixCls: s2 } = j("event-single-select"), C2 = t(false), v2 = w(), k2 = t(), _2 = t([]), y2 = t(""), E2 = t(false), { getEventComponents: x2 } = F(), H2 = () => {
    if (i2.event?.id) {
      const e3 = S(v2.getComponentList, i2.event.id);
      if (!e3) return c2("ok"), "";
      let t2;
      return e3.chart.data.headers && (t2 = e3.chart.data.headers[i2.event.param]), t2 ? `${e3.chart.name} / ${b(i2.event.event, e3.chart.type)} / ${t2.rename ?? t2.colName}` : `${e3.chart.name} / ${b(i2.event.event, e3.chart.type)}`;
    }
    return "";
  };
  function U2() {
    C2.value = false, y2.value = H2();
  }
  function T2() {
    c2("ok", J(k2.value)), C2.value = false;
  }
  n(() => v2.getCurConfigComponent?.chart.id, () => {
    C2.value = false;
  }), n(() => i2.event, () => {
    y2.value = H2();
  }, { deep: true, immediate: true });
  const I2 = (e3) => {
    C2.value = e3, e3 ? _2.value = x2(i2.filterSelf) : y2.value = H2(), k2.value = J(i2.event);
  };
  function O2(e3) {
    k2.value = e3;
  }
  function A2() {
    c2("ok", {});
  }
  return (e3, t2) => (a(), d(o(L), { trigger: ["click"], open: C2.value, onOpenChange: I2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "420px" } }, { overlay: m(() => [r(o($), null, { default: m(() => [r(o($).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: m(() => [r(q, { value: k2.value, "component-list": _2.value, onSelectChange: O2 }, null, 8, ["value", "component-list"]), p("div", { class: u(`${o(s2)}-ok-button`) }, [r(o(z), { class: "mr-2", onClick: U2 }, { default: m(() => [...t2[4] || (t2[4] = [g("取消", -1)])]), _: 1 }), r(o(z), { type: "primary", onClick: T2 }, { default: m(() => [...t2[5] || (t2[5] = [g("确定", -1)])]), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: m(() => [p("div", { class: u(o(s2)), onMouseenter: t2[2] || (t2[2] = (e4) => E2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => E2.value = false) }, [r(o(P), { class: u(`${o(s2)}-drop-input`), placeholder: "请选择参数来源", value: y2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.value = e4), onChange: t2[1] || (t2[1] = (e4) => C2.value = true) }, { suffix: m(() => [E2.value && y2.value ? (a(), d(o(K), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(A2, ["stop"]) })) : h("", true), r(o(K), { class: "drop-icon", size: 12, icon: C2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-2ae84dbc"]]), ne = ["onMouseenter"], oe = { class: "title" }, ae = { class: "title" }, le = e({ name: "ShowHideConfig", __name: "index", setup(e2) {
  k((e3) => ({ v5157f5be: _2.value }));
  const { prefixCls: n2 } = j("show-hide-config"), s2 = w(), { token: f2 } = N.useToken(), _2 = C(() => f2.value.colorBorder), y2 = t(-1), E2 = [{ value: "eq", label: "等于" }, { value: "ne", label: "不等于" }, { value: "gt", label: "大于" }, { value: "ge", label: "大于等于" }, { value: "lt", label: "小于" }, { value: "le", label: "小于等于" }];
  function b2(e3) {
    s2.getCurConfigComponent.chart.showHide = { ...s2.getCurConfigComponent.chart.showHide, open: e3 }, delete s2.getCurConfigComponent.chart.showHide.show;
  }
  function x2() {
    s2.getCurConfigComponent.chart.showHide?.conditions || (s2.getCurConfigComponent.chart.showHide.conditions = []), s2.getCurConfigComponent.chart.showHide.conditions.push({ event: {}, condition: "eq", value: "" });
  }
  return (e3, t2) => {
    const C2 = v("AInput");
    return a(), l("div", { class: u(o(n2)) }, [r(T, { title: "条件显隐", "allow-check": true, tooltip: "组件开启条件显示隐藏功能。开启后当事件触发时满足下面设置条件时显示，否则隐藏。", "title-check": o(s2).getCurConfigComponent.chart.showHide?.open, onChecked: b2 }, { default: m(() => [(a(true), l(i, null, c(o(s2).getCurConfigComponent.chart.showHide?.conditions, (e4, n3) => (a(), l("div", { class: "condition", key: n3, onMouseenter: (e5) => y2.value = n3, onMouseleave: t2[0] || (t2[0] = (e5) => y2.value = -1) }, [p("div", oe, [t2[1] || (t2[1] = g(" 触发 ", -1)), r(te, { "filter-self": true, event: e4.event, onOk: (e5) => (function(e6, t3) {
      s2.getCurConfigComponent.chart.showHide.conditions[e6].event = t3;
    })(n3, e5) }, null, 8, ["event", "onOk"])]), p("div", ae, [t2[2] || (t2[2] = g(" 条件 ", -1)), r(o(A), { style: { flex: "1" }, placeholder: "选择比较条件", class: "select-com", value: e4.condition, "onUpdate:value": (t3) => e4.condition = t3, options: E2 }, null, 8, ["value", "onUpdate:value"]), t2[3] || (t2[3] = g(" 值 ", -1)), r(C2, { style: { width: "120px" }, placeholder: "请输入值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 100 }, null, 8, ["value", "onUpdate:value"])]), y2.value === n3 ? (a(), d(o(K), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => (function(e6) {
      s2.getCurConfigComponent.chart.showHide.conditions.splice(e6, 1), delete s2.getCurConfigComponent.chart.showHide?.show;
    })(n3) }, null, 8, ["onClick"])) : h("", true)], 40, ne))), 128)), p("div", { class: "add-button", onClick: x2 }, [r(o(K), { icon: "ant-design:plus-outlined" }), t2[4] || (t2[4] = g(" 添加显隐条件 ", -1))])]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), ue = x(le, [["__scopeId", "data-v-50189189"]]), ie = x(e({ name: "AdvanceConfig", __name: "index", setup(e2) {
  const { prefixCls: t2 } = j("advance-config");
  return (e3, n2) => (a(), d(o(_), null, { default: m(() => [p("div", { class: u(o(t2)) }, [r(T, { title: "事件开启" }, { default: m(() => [r(W)]), _: 1 }), r(ee), r(ue)], 2)]), _: 1 }));
} }), [["__scopeId", "data-v-40dab166"]]);
export {
  ie as default
};
