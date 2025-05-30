import { defineComponent as e, ref as t, watch as n, createElementBlock as a, openBlock as o, normalizeClass as l, unref as i, Fragment as u, renderList as s, createVNode as c, createElementVNode as r, toDisplayString as v, onMounted as p, withCtx as d, reactive as m, createBlock as C, createSlots as g, createCommentVNode as h, withModifiers as f, useCssVars as _, computed as k, createTextVNode as y, resolveComponent as w } from "vue";
import { ScrollContainer as b } from "@mfish/core/components/Container";
import { useDesign as j } from "@mfish/core/hooks";
import { C as x, u as I, b as U, g as S, _ as H, c as E, d as O, P as T, e as A, f as M, h as z, i as P, j as R } from "./index.js";
import { Switch as $, InputGroup as L, TreeSelect as N, List as B, Dropdown as D, Input as J, Menu as K, theme as V, RadioGroup as F, RadioButton as q, Button as W, Select as Q } from "ant-design-vue";
import { Icon as G } from "@mfish/core/components/Icon";
import X from "@mfish/core/components/InputSearch";
import { imageUrl as Y, getLocalFileUrl as Z } from "@mfish/core/utils/file/FileUtils";
import { usePagination as ee } from "@mfish/core/utils/PageUtils";
import "@vueuse/core";
import { cloneDeep as te } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { V as ne } from "./VariableSelect.js";
import { u as ae, E as oe } from "./UseEventSelect.js";
const le = ["onClick"], ie = H(e({ __name: "EventListen", setup(e2) {
  const { prefixCls: p2 } = j("event-listen"), d2 = t({ [x.CHART_BEFORE_MOUNT]: false, [x.CHART_MOUNTED]: false, [x.CHART_CLICK]: false, [x.CHART_DBLCLICK]: false, [x.CHART_MOUSE_ENTER]: false, [x.CHART_MOUSE_LEAVE]: false }), m2 = I();
  function C2() {
    m2.getCurConfigComponent.chart.events.emits || (m2.getCurConfigComponent.chart.events = { emits: [] }), m2.getCurConfigComponent.chart.events.emits = Object.keys(i(d2)).filter((e3) => d2.value[e3]).map((e3) => e3);
  }
  return n(() => m2.getCurConfigComponent.chart.id, (e3) => {
    var _a, _b;
    (_a = U[m2.getCurConfigComponent.chart.type].customEvents) == null ? void 0 : _a.forEach((e4) => {
      d2.value[e4.value] = false;
    }), e3 ? ((_b = m2.getCurConfigComponent.chart.events) == null ? void 0 : _b.emits) && m2.getCurConfigComponent.chart.events.emits.forEach((e4) => {
      d2.value[e4] = true;
    }) : Object.keys(d2.value).forEach((e4) => {
      d2.value[e4] = false;
    });
  }, { immediate: true }), (e3, t2) => (o(), a("div", { class: l(i(p2)) }, [(o(true), a(u, null, s(Object.keys(d2.value), (e4) => {
    var _a;
    return o(), a("div", { class: "check-item", key: e4 }, [c(i($), { size: "small", checked: d2.value[e4], "onUpdate:checked": (t3) => d2.value[e4] = t3, "checked-children": "开", "un-checked-children": "关", onChange: C2 }, null, 8, ["checked", "onUpdate:checked"]), r("div", { class: l(d2.value[e4] ? "checked" : ""), onClick: (t3) => function(e5) {
      d2.value[e5] = !d2.value[e5], C2();
    }(e4) }, v(i(S)(e4, (_a = i(m2).getCurConfigComponent) == null ? void 0 : _a.chart.type)), 11, le)]);
  }), 128))], 2));
} }), [["__scopeId", "data-v-fc1a26b9"]]), ue = { target: "_blank", onClick: () => {
} }, se = ["src"], ce = H(e({ __name: "PageList", emits: ["selectScreen"], setup(e2, { emit: n2 }) {
  const u2 = n2, s2 = t(), m2 = t(), C2 = t(), { prefixCls: g2 } = j("page-list"), h2 = t([]), { paginationProp: f2, getPageNum: _2, setCurrentPage: k2, getPageSize: y2, setTotal: w2 } = ee(x2, { showSizeChanger: false, showQuickJumper: false });
  function x2(e3) {
    e3 && k2(e3), O({ folderId: s2.value, name: C2.value, pageNum: e3 ?? _2(), pageSize: y2() }).then((e4) => {
      h2.value = e4.list, w2(e4.total);
    });
  }
  return p(() => {
    E().then((e3) => {
      m2.value = [{ name: "我的大屏", children: e3, id: "" }];
    }), x2(1);
  }), (e3, t2) => (o(), a("div", { class: l(i(g2)) }, [c(i(L), { compact: "" }, { default: d(() => [c(i(N), { value: s2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => s2.value = e4), "tree-data": m2.value, style: { width: "35%", "border-right": "0" }, "allow-clear": "", placeholder: "选择大屏目录", "dropdown-style": { minWidth: "300px", maxHeight: "400px", overflow: "auto" }, "field-names": { children: "children", label: "name", value: "id" }, "tree-node-filter-prop": "name", "show-search": "", onChange: t2[1] || (t2[1] = (e4) => x2(1)) }, null, 8, ["value", "tree-data"]), c(i(X), { visible: true, value: C2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => C2.value = e4), style: { width: "65%", height: "32px" }, "allow-clear": "", placeholder: "输入大屏名称", onSearch: t2[3] || (t2[3] = (e4) => x2(1)) }, null, 8, ["value"])]), _: 1 }), c(i(b), { class: "mt-2", style: { height: "45vh" } }, { default: d(() => [c(i(B), { "item-layout": "horizontal", "data-source": h2.value, pagination: i(f2) }, { renderItem: d(({ item: e4 }) => [c(i(B).Item, { class: "screen_item", onClick: (t3) => function(e5) {
    u2("selectScreen", e5);
  }(e4) }, { default: d(() => [c(i(B).Item.Meta, { description: e4.remark }, { title: d(() => [r("a", ue, v(e4.name), 1)]), avatar: d(() => [r("img", { alt: "screen", src: i(Y)(i(Z)(e4.thumbnail)), class: "screen_img" }, null, 8, se)]), _: 2 }, 1032, ["description"])]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["data-source", "pagination"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-efbe8537"]]), re = ["src"], ve = H(e({ __name: "PageSelect", props: { page: { type: Object } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const u2 = e2, s2 = a2, { prefixCls: v2 } = j("page-select"), p2 = t(false), _2 = I(), k2 = t(false), y2 = m({ name: void 0, value: void 0, img: void 0, width: void 0, height: void 0 });
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
  function x2(e3) {
    if (p2.value = false, y2.value = (e3 == null ? void 0 : e3.id) ?? void 0, y2.name = (e3 == null ? void 0 : e3.name) ?? void 0, y2.img = (e3 == null ? void 0 : e3.thumbnail) ?? void 0, e3.canvasConfig) {
      const t2 = JSON.parse(e3.canvasConfig);
      y2.width = t2 == null ? void 0 : t2.width, y2.height = t2 == null ? void 0 : t2.height;
    }
    s2("ok", y2);
  }
  return (e3, t2) => (o(), C(i(D), { trigger: ["click"], open: p2.value, onOpenChange: w2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "400px" } }, { overlay: d(() => [c(i(K), null, { default: d(() => [c(i(K).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [c(ce, { onSelectScreen: x2 })]), _: 1 })]), _: 1 })]), default: d(() => [r("div", { class: l(i(v2)), onMouseenter: t2[2] || (t2[2] = (e4) => k2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => k2.value = false) }, [c(i(J), { class: l(`${i(v2)}-drop-input`), placeholder: "请选择页面", value: y2.name, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.name = e4), onChange: t2[1] || (t2[1] = (e4) => p2.value = true) }, g({ suffix: d(() => [y2.value && k2.value ? (o(), C(i(G), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(b2, ["stop"]) })) : h("", true), c(i(G), { class: "drop-icon", size: 12, icon: p2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [y2.img ? { name: "prefix", fn: d(() => [r("img", { alt: "screen", src: i(Y)(i(Z)(y2.img)), class: "screen_img" }, null, 8, re)]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-eb4ee99b"]]), pe = ["onMouseenter"], de = { class: "item" }, me = { style: { display: "flex", "justify-content": "space-between" } }, Ce = { class: "error" }, ge = { class: "item" }, he = { style: { width: "100%" } }, fe = e({ __name: "JumpParams", setup(e2) {
  _((e3) => ({ fe131ba2: w2.value }));
  const { prefixCls: p2 } = j("jump-params"), m2 = I(), g2 = t([]), { token: f2 } = V.useToken(), w2 = k(() => f2.value.colorBorder), b2 = t(-1);
  function x2() {
    g2.value.push({ name: "", value: "", type: 0 });
  }
  return n(() => m2.getCurConfigComponent, (e3) => {
    var _a;
    e3 && (g2.value = te((_a = e3.chart.jump) == null ? void 0 : _a.params) || []);
  }, { immediate: true }), n(g2, (e3) => {
    m2.getCurConfigComponent.chart.jump.params = e3;
  }, { deep: true }), (e3, t2) => (o(), a("div", { class: l(i(p2)) }, [(o(true), a(u, null, s(g2.value, (e4, n2) => (o(), a("div", { class: "items", key: n2, onMouseenter: (e5) => b2.value = n2, onMouseleave: t2[0] || (t2[0] = (e5) => b2.value = -1) }, [r("div", de, [t2[1] || (t2[1] = r("span", { class: "title" }, "参数名", -1)), c(i(J), { placeholder: "输入参数名", value: e4.name, "onUpdate:value": (t3) => e4.name = t3, maxlength: 20, status: e4.errorInfo ? "error" : "", onChange: (t3) => function(e5, t4) {
    if (!/^[\u4E00-\u9FA5\w]{1,20}$/.test(e5.name)) return void (e5.errorInfo = "只允许中文、字符、数字、下划线");
    g2.value.some((n3, a2) => n3.name === e5.name && a2 !== t4) ? e5.errorInfo = "参数名不能重复" : e5 == null ? true : delete e5.errorInfo;
  }(e4, n2) }, null, 8, ["value", "onUpdate:value", "status", "onChange"])]), r("div", null, [r("div", me, [r("div", Ce, v(e4.errorInfo ? e4.errorInfo : ""), 1), c(i(F), { style: { right: "10px" }, value: e4.type, "onUpdate:value": (t3) => e4.type = t3, size: "small", onChange: (t3) => function(e5) {
    e5.value = "";
  }(e4) }, { default: d(() => [c(i(q), { class: l(`${i(p2)}-radio-button`), value: i(T).CONSTANT }, { default: d(() => t2[2] || (t2[2] = [y("常量")])), _: 1, __: [2] }, 8, ["class", "value"]), c(i(q), { class: l(`${i(p2)}-radio-button`), value: i(T).VARIABLE }, { default: d(() => t2[3] || (t2[3] = [y("变量")])), _: 1, __: [3] }, 8, ["class", "value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])]), r("div", ge, [t2[4] || (t2[4] = r("span", { class: "title" }, "参数值", -1)), r("div", he, [0 === e4.type ? (o(), C(i(J), { key: 0, placeholder: "输入参数值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 20 }, null, 8, ["value", "onUpdate:value"])) : (o(), C(ne, { key: 1, variable: e4.value, onOk: (t3) => function(e5, t4) {
    t4.value = e5;
  }(t3, e4) }, null, 8, ["variable", "onOk"]))])])]), b2.value === n2 ? (o(), C(i(G), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => function(e6) {
    g2.value.splice(e6, 1);
  }(n2) }, null, 8, ["onClick"])) : h("", true)], 40, pe))), 128)), r("div", { class: "add-button", onClick: x2 }, [c(i(G), { icon: "ant-design:plus-outlined" }), t2[5] || (t2[5] = y(" 添加跳转参数 "))])], 2));
} }), _e = H(fe, [["__scopeId", "data-v-f091fa8e"]]), ke = { class: "title" }, ye = { class: "title" }, we = { key: 2, class: "title" }, be = e({ name: "PageJumpConfig", __name: "index", setup(e2) {
  const p2 = I(), { prefixCls: m2 } = j("page-jump-config"), g2 = [A.CurPage, A.NewTab, A.Dialog], f2 = t(), _2 = [M.System, M.External], k2 = t(), b2 = t(), U2 = t(), S2 = t(), H2 = t();
  function E2(e3) {
    var _a;
    if (p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, open: e3 }, e3) {
      let e4 = (_a = p2.getCurConfigComponent.chart.events) == null ? void 0 : _a.emits;
      e4 || (e4 = []);
      -1 === e4.indexOf(x.CHART_CLICK) && (e4.push(x.CHART_CLICK), p2.getCurConfigComponent.chart.events = { ...p2.getCurConfigComponent.chart.events, emits: e4 });
    }
  }
  function O2() {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, type: f2.value };
  }
  function T2() {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, pageType: k2.value }, k2.value === M.System ? R2(b2.value) : $2();
  }
  function R2(e3) {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, page: e3 }, S2.value = e3 == null ? void 0 : e3.width, H2.value = e3 == null ? void 0 : e3.height;
  }
  function $2() {
    p2.getCurConfigComponent.chart.jump = { ...p2.getCurConfigComponent.chart.jump, page: { value: U2.value } };
  }
  function L2() {
    p2.getCurConfigComponent.chart.jump.page = { ...p2.getCurConfigComponent.chart.jump.page, width: S2.value };
  }
  function N2() {
    p2.getCurConfigComponent.chart.jump.page = { ...p2.getCurConfigComponent.chart.jump.page, height: H2.value };
  }
  return n(() => {
    var _a;
    return (_a = p2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
    e3 && (((_a = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _a.type) ? f2.value = (_b = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _b.type : (f2.value = A.CurPage, O2()), ((_c = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _c.pageType) ? k2.value = (_d = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _d.pageType : (k2.value = M.System, T2()), k2.value === M.System ? b2.value = (_e2 = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _e2.page : U2.value = (_g = (_f = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _f.page) == null ? void 0 : _g.value, S2.value = (_i = (_h = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _h.page) == null ? void 0 : _i.width, H2.value = (_k = (_j = p2.getCurConfigComponent.chart.jump) == null ? void 0 : _j.page) == null ? void 0 : _k.height);
  }, { immediate: true }), (e3, t2) => {
    var _a;
    const n2 = w("AInput");
    return o(), a("div", { class: l(i(m2)) }, [c(z, { title: "页面跳转", "allow-check": true, tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果", "title-check": (_a = i(p2).getCurConfigComponent.chart.jump) == null ? void 0 : _a.open, onChecked: E2 }, { default: d(() => [r("div", ke, [t2[5] || (t2[5] = y(" 跳转方式 ")), c(i(F), { size: "small", value: f2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => f2.value = e4), onChange: O2 }, { default: d(() => [(o(), a(u, null, s(g2, (e4, t3) => c(i(q), { key: t3, value: e4 }, { default: d(() => [y(v(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), r("div", ye, [t2[6] || (t2[6] = y(" 跳转页面 ")), c(i(F), { size: "small", value: k2.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => k2.value = e4), onChange: T2 }, { default: d(() => [(o(), a(u, null, s(_2, (e4, t3) => c(i(q), { key: t3, value: e4 }, { default: d(() => [y(v(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), k2.value === i(M).System ? (o(), C(ve, { key: 0, page: b2.value, onOk: R2 }, null, 8, ["page"])) : (o(), C(n2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: U2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => U2.value = e4), onChange: $2 }, null, 8, ["value"])), f2.value === i(A).Dialog ? (o(), a("div", we, [c(i(P), { prefix: "W", placeholder: "宽度", value: S2.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => S2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: L2 }, null, 8, ["value"]), c(i(P), { prefix: "H", placeholder: "高度", value: H2.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => H2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: N2 }, null, 8, ["value"])])) : h("", true), t2[7] || (t2[7] = r("div", { class: "title" }, " 跳转参数 ", -1)), c(_e)]), _: 1, __: [7] }, 8, ["title-check"])], 2);
  };
} }), je = H(be, [["__scopeId", "data-v-2edc2d5b"]]), xe = H(e({ __name: "EventSingleSelect", props: { event: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const u2 = e2, s2 = a2, { prefixCls: v2 } = j("event-single-select"), p2 = t(false), m2 = I(), g2 = t(), _2 = t([]), k2 = t(""), w2 = t(false), { getEventComponents: b2 } = ae(), x2 = () => {
    var _a;
    if ((_a = u2.event) == null ? void 0 : _a.id) {
      const e3 = R(m2.getComponentList, u2.event.id);
      if (!e3) return s2("ok"), "";
      let t2;
      return e3.chart.data.headers && (t2 = e3.chart.data.headers[u2.event.param]), t2 ? `${e3.chart.name} / ${S(u2.event.event, e3.chart.type)} / ${t2.rename ?? t2.colName}` : `${e3.chart.name} / ${S(u2.event.event, e3.chart.type)}`;
    }
    return "";
  };
  function U2() {
    p2.value = false, k2.value = x2();
  }
  function H2() {
    s2("ok", te(g2.value)), p2.value = false;
  }
  n(() => {
    var _a;
    return (_a = m2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    p2.value = false;
  }), n(() => u2.event, () => {
    k2.value = x2();
  }, { deep: true, immediate: true });
  const E2 = (e3) => {
    p2.value = e3, e3 ? _2.value = b2(u2.filterSelf) : k2.value = x2(), g2.value = te(u2.event);
  };
  function O2(e3) {
    g2.value = e3;
  }
  function T2() {
    s2("ok", {});
  }
  return (e3, t2) => (o(), C(i(D), { trigger: ["click"], open: p2.value, onOpenChange: E2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "420px" } }, { overlay: d(() => [c(i(K), null, { default: d(() => [c(i(K).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [c(oe, { value: g2.value, "component-list": _2.value, onSelectChange: O2 }, null, 8, ["value", "component-list"]), r("div", { class: l(`${i(v2)}-ok-button`) }, [c(i(W), { class: "mr-2", onClick: U2 }, { default: d(() => t2[4] || (t2[4] = [y("取消")])), _: 1, __: [4] }), c(i(W), { type: "primary", onClick: H2 }, { default: d(() => t2[5] || (t2[5] = [y("确定")])), _: 1, __: [5] })], 2)]), _: 1 })]), _: 1 })]), default: d(() => [r("div", { class: l(i(v2)), onMouseenter: t2[2] || (t2[2] = (e4) => w2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => w2.value = false) }, [c(i(J), { class: l(`${i(v2)}-drop-input`), placeholder: "请选择参数来源", value: k2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => k2.value = e4), onChange: t2[1] || (t2[1] = (e4) => p2.value = true) }, { suffix: d(() => [w2.value && k2.value ? (o(), C(i(G), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(T2, ["stop"]) })) : h("", true), c(i(G), { class: "drop-icon", size: 12, icon: p2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-2ae84dbc"]]), Ie = ["onMouseenter"], Ue = { class: "title" }, Se = { class: "title" }, He = e({ name: "ShowHideConfig", __name: "index", setup(e2) {
  _((e3) => ({ "5157f5be": m2.value }));
  const { prefixCls: n2 } = j("show-hide-config"), v2 = I(), { token: p2 } = V.useToken(), m2 = k(() => p2.value.colorBorder), g2 = t(-1), f2 = [{ value: "eq", label: "等于" }, { value: "ne", label: "不等于" }, { value: "gt", label: "大于" }, { value: "ge", label: "大于等于" }, { value: "lt", label: "小于" }, { value: "le", label: "小于等于" }];
  function b2(e3) {
    v2.getCurConfigComponent.chart.showHide = { ...v2.getCurConfigComponent.chart.showHide, open: e3 }, delete v2.getCurConfigComponent.chart.showHide.show;
  }
  function x2() {
    var _a;
    ((_a = v2.getCurConfigComponent.chart.showHide) == null ? void 0 : _a.conditions) || (v2.getCurConfigComponent.chart.showHide.conditions = []), v2.getCurConfigComponent.chart.showHide.conditions.push({ event: {}, condition: "eq", value: "" });
  }
  return (e3, t2) => {
    var _a;
    const p3 = w("AInput");
    return o(), a("div", { class: l(i(n2)) }, [c(z, { title: "条件显隐", "allow-check": true, tooltip: "组件开启条件显示隐藏功能。开启后当事件触发时满足下面设置条件时显示，否则隐藏。", "title-check": (_a = i(v2).getCurConfigComponent.chart.showHide) == null ? void 0 : _a.open, onChecked: b2 }, { default: d(() => {
      var _a2;
      return [(o(true), a(u, null, s((_a2 = i(v2).getCurConfigComponent.chart.showHide) == null ? void 0 : _a2.conditions, (e4, n3) => (o(), a("div", { class: "condition", key: n3, onMouseenter: (e5) => g2.value = n3, onMouseleave: t2[0] || (t2[0] = (e5) => g2.value = -1) }, [r("div", Ue, [t2[1] || (t2[1] = y(" 触发 ")), c(xe, { "filter-self": true, event: e4.event, onOk: (e5) => function(e6, t3) {
        v2.getCurConfigComponent.chart.showHide.conditions[e6].event = t3;
      }(n3, e5) }, null, 8, ["event", "onOk"])]), r("div", Se, [t2[2] || (t2[2] = y(" 条件 ")), c(i(Q), { style: { flex: "1" }, placeholder: "选择比较条件", class: "select-com", value: e4.condition, "onUpdate:value": (t3) => e4.condition = t3, options: f2 }, null, 8, ["value", "onUpdate:value"]), t2[3] || (t2[3] = y(" 值 ")), c(p3, { style: { width: "120px" }, placeholder: "请输入值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 100 }, null, 8, ["value", "onUpdate:value"])]), g2.value === n3 ? (o(), C(i(G), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => function(e6) {
        var _a3;
        v2.getCurConfigComponent.chart.showHide.conditions.splice(e6, 1), (_a3 = v2.getCurConfigComponent.chart.showHide) == null ? true : delete _a3.show;
      }(n3) }, null, 8, ["onClick"])) : h("", true)], 40, Ie))), 128)), r("div", { class: "add-button", onClick: x2 }, [c(i(G), { icon: "ant-design:plus-outlined" }), t2[4] || (t2[4] = y(" 添加显隐条件 "))])];
    }), _: 1 }, 8, ["title-check"])], 2);
  };
} }), Ee = H(He, [["__scopeId", "data-v-50189189"]]), Oe = H(e({ name: "AdvanceConfig", __name: "index", setup(e2) {
  const { prefixCls: t2 } = j("advance-config");
  return (e3, n2) => (o(), C(i(b), null, { default: d(() => [r("div", { class: l(i(t2)) }, [c(z, { title: "事件开启" }, { default: d(() => [c(ie)]), _: 1 }), c(je), c(Ee)], 2)]), _: 1 }));
} }), [["__scopeId", "data-v-40dab166"]]);
export {
  Oe as default
};
