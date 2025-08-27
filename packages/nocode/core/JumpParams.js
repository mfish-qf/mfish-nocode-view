import { defineComponent as e, ref as a, onMounted as l, createElementBlock as t, openBlock as n, normalizeClass as o, unref as i, createVNode as s, withCtx as r, createElementVNode as u, toDisplayString as c, reactive as d, watch as m, createSlots as v, createBlock as p, createCommentVNode as f, withModifiers as g, useCssVars as h, computed as y, Fragment as C, renderList as _, createTextVNode as k } from "vue";
import { InputGroup as w, TreeSelect as b, List as I, Dropdown as x, Input as S, Menu as U, theme as z, Tooltip as P, RadioGroup as O, RadioButton as A } from "ant-design-vue";
import { Icon as M } from "@mfish/core/components/Icon";
import { useDesign as j } from "@mfish/core/hooks";
import { F as N, G as V, _ as J, u as T, H as $, I as F } from "./index.js";
import B from "@mfish/core/components/InputSearch";
import { imageUrl as E, getLocalFileUrl as H } from "@mfish/core/utils/file/FileUtils";
import { usePagination as L } from "@mfish/core/utils/PageUtils";
import { ScrollContainer as R } from "@mfish/core/components/Container";
import { router as q } from "@mfish/core/router";
import { useOutsideOpen as G } from "@mfish/core/utils/OutsideOpenUtils";
import { cloneDeep as Q } from "lodash-es";
import { V as W } from "./VariableSelect.js";
const D = { target: "_blank", onClick: () => {
} }, K = ["src"], X = J(e({ __name: "PageList", emits: ["selectScreen"], setup(e2, { emit: d2 }) {
  const m2 = d2, v2 = a(), p2 = a(), f2 = a(), { prefixCls: g2 } = j("page-list"), h2 = a([]), { paginationProp: y2, getPageNum: C2, setCurrentPage: _2, getPageSize: k2, setTotal: x2 } = L(S2, { showSizeChanger: false, showQuickJumper: false });
  function S2(e3) {
    e3 && _2(e3), V({ folderId: v2.value, name: f2.value, pageNum: e3 ?? C2(), pageSize: k2() }).then((e4) => {
      h2.value = e4.list, x2(e4.total);
    });
  }
  return l(() => {
    N().then((e3) => {
      p2.value = [{ name: "我的大屏", children: e3, id: "" }];
    }), S2(1);
  }), (e3, a2) => (n(), t("div", { class: o(i(g2)) }, [s(i(w), { compact: "" }, { default: r(() => [s(i(b), { value: v2.value, "onUpdate:value": a2[0] || (a2[0] = (e4) => v2.value = e4), "tree-data": p2.value, style: { width: "35%", "border-right": "0" }, "allow-clear": "", placeholder: "选择大屏目录", "dropdown-style": { minWidth: "300px", maxHeight: "400px", overflow: "auto" }, "field-names": { children: "children", label: "name", value: "id" }, "tree-node-filter-prop": "name", "show-search": "", onChange: a2[1] || (a2[1] = (e4) => S2(1)) }, null, 8, ["value", "tree-data"]), s(i(B), { visible: true, value: f2.value, "onUpdate:value": a2[2] || (a2[2] = (e4) => f2.value = e4), style: { width: "65%", height: "32px" }, "allow-clear": "", placeholder: "输入大屏名称", onSearch: a2[3] || (a2[3] = (e4) => S2(1)) }, null, 8, ["value"])]), _: 1 }), s(i(R), { class: "mt-2", style: { height: "45vh" } }, { default: r(() => [s(i(I), { "item-layout": "horizontal", "data-source": h2.value, pagination: i(y2) }, { renderItem: r(({ item: e4 }) => [s(i(I).Item, { class: "screen_item", onClick: (a3) => (function(e5) {
    m2("selectScreen", e5);
  })(e4) }, { default: r(() => [s(i(I).Item.Meta, { description: e4.remark }, { title: r(() => [u("a", D, c(e4.name), 1)]), avatar: r(() => [u("img", { alt: "screen", src: i(E)(i(H)(e4.thumbnail)), class: "screen_img" }, null, 8, K)]), _: 2 }, 1032, ["description"])]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["data-source", "pagination"])]), _: 1 })], 2));
} }), [["__scopeId", "data-v-efbe8537"]]), Y = { style: { display: "flex" } }, Z = ["src"], ee = J(e({ __name: "PageSelect", props: { page: { type: Object } }, emits: ["ok"], setup(e2, { emit: l2 }) {
  const c2 = e2, h2 = l2, { prefixCls: y2 } = j("page-select"), C2 = a(false), _2 = T(), k2 = a(false), w2 = d({ name: void 0, value: void 0, img: void 0, width: void 0, height: void 0 }), { open: b2 } = G($);
  m(() => _2.getCurConfigComponent?.chart.id, (e3) => {
    C2.value = false, e3 && (w2.value = c2.page?.value, w2.name = c2.page?.name, w2.img = c2.page?.img);
  }, { immediate: true });
  const I2 = (e3) => {
    C2.value = e3;
  };
  function z2() {
    w2.value = void 0, w2.name = void 0, w2.img = void 0, w2.width = void 0, w2.height = void 0, h2("ok", w2);
  }
  function P2(e3) {
    if (C2.value = false, w2.value = e3?.id ?? void 0, w2.name = e3?.name ?? void 0, w2.img = e3?.thumbnail ?? void 0, e3.canvasConfig) {
      const a2 = JSON.parse(e3.canvasConfig);
      w2.width = a2?.width, w2.height = a2?.height;
    }
    h2("ok", w2);
  }
  function O2() {
    const e3 = q.resolve({ path: "/low-code/mf-screen/config", query: { id: w2.value } });
    b2(e3);
  }
  return (e3, a2) => (n(), t("div", Y, [s(i(x), { trigger: ["click"], open: C2.value, onOpenChange: I2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "400px" } }, { overlay: r(() => [s(i(U), null, { default: r(() => [s(i(U).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: r(() => [s(X, { onSelectScreen: P2 })]), _: 1 })]), _: 1 })]), default: r(() => [u("div", { class: o(i(y2)), onMouseenter: a2[2] || (a2[2] = (e4) => k2.value = true), onMouseleave: a2[3] || (a2[3] = (e4) => k2.value = false) }, [s(i(S), { class: o(`${i(y2)}-drop-input`), placeholder: "请选择页面", value: w2.name, "onUpdate:value": a2[0] || (a2[0] = (e4) => w2.name = e4), onChange: a2[1] || (a2[1] = (e4) => C2.value = true) }, v({ suffix: r(() => [w2.value && k2.value ? (n(), p(i(M), { key: 0, title: "编辑页面", class: "edit-icon", size: 14, icon: "ant-design:edit-outlined", onClick: g(O2, ["stop"]) })) : f("", true), w2.value && k2.value ? (n(), p(i(M), { key: 1, class: "delete-icon", size: 14, icon: "ant-design:close-circle-filled", onClick: g(z2, ["stop"]) })) : f("", true), s(i(M), { class: "drop-icon", size: 12, icon: C2.value ? "ant-design:up-outlined" : "ant-design:down-outlined" }, null, 8, ["icon"])]), _: 2 }, [w2.img ? { name: "prefix", fn: r(() => [u("img", { alt: "screen", src: i(E)(i(H)(w2.img)), class: "screen_img" }, null, 8, Z)]), key: "0" } : void 0]), 1032, ["class", "value"])], 34)]), _: 1 }, 8, ["open"])]));
} }), [["__scopeId", "data-v-5f0724aa"]]), ae = ["onMouseenter"], le = { class: "item" }, te = { style: { display: "flex", "justify-content": "space-between" } }, ne = { class: "error" }, oe = { class: "item" }, ie = { style: { width: "100%" } }, se = J(e({ __name: "JumpParams", props: { paramsValue: { type: Array, default: () => [] } }, emits: ["paramsChange"], setup(e2, { emit: l2 }) {
  h((e3) => ({ c6c7e2e0: x2.value }));
  const d2 = e2, v2 = l2, { prefixCls: g2 } = j("jump-params"), w2 = T(), b2 = a([]), { token: I2 } = z.useToken(), x2 = y(() => I2.value.colorBorder), U2 = a(-1);
  function N2() {
    b2.value.push({ name: "", value: "", type: 0 });
  }
  return m(() => w2.getCurConfigComponent, (e3) => {
    e3 && (b2.value = Q(d2.paramsValue) || []);
  }, { immediate: true }), m(b2, (e3) => {
    v2("paramsChange", e3);
  }, { deep: true }), (e3, a2) => (n(), t("div", { class: o(i(g2)) }, [(n(true), t(C, null, _(b2.value, (e4, l3) => (n(), t("div", { class: "items", key: l3, onMouseenter: (e5) => U2.value = l3, onMouseleave: a2[0] || (a2[0] = (e5) => U2.value = -1) }, [u("div", le, [a2[1] || (a2[1] = u("span", { class: "title" }, "参数名", -1)), s(i(S), { placeholder: "输入参数名", value: e4.name, "onUpdate:value": (a3) => e4.name = a3, maxlength: 20, status: e4.errorInfo ? "error" : "", onChange: (a3) => (function(e5, a4) {
    if (!/^[\u4E00-\u9FA5\w]{1,20}$/.test(e5.name)) return void (e5.errorInfo = "只允许中文、字符、数字、下划线");
    b2.value.some((l4, t2) => l4.name === e5.name && t2 !== a4) ? e5.errorInfo = "参数名不能重复" : delete e5?.errorInfo;
  })(e4, l3) }, null, 8, ["value", "onUpdate:value", "status", "onChange"])]), u("div", null, [u("div", te, [u("div", ne, c(e4.errorInfo ? e4.errorInfo : ""), 1), s(i(P), { placement: "topRight" }, { title: r(() => [...a2[2] || (a2[2] = [u("div", null, [u("span", { style: { "font-weight": "700" } }, "常量："), k("设置固定参数")], -1), u("div", null, [u("span", { style: { "font-weight": "700" } }, "变量： "), k(" 设置其他组件数据或全局变量（第一次加载设置，不会跟随前者变化。全局变量来自于请求链接中的参数） ")], -1)])]), default: r(() => [s(i(O), { style: { right: "10px" }, value: e4.type, "onUpdate:value": (a3) => e4.type = a3, size: "small", onChange: (a3) => (function(e5) {
    e5.value = "";
  })(e4) }, { default: r(() => [s(i(A), { class: o(`${i(g2)}-radio-button`), value: i(F).CONSTANT }, { default: r(() => [...a2[3] || (a2[3] = [k("常量", -1)])]), _: 1 }, 8, ["class", "value"]), s(i(A), { class: o(`${i(g2)}-radio-button`), value: i(F).VARIABLE }, { default: r(() => [...a2[4] || (a2[4] = [k("变量", -1)])]), _: 1 }, 8, ["class", "value"])]), _: 2 }, 1032, ["value", "onUpdate:value", "onChange"])]), _: 2 }, 1024)]), u("div", oe, [a2[5] || (a2[5] = u("span", { class: "title" }, "参数值", -1)), u("div", ie, [0 === e4.type ? (n(), p(i(S), { key: 0, placeholder: "输入参数值", value: e4.value, "onUpdate:value": (a3) => e4.value = a3, maxlength: 20 }, null, 8, ["value", "onUpdate:value"])) : (n(), p(W, { key: 1, variable: e4.value, onOk: (a3) => (function(e5, a4) {
    a4.value = e5;
  })(a3, e4) }, null, 8, ["variable", "onOk"]))])])]), U2.value === l3 ? (n(), p(i(M), { key: 0, size: "18", class: "delete-button", icon: "ant-design:close-circle-filled", onClick: (e5) => (function(e6) {
    b2.value.splice(e6, 1);
  })(l3) }, null, 8, ["onClick"])) : f("", true)], 40, ae))), 128)), u("div", { class: "add-button", onClick: N2 }, [s(i(M), { icon: "ant-design:plus-outlined" }), a2[6] || (a2[6] = k(" 添加跳转参数 ", -1))])], 2));
} }), [["__scopeId", "data-v-1a2506a1"]]);
export {
  se as J,
  ee as P
};
