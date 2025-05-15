import { defineComponent as e, ref as t, watch as n, createElementBlock as a, openBlock as o, normalizeClass as l, unref as i, Fragment as u, renderList as s, createVNode as c, createElementVNode as r, toDisplayString as v, onMounted as p, withCtx as d, reactive as m, createBlock as C, createSlots as g, createCommentVNode as h, withModifiers as f, useCssVars as _, computed as k, createTextVNode as y, resolveComponent as w } from "vue";
import { Switch as b, InputGroup as j, TreeSelect as x, List as I, Dropdown as S, Input as U, Menu as E, theme as H, RadioGroup as T, RadioButton as O, Button as A, Select as M, Empty as z } from "ant-design-vue";
import { ScrollContainer as P } from "@mfish/core/components/Container";
import { useDesign as R } from "@mfish/core/hooks";
import { C as L, u as N, b as $, g as B, _ as D, c as J, d as K, P as V, e as F, f as q, h as W, i as G, j as Q } from "./index.js";
import { Icon as X } from "@mfish/core/components/Icon";
import Y from "@mfish/core/components/InputSearch";
import { imageUrl as Z, getLocalFileUrl as ee } from "@mfish/core/utils/file/FileUtils";
import { usePagination as te } from "@mfish/core/utils/PageUtils";
import "@vueuse/core";
import { cloneDeep as ne } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { V as ae } from "./VariableSelect.js";
import { u as oe, E as le } from "./UseEventSelect.js";
const ie = ["onClick"], ue = D(e({ __name: "EventListen", setup(e2) {
  const { prefixCls: p2 } = R("event-listen"), d2 = t({ [L.CHART_BEFORE_MOUNT]: false, [L.CHART_MOUNTED]: false, [L.CHART_CLICK]: false, [L.CHART_DBLCLICK]: false, [L.CHART_MOUSE_ENTER]: false, [L.CHART_MOUSE_LEAVE]: false }), m2 = N();
  function C2() {
    m2.getCurConfigComponent.chart.events.emits || (m2.getCurConfigComponent.chart.events = { emits: [] }), m2.getCurConfigComponent.chart.events.emits = Object.keys(i(d2)).filter((e3) => d2.value[e3]).map((e3) => e3);
  }
  return n(() => m2.getCurConfigComponent.chart.id, (e3) => {
    var _a, _b;
    (_a = $[m2.getCurConfigComponent.chart.type].customEvents) == null ? void 0 : _a.forEach((e4) => {
      d2.value[e4.value] = false;
    }), e3 ? ((_b = m2.getCurConfigComponent.chart.events) == null ? void 0 : _b.emits) && m2.getCurConfigComponent.chart.events.emits.forEach((e4) => {
      d2.value[e4] = true;
    }) : Object.keys(d2.value).forEach((e4) => {
      d2.value[e4] = false;
    });
  }, { immediate: true }), (e3, t2) => (o(), a("div", { class: l(i(p2)) }, [(o(true), a(u, null, s(Object.keys(d2.value), (e4) => {
    var _a;
    return o(), a("div", { class: "check-item", key: e4 }, [c(i(b), { size: "small", checked: d2.value[e4], "onUpdate:checked": (t3) => d2.value[e4] = t3, "checked-children": "开", "un-checked-children": "关", onChange: C2 }, null, 8, ["checked", "onUpdate:checked"]), r("div", { class: l(d2.value[e4] ? "checked" : ""), onClick: (t3) => function(e5) {
      d2.value[e5] = !d2.value[e5], C2();
    }(e4) }, v(i(B)(e4, (_a = i(m2).getCurConfigComponent) == null ? void 0 : _a.chart.type)), 11, ie)]);
  }), 128))], 2));
} }), [["__scopeId", "data-v-fc1a26b9"]]), se = { target: "_blank", onClick: () => {
} }, ce = ["src"], re = D(e({ __name: "PageList", emits: ["selectScreen"], setup(e2, { emit: n2 }) {
  const u2 = n2, s2 = t(), m2 = t(), C2 = t(), { prefixCls: g2 } = R("page-list"), h2 = t([]), { paginationProp: f2, getPageNum: _2, setCurrentPage: k2, getPageSize: y2, setTotal: w2 } = te(b2, { showSizeChanger: false, showQuickJumper: false });
  function b2(e3) {
    e3 && k2(e3), K({ folderId: s2.value, name: C2.value, pageNum: e3 ?? _2(), pageSize: y2() }).then((e4) => {
      h2.value = e4.list, w2(e4.total);
    });
  }
  return p(() => {
    J().then((e3) => {
      m2.value = [{ name: "我的大屏", children: e3, id: "" }];
    }), b2(1);
  }), (e3, t2) => (o(), a("div", { class: l(i(g2)) }, [c(i(j), { compact: "" }, { default: d(() => [c(i(x), { value: s2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => s2.value = e4), "tree-data": m2.value, style: { width: "35%", "border-right": "0" }, "allow-clear": "", placeholder: "选择大屏目录", "dropdown-style": { minWidth: "300px", maxHeight: "400px", overflow: "auto" }, "field-names": { children: "children", label: "name", value: "id" }, "tree-node-filter-prop": "name", "show-search": "", onChange: t2[1] || (t2[1] = (e4) => b2(1)) }, null, 8, ["value", "tree-data"]), c(i(Y), { visible: true, value: C2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => C2.value = e4), style: { width: "65%", height: "32px" }, "allow-clear": "", placeholder: "输入大屏名称", onSearch: t2[3] || (t2[3] = (e4) => b2(1)) }, null, 8, ["value"])]), _: 1 }), c(i(P), { class: "mt-2", style: { height: "45vh" } }, { default: d(() => [c(i(I), { "item-layout": "horizontal", "data-source": h2.value, pagination: i(f2) }, { renderItem: d(({ item: e4 }) => [c(i(I).Item, { class: "screen_item", onClick: (t3) => function(e5) {
    u2("selectScreen", e5);
  }(e4) }, { default: d(() => [c(i(I).Item.Meta, { description: e4.remark }, { title: d(() => [r("a", se, v(e4.name), 1)]), avatar: d(() => [r("img", { alt: "screen", src: i(Z)(i(ee)(e4.thumbnail)), class: "screen_img" }, null, 8, ce)]), _: 2 }, 1032, ["description"])]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["data-source", "pagination"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-efbe8537"]]), ve = ["src"], pe = D(e({ __name: "PageSelect", props: { page: { type: Object } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const u2 = e2, s2 = a2, { prefixCls: v2 } = R("page-select"), p2 = t(false), _2 = N(), k2 = t(false), y2 = m({ name: void 0, value: void 0, img: void 0, width: void 0, height: void 0 });
  n(() => {
    var _a;
    return (_a = _2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c;
    p2.value = false, e3 && (y2.value = (_a = u2.page) == null ? void 0 : _a.value, y2.name = (_b = u2.page) == null ? void 0 : _b.name, y2.img = (_c = u2.page) == null ? void 0 : _c.img);
  }, { immediate: true });
  const w2 = (e3) => {
    p2.value = e3;
  };
  function b2() {
    y2.value = void 0, y2.name = void 0, y2.img = void 0, y2.width = void 0, y2.height = void 0, s2("ok", y2);
  }
  function j2(e3) {
    if (p2.value = false, y2.value = (e3 == null ? void 0 : e3.id) ?? void 0, y2.name = (e3 == null ? void 0 : e3.name) ?? void 0, y2.img = (e3 == null ? void 0 : e3.thumbnail) ?? void 0, e3.canvasConfig) {
      const t2 = JSON.parse(e3.canvasConfig);
      y2.width = t2 == null ? void 0 : t2.width, y2.height = t2 == null ? void 0 : t2.height;
    }
    s2("ok", y2);
  }
  return (e3, t2) => (o(), C(i(S), { trigger: ["click"], open: p2.value, onOpenChange: w2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "400px" } }, { overlay: d(() => [c(i(E), null, { default: d(() => [c(i(E).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [c(re, { onSelectScreen: j2 })]), _: 1 })]), _: 1 })]), default: d(() => [r("div", { class: l(i(v2)), onMouseenter: t2[2] || (t2[2] = (e4) => k2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => k2.value = false) }, [c(i(U), { class: l(`${i(v2)}-drop-input`), placeholder: "请选择页面", value: y2.name, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.name = e4), onChange: t2[1] || (t2[1] = (e4) => p2.value = true) }, g({ suffix: d(() => [y2.value && k2.value ? (o(), C(i(X), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(b2, ["stop"]) })) : h("", true), c(i(X), { class: "drop-icon", size: 12, icon: p2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [y2.img ? { name: "prefix", fn: d(() => [r("img", { alt: "screen", src: i(Z)(i(ee)(y2.img)), class: "screen_img" }, null, 8, ve)]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-eb4ee99b"]]), de = ["onMouseenter"], me = { class: "item" }, Ce = { style: { display: "flex", "justify-content": "space-between" } }, ge = { class: "error" }, he = { class: "item" }, fe = { style: { width: "100%" } }, _e = e({ __name: "JumpParams", setup(e2) {
  _((e3) => ({ fe131ba2: w2.value }));
  const { prefixCls: p2 } = R("jump-params"), m2 = N(), g2 = t([]), { token: f2 } = H.useToken(), w2 = k(() => f2.value.colorBorder), b2 = t(-1);
  function j2() {
    g2.value.push({ name: "", value: "", type: 0 });
  }
  return n(() => m2.getCurConfigComponent, (e3) => {
    var _a;
    e3 && (g2.value = ne((_a = e3.chart.jump) == null ? void 0 : _a.params) || []);
  }, { immediate: true }), n(g2, (e3) => {
    m2.getCurConfigComponent.chart.jump.params = e3;
  }, { deep: true }), (e3, t2) => (o(), a("div", { class: l(i(p2)) }, [(o(true), a(u, null, s(g2.value, (e4, n2) => (o(), a("div", { class: "items", key: n2, onMouseenter: (e5) => b2.value = n2, onMouseleave: t2[0] || (t2[0] = (e5) => b2.value = -1) }, [r("div", me, [t2[1] || (t2[1] = r("span", { class: "title" }, "参数名", -1)), c(i(U), { placeholder: "输入参数名", value: e4.name, "onUpdate:value": (t3) => e4.name = t3, maxlength: 20, status: e4.errorInfo ? "error" : "", onChange: (t3) => function(e5, t4) {
    if (!/^[\u4E00-\u9FA5\w]{1,20}$/.test(e5.name)) return void (e5.errorInfo = "只允许中文、字符、数字、下划线");
    g2.value.some((n3, a2) => n3.name === e5.name && a2 !== t4) ? e5.errorInfo = "参数名不能重复" : e5 == null ? true : delete e5.errorInfo;
  }(e4, n2) }, null, 8, ["value", "onUpdate:value", "status", "onChange"])]), r("div", null, [r("div", Ce, [r("div", ge, v(e4.errorInfo ? e4.errorInfo : ""), 1), c(i(T), { style: { right: "10px" }, value: e4.type, "onUpdate:value": (t3) => e4.type = t3, size: "small", onChange: (t3) => function(e5) {
    e5.value = "";
  }(e4) }, { default: d(() => [c(i(O), { class: l(`${i(p2)}-radio-button`), value: i(V).CONSTANT }, { default: d(() => t2[2] || (t2[2] = [y("常量")])), _: 1, __: [2] }, 8, ["class", "value"]), c(i(O), { class: l(`${i(p2)}-radio-button`), value: i(V).VARIABLE }, { default: d(() => t2[3] || (t2[3] = [y("变量")])), _: 1, __: [3] }, 8, ["class", "value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])]), r("div", he, [t2[4] || (t2[4] = r("span", { class: "title" }, "参数值", -1)), r("div", fe, [0 === e4.type ? (o(), C(i(U), { key: 0, placeholder: "输入参数值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 20 }, null, 8, ["value", "onUpdate:value"])) : (o(), C(ae, { key: 1, variable: e4.value, onOk: (t3) => function(e5, t4) {
    t4.value = e5;
  }(t3, e4) }, null, 8, ["variable", "onOk"]))])])]), b2.value === n2 ? (o(), C(i(X), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => function(e6) {
    g2.value.splice(e6, 1);
  }(n2) }, null, 8, ["onClick"])) : h("", true)], 40, de))), 128)), r("div", { class: "add-button", onClick: j2 }, [c(i(X), { icon: "ant-design:plus-outlined" }), t2[5] || (t2[5] = y(" 添加跳转参数 "))])], 2));
} }), ke = D(_e, [["__scopeId", "data-v-f091fa8e"]]), ye = { class: "title" }, we = { class: "title" }, be = { key: 2, class: "title" }, je = e({ name: "PageJumpConfig", __name: "index", setup(e2) {
  const p2 = N(), { prefixCls: m2 } = R("page-jump-config"), g2 = [F.CurPage, F.NewTab, F.Dialog], f2 = t(), _2 = [q.System, q.External], k2 = t(), b2 = t(), j2 = t(), x2 = t(), I2 = t();
  function S2(e3) {
    var _a;
    if (p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, open: e3 }, e3) {
      let e4 = (_a = p2.getCurConfigComponent.chart.events) == null ? void 0 : _a.emits;
      e4 || (e4 = []);
      -1 === e4.indexOf(L.CHART_CLICK) && (e4.push(L.CHART_CLICK), p2.getCurConfigComponent.chart.events = { ...p2.getCurConfigComponent.chart.events, emits: e4 });
    }
  }
  function U2() {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, type: f2.value };
  }
  function E2() {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, pageType: k2.value }, k2.value === q.System ? H2(b2.value) : A2();
  }
  function H2(e3) {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, page: e3 }, x2.value = e3 == null ? void 0 : e3.width, I2.value = e3 == null ? void 0 : e3.height;
  }
  function A2() {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, page: { value: j2.value } };
  }
  function M2() {
    p2.getCurConfigComponent.chart.jump.page = { ...p2.getCurConfigComponent.chart.jump.page, width: x2.value };
  }
  function z2() {
    p2.getCurConfigComponent.chart.jump.page = { ...p2.getCurConfigComponent.chart.jump.page, height: I2.value };
  }
  return n(() => {
    var _a;
    return (_a = p2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
    e3 && (((_a = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _a.type) ? f2.value = (_b = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _b.type : (f2.value = F.CurPage, U2()), ((_c = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _c.pageType) ? k2.value = (_d = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _d.pageType : (k2.value = q.System, E2()), k2.value === q.System ? b2.value = (_e2 = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _e2.page : j2.value = (_g = (_f = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _f.page) == null ? void 0 : _g.value, x2.value = (_i = (_h = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _h.page) == null ? void 0 : _i.width, I2.value = (_k = (_j = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _j.page) == null ? void 0 : _k.height);
  }, { immediate: true }), (e3, t2) => {
    var _a;
    const n2 = w("AInput");
    return o(), a("div", { class: l(i(m2)) }, [c(W, { title: "页面跳转", "allow-check": true, tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果", "title-check": (_a = i(p2).getCurConfigComponent.chart.jump) == null ? void 0 : _a.open, onChecked: S2 }, { default: d(() => [r("div", ye, [t2[5] || (t2[5] = y(" 跳转方式 ")), c(i(T), { size: "small", value: f2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => f2.value = e4), onChange: U2 }, { default: d(() => [(o(), a(u, null, s(g2, (e4, t3) => c(i(O), { key: t3, value: e4 }, { default: d(() => [y(v(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), r("div", we, [t2[6] || (t2[6] = y(" 跳转页面 ")), c(i(T), { size: "small", value: k2.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => k2.value = e4), onChange: E2 }, { default: d(() => [(o(), a(u, null, s(_2, (e4, t3) => c(i(O), { key: t3, value: e4 }, { default: d(() => [y(v(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), k2.value === i(q).System ? (o(), C(pe, { key: 0, page: b2.value, onOk: H2 }, null, 8, ["page"])) : (o(), C(n2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: j2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => j2.value = e4), onChange: A2 }, null, 8, ["value"])), f2.value === i(F).Dialog ? (o(), a("div", be, [c(i(G), { prefix: "W", placeholder: "宽度", value: x2.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => x2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: M2 }, null, 8, ["value"]), c(i(G), { prefix: "H", placeholder: "高度", value: I2.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => I2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: z2 }, null, 8, ["value"])])) : h("", true), t2[7] || (t2[7] = r("div", { class: "title" }, " 跳转参数 ", -1)), c(ke)]), _: 1, __: [7] }, 8, ["title-check"])], 2);
  };
} }), xe = D(je, [["__scopeId", "data-v-2edc2d5b"]]), Ie = D(e({ __name: "EventSingleSelect", props: { event: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const u2 = e2, s2 = a2, { prefixCls: v2 } = R("event-single-select"), p2 = t(false), m2 = N(), g2 = t(), _2 = t([]), k2 = t(""), w2 = t(false), { getEventComponents: b2 } = oe(), j2 = () => {
    var _a;
    if ((_a = u2.event) == null ? void 0 : _a.id) {
      const e3 = Q(m2.getComponentList, u2.event.id);
      if (!e3) return s2("ok"), "";
      let t2;
      return e3.chart.data.headers && (t2 = e3.chart.data.headers[u2.event.param]), t2 ? `${e3.chart.name} / ${B(u2.event.event, e3.chart.type)} / ${t2.rename ?? t2.colName}` : `${e3.chart.name} / ${B(u2.event.event, e3.chart.type)}`;
    }
    return "";
  };
  function x2() {
    p2.value = false, k2.value = j2();
  }
  function I2() {
    s2("ok", ne(g2.value)), p2.value = false;
  }
  n(() => {
    var _a;
    return (_a = m2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    p2.value = false;
  }), n(() => u2.event, () => {
    k2.value = j2();
  }, { deep: true, immediate: true });
  const H2 = (e3) => {
    p2.value = e3, e3 ? _2.value = b2(u2.filterSelf) : k2.value = j2(), g2.value = ne(u2.event);
  };
  function T2(e3) {
    g2.value = e3;
  }
  function O2() {
    s2("ok", {});
  }
  return (e3, t2) => (o(), C(i(S), { trigger: ["click"], open: p2.value, onOpenChange: H2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "420px" } }, { overlay: d(() => [c(i(E), null, { default: d(() => [c(i(E).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [c(le, { value: g2.value, "component-list": _2.value, onSelectChange: T2 }, null, 8, ["value", "component-list"]), r("div", { class: l(`${i(v2)}-ok-button`) }, [c(i(A), { class: "mr-2", onClick: x2 }, { default: d(() => t2[4] || (t2[4] = [y("取消")])), _: 1, __: [4] }), c(i(A), { type: "primary", onClick: I2 }, { default: d(() => t2[5] || (t2[5] = [y("确定")])), _: 1, __: [5] })], 2)]), _: 1 })]), _: 1 })]), default: d(() => [r("div", { class: l(i(v2)), onMouseenter: t2[2] || (t2[2] = (e4) => w2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => w2.value = false) }, [c(i(U), { class: l(`${i(v2)}-drop-input`), placeholder: "请选择参数来源", value: k2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => k2.value = e4), onChange: t2[1] || (t2[1] = (e4) => p2.value = true) }, { suffix: d(() => [w2.value && k2.value ? (o(), C(i(X), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(O2, ["stop"]) })) : h("", true), c(i(X), { class: "drop-icon", size: 12, icon: p2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-2ae84dbc"]]), Se = ["onMouseenter"], Ue = { class: "title" }, Ee = { class: "title" }, He = e({ name: "ShowHideConfig", __name: "index", setup(e2) {
  _((e3) => ({ "5157f5be": m2.value }));
  const { prefixCls: n2 } = R("show-hide-config"), v2 = N(), { token: p2 } = H.useToken(), m2 = k(() => p2.value.colorBorder), g2 = t(-1), f2 = [{ value: "eq", label: "等于" }, { value: "ne", label: "不等于" }, { value: "gt", label: "大于" }, { value: "ge", label: "大于等于" }, { value: "lt", label: "小于" }, { value: "le", label: "小于等于" }];
  function b2(e3) {
    v2.getCurConfigComponent.chart.showHide = { ...v2.getCurConfigComponent.chart.showHide, open: e3 }, delete v2.getCurConfigComponent.chart.showHide.show;
  }
  function j2() {
    var _a;
    ((_a = v2.getCurConfigComponent.chart.showHide) == null ? void 0 : _a.conditions) || (v2.getCurConfigComponent.chart.showHide.conditions = []), v2.getCurConfigComponent.chart.showHide.conditions.push({ event: {}, condition: "eq", value: "" });
  }
  return (e3, t2) => {
    var _a;
    const p3 = w("AInput");
    return o(), a("div", { class: l(i(n2)) }, [c(W, { title: "条件显隐", "allow-check": true, tooltip: "组件开启条件显示隐藏功能。开启后当事件触发时满足下面设置条件时显示，否则隐藏。", "title-check": (_a = i(v2).getCurConfigComponent.chart.showHide) == null ? void 0 : _a.open, onChecked: b2 }, { default: d(() => {
      var _a2;
      return [(o(true), a(u, null, s((_a2 = i(v2).getCurConfigComponent.chart.showHide) == null ? void 0 : _a2.conditions, (e4, n3) => (o(), a("div", { class: "condition", key: n3, onMouseenter: (e5) => g2.value = n3, onMouseleave: t2[0] || (t2[0] = (e5) => g2.value = -1) }, [r("div", Ue, [t2[1] || (t2[1] = y(" 触发 ")), c(Ie, { "filter-self": true, event: e4.event, onOk: (e5) => function(e6, t3) {
        v2.getCurConfigComponent.chart.showHide.conditions[e6].event = t3;
      }(n3, e5) }, null, 8, ["event", "onOk"])]), r("div", Ee, [t2[2] || (t2[2] = y(" 条件 ")), c(i(M), { style: { flex: "1" }, placeholder: "选择比较条件", class: "select-com", value: e4.condition, "onUpdate:value": (t3) => e4.condition = t3, options: f2 }, null, 8, ["value", "onUpdate:value"]), t2[3] || (t2[3] = y(" 值 ")), c(p3, { style: { width: "120px" }, placeholder: "请输入值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 100 }, null, 8, ["value", "onUpdate:value"])]), g2.value === n3 ? (o(), C(i(X), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => function(e6) {
        var _a3;
        v2.getCurConfigComponent.chart.showHide.conditions.splice(e6, 1), (_a3 = v2.getCurConfigComponent.chart.showHide) == null ? true : delete _a3.show;
      }(n3) }, null, 8, ["onClick"])) : h("", true)], 40, Se))), 128)), r("div", { class: "add-button", onClick: j2 }, [c(i(X), { icon: "ant-design:plus-outlined" }), t2[4] || (t2[4] = y(" 添加显隐条件 "))])];
    }), _: 1 }, 8, ["title-check"])], 2);
  };
} }), Te = D(He, [["__scopeId", "data-v-50189189"]]), Oe = D(e({ name: "AdvanceConfig", __name: "index", setup(e2) {
  const { prefixCls: t2 } = R("advance-config");
  return (e3, n2) => (o(), C(i(P), null, { default: d(() => [r("div", { class: l(i(t2)) }, [c(W, { title: "事件开启" }, { default: d(() => [c(ue)]), _: 1 }), c(xe), c(Te)], 2), c(i(z), { description: "进阶配置开发中......", image: i(z).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])]), _: 1 }));
} }), [["__scopeId", "data-v-a3d1bc56"]]);
export {
  Oe as default
};
