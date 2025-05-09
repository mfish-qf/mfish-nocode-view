import { defineComponent as e, ref as t, watch as n, createElementBlock as a, openBlock as o, normalizeClass as l, unref as i, Fragment as u, renderList as c, createVNode as s, createElementVNode as r, toDisplayString as p, onMounted as v, withCtx as d, reactive as m, createBlock as C, createSlots as g, createCommentVNode as h, withModifiers as f, resolveComponent as _, createTextVNode as k, useCssVars as y, computed as w } from "vue";
import { Switch as b, InputGroup as j, TreeSelect as x, List as S, Dropdown as E, Input as I, Menu as H, RadioGroup as U, RadioButton as T, Button as O, theme as A, Select as M, Empty as P } from "ant-design-vue";
import { ScrollContainer as z } from "@mfish/core/components/Container";
import { useDesign as R } from "@mfish/core/hooks";
import { C as L } from "./ConfigGroup.js";
import { C as N, u as $, b as D, g as B, _ as K, c as J, d as q, P as F, e as G, f as W, h as Q } from "./index.js";
import { Icon as V } from "@mfish/core/components/Icon";
import X from "@mfish/core/components/InputSearch";
import { imageUrl as Y, getLocalFileUrl as Z } from "@mfish/core/utils/file/FileUtils";
import { usePagination as ee } from "@mfish/core/utils/PageUtils";
import "@vueuse/core";
import { cloneDeep as te } from "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import { u as ne, E as ae } from "./UseEventSelect.js";
const oe = ["onClick"], le = K(e({ __name: "EventListen", setup(e2) {
  const { prefixCls: v2 } = R("event-listen"), d2 = t({ [N.CHART_BEFORE_MOUNT]: false, [N.CHART_MOUNTED]: false, [N.CHART_CLICK]: false, [N.CHART_DBLCLICK]: false, [N.CHART_MOUSE_ENTER]: false, [N.CHART_MOUSE_LEAVE]: false }), m2 = $();
  function C2() {
    m2.getCurConfigComponent.chart.events.emits || (m2.getCurConfigComponent.chart.events = { emits: [] }), m2.getCurConfigComponent.chart.events.emits = Object.keys(i(d2)).filter((e3) => d2.value[e3]).map((e3) => e3);
  }
  return n(() => m2.getCurConfigComponent.chart.id, (e3) => {
    var _a, _b;
    (_a = D[m2.getCurConfigComponent.chart.type].customEvents) == null ? void 0 : _a.forEach((e4) => {
      d2.value[e4.value] = false;
    }), e3 ? ((_b = m2.getCurConfigComponent.chart.events) == null ? void 0 : _b.emits) && m2.getCurConfigComponent.chart.events.emits.forEach((e4) => {
      d2.value[e4] = true;
    }) : Object.keys(d2.value).forEach((e4) => {
      d2.value[e4] = false;
    });
  }, { immediate: true }), (e3, t2) => (o(), a("div", { class: l(i(v2)) }, [(o(true), a(u, null, c(Object.keys(d2.value), (e4) => {
    var _a;
    return o(), a("div", { class: "check-item", key: e4 }, [s(i(b), { size: "small", checked: d2.value[e4], "onUpdate:checked": (t3) => d2.value[e4] = t3, "checked-children": "开", "un-checked-children": "关", onChange: C2 }, null, 8, ["checked", "onUpdate:checked"]), r("div", { class: l(d2.value[e4] ? "checked" : ""), onClick: (t3) => function(e5) {
      d2.value[e5] = !d2.value[e5], C2();
    }(e4) }, p(i(B)(e4, (_a = i(m2).getCurConfigComponent) == null ? void 0 : _a.chart.type)), 11, oe)]);
  }), 128))], 2));
} }), [["__scopeId", "data-v-fc1a26b9"]]), ie = { target: "_blank", onClick: () => {
} }, ue = ["src"], ce = K(e({ __name: "PageList", emits: ["selectScreen"], setup(e2, { emit: n2 }) {
  const u2 = n2, c2 = t(), m2 = t(), C2 = t(), { prefixCls: g2 } = R("page-list"), h2 = t([]), { paginationProp: f2, getPageNum: _2, setCurrentPage: k2, getPageSize: y2, setTotal: w2 } = ee(b2, { showSizeChanger: false, showQuickJumper: false });
  function b2(e3) {
    e3 && k2(e3), q({ folderId: c2.value, name: C2.value, pageNum: e3 ?? _2(), pageSize: y2() }).then((e4) => {
      h2.value = e4.list, w2(e4.total);
    });
  }
  return v(() => {
    J().then((e3) => {
      m2.value = [{ name: "我的大屏", children: e3, id: "" }];
    }), b2(1);
  }), (e3, t2) => (o(), a("div", { class: l(i(g2)) }, [s(i(j), { compact: "" }, { default: d(() => [s(i(x), { value: c2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => c2.value = e4), "tree-data": m2.value, style: { width: "35%", "border-right": "0" }, "allow-clear": "", placeholder: "选择大屏目录", "dropdown-style": { minWidth: "300px", maxHeight: "400px", overflow: "auto" }, "field-names": { children: "children", label: "name", value: "id" }, "tree-node-filter-prop": "name", "show-search": "", onChange: t2[1] || (t2[1] = (e4) => b2(1)) }, null, 8, ["value", "tree-data"]), s(i(X), { visible: true, value: C2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => C2.value = e4), style: { width: "65%", height: "32px" }, "allow-clear": "", placeholder: "输入大屏名称", onSearch: t2[3] || (t2[3] = (e4) => b2(1)) }, null, 8, ["value"])]), _: 1 }), s(i(z), { class: "mt-2", style: { height: "45vh" } }, { default: d(() => [s(i(S), { "item-layout": "horizontal", "data-source": h2.value, pagination: i(f2) }, { renderItem: d(({ item: e4 }) => [s(i(S).Item, { class: "screen_item", onClick: (t3) => function(e5) {
    u2("selectScreen", e5);
  }(e4) }, { default: d(() => [s(i(S).Item.Meta, { description: e4.remark }, { title: d(() => [r("a", ie, p(e4.name), 1)]), avatar: d(() => [r("img", { alt: "screen", src: i(Y)(i(Z)(e4.thumbnail)), class: "screen_img" }, null, 8, ue)]), _: 2 }, 1032, ["description"])]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["data-source", "pagination"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-efbe8537"]]), se = ["src"], re = K(e({ __name: "PageSelect", props: { page: { type: Object } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const u2 = e2, c2 = a2, { prefixCls: p2 } = R("page-select"), v2 = t(false), _2 = $(), k2 = t(false), y2 = m({ name: void 0, value: void 0, img: void 0, width: void 0, height: void 0 });
  n(() => {
    var _a;
    return (_a = _2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c;
    v2.value = false, e3 && (y2.value = (_a = u2.page) == null ? void 0 : _a.value, y2.name = (_b = u2.page) == null ? void 0 : _b.name, y2.img = (_c = u2.page) == null ? void 0 : _c.img);
  }, { immediate: true });
  const w2 = (e3) => {
    v2.value = e3;
  };
  function b2() {
    y2.value = void 0, y2.name = void 0, y2.img = void 0, y2.width = void 0, y2.height = void 0, c2("ok", y2);
  }
  function j2(e3) {
    if (v2.value = false, y2.value = (e3 == null ? void 0 : e3.id) ?? void 0, y2.name = (e3 == null ? void 0 : e3.name) ?? void 0, y2.img = (e3 == null ? void 0 : e3.thumbnail) ?? void 0, e3.canvasConfig) {
      const t2 = JSON.parse(e3.canvasConfig);
      y2.width = t2 == null ? void 0 : t2.width, y2.height = t2 == null ? void 0 : t2.height;
    }
    c2("ok", y2);
  }
  return (e3, t2) => (o(), C(i(E), { trigger: ["click"], open: v2.value, onOpenChange: w2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "400px" } }, { overlay: d(() => [s(i(H), null, { default: d(() => [s(i(H).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [s(ce, { onSelectScreen: j2 })]), _: 1 })]), _: 1 })]), default: d(() => [r("div", { class: l(i(p2)), onMouseenter: t2[2] || (t2[2] = (e4) => k2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => k2.value = false) }, [s(i(I), { class: l(`${i(p2)}-drop-input`), placeholder: "请选择页面", value: y2.name, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.name = e4), onChange: t2[1] || (t2[1] = (e4) => v2.value = true) }, g({ suffix: d(() => [y2.value && k2.value ? (o(), C(i(V), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(b2, ["stop"]) })) : h("", true), s(i(V), { class: "drop-icon", size: 12, icon: v2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [y2.img ? { name: "prefix", fn: d(() => [r("img", { alt: "screen", src: i(Y)(i(Z)(y2.img)), class: "screen_img" }, null, 8, se)]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-eb4ee99b"]]), pe = { class: "title" }, ve = { class: "title" }, de = { key: 2, class: "title" }, me = e({ name: "PageJumpConfig", __name: "index", setup(e2) {
  const v2 = $(), { prefixCls: m2 } = R("page-jump-config"), g2 = [F.CurPage, F.NewTab, F.Dialog], f2 = t(), y2 = [G.System, G.External], w2 = t(), b2 = t(), j2 = t(), x2 = t(), S2 = t();
  function E2(e3) {
    var _a;
    if (v2.getCurConfigComponent.chart.jump = { ...v2.getCurConfigComponent.chart.jump, open: e3 }, e3) {
      let e4 = (_a = v2.getCurConfigComponent.chart.events) == null ? void 0 : _a.emits;
      e4 || (e4 = []);
      -1 === e4.indexOf(N.CHART_CLICK) && (e4.push(N.CHART_CLICK), v2.getCurConfigComponent.chart.events = { ...v2.getCurConfigComponent.chart.events, emits: e4 });
    }
  }
  function I2() {
    v2.getCurConfigComponent.chart.jump = { ...v2.getCurConfigComponent.chart.jump, type: f2.value };
  }
  function H2() {
    v2.getCurConfigComponent.chart.jump = { ...v2.getCurConfigComponent.chart.jump, pageType: w2.value }, w2.value === G.System ? O2(b2.value) : A2();
  }
  function O2(e3) {
    v2.getCurConfigComponent.chart.jump = { ...v2.getCurConfigComponent.chart.jump, page: e3 }, x2.value = e3 == null ? void 0 : e3.width, S2.value = e3 == null ? void 0 : e3.height;
  }
  function A2() {
    v2.getCurConfigComponent.chart.jump = { ...v2.getCurConfigComponent.chart.jump, page: { value: j2.value } };
  }
  function M2() {
    v2.getCurConfigComponent.chart.jump.page = { ...v2.getCurConfigComponent.chart.jump.page, width: x2.value };
  }
  function P2() {
    v2.getCurConfigComponent.chart.jump.page = { ...v2.getCurConfigComponent.chart.jump.page, height: S2.value };
  }
  return n(() => {
    var _a;
    return (_a = v2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
    e3 && (((_a = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _a.type) ? f2.value = (_b = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _b.type : (f2.value = F.CurPage, I2()), ((_c = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _c.pageType) ? w2.value = (_d = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _d.pageType : (w2.value = G.System, H2()), w2.value === G.System ? b2.value = (_e2 = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _e2.page : j2.value = (_g = (_f = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _f.page) == null ? void 0 : _g.value, x2.value = (_i = (_h = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _h.page) == null ? void 0 : _i.width, S2.value = (_k = (_j = v2.getCurConfigComponent.chart.jump) == null ? void 0 : _j.page) == null ? void 0 : _k.height);
  }, { immediate: true }), (e3, t2) => {
    var _a;
    const n2 = _("AInput");
    return o(), a("div", { class: l(i(m2)) }, [s(L, { title: "页面跳转", "allow-check": true, tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果", "title-check": (_a = i(v2).getCurConfigComponent.chart.jump) == null ? void 0 : _a.open, onChecked: E2 }, { default: d(() => [r("div", pe, [t2[5] || (t2[5] = k(" 跳转方式 ")), s(i(U), { size: "small", value: f2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => f2.value = e4), onChange: I2 }, { default: d(() => [(o(), a(u, null, c(g2, (e4, t3) => s(i(T), { key: t3, value: e4 }, { default: d(() => [k(p(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), r("div", ve, [t2[6] || (t2[6] = k(" 跳转页面 ")), s(i(U), { size: "small", value: w2.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => w2.value = e4), onChange: H2 }, { default: d(() => [(o(), a(u, null, c(y2, (e4, t3) => s(i(T), { key: t3, value: e4 }, { default: d(() => [k(p(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), w2.value === i(G).System ? (o(), C(re, { key: 0, page: b2.value, onOk: O2 }, null, 8, ["page"])) : (o(), C(n2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: j2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => j2.value = e4), onChange: A2 }, null, 8, ["value"])), f2.value === i(F).Dialog ? (o(), a("div", de, [s(i(W), { prefix: "W", placeholder: "宽度", value: x2.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => x2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: M2 }, null, 8, ["value"]), s(i(W), { prefix: "H", placeholder: "高度", value: S2.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => S2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: P2 }, null, 8, ["value"])])) : h("", true)]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), Ce = K(me, [["__scopeId", "data-v-2186b2e9"]]), ge = K(e({ __name: "EventSingleSelect", props: { event: { type: Object, default: () => {
} }, filterSelf: { type: Boolean, default: false } }, emits: ["ok"], setup(e2, { emit: a2 }) {
  const u2 = e2, c2 = a2, { prefixCls: p2 } = R("event-single-select"), v2 = t(false), m2 = $(), g2 = t(), _2 = t([]), y2 = t(""), w2 = t(false), { getEventComponents: b2 } = ne(), j2 = () => {
    var _a;
    if ((_a = u2.event) == null ? void 0 : _a.id) {
      const e3 = Q(m2.getComponentList, u2.event.id);
      if (!e3) return c2("ok"), "";
      let t2;
      return e3.chart.data.headers && (t2 = e3.chart.data.headers[u2.event.param]), t2 ? `${e3.chart.name} / ${B(u2.event.event, e3.chart.type)} / ${t2.rename ?? t2.colName}` : `${e3.chart.name} / ${B(u2.event.event, e3.chart.type)}`;
    }
    return "";
  };
  function x2() {
    v2.value = false, y2.value = j2();
  }
  function S2() {
    c2("ok", te(g2.value)), v2.value = false;
  }
  n(() => {
    var _a;
    return (_a = m2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, () => {
    v2.value = false;
  }), n(() => u2.event, () => {
    y2.value = j2();
  }, { deep: true, immediate: true });
  const U2 = (e3) => {
    v2.value = e3, e3 ? _2.value = b2(u2.filterSelf) : y2.value = j2(), g2.value = te(u2.event);
  };
  function T2(e3) {
    g2.value = e3;
  }
  function A2() {
    c2("ok", {});
  }
  return (e3, t2) => (o(), C(i(E), { trigger: ["click"], open: v2.value, onOpenChange: U2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "420px" } }, { overlay: d(() => [s(i(H), null, { default: d(() => [s(i(H).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: d(() => [s(ae, { value: g2.value, "component-list": _2.value, onSelectChange: T2 }, null, 8, ["value", "component-list"]), r("div", { class: l(`${i(p2)}-ok-button`) }, [s(i(O), { class: "mr-2", onClick: x2 }, { default: d(() => t2[4] || (t2[4] = [k("取消")])), _: 1 }), s(i(O), { type: "primary", onClick: S2 }, { default: d(() => t2[5] || (t2[5] = [k("确定")])), _: 1 })], 2)]), _: 1 })]), _: 1 })]), default: d(() => [r("div", { class: l(i(p2)), onMouseenter: t2[2] || (t2[2] = (e4) => w2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => w2.value = false) }, [s(i(I), { class: l(`${i(p2)}-drop-input`), placeholder: "请选择参数来源", value: y2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.value = e4), onChange: t2[1] || (t2[1] = (e4) => v2.value = true) }, { suffix: d(() => [w2.value && y2.value ? (o(), C(i(V), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(A2, ["stop"]) })) : h("", true), s(i(V), { class: "drop-icon", size: 12, icon: v2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-2ae84dbc"]]), he = ["onMouseenter"], fe = { class: "title" }, _e = { class: "title" }, ke = e({ name: "ShowHideConfig", __name: "index", setup(e2) {
  y((e3) => ({ "7b6d13eb": m2.value }));
  const { prefixCls: n2 } = R("show-hide-config"), p2 = $(), { token: v2 } = A.useToken(), m2 = w(() => v2.value.colorBorder), g2 = t(-1), f2 = [{ value: "eq", label: "等于" }, { value: "ne", label: "不等于" }, { value: "gt", label: "大于" }, { value: "ge", label: "大于等于" }, { value: "lt", label: "小于" }, { value: "le", label: "小于等于" }];
  function b2(e3) {
    p2.getCurConfigComponent.chart.showHide = { ...p2.getCurConfigComponent.chart.showHide, open: e3 }, delete p2.getCurConfigComponent.chart.showHide.show;
  }
  function j2() {
    var _a;
    ((_a = p2.getCurConfigComponent.chart.showHide) == null ? void 0 : _a.conditions) || (p2.getCurConfigComponent.chart.showHide.conditions = []), p2.getCurConfigComponent.chart.showHide.conditions.push({ event: {}, condition: "eq", value: "" });
  }
  return (e3, t2) => {
    var _a;
    const v3 = _("AInput");
    return o(), a("div", { class: l(i(n2)) }, [s(L, { title: "条件显隐", "allow-check": true, tooltip: "组件开启条件显示隐藏功能。开启后当事件触发时满足下面设置条件时显示，否则隐藏。", "title-check": (_a = i(p2).getCurConfigComponent.chart.showHide) == null ? void 0 : _a.open, onChecked: b2 }, { default: d(() => {
      var _a2;
      return [(o(true), a(u, null, c((_a2 = i(p2).getCurConfigComponent.chart.showHide) == null ? void 0 : _a2.conditions, (e4, n3) => (o(), a("div", { class: "condition", key: n3, onMouseenter: (e5) => g2.value = n3, onMouseleave: t2[0] || (t2[0] = (e5) => g2.value = -1) }, [r("div", fe, [t2[1] || (t2[1] = k(" 触发 ")), s(ge, { "filter-self": true, event: e4.event, onOk: (e5) => function(e6, t3) {
        p2.getCurConfigComponent.chart.showHide.conditions[e6].event = t3;
      }(n3, e5) }, null, 8, ["event", "onOk"])]), r("div", _e, [t2[2] || (t2[2] = k(" 条件 ")), s(i(M), { style: { flex: "1" }, placeholder: "选择比较条件", class: "select-com", value: e4.condition, "onUpdate:value": (t3) => e4.condition = t3, options: f2 }, null, 8, ["value", "onUpdate:value"]), t2[3] || (t2[3] = k(" 值 ")), s(v3, { style: { width: "120px" }, placeholder: "请输入值", value: e4.value, "onUpdate:value": (t3) => e4.value = t3, maxlength: 100 }, null, 8, ["value", "onUpdate:value"])]), g2.value === n3 ? (o(), C(i(V), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => function(e6) {
        var _a3;
        p2.getCurConfigComponent.chart.showHide.conditions.splice(e6, 1), (_a3 = p2.getCurConfigComponent.chart.showHide) == null ? true : delete _a3.show;
      }(n3) }, null, 8, ["onClick"])) : h("", true)], 40, he))), 128)), r("div", { class: "add-button", onClick: j2 }, [s(i(V), { icon: "ant-design:plus-outlined" }), t2[4] || (t2[4] = k(" 添加显隐条件 "))])];
    }), _: 1 }, 8, ["title-check"])], 2);
  };
} }), ye = K(ke, [["__scopeId", "data-v-7993fef9"]]), we = K(e({ name: "AdvanceConfig", __name: "index", setup(e2) {
  const { prefixCls: t2 } = R("advance-config");
  return (e3, n2) => (o(), C(i(z), null, { default: d(() => [r("div", { class: l(i(t2)) }, [s(L, { title: "事件开启" }, { default: d(() => [s(le)]), _: 1 }), s(Ce), s(ye)], 2), s(i(P), { description: "进阶配置开发中......", image: i(P).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])]), _: 1 }));
} }), [["__scopeId", "data-v-a3d1bc56"]]);
export {
  we as default
};
