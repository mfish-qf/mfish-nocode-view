import { defineComponent as e, ref as t, watch as a, createElementBlock as n, openBlock as o, normalizeClass as l, unref as i, Fragment as u, renderList as r, createVNode as c, createElementVNode as m, toDisplayString as p, onMounted as s, withCtx as g, reactive as C, createBlock as v, createSlots as d, createCommentVNode as h, withModifiers as f, resolveComponent as _, createTextVNode as k } from "vue";
import { Switch as y, InputGroup as j, TreeSelect as w, List as x, Dropdown as b, Input as I, Menu as S, RadioGroup as E, RadioButton as U, Empty as P } from "ant-design-vue";
import { ScrollContainer as T } from "@mfish/core/components/Container";
import { useDesign as A } from "@mfish/core/hooks";
import { C as O } from "./ConfigGroup.js";
import { C as z, u as L, b as H, g as R, _ as M, c as N, d as D, P as K, e as J, f as G } from "./index.js";
import { Icon as W } from "@mfish/core/components/Icon";
import B from "@mfish/core/components/InputSearch";
import { imageUrl as F, getLocalFileUrl as Q } from "@mfish/core/utils/file/FileUtils";
import { usePagination as V } from "@mfish/core/utils/PageUtils";
import "@vueuse/core";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const $ = ["onClick"], q = M(e({ __name: "EventListen", setup(e2) {
  const { prefixCls: s2 } = A("event-listen"), g2 = t({ [z.CHART_CLICK]: false, [z.CHART_DBLCLICK]: false, [z.CHART_MOUSE_ENTER]: false, [z.CHART_MOUSE_LEAVE]: false }), C2 = L();
  function v2() {
    C2.getCurConfigComponent.chart.events.emits || (C2.getCurConfigComponent.chart.events = { emits: [] }), C2.getCurConfigComponent.chart.events.emits = Object.keys(i(g2)).filter((e3) => g2.value[e3]).map((e3) => e3);
  }
  return a(() => C2.getCurConfigComponent.chart.id, (e3) => {
    var _a, _b;
    (_a = H[C2.getCurConfigComponent.chart.type].customEvents) == null ? void 0 : _a.forEach((e4) => {
      g2.value[e4.value] = false;
    }), e3 ? ((_b = C2.getCurConfigComponent.chart.events) == null ? void 0 : _b.emits) && C2.getCurConfigComponent.chart.events.emits.forEach((e4) => {
      g2.value[e4] = true;
    }) : Object.keys(g2.value).forEach((e4) => {
      g2.value[e4] = false;
    });
  }, { immediate: true }), (e3, t2) => (o(), n("div", { class: l(i(s2)) }, [(o(true), n(u, null, r(Object.keys(g2.value), (e4) => {
    var _a;
    return o(), n("div", { class: "check-item", key: e4 }, [c(i(y), { size: "small", checked: g2.value[e4], "onUpdate:checked": (t3) => g2.value[e4] = t3, "checked-children": "开", "un-checked-children": "关", onChange: v2 }, null, 8, ["checked", "onUpdate:checked"]), m("div", { class: l(g2.value[e4] ? "checked" : ""), onClick: (t3) => function(e5) {
      g2.value[e5] = !g2.value[e5], v2();
    }(e4) }, p(i(R)(e4, (_a = i(C2).getCurConfigComponent) == null ? void 0 : _a.chart.type)), 11, $)]);
  }), 128))], 2));
} }), [["__scopeId", "data-v-dc2a8daf"]]), X = { target: "_blank", onClick: () => {
} }, Y = ["src"], Z = M(e({ __name: "PageList", emits: ["selectScreen"], setup(e2, { emit: a2 }) {
  const u2 = a2, r2 = t(), C2 = t(), v2 = t(), { prefixCls: d2 } = A("page-list"), h2 = t([]), { paginationProp: f2, getPageNum: _2, setCurrentPage: k2, getPageSize: y2, setTotal: b2 } = V(I2, { showSizeChanger: false, showQuickJumper: false });
  function I2(e3) {
    e3 && k2(e3), D({ folderId: r2.value, name: v2.value, pageNum: e3 ?? _2(), pageSize: y2() }).then((e4) => {
      h2.value = e4.list, b2(e4.total);
    });
  }
  return s(() => {
    N().then((e3) => {
      C2.value = [{ name: "我的大屏", children: e3, id: "" }];
    }), I2(1);
  }), (e3, t2) => (o(), n("div", { class: l(i(d2)) }, [c(i(j), { compact: "" }, { default: g(() => [c(i(w), { value: r2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => r2.value = e4), "tree-data": C2.value, style: { width: "35%", "border-right": "0" }, "allow-clear": "", placeholder: "选择大屏目录", "dropdown-style": { minWidth: "300px", maxHeight: "400px", overflow: "auto" }, "field-names": { children: "children", label: "name", value: "id" }, "tree-node-filter-prop": "name", "show-search": "", onChange: t2[1] || (t2[1] = (e4) => I2(1)) }, null, 8, ["value", "tree-data"]), c(i(B), { visible: true, value: v2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => v2.value = e4), style: { width: "65%", height: "32px" }, "allow-clear": "", placeholder: "输入大屏名称", onSearch: t2[3] || (t2[3] = (e4) => I2(1)) }, null, 8, ["value"])]), _: 1 }), c(i(T), { class: "mt-2", style: { height: "45vh" } }, { default: g(() => [c(i(x), { "item-layout": "horizontal", "data-source": h2.value, pagination: i(f2) }, { renderItem: g(({ item: e4 }) => [c(i(x).Item, { class: "screen_item", onClick: (t3) => function(e5) {
    u2("selectScreen", e5);
  }(e4) }, { default: g(() => [c(i(x).Item.Meta, { description: e4.remark }, { title: g(() => [m("a", X, p(e4.name), 1)]), avatar: g(() => [m("img", { alt: "screen", src: i(F)(i(Q)(e4.thumbnail)), class: "screen_img" }, null, 8, Y)]), _: 2 }, 1032, ["description"])]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["data-source", "pagination"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-efbe8537"]]), ee = ["src"], te = M(e({ __name: "PageSelect", props: { page: { type: Object } }, emits: ["ok"], setup(e2, { emit: n2 }) {
  const u2 = e2, r2 = n2, { prefixCls: p2 } = A("page-select"), s2 = t(false), _2 = L(), k2 = t(false), y2 = C({ name: void 0, value: void 0, img: void 0, width: void 0, height: void 0 });
  a(() => {
    var _a;
    return (_a = _2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c;
    s2.value = false, e3 && (y2.value = (_a = u2.page) == null ? void 0 : _a.value, y2.name = (_b = u2.page) == null ? void 0 : _b.name, y2.img = (_c = u2.page) == null ? void 0 : _c.img);
  }, { immediate: true });
  const j2 = (e3) => {
    s2.value = e3;
  };
  function w2() {
    y2.value = void 0, y2.name = void 0, y2.img = void 0, y2.width = void 0, y2.height = void 0, r2("ok", y2);
  }
  function x2(e3) {
    if (s2.value = false, y2.value = (e3 == null ? void 0 : e3.id) ?? void 0, y2.name = (e3 == null ? void 0 : e3.name) ?? void 0, y2.img = (e3 == null ? void 0 : e3.thumbnail) ?? void 0, e3.canvasConfig) {
      const t2 = JSON.parse(e3.canvasConfig);
      y2.width = t2 == null ? void 0 : t2.width, y2.height = t2 == null ? void 0 : t2.height;
    }
    r2("ok", y2);
  }
  return (e3, t2) => (o(), v(i(b), { trigger: ["click"], open: s2.value, onOpenChange: j2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "400px" } }, { overlay: g(() => [c(i(S), null, { default: g(() => [c(i(S).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: g(() => [c(Z, { onSelectScreen: x2 })]), _: 1 })]), _: 1 })]), default: g(() => [m("div", { class: l(i(p2)), onMouseenter: t2[2] || (t2[2] = (e4) => k2.value = true), onMouseleave: t2[3] || (t2[3] = (e4) => k2.value = false) }, [c(i(I), { class: l(`${i(p2)}-drop-input`), placeholder: "请选择页面", value: y2.name, "onUpdate:value": t2[0] || (t2[0] = (e4) => y2.name = e4), onChange: t2[1] || (t2[1] = (e4) => s2.value = true) }, d({ suffix: g(() => [y2.value && k2.value ? (o(), v(i(W), { key: 0, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: f(w2, ["stop"]) })) : h("", true), c(i(W), { class: "drop-icon", size: 12, icon: s2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [y2.img ? { name: "prefix", fn: g(() => [m("img", { alt: "screen", src: i(F)(i(Q)(y2.img)), class: "screen_img" }, null, 8, ee)]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"]));
} }), [["__scopeId", "data-v-eb4ee99b"]]), ae = { class: "title" }, ne = { class: "title" }, oe = { key: 2, class: "title" }, le = e({ name: "PageJumpConfig", __name: "index", setup(e2) {
  const s2 = L(), { prefixCls: C2 } = A("page-jump-config"), d2 = [K.CurPage, K.NewTab, K.Dialog], f2 = t(), y2 = [J.System, J.External], j2 = t(), w2 = t(), x2 = t(), b2 = t(), I2 = t();
  function S2(e3) {
    var _a;
    if (s2.getCurConfigComponent.chart.jump = { ...s2.getCurConfigComponent.chart.jump, open: e3 }, e3) {
      let e4 = (_a = s2.getCurConfigComponent.chart.events) == null ? void 0 : _a.emits;
      e4 || (e4 = []);
      -1 === e4.indexOf(z.CHART_CLICK) && (e4.push(z.CHART_CLICK), s2.getCurConfigComponent.chart.events = { ...s2.getCurConfigComponent.chart.events, emits: e4 });
    }
  }
  function P2() {
    s2.getCurConfigComponent.chart.jump = { ...s2.getCurConfigComponent.chart.jump, type: f2.value };
  }
  function T2() {
    s2.getCurConfigComponent.chart.jump = { ...s2.getCurConfigComponent.chart.jump, pageType: j2.value }, j2.value === J.System ? H2(w2.value) : R2();
  }
  function H2(e3) {
    s2.getCurConfigComponent.chart.jump = { ...s2.getCurConfigComponent.chart.jump, page: e3 }, b2.value = e3 == null ? void 0 : e3.width, I2.value = e3 == null ? void 0 : e3.height;
  }
  function R2() {
    s2.getCurConfigComponent.chart.jump = { ...s2.getCurConfigComponent.chart.jump, page: { value: x2.value } };
  }
  function M2() {
    s2.getCurConfigComponent.chart.jump.page = { ...s2.getCurConfigComponent.chart.jump.page, width: b2.value };
  }
  function N2() {
    s2.getCurConfigComponent.chart.jump.page = { ...s2.getCurConfigComponent.chart.jump.page, height: I2.value };
  }
  return a(() => {
    var _a;
    return (_a = s2.getCurConfigComponent) == null ? void 0 : _a.chart.id;
  }, (e3) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    e3 && (((_a = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _a.type) ? f2.value = (_b = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _b.type : (f2.value = K.CurPage, P2()), ((_c = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _c.pageType) ? j2.value = (_d = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _d.pageType : (j2.value = J.System, T2()), j2.value === J.System ? w2.value = (_e = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _e.page : x2.value = (_g = (_f = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _f.page) == null ? void 0 : _g.value, b2.value = (_i = (_h = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _h.page) == null ? void 0 : _i.width, I2.value = (_k = (_j = s2.getCurConfigComponent.chart.jump) == null ? void 0 : _j.page) == null ? void 0 : _k.height);
  }, { immediate: true }), (e3, t2) => {
    var _a;
    const a2 = _("AInput");
    return o(), n("div", { class: l(i(C2)) }, [c(O, { title: "页面跳转", "allow-check": true, tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果", "title-check": (_a = i(s2).getCurConfigComponent.chart.jump) == null ? void 0 : _a.open, onChecked: S2 }, { default: g(() => [m("div", ae, [t2[5] || (t2[5] = k(" 跳转方式 ")), c(i(E), { size: "small", value: f2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => f2.value = e4), onChange: P2 }, { default: g(() => [(o(), n(u, null, r(d2, (e4, t3) => c(i(U), { key: t3, value: e4 }, { default: g(() => [k(p(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), m("div", ne, [t2[6] || (t2[6] = k(" 跳转页面 ")), c(i(E), { size: "small", value: j2.value, "onUpdate:value": t2[1] || (t2[1] = (e4) => j2.value = e4), onChange: T2 }, { default: g(() => [(o(), n(u, null, r(y2, (e4, t3) => c(i(U), { key: t3, value: e4 }, { default: g(() => [k(p(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), j2.value === i(J).System ? (o(), v(te, { key: 0, page: w2.value, onOk: H2 }, null, 8, ["page"])) : (o(), v(a2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: x2.value, "onUpdate:value": t2[2] || (t2[2] = (e4) => x2.value = e4), onChange: R2 }, null, 8, ["value"])), f2.value === i(K).Dialog ? (o(), n("div", oe, [c(i(G), { prefix: "W", placeholder: "宽度", value: b2.value, "onUpdate:value": t2[3] || (t2[3] = (e4) => b2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: M2 }, null, 8, ["value"]), c(i(G), { prefix: "H", placeholder: "高度", value: I2.value, "onUpdate:value": t2[4] || (t2[4] = (e4) => I2.value = e4), min: 0, max: 99999, maxlength: 5, onChange: N2 }, null, 8, ["value"])])) : h("", true)]), _: 1 }, 8, ["title-check"])], 2);
  };
} }), ie = M(le, [["__scopeId", "data-v-2186b2e9"]]), ue = M(e({ name: "AdvanceConfig", __name: "index", setup(e2) {
  const { prefixCls: t2 } = A("advance-config");
  return (e3, a2) => (o(), v(i(T), null, { default: g(() => [m("div", { class: l(i(t2)) }, [c(O, { title: "事件开启" }, { default: g(() => [c(q)]), _: 1 }), c(ie)], 2), c(i(P), { description: "进阶配置开发中......", image: i(P).PRESENTED_IMAGE_SIMPLE }, null, 8, ["image"])]), _: 1 }));
} }), [["__scopeId", "data-v-fcbfd2e1"]]);
export {
  ue as default
};
