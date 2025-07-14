(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".mfish-config-wrapper[data-v-1359685a] {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px 6px 12px;\n}\n.mfish-config-wrapper.active[data-v-1359685a] {\n  border-bottom: 1px dashed var(--main-color);\n}\n.mfish-config-wrapper .select[data-v-1359685a] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  margin-right: -16px;\n  height: 16px;\n  width: 16px;\n}\n.mfish-config-wrapper .title[data-v-1359685a] {\n  padding: 0 6px 0 6px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 60px;\n}\n.mfish-config-wrapper .config[data-v-1359685a] {\n  padding-left: 12px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.mfish-config-wrapper .full[data-v-1359685a] {\n  flex: 1;\n}\n.mfish-select-fields-check-wrapper[data-v-e2824c60] {\n  padding: 4px 8px;\n}\n.mfish-table-fields[data-v-4ff39b8d] {\n  display: flex;\n}\n.mfish-config-button[data-v-e48e0292] {\n  display: flex;\n  align-items: center;\n  transition: background 0.8s ease;\n}\n.mfish-config-button .show-title[data-v-e48e0292] {\n  display: none;\n}\n.mfish-config-button[data-v-e48e0292]:hover {\n  color: #ffffff;\n  background: var(--hover-color--);\n}\n.mfish-config-button:hover .show-title[data-v-e48e0292] {\n  display: inline-block;\n}\n[data-theme=\"dark\"] .mfish-table-joins .right-table .placeholder[data-v-84fa3939] {\n  color: rgba(255, 255, 255, 0.2);\n}\n.mfish-table-joins .condition[data-v-84fa3939] {\n  flex-shrink: 0;\n  padding: 0 12px 0 12px;\n}\n.mfish-table-joins .left-table[data-v-84fa3939] {\n  max-width: 180px;\n}\n.mfish-table-joins .right-table[data-v-84fa3939] {\n  display: flex;\n  max-width: 260px;\n}\n.mfish-table-joins .right-table .placeholder[data-v-84fa3939] {\n  color: rgba(0, 0, 0, 0.2);\n}\n.mfish-table-joins .input-select[data-v-84fa3939] {\n  flex-shrink: 0;\n  width: 180px;\n}\n.mfish-filter-variable-select-option[data-v-f3aed5dc] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mfish-filter-value[data-v-1b7847a8] {\n  display: flex;\n  flex-direction: column;\n}\n.mfish-table-aggregate .groupIcon[data-v-3519b7ea] {\n  margin-left: 6px;\n}\n.mfish-table-aggregate .group[data-v-3519b7ea] {\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 6px 0 6px;\n}\n[data-theme=\"dark\"] .mfish-formula-management[data-v-5fa7a95b] {\n  background-color: #121212;\n}\n[data-theme=\"dark\"] .mfish-formula-management .mfish-formula-management-card-item[data-v-5fa7a95b] {\n  background: var(--sider-bg-color);\n}\n[data-theme=\"dark\"] .mfish-formula-management .mfish-formula-management-card-item[data-v-5fa7a95b]:hover {\n  box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.1);\n}\n.mfish-formula-management[data-v-5fa7a95b] {\n  background-color: #fff;\n}\n.mfish-formula-management-left[data-v-5fa7a95b] {\n  padding: 6px;\n}\n.mfish-formula-management-right[data-v-5fa7a95b] {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.mfish-formula-management-card[data-v-5fa7a95b] {\n  margin: 5px 10px 10px 0;\n}\n.mfish-formula-management-card-item[data-v-5fa7a95b] {\n  height: 70px;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  transition: all 0.3s ease-in;\n}\n.mfish-formula-management-card-item[data-v-5fa7a95b]:hover {\n  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.mfish-formula-management-card-item-info[data-v-5fa7a95b] {\n  flex: 1;\n  width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.mfish-formula-management-card-item-info > span[data-v-5fa7a95b] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n[data-theme=\"dark\"] .mfish-select-formula-drop-button .placeholder[data-v-983d37a1] {\n  color: rgba(255, 255, 255, 0.25);\n}\n.mfish-select-formula-drop-button[data-v-983d37a1] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.mfish-select-formula-drop-button .content[data-v-983d37a1] {\n  width: 100%;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mfish-select-formula-drop-button .placeholder[data-v-983d37a1] {\n  color: rgba(0, 0, 0, 0.25);\n}\n.mfish-select-formula-ok-button[data-v-983d37a1] {\n  display: flex;\n  justify-content: flex-end;\n}\n.mfish-formula-compact[data-v-a24bef98] {\n  display: flex;\n}\n.mfish-formula-compact .radio-group[data-v-a24bef98] {\n  display: flex;\n}\n.mfish-formula-compact .radio-group[data-v-a24bef98] > * {\n  display: flex;\n  width: 32px;\n  align-items: center;\n  justify-content: center;\n}\n.mfish-formula-compact .radio-group[data-v-a24bef98] :last-child {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n  border-left: none;\n}\n.mfish-formula-compact .formula-select[data-v-a24bef98] {\n  flex: 1;\n  min-width: 150px;\n}\n.mfish-formula-compact .formula-select[data-v-a24bef98] :only-child {\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n  border-left: none;\n}\n.mfish-formula-compact .formula-select .input-com[data-v-a24bef98] {\n  height: 100%;\n  width: 100%;\n}\n.mfish-formula-compact .formula-select .select-com[data-v-a24bef98] {\n  width: 100%;\n}\n.mfish-formula-compact .formula-select .select-com[data-v-a24bef98] :first-child {\n  border-end-start-radius: 0;\n  border-start-start-radius: 0;\n  border-left: none;\n}\n.mfish-formula-compact .formula-select-show[data-v-a24bef98] {\n  flex: 1;\n  min-width: 150px;\n}\n.mfish-formula-compact .formula-select-show .input-com[data-v-a24bef98] {\n  height: 100%;\n  width: 100%;\n}\n.mfish-formula-config[data-v-cbde54bb] {\n  flex: 1;\n}\n.mfish-formula-config .formula[data-v-cbde54bb] {\n  display: flex;\n}\n.mfish-formula-config .formula .main[data-v-cbde54bb] {\n  flex: 1;\n}\n.mfish-formula-config .param[data-v-cbde54bb] {\n  margin-top: 6px;\n  display: flex;\n  align-items: flex-start;\n  flex: 1;\n}\n.mfish-formula-config .param .icon[data-v-cbde54bb] {\n  margin-top: 8px;\n}\n.mfish-formula-config .param .title[data-v-cbde54bb] {\n  padding: 4px 6px 0 6px;\n  width: 80px;\n  min-width: 80px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mfish-formula-config .add[data-v-cbde54bb] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 6px;\n}\n.mfish-col-modal-slot-tag[data-v-ffce7698] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  margin-right: 8px;\n  align-items: center;\n  justify-content: center;\n  cursor: move;\n}\n[data-theme=\"dark\"] .mfish-api-config[data-v-00b0b721] {\n  box-shadow: 0 0 8px 4px var(--header-bg-color);\n}\n[data-theme=\"dark\"] .mfish-api-config .inner[data-v-00b0b721] {\n  border: 1px dashed #303030;\n  box-shadow: none;\n}\n[data-theme=\"dark\"] .mfish-api-config .btn-bar[data-v-00b0b721] {\n  border-top: 1px solid #565353;\n}\n.mfish-api-config[data-v-00b0b721] {\n  border-radius: 6px;\n  padding: 6px 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.08);\n}\n.mfish-api-config .select[data-v-00b0b721] {\n  position: relative;\n  display: flex;\n  margin: -6px 0 -10px -10px;\n  border-radius: 6px 0 0 0;\n  height: 16px;\n  width: 20px;\n  clip-path: polygon(0 0, 0 100%, 100% 0);\n}\n.mfish-api-config .inner[data-v-00b0b721] {\n  border: 1px dashed #d9d9d9;\n  box-shadow: none;\n}\n.mfish-api-config .inner.active[data-v-00b0b721] {\n  border: 1px dashed var(--main-color);\n}\n.mfish-api-config .btn-bar[data-v-00b0b721] {\n  display: flex;\n  border-top: 1px solid #d9d9d9;\n  margin-top: 6px;\n}\n.mfish-api-config .btn-bar .config-button[data-v-00b0b721] {\n  margin: 6px 6px 0 0;\n  padding: 10px;\n}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defHttp as e } from "@mfish/core/utils/http/axios";
import { debounce as l } from "lodash-es";
import { defineStore as a } from "pinia";
import { defineComponent as t, ref as o, createElementBlock as n, openBlock as u, normalizeStyle as i, normalizeClass as r, unref as s, createCommentVNode as d, createBlock as c, createElementVNode as m, createVNode as f, toDisplayString as p, withCtx as v, renderSlot as y, computed as g, watch as h, createTextVNode as b, Fragment as q, renderList as C, onMounted as k, mergeProps as M, resolveComponent as _, withModifiers as Q, toRaw as T, reactive as N, onBeforeMount as S, createSlots as F, toRefs as w } from "vue";
import { Divider as x, Tooltip as A, Button as I, Dropdown as $, Menu as R, Checkbox as j, Input as B, Cascader as D, Select as O, InputNumber as L, Radio as E, Form as U, DatePicker as z, RangePicker as V, Switch as P, Breadcrumb as G, Descriptions as J, Row as K, Col as W, Card as Y, Drawer as H, Alert as X, Tag as Z } from "ant-design-vue";
import { useRootSetting as ee, useDesign as le, useMessage as ae } from "@mfish/core/hooks";
import { DeleteOutlined as te, CaretRightOutlined as oe, CheckOutlined as ne } from "@ant-design/icons-vue";
import { Icon as ue, IconFont as ie } from "@mfish/core/components/Icon";
import { buildUUID as re } from "@mfish/core/utils/Uuid";
import { ScrollContainer as se } from "@mfish/core/components/Container";
import { DraggableInput as de } from "@mfish/core/components/Draggable";
import { BasicModal as ce, useModalInner as me, useModal as fe } from "@mfish/core/components/Modal";
import { BasicForm as pe, useForm as ve } from "@mfish/core/components/Form";
import { BasicTree as ye } from "@mfish/core/components/Tree";
import { Split as ge } from "@mfish/core/components/Split";
import { ThemeEnum as he } from "@mfish/core/enums";
import { useTable as be, BasicTable as qe } from "@mfish/core/components/Table";
import { useDebounceFn as Ce, useFocus as ke, useClipboard as Me } from "@vueuse/core";
import { CodeEditor as _e, MODE as Qe } from "@mfish/core/components/CodeEditor";
const Te = (l2) => e.get({ url: "/nocode/apiFolder/tree", params: l2 }), Ne = (l2) => e.get({ url: "/nocode/apiFolder", params: l2 });
function Se(l2) {
  return e.download({ url: "/nocode/apiFolder/export", params: l2 });
}
function Fe(l2) {
  return e.post({ url: "/nocode/apiFolder", params: l2 }, { successMessageMode: "message" });
}
function we(l2) {
  return e.put({ url: "/nocode/apiFolder", params: l2 }, { successMessageMode: "message" });
}
function xe(l2) {
  return e.put({ url: "/nocode/apiFolder/drag", params: l2 }, { successMessageMode: "message" });
}
function Ae(l2) {
  return e.delete({ url: `/nocode/apiFolder/${l2}` }, { successMessageMode: "message" });
}
const Ie = (l2) => e.get({ url: "/nocode/apiParams", params: l2 });
function $e(l2) {
  return e.download({ url: "/nocode/apiParams/export", params: l2 });
}
function Re(l2) {
  return e.post({ url: "/nocode/apiParams", params: l2 }, { successMessageMode: "message" });
}
function je(l2) {
  return e.put({ url: "/nocode/apiParams", params: l2 }, { successMessageMode: "message" });
}
function Be(l2) {
  return e.delete({ url: `/nocode/apiParams/${l2}` }, { successMessageMode: "message" });
}
const De = (l2) => e.get({ url: "/nocode/formulaInfo/tree", params: l2 }), Oe = (l2) => e.get({ url: `/nocode/formulaParam/${l2}` }), Le = (l2) => e.get({ url: "/nocode/formulaInfo", params: l2 });
function Ee(l2) {
  return e.get({ url: `/nocode/formulaInfo/${l2}` });
}
function Ue(l2) {
  return e.download({ url: "/nocode/formulaInfo/export", params: l2 });
}
function ze(l2) {
  return e.post({ url: "/nocode/formulaInfo", params: l2 }, { successMessageMode: "message" });
}
function Ve(l2) {
  return e.put({ url: "/nocode/formulaInfo", params: l2 }, { successMessageMode: "message" });
}
function Pe(l2) {
  return e.delete({ url: `/nocode/formulaInfo/${l2}` }, { successMessageMode: "message" });
}
function Ge(l2) {
  return e.delete({ url: "/nocode/formulaInfo/batch/" + l2 }, { successMessageMode: "message" });
}
const Je = () => "/nocode/mfApi/api", Ke = (l2) => e.get({ url: "/nocode/mfApi", params: l2 });
function We(l2) {
  return e.download({ url: "/nocode/mfApi/export", params: l2 });
}
function Ye(l2) {
  return e.post({ url: "/nocode/mfApi", params: l2 }, { successMessageMode: "message" });
}
function He(l2) {
  return e.put({ url: "/nocode/mfApi", params: l2 }, { successMessageMode: "message" });
}
function Xe(l2) {
  return e.delete({ url: `/nocode/mfApi/${l2}` }, { successMessageMode: "message" });
}
function Ze(l2) {
  return e.get({ url: `/nocode/mfApi/${l2}` });
}
function el(l2) {
  return e.post({ url: "/nocode/mfApi/sql", params: l2 }, { errorMessageMode: "message" });
}
function ll(l2, a2) {
  return e.post({ url: `/nocode/mfApi/data?pageNum=${a2.pageNum}&pageSize=${a2.pageSize}`, params: l2 }, { errorMessageMode: "message" });
}
function al(l2, a2) {
  return e.post({ url: `/nocode/mfApi/formulaTest?pageNum=${a2.pageNum}&pageSize=${a2.pageSize}`, params: l2 }, { errorMessageMode: "message" });
}
function tl(l2) {
  return e.post({ url: "/nocode/mfApi/fields", params: l2 }, { errorMessageMode: "message" });
}
const ol = (l2) => e.get({ url: "/nocode/mfApi/headers", params: l2 });
function nl(l2) {
  return e.get({ url: `/nocode/mfApi/fields/${l2}` }, { errorMessageMode: "message" });
}
function ul(l2, a2, t2) {
  return e.get({ url: `/nocode/mfApi/table/${l2}?pageNum=${a2.pageNum}&pageSize=${a2.pageSize}`, params: t2 }, { errorMessageMode: "message" });
}
function il(l2, a2, t2) {
  return e.get({ url: `/nocode/mfApi/api/${l2}`, params: { ...a2, ...t2 } }, { errorMessageMode: "message" });
}
function rl(l2, a2, t2) {
  return e.put({ url: "/nocode/mfApi/field/rename", params: { id: l2, colName: a2, newName: t2 } }, { successMessageMode: "message" });
}
var sl = ((e2) => (e2.error = "error", e2.eq = "=", e2.ne = "!=", e2.gt = ">", e2.ge = ">=", e2.lt = "<", e2.le = "<=", e2.between = "between", e2.isNull = "isNull", e2.isNotNull = "isNotNull", e2.like = "like", e2.notLike = "notLike", e2.likeLeft = "likeLeft", e2.likeRight = "likeRight", e2))(sl || {}), dl = ((e2) => (e2.count = "计数", e2.sum = "求和", e2.avg = "平均", e2.max = "最大", e2.min = "最小", e2))(dl || {}), cl = ((e2) => (e2.formula = "formula", e2.operator = "operator", e2.field = "field", e2.param = "param", e2))(cl || {});
const ml = (e2, a2, t2) => ({ CtrlKeysEnum: { s: l(() => t2(), 150), z: l(() => e2(), 150) }, CtrlShiftKeysEnum: { z: l(() => a2(), 150) } }), fl = a("custom-api", { state: () => ({ sourceId: "", sourceType: 0, tableName: "", tableFields: [], tableList: [], tableFieldsMap: /* @__PURE__ */ new Map(), variables: [], level: 1, fieldsChange: 1, showData: false, showDataLevel: "", formulaMap: /* @__PURE__ */ new Map() }), getters: { getSourceId() {
  return this.sourceId;
}, getSourceType() {
  return this.sourceType;
}, getTableName() {
  return this.tableName;
}, getTableFields() {
  return this.tableFields;
}, getTableList() {
  return this.tableList;
}, getTableFieldsMap() {
  return this.tableFieldsMap;
}, getVariables() {
  return this.variables;
}, getLevel() {
  return this.level;
}, getFieldsChange() {
  return this.fieldsChange;
}, getShowData() {
  return this.showData;
}, getShowDataLevel() {
  return this.showDataLevel;
}, getFormulaMap() {
  return this.formulaMap;
} }, actions: { setSourceId(e2) {
  this.sourceId = e2;
}, setSourceType(e2) {
  this.sourceType = e2;
}, setTableName(e2) {
  e2 && (this.tableName = e2);
}, async setTableFields(e2, l2) {
  return l2 ? (this.tableFields = await ol({ sourceId: e2, tableName: l2, sourceType: this.sourceType }), this.tableFields) : [];
}, setTableList(e2) {
  e2?.list.length > 0 && (this.tableList = e2.list);
}, setLevel(e2) {
  this.level = e2;
}, setFieldsChange(e2) {
  e2 < this.getLevel && this.fieldsChange++;
}, addTableFieldsMap(e2, l2) {
  e2 && this.tableFieldsMap.set(e2, l2);
}, getTableFieldsByName(e2) {
  return e2 && this.tableFieldsMap.get(e2) || [];
}, setShowData(e2) {
  this.showData = e2;
}, setShowDataLevel(e2) {
  this.showDataLevel = e2;
}, async setFormulaMap() {
  if (this.formulaMap && this.formulaMap.size > 0) return;
  (await Le({ pageNum: 1, pageSize: 1e4 })).list.forEach((e2) => {
    const l2 = `${e2.categoryId},${e2.id}`;
    this.formulaMap.set(l2, { ...e2, key: l2 });
  });
}, getFormula(e2) {
  return this.formulaMap.get(e2);
} } }), pl = "__API_SAVE__", vl = "公式结果";
var yl = ((e2) => (e2.QUERY_SQL = "api_config:query_sql", e2.QUERY_DATA = "api_config:query_data", e2))(yl || {});
const gl = async (e2) => {
  const l2 = fl();
  if (!e2?.sqlQuery) return [];
  const a2 = { sourceId: l2.getSourceId, sourceType: l2.getSourceType, sqlQuery: e2.sqlQuery }, t2 = await tl(a2);
  return t2 && t2.forEach((l3) => l3.tableAlias = e2.sourceTable), t2;
}, hl = (e2) => e2 && (e2?.aggregates && e2.aggregates.length > 0 || e2.groups && e2.groups.length > 0 || e2.customColumns && e2.customColumns.length > 0), bl = (e2, l2) => l2 === fl().getLevel && hl(e2), ql = (e2, l2, a2) => {
  e2 && e2.emit("api_config:query_data", { sqlQuery: l2, level: a2 });
}, Cl = (e2) => {
  const l2 = /* @__PURE__ */ new Set(), a2 = (e3, l3) => {
    e3.filters && e3.filters.length > 0 && e3.filters.forEach((e4) => {
      "1" === e4.valueType && e4.value && l3.add(e4.value);
    }), e3.sqlQuery && a2(e3.sqlQuery, l3);
  };
  return a2(e2, l2), l2;
}, kl = async (e2) => {
  const l2 = fl(), a2 = [...Cl(e2)].reduce((e3, l3) => (l3 && (e3[l3] = "1"), e3), {});
  return await el({ sourceId: l2.getSourceId, sourceType: l2.getSourceType, sqlQuery: e2 || {}, params: a2 });
};
function Ml(e2) {
  switch (e2) {
    case "NUMBER":
      return "ant-design:field-number-outlined";
    case "DATE":
      return "ant-design:field-time-outlined";
    default:
      return "ant-design:field-string-outlined";
  }
}
const _l = { class: "title" }, Ql = (e2, l2) => {
  const a2 = e2.__vccOpts || e2;
  for (const [e3, t2] of l2) a2[e3] = t2;
  return a2;
}, Tl = Ql(t({ __name: "ConfigWrapper", props: { iconfont: { type: String, default: void 0 }, icon: { type: String, default: void 0 }, title: { type: String, default: "" }, allowDelete: { type: Boolean, default: true }, full: { type: Boolean, default: false }, highlight: { type: Boolean, default: false }, queryMode: { type: Boolean, default: false } }, emits: ["deleteConfig", "execute"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = ee().getThemeColor, { prefixCls: g2 } = le("config-wrapper"), h2 = re(), b2 = fl(), q2 = o(false);
  function C2(e3) {
    a2("deleteConfig", e3);
  }
  function k2() {
    a2("execute", h2);
  }
  return (l3, a3) => (u(), n("div", { class: r([s(g2), s(b2).getShowData && s(b2).getShowDataLevel === s(h2) ? "active" : ""]), style: i(e2.highlight ? { border: `1px solid ${s(t2)}` } : "") }, [s(b2).getShowData && s(b2).getShowDataLevel === s(h2) ? (u(), n("div", { key: 0, class: "select", style: i({ backgroundColor: s(t2) }) }, [f(s(ue), { icon: "ant-design:check-outlined", color: "#FFFFFF", size: 14 })], 4)) : d("", true), void 0 !== e2.iconfont ? (u(), c(s(ue), { key: 1, color: s(t2), icon: `iconfont:${e2.iconfont}`, size: 14 }, null, 8, ["color", "icon"])) : d("", true), void 0 !== e2.icon ? (u(), c(s(ue), { key: 2, color: s(t2), icon: e2.icon, size: 14 }, null, 8, ["color", "icon"])) : d("", true), m("div", _l, p(e2.title), 1), e2.allowDelete && !e2.queryMode ? (u(), c(s(x), { key: 3, type: "vertical" })) : d("", true), e2.queryMode ? d("", true) : (u(), c(s(A), { key: 4, title: "删除" }, { default: v(() => [e2.allowDelete ? (u(), c(s(I), { key: 0, size: "small", type: "link", onClick: C2 }, { icon: v(() => [f(s(te))]), _: 1 })) : d("", true)]), _: 1 })), m("div", { class: r(["config", e2.full ? "full" : ""]) }, [y(l3.$slots, "config", {}, void 0, true)], 2), f(s(A), { title: "执行" }, { default: v(() => [f(s(I), { size: "small", type: "link", style: { margin: "6px" }, onMouseenter: a3[0] || (a3[0] = (e3) => q2.value = true), onMouseleave: a3[1] || (a3[1] = (e3) => q2.value = false), onClick: k2 }, { icon: v(() => [!s(b2).getShowData || s(b2).getShowDataLevel !== s(h2) || q2.value ? (u(), c(s(oe), { key: 0 })) : (u(), c(s(ne), { key: 1 }))]), _: 1 })]), _: 1 })], 6));
} }), [["__scopeId", "data-v-1359685a"]]), Nl = Ql(t({ __name: "SelectFields", props: { tableFields: { type: Object, require: true, default: void 0 }, fields: { type: Object, require: true, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["fieldChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, d2 = o([]), m2 = o(false), { prefixCls: y2 } = le("select-fields"), k2 = g(() => a2.tableFields ? a2.tableFields?.length < 10 ? 30 * a2.tableFields?.length : 300 : 30), M2 = o(false);
  h(() => a2.tableFields, (e3) => {
    e3 && e3.length > 0 && (!function(e4) {
      d2.value = a2.tableFields?.map((l3) => ({ checked: !!e4?.find((e5) => e5.colName === l3.colName), ...l3 })) || [];
    }(a2.fields || []), m2.value = e3.length === a2.fields?.length);
  }, { immediate: true });
  let _2 = false;
  const Q2 = (e3) => {
    M2.value = e3, !e3 && _2 && (t2("fieldChange", d2.value.filter((e4) => e4.checked).map((e4) => ({ colName: e4.colName, fieldName: e4.fieldName, comment: e4.comment, expression: e4.expression, dataType: e4.dataType, tableAlias: e4.tableAlias, targetType: e4.targetType }))), _2 = false);
  }, T2 = (e3) => {
    m2.value = e3.target.checked, d2.value.forEach((e4) => e4.checked = m2.value), _2 = true;
  }, N2 = (e3) => {
    const l3 = d2.value.find((l4) => l4.colName === e3.target.id);
    l3 && (l3.checked = !l3.checked, _2 = true), m2.value = !d2.value.some((e4) => !e4.checked);
  };
  return (l3, a3) => (u(), c(s($), { trigger: ["click"], onOpenChange: Q2, placement: "bottom", arrow: { pointAtCenter: true } }, { overlay: v(() => [f(s(R), null, { default: v(() => [f(s(R).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: v(() => [(u(), n("div", { class: r(`${s(y2)}-check-wrapper`), key: `all_check_${m2.value}` }, [f(s(j), { checked: m2.value, onChange: T2, disabled: e2.queryMode }, { default: v(() => a3[0] || (a3[0] = [b("全选")])), _: 1, __: [0] }, 8, ["checked", "disabled"])], 2)), f(s(x), { style: { margin: "4px 0" } }), f(s(se), { style: i({ height: `${k2.value}px` }) }, { default: v(() => [(u(true), n(q, null, C(d2.value, (l4) => (u(), n("div", { key: l4.colName + l4.checked, class: r(`${s(y2)}-check-wrapper`) }, [f(s(j), { checked: l4.checked, id: l4.colName, onChange: N2, disabled: e2.queryMode }, { default: v(() => [b(p(l4.colName + (l4.comment ? `[${l4.comment}]` : "")), 1)]), _: 2 }, 1032, ["checked", "id", "disabled"])], 2))), 128))]), _: 1 }, 8, ["style"])]), _: 1 })]), _: 1 })]), default: v(() => [f(s(I), { type: "primary" }, { default: v(() => [a3[1] || (a3[1] = b(" 字段 ")), f(s(ue), { icon: M2.value ? "ant-design:caret-up-outlined" : "ant-design:caret-down-outlined" }, null, 8, ["icon"])]), _: 1, __: [1] })]), _: 1 }));
} }), [["__scopeId", "data-v-e2824c60"]]), Sl = Ql(t({ __name: "TableFields", props: { sqlQuery: { type: Object, require: true, default: void 0 }, configMitt: { type: Object, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["fieldChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, n2 = B, i2 = B.Group, { prefixCls: d2 } = le("table-fields"), m2 = o([]), p2 = fl();
  function y2(e3) {
    ql(a2.configMitt, { ...a2.sqlQuery, aggregates: [], groups: [], joins: [], customColumns: [], filters: [], orders: [], limit: void 0 }, e3);
  }
  function g2(e3) {
    t2("fieldChange", e3);
  }
  return h(() => a2.sqlQuery?.sourceTable, (e3) => {
    e3 && (e3 === p2.getTableName ? (p2.addTableFieldsMap(e3, p2.getTableFields), m2.value = p2.getTableFields) : gl(a2.sqlQuery).then((l3) => {
      p2.addTableFieldsMap(e3, l3), m2.value = l3;
    }));
  }, { immediate: true }), k(() => {
    a2.sqlQuery?.sqlQuery && a2.sqlQuery?.sourceTable && gl(a2.sqlQuery).then((e3) => {
      if (a2.sqlQuery?.sourceTable) {
        p2.addTableFieldsMap(a2.sqlQuery?.sourceTable, e3), m2.value = p2.getTableFieldsMap.get(a2.sqlQuery?.sourceTable) || [];
        const l3 = a2.sqlQuery?.fields?.filter((e4) => m2.value?.find((l4) => l4.colName === e4.colName));
        l3?.length !== a2.sqlQuery?.fields?.length && t2("fieldChange", l3);
      }
    });
  }), (l3, t3) => (u(), c(Tl, { iconfont: "icon-mfish-table", title: "数据源", "allow-delete": false, onExecute: y2, "query-mode": e2.queryMode }, { config: v(() => [f(s(i2), { class: r(s(d2)), compact: "" }, { default: v(() => [f(s(n2), { value: e2.sqlQuery?.sourceTable, disabled: "" }, null, 8, ["value"]), f(Nl, M(l3.$attrs, { "table-fields": m2.value, fields: a2.sqlQuery?.fields, onFieldChange: g2, "query-mode": e2.queryMode }), null, 16, ["table-fields", "fields", "query-mode"])]), _: 1 }, 8, ["class"])]), _: 1 }, 8, ["query-mode"]));
} }), [["__scopeId", "data-v-4ff39b8d"]]), Fl = async (e2, l2) => {
  const a2 = fl(), t2 = [];
  t2.push({ value: l2.sourceTable, label: l2.sourceTable, realValue: l2.sourceTable });
  const o2 = void 0 === e2 && l2.joins?.length ? l2.joins?.length : e2 || 0;
  for (let e3 = 0; e3 < o2; e3++) l2?.joins && l2?.joins[e3].tableAlias && t2.push({ value: l2.joins[e3].tableAlias, label: l2.joins[e3].tableAlias, realValue: l2.joins[e3].table || "" });
  return t2?.map((e3) => ({ ...e3, children: a2.getTableFieldsMap.get(e3.realValue)?.map((e4) => ({ value: e4.colName, label: e4.colName + (e4.comment ? `[${e4.comment}]` : ""), realValue: { ...e4 } })) }));
}, wl = (e2, l2, a2) => {
  for (; ; ) return a2.has(l2) ? (l2.endsWith(`_${e2}`) && (l2 = l2.slice(0, Math.max(0, l2.length - `${e2}`.length - 1))), wl(++e2, `${l2}_${e2}`, a2)) : l2;
}, xl = (e2) => e2?.table && e2.condition?.field?.colName && e2.condition?.joinedField?.colName, Al = (e2) => {
  const l2 = { fields: [], table: "", tableAlias: "", condition: { field: { tableAlias: "结果集" }, operation: "=", joinedField: {} }, type: "left" };
  e2 && e2.push(l2);
}, Il = Ql(t({ __name: "ConfigButton", props: { level: { type: Number, default: 1 }, icon: { type: String, default: void 0 }, iconfont: { type: String, default: void 0 }, title: { type: String, default: "按钮" } }, setup(e2) {
  const l2 = e2, { prefixCls: a2 } = le("config-button"), t2 = ee().getThemeColor, o2 = fl(), n2 = g(() => l2.level < o2.getLevel ? 12 : 14);
  return (l3, d2) => (u(), c(s(I), M(l3.$attrs, { size: "small", shape: "round", class: s(a2), style: { "--hover-color--": s(t2) }, type: "link" }), { icon: v(() => [e2.iconfont ? (u(), c(s(ue), { key: 0, icon: `iconfont:${e2.iconfont}`, style: { "margin-right": "8px" }, size: n2.value }, null, 8, ["icon", "size"])) : (u(), c(s(ue), { key: 1, icon: e2.icon, size: n2.value }, null, 8, ["icon", "size"]))]), default: v(() => [m("span", { class: r(e2.level < s(o2).getLevel ? "show-title" : ""), style: i({ fontSize: `${n2.value}px` }) }, p(e2.title), 7)]), _: 1 }, 16, ["class", "style"]));
} }), [["__scopeId", "data-v-e48e0292"]]), $l = { key: 0, class: "placeholder" }, Rl = { class: "condition" }, jl = t({ __name: "TableJoins", props: { sqlQuery: { type: Object, require: true }, level: { type: Number, default: 1 }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["joinChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, y2 = R.Item, k2 = B, { prefixCls: M2 } = le("table-joins"), N2 = fl(), S2 = o([]), F2 = o([]), w2 = o([]), x2 = ee().getThemeColor, I2 = { left: "左联", inner: "内联", right: "右联", full: "全联" }, j2 = g(() => {
    if (1 === N2.getSourceType || a2.queryMode) return false;
    if (a2.sqlQuery && a2.sqlQuery?.joins) {
      for (const e3 of a2.sqlQuery.joins) if (!xl(e3)) return false;
    }
    return bl(a2.sqlQuery, a2.level);
  });
  h(() => a2.sqlQuery?.joins, (e3) => {
    if (!e3) return S2.value = [], void Y2();
    S2.value = e3, Y2();
  }, { immediate: true }), h(() => N2.getTableFieldsByName(a2.sqlQuery?.sourceTable), () => {
    a2.sqlQuery?.sourceTable && Y2();
  }, { immediate: true });
  const L2 = g(() => {
    if (N2.getTableList.length > 0) {
      const e3 = [];
      return N2.getTableList.forEach((l3) => {
        e3.push({ value: l3.tableName, label: l3.tableName + (l3.tableComment ? `[${l3.tableComment}]` : "") });
      }), e3;
    }
    return [];
  }), E2 = (e3) => F2.value.length > e3 ? F2.value[e3] : [], U2 = (e3) => {
    if (a2.sqlQuery?.joins) return a2.sqlQuery?.joins[e3].table;
  }, z2 = (e3) => {
    if (!a2.sqlQuery?.joins) return [];
    const l3 = a2.sqlQuery?.joins[e3]?.condition?.field;
    if (l3?.tableAlias && l3?.fieldName) {
      const { tableAlias: e4, fieldName: a3 } = l3;
      if (e4 && a3) return [e4, a3];
    }
    return [];
  }, V2 = (e3, l3) => E2(e3).find((e4) => e4.value === l3[0]) ? l3[1] : "", P2 = (e3) => w2.value.length > e3 ? T(w2.value[e3]) : [], G2 = (e3) => {
    if (!a2.sqlQuery?.joins) return [];
    const l3 = a2.sqlQuery?.joins[e3]?.condition?.joinedField;
    return l3?.fieldName ? [l3.fieldName] : [];
  };
  function J2() {
    Al(S2.value);
  }
  function K2(e3) {
    if (a2.sqlQuery?.joins && a2.sqlQuery?.joins.length > 0) {
      const l3 = a2.sqlQuery?.joins[e3];
      xl(l3) && t2("joinChange", [...S2.value]);
    }
  }
  function W2(e3, l3) {
    const t3 = a2.sqlQuery?.joins?.map((e4) => e4.tableAlias);
    t3?.splice(e3), a2.sqlQuery?.sourceTable && t3.unshift(a2.sqlQuery?.sourceTable);
    const o2 = new Set(t3), n2 = wl(0, l3, o2);
    return a2.sqlQuery?.joins && a2.sqlQuery?.joins.length >= e3 && (S2.value[e3].tableAlias = n2), n2;
  }
  function Y2() {
    const e3 = async (e4) => {
      if (!a2.sqlQuery) return;
      const l4 = await Fl(e4, a2.sqlQuery);
      l4 && F2?.value.splice(e4, 1, l4);
    }, l3 = (e4) => {
      const l4 = S2.value[e4];
      if (l4) {
        if (l4.table) {
          const a3 = N2.getTableFieldsMap.get(l4.table)?.map((e5) => ({ value: e5.colName, label: e5.colName + (e5.comment ? `[${e5.comment}]` : ""), realValue: { ...e5 } }));
          return void (a3 && w2?.value.splice(e4, 1, a3));
        }
        w2?.value.splice(e4, 1, []);
      }
    };
    for (let a3 = 0; a3 < S2?.value?.length; a3++) e3(a3).then(() => {
      const e4 = S2.value[a3].condition;
      F2.value[0][0].value === e4?.field.tableAlias && e4?.field && !F2.value[0][0].children?.some((e5) => e5.value === S2.value[a3].condition?.field.colName) && (e4.field = { tableAlias: S2.value[a3].condition?.field.tableAlias });
    }), l3(a3);
  }
  return (l3, o2) => {
    const g2 = _("AInputGroup");
    return u(), n("div", { class: r(s(M2)) }, [(u(true), n(q, null, C(e2.sqlQuery?.joins, (l4, r2) => (u(), c(Tl, { iconfont: "icon-mfish-join", title: "关联", key: r2, "query-mode": e2.queryMode, onDeleteConfig: (e3) => function(e4) {
      S2?.value.splice(e4, 1), t2("joinChange", [...S2.value]);
    }(r2), onExecute: (e3) => function(e4, l5) {
      ql(a2.configMitt, { ...a2.sqlQuery, joins: S2.value.slice(0, l5 + 1), aggregates: [], groups: [], customColumns: [], filters: [], orders: [], limit: void 0 }, e4);
    }(e3, r2) }, { config: v(() => [0 === r2 ? (u(), c(s(k2), { key: 0, class: "left-table", value: e2.sqlQuery?.sourceTable, disabled: "" }, null, 8, ["value"])) : (u(), c(s(k2), { key: 1, class: "left-table", value: l4.condition?.field.tableAlias, disabled: "" }, null, 8, ["value"])), f(s($), { class: "condition", placement: "bottom", arrow: { pointAtCenter: true }, disabled: e2.queryMode }, { overlay: v(() => [f(s(R), { onClick: (e3) => function(e4, l5) {
      l5.type = e4.key;
    }(e3, l4), "selected-keys": [l4.type] }, { default: v(() => [(u(true), n(q, null, C(Object.keys(I2), (e3) => (u(), c(s(y2), { key: e3 }, { default: v(() => [m("div", null, [b(p(I2[e3]) + " ", 1), f(s(ue), { icon: `iconfont:icon-mfish-${e3}-join`, color: s(x2), size: 14 }, null, 8, ["icon", "color"])])]), _: 2 }, 1024))), 128))]), _: 2 }, 1032, ["onClick", "selected-keys"])]), default: v(() => [m("a", { onClick: o2[0] || (o2[0] = Q(() => {
    }, ["prevent"])) }, [b(p(I2[l4.type]) + " ", 1), f(s(ue), { icon: `iconfont:icon-mfish-${l4.type}-join`, color: s(x2), size: 14 }, null, 8, ["icon", "color"])])]), _: 2 }, 1032, ["disabled"]), f(g2, { class: "right-table", compact: "" }, { default: v(() => {
      return [f(s(D), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", value: [U2(r2) || ""], options: L2.value, onChange: (e3) => function(e4, l5) {
        if (e4.length <= 0) return;
        const a3 = e4[0];
        if (l5.table === a3) return;
        l5.table = a3, l5.tableAlias = a3;
        const t4 = (e5) => {
          l5.fields = e5, l5.condition && (l5.condition.joinedField = {});
        };
        if (N2.getTableFieldsMap.has(a3)) return t4(N2.getTableFieldsMap.get(a3)), void Y2();
        ol({ sourceId: fl().getSourceId, tableName: l5.table, sourceType: 0 }).then((e5) => {
          N2.addTableFieldsMap(a3, e5), t4(e5);
        }).finally(() => Y2());
      }(e3, l4) }, { displayRender: v(({ selectedOptions: e3 }) => [e3[0] ? (u(), c(s(A), { key: 1, title: e3[0]?.label }, { default: v(() => [b(p(W2(r2, e3[0]?.value)), 1)]), _: 2 }, 1032, ["title"])) : (u(), n("div", $l, "选择关联表"))]), _: 2 }, 1032, ["disabled", "value", "options", "onChange"]), f(Nl, { "query-mode": e2.queryMode, "table-fields": (t3 = l4.table, t3 && N2.getTableFieldsMap.has(t3) ? N2.getTableFieldsMap.get(t3) : []), fields: l4.fields, onFieldChange: (e3) => function(e4, l5) {
        a2.sqlQuery?.joins && a2.sqlQuery.joins.length > 0 && (S2.value[l5].fields = e4), K2(l5);
      }(e3, r2) }, null, 8, ["query-mode", "table-fields", "fields", "onFieldChange"])];
      var t3;
    }), _: 2 }, 1024), m("span", { class: "condition", style: i({ color: s(x2) }) }, "当", 4), f(s(D), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", options: E2(r2), value: z2(r2), placeholder: `${e2.sqlQuery?.sourceTable}字段`, onChange: (e3, a3) => function(e4, l5, a4) {
      a4.condition && (a4.condition.field = e4[1].realValue, a4.condition.field.tableAlias = e4[0].value, K2(l5));
    }(a3, r2, l4) }, { displayRender: v(({ labels: e3 }) => [f(s(A), { title: V2(r2, e3) }, { default: v(() => [b(p(V2(r2, e3)), 1)]), _: 2 }, 1032, ["title"])]), _: 2 }, 1032, ["disabled", "options", "value", "placeholder", "onChange"]), m("div", Rl, [f(s(ue), { icon: "iconfont:icon-mfish-equals", color: s(x2), size: 14 }, null, 8, ["color"])]), f(s(O), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", value: G2(r2), options: P2(r2), placeholder: `${l4.tableAlias || "关联表"}字段`, onSelect: (e3, a3) => function(e4, l5, a4) {
      a4.condition && (a4.condition.joinedField = e4.realValue, K2(l5));
    }(a3, r2, l4) }, null, 8, ["disabled", "value", "options", "placeholder", "onSelect"])]), _: 2 }, 1032, ["query-mode", "onDeleteConfig", "onExecute"]))), 128)), j2.value ? (u(), c(Il, { key: 0, class: "config-button", title: "关联", iconfont: "icon-mfish-join", level: 0, onClick: J2 })) : d("", true)], 2);
  };
} }), Bl = Ql(jl, [["__scopeId", "data-v-84fa3939"]]), Dl = t({ __name: "TableLimit", props: { sqlQuery: { type: Object, require: true }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["limitChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, n2 = o(1e3);
  function i2(e3) {
    n2.value = e3;
  }
  function r2() {
    t2("limitChange", s(n2));
  }
  function m2() {
    t2("limitChange");
  }
  function p2(e3) {
    ql(a2.configMitt, { ...a2.sqlQuery, limit: n2.value }, e3);
  }
  return h(() => a2.sqlQuery?.limit, (e3) => {
    e3 && (n2.value = e3);
  }, { immediate: true }), (l3, a3) => void 0 !== e2.sqlQuery?.limit ? (u(), c(Tl, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:column-height-outlined", title: "行数", onDeleteConfig: m2, onExecute: p2 }, { config: v(() => [f(s(L), { disabled: e2.queryMode, "default-value": n2.value, "addon-after": "行", step: "10", onChange: i2, onPressEnter: r2, onBlur: r2 }, null, 8, ["disabled", "default-value"])]), _: 1 }, 8, ["query-mode"])) : d("", true);
} }), Ol = [{ field: "id", label: "唯一ID", component: "Input", show: false }, { field: "name", label: "参数名称", component: "Input", dynamicRules: () => [{ required: true, validator: (e2, l2) => /^[\u4E00-\u9FA5\w]*$/.test(l2) ? Promise.resolve() : Promise.reject("错误：参数格式不正确！字符只允许中文、字符、数字、下划线!"), trigger: "blur" }] }, { field: "required", label: "是否必须", component: "RadioButtonGroup", defaultValue: 1, componentProps: { options: [{ label: "是", value: 1 }, { label: "否", value: 0 }] }, required: true }, { field: "defaultValue", label: "默认值", component: "Input" }, { field: "remark", label: "参数描述", component: "InputTextArea" }];
const Ll = Ql({ name: "ApiParamsModal", components: { BasicModal: ce, BasicForm: pe }, emits: ["addSuccess", "updateSuccess", "register", "variableChange"], setup(e2, { emit: l2 }) {
  const a2 = o(true), [t2, { resetFields: n2, setFieldsValue: u2, validate: i2 }] = ve({ name: "model_form_item", labelWidth: 100, baseColProps: { span: 24 }, schemas: Ol, showActionButtonGroup: false, autoSubmitOnEnter: true }), r2 = o(), [d2, { setModalProps: c2, closeModal: m2 }] = me(async (e3) => {
    n2().then(), c2({ confirmLoading: false, width: "600px" }), a2.value = !!e3?.isUpdate, s(a2) && (r2.value = e3.index, u2({ ...e3.param }).then());
  }), f2 = fl(), p2 = g(() => s(a2) ? "编辑参数" : "新增参数"), { createMessage: v2 } = ae();
  return { registerModal: d2, registerForm: t2, getTitle: p2, handleSubmit: async function() {
    const e3 = (e4, l3) => {
      if (l3.some((l4) => l4.name === e4)) {
        const e5 = "错误：参数名称不允许重复!";
        throw v2.error(e5), new Error(e5);
      }
    };
    try {
      const t3 = await i2();
      if (s(a2)) {
        const a3 = [...f2.getVariables];
        a3.splice(r2.value, 1), e3(t3.name, a3), l2("updateSuccess", r2.value, t3);
      } else e3(t3.name, f2.getVariables), l2("addSuccess", t3);
      l2("variableChange", t3), m2();
    } catch (e4) {
    }
  } };
} }, [["render", function(e2, l2, a2, t2, o2, n2) {
  const i2 = _("BasicForm"), r2 = _("BasicModal");
  return u(), c(r2, M(e2.$attrs, { onRegister: t2.registerModal, title: t2.getTitle, onOk: t2.handleSubmit }), { default: v(() => [f(i2, { onRegister: t2.registerForm, onSubmit: t2.handleSubmit }, null, 8, ["onRegister", "onSubmit"])]), _: 1 }, 16, ["onRegister", "title", "onOk"]);
}]]), El = { key: 0 }, Ul = Ql(t({ __name: "FilterVariable", props: { value: { type: String }, queryMode: { type: Boolean, default: false } }, emits: ["variableChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, y2 = O.Option, g2 = ee().getThemeColor, { prefixCls: k2 } = le("filter-variable"), [M2, { openModal: _2 }] = fe(), T2 = fl(), N2 = o();
  h(() => a2.value, (e3) => {
    N2.value = e3;
  }, { immediate: true });
  const S2 = (e3, { attrs: l3 }) => l3.vnodes;
  function F2() {
    _2(true, { isUpdate: false });
  }
  function w2(e3) {
    T2.getVariables.push(e3);
  }
  function A2(e3, l3) {
    T2.getVariables[e3] = l3;
  }
  function I2(e3) {
    t2("variableChange", e3);
  }
  function $2(e3) {
    N2.value = e3.name, t2("variableChange", e3.name);
  }
  return (l3, a3) => (u(), n(q, null, [f(s(O), { value: N2.value, "onUpdate:value": a3[0] || (a3[0] = (e3) => N2.value = e3), onChange: I2, disabled: e2.queryMode }, { dropdownRender: v(({ menuNode: e3 }) => [f(S2, { vnodes: e3 }, null, 8, ["vnodes"]), f(s(x), { style: { margin: "4px 0" } }), m("div", { style: { padding: "4px 8px", cursor: "pointer" }, onClick: F2 }, [f(s(ue), { icon: "ant-design:plus-outlined", color: s(g2) }, null, 8, ["color"]), m("span", { style: i(`color:${s(g2)};margin-left:6px`) }, "增加变量参数", 4)])]), default: v(() => [(u(true), n(q, null, C(s(T2).getVariables, (l4, a4) => (u(), c(s(y2), { label: l4.name, value: l4.name, key: a4 }, { default: v(() => [m("div", { class: r(`${s(k2)}-select-option`) }, [b(p(l4.name) + " ", 1), m("div", null, p(l4.remark), 1), e2.queryMode ? d("", true) : (u(), n("div", El, [f(s(ue), { icon: "ant-design:edit-outlined", color: s(g2), onClick: Q((e3) => function(e4, l5) {
    _2(true, { index: e4, param: l5, isUpdate: true });
  }(a4, l4), ["stop"]) }, null, 8, ["color", "onClick"]), f(s(x), { type: "vertical" }), f(s(ue), { icon: "ant-design:delete-outlined", color: s(g2), onClick: Q((e3) => function(e4) {
    T2.getVariables.splice(e4, 1), T2.getVariables.some((e5) => e5.name === N2.value) || (N2.value = "");
  }(a4), ["stop"]) }, null, 8, ["color", "onClick"])]))], 2)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["value", "disabled"]), f(Ll, { onRegister: s(M2), onAddSuccess: w2, onUpdateSuccess: A2, onVariableChange: $2 }, null, 8, ["onRegister"])], 64));
} }), [["__scopeId", "data-v-f3aed5dc"]]), zl = t({ __name: "TableField", props: { tableFields: { type: Object }, value: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["change"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, n2 = o({ dataType: "STRING" }), i2 = o([]), r2 = ee().getThemeColor, d2 = o();
  function m2(e3) {
    d2.value = Ml(e3);
  }
  return h(() => a2.value, (e3) => {
    e3 && (e3.tableAlias && e3.colName ? (n2.value = e3, i2.value = [e3.tableAlias, e3.colName + (e3.comment ? `[${e3.comment}]` : "")], m2(e3.dataType)) : (i2.value = [], n2.value = { dataType: "STRING" }));
  }, { immediate: true }), (l3, a3) => (u(), c(s(D), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, "option-filter-prop": "label", options: e2.tableFields, value: i2.value, "onUpdate:value": a3[0] || (a3[0] = (e3) => i2.value = e3), placeholder: "选择字段", onChange: a3[1] || (a3[1] = (e3, l4) => function(e4) {
    if (e4 && 2 === e4.length) {
      const l5 = e4[0].value, a4 = e4[1].realValue;
      i2.value = [l5, e4[1].value], n2.value = a4, n2.value && (n2.value.tableAlias = l5), m2(n2.value?.dataType), t2("change", { ...n2.value });
    }
  }(l4)) }, { displayRender: v(({ labels: e3 }) => [f(s(A), { title: `${e3[0]} / ${e3[1]}` }, { default: v(() => [f(s(ue), { icon: d2.value, color: s(r2) }, null, 8, ["icon", "color"]), b(" " + p(`${e3[0]} / ${e3[1]}`), 1)]), _: 2 }, 1032, ["title"])]), _: 1 }, 8, ["disabled", "options", "value"]));
} }), Vl = Ql(t({ __name: "FilterValue", props: { fieldType: { type: String, default: "STRING" }, valueType: { type: String, default: "0" }, operator: { type: String, default: "" }, tableFields: { type: Array, default: () => [] }, queryMode: { type: Boolean, default: false } }, emits: ["typeChange", "variableChange", "fieldChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = B, m2 = E.Group, p2 = E.Button, y2 = U.ItemRest, { prefixCls: g2 } = le("filter-value"), q2 = o("0"), C2 = fl();
  function k2() {
    t2("typeChange", q2.value);
  }
  function _2(e3) {
    const l3 = C2.getVariables.find((l4) => l4.name === e3);
    l3 && t2("variableChange", e3, l3.required);
  }
  function Q2(e3) {
    e3.tableAlias && e3.colName && t2("fieldChange", e3);
  }
  return h(() => a2.valueType, (e3) => {
    e3 && (q2.value = e3);
  }, { immediate: true }), (l3, a3) => (u(), n("div", { class: r(s(g2)) }, [f(s(m2), { size: "small", value: q2.value, "onUpdate:value": a3[0] || (a3[0] = (e3) => q2.value = e3), "button-style": "solid", onChange: k2, disabled: e2.queryMode }, { default: v(() => [f(s(p2), { value: "0" }, { default: v(() => a3[1] || (a3[1] = [b("常量")])), _: 1, __: [1] }), f(s(p2), { value: "1" }, { default: v(() => a3[2] || (a3[2] = [b("变量")])), _: 1, __: [2] }), f(s(p2), { value: "2" }, { default: v(() => a3[3] || (a3[3] = [b("字段")])), _: 1, __: [3] })]), _: 1 }, 8, ["value", "disabled"]), "0" === q2.value ? (u(), c(s(y2), { key: 0 }, { default: v(() => ["NUMBER" === e2.fieldType ? (u(), c(s(L), M({ key: 0 }, l3.$attrs, { disabled: e2.queryMode }), null, 16, ["disabled"])) : "DATE" === e2.fieldType && "between" !== e2.operator ? (u(), c(s(z), M({ key: 1, disabled: e2.queryMode }, l3.$attrs, { "show-time": true, "value-format": "YYYY-MM-DD HH:mm:ss" }), null, 16, ["disabled"])) : "DATE" === e2.fieldType && "between" === e2.operator ? (u(), c(s(V), M({ key: 2, disabled: e2.queryMode }, l3.$attrs, { "show-time": true, placeholder: ["开始时间", "结束时间"], "value-format": "YYYY-MM-DD HH:mm:ss" }), null, 16, ["disabled"])) : (u(), c(s(i2), M({ key: 3 }, l3.$attrs, { disabled: e2.queryMode }), null, 16, ["disabled"]))]), _: 1 })) : d("", true), "1" === q2.value ? (u(), c(s(y2), { key: 1 }, { default: v(() => [f(Ul, { "query-mode": e2.queryMode, value: l3.$attrs.value, onVariableChange: _2 }, null, 8, ["query-mode", "value"])]), _: 1 })) : d("", true), "2" === q2.value ? (u(), c(s(y2), { key: 2 }, { default: v(() => [f(zl, { "query-mode": e2.queryMode, "table-fields": e2.tableFields, value: l3.$attrs.value, onChange: Q2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 })) : d("", true)], 2));
} }), [["__scopeId", "data-v-1b7847a8"]]), Pl = t({ __name: "FilterModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = U.Item, n2 = N({ field: void 0, operator: "", value: void 0 }), i2 = o(), r2 = o([]), m2 = N({ field: { dataType: "STRING" }, type: "1", valueType: "0", required: true }), p2 = o([]), y2 = o(true), g2 = o(), h2 = { STRING: [{ label: "是", value: "eq" }, { label: "不是", value: "ne" }, { label: "包含", value: "like" }, { label: "不包含", value: "notLike" }, { label: "以开始", value: "likeLeft" }, { label: "以结束", value: "likeRight" }, { label: "为空", value: "isNull" }, { label: "不为空", value: "isNotNull" }], NUMBER: [{ label: "等于", value: "eq" }, { label: "不等于", value: "ne" }, { label: "大于", value: "gt" }, { label: "大于等于", value: "ge" }, { label: "小于", value: "lt" }, { label: "小于等于", value: "le" }, { label: "包含", value: "like" }, { label: "不包含", value: "notLike" }, { label: "以开始", value: "likeLeft" }, { label: "以结束", value: "likeRight" }, { label: "为空", value: "isNull" }, { label: "不为空", value: "isNotNull" }], DATE: [{ label: "晚于", value: "gt" }, { label: "晚于等于", value: "ge" }, { label: "早于", value: "lt" }, { label: "早于等于", value: "le" }, { label: "为空", value: "isNull" }, { label: "不为空", value: "isNotNull" }] }, [b2, { setModalProps: q2, closeModal: C2 }] = me(async (e3) => {
    if (q2({ confirmLoading: false, width: "600px" }), Fl(void 0, e3.sqlQuery).then((e4) => {
      r2.value = e4;
    }), e3.isUpdate) return m2.field = e3.field, m2.valueType = e3.valueType, m2.required = e3.required, _2(m2.field?.dataType), g2.value = e3.index, n2.field = [e3.field.tableAlias, e3.field.colName], n2.operator = e3.operator, e3.operator === sl.between ? n2.value = e3.value ? e3.value.split(",") : [] : n2.value = e3.value ?? "", e3.operator === sl.isNull || e3.operator === sl.isNotNull ? (y2.value = false, n2.value = "") : y2.value = true, void ("2" === e3.valueType && e3.value && (n2.value = JSON.parse(e3.value)));
    n2.field = [], n2.value = void 0, n2.operator = "", g2.value = void 0, m2.field = {}, m2.valueType = "0", m2.required = true;
  });
  function k2(e3) {
    if (e3.tableAlias && e3.colName) {
      const l3 = e3.tableAlias;
      "0" === m2.valueType && e3.dataType !== m2.field?.dataType && (n2.value = void 0), n2.field = [l3, e3.colName], m2.field = e3, m2.field && (m2.field.tableAlias = l3), _2(m2.field?.dataType), p2.value.some((e4) => n2.operator === e4.value) || (n2.operator = "");
    }
  }
  function _2(e3) {
    e3 && (p2.value = h2[e3]);
  }
  function Q2(e3) {
    e3 === sl.isNull || e3 === sl.isNotNull ? (y2.value = false, n2.value = "") : y2.value = true, "DATE" === m2.field?.dataType && (e3 === sl.between ? n2.value = n2.value ? `${n2.value}`.split(",") : [] : n2.value = n2.value ? `${n2.value}`.split(",")[0] : "");
  }
  async function T2() {
    try {
      const e3 = await i2.value?.validateFields();
      C2(), a2("submit", g2.value, { ...m2, name: `${m2.field?.colName} ${n2.operator ? p2.value.find((e4) => e4.value === n2.operator)?.label : ""}${y2.value ? ` ${void 0 === n2.value ? "''" : "0" === m2.valueType ? "" === n2.value ? "''" : n2.value : "2" === m2.valueType ? n2.value?.colName : `#{${n2.value}}`}` : ""}`, operator: e3?.operator, value: void 0 === e3?.value ? "" : "2" === m2.valueType ? JSON.stringify(e3.value) : `${e3.value}` });
    } catch (e3) {
    }
  }
  function S2(e3) {
    n2.value = void 0, m2.valueType = e3;
  }
  function F2(e3, l3) {
    n2.value = e3, m2.required = l3;
  }
  function w2(e3) {
    n2.value = e3;
  }
  return (l3, a3) => (u(), c(s(ce), M(l3.$attrs, { onRegister: s(b2), title: "设置过滤条件", onOk: T2 }), { default: v(() => [f(s(U), { ref_key: "formRef", ref: i2, model: n2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: v(() => [f(s(t2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: v(() => [f(zl, { "query-mode": e2.queryMode, "table-fields": r2.value, value: m2.field, onChange: k2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 }), f(s(t2), { label: "条件", name: "operator", rules: [{ required: true, message: "请选择条件！" }] }, { default: v(() => [f(s(O), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", value: n2.operator, "onUpdate:value": a3[0] || (a3[0] = (e3) => n2.operator = e3), options: p2.value, placeholder: "选择条件", onSelect: Q2 }, null, 8, ["disabled", "value", "options"])]), _: 1 }), y2.value ? (u(), c(s(t2), { key: 0, label: "值", name: "value", rules: [{ required: "STRING" !== m2.field?.dataType, message: "请选择值！" }] }, { default: v(() => [f(Vl, { "query-mode": e2.queryMode, placeholder: "输入值", value: n2.value, "onUpdate:value": a3[1] || (a3[1] = (e3) => n2.value = e3), "value-type": m2.valueType, "field-type": m2.field?.dataType, operator: n2.operator, "table-fields": r2.value, onTypeChange: S2, onVariableChange: F2, onFieldChange: w2 }, null, 8, ["query-mode", "value", "value-type", "field-type", "operator", "table-fields"])]), _: 1 }, 8, ["rules"])) : d("", true)]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), Gl = t({ __name: "TableFilter", props: { sqlQuery: { type: Object }, level: { type: Number, default: 1 }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["filterChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = o([]), r2 = g(() => void 0 === a2.sqlQuery?.filters && bl(a2.sqlQuery, a2.level) && !a2.queryMode);
  h(() => a2.sqlQuery?.filters, (e3) => {
    i2.value = e3 ? [...e3] : [];
  }, { immediate: true });
  const m2 = ee().getThemeColor, p2 = o([{ name: "添加", icon: "icon-mfish-left-bracket", color: m2, value: { type: "0", name: "(", value: "(" } }, { name: "添加", icon: "icon-mfish-right-bracket", color: m2, value: { type: "0", name: ")", value: ")" } }]), y2 = { type: "0", slot: true, hideClose: true, value: "and" }, [b2, { openModal: q2 }] = fe();
  function C2() {
    t2("filterChange");
  }
  function k2() {
    t2("filterChange", []);
  }
  function M2() {
    q2(true, { sqlQuery: a2.sqlQuery, isUpdate: false });
  }
  function _2(e3, l3) {
    "0" !== l3.type && q2(true, { index: e3, ...l3, sqlQuery: a2.sqlQuery, isUpdate: true });
  }
  function T2(e3, l3) {
    void 0 === e3 ? i2.value ? (i2.value?.findIndex((e4) => "1" === e4.type) >= 0 && i2.value.push(y2), i2.value.push(l3)) : i2.value = [l3, y2] : i2.value && (i2.value[e3] = l3), t2("filterChange", i2.value ? [...i2.value] : []);
  }
  function N2(e3, l3) {
    if ("0" === l3.type) return;
    let a3 = false;
    const t3 = (e4) => {
      const l4 = i2.value[e4];
      return !!l4 && ("0" === l4.type && ("and" === l4.value || "or" === l4.value) && (i2.value.splice(e4, 1), true));
    };
    for (let l4 = e3 - 1; l4 >= 0; l4--) if (t3(l4)) return void (a3 = true);
    if (!a3) {
      for (let l4 = e3; l4 < i2.value.length; l4++) if (t3(l4)) return;
    }
  }
  function S2(e3) {
    t2("filterChange", [...e3]);
  }
  function F2(e3) {
    ql(a2.configMitt, { ...a2.sqlQuery, filters: i2.value, aggregates: [], groups: [], customColumns: [], orders: [], limit: void 0 }, e3);
  }
  return (l3, a3) => (u(), n("div", null, [void 0 !== e2.sqlQuery?.filters ? (u(), c(Tl, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:filter-outlined", title: "过滤", onDeleteConfig: C2, full: true, onExecute: F2 }, { config: v(() => [f(s(de), { "query-mode": e2.queryMode, items: i2.value, menus: p2.value, "add-title": "添加过滤条件", onAddBlock: M2, onEditBlock: _2, onCloseBlock: N2, onDragChange: S2 }, { tag: v(({ index: l4, element: a4 }) => [f(s(P), { disabled: e2.queryMode, style: { "margin-right": "8px" }, checked: a4?.value, "checked-children": "且", "un-checked-children": "或", "checked-value": "and", "un-checked-value": "or", size: "small", onChange: (e3) => function(e4, l5) {
    i2.value && i2.value?.length > l5 && (i2.value[l5].value = e4, setTimeout(() => {
      i2.value && t2("filterChange", [...i2.value]);
    }, 300));
  }(e3, l4) }, null, 8, ["disabled", "checked", "onChange"])]), _: 1 }, 8, ["query-mode", "items", "menus"])]), _: 1 }, 8, ["query-mode"])) : d("", true), r2.value ? (u(), c(Il, { key: 1, class: "config-button", title: "过滤", icon: "ant-design:filter-outlined", level: 0, onClick: Q(k2, ["prevent"]) })) : d("", true), f(Pl, { "query-mode": e2.queryMode, onRegister: s(b2), onSubmit: T2 }, null, 8, ["query-mode", "onRegister"])]));
} }), Jl = t({ __name: "AggregateModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = U.Item, n2 = N({ field: void 0, aggFunc: "" }), i2 = o(), r2 = o([]), m2 = N({ field: { dataType: "STRING" } }), p2 = Object.keys(dl).map((e3) => ({ value: e3, label: dl[e3] })), y2 = o(true), g2 = o(), [h2, { setModalProps: b2, closeModal: q2 }] = me(async (e3) => {
    if (b2({ confirmLoading: false, width: "600px" }), Fl(void 0, e3.sqlQuery).then((e4) => {
      for (let l3 = 0; l3 < e4.length; l3++) {
        const a3 = e4[l3];
        a3.children ? (a3.children = a3.children?.filter((e5) => "NUMBER" === e5.realValue.dataType), 0 === a3.children?.length && e4.splice(l3--, 1)) : e4.splice(l3--, 1);
      }
      r2.value = e4;
    }), e3.isUpdate) return n2.field = [e3.field.tableAlias, e3.field.colName], n2.aggFunc = e3.aggFunc, m2.field = e3.field, y2.value = dl[n2.aggFunc] !== dl.count, void (g2.value = e3.index);
    n2.field = [], n2.aggFunc = "", g2.value = void 0, y2.value = true, m2.field = {};
  });
  function C2(e3) {
    e3.tableAlias && e3.colName && (n2.field = [e3.tableAlias, e3.colName], m2.field = e3);
  }
  function k2(e3) {
    y2.value = dl[e3] !== dl.count;
  }
  async function _2() {
    try {
      const e3 = await i2.value?.validateFields();
      q2(), a2("submit", g2.value, { ...m2, name: dl[n2.aggFunc] + (dl[n2.aggFunc] === dl.count ? "" : `(${m2.field?.colName})`), aggFunc: e3.aggFunc });
    } catch (e3) {
    }
  }
  return (l3, a3) => (u(), c(s(ce), M(l3.$attrs, { onRegister: s(h2), title: "选择聚合字段", onOk: _2 }), { default: v(() => [f(s(U), { ref_key: "formRef", ref: i2, model: n2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: v(() => [f(s(t2), { label: "聚合方式", name: "aggFunc", rules: [{ required: true, message: "请选择聚合方式！" }] }, { default: v(() => [f(s(O), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, "option-filter-prop": "label", value: n2.aggFunc, "onUpdate:value": a3[0] || (a3[0] = (e3) => n2.aggFunc = e3), options: s(p2), placeholder: "选择聚合方式", onSelect: k2 }, null, 8, ["disabled", "value", "options"])]), _: 1 }), y2.value ? (u(), c(s(t2), { key: 0, label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: v(() => [f(zl, { "query-mode": e2.queryMode, "table-fields": r2.value, value: m2.field, onChange: C2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 })) : d("", true)]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), Kl = t({ __name: "GroupModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = U.Item, n2 = N({ field: void 0 }), i2 = N({ field: { dataType: "STRING" } }), r2 = o(), d2 = o([]), m2 = o(), [p2, { setModalProps: y2, closeModal: g2 }] = me(async (e3) => {
    if (y2({ confirmLoading: false, width: "600px" }), Fl(void 0, e3.sqlQuery).then((e4) => {
      d2.value = e4;
    }), e3.isUpdate) return n2.field = [e3.field.tableAlias, e3.field.colName], i2.field = e3.field, void (m2.value = e3.index);
    n2.field = [], m2.value = void 0, i2.field = {};
  });
  function h2(e3) {
    e3.tableAlias && e3.colName && (n2.field = [e3.tableAlias, e3.colName], i2.field = e3);
  }
  async function b2() {
    try {
      await r2.value?.validateFields(), g2(), a2("submit", m2.value, { ...i2, name: i2.field?.colName });
    } catch (e3) {
    }
  }
  return (l3, a3) => (u(), c(s(ce), M(l3.$attrs, { onRegister: s(p2), title: "选择分组字段", onOk: b2 }), { default: v(() => [f(s(U), { ref_key: "formRef", ref: r2, model: n2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: v(() => [f(s(t2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: v(() => [f(zl, { "query-mode": e2.queryMode, "table-fields": d2.value, value: i2.field, onChange: h2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), Wl = Ql(t({ __name: "TableAggregate", props: { sqlQuery: { type: Object }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["aggregateChange", "groupChange", "deleteAggregate"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = ee().getThemeColor, { prefixCls: p2 } = le("table-aggregate"), y2 = o(), g2 = o(), [b2, { openModal: q2 }] = fe(), [C2, { openModal: k2 }] = fe();
  async function M2() {
    t2("deleteAggregate");
  }
  function _2() {
    q2(true, { sqlQuery: a2.sqlQuery, isUpdate: false });
  }
  function Q2(e3, l3) {
    void 0 === e3 ? y2.value ? y2.value.push(l3) : y2.value = [l3] : y2.value && (y2.value[e3] = l3), t2("aggregateChange", y2.value ? [...y2.value] : []);
  }
  function T2(e3, l3) {
    q2(true, { index: e3, ...l3, sqlQuery: a2.sqlQuery, isUpdate: true });
  }
  function N2(e3) {
    t2("aggregateChange", [...e3]);
  }
  function S2() {
    k2(true, { sqlQuery: a2.sqlQuery, isUpdate: false });
  }
  function F2(e3, l3) {
    void 0 === e3 ? g2.value ? g2.value.push(l3) : g2.value = [l3] : g2.value && (g2.value[e3] = l3), t2("groupChange", g2.value ? [...g2.value] : []);
  }
  function w2(e3, l3) {
    k2(true, { index: e3, ...l3, sqlQuery: a2.sqlQuery, isUpdate: true });
  }
  function x2(e3) {
    t2("groupChange", [...e3]);
  }
  function A2(e3) {
    ql(a2.configMitt, { ...a2.sqlQuery, aggregates: y2.value, groups: g2.value, orders: [], limit: void 0 }, e3);
  }
  return h(() => a2.sqlQuery?.aggregates, (e3) => {
    y2.value = e3 ? [...e3] : [];
  }, { immediate: true }), h(() => a2.sqlQuery?.groups, (e3) => {
    g2.value = e3 ? [...e3] : [];
  }, { immediate: true }), (l3, a3) => (u(), n("div", { class: r(s(p2)) }, [void 0 !== e2.sqlQuery?.aggregates ? (u(), c(Tl, { key: 0, "query-mode": e2.queryMode, iconfont: "icon-mfish-sum", title: "聚合", onDeleteConfig: M2, onExecute: A2, full: true }, { config: v(() => [f(s(de), { "query-mode": e2.queryMode, items: y2.value, "add-title": "添加聚合指标", onAddBlock: _2, onEditBlock: T2, onDragChange: N2 }, null, 8, ["query-mode", "items"]), f(s(ue), { class: "groupIcon", icon: "ant-design:group-outlined", color: s(i2), style: { "font-size": "14px" } }, null, 8, ["color"]), a3[0] || (a3[0] = m("div", { class: "group" }, "分组", -1)), f(s(de), { "query-mode": e2.queryMode, items: g2.value, "add-title": "添加分组指标", onAddBlock: S2, onEditBlock: w2, onDragChange: x2 }, null, 8, ["query-mode", "items"])]), _: 1 }, 8, ["query-mode"])) : d("", true), f(Jl, { "query-mode": e2.queryMode, onRegister: s(b2), onSubmit: Q2 }, null, 8, ["query-mode", "onRegister"]), f(Kl, { "query-mode": e2.queryMode, onRegister: s(C2), onSubmit: F2 }, null, 8, ["query-mode", "onRegister"])], 2));
} }), [["__scopeId", "data-v-3519b7ea"]]), Yl = "其他", Hl = t({ __name: "OrderModal", emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = U.Item, n2 = N({ field: void 0 }), i2 = N({ field: { dataType: "STRING" }, order: "ASC" }), r2 = o(), d2 = o([]), m2 = o(), p2 = fl(), [y2, { setModalProps: g2, closeModal: h2 }] = me(async (e3) => {
    if (g2({ confirmLoading: false, width: "600px" }), hl(e3.sqlQuery) ? tl({ sourceId: p2.getSourceId, sourceType: p2.getSourceType, sqlQuery: e3.sqlQuery }).then((e4) => {
      d2.value = [{ value: Yl, label: Yl, realValue: Yl, children: e4.map((e5) => ({ value: e5.colName, label: e5.colName + (e5.comment ? `[${e5.comment}]` : ""), realValue: { ...e5 } })) }];
    }) : d2.value = await Fl(void 0, e3.sqlQuery), e3.isUpdate) return n2.field = [e3.field.tableAlias, e3.field.colName], i2.field = e3.field, void (m2.value = e3.index);
    n2.field = [], m2.value = void 0, i2.field = {};
  });
  function b2(e3) {
    e3.tableAlias && e3.colName && (n2.field = [e3.tableAlias, e3.colName], i2.field = e3);
  }
  async function q2() {
    try {
      await r2.value?.validateFields(), h2(), i2.field.tableAlias === Yl && (i2.field.tableAlias = ""), a2("submit", m2.value, { ...i2, name: i2.field?.colName });
    } catch (e3) {
    }
  }
  return (e3, l3) => (u(), c(s(ce), M(e3.$attrs, { onRegister: s(y2), title: "选择排序字段", onOk: q2 }), { default: v(() => [f(s(U), { ref_key: "formRef", ref: r2, model: n2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: v(() => [f(s(t2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: v(() => [f(zl, { "table-fields": d2.value, value: i2.field, onChange: b2 }, null, 8, ["table-fields", "value"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), Xl = t({ __name: "TableOrder", props: { sqlQuery: { type: Object, default: void 0 }, configMitt: { type: Object, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["orderChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = o([]), [r2, { openModal: m2 }] = fe();
  function p2() {
    m2(true, { sqlQuery: a2.sqlQuery, isUpdate: false });
  }
  function y2(e3, l3) {
    l3.order = "ASC" === l3.order ? "DESC" : "ASC", q2(e3, l3);
  }
  function g2(e3) {
    t2("orderChange", [...e3]);
  }
  function b2() {
    t2("orderChange");
  }
  function q2(e3, l3) {
    void 0 === e3 ? i2.value ? i2.value.push(l3) : i2.value = [l3] : i2.value && (i2.value[e3] = l3), t2("orderChange", i2.value ? [...i2.value] : []);
  }
  function C2(e3) {
    ql(a2.configMitt, { ...a2.sqlQuery, orders: i2.value, limit: void 0 }, e3);
  }
  return h(() => a2.sqlQuery?.orders, (e3) => {
    i2.value = e3 || [];
  }, { immediate: true }), (l3, a3) => (u(), n("div", null, [void 0 !== e2.sqlQuery?.orders ? (u(), c(Tl, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:sort-ascending-outlined", title: "排序", onDeleteConfig: b2, full: true, onExecute: C2 }, { config: v(() => [f(s(de), { "query-mode": e2.queryMode, items: i2.value, "add-title": "添加排序指标", onAddBlock: p2, onEditBlock: y2, onDragChange: g2 }, { tagIcon: v(({ element: e3 }) => [f(s(ue), { style: { "font-weight": "bold", "font-size": "20px" }, icon: "ASC" === e3.order ? "ant-design:sort-descending-outlined" : "ant-design:sort-ascending-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["query-mode", "items"])]), _: 1 }, 8, ["query-mode"])) : d("", true), f(Hl, { onRegister: s(r2), onSubmit: q2 }, null, 8, ["onRegister"])]));
} }), Zl = t({ __name: "FieldColModal", emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = U.Item, n2 = N({ field: void 0 }), i2 = o(), r2 = o(), d2 = o([]), m2 = o(), [p2, { setModalProps: y2, closeModal: g2 }] = me(async (e3) => {
    if (y2({ confirmLoading: false, width: "600px" }), Fl(void 0, e3.sqlQuery).then((e4) => {
      d2.value = e4;
    }), e3.isUpdate) {
      const l3 = e3.field.value;
      return n2.field = [l3.tableAlias, l3.colName], i2.value = l3, void (m2.value = e3.index);
    }
    n2.field = [], m2.value = void 0, i2.value = {};
  });
  function h2(e3) {
    e3.tableAlias && e3.colName && (n2.field = [e3.tableAlias, e3.colName], i2.value = e3);
  }
  async function b2() {
    try {
      await r2.value?.validateFields(), g2(), a2("submit", m2.value, { type: cl.field, value: i2.value, name: i2.value?.colName });
    } catch (e3) {
    }
  }
  return (e3, l3) => (u(), c(s(ce), M(e3.$attrs, { onRegister: s(p2), title: "选择字段", onOk: b2 }), { default: v(() => [f(s(U), { ref_key: "formRef", ref: r2, model: n2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: v(() => [f(s(t2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: v(() => [f(zl, { "table-fields": d2.value, value: i2.value, onChange: h2 }, null, 8, ["table-fields", "value"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), ea = ["onClick"], la = ["onClick"], aa = Ql(t({ __name: "FormulaManagement", props: { isShow: { type: Boolean, default: false }, curKey: { type: String, default: "" } }, emits: ["select"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, y2 = G.Item, k2 = J.Item, M2 = o([]), { prefixCls: _2 } = le("formula-management"), Q2 = o(null), T2 = ee().getThemeColor, N2 = o([]), F2 = o(false), w2 = o([]), x2 = o(), I2 = o(0.4), $2 = o([]), R2 = o(), j2 = g(() => {
    if ("" === x2.value?.parentId) return;
    const e3 = x2.value?.formulaInfo;
    if (!e3) return;
    let l3;
    try {
      l3 = e3?.paramDesc ? JSON.parse(e3?.paramDesc) : [];
    } catch {
      l3 = e3?.paramDesc ? [e3?.paramDesc] : [];
    }
    return { description: e3.description, paramDesc: l3, returnDesc: e3.returnDesc };
  });
  function B2(e3, l3) {
    const a3 = [];
    l3 ? a3.push({ icon: l3.icon, title: l3.name, key: l3.key }) : M2.value = e3 ? e3.children : [], e3 && a3.push({ icon: e3.icon, title: e3.name, key: e3.key }), R2.value = a3, x2.value = e3, t2("select", e3);
  }
  function D2(e3, l3) {
    B2(l3.node.dataRef, l3.node?.parent?.node);
  }
  function O2(e3) {
    if (!e3) return B2(), void (N2.value = []);
    N2.value = [e3];
    const l3 = e3.split(",");
    if (l3 && 2 === l3.length) return Q2.value?.setExpandedKeys([l3[0]]), void B2(Q2.value?.getSelectedNode(e3), Q2.value?.getSelectedNode(l3[0]));
    B2(Q2.value?.getSelectedNode(e3));
  }
  h(() => a2.isShow, (e3) => {
    e3 && setTimeout(() => {
      O2(a2.curKey);
    }, 200);
  }, { immediate: true });
  const L2 = g(() => F2.value ? s(w2) : s(M2));
  return S(async () => {
    const e3 = await De();
    !function e4(l3, a3) {
      for (const t3 of a3) t3.children && t3.children.length > 0 && e4(t3, t3.children), l3 ? (t3.icon = "ant-design:function-outlined", t3.key = `${l3.id},${t3.id}`) : (t3.icon = "ant-design:star-outlined", t3.key = t3.id), t3.title = t3.name + (t3?.formulaInfo ? `(${t3?.formulaInfo?.enName})` : "");
    }(void 0, e3), $2.value = e3;
  }), (e3, l3) => (u(), c(s(ge), { "default-size": I2.value, min: 0.1, max: 0.5, class: r(s(_2)) }, { 1: v(() => [f(s(ye), { title: "", toolbar: "", search: "", ref_key: "asyncTreeRef", ref: Q2, "tree-wrapper-class-name": "h-[calc(100%-35px)] overflow-auto", "selected-keys": N2.value, "onUpdate:selectedKeys": l3[0] || (l3[0] = (e4) => N2.value = e4), "tree-data": $2.value || [], onSelect: D2 }, null, 8, ["selected-keys", "tree-data"])]), 2: v(() => [m("div", { class: r(`${s(_2)}-right h-full pt-2`) }, [f(s(G), { separator: ">", class: "breadcrumb" }, { default: v(() => [(u(true), n(q, null, C(R2.value, (e4, l4) => (u(), c(s(y2), { key: l4 }, { default: v(() => [f(s(ue), { icon: e4.icon }, null, 8, ["icon"]), m("a", { onClick: (l5) => O2(e4.key), class: "fw-bold text-decoration-none" }, p(e4.title), 9, ea)]), _: 2 }, 1024))), 128))]), _: 1 }), x2.value && "" === x2.value.parentId ? (u(), c(s(se), { key: 0 }, { default: v(() => [f(s(K), { class: "ml-6" }, { default: v(() => [(u(true), n(q, null, C(L2.value, (e4, l4) => (u(), c(s(W), { span: 22, key: l4, class: r(`${s(_2)}-card`) }, { default: v(() => [m("div", { class: r(`${s(_2)}-card-item`), onClick: (l5) => O2(e4.key) }, [m("div", { class: r(`${s(_2)}-card-item-info`) }, [f(s(A), { title: e4.formulaInfo?.cnName }, { default: v(() => [m("span", { style: i(`color: ${s(T2)};font-weight: bold`) }, [f(s(ue), { icon: "ant-design:function-outlined", color: s(T2) }, null, 8, ["color"]), b(" " + p(e4.formulaInfo?.cnName) + " (" + p(e4.formulaInfo?.enName) + ") ", 1)], 4)]), _: 2 }, 1032, ["title"]), f(s(A), { title: e4.formulaInfo?.description }, { default: v(() => [m("span", null, p(e4.formulaInfo?.description), 1)]), _: 2 }, 1032, ["title"])], 2)], 10, la)]), _: 2 }, 1032, ["class"]))), 128))]), _: 1 })]), _: 1 })) : d("", true), x2.value && x2.value.formulaInfo ? (u(), c(s(se), { key: 1 }, { default: v(() => [f(s(J), { class: "pt-3 pr-2", column: 1, bordered: true }, { default: v(() => [f(s(k2), { label: "描述" }, { default: v(() => [b(p(j2.value?.description), 1)]), _: 1 }), f(s(k2), { label: "参数" }, { default: v(() => [(u(true), n(q, null, C(j2.value?.paramDesc, (e4, l4) => (u(), n("div", { key: l4 }, p(e4), 1))), 128))]), _: 1 }), f(s(k2), { label: "结果" }, { default: v(() => [b(p(j2.value?.returnDesc), 1)]), _: 1 })]), _: 1 })]), _: 1 })) : d("", true)], 2)]), _: 1 }, 8, ["default-size", "class"]));
} }), [["__scopeId", "data-v-5fa7a95b"]]), ta = { key: 0, class: "content" }, oa = { key: 1, class: "content placeholder" }, na = Ql(t({ __name: "FormulaSelect", props: { formulaKey: { type: String, default: "" }, queryMode: { type: Boolean, default: false } }, emits: ["formulaChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = g(() => ee().getDarkMode.value === he.DARK), { prefixCls: d2 } = le("select-formula"), y2 = o(false);
  let q2;
  const { createMessage: C2 } = ae(), k2 = fl(), M2 = o(), _2 = (e3) => {
    y2.value = e3;
  };
  function Q2() {
    y2.value = false, M2.value = void 0, q2 = void 0, t2("formulaChange", M2.value);
  }
  function N2() {
    q2 ? (y2.value = false, M2.value?.key !== q2.key && (M2.value = { key: q2.key, ...q2.formulaInfo }, t2("formulaChange", M2.value))) : C2.error("请选择公式");
  }
  function S2(e3) {
    e3?.formulaInfo && (q2 = T(e3));
  }
  return h(() => a2.formulaKey, (e3) => {
    e3 && (M2.value = k2.getFormula(e3));
  }, { immediate: true }), (l3, a3) => (u(), c(s($), { disabled: e2.queryMode, trigger: ["click"], open: y2.value, onOpenChange: _2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "500px" } }, { overlay: v(() => [f(s(R), null, { default: v(() => [f(s(R).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: v(() => [f(aa, { style: { height: "350px" }, "is-show": y2.value, "cur-key": M2.value?.key, onSelect: S2 }, null, 8, ["is-show", "cur-key"]), m("div", { class: r(`${s(d2)}-ok-button`) }, [f(s(I), { class: "mr-2", onClick: Q2 }, { default: v(() => a3[0] || (a3[0] = [b("清空")])), _: 1, __: [0] }), f(s(I), { type: "primary", onClick: N2 }, { default: v(() => a3[1] || (a3[1] = [b("确定")])), _: 1, __: [1] })], 2)]), _: 1 })]), _: 1 })]), default: v(() => [f(s(I), { class: r(`${s(d2)}-drop-button`) }, { default: v(() => [M2.value?.cnName ? (u(), n("span", ta, p(M2.value?.cnName), 1)) : (u(), n("span", oa, "选择公式")), f(s(ue), { size: 12, icon: y2.value ? "ant-design:up-outlined" : "ant-design:down-outlined", color: i2.value ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)" }, null, 8, ["icon", "color"])]), _: 1 }, 8, ["class"])]), _: 1 }, 8, ["disabled", "open"]));
} }), [["__scopeId", "data-v-983d37a1"]]), ua = "displayName", ia = { config: { type: Object, default: () => ({ type: cl.param, value: "" }) }, comType: { type: String, default: "string" }, paramType: { type: String, default: "string" }, paramValue: { type: String, default: "" }, showRadio: { type: Boolean, default: true }, sqlQuery: { type: Object }, index: { type: Number, default: 0 }, queryMode: { type: Boolean, default: false } }, ra = (e2) => {
  if (!e2) return { type: cl.formula, value: null };
  const l2 = (e2?.targetParam ? JSON.parse(e2.targetParam) : []).map((e3) => e3.paramType.startsWith("list") ? { type: cl.param, value: [{ type: cl.param, value: "" }] } : { type: cl.param, value: "" });
  return { type: cl.formula, value: { key: e2.key, cnName: e2.cnName, enName: e2.enName, targetObject: e2.targetObject, param: l2 } };
}, sa = Ql(t({ __name: "FormulaCompact", props: ia, emits: ["typeChange", "formulaSelect", "inputChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, { prefixCls: i2 } = le("formula-compact"), p2 = E.Group, y2 = E.Button, g2 = o("string"), b2 = o("string"), q2 = o(), C2 = o(cl.param), k2 = o(), M2 = o([]), _2 = o(), Q2 = o(false), T2 = o([]), N2 = o();
  function S2(e3) {
    t2("formulaSelect", e3 || "");
  }
  function F2() {
    t2("inputChange", void 0 === q2.value ? "" : q2.value);
  }
  function w2(e3) {
    e3.tableAlias && e3.colName && (_2.value = e3, t2("inputChange", { ...e3, [ua]: "colName" }));
  }
  function x2(e3, l3) {
    t2("inputChange", l3.realValue || "");
  }
  function I2(e3) {
    t2("typeChange", e3.target.value);
  }
  return h(() => a2.config, (e3) => {
    e3 && (C2.value = e3.type, e3.type === cl.formula ? k2.value = e3.value?.key : q2.value = e3.value);
  }, { immediate: true }), h(() => a2.paramType, (e3) => {
    if (e3) if (e3.startsWith("list[")) {
      const l3 = /list\[(?<value>.*?)\]/u;
      b2.value = e3.replace(l3, "$<value>");
    } else b2.value = e3;
  }, { immediate: true }), h(() => a2.comType, (e3) => {
    e3 && (g2.value = e3);
  }, { immediate: true }), h(() => C2.value, (e3) => {
    if (e3 === cl.param && "list" === g2.value) {
      const e4 = /@\{(?<value>.*?)\}/u, l3 = a2.paramValue?.replace(e4, "$<value>");
      Q2.value = "fieldName" === l3, Q2.value && a2.sqlQuery ? Fl(void 0, a2.sqlQuery).then((e5) => {
        M2.value = e5, _2.value = a2.config.value || {};
      }) : Oe(l3).then((e5) => {
        if (T2.value = [], e5 && e5.value) {
          const l4 = e5[ua];
          e5.value.forEach((e6) => {
            const a3 = e6[l4];
            T2.value.push({ label: a3, value: a3, realValue: { ...e6, [ua]: l4 } });
          }), a2.config?.value && (N2.value = a2.config.value[a2.config.value[ua]]);
        }
      });
    }
  }, { immediate: true }), (e3, l3) => (u(), n("div", { class: r(s(i2)) }, [a2.showRadio ? (u(), c(s(p2), { key: 0, disabled: a2.queryMode, class: "radio-group", value: C2.value, "onUpdate:value": l3[0] || (l3[0] = (e4) => C2.value = e4), "button-style": "solid", onChange: I2 }, { default: v(() => ["number" === b2.value ? (u(), c(s(y2), { key: 0, value: s(cl).param }, { default: v(() => [f(s(A), { placement: "left", title: "数字" }, { default: v(() => [f(s(ue), { icon: "ant-design:field-number-outlined" })]), _: 1 })]), _: 1 }, 8, ["value"])) : (u(), c(s(y2), { key: 1, value: s(cl).param }, { default: v(() => [f(s(A), { placement: "left", title: "字符" }, { default: v(() => [f(s(ue), { icon: "ant-design:field-string-outlined" })]), _: 1 })]), _: 1 }, 8, ["value"])), f(s(y2), { value: s(cl).formula }, { default: v(() => [f(s(A), { placement: "left", title: "公式" }, { default: v(() => [f(s(ue), { icon: "ant-design:function-outlined" })]), _: 1 })]), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["disabled", "value"])) : d("", true), m("div", { class: r(a2.showRadio ? "formula-select" : "formula-select-show") }, [C2.value === s(cl).param && "string" === g2.value ? (u(), c(s(B), { key: 0, disabled: a2.queryMode, value: q2.value, "onUpdate:value": l3[1] || (l3[1] = (e4) => q2.value = e4), class: "input-com", placeholder: "请输入字符常量", onChange: F2 }, null, 8, ["disabled", "value"])) : C2.value === s(cl).param && "number" === g2.value ? (u(), c(s(L), { key: 1, disabled: a2.queryMode, value: q2.value, "onUpdate:value": l3[2] || (l3[2] = (e4) => q2.value = e4), class: "input-com", placeholder: "请输入数字常量", onChange: F2 }, null, 8, ["disabled", "value"])) : C2.value === s(cl).param && "list" === g2.value && Q2.value ? (u(), c(zl, { key: 2, "query-mode": a2.queryMode, class: "select-com", "table-fields": M2.value, value: _2.value, onChange: w2 }, null, 8, ["query-mode", "table-fields", "value"])) : C2.value !== s(cl).param || "list" !== g2.value || Q2.value ? (u(), c(na, { key: 4, "query-mode": a2.queryMode, "formula-key": k2.value, onFormulaChange: S2 }, null, 8, ["query-mode", "formula-key"])) : (u(), c(s(O), { key: 3, disabled: a2.queryMode, class: "select-com", value: N2.value, "onUpdate:value": l3[3] || (l3[3] = (e4) => N2.value = e4), options: T2.value, placeholder: "请选择参数", onSelect: x2 }, null, 8, ["disabled", "value", "options"]))], 2)], 2));
} }), [["__scopeId", "data-v-a24bef98"]]), da = { style: { "margin-top": "6px", display: "flex", "justify-content": "flex-end" } }, ca = t({ __name: "FormulaAround", emits: ["submit"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = o([]), n2 = o(), i2 = o(false);
  let r2;
  const { createMessage: d2 } = ae(), p2 = (e3) => {
    i2.value = e3;
  };
  function y2(e3) {
    if (!e3) return r2 = e3, void (n2.value = void 0);
    r2 = ra(e3);
    const l3 = e3?.targetParam ? JSON.parse(e3.targetParam) : [];
    t2.value = [];
    for (const [e4, a3] of l3.entries()) t2.value.push({ label: a3.name, value: e4 });
    n2.value = t2.value.length > 0 ? 0 : void 0;
  }
  function g2() {
    i2.value = false;
  }
  function h2() {
    r2 && void 0 !== n2.value ? a2("submit", { formulaConfig: r2, paramIndex: n2.value }) : d2.error("请选择公式");
  }
  return (e3, l3) => (u(), c(s($), { trigger: ["click"], open: i2.value, placement: "bottom", arrow: { pointAtCenter: true }, onOpenChange: p2 }, { overlay: v(() => [f(s(R), null, { default: v(() => [f(s(R).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: v(() => [f(s(Y), { title: "上层公式设置", bordered: false, style: { width: "240px" } }, { default: v(() => [f(na, { onFormulaChange: y2 }), f(s(O), { style: { width: "100%", "margin-top": "6px" }, placeholder: "选择作为哪个参数", class: "select-com", value: n2.value, "onUpdate:value": l3[0] || (l3[0] = (e4) => n2.value = e4), options: t2.value }, null, 8, ["value", "options"]), m("div", da, [f(s(I), { size: "small", onClick: g2 }, { default: v(() => l3[1] || (l3[1] = [b(" 取消")])), _: 1, __: [1] }), f(s(I), { size: "small", type: "primary", style: { "margin-left": "6px" }, onClick: h2 }, { default: v(() => l3[2] || (l3[2] = [b(" 确定")])), _: 1, __: [2] })])]), _: 1 })]), _: 1 })]), _: 1 })]), default: v(() => [f(s(I), { style: { "margin-top": "-6px" }, size: "small", type: "link" }, { icon: v(() => [f(s(A), { placement: "left", title: "添加外层公式，当前层作为公式参数" }, { default: v(() => [f(s(ue), { icon: "ant-design:node-collapse-outlined" })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["open"]));
} }), ma = { class: "formula" }, fa = { class: "title" }, pa = { key: 0, class: "add" }, va = Ql(t({ __name: "FormulaConfig", props: ia, emits: ["formulaChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = o(), y2 = o(), { prefixCls: g2 } = le("formula-config"), k2 = fl(), M2 = o(), Q2 = N({ type: cl.param, value: "" }), T2 = o(0), S2 = (e3) => e3.startsWith("list"), F2 = (e3) => M2?.value?.value?.param && Array.isArray(M2?.value.value.param[e3].value) ? M2?.value.value.param[e3].value : [0];
  function w2(e3) {
    Q2.value = e3, t2("formulaChange", Q2);
  }
  function x2(e3) {
    i2.value = e3?.targetParam ? JSON.parse(e3.targetParam) : [];
    try {
      y2.value = e3?.paramDesc ? JSON.parse(e3?.paramDesc) : [];
    } catch {
      y2.value = e3?.paramDesc ? [e3?.paramDesc] : [];
    }
  }
  function $2(e3) {
    x2(e3), M2.value = ra(e3), T2.value++, t2("formulaChange", M2.value);
  }
  function R2(e3) {
    i2.value = [], t2("formulaChange", { type: e3, value: "" });
  }
  function j2(e3) {
    e3.formulaConfig.value.param[e3.paramIndex] = M2.value;
    const l3 = JSON.parse(JSON.stringify(e3.formulaConfig));
    x2(l3), t2("formulaChange", l3, true);
  }
  return h(() => a2.config, (e3) => {
    e3 && (M2.value = e3, function() {
      if (M2.value?.type === cl.formula) {
        const e4 = k2.getFormula(M2.value?.value?.key);
        e4 && x2(e4);
      }
    }());
  }, { immediate: true }), (e3, l3) => {
    const o2 = _("FormulaConfig", true);
    return u(), n("div", { class: r(s(g2)) }, [m("div", ma, [f(sa, { "query-mode": a2.queryMode, class: "main", index: a2.index, "com-type": a2.comType, "param-type": a2.paramType, "param-value": a2.paramValue, config: M2.value, "sql-query": a2.sqlQuery, "show-radio": a2.showRadio, onInputChange: w2, onFormulaSelect: $2, onTypeChange: R2 }, null, 8, ["query-mode", "index", "com-type", "param-type", "param-value", "config", "sql-query", "show-radio"]), M2.value?.type !== s(cl).formula || a2.queryMode ? d("", true) : (u(), c(ca, { key: 0, onSubmit: j2 }))]), (u(true), n(q, null, C(i2.value, (e4, i3) => (u(), n("div", { key: `${T2.value}${i3}` }, [(u(true), n(q, null, C(F2(i3), (l4, r2) => (u(), n("div", { class: "param", key: r2 }, [f(s(ue), { class: "icon", icon: "ant-design:arrow-up-outlined" }), m("span", fa, [f(s(A), { placement: "left", title: y2.value ? y2.value[i3] : "" }, { default: v(() => [b(p(e4.name), 1)]), _: 2 }, 1032, ["title"])]), f(o2, { "query-mode": a2.queryMode, index: r2, "com-type": e4.comType, "param-type": e4.paramType, "param-value": e4.value, config: S2(e4.paramType) && M2.value?.value?.param && M2.value?.value?.param[i3]?.value ? M2.value?.value?.param[i3]?.value[r2] : M2.value?.value?.param[i3], "sql-query": a2.sqlQuery, onFormulaChange: (l5) => function(e5, l6, a3, o3) {
      M2.value?.type === cl.formula && M2.value.value && M2.value.value.param && (S2(a3) ? M2.value.value.param[l6].value ? M2.value.value.param[l6].value[o3] = e5 : M2.value.value.param[l6].value = [e5] : M2.value.value.param[l6] = e5), t2("formulaChange", M2.value);
    }(l5, i3, e4.paramType, r2) }, null, 8, ["query-mode", "index", "com-type", "param-type", "param-value", "config", "sql-query", "onFormulaChange"]), r2 > 0 ? (u(), c(s(I), { key: 0, size: "small", type: "link", onClick: (e5) => function(e6, l5) {
      M2.value?.type === cl.formula && M2.value.value && M2.value.value.param && (M2.value.value.param[e6].value.splice(l5, 1), T2.value++, t2("formulaChange", M2.value));
    }(i3, r2) }, { icon: v(() => [f(s(ue), { icon: "ant-design:delete-outlined" })]), _: 2 }, 1032, ["onClick"])) : d("", true)]))), 128)), S2(e4.paramType) ? (u(), n("div", pa, [f(s(I), { type: "primary", onClick: (e5) => function(e6) {
      M2.value && (M2.value.value.param[e6].value ? M2.value.value.param[e6].value.push({ type: cl.param, value: "" }) : M2.value.value.param[e6].value = [{ type: cl.param, value: "" }]);
    }(i3) }, { default: v(() => l3[0] || (l3[0] = [b("增加参数")])), _: 2, __: [0] }, 1032, ["onClick"])])) : d("", true)]))), 128))], 2);
  };
} }), [["__scopeId", "data-v-cbde54bb"]]), ya = t({ __name: "ParamsModal", emits: ["register", "submit"], setup(e2, { emit: l2 }) {
  const a2 = l2, [t2, { resetFields: n2, setFieldsValue: i2, validate: r2, resetSchema: d2 }] = ve({ name: "model_form_item", labelWidth: 180, baseColProps: { span: 24 }, showActionButtonGroup: false, autoSubmitOnEnter: true }), m2 = fl(), p2 = o(), [y2, { setModalProps: g2, closeModal: h2 }] = me(async (e3) => {
    g2({ confirmLoading: false, width: "600px", canFullscreen: false }), p2.value = e3.level;
    const l3 = m2.getVariables.filter((l4) => l4.name && e3.params.has(l4.name)).map((e4) => ({ field: e4.name, label: e4.name, component: "Input", required: e4.required || false, helpMessage: e4.remark || "", defaultValue: e4.defaultValue }));
    d2(l3).then(() => {
      n2().then(), i2(l3.reduce((e4, l4) => (l4 && (e4[l4.field] = l4.defaultValue), e4), {})).then();
    });
  });
  async function b2() {
    try {
      const e3 = await r2();
      a2("submit", e3, p2.value), h2();
    } catch (e3) {
    }
  }
  return (e3, l3) => (u(), c(s(ce), M(e3.$attrs, { onRegister: s(y2), title: "输入参数值", onOk: b2 }), { default: v(() => [f(s(pe), { onRegister: s(t2), onSubmit: b2 }, null, 8, ["onRegister"])]), _: 1 }, 16, ["onRegister"]));
} }), ga = t({ __name: "FormulaTest", props: { open: { type: Boolean, default: false }, curQuery: { type: Object }, curParams: { type: Object } }, emits: ["close"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, r2 = ee().getThemeColor, m2 = fl(), y2 = o(false);
  h(() => a2.open, (e3) => {
    y2.value = e3, e3 && g2();
  });
  const g2 = Ce((e3) => {
    let l3 = 1, t3 = 10;
    e3 && (l3 = e3.current, t3 = e3.pageSize), al({ sourceId: m2.getSourceId, sourceType: m2.getSourceType, sqlQuery: a2.curQuery || {}, params: a2.curParams }, { pageNum: l3, pageSize: t3 }).then((e4) => {
      const l4 = Object.keys(e4.headers).map((e5) => ({ title: e5, dataIndex: e5 }));
      q2(l4), C2(e4.table.list), k2({ total: e4.table.total, pageSize: e4.table.pageSize, current: e4.table.pageNum });
    }).catch(() => {
      q2([]);
    });
  }, 200), [b2, { setColumns: q2, setTableData: C2, setPagination: k2 }] = be({ bordered: true, showIndexColumn: false, isCanResizeParent: true, canResize: true, onChange: g2 }), M2 = () => {
    y2.value = false, t2("close", true);
  };
  return (e3, l3) => (u(), c(s(H), { title: "测试结果", placement: "bottom", open: y2.value, onClose: M2, height: 450 }, { default: v(() => [f(s(qe), { onRegister: s(b2) }, { bodyCell: v(({ column: e4, record: l4 }) => [e4?.key === s(vl) ? (u(), n("div", { key: 0, style: i({ color: s(r2) }) }, p(l4[s(vl)]), 5)) : d("", true)]), _: 1 }, 8, ["onRegister"])]), _: 1 }, 8, ["open"]));
} }), ha = t({ __name: "FormulaColModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = l2, t2 = o(), i2 = o(), r2 = o(), m2 = N({ type: cl.formula, value: null });
  let p2;
  const y2 = o(0), g2 = fl(), [h2, { openModal: C2 }] = fe(), k2 = o(), _2 = o(), Q2 = o(false), T2 = (e3) => {
    let l3 = "";
    return Array.isArray(e3.value) ? (e3.value.forEach((e4) => {
      l3 += `${T2(e4)},`;
    }), l3.endsWith(",") ? l3 = l3.slice(0, Math.max(0, l3.lastIndexOf(","))) : l3) : e3.type === cl.formula && e3.value ? (l3 = `${e3.value.cnName}(`, e3.value.param.forEach((e4) => {
      l3 += `${T2(e4)},`;
    }), l3.endsWith(",") && (l3 = l3.slice(0, Math.max(0, l3.lastIndexOf(",")))), l3 += ")", l3) : (e3.type === cl.param && (l3 += e3.value instanceof Object ? e3.value[e3.value[ua]] : e3.value), l3);
  }, [S2, { setModalProps: F2, closeModal: w2 }] = me(async (e3) => {
    F2({ confirmLoading: false, width: "800px", minHeight: 500, maskClosable: false, keyboard: false }), t2.value = e3.index, i2.value = e3.isUpdate, await g2.setFormulaMap(), p2 = e3.sqlQuery, e3.isUpdate ? (m2.value = JSON.parse(JSON.stringify(e3.formulaConfig.value)), r2.value = T2(m2)) : (m2.value = null, r2.value = ""), y2.value++;
  });
  async function x2() {
    try {
      if (!m2.value) return;
      w2(), a2("submit", i2.value, t2.value, { ...m2, name: r2.value });
    } catch (e3) {
    }
  }
  function A2(e3, l3) {
    m2.value = e3.value, e3 && (r2.value = T2(e3)), l3 && y2.value++;
  }
  function $2() {
    k2.value = { schema: p2.schema, sourceTable: p2.sourceTable, joins: p2.joins, sqlQuery: p2?.sqlQuery, customColumns: [{ name: vl, expressions: [{ type: cl.formula, value: m2.value }] }] };
    const e3 = Cl(k2.value || {});
    e3 && e3.size > 0 ? C2(true, { params: e3, level: 1 }) : R2({});
  }
  function R2(e3) {
    _2.value = e3, Q2.value = true;
  }
  return (l3, a3) => (u(), n(q, null, [f(s(ce), M(l3.$attrs, { onRegister: s(S2), title: "公式配置", onOk: x2 }), { centerFooter: v(() => [f(s(I), { onClick: $2, type: "primary", danger: "" }, { default: v(() => a3[1] || (a3[1] = [b("测试")])), _: 1, __: [1] })]), default: v(() => [r2.value ? (u(), c(s(X), { key: 0, class: "mb-2", message: r2.value, type: "info", "show-icon": "" }, { icon: v(() => [f(s(ue), { icon: "ant-design:function-outlined" })]), _: 1 }, 8, ["message"])) : d("", true), (u(), c(va, { "query-mode": e2.queryMode, key: y2.value, "sql-query": s(p2), "show-radio": false, config: m2, onFormulaChange: A2 }, null, 8, ["query-mode", "sql-query", "config"])), f(ga, { "cur-query": k2.value, "cur-params": _2.value, open: Q2.value, onClose: a3[0] || (a3[0] = () => Q2.value = false) }, null, 8, ["cur-query", "cur-params", "open"])]), _: 1 }, 16, ["onRegister"]), f(ya, { onRegister: s(h2), onSubmit: R2 }, null, 8, ["onRegister"])], 64));
} }), ba = Ql(t({ __name: "CustomColModal", props: { sqlQuery: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = o(true), d2 = ee().getThemeColor, { prefixCls: p2 } = le("col-modal"), y2 = o([]), g2 = N({ formula: { key: "formula", name: "公式", icon: "icon-mfish-sum", color: "#cd201f" }, add: { key: "add", name: "加号", icon: "icon-mfish-add", color: d2 }, subtract: { key: "subtract", name: "减号", icon: "icon-mfish-subtract", color: d2, slot: true }, multiply: { key: "multiply", name: "乘号", icon: "icon-mfish-multiply", color: d2, slot: true }, divide: { key: "divide", name: "除号", icon: "icon-mfish-divide", color: d2, slot: true }, leftBracket: { key: "leftBracket", name: "左括号", icon: "icon-mfish-left-bracket", color: d2, slot: true }, rightBracket: { key: "rightBracket", name: "右括号", icon: "icon-mfish-right-bracket", color: d2, slot: true } }), h2 = N({ formula: { type: cl.formula, value: "" }, add: { type: cl.operator, name: "add", value: "+", slot: true }, subtract: { type: cl.operator, name: "subtract", value: "-", slot: true }, multiply: { type: cl.operator, name: "multiply", value: "*", slot: true }, divide: { type: cl.operator, name: "divide", value: "/", slot: true }, leftBracket: { type: cl.operator, name: "leftBracket", value: "(", slot: true }, rightBracket: { type: cl.operator, name: "rightBracket", value: ")", slot: true } }), k2 = [{ field: "customCol", label: "自定义列", component: "Input", slot: "customCol" }, { field: "name", label: "名称", component: "Input", componentProps: { disabled: a2.queryMode, placeholder: "请输入名称", maxlength: 30, showCount: true }, required: true }], [Q2, { resetFields: T2, setFieldsValue: S2, validate: w2 }] = ve({ name: "model_form_item", labelWidth: 100, baseColProps: { span: 24 }, schemas: k2, showActionButtonGroup: false, autoSubmitOnEnter: true }), [x2, { openModal: I2 }] = fe(), [$2, { openModal: R2 }] = fe(), j2 = o();
  const [B2, { setModalProps: D2, closeModal: O2 }] = me(async (e3) => {
    T2().then(), D2({ confirmLoading: false, width: "600px", maskClosable: false }), i2.value = !!e3?.isUpdate, s(i2) ? (j2.value = e3.index, S2({ ...e3.customCol }).then(), y2.value = JSON.parse(JSON.stringify(e3.customCol.expressions))) : (j2.value = void 0, y2.value = []);
  }), [L2, { openModal: E2 }] = fe(), U2 = o(), z2 = o(), V2 = o(false);
  async function P2() {
    try {
      const e3 = await w2();
      t2("submit", j2.value, { name: e3.name, expressions: y2.value }), O2();
    } catch (e3) {
    }
  }
  function G2(e3, l3, t3) {
    l3.type !== cl.operator ? (t3(false, l3), R2(true, { index: e3, sqlQuery: { ...a2.sqlQuery }, isUpdate: false })) : t3(true, l3);
  }
  function J2() {
    I2(true, { sqlQuery: { ...a2.sqlQuery }, isUpdate: false });
  }
  function K2(e3, l3) {
    l3.type === cl.field && I2(true, { index: e3, field: l3, sqlQuery: { ...a2.sqlQuery }, isUpdate: true }), l3.type === cl.formula && R2(true, { index: e3, formulaConfig: l3, sqlQuery: { ...a2.sqlQuery }, isUpdate: true });
  }
  function W2(e3, l3) {
    void 0 === e3 ? y2.value ? y2.value.push(l3) : y2.value = [l3] : y2.value && (y2.value[e3] = l3);
  }
  function Y2(e3, l3, a3) {
    e3 ? y2.value && (y2.value[l3] = a3) : y2.value ? l3 ? y2.value.splice(l3, 0, a3) : y2.value.push(a3) : y2.value = [a3];
  }
  function H2() {
    U2.value = { schema: a2.sqlQuery?.schema, sourceTable: a2.sqlQuery?.sourceTable, joins: a2.sqlQuery?.joins, sqlQuery: a2.sqlQuery?.sqlQuery, customColumns: [{ name: vl, expressions: y2.value }] };
    const e3 = Cl(U2.value || {});
    e3 && e3.size > 0 ? E2(true, { params: e3, level: 1 }) : X2({});
  }
  function X2(e3) {
    z2.value = e3, V2.value = true;
  }
  return (l3, t3) => {
    const o2 = _("AButton");
    return u(), n(q, null, [f(s(ce), M(l3.$attrs, { onRegister: s(B2), title: "自定义列配置", onOk: P2 }), { centerFooter: v(() => [f(o2, { onClick: H2, type: "primary", danger: "" }, { default: v(() => t3[1] || (t3[1] = [b("测试")])), _: 1, __: [1] })]), default: v(() => [f(s(pe), { onRegister: s(Q2), onSubmit: P2 }, { customCol: v(() => [f(s(de), { "query-mode": e2.queryMode, "add-title": "添加字段", items: y2.value, onBlockBuild: G2, onAddBlock: J2, onEditBlock: K2 }, F({ tag: v(({ element: e3 }) => [m("div", { class: r(`${s(p2)}-slot-tag`) }, [f(s(ie), { icon: g2[e3.name].icon, color: s(d2) }, null, 8, ["icon", "color"])], 2)]), _: 2 }, [e2.queryMode ? void 0 : { name: "headerBar", fn: v(({ headerCallBack: e3 }) => [(u(true), n(q, null, C(g2, (l4, t4) => (u(), c(s(A), { key: t4, title: l4.name }, { default: v(() => [f(s(Z), { style: { cursor: "pointer" }, color: l4.color, draggable: "true", onClick: (t5) => function(e4, l5) {
      l5.type !== cl.operator ? R2(true, { index: void 0, sqlQuery: a2.sqlQuery, isUpdate: false }) : e4(l5);
    }(e3, h2[l4.key]), onDragstart: (e4) => function(e5, l5) {
      e5.dataTransfer.setData("Text", JSON.stringify(h2[l5.key])), e5.stopPropagation();
    }(e4, l4) }, { icon: v(() => [f(s(ie), { icon: l4.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["color", "onClick", "onDragstart"])]), _: 2 }, 1032, ["title"]))), 128))]), key: "0" }]), 1032, ["query-mode", "items"])]), _: 1 }, 8, ["onRegister"]), f(Zl, { onRegister: s(x2), onSubmit: W2 }, null, 8, ["onRegister"]), f(ha, { "query-mode": e2.queryMode, onRegister: s($2), onSubmit: Y2 }, null, 8, ["query-mode", "onRegister"]), f(ga, { "cur-query": U2.value, "cur-params": z2.value, open: V2.value, onClose: t3[0] || (t3[0] = () => V2.value = false) }, null, 8, ["cur-query", "cur-params", "open"])]), _: 1 }, 16, ["onRegister"]), f(ya, { onRegister: s(L2), onSubmit: X2 }, null, 8, ["onRegister"])], 64);
  };
} }), [["__scopeId", "data-v-ffce7698"]]), qa = t({ __name: "TableCustomCol", props: { sqlQuery: { type: Object }, level: { type: Number, default: 1 }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["customColChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, i2 = o([]);
  function r2() {
    t2("customColChange");
  }
  const [m2, { openModal: p2 }] = fe(), y2 = g(() => void 0 === a2.sqlQuery?.customColumns && bl(a2.sqlQuery, a2.level) && !a2.queryMode);
  function b2() {
    p2(true, { sqlQuery: a2.sqlQuery, isUpdate: false });
  }
  function q2(e3, l3) {
    p2(true, { index: e3, customCol: { ...l3 }, sqlQuery: a2.sqlQuery, isUpdate: true });
  }
  function C2(e3) {
    t2("customColChange", [...e3]);
  }
  function k2() {
    t2("customColChange", []);
  }
  function M2(e3) {
    ql(a2.configMitt, { ...a2.sqlQuery, customColumns: i2.value, aggregates: [], groups: [], orders: [], limit: void 0 }, e3);
  }
  function _2(e3, l3) {
    void 0 === e3 ? i2.value ? i2.value.push(l3) : i2.value = [l3] : i2.value && (i2.value[e3] = l3), t2("customColChange", i2.value ? [...i2.value] : []);
  }
  return h(() => a2.sqlQuery?.customColumns, (e3) => {
    i2.value = e3 ? [...e3] : [];
  }, { immediate: true }), (l3, a3) => (u(), n("div", null, [void 0 !== e2.sqlQuery?.customColumns ? (u(), c(Tl, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:insert-row-right-outlined", title: "自定义列", onDeleteConfig: r2, onExecute: M2, full: true }, { config: v(() => [f(s(de), { "query-mode": e2.queryMode, items: i2.value, "add-title": "添加自定义列", onAddBlock: b2, onEditBlock: q2, onDragChange: C2 }, null, 8, ["query-mode", "items"])]), _: 1 }, 8, ["query-mode"])) : d("", true), y2.value ? (u(), c(Il, { key: 1, class: "config-button", title: "自定义列", icon: "ant-design:insert-row-right-outlined", level: 0, onClick: Q(k2, ["prevent"]) })) : d("", true), f(ba, { "query-mode": e2.queryMode, onRegister: s(m2), "sql-query": e2.sqlQuery, onSubmit: _2 }, null, 8, ["query-mode", "onRegister", "sql-query"])]));
} }), Ca = { class: "btn-bar" }, ka = Ql(t({ __name: "ApiConfig", props: { configKey: { type: Number, default: 0, require: true }, sqlQuery: { type: Object, require: true, default: void 0 }, level: { type: Number, default: 1 }, configMitt: { type: Object, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["configChange"], setup(e2, { emit: l2 }) {
  const a2 = e2, t2 = l2, { sqlQuery: p2 } = w(a2), { prefixCls: v2 } = le("api-config"), y2 = ee().getThemeColor, h2 = o(), b2 = o(), { focused: q2 } = ke(h2), { focused: C2 } = ke(b2), k2 = fl(), M2 = o(false), Q2 = g(() => {
    if (1 === k2.getSourceType || a2.queryMode) return false;
    if (a2.sqlQuery && a2.sqlQuery?.joins) {
      for (const e3 of a2.sqlQuery.joins) if (!xl(e3)) return false;
    }
    return true;
  }), T2 = g(() => (void 0 === a2.sqlQuery?.filters || bl(a2.sqlQuery, a2.level)) && !a2.queryMode), N2 = g(() => (void 0 === a2.sqlQuery?.customColumns || bl(a2.sqlQuery, a2.level)) && !a2.queryMode), S2 = g(() => (void 0 === a2.sqlQuery?.aggregates || bl(a2.sqlQuery, a2.level)) && !a2.queryMode), F2 = g(() => void 0 === a2.sqlQuery?.orders && !a2.queryMode), x2 = g(() => void 0 === a2.sqlQuery?.limit && !a2.queryMode);
  function A2(e3) {
    t2("configChange", { ...a2.sqlQuery, fields: e3 }), k2.setFieldsChange(a2.level);
  }
  function I2(e3) {
    const l3 = { ...a2.sqlQuery, joins: e3 };
    U2(l3) || (t2("configChange", l3), k2.setFieldsChange(a2.level));
  }
  function $2(e3) {
    const l3 = { ...a2.sqlQuery, filters: e3 };
    U2(l3) || t2("configChange", l3);
  }
  function R2(e3) {
    const l3 = { ...a2.sqlQuery, customColumns: e3 };
    U2(l3) || (t2("configChange", l3), k2.setFieldsChange(a2.level));
  }
  function j2(e3) {
    const l3 = { ...a2.sqlQuery, aggregates: e3 };
    U2(l3) || (t2("configChange", l3), k2.setFieldsChange(a2.level));
  }
  function B2(e3) {
    const l3 = { ...a2.sqlQuery, groups: e3 };
    U2(l3) || (t2("configChange", l3), k2.setFieldsChange(a2.level));
  }
  function D2() {
    const e3 = { ...a2.sqlQuery, aggregates: void 0, groups: void 0 };
    U2(e3) || (t2("configChange", e3), k2.setFieldsChange(a2.level));
  }
  function O2(e3) {
    const l3 = { ...a2.sqlQuery, orders: e3 };
    U2(l3) || t2("configChange", l3);
  }
  function L2(e3) {
    const l3 = { ...a2.sqlQuery, limit: e3 };
    U2(l3) || t2("configChange", l3);
  }
  function E2(e3) {
    const l3 = { ...a2.sqlQuery, sqlQuery: e3 };
    U2(l3) || t2("configChange", l3);
  }
  function U2(e3) {
    return !(!e3?.sqlQuery || !e3?.joins || 0 !== e3.joins.length || void 0 !== e3.filters || void 0 !== e3.aggregates || void 0 !== e3.customColumns || void 0 !== e3.groups || void 0 !== e3.orders || void 0 !== e3.limit) && (t2("configChange", JSON.parse(JSON.stringify(e3.sqlQuery)), true), true);
  }
  async function z2() {
    const e3 = { sourceTable: "MFISH_ALIAS_" + a2.level, joins: [], fields: [], sqlQuery: { ...a2.sqlQuery } };
    return e3.fields = await gl(e3), e3;
  }
  async function V2() {
    if (bl(a2.sqlQuery, a2.level)) {
      const e3 = await z2();
      return e3.joins = [], Al(e3.joins), void t2("configChange", e3, true);
    }
    p2?.value?.joins && Al(p2?.value?.joins);
  }
  function P2() {
    K2(["filters"]);
  }
  function G2() {
    K2(["customColumns"]);
  }
  function J2() {
    K2(["aggregates", "groups"]);
  }
  async function K2(e3) {
    let l3;
    const o2 = (l4, a3) => {
      e3.forEach((e4) => l4[e4] = []), t2("configChange", l4, a3);
    };
    if (bl(a2.sqlQuery, a2.level)) return l3 = await z2(), void o2(l3, true);
    l3 = { ...a2.sqlQuery }, o2(l3, false);
  }
  function W2() {
    p2?.value?.orders || t2("configChange", { ...a2.sqlQuery, orders: [] });
  }
  function Y2() {
    p2?.value?.limit || t2("configChange", { ...a2.sqlQuery, limit: 1e3 });
  }
  function H2() {
    a2.configMitt?.emit(yl.QUERY_SQL, a2.sqlQuery), C2.value = false;
  }
  function X2() {
    ql(a2.configMitt, a2.sqlQuery, a2.level), q2.value = false;
  }
  return (l3, a3) => {
    const t3 = _("ApiConfig", true);
    return u(), n("div", { class: r([s(v2), e2.level < s(k2).getLevel ? "inner" : "", s(k2).getShowData && s(k2).getShowDataLevel === e2.level ? "active" : ""]) }, [s(k2).getShowData && s(k2).getShowDataLevel === e2.level ? (u(), n("div", { key: 0, class: "select", style: i({ backgroundColor: s(y2) }) }, [f(s(ue), { icon: "ant-design:check-outlined", color: "#FFFFFF", size: 12 })], 4)) : d("", true), void 0 !== s(p2)?.sqlQuery ? (u(), c(t3, { key: 1, "config-key": e2.configKey, "query-mode": e2.queryMode, "sql-query": s(p2).sqlQuery, level: e2.level - 1, "config-mitt": e2.configMitt, onConfigChange: E2 }, null, 8, ["config-key", "query-mode", "sql-query", "level", "config-mitt"])) : d("", true), (u(), c(Sl, { key: e2.configKey + s(k2).getFieldsChange, class: "config", "sql-query": s(p2), "query-mode": e2.queryMode, "config-mitt": e2.configMitt, onFieldChange: A2 }, null, 8, ["sql-query", "query-mode", "config-mitt"])), (u(), c(Bl, { level: e2.level, key: e2.configKey, class: "config", "sql-query": s(p2), "config-mitt": e2.configMitt, "query-mode": e2.queryMode, onJoinChange: I2 }, null, 8, ["level", "sql-query", "config-mitt", "query-mode"])), (u(), c(Gl, { "query-mode": e2.queryMode, level: e2.level, key: e2.configKey, class: "config", "sql-query": s(p2), "config-mitt": e2.configMitt, onFilterChange: $2 }, null, 8, ["query-mode", "level", "sql-query", "config-mitt"])), (u(), c(qa, { "query-mode": e2.queryMode, level: e2.level, key: e2.configKey, class: "config", "sql-query": s(p2), "config-mitt": e2.configMitt, onCustomColChange: R2 }, null, 8, ["query-mode", "level", "sql-query", "config-mitt"])), (u(), c(Wl, { "query-mode": e2.queryMode, key: e2.configKey, class: "config", "sql-query": s(p2), "config-mitt": e2.configMitt, onAggregateChange: j2, onGroupChange: B2, onDeleteAggregate: D2 }, null, 8, ["query-mode", "sql-query", "config-mitt"])), (u(), c(Xl, { "query-mode": e2.queryMode, key: e2.configKey, class: "config", "sql-query": s(p2), "config-mitt": e2.configMitt, onOrderChange: O2 }, null, 8, ["query-mode", "sql-query", "config-mitt"])), (u(), c(Dl, { "query-mode": e2.queryMode, key: e2.configKey, class: "config", "sql-query": s(p2), "config-mitt": e2.configMitt, onLimitChange: L2 }, null, 8, ["query-mode", "sql-query", "config-mitt"])), m("div", Ca, [Q2.value ? (u(), c(Il, { key: 0, class: "config-button", title: "关联", iconfont: "icon-mfish-join", level: e2.level, onClick: V2 }, null, 8, ["level"])) : d("", true), T2.value ? (u(), c(Il, { key: 1, class: "config-button", title: "过滤", icon: "ant-design:filter-outlined", level: e2.level, onClick: P2 }, null, 8, ["level"])) : d("", true), N2.value ? (u(), c(Il, { key: 2, class: "config-button", title: "自定义列", icon: "ant-design:insert-row-right-outlined", level: e2.level, onClick: G2 }, null, 8, ["level"])) : d("", true), S2.value ? (u(), c(Il, { key: 3, class: "config-button", title: "聚合", iconfont: "icon-mfish-sum", level: e2.level, onClick: J2 }, null, 8, ["level"])) : d("", true), F2.value ? (u(), c(Il, { key: 4, class: "config-button", title: "排序", icon: "ant-design:sort-ascending-outlined", level: e2.level, onClick: W2 }, null, 8, ["level"])) : d("", true), x2.value ? (u(), c(Il, { key: 5, class: "config-button", title: "行数", icon: "ant-design:column-height-outlined", level: e2.level, onClick: Y2 }, null, 8, ["level"])) : d("", true), f(Il, { class: "config-button", ref_key: "querySqlRef", ref: b2, style: i({ fontWeight: "bold", border: `1px dashed ${s(y2)}` }), title: "查看SQL", icon: "ant-design:console-sql-outlined", level: e2.level, onClick: H2 }, null, 8, ["style", "level"]), f(Il, { class: "config-button", style: i({ fontWeight: "bold", border: `1px dashed ${s(y2)}` }), ref_key: "queryDataRef", ref: h2, title: "执行", onMouseenter: a3[0] || (a3[0] = (e3) => M2.value = true), onMouseleave: a3[1] || (a3[1] = (e3) => M2.value = false), icon: !s(k2).getShowData || s(k2).getShowDataLevel !== e2.level || M2.value ? "ant-design:caret-right-outlined" : "ant-design:check-outlined", level: e2.level, onClick: X2 }, null, 8, ["style", "icon", "level"])])], 2);
  };
} }), [["__scopeId", "data-v-00b0b721"]]), Ma = { key: 0 }, _a = { key: 1 }, Qa = t({ __name: "SqlQueryModal", setup(e2) {
  const l2 = o(500), a2 = o(""), [t2, { setModalProps: r2 }] = me(async (e3) => {
    r2({ width: "800px" }), a2.value = e3;
  }), { copy: d2, copied: m2 } = Me({ legacy: true });
  function p2(e3) {
    l2.value = e3;
  }
  return (e3, o2) => {
    const r3 = _("AButton");
    return u(), c(s(ce), M(e3.$attrs, { onRegister: s(t2), title: "SQL查看", "show-ok-btn": false, "cancel-text": "关闭", onHeightChange: p2 }), { insertFooter: v(() => [f(r3, { onClick: o2[0] || (o2[0] = (e4) => s(d2)(a2.value)), color: s(m2) ? "success" : "primary" }, { default: v(() => [s(m2) ? (u(), n("span", _a, "已拷贝")) : (u(), n("span", Ma, "拷贝"))]), _: 1 }, 8, ["color"])]), default: v(() => [f(s(_e), { style: i({ height: `${l2.value}px` }), mode: s(Qe).JS, value: a2.value, "onUpdate:value": o2[1] || (o2[1] = (e4) => a2.value = e4), readonly: true }, null, 8, ["style", "mode", "value"])]), _: 1 }, 16, ["onRegister"]);
  };
} });
export {
  pl as API_SAVE,
  dl as AggregateType,
  ka as ApiConfig,
  yl as ApiConfigEvent,
  cl as ExpressionType,
  sl as FilterCondition,
  ya as ParamsModal,
  Qa as SqlQueryModal,
  kl as buildSql,
  hl as containNest,
  Ae as deleteApiFolder,
  Be as deleteApiParams,
  Ge as deleteBatchFormulaInfo,
  Pe as deleteFormulaInfo,
  Xe as deleteMfApi,
  xe as dragApiFolder,
  Se as exportApiFolder,
  $e as exportApiParams,
  Ue as exportFormulaInfo,
  We as exportMfApi,
  vl as formulaColName,
  al as formulaTest,
  il as getApiDataById,
  Ne as getApiFolderAndFile,
  Te as getApiFolderTree,
  Ie as getApiParamsList,
  Je as getApiUrl,
  nl as getDataFieldsById,
  ul as getDataTableById,
  Ml as getFieldIcon,
  Ee as getFormulaInfoById,
  Le as getFormulaInfoList,
  Oe as getFormulaParamList,
  De as getFormulaTree,
  gl as getInnerFields,
  Ze as getMfApiById,
  Ke as getMfApiList,
  Cl as getParams,
  ll as getQueryData,
  tl as getQueryFields,
  el as getQuerySql,
  ol as getSourceHeaders,
  Fe as insertApiFolder,
  Re as insertApiParams,
  ze as insertFormulaInfo,
  Ye as insertMfApi,
  bl as isNeedNest,
  ql as queryDataEvent,
  rl as renameField,
  we as updateApiFolder,
  je as updateApiParams,
  Ve as updateFormulaInfo,
  He as updateMfApi,
  ml as useApiShortcut,
  fl as useApiStore
};
