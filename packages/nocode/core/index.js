var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { defineComponent as e, useCssVars as t, useTemplateRef as o, computed as a, watch as l, reactive as n, onMounted as i, createElementBlock as r, openBlock as s, normalizeStyle as u, normalizeClass as c, unref as d, createElementVNode as p, createCommentVNode as f, createBlock as h, createVNode as g, ref as m, Fragment as y, renderList as v, nextTick as C, toRaw as b, withCtx as M, withModifiers as k, resolveComponent as w, createTextVNode as x, toDisplayString as S, onUnmounted as _, mergeProps as $, readonly as L, normalizeProps as D, guardReactiveProps as I, shallowRef as T, onBeforeMount as N, toHandlers as B, renderSlot as R, createSlots as q, toRefs as A, withDirectives as O, resolveDynamicComponent as j, vShow as z, markRaw as E, Transition as F } from "vue";
import { theme as P, Input as H, InputNumber as Q, Tooltip as G, Segmented as U, Dropdown as V, Checkbox as W, RadioButton as Y, RadioGroup as Z, Select as K, Image as X, Divider as J, Button as ee, Menu as te, Cascader as oe, Radio as ae, Form as le, DatePicker as ne, RangePicker as ie, Switch as re, Breadcrumb as se, Descriptions as ue, Row as ce, Col as de, Card as pe, Drawer as fe, Alert as he, Tag as ge, ConfigProvider as me, Watermark as ye, Modal as ve, InputGroup as Ce, Table as be, Textarea as Me, Empty as ke, MenuItem as we } from "ant-design-vue";
import { useDesign as xe, useRootSetting as Se, useMessage as _e, useI18n as $e, useDarkModeTheme as Le } from "@mfish/core/hooks";
import { useEyeDropper as De, useClipboard as Ie, useDebounceFn as Te, useFocus as Ne } from "@vueuse/core";
import { Icon as Be, IconFont as Re } from "@mfish/core/components/Icon";
import { cloneDeep as qe, debounce as Ae, once as Oe, isElement as je, merge as ze, uniqueId as Ee, sum as Fe, random as Pe, throttle as He, omit as Qe } from "lodash-es";
import { ThemeEnum as Ge } from "@mfish/core/enums";
import { fade as Ue } from "@jiaminghi/color";
import { buildUUID as Ve } from "@mfish/core/utils/Uuid";
import { isFunction as We, isArray as Ye, isObject as Ze, isString as Ke, isNumber as Xe } from "@mfish/core/utils/Is";
import { defHttp as Je } from "@mfish/core/utils/http/axios";
import { defineStore as et } from "pinia";
import { useAppStore as tt } from "@mfish/stores/modules";
import ot from "@mfish/core/assets/images/noImage.png";
import { mitt as at } from "@mfish/core/utils/Mitt";
import { createAsyncComponent as lt } from "@mfish/core/utils/factory/CreateAsyncComponent";
import { Button as nt } from "@mfish/core/components/Button";
import { router as it } from "@mfish/core/router";
import { sleep as rt } from "@mfish/core/utils/Utils";
import { formatToDateTime as st } from "@mfish/core/utils/DateUtil";
import { imageUrl as ut, getLocalFileUrl as ct, imageSrc as dt } from "@mfish/core/utils/file/FileUtils";
import { DeleteOutlined as pt, CaretRightOutlined as ft, CheckOutlined as ht, FolderOpenTwoTone as gt, FolderTwoTone as mt } from "@ant-design/icons-vue";
import { ScrollContainer as yt } from "@mfish/core/components/Container";
import { DraggableInput as vt } from "@mfish/core/components/Draggable";
import { BasicModal as Ct, useModalInner as bt, useModal as Mt } from "@mfish/core/components/Modal";
import { BasicForm as kt, useForm as wt } from "@mfish/core/components/Form";
import { BasicTree as xt } from "@mfish/core/components/Tree";
import { Split as St } from "@mfish/core/components/Split";
import { useTable as _t, BasicTable as $t } from "@mfish/core/components/Table";
import { CodeEditor as Lt, MODE as Dt } from "@mfish/core/components/CodeEditor";
import { useLocale as It } from "@mfish/core/i18n/UseLocale";
import { propTypes as Tt } from "@mfish/core/utils/PropTypes";
import { FileUp as Nt } from "@mfish/core/components/FileUpDown";
import { NCollapseTransition as Bt } from "naive-ui";
import Rt from "vuedraggable";
import { queryCategoryTreeByCode as qt } from "@mfish/core/api";
const At = "color_recently_bi", Ot = "gradient_color_recently_bi", jt = ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)", "rgba(35, 69, 231, 1)", "rgba(35, 231, 196, 1)", "rgba(65, 231, 35, 1)", "rgba(231, 35, 35, 1)"], zt = ["linear-gradient(120deg, rgba(243,231,233,1) 0%, rgba(227,238,255,1) 100%)", "linear-gradient(45deg, rgba(161,140,209,1) 0%, rgba(251,194,235,1) 100%)", "linear-gradient(90deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%)", "linear-gradient(180deg, rgba(204,32,142,1) 0%, rgba(103,19,210,1) 100%)", "linear-gradient(-225deg, rgba(35,21,87,1) 0%, rgba(68,16,122,1) 29%, rgba(255,19,97,1) 67%, rgba(255,248,0,1) 100%)", "linear-gradient(180deg, rgba(30,60,114,1) 0%, rgba(30,60,114,1) 1%, rgba(42,82,152,1) 100%)", "linear-gradient(-20deg, rgba(43,88,118,1) 0%, rgba(78,67,118,1) 100%)", "linear-gradient(45deg, rgba(58,181,176,1) 0%, rgba(61,153,190,1) 31%, rgba(86,49,122,1) 100%)", "linear-gradient(180deg, rgba(106,17,203,1) 0%, rgba(37,117,252,1) 100%)"];
function Et(e2) {
  const t2 = e2 / 180 * Math.PI;
  return { x1: 0.5 - 0.5 * Math.cos(t2), y1: 0.5 - 0.5 * Math.sin(t2), x2: 0.5 + 0.5 * Math.cos(t2), y2: 0.5 + 0.5 * Math.sin(t2) };
}
function Ft(e2) {
  const t2 = {}, o2 = /\d*%/, a2 = /rgba\((?:\s*\d+\s*,){3}\s*[\d.]+\s*\)/;
  t2.deg = e2.match(/-?\d+deg/)[0].replace("deg", "");
  const l2 = [];
  return e2.match(/rgba\((?:\s*\d+\s*,){3}\s*[\d.]+\s*\)\s*\d*%/g).forEach((e3) => {
    l2.push({ rgbaLength: e3.match(o2)[0], rgba: e3.match(a2)[0] });
  }), t2.colors = l2, t2;
}
const Pt = function(e2, t2, o2) {
  return [e2, t2 * o2 / ((e2 = (2 - t2) * o2) < 1 ? e2 : 2 - e2) || 0, e2 / 2];
}, Ht = function(e2, t2) {
  var o2;
  "string" == typeof (o2 = e2) && o2.includes(".") && 1 === Number.parseFloat(o2) && (e2 = "100%");
  const a2 = ((e3) => "string" == typeof e3 && e3.includes("%"))(e2);
  return e2 = Math.min(t2, Math.max(0, Number.parseFloat(`${e2}`))), a2 && (e2 = Number.parseInt("" + e2 * t2, 10) / 100), Math.abs(e2 - t2) < 1e-6 ? 1 : e2 % t2 / Number.parseFloat(t2);
}, Qt = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }, Gt = (e2) => {
  e2 = Math.min(Math.round(e2), 255);
  const t2 = Math.floor(e2 / 16), o2 = e2 % 16;
  return `${Qt[t2] || t2}${Qt[o2] || o2}`;
}, Ut = function({ r: e2, g: t2, b: o2 }) {
  return Number.isNaN(+e2) || Number.isNaN(+t2) || Number.isNaN(+o2) ? "" : `#${Gt(e2)}${Gt(t2)}${Gt(o2)}`;
}, Vt = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }, Wt = function(e2) {
  return 2 === e2.length ? 16 * (Vt[e2[0].toUpperCase()] || +e2[0]) + (Vt[e2[1].toUpperCase()] || +e2[1]) : Vt[e2[1].toUpperCase()] || +e2[1];
}, Yt = (e2, t2, o2) => {
  e2 = Ht(e2, 255), t2 = Ht(t2, 255), o2 = Ht(o2, 255);
  const a2 = Math.max(e2, t2, o2), l2 = Math.min(e2, t2, o2);
  let n2;
  const i2 = a2, r2 = a2 - l2, s2 = 0 === a2 ? 0 : r2 / a2;
  if (a2 === l2) n2 = 0;
  else {
    switch (a2) {
      case e2:
        n2 = (t2 - o2) / r2 + (t2 < o2 ? 6 : 0);
        break;
      case t2:
        n2 = (o2 - e2) / r2 + 2;
        break;
      case o2:
        n2 = (e2 - t2) / r2 + 4;
    }
    n2 /= 6;
  }
  return { h: 360 * n2, s: 100 * s2, v: 100 * i2 };
}, Zt = function(e2, t2, o2) {
  e2 = 6 * Ht(e2, 360), t2 = Ht(t2, 100), o2 = Ht(o2, 100);
  const a2 = Math.floor(e2), l2 = e2 - a2, n2 = o2 * (1 - t2), i2 = o2 * (1 - l2 * t2), r2 = o2 * (1 - (1 - l2) * t2), s2 = a2 % 6, u2 = [o2, i2, n2, n2, r2, o2][s2], c2 = [r2, o2, o2, i2, n2, n2][s2], d2 = [n2, n2, r2, o2, o2, i2][s2];
  return { r: Math.round(255 * u2), g: Math.round(255 * c2), b: Math.round(255 * d2) };
};
class Kt {
  constructor(e2 = {}) {
    __publicField(this, "_hue", 0);
    __publicField(this, "_saturation", 100);
    __publicField(this, "_value", 100);
    __publicField(this, "_alpha", 100);
    __publicField(this, "enableAlpha", false);
    __publicField(this, "format", "hex");
    __publicField(this, "value", "");
    __publicField(this, "selected");
    for (const t2 in e2) Object.prototype.hasOwnProperty.call(e2, t2) && (this[t2] = e2[t2]);
    e2.value ? this.fromString(e2.value) : this.doOnChange();
  }
  set(e2, t2) {
    if (1 !== arguments.length || "object" != typeof e2) this[`_${e2}`] = t2, this.doOnChange();
    else for (const t3 in e2) Object.prototype.hasOwnProperty.call(e2, t3) && this.set(t3, e2[t3]);
  }
  get(e2) {
    return "alpha" === e2 ? Math.floor(this[`_${e2}`]) : this[`_${e2}`];
  }
  toRgb() {
    return Zt(this._hue, this._saturation, this._value);
  }
  toHex() {
    const e2 = this.toRgb();
    return Ut(e2).slice(0, 7);
  }
  fromString(e2) {
    if (!e2) return this._hue = 0, this._saturation = 100, this._value = 100, void this.doOnChange();
    const t2 = (e3, t3, o2) => {
      this._hue = Math.max(0, Math.min(360, e3)), this._saturation = Math.max(0, Math.min(100, t3)), this._value = Math.max(0, Math.min(100, o2)), this.doOnChange();
    };
    if (e2.includes("hsl")) {
      const o2 = e2.replaceAll(/hsla|hsl|\(|\)/g, "").split(/\s|,/g).filter((e3) => "" !== e3).map((e3, t3) => t3 > 2 ? Number.parseFloat(e3) : Number.parseInt(e3, 10));
      if (4 === o2.length ? this._alpha = 100 * Number.parseFloat(o2[3].toString()) : 3 === o2.length && (this._alpha = 100), o2.length >= 3) {
        const { h: e3, s: a2, v: l2 } = function(e4, t3, o3) {
          o3 /= 100;
          let a3 = t3 /= 100;
          const l3 = Math.max(o3, 0.01);
          return t3 *= (o3 *= 2) <= 1 ? o3 : 2 - o3, a3 *= l3 <= 1 ? l3 : 2 - l3, { h: e4, s: 100 * (0 === o3 ? 2 * a3 / (l3 + a3) : 2 * t3 / (o3 + t3)), v: (o3 + t3) / 2 * 100 };
        }(o2[0], o2[1], o2[2]);
        t2(e3, a2, l2);
      }
    } else if (e2.includes("hsv")) {
      const o2 = e2.replaceAll(/hsva|hsv|\(|\)/g, "").split(/\s|,/g).filter((e3) => "" !== e3).map((e3, t3) => t3 > 2 ? Number.parseFloat(e3) : Number.parseInt(e3, 10));
      4 === o2.length ? this._alpha = 100 * Number.parseFloat(o2[3].toString()) : 3 === o2.length && (this._alpha = 100), o2.length >= 3 && t2(o2[0], o2[1], o2[2]);
    } else if (e2.includes("rgb")) {
      const o2 = e2.replaceAll(/rgba|rgb|\(|\)/g, "").split(/\s|,/g).filter((e3) => "" !== e3).map((e3, t3) => t3 > 2 ? Number.parseFloat(e3) : Number.parseInt(e3, 10));
      if (4 === o2.length ? this._alpha = 100 * Number.parseFloat(o2[3].toString()) : 3 === o2.length && (this._alpha = 100), o2.length >= 3) {
        const { h: e3, s: a2, v: l2 } = Yt(o2[0], o2[1], o2[2]);
        t2(e3, a2, l2);
      }
    } else if (e2.includes("#")) {
      const o2 = e2.replace("#", "").trim();
      if (!/^[\da-f]{3}$|^[\da-f]{6}$|^[\da-f]{8}$/i.test(o2)) return;
      let a2, l2, n2;
      3 === o2.length ? (a2 = Wt(o2[0] + o2[0]), l2 = Wt(o2[1] + o2[1]), n2 = Wt(o2[2] + o2[2])) : 6 !== o2.length && 8 !== o2.length || (a2 = Wt(o2.slice(0, 2)), l2 = Wt(o2.slice(2, 4)), n2 = Wt(o2.slice(4, 6))), 8 === o2.length ? this._alpha = Wt(o2.slice(6)) / 255 * 100 : 3 !== o2.length && 6 !== o2.length || (this._alpha = 100);
      const { h: i2, s: r2, v: s2 } = Yt(a2, l2, n2);
      t2(i2, r2, s2);
    }
  }
  compare(e2) {
    return Math.abs(e2._hue - this._hue) < 2 && Math.abs(e2._saturation - this._saturation) < 1 && Math.abs(e2._value - this._value) < 1 && Math.abs(e2._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: e2, _saturation: t2, _value: o2, _alpha: a2, format: l2 } = this;
    if (this.enableAlpha) switch (l2) {
      case "hsl": {
        const a3 = Pt(e2, t2 / 100, o2 / 100);
        this.value = `hsla(${e2}, ${Math.round(100 * a3[1])}%, ${Math.round(100 * a3[2])}%, ${this.get("alpha") / 100})`;
        break;
      }
      case "hsv":
        this.value = `hsva(${e2}, ${Math.round(t2)}%, ${Math.round(o2)}%, ${this.get("alpha") / 100})`;
        break;
      case "hex":
        this.value = `${Ut(Zt(e2, t2, o2))}${Gt(255 * a2 / 100)}`;
        break;
      default: {
        const { r: a3, g: l3, b: n2 } = Zt(e2, t2, o2);
        this.value = `rgba(${a3}, ${l3}, ${n2}, ${this.get("alpha") / 100})`;
      }
    }
    else switch (l2) {
      case "hsl": {
        const a3 = Pt(e2, t2 / 100, o2 / 100);
        this.value = `hsl(${e2}, ${Math.round(100 * a3[1])}%, ${Math.round(100 * a3[2])}%)`;
        break;
      }
      case "hsv":
        this.value = `hsv(${e2}, ${Math.round(t2)}%, ${Math.round(o2)}%)`;
        break;
      case "rgb": {
        const { r: a3, g: l3, b: n2 } = Zt(e2, t2, o2);
        this.value = `rgb(${a3}, ${l3}, ${n2})`;
        break;
      }
      default:
        this.value = Ut(Zt(e2, t2, o2));
    }
  }
}
let Xt = false;
function Jt(e2, t2) {
  const o2 = function(e3) {
    var _a2;
    (_a2 = t2.drag) == null ? void 0 : _a2.call(t2, e3);
  }, a2 = function(e3) {
    var _a2;
    document.removeEventListener("mousemove", o2), document.removeEventListener("mouseup", a2), document.removeEventListener("touchmove", o2), document.removeEventListener("touchend", a2), document.onselectstart = null, document.ondragstart = null, Xt = false, (_a2 = t2.end) == null ? void 0 : _a2.call(t2, e3);
  }, l2 = function(e3) {
    var _a2;
    Xt || (e3.preventDefault(), document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", o2), document.addEventListener("mouseup", a2), document.addEventListener("touchmove", o2), document.addEventListener("touchend", a2), Xt = true, (_a2 = t2.start) == null ? void 0 : _a2.call(t2, e3));
  };
  e2.addEventListener("mousedown", l2), e2.addEventListener("touchstart", l2, { passive: false });
}
const eo = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2) o2[e3] = a2;
  return o2;
}, to = eo(e({ __name: "ColorPanel", props: { color: { type: Object, required: true }, height: { type: Number, default: 150 }, isShow: { type: Boolean, default: false } }, setup(e2) {
  t((t2) => ({ "003068da": `${e2.height}px` }));
  const h2 = e2, g2 = o("colorPanelRef"), m2 = a(() => ({ hue: h2.color.get("hue"), value: h2.color.get("value") })), { prefixCls: y2 } = xe("color-panel");
  l(() => m2, () => {
    C2();
  }, { deep: true }), l(() => h2.isShow, (e3) => {
    e3 && setTimeout(() => {
      C2(), v2.showCursor = true;
    }, 5);
  }, { immediate: true });
  const v2 = n({ showCursor: false, cursorTop: 0, cursorLeft: 0, background: "hsl(0, 100%, 50%)", HSL: {} });
  function C2() {
    if (!g2.value) return;
    const e3 = h2.color.get("saturation"), t2 = h2.color.get("value"), { clientWidth: o2, clientHeight: a2 } = g2.value;
    v2.cursorLeft = e3 * o2 / 100, v2.cursorTop = (100 - t2) * a2 / 100, v2.background = `hsl(${h2.color.get("hue")}, 100%, 50%)`;
  }
  function b2(e3) {
    const t2 = g2.value;
    if (!t2) return;
    const o2 = t2.getBoundingClientRect();
    let a2 = e3.clientX - o2.left, l2 = e3.clientY - o2.top;
    a2 = Math.max(0, a2), a2 = Math.min(a2, o2.width), l2 = Math.max(0, l2), l2 = Math.min(l2, o2.height), v2.cursorLeft = a2, v2.cursorTop = l2, v2.HSL = { saturation: a2 / o2.width * 100, value: 100 - l2 / o2.height * 100 }, h2.color.set({ saturation: a2 / o2.width * 100, value: 100 - l2 / o2.height * 100 });
  }
  return i(() => {
    g2.value && Jt(g2.value, { drag: (e3) => {
      b2(e3);
    }, end: (e3) => {
      b2(e3);
    } });
  }), (e3, t2) => (s(), r("div", { class: c(d(y2)), ref_key: "colorPanelRef", ref: g2, style: u({ backgroundColor: v2.background }) }, [t2[1] || (t2[1] = p("div", { class: "color__white" }, null, -1)), t2[2] || (t2[2] = p("div", { class: "color__black" }, null, -1)), v2.showCursor ? (s(), r("div", { key: 0, class: "color-cursor", style: u({ top: `${v2.cursorTop}px`, left: `${v2.cursorLeft}px` }) }, t2[0] || (t2[0] = [p("div", null, null, -1)]), 4)) : f("", true)], 6));
} }), [["__scopeId", "data-v-696c5dfb"]]), oo = eo(e({ __name: "ColorHueSlider", props: { color: { type: Object, required: true }, vertical: { type: Boolean, default: false } }, emits: ["startEyeDropper", "endEyeDropper"], setup(e2, { emit: t2 }) {
  const m2 = e2, y2 = t2, v2 = n({ left: 0, top: 0, hue: 0 }), C2 = o("barRef"), b2 = o("thumbRef"), M2 = o("colorHueSliderRef"), { prefixCls: k2 } = xe("hue-slider"), { isSupported: w2, open: x2, sRGBHex: S2 } = De(), _2 = a(() => m2.color.get("hue"));
  function $2() {
    y2("startEyeDropper"), x2();
  }
  function L2(e3) {
    const t3 = b2.value;
    e3.target !== t3 && D2(e3);
  }
  function D2(e3) {
    const t3 = b2.value, o2 = M2.value;
    if (!t3 || !o2) return;
    const a2 = o2.getBoundingClientRect();
    let l2;
    if (m2.vertical) {
      let o3 = e3.clientY - a2.top;
      o3 = Math.min(o3, a2.height - t3.offsetHeight / 2), o3 = Math.max(t3.offsetHeight / 2, o3), l2 = Math.round((o3 - t3.offsetHeight / 2) / (a2.height - t3.offsetHeight) * 360);
    } else {
      let o3 = e3.clientX - a2.left;
      o3 = Math.min(o3, a2.width - t3.offsetWidth / 2), o3 = Math.max(t3.offsetWidth / 2, o3), l2 = Math.round((o3 - t3.offsetWidth / 2) / (a2.width - t3.offsetWidth) * 360);
    }
    m2.color.set("hue", l2);
  }
  function I2() {
    v2.left = function() {
      if (m2.vertical) return 0;
      const e3 = b2.value, t3 = M2.value;
      if (!t3 || !e3) return 0;
      const o2 = m2.color.get("hue");
      return Math.round(o2 * (t3.offsetWidth - e3.offsetWidth / 2) / 360);
    }(), v2.top = function() {
      if (!m2.vertical) return 10;
      const e3 = b2.value, t3 = M2.value;
      if (!t3 || !e3) return 10;
      const o2 = m2.color.get("hue");
      return Math.round(o2 * (t3.offsetHeight - e3.offsetHeight / 2) / 360);
    }();
  }
  return i(() => {
    const e3 = C2.value, t3 = b2.value;
    if (!e3 || !t3) return;
    const o2 = { drag: (e4) => {
      D2(e4);
    }, end: (e4) => {
      D2(e4);
    } };
    Jt(e3, o2), Jt(t3, o2), I2();
  }), l(S2, (e3) => {
    e3 && (m2.color.fromString(e3), setTimeout(() => {
      y2("endEyeDropper", e3);
    }, 10));
  }), l(() => _2.value, () => {
    I2();
  }), (e3, t3) => (s(), r("div", { class: c(d(k2)) }, [d(w2) ? (s(), h(d(Be), { key: 0, class: "icon", icon: "ion:eyedrop-outline", onClick: $2 })) : f("", true), p("div", { class: "bar-contain", ref_key: "colorHueSliderRef", ref: M2 }, [p("div", { class: "bar", onClick: L2, ref_key: "barRef", ref: C2 }, null, 512), p("div", { class: "thumb", ref_key: "thumbRef", ref: b2, style: u({ left: `${v2.left}px`, top: `${v2.top}px` }) }, [g(d(Be), { class: "thumb__icon", icon: "ant-design:caret-up-outlined" })], 4)], 512)], 2));
} }), [["__scopeId", "data-v-b2d0e443"]]), ao = { class: "background" }, lo = { class: "color-text" }, no = { class: "color-input" }, io = { class: "color-input-percentage" }, ro = { class: "color-input-percentage" }, so = { class: "color-input-percentage" }, uo = { class: "color-input-percentage a" }, co = eo(e({ __name: "ColorText", props: { color: { type: Object, required: true } }, setup(e2) {
  t((e3) => ({ "09aca737": v2.value }));
  const o2 = e2, i2 = m(""), f2 = n({ r: 0, g: 0, b: 0, a: 100 }), { prefixCls: h2 } = xe("color-text"), { token: y2 } = P.useToken(), v2 = a(() => y2.value.colorBorder), C2 = a(() => `rgba(${f2.r}, ${f2.g}, ${f2.b}, ${f2.a / 100})`);
  function b2() {
    o2.color.set("alpha", f2.a);
  }
  function M2() {
    o2.color.fromString(i2.value), o2.color.set("alpha", f2.a);
  }
  function k2() {
    o2.color.fromString(d(C2));
  }
  return l(() => o2.color, () => {
    const e3 = o2.color.toRgb();
    f2.r = e3.r, f2.g = e3.g, f2.b = e3.b, f2.a = o2.color.get("alpha"), i2.value = o2.color.toHex();
  }, { immediate: true, deep: true }), l(i2, (e3) => {
    e3.startsWith("#") || (i2.value = `#${e3}`);
  }), (e3, t2) => (s(), r("div", { class: c(d(h2)) }, [p("div", ao, [p("div", { class: "background-color", style: u({ backgroundColor: C2.value }) }, null, 4)]), p("div", lo, [p("div", no, [g(d(H), { size: "small", value: i2.value, "onUpdate:value": t2[0] || (t2[0] = (e4) => i2.value = e4), onPressEnter: M2, onBlur: M2, maxlength: 7 }, null, 8, ["value"])])]), p("div", io, [t2[5] || (t2[5] = p("div", { class: "prefix" }, "R", -1)), g(d(Q), { size: "small", value: f2.r, "onUpdate:value": t2[1] || (t2[1] = (e4) => f2.r = e4), bordered: false, controls: false, onPressEnter: k2, onBlur: k2, step: 1, min: 0, max: 255, maxlength: 3 }, null, 8, ["value"])]), p("div", ro, [t2[6] || (t2[6] = p("div", { class: "prefix" }, "G", -1)), g(d(Q), { size: "small", bordered: false, value: f2.g, "onUpdate:value": t2[2] || (t2[2] = (e4) => f2.g = e4), controls: false, onPressEnter: k2, onBlur: k2, step: 1, min: 0, max: 255, maxlength: 3 }, null, 8, ["value"])]), p("div", so, [t2[7] || (t2[7] = p("div", { class: "prefix" }, "B", -1)), g(d(Q), { size: "small", bordered: false, value: f2.b, "onUpdate:value": t2[3] || (t2[3] = (e4) => f2.b = e4), controls: false, onPressEnter: k2, onBlur: k2, step: 1, min: 0, max: 255, maxlength: 3 }, null, 8, ["value"])]), p("div", uo, [t2[8] || (t2[8] = p("div", { class: "prefix" }, "A", -1)), g(d(Q), { size: "small", bordered: false, value: f2.a, "onUpdate:value": t2[4] || (t2[4] = (e4) => f2.a = e4), controls: false, onPressEnter: b2, onChange: b2, step: 1, min: 0, max: 100, maxlength: 3 }, null, 8, ["value"]), t2[9] || (t2[9] = p("div", null, "%", -1))])], 2));
} }), [["__scopeId", "data-v-2bab5fee"]]), po = { class: "colors" }, fo = ["onClick"], ho = e({ __name: "ColorRecently", props: { color: { type: Object, required: true }, isShow: { type: Boolean, default: false } }, setup(e2) {
  t((e3) => ({ "8433eb3a": g2.value }));
  const o2 = e2, n2 = m(jt), i2 = m([]), { prefixCls: f2 } = xe("color-recently"), { token: h2 } = P.useToken(), g2 = a(() => h2.value.colorBorder);
  function C2(e3, t2) {
    return e3.map((e4) => {
      const o3 = new Kt();
      return o3.enableAlpha = true, o3.format = "rgba", o3.fromString(e4), o3.selected = o3.value === t2.value, o3;
    });
  }
  return l(n2, (e3) => {
    i2.value = C2(e3, o2.color);
  }), l(() => o2.color, (e3) => {
    i2.value = C2(n2.value, e3), i2.value.forEach((t2) => {
      t2.selected = e3.compare(t2);
    });
  }, { deep: true }), l(() => o2.isShow, (e3) => {
    e3 && function() {
      const e4 = localStorage.getItem(At);
      if (!e4) return void (i2.value = C2(d(n2), o2.color));
      const t2 = JSON.parse(e4);
      t2 && t2.length > 0 && (n2.value = [...t2].slice(0, 20));
    }();
  }, { immediate: true }), (e3, t2) => (s(), r("div", { class: c(d(f2)) }, [t2[0] || (t2[0] = p("div", { class: "last-time-text" }, "最近使用", -1)), p("div", po, [(s(true), r(y, null, v(i2.value, (e4, t3) => (s(), r("div", { class: c(["color-selector", { selected: e4.selected }]), key: t3, onClick: (e5) => function(e6) {
    o2.color.fromString(n2.value[e6]);
  }(t3) }, [p("div", { class: "default", style: u({ "background-color": e4.value }) }, null, 4)], 10, fo))), 128))])], 2));
} }), go = eo(ho, [["__scopeId", "data-v-98ec7ef1"]]), mo = { class: "colors" }, yo = ["onClick"], vo = e({ __name: "GradientColorRecently", props: { color: { type: String, default: "" }, isShow: { type: Boolean, default: false } }, emits: ["selectColor"], setup(e2, { emit: o2 }) {
  t((e3) => ({ "7fb04f44": C2.value }));
  const n2 = e2, i2 = o2, f2 = m([]), { prefixCls: h2 } = xe("color-recently"), { token: g2 } = P.useToken(), C2 = a(() => g2.value.colorBorder), b2 = m();
  return l(() => n2.isShow, (e3) => {
    e3 && (!function() {
      const e4 = localStorage.getItem(Ot);
      if (!e4) return void (f2.value = zt);
      const t2 = JSON.parse(e4);
      t2 && t2.length > 0 && (f2.value = [...t2].slice(0, 20));
    }(), setTimeout(() => {
      if (!n2.color) return;
      const e4 = n2.color.replaceAll(/\s*/g, "");
      for (let t2 = 0; t2 < f2.value.length; t2++) if (f2.value[t2].replaceAll(/\s*/g, "") === e4) return void (b2.value = t2);
    }, 5));
  }, { immediate: true }), (e3, t2) => (s(), r("div", { class: c(d(h2)) }, [t2[0] || (t2[0] = p("div", { class: "last-time-text" }, "最近使用", -1)), p("div", mo, [(s(true), r(y, null, v(f2.value, (e4, t3) => (s(), r("div", { class: c(["color-selector", { selected: b2.value === t3 }]), key: t3, onClick: (o3) => function(e5, t4) {
    b2.value = e5;
    const o4 = Ft(t4);
    i2("selectColor", o4);
  }(t3, e4) }, [p("div", { class: "default", style: u({ background: e4 }) }, null, 4)], 10, yo))), 128))])], 2));
} }), Co = eo(vo, [["__scopeId", "data-v-be7486eb"]]), bo = { class: "hue-slider" }, Mo = ["onMousedown", "onDblclick"], ko = { class: "color-input-percentage" }, wo = e({ __name: "GradientColor", props: { isShow: { type: Boolean, default: false }, colors: { type: Object, default: () => ({ deg: 45, colors: [{ rgba: "rgba(255, 255, 0, 1)", rgbaLength: "0%" }, { rgba: "rgba(0, 0, 255, 0.9)", rgbaLength: "100%" }] }) } }, emits: ["colorChange", "startEyeDropper", "endEyeDropper"], setup(e2, { emit: n2 }) {
  t((e3) => ({ 40133406: T2.value }));
  const i2 = e2, f2 = n2, h2 = m(new Kt({ enableAlpha: true, format: "rgba" }));
  const w2 = m(0), x2 = m([]), S2 = m(45), _2 = m(), $2 = o("barRef"), L2 = m([]), { prefixCls: D2 } = xe("gradient-color"), { token: I2 } = P.useToken(), T2 = a(() => I2.value.colorBorder), N2 = a(() => _2.value ? { background: _2.value } : {});
  function B2(e3) {
    x2.value = qe(b(e3.colors)), _2.value = R2(false), w2.value = 0, h2.value.fromString(x2.value[0].rgba), S2.value = e3.deg;
  }
  function R2(e3 = true) {
    if (x2.value && x2.value.length > 0) {
      let t2 = "";
      const o2 = JSON.parse(JSON.stringify(x2.value)).sort((e4, t3) => e4.rgbaLength.match(/\d*/)[0] - t3.rgbaLength.match(/\d*/)[0]);
      return o2.forEach((e4, a2) => {
        a2 === o2.length - 1 ? t2 += `${e4.rgba} ${e4.rgbaLength}` : t2 += `${e4.rgba} ${e4.rgbaLength},`;
      }), t2 = `linear-gradient(${S2.value}deg, ${t2})`, e3 && f2("colorChange", t2), t2;
    }
  }
  function q2(e3) {
    if (!$2.value) return;
    const t2 = $2.value.getBoundingClientRect();
    let o2 = 0;
    if (e3.clientX - t2.left > 0) {
      const a3 = e3.clientX - t2.left;
      o2 = Math.round(a3 / t2.width * 100), o2 > 100 && (o2 = 100);
    }
    const a2 = x2.value && x2.value[0] ? x2.value[0].rgba : "rgba(161, 234, 197, 0.98)";
    x2.value.push({ rgbaLength: `${o2}%`, rgba: a2 }), w2.value = x2.value.length - 1;
  }
  function A2() {
    d(S2) || (S2.value = 0), _2.value = R2();
  }
  return l(() => i2.isShow, (e3) => {
    C(() => {
      e3 && B2(i2.colors);
    });
  }, { immediate: true }), l(x2, (e3) => {
    i2.isShow && (x2.value = e3, _2.value = R2());
  }, { deep: true }), l(h2, (e3) => {
    i2.isShow && (x2.value[w2.value].rgba = e3.value);
  }, { deep: true }), (t2, o2) => (s(), r("div", null, [p("div", { class: c(d(D2)) }, [p("div", bo, [g(d(G), { title: "点击增加新颜色", placement: "left" }, { default: M(() => [p("div", { class: "bar", ref_key: "barRef", ref: $2, onClick: k(q2, ["stop", "prevent"]), style: u(N2.value) }, null, 4)]), _: 1 }), (s(true), r(y, null, v(x2.value, (e3, t3) => (s(), r("div", { class: "thumb", ref_for: true, ref: (e4) => function(e5, t4) {
    L2.value[t4] = e5;
  }(e4, t3), key: `gradientColors${t3}`, onMousedown: (e4) => function(e5) {
    if (!$2.value || !L2.value) return;
    w2.value = e5, h2.value.fromString(x2.value[e5].rgba);
    const t4 = $2.value.getBoundingClientRect(), o3 = L2.value[e5], a2 = (a3) => {
      let l3 = 0;
      if (a3.clientX - t4.left > 0) {
        let e6 = a3.clientX - t4.left;
        e6 = Math.max(o3.offsetWidth / 2, e6), e6 = Math.min(e6, t4.width - o3.offsetWidth / 2), l3 = Math.round((e6 - o3.offsetWidth / 2) / (t4.width - o3.offsetWidth) * 100), l3 > 100 && (l3 = 100);
      }
      o3.style.left = `${l3}%`, x2.value[e5].rgbaLength = `${l3}%`, a3.preventDefault();
    }, l2 = () => {
      document.removeEventListener("mousemove", a2), document.removeEventListener("mouseup", l2);
    };
    document.addEventListener("mousemove", a2), document.addEventListener("mouseup", l2);
  }(t3), onDblclick: (e4) => function(e5) {
    x2.value.splice(e5, 1);
  }(t3), style: u({ left: e3.rgbaLength }) }, [g(d(Be), { title: "双击取消", class: c(["thumb__icon", w2.value === t3 ? "selected" : ""]), icon: "ant-design:caret-up-outlined" }, null, 8, ["class"])], 44, Mo))), 128))]), p("div", ko, [o2[3] || (o2[3] = p("div", { class: "prefix" }, "D", -1)), g(d(Q), { value: S2.value, "onUpdate:value": o2[0] || (o2[0] = (e3) => S2.value = e3), bordered: false, controls: false, max: 360, min: -360, step: 1, onChange: A2, maxlength: 4 }, null, 8, ["value"]), o2[4] || (o2[4] = p("div", { class: "suffix" }, "°", -1))])], 2), g(to, { style: { "margin-top": "4px" }, color: h2.value, height: 118, "is-show": e2.isShow }, null, 8, ["color", "is-show"]), g(oo, { style: { "margin-top": "8px" }, color: h2.value, onStartEyeDropper: o2[1] || (o2[1] = () => f2("startEyeDropper")), onEndEyeDropper: o2[2] || (o2[2] = (e3) => f2("endEyeDropper", e3)) }, null, 8, ["color"]), g(co, { style: { "margin-top": "15px" }, color: h2.value }, null, 8, ["color"]), g(Co, { style: { "margin-top": "8px" }, color: _2.value, "is-show": e2.isShow, onSelectColor: B2 }, null, 8, ["color", "is-show"])]));
} }), xo = eo(wo, [["__scopeId", "data-v-cf05475f"]]), So = { class: "header" }, _o = { key: 0, class: "content" }, $o = { key: 1, class: "content" }, Lo = { class: "confirm" }, Do = { key: 0 }, Io = { key: 1 }, To = e({ __name: "PickerDropdown", props: { type: { type: Number, default: 3 }, selectType: { type: Number, default: 1 }, color: { type: Object, required: true }, colors: { type: Object, default: () => ({ deg: 45, colors: [{ rgba: "rgba(255, 255, 0, 1)", rgbaLength: "0%" }, { rgba: "rgba(0, 0, 255, 0.9)", rgbaLength: "100%" }] }) }, isShow: { type: Boolean, default: false }, hideConfirm: { type: Boolean, default: false }, hideCancel: { type: Boolean, default: false } }, emits: ["changeGradientColor", "pickColor", "restColor", "selectTypeChange", "startEyeDropper", "endEyeDropper"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, { copy: n2, copied: u2 } = Ie({ legacy: true }), y2 = m([{ value: 1, payload: "纯色" }, { value: 2, payload: "渐变色" }]), v2 = m(), C2 = m(o2.selectType);
  function b2(e3) {
    C2.value = e3, a2("selectTypeChange", e3);
  }
  l(() => o2.isShow, (e3) => {
    e3 && (C2.value = o2.selectType, a2("selectTypeChange", d(C2)));
  }, { immediate: true }), i(() => {
    1 === o2.type ? y2.value = [y2.value[0]] : 2 === o2.type && (y2.value = [y2.value[1]]);
  });
  const { prefixCls: k2 } = xe("picker-dropdown");
  function _2() {
    a2("pickColor", 2 === d(C2) ? v2.value : o2.color.value);
  }
  function $2() {
    a2("restColor");
  }
  const L2 = Ae((e3) => {
    v2.value = e3, a2("changeGradientColor", e3);
  }, 200);
  function D2() {
    const e3 = 2 === d(C2) ? v2.value : o2.color.value;
    e3 && n2(e3);
  }
  function I2() {
    a2("startEyeDropper");
  }
  function T2(e3) {
    a2("endEyeDropper", e3);
  }
  return (t3, a3) => {
    const l2 = w("AButton");
    return s(), r("div", { class: c(d(k2)) }, [p("div", So, [g(d(U), { value: C2.value, options: y2.value, onChange: b2, block: "" }, { label: M(({ payload: e3 }) => [x(S(e3), 1)]), _: 1 }, 8, ["value", "options"])]), 1 !== C2.value || 1 !== e2.type && 3 !== e2.type ? f("", true) : (s(), r("div", _o, [g(to, { style: { "margin-top": "4px" }, color: e2.color, "is-show": e2.isShow }, null, 8, ["color", "is-show"]), g(oo, { style: { "margin-top": "8px" }, color: e2.color, onEndEyeDropper: T2, onStartEyeDropper: I2 }, null, 8, ["color"]), g(co, { style: { "margin-top": "15px" }, color: e2.color }, null, 8, ["color"]), g(go, { style: { "margin-top": "8px" }, color: e2.color, "is-show": e2.isShow }, null, 8, ["color", "is-show"])])), 2 !== C2.value || 2 !== e2.type && 3 !== e2.type ? f("", true) : (s(), r("div", $o, [g(xo, { onColorChange: d(L2), colors: e2.colors, "is-show": e2.isShow, onStartEyeDropper: I2, onEndEyeDropper: T2 }, null, 8, ["onColorChange", "colors", "is-show"])])), p("div", Lo, [o2.hideCancel ? f("", true) : (s(), h(l2, { key: 0, onClick: $2 }, { default: M(() => a3[0] || (a3[0] = [x("取消")])), _: 1, __: [0] })), g(l2, { onClick: D2, color: d(u2) ? "warning" : "primary" }, { default: M(() => [d(u2) ? (s(), r("span", Io, "!已拷贝")) : (s(), r("span", Do, "拷贝"))]), _: 1 }, 8, ["color"]), o2.hideConfirm ? f("", true) : (s(), h(l2, { key: 1, onClick: _2, color: "success" }, { default: M(() => a3[1] || (a3[1] = [x("确定")])), _: 1, __: [1] }))])], 2);
  };
} }), No = { key: 0, class: "color-background-text" }, Bo = { class: "color-background-show-box" }, Ro = { key: 1, style: { display: "flex" } }, qo = { class: "color-text" }, Ao = { class: "color-show-box" }, Oo = ["title"], jo = e({ name: "MfishColorPicker", __name: "index", props: { value: String, showAlpha: { type: Boolean, default: true }, type: { type: Number, default: 3 }, isDelete: { type: Boolean, default: false }, placeholder: { type: String, default: "请输入颜色，格式#FFFFFF" }, title: { type: String, default: "清空则为无色" }, hideConfirm: { type: Boolean, default: false }, hideCancel: { type: Boolean, default: false } }, emits: ["inputChange", "confirmChange"], setup(e2, { emit: o2 }) {
  t((e3) => ({ "018cd00d": D2.value }));
  const n2 = e2, i2 = o2, { prefixCls: y2 } = xe("color-picker"), v2 = m(1), b2 = Se().getDarkMode, w2 = m(false), x2 = m(new Kt({ value: d(b2) === Ge.DARK ? "#000000" : "#FFFFFF", enableAlpha: n2.showAlpha, format: "rgba" })), S2 = m({ deg: 120, colors: [{ rgba: "rgba(243, 231, 233, 1)", rgbaLength: "0%" }, { rgba: "rgba(227,238,255,1)", rgbaLength: "100%" }] }), _2 = m(""), $2 = m(100), { token: L2 } = P.useToken(), D2 = a(() => L2.value.colorBorder), I2 = m(), T2 = m(), N2 = a(() => ({ background: d(I2), height: "100%" }));
  l(() => n2.value, () => {
    A2();
  }, { immediate: true }), l(x2, (e3) => {
    e3 && ($2.value = e3.get("alpha"), _2.value = e3.toHex(), B2(), C(() => i2("inputChange", d(I2), d(_2))));
  }, { deep: true }), l(_2, (e3) => {
    e3 ? (e3.startsWith("#") || (_2.value = `#${e3}`), B2()) : I2.value = "";
  });
  const B2 = () => {
    const { r: e3, g: t2, b: o3 } = x2.value.toRgb();
    I2.value = `rgba(${e3}, ${t2}, ${o3}, ${x2.value.get("alpha") / 100})`;
  }, R2 = m(false), q2 = (e3) => {
    R2.value = e3, e3 ? A2() : W2();
  };
  function A2() {
    T2.value = n2.value, O2();
  }
  function O2() {
    T2.value && j2(T2.value) ? T2.value.includes("linear-gradient(") ? 1 === n2.type ? (v2.value = 1, I2.value = "rgba(255, 255, 255, 1)", x2.value.fromString(I2.value)) : (v2.value = 2, I2.value = T2.value, S2.value = Ft(T2.value)) : T2.value && (x2.value.fromString(T2.value), _2.value = x2.value.toHex(), I2.value = T2.value, v2.value = 1) : 2 === n2.type ? v2.value = 2 : (v2.value = 1, _2.value = "", I2.value = ""), $2.value = x2.value.get("alpha");
  }
  function j2(e3, t2) {
    if (!e3) return false;
    const o3 = /^#(?:[\da-f]{3}|[\da-f]{6}|[\da-f]{8})$/i, a2 = /^rgba?\((?:(?:25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*(?:,\s*)?(?:[01]\.?\d*)?\)$/i, l2 = /^linear-gradient\s*\(-?\s*\d{1,3}\s*deg,(?:\s*rgba?\s*\((?:\s*\d+\s*,){2}\s*\d+\s*(?:,\s*)?[\d.]{1,6}\s*\)\s*\d{1,3}%\s*(?:,\s*)?)*\s*\)/i;
    return 2 === t2 ? o3.test(e3) || a2.test(e3) : o3.test(e3) || a2.test(e3) || l2.test(e3);
  }
  const z2 = () => {
    _2.value = x2.value.toHex();
    Y2(x2.value.value), C(() => i2("confirmChange", d(I2), d(_2)));
  };
  function E2() {
    if (j2(_2.value, 2)) return x2.value.fromString(_2.value), x2.value.set("alpha", $2.value), void z2();
    _2.value = "", i2("confirmChange", "", "");
  }
  function F2() {
    x2.value.set("alpha", $2.value), z2();
  }
  function G2(e3) {
    e3.startsWith("linear-gradient(") ? (I2.value = e3, S2.value = Ft(e3), i2("inputChange", e3)) : (e3.value.fromString(e3), _2.value = e3.value.toHex());
  }
  function U2(e3) {
    R2.value = false, 2 === v2.value ? (I2.value = e3, S2.value = Ft(e3), Y2(e3), C(() => i2("confirmChange", d(I2), d(_2)))) : z2();
  }
  function W2() {
    R2.value = false, O2(), C(() => i2("confirmChange", d(I2), d(_2)));
  }
  function Y2(e3) {
    let t2 = [];
    const o3 = (e4, o4, a2) => {
      if (e4) {
        const a3 = JSON.parse(e4);
        a3 && a3.length > 0 ? t2.push(...a3) : t2.push(...o4);
      } else t2.push(...o4);
      const l2 = a2.replaceAll(/\s*/g, "");
      for (let e5 = 0; e5 < t2.length; e5++) t2[e5].replaceAll(/\s*/g, "") === l2 && t2.splice(e5, 1);
      t2.unshift(a2);
    };
    if (2 === v2.value) {
      return o3(localStorage.getItem(Ot), zt, e3), t2 = t2.slice(0, 14), void localStorage.setItem(Ot, JSON.stringify(t2));
    }
    o3(localStorage.getItem(At), jt, e3), t2 = t2.slice(0, 20), localStorage.setItem(At, JSON.stringify(t2));
  }
  function Z2(e3) {
    v2.value = e3, 1 === e3 && (B2(), i2("inputChange", d(I2), d(_2)));
  }
  const K2 = m(false);
  function X2() {
    K2.value = true;
  }
  function J2(e3) {
    K2.value = false, 2 !== v2.value && U2(e3);
  }
  function ee2() {
    x2.value.set("alpha", 100), i2("confirmChange", "", "");
  }
  return (t2, o3) => (s(), h(d(V), { trigger: ["click"], open: R2.value, onOpenChange: q2, placement: "bottom", arrow: { pointAtCenter: true } }, { overlay: M(() => [g(To, { color: x2.value, colors: S2.value, type: e2.type, "select-type": v2.value, "is-show": R2.value, "hide-cancel": e2.hideCancel, "hide-confirm": e2.hideConfirm, onPickColor: U2, onRestColor: W2, onChangeGradientColor: G2, onSelectTypeChange: Z2, onMouseleave: o3[0] || (o3[0] = (e3) => !K2.value && q2(false)), onStartEyeDropper: X2, onEndEyeDropper: J2 }, null, 8, ["color", "colors", "type", "select-type", "is-show", "hide-cancel", "hide-confirm"])]), default: M(() => [p("div", { class: c(d(y2)), onMouseenter: o3[5] || (o3[5] = () => w2.value = true), onMouseleave: o3[6] || (o3[6] = () => w2.value = false) }, [2 === v2.value ? (s(), r("div", No, [p("div", Bo, [p("div", { style: u(N2.value) }, null, 4)]), w2.value ? (s(), h(d(Be), { key: 0, onClick: k(ee2, ["stop"]), size: "14", class: "close-icon", icon: "ant-design:close-circle-filled" })) : f("", true)])) : (s(), r("div", Ro, [p("div", qo, [p("div", Ao, [p("div", { style: u(N2.value) }, null, 4)]), p("div", { class: "color-input", title: e2.title, onClick: o3[2] || (o3[2] = k(() => {
  }, ["stop"])) }, [g(d(H), { placeholder: e2.placeholder, value: _2.value, "onUpdate:value": o3[1] || (o3[1] = (e3) => _2.value = e3), onBlur: E2, onPressEnter: E2, bordered: false, maxlength: 7 }, null, 8, ["placeholder", "value"]), w2.value && _2.value ? (s(), h(d(Be), { key: 0, onClick: k(ee2, ["stop"]), size: "14", class: "close-icon", icon: "ant-design:close-circle-filled" })) : f("", true)], 8, Oo)]), e2.showAlpha ? (s(), r("div", { key: 0, class: "color-input-percentage", onClick: o3[4] || (o3[4] = k(() => {
  }, ["stop"])) }, [g(d(Q), { class: "percent-input", bordered: false, value: $2.value, "onUpdate:value": o3[3] || (o3[3] = (e3) => $2.value = e3), min: 0, max: 100, step: 1, controls: false, onBlur: F2, onPressEnter: F2, maxlength: 3 }, { prefix: M(() => o3[7] || (o3[7] = [p("div", { class: "prefix" }, "A", -1)])), _: 1 }, 8, ["value"]), o3[8] || (o3[8] = p("div", { style: { "user-select": "none" } }, "%", -1))])) : f("", true)]))], 34)]), _: 1 }, 8, ["open"]));
} }), zo = eo(jo, [["__scopeId", "data-v-be499b94"]]);
const Eo = { info(...e2) {
}, warn(...e2) {
}, error(...e2) {
} };
function Fo() {
  const e2 = m(), t2 = [], o2 = n({ width: 0, height: 0 }), a2 = () => {
    !function(e3, t3) {
      const { clientWidth: o3 = 0, clientHeight: a3 = 0 } = e3 || {};
      e3 ? o3 && a3 || Eo.warn("Component width or height is 0px, rendering abnormality may occur!") : Eo.warn("Failed to get dom node, component rendering may be abnormal!"), t3.width = o3, t3.height = a3;
    }(e2.value, o2);
  }, l2 = Ae(a2, 100), r2 = Oe((t3) => {
    const o3 = function(e3) {
      return je(e3) ? e3 : je(e3.$el) ? e3.$el : null;
    }(t3);
    o3 ? e2.value = o3 : Eo.error("Bind Component Dom Ref Failed!");
  });
  return i(() => {
    a2();
    const o3 = function(e3, t3) {
      const o4 = new MutationObserver(t3);
      if (e3) return o4.observe(e3, { attributes: true, attributeFilter: ["class", "style"], attributeOldValue: true }), o4;
    }(e2.value, l2);
    o3 && (window.addEventListener("resize", l2), t2.push(() => {
      o3.disconnect();
    }, () => {
      window.removeEventListener("resize", l2);
    }));
  }), _(() => {
    t2.forEach((e3) => e3());
  }), { domSize: o2, autoBindRef: r2, refreshLayoutSize: a2 };
}
function Po() {
  return { color: { type: Array, default: () => [] }, backgroundColor: { type: String, default: "transparent" } };
}
function Ho(e2, t2 = []) {
  return ze(e2, t2);
}
const Qo = ".__STYLED__";
const Go = function(t2) {
  let o2 = t2;
  const a2 = {}, l2 = (e2) => a2[e2] ?? 0, n2 = (e2, t3 = true) => `${t3 ? "." : ""}${o2 || ""}${e2}`;
  function r2(t3) {
    return (o3) => {
      const r3 = document.createElement("style"), s2 = (e2) => {
        r3.innerHTML = ((e3, t5) => {
          const o4 = n2(t5);
          return `${Qo} {${e3.toString()}}`.replaceAll(Qo, o4);
        })(o3, e2);
        const t4 = document.querySelector("head");
        t4 && t4.append(r3);
      };
      return (o4) => {
        const u2 = t3, c2 = Ee("style");
        return e({ setup(e2, { slots: t4 }) {
          i(() => {
            0 === l2(c2) && s2(o4), ((e3) => {
              a2[e3] = (a2[e3] ?? 0) + 1;
            })(c2);
          }), _(() => {
            ((e3) => {
              let t5 = a2[e3] - 1;
              t5 <= 0 && (t5 = 0), a2[e3] = t5;
            })(c2), 0 === l2(c2) && r3.remove();
          });
          const d2 = n2(o4, false);
          return () => g(u2, $(e2, { class: d2 }), { default: () => {
            var _a2;
            return [(_a2 = t4 == null ? void 0 : t4.default) == null ? void 0 : _a2.call(t4)];
          } });
        } });
      };
    };
  }
  return r2.setClassNamePrefix = (e2) => {
    o2 = e2;
  }, r2.getClassNameForBind = (e2) => n2(e2, false), r2.span = r2((e2, { slots: t3 }) => g("span", e2, [t3 == null ? void 0 : t3.default()])), r2.div = r2((e2, { slots: t3 }) => g("div", e2, [t3 == null ? void 0 : t3.default()])), r2.img = r2((e2) => g("img", e2, null)), r2.svg = r2((e2, { slots: t3 }) => g("svg", e2, [t3 == null ? void 0 : t3.default()])), r2;
}("dv-");
Go.setClassNamePrefix;
const Uo = Go.div`
  position: relative;
  width: 100%;
  height: 100%;
`("border-box"), Vo = Go.div`
  position: relative;
  width: 100%;
  height: 100%;
`("border-box-content"), Wo = ["#2e6099", "#7ce7fd"], Yo = ["left-top", "right-top", "left-bottom", "right-bottom"], Zo = Go.svg`
  position: absolute;
  display: block;

  &.right-top {
    right: 0;
    transform: rotateY(180deg);
  }

  &.left-bottom {
    bottom: 0;
    transform: rotateX(180deg);
  }

  &.right-bottom {
    right: 0;
    bottom: 0;
    transform: rotateX(180deg) rotateY(180deg);
  }
`("border"), Ko = e({ name: "BorderBox1", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: i2, height: r2 } = n2, s2 = Ho(Wo, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-1"), ref: a2 }, { default: () => [g(Zo, { width: i2, height: r2 }, { default: () => [g("polygon", { fill: l3, points: `10, 27 10, ${r2 - 27} 13, ${r2 - 24} 13, ${r2 - 21} 24, ${r2 - 11} 38, ${r2 - 11}
                41, ${r2 - 8} 73, ${r2 - 8} 75, ${r2 - 10} 81, ${r2 - 10} 85, ${r2 - 6}
                ${i2 - 85}, ${r2 - 6} ${i2 - 81}, ${r2 - 10} ${i2 - 75}, ${r2 - 10}
                ${i2 - 73}, ${r2 - 8} ${i2 - 41}, ${r2 - 8} ${i2 - 38}, ${r2 - 11}
                ${i2 - 24}, ${r2 - 11} ${i2 - 13}, ${r2 - 21} ${i2 - 13}, ${r2 - 24}
                ${i2 - 10}, ${r2 - 27} ${i2 - 10}, 27 ${i2 - 13}, 25 ${i2 - 13}, 21
                ${i2 - 24}, 11 ${i2 - 38}, 11 ${i2 - 41}, 8 ${i2 - 73}, 8 ${i2 - 75}, 10
                ${i2 - 81}, 10 ${i2 - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24` }, null)] }), Yo.map((e3) => g(Zo, { key: e3, width: "150", height: "150", class: e3 }, { default: () => [g("polygon", { fill: s2[0], points: "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" }, [g("animate", { attributeName: "fill", values: `${s2[0]};${s2[1]};${s2[0]}`, dur: "0.5s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { fill: s2[1], points: "27.6,4.8 38.4,4.8 35.4,7.8 30.6,7.8" }, [g("animate", { attributeName: "fill", values: `${s2[1]};${s2[0]};${s2[1]}`, dur: "0.5s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { fill: s2[0], points: "9,54 9,63 7.2,66 7.2,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" }, [g("animate", { attributeName: "fill", values: `${s2[0]};${s2[1]};transparent`, dur: "1s", begin: "0s", repeatCount: "indefinite" }, null)])] })), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), Xo = ["#2e6099", "#7ce7fd"], Jo = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`("border-svg-container"), ea = e({ name: "BorderBox2", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: i2, height: r2 } = n2, s2 = Ho(Xo, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-2"), ref: a2 }, { default: () => [g(Jo, { width: i2, height: r2 }, { default: () => [g("polygon", { fill: l3, points: `7, 7 ${i2 - 7}, 7 ${i2 - 7}, ${r2 - 7} 7, ${r2 - 7}` }, null), g("polyline", { stroke: s2[0], points: `2, 2 ${i2 - 2} ,2 ${i2 - 2}, ${r2 - 2} 2, ${r2 - 2} 2, 2` }, null), g("polyline", { stroke: s2[1], points: `6, 6 ${i2 - 6}, 6 ${i2 - 6}, ${r2 - 6} 6, ${r2 - 6} 6, 6` }, null), g("circle", { fill: s2[0], cx: "11", cy: "11", r: "1" }, null), g("circle", { fill: s2[0], cx: i2 - 11, cy: "11", r: "1" }, null), g("circle", { fill: s2[0], cx: i2 - 11, cy: r2 - 11, r: "1" }, null), g("circle", { fill: s2[0], cx: "11", cy: r2 - 11, r: "1" }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), ta = ["#2e6099", "#7ce7fd"], oa = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > polyline {
    fill: none;
  }

  .stroke-width-1 {
    stroke-width: 1;
  }

  .stroke-width-3 {
    stroke-width: 3;
  }
`("border-svg-container"), aa = e({ name: "BorderBox3", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: i2, height: r2 } = n2, s2 = Ho(ta, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-3"), ref: a2 }, { default: () => [g(oa, { width: i2, height: r2 }, { default: () => [g("polygon", { fill: l3, points: `23, 23 ${i2 - 24}, 23 ${i2 - 24}, ${r2 - 24} 23, ${r2 - 24}` }, null), g("polyline", { class: "stroke-width-3", stroke: s2[0], points: `4, 4 ${i2 - 22} ,4 ${i2 - 22}, ${r2 - 22} 4, ${r2 - 22} 4, 4` }, null), g("polyline", { class: "stroke-width-1", stroke: s2[1], points: `10, 10 ${i2 - 16}, 10 ${i2 - 16}, ${r2 - 16} 10, ${r2 - 16} 10, 10` }, null), g("polyline", { class: "stroke-width-1", stroke: s2[1], points: `16, 16 ${i2 - 10}, 16 ${i2 - 10}, ${r2 - 10} 16, ${r2 - 10} 16, 16` }, null), g("polyline", { class: "stroke-width-1", stroke: s2[1], points: `22, 22 ${i2 - 4}, 22 ${i2 - 4}, ${r2 - 4} 22, ${r2 - 4} 22, 22` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), la = ["#2e6099", "#7ce7fd"], na = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > polyline {
    fill: none;
  }

  &.reverse {
    transform: rotate(180deg);
  }

  .stroke-width1 {
    stroke-width: 1;
  }

  .stroke-width3 {
    stroke-width: 3px;
    stroke-linecap: round;
  }
`("border-svg-container"), ia = e({ name: "BorderBox4", props: { ...Po(), reverse: { type: Boolean, default: false } }, setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3, reverse: i2 } = e2, { width: r2, height: s2 } = n2, u2 = Ho(la, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-4"), ref: a2 }, { default: () => [g(na, { class: i2 ? "reverse" : "", width: r2, height: s2 }, { default: () => [g("polygon", { fill: l3, points: `${r2 - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                16, 42 16, ${s2 - 32} 41, ${s2 - 7} ${r2 - 15}, ${s2 - 7}` }, null), g("polyline", { class: "stroke-width1", stroke: u2[0], points: `145, ${s2 - 5} 40, ${s2 - 5} 10, ${s2 - 35} 10, 40 40, 5 150, 5 170, 20 ${r2 - 15}, 20` }, null), g("polyline", { stroke: u2[1], class: "stroke-width1", points: `245, ${s2 - 1} 36, ${s2 - 1} 14, ${s2 - 23} 14, ${s2 - 100}` }, null), g("polyline", { class: "stroke-width3", stroke: u2[0], points: `7, ${s2 - 40} 7, ${s2 - 75}` }, null), g("polyline", { class: "stroke-width3", stroke: u2[0], points: "28, 24 13, 41 13, 64" }, null), g("polyline", { class: "stroke-width1", stroke: u2[0], points: "5, 45 5, 140" }, null), g("polyline", { class: "stroke-width1", stroke: u2[1], points: "14, 75 14, 180" }, null), g("polyline", { class: "stroke-width1", stroke: u2[1], points: "55, 11 147, 11 167, 26 250, 26" }, null), g("polyline", { class: "stroke-width3", stroke: u2[1], points: "158, 5 173, 16" }, null), g("polyline", { class: "stroke-width3", style: { strokeDasharray: "100 250" }, stroke: u2[0], points: `200, 17 ${r2 - 10}, 17` }, null), g("polyline", { class: "stroke-width1", style: { strokeDasharray: "80 270" }, stroke: u2[1], points: `385, 17 ${r2 - 10}, 17` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), ra = ["#2e6099", "#7ce7fd"], sa = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
  }

  &.reverse {
    transform: rotate(180deg);
  }

  .stroke-width1 {
    stroke-width: 1px;
  }

  .stroke-width2 {
    stroke-width: 2px;
  }

  .stroke-width5 {
    stroke-width: 5px;
  }
`("border-svg-container"), ua = e({ name: "BorderBox5", props: { ...Po(), reverse: { type: Boolean, default: false } }, setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3, reverse: i2 } = e2, { width: r2, height: s2 } = n2, u2 = Ho(ra, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-5"), ref: a2 }, { default: () => [g(sa, { class: i2 ? "reverse" : "", width: r2, height: s2 }, { default: () => [g("polygon", { fill: l3, points: `
                  10, 22 ${r2 - 22}, 22 ${r2 - 22}, ${s2 - 86} ${r2 - 84}, ${s2 - 24} 10, ${s2 - 24}` }, null), g("polyline", { class: "stroke-width1", stroke: u2[0], points: `8, 5 ${r2 - 5}, 5 ${r2 - 5}, ${s2 - 100}
                  ${r2 - 100}, ${s2 - 5} 8, ${s2 - 5} 8, 5` }, null), g("polyline", { class: "stroke-width1", stroke: u2[1], points: `3, 5 ${r2 - 20}, 5 ${r2 - 20}, ${s2 - 60}
                  ${r2 - 74}, ${s2 - 5} 3, ${s2 - 5} 3, 5` }, null), g("polyline", { class: "stroke-width5", stroke: u2[1], points: `50, 13 ${r2 - 35}, 13` }, null), g("polyline", { class: "stroke-width2", stroke: u2[1], points: `15, 20 ${r2 - 35}, 20` }, null), g("polyline", { class: "stroke-width2", stroke: u2[1], points: `15, ${s2 - 20} ${r2 - 110}, ${s2 - 20}` }, null), g("polyline", { class: "stroke-width5", stroke: u2[1], points: `15, ${s2 - 13} ${r2 - 110}, ${s2 - 13}` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), ca = ["#2e6099", "#7ce7fd"], da = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`("border-svg-container"), pa = e({ name: "BorderBox6", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: i2, height: r2 } = n2, s2 = Ho(ca, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-6"), ref: a2 }, { default: () => [g(da, { width: i2, height: r2 }, { default: () => [g("polygon", { fill: l3, points: `
              9, 7 ${i2 - 9}, 7 ${i2 - 9}, ${r2 - 7} 9, ${r2 - 7}` }, null), g("circle", { fill: s2[1], cx: "5", cy: "5", r: "2" }, null), g("circle", { fill: s2[1], cx: i2 - 5, cy: "5", r: "2" }, null), g("circle", { fill: s2[1], cx: i2 - 5, cy: r2 - 5, r: "2" }, null), g("circle", { fill: s2[1], cx: "5", cy: r2 - 5, r: "2" }, null), g("polyline", { stroke: s2[0], points: `10, 4 ${i2 - 10}, 4` }, null), g("polyline", { stroke: s2[0], points: `10, ${r2 - 4} ${i2 - 10}, ${r2 - 4}` }, null), g("polyline", { stroke: s2[0], points: "5, 70 5, " + (r2 - 70) }, null), g("polyline", { stroke: s2[0], points: `${i2 - 5}, 70 ${i2 - 5}, ${r2 - 70}` }, null), g("polyline", { stroke: s2[0], points: "3, 10, 3, 50" }, null), g("polyline", { stroke: s2[0], points: "7, 30 7, 80" }, null), g("polyline", { stroke: s2[0], points: `${i2 - 3}, 10 ${i2 - 3}, 50` }, null), g("polyline", { stroke: s2[0], points: `${i2 - 7}, 30 ${i2 - 7}, 80` }, null), g("polyline", { stroke: s2[0], points: `3, ${r2 - 10} 3, ${r2 - 50}` }, null), g("polyline", { stroke: s2[0], points: `7, ${r2 - 30} 7, ${r2 - 80}` }, null), g("polyline", { stroke: s2[0], points: `${i2 - 3}, ${r2 - 10} ${i2 - 3}, ${r2 - 50}` }, null), g("polyline", { stroke: s2[0], points: `${i2 - 7}, ${r2 - 30} ${i2 - 7}, ${r2 - 80}` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), fa = ["#2e6099", "#7ce7fd"], ha = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
    stroke-linecap: round;
  }

  .stroke-width2 {
    stroke-width: 2px;
  }

  .stroke-width5 {
    stroke-width: 5px;
  }
`("border-svg-container"), ga = e({ name: "BorderBox7", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: i2, height: r2 } = n2, s2 = Ho(fa, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-7"), ref: a2, style: { boxShadow: `inset 0 0 40px ${s2[0]}`, border: `1px solid ${s2[0]}`, backgroundColor: l3 } }, { default: () => [g(ha, { width: i2, height: r2 }, { default: () => [g("polyline", { class: "stroke-width2", stroke: s2[0], points: "0, 25 0, 0 25, 0" }, null), g("polyline", { class: "stroke-width2", stroke: s2[0], points: `${i2 - 25}, 0 ${i2}, 0 ${i2}, 25` }, null), g("polyline", { class: "stroke-width2", stroke: s2[0], points: `${i2 - 25}, ${r2} ${i2}, ${r2} ${i2}, ${r2 - 25}` }, null), g("polyline", { class: "stroke-width2", stroke: s2[0], points: `0, ${r2 - 25} 0, ${r2} 25, ${r2}` }, null), g("polyline", { class: "stroke-width5", stroke: s2[1], points: "0, 10 0, 0 10, 0" }, null), g("polyline", { class: "stroke-width5", stroke: s2[1], points: `${i2 - 10}, 0 ${i2}, 0 ${i2}, 10` }, null), g("polyline", { class: "stroke-width5", stroke: s2[1], points: `${i2 - 10}, ${r2} ${i2}, ${r2} ${i2}, ${r2 - 10}` }, null), g("polyline", { class: "stroke-width5", stroke: s2[1], points: `0, ${r2 - 10} 0, ${r2} 10, ${r2}` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} });
function ma() {
  return L(n({ id: Ee("datav_uuid") }));
}
const ya = ["#2e6099", "#7ce7fd"], va = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`("border-svg-container"), Ca = e({ name: "BorderBox8", props: { ...Po(), duration: { type: Number, default: 3 }, reverse: { type: Boolean, default: false } }, setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  o2({ refreshLayoutSize: l2 });
  const i2 = ma();
  return () => {
    const { color: o3, backgroundColor: l3, duration: r2, reverse: s2 } = e2, { width: u2, height: c2 } = n2, d2 = Ho(ya, o3), p2 = `border-box-8-path-${i2.id}`, f2 = `border-box-8-gradient-${i2.id}`, h2 = `border-box-8-mask-${i2.id}`, m2 = s2 ? `M 2.5, 2.5 L 2.5, ${c2 - 2.5} L ${u2 - 2.5}, ${c2 - 2.5} L ${u2 - 2.5}, 2.5 L 2.5, 2.5` : `M2.5, 2.5 L${u2 - 2.5}, 2.5 L${u2 - 2.5}, ${c2 - 2.5} L2.5, ${c2 - 2.5} L2.5, 2.5`;
    return g(Uo, { class: Go.getClassNameForBind("border-box-8"), ref: a2 }, { default: () => [g(va, { width: u2, height: c2 }, { default: () => [g("defs", null, [g("path", { id: p2, d: m2, fill: "transparent" }, null), g("radialGradient", { id: f2, cx: "50%", cy: "50%", r: "50%" }, [g("stop", { offset: "0%", "stop-color": "#fff", "stop-opacity": "1" }, null), g("stop", { offset: "100%", "stop-color": "#fff", "stop-opacity": "0" }, null)]), g("mask", { id: h2 }, [g("circle", { cx: "0", cy: "0", r: "150", fill: `url(#${f2})` }, [g("animateMotion", { dur: `${r2}s`, path: m2, rotate: "auto", repeatCount: "indefinite" }, null)])])]), g("polygon", { fill: l3, points: `5, 5 ${u2 - 5}, 5 ${u2 - 5} ${c2 - 5} 5, ${c2 - 5}` }, null), g("use", { stroke: d2[0], "stroke-width": "1", "xlink:href": `#${p2}` }, null), g("use", { stroke: d2[1], "stroke-width": "3", "xlink:href": `#${p2}`, mask: `url(#${h2})` }, [g("animate", { attributeName: "stroke-dasharray", from: `0, ${length}`, to: `${length}, 0`, dur: `${r2}s`, repeatCount: "indefinite" }, null)])] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), ba = ["#2e6099", "#7ce7fd"], Ma = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`("border-svg-container"), ka = e({ name: "BorderBox9", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  o2({ refreshLayoutSize: l2 });
  const i2 = ma();
  return () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: r2, height: s2 } = n2, u2 = Ho(ba, o3), c2 = `border-box-9-gradient-${i2.id}`, d2 = `border-box-9-mask-${i2.id}`;
    return g(Uo, { class: Go.getClassNameForBind("border-box-9"), ref: a2 }, { default: () => [g(Ma, { width: r2, height: s2 }, { default: () => [g("defs", null, [g("linearGradient", { id: c2, x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, [g("animate", { attributeName: "x1", values: "0%;100%;0%", dur: "10s", begin: "0s", repeatCount: "indefinite" }, null), g("animate", { attributeName: "x2", values: "100%;0%;100%", dur: "10s", begin: "0s", repeatCount: "indefinite" }, null), g("stop", { offset: "0%", "stop-color": u2[0] }, [g("animate", { attributeName: "stop-color", values: `${u2[0]};${u2[1]};${u2[0]}`, dur: "10s", begin: "0s", repeatCount: "indefinite" }, null)]), g("stop", { offset: "100%", "stop-color": u2[1] }, [g("animate", { attributeName: "stop-color", values: `${u2[1]};${u2[0]};${u2[1]}`, dur: "10s", begin: "0s", repeatCount: "indefinite" }, null)])]), g("mask", { id: d2 }, [g("polyline", { stroke: "#fff", "stroke-width": "3", fill: "transparent", points: `8, ${0.4 * s2} 8, 3, ${0.4 * r2 + 7}, 3` }, null), g("polyline", { fill: "#fff", points: `
                      8, ${0.15 * s2} 8, 3, ${0.1 * r2 + 7}, 3
                      ${0.1 * r2}, 8 14, 8 14, ${0.15 * s2 - 7}
                    ` }, null), g("polyline", { stroke: "#fff", "stroke-width": "3", fill: "transparent", points: `${0.5 * r2}, 3 ${r2 - 3}, 3, ${r2 - 3}, ${0.25 * s2}` }, null), g("polyline", { fill: "#fff", points: `
                      ${0.52 * r2}, 3 ${0.58 * r2}, 3
                      ${0.58 * r2 - 7}, 9 ${0.52 * r2 + 7}, 9
                    ` }, null), g("polyline", { fill: "#fff", points: `
                      ${0.9 * r2}, 3 ${r2 - 3}, 3 ${r2 - 3}, ${0.1 * s2}
                      ${r2 - 9}, ${0.1 * s2 - 7} ${r2 - 9}, 9 ${0.9 * r2 + 7}, 9
                    ` }, null), g("polyline", { stroke: "#fff", "stroke-width": "3", fill: "transparent", points: `8, ${0.5 * s2} 8, ${s2 - 3} ${0.3 * r2 + 7}, ${s2 - 3}` }, null), g("polyline", { fill: "#fff", points: `
                      8, ${0.55 * s2} 8, ${0.7 * s2}
                      2, ${0.7 * s2 - 7} 2, ${0.55 * s2 + 7}
                    ` }, null), g("polyline", { stroke: "#fff", "stroke-width": "3", fill: "transparent", points: `${0.35 * r2}, ${s2 - 3} ${r2 - 3}, ${s2 - 3} ${r2 - 3}, ${0.35 * s2}` }, null), g("polyline", { fill: "#fff", points: `
                      ${0.92 * r2}, ${s2 - 3} ${r2 - 3}, ${s2 - 3} ${r2 - 3}, ${0.8 * s2} ${r2 - 9}, ${0.8 * s2 + 7} ${r2 - 9}, ${s2 - 9} ${0.92 * r2 + 7}, ${s2 - 9}` }, null)])]), g("polygon", { fill: l3, points: `
                  15, 9 ${0.1 * r2 + 1}, 9 ${0.1 * r2 + 4}, 6 ${0.52 * r2 + 2}, 6
                  ${0.52 * r2 + 6}, 10 ${0.58 * r2 - 7}, 10 ${0.58 * r2 - 2}, 6
                  ${0.9 * r2 + 2}, 6 ${0.9 * r2 + 6}, 10 ${r2 - 10}, 10 ${r2 - 10}, ${0.1 * s2 - 6}
                  ${r2 - 6}, ${0.1 * s2 - 1} ${r2 - 6}, ${0.8 * s2 + 1} ${r2 - 10}, ${0.8 * s2 + 6}
                  ${r2 - 10}, ${s2 - 10} ${0.92 * r2 + 7}, ${s2 - 10}  ${0.92 * r2 + 2}, ${s2 - 6}
                  11, ${s2 - 6} 11, ${0.15 * s2 - 2} 15, ${0.15 * s2 - 7}
                ` }, null), g("rect", { x: "0", y: "0", width: r2, height: s2, fill: `url(#${c2})`, mask: `url(#${d2})` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), wa = ["#2e6099", "#7ce7fd"], xa = ["left-top", "right-top", "left-bottom", "right-bottom"], Sa = Go.svg`
  position: absolute;
  display: block;

  &.right-top {
    right: 0;
    transform: rotateY(180deg);
  }

  &.left-bottom {
    bottom: 0;
    transform: rotateX(180deg);
  }

  &.right-bottom {
    right: 0;
    bottom: 0;
    transform: rotateX(180deg) rotateY(180deg);
  }
`("border-svg-container"), _a = e({ name: "BorderBox10", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { width: o3, height: l3 } = n2, { backgroundColor: i2, color: r2 } = e2, s2 = Ho(wa, r2);
    return g(Uo, { class: Go.getClassNameForBind("border-box-10"), ref: a2, style: { boxShadow: `inset 0 0 25px 3px ${s2[0]}` } }, { default: () => [g(Sa, { width: o3, height: l3 }, { default: () => [g("polygon", { fill: i2, points: `
                  4, 0 ${o3 - 4}, 0 ${o3}, 4 ${o3}, ${l3 - 4} ${o3 - 4}, ${l3}
                  4, ${l3} 0, ${l3 - 4} 0, 4
                ` }, null)] }), xa.map((e3) => g(Sa, { width: "150px", height: "150px", key: e3, class: e3 }, { default: () => [g("polygon", { fill: s2[1], points: "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3" }, null)] })), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), $a = ["#2e6099", "#7ce7fd"], La = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`("border-svg-container"), Da = e({ name: "BorderBox11", props: { ...Po(), titleWidth: { type: Number, default: 250 }, title: { type: String, default: "" } }, setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  o2({ refreshLayoutSize: l2 });
  const i2 = ma();
  return () => {
    const { color: o3, backgroundColor: l3, titleWidth: r2, title: s2 } = e2, { width: u2, height: c2 } = n2, d2 = Ho($a, o3), p2 = `border-box-11-filterId-${i2}`;
    return g(Uo, { class: Go.getClassNameForBind("border-box-11"), ref: a2 }, { default: () => [g(La, { width: u2, height: c2 }, { default: () => [g("defs", null, [g("filter", { id: p2, height: "150%", width: "150%", x: "-25%", y: "-25%" }, [g("feMorphology", { operator: "dilate", radius: "2", in: "SourceAlpha", result: "thicken" }, null), g("feGaussianBlur", { in: "thicken", stdDeviation: "3", result: "blurred" }, null), g("feFlood", { "flood-color": d2[1], result: "glowColor" }, null), g("feComposite", { in: "glowColor", in2: "blurred", operator: "in", result: "softGlowColored" }, null), g("feMerge", null, [g("feMergeNode", { in: "softGlowColored" }, null), g("feMergeNode", { in: "SourceGraphic" }, null)])])]), g("polygon", { fill: l3, points: `
                  20, 32 ${0.5 * u2 - r2 / 2}, 32 ${0.5 * u2 - r2 / 2 + 20}, 53
                  ${0.5 * u2 + r2 / 2 - 20}, 53 ${0.5 * u2 + r2 / 2}, 32
                  ${u2 - 20}, 32 ${u2 - 8}, 48 ${u2 - 8}, ${c2 - 25} ${u2 - 20}, ${c2 - 8}
                  20, ${c2 - 8} 8, ${c2 - 25} 8, 50
                ` }, null), g("polyline", { stroke: d2[0], filter: `url(#${p2})`, points: `
                  ${(u2 - r2) / 2}, 30
                  20, 30 7, 50 7, ${50 + (c2 - 167) / 2}
                  13, ${55 + (c2 - 167) / 2} 13, ${135 + (c2 - 167) / 2}
                  7, ${140 + (c2 - 167) / 2} 7, ${c2 - 27}
                  20, ${c2 - 7} ${u2 - 20}, ${c2 - 7} ${u2 - 7}, ${c2 - 27}
                  ${u2 - 7}, ${140 + (c2 - 167) / 2} ${u2 - 13}, ${135 + (c2 - 167) / 2}
                  ${u2 - 13}, ${55 + (c2 - 167) / 2} ${u2 - 7}, ${50 + (c2 - 167) / 2}
                  ${u2 - 7}, 50 ${u2 - 20}, 30 ${(u2 + r2) / 2}, 30
                  ${(u2 + r2) / 2 - 20}, 7 ${(u2 - r2) / 2 + 20}, 7
                  ${(u2 - r2) / 2}, 30 ${(u2 - r2) / 2 + 20}, 52
                  ${(u2 + r2) / 2 - 20}, 52 ${(u2 + r2) / 2}, 30
                ` }, null), g("polygon", { stroke: d2[0], fill: "transparent", points: `
                  ${(u2 + r2) / 2 - 5}, 30 ${(u2 + r2) / 2 - 21}, 11
                  ${(u2 + r2) / 2 - 27}, 11 ${(u2 + r2) / 2 - 8}, 34
                ` }, null), g("polygon", { stroke: d2[0], fill: "transparent", points: `
                  ${(u2 - r2) / 2 + 5}, 30 ${(u2 - r2) / 2 + 22}, 49
                  ${(u2 - r2) / 2 + 28}, 49 ${(u2 - r2) / 2 + 8}, 26
                ` }, null), g("polygon", { stroke: d2[0], fill: Ue(d2[1] || $a[1], 30), filter: `url(#${p2})`, points: `
                  ${(u2 + r2) / 2 - 11}, 37 ${(u2 + r2) / 2 - 32}, 11
                  ${(u2 - r2) / 2 + 23}, 11 ${(u2 - r2) / 2 + 11}, 23
                  ${(u2 - r2) / 2 + 33}, 49 ${(u2 + r2) / 2 - 22}, 49
                ` }, null), g("polygon", { filter: `url(#${p2})`, fill: d2[0], opacity: "1", points: `
                  ${(u2 - r2) / 2 - 10}, 37 ${(u2 - r2) / 2 - 31}, 37
                  ${(u2 - r2) / 2 - 25}, 46 ${(u2 - r2) / 2 - 4}, 46
                ` }, [g("animate", { attributeName: "opacity", values: "1;0.7;1", dur: "2s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { filter: `url(#${p2})`, fill: d2[0], opacity: "0.7", points: `
                  ${(u2 - r2) / 2 - 40}, 37 ${(u2 - r2) / 2 - 61}, 37
                  ${(u2 - r2) / 2 - 55}, 46 ${(u2 - r2) / 2 - 34}, 46
                ` }, [g("animate", { attributeName: "opacity", values: "0.7;0.4;0.7", dur: "2s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { filter: `url(#${p2})`, fill: d2[0], opacity: "0.5", points: `
                  ${(u2 - r2) / 2 - 70}, 37 ${(u2 - r2) / 2 - 91}, 37
                  ${(u2 - r2) / 2 - 85}, 46 ${(u2 - r2) / 2 - 64}, 46
                ` }, [g("animate", { attributeName: "opacity", values: "0.5;0.2;0.5", dur: "2s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { filter: `url(#${p2})`, fill: d2[0], opacity: "1", points: `
                  ${(u2 + r2) / 2 + 30}, 37 ${(u2 + r2) / 2 + 9}, 37
                  ${(u2 + r2) / 2 + 3}, 46 ${(u2 + r2) / 2 + 24}, 46
                ` }, [g("animate", { attributeName: "opacity", values: "1;0.7;1", dur: "2s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { filter: `url(#${p2})`, fill: d2[0], opacity: "0.7", points: `
                  ${(u2 + r2) / 2 + 60}, 37 ${(u2 + r2) / 2 + 39}, 37
                  ${(u2 + r2) / 2 + 33}, 46 ${(u2 + r2) / 2 + 54}, 46
                ` }, [g("animate", { attributeName: "opacity", values: "0.7;0.4;0.7", dur: "2s", begin: "0s", repeatCount: "indefinite" }, null)]), g("polygon", { filter: `url(#${p2})`, fill: d2[0], opacity: "0.5", points: `
                  ${(u2 + r2) / 2 + 90}, 37 ${(u2 + r2) / 2 + 69}, 37
                  ${(u2 + r2) / 2 + 63}, 46 ${(u2 + r2) / 2 + 84}, 46
                ` }, [g("animate", { attributeName: "opacity", values: "0.5;0.2;0.5", dur: "2s", begin: "0s", repeatCount: "indefinite" }, null)]), g("text", { class: "dv-border-box-11-title", x: "" + u2 / 2, y: "32", fill: "#fff", "font-size": "18", "text-anchor": "middle", "dominant-baseline": "middle" }, [s2]), g("polygon", { fill: d2[0], filter: `url(#${p2})`, points: `
                  7, ${53 + (c2 - 167) / 2} 11, ${57 + (c2 - 167) / 2}
                  11, ${133 + (c2 - 167) / 2} 7, ${137 + (c2 - 167) / 2}
                ` }, null), g("polygon", { fill: d2[0], filter: `url(#${p2})`, points: `
                  ${u2 - 7}, ${53 + (c2 - 167) / 2} ${u2 - 11}, ${57 + (c2 - 167) / 2}
                  ${u2 - 11}, ${133 + (c2 - 167) / 2} ${u2 - 7}, ${137 + (c2 - 167) / 2}
                ` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), Ia = ["#2e6099", "#7ce7fd"], Ta = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`("border-svg-container"), Na = e({ name: "BorderBox12", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  o2({ refreshLayoutSize: l2 });
  const i2 = ma();
  return () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: r2, height: s2 } = n2, u2 = Ho(Ia, o3), c2 = `border-box-12-filterId-${i2}`;
    return g(Uo, { class: Go.getClassNameForBind("border-box-12"), ref: a2 }, { default: () => [g(Ta, { width: r2, height: s2 }, { default: () => [g("defs", null, [g("filter", { id: c2, height: "150%", width: "150%", x: "-25%", y: "-25%" }, [g("feMorphology", { operator: "dilate", radius: "1", in: "SourceAlpha", result: "thicken" }, null), g("feGaussianBlur", { in: "thicken", stdDeviation: "2", result: "blurred" }, null), g("feFlood", { "flood-color": Ue(u2[1] || Ia[1], 70), result: "glowColor" }, [g("animate", { attributeName: "flood-color", values: `
                        ${Ue(u2[1] || Ia[1], 70)};
                        ${Ue(u2[1] || Ia[1], 30)};
                        ${Ue(u2[1] || Ia[1], 70)};
                      `, dur: "3s", begin: "0s", repeatCount: "indefinite" }, null)]), g("feComposite", { in: "glowColor", in2: "blurred", operator: "in", result: "softGlowColored" }, null), g("feMerge", null, [g("feMergeNode", { in: "softGlowColored" }, null), g("feMergeNode", { in: "SourceGraphic" }, null)])])]), r2 && s2 && g("path", { fill: l3, "stroke-width": "2", stroke: u2[0], d: `
                    M15 5 L ${r2 - 15} 5 Q ${r2 - 5} 5, ${r2 - 5} 15
                    L ${r2 - 5} ${s2 - 15} Q ${r2 - 5} ${s2 - 5}, ${r2 - 15} ${s2 - 5}
                    L 15, ${s2 - 5} Q 5 ${s2 - 5} 5 ${s2 - 15} L 5 15
                    Q 5 5 15 5
                  ` }, null), g("path", { "stroke-width": "2", fill: "transparent", "stroke-linecap": "round", filter: `url(#${c2})`, stroke: u2[1], d: "M 20 5 L 15 5 Q 5 5 5 15 L 5 20" }, null), g("path", { "stroke-width": "2", fill: "transparent", "stroke-linecap": "round", filter: `url(#${c2})`, stroke: u2[1], d: `M ${r2 - 20} 5 L ${r2 - 15} 5 Q ${r2 - 5} 5 ${r2 - 5} 15 L ${r2 - 5} 20` }, null), g("path", { "stroke-width": "2", fill: "transparent", "stroke-linecap": "round", filter: `url(#${c2})`, stroke: u2[1], d: `
                  M ${r2 - 20} ${s2 - 5} L ${r2 - 15} ${s2 - 5}
                  Q ${r2 - 5} ${s2 - 5} ${r2 - 5} ${s2 - 15}
                  L ${r2 - 5} ${s2 - 20}
                ` }, null), g("path", { "stroke-width": "2", fill: "transparent", "stroke-linecap": "round", filter: `url(#${c2})`, stroke: u2[1], d: `
                  M 20 ${s2 - 5} L 15 ${s2 - 5}
                  Q 5 ${s2 - 5} 5 ${s2 - 15}
                  L 5 ${s2 - 20}
                ` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), Ba = ["#2e6099", "#7ce7fd"], Ra = Go.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`("border-svg-container"), qa = e({ name: "BorderBox13", props: Po(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3, backgroundColor: l3 } = e2, { width: i2, height: r2 } = n2, s2 = Ho(Ba, o3);
    return g(Uo, { class: Go.getClassNameForBind("border-box-13"), ref: a2 }, { default: () => [g(Ra, { width: i2, height: r2 }, { default: () => [g("path", { fill: l3, stroke: s2[0], d: `
                  M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                  L ${i2 - 20} 10 L ${i2 - 5} 25
                  L ${i2 - 5} ${r2 - 5} L 20 ${r2 - 5}
                  L 5 ${r2 - 20} L 5 20
                ` }, null), g("path", { fill: "transparent", "stroke-width": "3", "stroke-linecap": "round", "stroke-dasharray": "10, 5", stroke: s2[0], d: "M 16 9 L 61 9" }, null), g("path", { fill: "transparent", stroke: s2[1], d: "M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" }, null), g("path", { fill: "transparent", stroke: s2[1], d: `M ${i2 - 5} ${r2 - 30} L ${i2 - 5} ${r2 - 5} L ${i2 - 30} ${r2 - 5}` }, null)] }), g(Vo, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), Aa = ["#7ce7fd", "#2e6099"], Oa = Go.svg`
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
`("border-svg-container"), ja = e({ name: "BorderBox14", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(Aa, i2);
    return g(Uo, { class: Go.getClassNameForBind("border-box-14"), ref: o2, style: { boxShadow: `inset 0 0 20px  ${r2[0]}`, backgroundColor: n2 } }, { default: () => [g(Oa, { width: t3, height: a3, viewBox: "0 0 550 381", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框14")]), g("defs", null, [g("polygon", { id: "path-2", points: "5 3 544 3 544 378 5 378" }, null)]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-108.000000, -173.000000)" }, [g("g", { id: "Group-17", transform: "translate(108.000000, 173.000000)" }, [g("g", { id: "Rectangle-10", opacity: "0.1" }, [g("path", { stroke: r2[0], "stroke-width": "1", d: "M5.5,3.5 L543.5,3.5 L543.5,377.5 L5.5,377.5 L5.5,3.5 Z", "stroke-linejoin": "square" }, null)]), g("polygon", { id: "Path-13", fill: r2[1], points: "1.69747084 1.55770317 48.1653341 1.55770317 49.6381868 0 85.070083 0 91 3.91797929 4.80121125 3.91797929 4.80121125 63 0 55.8055067 0 26.0045497 1.69747084 26.0045497" }, null), g("polygon", { id: "Path-14", fill: r2[1], points: "4.55395461 331 1.30691372 335.620966 1.30691372 347.342132 0 348.647402 0 363.134729 1.30691372 364.669539 1.30691372 381 31.1562076 381 34 378.600521 4.55395461 378.600521" }, null), g("polygon", { id: "Path-15", fill: r2[1], points: "544.350896 317 550 325.634084 550 354.03362 547.175448 354.03362 547.175448 378.875648 501.587573 378.875648 501.587573 381 464.947248 381 461 375.858015 544.350896 375.858015" }, null), g("polygon", { id: "Path-16", fill: r2[1], points: "515 3.10539542 518.151118 0 548.589245 0 548.589245 15.7681449 550 17.8992609 550 33.2427199 548.589245 35.2815965 548.589245 45.7325203 544.109167 52 544.109167 3.10539542" }, null)])])])] })] });
  };
} }), za = ["#7ce7fd", "#2e6099"], Ea = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), Fa = e({ name: "BorderBox15", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(za, i2), s2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("border-box-15"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(Ea, { width: t3, height: a3, viewBox: "0 0 550 380", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框15")]), g("defs", null, [g("radialGradient", { cx: "50%", cy: "50%", fx: "50%", fy: "50%", r: "76.3176911%", gradientTransform: "translate(0.500000,0.500000),scale(0.690909,1.000000),rotate(90.000000),scale(1.000000,2.361703),translate(-0.500000,-0.500000)", id: s2 }, [g("stop", { "stop-color": "#000001", "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": "#06476F", "stop-opacity": "0.126024366", offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-685.000000, -174.000000)" }, [g("g", { id: "框-2", transform: "translate(685.000000, 174.000000)" }, [g("rect", { id: "Combined-Shape", stroke: r2[0], "stroke-width": "2", fill: `url(#${s2})`, x: "0.63525", y: "0.63525", width: "548.7295", height: "378.7295" }, null), g("polygon", { id: "Rectangle-2", fill: r2[1], points: "0 0 25 0 25 2 2 2 2 24 0 24" }, null), g("g", { id: "Group", transform: "translate(12.500000, 368.000000) scale(1, -1) translate(-12.500000, -368.000000) translate(0.000000, 356.000000)", fill: r2[1] }, [g("polygon", { id: "Rectangle-2", points: "0 0 25 0 25 2 2 2 2 24 0 24" }, null)]), g("g", { id: "Group", transform: "translate(537.500000, 368.000000) scale(-1, -1) translate(-537.500000, -368.000000) translate(525.000000, 356.000000)", fill: r2[1] }, [g("polygon", { id: "Rectangle-2", points: "0 0 25 0 25 2 2 2 2 24 0 24" }, null)]), g("g", { id: "Group", transform: "translate(537.500000, 12.000000) scale(-1, 1) translate(-537.500000, -12.000000) translate(525.000000, 0.000000)", fill: r2[1] }, [g("polygon", { id: "Rectangle-2", points: "0 0 25 0 25 2 2 2 2 24 0 24" }, null)])])])])] })] });
  };
} }), Pa = ["#7ce7fd", "#2e6099"], Ha = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), Qa = e({ name: "BorderBox16", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(Pa, i2), s2 = Ve(), u2 = Ve(), c2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("border-box-16"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(Ha, { width: t3, height: a3, viewBox: "0 0 551 384", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框16")]), g("defs", null, [g("linearGradient", { x1: "42.3038368%", y1: "100%", x2: "42.3038368%", y2: "0%", id: s2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0.842264669", offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.07", offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "100%", id: u2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[0], offset: "100%" }, null)]), g("linearGradient", { x1: "0%", y1: "40.7068755%", x2: "100%", y2: "40.7068755%", id: c2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0.1", offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "52.4276684%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.1", offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "3", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-1259.000000, -172.000000)", "fill-rule": "nonzero" }, [g("g", { id: "框3", transform: "translate(1259.000000, 173.000000)" }, [g("polygon", { id: "1", "fill-opacity": "0.1", fill: `url(#${s2})`, points: "1 0 146.792531 0 151.348548 6.15549598 399.651452 6.15549598 404.207469 0 550 0 550 381 1 381" }, null), g("g", { id: "分组1" }, [g("polyline", { id: "矩形-copy-5", stroke: r2[0], opacity: "0.200000003", "stroke-linecap": "round", "stroke-linejoin": "round", points: "330.144628 9.10671937 399.588843 9.10671937 404.142562 5.76297903e-14 549.86157 5.91463637e-14 549.86157 192.379447" }, null), g("line", { x1: "549.86157", y1: "166.726695", x2: "549.86157", y2: "56.3879294", id: "路径-9-copy-2", stroke: `url(#${u2})`, opacity: "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }, null), g("line", { x1: "403.004132", y1: "2.27667984", x2: "399.588843", y2: "9.10671937", id: "路径-10-copy-2", stroke: r2[0], opacity: "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }, null), g("polyline", { id: "矩形-copy-4", stroke: r2[0], opacity: "0.200000003", "stroke-linecap": "round", "stroke-linejoin": "round", transform: "translate(110.996901, 96.263931) scale(-1, 1) translate(-110.996901, -96.263931) ", points: "1.13842975 9.10671937 70.5826446 9.10671937 75.1363636 5.76297903e-14 220.855372 5.91463637e-14 220.855372 192.527861" }, null), g("path", { d: "M1.13842975,166.726695 L1.13842975,56.3879294 L1.13842975,166.726695 Z", id: "路径-9-copy", stroke: `url(#${u2})`, opacity: "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }, null), g("polyline", { id: "矩形-copy-3", stroke: r2[0], opacity: "0.400000006", "stroke-linecap": "round", "stroke-linejoin": "round", transform: "translate(475.136364, 331.517787) scale(1, -1) translate(-475.136364, -331.517787) ", points: "400 282 550.272727 282 550.272727 381.035573" }, null), g("polyline", { id: "矩形-copy-14", stroke: r2[0], "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", transform: "translate(539.245868, 371.245059) scale(1, -1) translate(-539.245868, -371.245059) ", points: "529 361 549.491736 361 549.491736 381.490119" }, null), g("polyline", { id: "矩形-copy", stroke: r2[0], opacity: "0.400000006", "stroke-linecap": "round", "stroke-linejoin": "round", transform: "translate(76.136364, 331.517787) scale(-1, -1) translate(-76.136364, -331.517787) ", points: "1 282 151.272727 282 151.272727 381.035573" }, null), g("polyline", { id: "矩形-copy-12", stroke: r2[0], "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", transform: "translate(11.245868, 371.245059) scale(-1, -1) translate(-11.245868, -371.245059) ", points: "1 361 21.4917355 361 21.4917355 381.490119" }, null), g("line", { x1: "151.411157", y1: "2.27667984", x2: "147.995868", y2: "9.10671937", id: "路径-10-copy", stroke: r2[0], opacity: "0.5", "stroke-linecap": "round", "stroke-linejoin": "round", transform: "translate(149.703512, 5.691700) scale(-1, 1) translate(-149.703512, -5.691700) " }, null), g("path", { d: "M181.010331,8.82213439 C214.889937,8.25296443 247.524923,7.96837945 278.915289,7.96837945 C310.305656,7.96837945 341.422736,8.25296443 372.266529,8.82213439 L372.266529,9.39130435 C342.394069,9.96047431 311.276989,10.2450593 278.915289,10.2450593 C246.55359,10.2450593 213.918603,9.96047431 181.010331,9.39130435 L181.010331,8.82213439 Z", id: "矩形-copy-8", fill: `url(#${c2})` }, null)])])])])] })] });
  };
} }), Ga = ["#7ce7fd", "#2e6099"], Ua = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), Va = e({ name: "BorderBox17", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(Ga, i2);
    return g(Uo, { class: Go.getClassNameForBind("border-box-17"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(Ua, { width: t3, height: a3, viewBox: "0 0 550 380", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框17")]), g("g", { id: "8-19", stroke: "none", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-108.000000, -628.000000)" }, [g("g", { id: "框4", transform: "translate(108.000000, 628.000000)" }, [g("g", { id: "Group-5", transform: "translate(155.500000, 317.500000) scale(1, -1) translate(-155.500000, -317.500000) translate(0.000000, 256.000000)" }, [g("polygon", { id: "Triangle-2", fill: r2[1], transform: "translate(18.346302, 17.653698) rotate(135.000000) translate(-18.346302, -17.653698) ", points: "18.8360471 12.653698 28.8360471 22.653698 7.856557 21.8673362" }, null), g("polygon", { id: "Rectangle-4", fill: r2[1], points: "278 0 302 0 311 9 287 9" }, null), g("polygon", { id: "Rectangle-4", fill: r2[1], transform: "translate(4.146729, 106.017578) scale(-1, 1) rotate(90.000000) translate(-4.146729, -106.017578) ", points: "-12.0446777 101.955322 11.9553223 101.955322 20.3381348 110.079834 -3.66186523 110.079834" }, null)]), g("path", { d: "M549.5,0.5 L549.5,365.5 L321.788993,365.5 L308.155993,379.5 L22.9818555,379.5 L0.5,359.55069 L0.5,0.5 L549.5,0.5 Z", id: "形状结合", stroke: r2[0], "fill-opacity": "0.08", fill: "url(#radialGradient-1)", opacity: "0.764834449" }, null), g("g", { id: "Group-4", transform: "translate(436.000000, 374.000000) rotate(-180.000000) translate(-436.000000, -374.000000) translate(322.000000, 370.000000)", fill: r2[1] }, [g("path", { d: "M33.4911192,4.2746251e-11 C34.043404,4.27419307e-11 34.4911192,0.44771525 34.4911192,1 C34.4911192,1.22655877 34.4141865,1.44640295 34.272921,1.62352701 L29.4876136,7.62352701 C29.2978694,7.86143551 29.0101197,8 28.7058118,8 L1.50888079,8 C0.956596042,8 0.508880792,7.55228475 0.508880792,7 C0.508880792,6.77344124 0.585813471,6.55359705 0.727078979,6.37647299 L5.51238642,0.376472995 C5.70213064,0.138564492 5.98988029,4.27476392e-11 6.29418824,4.2746251e-11 L33.4911192,4.2746251e-11 Z M226.496116,4.2746251e-11 C227.048401,4.27453724e-11 227.496116,0.44771525 227.496116,1 C227.496116,1.22785098 227.418305,1.44886998 227.275564,1.62646781 L222.453163,7.62646781 C222.263352,7.86263026 221.976703,8 221.673716,8 L208.503884,8 C207.951599,8 207.503884,7.55228475 207.503884,7 C207.503884,6.77214902 207.581695,6.55113002 207.724436,6.37353219 L212.546837,0.37353219 C212.736648,0.137369739 213.023297,4.27459736e-11 213.326284,4.2746251e-11 L226.496116,4.2746251e-11 Z M40.7358086,4.2746251e-11 C41.2244412,4.27461612e-11 41.6205562,0.396114992 41.6205562,0.884747597 C41.6205562,1.08729825 41.5510565,1.28371616 41.4236664,1.44119163 L36.4180824,7.62892969 C36.228222,7.86362893 35.9424989,8 35.6406202,8 L34.2641914,8 C33.7755588,8 33.3794438,7.60388501 33.3794438,7.1152524 C33.3794438,6.91270175 33.4489435,6.71628384 33.5763336,6.55880837 L38.5819176,0.371070305 C38.771778,0.136371066 39.0575011,4.27453072e-11 39.3593798,4.2746251e-11 L40.7358086,4.2746251e-11 Z M47.7358086,4.2746251e-11 C48.2244412,4.27461612e-11 48.6205562,0.396114992 48.6205562,0.884747597 C48.6205562,1.08729825 48.5510565,1.28371616 48.4236664,1.44119163 L43.4180824,7.62892969 C43.228222,7.86362893 42.9424989,8 42.6406202,8 L41.2641914,8 C40.7755588,8 40.3794438,7.60388501 40.3794438,7.1152524 C40.3794438,6.91270175 40.4489435,6.71628384 40.5763336,6.55880837 L45.5819176,0.371070305 C45.771778,0.136371066 46.0575011,4.27454832e-11 46.3593798,4.2746251e-11 L47.7358086,4.2746251e-11 Z M55.7358086,4.2746251e-11 C56.2244412,4.27461612e-11 56.6205562,0.396114992 56.6205562,0.884747597 C56.6205562,1.08729825 56.5510565,1.28371616 56.4236664,1.44119163 L51.4180824,7.62892969 C51.228222,7.86362893 50.9424989,8 50.6406202,8 L49.2641914,8 C48.7755588,8 48.3794438,7.60388501 48.3794438,7.1152524 C48.3794438,6.91270175 48.4489435,6.71628384 48.5763336,6.55880837 L53.5819176,0.371070305 C53.771778,0.136371066 54.0575011,4.27453072e-11 54.3593798,4.2746251e-11 L55.7358086,4.2746251e-11 Z M62.7358086,4.2746251e-11 C63.2244412,4.27461612e-11 63.6205562,0.396114992 63.6205562,0.884747597 C63.6205562,1.08729825 63.5510565,1.28371616 63.4236664,1.44119163 L58.4180824,7.62892969 C58.228222,7.86362893 57.9424989,8 57.6406202,8 L56.2641914,8 C55.7755588,8 55.3794438,7.60388501 55.3794438,7.1152524 C55.3794438,6.91270175 55.4489435,6.71628384 55.5763336,6.55880837 L60.5819176,0.371070305 C60.771778,0.136371066 61.0575011,4.27454832e-11 61.3593798,4.2746251e-11 L62.7358086,4.2746251e-11 Z M69.7358086,4.2746251e-11 C70.2244412,4.27461612e-11 70.6205562,0.396114992 70.6205562,0.884747597 C70.6205562,1.08729825 70.5510565,1.28371616 70.4236664,1.44119163 L65.4180824,7.62892969 C65.228222,7.86362893 64.9424989,8 64.6406202,8 L63.2641914,8 C62.7755588,8 62.3794438,7.60388501 62.3794438,7.1152524 C62.3794438,6.91270175 62.4489435,6.71628384 62.5763336,6.55880837 L67.5819176,0.371070305 C67.771778,0.136371066 68.0575011,4.27453072e-11 68.3593798,4.2746251e-11 L69.7358086,4.2746251e-11 Z M76.7358086,4.2746251e-11 C77.2244412,4.27461612e-11 77.6205562,0.396114992 77.6205562,0.884747597 C77.6205562,1.08729825 77.5510565,1.28371616 77.4236664,1.44119163 L72.4180824,7.62892969 C72.228222,7.86362893 71.9424989,8 71.6406202,8 L70.2641914,8 C69.7755588,8 69.3794438,7.60388501 69.3794438,7.1152524 C69.3794438,6.91270175 69.4489435,6.71628384 69.5763336,6.55880837 L74.5819176,0.371070305 C74.771778,0.136371066 75.0575011,4.27454832e-11 75.3593798,4.2746251e-11 L76.7358086,4.2746251e-11 Z M83.7358086,4.2746251e-11 C84.2244412,4.27461612e-11 84.6205562,0.396114992 84.6205562,0.884747597 C84.6205562,1.08729825 84.5510565,1.28371616 84.4236664,1.44119163 L79.4180824,7.62892969 C79.228222,7.86362893 78.9424989,8 78.6406202,8 L77.2641914,8 C76.7755588,8 76.3794438,7.60388501 76.3794438,7.1152524 C76.3794438,6.91270175 76.4489435,6.71628384 76.5763336,6.55880837 L81.5819176,0.371070305 C81.771778,0.136371066 82.0575011,4.27467505e-11 82.3593798,4.2746251e-11 L83.7358086,4.2746251e-11 Z M91.7358086,4.2746251e-11 C92.2244412,4.27461612e-11 92.6205562,0.396114992 92.6205562,0.884747597 C92.6205562,1.08729825 92.5510565,1.28371616 92.4236664,1.44119163 L87.4180824,7.62892969 C87.228222,7.86362893 86.9424989,8 86.6406202,8 L85.2641914,8 C84.7755588,8 84.3794438,7.60388501 84.3794438,7.1152524 C84.3794438,6.91270175 84.4489435,6.71628384 84.5763336,6.55880837 L89.5819176,0.371070305 C89.771778,0.136371066 90.0575011,4.27454832e-11 90.3593798,4.2746251e-11 L91.7358086,4.2746251e-11 Z M98.7358086,4.2746251e-11 C99.2244412,4.27461612e-11 99.6205562,0.396114992 99.6205562,0.884747597 C99.6205562,1.08729825 99.5510565,1.28371616 99.4236664,1.44119163 L94.4180824,7.62892969 C94.228222,7.86362893 93.9424989,8 93.6406202,8 L92.2641914,8 C91.7755588,8 91.3794438,7.60388501 91.3794438,7.1152524 C91.3794438,6.91270175 91.4489435,6.71628384 91.5763336,6.55880837 L96.5819176,0.371070305 C96.771778,0.136371066 97.0575011,4.27467505e-11 97.3593798,4.2746251e-11 L98.7358086,4.2746251e-11 Z M105.735809,4.2746251e-11 C106.224441,4.27461612e-11 106.620556,0.396114992 106.620556,0.884747597 C106.620556,1.08729825 106.551056,1.28371616 106.423666,1.44119163 L101.418082,7.62892969 C101.228222,7.86362893 100.942499,8 100.64062,8 L99.2641914,8 C98.7755588,8 98.3794438,7.60388501 98.3794438,7.1152524 C98.3794438,6.91270175 98.4489435,6.71628384 98.5763336,6.55880837 L103.581918,0.371070305 C103.771778,0.136371066 104.057501,4.27454832e-11 104.35938,4.2746251e-11 L105.735809,4.2746251e-11 Z M112.735809,4.2746251e-11 C113.224441,4.27461612e-11 113.620556,0.396114992 113.620556,0.884747597 C113.620556,1.08729825 113.551056,1.28371616 113.423666,1.44119163 L108.418082,7.62892969 C108.228222,7.86362893 107.942499,8 107.64062,8 L106.264191,8 C105.775559,8 105.379444,7.60388501 105.379444,7.1152524 C105.379444,6.91270175 105.448944,6.71628384 105.576334,6.55880837 L110.581918,0.371070305 C110.771778,0.136371066 111.057501,4.27453072e-11 111.35938,4.2746251e-11 L112.735809,4.2746251e-11 Z M120.735809,4.2746251e-11 C121.224441,4.27461612e-11 121.620556,0.396114992 121.620556,0.884747597 C121.620556,1.08729825 121.551056,1.28371616 121.423666,1.44119163 L116.418082,7.62892969 C116.228222,7.86362893 115.942499,8 115.64062,8 L114.264191,8 C113.775559,8 113.379444,7.60388501 113.379444,7.1152524 C113.379444,6.91270175 113.448944,6.71628384 113.576334,6.55880837 L118.581918,0.371070305 C118.771778,0.136371066 119.057501,4.27454832e-11 119.35938,4.2746251e-11 L120.735809,4.2746251e-11 Z M127.735809,4.2746251e-11 C128.224441,4.27461612e-11 128.620556,0.396114992 128.620556,0.884747597 C128.620556,1.08729825 128.551056,1.28371616 128.423666,1.44119163 L123.418082,7.62892969 C123.228222,7.86362893 122.942499,8 122.64062,8 L121.264191,8 C120.775559,8 120.379444,7.60388501 120.379444,7.1152524 C120.379444,6.91270175 120.448944,6.71628384 120.576334,6.55880837 L125.581918,0.371070305 C125.771778,0.136371066 126.057501,4.27453072e-11 126.35938,4.2746251e-11 L127.735809,4.2746251e-11 Z M134.735809,4.2746251e-11 C135.224441,4.27461612e-11 135.620556,0.396114992 135.620556,0.884747597 C135.620556,1.08729825 135.551056,1.28371616 135.423666,1.44119163 L130.418082,7.62892969 C130.228222,7.86362893 129.942499,8 129.64062,8 L128.264191,8 C127.775559,8 127.379444,7.60388501 127.379444,7.1152524 C127.379444,6.91270175 127.448944,6.71628384 127.576334,6.55880837 L132.581918,0.371070305 C132.771778,0.136371066 133.057501,4.27454832e-11 133.35938,4.2746251e-11 L134.735809,4.2746251e-11 Z M141.735809,4.2746251e-11 C142.224441,4.27461612e-11 142.620556,0.396114992 142.620556,0.884747597 C142.620556,1.08729825 142.551056,1.28371616 142.423666,1.44119163 L137.418082,7.62892969 C137.228222,7.86362893 136.942499,8 136.64062,8 L135.264191,8 C134.775559,8 134.379444,7.60388501 134.379444,7.1152524 C134.379444,6.91270175 134.448944,6.71628384 134.576334,6.55880837 L139.581918,0.371070305 C139.771778,0.136371066 140.057501,4.27453072e-11 140.35938,4.2746251e-11 L141.735809,4.2746251e-11 Z M148.735809,4.2746251e-11 C149.224441,4.27461612e-11 149.620556,0.396114992 149.620556,0.884747597 C149.620556,1.08729825 149.551056,1.28371616 149.423666,1.44119163 L144.418082,7.62892969 C144.255345,7.83010047 144.022178,7.95903014 143.768775,7.99176166 L143.64062,8 L143.64062,8 L142.264191,8 C141.775559,8 141.379444,7.60388501 141.379444,7.1152524 C141.379444,6.91270175 141.448944,6.71628384 141.576334,6.55880837 L146.581918,0.371070305 C146.771778,0.136371066 147.057501,4.27467505e-11 147.35938,4.2746251e-11 L148.735809,4.2746251e-11 Z M156.735809,4.2746251e-11 C157.224441,4.27461612e-11 157.620556,0.396114992 157.620556,0.884747597 C157.620556,1.08729825 157.551056,1.28371616 157.423666,1.44119163 L152.418082,7.62892969 C152.228222,7.86362893 151.942499,8 151.64062,8 L150.264191,8 C149.775559,8 149.379444,7.60388501 149.379444,7.1152524 C149.379444,6.91270175 149.448944,6.71628384 149.576334,6.55880837 L154.581918,0.371070305 C154.771778,0.136371066 155.057501,4.27454832e-11 155.35938,4.2746251e-11 L156.735809,4.2746251e-11 Z M163.735809,4.2746251e-11 C164.224441,4.27461612e-11 164.620556,0.396114992 164.620556,0.884747597 C164.620556,1.08729825 164.551056,1.28371616 164.423666,1.44119163 L159.418082,7.62892969 C159.228222,7.86362893 158.942499,8 158.64062,8 L157.264191,8 C156.775559,8 156.379444,7.60388501 156.379444,7.1152524 C156.379444,6.91270175 156.448944,6.71628384 156.576334,6.55880837 L161.581918,0.371070305 C161.771778,0.136371066 162.057501,4.27467505e-11 162.35938,4.2746251e-11 L163.735809,4.2746251e-11 Z M170.735809,4.2746251e-11 C171.224441,4.27461612e-11 171.620556,0.396114992 171.620556,0.884747597 C171.620556,1.08729825 171.551056,1.28371616 171.423666,1.44119163 L166.418082,7.62892969 C166.228222,7.86362893 165.942499,8 165.64062,8 L164.264191,8 C163.775559,8 163.379444,7.60388501 163.379444,7.1152524 C163.379444,6.91270175 163.448944,6.71628384 163.576334,6.55880837 L168.581918,0.371070305 C168.771778,0.136371066 169.057501,4.27454832e-11 169.35938,4.2746251e-11 L170.735809,4.2746251e-11 Z M177.735809,4.2746251e-11 C178.224441,4.27461612e-11 178.620556,0.396114992 178.620556,0.884747597 C178.620556,1.08729825 178.551056,1.28371616 178.423666,1.44119163 L173.418082,7.62892969 C173.228222,7.86362893 172.942499,8 172.64062,8 L171.264191,8 C170.775559,8 170.379444,7.60388501 170.379444,7.1152524 C170.379444,6.91270175 170.448944,6.71628384 170.576334,6.55880837 L175.581918,0.371070305 C175.771778,0.136371066 176.057501,4.27453072e-11 176.35938,4.2746251e-11 L177.735809,4.2746251e-11 Z M184.735809,4.2746251e-11 C185.224441,4.27461612e-11 185.620556,0.396114992 185.620556,0.884747597 C185.620556,1.08729825 185.551056,1.28371616 185.423666,1.44119163 L180.418082,7.62892969 C180.228222,7.86362893 179.942499,8 179.64062,8 L178.264191,8 C177.775559,8 177.379444,7.60388501 177.379444,7.1152524 C177.379444,6.91270175 177.448944,6.71628384 177.576334,6.55880837 L182.581918,0.371070305 C182.771778,0.136371066 183.057501,4.27454832e-11 183.35938,4.2746251e-11 L184.735809,4.2746251e-11 Z M206.735809,4.2746251e-11 C207.224441,4.27461612e-11 207.620556,0.396114992 207.620556,0.884747597 C207.620556,1.08729825 207.551056,1.28371616 207.423666,1.44119163 L202.418082,7.62892969 C202.228222,7.86362893 201.942499,8 201.64062,8 L200.264191,8 C199.775559,8 199.379444,7.60388501 199.379444,7.1152524 C199.379444,6.91270175 199.448944,6.71628384 199.576334,6.55880837 L204.581918,0.371070305 C204.771778,0.136371066 205.057501,4.27454832e-11 205.35938,4.2746251e-11 L206.735809,4.2746251e-11 Z M199.735809,4.2746251e-11 C200.224441,4.27461612e-11 200.620556,0.396114992 200.620556,0.884747597 C200.620556,1.08729825 200.551056,1.28371616 200.423666,1.44119163 L195.418082,7.62892969 C195.228222,7.86362893 194.942499,8 194.64062,8 L193.264191,8 C192.775559,8 192.379444,7.60388501 192.379444,7.1152524 C192.379444,6.91270175 192.448944,6.71628384 192.576334,6.55880837 L197.581918,0.371070305 C197.771778,0.136371066 198.057501,4.27453072e-11 198.35938,4.2746251e-11 L199.735809,4.2746251e-11 Z M192.735809,4.2746251e-11 C193.224441,4.27461612e-11 193.620556,0.396114992 193.620556,0.884747597 C193.620556,1.08729825 193.551056,1.28371616 193.423666,1.44119163 L188.418082,7.62892969 C188.228222,7.86362893 187.942499,8 187.64062,8 L186.264191,8 C185.775559,8 185.379444,7.60388501 185.379444,7.1152524 C185.379444,6.91270175 185.448944,6.71628384 185.576334,6.55880837 L190.581918,0.371070305 C190.771778,0.136371066 191.057501,4.27454832e-11 191.35938,4.2746251e-11 L192.735809,4.2746251e-11 Z", id: "形状结合" }, null)])])])])] })] });
  };
} }), Wa = ["#7ce7fd", "#2e6099"], Ya = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), Za = e({ name: "BorderBox18", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(Wa, i2);
    return g(Uo, { class: Go.getClassNameForBind("border-box-18"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(Ya, { width: t3, height: a3, viewBox: "0 0 550 381", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框18")]), g("defs", null, [g("polygon", { id: "path18-1", points: "33.8251065 0 532.838033 0 549 17.1369358 549 348.609342 526.820348 380 25.2742898 380 0 350.531484 0 163.323634 18.3 140.790415 18.3 12.9030282" }, null)]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-685.000000, -627.000000)" }, [g("g", { id: "框5", transform: "translate(685.000000, 627.000000)" }, [g("g", { id: "仪表盘", opacity: "0.764834449", transform: "translate(274.500000, 190.000000) scale(-1, -1) translate(-274.500000, -190.000000) " }, [g("path", { stroke: r2[0], "stroke-width": "2", d: "M532.6223,0.5 L548.5,17.3355203 L548.5,348.450522 L526.561415,379.5 L25.5041651,379.5 L0.5,350.346435 L0.5,163.501093 L18.8,140.967873 L18.8,13.1376167 L34.0057597,0.5 L532.6223,0.5 Z", "stroke-linejoin": "square" }, null)]), g("g", { id: "Group-4", transform: "translate(546.000000, 311.000000) scale(-1, 1) rotate(90.000000) translate(-546.000000, -311.000000) translate(476.000000, 307.000000)", fill: r2[1] }, [g("path", { d: "M2.71119426,0 L34.136503,0 C34.6887877,1.00876996e-15 35.136503,0.44771525 35.136503,1 C35.136503,1.13296129 35.1099875,1.26458761 35.0585077,1.38717855 L33.2108105,5.78717855 C33.0548976,6.15846068 32.6914958,6.4 32.2888057,6.4 L0.863497035,6.4 C0.311212285,6.4 -0.136502965,5.95228475 -0.136502965,5.4 C-0.136502965,5.26703871 -0.10998748,5.13541239 -0.0585077212,5.01282145 L1.7891895,0.612821449 C1.94510244,0.24153932 2.30850422,7.39729597e-17 2.71119426,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M121.98823,0.8 L138.310437,0.8 C138.862722,0.8 139.310437,1.24771525 139.310437,1.8 C139.310437,1.94054325 139.280812,2.07950817 139.223494,2.20783216 L137.25816,6.60783216 C137.097264,6.96804813 136.73962,7.2 136.345103,7.2 L120.022896,7.2 C119.470612,7.2 119.022896,6.75228475 119.022896,6.2 C119.022896,6.05945675 119.052521,5.92049183 119.10984,5.79216784 L121.075173,1.39216784 C121.23607,1.03195187 121.593714,0.8 121.98823,0.8 Z", id: "Rectangle-3" }, null), g("path", { d: "M40.9012197,0 L42.4646838,0 C43.0169685,1.20591542e-16 43.4646838,0.44771525 43.4646838,1 C43.4646838,1.12319713 43.4419191,1.24533373 43.3975363,1.36025848 L41.6982995,5.76025848 C41.5494152,6.14577913 41.1787177,6.4 40.765447,6.4 L39.2019829,6.4 C38.6496981,6.4 38.2019829,5.95228475 38.2019829,5.4 C38.2019829,5.27680287 38.2247476,5.15466627 38.2691304,5.03974152 L39.9683672,0.639741519 C40.1172514,0.254220867 40.4879489,5.20005813e-16 40.9012197,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M49.234553,0 L50.7980171,0 C51.3503019,1.20591542e-16 51.7980171,0.44771525 51.7980171,1 C51.7980171,1.12319713 51.7752524,1.24533373 51.7308696,1.36025848 L50.0316328,5.76025848 C49.8827486,6.14577913 49.5120511,6.4 49.0987803,6.4 L47.5353162,6.4 C46.9830315,6.4 46.5353162,5.95228475 46.5353162,5.4 C46.5353162,5.27680287 46.5580809,5.15466627 46.6024637,5.03974152 L48.3017005,0.639741519 C48.4505848,0.254220867 48.8212823,5.20005813e-16 49.234553,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M57.5678863,0 L59.1313504,0 C59.6836352,1.20591542e-16 60.1313504,0.44771525 60.1313504,1 C60.1313504,1.12319713 60.1085858,1.24533373 60.064203,1.36025848 L58.3649662,5.76025848 C58.2160819,6.14577913 57.8453844,6.4 57.4321137,6.4 L55.8686496,6.4 C55.3163648,6.4 54.8686496,5.95228475 54.8686496,5.4 C54.8686496,5.27680287 54.8914142,5.15466627 54.935797,5.03974152 L56.6350338,0.639741519 C56.7839181,0.254220867 57.1546156,5.20005813e-16 57.5678863,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M64.234553,0 L65.7980171,0 C66.3503019,-7.67586877e-16 66.7980171,0.44771525 66.7980171,1 C66.7980171,1.12319713 66.7752524,1.24533373 66.7308696,1.36025848 L65.0316328,5.76025848 C64.8827486,6.14577913 64.5120511,6.4 64.0987803,6.4 L62.5353162,6.4 C61.9830315,6.4 61.5353162,5.95228475 61.5353162,5.4 C61.5353162,5.27680287 61.5580809,5.15466627 61.6024637,5.03974152 L63.3017005,0.639741519 C63.4505848,0.254220867 63.8212823,2.97961208e-16 64.234553,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M72.5678863,0 L74.1313504,0 C74.6836352,1.20591542e-16 75.1313504,0.44771525 75.1313504,1 C75.1313504,1.12319713 75.1085858,1.24533373 75.064203,1.36025848 L73.3649662,5.76025848 C73.2160819,6.14577913 72.8453844,6.4 72.4321137,6.4 L70.8686496,6.4 C70.3163648,6.4 69.8686496,5.95228475 69.8686496,5.4 C69.8686496,5.27680287 69.8914142,5.15466627 69.935797,5.03974152 L71.6350338,0.639741519 C71.7839181,0.254220867 72.1546156,5.20005813e-16 72.5678863,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M80.9012197,0 L82.4646838,0 C83.0169685,1.20591542e-16 83.4646838,0.44771525 83.4646838,1 C83.4646838,1.12319713 83.4419191,1.24533373 83.3975363,1.36025848 L81.6982995,5.76025848 C81.5494152,6.14577913 81.1787177,6.4 80.765447,6.4 L79.2019829,6.4 C78.6496981,6.4 78.2019829,5.95228475 78.2019829,5.4 C78.2019829,5.27680287 78.2247476,5.15466627 78.2691304,5.03974152 L79.9683672,0.639741519 C80.1172514,0.254220867 80.4879489,5.20005813e-16 80.9012197,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M89.234553,0 L90.7980171,0 C91.3503019,1.20591542e-16 91.7980171,0.44771525 91.7980171,1 C91.7980171,1.12319713 91.7752524,1.24533373 91.7308696,1.36025848 L90.0316328,5.76025848 C89.8827486,6.14577913 89.5120511,6.4 89.0987803,6.4 L87.5353162,6.4 C86.9830315,6.4 86.5353162,5.95228475 86.5353162,5.4 C86.5353162,5.27680287 86.5580809,5.15466627 86.6024637,5.03974152 L88.3017005,0.639741519 C88.4505848,0.254220867 88.8212823,5.20005813e-16 89.234553,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M97.5678863,0 L99.1313504,0 C99.6836352,1.20591542e-16 100.13135,0.44771525 100.13135,1 C100.13135,1.12319713 100.108586,1.24533373 100.064203,1.36025848 L98.3649662,5.76025848 C98.2160819,6.14577913 97.8453844,6.4 97.4321137,6.4 L95.8686496,6.4 C95.3163648,6.4 94.8686496,5.95228475 94.8686496,5.4 C94.8686496,5.27680287 94.8914142,5.15466627 94.935797,5.03974152 L96.6350338,0.639741519 C96.7839181,0.254220867 97.1546156,5.20005813e-16 97.5678863,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M104.234553,0 L105.798017,0 C106.350302,1.20591542e-16 106.798017,0.44771525 106.798017,1 C106.798017,1.12319713 106.775252,1.24533373 106.73087,1.36025848 L105.031633,5.76025848 C104.882749,6.14577913 104.512051,6.4 104.09878,6.4 L102.535316,6.4 C101.983031,6.4 101.535316,5.95228475 101.535316,5.4 C101.535316,5.27680287 101.558081,5.15466627 101.602464,5.03974152 L103.3017,0.639741519 C103.450585,0.254220867 103.821282,5.20005813e-16 104.234553,0 Z", id: "Rectangle-3" }, null), g("path", { d: "M112.567886,0 L114.13135,0 C114.683635,1.20591542e-16 115.13135,0.44771525 115.13135,1 C115.13135,1.12319713 115.108586,1.24533373 115.064203,1.36025848 L113.364966,5.76025848 C113.216082,6.14577913 112.845384,6.4 112.432114,6.4 L110.86865,6.4 C110.316365,6.4 109.86865,5.95228475 109.86865,5.4 C109.86865,5.27680287 109.891414,5.15466627 109.935797,5.03974152 L111.635034,0.639741519 C111.783918,0.254220867 112.154616,5.20005813e-16 112.567886,0 Z", id: "Rectangle-3" }, null)])])])])] })] });
  };
} }), Ka = ["#7ce7fd", "#2e6099"], Xa = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), Ja = e({ name: "BorderBox19", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(Ka, i2);
    return g(Uo, { class: Go.getClassNameForBind("border-box-19"), ref: o2, style: { backgroundColor: n2, boxShadow: `inset 0 0 20px ${r2[0]}` } }, { default: () => [g(Xa, { width: t3, height: a3, viewBox: "0 0 551 381", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框19")]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-1261.000000, -627.000000)" }, [g("g", { id: "框6", transform: "translate(1261.000000, 627.000000)" }, [g("g", { id: "Rectangle-7-Copy" }, [g("path", { stroke: r2[0], "stroke-width": "1.5", d: "M549.5,1.5 L549.5,380.5 L0.5,380.5 L0.5,1.5 L549.5,1.5 Z", "stroke-linejoin": "square" }, null)]), g("g", { id: "Group-34-Copy-2", transform: "translate(64.848457, 17.179245) rotate(180.000000) translate(-64.848457, -17.179245) translate(0.348457, 0.679245)", stroke: r2[1], "stroke-width": "1" }, [g("polyline", { id: "Path-28", points: "8.0365245 7.7352773 34.6174397 24.5734706 119.713108 24.5734706 128.214043 32.2709303" }, null), g("ellipse", { id: "Oval-8", cx: "4.79242287", cy: "4.81091236", rx: "4.79242287", ry: "4.81091236" }, null)]), g("g", { id: "Group-34-Copy-2", transform: "translate(421.348457, 347.679245)", stroke: r2[1], "stroke-width": "1" }, [g("polyline", { id: "Path-28", points: "8.0365245 7.7352773 34.6174397 24.5734706 119.713108 24.5734706 128.214043 32.2709303" }, null), g("ellipse", { id: "Oval-8", cx: "4.79242287", cy: "4.81091236", rx: "4.79242287", ry: "4.81091236" }, null)])])])])] })] });
  };
} }), el = ["#7ce7fd", "#2e6099"], tl = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), ol = e({ name: "BorderBox20", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(el, i2), s2 = Ve(), u2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("border-box-20"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(tl, { width: t3, height: a3, viewBox: "0 0 550 383", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框20")]), g("defs", null, [g("linearGradient", { x1: "50%", y1: "-18.59375%", x2: "50%", y2: "116.930339%", id: s2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "19.7596837%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.262404786", offset: "79.7943755%" }, null), g("stop", { "stop-color": r2[0], offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "100%", id: u2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "27.6041667%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "65.8658854%" }, null), g("stop", { "stop-color": r2[0], offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-108.000000, -1082.000000)" }, [g("g", { id: "框7", transform: "translate(108.000000, 1082.000000)" }, [g("path", { d: "M549,1 L549,382 L1,382 L1,1 L549,1 Z", id: "矩形备份-2", stroke: `url(#${u2})`, "stroke-width": "3", fill: `url(#${s2})`, opacity: "0.520086118" }, null), g("polygon", { id: "Rectangle-11", fill: r2[1], points: "3.01645338 3 11.0603291 3 11.0603291 11 3.01645338 11" }, null), g("polygon", { id: "Rectangle-11", fill: r2[1], points: "538.939671 3 546.983547 3 546.983547 11 538.939671 11" }, null), g("polygon", { id: "Rectangle-11", fill: r2[1], points: "538.939671 372 546.983547 372 546.983547 380 538.939671 380" }, null), g("polygon", { id: "Rectangle-11", fill: r2[1], points: "3.01645338 372 11.0603291 372 11.0603291 380 3.01645338 380" }, null)])])])] })] });
  };
} }), al = ["#7ce7fd", "#2e6099"], ll = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), nl = e({ name: "BorderBox21", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(al, i2), s2 = Ve(), u2 = Ve(), c2 = Ve(), d2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("border-box-21"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(ll, { width: t3, height: a3, viewBox: "0 0 558 387", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框21")]), g("defs", null, [g("radialGradient", { cx: "50%", cy: "50%", fx: "50%", fy: "50%", r: "78.2465983%", gradientTransform: "translate(0.500000,0.500000),scale(0.680738,1.000000),rotate(65.192947),scale(1.000000,1.675302),translate(-0.500000,-0.500000)", id: s2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.737007473", offset: "100%" }, null)]), g("linearGradient", { x1: "0.561602852%", y1: "36.9338719%", x2: "99.0453895%", y2: "36.9338719%", id: u2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0.2", offset: "0%" }, null), g("stop", { "stop-color": r2[0], offset: "50.299211%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.1", offset: "100%" }, null)]), g("linearGradient", { x1: "1.82798159%", y1: "50%", x2: "100%", y2: "50%", id: c2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "48.5230181%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "0%", y1: "4.34021734%", x2: "97.00853%", y2: "92.9279852%", id: d2 }, [g("stop", { "stop-color": r2[1], offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "48.6587213%" }, null), g("stop", { "stop-color": r2[1], offset: "100%" }, null)]), g("polygon", { id: "path-b215", points: "517.148362 0 537.283237 0 550 12.557377 550 31.3934426 547.880539 31.3934426 547.880539 13.6038251 536.223507 2.09289617 517.148362 2.09289617" }, null), g("polygon", { id: "path-7", points: "0 0 20.1348748 0 32.8516378 12.557377 32.8516378 31.3934426 30.7321773 31.3934426 30.7321773 13.6038251 19.0751445 2.09289617 0 2.09289617" }, null), g("polygon", { id: "path-9", points: "517.148362 351.606557 537.283237 351.606557 550 364.163934 550 383 547.880539 383 547.880539 365.210383 536.223507 353.699454 517.148362 353.699454" }, null), g("polygon", { id: "path-11", points: "0 351.606557 20.1348748 351.606557 32.8516378 364.163934 32.8516378 383 30.7321773 383 30.7321773 365.210383 19.0751445 353.699454 0 353.699454" }, null)]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-681.000000, -1080.000000)" }, [g("g", { id: "框8", transform: "translate(685.000000, 1082.000000)" }, [g("g", { id: "Group-11" }, [g("rect", { id: "Rectangle-6", stroke: `url(#${u2})`, "stroke-width": "2.5", "fill-opacity": "0.2", fill: `url(#${s2})`, x: "11.5973025", y: "11.4644809", width: "526.805395", height: "357.978142" }, null), g("g", { id: "Group-7", transform: "translate(115.510597, 3.139344)", fill: `url(#${c2})`, opacity: "0.543801444" }, [g("rect", { id: "Rectangle-2", x: "0", y: "0", width: "317.919075", height: "1.04644809" }, null), g("rect", { id: "Rectangle-2备份", x: "0", y: "373.581967", width: "317.919075", height: "1.04644809" }, null)]), g("g", { id: "path-b2112" }, [g("use", { fill: "black", "fill-opacity": "1", "xlink:href": "#path-b215" }, null), g("use", { fill: `url(#${d2})`, "fill-rule": "evenodd", "xlink:href": "#path-b215" }, null)]), g("g", { id: "path-b2112", transform: "translate(16.425819, 15.696721) scale(-1, 1) translate(-16.425819, -15.696721) " }, [g("use", { fill: "black", "fill-opacity": "1", "xlink:href": "#path-7" }, null), g("use", { fill: `url(#${d2})`, "fill-rule": "evenodd", "xlink:href": "#path-7" }, null)]), g("g", { id: "path-b2112", transform: "translate(533.574181, 367.303279) scale(1, -1) translate(-533.574181, -367.303279) " }, [g("use", { fill: "black", "fill-opacity": "1", "xlink:href": "#path-9" }, null), g("use", { fill: `url(#${d2})`, "fill-rule": "evenodd", "xlink:href": "#path-9" }, null)]), g("g", { id: "path-b2112", transform: "translate(16.425819, 367.303279) scale(-1, -1) translate(-16.425819, -367.303279) " }, [g("use", { fill: "black", "fill-opacity": "1", "xlink:href": "#path-11" }, null), g("use", { fill: `url(#${d2})`, "fill-rule": "evenodd", "xlink:href": "#path-11" }, null)])]), g("g", { id: "Group-9", transform: "translate(17.187500, 17.000000)" }, null)])])])] })] });
  };
} }), il = ["#7ce7fd", "#2e6099"], rl = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container"), sl = e({ name: "BorderBox22", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(il, i2);
    return g(Uo, { class: Go.getClassNameForBind("border-box-22"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(rl, { width: t3, height: a3, viewBox: "0 0 551 381", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("框22")]), g("g", { id: "8-19", stroke: "none", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-外框素材", transform: "translate(-1259.000000, -1082.000000)" }, [g("g", { id: "内容框底色", transform: "translate(1259.000000, 1082.000000)" }, [g("path", { d: "M528.792893,0.5 L550.5,22.2071068 L550.5,380.5 L22.2071068,380.5 L0.5,358.792893 L0.5,0.5 L528.792893,0.5 Z", id: "形状结合", stroke: r2[0], "fill-opacity": "0.1", fill: "#0D305C" }, null), g("line", { x1: "541.5", y1: "2.5", x2: "548.5", y2: "9.5", id: "直线", stroke: r2[1], "stroke-linecap": "square" }, null), g("line", { x1: "3", y1: "372", x2: "10", y2: "379", id: "直线", stroke: r2[1], "stroke-linecap": "square" }, null), g("line", { x1: "524.5", y1: "5.5", x2: "545.5", y2: "26.5", id: "直线", stroke: r2[1], "stroke-linecap": "square" }, null), g("line", { x1: "5.5", y1: "354.5", x2: "26.5", y2: "375.5", id: "直线备份", stroke: r2[1], "stroke-linecap": "square" }, null), g("line", { x1: "3.5", y1: "140.371019", x2: "3.5", y2: "241.101686", id: "直线-2备份", stroke: r2[1], "stroke-linecap": "square" }, null), g("line", { x1: "547.5", y1: "140.371019", x2: "547.5", y2: "241.101686", id: "直线-2", stroke: r2[1], "stroke-linecap": "square" }, null)])])])] })] });
  };
} });
function ul() {
  return { color: { type: Array, default: () => [] } };
}
function cl() {
  return { reverse: { type: Boolean, default: false } };
}
function dl(e2) {
  return { duration: { type: Number, default: e2 } };
}
const pl = ["#2e6099", "#7ce7fd"], fl = 2.5, hl = function({ width: e2, height: t2, rowPoints: o2, rowCount: a2 }) {
  const l2 = e2 / (o2 + 1), n2 = t2 / (a2 + 1);
  return Array.from({ length: a2 }).fill(0).flatMap((e3, t3) => Array.from({ length: o2 }).fill(0).map((e4, o3) => [l2 * (o3 + 1), n2 * (t3 + 1)]));
}({ width: 200, height: 50, rowPoints: 20, rowCount: 4 }), gl = hl[39], ml = hl[37], yl = Go.div`
  width: 100%;
  height: 100%;

  svg {
    transform-origin: left top;
  }
`("decoration-1"), vl = e({ name: "Decoration1", props: ul(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { color: t3 } = e2, { width: a3, height: n2 } = l2, i2 = Ho(pl, t3), r2 = { transform: `scale(${a3 / 200},${n2 / 50})` };
    return g(yl, { ref: o2 }, { default: () => [g("svg", { width: 200, height: 50, style: r2 }, [hl.map(([e3, t4], o3) => {
      const a4 = e3 - 1.25, l3 = t4 - 1.25;
      return Math.random() > 0.6 ? g("rect", { key: o3, x: a4, y: l3, width: fl, height: fl, fill: i2[0] }, [Math.random() > 0.6 && g("animate", { attributeName: "fill", values: `${i2[0]};transparent`, dur: "1s", begin: 2 * Math.random(), repeatCount: "indefinite" }, null)]) : null;
    }), g("rect", { fill: i2[1], x: gl[0] - fl, y: gl[1] - fl, width: 5, height: 5 }, [g("animate", { attributeName: "width", values: "0;5", dur: "2s", repeatCount: "indefinite" }, null), g("animate", { attributeName: "height", values: "0;5", dur: "2s", repeatCount: "indefinite" }, null), g("animate", { attributeName: "x", values: `${gl[0]};${gl[0] - fl}`, dur: "2s", repeatCount: "indefinite" }, null), g("animate", { attributeName: "y", values: `${gl[1]};${gl[1] - fl}`, dur: "2s", repeatCount: "indefinite" }, null)]), g("rect", { fill: i2[1], x: ml[0] - fl, y: ml[1] - fl, width: 5, height: 5 }, [g("animate", { attributeName: "width", values: "0;40;0", dur: "2s", repeatCount: "indefinite" }, null), g("animate", { attributeName: "x", values: `${ml[0]};${ml[0] - 40};${ml[0]}`, dur: "2s", repeatCount: "indefinite" }, null)])])] });
  };
} }), Cl = ["#2e6099", "#7ce7fd"];
const bl = Go.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-2"), Ml = e({ name: "Decoration2", props: { ...ul(), ...cl(), ...dl(6) }, setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { color: n2, reverse: i2, duration: r2 } = e2, s2 = Ho(Cl, n2), { x: u2, y: c2, width: d2, height: p2 } = function(e3, t4, o3) {
      return e3 ? { width: 1, height: o3, x: t4 / 2, y: 0 } : { width: t4, height: 1, x: 0, y: o3 / 2 };
    }(i2, t3, a3);
    return g(bl, { ref: o2 }, { default: () => [g("svg", { width: t3, height: a3 }, [g("rect", { x: u2, y: c2, width: d2, height: p2, fill: s2[0] }, [g("animate", { attributeName: i2 ? "height" : "width", from: "0", to: i2 ? a3 : t3, dur: `${r2}s`, calcMode: "spline", keyTimes: "0;1", keySplines: ".42,0,.58,1", repeatCount: "indefinite" }, null)]), g("rect", { x: u2, y: c2, width: "1", height: "1", fill: s2[1] }, [g("animate", { attributeName: i2 ? "y" : "x", from: "0", to: i2 ? a3 : t3, dur: `${r2}s`, calcMode: "spline", keyTimes: "0;1", keySplines: "0.42,0,0.58,1", repeatCount: "indefinite" }, null)])])] });
  };
} });
const kl = ["#7ce7fd", "transparent"], wl = function({ width: e2, height: t2, rowPoints: o2, rowCount: a2 }) {
  const l2 = e2 / (o2 + 1), n2 = t2 / (a2 + 1);
  return Array.from({ length: a2 }).fill(0).flatMap((e3, t3) => Array.from({ length: o2 }).fill(0).map((e4, o3) => [l2 * (o3 + 1), n2 * (t3 + 1)]));
}({ width: 300, height: 35, rowPoints: 25, rowCount: 2 }), xl = Go.div`
  width: 100%;
  height: 100%;

  svg {
    transform-origin: left top;
  }
`("decoration-3"), Sl = e({ name: "Decoration3", props: ul(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { color: n2 } = e2, i2 = Ho(kl, n2);
    return g(xl, { ref: o2 }, { default: () => [g("svg", { width: 300, height: 35, style: { transform: `scale(${t3 / 300},${a3 / 35})` } }, [wl.map(([e3, t4], o3) => {
      const a4 = e3 - 3.5, l3 = t4 - 3.5;
      return Math.random() > 0.6 ? g("rect", { key: o3, x: a4, y: l3, width: 7, height: 7, fill: i2[0] }, [Math.random() > 0.6 && g("animate", { attributeName: "fill", values: i2.join(";"), dur: `${Math.random() + 1}s`, begin: 2 * Math.random(), repeatCount: "indefinite" }, null)]) : null;
    })])] });
  };
} }), _l = ["width", "height"], $l = ["stroke", "points"], Ll = ["stroke", "points"], Dl = e({ name: "Decoration4", __name: "index", props: { ...ul(), ...cl(), ...dl(3) }, setup(e2) {
  const t2 = ["#2e6099", "#7ce7fd"], l2 = o("decoration4Ref"), n2 = a(() => {
    var _a2;
    return (_a2 = l2.value) == null ? void 0 : _a2.clientWidth;
  }), i2 = a(() => {
    var _a2;
    return (_a2 = l2.value) == null ? void 0 : _a2.clientHeight;
  }), d2 = a(() => function(e3, t3 = []) {
    return ze(e3, t3);
  }(t2, e2.color));
  return (e3, t3) => (s(), r("div", { class: "dv-decoration-4", ref_key: "decoration4Ref", ref: l2 }, [p("div", { class: c("container " + (e3.reverse ? "reverse" : "normal")), style: u(e3.reverse ? `width:${n2.value}px;height:5px;animation-duration:${e3.duration}s` : `width:5px;height:${i2.value}px;animation-duration:${e3.duration}s`) }, [(s(), r("svg", { width: e3.reverse ? n2.value : 5, height: e3.reverse ? 5 : i2.value }, [p("polyline", { stroke: d2.value[0], points: e3.reverse ? `0, 2.5 ${n2.value}, 2.5` : `2.5, 0 2.5, ${i2.value}` }, null, 8, $l), p("polyline", { class: "bold-line", stroke: d2.value[1], "stroke-width": "3", "stroke-dasharray": "20, 80", "stroke-dashoffset": "-30", points: e3.reverse ? `0, 2.5 ${n2.value}, 2.5` : `2.5, 0 2.5, ${i2.value}` }, null, 8, Ll)], 8, _l))], 6)], 512));
} }), Il = eo(Dl, [["__scopeId", "data-v-97e7e3ce"]]), Tl = ["#2e6099", "#7ce7fd"];
function Nl(e2) {
  return Array.from({ length: e2.length - 1 }).fill(0).map((t2, o2) => ((e3, t3) => {
    const o3 = Math.abs(e3[0] - t3[0]), a2 = Math.abs(e3[1] - t3[1]);
    return Math.hypot(o3, a2);
  })(e2[o2], e2[o2 + 1]));
}
const Bl = Go.div`
  width: 100%;
  height: 100%;
`("decoration-5"), Rl = e({ name: "Decoration5", props: { ...ul(), ...dl(1.2) }, setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { color: n2, duration: i2 } = e2, r2 = Ho(Tl, n2), { line1Sum: s2, line2Sum: u2, line1Point: c2, line2Point: d2 } = function(e3, t4) {
      const o3 = [[0, 0.2 * t4], [0.18 * e3, 0.2 * t4], [0.2 * e3, 0.4 * t4], [0.25 * e3, 0.4 * t4], [0.27 * e3, 0.6 * t4], [0.72 * e3, 0.6 * t4], [0.75 * e3, 0.4 * t4], [0.8 * e3, 0.4 * t4], [0.82 * e3, 0.2 * t4], [e3, 0.2 * t4]], a4 = [[0.3 * e3, 0.8 * t4], [0.7 * e3, 0.8 * t4]];
      return { line1Sum: Fe(Nl(o3)), line2Sum: Fe(Nl(a4)), line1Point: o3.map((e4) => e4.join(",")).join(" "), line2Point: a4.map((e4) => e4.join(",")).join(" ") };
    }(t3, a3);
    return g(Bl, { ref: o2 }, { default: () => [g("svg", { width: t3, height: a3 }, [g("polyline", { fill: "transparent", stroke: r2[0], "stroke-width": "3", points: c2 }, [g("animate", { attributeName: "stroke-dasharray", attributeType: "XML", from: `0, ${s2 / 2}, 0, ${s2 / 2}`, to: `0, 0, ${s2}, 0`, dur: `${i2}s`, begin: "0s", calcMode: "spline", keyTimes: "0;1", keySplines: "0.4,1,0.49,0.98", repeatCount: "indefinite" }, null)]), g("polyline", { fill: "transparent", stroke: r2[1], "stroke-width": "2", points: d2 }, [g("animate", { attributeName: "stroke-dasharray", attributeType: "XML", from: `0, ${u2 / 2}, 0, ${u2 / 2}`, to: `0, 0, ${u2}, 0`, dur: `${i2}s`, begin: "0s", calcMode: "spline", keyTimes: "0;1", keySplines: ".4,1,.49,.98", repeatCount: "indefinite" }, null)])])] });
  };
} }), ql = ["#7ce7fd", "#7ce7fd"], Al = Go.div`
  width: 100%;
  height: 100%;

  .svg-origin {
    transform-origin: left top;
  }
`("decoration-6");
const { points: Ol, heights: jl, minHeights: zl, randoms: El } = function({ width: e2, height: t2, rowPoints: o2, rowCount: a2 }) {
  const l2 = e2 / (o2 + 1), n2 = t2 / (a2 + 1), i2 = Array.from({ length: a2 }).fill(0).flatMap((e3, t3) => Array.from({ length: o2 }).fill(0).map((e4, o3) => [l2 * (o3 + 1), n2 * (t3 + 1)])), r2 = Array.from({ length: a2 * o2 }).fill(0).map(() => Math.random() > 0.8 ? Pe(0.7 * t2, t2) : Pe(0.2 * t2, 0.5 * t2)), s2 = Array.from({ length: a2 * o2 }).fill(0).map((e3, t3) => r2[t3] * Math.random()), u2 = Array.from({ length: a2 * o2 }).fill(0).map(() => Math.random() + 1.5);
  return { points: i2, heights: r2, minHeights: s2, randoms: u2 };
}({ width: 300, height: 35, rowPoints: 40, rowCount: 1 }), Fl = e({ name: "Decoration6", props: ul(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { color: n2 } = e2, i2 = Ho(ql, n2), r2 = { transform: `scale(${t3 / 300},${a3 / 35})` };
    return g(Al, { ref: o2 }, { default: () => [g("svg", { class: "svg-origin", width: t3, height: a3, style: r2 }, [Ol.map(([e3, t4], o3) => g("rect", { key: `rect${o3}`, fill: i2[Math.random() > 0.5 ? 0 : 1], x: e3 - 3.5, y: t4 - jl[o3], width: 7, height: jl[o3] }, [g("animate", { attributeName: "y", values: `${t4 - zl[o3] / 2};${t4 - jl[o3] / 2};${t4 - zl[o3] / 2}`, dur: El[o3], keyTimes: "0;0.5;1", calcMode: "spline", keySplines: "0.42,0,0.58,1;0.42,0,0.58,1", begin: "0s", repeatCount: "indefinite" }, null), g("animate", { attributeName: "height", values: `${zl[o3]};${jl[o3]};${zl[o3]}`, dur: El[o3], keyTimes: "0;0.5;1", calcMode: "spline", keySplines: "0.42,0,0.58,1;0.42,0,0.58,1", begin: "0s", repeatCount: "indefinite" }, null)]))])] });
  };
} }), Pl = Go.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-7"), Hl = ["#2e6099", "#7ce7fd"], Ql = e({ name: "Decoration7", props: ul(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { color: o3 } = e2, l3 = Ho(Hl, o3);
    return g(Pl, { ref: a2 }, { default: () => {
      var _a2;
      return [g("svg", { width: "21px", height: "20px" }, [g("polyline", { "stroke-width": "4", fill: "transparent", stroke: l3[0], points: "10, 0 19, 10 10, 20" }, null), g("polyline", { "stroke-width": "2", fill: "transparent", stroke: l3[1], points: "2, 0 11, 10 2, 20" }, null)]), (_a2 = t2.default) == null ? void 0 : _a2.call(t2), g("svg", { width: "21px", height: "20px" }, [g("polyline", { "stroke-width": "4", fill: "transparent", stroke: l3[0], points: "11, 0 2, 10 11, 20" }, null), g("polyline", { "stroke-width": "2", fill: "transparent", stroke: l3[1], points: "19, 0 10, 10 19, 20" }, null)])];
    } });
  };
} }), Gl = ["#2e6099", "#7ce7fd"];
const Ul = Go.div`
  display: flex;
  width: 100%;
  height: 100%;
`("decoration-8"), Vl = e({ name: "Decoration8", props: { ...ul(), ...cl() }, setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { color: t3, reverse: a3 } = e2, { width: n2, height: i2 } = l2, r2 = (e3) => a3 ? n2 - e3 : e3, s2 = Ho(Gl, t3);
    return g(Ul, { ref: o2 }, { default: () => [g("svg", { width: n2, height: i2 }, [g("polyline", { stroke: s2[0], "stroke-width": "2", fill: "transparent", points: `${r2(0)}, 0 ${r2(30)}, ${i2 / 2}` }, null), g("polyline", { stroke: s2[0], "stroke-width": "2", fill: "transparent", points: `${r2(20)}, 0 ${r2(50)}, ${i2 / 2} ${r2(n2)}, ${i2 / 2}` }, null), g("polyline", { stroke: s2[1], fill: "transparent", "stroke-width": "3", points: `${r2(0)}, ${i2 - 3}, ${r2(200)}, ${i2 - 3}` }, null)])] });
  };
} });
const Wl = ["#2e6099", "#7ce7fd"], Yl = Go.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg.svg-origin {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: left top;
  }
`("decoration-9"), Zl = e({ name: "Decoration9", props: { ...ul(), ...dl(3) }, setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  o2({ refreshLayoutSize: l2 });
  const i2 = `decoration-9-polygon-${ma().id}`;
  return () => {
    const { width: o3, height: l3 } = n2, { color: r2, duration: s2 } = e2, u2 = Ho(Wl, r2), c2 = { transform: `scale(${o3 / 100},${l3 / 100})` };
    return g(Yl, { ref: a2 }, { default: () => {
      var _a2;
      return [g("svg", { class: "svg-origin", width: 100, height: 100, style: c2 }, [g("defs", null, [g("polygon", { id: i2, points: "15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5" }, null)]), g("circle", { cx: "50", cy: "50", r: "45", fill: "transparent", stroke: u2[1], "stroke-width": "10", "stroke-dasharray": "80, 100, 30, 100" }, [g("animateTransform", { attributeName: "transform", type: "rotate", values: "0 50 50;360 50 50", dur: `${s2}s`, repeatCount: "indefinite" }, null)]), g("circle", { cx: "50", cy: "50", r: "45", fill: "transparent", stroke: u2[0], "stroke-width": "6", "stroke-dasharray": "50, 66, 100, 66" }, [g("animateTransform", { attributeName: "transform", type: "rotate", values: "0 50 50;-360 50 50", dur: `${s2}s`, repeatCount: "indefinite" }, null)]), g("circle", { cx: "50", cy: "50", r: "38", fill: "transparent", stroke: Ue(u2[1] || Wl[1], 30), "stroke-width": "1", "stroke-dasharray": "5, 1" }, null), Array.from({ length: 20 }).fill(0).map((e3, t3) => g("use", { key: t3, "xlink:href": `#${i2}`, stroke: u2[1], fill: Math.random() > 0.4 ? "transparent" : u2[0] }, [g("animateTransform", { attributeName: "transform", type: "rotate", values: "0 50 50;360 50 50", dur: `${s2}s`, begin: t3 * s2 / 20 + "s", repeatCount: "indefinite" }, null)])), g("circle", { cx: "50", cy: "50", r: "26", fill: "transparent", stroke: Ue(u2[1] || Wl[1], 30), "stroke-width": "1", "stroke-dasharray": "5, 1" }, null)]), (_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } });
  };
} }), Kl = Go.div`
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-10"), Xl = ["#2e6099", "#7ce7fd"], Jl = e({ name: "Decoration10", props: ul(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  t2({ refreshLayoutSize: a2 });
  const n2 = ma(), i2 = `d10ani${n2.id}1`, r2 = `d10ani${n2.id}2`, s2 = `d10ani${n2.id}3`, u2 = `d10ani${n2.id}4`, c2 = `d10ani${n2.id}5`, d2 = `d10ani${n2.id}6`, p2 = `d10ani${n2.id}7`;
  return () => {
    const { width: t3, height: a3 } = l2, { color: n3 } = e2, f2 = Ho(Xl, n3);
    return g(Kl, { ref: o2 }, { default: () => [g("svg", { width: t3, height: a3 }, [g("polyline", { stroke: f2[1], "stroke-width": "2", points: `0, ${a3 / 2} ${t3}, ${a3 / 2}` }, null), g("polyline", { stroke: f2[0], "stroke-width": "2", points: `5, ${a3 / 2} ${0.2 * t3 - 3}, ${a3 / 2}`, "stroke-dasharray": "0, " + 0.2 * t3, fill: "freeze" }, [g("animate", { id: r2, attributeName: "stroke-dasharray", values: `0, ${0.2 * t3};${0.2 * t3}, 0;`, dur: "3s", begin: `${i2}.end`, fill: "freeze" }, null), g("animate", { attributeName: "stroke-dasharray", values: `${0.2 * t3}, 0;0, ${0.2 * t3}`, dur: "0.01s", begin: `${p2}.end`, fill: "freeze" }, null)]), g("polyline", { stroke: f2[0], "stroke-width": "2", points: `${0.2 * t3 + 3}, ${a3 / 2} ${0.8 * t3 - 3}, ${a3 / 2}`, "stroke-dasharray": "0, " + 0.6 * t3 }, [g("animate", { id: u2, attributeName: "stroke-dasharray", values: `0, ${0.6 * t3};${0.6 * t3}, 0`, dur: "3s", begin: `${s2}.end + 1s`, fill: "freeze" }, null), g("animate", { attributeName: "stroke-dasharray", values: `${0.6 * t3}, 0;0, ${0.6 * t3}`, dur: "0.01s", begin: `${p2}.end`, fill: "freeze" }, null)]), g("polyline", { stroke: f2[0], "stroke-width": "2", points: `${0.8 * t3 + 3}, ${a3 / 2} ${t3 - 5}, ${a3 / 2}`, "stroke-dasharray": "0, " + 0.2 * t3 }, [g("animate", { id: d2, attributeName: "stroke-dasharray", values: `0, ${0.2 * t3};${0.2 * t3}, 0`, dur: "3s", begin: `${c2}.end + 1s`, fill: "freeze" }, null), g("animate", { attributeName: "stroke-dasharray", values: `${0.2 * t3}, 0;0, ${0.3 * t3}`, dur: "0.01s", begin: `${p2}.end`, fill: "freeze" }, null)]), g("circle", { cx: "2", cy: a3 / 2, r: "2", fill: f2[1] }, [g("animate", { id: i2, attributeName: "fill", values: `${f2[1]};${f2[0]}`, begin: `0s;${p2}.end`, dur: "0.3s", fill: "freeze" }, null)]), g("circle", { cx: 0.2 * t3, cy: a3 / 2, r: "2", fill: f2[1] }, [g("animate", { id: s2, attributeName: "fill", values: `${f2[1]};${f2[0]}`, begin: `${r2}.end`, dur: "0.3s", fill: "freeze" }, null), g("animate", { attributeName: "fill", values: `${f2[1]};${f2[1]}`, dur: "0.01s", begin: `${p2}.end`, fill: "freeze" }, null)]), g("circle", { cx: 0.8 * t3, cy: a3 / 2, r: "2", fill: f2[1] }, [g("animate", { id: c2, attributeName: "fill", values: `${f2[1]};${f2[0]}`, begin: `${u2}.end`, dur: "0.3s", fill: "freeze" }, null), g("animate", { attributeName: "fill", values: `${f2[1]};${f2[1]}`, dur: "0.01s", begin: `${p2}.end`, fill: "freeze" }, null)]), g("circle", { cx: t3 - 2, cy: a3 / 2, r: "2", fill: f2[1] }, [g("animate", { id: p2, attributeName: "fill", values: `${f2[1]};${f2[0]}`, begin: `${d2}.end`, dur: "0.3s", fill: "freeze" }, null), g("animate", { attributeName: "fill", values: `${f2[1]};${f2[1]}`, dur: "0.01s", begin: `${p2}.end`, fill: "freeze" }, null)])])] });
  };
} }), en = Go.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-11"), tn = Go.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"), on = ["#2e6099", "#7ce7fd"], an = e({ name: "Decoration11", props: ul(), setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  return o2({ refreshLayoutSize: l2 }), () => {
    const { width: o3, height: l3 } = n2, { color: i2 } = e2, r2 = Ho(on, i2);
    return g(en, { ref: a2 }, { default: () => [g("svg", { width: o3, height: l3 }, [g("polygon", { fill: Ue(r2[1] || on[1], 10), stroke: r2[1], points: "20 10, 25 4, 55 4 60 10" }, null), g("polygon", { fill: Ue(r2[1] || on[1], 10), stroke: r2[1], points: `20 ${l3 - 10}, 25 ${l3 - 4}, 55 ${l3 - 4} 60 ${l3 - 10}` }, null), g("polygon", { fill: Ue(r2[1] || on[1], 10), stroke: r2[1], points: `${o3 - 20} 10, ${o3 - 25} 4, ${o3 - 55} 4 ${o3 - 60} 10` }, null), g("polygon", { fill: Ue(r2[1] || on[1], 10), stroke: r2[1], points: `${o3 - 20} ${l3 - 10}, ${o3 - 25} ${l3 - 4}, ${o3 - 55} ${l3 - 4} ${o3 - 60} ${l3 - 10}` }, null), g("polygon", { fill: Ue(r2[0] || on[0], 20), stroke: r2[0], points: `
        20 10, 5 ${l3 / 2} 20 ${l3 - 10}
        ${o3 - 20} ${l3 - 10} ${o3 - 5} ${l3 / 2} ${o3 - 20} 10
      ` }, null), g("polyline", { fill: "transparent", stroke: Ue(r2[0] || on[0], 70), points: `25 18, 15 ${l3 / 2} 25 ${l3 - 18}` }, null), g("polyline", { fill: "transparent", stroke: Ue(r2[0] || on[0], 70), points: `${o3 - 25} 18, ${o3 - 15} ${l3 / 2} ${o3 - 25} ${l3 - 18}` }, null)]), g(tn, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), ln = Go.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-12"), nn = Go.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"), rn = ["#2e6099", "#7ce7fd"], sn = Math.PI / 3;
const un = (e2, t2, o2, a2) => [e2 + Math.cos(a2) * o2, t2 + Math.sin(a2) * o2], cn = e({ name: "Decoration12", props: { ...ul(), scanDuration: { type: Number, default: 3 }, haloDuration: { type: Number, default: 2 } }, setup(e2, { slots: t2, expose: o2 }) {
  const { autoBindRef: a2, refreshLayoutSize: l2, domSize: n2 } = Fo();
  o2({ refreshLayoutSize: l2 });
  const i2 = ma();
  return () => {
    const { width: o3, height: l3 } = n2, r2 = o3 / 2, s2 = l3 / 2, { color: u2, scanDuration: c2, haloDuration: d2 } = e2, p2 = `decoration-12-g-${i2.id}`, f2 = `decoration-12-gradient-${i2.id}`, h2 = Ho(rn, u2), m2 = ((e3, t3) => {
      const o4 = 100 / (t3 - 1);
      return Array.from({ length: t3 }).fill(e3).map((t4, a3) => Ue(e3, 100 - a3 * o4));
    })(h2[0], 30), y2 = (({ x: e3, y: t3, width: o4, segment: a3, sectorAngle: l4 }) => {
      const n3 = -Math.PI / 2, i3 = l4 / a3, r3 = o4 / 4;
      let s3 = un(e3, t3, r3, n3);
      return Array.from({ length: a3 }).fill("").map((o5, a4) => {
        const l5 = un(e3, t3, r3, n3 - (a4 + 1) * i3).map((e4) => e4.toFixed(5)), u3 = `M${s3.join(",")} A${r3}, ${r3} 0 0 0 ${l5.join(",")}`;
        return s3 = l5, u3;
      });
    })({ x: r2, y: s2, width: o3, segment: 30, sectorAngle: sn }), v2 = (({ ringNum: e3, width: t3, ringWidth: o4 }) => {
      const a3 = (t3 / 2 - o4 / 2) / e3;
      return Array.from({ length: e3 }).fill(0).map((e4, t4) => a3 * (t4 + 1));
    })({ ringNum: 3, ringWidth: 1, width: o3 }), C2 = (({ x: e3, y: t3, width: o4 }) => {
      const a3 = Math.PI / 6, l4 = o4 / 2;
      return Array.from({ length: 6 }).fill("").map((o5, n3) => {
        const i3 = a3 * (n3 + 1), r3 = i3 + Math.PI, s3 = un(e3, t3, l4, i3), u3 = un(e3, t3, l4, r3);
        return `${s3.join(",")} ${u3.join(",")}`;
      });
    })({ x: r2, y: s2, width: o3 }), b2 = (({ x: e3, y: t3, width: o4 }) => {
      const a3 = Math.PI / 6, l4 = o4 / 2 - 1;
      return Array.from({ length: 4 }).fill("").map((o5, n3) => {
        const i3 = a3 * (3 * n3 + 1), r3 = i3 + a3, s3 = un(e3, t3, l4, i3), u3 = un(e3, t3, l4, r3);
        return `M${s3.join(",")} A${e3}, ${t3} 0 0 1 ${u3.join(",")}`;
      });
    })({ x: r2, y: s2, width: o3 });
    return g(ln, { ref: a2 }, { default: () => [g("svg", { width: o3, height: l3 }, [g("defs", null, [g("g", { id: p2 }, [y2.map((e3, t3) => g("path", { stroke: m2[t3], "stroke-width": o3 / 2, fill: "transparent", key: e3, d: e3 }, null))]), g("radialGradient", { id: f2, cx: "50%", cy: "50%", r: "50%" }, [g("stop", { offset: "0%", "stop-color": "transparent", "stop-opacity": "1" }, null), g("stop", { offset: "100%", "stop-color": Ue(h2[1] || rn[1], 30), "stop-opacity": "1" }, null)])]), v2.map((e3) => g("circle", { r: e3, cx: r2, cy: s2, stroke: h2[1], "stroke-width": "0.5", fill: "transparent" }, null)), g("circle", { r: "1", cx: r2, cy: s2, stroke: "transparent", fill: `url(#${f2})` }, [g("animate", { attributeName: "r", values: "1;" + o3 / 2, dur: `${d2}s`, repeatCount: "indefinite" }, null), g("animate", { attributeName: "opacity", values: "1;0", dur: `${d2}s`, repeatCount: "indefinite" }, null)]), g("circle", { r: "2", cx: r2, cy: s2, fill: h2[1] }, null), g("g", null, [C2.map((e3) => g("polyline", { key: e3, points: e3, stroke: h2[1], "stroke-width": "0.5", opacity: "0.5" }, null))]), b2.map((e3) => g("path", { key: e3, d: e3, stroke: h2[1], "stroke-width": "2", fill: "transparent" }, null)), g("use", { "xlink:href": `#${p2}` }, [g("animateTransform", { attributeName: "transform", type: "rotate", values: `0, ${r2} ${s2};360, ${r2} ${s2}`, dur: `${c2}s`, repeatCount: "indefinite" }, null)])]), g(nn, null, { default: () => {
      var _a2;
      return [(_a2 = t2.default) == null ? void 0 : _a2.call(t2)];
    } })] });
  };
} }), dn = ["#0042A2", "#0042A2"], pn = Go.svg`
  position: absolute;
  top: 0;
  left: 4px;
  width: 100%;
  height: 100%;
`("header-svg-container"), fn = e({ name: "Header1", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(dn, i2), s2 = Ve(), u2 = Ve(), c2 = Ve(), d2 = Ve(), p2 = Ve(), f2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("header-1"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(pn, { width: t3, height: a3, viewBox: "0 0 1920 76", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("导航1")]), g("defs", null, [g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "90.1729911%", id: s2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0.282219733", offset: "0%" }, null), g("stop", { "stop-color": r2[0], offset: "32.4599473%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.183433266", offset: "100%" }, null)]), g("polygon", { id: "path-3", points: "12.423552 3.0356786e-14 706.941248 6.0905055e-14 719.893999 20.0956358 675.962761 75 48.3985693 75 0 20.3481229" }, null), g("linearGradient", { x1: "50%", y1: "0.677614796%", x2: "50%", y2: "100%", id: u2 }, [g("stop", { "stop-color": r2[1], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.0116641171", offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "0.677614796%", x2: "50%", y2: "100%", id: c2 }, [g("stop", { "stop-color": r2[1], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.0116641171", offset: "100%" }, null)]), g("linearGradient", { x1: "99.7433963%", y1: "49.7433963%", x2: "0.256603748%", y2: "49.7433963%", id: d2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "54.4973093%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "138.999809%", y1: "49.9523588%", x2: "0%", y2: "50.0476412%", id: p2 }, [g("stop", { "stop-color": r2[1], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "138.999809%", y1: "49.9515511%", x2: "0%", y2: "50.0484489%", id: f2 }, [g("stop", { "stop-color": r2[1], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "导航1", transform: "translate(0.000000, -1411.000000)" }, [g("g", { transform: "translate(0.000000, 1411.000000)" }, [g("g", { id: "矩形", opacity: "0.699999988", transform: "translate(600.000000, 0.000000)" }, [g("mask", { id: "mask-4", fill: "white" }, [g("use", { "xlink:href": "#path-3" }, null)]), g("use", { id: "蒙版", fill: `url(#${s2})`, opacity: "0.74046689", "xlink:href": "#path-3" }, null)]), g("polygon", { id: "Rectangle-18", fill: `url(#${u2})`, opacity: "0.5", points: "1305.12397 0 1920 0 1920 20.0704225 1318.40447 20.0704225" }, null), g("polygon", { id: "Rectangle-18", fill: `url(#${c2})`, opacity: "0.5", transform: "translate(306.446281, 10.035211) scale(-1, 1) translate(-306.446281, -10.035211) ", points: "0 0 612.892562 0 612.892562 20.0704225 12.4704007 20.0704225" }, null), g("polyline", { id: "Rectangle-34", stroke: r2[1], points: "649.586777 68.6619718 607.933884 19.2333343 620.019616 3.16901408" }, null), g("rect", { id: "Rectangle-23", stroke: r2[1], x: "649.095041", y: "68.1056338", width: "621.809917", height: "1" }, null), g("rect", { id: "Rectangle-23备份", stroke: `url(#${d2})`, x: "649.095041", y: "75.1056338", width: "621.809917", height: "1" }, null), g("polyline", { id: "Rectangle-34", stroke: r2[1], transform: "translate(1292.330579, 35.746479) scale(-1, 1) translate(-1292.330579, -35.746479) ", points: "1312.66116 68.4929577 1272 19.0573969 1283.83528 3" }, null), g("polyline", { id: "Path-16", stroke: `url(#${p2})`, "stroke-width": "2", opacity: "0.800000012", transform: "translate(1573.830579, 34.000000) scale(-1, -1) translate(-1573.830579, -34.000000) ", points: "1833 26 1819.93141 42 1314.66116 42" }, null), g("polyline", { id: "Path-16备份-2", stroke: `url(#${f2})`, "stroke-width": "2", opacity: "0.800000012", transform: "translate(1574.000000, 9.000000) scale(-1, 1) translate(-1574.000000, -9.000000) ", points: "1831 1 1820.27025 17 1317 17" }, null), g("polyline", { id: "Path-16备份", stroke: `url(#${f2})`, "stroke-width": "2", opacity: "0.800000012", points: "602 1 591.270255 17 88 17" }, null), g("polyline", { id: "Path-16备份", stroke: `url(#${f2})`, "stroke-width": "2", opacity: "0.800000012", transform: "translate(349.000000, 34.000000) scale(1, -1) translate(-349.000000, -34.000000) ", points: "606 26 591.270255 42 92 42" }, null)])])])] })] });
  };
} }), hn = ["#0077CF", "#0042A2"], gn = Go.svg`
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  height: 100%;
`("header-svg-container"), mn = e({ name: "Header2", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(hn, i2), s2 = Ve(), u2 = Ve(), c2 = Ve(), d2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("header-2"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(gn, { width: t3, height: a3, viewBox: "0 0 1920 80", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("导航2")]), g("defs", null, [g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "100%", id: s2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "72.202846%", id: u2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "72.202846%", id: c2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "72.202846%", id: d2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-头部素材", transform: "translate(1.000000, -1085.000000)" }, [g("g", { id: "导航", transform: "translate(-1.000000, 1085.000000)" }, [g("path", { d: "M1918.18628,0.5 L1884.46176,42.3799336 L1410.16051,42.3799336 L1397.00421,53.2643777 L1128.92285,53.3791297 L1114.87529,68.2703465 L800.006564,68.2703338 L785.959019,53.3791297 L518.196384,53.3791297 L504.721197,42.3799336 L30.4428759,42.3799336 L1.1171313,1.29046247 L956.825895,0.5 L1918.18628,0.5 Z", id: "Combined-Shape", stroke: r2[0], "fill-opacity": "0.365517437", fill: r2[0] }, null), g("g", { transform: "translate(561.902273, 8.663981)", id: "Rectangle-2" }, [g("polygon", { fill: `url(#${s2})`, points: "113.383852 8.44738114 677.292919 8.44738114 691.030046 26.3541589 662.221318 61.0088638 136.944368 61.0088638 102.698076 26.1797894" }, null), g("polygon", { fill: `url(#${u2})`, opacity: "0.200000003", points: "18.8136922 0 781.1445 0 798.161907 25.4739865 760.048858 70.3948429 42.047344 70.3948429 0.290794433 28.7856581" }, null), g("polygon", { fill: `url(#${c2})`, opacity: "0.400000006", points: "46.638359 1.87719581 748.784949 1.87719581 767.36426 26.8955516 732.956067 68.0483481 67.8512948 68.0483481 27.40029 27.1451689" }, null), g("polygon", { fill: `url(#${d2})`, opacity: "0.400000006", points: "75.7564672 5.16228848 715.672851 5.16228848 732.141766 27.7558158 700.901937 65.2325544 98.9452132 65.2325544 62.7469036 28.5185552" }, null)]), g("g", { id: "Group-17", transform: "translate(40.637575, 49.817889)" }, [g("g", { id: "Group-16", transform: "translate(1083.800132, 0.000000)" }, [g("path", { d: "M22.5497346,8.64414182 L29.0531687,14.4020467 L25.1954999,14.4020467 L18.6920658,8.64414182 L22.5497346,8.64414182 Z M14.0657744,8.64414182 L20.5692085,14.4020467 L16.7115397,14.4020467 L10.2081057,8.64414182 L14.0657744,8.64414182 Z M5.58181428,8.64414182 L12.0852483,14.4020467 L8.22757956,14.4020467 L1.7241455,8.64414182 L5.58181428,8.64414182 Z", id: "Combined-Shape", stroke: r2[0], transform: "translate(15.388657, 11.523094) scale(-1, 1) translate(-15.388657, -11.523094) " }, null), g("polyline", { id: "Path-10", stroke: r2[1], points: "26.2077068 11.5230943 256.98704 11.5230943 270.569967 0 754.772244 0" }, null)]), g("g", { id: "Group-16", transform: "translate(374.103918, 7.529412) scale(-1, 1) translate(-374.103918, -7.529412) translate(0.043973, 0.000000)" }, [g("path", { d: "M20.61633,8.64414182 L26.3217289,13.5276875 L23.6411661,14.4020467 L17.9357672,9.51850103 L20.61633,8.64414182 Z M12.1323698,8.64414182 L17.8377687,13.5276875 L15.1572059,14.4020467 L9.45180703,9.51850103 L12.1323698,8.64414182 Z M3.64840965,8.64414182 L9.35380856,13.5276875 L6.67324577,14.4020467 L0.967846865,9.51850103 L3.64840965,8.64414182 Z", id: "Combined-Shape", stroke: r2[0], transform: "translate(13.644788, 11.523094) scale(-1, 1) translate(-13.644788, -11.523094) " }, null), g("polyline", { id: "Path-10", stroke: r2[1], points: "24.4638375 11.5230943 255.243171 11.5230943 268.826098 0 748.011391 0" }, null)])])])])])] })] });
  };
} }), yn = ["#0077CF", "#0042A2"], vn = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("header-svg-container"), Cn = e({ name: "Header3", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(yn, i2);
    return g(Uo, { class: Go.getClassNameForBind("header-3"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(vn, { width: t3, height: a3, viewBox: "0 0 1920 75", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("导航3")]), g("defs", null, [g("polygon", { id: "path-1", points: "0 0 1920 0 1920 59.3320313 1197.34432 59.3320313 1186.95023 74.1189134 738.175482 74.1189134 728.75456 60.1189134 0 60.1189134" }, null)]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-头部素材", transform: "translate(0.000000, -427.000000)" }, [g("g", { id: "导航3", transform: "translate(0.000000, 427.000000)" }, [g("g", { id: "Group" }, [g("mask", { id: "mask-h32", fill: "white" }, [g("use", { "xlink:href": "#path-1" }, null)]), g("g", { opacity: "0.54904655", mask: "url(#mask-h32)", fill: r2[1], "fill-rule": "nonzero", id: "Shape" }, [g("g", { transform: "translate(419.099368, 30.618913) rotate(90.000000) translate(-419.099368, -30.618913) translate(375.576699, -389.381087)" }, [g("polygon", { "fill-opacity": "0.1", points: "5.45666057 38.3876986 0.8193914 30.360123 5.45666057 22.3347002 14.729045 22.3347002 19.3663142 30.360123 14.729045 38.3876986" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 19.1486417 0.8193914 11.1232189 5.45666057 3.09564326 14.729045 3.09564326 19.3663142 11.1232189 14.729045 19.1486417" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 57.6246028 0.8193914 49.5991799 5.45666057 41.5716043 14.729045 41.5716043 19.3663142 49.5991799 14.729045 57.6246028" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 76.8636597 0.8193914 68.8360841 5.45666057 60.8106612 14.729045 60.8106612 19.3663142 68.8360841 14.729045 76.8636597" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 96.1005638 0.8193914 88.075141 5.45666057 80.0475654 14.729045 80.0475654 19.3663142 88.075141 14.729045 96.1005638" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 115.337468 0.8193914 107.312045 5.45666057 99.2844695 14.729045 99.2844695 19.3663142 107.312045 14.729045 115.337468" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 134.576525 0.8193914 126.551102 5.45666057 118.523526 14.729045 118.523526 19.3663142 126.551102 14.729045 134.576525" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 153.815582 0.8193914 145.788006 5.45666057 137.762583 14.729045 137.762583 19.3663142 145.788006 14.729045 153.815582" }, null), g("polygon", { "fill-opacity": "0.2", points: "5.45666057 173.052486 0.8193914 165.027063 5.45666057 156.999487 14.729045 156.999487 19.3663142 165.027063 14.729045 173.052486" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 192.291543 0.8193914 184.263967 5.45666057 176.236392 14.729045 176.236392 19.3663142 184.263967 14.729045 192.291543" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 211.528447 0.8193914 203.503024 5.45666057 195.475448 14.729045 195.475448 19.3663142 203.503024 14.729045 211.528447" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 230.765351 0.8193914 222.739928 5.45666057 214.712353 14.729045 214.712353 19.3663142 222.739928 14.729045 230.765351" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 250.004408 0.8193914 241.978985 5.45666057 233.95141 14.729045 233.95141 19.3663142 241.978985 14.729045 250.004408" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 269.243465 0.8193914 261.215889 5.45666057 253.190466 14.729045 253.190466 19.3663142 261.215889 14.729045 269.243465" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 288.480369 0.8193914 280.454946 5.45666057 272.427371 14.729045 272.427371 19.3663142 280.454946 14.729045 288.480369" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 307.717273 0.8193914 299.69185 5.45666057 291.664275 14.729045 291.664275 19.3663142 299.69185 14.729045 307.717273" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 326.95633 0.8193914 318.930907 5.45666057 310.903332 14.729045 310.903332 19.3663142 318.930907 14.729045 326.95633" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 346.193234 0.8193914 338.167811 5.45666057 330.140236 14.729045 330.140236 19.3663142 338.167811 14.729045 346.193234" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 365.432291 0.8193914 357.404716 5.45666057 349.379293 14.729045 349.379293 19.3663142 357.404716 14.729045 365.432291" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 384.669195 0.8193914 376.643772 5.45666057 368.616197 14.729045 368.616197 19.3663142 376.643772 14.729045 384.669195" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 403.908252 0.8193914 395.880677 5.45666057 387.853101 14.729045 387.853101 19.3663142 395.880677 14.729045 403.908252" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 423.145156 0.8193914 415.119733 5.45666057 407.092158 14.729045 407.092158 19.3663142 415.119733 14.729045 423.145156" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 442.386366 0.8193914 434.35879 5.45666057 426.331215 14.729045 426.331215 19.3663142 434.35879 14.729045 442.386366" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 461.621117 0.8193914 453.593542 5.45666057 445.568119 14.729045 445.568119 19.3663142 453.593542 14.729045 461.621117" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 480.860174 0.8193914 472.834751 5.45666057 464.805023 14.729045 464.805023 19.3663142 472.834751 14.729045 480.860174" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 500.099231 0.8193914 492.071656 5.45666057 484.04408 14.729045 484.04408 19.3663142 492.071656 14.729045 500.099231" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 519.336135 0.8193914 511.310712 5.45666057 503.283137 14.729045 503.283137 19.3663142 511.310712 14.729045 519.336135" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 538.573039 0.8193914 530.547617 5.45666057 522.522194 14.729045 522.522194 19.3663142 530.547617 14.729045 538.573039" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 557.809944 0.8193914 549.784521 5.45666057 541.756945 14.729045 541.756945 19.3663142 549.784521 14.729045 557.809944" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 577.051153 0.8193914 569.023578 5.45666057 560.996002 14.729045 560.996002 19.3663142 569.023578 14.729045 577.051153" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 596.288057 0.8193914 588.260482 5.45666057 580.235059 14.729045 580.235059 19.3663142 588.260482 14.729045 596.288057" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 615.524962 0.8193914 607.497386 5.45666057 599.471963 14.729045 599.471963 19.3663142 607.497386 14.729045 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 634.761866 0.8193914 626.736443 5.45666057 618.708867 14.729045 618.708867 19.3663142 626.736443 14.729045 634.761866" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 654.000923 0.8193914 645.9755 5.45666057 637.945771 14.729045 637.945771 19.3663142 645.9755 14.729045 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 673.239979 0.8193914 665.214557 5.45666057 657.186981 14.729045 657.186981 19.3663142 665.214557 14.729045 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 692.476884 0.8193914 684.449308 5.45666057 676.423885 14.729045 676.423885 19.3663142 684.449308 14.729045 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 711.713788 0.8193914 703.688365 5.45666057 695.660789 14.729045 695.660789 19.3663142 703.688365 14.729045 711.713788" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 730.952845 0.8193914 722.925269 5.45666057 714.899846 14.729045 714.899846 19.3663142 722.925269 14.729045 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 750.191902 0.8193914 742.164326 5.45666057 734.13675 14.729045 734.13675 19.3663142 742.164326 14.729045 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 769.428806 0.8193914 761.40123 5.45666057 753.375807 14.729045 753.375807 19.3663142 761.40123 14.729045 769.428806" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 788.66571 0.8193914 780.640287 5.45666057 772.612711 14.729045 772.612711 19.3663142 780.640287 14.729045 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 807.904767 0.8193914 799.879344 5.45666057 791.851768 14.729045 791.851768 19.3663142 799.879344 14.729045 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 827.141671 0.8193914 819.116248 5.45666057 811.088672 14.729045 811.088672 19.3663142 819.116248 14.729045 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 830.327729 0.8193914 838.353152 1.65939836 839.806253 18.5284611 839.806253 19.3663142 838.353152 14.729045 830.327729" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 28.7175807 17.6173766 20.6921579 22.2524919 12.6645823 31.5248764 12.6645823 36.1621456 20.6921579 31.5248764 28.7175807" }, null), g("polygon", { "fill-opacity": "0.1", points: "18.4552297 0 17.6173766 1.45310097 22.2524919 9.48067658 31.5248764 9.48067658 36.1621456 1.45310097 35.3242925 0" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 47.9566376 17.6173766 39.9312148 22.2524919 31.9036392 31.5248764 31.9036392 36.1621456 39.9312148 31.5248764 47.9566376" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 67.1935418 17.6173766 59.1681189 22.2524919 51.1405433 31.5248764 51.1405433 36.1621456 59.1681189 31.5248764 67.1935418" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 86.4325987 17.6173766 78.4050231 22.2524919 70.3796002 31.5248764 70.3796002 36.1621456 78.4050231 31.5248764 86.4325987" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 105.669503 17.6173766 97.64408 22.2524919 89.6165044 31.5248764 89.6165044 36.1621456 97.64408 31.5248764 105.669503" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 124.90856 17.6173766 116.880984 22.2524919 108.853409 31.5248764 108.853409 36.1621456 116.880984 31.5248764 124.90856" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 144.145464 17.6173766 136.120041 22.2524919 128.092465 31.5248764 128.092465 36.1621456 136.120041 31.5248764 144.145464" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 163.384521 17.6173766 155.356945 22.2524919 147.331522 31.5248764 147.331522 36.1621456 155.356945 31.5248764 163.384521" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 182.621425 17.6173766 174.596002 22.2524919 166.568426 31.5248764 166.568426 36.1621456 174.596002 31.5248764 182.621425" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 201.860482 17.6173766 193.832906 22.2524919 185.805331 31.5248764 185.805331 36.1621456 193.832906 31.5248764 201.860482" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 221.097386 17.6173766 213.071963 22.2524919 205.044387 31.5248764 205.044387 36.1621456 213.071963 31.5248764 221.097386" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 240.33429 17.6173766 232.308867 22.2524919 224.281292 31.5248764 224.281292 36.1621456 232.308867 31.5248764 240.33429" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 259.573347 17.6173766 251.547924 22.2524919 243.520349 31.5248764 243.520349 36.1621456 251.547924 31.5248764 259.573347" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 278.812404 17.6173766 270.784828 22.2524919 262.759405 31.5248764 262.759405 36.1621456 270.784828 31.5248764 278.812404" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 298.049308 17.6173766 290.023885 22.2524919 281.99631 31.5248764 281.99631 36.1621456 290.023885 31.5248764 298.049308" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 317.286212 17.6173766 309.260789 22.2524919 301.233214 31.5248764 301.233214 36.1621456 309.260789 31.5248764 317.286212" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 336.525269 17.6173766 328.499846 22.2524919 320.472271 31.5248764 320.472271 36.1621456 328.499846 31.5248764 336.525269" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 355.764326 17.6173766 347.73675 22.2524919 339.711328 31.5248764 339.711328 36.1621456 347.73675 31.5248764 355.764326" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 375.00123 17.6173766 366.975807 22.2524919 358.948232 31.5248764 358.948232 36.1621456 366.975807 31.5248764 375.00123" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 394.240287 17.6173766 386.212711 22.2524919 378.185136 31.5248764 378.185136 36.1621456 386.212711 31.5248764 394.240287" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 413.477191 17.6173766 405.451768 22.2524919 397.424193 31.5248764 397.424193 36.1621456 405.451768 31.5248764 413.477191" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 432.716248 17.6173766 424.690825 22.2524919 416.661097 31.5248764 416.661097 36.1621456 424.690825 31.5248764 432.716248" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 451.950999 17.6173766 443.925577 22.2524919 435.898001 31.5248764 435.898001 36.1621456 443.925577 31.5248764 451.950999" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 471.190056 17.6173766 463.164634 22.2524919 455.134905 31.5248764 455.134905 36.1621456 463.164634 31.5248764 471.190056" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 490.429113 17.6173766 482.40369 22.2524919 474.376115 31.5248764 474.376115 36.1621456 482.40369 31.5248764 490.429113" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 509.66817 17.6173766 501.640595 22.2524919 493.613019 31.5248764 493.613019 36.1621456 501.640595 31.5248764 509.66817" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 528.905074 17.6173766 520.877499 22.2524919 512.852076 31.5248764 512.852076 36.1621456 520.877499 31.5248764 528.905074" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 548.141978 17.6173766 540.116556 22.2524919 532.08898 31.5248764 532.08898 36.1621456 540.116556 31.5248764 548.141978" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 567.381035 17.6173766 559.35346 22.2524919 551.325884 31.5248764 551.325884 36.1621456 559.35346 31.5248764 567.381035" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 586.61794 17.6173766 578.592517 22.2524919 570.564941 31.5248764 570.564941 36.1621456 578.592517 31.5248764 586.61794" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 605.854844 17.6173766 597.829421 22.2524919 589.803998 31.5248764 589.803998 36.1621456 597.829421 31.5248764 605.854844" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 625.093901 17.6173766 617.066325 22.2524919 609.038749 31.5248764 609.038749 36.1621456 617.066325 31.5248764 625.093901" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 644.330805 17.6173766 636.305382 22.2524919 628.277806 31.5248764 628.277806 36.1621456 636.305382 31.5248764 644.330805" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 663.572014 17.6173766 655.544439 22.2524919 647.516863 31.5248764 647.516863 36.1621456 655.544439 31.5248764 663.572014" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 682.806766 17.6173766 674.77919 22.2524919 666.753767 31.5248764 666.753767 36.1621456 674.77919 31.5248764 682.806766" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 702.045823 17.6173766 694.018247 22.2524919 685.990671 31.5248764 685.990671 36.1621456 694.018247 31.5248764 702.045823" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 721.282727 17.6173766 713.257304 22.2524919 705.229728 31.5248764 705.229728 36.1621456 713.257304 31.5248764 721.282727" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 740.521784 17.6173766 732.496361 22.2524919 724.468785 31.5248764 724.468785 36.1621456 732.496361 31.5248764 740.521784" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 759.758688 17.6173766 751.733265 22.2524919 743.707842 31.5248764 743.707842 36.1621456 751.733265 31.5248764 759.758688" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 778.997745 17.6173766 770.970169 22.2524919 762.944746 31.5248764 762.944746 36.1621456 770.970169 31.5248764 778.997745" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 798.236802 17.6173766 790.209226 22.2524919 782.18165 31.5248764 782.18165 36.1621456 790.209226 31.5248764 798.236802" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 817.473706 17.6173766 809.44613 22.2524919 801.418555 31.5248764 801.418555 36.1621456 809.44613 31.5248764 817.473706" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 836.71061 17.6173766 828.685187 22.2524919 820.657611 31.5248764 820.657611 36.1621456 828.685187 31.5248764 836.71061" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 38.3876986 34.413208 30.360123 39.0483233 22.3347002 48.3207078 22.3347002 52.9601308 30.360123 48.3207078 38.3876986" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 19.1486417 34.413208 11.1232189 39.0483233 3.09564326 48.3207078 3.09564326 52.9601308 11.1232189 48.3207078 19.1486417" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 57.6246028 34.413208 49.5991799 39.0483233 41.5716043 48.3207078 41.5716043 52.9601308 49.5991799 48.3207078 57.6246028" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 76.8636597 34.413208 68.8360841 39.0483233 60.8106612 48.3207078 60.8106612 52.9601308 68.8360841 48.3207078 76.8636597" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 96.1005638 34.413208 88.075141 39.0483233 80.0475654 48.3207078 80.0475654 52.9601308 88.075141 48.3207078 96.1005638" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 115.337468 34.413208 107.312045 39.0483233 99.2844695 48.3207078 99.2844695 52.9601308 107.312045 48.3207078 115.337468" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 134.576525 34.413208 126.551102 39.0483233 118.523526 48.3207078 118.523526 52.9601308 126.551102 48.3207078 134.576525" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 153.815582 34.413208 145.788006 39.0483233 137.762583 48.3207078 137.762583 52.9601308 145.788006 48.3207078 153.815582" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 173.052486 34.413208 165.027063 39.0483233 156.999487 48.3207078 156.999487 52.9601308 165.027063 48.3207078 173.052486" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 192.291543 34.413208 184.263967 39.0483233 176.236392 48.3207078 176.236392 52.9601308 184.263967 48.3207078 192.291543" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 211.528447 34.413208 203.503024 39.0483233 195.475448 48.3207078 195.475448 52.9601308 203.503024 48.3207078 211.528447" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 230.765351 34.413208 222.739928 39.0483233 214.712353 48.3207078 214.712353 52.9601308 222.739928 48.3207078 230.765351" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 250.004408 34.413208 241.978985 39.0483233 233.95141 48.3207078 233.95141 52.9601308 241.978985 48.3207078 250.004408" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 269.243465 34.413208 261.215889 39.0483233 253.190466 48.3207078 253.190466 52.9601308 261.215889 48.3207078 269.243465" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 288.480369 34.413208 280.454946 39.0483233 272.427371 48.3207078 272.427371 52.9601308 280.454946 48.3207078 288.480369" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 307.717273 34.413208 299.69185 39.0483233 291.664275 48.3207078 291.664275 52.9601308 299.69185 48.3207078 307.717273" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 326.95633 34.413208 318.930907 39.0483233 310.903332 48.3207078 310.903332 52.9601308 318.930907 48.3207078 326.95633" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 346.193234 34.413208 338.167811 39.0483233 330.140236 48.3207078 330.140236 52.9601308 338.167811 48.3207078 346.193234" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 365.432291 34.413208 357.404716 39.0483233 349.379293 48.3207078 349.379293 52.9601308 357.404716 48.3207078 365.432291" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 384.669195 34.413208 376.643772 39.0483233 368.616197 48.3207078 368.616197 52.9601308 376.643772 48.3207078 384.669195" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 403.908252 34.413208 395.880677 39.0483233 387.853101 48.3207078 387.853101 52.9601308 395.880677 48.3207078 403.908252" }, null), g("polygon", { "fill-opacity": "0.06", points: "39.0483233 423.145156 34.413208 415.119733 39.0483233 407.092158 48.3207078 407.092158 52.9601308 415.119733 48.3207078 423.145156" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 442.386366 34.413208 434.35879 39.0483233 426.331215 48.3207078 426.331215 52.9601308 434.35879 48.3207078 442.386366" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 461.621117 34.413208 453.593542 39.0483233 445.568119 48.3207078 445.568119 52.9601308 453.593542 48.3207078 461.621117" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 480.860174 34.413208 472.834751 39.0483233 464.805023 48.3207078 464.805023 52.9601308 472.834751 48.3207078 480.860174" }, null), g("polygon", { "fill-opacity": "0.06", points: "39.0483233 500.099231 34.413208 492.071656 39.0483233 484.04408 48.3207078 484.04408 52.9601308 492.071656 48.3207078 500.099231" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 519.336135 34.413208 511.310712 39.0483233 503.283137 48.3207078 503.283137 52.9601308 511.310712 48.3207078 519.336135" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 538.573039 34.413208 530.547617 39.0483233 522.522194 48.3207078 522.522194 52.9601308 530.547617 48.3207078 538.573039" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 557.809944 34.413208 549.784521 39.0483233 541.756945 48.3207078 541.756945 52.9601308 549.784521 48.3207078 557.809944" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 577.051153 34.413208 569.023578 39.0483233 560.996002 48.3207078 560.996002 52.9601308 569.023578 48.3207078 577.051153" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 596.288057 34.413208 588.260482 39.0483233 580.235059 48.3207078 580.235059 52.9601308 588.260482 48.3207078 596.288057" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 615.524962 34.413208 607.497386 39.0483233 599.471963 48.3207078 599.471963 52.9601308 607.497386 48.3207078 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 634.761866 34.413208 626.736443 39.0483233 618.708867 48.3207078 618.708867 52.9601308 626.736443 48.3207078 634.761866" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 654.000923 34.413208 645.9755 39.0483233 637.945771 48.3207078 637.945771 52.9601308 645.9755 48.3207078 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 673.239979 34.413208 665.214557 39.0483233 657.186981 48.3207078 657.186981 52.9601308 665.214557 48.3207078 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 692.476884 34.413208 684.449308 39.0483233 676.423885 48.3207078 676.423885 52.9601308 684.449308 48.3207078 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 711.713788 34.413208 703.688365 39.0483233 695.660789 48.3207078 695.660789 52.9601308 703.688365 48.3207078 711.713788" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 730.952845 34.413208 722.925269 39.0483233 714.899846 48.3207078 714.899846 52.9601308 722.925269 48.3207078 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 750.191902 34.413208 742.164326 39.0483233 734.13675 48.3207078 734.13675 52.9601308 742.164326 48.3207078 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 769.428806 34.413208 761.40123 39.0483233 753.375807 48.3207078 753.375807 52.9601308 761.40123 48.3207078 769.428806" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 788.66571 34.413208 780.640287 39.0483233 772.612711 48.3207078 772.612711 52.9601308 780.640287 48.3207078 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 807.904767 34.413208 799.879344 39.0483233 791.851768 48.3207078 791.851768 52.9601308 799.879344 48.3207078 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 827.141671 34.413208 819.116248 39.0483233 811.088672 48.3207078 811.088672 52.9601308 819.116248 48.3207078 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 830.327729 34.4110542 838.353152 35.2510611 839.806253 52.1201239 839.806253 52.9601308 838.353152 48.3207078 830.327729" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 28.7175807 51.2090394 20.6921579 55.8441547 12.6645823 65.1165392 12.6645823 69.7538083 20.6921579 65.1165392 28.7175807" }, null), g("polygon", { "fill-opacity": "0.1", points: "52.0468925 0 51.2090394 1.45310097 55.8441547 9.48067658 65.1165392 9.48067658 69.7538083 1.45310097 68.9138014 0" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 47.9566376 51.2090394 39.9312148 55.8441547 31.9036392 65.1165392 31.9036392 69.7538083 39.9312148 65.1165392 47.9566376" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 67.1935418 51.2090394 59.1681189 55.8441547 51.1405433 65.1165392 51.1405433 69.7538083 59.1681189 65.1165392 67.1935418" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 86.4325987 51.2090394 78.4050231 55.8441547 70.3796002 65.1165392 70.3796002 69.7538083 78.4050231 65.1165392 86.4325987" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 105.669503 51.2090394 97.64408 55.8441547 89.6165044 65.1165392 89.6165044 69.7538083 97.64408 65.1165392 105.669503" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 124.90856 51.2090394 116.880984 55.8441547 108.853409 65.1165392 108.853409 69.7538083 116.880984 65.1165392 124.90856" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 144.145464 51.2090394 136.120041 55.8441547 128.092465 65.1165392 128.092465 69.7538083 136.120041 65.1165392 144.145464" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 163.384521 51.2090394 155.356945 55.8441547 147.331522 65.1165392 147.331522 69.7538083 155.356945 65.1165392 163.384521" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 182.621425 51.2090394 174.596002 55.8441547 166.568426 65.1165392 166.568426 69.7538083 174.596002 65.1165392 182.621425" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 201.860482 51.2090394 193.832906 55.8441547 185.805331 65.1165392 185.805331 69.7538083 193.832906 65.1165392 201.860482" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 221.097386 51.2090394 213.071963 55.8441547 205.044387 65.1165392 205.044387 69.7538083 213.071963 65.1165392 221.097386" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 240.33429 51.2090394 232.308867 55.8441547 224.281292 65.1165392 224.281292 69.7538083 232.308867 65.1165392 240.33429" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 259.573347 51.2090394 251.547924 55.8441547 243.520349 65.1165392 243.520349 69.7538083 251.547924 65.1165392 259.573347" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 278.812404 51.2090394 270.784828 55.8441547 262.759405 65.1165392 262.759405 69.7538083 270.784828 65.1165392 278.812404" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 298.049308 51.2090394 290.023885 55.8441547 281.99631 65.1165392 281.99631 69.7538083 290.023885 65.1165392 298.049308" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 317.286212 51.2090394 309.260789 55.8441547 301.233214 65.1165392 301.233214 69.7538083 309.260789 65.1165392 317.286212" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 336.525269 51.2090394 328.499846 55.8441547 320.472271 65.1165392 320.472271 69.7538083 328.499846 65.1165392 336.525269" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 355.764326 51.2090394 347.73675 55.8441547 339.711328 65.1165392 339.711328 69.7538083 347.73675 65.1165392 355.764326" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 375.00123 51.2090394 366.975807 55.8441547 358.948232 65.1165392 358.948232 69.7538083 366.975807 65.1165392 375.00123" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 394.240287 51.2090394 386.212711 55.8441547 378.185136 65.1165392 378.185136 69.7538083 386.212711 65.1165392 394.240287" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 413.477191 51.2090394 405.451768 55.8441547 397.424193 65.1165392 397.424193 69.7538083 405.451768 65.1165392 413.477191" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 432.716248 51.2090394 424.690825 55.8441547 416.661097 65.1165392 416.661097 69.7538083 424.690825 65.1165392 432.716248" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 451.950999 51.2090394 443.925577 55.8441547 435.898001 65.1165392 435.898001 69.7538083 443.925577 65.1165392 451.950999" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 471.190056 51.2090394 463.164634 55.8441547 455.134905 65.1165392 455.134905 69.7538083 463.164634 65.1165392 471.190056" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 490.429113 51.2090394 482.40369 55.8441547 474.376115 65.1165392 474.376115 69.7538083 482.40369 65.1165392 490.429113" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 509.66817 51.2090394 501.640595 55.8441547 493.613019 65.1165392 493.613019 69.7538083 501.640595 65.1165392 509.66817" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 528.905074 51.2090394 520.877499 55.8441547 512.852076 65.1165392 512.852076 69.7538083 520.877499 65.1165392 528.905074" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 548.141978 51.2090394 540.116556 55.8441547 532.08898 65.1165392 532.08898 69.7538083 540.116556 65.1165392 548.141978" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 567.381035 51.2090394 559.35346 55.8441547 551.325884 65.1165392 551.325884 69.7538083 559.35346 65.1165392 567.381035" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 586.61794 51.2090394 578.592517 55.8441547 570.564941 65.1165392 570.564941 69.7538083 578.592517 65.1165392 586.61794" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 605.854844 51.2090394 597.829421 55.8441547 589.803998 65.1165392 589.803998 69.7538083 597.829421 65.1165392 605.854844" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 625.093901 51.2090394 617.066325 55.8441547 609.038749 65.1165392 609.038749 69.7538083 617.066325 65.1165392 625.093901" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 644.330805 51.2090394 636.305382 55.8441547 628.277806 65.1165392 628.277806 69.7538083 636.305382 65.1165392 644.330805" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 663.572014 51.2090394 655.544439 55.8441547 647.516863 65.1165392 647.516863 69.7538083 655.544439 65.1165392 663.572014" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 682.806766 51.2090394 674.77919 55.8441547 666.753767 65.1165392 666.753767 69.7538083 674.77919 65.1165392 682.806766" }, null), g("polygon", { "fill-opacity": "0.06", points: "55.8441547 702.045823 51.2090394 694.018247 55.8441547 685.990671 65.1165392 685.990671 69.7538083 694.018247 65.1165392 702.045823" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 721.282727 51.2090394 713.257304 55.8441547 705.229728 65.1165392 705.229728 69.7538083 713.257304 65.1165392 721.282727" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 740.521784 51.2090394 732.496361 55.8441547 724.468785 65.1165392 724.468785 69.7538083 732.496361 65.1165392 740.521784" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 759.758688 51.2090394 751.733265 55.8441547 743.707842 65.1165392 743.707842 69.7538083 751.733265 65.1165392 759.758688" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 778.997745 51.2090394 770.970169 55.8441547 762.944746 65.1165392 762.944746 69.7538083 770.970169 65.1165392 778.997745" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 798.236802 51.2090394 790.209226 55.8441547 782.18165 65.1165392 782.18165 69.7538083 790.209226 65.1165392 798.236802" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 817.473706 51.2090394 809.44613 55.8441547 801.418555 65.1165392 801.418555 69.7538083 809.44613 65.1165392 817.473706" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 836.71061 51.2090394 828.685187 55.8441547 820.657611 65.1165392 820.657611 69.7538083 828.685187 65.1165392 836.71061" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 38.3876986 68.0048708 30.360123 72.6399861 22.3347002 81.9123705 22.3347002 86.5496397 30.360123 81.9123705 38.3876986" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 19.1486417 68.0048708 11.1232189 72.6399861 3.09564326 81.9123705 3.09564326 86.5496397 11.1232189 81.9123705 19.1486417" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 57.6246028 68.0048708 49.5991799 72.6399861 41.5716043 81.9123705 41.5716043 86.5496397 49.5991799 81.9123705 57.6246028" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 76.8636597 68.0048708 68.8360841 72.6399861 60.8106612 81.9123705 60.8106612 86.5496397 68.8360841 81.9123705 76.8636597" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 96.1005638 68.0048708 88.075141 72.6399861 80.0475654 81.9123705 80.0475654 86.5496397 88.075141 81.9123705 96.1005638" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 115.337468 68.0048708 107.312045 72.6399861 99.2844695 81.9123705 99.2844695 86.5496397 107.312045 81.9123705 115.337468" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 134.576525 68.0048708 126.551102 72.6399861 118.523526 81.9123705 118.523526 86.5496397 126.551102 81.9123705 134.576525" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 153.815582 68.0048708 145.788006 72.6399861 137.762583 81.9123705 137.762583 86.5496397 145.788006 81.9123705 153.815582" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 173.052486 68.0048708 165.027063 72.6399861 156.999487 81.9123705 156.999487 86.5496397 165.027063 81.9123705 173.052486" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 192.291543 68.0048708 184.263967 72.6399861 176.236392 81.9123705 176.236392 86.5496397 184.263967 81.9123705 192.291543" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 211.528447 68.0048708 203.503024 72.6399861 195.475448 81.9123705 195.475448 86.5496397 203.503024 81.9123705 211.528447" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 230.765351 68.0048708 222.739928 72.6399861 214.712353 81.9123705 214.712353 86.5496397 222.739928 81.9123705 230.765351" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 250.004408 68.0048708 241.978985 72.6399861 233.95141 81.9123705 233.95141 86.5496397 241.978985 81.9123705 250.004408" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 269.243465 68.0048708 261.215889 72.6399861 253.190466 81.9123705 253.190466 86.5496397 261.215889 81.9123705 269.243465" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 288.480369 68.0048708 280.454946 72.6399861 272.427371 81.9123705 272.427371 86.5496397 280.454946 81.9123705 288.480369" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 307.717273 68.0048708 299.69185 72.6399861 291.664275 81.9123705 291.664275 86.5496397 299.69185 81.9123705 307.717273" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 326.95633 68.0048708 318.930907 72.6399861 310.903332 81.9123705 310.903332 86.5496397 318.930907 81.9123705 326.95633" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 346.193234 68.0048708 338.167811 72.6399861 330.140236 81.9123705 330.140236 86.5496397 338.167811 81.9123705 346.193234" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 365.432291 68.0048708 357.404716 72.6399861 349.379293 81.9123705 349.379293 86.5496397 357.404716 81.9123705 365.432291" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 384.669195 68.0048708 376.643772 72.6399861 368.616197 81.9123705 368.616197 86.5496397 376.643772 81.9123705 384.669195" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 403.908252 68.0048708 395.880677 72.6399861 387.853101 81.9123705 387.853101 86.5496397 395.880677 81.9123705 403.908252" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 423.145156 68.0048708 415.119733 72.6399861 407.092158 81.9123705 407.092158 86.5496397 415.119733 81.9123705 423.145156" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 442.386366 68.0048708 434.35879 72.6399861 426.331215 81.9123705 426.331215 86.5496397 434.35879 81.9123705 442.386366" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 461.621117 68.0048708 453.593542 72.6399861 445.568119 81.9123705 445.568119 86.5496397 453.593542 81.9123705 461.621117" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 480.860174 68.0048708 472.834751 72.6399861 464.805023 81.9123705 464.805023 86.5496397 472.834751 81.9123705 480.860174" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 500.099231 68.0048708 492.071656 72.6399861 484.04408 81.9123705 484.04408 86.5496397 492.071656 81.9123705 500.099231" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 519.336135 68.0048708 511.310712 72.6399861 503.283137 81.9123705 503.283137 86.5496397 511.310712 81.9123705 519.336135" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 538.573039 68.0048708 530.547617 72.6399861 522.522194 81.9123705 522.522194 86.5496397 530.547617 81.9123705 538.573039" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 557.809944 68.0048708 549.784521 72.6399861 541.756945 81.9123705 541.756945 86.5496397 549.784521 81.9123705 557.809944" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 577.051153 68.0048708 569.023578 72.6399861 560.996002 81.9123705 560.996002 86.5496397 569.023578 81.9123705 577.051153" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 596.288057 68.0048708 588.260482 72.6399861 580.235059 81.9123705 580.235059 86.5496397 588.260482 81.9123705 596.288057" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 615.524962 68.0048708 607.497386 72.6399861 599.471963 81.9123705 599.471963 86.5496397 607.497386 81.9123705 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 634.761866 68.0048708 626.736443 72.6399861 618.708867 81.9123705 618.708867 86.5496397 626.736443 81.9123705 634.761866" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 654.000923 68.0048708 645.9755 72.6399861 637.945771 81.9123705 637.945771 86.5496397 645.9755 81.9123705 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 673.239979 68.0048708 665.214557 72.6399861 657.186981 81.9123705 657.186981 86.5496397 665.214557 81.9123705 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 692.476884 68.0048708 684.449308 72.6399861 676.423885 81.9123705 676.423885 86.5496397 684.449308 81.9123705 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 711.713788 68.0048708 703.688365 72.6399861 695.660789 81.9123705 695.660789 86.5496397 703.688365 81.9123705 711.713788" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 730.952845 68.0048708 722.925269 72.6399861 714.899846 81.9123705 714.899846 86.5496397 722.925269 81.9123705 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 750.191902 68.0048708 742.164326 72.6399861 734.13675 81.9123705 734.13675 86.5496397 742.164326 81.9123705 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 769.428806 68.0048708 761.40123 72.6399861 753.375807 81.9123705 753.375807 86.5496397 761.40123 81.9123705 769.428806" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 788.66571 68.0048708 780.640287 72.6399861 772.612711 81.9123705 772.612711 86.5496397 780.640287 81.9123705 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 807.904767 68.0048708 799.879344 72.6399861 791.851768 81.9123705 791.851768 86.5496397 799.879344 81.9123705 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 827.141671 68.0048708 819.116248 72.6399861 811.088672 81.9123705 811.088672 86.5496397 819.116248 81.9123705 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 830.327729 68.0027169 838.353152 68.8427239 839.806253 85.7117866 839.806253 86.5496397 838.353152 81.9123705 830.327729" }, null)])]), g("g", { opacity: "0.54904655", mask: "url(#mask-h32)", fill: r2[1], "fill-rule": "nonzero", id: "Shape" }, [g("g", { transform: "translate(1259.537096, 30.618913) scale(-1, 1) rotate(90.000000) translate(-1259.537096, -30.618913) translate(1216.014427, -389.381087)" }, [g("polygon", { "fill-opacity": "0.1", points: "5.45666057 38.3876986 0.8193914 30.360123 5.45666057 22.3347002 14.729045 22.3347002 19.3663142 30.360123 14.729045 38.3876986" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 19.1486417 0.8193914 11.1232189 5.45666057 3.09564326 14.729045 3.09564326 19.3663142 11.1232189 14.729045 19.1486417" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 57.6246028 0.8193914 49.5991799 5.45666057 41.5716043 14.729045 41.5716043 19.3663142 49.5991799 14.729045 57.6246028" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 76.8636597 0.8193914 68.8360841 5.45666057 60.8106612 14.729045 60.8106612 19.3663142 68.8360841 14.729045 76.8636597" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 96.1005638 0.8193914 88.075141 5.45666057 80.0475654 14.729045 80.0475654 19.3663142 88.075141 14.729045 96.1005638" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 115.337468 0.8193914 107.312045 5.45666057 99.2844695 14.729045 99.2844695 19.3663142 107.312045 14.729045 115.337468" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 134.576525 0.8193914 126.551102 5.45666057 118.523526 14.729045 118.523526 19.3663142 126.551102 14.729045 134.576525" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 153.815582 0.8193914 145.788006 5.45666057 137.762583 14.729045 137.762583 19.3663142 145.788006 14.729045 153.815582" }, null), g("polygon", { "fill-opacity": "0.2", points: "5.45666057 173.052486 0.8193914 165.027063 5.45666057 156.999487 14.729045 156.999487 19.3663142 165.027063 14.729045 173.052486" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 192.291543 0.8193914 184.263967 5.45666057 176.236392 14.729045 176.236392 19.3663142 184.263967 14.729045 192.291543" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 211.528447 0.8193914 203.503024 5.45666057 195.475448 14.729045 195.475448 19.3663142 203.503024 14.729045 211.528447" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 230.765351 0.8193914 222.739928 5.45666057 214.712353 14.729045 214.712353 19.3663142 222.739928 14.729045 230.765351" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 250.004408 0.8193914 241.978985 5.45666057 233.95141 14.729045 233.95141 19.3663142 241.978985 14.729045 250.004408" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 269.243465 0.8193914 261.215889 5.45666057 253.190466 14.729045 253.190466 19.3663142 261.215889 14.729045 269.243465" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 288.480369 0.8193914 280.454946 5.45666057 272.427371 14.729045 272.427371 19.3663142 280.454946 14.729045 288.480369" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 307.717273 0.8193914 299.69185 5.45666057 291.664275 14.729045 291.664275 19.3663142 299.69185 14.729045 307.717273" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 326.95633 0.8193914 318.930907 5.45666057 310.903332 14.729045 310.903332 19.3663142 318.930907 14.729045 326.95633" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 346.193234 0.8193914 338.167811 5.45666057 330.140236 14.729045 330.140236 19.3663142 338.167811 14.729045 346.193234" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 365.432291 0.8193914 357.404716 5.45666057 349.379293 14.729045 349.379293 19.3663142 357.404716 14.729045 365.432291" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 384.669195 0.8193914 376.643772 5.45666057 368.616197 14.729045 368.616197 19.3663142 376.643772 14.729045 384.669195" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 403.908252 0.8193914 395.880677 5.45666057 387.853101 14.729045 387.853101 19.3663142 395.880677 14.729045 403.908252" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 423.145156 0.8193914 415.119733 5.45666057 407.092158 14.729045 407.092158 19.3663142 415.119733 14.729045 423.145156" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 442.386366 0.8193914 434.35879 5.45666057 426.331215 14.729045 426.331215 19.3663142 434.35879 14.729045 442.386366" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 461.621117 0.8193914 453.593542 5.45666057 445.568119 14.729045 445.568119 19.3663142 453.593542 14.729045 461.621117" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 480.860174 0.8193914 472.834751 5.45666057 464.805023 14.729045 464.805023 19.3663142 472.834751 14.729045 480.860174" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 500.099231 0.8193914 492.071656 5.45666057 484.04408 14.729045 484.04408 19.3663142 492.071656 14.729045 500.099231" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 519.336135 0.8193914 511.310712 5.45666057 503.283137 14.729045 503.283137 19.3663142 511.310712 14.729045 519.336135" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 538.573039 0.8193914 530.547617 5.45666057 522.522194 14.729045 522.522194 19.3663142 530.547617 14.729045 538.573039" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 557.809944 0.8193914 549.784521 5.45666057 541.756945 14.729045 541.756945 19.3663142 549.784521 14.729045 557.809944" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 577.051153 0.8193914 569.023578 5.45666057 560.996002 14.729045 560.996002 19.3663142 569.023578 14.729045 577.051153" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 596.288057 0.8193914 588.260482 5.45666057 580.235059 14.729045 580.235059 19.3663142 588.260482 14.729045 596.288057" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 615.524962 0.8193914 607.497386 5.45666057 599.471963 14.729045 599.471963 19.3663142 607.497386 14.729045 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 634.761866 0.8193914 626.736443 5.45666057 618.708867 14.729045 618.708867 19.3663142 626.736443 14.729045 634.761866" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 654.000923 0.8193914 645.9755 5.45666057 637.945771 14.729045 637.945771 19.3663142 645.9755 14.729045 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 673.239979 0.8193914 665.214557 5.45666057 657.186981 14.729045 657.186981 19.3663142 665.214557 14.729045 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 692.476884 0.8193914 684.449308 5.45666057 676.423885 14.729045 676.423885 19.3663142 684.449308 14.729045 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 711.713788 0.8193914 703.688365 5.45666057 695.660789 14.729045 695.660789 19.3663142 703.688365 14.729045 711.713788" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 730.952845 0.8193914 722.925269 5.45666057 714.899846 14.729045 714.899846 19.3663142 722.925269 14.729045 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 750.191902 0.8193914 742.164326 5.45666057 734.13675 14.729045 734.13675 19.3663142 742.164326 14.729045 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 769.428806 0.8193914 761.40123 5.45666057 753.375807 14.729045 753.375807 19.3663142 761.40123 14.729045 769.428806" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 788.66571 0.8193914 780.640287 5.45666057 772.612711 14.729045 772.612711 19.3663142 780.640287 14.729045 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 807.904767 0.8193914 799.879344 5.45666057 791.851768 14.729045 791.851768 19.3663142 799.879344 14.729045 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 827.141671 0.8193914 819.116248 5.45666057 811.088672 14.729045 811.088672 19.3663142 819.116248 14.729045 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 830.327729 0.8193914 838.353152 1.65939836 839.806253 18.5284611 839.806253 19.3663142 838.353152 14.729045 830.327729" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 28.7175807 17.6173766 20.6921579 22.2524919 12.6645823 31.5248764 12.6645823 36.1621456 20.6921579 31.5248764 28.7175807" }, null), g("polygon", { "fill-opacity": "0.1", points: "18.4552297 0 17.6173766 1.45310097 22.2524919 9.48067658 31.5248764 9.48067658 36.1621456 1.45310097 35.3242925 0" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 47.9566376 17.6173766 39.9312148 22.2524919 31.9036392 31.5248764 31.9036392 36.1621456 39.9312148 31.5248764 47.9566376" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 67.1935418 17.6173766 59.1681189 22.2524919 51.1405433 31.5248764 51.1405433 36.1621456 59.1681189 31.5248764 67.1935418" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 86.4325987 17.6173766 78.4050231 22.2524919 70.3796002 31.5248764 70.3796002 36.1621456 78.4050231 31.5248764 86.4325987" }, null), g("polygon", { "fill-opacity": "0.433662041", points: "22.2524919 105.669503 17.6173766 97.64408 22.2524919 89.6165044 31.5248764 89.6165044 36.1621456 97.64408 31.5248764 105.669503" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 124.90856 17.6173766 116.880984 22.2524919 108.853409 31.5248764 108.853409 36.1621456 116.880984 31.5248764 124.90856" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 144.145464 17.6173766 136.120041 22.2524919 128.092465 31.5248764 128.092465 36.1621456 136.120041 31.5248764 144.145464" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 163.384521 17.6173766 155.356945 22.2524919 147.331522 31.5248764 147.331522 36.1621456 155.356945 31.5248764 163.384521" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 182.621425 17.6173766 174.596002 22.2524919 166.568426 31.5248764 166.568426 36.1621456 174.596002 31.5248764 182.621425" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 201.860482 17.6173766 193.832906 22.2524919 185.805331 31.5248764 185.805331 36.1621456 193.832906 31.5248764 201.860482" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 221.097386 17.6173766 213.071963 22.2524919 205.044387 31.5248764 205.044387 36.1621456 213.071963 31.5248764 221.097386" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 240.33429 17.6173766 232.308867 22.2524919 224.281292 31.5248764 224.281292 36.1621456 232.308867 31.5248764 240.33429" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 259.573347 17.6173766 251.547924 22.2524919 243.520349 31.5248764 243.520349 36.1621456 251.547924 31.5248764 259.573347" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 278.812404 17.6173766 270.784828 22.2524919 262.759405 31.5248764 262.759405 36.1621456 270.784828 31.5248764 278.812404" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 298.049308 17.6173766 290.023885 22.2524919 281.99631 31.5248764 281.99631 36.1621456 290.023885 31.5248764 298.049308" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 317.286212 17.6173766 309.260789 22.2524919 301.233214 31.5248764 301.233214 36.1621456 309.260789 31.5248764 317.286212" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 336.525269 17.6173766 328.499846 22.2524919 320.472271 31.5248764 320.472271 36.1621456 328.499846 31.5248764 336.525269" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 355.764326 17.6173766 347.73675 22.2524919 339.711328 31.5248764 339.711328 36.1621456 347.73675 31.5248764 355.764326" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 375.00123 17.6173766 366.975807 22.2524919 358.948232 31.5248764 358.948232 36.1621456 366.975807 31.5248764 375.00123" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 394.240287 17.6173766 386.212711 22.2524919 378.185136 31.5248764 378.185136 36.1621456 386.212711 31.5248764 394.240287" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 413.477191 17.6173766 405.451768 22.2524919 397.424193 31.5248764 397.424193 36.1621456 405.451768 31.5248764 413.477191" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 432.716248 17.6173766 424.690825 22.2524919 416.661097 31.5248764 416.661097 36.1621456 424.690825 31.5248764 432.716248" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 451.950999 17.6173766 443.925577 22.2524919 435.898001 31.5248764 435.898001 36.1621456 443.925577 31.5248764 451.950999" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 471.190056 17.6173766 463.164634 22.2524919 455.134905 31.5248764 455.134905 36.1621456 463.164634 31.5248764 471.190056" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 490.429113 17.6173766 482.40369 22.2524919 474.376115 31.5248764 474.376115 36.1621456 482.40369 31.5248764 490.429113" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 509.66817 17.6173766 501.640595 22.2524919 493.613019 31.5248764 493.613019 36.1621456 501.640595 31.5248764 509.66817" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 528.905074 17.6173766 520.877499 22.2524919 512.852076 31.5248764 512.852076 36.1621456 520.877499 31.5248764 528.905074" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 548.141978 17.6173766 540.116556 22.2524919 532.08898 31.5248764 532.08898 36.1621456 540.116556 31.5248764 548.141978" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 567.381035 17.6173766 559.35346 22.2524919 551.325884 31.5248764 551.325884 36.1621456 559.35346 31.5248764 567.381035" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 586.61794 17.6173766 578.592517 22.2524919 570.564941 31.5248764 570.564941 36.1621456 578.592517 31.5248764 586.61794" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 605.854844 17.6173766 597.829421 22.2524919 589.803998 31.5248764 589.803998 36.1621456 597.829421 31.5248764 605.854844" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 625.093901 17.6173766 617.066325 22.2524919 609.038749 31.5248764 609.038749 36.1621456 617.066325 31.5248764 625.093901" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 644.330805 17.6173766 636.305382 22.2524919 628.277806 31.5248764 628.277806 36.1621456 636.305382 31.5248764 644.330805" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 663.572014 17.6173766 655.544439 22.2524919 647.516863 31.5248764 647.516863 36.1621456 655.544439 31.5248764 663.572014" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 682.806766 17.6173766 674.77919 22.2524919 666.753767 31.5248764 666.753767 36.1621456 674.77919 31.5248764 682.806766" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 702.045823 17.6173766 694.018247 22.2524919 685.990671 31.5248764 685.990671 36.1621456 694.018247 31.5248764 702.045823" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 721.282727 17.6173766 713.257304 22.2524919 705.229728 31.5248764 705.229728 36.1621456 713.257304 31.5248764 721.282727" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 740.521784 17.6173766 732.496361 22.2524919 724.468785 31.5248764 724.468785 36.1621456 732.496361 31.5248764 740.521784" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 759.758688 17.6173766 751.733265 22.2524919 743.707842 31.5248764 743.707842 36.1621456 751.733265 31.5248764 759.758688" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 778.997745 17.6173766 770.970169 22.2524919 762.944746 31.5248764 762.944746 36.1621456 770.970169 31.5248764 778.997745" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 798.236802 17.6173766 790.209226 22.2524919 782.18165 31.5248764 782.18165 36.1621456 790.209226 31.5248764 798.236802" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 817.473706 17.6173766 809.44613 22.2524919 801.418555 31.5248764 801.418555 36.1621456 809.44613 31.5248764 817.473706" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 836.71061 17.6173766 828.685187 22.2524919 820.657611 31.5248764 820.657611 36.1621456 828.685187 31.5248764 836.71061" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 38.3876986 34.413208 30.360123 39.0483233 22.3347002 48.3207078 22.3347002 52.9601308 30.360123 48.3207078 38.3876986" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 19.1486417 34.413208 11.1232189 39.0483233 3.09564326 48.3207078 3.09564326 52.9601308 11.1232189 48.3207078 19.1486417" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 57.6246028 34.413208 49.5991799 39.0483233 41.5716043 48.3207078 41.5716043 52.9601308 49.5991799 48.3207078 57.6246028" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 76.8636597 34.413208 68.8360841 39.0483233 60.8106612 48.3207078 60.8106612 52.9601308 68.8360841 48.3207078 76.8636597" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 96.1005638 34.413208 88.075141 39.0483233 80.0475654 48.3207078 80.0475654 52.9601308 88.075141 48.3207078 96.1005638" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 115.337468 34.413208 107.312045 39.0483233 99.2844695 48.3207078 99.2844695 52.9601308 107.312045 48.3207078 115.337468" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 134.576525 34.413208 126.551102 39.0483233 118.523526 48.3207078 118.523526 52.9601308 126.551102 48.3207078 134.576525" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 153.815582 34.413208 145.788006 39.0483233 137.762583 48.3207078 137.762583 52.9601308 145.788006 48.3207078 153.815582" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 173.052486 34.413208 165.027063 39.0483233 156.999487 48.3207078 156.999487 52.9601308 165.027063 48.3207078 173.052486" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 192.291543 34.413208 184.263967 39.0483233 176.236392 48.3207078 176.236392 52.9601308 184.263967 48.3207078 192.291543" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 211.528447 34.413208 203.503024 39.0483233 195.475448 48.3207078 195.475448 52.9601308 203.503024 48.3207078 211.528447" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 230.765351 34.413208 222.739928 39.0483233 214.712353 48.3207078 214.712353 52.9601308 222.739928 48.3207078 230.765351" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 250.004408 34.413208 241.978985 39.0483233 233.95141 48.3207078 233.95141 52.9601308 241.978985 48.3207078 250.004408" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 269.243465 34.413208 261.215889 39.0483233 253.190466 48.3207078 253.190466 52.9601308 261.215889 48.3207078 269.243465" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 288.480369 34.413208 280.454946 39.0483233 272.427371 48.3207078 272.427371 52.9601308 280.454946 48.3207078 288.480369" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 307.717273 34.413208 299.69185 39.0483233 291.664275 48.3207078 291.664275 52.9601308 299.69185 48.3207078 307.717273" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 326.95633 34.413208 318.930907 39.0483233 310.903332 48.3207078 310.903332 52.9601308 318.930907 48.3207078 326.95633" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 346.193234 34.413208 338.167811 39.0483233 330.140236 48.3207078 330.140236 52.9601308 338.167811 48.3207078 346.193234" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 365.432291 34.413208 357.404716 39.0483233 349.379293 48.3207078 349.379293 52.9601308 357.404716 48.3207078 365.432291" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 384.669195 34.413208 376.643772 39.0483233 368.616197 48.3207078 368.616197 52.9601308 376.643772 48.3207078 384.669195" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 403.908252 34.413208 395.880677 39.0483233 387.853101 48.3207078 387.853101 52.9601308 395.880677 48.3207078 403.908252" }, null), g("polygon", { "fill-opacity": "0.06", points: "39.0483233 423.145156 34.413208 415.119733 39.0483233 407.092158 48.3207078 407.092158 52.9601308 415.119733 48.3207078 423.145156" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 442.386366 34.413208 434.35879 39.0483233 426.331215 48.3207078 426.331215 52.9601308 434.35879 48.3207078 442.386366" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 461.621117 34.413208 453.593542 39.0483233 445.568119 48.3207078 445.568119 52.9601308 453.593542 48.3207078 461.621117" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 480.860174 34.413208 472.834751 39.0483233 464.805023 48.3207078 464.805023 52.9601308 472.834751 48.3207078 480.860174" }, null), g("polygon", { "fill-opacity": "0.06", points: "39.0483233 500.099231 34.413208 492.071656 39.0483233 484.04408 48.3207078 484.04408 52.9601308 492.071656 48.3207078 500.099231" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 519.336135 34.413208 511.310712 39.0483233 503.283137 48.3207078 503.283137 52.9601308 511.310712 48.3207078 519.336135" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 538.573039 34.413208 530.547617 39.0483233 522.522194 48.3207078 522.522194 52.9601308 530.547617 48.3207078 538.573039" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 557.809944 34.413208 549.784521 39.0483233 541.756945 48.3207078 541.756945 52.9601308 549.784521 48.3207078 557.809944" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 577.051153 34.413208 569.023578 39.0483233 560.996002 48.3207078 560.996002 52.9601308 569.023578 48.3207078 577.051153" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 596.288057 34.413208 588.260482 39.0483233 580.235059 48.3207078 580.235059 52.9601308 588.260482 48.3207078 596.288057" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 615.524962 34.413208 607.497386 39.0483233 599.471963 48.3207078 599.471963 52.9601308 607.497386 48.3207078 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 634.761866 34.413208 626.736443 39.0483233 618.708867 48.3207078 618.708867 52.9601308 626.736443 48.3207078 634.761866" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 654.000923 34.413208 645.9755 39.0483233 637.945771 48.3207078 637.945771 52.9601308 645.9755 48.3207078 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 673.239979 34.413208 665.214557 39.0483233 657.186981 48.3207078 657.186981 52.9601308 665.214557 48.3207078 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 692.476884 34.413208 684.449308 39.0483233 676.423885 48.3207078 676.423885 52.9601308 684.449308 48.3207078 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 711.713788 34.413208 703.688365 39.0483233 695.660789 48.3207078 695.660789 52.9601308 703.688365 48.3207078 711.713788" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 730.952845 34.413208 722.925269 39.0483233 714.899846 48.3207078 714.899846 52.9601308 722.925269 48.3207078 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 750.191902 34.413208 742.164326 39.0483233 734.13675 48.3207078 734.13675 52.9601308 742.164326 48.3207078 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 769.428806 34.413208 761.40123 39.0483233 753.375807 48.3207078 753.375807 52.9601308 761.40123 48.3207078 769.428806" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 788.66571 34.413208 780.640287 39.0483233 772.612711 48.3207078 772.612711 52.9601308 780.640287 48.3207078 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 807.904767 34.413208 799.879344 39.0483233 791.851768 48.3207078 791.851768 52.9601308 799.879344 48.3207078 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 827.141671 34.413208 819.116248 39.0483233 811.088672 48.3207078 811.088672 52.9601308 819.116248 48.3207078 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 830.327729 34.4110542 838.353152 35.2510611 839.806253 52.1201239 839.806253 52.9601308 838.353152 48.3207078 830.327729" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 28.7175807 51.2090394 20.6921579 55.8441547 12.6645823 65.1165392 12.6645823 69.7538083 20.6921579 65.1165392 28.7175807" }, null), g("polygon", { "fill-opacity": "0.1", points: "52.0468925 0 51.2090394 1.45310097 55.8441547 9.48067658 65.1165392 9.48067658 69.7538083 1.45310097 68.9138014 0" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 47.9566376 51.2090394 39.9312148 55.8441547 31.9036392 65.1165392 31.9036392 69.7538083 39.9312148 65.1165392 47.9566376" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 67.1935418 51.2090394 59.1681189 55.8441547 51.1405433 65.1165392 51.1405433 69.7538083 59.1681189 65.1165392 67.1935418" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 86.4325987 51.2090394 78.4050231 55.8441547 70.3796002 65.1165392 70.3796002 69.7538083 78.4050231 65.1165392 86.4325987" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 105.669503 51.2090394 97.64408 55.8441547 89.6165044 65.1165392 89.6165044 69.7538083 97.64408 65.1165392 105.669503" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 124.90856 51.2090394 116.880984 55.8441547 108.853409 65.1165392 108.853409 69.7538083 116.880984 65.1165392 124.90856" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 144.145464 51.2090394 136.120041 55.8441547 128.092465 65.1165392 128.092465 69.7538083 136.120041 65.1165392 144.145464" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 163.384521 51.2090394 155.356945 55.8441547 147.331522 65.1165392 147.331522 69.7538083 155.356945 65.1165392 163.384521" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 182.621425 51.2090394 174.596002 55.8441547 166.568426 65.1165392 166.568426 69.7538083 174.596002 65.1165392 182.621425" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 201.860482 51.2090394 193.832906 55.8441547 185.805331 65.1165392 185.805331 69.7538083 193.832906 65.1165392 201.860482" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 221.097386 51.2090394 213.071963 55.8441547 205.044387 65.1165392 205.044387 69.7538083 213.071963 65.1165392 221.097386" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 240.33429 51.2090394 232.308867 55.8441547 224.281292 65.1165392 224.281292 69.7538083 232.308867 65.1165392 240.33429" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 259.573347 51.2090394 251.547924 55.8441547 243.520349 65.1165392 243.520349 69.7538083 251.547924 65.1165392 259.573347" }, null), g("polygon", { "fill-opacity": "0.1", points: "51.2090394 270.784828 55.8441547 262.759405 65.1165392 262.759405 69.7538083 270.784828 65.1165392 278.812404 55.8441547 278.812404" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 298.049308 51.2090394 290.023885 55.8441547 281.99631 65.1165392 281.99631 69.7538083 290.023885 65.1165392 298.049308" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 317.286212 51.2090394 309.260789 55.8441547 301.233214 65.1165392 301.233214 69.7538083 309.260789 65.1165392 317.286212" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 336.525269 51.2090394 328.499846 55.8441547 320.472271 65.1165392 320.472271 69.7538083 328.499846 65.1165392 336.525269" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 355.764326 51.2090394 347.73675 55.8441547 339.711328 65.1165392 339.711328 69.7538083 347.73675 65.1165392 355.764326" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 375.00123 51.2090394 366.975807 55.8441547 358.948232 65.1165392 358.948232 69.7538083 366.975807 65.1165392 375.00123" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 394.240287 51.2090394 386.212711 55.8441547 378.185136 65.1165392 378.185136 69.7538083 386.212711 65.1165392 394.240287" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 413.477191 51.2090394 405.451768 55.8441547 397.424193 65.1165392 397.424193 69.7538083 405.451768 65.1165392 413.477191" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 432.716248 51.2090394 424.690825 55.8441547 416.661097 65.1165392 416.661097 69.7538083 424.690825 65.1165392 432.716248" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 451.950999 51.2090394 443.925577 55.8441547 435.898001 65.1165392 435.898001 69.7538083 443.925577 65.1165392 451.950999" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 471.190056 51.2090394 463.164634 55.8441547 455.134905 65.1165392 455.134905 69.7538083 463.164634 65.1165392 471.190056" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 490.429113 51.2090394 482.40369 55.8441547 474.376115 65.1165392 474.376115 69.7538083 482.40369 65.1165392 490.429113" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 509.66817 51.2090394 501.640595 55.8441547 493.613019 65.1165392 493.613019 69.7538083 501.640595 65.1165392 509.66817" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 528.905074 51.2090394 520.877499 55.8441547 512.852076 65.1165392 512.852076 69.7538083 520.877499 65.1165392 528.905074" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 548.141978 51.2090394 540.116556 55.8441547 532.08898 65.1165392 532.08898 69.7538083 540.116556 65.1165392 548.141978" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 567.381035 51.2090394 559.35346 55.8441547 551.325884 65.1165392 551.325884 69.7538083 559.35346 65.1165392 567.381035" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 586.61794 51.2090394 578.592517 55.8441547 570.564941 65.1165392 570.564941 69.7538083 578.592517 65.1165392 586.61794" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 605.854844 51.2090394 597.829421 55.8441547 589.803998 65.1165392 589.803998 69.7538083 597.829421 65.1165392 605.854844" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 625.093901 51.2090394 617.066325 55.8441547 609.038749 65.1165392 609.038749 69.7538083 617.066325 65.1165392 625.093901" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 644.330805 51.2090394 636.305382 55.8441547 628.277806 65.1165392 628.277806 69.7538083 636.305382 65.1165392 644.330805" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 663.572014 51.2090394 655.544439 55.8441547 647.516863 65.1165392 647.516863 69.7538083 655.544439 65.1165392 663.572014" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 682.806766 51.2090394 674.77919 55.8441547 666.753767 65.1165392 666.753767 69.7538083 674.77919 65.1165392 682.806766" }, null), g("polygon", { "fill-opacity": "0.06", points: "55.8441547 702.045823 51.2090394 694.018247 55.8441547 685.990671 65.1165392 685.990671 69.7538083 694.018247 65.1165392 702.045823" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 721.282727 51.2090394 713.257304 55.8441547 705.229728 65.1165392 705.229728 69.7538083 713.257304 65.1165392 721.282727" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 740.521784 51.2090394 732.496361 55.8441547 724.468785 65.1165392 724.468785 69.7538083 732.496361 65.1165392 740.521784" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 759.758688 51.2090394 751.733265 55.8441547 743.707842 65.1165392 743.707842 69.7538083 751.733265 65.1165392 759.758688" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 778.997745 51.2090394 770.970169 55.8441547 762.944746 65.1165392 762.944746 69.7538083 770.970169 65.1165392 778.997745" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 798.236802 51.2090394 790.209226 55.8441547 782.18165 65.1165392 782.18165 69.7538083 790.209226 65.1165392 798.236802" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 817.473706 51.2090394 809.44613 55.8441547 801.418555 65.1165392 801.418555 69.7538083 809.44613 65.1165392 817.473706" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 836.71061 51.2090394 828.685187 55.8441547 820.657611 65.1165392 820.657611 69.7538083 828.685187 65.1165392 836.71061" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 38.3876986 68.0048708 30.360123 72.6399861 22.3347002 81.9123705 22.3347002 86.5496397 30.360123 81.9123705 38.3876986" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 19.1486417 68.0048708 11.1232189 72.6399861 3.09564326 81.9123705 3.09564326 86.5496397 11.1232189 81.9123705 19.1486417" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 57.6246028 68.0048708 49.5991799 72.6399861 41.5716043 81.9123705 41.5716043 86.5496397 49.5991799 81.9123705 57.6246028" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 76.8636597 68.0048708 68.8360841 72.6399861 60.8106612 81.9123705 60.8106612 86.5496397 68.8360841 81.9123705 76.8636597" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 96.1005638 68.0048708 88.075141 72.6399861 80.0475654 81.9123705 80.0475654 86.5496397 88.075141 81.9123705 96.1005638" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 115.337468 68.0048708 107.312045 72.6399861 99.2844695 81.9123705 99.2844695 86.5496397 107.312045 81.9123705 115.337468" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 134.576525 68.0048708 126.551102 72.6399861 118.523526 81.9123705 118.523526 86.5496397 126.551102 81.9123705 134.576525" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 153.815582 68.0048708 145.788006 72.6399861 137.762583 81.9123705 137.762583 86.5496397 145.788006 81.9123705 153.815582" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 173.052486 68.0048708 165.027063 72.6399861 156.999487 81.9123705 156.999487 86.5496397 165.027063 81.9123705 173.052486" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 192.291543 68.0048708 184.263967 72.6399861 176.236392 81.9123705 176.236392 86.5496397 184.263967 81.9123705 192.291543" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 211.528447 68.0048708 203.503024 72.6399861 195.475448 81.9123705 195.475448 86.5496397 203.503024 81.9123705 211.528447" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 230.765351 68.0048708 222.739928 72.6399861 214.712353 81.9123705 214.712353 86.5496397 222.739928 81.9123705 230.765351" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 250.004408 68.0048708 241.978985 72.6399861 233.95141 81.9123705 233.95141 86.5496397 241.978985 81.9123705 250.004408" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 269.243465 68.0048708 261.215889 72.6399861 253.190466 81.9123705 253.190466 86.5496397 261.215889 81.9123705 269.243465" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 288.480369 68.0048708 280.454946 72.6399861 272.427371 81.9123705 272.427371 86.5496397 280.454946 81.9123705 288.480369" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 307.717273 68.0048708 299.69185 72.6399861 291.664275 81.9123705 291.664275 86.5496397 299.69185 81.9123705 307.717273" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 326.95633 68.0048708 318.930907 72.6399861 310.903332 81.9123705 310.903332 86.5496397 318.930907 81.9123705 326.95633" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 346.193234 68.0048708 338.167811 72.6399861 330.140236 81.9123705 330.140236 86.5496397 338.167811 81.9123705 346.193234" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 365.432291 68.0048708 357.404716 72.6399861 349.379293 81.9123705 349.379293 86.5496397 357.404716 81.9123705 365.432291" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 384.669195 68.0048708 376.643772 72.6399861 368.616197 81.9123705 368.616197 86.5496397 376.643772 81.9123705 384.669195" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 403.908252 68.0048708 395.880677 72.6399861 387.853101 81.9123705 387.853101 86.5496397 395.880677 81.9123705 403.908252" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 423.145156 68.0048708 415.119733 72.6399861 407.092158 81.9123705 407.092158 86.5496397 415.119733 81.9123705 423.145156" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 442.386366 68.0048708 434.35879 72.6399861 426.331215 81.9123705 426.331215 86.5496397 434.35879 81.9123705 442.386366" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 461.621117 68.0048708 453.593542 72.6399861 445.568119 81.9123705 445.568119 86.5496397 453.593542 81.9123705 461.621117" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 480.860174 68.0048708 472.834751 72.6399861 464.805023 81.9123705 464.805023 86.5496397 472.834751 81.9123705 480.860174" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 500.099231 68.0048708 492.071656 72.6399861 484.04408 81.9123705 484.04408 86.5496397 492.071656 81.9123705 500.099231" }, null), g("polygon", { "fill-opacity": "0.2", points: "72.6399861 519.336135 68.0048708 511.310712 72.6399861 503.283137 81.9123705 503.283137 86.5496397 511.310712 81.9123705 519.336135" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 538.573039 68.0048708 530.547617 72.6399861 522.522194 81.9123705 522.522194 86.5496397 530.547617 81.9123705 538.573039" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 557.809944 68.0048708 549.784521 72.6399861 541.756945 81.9123705 541.756945 86.5496397 549.784521 81.9123705 557.809944" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 577.051153 68.0048708 569.023578 72.6399861 560.996002 81.9123705 560.996002 86.5496397 569.023578 81.9123705 577.051153" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 596.288057 68.0048708 588.260482 72.6399861 580.235059 81.9123705 580.235059 86.5496397 588.260482 81.9123705 596.288057" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 615.524962 68.0048708 607.497386 72.6399861 599.471963 81.9123705 599.471963 86.5496397 607.497386 81.9123705 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 634.761866 68.0048708 626.736443 72.6399861 618.708867 81.9123705 618.708867 86.5496397 626.736443 81.9123705 634.761866" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 654.000923 68.0048708 645.9755 72.6399861 637.945771 81.9123705 637.945771 86.5496397 645.9755 81.9123705 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 673.239979 68.0048708 665.214557 72.6399861 657.186981 81.9123705 657.186981 86.5496397 665.214557 81.9123705 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 692.476884 68.0048708 684.449308 72.6399861 676.423885 81.9123705 676.423885 86.5496397 684.449308 81.9123705 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 711.713788 68.0048708 703.688365 72.6399861 695.660789 81.9123705 695.660789 86.5496397 703.688365 81.9123705 711.713788" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 730.952845 68.0048708 722.925269 72.6399861 714.899846 81.9123705 714.899846 86.5496397 722.925269 81.9123705 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 750.191902 68.0048708 742.164326 72.6399861 734.13675 81.9123705 734.13675 86.5496397 742.164326 81.9123705 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 769.428806 68.0048708 761.40123 72.6399861 753.375807 81.9123705 753.375807 86.5496397 761.40123 81.9123705 769.428806" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 788.66571 68.0048708 780.640287 72.6399861 772.612711 81.9123705 772.612711 86.5496397 780.640287 81.9123705 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 807.904767 68.0048708 799.879344 72.6399861 791.851768 81.9123705 791.851768 86.5496397 799.879344 81.9123705 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 827.141671 68.0048708 819.116248 72.6399861 811.088672 81.9123705 811.088672 86.5496397 819.116248 81.9123705 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 830.327729 68.0027169 838.353152 68.8427239 839.806253 85.7117866 839.806253 86.5496397 838.353152 81.9123705 830.327729" }, null)])]), g("g", { opacity: "0.54904655", mask: "url(#mask-h32)", fill: r2[1], "fill-rule": "nonzero", id: "Shape" }, [g("g", { transform: "translate(2098.974302, 30.618913) rotate(90.000000) translate(-2098.974302, -30.618913) translate(2055.451634, -389.381087)" }, [g("polygon", { "fill-opacity": "0.1", points: "5.45666057 615.524962 0.8193914 607.497386 5.45666057 599.471963 14.729045 599.471963 19.3663142 607.497386 14.729045 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 634.761866 0.8193914 626.736443 5.45666057 618.708867 14.729045 618.708867 19.3663142 626.736443 14.729045 634.761866" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 654.000923 0.8193914 645.9755 5.45666057 637.945771 14.729045 637.945771 19.3663142 645.9755 14.729045 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 673.239979 0.8193914 665.214557 5.45666057 657.186981 14.729045 657.186981 19.3663142 665.214557 14.729045 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 692.476884 0.8193914 684.449308 5.45666057 676.423885 14.729045 676.423885 19.3663142 684.449308 14.729045 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 711.713788 0.8193914 703.688365 5.45666057 695.660789 14.729045 695.660789 19.3663142 703.688365 14.729045 711.713788" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 730.952845 0.8193914 722.925269 5.45666057 714.899846 14.729045 714.899846 19.3663142 722.925269 14.729045 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 750.191902 0.8193914 742.164326 5.45666057 734.13675 14.729045 734.13675 19.3663142 742.164326 14.729045 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 769.428806 0.8193914 761.40123 5.45666057 753.375807 14.729045 753.375807 19.3663142 761.40123 14.729045 769.428806" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 788.66571 0.8193914 780.640287 5.45666057 772.612711 14.729045 772.612711 19.3663142 780.640287 14.729045 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 807.904767 0.8193914 799.879344 5.45666057 791.851768 14.729045 791.851768 19.3663142 799.879344 14.729045 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 827.141671 0.8193914 819.116248 5.45666057 811.088672 14.729045 811.088672 19.3663142 819.116248 14.729045 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "5.45666057 830.327729 0.8193914 838.353152 1.65939836 839.806253 18.5284611 839.806253 19.3663142 838.353152 14.729045 830.327729" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 605.854844 17.6173766 597.829421 22.2524919 589.803998 31.5248764 589.803998 36.1621456 597.829421 31.5248764 605.854844" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 625.093901 17.6173766 617.066325 22.2524919 609.038749 31.5248764 609.038749 36.1621456 617.066325 31.5248764 625.093901" }, null), g("polygon", { "fill-opacity": "0.2", points: "22.2524919 644.330805 17.6173766 636.305382 22.2524919 628.277806 31.5248764 628.277806 36.1621456 636.305382 31.5248764 644.330805" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 663.572014 17.6173766 655.544439 22.2524919 647.516863 31.5248764 647.516863 36.1621456 655.544439 31.5248764 663.572014" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 682.806766 17.6173766 674.77919 22.2524919 666.753767 31.5248764 666.753767 36.1621456 674.77919 31.5248764 682.806766" }, null), g("polygon", { "fill-opacity": "0.15", points: "22.2524919 702.045823 17.6173766 694.018247 22.2524919 685.990671 31.5248764 685.990671 36.1621456 694.018247 31.5248764 702.045823" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 721.282727 17.6173766 713.257304 22.2524919 705.229728 31.5248764 705.229728 36.1621456 713.257304 31.5248764 721.282727" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 740.521784 17.6173766 732.496361 22.2524919 724.468785 31.5248764 724.468785 36.1621456 732.496361 31.5248764 740.521784" }, null), g("polygon", { "fill-opacity": "0.06", points: "22.2524919 759.758688 17.6173766 751.733265 22.2524919 743.707842 31.5248764 743.707842 36.1621456 751.733265 31.5248764 759.758688" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 778.997745 17.6173766 770.970169 22.2524919 762.944746 31.5248764 762.944746 36.1621456 770.970169 31.5248764 778.997745" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 798.236802 17.6173766 790.209226 22.2524919 782.18165 31.5248764 782.18165 36.1621456 790.209226 31.5248764 798.236802" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 817.473706 17.6173766 809.44613 22.2524919 801.418555 31.5248764 801.418555 36.1621456 809.44613 31.5248764 817.473706" }, null), g("polygon", { "fill-opacity": "0.1", points: "22.2524919 836.71061 17.6173766 828.685187 22.2524919 820.657611 31.5248764 820.657611 36.1621456 828.685187 31.5248764 836.71061" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 615.524962 34.413208 607.497386 39.0483233 599.471963 48.3207078 599.471963 52.9601308 607.497386 48.3207078 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 634.761866 34.413208 626.736443 39.0483233 618.708867 48.3207078 618.708867 52.9601308 626.736443 48.3207078 634.761866" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 654.000923 34.413208 645.9755 39.0483233 637.945771 48.3207078 637.945771 52.9601308 645.9755 48.3207078 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 673.239979 34.413208 665.214557 39.0483233 657.186981 48.3207078 657.186981 52.9601308 665.214557 48.3207078 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 692.476884 34.413208 684.449308 39.0483233 676.423885 48.3207078 676.423885 52.9601308 684.449308 48.3207078 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 711.713788 34.413208 703.688365 39.0483233 695.660789 48.3207078 695.660789 52.9601308 703.688365 48.3207078 711.713788" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 730.952845 34.413208 722.925269 39.0483233 714.899846 48.3207078 714.899846 52.9601308 722.925269 48.3207078 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 750.191902 34.413208 742.164326 39.0483233 734.13675 48.3207078 734.13675 52.9601308 742.164326 48.3207078 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 769.428806 34.413208 761.40123 39.0483233 753.375807 48.3207078 753.375807 52.9601308 761.40123 48.3207078 769.428806" }, null), g("polygon", { "fill-opacity": "0.2", points: "39.0483233 788.66571 34.413208 780.640287 39.0483233 772.612711 48.3207078 772.612711 52.9601308 780.640287 48.3207078 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 807.904767 34.413208 799.879344 39.0483233 791.851768 48.3207078 791.851768 52.9601308 799.879344 48.3207078 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 827.141671 34.413208 819.116248 39.0483233 811.088672 48.3207078 811.088672 52.9601308 819.116248 48.3207078 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "39.0483233 830.327729 34.4110542 838.353152 35.2510611 839.806253 52.1201239 839.806253 52.9601308 838.353152 48.3207078 830.327729" }, null), g("polygon", { "fill-opacity": "0.15", points: "55.8441547 605.854844 51.2090394 597.829421 55.8441547 589.803998 65.1165392 589.803998 69.7538083 597.829421 65.1165392 605.854844" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 625.093901 51.2090394 617.066325 55.8441547 609.038749 65.1165392 609.038749 69.7538083 617.066325 65.1165392 625.093901" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 644.330805 51.2090394 636.305382 55.8441547 628.277806 65.1165392 628.277806 69.7538083 636.305382 65.1165392 644.330805" }, null), g("polygon", { "fill-opacity": "0.2", points: "55.8441547 663.572014 51.2090394 655.544439 55.8441547 647.516863 65.1165392 647.516863 69.7538083 655.544439 65.1165392 663.572014" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 682.806766 51.2090394 674.77919 55.8441547 666.753767 65.1165392 666.753767 69.7538083 674.77919 65.1165392 682.806766" }, null), g("polygon", { "fill-opacity": "0.06", points: "55.8441547 702.045823 51.2090394 694.018247 55.8441547 685.990671 65.1165392 685.990671 69.7538083 694.018247 65.1165392 702.045823" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 721.282727 51.2090394 713.257304 55.8441547 705.229728 65.1165392 705.229728 69.7538083 713.257304 65.1165392 721.282727" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 740.521784 51.2090394 732.496361 55.8441547 724.468785 65.1165392 724.468785 69.7538083 732.496361 65.1165392 740.521784" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 759.758688 51.2090394 751.733265 55.8441547 743.707842 65.1165392 743.707842 69.7538083 751.733265 65.1165392 759.758688" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 778.997745 51.2090394 770.970169 55.8441547 762.944746 65.1165392 762.944746 69.7538083 770.970169 65.1165392 778.997745" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 798.236802 51.2090394 790.209226 55.8441547 782.18165 65.1165392 782.18165 69.7538083 790.209226 65.1165392 798.236802" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 817.473706 51.2090394 809.44613 55.8441547 801.418555 65.1165392 801.418555 69.7538083 809.44613 65.1165392 817.473706" }, null), g("polygon", { "fill-opacity": "0.1", points: "55.8441547 836.71061 51.2090394 828.685187 55.8441547 820.657611 65.1165392 820.657611 69.7538083 828.685187 65.1165392 836.71061" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 615.524962 68.0048708 607.497386 72.6399861 599.471963 81.9123705 599.471963 86.5496397 607.497386 81.9123705 615.524962" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 634.761866 68.0048708 626.736443 72.6399861 618.708867 81.9123705 618.708867 86.5496397 626.736443 81.9123705 634.761866" }, null), g("polygon", { "fill-opacity": "0.06", points: "72.6399861 654.000923 68.0048708 645.9755 72.6399861 637.945771 81.9123705 637.945771 86.5496397 645.9755 81.9123705 654.000923" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 673.239979 68.0048708 665.214557 72.6399861 657.186981 81.9123705 657.186981 86.5496397 665.214557 81.9123705 673.239979" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 692.476884 68.0048708 684.449308 72.6399861 676.423885 81.9123705 676.423885 86.5496397 684.449308 81.9123705 692.476884" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 711.713788 68.0048708 703.688365 72.6399861 695.660789 81.9123705 695.660789 86.5496397 703.688365 81.9123705 711.713788" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 730.952845 68.0048708 722.925269 72.6399861 714.899846 81.9123705 714.899846 86.5496397 722.925269 81.9123705 730.952845" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 750.191902 68.0048708 742.164326 72.6399861 734.13675 81.9123705 734.13675 86.5496397 742.164326 81.9123705 750.191902" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 769.428806 68.0048708 761.40123 72.6399861 753.375807 81.9123705 753.375807 86.5496397 761.40123 81.9123705 769.428806" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 788.66571 68.0048708 780.640287 72.6399861 772.612711 81.9123705 772.612711 86.5496397 780.640287 81.9123705 788.66571" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 807.904767 68.0048708 799.879344 72.6399861 791.851768 81.9123705 791.851768 86.5496397 799.879344 81.9123705 807.904767" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 827.141671 68.0048708 819.116248 72.6399861 811.088672 81.9123705 811.088672 86.5496397 819.116248 81.9123705 827.141671" }, null), g("polygon", { "fill-opacity": "0.1", points: "72.6399861 830.327729 68.0027169 838.353152 68.8427239 839.806253 85.7117866 839.806253 86.5496397 838.353152 81.9123705 830.327729" }, null)])])]), g("g", { id: "Group-14", transform: "translate(23.011985, 31.000000)" }, [g("g", { id: "Group-50", transform: "translate(1161.605003, 0.000000)" }, [g("rect", { id: "Rectangle-6", fill: r2[0], x: "9.00468994", y: "27", width: "100.05211", height: "1" }, null), g("rect", { id: "Rectangle-6", fill: r2[0], x: "534.27827", y: "27", width: "175.091193", height: "1" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "712.871287", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("line", { x1: "0.89028833", y1: "28.2767019", x2: "9.67451272", y2: "40.7232981", id: "Line-5", stroke: r2[0], "stroke-linecap": "square", transform: "translate(5.282401, 34.500000) scale(-1, 1) translate(-5.282401, -34.500000) " }, null), g("g", { id: "Group-32", transform: "translate(15.007817, 0.000000)", fill: r2[0] }, [g("rect", { id: "Rectangle-3", opacity: "0.200000003", x: "54.0281397", y: "0", width: "12.0062533", height: "12" }, null), g("rect", { id: "Rectangle-3", opacity: "0.400000006", x: "36.0187598", y: "0", width: "12.0062533", height: "12" }, null), g("rect", { id: "Rectangle-3", opacity: "0.699999988", x: "18.0093799", y: "0", width: "12.0062533", height: "12" }, null), g("rect", { id: "Rectangle-3", x: "0", y: "0", width: "12.0062533", height: "12" }, null)]), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "112.558624", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "252.631579", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "392.704534", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "530.776446", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("g", { id: "Group-48", transform: "translate(182.595102, 28.000000) scale(-1, 1) translate(-182.595102, -28.000000) translate(119.062011, 27.000000)", fill: r2[0] }, [g("polygon", { id: "Path", points: "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2" }, null), g("polygon", { id: "Path", points: "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2" }, null), g("polygon", { id: "Path", points: "101.312044 0 108.24693 0 109.0568 2 101.974132 2" }, null), g("polygon", { id: "Path", points: "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2" }, null), g("polygon", { id: "Path", points: "110.316734 0 117.25162 0 118.06149 2 110.978822 2" }, null), g("polygon", { id: "Path", points: "119.321424 0 126.25631 0 127.06618 2 119.983512 2" }, null), g("polygon", { id: "Path", points: "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2" }, null), g("polygon", { id: "Path", points: "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2" }, null), g("polygon", { id: "Path", points: "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2" }, null), g("polygon", { id: "Path", points: "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2" }, null), g("polygon", { id: "Path", points: "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2" }, null), g("polygon", { id: "Path", points: "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2" }, null), g("polygon", { id: "Path", points: "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2" }, null), g("polygon", { id: "Path", points: "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2" }, null)]), g("g", { id: "Group-48", transform: "translate(322.668056, 28.000000) scale(-1, 1) translate(-322.668056, -28.000000) translate(259.134966, 27.000000)", fill: r2[0] }, [g("polygon", { id: "Path", points: "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2" }, null), g("polygon", { id: "Path", points: "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2" }, null), g("polygon", { id: "Path", points: "101.312044 0 108.24693 0 109.0568 2 101.974132 2" }, null), g("polygon", { id: "Path", points: "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2" }, null), g("polygon", { id: "Path", points: "110.316734 0 117.25162 0 118.06149 2 110.978822 2" }, null), g("polygon", { id: "Path", points: "119.321424 0 126.25631 0 127.06618 2 119.983512 2" }, null), g("polygon", { id: "Path", points: "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2" }, null), g("polygon", { id: "Path", points: "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2" }, null), g("polygon", { id: "Path", points: "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2" }, null), g("polygon", { id: "Path", points: "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2" }, null), g("polygon", { id: "Path", points: "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2" }, null), g("polygon", { id: "Path", points: "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2" }, null), g("polygon", { id: "Path", points: "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2" }, null), g("polygon", { id: "Path", points: "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2" }, null)]), g("g", { id: "Group-48", transform: "translate(461.740490, 28.000000) scale(-1, 1) translate(-461.740490, -28.000000) translate(398.207400, 27.000000)", fill: r2[0] }, [g("polygon", { id: "Path", points: "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2" }, null), g("polygon", { id: "Path", points: "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2" }, null), g("polygon", { id: "Path", points: "101.312044 0 108.24693 0 109.0568 2 101.974132 2" }, null), g("polygon", { id: "Path", points: "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2" }, null), g("polygon", { id: "Path", points: "110.316734 0 117.25162 0 118.06149 2 110.978822 2" }, null), g("polygon", { id: "Path", points: "119.321424 0 126.25631 0 127.06618 2 119.983512 2" }, null), g("polygon", { id: "Path", points: "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2" }, null), g("polygon", { id: "Path", points: "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2" }, null), g("polygon", { id: "Path", points: "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2" }, null), g("polygon", { id: "Path", points: "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2" }, null), g("polygon", { id: "Path", points: "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2" }, null), g("polygon", { id: "Path", points: "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2" }, null), g("polygon", { id: "Path", points: "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2" }, null), g("polygon", { id: "Path", points: "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2" }, null)])]), g("g", { id: "Group-50", transform: "translate(358.186555, 20.500000) scale(-1, 1) translate(-358.186555, -20.500000) " }, [g("rect", { id: "Rectangle-6", fill: r2[0], x: "9.00468994", y: "27", width: "100.05211", height: "1" }, null), g("rect", { id: "Rectangle-6", fill: r2[0], x: "534.27827", y: "27", width: "175.091193", height: "1" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "712.871287", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("line", { x1: "0.89028833", y1: "28.2767019", x2: "9.67451272", y2: "40.7232981", id: "Line-5", stroke: r2[0], "stroke-linecap": "square", transform: "translate(5.282401, 34.500000) scale(-1, 1) translate(-5.282401, -34.500000) " }, null), g("g", { id: "Group-32", transform: "translate(15.007817, 0.000000)", fill: r2[0] }, [g("rect", { id: "Rectangle-3", opacity: "0.200000003", x: "54.0281397", y: "0", width: "12.0062533", height: "12" }, null), g("rect", { id: "Rectangle-3", opacity: "0.400000006", x: "36.0187598", y: "0", width: "12.0062533", height: "12" }, null), g("rect", { id: "Rectangle-3", opacity: "0.699999988", x: "18.0093799", y: "0", width: "12.0062533", height: "12" }, null), g("rect", { id: "Rectangle-3", x: "0", y: "0", width: "12.0062533", height: "12" }, null)]), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "112.558624", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "252.631579", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "392.704534", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("ellipse", { id: "Oval-4", stroke: r2[0], cx: "530.776446", cy: "27.5", rx: "3.50182387", ry: "3.5" }, null), g("g", { id: "Group-48", transform: "translate(182.595102, 28.000000) scale(-1, 1) translate(-182.595102, -28.000000) translate(119.062011, 27.000000)", fill: r2[0] }, [g("polygon", { id: "Path", points: "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2" }, null), g("polygon", { id: "Path", points: "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2" }, null), g("polygon", { id: "Path", points: "101.312044 0 108.24693 0 109.0568 2 101.974132 2" }, null), g("polygon", { id: "Path", points: "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2" }, null), g("polygon", { id: "Path", points: "110.316734 0 117.25162 0 118.06149 2 110.978822 2" }, null), g("polygon", { id: "Path", points: "119.321424 0 126.25631 0 127.06618 2 119.983512 2" }, null), g("polygon", { id: "Path", points: "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2" }, null), g("polygon", { id: "Path", points: "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2" }, null), g("polygon", { id: "Path", points: "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2" }, null), g("polygon", { id: "Path", points: "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2" }, null), g("polygon", { id: "Path", points: "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2" }, null), g("polygon", { id: "Path", points: "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2" }, null), g("polygon", { id: "Path", points: "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2" }, null), g("polygon", { id: "Path", points: "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2" }, null)]), g("g", { id: "Group-48", transform: "translate(322.668056, 28.000000) scale(-1, 1) translate(-322.668056, -28.000000) translate(259.134966, 27.000000)", fill: r2[0] }, [g("polygon", { id: "Path", points: "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2" }, null), g("polygon", { id: "Path", points: "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2" }, null), g("polygon", { id: "Path", points: "101.312044 0 108.24693 0 109.0568 2 101.974132 2" }, null), g("polygon", { id: "Path", points: "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2" }, null), g("polygon", { id: "Path", points: "110.316734 0 117.25162 0 118.06149 2 110.978822 2" }, null), g("polygon", { id: "Path", points: "119.321424 0 126.25631 0 127.06618 2 119.983512 2" }, null), g("polygon", { id: "Path", points: "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2" }, null), g("polygon", { id: "Path", points: "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2" }, null), g("polygon", { id: "Path", points: "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2" }, null), g("polygon", { id: "Path", points: "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2" }, null), g("polygon", { id: "Path", points: "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2" }, null), g("polygon", { id: "Path", points: "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2" }, null), g("polygon", { id: "Path", points: "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2" }, null), g("polygon", { id: "Path", points: "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2" }, null)]), g("g", { id: "Group-48", transform: "translate(461.740490, 28.000000) scale(-1, 1) translate(-461.740490, -28.000000) translate(398.207400, 27.000000)", fill: r2[0] }, [g("polygon", { id: "Path", points: "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2" }, null), g("polygon", { id: "Path", points: "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2" }, null), g("polygon", { id: "Path", points: "101.312044 0 108.24693 0 109.0568 2 101.974132 2" }, null), g("polygon", { id: "Path", points: "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2" }, null), g("polygon", { id: "Path", points: "110.316734 0 117.25162 0 118.06149 2 110.978822 2" }, null), g("polygon", { id: "Path", points: "119.321424 0 126.25631 0 127.06618 2 119.983512 2" }, null), g("polygon", { id: "Path", points: "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2" }, null), g("polygon", { id: "Path", points: "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2" }, null), g("polygon", { id: "Path", points: "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2" }, null), g("polygon", { id: "Path", points: "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2" }, null), g("polygon", { id: "Path", points: "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2" }, null), g("polygon", { id: "Path", points: "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2" }, null), g("polygon", { id: "Path", points: "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2" }, null), g("polygon", { id: "Path", points: "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2" }, null)])]), g("rect", { id: "Rectangle-7", fill: r2[0], x: "715.37259", y: "41", width: "448.233455", height: "1" }, null)])])])])] })] });
  };
} }), bn = ["#0077CF", "#18DBFD"], Mn = Go.svg`
  position: absolute;
  top: 0;
  left: 3px;
  width: 100%;
  height: 100%;
`("header-svg-container"), kn = e({ name: "Header4", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(bn, i2), s2 = Ve(), u2 = Ve(), c2 = Ve(), d2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("header-4"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(Mn, { width: t3, height: a3, viewBox: "0 0 1926 115", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("导航4")]), g("defs", null, [g("linearGradient", { x1: "0%", y1: "40.7068755%", x2: "100%", y2: "40.7068755%", id: s2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0.1", offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "52.4276684%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.1", offset: "100%" }, null)]), g("filter", { x: "-4.7%", y: "-800.0%", width: "109.3%", height: "1700.0%", filterUnits: "objectBoundingBox", id: u2 }, [g("feGaussianBlur", { stdDeviation: "8", in: "SourceGraphic" }, null)]), g("linearGradient", { x1: "0%", y1: "23.9123775%", x2: "100%", y2: "23.9123777%", id: c2 }, [g("stop", { "stop-color": "#3D155F", "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.5", offset: "18.4481151%" }, null), g("stop", { "stop-color": "#09192F", "stop-opacity": "0", offset: "41.5909345%" }, null), g("stop", { "stop-color": "#0A1A30", "stop-opacity": "0", offset: "58.4079639%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.498000779", offset: "82.3247755%" }, null), g("stop", { "stop-color": "#21538C", "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "0%", y1: "49.9692469%", x2: "100%", y2: "49.9668157%", id: d2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "49.8770032%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "100%" }, null)]), g("polygon", { id: "path-5", points: "-1.04906857e-11 29.5076923 674.073225 28 714.039798 73.2307692 1168.75383 73.2307692 1209.47449 28 1902.01873 29.5076923 1902.01873 31.7692308 1209.47449 31.7692308 1168.75383 77 714.039798 77 674.073225 31.7692308 -1.04906857e-11 31.7692308" }, null), g("filter", { x: "-0.5%", y: "-24.5%", width: "101.1%", height: "140.8%", filterUnits: "objectBoundingBox", id: "filter-6" }, [g("feOffset", { dx: "0", dy: "-2", in: "SourceAlpha", result: "shadowOffsetOuter1" }, null), g("feGaussianBlur", { stdDeviation: "3", in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }, null), g("feColorMatrix", { values: "0 0 0 0 0.0392156863   0 0 0 0 0.0823529412   0 0 0 0 0.247058824  0 0 0 1 0", type: "matrix", in: "shadowBlurOuter1" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "4-大屏-头部素材", transform: "translate(0.000000, -748.000000)" }, [g("g", { id: "导航4", transform: "translate(0.000000, 748.000000)" }, [g("g", { id: "分组-5", transform: "translate(0.000000, 40.000000)", "fill-rule": "nonzero" }, [g("g", { id: "分组" }, [g("polyline", { id: "矩形-copy-19", stroke: r2[0], transform: "translate(329.959066, 12.000000) scale(-1, 1) translate(-329.959066, -12.000000) ", points: "656.843979 3 638.399062 21 265.401857 21 246.956941 3 3.07415279 3" }, null), g("ellipse", { id: "椭圆形", fill: r2[0], cx: "3.07415279", cy: "3", rx: "3.07415279", ry: "3" }, null), g("rect", { id: "矩形-copy-36", fill: r2[0], transform: "translate(450.363383, 4.500000) scale(-1, 1) translate(-450.363383, -4.500000) ", x: "426.28252", y: "3", width: "48.161727", height: "3" }, null), g("rect", { id: "矩形-copy-38", fill: r2[0], transform: "translate(208.017672, 22.500000) scale(-1, 1) translate(-208.017672, -22.500000) ", x: "21.5190695", y: "21", width: "372.997205", height: "3" }, null)]), g("path", { d: "M668.056129,14.5 L663.786473,19.5 L640.50824,19.5 L644.777897,14.5 L668.056129,14.5 Z", id: "矩形-copy-22", stroke: r2[1], "fill-opacity": "0.6", fill: r2[1], transform: "translate(654.282185, 17.000000) scale(-1, 1) translate(-654.282185, -17.000000) " }, null), g("path", { d: "M591.465593,14.5 L614.627017,14.5 L609.503429,19.5 L586.342005,19.5 L591.465593,14.5 Z", id: "矩形-copy-40", "stroke-opacity": "0.3", stroke: r2[1], "fill-opacity": "0.2", fill: r2[1], transform: "translate(600.484511, 17.000000) scale(-1, 1) translate(-600.484511, -17.000000) " }, null), g("path", { d: "M618.135239,14.5 L641.413472,14.5 L637.143815,19.5 L613.865583,19.5 L618.135239,14.5 Z", id: "矩形-copy-39", "stroke-opacity": "0.4", stroke: r2[1], "fill-opacity": "0.3", fill: r2[1], transform: "translate(627.639527, 17.000000) scale(-1, 1) translate(-627.639527, -17.000000) " }, null), g("path", { d: "M587.98436,14.5 L582.860772,19.5 L559.699347,19.5 L564.822935,14.5 L587.98436,14.5 Z", id: "矩形-copy-41", "stroke-opacity": "0.2", stroke: r2[1], "fill-opacity": "0.1", fill: r2[1], transform: "translate(573.841853, 17.000000) scale(-1, 1) translate(-573.841853, -17.000000) " }, null)]), g("g", { id: "分组-5-copy-2", transform: "translate(1583.350676, 52.000000) scale(-1, 1) translate(-1583.350676, -52.000000) translate(1248.699272, 40.000000)", "fill-rule": "nonzero" }, [g("g", { id: "分组" }, [g("polyline", { id: "矩形-copy-19", stroke: r2[0], transform: "translate(329.959066, 12.000000) scale(-1, 1) translate(-329.959066, -12.000000) ", points: "656.843979 3 638.399062 21 265.401857 21 246.956941 3 3.07415279 3" }, null), g("ellipse", { id: "椭圆形", fill: r2[0], cx: "3.07415279", cy: "3", rx: "3.07415279", ry: "3" }, null), g("rect", { id: "矩形-copy-36", fill: r2[0], transform: "translate(450.363383, 4.500000) scale(-1, 1) translate(-450.363383, -4.500000) ", x: "426.28252", y: "3", width: "48.161727", height: "3" }, null), g("rect", { id: "矩形-copy-38", fill: r2[0], transform: "translate(208.017672, 22.500000) scale(-1, 1) translate(-208.017672, -22.500000) ", x: "21.5190695", y: "21", width: "372.997205", height: "3" }, null)]), g("path", { d: "M668.056129,14.5 L663.786473,19.5 L640.50824,19.5 L644.777897,14.5 L668.056129,14.5 Z", id: "矩形-copy-22", stroke: r2[1], "fill-opacity": "0.6", fill: r2[1], transform: "translate(654.282185, 17.000000) scale(-1, 1) translate(-654.282185, -17.000000) " }, null), g("path", { d: "M614.770814,14.5 L610.501158,19.5 L587.222925,19.5 L591.492582,14.5 L614.770814,14.5 Z", id: "矩形-copy-40", "stroke-opacity": "0.3", stroke: r2[1], "fill-opacity": "0.2", fill: r2[1], transform: "translate(600.996870, 17.000000) scale(-1, 1) translate(-600.996870, -17.000000) " }, null), g("path", { d: "M618.135239,14.5 L641.413472,14.5 L637.143815,19.5 L613.865583,19.5 L618.135239,14.5 Z", id: "矩形-copy-39", "stroke-opacity": "0.4", stroke: r2[1], "fill-opacity": "0.3", fill: r2[1], transform: "translate(627.639527, 17.000000) scale(-1, 1) translate(-627.639527, -17.000000) " }, null), g("path", { d: "M588.128157,14.5 L583.8585,19.5 L560.580268,19.5 L564.849924,14.5 L588.128157,14.5 Z", id: "矩形-copy-41", "stroke-opacity": "0.2", stroke: r2[1], "fill-opacity": "0.1", fill: r2[1], transform: "translate(574.354212, 17.000000) scale(-1, 1) translate(-574.354212, -17.000000) " }, null)]), g("path", { d: "M695.263195,89.125 C786.387859,88.375 874.164917,88 958.59437,88 C1043.02382,88 1126.71823,88.375 1209.67758,89.125 L1209.67758,89.875 C1129.33078,90.625 1045.63638,91 958.59437,91 C871.55236,91 783.775302,90.625 695.263195,89.875 L695.263195,89.125 Z", id: "矩形-copy-8", fill: `url(#${s2})`, "fill-rule": "nonzero" }, null), g("path", { d: "M695.263195,89.125 C786.387859,88.375 874.164917,88 958.59437,88 C1043.02382,88 1126.71823,88.375 1209.67758,89.125 L1209.67758,89.875 C1129.33078,90.625 1045.63638,91 958.59437,91 C871.55236,91 783.775302,90.625 695.263195,89.875 L695.263195,89.125 Z", id: "矩形-copy-21", fill: `url(#${s2})`, "fill-rule": "nonzero", filter: `url(#${u2})` }, null), g("g", { id: "Group-48", transform: "translate(17.981270, 0.000000)" }, [g("polygon", { id: "Rectangle", fill: `url(#${c2})`, points: "1.15877616e-11 0 1902.01873 0 1902.01873 31.7058824 1209.47449 31.7058824 1168.75383 77 714.039798 77 674.073225 31.7058824 1.15877616e-11 31.7058824" }, null), g("g", { id: "Rectangle" }, [g("use", { fill: "black", "fill-opacity": "1", filter: "url(#filter-6)", "xlink:href": "#path-5" }, null), g("use", { fill: `url(#${d2})`, "fill-rule": "evenodd", "xlink:href": "#path-5" }, null)])])])])])] })] });
  };
} }), wn = ["#0077CF", "#18DBFD"], xn = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("header-svg-container"), Sn = e({ name: "Header5", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(wn, i2), s2 = Ve(), u2 = Ve(), c2 = Ve(), d2 = Ve(), p2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("header-5"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g(xn, { width: t3, height: a3, viewBox: "0 0 1920 75", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("导航5")]), g("defs", null, [g("linearGradient", { x1: "138.999809%", y1: "49.9577474%", x2: "0%", y2: "50.0422526%", id: s2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "138.999809%", y1: "49.957418%", x2: "0%", y2: "50.042582%", id: u2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "138.999809%", y1: "49.9515511%", x2: "0%", y2: "50.0484489%", id: c2 }, [g("stop", { "stop-color": r2[0], offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "50.725168%", y1: "-15.5691964%", x2: "50.7251663%", y2: "112.072173%", id: d2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.40967992", offset: "100%" }, null)]), g("linearGradient", { x1: "50.725168%", y1: "-15.5691964%", x2: "50.7251663%", y2: "112.072173%", id: p2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.698733883", offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "导航5", transform: "translate(0.000000, -106.000000)" }, [g("g", { transform: "translate(0.000000, 106.000000)" }, [g("rect", { id: "Rectangle", "fill-opacity": "0.599628155", fill: r2[0], opacity: "0.291104271", x: "0", y: "0", width: "1920", height: "75" }, null), g("polyline", { id: "Path-16", stroke: `url(#${s2})`, "stroke-width": "2", opacity: "0.800000012", points: "556 2 542.601667 17 40 17" }, null), g("polyline", { id: "Path-16", stroke: `url(#${s2})`, "stroke-width": "2", opacity: "0.800000012", transform: "translate(298.000000, 51.500000) scale(1, -1) translate(-298.000000, -51.500000) ", points: "556 44 542.601667 59 40 59" }, null), g("polyline", { id: "Path-16", stroke: `url(#${u2})`, "stroke-width": "2", opacity: "0.800000012", transform: "translate(1623.000000, 9.500000) scale(-1, 1) translate(-1623.000000, -9.500000) ", points: "1880 2 1869.27025 17 1366 17" }, null), g("polyline", { id: "Path-16", stroke: `url(#${c2})`, "stroke-width": "2", opacity: "0.800000012", transform: "translate(1623.000000, 52.000000) scale(-1, -1) translate(-1623.000000, -52.000000) ", points: "1880 44 1869.27025 60 1366 60" }, null), g("g", { id: "Group-12", transform: "translate(553.000000, 9.000000)", stroke: r2[0] }, [g("path", { d: "M801.356743,1 L815.854141,19.5667453 L789.64346,62 L30.0945974,62 L1.268531,18.3431704 L17.4520298,1 L801.356743,1 Z", id: "Rectangle-8", "stroke-width": "2", fill: `url(#${d2})` }, null), g("path", { d: "M800.266678,6.1 L810.263626,18.9140796 L786.760668,57.1 L31.5783752,57.1 L7.22194802,18.9352828 L18.9985371,6.1 L800.266678,6.1 Z", id: "Rectangle-8", fill: `url(#${p2})` }, null)])])])])] })] });
  };
} }), _n = ["#0077CF", "#18DBFD"], $n = Go.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("header-svg-container"), Ln = e({ name: "Header6", props: Po(), setup(e2, { expose: t2 }) {
  const { autoBindRef: o2, refreshLayoutSize: a2, domSize: l2 } = Fo();
  return t2({ refreshLayoutSize: a2 }), () => {
    const { width: t3, height: a3 } = l2, { backgroundColor: n2, color: i2 } = e2, r2 = Ho(_n, i2), s2 = Ve(), u2 = Ve(), c2 = Ve(), d2 = Ve();
    return g(Uo, { class: Go.getClassNameForBind("header-6"), ref: o2, style: { backgroundColor: n2 } }, { default: () => [g($n, { width: t3, height: a3, viewBox: "0 0 1921 81", preserveAspectRatio: "none slice" }, { default: () => [g("title", null, [x("导航6")]), g("defs", null, [g("linearGradient", { x1: "50%", y1: "29.259886%", x2: "50%", y2: "99.2494319%", id: s2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.670017483", offset: "100%" }, null)]), g("linearGradient", { x1: "4.57100977%", y1: "49.9195778%", x2: "93.9923966%", y2: "50.361681%", id: u2 }, [g("stop", { "stop-color": "#FFFFFF", "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.726246472", offset: "34.798361%" }, null), g("stop", { "stop-color": r2[1], offset: "37.511574%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.838734845", offset: "39.7880654%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.897232309", offset: "43.7657739%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.916087117", offset: "45.0478624%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.933958599", offset: "46.2630868%" }, null), g("stop", { "stop-color": r2[1], offset: "50.7537676%" }, null), g("stop", { "stop-color": r2[1], offset: "57.2330882%" }, null), g("stop", { "stop-color": r2[1], offset: "61.1067878%" }, null), g("stop", { "stop-color": "#FFFFFF", "stop-opacity": "0", offset: "100%" }, null)]), g("linearGradient", { x1: "1.5161537%", y1: "50%", x2: "97.0753752%", y2: "50%", id: c2 }, [g("stop", { "stop-color": r2[0], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[0], "stop-opacity": "0.67930507", offset: "100%" }, null)]), g("linearGradient", { x1: "50%", y1: "100%", x2: "50%", y2: "1.62320524%", id: d2 }, [g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "0%" }, null), g("stop", { "stop-color": r2[1], offset: "31.1945735%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0.848721591", offset: "70.6265836%" }, null), g("stop", { "stop-color": r2[1], "stop-opacity": "0", offset: "100%" }, null)])]), g("g", { id: "8-19", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [g("g", { id: "导航6", transform: "translate(1.000000, -1732.000000)" }, [g("g", { transform: "translate(0.000000, 1733.000000)" }, [g("path", { d: "M1920,9.21007293e-13 L1920,30.9514328 L1249.23346,30.9516462 C1229.62106,30.9646394 1212.0646,31.6123111 1195.24825,43.9783002 L1195.24825,43.9783002 L1172.28545,62.27533 C1157.7941,73.3528432 1146.99441,75.9115356 1127.47241,76.0105489 L1127.47241,76.0105489 L969.056289,76.814 L969.056604,76.9620253 L954.460289,76.888 L939.874214,76.9620253 L939.873289,76.814 L781.339362,76.0105489 C761.804976,75.9115356 750.998428,73.3528432 736.497892,62.27533 L713.520511,43.9783002 C696.693493,31.6123111 679.125893,30.9646394 659.501052,30.9516462 L1.00628931,30.9514328 L1.00628931,9.21007293e-13 L1920,9.21007293e-13 Z", id: "头-蓝边", opacity: "0.7" }, null), g("path", { d: "M1920,9.21007293e-13 L1920,30.9514328 L1249.23346,30.9516462 C1229.62106,30.9646394 1212.0646,31.6123111 1195.24825,43.9783002 L1195.24825,43.9783002 L1172.28545,62.27533 C1157.7941,73.3528432 1146.99441,75.9115356 1127.47241,76.0105489 L1127.47241,76.0105489 L969.056289,76.814 L969.056604,76.9620253 L954.460289,76.888 L939.874214,76.9620253 L939.873289,76.814 L781.339362,76.0105489 C761.804976,75.9115356 750.998428,73.3528432 736.497892,62.27533 L713.520511,43.9783002 C696.693493,31.6123111 679.125893,30.9646394 659.501052,30.9516462 L1.00628931,30.9514328 L1.00628931,9.21007293e-13 L1920,9.21007293e-13 Z", id: "头-蓝边", fill: `url(#${s2})`, opacity: "0.7" }, null), g("path", { d: "M1918.99371,9.21007293e-13 L1918.99371,30.9514328 L1248.22717,30.9516462 C1228.61477,30.9646394 1211.05831,31.6123111 1194.24197,43.9783002 L1194.24197,43.9783002 L1171.27916,62.27533 C1156.78782,73.3528432 1145.98812,75.9115356 1126.46612,76.0105489 L1126.46612,76.0105489 L968.05,76.814 L968.050314,76.9620253 L953.454,76.888 L938.867925,76.9620253 L938.867,76.814 L780.333073,76.0105489 C760.798686,75.9115356 749.992139,73.3528432 735.491603,62.27533 L712.514222,43.9783002 C695.687203,31.6123111 678.119603,30.9646394 658.494763,30.9516462 L0,30.9514328 L0,9.21007293e-13 L1918.99371,9.21007293e-13 Z", id: "头-金属边", stroke: `url(#${u2})`, "stroke-width": "2", opacity: "0.7", "stroke-linecap": "round", "stroke-linejoin": "round" }, null), g("g", { id: "一级菜单备份-4", transform: "translate(428.679245, 16.202532)", fill: `url(#${c2})`, "fill-opacity": "0.4", stroke: `url(#${d2})` }, [g("path", { d: "M323.403583,0.572106634 C314.323188,3.31538881 305.94832,7.10321831 299.050264,12.3202049 L299.050264,12.3202049 L298.421092,12.8031984 L267.69065,38.4371861 C249.573125,54.0317123 235.863162,58.9090024 211.67108,59.1416323 L211.67108,59.1416323 L210.933951,59.1472838 L72.8532487,59.2474551 C53.5703517,59.0853612 32.9026428,58.9051122 10.8501271,58.7067081 L10.583,58.704 L10.8664919,58.650915 C15.1565562,57.8141649 19.1754676,56.6523926 22.9563015,55.231074 L23.7628482,54.922557 C32.5225158,52.367745 40.4846039,48.1068034 49.5416028,41.1949319 L49.5416028,41.1949319 L50.2459755,40.6536215 L79.3620108,17.1837703 L79.992253,16.7195607 C101.061221,1.35584379 123.070658,0.587718188 147.621298,0.573255239 L147.621298,0.573255239 Z", id: "形状结合", transform: "translate(163.488626, 29.910100) scale(1, -1) translate(-163.488626, -29.910100) " }, null), g("path", { d: "M1047.93188,0.572106634 C1038.85149,3.31538881 1030.47662,7.10321831 1023.57857,12.3202049 L1023.57857,12.3202049 L1022.94939,12.8031984 L992.218952,38.4371861 C974.101427,54.0317123 960.391464,58.9090024 936.199382,59.1416323 L936.199382,59.1416323 L935.462253,59.1472838 L797.381551,59.2474551 C778.098654,59.0853612 757.430945,58.9051122 735.378429,58.7067081 L735.111,58.704 L735.394794,58.650915 C739.684858,57.8141649 743.703769,56.6523926 747.484603,55.231074 L748.29115,54.922557 C757.050818,52.367745 765.012906,48.1068034 774.069905,41.1949319 L774.069905,41.1949319 L774.774277,40.6536215 L803.890313,17.1837703 L804.520555,16.7195607 C825.589523,1.35584379 847.59896,0.587718188 872.1496,0.573255239 L872.1496,0.573255239 Z", id: "形状结合备份-4", transform: "translate(888.016928, 29.910100) scale(-1, -1) translate(-888.016928, -29.910100) " }, null)]), g("g", { id: "一级菜单备份-7", transform: "translate(1132.075472, 38.481013)" }, null)])])])] })] });
  };
} }), Dn = ["onClick", "onMouseenter", "onMouseleave"], In = e({ name: "ScrollTable", __name: "index", props: { theme: { type: String, default: "dark" }, config: { type: Object, default: () => ({}) } }, emits: ["rowClick", "mouseover", "mouseleave"], setup(e2, { expose: t2, emit: n2 }) {
  const c2 = e2, d2 = n2, p2 = o("scrollTableRef"), h2 = a(() => {
    var _a2;
    return (_a2 = c2.config) == null ? void 0 : _a2.showHeader;
  }), g2 = { showHeader: true, header: [], data: [], rowNum: 5, headerBGC: "#303030", oddRowBGC: "#141414", evenRowBGC: "#1D1D1D", waitTime: 1500, headerHeight: 35, columnWidth: [], align: [], index: false, indexHeader: "", carousel: "single", hoverPause: true }, C2 = m(g2), b2 = m([]);
  let M2 = [];
  const k2 = m([]), w2 = m([]), $2 = m([]);
  let L2 = 0;
  const D2 = m([]);
  let I2, T2 = 0, N2 = 0, B2 = false;
  const R2 = m(0), q2 = m(0), A2 = "#303030", O2 = "#141414", j2 = "#1D1D1D", z2 = "#F0F0F0", E2 = "#FFFFFF", F2 = "#FAFAFA";
  function P2() {
    var _a2, _b;
    q2.value = ((_a2 = p2.value) == null ? void 0 : _a2.clientWidth) || 0, R2.value = ((_b = p2.value) == null ? void 0 : _b.clientHeight) || 0, V2(), W2(true);
  }
  function H2() {
    N2 = (N2 + 1) % 999999, I2 && clearTimeout(I2);
  }
  function Q2() {
    G2(), function() {
      const { header: e3, index: t3, indexHeader: o2 } = C2.value;
      if (0 === e3.length) return void (b2.value = []);
      t3 && e3.unshift(o2);
      b2.value = e3;
    }(), U2(), V2(), W2(), Y2(), K2(true);
  }
  function G2() {
    C2.value = qe({ ...g2, ...c2.config });
  }
  function U2() {
    let { data: e3, index: t3, rowNum: o2 } = C2.value;
    t3 && (e3 = e3.map((e4, t4) => {
      const o3 = `${t4 + 1}`;
      return (e4 = [...e4]).unshift(o3), e4;
    })), e3 = e3.map((e4, t4) => ({ ceils: e4, rowIndex: t4 }));
    const a2 = e3.length;
    a2 > o2 && a2 < 2 * o2 && (e3 = [...e3, ...e3]), e3 = e3.map((e4, t4) => ({ ...e4, scroll: t4 })), M2 = e3, k2.value = e3;
  }
  function V2() {
    const { columnWidth: e3, header: t3 } = C2.value;
    let o2 = 0, a2 = 0;
    e3.forEach((e4) => {
      e4 && a2++, o2 += e4;
    });
    let l2 = 0;
    M2[0] ? l2 = M2[0].ceils.length : t3.length > 0 && (l2 = t3.length);
    const n3 = (q2.value - o2) / (l2 - a2), i2 = [];
    for (let t4 = 0; t4 < l2; t4++) e3[t4] ? i2.push(e3[t4]) : i2.push(n3);
    w2.value = i2;
  }
  function W2(e3 = false) {
    const { headerHeight: t3, rowNum: o2, data: a2 } = C2.value;
    let l2 = R2.value;
    h2.value && b2.value.length > 0 && (l2 -= t3);
    const n3 = l2 / o2;
    L2 = n3, e3 || ($2.value = Array.from({ length: a2.length }).fill(n3));
  }
  function Y2() {
    const e3 = [], { align: t3 } = C2.value;
    for (let o2 = 0; o2 < b2.value.length; o2++) t3[o2] ? e3.push(t3[o2]) : e3.push("center");
    D2.value = e3;
  }
  function Z2(e3, t3, o2, a2) {
    const { ceils: l2, rowIndex: n3 } = o2;
    d2(e3, { row: l2, ceil: a2, rowIndex: n3, columnIndex: t3 });
  }
  async function K2(e3 = false) {
    B2 && (U2(), W2(), B2 = false);
    const t3 = N2;
    let o2 = T2;
    const { waitTime: a2, carousel: l2, rowNum: n3 } = C2.value, i2 = M2.length;
    if (n3 >= i2) return;
    if (e3 && (await new Promise((e4) => setTimeout(e4, a2)), t3 !== N2)) return;
    const r2 = "single" === l2 ? 1 : n3, s2 = M2.slice(o2);
    if (s2.push(...M2.slice(0, o2)), k2.value = s2.slice(0, "page" === l2 ? 2 * n3 : n3 + 1), $2.value = Array.from({ length: i2 }).fill(L2), await new Promise((e4) => setTimeout(e4, 300)), t3 !== N2) return;
    $2.value.splice(0, r2, ...Array.from({ length: r2 }).fill(0)), o2 += r2;
    const u2 = o2 - i2;
    u2 >= 0 && (o2 = u2), T2 = o2, I2 = setTimeout(K2, a2 - 300);
  }
  return l(() => c2.config, () => {
    H2(), T2 = 0, Q2();
  }), l(() => {
    var _a2;
    return (_a2 = c2.config) == null ? void 0 : _a2.columnWidth;
  }, He(() => {
    G2(), V2();
  }, 100), { deep: true }), l(() => {
    var _a2;
    return (_a2 = c2.config) == null ? void 0 : _a2.align;
  }, () => {
    G2(), Y2();
  }, { deep: true }), l(() => c2.theme, (e3) => {
    e3 === Ge.DARK ? (C2.value.headerBGC === z2 && (C2.value.headerBGC = A2), C2.value.oddRowBGC === E2 && (C2.value.oddRowBGC = O2), C2.value.evenRowBGC === F2 && (C2.value.evenRowBGC = j2)) : (C2.value.headerBGC === A2 && (C2.value.headerBGC = z2), C2.value.oddRowBGC === O2 && (C2.value.oddRowBGC = E2), C2.value.evenRowBGC === j2 && (C2.value.evenRowBGC = F2));
  }, { immediate: true }), i(() => {
    var _a2, _b;
    q2.value = ((_a2 = p2.value) == null ? void 0 : _a2.clientWidth) || 0, R2.value = ((_b = p2.value) == null ? void 0 : _b.clientHeight) || 0, Q2(), window.addEventListener("resize", P2);
  }), _(() => {
    H2(), window.removeEventListener("resize", P2);
  }), t2({ resize: P2, updateRows: function(e3, t3) {
    C2.value = { ...C2.value, data: [...e3] }, B2 = true, T2 = t3, I2 || K2(true);
  } }), (e3, t3) => (s(), r("div", { class: "dv-scroll-board", ref_key: "scrollTableRef", ref: p2 }, [h2.value ? (s(), r("div", { key: 0, class: "header", style: u(`background: ${C2.value.headerBGC};`) }, [(s(true), r(y, null, v(b2.value, (e4, t4) => (s(), r("div", { class: "header-item", key: `${e4}${t4}`, style: u(`
          height: ${C2.value.headerHeight}px;
          line-height: ${C2.value.headerHeight}px;
          width: ${w2.value[t4]}px;
          text-align: ${D2.value[t4]};
        `) }, S(e4), 5))), 128))], 4)) : f("", true), C2.value ? (s(), r("div", { key: 1, class: "rows", style: u(`height: ${R2.value - (h2.value ? C2.value.headerHeight : 0)}px;
      ${h2.value ? "" : "border-top-left-radius: 8px;border-top-right-radius: 8px;"}`) }, [(s(true), r(y, null, v(k2.value, (e4, t4) => (s(), r("div", { class: "row-item", key: `${e4.toString()}${e4.scroll}`, style: u(`
          height: ${$2.value[t4]}px;
          line-height: ${$2.value[t4]}px;
          background: ${C2.value[e4.rowIndex % 2 == 0 ? "oddRowBGC" : "evenRowBGC"]};
        `) }, [(s(true), r(y, null, v(e4.ceils, (o2, a2) => (s(), r("div", { class: "ceil", key: `${o2}${t4}${a2}`, style: u(`width: ${w2.value[a2]}px; text-align: ${D2.value[a2]}`), onClick: (t5) => Z2("rowClick", a2, e4, o2), onMouseenter: (t5) => function(e5, t6, o3) {
    Z2("mouseover", e5, t6, o3), C2.value.hoverPause && H2();
  }(a2, e4, o2), onMouseleave: (t5) => function(e5, t6, o3) {
    Z2("mouseleave", e5, t6, o3), C2.value.hoverPause && K2(true);
  }(a2, e4, o2) }, [C2.value.index && 0 === a2 ? (s(), r("span", { key: 0, class: "index", style: u(`background: ${C2.value.headerBGC};`) }, S(o2), 5)) : (s(), r(y, { key: 1 }, [x(S(o2), 1)], 64))], 44, Dn))), 128))], 4))), 128))], 4)) : f("", true)], 512));
} }), Tn = eo(In, [["__scopeId", "data-v-4f0b446b"]]), Nn = ["onClick"], Bn = eo(e({ __name: "MacButton", props: { size: { type: String, default: () => "default" }, disabled: { request: false, type: Boolean, default: false }, hidden: { request: false, type: Array, default: () => [] }, narrow: { request: false, type: Boolean, default: false } }, emits: ["close", "remove", "resize", "fullResize"], setup(e2, { emit: t2 }) {
  const o2 = e2, l2 = t2, { prefixCls: n2 } = xe("mac-btn"), i2 = a(() => p2.filter((e3) => !o2.hidden.includes(e3.key))), u2 = a(() => o2.narrow), p2 = [{ title: "关闭", key: "close", icon: "ant-design:close-outlined" }, { title: "缩小", key: "remove", icon: "ant-design:shrink-outlined" }, { title: u2.value ? "缩小" : "放大", key: o2.narrow ? "fullResize" : "resize", icon: u2.value ? "ant-design:shrink-outlined" : "ant-design:arrows-alt-outlined" }];
  return (t3, o3) => (s(), r("div", { class: c(d(n2)) }, [(s(true), r(y, null, v(i2.value, (t4) => (s(), r("div", { key: t4.key, class: c(["btn", [t4.key, e2.disabled && "disabled", e2.size]]), onClick: k((e3) => {
    return o4 = t4.key, void l2(o4);
    var o4;
  }, ["stop"]) }, [g(d(Be), { icon: t4.icon, size: "10", class: c(["icon-base", { hover: !e2.disabled }]) }, null, 8, ["icon", "class"])], 10, Nn))), 128))], 2));
} }), [["__scopeId", "data-v-5c20d434"]]), Rn = e({ name: "ScreenCheckbox", __name: "index", props: { title: { type: String }, tooltip: { type: String } }, setup: (e2) => (t2, o2) => (s(), r("div", null, [g(d(W), D(I(t2.$attrs)), { default: M(() => [x(S(e2.title), 1)]), _: 1 }, 16), e2.tooltip ? (s(), h(d(G), { key: 0, title: e2.tooltip }, { default: M(() => [g(d(Be), { icon: "ant-design:exclamation-circle-outlined" })]), _: 1 }, 8, ["title"])) : f("", true)])) }), qn = { key: 0, class: "prefix" }, An = { key: 3 }, On = eo(e({ name: "ScreenInput", __name: "index", props: { isNumber: { type: Boolean, default: true }, prefix: { type: String }, suffix: { type: String } }, emits: ["change"], setup(e2, { emit: o2 }) {
  t((e3) => ({ "236dc44e": u2.value }));
  const l2 = o2, { prefixCls: n2 } = xe("screen-input"), { token: i2 } = P.useToken(), u2 = a(() => i2.value.colorBorder);
  return (t2, o3) => (s(), r("div", { class: c(d(n2)) }, [e2.prefix ? (s(), r("div", qn, S(e2.prefix), 1)) : f("", true), e2.isNumber ? (s(), h(d(Q), $({ key: 1, class: "input" }, t2.$attrs, { onChange: o3[0] || (o3[0] = (e3) => l2("change", e3)), bordered: false, controls: false }), null, 16)) : (s(), h(d(H), $({ key: 2, class: "input" }, t2.$attrs, { bordered: false, onChange: o3[1] || (o3[1] = (e3) => l2("change", e3)) }), null, 16)), e2.suffix ? (s(), r("div", An, S(e2.suffix), 1)) : f("", true)], 2));
} }), [["__scopeId", "data-v-00593fb6"]]), jn = ({ CtrlShiftKeysEnum: e2, CtrlKeysEnum: t2, ShiftKeysEnum: o2, KeysEnum: a2 }) => {
  const l2 = (e3, t3) => {
    if (!t3) return;
    const o3 = t3[1 === e3.key.length ? e3.key.toLowerCase() : e3.key];
    o3 && We(o3) && (e3.preventDefault(), e3.stopPropagation(), o3());
  }, { prefixCls: n2 } = xe("chart-contain");
  function i2(e3) {
    var _a2;
    return !!((_a2 = e3.className) == null ? void 0 : _a2.startsWith(`${n2} active`)) || !!e3.parentNode && i2(e3.parentNode);
  }
  const r2 = (n3) => {
    (n3.target === document.body || i2(n3.target)) && (n3.ctrlKey && n3.shiftKey ? l2(n3, e2) : n3.ctrlKey ? l2(n3, t2) : n3.shiftKey ? l2(n3, o2) : l2(n3, a2));
  };
  globalThis.addEventListener("keydown", r2);
  return { removeGlobalKeyboard: () => {
    globalThis.removeEventListener("keydown", r2);
  } };
};
class zn {
  constructor(e2, t2) {
    __publicField(this, "undoStack");
    __publicField(this, "redoStack");
    __publicField(this, "data");
    __publicField(this, "size", 100);
    this.undoStack = [], this.redoStack = [], e2 && (this.size = e2), t2 && (this.data = qe(t2));
  }
  setData(e2) {
    this.data && (this.undoStack.push(this.data), this.undoStack.length === this.size && this.undoStack.splice(0, 1)), this.data = qe(e2), this.redoStack = [];
  }
  undo() {
    if (0 !== this.undoStack.length && this.data) return this.redoStack.push(this.data), this.data = this.undoStack.pop(), this.applyData(this.data), this.getCurrentData();
  }
  redo() {
    if (0 !== this.redoStack.length && this.data) return this.undoStack.push(this.data), this.data = this.redoStack.pop(), this.applyData(this.data), this.getCurrentData();
  }
  applyData(e2) {
  }
  getCurrentData() {
    return qe(this.data);
  }
}
const En = eo(e({ __name: "TextFontStyle", props: { bold: { type: Boolean, default: false }, italic: { type: Boolean, default: false }, strikethrough: { type: Boolean, default: false }, underline: { type: Boolean, default: false }, hide: { type: Array, default: () => [] } }, emits: ["fontStyleChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, i2 = n({ [Jn.Bold]: { name: "加粗", icon: "carbon:text-bold", value: false }, [Jn.Italic]: { name: "斜体", icon: "carbon:text-italic", value: false }, [Jn.Underline]: { name: "下划线", icon: "carbon:text-underline", value: false }, [Jn.Strikethrough]: { name: "删除线", icon: "carbon:text-strikethrough", value: false } }), u2 = (e3) => !o2.hide.includes(e3);
  l([() => o2.bold, () => o2.italic, () => o2.strikethrough, () => o2.underline], ([e3, t3, o3, a3]) => {
    i2.bold.value = e3, i2.italic.value = t3, i2.strikethrough.value = o3, i2.underline.value = a3;
  }, { immediate: true, deep: true });
  const { prefixCls: p2 } = xe("font-style");
  return (e3, t3) => (s(), r("div", { class: c(d(p2)) }, [(s(true), r(y, null, v(Object.keys(i2), (e4) => (s(), r(y, { key: e4 }, [u2(e4) ? (s(), h(d(G), { key: 0, placement: "bottom", title: `${i2[e4].value ? "关闭" : "打开"}${i2[e4].name}` }, { default: M(() => [g(d(Y), { class: "radio-button", checked: i2[e4].value, onMousedown: (t4) => function(e5) {
    if (e5) {
      i2[e5].value = !i2[e5].value, i2[e5].value && (e5 === Jn.Underline && (i2[Jn.Strikethrough].value = false), e5 === Jn.Strikethrough && (i2[Jn.Underline].value = false));
      const t5 = {};
      Object.keys(i2).forEach((e6) => {
        t5[e6] = i2[e6].value;
      }), a2("fontStyleChange", t5);
    }
  }(e4) }, { default: M(() => [g(d(Be), { icon: i2[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["checked", "onMousedown"])]), _: 2 }, 1032, ["title"])) : f("", true)], 64))), 128))], 2));
} }), [["__scopeId", "data-v-3b6dd2cf"]]), Fn = eo(e({ __name: "TextHAlignStyle", props: { alignType: { type: String, default: void 0 } }, emits: ["alignChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, i2 = m();
  l(() => o2.alignType, (e3) => {
    i2.value = e3;
  }, { immediate: true });
  const { prefixCls: u2 } = xe("h-align-style"), p2 = n({ [Kn.Left]: { name: "水平居左", icon: "carbon:text-align-left", description: "文字水平居左" }, [Kn.Center]: { name: "水平居中", icon: "carbon:text-align-center", description: "文字水平居中" }, [Kn.Right]: { name: "水平居右", icon: "carbon:text-align-right", description: "文字水平居右" } });
  function f2(e3) {
    const t3 = e3.target.value;
    a2("alignChange", t3);
  }
  return (e3, t3) => (s(), r("div", { class: c(d(u2)) }, [g(d(Z), { value: i2.value, "onUpdate:value": t3[0] || (t3[0] = (e4) => i2.value = e4), onChange: f2 }, { default: M(() => [(s(true), r(y, null, v(Object.keys(p2), (e4) => (s(), h(d(G), { key: e4, placement: "top", title: p2[e4].description }, { default: M(() => [g(d(Y), { class: "radio-button", value: e4 }, { default: M(() => [g(d(Be), { icon: p2[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 }, 8, ["value"])], 2));
} }), [["__scopeId", "data-v-63ee2427"]]), Pn = eo(e({ __name: "TextVAlignStyle", props: { alignType: { type: String, default: void 0 } }, emits: ["alignChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, i2 = m();
  l(() => o2.alignType, (e3) => {
    i2.value = e3;
  }, { immediate: true });
  const { prefixCls: u2 } = xe("v-align-style"), p2 = n({ [Xn.Top]: { name: "垂直居上", icon: "carbon:align-vertical-top", description: "文字垂直居上" }, [Xn.Center]: { name: "垂直居中", icon: "carbon:align-vertical-center", description: "文字垂直居中" }, [Xn.Bottom]: { name: "垂直居下", icon: "carbon:align-vertical-bottom", description: "文字垂直居下" } });
  function f2(e3) {
    const t3 = e3.target.value;
    a2("alignChange", t3);
  }
  return (e3, t3) => (s(), r("div", { class: c(d(u2)) }, [g(d(Z), { value: i2.value, "onUpdate:value": t3[0] || (t3[0] = (e4) => i2.value = e4), onChange: f2 }, { default: M(() => [(s(true), r(y, null, v(Object.keys(p2), (e4) => (s(), h(d(G), { key: e4, placement: "top", title: p2[e4].description }, { default: M(() => [g(d(Y), { class: "radio-button", value: e4 }, { default: M(() => [g(d(Be), { icon: p2[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 }, 8, ["value"])], 2));
} }), [["__scopeId", "data-v-a40ac773"]]), Hn = { class: "line" }, Qn = { class: "input" }, Gn = { class: "line" }, Un = { style: { flex: "1" } }, Vn = { key: 0, class: "line" }, Wn = e({ name: "TextStyle", __name: "index", props: { verticalAlign: { type: Boolean, default: false }, textStyle: { type: Object, default: () => {
} }, hideAlign: { type: Boolean, default: false }, hideFontStyle: { type: Array, default: () => [] }, colorType: { type: Number, default: 3 } }, emits: ["fontStyleChange", "hAlignChange", "vAlignChange", "fontChange", "sizeChange", "colorChange", "colorConfirm"], setup(e2, { emit: o2 }) {
  t((e3) => ({ "954d8ee2": v2.value }));
  const n2 = e2, i2 = o2, { prefixCls: u2 } = xe("text-style"), { token: y2 } = P.useToken(), v2 = a(() => y2.value.colorBorder), C2 = m(12), b2 = m(Zn[0].value), M2 = m(), k2 = m();
  function w2(e3) {
    const t2 = x2(e3);
    M2.value = e3, i2("colorConfirm", t2);
  }
  function x2(e3) {
    let t2;
    return t2 = e3 ? e3.startsWith("linear-gradient") ? { value: e3, style: { background: e3, color: "transparent", backgroundClip: "text" } } : { value: e3, style: { color: e3 } } : { value: "", style: {} }, i2("colorChange", t2), _2(k2.value, e3), t2;
  }
  function S2(e3) {
    k2.value = e3, _2(e3, M2.value);
  }
  function _2(e3, t2) {
    if (!e3) return;
    const o3 = t2 == null ? void 0 : t2.startsWith("linear-gradient"), a2 = Math.round((C2.value ?? 12) / 10), l2 = (e3 == null ? void 0 : e3.underline) && o3 ? { borderBottom: `${a2}px solid`, borderImage: `${t2} 1` } : (e3 == null ? void 0 : e3.underline) ? { borderBottom: `${a2}px solid`, borderColor: `${t2}` } : {}, n3 = e3[Jn.Bold] ? { fontWeight: "bold" } : {}, r2 = e3[Jn.Italic] ? { fontStyle: "italic" } : {};
    if (o3) {
      const e4 = t2 == null ? void 0 : t2.match(new RegExp("(?<=linear-gradient.*?)(rgba\\(.*?\\))", "g"));
      e4 && e4.length > 0 && (t2 = e4[0]);
    }
    const s2 = e3[Jn.Strikethrough] ? { textDecoration: "line-through", textDecorationColor: t2 } : {};
    i2("fontStyleChange", { value: e3, style: { ...n3, ...r2, ...l2, ...s2 } });
  }
  function L2(e3) {
    i2("hAlignChange", { value: e3, style: { justifyContent: e3 === Kn.Left ? "flex-start" : e3 === Kn.Center ? "center" : e3 === Kn.Right ? "flex-end" : "center" } });
  }
  function D2(e3) {
    i2("vAlignChange", { value: e3, style: { alignItems: e3 === Xn.Top ? "flex-start" : e3 === Xn.Center ? "center" : e3 === Xn.Bottom ? "flex-end" : "unset" } });
  }
  function I2(e3) {
    i2("fontChange", { value: e3, style: { fontFamily: e3 } });
  }
  function T2(e3) {
    e3 ? i2("sizeChange", { value: e3, style: { fontSize: `${e3}px` } }) : (C2.value = 12, i2("sizeChange", { value: 12, style: { fontSize: "12px" } })), _2(k2.value, M2.value);
  }
  return l(() => n2.textStyle, (e3) => {
    var _a2, _b, _c2, _d2;
    e3 && (C2.value = ((_a2 = n2.textStyle) == null ? void 0 : _a2.fontSize) ?? 12, b2.value = ((_b = n2.textStyle) == null ? void 0 : _b.font) ?? Zn[0].value, M2.value = (_c2 = n2.textStyle) == null ? void 0 : _c2.textColor, k2.value = (_d2 = n2.textStyle) == null ? void 0 : _d2.fontStyle);
  }, { immediate: true, deep: true }), (t2, o3) => {
    var _a2, _b;
    return s(), r("div", { class: c(d(u2)) }, [p("div", Hn, [g(d(K), { style: { flex: "1" }, value: b2.value, "onUpdate:value": o3[0] || (o3[0] = (e3) => b2.value = e3), options: d(Zn), onChange: I2 }, null, 8, ["value", "options"]), p("div", Qn, [g(d(Q), { value: C2.value, "onUpdate:value": o3[1] || (o3[1] = (e3) => C2.value = e3), bordered: false, placeholder: "大小", controls: false, min: 6, maxlength: 4, onChange: T2 }, null, 8, ["value"]), o3[2] || (o3[2] = p("div", { class: "suffix" }, "px", -1))]), e2.hideAlign ? f("", true) : (s(), h(Fn, { key: 0, "align-type": (_a2 = e2.textStyle) == null ? void 0 : _a2.hAlignType, onAlignChange: L2 }, null, 8, ["align-type"]))]), p("div", Gn, [p("div", Un, [g(d(zo), { type: e2.colorType, "direct-confirm": true, value: M2.value, onConfirmChange: w2, onInputChange: x2 }, null, 8, ["type", "value"])]), g(En, $({ hide: e2.hideFontStyle }, k2.value, { onFontStyleChange: S2 }), null, 16, ["hide"])]), e2.verticalAlign ? (s(), r("div", Vn, [g(Pn, { "align-type": (_b = e2.textStyle) == null ? void 0 : _b.vAlignType, onAlignChange: D2 }, null, 8, ["align-type"])])) : f("", true)], 2);
  };
} }), Yn = eo(Wn, [["__scopeId", "data-v-c65c80c4"]]), Zn = [{ value: "微软雅黑", label: "微软雅黑" }, { value: "宋体", label: "宋体" }, { value: "黑体", label: "黑体" }, { value: "楷体", label: "楷体" }, { value: "仿宋", label: "仿宋" }, { value: "sans-serif", label: "sans-serif" }, { value: "Arial", label: "Arial" }, { value: "PingFangSC", label: "PingFangSC" }, { value: "monospace", label: "monospace" }, { value: "Courier New", label: "Courier New" }, { value: "lcd", label: "lcd" }];
var Kn = ((e2) => (e2.Left = "left", e2.Center = "center", e2.Right = "right", e2))(Kn || {}), Xn = ((e2) => (e2.Top = "top", e2.Center = "center", e2.Bottom = "bottom", e2))(Xn || {}), Jn = ((e2) => (e2.Bold = "bold", e2.Italic = "italic", e2.Underline = "underline", e2.Strikethrough = "strikethrough", e2))(Jn || {});
function ei(e2) {
  switch (e2) {
    case "NUMBER":
      return "ant-design:field-number-outlined";
    case "DATE":
      return "ant-design:field-time-outlined";
    default:
      return "ant-design:field-string-outlined";
  }
}
var ti = ((e2) => (e2.error = "error", e2.eq = "=", e2.ne = "!=", e2.gt = ">", e2.ge = ">=", e2.lt = "<", e2.le = "<=", e2.between = "between", e2.isNull = "isNull", e2.isNotNull = "isNotNull", e2.like = "like", e2.notLike = "notLike", e2.likeLeft = "likeLeft", e2.likeRight = "likeRight", e2))(ti || {}), oi = ((e2) => (e2.count = "计数", e2.sum = "求和", e2.avg = "平均", e2.max = "最大", e2.min = "最小", e2))(oi || {}), ai = ((e2) => (e2.formula = "formula", e2.operator = "operator", e2.field = "field", e2.param = "param", e2))(ai || {});
const li = (e2) => Je.get({ url: "/nocode/apiFolder/tree", params: e2 }), ni = (e2) => Je.get({ url: "/nocode/apiFolder", params: e2 });
function ii(e2) {
  return Je.download({ url: "/nocode/apiFolder/export", params: e2 });
}
function ri(e2) {
  return Je.post({ url: "/nocode/apiFolder", params: e2 }, { successMessageMode: "message" });
}
function si(e2) {
  return Je.put({ url: "/nocode/apiFolder", params: e2 }, { successMessageMode: "message" });
}
function ui(e2) {
  return Je.put({ url: "/nocode/apiFolder/drag", params: e2 }, { successMessageMode: "message" });
}
function ci(e2) {
  return Je.delete({ url: `/nocode/apiFolder/${e2}` }, { successMessageMode: "message" });
}
const di = (e2) => Je.get({ url: "/nocode/apiParams", params: e2 });
function pi(e2) {
  return Je.download({ url: "/nocode/apiParams/export", params: e2 });
}
function fi(e2) {
  return Je.post({ url: "/nocode/apiParams", params: e2 }, { successMessageMode: "message" });
}
function hi(e2) {
  return Je.put({ url: "/nocode/apiParams", params: e2 }, { successMessageMode: "message" });
}
function gi(e2) {
  return Je.delete({ url: `/nocode/apiParams/${e2}` }, { successMessageMode: "message" });
}
const mi = (e2) => Je.get({ url: "/nocode/formulaInfo/tree", params: e2 }), yi = (e2) => Je.get({ url: `/nocode/formulaParam/${e2}` }), vi = (e2) => Je.get({ url: "/nocode/formulaInfo", params: e2 });
function Ci(e2) {
  return Je.get({ url: `/nocode/formulaInfo/${e2}` });
}
function bi(e2) {
  return Je.download({ url: "/nocode/formulaInfo/export", params: e2 });
}
function Mi(e2) {
  return Je.post({ url: "/nocode/formulaInfo", params: e2 }, { successMessageMode: "message" });
}
function ki(e2) {
  return Je.put({ url: "/nocode/formulaInfo", params: e2 }, { successMessageMode: "message" });
}
function wi(e2) {
  return Je.delete({ url: `/nocode/formulaInfo/${e2}` }, { successMessageMode: "message" });
}
function xi(e2) {
  return Je.delete({ url: "/nocode/formulaInfo/batch/" + e2 }, { successMessageMode: "message" });
}
const Si = () => "/nocode/mfApi/api", _i = (e2) => Je.get({ url: "/nocode/mfApi", params: e2 });
function $i(e2) {
  return Je.download({ url: "/nocode/mfApi/export", params: e2 });
}
function Li(e2) {
  return Je.post({ url: "/nocode/mfApi", params: e2 }, { successMessageMode: "message" });
}
function Di(e2) {
  return Je.put({ url: "/nocode/mfApi", params: e2 }, { successMessageMode: "message" });
}
function Ii(e2) {
  return Je.delete({ url: `/nocode/mfApi/${e2}` }, { successMessageMode: "message" });
}
function Ti(e2) {
  return Je.get({ url: `/nocode/mfApi/${e2}` });
}
function Ni(e2) {
  return Je.post({ url: "/nocode/mfApi/sql", params: e2 }, { errorMessageMode: "message" });
}
function Bi(e2, t2) {
  return Je.post({ url: `/nocode/mfApi/data?pageNum=${t2.pageNum}&pageSize=${t2.pageSize}`, params: e2 }, { errorMessageMode: "message" });
}
function Ri(e2, t2) {
  return Je.post({ url: `/nocode/mfApi/formulaTest?pageNum=${t2.pageNum}&pageSize=${t2.pageSize}`, params: e2 }, { errorMessageMode: "message" });
}
function qi(e2) {
  return Je.post({ url: "/nocode/mfApi/fields", params: e2 }, { errorMessageMode: "message" });
}
const Ai = (e2) => Je.get({ url: "/nocode/mfApi/headers", params: e2 });
function Oi(e2) {
  return Je.get({ url: `/nocode/mfApi/fields/${e2}` }, { errorMessageMode: "message" });
}
function ji(e2, t2, o2) {
  return Je.get({ url: `/nocode/mfApi/table/${e2}?pageNum=${t2.pageNum}&pageSize=${t2.pageSize}`, params: o2 }, { errorMessageMode: "message" });
}
function zi(e2, t2, o2) {
  return Je.get({ url: `/nocode/mfApi/api/${e2}`, params: { ...t2, ...o2 } }, { errorMessageMode: "message" });
}
function Ei(e2, t2, o2) {
  return Je.put({ url: "/nocode/mfApi/field/rename", params: { id: e2, colName: t2, newName: o2 } }, { successMessageMode: "message" });
}
const Fi = (e2) => Je.get({ url: "/nocode/mfScreen", params: e2 });
function Pi(e2, t2) {
  return Je.get({ url: `/nocode/mfScreen/${e2}`, params: { _shareToken: t2 } });
}
function Hi(e2) {
  return Je.post({ url: "/nocode/mfScreen", params: e2 }, { successMessageMode: "message" });
}
function Qi(e2) {
  return Je.put({ url: "/nocode/mfScreen", params: e2 }, { successMessageMode: "message" });
}
function Gi(e2) {
  return Je.delete({ url: `/nocode/mfScreen/${e2}` }, { successMessageMode: "message" });
}
function Ui(e2, t2) {
  return Je.get({ url: `/nocode/mfScreen/share/${e2}`, params: { duration: t2 } });
}
function Vi(e2, t2, o2) {
  return Je.get({ url: `/nocode/mfScreen/share/code/${e2}`, params: { path: t2, duration: o2 } });
}
const Wi = (e2) => Je.get({ url: "/nocode/screenCharts", params: e2 });
function Yi(e2) {
  return Je.get({ url: `/nocode/screenCharts/${e2}` });
}
function Zi(e2) {
  return Je.download({ url: "/nocode/screenCharts/export", params: e2 });
}
function Ki(e2) {
  return Je.post({ url: "/nocode/screenCharts", params: e2 }, { successMessageMode: "message" });
}
function Xi(e2) {
  return Je.put({ url: "/nocode/screenCharts", params: e2 }, { successMessageMode: "message" });
}
function Ji(e2) {
  return Je.delete({ url: `/nocode/screenCharts/${e2}` }, { successMessageMode: "message" });
}
function er(e2) {
  return Je.delete({ url: `/nocode/screenCharts/batch/${e2}` }, { successMessageMode: "message" });
}
const tr = (e2) => Je.get({ url: "/nocode/screenFolder/tree", params: e2 }), or = (e2) => Je.get({ url: "/nocode/screenFolder", params: e2 });
function ar(e2) {
  return Je.download({ url: "/nocode/screenFolder/export", params: e2 });
}
function lr(e2) {
  return Je.post({ url: "/nocode/screenFolder", params: e2 }, { successMessageMode: "message" });
}
function nr(e2) {
  return Je.put({ url: "/nocode/screenFolder", params: e2 }, { successMessageMode: "message" });
}
function ir(e2) {
  return Je.put({ url: "/nocode/screenFolder/drag", params: e2 }, { successMessageMode: "message" });
}
function rr(e2) {
  return Je.delete({ url: `/nocode/screenFolder/${e2}` }, { successMessageMode: "message" });
}
const sr = (e2) => Je.get({ url: "/nocode/screenResourceApi", params: e2 });
function ur(e2) {
  return Je.get({ url: `/nocode/screenResourceApi/${e2}` });
}
function cr(e2) {
  return Je.post({ url: "/nocode/screenResourceApi", params: e2 }, { successMessageMode: "message" });
}
function dr(e2) {
  return Je.put({ url: "/nocode/screenResourceApi", params: e2 }, { successMessageMode: "message" });
}
function pr(e2) {
  return Je.delete({ url: `/nocode/screenResourceApi/${e2}` }, { successMessageMode: "message" });
}
function fr(e2, t2, o2) {
  return Je.get({ url: `/nocode/screenResourceApi/table/${e2}?pageNum=${t2.pageNum}&pageSize=${t2.pageSize}`, params: { ...o2 } }, { errorMessageMode: "message" });
}
function hr(e2) {
  return Je.get({ url: `/nocode/screenResourceApi/tables/${e2}` }, { errorMessageMode: "message" });
}
function gr(e2) {
  return Je.get({ url: `/nocode/screenResourceApi/fields/${e2}` }, { errorMessageMode: "message" });
}
function mr(e2) {
  return Je.get({ url: `/nocode/screenResourceApi/api/${e2}` });
}
function yr(e2, t2) {
  return Je.get({ url: "/nocode/screenLayers", params: { ...e2, _shareToken: t2 } });
}
const vr = (e2) => Je.get({ url: "/nocode/screenResource", params: e2 });
function Cr(e2) {
  return Je.get({ url: `/nocode/screenResource/${e2}` });
}
function br(e2) {
  return Je.post({ url: "/nocode/screenResource", params: e2 }, { successMessageMode: "message" });
}
function Mr(e2) {
  return Je.put({ url: "/nocode/screenResource", params: e2 }, { successMessageMode: "message" });
}
function kr(e2) {
  return Je.delete({ url: `/nocode/screenResource/${e2}` }, { successMessageMode: "message" });
}
function wr(e2) {
  return Je.get({ url: `/nocode/screenResource/layers/${e2}` });
}
const xr = (e2, t2, o2) => ({ CtrlKeysEnum: { s: Ae(() => o2(), 150), z: Ae(() => e2(), 150) }, CtrlShiftKeysEnum: { z: Ae(() => t2(), 150) } }), Sr = et("custom-api", { state: () => ({ sourceId: "", sourceType: 0, tableName: "", tableFields: [], tableList: [], tableFieldsMap: /* @__PURE__ */ new Map(), variables: [], level: 1, fieldsChange: 1, showData: false, showDataLevel: "", formulaMap: /* @__PURE__ */ new Map() }), getters: { getSourceId() {
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
}, async setTableFields(e2, t2) {
  return t2 ? (this.tableFields = await Ai({ sourceId: e2, tableName: t2, sourceType: this.sourceType }), this.tableFields) : [];
}, setTableList(e2) {
  (e2 == null ? void 0 : e2.list.length) > 0 && (this.tableList = e2.list);
}, setLevel(e2) {
  this.level = e2;
}, setFieldsChange(e2) {
  e2 < this.getLevel && this.fieldsChange++;
}, addTableFieldsMap(e2, t2) {
  e2 && this.tableFieldsMap.set(e2, t2);
}, getTableFieldsByName(e2) {
  return e2 && this.tableFieldsMap.get(e2) || [];
}, setShowData(e2) {
  this.showData = e2;
}, setShowDataLevel(e2) {
  this.showDataLevel = e2;
}, async setFormulaMap() {
  if (this.formulaMap && this.formulaMap.size > 0) return;
  (await vi({ pageNum: 1, pageSize: 1e4 })).list.forEach((e2) => {
    const t2 = `${e2.categoryId},${e2.id}`;
    this.formulaMap.set(t2, { ...e2, key: t2 });
  });
}, getFormula(e2) {
  return this.formulaMap.get(e2);
} } }), _r = "__API_SAVE__", $r = "公式结果";
var Lr = ((e2) => (e2.QUERY_SQL = "api_config:query_sql", e2.QUERY_DATA = "api_config:query_data", e2))(Lr || {});
const Dr = async (e2) => {
  const t2 = Sr();
  if (!(e2 == null ? void 0 : e2.sqlQuery)) return [];
  const o2 = { sourceId: t2.getSourceId, sourceType: t2.getSourceType, sqlQuery: e2.sqlQuery }, a2 = await qi(o2);
  return a2 && a2.forEach((t3) => t3.tableAlias = e2.sourceTable), a2;
}, Ir = (e2) => e2 && ((e2 == null ? void 0 : e2.aggregates) && e2.aggregates.length > 0 || e2.groups && e2.groups.length > 0 || e2.customColumns && e2.customColumns.length > 0), Tr = (e2, t2) => t2 === Sr().getLevel && Ir(e2), Nr = (e2, t2, o2) => {
  e2 && e2.emit("api_config:query_data", { sqlQuery: t2, level: o2 });
}, Br = (e2) => {
  const t2 = /* @__PURE__ */ new Set(), o2 = (e3, t3) => {
    e3.filters && e3.filters.length > 0 && e3.filters.forEach((e4) => {
      "1" === e4.valueType && e4.value && t3.add(e4.value);
    }), e3.sqlQuery && o2(e3.sqlQuery, t3);
  };
  return o2(e2, t2), t2;
}, Rr = async (e2) => {
  const t2 = Sr(), o2 = [...Br(e2)].reduce((e3, t3) => (t3 && (e3[t3] = "1"), e3), {});
  return await Ni({ sourceId: t2.getSourceId, sourceType: t2.getSourceType, sqlQuery: e2 || {}, params: o2 });
}, qr = et("screen-edit", { state: () => ({ key: 0, id: "", isResource: false, screenCanvas: null, componentList: [], chartImgCache: /* @__PURE__ */ new Map(), scale: 1, canvasConfig: { width: 1920, height: 1080, theme: Ge.SYSTEM, backgroundColor: "", backgroundImage: "", screenName: "", screenDesc: "", watermark: "", fitType: Pr.FIT_BOX, globalParams: [] }, undoRedoManager: new zn(100), curComponent: null, curComponentIndex: -1, curHoverComponentId: "", selectArea: { show: false, dropInfo: { x: 0, y: 0, width: 0, height: 0 }, components: [] }, guideLine: { lineListX: [], lineListY: [] }, chartNameLabel: /* @__PURE__ */ new Map(), copyConfig: "", shareToken: void 0, initComplete: false }), getters: { getKey() {
  return this.key;
}, getId() {
  return this.id || "";
}, getTheme() {
  return this.canvasConfig.theme === Ge.SYSTEM ? tt().getDarkMode : this.canvasConfig.theme;
}, getScreenCanvas() {
  return this.screenCanvas;
}, getComponentList() {
  return this.componentList;
}, getScale() {
  return this.scale;
}, getCanvasConfig() {
  return this.canvasConfig;
}, getChartNameLabel() {
  return this.chartNameLabel;
}, getCurComponent() {
  return this.curComponent;
}, getCurConfigComponent() {
  var _a2, _b, _c2, _d2;
  return ((_a2 = this.curComponent) == null ? void 0 : _a2.chart.type) === as.MfCombine && ((_c2 = (_b = this.curComponent) == null ? void 0 : _b.chart.options) == null ? void 0 : _c2.selectIndex) >= 0 ? (_d2 = this.curComponent) == null ? void 0 : _d2.chart.options.components[this.curComponent.chart.options.selectIndex] : this.curComponent;
}, getCurComponentIndex() {
  return this.curComponentIndex;
}, getCurHoverComponentId() {
  return this.curHoverComponentId;
}, getSelectArea() {
  return this.selectArea;
}, getGuideLine() {
  return this.guideLine;
}, getUndoRedoManager() {
  return this.undoRedoManager;
}, getCopyConfig() {
  return this.copyConfig;
}, getShareToken() {
  return this.shareToken;
}, getIsResource() {
  return this.isResource;
}, getInitComplete() {
  return this.initComplete;
} }, actions: { setId(e2) {
  this.id = e2;
}, setIsResource(e2) {
  this.isResource = e2;
}, setScreenCanvas(e2) {
  this.screenCanvas = e2;
}, setScale(e2) {
  this.scale = Number.parseFloat(e2.toFixed(2));
}, setCanvasConfig(e2) {
  e2 && (this.canvasConfig = e2);
}, setComponentList(e2) {
  this.componentList = e2;
}, addComponent(e2, t2) {
  void 0 === t2 ? this.componentList.unshift(e2) : this.componentList.splice(t2, 0, e2);
}, setCurComponent(e2, t2) {
  setTimeout(() => {
    e2 && this.curComponent && e2.chart.id === this.curComponent.chart.id || (this.curComponent && (e2 == null ? void 0 : e2.chart.id) !== this.curComponent.chart.id && (this.curComponent.chartContain.dropInfo.zIndex = 0), this.curComponent = e2, e2 && void 0 === t2 && (t2 = this.componentList.indexOf(e2)), this.curComponentIndex = void 0 === t2 ? -1 : t2, C(() => Kd.on(Hr.CHART_CHANGE, e2)).then());
  }, 1);
}, setCurComponentIndex(e2) {
  return this.curComponentIndex = e2;
}, cleanCurComponent() {
  this.setCurComponent(null, -1);
}, setCurHoverComponent(e2) {
  this.curHoverComponentId = e2;
}, cleanSelectArea() {
  this.selectArea.show = false, this.selectArea.dropInfo = { x: 0, y: 0, width: 0, height: 0 }, this.selectArea.components = [];
}, showSelectArea() {
  this.selectArea.show = true;
}, setSelectArea(e2) {
  this.selectArea = e2;
}, setSelectedComponents(e2) {
  const t2 = this.selectArea.components.findIndex((t3) => t3.chart.id === e2.chart.id);
  -1 === t2 ? this.selectArea.components.push(e2) : this.selectArea.components.splice(t2, 1);
}, setUndoRedoData(e2) {
  this.undoRedoManager.setData({ name: e2, value: this.componentList });
}, undo() {
  const e2 = this.undoRedoManager.undo();
  e2 && e2.value && (this.componentList = e2.value, this.cleanCurComponent(), this.cleanSelectArea(), this.key++);
}, redo() {
  const e2 = this.undoRedoManager.redo();
  e2 && e2.value && (this.componentList = e2.value, this.cleanCurComponent(), this.cleanSelectArea(), this.key++);
}, deleteComponent(e2) {
  var _a2, _b;
  let t2 = e2;
  void 0 === e2 && (t2 = this.curComponentIndex), void 0 !== t2 && (t2 >= 0 && t2 === this.curComponentIndex && (this.curComponentIndex = -1, this.curComponent = null), ((_b = (_a2 = this.selectArea) == null ? void 0 : _a2.components) == null ? void 0 : _b.length) > 0 ? (this.batchDeleteComponent(this.selectArea.components), this.cleanSelectArea()) : t2 >= 0 && this.componentList.splice(t2, 1));
}, batchDeleteComponent(e2) {
  const t2 = qe(e2);
  for (const e3 of t2) for (let t3 = 0, o2 = this.componentList.length; t3 < o2; t3++) if (e3.chart.id === this.componentList[t3].chart.id) {
    this.componentList.splice(t3, 1);
    break;
  }
}, setChartImg(e2, t2) {
  e2 && t2 && this.chartImgCache.set(e2, t2);
}, hasChartImg(e2) {
  return this.chartImgCache.has(e2);
}, getChartImg(e2) {
  return e2 && this.chartImgCache.has(e2) ? this.chartImgCache.get(e2) : ot;
}, getComponent(e2) {
  return ip(this.componentList, e2);
}, async initCache(e2) {
  if (this.setInitComplete(false), e2) {
    const t2 = JSON.parse(e2);
    if (!t2) return;
    this.setComponentList(t2.componentList), this.setCanvasConfig(t2.canvasConfig), sp(this.componentList).then((e3) => {
      Promise.all(e3).then(() => {
        this.setUndoRedoData("初始化"), this.setInitComplete(true);
      });
    });
  }
}, saveCache() {
  const e2 = qe(this.componentList);
  e2.forEach((e3) => {
    up(e3.chart), e3.chart.type === as.MfCombine && e3.chart.options.components.forEach((e4) => {
      up(e4.chart);
    });
  }), sessionStorage.setItem(`SCREEN_CONFIG_${this.getId}`, JSON.stringify({ componentList: e2, canvasConfig: this.canvasConfig }));
}, clearCache() {
  sessionStorage.removeItem(`SCREEN_CONFIG_${this.getId}`);
}, async loadingScreen() {
  const e2 = sessionStorage.getItem(`SCREEN_CONFIG_${this.getId}`);
  if (e2) return await this.initCache(e2), this.componentList;
  if (!this.getId) return this.componentList;
  let t2;
  if (this.setInitComplete(false), t2 = this.isResource ? await Cr(this.getId) : await Pi(this.getId, this.getShareToken), !t2) {
    const { createMessage: e3 } = _e();
    return void e3.error("大屏不存在或无权限访问");
  }
  const o2 = t2.canvasConfig ? JSON.parse(t2.canvasConfig) : void 0;
  this.setCanvasConfig(o2);
  const a2 = t2.contains ? JSON.parse(t2.contains) : [];
  if (!a2 || 0 === a2.length) return this.componentList;
  let l2;
  if (l2 = this.isResource ? await wr(this.getId) : await yr({ screenId: this.getId }, this.getShareToken), !l2 || 0 === l2.length) return this.componentList;
  const n2 = /* @__PURE__ */ new Map();
  l2.forEach((e3) => {
    n2.set(e3.layerId, JSON.parse(e3.config));
  });
  const i2 = [];
  for (const e3 of a2) {
    const t3 = n2.get(e3.id);
    t3 && i2.push({ chartContain: e3, chart: t3 });
  }
  return n2.clear(), this.setComponentList(i2), sp(this.componentList, this.isResource).then((e3) => {
    Promise.all(e3).then(() => {
      this.setUndoRedoData("初始化"), this.setInitComplete(true);
    });
  }), this.componentList;
}, cloneScreen() {
  const e2 = /* @__PURE__ */ new Map(), t2 = (t3) => {
    const o3 = Ve();
    e2.set(t3.chart.id, o3), t3.chartContain.id = o3, t3.chart.id = o3;
  };
  this.canvasConfig.screenName = `${this.canvasConfig.screenName}_副本`, this.componentList.forEach((e3) => {
    t2(e3), e3.chart.type === as.MfCombine && e3.chart.options.components.forEach((e4) => {
      t2(e4);
    });
  });
  const o2 = (t3) => {
    var _a2;
    const o3 = t3.chart.data.params;
    if (o3) for (const t4 of Object.values(o3)) Ye(t4.value) ? t4.value.forEach((t5) => {
      t5.id && (t5.id = e2.get(t5.id));
    }) : ((_a2 = t4.value) == null ? void 0 : _a2.id) && (t4.value.id = e2.get(t4.value.id));
  }, a2 = (t3) => {
    var _a2, _b;
    (_b = (_a2 = t3.chart.showHide) == null ? void 0 : _a2.conditions) == null ? void 0 : _b.forEach((t4) => {
      var _a3;
      ((_a3 = t4.event) == null ? void 0 : _a3.id) && (t4.event.id = e2.get(t4.event.id));
    });
  }, l2 = (t3) => {
    var _a2, _b;
    (_b = (_a2 = t3.chart.data.eventRefresh) == null ? void 0 : _a2.events) == null ? void 0 : _b.forEach((t4) => {
      t4.id && (t4.id = e2.get(t4.id));
    });
  }, n2 = (t3) => {
    var _a2;
    (_a2 = t3.chart.animations) == null ? void 0 : _a2.forEach((t4) => {
      var _a3;
      (_a3 = t4.events) == null ? void 0 : _a3.forEach((t5) => {
        t5.id && (t5.id = e2.get(t5.id));
      });
    });
  };
  this.componentList.forEach((e3) => {
    o2(e3), a2(e3), l2(e3), n2(e3), e3.chart.type === as.MfCombine && e3.chart.options.components.forEach((e4) => {
      o2(e4), a2(e4), l2(e4), n2(e4);
    });
  });
}, setCopyConfig(e2) {
  this.copyConfig = e2;
}, setShareToken(e2) {
  this.shareToken = e2;
}, setInitComplete(e2) {
  this.initComplete = e2;
} } }), Ar = et("screen-layout", { state: () => ({ chartCollapsed: false, layerCollapsed: false, configCollapsed: false }), getters: { getChartCollapsed() {
  return this.chartCollapsed;
}, getLayerCollapsed() {
  return this.layerCollapsed;
}, getConfigCollapsed() {
  return this.configCollapsed;
} }, actions: { setChartCollapsed(e2) {
  this.chartCollapsed = e2, this.setCache();
}, setLayerCollapsed(e2) {
  this.layerCollapsed = e2, this.setCache();
}, setConfigCollapsed(e2) {
  this.configCollapsed = e2, this.setCache();
}, initCache() {
  const e2 = localStorage.getItem("SCREEN_LAYOUT_CONFIG");
  if (e2) {
    const t2 = JSON.parse(e2);
    this.chartCollapsed = t2.chartCollapsed, this.layerCollapsed = t2.layerCollapsed, this.configCollapsed = t2.configCollapsed;
  }
}, setCache() {
  localStorage.setItem("SCREEN_LAYOUT_CONFIG", JSON.stringify({ chartCollapsed: this.chartCollapsed, layerCollapsed: this.layerCollapsed, configCollapsed: this.configCollapsed }));
} } }), Or = "menu_chart_drag", jr = "field_data_drag";
var zr = ((e2) => (e2.All = "all", e2.Chart = "chart", e2.Layer = "layer", e2.Config = "config", e2))(zr || {}), Er = ((e2) => (e2.CurPage = "当前页", e2.NewTab = "新标签", e2.Dialog = "弹出窗", e2))(Er || {}), Fr = ((e2) => (e2.System = "系统页面", e2.External = "外部页面", e2))(Fr || {}), Pr = ((e2) => (e2.FIT_ORIGINAL = "fit_original", e2.FIT_WIDTH = "fit_width", e2.FIT_WIDTH_SCALE = "fit_width_scale", e2.FIT_HEIGHT = "fit_height", e2.FIT_HEIGHT_SCALE = "fit_height_scale", e2.FIT_BOX = "fit_box", e2))(Pr || {});
const Hr = { CREATE_CHART: "create_chart", CHART_CHANGE: "chart_change", MOVE: "chart_move", UN_MOVE: "chart_un_move", PLAY_ANIMATION: "play_animation", STOP_ANIMATION: "stop_animation", EVENT_ANIMATION: "event_animation", PLAY_ANIMATION_COMPLETE: "play_animation_complete", DATA_RENAME: "data_rename", SCREEN_SAVE: "screen_save", SCREEN_PREVIEW: "screen_preview", SHOW_MODAL: "show_modal" }, Qr = { x: "x", y: "y", z: "z", width: "width", height: "height", borderWidth: "borderWidth", borderRadius: "borderRadius", borderColor: "borderColor", borderImage: "borderImage", background: "background", rotate: "rotate", opacity: "opacity", padding: "padding" };
var Gr = ((e2) => (e2[e2.CONSTANT = 0] = "CONSTANT", e2[e2.VARIABLE = 1] = "VARIABLE", e2[e2.EVENT = 2] = "EVENT", e2))(Gr || {});
const Ur = { id: "", name: "", data: { type: 0, dataSet: void 0, limit: 100, maxLimit: 9999, priority: 0 }, events: { emits: [], on: [] }, options: {} }, Vr = { id: null, opacity: 1, lock: false, show: true, dropInfo: { x: 0, y: 0, zIndex: 0, width: 300, height: 300, rotate: 0, proportion: 1 }, groupStyle: {}, border: { show: false, color: void 0, width: 1, radius: 6 }, background: "", padding: "1px" };
function Wr(e2) {
  return e2 * Math.PI / 180;
}
function Yr(e2, t2, o2) {
  return { x: (e2.x - t2.x) * Math.cos(Wr(o2)) - (e2.y - t2.y) * Math.sin(Wr(o2)) + t2.x, y: (e2.x - t2.x) * Math.sin(Wr(o2)) + (e2.y - t2.y) * Math.cos(Wr(o2)) + t2.y };
}
function Zr(e2, t2) {
  return { x: e2.x + (t2.x - e2.x) / 2, y: e2.y + (t2.y - e2.y) / 2 };
}
function Kr(e2) {
  return Math.abs(Math.sin(Wr(e2)));
}
function Xr(e2) {
  return Math.abs(Math.cos(Wr(e2)));
}
function Jr(e2) {
  return (e2 + 360) % 360;
}
const es = { style: { value: "样式", show: true, payload: { icon: "carbon:color-palette", component: null } }, data: { value: "数据", show: true, payload: { icon: "carbon:data-structured", component: null } }, animation: { value: "动画", show: true, payload: { icon: "carbon:flow-modeler", component: T(lt(() => import("./index2.js"), { loading: true, size: "large" })) } }, advance: { value: "进阶", show: true, payload: { icon: "iconfont:icon-mfish-config", component: T(lt(() => import("./index3.js"), { loading: true, size: "large" })) } } }, ts = (e2) => {
  var _a2, _b, _c2, _d2, _e2;
  return { padding: `${Math.round((((_a2 = e2 == null ? void 0 : e2.options.fontSize) == null ? void 0 : _a2.value) ?? 12) / 10)}px`, ...(_b = e2 == null ? void 0 : e2.options.font) == null ? void 0 : _b.style, ...(_c2 = e2 == null ? void 0 : e2.options.fontSize) == null ? void 0 : _c2.style, ...(_d2 = e2 == null ? void 0 : e2.options.fontStyle) == null ? void 0 : _d2.style, ...(_e2 = e2 == null ? void 0 : e2.options.textColor) == null ? void 0 : _e2.style };
}, os = (e2) => {
  const t2 = {};
  return Ye(e2) && e2.forEach((e3) => {
    t2[e3] = { colName: e3, dataType: "string", rename: e3 };
  }), t2;
};
var as = ((e2) => (e2.None = "none", e2.MfCombine = "MfCombine", e2.MfTag = "MfTag", e2.MfButton = "MfButton", e2.MfDateTime = "MfDateTime", e2.MfDataTag = "MfDataTag", e2.MfBorder1 = "MfBorder1", e2.MfBorder2 = "MfBorder2", e2.MfBorder3 = "MfBorder3", e2.MfBorder4 = "MfBorder4", e2.MfBorder5 = "MfBorder5", e2.MfBorder6 = "MfBorder6", e2.MfBorder7 = "MfBorder7", e2.MfBorder8 = "MfBorder8", e2.MfBorder9 = "MfBorder9", e2.MfBorder10 = "MfBorder10", e2.MfBorder11 = "MfBorder11", e2.MfBorder12 = "MfBorder12", e2.MfBorder13 = "MfBorder13", e2.MfBorder14 = "MfBorder14", e2.MfBorder15 = "MfBorder15", e2.MfBorder16 = "MfBorder16", e2.MfBorder17 = "MfBorder17", e2.MfBorder18 = "MfBorder18", e2.MfBorder19 = "MfBorder19", e2.MfBorder20 = "MfBorder20", e2.MfBorder21 = "MfBorder21", e2.MfBorder22 = "MfBorder22", e2.MfDecoration1 = "MfDecoration1", e2.MfDecoration2 = "MfDecoration2", e2.MfDecoration3 = "MfDecoration3", e2.MfDecoration4 = "MfDecoration4", e2.MfDecoration5 = "MfDecoration5", e2.MfDecoration6 = "MfDecoration6", e2.MfDecoration7 = "MfDecoration7", e2.MfDecoration8 = "MfDecoration8", e2.MfDecoration9 = "MfDecoration9", e2.MfDecoration10 = "MfDecoration10", e2.MfDecoration11 = "MfDecoration11", e2.MfDecoration12 = "MfDecoration12", e2.MfHeader1 = "MfHeader1", e2.MfHeader2 = "MfHeader2", e2.MfHeader3 = "MfHeader3", e2.MfHeader4 = "MfHeader4", e2.MfHeader5 = "MfHeader5", e2.MfHeader6 = "MfHeader6", e2.MfLine = "MfLine", e2.MfLineSmooth = "MfLineSmooth", e2.MfLineArea = "MfLineArea", e2.MfLineStack = "MfLineStack", e2.MfLineAreaStack = "MfLineAreaStack", e2.MfBar = "MfBar", e2.MfBarHorizontal = "MfBarHorizontal", e2.MfBarStack = "MfBarStack", e2.MfBarLine = "MfBarLine", e2.MfBarPlusMinus = "MfBarPlusMinus", e2.MfPie = "MfPie", e2.MfPieCircular = "MfPieCircular", e2.MfPieRose = "MfPieRose", e2.MfPieHalf = "MfPieHalf", e2.MfScatter = "MfScatter", e2.MfRadar = "MfRadar", e2.MfRadarCircle = "MfRadarCircle", e2.MfMapLine = "MfMapLine", e2.MfMapLine3D = "MfMapLine3D", e2.MfMapChunks = "MfMapChunks", e2.MfMapScatter = "MfMapScatter", e2.MfScrollTable = "MfScrollTable", e2.MfTable = "MfTable", e2.MfDigits = "MfDigits", e2.MfWheel = "MfWheel", e2.MfTireMarks = "MfTireMarks", e2.MfPicture = "MfPicture", e2.MfSegmented = "MfSegmented", e2.MfSelect = "MfSelect", e2))(as || {});
function ls() {
  const e2 = async (e3, t3) => {
    var _a2;
    const o2 = qr();
    if (!e3 || !e3.data.id) return;
    let a2, l2 = {};
    return l2 = t3 ? { ...l2, ...t3 } : ((_a2 = e3 == null ? void 0 : e3.data) == null ? void 0 : _a2.pagination) ? { pageNum: e3.data.pagination.current || 1, pageSize: e3.data.pagination.pageSize } : { pageNum: 1, pageSize: e3.data.limit }, a2 = e3.isResource ? await fr(`${o2.getId},${e3.data.id}`, l2, e3.data.paramsValue) : await ji(e3.data.id, l2, { ...e3.data.paramsValue, _shareToken: o2.getShareToken }), e3.data.headers = a2.headers, e3.data.result = a2.table.list, a2.table;
  };
  async function t2(t3) {
    let o2;
    if (t3.data.id) try {
      o2 = await e2(t3);
    } catch {
    }
    t3.type && Zd[t3.type].initData(t3, o2);
  }
  return { setParamValue: function(e3, t3) {
    e3.data.paramsValue ? e3.data.paramsValue = { ...e3.data.paramsValue, ...t3 } : e3.data.paramsValue = t3;
  }, getDataTable: e2, setDataTable: t2, eventCallback: function(e3) {
    t2(e3);
  } };
}
const ns = at();
var is = ((e2) => (e2.CHART_BEFORE_MOUNT = "before_mount", e2.CHART_MOUNTED = "mounted", e2.CHART_CLICK = "click", e2.CHART_DBLCLICK = "dblclick", e2.CHART_MOUSE_ENTER = "mouseenter", e2.CHART_MOUSE_LEAVE = "mouseLeave", e2))(is || {});
const rs = (e2, t2) => {
  var _a2, _b;
  switch (e2) {
    case "before_mount":
      return "初始化前";
    case "mounted":
      return "初始化后";
    case "click":
      return "鼠标点击";
    case "dblclick":
      return "鼠标双击";
    case "mouseenter":
      return "鼠标进入";
    case "mouseLeave":
      return "鼠标离开";
    default:
      return t2 ? ((_b = (_a2 = Zd[t2].customEvents) == null ? void 0 : _a2.find((t3) => t3.value === e2)) == null ? void 0 : _b.name) ?? "" : "";
  }
};
function ss(e2, t2, o2) {
  const a2 = qr(), n2 = (t3, o3) => {
    ((e3) => {
      var _a2;
      if (((_a2 = e3.events) == null ? void 0 : _a2.emits) && e3.events.emits.includes(t3)) {
        const a3 = t3 + e3.id;
        ns.emit(a3, { eventId: a3, e: o3, data: e3.data });
      }
    })(e2);
  };
  N(() => {
    n2("before_mount", {});
  }), i(() => {
    setTimeout(async () => {
      for (; !a2.getInitComplete; ) await rt(200);
      setTimeout(() => {
        n2("mounted", {});
      }, 100);
    }, 10);
  });
  const r2 = { mouseenter: (e3) => {
    n2("mouseenter", e3);
  }, mouseLeave: (e3) => {
    n2("mouseLeave", e3);
  }, click: (e3) => {
    n2("click", e3);
  }, dblclick: (e3) => {
    n2("dblclick", e3);
  } }, s2 = (e3) => {
    if (e3) for (const t3 of Object.keys(e3)) Ye(e3[t3].value) && e3[t3].value.forEach((e4) => {
      ns.off(p2(e4), u2);
    });
  }, u2 = (t3) => {
    if (0 === e2.data.type) return;
    const o3 = e2.data.params;
    if (o3) {
      const a3 = {};
      for (const e3 of Object.keys(o3)) o3[e3].type === Gr.EVENT && Ye(o3[e3].value) && o3[e3].value.forEach((o4) => {
        t3.eventId === p2(o4) && (a3[e3] = d2(t3, o4));
      });
      e2.data.paramsValue ? e2.data.paramsValue = { ...e2.data.paramsValue, ...a3 } : e2.data.paramsValue = a3;
    }
    c2(t3, "param_change");
  };
  function c2(e3, o3) {
    if (t2) {
      const a3 = { type: o3, ...e3 };
      t2(a3);
    }
  }
  function d2(e3, t3) {
    let o3;
    return o3 = Object.keys(is).some((e4) => is[e4] === t3.event) ? 0 === e3.data.type ? e3.data.dataSet : e3.data.result : e3.e, Ye(o3) ? o3.length > 0 ? o3[0][t3.param] : "" : Ze(o3) ? o3[t3.param] : Ke(o3) ? o3 : void 0;
  }
  function p2(e3) {
    return e3.event + e3.id;
  }
  l(() => e2.data.params, (e3, t3) => {
    !function(e4, t4) {
      if (s2(t4), !e4) return;
      const o3 = /* @__PURE__ */ new Set();
      for (const t5 of Object.keys(e4)) Ye(e4[t5].value) && e4[t5].value.forEach((e5) => {
        const t6 = p2(e5);
        o3.has(t6) || (o3.add(t6), ns.on(t6, u2));
      });
    }(e3, t3);
  }, { immediate: true, deep: true });
  const f2 = (t3) => {
    var _a2, _b, _c2;
    if (globalThis.location.pathname.endsWith("/mf-screen/config") || !((_b = (_a2 = e2.jump) == null ? void 0 : _a2.page) == null ? void 0 : _b.value)) return;
    const o3 = (() => {
      var _a3, _b2, _c3, _d2;
      let t4;
      const o4 = (() => {
        var _a4, _b3;
        if (!((_a4 = e2.jump) == null ? void 0 : _a4.params) || 0 === ((_b3 = e2.jump.params) == null ? void 0 : _b3.length)) return {};
        const t5 = {};
        for (const o5 of e2.jump.params) if (o5.type === Gr.CONSTANT) t5[o5.name] = o5.value;
        else if (o5.type === Gr.VARIABLE) {
          const e3 = rp(a2.getComponentList, o5.value);
          e3 && (t5[o5.name] = e3);
        }
        return t5;
      })();
      if (((_a3 = e2.jump) == null ? void 0 : _a3.pageType) === Fr.System) {
        t4 = it.resolve({ name: "ScreenPreview", params: { id: (_b2 = e2.jump) == null ? void 0 : _b2.page.value }, query: { shareToken: a2.getShareToken, isResource: (_c3 = a2.getIsResource) == null ? void 0 : _c3.toString(), ...o4 } }).href;
      } else t4 = (_d2 = e2.jump) == null ? void 0 : _d2.page.value, t4.startsWith("http") || (t4 = `http://${t4}`), Object.keys(o4).length > 0 && (t4 += `?${new URLSearchParams(o4).toString()}`);
      return t4;
    })();
    switch ((_c2 = e2.jump) == null ? void 0 : _c2.type) {
      case Er.CurPage:
        globalThis.location.href = o3;
        break;
      case Er.NewTab:
        window.open(o3, "_blank");
        break;
      case Er.Dialog:
        Kd.emit(Hr.SHOW_MODAL, { ...t3, href: o3, jump: e2.jump });
    }
    c2(t3, "page_jump");
  };
  function h2(e3) {
    if (e3) for (const t3 of e3) ns.off(p2(t3.event), g2);
  }
  function g2(t3) {
    var _a2, _b;
    if (!((_a2 = e2.showHide) == null ? void 0 : _a2.open) || !((_b = e2.showHide) == null ? void 0 : _b.conditions)) return;
    let o3;
    for (const a3 of e2.showHide.conditions) {
      if (t3.eventId !== p2(a3.event)) continue;
      const l2 = d2(t3, a3.event);
      switch (a3.condition) {
        case "eq":
          o3 = l2 === a3.value;
          break;
        case "ne":
          o3 = l2 !== a3.value;
          break;
        case "gt":
          o3 = l2 > a3.value;
          break;
        case "lt":
          o3 = l2 < a3.value;
          break;
        case "ge":
          o3 = l2 >= a3.value;
          break;
        case "le":
          o3 = l2 <= a3.value;
      }
      if (o3) return void (e2.showHide.show = true);
    }
    void 0 !== o3 && (e2.showHide.show = false), c2(t3, "show_hide");
  }
  function m2(t3) {
    setTimeout(() => {
      var _a2, _b;
      const { getDataTable: o3 } = ls();
      ((_a2 = e2.data.eventRefresh) == null ? void 0 : _a2.open) && ((_b = e2.data.eventRefresh) == null ? void 0 : _b.events) && (o3(e2).then((t4) => {
        var _a3;
        e2.type && ((_a3 = Zd[e2.type]) == null ? void 0 : _a3.initData(e2, t4));
      }), c2(t3, "refresh"));
    }, 10);
  }
  function y2(t3) {
    Kd.emit(Hr.EVENT_ANIMATION, { ...t3, chart: e2 }), c2(t3, "animation");
  }
  return l(() => e2 == null ? void 0 : e2.jump, (t3) => {
    !function(t4) {
      const o3 = "click" + e2.id;
      ns.off(o3, f2), (t4 == null ? void 0 : t4.open) && ns.on(o3, f2);
    }(t3);
  }, { immediate: true, deep: true }), l(() => {
    var _a2;
    return (_a2 = e2 == null ? void 0 : e2.showHide) == null ? void 0 : _a2.conditions;
  }, (e3, t3) => {
    !function(e4, t4) {
      if (h2(t4), !e4) return;
      const o3 = /* @__PURE__ */ new Set();
      for (const t5 of e4) {
        const e5 = p2(t5.event);
        o3.has(e5) || (o3.add(e5), ns.on(e5, g2));
      }
    }(e3, t3);
  }, { immediate: true, deep: true }), l(() => {
    var _a2, _b;
    return (_b = (_a2 = e2 == null ? void 0 : e2.data) == null ? void 0 : _a2.eventRefresh) == null ? void 0 : _b.events;
  }, (e3, t3) => {
    !function(e4, t4) {
      if (function(e5) {
        if (!e5) return;
        for (const t5 of e5) ns.off(p2(t5), m2);
      }(t4), !e4) return;
      const o3 = /* @__PURE__ */ new Set();
      for (const t5 of e4) {
        const e5 = p2(t5);
        o3.has(e5) || (o3.add(e5), ns.on(e5, m2));
      }
    }(e3, t3);
  }, { immediate: true, deep: true }), l(() => e2 == null ? void 0 : e2.animations, (e3, t3) => {
    !function(e4, t4) {
      if (function(e5) {
        if (!e5) return;
        for (const t5 of e5) if (t5.events) for (const e6 of t5.events) ns.off(p2(e6), y2);
      }(t4), !e4) return;
      const o3 = /* @__PURE__ */ new Set();
      for (const t5 of e4) if (t5.events) for (const e5 of t5.events) {
        const t6 = p2(e5);
        o3.has(t6) || (o3.add(t6), ns.on(t6, y2));
      }
    }(e3, t3);
  }, { immediate: true, deep: true }), _(() => {
    var _a2, _b;
    s2((_a2 = e2.data) == null ? void 0 : _a2.params), h2((_b = e2 == null ? void 0 : e2.showHide) == null ? void 0 : _b.conditions);
  }), { emitEvent: n2, commonEvents: r2, customEvents: o2 };
}
const us = e({ name: "MfButton", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const t2 = e2, { commonEvents: o2 } = ss(t2.chart), l2 = a(() => t2.chartContain.dropInfo.width > t2.chartContain.dropInfo.height ? t2.chartContain.dropInfo.height / 2.2 + "px" : t2.chartContain.dropInfo.width / 3 + "px");
  return (t3, a2) => (s(), h(d(nt), $({ style: { color: e2.chart.options.iconColor, background: e2.chart.options.buttonColor, fontSize: l2.value } }, B(d(o2)), { type: e2.chart.options.type, ghost: e2.chart.options.ghost, shape: e2.chart.options.shape }), { icon: M(() => {
    var _a2, _b;
    return [((_a2 = e2.chart.data.dataSet) == null ? void 0 : _a2.icon) ? (s(), h(d(Be), { key: 0, size: l2.value, icon: (_b = e2.chart.data.dataSet) == null ? void 0 : _b.icon, color: e2.chart.options.iconColor }, null, 8, ["size", "icon", "color"])) : f("", true)];
  }), default: M(() => {
    var _a2;
    return [x(" " + S((_a2 = e2.chart.data.dataSet) == null ? void 0 : _a2.title), 1)];
  }), _: 1 }, 16, ["style", "type", "ghost", "shape"]));
} });
function cs(e2) {
  return e2.chart.data.dataSet = qe(ds.defaultData), e2.chart.data.headers = ds.defaultHeaders && ds.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chart.options.bordered = true, e2.chartContain.dropInfo.width = 80, e2.chartContain.dropInfo.height = 34, e2;
}
const ds = { type: as.MfButton, component: us, create: cs, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfButtonConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { title: "按钮", icon: "" }, defaultHeaders: () => qe({ title: { colName: "title", dataType: "string", rename: "按钮" }, icon: { colName: "icon", dataType: "string", rename: "图标" } }), initData: () => {
} }, ps = Object.freeze(Object.defineProperty({ __proto__: null, default: ds, mfButtonCreate: cs }, Symbol.toStringTag, { value: "Module" }));
const fs = { type: as.MfCombine, component: lt(() => import("./index4.js"), { loading: true }), create: function(e2) {
  return e2.chartContain.padding = "0px", e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfCombineConfig.js"), { loading: true, size: "large" })), e2;
})() }, hs = Object.freeze(Object.defineProperty({ __proto__: null, default: fs }, Symbol.toStringTag, { value: "Module" })), gs = eo(e({ name: "MfTag", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, emits: ["eventHandler"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, { prefixCls: i2 } = xe("mf-tag"), g2 = a(() => ts(o2.chart)), { emitEvent: m2, commonEvents: y2 } = ss(o2.chart, function(e3) {
    n2("eventHandler", e3);
  }, ["titleChange"]);
  return l(() => {
    var _a2;
    return (_a2 = o2.chart.data.dataSet) == null ? void 0 : _a2.title;
  }, (e3) => {
    m2("titleChange", e3);
  }), (t3, o3) => {
    var _a2, _b, _c2, _d2, _e2, _f2, _g2;
    return s(), r("div", $({ class: d(i2), style: { ...(_b = (_a2 = e2.chart.options) == null ? void 0 : _a2.hAlign) == null ? void 0 : _b.style } }, B(d(y2), true)), [p("div", { class: "title", style: u({ overflow: e2.chart.options.hide ? "hidden" : "", ...(_d2 = (_c2 = e2.chart.options) == null ? void 0 : _c2.vAlign) == null ? void 0 : _d2.style }) }, [((_e2 = e2.chart.data.dataSet) == null ? void 0 : _e2.icon) ? (s(), h(d(Be), { key: 0, size: g2.value.fontSize, icon: (_f2 = e2.chart.data.dataSet) == null ? void 0 : _f2.icon, color: e2.chart.options.iconColor }, null, 8, ["size", "icon", "color"])) : f("", true), p("span", { class: c({ hide: e2.chart.options.hide }), style: u(g2.value) }, S((_g2 = e2.chart.data.dataSet) == null ? void 0 : _g2.title), 7)], 4)], 16);
  };
} }), [["__scopeId", "data-v-540aeb6f"]]);
function ms(e2) {
  return e2.chart.data.dataSet = qe(ys.defaultData), e2.chart.data.headers = ys.defaultHeaders && ys.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chart.options.bordered = true, e2.chartContain.dropInfo.width = 80, e2.chartContain.dropInfo.height = 34, e2;
}
const ys = { type: as.MfTag, component: gs, create: ms, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfTagConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { title: "标签", icon: "" }, defaultHeaders: () => qe({ title: { colName: "title", dataType: "string", rename: "标题" }, icon: { colName: "icon", dataType: "string", rename: "图标" } }), initData: () => {
}, customEvents: [{ name: "标签值改变", value: "titleChange" }] }, vs = Object.freeze(Object.defineProperty({ __proto__: null, default: ys, mfTagCreate: ms }, Symbol.toStringTag, { value: "Module" })), Cs = { ...ys, type: as.MfDataTag, component: lt(() => import("./index5.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfDataTagStyleConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfDataTagDataConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: (e2, t2) => {
  const { setDynamicData: o2 } = bs();
  o2(e2, t2);
} };
function bs() {
  function e2(e3) {
    var _a2;
    ((_a2 = e3 == null ? void 0 : e3.data) == null ? void 0 : _a2.dataSet) && (e3.data.dataSet.title = Cs.defaultData.title);
  }
  function t2(e3) {
    var _a2;
    ((_a2 = e3 == null ? void 0 : e3.data) == null ? void 0 : _a2.dataSet) && (e3.data.dataSet.icon = Cs.defaultData.icon);
  }
  return { clearTitle: e2, clearIcon: t2, setDynamicData: function(o2, a2) {
    var _a2, _b, _c2;
    if (o2) {
      if (o2.data.dataSet || (o2.data.dataSet = {}), ((_a2 = a2 == null ? void 0 : a2.list) == null ? void 0 : _a2.length) > 0) {
        const l2 = (_b = o2.data.fields) == null ? void 0 : _b.title;
        l2 && l2.length > 0 && l2[0].colName ? o2.data.dataSet.title = a2.list[0][l2[0].colName] : e2(o2);
        const n2 = (_c2 = o2.data.fields) == null ? void 0 : _c2.icon;
        return void (n2 && n2.length > 0 && n2[0].colName ? o2.data.dataSet.icon = a2.list[0][n2[0].colName] : t2(o2));
      }
      e2(o2), t2(o2);
    }
  } };
}
const Ms = Object.freeze(Object.defineProperty({ __proto__: null, default: Cs, useDataTag: bs }, Symbol.toStringTag, { value: "Module" }));
function ks() {
  const e2 = qr(), { getDataTable: t2, setDataTable: o2 } = ls(), a2 = () => {
    o2(e2.getCurConfigComponent.chart);
  };
  return { setFields: (t3, o3) => {
    e2.getCurConfigComponent.chart.data.fields && (e2.getCurConfigComponent.chart.data.fields[t3] = o3);
  }, getFields: (t3) => {
    if (e2.getCurConfigComponent.chart.data.fields) return e2.getCurConfigComponent.chart.data.fields[t3];
  }, deleteFields: (t3) => {
    e2.getCurConfigComponent.chart.data.fields && (delete e2.getCurConfigComponent.chart.data.fields[t3], a2());
  }, deleteFieldValue: (t3, o3) => {
    var _a2, _b;
    const a3 = (_b = (_a2 = e2.getCurConfigComponent.chart.data) == null ? void 0 : _a2.fields[t3]) == null ? void 0 : _b.findIndex((e3) => e3.colName === o3);
    a3 >= 0 && e2.getCurConfigComponent.chart.data.fields[t3].splice(a3, 1);
  }, getDataTable: async (o3) => await t2(e2.getCurConfigComponent.chart, o3), setDataTable: a2 };
}
function ws(e2) {
  return e2.chart.data.dataSet = qe(xs.defaultData), e2.chart.data.headers = xs.defaultHeaders && xs.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chartContain.dropInfo.width = 120, e2.chartContain.dropInfo.height = 60, e2.chart.options.backgroundColor = "transparent", e2;
}
const xs = { type: as.MfDigits, component: lt(() => import("./index6.js"), { loading: true }), create: ws, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfDigitsConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfDigitsDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: 12345, defaultHeaders: () => qe({ num: { colName: "num", dataType: "number", rename: "数字" } }), initData: (e2, t2) => {
  const { setDynamicData: o2 } = Ss();
  o2(e2, t2);
} };
function Ss() {
  const { createMessage: e2 } = _e(), { deleteFields: t2 } = ks();
  function o2(e3) {
    e3.data.dataSet = xs.defaultData;
  }
  return { resetDefault: o2, setDynamicData: function(a2, l2) {
    var _a2;
    if (a2) {
      if (((_a2 = l2 == null ? void 0 : l2.list) == null ? void 0 : _a2.length) > 0 && a2.data.fields) {
        const n2 = a2.data.fields.num;
        if (n2 && n2.length > 0 && n2[0].colName) {
          const i2 = l2.list[0][n2[0].colName];
          if (!Xe(i2)) return e2.warning("显示内容必须为数字"), t2("num"), void o2(a2);
          a2.data.dataSet = i2;
        } else o2(a2);
        return;
      }
      o2(a2);
    }
  } };
}
const _s = Object.freeze(Object.defineProperty({ __proto__: null, default: xs, mfDigitsCreate: ws, useDigitsData: Ss }, Symbol.toStringTag, { value: "Module" }));
function $s(e2) {
  return e2.chart.data.dataSet = qe(Ls.defaultData), e2.chart.data.headers = Ls.defaultHeaders && Ls.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chartContain.dropInfo.width = 300, e2.chartContain.dropInfo.height = 300, e2.chart.options = { responsive: true, userOptions: { show: false }, style: { chart: { animation: { speed: 0.2 }, backgroundColor: "transparent", layout: { wheel: { ticks: { rounded: true, inactiveColor: "#3A3A3A", activeColor: "#5f8bee", sizeRatio: 0.9, gradient: { show: true, shiftHueIntensity: 100 } } }, innerCircle: { show: true, stroke: "#E1E5E8", strokeWidth: 1 }, percentage: { show: true, fontSize: 48, rounding: 1, bold: true } } } } }, e2;
}
const Ls = { type: as.MfWheel, component: lt(() => import("./index7.js"), { loading: true }), create: $s, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfWheelConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfWheelDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { percentage: 68.8 }, defaultHeaders: () => qe({ percentage: { colName: "percentage", dataType: "number", rename: "比列" } }), initData: (e2, t2) => {
  const { setDynamicData: o2 } = Ds("percentage");
  o2(e2, t2);
} };
function Ds(e2) {
  const { createMessage: t2 } = _e(), { deleteFields: o2 } = ks();
  function a2(e3) {
    e3.data.dataSet = Ls.defaultData;
  }
  return { resetDefault: a2, setDynamicData: function(l2, n2) {
    var _a2;
    if (l2) {
      if (((_a2 = n2 == null ? void 0 : n2.list) == null ? void 0 : _a2.length) > 0 && l2.data.fields) {
        const i2 = l2.data.fields[e2];
        if (i2 && i2.length > 0 && i2[0].colName) {
          const r2 = n2.list[0][i2[0].colName];
          if (!Xe(r2)) return t2.warning("百分比必须为数字"), o2(e2), void a2(l2);
          l2.data.dataSet = { percentage: r2 };
        } else a2(l2);
        return;
      }
      a2(l2);
    }
  } };
}
const Is = Object.freeze(Object.defineProperty({ __proto__: null, default: Ls, mfWheelCreate: $s, useWheelData: Ds }, Symbol.toStringTag, { value: "Module" }));
function Ts(e2) {
  return e2.chart.data.dataSet = qe(Ns.defaultData), e2.chart.data.headers = Ns.defaultHeaders && Ns.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 72, e2.chart.options = { responsive: true, userOptions: { show: false }, style: { chart: { animation: { speed: 0.2 }, backgroundColor: "transparent", layout: { display: "horizontal", crescendo: false, curved: false, curveAngleX: 10, curveAngleY: 10, activeColor: "#5F8BEE", inactiveColor: "#3A3A3A", ticks: { gradient: { show: true, shiftHueIntensity: 30 } } }, percentage: { show: true, useGradientColor: false, color: "#CCCCCC", fontSize: 16, bold: true, rounding: 1, verticalPosition: "bottom", horizontalPosition: "left" } } } }, e2;
}
const Ns = { ...Ls, component: lt(() => import("./index8.js"), { loading: true }), type: as.MfTireMarks, create: Ts, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfTireMarksConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfWheelDataConfig.js"), { loading: true, size: "large" })), e2;
})() }, Bs = Object.freeze(Object.defineProperty({ __proto__: null, default: Ns, mfTireMarksCreate: Ts }, Symbol.toStringTag, { value: "Module" }));
function Rs(e2) {
  return e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 300, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2;
}
const qs = { type: as.MfBorder1, component: lt(() => import("./index9.js"), { loading: true }), create: Rs, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfBorderConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, As = Object.freeze(Object.defineProperty({ __proto__: null, default: qs, mfBorder1Create: Rs }, Symbol.toStringTag, { value: "Module" })), Os = { ...qs, type: as.MfBorder10, component: lt(() => import("./index10.js"), { loading: true }) }, js = Object.freeze(Object.defineProperty({ __proto__: null, default: Os }, Symbol.toStringTag, { value: "Module" }));
function zs(e2) {
  return e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 300, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.title = "标题", e2.chart.options.titleWidth = 200, e2;
}
const Es = { type: as.MfBorder11, component: lt(() => import("./index11.js"), { loading: true }), create: zs, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfBorder11Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Fs = Object.freeze(Object.defineProperty({ __proto__: null, default: Es, mfBorder11Create: zs }, Symbol.toStringTag, { value: "Module" })), Ps = { ...qs, type: as.MfBorder12, component: lt(() => import("./index12.js"), { loading: true }) }, Hs = Object.freeze(Object.defineProperty({ __proto__: null, default: Ps }, Symbol.toStringTag, { value: "Module" })), Qs = { ...qs, type: as.MfBorder13, component: lt(() => import("./index13.js"), { loading: true }) }, Gs = Object.freeze(Object.defineProperty({ __proto__: null, default: Qs }, Symbol.toStringTag, { value: "Module" }));
function Us(e2) {
  const t2 = qs.create(e2);
  return t2.chartContain.border.radius = 0, t2;
}
const Vs = { ...qs, type: as.MfBorder14, component: lt(() => import("./index14.js"), { loading: true }), create: Us }, Ws = Object.freeze(Object.defineProperty({ __proto__: null, default: Vs, mfBorder14Create: Us }, Symbol.toStringTag, { value: "Module" })), Ys = { ...Vs, type: as.MfBorder15, component: lt(() => import("./index15.js"), { loading: true }) }, Zs = Object.freeze(Object.defineProperty({ __proto__: null, default: Ys }, Symbol.toStringTag, { value: "Module" })), Ks = { ...Vs, type: as.MfBorder16, component: lt(() => import("./index16.js"), { loading: true }) }, Xs = Object.freeze(Object.defineProperty({ __proto__: null, default: Ks }, Symbol.toStringTag, { value: "Module" })), Js = { ...Vs, type: as.MfBorder17, component: lt(() => import("./index17.js"), { loading: true }) }, eu = Object.freeze(Object.defineProperty({ __proto__: null, default: Js }, Symbol.toStringTag, { value: "Module" })), tu = { ...Vs, type: as.MfBorder18, component: lt(() => import("./index18.js"), { loading: true }) }, ou = Object.freeze(Object.defineProperty({ __proto__: null, default: tu }, Symbol.toStringTag, { value: "Module" })), au = { ...Vs, type: as.MfBorder19, component: lt(() => import("./index19.js"), { loading: true }) }, lu = Object.freeze(Object.defineProperty({ __proto__: null, default: au }, Symbol.toStringTag, { value: "Module" })), nu = { ...qs, type: as.MfBorder2, component: lt(() => import("./index20.js"), { loading: true }) }, iu = Object.freeze(Object.defineProperty({ __proto__: null, default: nu }, Symbol.toStringTag, { value: "Module" })), ru = { ...Vs, type: as.MfBorder20, component: lt(() => import("./index21.js"), { loading: true }) }, su = Object.freeze(Object.defineProperty({ __proto__: null, default: ru }, Symbol.toStringTag, { value: "Module" })), uu = { ...Vs, type: as.MfBorder21, component: lt(() => import("./index22.js"), { loading: true }) }, cu = Object.freeze(Object.defineProperty({ __proto__: null, default: uu }, Symbol.toStringTag, { value: "Module" })), du = { ...Vs, type: as.MfBorder22, component: lt(() => import("./index23.js"), { loading: true }) }, pu = Object.freeze(Object.defineProperty({ __proto__: null, default: du }, Symbol.toStringTag, { value: "Module" })), fu = { ...qs, type: as.MfBorder3, component: lt(() => import("./index24.js"), { loading: true }) }, hu = Object.freeze(Object.defineProperty({ __proto__: null, default: fu }, Symbol.toStringTag, { value: "Module" })), gu = { ...qs, type: as.MfBorder4, component: lt(() => import("./index25.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfBorder4Config.js"), { loading: true, size: "large" })), e2;
})() }, mu = Object.freeze(Object.defineProperty({ __proto__: null, default: gu }, Symbol.toStringTag, { value: "Module" })), yu = { ...gu, type: as.MfBorder5, component: lt(() => import("./index26.js"), { loading: true }) }, vu = Object.freeze(Object.defineProperty({ __proto__: null, default: yu }, Symbol.toStringTag, { value: "Module" })), Cu = { ...qs, type: as.MfBorder6, component: lt(() => import("./index27.js"), { loading: true }) }, bu = Object.freeze(Object.defineProperty({ __proto__: null, default: Cu }, Symbol.toStringTag, { value: "Module" })), Mu = { ...qs, type: as.MfBorder7, component: lt(() => import("./index28.js"), { loading: true }) }, ku = Object.freeze(Object.defineProperty({ __proto__: null, default: Mu }, Symbol.toStringTag, { value: "Module" }));
function wu(e2) {
  return e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 300, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.duration = 3, e2;
}
const xu = { type: as.MfBorder8, component: lt(() => import("./index29.js"), { loading: true }), create: wu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfBorder8Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Su = Object.freeze(Object.defineProperty({ __proto__: null, default: xu, mfBorder8Create: wu }, Symbol.toStringTag, { value: "Module" })), _u = { ...qs, type: as.MfBorder9, component: lt(() => import("./index30.js"), { loading: true }) }, $u = Object.freeze(Object.defineProperty({ __proto__: null, default: _u }, Symbol.toStringTag, { value: "Module" }));
function Lu(e2) {
  return e2.chartContain.dropInfo.width = 200, e2.chartContain.dropInfo.height = 50, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2;
}
const Du = { type: as.MfDecoration1, component: lt(() => import("./index31.js"), { loading: true }), create: Lu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Iu = Object.freeze(Object.defineProperty({ __proto__: null, default: Du, mfDecoration1Create: Lu }, Symbol.toStringTag, { value: "Module" }));
function Tu(e2) {
  return e2.chartContain.dropInfo.width = 200, e2.chartContain.dropInfo.height = 30, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2;
}
const Nu = { type: as.MfDecoration10, component: lt(() => import("./index32.js"), { loading: true }), create: Tu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Bu = Object.freeze(Object.defineProperty({ __proto__: null, default: Nu, mfDecoration10Create: Tu }, Symbol.toStringTag, { value: "Module" }));
function Ru(e2) {
  return e2.chartContain.dropInfo.width = 220, e2.chartContain.dropInfo.height = 70, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.title = "标签", e2;
}
const qu = { type: as.MfDecoration11, component: lt(() => import("./index33.js"), { loading: true }), create: Ru, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration7Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Au = Object.freeze(Object.defineProperty({ __proto__: null, default: qu, mfDecoration11Create: Ru }, Symbol.toStringTag, { value: "Module" }));
function Ou(e2) {
  return e2.chartContain.dropInfo.width = 200, e2.chartContain.dropInfo.height = 200, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.scanDuration = 3, e2.chart.options.haloDuration = 3, e2;
}
const ju = { type: as.MfDecoration12, component: lt(() => import("./index34.js"), { loading: true }), create: Ou, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration12Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, zu = Object.freeze(Object.defineProperty({ __proto__: null, default: ju, mfDecoration12Create: Ou }, Symbol.toStringTag, { value: "Module" }));
function Eu(e2) {
  return e2.chartContain.dropInfo.width = 200, e2.chartContain.dropInfo.height = 30, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.duration = 3, e2;
}
const Fu = { type: as.MfDecoration2, component: lt(() => import("./index35.js"), { loading: true }), create: Eu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration2Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Pu = Object.freeze(Object.defineProperty({ __proto__: null, default: Fu, mfDecoration2Create: Eu }, Symbol.toStringTag, { value: "Module" }));
function Hu(e2) {
  return e2.chartContain.dropInfo.width = 250, e2.chartContain.dropInfo.height = 50, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2;
}
const Qu = { type: as.MfDecoration3, component: lt(() => import("./index36.js"), { loading: true }), create: Hu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Gu = Object.freeze(Object.defineProperty({ __proto__: null, default: Qu, mfDecoration3Create: Hu }, Symbol.toStringTag, { value: "Module" }));
function Uu(e2) {
  return e2.chartContain.dropInfo.width = 30, e2.chartContain.dropInfo.height = 200, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.duration = 3, e2;
}
const Vu = { type: as.MfDecoration4, component: lt(() => import("./index37.js"), { loading: true }), create: Uu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration2Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Wu = Object.freeze(Object.defineProperty({ __proto__: null, default: Vu, mfDecoration4Create: Uu }, Symbol.toStringTag, { value: "Module" }));
function Yu(e2) {
  return e2.chartContain.dropInfo.width = 320, e2.chartContain.dropInfo.height = 70, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.duration = 3, e2;
}
const Zu = { type: as.MfDecoration5, component: lt(() => import("./index38.js"), { loading: true }), create: Yu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration5Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Ku = Object.freeze(Object.defineProperty({ __proto__: null, default: Zu, mfDecoration5Create: Yu }, Symbol.toStringTag, { value: "Module" }));
function Xu(e2) {
  return e2.chartContain.dropInfo.width = 320, e2.chartContain.dropInfo.height = 50, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2;
}
const Ju = { type: as.MfDecoration6, component: lt(() => import("./index39.js"), { loading: true }), create: Xu, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, ec = Object.freeze(Object.defineProperty({ __proto__: null, default: Ju, mfDecoration6Create: Xu }, Symbol.toStringTag, { value: "Module" }));
function tc(e2) {
  return e2.chartContain.dropInfo.width = 150, e2.chartContain.dropInfo.height = 50, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.title = "标签", e2;
}
const oc = { type: as.MfDecoration7, component: lt(() => import("./index40.js"), { loading: true }), create: tc, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration7Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, ac = Object.freeze(Object.defineProperty({ __proto__: null, default: oc, mfDecoration7Create: tc }, Symbol.toStringTag, { value: "Module" }));
function lc(e2) {
  return e2.chartContain.dropInfo.width = 320, e2.chartContain.dropInfo.height = 40, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2;
}
const nc = { type: as.MfDecoration8, component: lt(() => import("./index41.js"), { loading: true }), create: lc, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration8Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, ic = Object.freeze(Object.defineProperty({ __proto__: null, default: nc, mfDecoration8Create: lc }, Symbol.toStringTag, { value: "Module" }));
function rc(e2) {
  return e2.chartContain.dropInfo.width = 200, e2.chartContain.dropInfo.height = 200, e2.chart.options.mainColor = "#2e6099", e2.chart.options.secondColor = "#7ce7fd", e2.chart.options.duration = 3, e2;
}
const sc = { type: as.MfDecoration9, component: lt(() => import("./index42.js"), { loading: true }), create: rc, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecoration5Config.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, uc = Object.freeze(Object.defineProperty({ __proto__: null, default: sc, mfDecoration9Create: rc }, Symbol.toStringTag, { value: "Module" }));
function cc(e2) {
  return e2.chartContain.dropInfo.width = 1920, e2.chartContain.dropInfo.height = 76, e2.chart.options.mainColor = "#0042A2", e2.chart.options.secondColor = "#0042A2", e2;
}
const dc = { type: as.MfHeader1, create: cc, component: lt(() => import("./index43.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, pc = Object.freeze(Object.defineProperty({ __proto__: null, default: dc, mfHeader1Create: cc }, Symbol.toStringTag, { value: "Module" }));
function fc(e2) {
  return e2.chartContain.dropInfo.width = 1920, e2.chartContain.dropInfo.height = 80, e2.chart.options.mainColor = "#0077CF", e2.chart.options.secondColor = "#0042A2", e2;
}
const hc = { type: as.MfHeader2, create: fc, component: lt(() => import("./index44.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, gc = Object.freeze(Object.defineProperty({ __proto__: null, default: hc, mfHeader2Create: fc }, Symbol.toStringTag, { value: "Module" }));
function mc(e2) {
  return e2.chartContain.dropInfo.width = 1920, e2.chartContain.dropInfo.height = 75, e2.chart.options.mainColor = "#0077CF", e2.chart.options.secondColor = "#0042A2", e2;
}
const yc = { type: as.MfHeader3, create: mc, component: lt(() => import("./index45.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, vc = Object.freeze(Object.defineProperty({ __proto__: null, default: yc, mfHeader3Create: mc }, Symbol.toStringTag, { value: "Module" }));
function Cc(e2) {
  return e2.chartContain.dropInfo.width = 1920, e2.chartContain.dropInfo.height = 110, e2.chart.options.mainColor = "#0077CF", e2.chart.options.secondColor = "#18DBFD", e2;
}
const bc = { type: as.MfHeader4, create: Cc, component: lt(() => import("./index46.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, Mc = Object.freeze(Object.defineProperty({ __proto__: null, default: bc, mfHeader4Create: Cc }, Symbol.toStringTag, { value: "Module" }));
function kc(e2) {
  return e2.chartContain.dropInfo.width = 1920, e2.chartContain.dropInfo.height = 75, e2.chart.options.mainColor = "#0077CF", e2.chart.options.secondColor = "#0042A2", e2;
}
const wc = { type: as.MfHeader5, create: kc, component: lt(() => import("./index47.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, xc = Object.freeze(Object.defineProperty({ __proto__: null, default: wc, mfHeader5Create: kc }, Symbol.toStringTag, { value: "Module" }));
function Sc(e2) {
  return e2.chartContain.dropInfo.width = 1920, e2.chartContain.dropInfo.height = 75, e2.chart.options.mainColor = "#18DBFD", e2.chart.options.secondColor = "#18DBFD", e2;
}
const _c = { type: as.MfHeader6, create: Sc, component: lt(() => import("./index48.js"), { loading: true }), config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDecorationConfig.js"), { loading: true, size: "large" })), e2;
})(), initData: () => {
} }, $c = Object.freeze(Object.defineProperty({ __proto__: null, default: _c, mfHeader6Create: Sc }, Symbol.toStringTag, { value: "Module" })), Lc = e({ name: "MfDateTime", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const t2 = e2, o2 = m(t2.chart), a2 = () => {
    var _a2;
    ((_a2 = t2.chart.options) == null ? void 0 : _a2.format) ? o2.value.data.dataSet.title = st(/* @__PURE__ */ new Date(), t2.chart.options.format) : o2.value.data.dataSet.title = st();
  };
  return i(() => {
    a2(), setInterval(a2, 1e3);
  }), (t3, a3) => (s(), h(gs, { "chart-contain": e2.chartContain, chart: o2.value }, null, 8, ["chart-contain", "chart"]));
} });
function Dc(e2) {
  return e2.chart.data.dataSet = qe(Ic.defaultData), e2.chart.data.headers = Ic.defaultHeaders && Ic.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chartContain.dropInfo.width = 190, e2.chartContain.dropInfo.height = 34, e2;
}
const Ic = { type: as.MfDateTime, component: Lc, create: Dc, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfDataTimeConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { title: "" }, defaultHeaders: () => qe({ title: { colName: "title", dataType: "string", rename: "标签" } }), initData: () => {
} }, Tc = Object.freeze(Object.defineProperty({ __proto__: null, default: Ic, mfDateTimeCreate: Dc }, Symbol.toStringTag, { value: "Module" }));
function Nc() {
  const e2 = (e3, t3) => {
    var _a2;
    const o2 = (_a2 = e3 == null ? void 0 : e3.options) == null ? void 0 : _a2.seriesCache, a2 = e3 == null ? void 0 : e3.type, l2 = [];
    if (!t3) return l2;
    for (let e4 = 0; e4 < t3.length; e4++) if (o2 && o2.length > e4) l2.push(o2[e4]);
    else if (a2) {
      const t4 = Zd[a2].defaultSeries;
      t4 ? t4.length > e4 ? l2.push(qe(t4[e4])) : l2.push(qe(t4[0])) : l2.push({});
    } else l2.push({});
    return l2;
  };
  function t2(t3) {
    var _a2;
    ((_a2 = t3 == null ? void 0 : t3.data) == null ? void 0 : _a2.dataSet) && (t3 == null ? void 0 : t3.type) && (t3.data.dataSet = qe(Zd[t3.type].defaultData), t3.options.series = e2(t3, Zd[t3.type].defaultSeries || []));
  }
  return { resetDefault: t2, setDynamicData: function(o2, a2) {
    var _a2, _b, _c2, _d2;
    if (o2) {
      if ((a2 == null ? void 0 : a2.list.length) > 0 && o2.data.fields && (((_b = (_a2 = o2.data.fields) == null ? void 0 : _a2.dimensions) == null ? void 0 : _b.length) > 0 || ((_d2 = (_c2 = o2.data.fields) == null ? void 0 : _c2.source) == null ? void 0 : _d2.length) > 0)) {
        const { createMessage: l2 } = _e(), { deleteFieldValue: n2 } = ks(), i2 = o2.data.fields.dimensions ?? [], r2 = o2.data.fields.source ?? [];
        if (0 === i2.length || 0 === r2.length) return void t2(o2);
        const s2 = [];
        s2.push([...i2.map((e3) => e3.rename || e3.colName), ...r2.map((e3) => e3.rename || e3.colName)]);
        for (const e3 of a2.list) {
          const t3 = [];
          i2.forEach((o3) => {
            t3.push(e3[o3.colName]);
          }), r2.forEach((o3) => {
            const a3 = e3[o3.colName];
            if (Number.isNaN(Number.parseFloat(a3))) {
              const e4 = "值必须为数字";
              throw n2("source", o3.colName), l2.warning(e4), new Error(e4);
            }
            t3.push(a3);
          }), s2.push(t3);
        }
        return o2.data.dataSet = { source: s2 }, void (o2.options.series = e2(o2, r2));
      }
      t2(o2);
    }
  }, setStaticData: function(t3, o2) {
    if (!t3.type) return;
    t3.data.dataSet.source = o2;
    const a2 = Zd[t3.type];
    t3.data.headers = a2.defaultHeaders && a2.defaultHeaders(t3);
    let l2 = 1;
    t3.data.headers && (l2 = Object.keys(t3.data.headers).length - 1 || 1), t3.options.series = e2(t3, Array.from({ length: l2 }));
  }, getSeries: e2 };
}
const Bc = { type: as.MfBar, component: lt(() => import("./index49.js"), { loading: true, size: "large" }), create: function(e2) {
  return e2.chart.data.dataSet = qe(Bc.defaultData), e2.chart.data.headers = Bc.defaultHeaders && Bc.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chart.options = { grid: { left: "10%", right: "5%", top: "10%", bottom: "10%" }, xAxis: { show: true, type: "category" }, yAxis: { show: true }, series: qe(Bc.defaultSeries) }, e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 300, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfBarLineConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfBarLineDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { source: [["日期", "数据"], ["Mon", 120], ["Tue", 200], ["Wed", 150], ["Thu", 80], ["Fri", 70], ["Sat", 110], ["Sun", 130]] }, defaultHeaders: (e2) => {
  var _a2, _b;
  return os((_b = (_a2 = e2 == null ? void 0 : e2.data) == null ? void 0 : _a2.dataSet) == null ? void 0 : _b.source[0]);
}, defaultSeries: [{ type: "bar" }], initData: (e2, t2) => {
  const { setDynamicData: o2 } = Nc();
  o2(e2, t2);
} }, Rc = Object.freeze(Object.defineProperty({ __proto__: null, default: Bc }, Symbol.toStringTag, { value: "Module" }));
const qc = { ...Bc, type: as.MfBarHorizontal, create: function(e2) {
  const t2 = Bc.create(e2);
  return t2.chart.options = { ...t2.chart.options, xAxis: { show: true }, yAxis: { show: true, type: "category" } }, t2;
} }, Ac = Object.freeze(Object.defineProperty({ __proto__: null, default: qc }, Symbol.toStringTag, { value: "Module" }));
const Oc = { ...Bc, type: as.MfBarStack, create: function(e2) {
  const t2 = Bc.create(e2);
  return t2.chart.data.dataSet = qe(Oc.defaultData), t2.chart.data.headers = Oc.defaultHeaders && Oc.defaultHeaders(t2.chart), t2.chart.options.series = qe(Oc.defaultSeries), t2;
}, defaultSeries: [{ type: "bar", stack: "total" }, { type: "bar", stack: "total" }], defaultData: { source: [["日期", "数据1", "数据2"], ["Mon", 120, 80], ["Tue", 200, 132], ["Wed", 150, 90], ["Thu", 80, 180], ["Fri", 70, 110], ["Sat", 110, 130], ["Sun", 130, 90]] } }, jc = Object.freeze(Object.defineProperty({ __proto__: null, default: Oc }, Symbol.toStringTag, { value: "Module" }));
const zc = { ...Oc, type: as.MfBarLine, defaultSeries: [{ type: "bar" }, { type: "line" }], create: function(e2) {
  const t2 = Oc.create(e2);
  return t2.chart.options.series = qe(zc.defaultSeries), t2;
} }, Ec = Object.freeze(Object.defineProperty({ __proto__: null, default: zc }, Symbol.toStringTag, { value: "Module" }));
const Fc = { ...Bc, type: as.MfBarPlusMinus, create: function(e2) {
  const t2 = Bc.create(e2);
  return t2.chart.data.dataSet = qe(Fc.defaultData), t2.chart.data.headers = Fc.defaultHeaders && Fc.defaultHeaders(t2.chart), t2.chart.options = { ...t2.chart.options, xAxis: { show: true, type: "value", position: "top", splitLine: { show: true, lineStyle: { type: "dashed" } } }, yAxis: { show: true, type: "category", axisLine: { show: false }, axisLabel: { show: false }, axisTick: { show: false } }, series: qe(Fc.defaultSeries) }, t2;
}, defaultData: { source: [["维度", "数据"], ["ten", -0.07], ["nine", -0.09], ["eight", 0.2], ["seven", -0.44], ["six", -0.23], ["five", 0.08], ["four", -0.17], ["three", 0.47], ["two", -0.36], ["one", 0.18]] } }, Pc = Object.freeze(Object.defineProperty({ __proto__: null, default: Fc }, Symbol.toStringTag, { value: "Module" }));
const Hc = { ...Bc, type: as.MfLine, create: function(e2) {
  return e2.chart.data.dataSet = qe(Hc.defaultData), e2.chart.data.headers = Hc.defaultHeaders && Hc.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chart.options = { grid: { left: "10%", right: "10%", top: "10%", bottom: "10%" }, xAxis: { show: true, type: "category" }, yAxis: { show: true }, series: qe(Hc.defaultSeries) }, e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 300, e2;
}, defaultSeries: [{ type: "line" }] }, Qc = Object.freeze(Object.defineProperty({ __proto__: null, default: Hc }, Symbol.toStringTag, { value: "Module" }));
const Gc = { ...Hc, type: as.MfLineArea, create: function(e2) {
  const t2 = Hc.create(e2);
  return t2.chart.options.series = qe(Gc.defaultSeries), t2;
}, defaultSeries: [{ type: "line", areaStyle: {} }] }, Uc = Object.freeze(Object.defineProperty({ __proto__: null, default: Gc }, Symbol.toStringTag, { value: "Module" }));
const Vc = { ...Oc, type: as.MfLineAreaStack, create: function(e2) {
  const t2 = Oc.create(e2);
  return t2.chart.options.series = qe(Vc.defaultSeries), t2;
}, defaultSeries: [{ type: "line", areaStyle: {}, stack: "total" }, { type: "line", areaStyle: {}, stack: "total" }] }, Wc = Object.freeze(Object.defineProperty({ __proto__: null, default: Vc }, Symbol.toStringTag, { value: "Module" }));
const Yc = { ...Hc, type: as.MfLineSmooth, create: function(e2) {
  const t2 = Hc.create(e2);
  return t2.chart.options.series = qe(Yc.defaultSeries), t2;
}, defaultSeries: [{ type: "line", smooth: true }] }, Zc = Object.freeze(Object.defineProperty({ __proto__: null, default: Yc }, Symbol.toStringTag, { value: "Module" }));
const Kc = { ...Oc, type: as.MfLineStack, create: function(e2) {
  const t2 = Oc.create(e2);
  return t2.chart.options.series = qe(Kc.defaultSeries), t2;
}, defaultSeries: [{ type: "line", stack: "total" }, { type: "line", stack: "total" }] }, Xc = Object.freeze(Object.defineProperty({ __proto__: null, default: Kc }, Symbol.toStringTag, { value: "Module" })), Jc = [{ color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"], name: "默认" }, { color: ["#d87c7c", "#919e8b", "#d7ab82", "#6e7074", "#61a0a8", "#efa18d", "#787464", "#cc7e63", "#724e58", "#4b565b"], name: "复古" }, { color: ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"], name: "深色" }, { color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"], name: "灰粉" }, { color: ["#893448", "#d95850", "#eb8146", "#ffb248", "#f2d643", "#ebdba4"], name: "橘红" }, { color: ["#4ea397", "#22c3aa", "#7bd9a5", "#d0648a", "#f58db2", "#f2b3c9"], name: "青草" }, { color: ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"], name: "蓝绿" }, { color: ["#fc97af", "#87f7cf", "#f7f494", "#72ccff", "#f7c5a0", "#d4a4eb", "#d2f5a6", "#76f2f2"], name: "粉青" }, { color: ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b", "#c6e579", "#f4e001", "#f0805a", "#26c0c0"], name: "鲜明" }, { color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089"], name: "马卡龙" }, { color: ["#e01f54", "#5e4ea5", "#f5e8c8", "#b8d2c7", "#c6b38e", "#a4d8c2", "#f3d999", "#d3758f", "#dcc392", "#2e4783", "#82b6e9", "#ff6347", "#a092f1", "#0a915d", "#eaf889", "#6699FF", "#ff6666", "#3cb371", "#d5b158", "#38b6b6"], name: "罗马" }, { color: ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"], name: "光亮" }, { color: ["#9b8bba", "#e098c7", "#8fd3e8", "#71669e", "#cc70af", "#7cb4cc"], name: "深紫" }];
const ed = { type: as.MfMapChunks, component: lt(() => import("./index50.js"), { loading: true, size: "large" }), create: function(e2) {
  return e2.chart.data.dataSet = qe(ed.defaultData), e2.chart.data.headers = ed.defaultHeaders && ed.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chart.options = { tooltip: { show: true }, geo: { show: false, map: "china" }, visualMap: { show: false, min: 0, max: 100, text: ["高", "低"], realtime: false, calculable: true, inRange: { color: qe(Jc[0].color) } }, series: qe(ed.defaultSeries) }, e2.chartContain.dropInfo.width = 800, e2.chartContain.dropInfo.height = 650, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfMapChunksConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfMapChunksDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { source: [["区域", "值"], ["河北省", 90], ["湖北省", 60], ["江苏省", 30], ["北京市", 100], ["陕西省", 50], ["四川省", 20], ["湖南省", 80], ["内蒙古自治区", 40], ["新疆维吾尔自治区", 70], ["安徽省", 10]] }, defaultHeaders: (e2) => {
  var _a2, _b;
  return os((_b = (_a2 = e2 == null ? void 0 : e2.data) == null ? void 0 : _a2.dataSet) == null ? void 0 : _b.source[0]);
}, defaultSeries: [{ name: "分布图", type: "map", map: "china", scale: true, zoom: 1.2, scaleLimit: { min: 0.5, max: 2 }, emphasis: { itemStyle: { areaColor: "#3146B3", color: "#3146B3" } }, itemStyle: { areaColor: "#03133D", color: "#03133D", borderColor: "#6699FF", shadowColor: "#1773C3", shadowBlur: 10, borderWidth: 1 }, label: { color: "#ffffff", emphasis: { color: "#ffffff" } } }], initData: (e2, t2) => {
  const { setDynamicData: o2 } = td();
  o2(e2, t2);
} };
function td() {
  function e2(e3) {
    e3.data.dataSet = qe(ed.defaultData);
  }
  return { resetDefault: e2, setDynamicData: function(t2, o2) {
    var _a2, _b;
    if (t2) {
      if ((o2 == null ? void 0 : o2.list.length) > 0 && t2.data.fields && ((_b = (_a2 = t2.data.fields) == null ? void 0 : _a2.name) == null ? void 0 : _b.length) > 0) {
        const { createMessage: a2 } = _e(), { deleteFieldValue: l2 } = ks(), n2 = t2.data.fields.name ?? [], i2 = t2.data.fields.value ?? [];
        if (0 === n2.length || 0 === i2.length) return void e2(t2);
        const r2 = [];
        r2.push([...n2.map((e3) => e3.rename || e3.colName), ...i2.map((e3) => e3.rename || e3.colName)]);
        for (const e3 of o2.list) {
          const t3 = [];
          n2.forEach((o3) => {
            t3.push(e3[o3.colName]);
          }), i2.forEach((o3) => {
            const n3 = e3[o3.colName];
            if (Number.isNaN(Number.parseFloat(n3))) {
              const e4 = "值必须为数字";
              throw l2("value", o3.colName), a2.warning(e4).then(), new Error(e4);
            }
            t3.push(n3);
          }), r2.push(t3);
        }
        return void (t2.data.dataSet = { source: r2 });
      }
      e2(t2);
    }
  } };
}
const od = Object.freeze(Object.defineProperty({ __proto__: null, default: ed, useEchartsMapChunksData: td }, Symbol.toStringTag, { value: "Module" }));
const ad = { type: as.MfMapLine, component: lt(() => import("./index51.js"), { loading: true, size: "large" }), create: function(e2) {
  return e2.chart.data.dataSet = qe(ad.defaultData), e2.chart.data.headers = ad.defaultHeaders && ad.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chart.options = { tooltip: { show: true }, geo: { map: "china", scale: true, zoom: 1.2, scaleLimit: { min: 0.5, max: 2 }, emphasis: { itemStyle: { color: "#3146B3", areaColor: "#3146B3" } }, itemStyle: { color: "#03133D", areaColor: "#03133D", borderColor: "#6699FF", shadowColor: "#1773C3", shadowBlur: 10, borderWidth: 1 }, label: { color: "#ffffff", emphasis: { color: "#ffffff" } } }, visualMap: { show: false, min: 0, max: 100, text: ["高", "低"], realtime: false, calculable: true, inRange: { color: qe(Jc[0].color) } }, series: qe(ad.defaultSeries) }, e2.chartContain.dropInfo.width = 800, e2.chartContain.dropInfo.height = 650, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfMapLineConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfMapLineDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { source: [["起始", "结束", "值"], ["南京市", "北京市", 40], ["南京市", "西安市", 100], ["北京市", "上海市", 30], ["上海市", "广州市", 50], ["北京市", "武汉市", 20], ["北京市", "成都市", 80], ["长沙市", "北京市", 100]] }, defaultHeaders: (e2) => {
  var _a2, _b;
  return os((_b = (_a2 = e2 == null ? void 0 : e2.data) == null ? void 0 : _a2.dataSet) == null ? void 0 : _b.source[0]);
}, defaultSeries: [{ name: "飞线图", type: "lines", effect: { show: true, period: 6, trailLength: 0.7, color: "#fff", symbolSize: 3 }, lineStyle: { width: 1, curveness: 0.2 } }, { name: "城市", type: "effectScatter", coordinateSystem: "geo", rippleEffect: { brushType: "stroke" }, label: { show: true, position: "right", formatter: "{b}" } }], initData: (e2, t2) => {
  const { setDynamicData: o2 } = ld();
  o2(e2, t2);
} };
function ld() {
  function e2(e3) {
    e3.data.dataSet = qe(ad.defaultData);
  }
  return { resetDefault: e2, setDynamicData: function(t2, o2) {
    var _a2, _b, _c2, _d2;
    if (t2) {
      if ((o2 == null ? void 0 : o2.list.length) > 0 && t2.data.fields && (((_b = (_a2 = t2.data.fields) == null ? void 0 : _a2.start) == null ? void 0 : _b.length) > 0 || ((_d2 = (_c2 = t2.data.fields) == null ? void 0 : _c2.end) == null ? void 0 : _d2.length) > 0)) {
        const { createMessage: a2 } = _e(), { deleteFieldValue: l2 } = ks(), n2 = t2.data.fields.start ?? [], i2 = t2.data.fields.end ?? [], r2 = t2.data.fields.value ?? [];
        if (0 === n2.length || 0 === i2.length) return void e2(t2);
        const s2 = [];
        s2.push([...n2.map((e3) => e3.rename || e3.colName), ...i2.map((e3) => e3.rename || e3.colName), ...r2.map((e3) => e3.rename || e3.colName)]);
        for (const e3 of o2.list) {
          const t3 = [];
          n2.forEach((o3) => {
            t3.push(e3[o3.colName]);
          }), i2.forEach((o3) => {
            t3.push(e3[o3.colName]);
          }), r2.forEach((o3) => {
            const n3 = e3[o3.colName];
            if (Number.isNaN(Number.parseFloat(n3))) {
              const e4 = "值必须为数字";
              throw l2("value", o3.colName), a2.warning(e4).then(), new Error(e4);
            }
            t3.push(n3);
          }), s2.push(t3);
        }
        return void (t2.data.dataSet = { source: s2 });
      }
      e2(t2);
    }
  } };
}
const nd = Object.freeze(Object.defineProperty({ __proto__: null, default: ad, useEchartsMapLineData: ld }, Symbol.toStringTag, { value: "Module" }));
const id = { ...ad, type: as.MfMapLine3D, component: lt(() => import("./index52.js"), { loading: true, size: "large" }), create: function(e2) {
  var _a2;
  const t2 = ad.create(e2);
  return (_a2 = t2.chart.options) == null ? true : delete _a2.geo, t2.chart.options = { ...t2.chart.options, geo3D: { map: "china", shading: "lambert", viewControl: { distance: 85, rotateSensitivity: 0, zoomSensitivity: 0 }, light: { main: { intensity: 1.2, shadow: true } }, itemStyle: { areaColor: "#03133D", color: "#03133D", borderColor: "#6699FF", shadowColor: "#1773C3", shadowBlur: 10, borderWidth: 1 }, emphasis: { itemStyle: { areaColor: "#3146B3", color: "#3146B3" } }, label: { distance: 0, color: "#ffffff", emphasis: { color: "#ffffff" } } }, series: qe(id.defaultSeries) }, t2;
}, defaultSeries: [{ name: "飞线图", type: "lines3D", coordinateSystem: "geo3D", effect: { show: true, trailWidth: 2, trailLength: 0.8, trailOpacity: 0.8, trailColor: "#fff" }, lineStyle: { width: 1, curveness: 0.2 } }, { name: "城市", type: "scatter3D", coordinateSystem: "geo3D", rippleEffect: { brushType: "stroke" }, label: { show: true, position: "right", formatter: "{b}" } }] }, rd = Object.freeze(Object.defineProperty({ __proto__: null, default: id }, Symbol.toStringTag, { value: "Module" }));
const sd = { ...ed, type: as.MfMapScatter, component: lt(() => import("./index53.js"), { loading: true, size: "large" }), create: function(e2) {
  return e2.chart.data.dataSet = qe(sd.defaultData), e2.chart.data.headers = sd.defaultHeaders && sd.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chart.options = { tooltip: { show: true }, geo: { map: "china", scale: true, zoom: 1.2, scaleLimit: { min: 0.5, max: 2 }, emphasis: { itemStyle: { color: "#3146B3", areaColor: "#3146B3" } }, itemStyle: { color: "#03133D", areaColor: "#03133D", borderColor: "#6699FF", shadowColor: "#1773C3", shadowBlur: 10, borderWidth: 1 }, label: { color: "#ffffff", emphasis: { color: "#ffffff" } } }, visualMap: { show: false, min: 0, max: 100, text: ["高", "低"], realtime: false, calculable: true, inRange: { color: qe(Jc[0].color) } }, series: qe(sd.defaultSeries) }, e2.chartContain.dropInfo.width = 800, e2.chartContain.dropInfo.height = 650, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfMapScatterConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfMapChunksDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultSeries: [{ name: "城市", type: "effectScatter", symbolSize: 20, coordinateSystem: "geo", rippleEffect: { brushType: "stroke" }, label: { show: true, position: "right", formatter: "{b}" } }] }, ud = Object.freeze(Object.defineProperty({ __proto__: null, default: sd }, Symbol.toStringTag, { value: "Module" }));
const cd = { ...Bc, type: as.MfPie, create: function(e2) {
  return e2.chart.data.dataSet = qe(cd.defaultData), e2.chart.data.headers = cd.defaultHeaders && cd.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 400, e2.chart.options = { tooltip: { trigger: "item" }, series: qe(cd.defaultSeries) }, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfPieConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfPieDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultSeries: [{ type: "pie", radius: ["0%", "65%"] }] }, dd = Object.freeze(Object.defineProperty({ __proto__: null, default: cd }, Symbol.toStringTag, { value: "Module" }));
const pd = { ...cd, type: as.MfPieCircular, create: function(e2) {
  const t2 = cd.create(e2);
  return t2.chart.options.series = qe(pd.defaultSeries), t2;
}, defaultSeries: [{ type: "pie", radius: ["30%", "65%"] }] }, fd = Object.freeze(Object.defineProperty({ __proto__: null, default: pd }, Symbol.toStringTag, { value: "Module" }));
const hd = { ...cd, type: as.MfPieHalf, create: function(e2) {
  const t2 = cd.create(e2);
  return t2.chart.options.series = qe(hd.defaultSeries), t2;
}, defaultSeries: [{ type: "pie", center: ["50%", "70%"], radius: ["30%", "65%"], startAngle: 180, endAngle: 360 }] }, gd = Object.freeze(Object.defineProperty({ __proto__: null, default: hd }, Symbol.toStringTag, { value: "Module" }));
const md = { ...cd, type: as.MfPieRose, create: function(e2) {
  const t2 = cd.create(e2);
  return t2.chart.options.series = qe(md.defaultSeries), t2;
}, defaultSeries: [{ type: "pie", roseType: "area", radius: ["10%", "65%"], itemStyle: { borderRadius: 8 } }] }, yd = Object.freeze(Object.defineProperty({ __proto__: null, default: md }, Symbol.toStringTag, { value: "Module" }));
const vd = { component: lt(() => import("./index54.js"), { loading: true, size: "large" }), type: as.MfRadar, create: function(e2) {
  return e2.chart.data.dataSet = qe(vd.defaultData), e2.chart.data.headers = vd.defaultHeaders && vd.defaultHeaders(), e2.chart.data.limit = 5, e2.chart.data.maxLimit = 20, e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 400, e2.chart.options = { series: qe(vd.defaultSeries) }, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfRadarConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfRadarDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { indicator: [{ name: "速度" }, { name: "转向" }, { name: "飘移" }, { name: "灵敏" }, { name: "力量" }, { name: "加速度" }], data: [{ value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3], name: "法拉利" }, { value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3], name: "布加迪" }] }, defaultHeaders: () => qe({ name: { colName: "name", dataType: "string", rename: "名称" }, value: { colName: "value", dataType: "number", rename: "值" } }), defaultSeries: [{ type: "radar" }], initData: (e2, t2) => {
  const { setDynamicData: o2 } = Cd();
  o2(e2, t2);
} };
function Cd() {
  const { createMessage: e2 } = _e(), { deleteFieldValue: t2 } = ks();
  function o2(e3) {
    e3.data.dataSet = qe(vd.defaultData);
  }
  return { resetDefault: o2, setDynamicData: function(a2, l2) {
    var _a2, _b, _c2, _d2, _e2, _f2, _g2;
    if (a2) if (l2 && 0 !== l2.list.length && a2.data.fields) if (((_b = (_a2 = a2.data.fields) == null ? void 0 : _a2.dimensions) == null ? void 0 : _b.length) > 0 || ((_d2 = (_c2 = a2.data.fields) == null ? void 0 : _c2.source) == null ? void 0 : _d2.length) > 0) {
      if (((_f2 = (_e2 = a2.data.fields) == null ? void 0 : _e2.source) == null ? void 0 : _f2.length) > 0) {
        const o3 = [];
        for (const n2 of l2.list) {
          const l3 = [];
          a2.data.fields.source.forEach((o4) => {
            const a3 = n2[o4.colName];
            if (Number.isNaN(Number.parseFloat(a3))) {
              const a4 = "属性值必须为数字";
              throw t2("source", o4.colName), e2.warning(a4), new Error(a4);
            }
            l3.push(a3);
          });
          let i2 = "";
          ((_g2 = a2.data.fields.dimensions) == null ? void 0 : _g2.length) > 0 && (i2 = n2[a2.data.fields.dimensions[0].colName]), o3.push({ name: i2, value: l3 });
        }
        a2.data.dataSet = { indicator: a2.data.fields.source.map((e3) => ({ name: e3.rename || e3.colName })), data: o3 };
      }
    } else o2(a2);
    else o2(a2);
  } };
}
const bd = Object.freeze(Object.defineProperty({ __proto__: null, default: vd, useRadarData: Cd }, Symbol.toStringTag, { value: "Module" }));
const Md = { ...vd, type: as.MfRadarCircle, create: function(e2) {
  const t2 = vd.create(e2);
  return t2.chart.options = { ...t2.chart.options, radar: { shape: "circle" } }, e2;
} }, kd = Object.freeze(Object.defineProperty({ __proto__: null, default: Md }, Symbol.toStringTag, { value: "Module" }));
const wd = { ...Bc, type: as.MfScatter, create: function(e2) {
  return e2.chart.data.dataSet = qe(wd.defaultData), e2.chart.data.headers = wd.defaultHeaders && wd.defaultHeaders(e2.chart), e2.chart.data.limit = 100, e2.chart.data.maxLimit = 1e3, e2.chartContain.dropInfo.width = 400, e2.chartContain.dropInfo.height = 300, e2.chart.options = { grid: { left: "10%", right: "10%", top: "10%", bottom: "10%" }, xAxis: { show: true }, yAxis: { show: true }, series: qe(wd.defaultSeries) }, e2;
}, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfScatterConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfScatterDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { source: [["数据1", "数据2"], [10, 8.04], [8.07, 6.95], [13, 7.58], [9.05, 8.81], [11, 8.33], [14, 7.66], [13.4, 6.81], [10, 6.33], [14, 8.96], [12.5, 6.82], [9.15, 7.2], [11.5, 7.2], [3.03, 4.23], [12.2, 7.83], [2.02, 4.47], [1.05, 3.33], [4.05, 4.96], [6.03, 7.24], [12, 6.26], [12, 8.84], [7.08, 5.82], [5.02, 5.68]] }, defaultSeries: [{ type: "scatter" }] }, xd = Object.freeze(Object.defineProperty({ __proto__: null, default: wd }, Symbol.toStringTag, { value: "Module" })), Sd = e({ name: "MfPicture", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(e2) {
  const t2 = e2, { commonEvents: o2 } = ss(t2.chart), l2 = a(() => {
    var _a2;
    return ((_a2 = t2.chart.data.dataSet) == null ? void 0 : _a2.key) ? ut(ct(t2.chart.data.dataSet.key)) : ot;
  });
  return (t3, a2) => {
    var _a2;
    return s(), h(d(X), $({ src: l2.value, alt: ((_a2 = e2.chart.data.dataSet) == null ? void 0 : _a2.alt) || "图片" }, e2.chart.options, { width: e2.chartContain.dropInfo.width - 2, height: e2.chartContain.dropInfo.height - 2, fallback: d(ot) }, B(d(o2))), null, 16, ["src", "alt", "width", "height", "fallback"]);
  };
} });
function _d(e2) {
  return e2.chart.data.dataSet = qe($d.defaultData), e2.chart.data.headers = $d.defaultHeaders && $d.defaultHeaders(), e2.chart.data.limit = 1, e2.chart.data.maxLimit = 1, e2.chart.options.preview = false, e2.chartContain.dropInfo.width = 200, e2.chartContain.dropInfo.height = 200, e2;
}
const $d = { type: as.MfPicture, component: Sd, create: _d, config: (() => {
  const e2 = qe(es);
  return e2.data.show = false, e2.style.payload.component = T(lt(() => import("./MfPictureConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { key: "", alt: "" }, defaultHeaders: () => qe({ key: { colName: "key", dataType: "string", rename: "图片key" }, alt: { colName: "alt", dataType: "string", rename: "描述" } }), initData: () => {
} }, Ld = Object.freeze(Object.defineProperty({ __proto__: null, default: $d, mfPictureCreate: _d }, Symbol.toStringTag, { value: "Module" }));
function Dd(e2) {
  return e2.chart.data.dataSet = qe(Id.defaultData), e2.chart.data.headers = Id.defaultHeaders && Id.defaultHeaders(e2.chart), e2.chart.data.limit = 50, e2.chart.data.maxLimit = 1e3, e2.chartContain.dropInfo.width = 600, e2.chartContain.dropInfo.height = 300, e2.chart.options = { indexHeader: "序号", showHeader: true, index: true }, e2;
}
const Id = { type: as.MfScrollTable, component: lt(() => import("./index55.js"), { loading: true }), create: Dd, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfScrollTableConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfTableDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: { header: ["列1", "列2", "列3", "列4", "列5"], data: [[1e4, 1e3, 100, 10, 0], [10001, 1001, 101, 11, 1], [10002, 1002, 102, 12, 2], [10003, 1003, 103, 13, 3], [10004, 1004, 104, 14, 4], [10005, 1005, 105, 15, 5], [10006, 1006, 106, 16, 6], [10007, 1007, 107, 17, 7], [10008, 1008, 108, 18, 8], [10009, 1009, 109, 19, 9]] }, defaultHeaders: (e2) => os(e2 == null ? void 0 : e2.data.dataSet.header), initData: (e2, t2) => {
  const { setDynamicData: o2 } = Td();
  o2(e2, t2);
}, customEvents: [{ name: "行点击", value: "rowClick" }] };
function Td() {
  function e2(e3) {
    e3.data.dataSet = qe(Id.defaultData);
  }
  return { resetDefault: e2, setDynamicData: function(t2, o2) {
    var _a2, _b;
    if (!t2) return;
    const a2 = (_a2 = t2.data.fields) == null ? void 0 : _a2.fieldName;
    if (!a2 || 0 === a2.length) return void e2(t2);
    const l2 = [];
    a2.forEach((e3) => {
      l2.push(e3.rename || e3.colName);
    });
    const n2 = [];
    for (const e3 of o2.list) {
      const o3 = [];
      (_b = t2.data.fields) == null ? void 0 : _b.fieldName.forEach((t3) => {
        o3.push(e3[t3.colName]);
      }), n2.push(o3);
    }
    t2.data.dataSet = { header: l2, data: n2 };
  } };
}
const Nd = Object.freeze(Object.defineProperty({ __proto__: null, default: Id, mfScrollTableCreate: Dd, useDataScrollTable: Td }, Symbol.toStringTag, { value: "Module" }));
function Bd(e2) {
  return e2.chart.data.dataSet = qe(Rd.defaultData), e2.chart.data.headers = Rd.defaultHeaders && Rd.defaultHeaders(e2.chart), e2.chart.data.limit = 10, e2.chart.data.maxLimit = 1e3, e2.chartContain.dropInfo.width = 600, e2.chartContain.dropInfo.height = 50, e2;
}
const Rd = { type: as.MfSegmented, component: lt(() => import("./index56.js"), { loading: true }), create: Bd, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfSegmentedStyleConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfSegmentedDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: [{ title: "Daily", value: "1", icon: "ant-design:calendar-outlined" }, { title: "Weekly", value: "2", icon: "" }, { title: "Monthly", value: "3", icon: "" }, { title: "Quarterly", value: "4", icon: "" }, { title: "Yearly", value: "5", icon: "" }], defaultHeaders: () => qe({ title: { colName: "title", dataType: "string", rename: "标签显示" }, value: { colName: "value", dataType: "string", rename: "标签值" }, icon: { colName: "icon", dataType: "string", rename: "图标" } }), initData: (e2, t2) => {
  const { setDynamicData: o2 } = qd();
  o2(e2, t2);
}, customEvents: [{ name: "标签切换", value: "titleChange" }] };
function qd() {
  function e2(e3) {
    e3.data.dataSet = qe(Rd.defaultData);
  }
  return { resetDefault: e2, setDynamicData: function(t2, o2) {
    var _a2, _b, _c2, _d2;
    if (t2) {
      if (((_a2 = o2 == null ? void 0 : o2.list) == null ? void 0 : _a2.length) > 0) {
        t2.data.dataSet = [];
        for (const e3 of o2.list) {
          const o3 = { title: "", value: "", icon: "" }, a2 = (_b = t2.data.fields) == null ? void 0 : _b.title;
          a2 && a2.length > 0 && a2[0].colName && (o3.title = e3[a2[0].colName]);
          const l2 = (_c2 = t2.data.fields) == null ? void 0 : _c2.value;
          l2 && l2.length > 0 && l2[0].colName && (o3.value = e3[l2[0].colName]);
          const n2 = (_d2 = t2.data.fields) == null ? void 0 : _d2.icon;
          n2 && n2.length > 0 && n2[0].colName && (o3.icon = e3[n2[0].colName]), (o3.title || o3.value) && t2.data.dataSet.push(o3);
        }
        if (t2.data.dataSet.length > 0) return;
      }
      e2(t2);
    }
  } };
}
const Ad = Object.freeze(Object.defineProperty({ __proto__: null, default: Rd, mfSegmentedCreate: Bd, useSegmented: qd }, Symbol.toStringTag, { value: "Module" }));
function Od(e2) {
  return e2.chart.data.dataSet = qe(jd.defaultData), e2.chartContain.border.show = true, e2.chart.data.headers = jd.defaultHeaders && jd.defaultHeaders(e2.chart), e2.chart.data.limit = 10, e2.chart.data.maxLimit = 1e3, e2.chartContain.dropInfo.width = 150, e2.chartContain.dropInfo.height = 33, e2;
}
const jd = { type: as.MfSelect, component: lt(() => import("./index57.js"), { loading: true }), create: Od, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfSelectStyleConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfSelectDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: [{ label: "Daily", value: "1" }, { label: "Weekly", value: "2" }, { label: "Monthly", value: "3" }, { label: "Quarterly", value: "4" }, { label: "Yearly", value: "5" }], defaultHeaders: () => qe({ label: { colName: "label", dataType: "string", rename: "标签显示" }, value: { colName: "value", dataType: "string", rename: "标签值" } }), initData: (e2, t2) => {
  const { setDynamicData: o2 } = zd();
  o2(e2, t2);
}, customEvents: [{ name: "选中切换", value: "selectChange" }] };
function zd() {
  function e2(e3) {
    e3.data.dataSet = qe(jd.defaultData);
  }
  return { resetDefault: e2, setDynamicData: function(t2, o2) {
    var _a2, _b, _c2;
    if (t2) {
      if (((_a2 = o2 == null ? void 0 : o2.list) == null ? void 0 : _a2.length) > 0) {
        t2.data.dataSet = [];
        for (const e3 of o2.list) {
          const o3 = { label: "", value: "" }, a2 = (_b = t2.data.fields) == null ? void 0 : _b.label;
          a2 && a2.length > 0 && a2[0].colName && (o3.label = e3[a2[0].colName]);
          const l2 = (_c2 = t2.data.fields) == null ? void 0 : _c2.value;
          l2 && l2.length > 0 && l2[0].colName && (o3.value = e3[l2[0].colName]), (o3.label || o3.value) && t2.data.dataSet.push(o3);
        }
        if (t2.data.dataSet.length > 0) return;
      }
      e2(t2);
    }
  } };
}
const Ed = Object.freeze(Object.defineProperty({ __proto__: null, default: jd, mfSelectCreate: Od, useSelect: zd }, Symbol.toStringTag, { value: "Module" }));
function Fd(e2) {
  return e2.chart.data.dataSet = qe(Hd.defaultData), e2.chart.data.headers = Hd.defaultHeaders && Hd.defaultHeaders(e2.chart), e2.chart.data.limit = void 0, e2.chart.data.maxLimit = Number.MAX_VALUE, e2.chart.data.pagination = { pageSize: 5 }, e2.chartContain.dropInfo.width = 600, e2.chartContain.dropInfo.height = 380, e2.chart.options = { indexHeader: "序号", columns: [{ ellipsis: true, align: "center", width: 120 }, { ellipsis: true, align: "center", width: 120 }, { ellipsis: true, align: "center", width: 120 }], tableInfo: { scroll: { x: true, y: 330 }, columns: qe(Pd) } }, e2;
}
const Pd = [{ title: "姓名", dataIndex: "name" }, { title: "年龄", dataIndex: "age" }, { title: "地址", dataIndex: "address" }], Hd = { type: as.MfTable, component: lt(() => import("./index58.js"), { loading: true }), create: Fd, config: (() => {
  const e2 = qe(es);
  return e2.style.payload.component = T(lt(() => import("./MfTableConfig.js"), { loading: true, size: "large" })), e2.data.payload.component = T(lt(() => import("./MfTableDataConfig.js"), { loading: true, size: "large" })), e2;
})(), defaultData: [{ key: "1", name: "mfish nocode", age: 20, address: "Mfish nocode No. 1" }, { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" }, { key: "3", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" }, { key: "4", name: "Disabled User", age: 99, address: "Sidney No. 1 Lake Park" }, { key: "5", name: "John Brown", age: 32, address: "New York No. 1 Lake Park" }], defaultHeaders: (e2) => {
  var _a2;
  return ((_a2 = e2 == null ? void 0 : e2.data.dataSet) == null ? void 0 : _a2.length) > 0 ? os(Object.keys(e2 == null ? void 0 : e2.data.dataSet[0])) : os([]);
}, initData: (e2, t2) => {
  const { setDynamicData: o2 } = Qd();
  o2(e2, t2);
}, customEvents: [{ name: "行点击", value: "rowClick" }] };
function Qd() {
  function e2(e3) {
    e3.data.dataSet = qe(Hd.defaultData), e3.options.tableInfo.columns = qe(Pd), e3.data.pagination = { pageSize: e3.data.pagination.pageSize }, e3.options.index && e3.options.tableInfo.columns.unshift({ title: e3.options.indexHeader || "序号", width: 80, align: "center", ellipsis: true });
  }
  return { resetDefault: e2, setDynamicData: function(t2, o2) {
    var _a2;
    if (!t2) return;
    const a2 = (_a2 = t2.data.fields) == null ? void 0 : _a2.fieldName;
    if (!a2 || 0 === a2.length) return void e2(t2);
    (t2.options.index && t2.options.columns.length < a2.length + 1 || !t2.options.index && t2.options.columns.length < a2.length) && t2.options.columns.push({ width: 120, align: "center", ellipsis: true });
    const l2 = [];
    t2.options.index && l2.push(t2.options.tableInfo.columns[0]), a2.forEach((e3) => {
      l2.push({ title: e3.rename || e3.colName, dataIndex: e3.colName });
    });
    const { t: n2 } = $e(), { setDataTable: i2 } = ls();
    t2.options.tableInfo.columns = l2, t2.data.dataSet = o2.list, t2.data.pagination = { total: o2.total, pageSize: o2.pageSize, current: o2.pageNum, showSizeChanger: false, showQuickJumper: true, showTotal: (e3) => n2("component.table.total", { total: e3 }), onChange: (e3, o3) => {
      t2.data.pagination.current = e3, t2.data.pagination.pageSize = o3, i2(t2);
    } };
  } };
}
const Gd = Object.freeze(Object.defineProperty({ __proto__: null, default: Hd, mfTableCreate: Fd, useDataTable: Qd }, Symbol.toStringTag, { value: "Module" })), Ud = [{ value: "进入动画", payload: { icon: "carbon:login", data: [{ label: "渐显", value: "fadeIn" }, { label: "向右进入", value: "fadeInLeft" }, { label: "向左进入", value: "fadeInRight" }, { label: "向上进入", value: "fadeInUp" }, { label: "向下进入", value: "fadeInDown" }, { label: "向右长距进入", value: "fadeInLeftBig" }, { label: "向左长距进入", value: "fadeInRightBig" }, { label: "向上长距进入", value: "fadeInUpBig" }, { label: "向下长距进入", value: "fadeInDownBig" }, { label: "旋转进入", value: "rotateIn" }, { label: "左顺时针旋转", value: "rotateInDownLeft" }, { label: "右逆时针旋转", value: "rotateInDownRight" }, { label: "左逆时针旋转", value: "rotateInUpLeft" }, { label: "右逆时针旋转", value: "rotateInUpRight" }, { label: "弹入", value: "bounceIn" }, { label: "向右弹入", value: "bounceInLeft" }, { label: "向左弹入", value: "bounceInRight" }, { label: "向上弹入", value: "bounceInUp" }, { label: "向下弹入", value: "bounceInDown" }, { label: "光速从右进入", value: "lightSpeedInRight" }, { label: "光速从左进入", value: "lightSpeedInLeft" }, { label: "Y轴旋转", value: "flip" }, { label: "中心X轴旋转", value: "flipInX" }, { label: "中心Y轴旋转", value: "flipInY" }, { label: "左长半径旋转", value: "rollIn" }, { label: "由小变大进入", value: "zoomIn" }, { label: "左变大进入", value: "zoomInLeft" }, { label: "右变大进入", value: "zoomInRight" }, { label: "向上变大进入", value: "zoomInUp" }, { label: "向下变大进入", value: "zoomInDown" }, { label: "向右滑动展开", value: "slideInLeft" }, { label: "向左滑动展开", value: "slideInRight" }, { label: "向上滑动展开", value: "slideInUp" }, { label: "向下滑动展开", value: "slideInDown" }] } }, { value: "突出动画", payload: { icon: "carbon:loop", data: [{ label: "弹跳", value: "bounce" }, { label: "闪烁", value: "flash" }, { label: "放大缩小", value: "pulse" }, { label: "放大缩小弹簧", value: "rubberBand" }, { label: "左右晃动", value: "headShake" }, { label: "左右扇形摇摆", value: "swing" }, { label: "放大晃动缩小", value: "tada" }, { label: "扇形摇摆", value: "wobble" }, { label: "左右上下晃动", value: "jello" }] } }, { value: "退出动画", payload: { icon: "carbon:logout", data: [{ label: "渐隐", value: "fadeOut" }, { label: "向左退出", value: "fadeOutLeft" }, { label: "向右退出", value: "fadeOutRight" }, { label: "向上退出", value: "fadeOutUp" }, { label: "向下退出", value: "fadeOutDown" }, { label: "向左长距退出", value: "fadeOutLeftBig" }, { label: "向右长距退出", value: "fadeOutRightBig" }, { label: "向上长距退出", value: "fadeOutUpBig" }, { label: "向下长距退出", value: "fadeOutDownBig" }, { label: "旋转退出", value: "rotateOut" }, { label: "左顺时针旋转", value: "rotateOutDownLeft" }, { label: "右逆时针旋转", value: "rotateOutDownRight" }, { label: "左逆时针旋转", value: "rotateOutUpLeft" }, { label: "右逆时针旋转", value: "rotateOutUpRight" }, { label: "弹出", value: "bounceOut" }, { label: "向左弹出", value: "bounceOutLeft" }, { label: "向右弹出", value: "bounceOutRight" }, { label: "向上弹出", value: "bounceOutUp" }, { label: "向下弹出", value: "bounceOutDown" }, { label: "光速从右退出", value: "lightSpeedOutRight" }, { label: "光速从左退出", value: "lightSpeedOutLeft" }, { label: "中心X轴旋转", value: "flipOutX" }, { label: "中心Y轴旋转", value: "flipOutY" }, { label: "左长半径旋转", value: "rollOut" }, { label: "由小变大退出", value: "zoomOut" }, { label: "左变大退出", value: "zoomOutLeft" }, { label: "右变大退出", value: "zoomOutRight" }, { label: "向上变大退出", value: "zoomOutUp" }, { label: "向下变大退出", value: "zoomOutDown" }, { label: "向左滑动收起", value: "slideOutLeft" }, { label: "向右滑动收起", value: "slideOutRight" }, { label: "向上滑动收起", value: "slideOutUp" }, { label: "向下滑动收起", value: "slideOutDown" }] } }], Vd = async (e2, t2 = []) => {
  if (!e2) return;
  const o2 = (e3) => e3 ? "animate__infinite" : "animate__no_infinite", a2 = (t3) => new Promise((a3) => {
    const { value: l2 = "", duration: n2, loop: i2 = false, repeat: r2 } = t3;
    n2 && e2.style.setProperty("--animate-duration", `${n2}ms`), e2.classList.add("animate__animated", `animate__${l2}`, o2(i2), `animate__repeat-${r2}`);
    const s2 = (t4) => {
      t4.stopPropagation(), e2.removeEventListener("animationend", s2), e2.classList.remove("animate__animated", `animate__${l2}`, o2(i2), `animate__repeat-${r2}`), e2.style.removeProperty("--animate-duration"), setTimeout(() => {
        a3("end");
      }, 1);
    };
    e2.addEventListener("animationend", s2);
  });
  for (let e3 = 0, o3 = t2.length; e3 < o3; e3++) await a2(t2[e3]);
}, Wd = (e2, t2, o2) => {
  var _a2;
  if (e2.chart.id !== ((_a2 = t2.chart) == null ? void 0 : _a2.id) || !t2.chart.animations) return;
  const a2 = [];
  for (const o3 of t2.chart.animations) for (const t3 of o3.events) if (t3.event + t3.id === e2.eventId) {
    a2.push(o3);
    break;
  }
  Vd(o2, a2).then(() => {
  });
}, Yd = Object.assign({ "./MfButton/mfButton.data.ts": ps, "./MfCombine/mfCombine.data.ts": hs, "./MfDataTag/mfDataTag.data.ts": Ms, "./MfDataUi/MfDigits/mfDigits.data.ts": _s, "./MfDataUi/MfTireMarks/mfTireMarks.data.ts": Bs, "./MfDataUi/MfWheel/mfWheel.data.ts": Is, "./MfDataV/MfBorder1/mfBorder1.data.ts": As, "./MfDataV/MfBorder10/mfBorder10.data.ts": js, "./MfDataV/MfBorder11/mfBorder11.data.ts": Fs, "./MfDataV/MfBorder12/mfBorder12.data.ts": Hs, "./MfDataV/MfBorder13/mfBorder13.data.ts": Gs, "./MfDataV/MfBorder14/mfBorder14.data.ts": Ws, "./MfDataV/MfBorder15/mfBorder15.data.ts": Zs, "./MfDataV/MfBorder16/mfBorder16.data.ts": Xs, "./MfDataV/MfBorder17/mfBorder17.data.ts": eu, "./MfDataV/MfBorder18/mfBorder18.data.ts": ou, "./MfDataV/MfBorder19/mfBorder19.data.ts": lu, "./MfDataV/MfBorder2/mfBorder2.data.ts": iu, "./MfDataV/MfBorder20/mfBorder20.data.ts": su, "./MfDataV/MfBorder21/mfBorder21.data.ts": cu, "./MfDataV/MfBorder22/mfBorder22.data.ts": pu, "./MfDataV/MfBorder3/mfBorder3.data.ts": hu, "./MfDataV/MfBorder4/mfBorder4.data.ts": mu, "./MfDataV/MfBorder5/mfBorder5.data.ts": vu, "./MfDataV/MfBorder6/mfBorder6.data.ts": bu, "./MfDataV/MfBorder7/mfBorder7.data.ts": ku, "./MfDataV/MfBorder8/mfBorder8.data.ts": Su, "./MfDataV/MfBorder9/mfBorder9.data.ts": $u, "./MfDataV/MfDecoration1/mfDecoration.data.ts": Iu, "./MfDataV/MfDecoration10/mfDecoration.data.ts": Bu, "./MfDataV/MfDecoration11/mfDecoration.data.ts": Au, "./MfDataV/MfDecoration12/mfDecoration.data.ts": zu, "./MfDataV/MfDecoration2/mfDecoration.data.ts": Pu, "./MfDataV/MfDecoration3/mfDecoration.data.ts": Gu, "./MfDataV/MfDecoration4/mfDecoration.data.ts": Wu, "./MfDataV/MfDecoration5/mfDecoration.data.ts": Ku, "./MfDataV/MfDecoration6/mfDecoration.data.ts": ec, "./MfDataV/MfDecoration7/mfDecoration.data.ts": ac, "./MfDataV/MfDecoration8/mfDecoration.data.ts": ic, "./MfDataV/MfDecoration9/mfDecoration.data.ts": uc, "./MfDataV/MfHeader1/mfHeader1.data.ts": pc, "./MfDataV/MfHeader2/mfHeader2.data.ts": gc, "./MfDataV/MfHeader3/mfHeader3.data.ts": vc, "./MfDataV/MfHeader4/mfHeader4.data.ts": Mc, "./MfDataV/MfHeader5/mfHeader5.data.ts": xc, "./MfDataV/MfHeader6/mfHeader6.data.ts": $c, "./MfDateTime/mfDateTime.data.ts": Tc, "./MfEcharts/MfBar/mfBar.data.ts": Rc, "./MfEcharts/MfBarHorizontal/mfBarHorizontal.data.ts": Ac, "./MfEcharts/MfBarLine/mfBarLine.data.ts": Ec, "./MfEcharts/MfBarPlusMinus/mfBarPlusMinus.data.ts": Pc, "./MfEcharts/MfBarStack/mfBarStack.data.ts": jc, "./MfEcharts/MfLine/mfLine.data.ts": Qc, "./MfEcharts/MfLineArea/mfLineArea.data.ts": Uc, "./MfEcharts/MfLineAreaStack/mfLineAreaStack.data.ts": Wc, "./MfEcharts/MfLineSmooth/mfLineSmooth.data.ts": Zc, "./MfEcharts/MfLineStack/mfLineStack.data.ts": Xc, "./MfEcharts/MfMapChunks/mfMapChunks.data.ts": od, "./MfEcharts/MfMapLine/mfMapLine.data.ts": nd, "./MfEcharts/MfMapLine3D/mfMapLine3D.data.ts": rd, "./MfEcharts/MfMapScatter/mfMapScatter.data.ts": ud, "./MfEcharts/MfPie/mfPie.data.ts": dd, "./MfEcharts/MfPieCircular/mfPieCircular.data.ts": fd, "./MfEcharts/MfPieHalf/mfPieHalf.data.ts": gd, "./MfEcharts/MfPieRose/mfPieRose.data.ts": yd, "./MfEcharts/MfRadar/mfRadar.data.ts": bd, "./MfEcharts/MfRadarCircle/mfRadarCircle.data.ts": kd, "./MfEcharts/MfScatter/mfScatter.data.ts": xd, "./MfPicture/mfPicture.data.ts": Ld, "./MfScrollTable/mfScrollTable.data.ts": Nd, "./MfSegmented/mfSegmented.data.ts": Ad, "./MfSelect/mfSelect.data.ts": Ed, "./MfTable/mfTable.data.ts": Gd, "./MfTag/mfTag.data.ts": vs });
const Zd = { ...function() {
  const e2 = {};
  return Object.keys(Yd).forEach((t2) => {
    const o2 = Yd[t2].default;
    e2[o2.type] = o2;
  }), e2;
}() }, Kd = at();
function Xd(e2) {
  let t2, o2;
  return t2 = qr().getTheme === Ge.DARK ? "#ffffff" : "#000000", o2 = e2.backgroundImage ? `url(${ut(ct(e2.backgroundImage))}) 0% 0% / 100% 100% no-repeat` : e2.backgroundColor ?? "", { width: `${e2.width}px`, height: `${e2.height}px`, background: o2, color: t2 };
}
const Jd = () => {
  const e2 = Ve();
  return { chartContain: { ...qe(Vr), id: e2 }, chart: { ...qe(Ur), id: e2 } };
};
function ep(e2, t2, o2) {
  const a2 = qe(e2);
  if (!a2.chart.type) return;
  a2.chart.type === as.MfCombine && a2.chart.options.components.forEach((e3) => {
    const t3 = Ve();
    e3.chart.id = t3, e3.chartContain.id = t3;
  });
  const l2 = Ve();
  return e2.chartContain.dropInfo.x = t2, e2.chartContain.dropInfo.y = o2, a2.chart.name = tp(a2.chart.type, a2.chart.name), a2.chart.id = l2, a2.chartContain.id = l2, a2.chartContain.dropInfo.x = t2, a2.chartContain.dropInfo.y = o2, a2.chartContain.dropInfo.zIndex = 0, a2;
}
function tp(e2, t2) {
  const o2 = qr().getChartNameLabel;
  let a2 = t2 || e2;
  a2.replace(/(.*_)\d+/, "$1").endsWith("_") && (a2 = a2.slice(0, Math.max(0, a2.lastIndexOf("_"))));
  let l2 = o2.get(a2) || 0;
  return o2.set(a2, ++l2), `${a2}_${l2}`;
}
const op = (e2) => {
  const t2 = Jd();
  t2.chart.type = e2.type, t2.chart.name = tp(e2.type, e2.name);
  const o2 = Zd[e2.type];
  return o2 && o2.create ? function(e3) {
    return e3.chartContain.dropInfo.proportion = Number.parseFloat((e3.chartContain.dropInfo.width / e3.chartContain.dropInfo.height).toFixed(2)), e3;
  }(o2.create(t2)) : null;
};
function ap(e2, t2 = []) {
  var _a2;
  let o2;
  return o2 = ((_a2 = e2.chartContain.border.color) == null ? void 0 : _a2.startsWith("linear-gradient")) ? { [Qr.borderImage]: `${e2.chartContain.border.color} 1` } : { [Qr.borderColor]: e2.chartContain.border.color }, lp({ ...e2.chartContain.dropInfo, ...o2, [Qr.borderWidth]: e2.chartContain.border.show ? e2.chartContain.border.width : 0, [Qr.borderRadius]: e2.chartContain.border.radius, [Qr.background]: e2.chartContain.background, [Qr.opacity]: e2.chartContain.opacity, padding: e2.chartContain.padding }, t2);
}
function lp(e2, t2 = []) {
  const o2 = /* @__PURE__ */ new Set([Qr.width, Qr.height, Qr.borderWidth, Qr.borderRadius]), a2 = new Set(t2), l2 = [];
  a2.has(Qr.x) || a2.has(Qr.y) || (l2.push(`translate(${e2.x}px,${e2.y}px)`), a2.add(Qr.x), a2.add(Qr.y)), a2.has(Qr.rotate) || (l2.push(`rotate(${e2.rotate}deg)`), a2.add(Qr.rotate));
  const n2 = {};
  return Object.keys(e2).forEach((t3) => (a2.has(t3) || (n2[t3] = e2[t3], o2.has(t3) && n2[t3] && (n2[t3] += "px")), true)), l2.length > 0 && (n2.transform = l2.join(" ")), n2;
}
function np(e2) {
  const t2 = { ...e2 };
  if (0 !== t2.rotate) {
    const e3 = Math.round(t2.width * Xr(t2.rotate) + t2.height * Kr(t2.rotate)), o2 = (t2.width - e3) / 2;
    t2.x += Math.round(o2), t2.right = t2.x + e3;
    const a2 = Math.round(t2.height * Xr(t2.rotate) + t2.width * Kr(t2.rotate)), l2 = (a2 - t2.height) / 2;
    return t2.y -= Math.round(l2), t2.bottom = t2.y + a2, t2.width = e3, t2.height = a2, t2;
  }
  return t2.bottom = t2.y + t2.height, t2.right = t2.x + t2.width, t2;
}
function ip(e2, t2) {
  for (const o2 of e2) {
    if (o2.chart.id === t2) return o2;
    if (o2.chart.type === as.MfCombine) {
      for (const e3 of o2.chart.options.components) if (e3.chart.id === t2) return e3;
    }
  }
}
function rp(e2, t2) {
  const o2 = ip(e2, t2.id);
  if (!o2) return;
  const a2 = 0 === o2.chart.data.type ? o2.chart.data.dataSet : o2.chart.data.result;
  return Ye(a2) ? a2[0][t2.param] : a2 ? a2[t2.param] : void 0;
}
async function sp(e2, t2) {
  const o2 = (t3) => {
    if (!t3) return;
    const o3 = t3.data.params;
    if (o3) {
      const a3 = {}, l3 = (t4, o4) => {
        if (!o4) return;
        if (Ke(o4)) return void (a3[t4] = o4);
        const l4 = new URLSearchParams(globalThis.location.search);
        if (2 === o4.paramType) {
          const e3 = l4.get(o4.name);
          a3[t4] = e3 ?? o4.defaultValue;
        } else {
          const l5 = rp(e2, o4);
          l5 && (a3[t4] = l5);
        }
      };
      for (const e3 of Object.keys(o3)) Ye(o3[e3].value) ? o3[e3].value.forEach((t4) => {
        l3(e3, t4);
      }) : l3(e3, o3[e3].value);
      t3.data.paramsValue ? t3.data.paramsValue = { ...t3.data.paramsValue, ...a3 } : t3.data.paramsValue = a3;
    }
  }, { getDataTable: a2 } = ls(), l2 = [], n2 = [], i2 = qr(), r2 = (e3) => {
    if (0 === e3.chart.data.type ? l2.push(e3.chart) : n2.push(e3.chart), e3.chart.name) {
      const t3 = e3.chart.name.lastIndexOf("_");
      if (t3 > 0) {
        const o3 = e3.chart.name.slice(0, Math.max(0, t3)), a3 = Number(e3.chart.name.slice(Math.max(0, t3 + 1)));
        if (i2.getChartNameLabel.has(o3)) {
          return void (a3 > Number(i2.getChartNameLabel.get(o3)) && i2.getChartNameLabel.set(o3, Number(a3)));
        }
        i2.getChartNameLabel.set(o3, Number(a3));
      }
    }
  };
  for (const o3 of e2) if (t2 && (o3.chart.isResource = true), r2(o3), o3.chart.type === as.MfCombine) for (const e3 of o3.chart.options.components) t2 && (e3.chart.isResource = true), r2(e3);
  n2.sort((e3, t3) => (e3.data.priority ?? 0) < (t3.data.priority ?? 0) ? -1 : 1), l2.forEach((e3) => {
    if (e3.type) {
      const t3 = Zd[e3.type];
      t3 && (e3.data.headers = t3.defaultHeaders && t3.defaultHeaders(e3));
    }
  });
  let s2 = [], u2 = 0;
  for (const e3 of n2) e3.data.priority > u2 && (s2.length > 0 && (await Promise.all(s2), s2 = []), u2 = e3.data.priority), o2(e3), s2.push(a2(e3).then((t3) => {
    var _a2;
    e3.type && ((_a2 = Zd[e3.type]) == null ? void 0 : _a2.initData(e3, t3));
  }));
  return s2;
}
function up(e2) {
  var _a2;
  delete e2.data.headers, delete e2.data.result, 1 === e2.data.type && e2.data.id && delete e2.data.dataSet, delete e2.data.paramsValue, (_a2 = e2.showHide) == null ? true : delete _a2.show;
}
function cp(e2, t2) {
  const o2 = qe(e2);
  dp(o2);
  const a2 = { canvasConfig: JSON.stringify(t2), contains: [], layers: {} };
  for (const e3 of o2) {
    if (up(e3.chart), e3.chart.type === as.MfCombine) for (const t3 of e3.chart.options.components) up(t3.chart);
    a2.contains.push(e3.chartContain), a2.layers[e3.chart.id] = JSON.stringify(e3.chart);
  }
  return { ...a2, contains: JSON.stringify(a2.contains) };
}
function dp(e2) {
  if (!qr().getIsResource) return;
  const t2 = (e3) => {
    delete e3.isResource, 0 === e3.data.type && (e3.data.id = "");
  };
  for (const o2 of e2) if (t2(o2.chart), o2.chart.type === as.MfCombine) for (const e3 of o2.chart.options.components) t2(e3.chart);
}
function pp(e2) {
  return 0 === e2.data.type ? e2.data.dataSet : e2.data.result;
}
const fp = qr(), hp = (e2) => e2 <= 0, gp = (e2, t2) => e2 >= t2.length - 1, mp = (e2, t2, o2) => {
  const a2 = e2[t2];
  e2[t2] = e2[o2], e2[o2] = a2;
}, yp = et("screen-shortcut", { state: () => ({ showMenu: false, copyData: null, alignType: xp.GROUP }), getters: { getShowMenu() {
  return this.showMenu;
}, getAlignType() {
  return this.alignType;
}, getCopyData() {
  return this.copyData;
} }, actions: { setShowMenu(e2) {
  this.showMenu = e2;
}, setAlignType(e2) {
  this.alignType = e2;
}, copyComponent() {
  var _a2, _b;
  ((_a2 = fp.getSelectArea) == null ? void 0 : _a2.components.length) > 0 ? this.copyData = qe((_b = fp.getSelectArea) == null ? void 0 : _b.components) : fp.getCurComponent && (this.copyData = qe(fp.getCurComponent));
}, pasteComponent() {
  if (this.copyData) {
    if (Ye(this.copyData)) this.copyData.forEach((e2) => {
      const t2 = ep(e2, e2.chartContain.dropInfo.x + 10, e2.chartContain.dropInfo.y + 10);
      t2 && fp.addComponent(t2, 0);
    });
    else {
      const e2 = this.copyData.chartContain.dropInfo.x + 10, t2 = this.copyData.chartContain.dropInfo.y + 10, o2 = ep(this.copyData, e2, t2);
      o2 && (fp.addComponent(o2, 0), fp.setCurComponent(o2, 0));
    }
    fp.setUndoRedoData("组件复制");
  }
}, moveComponent(e2, t2) {
  fp.getCurComponent && ("x" === e2 && (fp.getCurComponent.chartContain.dropInfo.x = fp.getCurComponent.chartContain.dropInfo.x + t2), "y" === e2 && (fp.getCurComponent.chartContain.dropInfo.y = fp.getCurComponent.chartContain.dropInfo.y + t2), t2 >= 10 && fp.setUndoRedoData("组件移动"));
}, upComponent() {
  hp(fp.getCurComponentIndex) || (mp(fp.getComponentList, fp.getCurComponentIndex, fp.getCurComponentIndex - 1), fp.setCurComponentIndex(fp.getCurComponentIndex - 1), fp.setUndoRedoData("组件上移一层"));
}, downComponent() {
  gp(fp.getCurComponentIndex, fp.getComponentList) || (mp(fp.getComponentList, fp.getCurComponentIndex, fp.getCurComponentIndex + 1), fp.setCurComponentIndex(fp.getCurComponentIndex + 1), fp.setUndoRedoData("组件下移一层"));
}, topComponent() {
  fp.getCurComponent && !hp(fp.getCurComponentIndex) && (fp.getComponentList.splice(fp.getCurComponentIndex, 1), fp.getComponentList.unshift(fp.getCurComponent), fp.setCurComponentIndex(0), fp.setUndoRedoData("组件置顶"));
}, bottomComponent() {
  fp.getCurComponent && !gp(fp.getCurComponentIndex, fp.getComponentList) && (fp.getComponentList.splice(fp.getCurComponentIndex, 1), fp.getComponentList.push(fp.getCurComponent), fp.setCurComponentIndex(fp.getComponentList.length - 1), fp.setUndoRedoData("组件置底"));
}, composeComponent() {
  if (fp.getSelectArea.components.length <= 1) return;
  const e2 = [];
  fp.getSelectArea.components.forEach((t2) => {
    var _a2;
    if (t2.chart.type === as.MfCombine) {
      const o2 = { ...t2.chartContain.dropInfo }, a2 = t2.chart.options.components, l2 = (_a2 = fp.getScreenCanvas) == null ? void 0 : _a2.getBoundingClientRect();
      a2.forEach((e3) => {
        bp(e3, l2, o2, fp.getScale);
      }), e2.push(...t2.chart.options.components);
    } else e2.push(t2);
  }), C(() => {
    const t2 = op({ type: as.MfCombine, name: "组合" });
    null !== t2 && (t2.chartContain.dropInfo = Object.assign(t2.chartContain.dropInfo, fp.getSelectArea.dropInfo), t2.chart.options.components = e2, Cp(t2), fp.batchDeleteComponent(fp.getSelectArea.components), fp.addComponent(t2, 0), fp.cleanSelectArea(), fp.setCurComponent(t2, 0), fp.setUndoRedoData("组件组合"));
  });
}, decomposeComponent() {
  if (!fp.getCurComponent) return;
  if (fp.getCurComponent.chart.type !== as.MfCombine) return;
  fp.getCurComponent.chartContain.show || (fp.getCurComponent.chartContain.show = true);
  const e2 = fp.getCurComponent.chart.options.components, t2 = [];
  for (const o2 of e2) o2.chartContain.show || (o2.chartContain.show = true, t2.push(o2));
  C(() => {
    const o2 = { ...fp.getCurComponent.chartContain.dropInfo };
    if (!fp.getScreenCanvas) return;
    const a2 = fp.getScreenCanvas.getBoundingClientRect(), l2 = fp.getCurComponentIndex;
    fp.deleteComponent(l2);
    for (let t3 = e2.length - 1; t3 >= 0; t3--) bp(e2[t3], a2, o2, fp.getScale), fp.addComponent(e2[t3], l2), fp.getSelectArea.components.push(e2[t3]);
    t2.forEach((e3) => {
      e3.chartContain.show = false;
    }), kp(fp.getSelectArea.components), fp.setUndoRedoData("组件拆分");
  });
}, lockComponent() {
  this.lockUnLockComponent(true);
}, unLockComponent() {
  this.lockUnLockComponent(false);
}, lockUnLockComponent(e2) {
  var _a2, _b;
  ((_a2 = fp.getSelectArea) == null ? void 0 : _a2.components.length) > 0 && ((_b = fp.getSelectArea) == null ? void 0 : _b.components.forEach((t2) => {
    t2.chartContain.lock = e2;
  })), fp.getCurComponent && (fp.getCurComponent.chartContain.lock = e2), fp.setUndoRedoData(e2 ? "组件锁定" : "组件解锁");
}, hideComponent() {
  this.showHideComponent(false);
}, showComponent() {
  this.showHideComponent(true);
}, showHideComponent(e2) {
  var _a2, _b;
  ((_a2 = fp.getSelectArea) == null ? void 0 : _a2.components.length) > 0 && ((_b = fp.getSelectArea) == null ? void 0 : _b.components.forEach((t2) => {
    t2.chartContain.show = e2;
  })), fp.getCurComponent && (fp.getCurComponent.chartContain.show = e2), fp.setUndoRedoData(e2 ? "组件显示" : "组件隐藏");
}, deleteComponent() {
  fp.deleteComponent(), fp.setUndoRedoData("组件删除");
}, selectAllComponent() {
  kp(fp.getComponentList);
}, screenSave() {
  Kd.emit(Hr.SCREEN_SAVE);
}, screenPreview() {
  Kd.emit(Hr.SCREEN_PREVIEW);
} } });
function vp(e2) {
  return 100 * e2 + "%";
}
function Cp(e2) {
  const t2 = e2.chartContain.dropInfo;
  e2.chart.options.components.forEach((e3) => {
    e3.chartContain.groupStyle = ap(e3, [Qr.x, Qr.y]), e3.chartContain.groupStyle.left = vp((e3.chartContain.dropInfo.x - t2.x) / t2.width), e3.chartContain.groupStyle.top = vp((e3.chartContain.dropInfo.y - t2.y) / t2.height), e3.chartContain.groupStyle.width = vp(e3.chartContain.dropInfo.width / t2.width), e3.chartContain.groupStyle.height = vp(e3.chartContain.dropInfo.height / t2.height);
  });
}
function bp(e2, t2, o2, a2) {
  const l2 = document.querySelector(`#com${e2.chart.id}`);
  if (!l2) return;
  const n2 = l2.getBoundingClientRect(), i2 = n2.left - t2.left + n2.width / 2, r2 = n2.top - t2.top + n2.height / 2;
  e2.chartContain.dropInfo.rotate = Jr(e2.chartContain.dropInfo.rotate + o2.rotate), e2.chartContain.dropInfo.width = Math.abs(Math.round(Number.parseFloat(e2.chartContain.groupStyle.width) / 100 * o2.width)), e2.chartContain.dropInfo.height = Math.abs(Math.round(Number.parseFloat(e2.chartContain.groupStyle.height) / 100 * o2.height)), e2.chartContain.dropInfo.x = Math.abs(Math.round((i2 - e2.chartContain.dropInfo.width * a2 / 2) / a2)), e2.chartContain.dropInfo.y = Math.abs(Math.round((r2 - e2.chartContain.dropInfo.height * a2 / 2) / a2)), e2.chartContain.groupStyle = {};
}
function Mp(e2) {
  const t2 = qr(), o2 = [], { x: a2, y: l2 } = e2;
  return t2.getComponentList.forEach((t3) => {
    const { x: n2, y: i2, width: r2, height: s2 } = np(t3.chartContain.dropInfo);
    a2 <= n2 && l2 <= i2 && n2 + r2 <= a2 + e2.width && i2 + s2 <= l2 + e2.height && o2.push(t3);
  }), o2;
}
function kp(e2) {
  const t2 = qr();
  if (!e2 || (e2 == null ? void 0 : e2.length) < 1) return void t2.cleanSelectArea();
  let [o2, a2, l2, n2] = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  e2.forEach((e3) => {
    const t3 = np(e3.chartContain.dropInfo);
    t3.x < a2 && (a2 = t3.x), t3.y < o2 && (o2 = t3.y), t3.right > l2 && (l2 = t3.right), t3.bottom > n2 && (n2 = t3.bottom);
  });
  const i2 = { x: a2, y: o2, width: l2 - a2, height: n2 - o2, rotate: 0 };
  t2.setSelectArea({ show: false, dropInfo: i2, components: e2 }), 1 === e2.length && t2.setCurComponent(e2[0]);
}
function wp(e2) {
  const t2 = qr();
  if (t2.getCurComponent) {
    -1 === t2.getSelectArea.components.findIndex((e3) => e3.chart.id === t2.getCurComponent.chart.id) && t2.getSelectArea.components.push(t2.getCurComponent);
  }
  t2.cleanCurComponent(), t2.setSelectedComponents(e2), t2.getSelectArea.components.length > 1 && kp(t2.getSelectArea.components);
}
var xp = ((e2) => (e2.GROUP = "Group", e2.CANVAS = "Canvas", e2))(xp || {});
const Sp = (e2, t2) => {
  function o2(o3) {
    const n3 = "x" === o3 ? "width" : "height", i3 = (e3) => {
      const t3 = np(e3.chartContain.dropInfo);
      return (2 * t3[o3] + t3[n3]) / 2;
    };
    let r3, s2, u2, c2 = l2().sort((e3, t3) => i3(e3) < i3(t3) ? -1 : 1);
    const d2 = () => Math.round((s2 - r3 - c2.map((e3) => e3.chartContain.dropInfo[n3]).reduce((e3, t3) => e3 + t3)) / (c2.length + 1));
    switch (t2.getAlignType) {
      case "Group":
        r3 = c2[0].chartContain.dropInfo[o3] + c2[0].chartContain.dropInfo[n3], s2 = c2[c2.length - 1].chartContain.dropInfo[o3], c2 = c2.slice(1, -1), u2 = d2();
        break;
      default: {
        const e3 = a2();
        r3 = e3[0][o3], s2 = e3[1][o3], u2 = d2(), u2 < 0 && (c2[0].chartContain.dropInfo[o3] = 0, r3 = c2[0].chartContain.dropInfo[n3], s2 = c2[c2.length - 1].chartContain.dropInfo[o3] = s2 - c2[c2.length - 1].chartContain.dropInfo[n3], c2 = c2.slice(1, -1), u2 = d2());
        break;
      }
    }
    c2.forEach((e3) => {
      e3.chartContain.dropInfo[o3] = r3 + u2, r3 = e3.chartContain.dropInfo[o3] + e3.chartContain.dropInfo[n3];
    }), kp(e2.getSelectArea.components), e2.setUndoRedoData("x" === o3 ? "横向分布" : "纵向分布");
  }
  function a2() {
    if ("Group" === t2.getAlignType) {
      const t3 = e2.getSelectArea.components.flatMap((e3) => [e3.chartContain.dropInfo.x, e3.chartContain.dropInfo.x + e3.chartContain.dropInfo.width]).sort((e3, t4) => e3 < t4 ? -1 : 1), o3 = e2.getSelectArea.components.flatMap((e3) => [e3.chartContain.dropInfo.y, e3.chartContain.dropInfo.y + e3.chartContain.dropInfo.height]).sort((e3, t4) => e3 < t4 ? -1 : 1);
      return [{ x: t3[0], y: o3[0] }, { x: t3[t3.length - 1], y: o3[o3.length - 1] }];
    }
    return [{ x: 0, y: 0 }, { x: e2.canvasConfig.width, y: e2.canvasConfig.height }];
  }
  function l2() {
    return e2.getSelectArea.components.length > 0 ? e2.getSelectArea.components : [e2.getCurComponent];
  }
  function n2(t3) {
    const o3 = a2();
    l2().forEach((e3) => t3(e3, o3)), kp(e2.getSelectArea.components), e2.setUndoRedoData("对齐");
  }
  function i2() {
    e2.getCurComponent.chartContain.dropInfo.x = 0, e2.getCurComponent.chartContain.dropInfo.width = e2.canvasConfig.width;
  }
  function r2() {
    e2.getCurComponent.chartContain.dropInfo.y = 0, e2.getCurComponent.chartContain.dropInfo.height = e2.canvasConfig.height;
  }
  return { alignLeft: function() {
    n2((e3, t3) => {
      e3.chartContain.dropInfo.x = t3[0].x;
    });
  }, alignCenter: function() {
    n2((e3, t3) => {
      e3.chartContain.dropInfo.x = (t3[0].x + t3[1].x) / 2 - e3.chartContain.dropInfo.width / 2;
    });
  }, alignRight: function() {
    n2((e3, t3) => {
      e3.chartContain.dropInfo.x = t3[1].x - e3.chartContain.dropInfo.width;
    });
  }, alignTop: function() {
    n2((e3, t3) => {
      e3.chartContain.dropInfo.y = t3[0].y;
    });
  }, alignMiddle: function() {
    n2((e3, t3) => {
      e3.chartContain.dropInfo.y = (t3[0].y + t3[1].y) / 2 - e3.chartContain.dropInfo.height / 2;
    });
  }, alignBottom: function() {
    n2((e3, t3) => {
      e3.chartContain.dropInfo.y = t3[1].y - e3.chartContain.dropInfo.height;
    });
  }, distributeHorizontally: function() {
    o2("x");
  }, distributeVertically: function() {
    o2("y");
  }, fillWidth: i2, fillHeight: r2, fillScreen: function() {
    i2(), r2();
  } };
}, _p = (e2, t2) => {
  const o2 = 150;
  return { KeysEnum: { ArrowUp: He(() => t2.moveComponent("y", -1), o2), ArrowDown: He(() => t2.moveComponent("y", 1), o2), ArrowLeft: He(() => t2.moveComponent("x", -1), o2), ArrowRight: He(() => t2.moveComponent("x", 1), o2), Delete: Ae(() => t2.deleteComponent(), o2) }, CtrlKeysEnum: { c: Ae(() => t2.copyComponent(), o2), v: Ae(() => t2.pasteComponent(), o2), ArrowUp: He(() => t2.moveComponent("y", -10), o2), ArrowDown: He(() => t2.moveComponent("y", 10), o2), ArrowLeft: He(() => t2.moveComponent("x", -10), o2), ArrowRight: He(() => t2.moveComponent("x", 10), o2), g: Ae(() => t2.composeComponent(), o2), l: Ae(() => t2.lockComponent(), o2), h: Ae(() => t2.hideComponent(), o2), a: Ae(() => t2.selectAllComponent(), o2), p: Ae(() => t2.screenPreview(), o2), s: Ae(() => t2.screenSave(), o2), z: Ae(() => e2.undo(), o2) }, ShiftKeysEnum: { ArrowUp: He(() => t2.upComponent(), o2), ArrowDown: He(() => t2.downComponent(), o2) }, CtrlShiftKeysEnum: { ArrowUp: Ae(() => t2.topComponent(), o2), ArrowDown: Ae(() => t2.bottomComponent(), o2), g: Ae(() => t2.decomposeComponent(), o2), l: Ae(() => t2.unLockComponent(), o2), h: Ae(() => t2.showComponent(), o2), z: Ae(() => e2.redo(), o2) }, NoneShortcutKeyEnum: Sp(e2, t2) };
}, $p = { class: "title" }, Lp = eo(e({ __name: "ConfigWrapper", props: { iconfont: { type: String, default: void 0 }, icon: { type: String, default: void 0 }, title: { type: String, default: "" }, allowDelete: { type: Boolean, default: true }, full: { type: Boolean, default: false }, highlight: { type: Boolean, default: false }, queryMode: { type: Boolean, default: false } }, emits: ["deleteConfig", "execute"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = Se().getThemeColor, { prefixCls: l2 } = xe("config-wrapper"), n2 = Ve(), i2 = Sr(), y2 = m(false);
  function v2(e3) {
    o2("deleteConfig", e3);
  }
  function C2() {
    o2("execute", n2);
  }
  return (t3, o3) => (s(), r("div", { class: c([d(l2), d(i2).getShowData && d(i2).getShowDataLevel === d(n2) ? "active" : ""]), style: u(e2.highlight ? { border: `1px solid ${d(a2)}` } : "") }, [d(i2).getShowData && d(i2).getShowDataLevel === d(n2) ? (s(), r("div", { key: 0, class: "select", style: u({ backgroundColor: d(a2) }) }, [g(d(Be), { icon: "ant-design:check-outlined", color: "#FFFFFF", size: 14 })], 4)) : f("", true), void 0 !== e2.iconfont ? (s(), h(d(Be), { key: 1, color: d(a2), icon: `iconfont:${e2.iconfont}`, size: 14 }, null, 8, ["color", "icon"])) : f("", true), void 0 !== e2.icon ? (s(), h(d(Be), { key: 2, color: d(a2), icon: e2.icon, size: 14 }, null, 8, ["color", "icon"])) : f("", true), p("div", $p, S(e2.title), 1), e2.allowDelete && !e2.queryMode ? (s(), h(d(J), { key: 3, type: "vertical" })) : f("", true), e2.queryMode ? f("", true) : (s(), h(d(G), { key: 4, title: "删除" }, { default: M(() => [e2.allowDelete ? (s(), h(d(ee), { key: 0, size: "small", type: "link", onClick: v2 }, { icon: M(() => [g(d(pt))]), _: 1 })) : f("", true)]), _: 1 })), p("div", { class: c(["config", e2.full ? "full" : ""]) }, [R(t3.$slots, "config", {}, void 0, true)], 2), g(d(G), { title: "执行" }, { default: M(() => [g(d(ee), { size: "small", type: "link", style: { margin: "6px" }, onMouseenter: o3[0] || (o3[0] = (e3) => y2.value = true), onMouseleave: o3[1] || (o3[1] = (e3) => y2.value = false), onClick: C2 }, { icon: M(() => [!d(i2).getShowData || d(i2).getShowDataLevel !== d(n2) || y2.value ? (s(), h(d(ft), { key: 0 })) : (s(), h(d(ht), { key: 1 }))]), _: 1 })]), _: 1 })], 6));
} }), [["__scopeId", "data-v-c5dcf0b5"]]), Dp = eo(e({ __name: "SelectFields", props: { tableFields: { type: Object, require: true, default: void 0 }, fields: { type: Object, require: true, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["fieldChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, i2 = m([]), p2 = m(false), { prefixCls: f2 } = xe("select-fields"), C2 = a(() => {
    var _a2, _b;
    return o2.tableFields ? ((_a2 = o2.tableFields) == null ? void 0 : _a2.length) < 10 ? 30 * ((_b = o2.tableFields) == null ? void 0 : _b.length) : 300 : 30;
  }), b2 = m(false);
  l(() => o2.tableFields, (e3) => {
    var _a2;
    e3 && e3.length > 0 && (!function(e4) {
      var _a3;
      i2.value = ((_a3 = o2.tableFields) == null ? void 0 : _a3.map((t3) => ({ checked: !!(e4 == null ? void 0 : e4.find((e5) => e5.colName === t3.colName)), ...t3 }))) || [];
    }(o2.fields || []), p2.value = e3.length === ((_a2 = o2.fields) == null ? void 0 : _a2.length));
  }, { immediate: true });
  let k2 = false;
  const w2 = (e3) => {
    b2.value = e3, !e3 && k2 && (n2("fieldChange", i2.value.filter((e4) => e4.checked).map((e4) => ({ colName: e4.colName, fieldName: e4.fieldName, comment: e4.comment, expression: e4.expression, dataType: e4.dataType, tableAlias: e4.tableAlias, targetType: e4.targetType }))), k2 = false);
  }, _2 = (e3) => {
    p2.value = e3.target.checked, i2.value.forEach((e4) => e4.checked = p2.value), k2 = true;
  }, $2 = (e3) => {
    const t3 = i2.value.find((t4) => t4.colName === e3.target.id);
    t3 && (t3.checked = !t3.checked, k2 = true), p2.value = !i2.value.some((e4) => !e4.checked);
  };
  return (t3, o3) => (s(), h(d(V), { trigger: ["click"], onOpenChange: w2, placement: "bottom", arrow: { pointAtCenter: true } }, { overlay: M(() => [g(d(te), null, { default: M(() => [g(d(te).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: M(() => [(s(), r("div", { class: c(`${d(f2)}-check-wrapper`), key: `all_check_${p2.value}` }, [g(d(W), { checked: p2.value, onChange: _2, disabled: e2.queryMode }, { default: M(() => o3[0] || (o3[0] = [x("全选")])), _: 1, __: [0] }, 8, ["checked", "disabled"])], 2)), g(d(J), { style: { margin: "4px 0" } }), g(d(yt), { style: u({ height: `${C2.value}px` }) }, { default: M(() => [(s(true), r(y, null, v(i2.value, (t4) => (s(), r("div", { key: t4.colName + t4.checked, class: c(`${d(f2)}-check-wrapper`) }, [g(d(W), { checked: t4.checked, id: t4.colName, onChange: $2, disabled: e2.queryMode }, { default: M(() => [x(S(t4.colName + (t4.comment ? `[${t4.comment}]` : "")), 1)]), _: 2 }, 1032, ["checked", "id", "disabled"])], 2))), 128))]), _: 1 }, 8, ["style"])]), _: 1 })]), _: 1 })]), default: M(() => [g(d(ee), { type: "primary" }, { default: M(() => [o3[1] || (o3[1] = x(" 字段 ")), g(d(Be), { icon: b2.value ? "ant-design:caret-up-outlined" : "ant-design:caret-down-outlined" }, null, 8, ["icon"])]), _: 1, __: [1] })]), _: 1 }));
} }), [["__scopeId", "data-v-88afb51f"]]), Ip = eo(e({ __name: "TableFields", props: { sqlQuery: { type: Object, require: true, default: void 0 }, configMitt: { type: Object, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["fieldChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = H, r2 = H.Group, { prefixCls: u2 } = xe("table-fields"), p2 = m([]), f2 = Sr();
  function y2(e3) {
    Nr(o2.configMitt, { ...o2.sqlQuery, aggregates: [], groups: [], joins: [], customColumns: [], filters: [], orders: [], limit: void 0 }, e3);
  }
  function v2(e3) {
    a2("fieldChange", e3);
  }
  return l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.sourceTable;
  }, (e3) => {
    e3 && (e3 === f2.getTableName ? (f2.addTableFieldsMap(e3, f2.getTableFields), p2.value = f2.getTableFields) : Dr(o2.sqlQuery).then((t3) => {
      f2.addTableFieldsMap(e3, t3), p2.value = t3;
    }));
  }, { immediate: true }), i(() => {
    var _a2, _b;
    ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.sqlQuery) && ((_b = o2.sqlQuery) == null ? void 0 : _b.sourceTable) && Dr(o2.sqlQuery).then((e3) => {
      var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
      if ((_a3 = o2.sqlQuery) == null ? void 0 : _a3.sourceTable) {
        f2.addTableFieldsMap((_b2 = o2.sqlQuery) == null ? void 0 : _b2.sourceTable, e3), p2.value = f2.getTableFieldsMap.get((_c2 = o2.sqlQuery) == null ? void 0 : _c2.sourceTable) || [];
        const t3 = (_e2 = (_d2 = o2.sqlQuery) == null ? void 0 : _d2.fields) == null ? void 0 : _e2.filter((e4) => {
          var _a4;
          return (_a4 = p2.value) == null ? void 0 : _a4.find((t4) => t4.colName === e4.colName);
        });
        (t3 == null ? void 0 : t3.length) !== ((_g2 = (_f2 = o2.sqlQuery) == null ? void 0 : _f2.fields) == null ? void 0 : _g2.length) && a2("fieldChange", t3);
      }
    });
  }), (t3, a3) => (s(), h(Lp, { iconfont: "icon-mfish-table", title: "数据源", "allow-delete": false, onExecute: y2, "query-mode": e2.queryMode }, { config: M(() => [g(d(r2), { class: c(d(u2)), compact: "" }, { default: M(() => {
    var _a2, _b;
    return [g(d(n2), { value: (_a2 = e2.sqlQuery) == null ? void 0 : _a2.sourceTable, disabled: "" }, null, 8, ["value"]), g(Dp, $(t3.$attrs, { "table-fields": p2.value, fields: (_b = o2.sqlQuery) == null ? void 0 : _b.fields, onFieldChange: v2, "query-mode": e2.queryMode }), null, 16, ["table-fields", "fields", "query-mode"])];
  }), _: 1 }, 8, ["class"])]), _: 1 }, 8, ["query-mode"]));
} }), [["__scopeId", "data-v-1d0129ce"]]), Tp = async (e2, t2) => {
  var _a2, _b;
  const o2 = Sr(), a2 = [];
  a2.push({ value: t2.sourceTable, label: t2.sourceTable, realValue: t2.sourceTable });
  const l2 = void 0 === e2 && ((_a2 = t2.joins) == null ? void 0 : _a2.length) ? (_b = t2.joins) == null ? void 0 : _b.length : e2 || 0;
  for (let e3 = 0; e3 < l2; e3++) (t2 == null ? void 0 : t2.joins) && (t2 == null ? void 0 : t2.joins[e3].tableAlias) && a2.push({ value: t2.joins[e3].tableAlias, label: t2.joins[e3].tableAlias, realValue: t2.joins[e3].table || "" });
  return a2 == null ? void 0 : a2.map((e3) => {
    var _a3;
    return { ...e3, children: (_a3 = o2.getTableFieldsMap.get(e3.realValue)) == null ? void 0 : _a3.map((e4) => ({ value: e4.colName, label: e4.colName + (e4.comment ? `[${e4.comment}]` : ""), realValue: { ...e4 } })) };
  });
}, Np = (e2, t2, o2) => {
  for (; ; ) return o2.has(t2) ? (t2.endsWith(`_${e2}`) && (t2 = t2.slice(0, Math.max(0, t2.length - `${e2}`.length - 1))), Np(++e2, `${t2}_${e2}`, o2)) : t2;
}, Bp = (e2) => {
  var _a2, _b, _c2, _d2;
  return (e2 == null ? void 0 : e2.table) && ((_b = (_a2 = e2.condition) == null ? void 0 : _a2.field) == null ? void 0 : _b.colName) && ((_d2 = (_c2 = e2.condition) == null ? void 0 : _c2.joinedField) == null ? void 0 : _d2.colName);
}, Rp = (e2) => {
  const t2 = { fields: [], table: "", tableAlias: "", condition: { field: { tableAlias: "结果集" }, operation: "=", joinedField: {} }, type: "left" };
  e2 && e2.push(t2);
}, qp = eo(e({ __name: "ConfigButton", props: { level: { type: Number, default: 1 }, icon: { type: String, default: void 0 }, iconfont: { type: String, default: void 0 }, title: { type: String, default: "按钮" } }, setup(e2) {
  const t2 = e2, { prefixCls: o2 } = xe("config-button"), l2 = Se().getThemeColor, n2 = Sr(), i2 = a(() => t2.level < n2.getLevel ? 12 : 14);
  return (t3, a2) => (s(), h(d(ee), $(t3.$attrs, { size: "small", shape: "round", class: d(o2), style: { "--hover-color--": d(l2) }, type: "link" }), { icon: M(() => [e2.iconfont ? (s(), h(d(Be), { key: 0, icon: `iconfont:${e2.iconfont}`, style: { "margin-right": "8px" }, size: i2.value }, null, 8, ["icon", "size"])) : (s(), h(d(Be), { key: 1, icon: e2.icon, size: i2.value }, null, 8, ["icon", "size"]))]), default: M(() => [p("span", { class: c(e2.level < d(n2).getLevel ? "show-title" : ""), style: u({ fontSize: `${i2.value}px` }) }, S(e2.title), 7)]), _: 1 }, 16, ["class", "style"]));
} }), [["__scopeId", "data-v-749209b7"]]), Ap = { key: 0, class: "placeholder" }, Op = { class: "condition" }, jp = e({ __name: "TableJoins", props: { sqlQuery: { type: Object, require: true }, level: { type: Number, default: 1 }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["joinChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, i2 = te.Item, C2 = H, { prefixCls: _2 } = xe("table-joins"), $2 = Sr(), L2 = m([]), D2 = m([]), I2 = m([]), T2 = Se().getThemeColor, N2 = { left: "左联", inner: "内联", right: "右联", full: "全联" }, B2 = a(() => {
    var _a2;
    if (1 === $2.getSourceType || o2.queryMode) return false;
    if (o2.sqlQuery && ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins)) {
      for (const e3 of o2.sqlQuery.joins) if (!Bp(e3)) return false;
    }
    return Tr(o2.sqlQuery, o2.level);
  });
  l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins;
  }, (e3) => {
    if (!e3) return L2.value = [], void U2();
    L2.value = e3, U2();
  }, { immediate: true }), l(() => {
    var _a2;
    return $2.getTableFieldsByName((_a2 = o2.sqlQuery) == null ? void 0 : _a2.sourceTable);
  }, () => {
    var _a2;
    ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.sourceTable) && U2();
  }, { immediate: true });
  const R2 = a(() => {
    if ($2.getTableList.length > 0) {
      const e3 = [];
      return $2.getTableList.forEach((t3) => {
        e3.push({ value: t3.tableName, label: t3.tableName + (t3.tableComment ? `[${t3.tableComment}]` : "") });
      }), e3;
    }
    return [];
  }), q2 = (e3) => D2.value.length > e3 ? D2.value[e3] : [], A2 = (e3) => {
    var _a2, _b;
    if ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins) return (_b = o2.sqlQuery) == null ? void 0 : _b.joins[e3].table;
  }, O2 = (e3) => {
    var _a2, _b, _c2, _d2;
    if (!((_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins)) return [];
    const t3 = (_d2 = (_c2 = (_b = o2.sqlQuery) == null ? void 0 : _b.joins[e3]) == null ? void 0 : _c2.condition) == null ? void 0 : _d2.field;
    if ((t3 == null ? void 0 : t3.tableAlias) && (t3 == null ? void 0 : t3.fieldName)) {
      const { tableAlias: e4, fieldName: o3 } = t3;
      if (e4 && o3) return [e4, o3];
    }
    return [];
  }, j2 = (e3, t3) => q2(e3).find((e4) => e4.value === t3[0]) ? t3[1] : "", z2 = (e3) => I2.value.length > e3 ? b(I2.value[e3]) : [], E2 = (e3) => {
    var _a2, _b, _c2, _d2;
    if (!((_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins)) return [];
    const t3 = (_d2 = (_c2 = (_b = o2.sqlQuery) == null ? void 0 : _b.joins[e3]) == null ? void 0 : _c2.condition) == null ? void 0 : _d2.joinedField;
    return (t3 == null ? void 0 : t3.fieldName) ? [t3.fieldName] : [];
  };
  function F2() {
    Rp(L2.value);
  }
  function P2(e3) {
    var _a2, _b, _c2;
    if (((_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins) && ((_b = o2.sqlQuery) == null ? void 0 : _b.joins.length) > 0) {
      const t3 = (_c2 = o2.sqlQuery) == null ? void 0 : _c2.joins[e3];
      Bp(t3) && n2("joinChange", [...L2.value]);
    }
  }
  function Q2(e3, t3) {
    var _a2, _b, _c2, _d2, _e2, _f2;
    const a2 = (_b = (_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins) == null ? void 0 : _b.map((e4) => e4.tableAlias);
    a2 == null ? void 0 : a2.splice(e3), ((_c2 = o2.sqlQuery) == null ? void 0 : _c2.sourceTable) && a2.unshift((_d2 = o2.sqlQuery) == null ? void 0 : _d2.sourceTable);
    const l2 = new Set(a2), n3 = Np(0, t3, l2);
    return ((_e2 = o2.sqlQuery) == null ? void 0 : _e2.joins) && ((_f2 = o2.sqlQuery) == null ? void 0 : _f2.joins.length) >= e3 && (L2.value[e3].tableAlias = n3), n3;
  }
  function U2() {
    var _a2;
    const e3 = async (e4) => {
      if (!o2.sqlQuery) return;
      const t4 = await Tp(e4, o2.sqlQuery);
      t4 && (D2 == null ? void 0 : D2.value.splice(e4, 1, t4));
    }, t3 = (e4) => {
      var _a3;
      const t4 = L2.value[e4];
      if (t4) {
        if (t4.table) {
          const o3 = (_a3 = $2.getTableFieldsMap.get(t4.table)) == null ? void 0 : _a3.map((e5) => ({ value: e5.colName, label: e5.colName + (e5.comment ? `[${e5.comment}]` : ""), realValue: { ...e5 } }));
          return void (o3 && (I2 == null ? void 0 : I2.value.splice(e4, 1, o3)));
        }
        I2 == null ? void 0 : I2.value.splice(e4, 1, []);
      }
    };
    for (let o3 = 0; o3 < ((_a2 = L2 == null ? void 0 : L2.value) == null ? void 0 : _a2.length); o3++) e3(o3).then(() => {
      var _a3, _b;
      const e4 = L2.value[o3].condition;
      D2.value[0][0].value === (e4 == null ? void 0 : e4.field.tableAlias) && (e4 == null ? void 0 : e4.field) && !((_a3 = D2.value[0][0].children) == null ? void 0 : _a3.some((e5) => {
        var _a4;
        return e5.value === ((_a4 = L2.value[o3].condition) == null ? void 0 : _a4.field.colName);
      })) && (e4.field = { tableAlias: (_b = L2.value[o3].condition) == null ? void 0 : _b.field.tableAlias });
    }), t3(o3);
  }
  return (t3, a2) => {
    var _a2;
    const l2 = w("AInputGroup");
    return s(), r("div", { class: c(d(_2)) }, [(s(true), r(y, null, v((_a2 = e2.sqlQuery) == null ? void 0 : _a2.joins, (t4, c2) => (s(), h(Lp, { iconfont: "icon-mfish-join", title: "关联", key: c2, "query-mode": e2.queryMode, onDeleteConfig: (e3) => function(e4) {
      L2 == null ? void 0 : L2.value.splice(e4, 1), n2("joinChange", [...L2.value]);
    }(c2), onExecute: (e3) => function(e4, t5) {
      Nr(o2.configMitt, { ...o2.sqlQuery, joins: L2.value.slice(0, t5 + 1), aggregates: [], groups: [], customColumns: [], filters: [], orders: [], limit: void 0 }, e4);
    }(e3, c2) }, { config: M(() => {
      var _a3, _b, _c2;
      return [0 === c2 ? (s(), h(d(C2), { key: 0, class: "left-table", value: (_a3 = e2.sqlQuery) == null ? void 0 : _a3.sourceTable, disabled: "" }, null, 8, ["value"])) : (s(), h(d(C2), { key: 1, class: "left-table", value: (_b = t4.condition) == null ? void 0 : _b.field.tableAlias, disabled: "" }, null, 8, ["value"])), g(d(V), { class: "condition", placement: "bottom", arrow: { pointAtCenter: true }, disabled: e2.queryMode }, { overlay: M(() => [g(d(te), { onClick: (e3) => function(e4, t5) {
        t5.type = e4.key;
      }(e3, t4), "selected-keys": [t4.type] }, { default: M(() => [(s(true), r(y, null, v(Object.keys(N2), (e3) => (s(), h(d(i2), { key: e3 }, { default: M(() => [p("div", null, [x(S(N2[e3]) + " ", 1), g(d(Be), { icon: `iconfont:icon-mfish-${e3}-join`, color: d(T2), size: 14 }, null, 8, ["icon", "color"])])]), _: 2 }, 1024))), 128))]), _: 2 }, 1032, ["onClick", "selected-keys"])]), default: M(() => [p("a", { onClick: a2[0] || (a2[0] = k(() => {
      }, ["prevent"])) }, [x(S(N2[t4.type]) + " ", 1), g(d(Be), { icon: `iconfont:icon-mfish-${t4.type}-join`, color: d(T2), size: 14 }, null, 8, ["icon", "color"])])]), _: 2 }, 1032, ["disabled"]), g(l2, { class: "right-table", compact: "" }, { default: M(() => {
        return [g(d(oe), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", value: [A2(c2) || ""], options: R2.value, onChange: (e3) => function(e4, t5) {
          if (e4.length <= 0) return;
          const o3 = e4[0];
          if (t5.table === o3) return;
          t5.table = o3, t5.tableAlias = o3;
          const a4 = (e5) => {
            t5.fields = e5, t5.condition && (t5.condition.joinedField = {});
          };
          if ($2.getTableFieldsMap.has(o3)) return a4($2.getTableFieldsMap.get(o3)), void U2();
          Ai({ sourceId: Sr().getSourceId, tableName: t5.table, sourceType: 0 }).then((e5) => {
            $2.addTableFieldsMap(o3, e5), a4(e5);
          }).finally(() => U2());
        }(e3, t4) }, { displayRender: M(({ selectedOptions: e3 }) => {
          var _a4;
          return [e3[0] ? (s(), h(d(G), { key: 1, title: (_a4 = e3[0]) == null ? void 0 : _a4.label }, { default: M(() => {
            var _a5;
            return [x(S(Q2(c2, (_a5 = e3[0]) == null ? void 0 : _a5.value)), 1)];
          }), _: 2 }, 1032, ["title"])) : (s(), r("div", Ap, "选择关联表"))];
        }), _: 2 }, 1032, ["disabled", "value", "options", "onChange"]), g(Dp, { "query-mode": e2.queryMode, "table-fields": (a3 = t4.table, a3 && $2.getTableFieldsMap.has(a3) ? $2.getTableFieldsMap.get(a3) : []), fields: t4.fields, onFieldChange: (e3) => function(e4, t5) {
          var _a4;
          ((_a4 = o2.sqlQuery) == null ? void 0 : _a4.joins) && o2.sqlQuery.joins.length > 0 && (L2.value[t5].fields = e4), P2(t5);
        }(e3, c2) }, null, 8, ["query-mode", "table-fields", "fields", "onFieldChange"])];
        var a3;
      }), _: 2 }, 1024), p("span", { class: "condition", style: u({ color: d(T2) }) }, "当", 4), g(d(oe), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", options: q2(c2), value: O2(c2), placeholder: `${(_c2 = e2.sqlQuery) == null ? void 0 : _c2.sourceTable}字段`, onChange: (e3, o3) => function(e4, t5, o4) {
        o4.condition && (o4.condition.field = e4[1].realValue, o4.condition.field.tableAlias = e4[0].value, P2(t5));
      }(o3, c2, t4) }, { displayRender: M(({ labels: e3 }) => [g(d(G), { title: j2(c2, e3) }, { default: M(() => [x(S(j2(c2, e3)), 1)]), _: 2 }, 1032, ["title"])]), _: 2 }, 1032, ["disabled", "options", "value", "placeholder", "onChange"]), p("div", Op, [g(d(Be), { icon: "iconfont:icon-mfish-equals", color: d(T2), size: 14 }, null, 8, ["color"])]), g(d(K), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", value: E2(c2), options: z2(c2), placeholder: `${t4.tableAlias || "关联表"}字段`, onSelect: (e3, o3) => function(e4, t5, o4) {
        o4.condition && (o4.condition.joinedField = e4.realValue, P2(t5));
      }(o3, c2, t4) }, null, 8, ["disabled", "value", "options", "placeholder", "onSelect"])];
    }), _: 2 }, 1032, ["query-mode", "onDeleteConfig", "onExecute"]))), 128)), B2.value ? (s(), h(qp, { key: 0, class: "config-button", title: "关联", iconfont: "icon-mfish-join", level: 0, onClick: F2 })) : f("", true)], 2);
  };
} }), zp = eo(jp, [["__scopeId", "data-v-d960e99c"]]), Ep = e({ __name: "TableLimit", props: { sqlQuery: { type: Object, require: true }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["limitChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = m(1e3);
  function i2(e3) {
    n2.value = e3;
  }
  function r2() {
    a2("limitChange", d(n2));
  }
  function u2() {
    a2("limitChange");
  }
  function c2(e3) {
    Nr(o2.configMitt, { ...o2.sqlQuery, limit: n2.value }, e3);
  }
  return l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.limit;
  }, (e3) => {
    e3 && (n2.value = e3);
  }, { immediate: true }), (t3, o3) => {
    var _a2;
    return void 0 !== ((_a2 = e2.sqlQuery) == null ? void 0 : _a2.limit) ? (s(), h(Lp, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:column-height-outlined", title: "行数", onDeleteConfig: u2, onExecute: c2 }, { config: M(() => [g(d(Q), { disabled: e2.queryMode, "default-value": n2.value, "addon-after": "行", step: "10", onChange: i2, onPressEnter: r2, onBlur: r2 }, null, 8, ["disabled", "default-value"])]), _: 1 }, 8, ["query-mode"])) : f("", true);
  };
} }), Fp = [{ field: "id", label: "唯一ID", component: "Input", show: false }, { field: "name", label: "参数名称", component: "Input", dynamicRules: () => [{ required: true, validator: (e2, t2) => /^[\u4E00-\u9FA5\w]*$/.test(t2) ? Promise.resolve() : Promise.reject("错误：参数格式不正确！字符只允许中文、字符、数字、下划线!"), trigger: "blur" }] }, { field: "required", label: "是否必须", component: "RadioButtonGroup", defaultValue: 1, componentProps: { options: [{ label: "是", value: 1 }, { label: "否", value: 0 }] }, required: true }, { field: "defaultValue", label: "默认值", component: "Input" }, { field: "remark", label: "参数描述", component: "InputTextArea" }], Pp = { name: "ApiParamsModal", components: { BasicModal: Ct, BasicForm: kt }, emits: ["addSuccess", "updateSuccess", "register", "variableChange"], setup(e2, { emit: t2 }) {
  const o2 = m(true), [l2, { resetFields: n2, setFieldsValue: i2, validate: r2 }] = wt({ name: "model_form_item", labelWidth: 100, baseColProps: { span: 24 }, schemas: Fp, showActionButtonGroup: false, autoSubmitOnEnter: true }), s2 = m(), [u2, { setModalProps: c2, closeModal: p2 }] = bt(async (e3) => {
    n2().then(), c2({ confirmLoading: false, width: "600px" }), o2.value = !!(e3 == null ? void 0 : e3.isUpdate), d(o2) && (s2.value = e3.index, i2({ ...e3.param }).then());
  }), f2 = Sr(), h2 = a(() => d(o2) ? "编辑参数" : "新增参数"), { createMessage: g2 } = _e();
  return { registerModal: u2, registerForm: l2, getTitle: h2, handleSubmit: async function() {
    const e3 = (e4, t3) => {
      if (t3.some((t4) => t4.name === e4)) {
        const e5 = "错误：参数名称不允许重复!";
        throw g2.error(e5), new Error(e5);
      }
    };
    try {
      const a2 = await r2();
      if (d(o2)) {
        const o3 = [...f2.getVariables];
        o3.splice(s2.value, 1), e3(a2.name, o3), t2("updateSuccess", s2.value, a2);
      } else e3(a2.name, f2.getVariables), t2("addSuccess", a2);
      t2("variableChange", a2), p2();
    } catch (e4) {
    }
  } };
} };
const Hp = eo(Pp, [["render", function(e2, t2, o2, a2, l2, n2) {
  const i2 = w("BasicForm"), r2 = w("BasicModal");
  return s(), h(r2, $(e2.$attrs, { onRegister: a2.registerModal, title: a2.getTitle, onOk: a2.handleSubmit }), { default: M(() => [g(i2, { onRegister: a2.registerForm, onSubmit: a2.handleSubmit }, null, 8, ["onRegister", "onSubmit"])]), _: 1 }, 16, ["onRegister", "title", "onOk"]);
}]]), Qp = { key: 0 }, Gp = e({ __name: "FilterVariable", props: { value: { type: String }, queryMode: { type: Boolean, default: false } }, emits: ["variableChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = K.Option, i2 = Se().getThemeColor, { prefixCls: C2 } = xe("filter-variable"), [b2, { openModal: w2 }] = Mt(), _2 = Sr(), $2 = m();
  l(() => o2.value, (e3) => {
    $2.value = e3;
  }, { immediate: true });
  const L2 = (e3, { attrs: t3 }) => t3.vnodes;
  function D2() {
    w2(true, { isUpdate: false });
  }
  function I2(e3) {
    _2.getVariables.push(e3);
  }
  function T2(e3, t3) {
    _2.getVariables[e3] = t3;
  }
  function N2(e3) {
    a2("variableChange", e3);
  }
  function B2(e3) {
    $2.value = e3.name, a2("variableChange", e3.name);
  }
  return (t3, o3) => (s(), r(y, null, [g(d(K), { value: $2.value, "onUpdate:value": o3[0] || (o3[0] = (e3) => $2.value = e3), onChange: N2, disabled: e2.queryMode }, { dropdownRender: M(({ menuNode: e3 }) => [g(L2, { vnodes: e3 }, null, 8, ["vnodes"]), g(d(J), { style: { margin: "4px 0" } }), p("div", { style: { padding: "4px 8px", cursor: "pointer" }, onClick: D2 }, [g(d(Be), { icon: "ant-design:plus-outlined", color: d(i2) }, null, 8, ["color"]), p("span", { style: u(`color:${d(i2)};margin-left:6px`) }, "增加变量参数", 4)])]), default: M(() => [(s(true), r(y, null, v(d(_2).getVariables, (t4, o4) => (s(), h(d(n2), { label: t4.name, value: t4.name, key: o4 }, { default: M(() => [p("div", { class: c(`${d(C2)}-select-option`) }, [x(S(t4.name) + " ", 1), p("div", null, S(t4.remark), 1), e2.queryMode ? f("", true) : (s(), r("div", Qp, [g(d(Be), { icon: "ant-design:edit-outlined", color: d(i2), onClick: k((e3) => function(e4, t5) {
    w2(true, { index: e4, param: t5, isUpdate: true });
  }(o4, t4), ["stop"]) }, null, 8, ["color", "onClick"]), g(d(J), { type: "vertical" }), g(d(Be), { icon: "ant-design:delete-outlined", color: d(i2), onClick: k((e3) => function(e4) {
    _2.getVariables.splice(e4, 1), _2.getVariables.some((e5) => e5.name === $2.value) || ($2.value = "");
  }(o4), ["stop"]) }, null, 8, ["color", "onClick"])]))], 2)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["value", "disabled"]), g(Hp, { onRegister: d(b2), onAddSuccess: I2, onUpdateSuccess: T2, onVariableChange: B2 }, null, 8, ["onRegister"])], 64));
} }), Up = eo(Gp, [["__scopeId", "data-v-68d91e73"]]), Vp = e({ __name: "TableField", props: { tableFields: { type: Object }, value: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["change"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = m({ dataType: "STRING" }), i2 = m([]), r2 = Se().getThemeColor, u2 = m();
  function c2(e3) {
    u2.value = ei(e3);
  }
  return l(() => o2.value, (e3) => {
    e3 && (e3.tableAlias && e3.colName ? (n2.value = e3, i2.value = [e3.tableAlias, e3.colName + (e3.comment ? `[${e3.comment}]` : "")], c2(e3.dataType)) : (i2.value = [], n2.value = { dataType: "STRING" }));
  }, { immediate: true }), (t3, o3) => (s(), h(d(oe), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, "option-filter-prop": "label", options: e2.tableFields, value: i2.value, "onUpdate:value": o3[0] || (o3[0] = (e3) => i2.value = e3), placeholder: "选择字段", onChange: o3[1] || (o3[1] = (e3, t4) => function(e4) {
    var _a2;
    if (e4 && 2 === e4.length) {
      const t5 = e4[0].value, o4 = e4[1].realValue;
      i2.value = [t5, e4[1].value], n2.value = o4, n2.value && (n2.value.tableAlias = t5), c2((_a2 = n2.value) == null ? void 0 : _a2.dataType), a2("change", { ...n2.value });
    }
  }(t4)) }, { displayRender: M(({ labels: e3 }) => [g(d(G), { title: `${e3[0]} / ${e3[1]}` }, { default: M(() => [g(d(Be), { icon: u2.value, color: d(r2) }, null, 8, ["icon", "color"]), x(" " + S(`${e3[0]} / ${e3[1]}`), 1)]), _: 2 }, 1032, ["title"])]), _: 1 }, 8, ["disabled", "options", "value"]));
} }), Wp = e({ __name: "FilterValue", props: { fieldType: { type: String, default: "STRING" }, valueType: { type: String, default: "0" }, operator: { type: String, default: "" }, tableFields: { type: Array, default: () => [] }, queryMode: { type: Boolean, default: false } }, emits: ["typeChange", "variableChange", "fieldChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = H, i2 = ae.Group, u2 = ae.Button, p2 = le.ItemRest, { prefixCls: y2 } = xe("filter-value"), v2 = m("0"), C2 = Sr();
  function b2() {
    a2("typeChange", v2.value);
  }
  function k2(e3) {
    const t3 = C2.getVariables.find((t4) => t4.name === e3);
    t3 && a2("variableChange", e3, t3.required);
  }
  function w2(e3) {
    e3.tableAlias && e3.colName && a2("fieldChange", e3);
  }
  return l(() => o2.valueType, (e3) => {
    e3 && (v2.value = e3);
  }, { immediate: true }), (t3, o3) => (s(), r("div", { class: c(d(y2)) }, [g(d(i2), { size: "small", value: v2.value, "onUpdate:value": o3[0] || (o3[0] = (e3) => v2.value = e3), "button-style": "solid", onChange: b2, disabled: e2.queryMode }, { default: M(() => [g(d(u2), { value: "0" }, { default: M(() => o3[1] || (o3[1] = [x("常量")])), _: 1, __: [1] }), g(d(u2), { value: "1" }, { default: M(() => o3[2] || (o3[2] = [x("变量")])), _: 1, __: [2] }), g(d(u2), { value: "2" }, { default: M(() => o3[3] || (o3[3] = [x("字段")])), _: 1, __: [3] })]), _: 1 }, 8, ["value", "disabled"]), "0" === v2.value ? (s(), h(d(p2), { key: 0 }, { default: M(() => ["NUMBER" === e2.fieldType ? (s(), h(d(Q), $({ key: 0 }, t3.$attrs, { disabled: e2.queryMode }), null, 16, ["disabled"])) : "DATE" === e2.fieldType && "between" !== e2.operator ? (s(), h(d(ne), $({ key: 1, disabled: e2.queryMode }, t3.$attrs, { "show-time": true, "value-format": "YYYY-MM-DD HH:mm:ss" }), null, 16, ["disabled"])) : "DATE" === e2.fieldType && "between" === e2.operator ? (s(), h(d(ie), $({ key: 2, disabled: e2.queryMode }, t3.$attrs, { "show-time": true, placeholder: ["开始时间", "结束时间"], "value-format": "YYYY-MM-DD HH:mm:ss" }), null, 16, ["disabled"])) : (s(), h(d(n2), $({ key: 3 }, t3.$attrs, { disabled: e2.queryMode }), null, 16, ["disabled"]))]), _: 1 })) : f("", true), "1" === v2.value ? (s(), h(d(p2), { key: 1 }, { default: M(() => [g(Up, { "query-mode": e2.queryMode, value: t3.$attrs.value, onVariableChange: k2 }, null, 8, ["query-mode", "value"])]), _: 1 })) : f("", true), "2" === v2.value ? (s(), h(d(p2), { key: 2 }, { default: M(() => [g(Vp, { "query-mode": e2.queryMode, "table-fields": e2.tableFields, value: t3.$attrs.value, onChange: w2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 })) : f("", true)], 2));
} }), Yp = eo(Wp, [["__scopeId", "data-v-d05230c2"]]), Zp = e({ __name: "FilterModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = le.Item, l2 = n({ field: void 0, operator: "", value: void 0 }), i2 = m(), r2 = m([]), u2 = n({ field: { dataType: "STRING" }, type: "1", valueType: "0", required: true }), c2 = m([]), p2 = m(true), y2 = m(), v2 = { STRING: [{ label: "是", value: "eq" }, { label: "不是", value: "ne" }, { label: "包含", value: "like" }, { label: "不包含", value: "notLike" }, { label: "以开始", value: "likeLeft" }, { label: "以结束", value: "likeRight" }, { label: "为空", value: "isNull" }, { label: "不为空", value: "isNotNull" }], NUMBER: [{ label: "等于", value: "eq" }, { label: "不等于", value: "ne" }, { label: "大于", value: "gt" }, { label: "大于等于", value: "ge" }, { label: "小于", value: "lt" }, { label: "小于等于", value: "le" }, { label: "包含", value: "like" }, { label: "不包含", value: "notLike" }, { label: "以开始", value: "likeLeft" }, { label: "以结束", value: "likeRight" }, { label: "为空", value: "isNull" }, { label: "不为空", value: "isNotNull" }], DATE: [{ label: "晚于", value: "gt" }, { label: "晚于等于", value: "ge" }, { label: "早于", value: "lt" }, { label: "早于等于", value: "le" }, { label: "为空", value: "isNull" }, { label: "不为空", value: "isNotNull" }] }, [C2, { setModalProps: b2, closeModal: k2 }] = bt(async (e3) => {
    var _a2;
    if (b2({ confirmLoading: false, width: "600px" }), Tp(void 0, e3.sqlQuery).then((e4) => {
      r2.value = e4;
    }), e3.isUpdate) return u2.field = e3.field, u2.valueType = e3.valueType, u2.required = e3.required, x2((_a2 = u2.field) == null ? void 0 : _a2.dataType), y2.value = e3.index, l2.field = [e3.field.tableAlias, e3.field.colName], l2.operator = e3.operator, e3.operator === ti.between ? l2.value = e3.value ? e3.value.split(",") : [] : l2.value = e3.value ?? "", e3.operator === ti.isNull || e3.operator === ti.isNotNull ? (p2.value = false, l2.value = "") : p2.value = true, void ("2" === e3.valueType && e3.value && (l2.value = JSON.parse(e3.value)));
    l2.field = [], l2.value = void 0, l2.operator = "", y2.value = void 0, u2.field = {}, u2.valueType = "0", u2.required = true;
  });
  function w2(e3) {
    var _a2, _b;
    if (e3.tableAlias && e3.colName) {
      const t3 = e3.tableAlias;
      "0" === u2.valueType && e3.dataType !== ((_a2 = u2.field) == null ? void 0 : _a2.dataType) && (l2.value = void 0), l2.field = [t3, e3.colName], u2.field = e3, u2.field && (u2.field.tableAlias = t3), x2((_b = u2.field) == null ? void 0 : _b.dataType), c2.value.some((e4) => l2.operator === e4.value) || (l2.operator = "");
    }
  }
  function x2(e3) {
    e3 && (c2.value = v2[e3]);
  }
  function S2(e3) {
    var _a2;
    e3 === ti.isNull || e3 === ti.isNotNull ? (p2.value = false, l2.value = "") : p2.value = true, "DATE" === ((_a2 = u2.field) == null ? void 0 : _a2.dataType) && (e3 === ti.between ? l2.value = l2.value ? `${l2.value}`.split(",") : [] : l2.value = l2.value ? `${l2.value}`.split(",")[0] : "");
  }
  async function _2() {
    var _a2, _b, _c2, _d2;
    try {
      const e3 = await ((_a2 = i2.value) == null ? void 0 : _a2.validateFields());
      k2(), o2("submit", y2.value, { ...u2, name: `${(_b = u2.field) == null ? void 0 : _b.colName} ${l2.operator ? (_c2 = c2.value.find((e4) => e4.value === l2.operator)) == null ? void 0 : _c2.label : ""}${p2.value ? ` ${void 0 === l2.value ? "''" : "0" === u2.valueType ? "" === l2.value ? "''" : l2.value : "2" === u2.valueType ? (_d2 = l2.value) == null ? void 0 : _d2.colName : `#{${l2.value}}`}` : ""}`, operator: e3 == null ? void 0 : e3.operator, value: void 0 === (e3 == null ? void 0 : e3.value) ? "" : "2" === u2.valueType ? JSON.stringify(e3.value) : `${e3.value}` });
    } catch (e3) {
    }
  }
  function L2(e3) {
    l2.value = void 0, u2.valueType = e3;
  }
  function D2(e3, t3) {
    l2.value = e3, u2.required = t3;
  }
  function I2(e3) {
    l2.value = e3;
  }
  return (t3, o3) => (s(), h(d(Ct), $(t3.$attrs, { onRegister: d(C2), title: "设置过滤条件", onOk: _2 }), { default: M(() => [g(d(le), { ref_key: "formRef", ref: i2, model: l2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: M(() => {
    var _a2;
    return [g(d(a2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: M(() => [g(Vp, { "query-mode": e2.queryMode, "table-fields": r2.value, value: u2.field, onChange: w2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 }), g(d(a2), { label: "条件", name: "operator", rules: [{ required: true, message: "请选择条件！" }] }, { default: M(() => [g(d(K), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, class: "input-select", "option-filter-prop": "label", value: l2.operator, "onUpdate:value": o3[0] || (o3[0] = (e3) => l2.operator = e3), options: c2.value, placeholder: "选择条件", onSelect: S2 }, null, 8, ["disabled", "value", "options"])]), _: 1 }), p2.value ? (s(), h(d(a2), { key: 0, label: "值", name: "value", rules: [{ required: "STRING" !== ((_a2 = u2.field) == null ? void 0 : _a2.dataType), message: "请选择值！" }] }, { default: M(() => {
      var _a3;
      return [g(Yp, { "query-mode": e2.queryMode, placeholder: "输入值", value: l2.value, "onUpdate:value": o3[1] || (o3[1] = (e3) => l2.value = e3), "value-type": u2.valueType, "field-type": (_a3 = u2.field) == null ? void 0 : _a3.dataType, operator: l2.operator, "table-fields": r2.value, onTypeChange: L2, onVariableChange: D2, onFieldChange: I2 }, null, 8, ["query-mode", "value", "value-type", "field-type", "operator", "table-fields"])];
    }), _: 1 }, 8, ["rules"])) : f("", true)];
  }), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), Kp = e({ __name: "TableFilter", props: { sqlQuery: { type: Object }, level: { type: Number, default: 1 }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["filterChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, i2 = m([]), u2 = a(() => {
    var _a2;
    return void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.filters) && Tr(o2.sqlQuery, o2.level) && !o2.queryMode;
  });
  l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.filters;
  }, (e3) => {
    i2.value = e3 ? [...e3] : [];
  }, { immediate: true });
  const c2 = Se().getThemeColor, p2 = m([{ name: "添加", icon: "icon-mfish-left-bracket", color: c2, value: { type: "0", name: "(", value: "(" } }, { name: "添加", icon: "icon-mfish-right-bracket", color: c2, value: { type: "0", name: ")", value: ")" } }]), y2 = { type: "0", slot: true, hideClose: true, value: "and" }, [v2, { openModal: C2 }] = Mt();
  function b2() {
    n2("filterChange");
  }
  function w2() {
    n2("filterChange", []);
  }
  function x2() {
    C2(true, { sqlQuery: o2.sqlQuery, isUpdate: false });
  }
  function S2(e3, t3) {
    "0" !== t3.type && C2(true, { index: e3, ...t3, sqlQuery: o2.sqlQuery, isUpdate: true });
  }
  function _2(e3, t3) {
    var _a2;
    void 0 === e3 ? i2.value ? (((_a2 = i2.value) == null ? void 0 : _a2.findIndex((e4) => "1" === e4.type)) >= 0 && i2.value.push(y2), i2.value.push(t3)) : i2.value = [t3, y2] : i2.value && (i2.value[e3] = t3), n2("filterChange", i2.value ? [...i2.value] : []);
  }
  function $2(e3, t3) {
    if ("0" === t3.type) return;
    let o3 = false;
    const a2 = (e4) => {
      const t4 = i2.value[e4];
      return !!t4 && ("0" === t4.type && ("and" === t4.value || "or" === t4.value) && (i2.value.splice(e4, 1), true));
    };
    for (let t4 = e3 - 1; t4 >= 0; t4--) if (a2(t4)) return void (o3 = true);
    if (!o3) {
      for (let t4 = e3; t4 < i2.value.length; t4++) if (a2(t4)) return;
    }
  }
  function L2(e3) {
    n2("filterChange", [...e3]);
  }
  function D2(e3) {
    Nr(o2.configMitt, { ...o2.sqlQuery, filters: i2.value, aggregates: [], groups: [], customColumns: [], orders: [], limit: void 0 }, e3);
  }
  return (t3, o3) => {
    var _a2;
    return s(), r("div", null, [void 0 !== ((_a2 = e2.sqlQuery) == null ? void 0 : _a2.filters) ? (s(), h(Lp, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:filter-outlined", title: "过滤", onDeleteConfig: b2, full: true, onExecute: D2 }, { config: M(() => [g(d(vt), { "query-mode": e2.queryMode, items: i2.value, menus: p2.value, "add-title": "添加过滤条件", onAddBlock: x2, onEditBlock: S2, onCloseBlock: $2, onDragChange: L2 }, { tag: M(({ index: t4, element: o4 }) => [g(d(re), { disabled: e2.queryMode, style: { "margin-right": "8px" }, checked: o4 == null ? void 0 : o4.value, "checked-children": "且", "un-checked-children": "或", "checked-value": "and", "un-checked-value": "or", size: "small", onChange: (e3) => function(e4, t5) {
      var _a3;
      i2.value && ((_a3 = i2.value) == null ? void 0 : _a3.length) > t5 && (i2.value[t5].value = e4, setTimeout(() => {
        i2.value && n2("filterChange", [...i2.value]);
      }, 300));
    }(e3, t4) }, null, 8, ["disabled", "checked", "onChange"])]), _: 1 }, 8, ["query-mode", "items", "menus"])]), _: 1 }, 8, ["query-mode"])) : f("", true), u2.value ? (s(), h(qp, { key: 1, class: "config-button", title: "过滤", icon: "ant-design:filter-outlined", level: 0, onClick: k(w2, ["prevent"]) })) : f("", true), g(Zp, { "query-mode": e2.queryMode, onRegister: d(v2), onSubmit: _2 }, null, 8, ["query-mode", "onRegister"])]);
  };
} }), Xp = e({ __name: "AggregateModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = le.Item, l2 = n({ field: void 0, aggFunc: "" }), i2 = m(), r2 = m([]), u2 = n({ field: { dataType: "STRING" } }), c2 = Object.keys(oi).map((e3) => ({ value: e3, label: oi[e3] })), p2 = m(true), y2 = m(), [v2, { setModalProps: C2, closeModal: b2 }] = bt(async (e3) => {
    if (C2({ confirmLoading: false, width: "600px" }), Tp(void 0, e3.sqlQuery).then((e4) => {
      var _a2, _b;
      for (let t3 = 0; t3 < e4.length; t3++) {
        const o3 = e4[t3];
        o3.children ? (o3.children = (_a2 = o3.children) == null ? void 0 : _a2.filter((e5) => "NUMBER" === e5.realValue.dataType), 0 === ((_b = o3.children) == null ? void 0 : _b.length) && e4.splice(t3--, 1)) : e4.splice(t3--, 1);
      }
      r2.value = e4;
    }), e3.isUpdate) return l2.field = [e3.field.tableAlias, e3.field.colName], l2.aggFunc = e3.aggFunc, u2.field = e3.field, p2.value = oi[l2.aggFunc] !== oi.count, void (y2.value = e3.index);
    l2.field = [], l2.aggFunc = "", y2.value = void 0, p2.value = true, u2.field = {};
  });
  function k2(e3) {
    e3.tableAlias && e3.colName && (l2.field = [e3.tableAlias, e3.colName], u2.field = e3);
  }
  function w2(e3) {
    p2.value = oi[e3] !== oi.count;
  }
  async function x2() {
    var _a2, _b;
    try {
      const e3 = await ((_a2 = i2.value) == null ? void 0 : _a2.validateFields());
      b2(), o2("submit", y2.value, { ...u2, name: oi[l2.aggFunc] + (oi[l2.aggFunc] === oi.count ? "" : `(${(_b = u2.field) == null ? void 0 : _b.colName})`), aggFunc: e3.aggFunc });
    } catch (e3) {
    }
  }
  return (t3, o3) => (s(), h(d(Ct), $(t3.$attrs, { onRegister: d(v2), title: "选择聚合字段", onOk: x2 }), { default: M(() => [g(d(le), { ref_key: "formRef", ref: i2, model: l2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: M(() => [g(d(a2), { label: "聚合方式", name: "aggFunc", rules: [{ required: true, message: "请选择聚合方式！" }] }, { default: M(() => [g(d(K), { disabled: e2.queryMode, "show-search": "", "allow-clear": false, "option-filter-prop": "label", value: l2.aggFunc, "onUpdate:value": o3[0] || (o3[0] = (e3) => l2.aggFunc = e3), options: d(c2), placeholder: "选择聚合方式", onSelect: w2 }, null, 8, ["disabled", "value", "options"])]), _: 1 }), p2.value ? (s(), h(d(a2), { key: 0, label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: M(() => [g(Vp, { "query-mode": e2.queryMode, "table-fields": r2.value, value: u2.field, onChange: k2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 })) : f("", true)]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), Jp = e({ __name: "GroupModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = le.Item, l2 = n({ field: void 0 }), i2 = n({ field: { dataType: "STRING" } }), r2 = m(), u2 = m([]), c2 = m(), [p2, { setModalProps: f2, closeModal: y2 }] = bt(async (e3) => {
    if (f2({ confirmLoading: false, width: "600px" }), Tp(void 0, e3.sqlQuery).then((e4) => {
      u2.value = e4;
    }), e3.isUpdate) return l2.field = [e3.field.tableAlias, e3.field.colName], i2.field = e3.field, void (c2.value = e3.index);
    l2.field = [], c2.value = void 0, i2.field = {};
  });
  function v2(e3) {
    e3.tableAlias && e3.colName && (l2.field = [e3.tableAlias, e3.colName], i2.field = e3);
  }
  async function C2() {
    var _a2, _b;
    try {
      await ((_a2 = r2.value) == null ? void 0 : _a2.validateFields()), y2(), o2("submit", c2.value, { ...i2, name: (_b = i2.field) == null ? void 0 : _b.colName });
    } catch (e3) {
    }
  }
  return (t3, o3) => (s(), h(d(Ct), $(t3.$attrs, { onRegister: d(p2), title: "选择分组字段", onOk: C2 }), { default: M(() => [g(d(le), { ref_key: "formRef", ref: r2, model: l2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: M(() => [g(d(a2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: M(() => [g(Vp, { "query-mode": e2.queryMode, "table-fields": u2.value, value: i2.field, onChange: v2 }, null, 8, ["query-mode", "table-fields", "value"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), ef = e({ __name: "TableAggregate", props: { sqlQuery: { type: Object }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["aggregateChange", "groupChange", "deleteAggregate"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = Se().getThemeColor, { prefixCls: i2 } = xe("table-aggregate"), u2 = m(), y2 = m(), [v2, { openModal: C2 }] = Mt(), [b2, { openModal: k2 }] = Mt();
  async function w2() {
    a2("deleteAggregate");
  }
  function x2() {
    C2(true, { sqlQuery: o2.sqlQuery, isUpdate: false });
  }
  function S2(e3, t3) {
    void 0 === e3 ? u2.value ? u2.value.push(t3) : u2.value = [t3] : u2.value && (u2.value[e3] = t3), a2("aggregateChange", u2.value ? [...u2.value] : []);
  }
  function _2(e3, t3) {
    C2(true, { index: e3, ...t3, sqlQuery: o2.sqlQuery, isUpdate: true });
  }
  function $2(e3) {
    a2("aggregateChange", [...e3]);
  }
  function L2() {
    k2(true, { sqlQuery: o2.sqlQuery, isUpdate: false });
  }
  function D2(e3, t3) {
    void 0 === e3 ? y2.value ? y2.value.push(t3) : y2.value = [t3] : y2.value && (y2.value[e3] = t3), a2("groupChange", y2.value ? [...y2.value] : []);
  }
  function I2(e3, t3) {
    k2(true, { index: e3, ...t3, sqlQuery: o2.sqlQuery, isUpdate: true });
  }
  function T2(e3) {
    a2("groupChange", [...e3]);
  }
  function N2(e3) {
    Nr(o2.configMitt, { ...o2.sqlQuery, aggregates: u2.value, groups: y2.value, orders: [], limit: void 0 }, e3);
  }
  return l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.aggregates;
  }, (e3) => {
    u2.value = e3 ? [...e3] : [];
  }, { immediate: true }), l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.groups;
  }, (e3) => {
    y2.value = e3 ? [...e3] : [];
  }, { immediate: true }), (t3, o3) => {
    var _a2;
    return s(), r("div", { class: c(d(i2)) }, [void 0 !== ((_a2 = e2.sqlQuery) == null ? void 0 : _a2.aggregates) ? (s(), h(Lp, { key: 0, "query-mode": e2.queryMode, iconfont: "icon-mfish-sum", title: "聚合", onDeleteConfig: w2, onExecute: N2, full: true }, { config: M(() => [g(d(vt), { "query-mode": e2.queryMode, items: u2.value, "add-title": "添加聚合指标", onAddBlock: x2, onEditBlock: _2, onDragChange: $2 }, null, 8, ["query-mode", "items"]), g(d(Be), { class: "groupIcon", icon: "ant-design:group-outlined", color: d(n2), style: { "font-size": "14px" } }, null, 8, ["color"]), o3[0] || (o3[0] = p("div", { class: "group" }, "分组", -1)), g(d(vt), { "query-mode": e2.queryMode, items: y2.value, "add-title": "添加分组指标", onAddBlock: L2, onEditBlock: I2, onDragChange: T2 }, null, 8, ["query-mode", "items"])]), _: 1 }, 8, ["query-mode"])) : f("", true), g(Xp, { "query-mode": e2.queryMode, onRegister: d(v2), onSubmit: S2 }, null, 8, ["query-mode", "onRegister"]), g(Jp, { "query-mode": e2.queryMode, onRegister: d(b2), onSubmit: D2 }, null, 8, ["query-mode", "onRegister"])], 2);
  };
} }), tf = eo(ef, [["__scopeId", "data-v-a3fb541b"]]), of = "其他", af = e({ __name: "OrderModal", emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = le.Item, l2 = n({ field: void 0 }), i2 = n({ field: { dataType: "STRING" }, order: "ASC" }), r2 = m(), u2 = m([]), c2 = m(), p2 = Sr(), [f2, { setModalProps: y2, closeModal: v2 }] = bt(async (e3) => {
    if (y2({ confirmLoading: false, width: "600px" }), Ir(e3.sqlQuery) ? qi({ sourceId: p2.getSourceId, sourceType: p2.getSourceType, sqlQuery: e3.sqlQuery }).then((e4) => {
      u2.value = [{ value: of, label: of, realValue: of, children: e4.map((e5) => ({ value: e5.colName, label: e5.colName + (e5.comment ? `[${e5.comment}]` : ""), realValue: { ...e5 } })) }];
    }) : u2.value = await Tp(void 0, e3.sqlQuery), e3.isUpdate) return l2.field = [e3.field.tableAlias, e3.field.colName], i2.field = e3.field, void (c2.value = e3.index);
    l2.field = [], c2.value = void 0, i2.field = {};
  });
  function C2(e3) {
    e3.tableAlias && e3.colName && (l2.field = [e3.tableAlias, e3.colName], i2.field = e3);
  }
  async function b2() {
    var _a2, _b;
    try {
      await ((_a2 = r2.value) == null ? void 0 : _a2.validateFields()), v2(), i2.field.tableAlias === of && (i2.field.tableAlias = ""), o2("submit", c2.value, { ...i2, name: (_b = i2.field) == null ? void 0 : _b.colName });
    } catch (e3) {
    }
  }
  return (e3, t3) => (s(), h(d(Ct), $(e3.$attrs, { onRegister: d(f2), title: "选择排序字段", onOk: b2 }), { default: M(() => [g(d(le), { ref_key: "formRef", ref: r2, model: l2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: M(() => [g(d(a2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: M(() => [g(Vp, { "table-fields": u2.value, value: i2.field, onChange: C2 }, null, 8, ["table-fields", "value"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), lf = e({ __name: "TableOrder", props: { sqlQuery: { type: Object, default: void 0 }, configMitt: { type: Object, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["orderChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = m([]), [i2, { openModal: u2 }] = Mt();
  function c2() {
    u2(true, { sqlQuery: o2.sqlQuery, isUpdate: false });
  }
  function p2(e3, t3) {
    t3.order = "ASC" === t3.order ? "DESC" : "ASC", C2(e3, t3);
  }
  function y2(e3) {
    a2("orderChange", [...e3]);
  }
  function v2() {
    a2("orderChange");
  }
  function C2(e3, t3) {
    void 0 === e3 ? n2.value ? n2.value.push(t3) : n2.value = [t3] : n2.value && (n2.value[e3] = t3), a2("orderChange", n2.value ? [...n2.value] : []);
  }
  function b2(e3) {
    Nr(o2.configMitt, { ...o2.sqlQuery, orders: n2.value, limit: void 0 }, e3);
  }
  return l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.orders;
  }, (e3) => {
    n2.value = e3 || [];
  }, { immediate: true }), (t3, o3) => {
    var _a2;
    return s(), r("div", null, [void 0 !== ((_a2 = e2.sqlQuery) == null ? void 0 : _a2.orders) ? (s(), h(Lp, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:sort-ascending-outlined", title: "排序", onDeleteConfig: v2, full: true, onExecute: b2 }, { config: M(() => [g(d(vt), { "query-mode": e2.queryMode, items: n2.value, "add-title": "添加排序指标", onAddBlock: c2, onEditBlock: p2, onDragChange: y2 }, { tagIcon: M(({ element: e3 }) => [g(d(Be), { style: { "font-weight": "bold", "font-size": "20px" }, icon: "ASC" === e3.order ? "ant-design:sort-descending-outlined" : "ant-design:sort-ascending-outlined" }, null, 8, ["icon"])]), _: 1 }, 8, ["query-mode", "items"])]), _: 1 }, 8, ["query-mode"])) : f("", true), g(af, { onRegister: d(i2), onSubmit: C2 }, null, 8, ["onRegister"])]);
  };
} }), nf = e({ __name: "FieldColModal", emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = le.Item, l2 = n({ field: void 0 }), i2 = m(), r2 = m(), u2 = m([]), c2 = m(), [p2, { setModalProps: f2, closeModal: y2 }] = bt(async (e3) => {
    if (f2({ confirmLoading: false, width: "600px" }), Tp(void 0, e3.sqlQuery).then((e4) => {
      u2.value = e4;
    }), e3.isUpdate) {
      const t3 = e3.field.value;
      return l2.field = [t3.tableAlias, t3.colName], i2.value = t3, void (c2.value = e3.index);
    }
    l2.field = [], c2.value = void 0, i2.value = {};
  });
  function v2(e3) {
    e3.tableAlias && e3.colName && (l2.field = [e3.tableAlias, e3.colName], i2.value = e3);
  }
  async function C2() {
    var _a2, _b;
    try {
      await ((_a2 = r2.value) == null ? void 0 : _a2.validateFields()), y2(), o2("submit", c2.value, { type: ai.field, value: i2.value, name: (_b = i2.value) == null ? void 0 : _b.colName });
    } catch (e3) {
    }
  }
  return (e3, t3) => (s(), h(d(Ct), $(e3.$attrs, { onRegister: d(p2), title: "选择字段", onOk: C2 }), { default: M(() => [g(d(le), { ref_key: "formRef", ref: r2, model: l2, "label-col": { span: 6 }, "wrapper-col": { span: 16 } }, { default: M(() => [g(d(a2), { label: "字段", name: "field", rules: [{ required: true, message: "请选择字段！" }] }, { default: M(() => [g(Vp, { "table-fields": u2.value, value: i2.value, onChange: v2 }, null, 8, ["table-fields", "value"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 16, ["onRegister"]));
} }), rf = ["onClick"], sf = ["onClick"], uf = e({ __name: "FormulaManagement", props: { isShow: { type: Boolean, default: false }, curKey: { type: String, default: "" } }, emits: ["select"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, i2 = se.Item, C2 = ue.Item, b2 = m([]), { prefixCls: k2 } = xe("formula-management"), w2 = m(null), _2 = Se().getThemeColor, $2 = m([]), L2 = m(false), D2 = m([]), I2 = m(), T2 = m(0.4), B2 = m([]), R2 = m(), q2 = a(() => {
    var _a2, _b;
    if ("" === ((_a2 = I2.value) == null ? void 0 : _a2.parentId)) return;
    const e3 = (_b = I2.value) == null ? void 0 : _b.formulaInfo;
    if (!e3) return;
    let t3;
    try {
      t3 = (e3 == null ? void 0 : e3.paramDesc) ? JSON.parse(e3 == null ? void 0 : e3.paramDesc) : [];
    } catch {
      t3 = (e3 == null ? void 0 : e3.paramDesc) ? [e3 == null ? void 0 : e3.paramDesc] : [];
    }
    return { description: e3.description, paramDesc: t3, returnDesc: e3.returnDesc };
  });
  function A2(e3, t3) {
    const o3 = [];
    t3 ? o3.push({ icon: t3.icon, title: t3.name, key: t3.key }) : b2.value = e3 ? e3.children : [], e3 && o3.push({ icon: e3.icon, title: e3.name, key: e3.key }), R2.value = o3, I2.value = e3, n2("select", e3);
  }
  function O2(e3, t3) {
    var _a2, _b;
    A2(t3.node.dataRef, (_b = (_a2 = t3.node) == null ? void 0 : _a2.parent) == null ? void 0 : _b.node);
  }
  function j2(e3) {
    var _a2, _b, _c2, _d2;
    if (!e3) return A2(), void ($2.value = []);
    $2.value = [e3];
    const t3 = e3.split(",");
    if (t3 && 2 === t3.length) return (_a2 = w2.value) == null ? void 0 : _a2.setExpandedKeys([t3[0]]), void A2((_b = w2.value) == null ? void 0 : _b.getSelectedNode(e3), (_c2 = w2.value) == null ? void 0 : _c2.getSelectedNode(t3[0]));
    A2((_d2 = w2.value) == null ? void 0 : _d2.getSelectedNode(e3));
  }
  l(() => o2.isShow, (e3) => {
    e3 && setTimeout(() => {
      j2(o2.curKey);
    }, 200);
  }, { immediate: true });
  const z2 = a(() => L2.value ? d(D2) : d(b2));
  return N(async () => {
    const e3 = await mi();
    !function e4(t3, o3) {
      var _a2;
      for (const a2 of o3) a2.children && a2.children.length > 0 && e4(a2, a2.children), t3 ? (a2.icon = "ant-design:function-outlined", a2.key = `${t3.id},${a2.id}`) : (a2.icon = "ant-design:star-outlined", a2.key = a2.id), a2.title = a2.name + ((a2 == null ? void 0 : a2.formulaInfo) ? `(${(_a2 = a2 == null ? void 0 : a2.formulaInfo) == null ? void 0 : _a2.enName})` : "");
    }(void 0, e3), B2.value = e3;
  }), (e3, t3) => (s(), h(d(St), { "default-size": T2.value, min: 0.1, max: 0.5, class: c(d(k2)) }, { 1: M(() => [g(d(xt), { title: "", toolbar: "", search: "", ref_key: "asyncTreeRef", ref: w2, "tree-wrapper-class-name": "h-[calc(100%-35px)] overflow-auto", "selected-keys": $2.value, "onUpdate:selectedKeys": t3[0] || (t3[0] = (e4) => $2.value = e4), "tree-data": B2.value || [], onSelect: O2 }, null, 8, ["selected-keys", "tree-data"])]), 2: M(() => [p("div", { class: c(`${d(k2)}-right h-full pt-2`) }, [g(d(se), { separator: ">", class: "breadcrumb" }, { default: M(() => [(s(true), r(y, null, v(R2.value, (e4, t4) => (s(), h(d(i2), { key: t4 }, { default: M(() => [g(d(Be), { icon: e4.icon }, null, 8, ["icon"]), p("a", { onClick: (t5) => j2(e4.key), class: "fw-bold text-decoration-none" }, S(e4.title), 9, rf)]), _: 2 }, 1024))), 128))]), _: 1 }), I2.value && "" === I2.value.parentId ? (s(), h(d(yt), { key: 0 }, { default: M(() => [g(d(ce), { class: "ml-6" }, { default: M(() => [(s(true), r(y, null, v(z2.value, (e4, t4) => (s(), h(d(de), { span: 22, key: t4, class: c(`${d(k2)}-card`) }, { default: M(() => {
    var _a2, _b;
    return [p("div", { class: c(`${d(k2)}-card-item`), onClick: (t5) => j2(e4.key) }, [p("div", { class: c(`${d(k2)}-card-item-info`) }, [g(d(G), { title: (_a2 = e4.formulaInfo) == null ? void 0 : _a2.cnName }, { default: M(() => {
      var _a3, _b2;
      return [p("span", { style: u(`color: ${d(_2)};font-weight: bold`) }, [g(d(Be), { icon: "ant-design:function-outlined", color: d(_2) }, null, 8, ["color"]), x(" " + S((_a3 = e4.formulaInfo) == null ? void 0 : _a3.cnName) + " (" + S((_b2 = e4.formulaInfo) == null ? void 0 : _b2.enName) + ") ", 1)], 4)];
    }), _: 2 }, 1032, ["title"]), g(d(G), { title: (_b = e4.formulaInfo) == null ? void 0 : _b.description }, { default: M(() => {
      var _a3;
      return [p("span", null, S((_a3 = e4.formulaInfo) == null ? void 0 : _a3.description), 1)];
    }), _: 2 }, 1032, ["title"])], 2)], 10, sf)];
  }), _: 2 }, 1032, ["class"]))), 128))]), _: 1 })]), _: 1 })) : f("", true), I2.value && I2.value.formulaInfo ? (s(), h(d(yt), { key: 1 }, { default: M(() => [g(d(ue), { class: "pt-3 pr-2", column: 1, bordered: true }, { default: M(() => [g(d(C2), { label: "描述" }, { default: M(() => {
    var _a2;
    return [x(S((_a2 = q2.value) == null ? void 0 : _a2.description), 1)];
  }), _: 1 }), g(d(C2), { label: "参数" }, { default: M(() => {
    var _a2;
    return [(s(true), r(y, null, v((_a2 = q2.value) == null ? void 0 : _a2.paramDesc, (e4, t4) => (s(), r("div", { key: t4 }, S(e4), 1))), 128))];
  }), _: 1 }), g(d(C2), { label: "结果" }, { default: M(() => {
    var _a2;
    return [x(S((_a2 = q2.value) == null ? void 0 : _a2.returnDesc), 1)];
  }), _: 1 })]), _: 1 })]), _: 1 })) : f("", true)], 2)]), _: 1 }, 8, ["default-size", "class"]));
} }), cf = eo(uf, [["__scopeId", "data-v-6dc5ed8e"]]), df = { key: 0, class: "content" }, pf = { key: 1, class: "content placeholder" }, ff = eo(e({ __name: "FormulaSelect", props: { formulaKey: { type: String, default: "" }, queryMode: { type: Boolean, default: false } }, emits: ["formulaChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, i2 = a(() => Se().getDarkMode.value === Ge.DARK), { prefixCls: u2 } = xe("select-formula"), f2 = m(false);
  let y2;
  const { createMessage: v2 } = _e(), C2 = Sr(), k2 = m(), w2 = (e3) => {
    f2.value = e3;
  };
  function _2() {
    f2.value = false, k2.value = void 0, y2 = void 0, n2("formulaChange", k2.value);
  }
  function $2() {
    var _a2;
    y2 ? (f2.value = false, ((_a2 = k2.value) == null ? void 0 : _a2.key) !== y2.key && (k2.value = { key: y2.key, ...y2.formulaInfo }, n2("formulaChange", k2.value))) : v2.error("请选择公式");
  }
  function L2(e3) {
    (e3 == null ? void 0 : e3.formulaInfo) && (y2 = b(e3));
  }
  return l(() => o2.formulaKey, (e3) => {
    e3 && (k2.value = C2.getFormula(e3));
  }, { immediate: true }), (t3, o3) => (s(), h(d(V), { disabled: e2.queryMode, trigger: ["click"], open: f2.value, onOpenChange: w2, placement: "bottom", arrow: { pointAtCenter: true }, "overlay-style": { width: "500px" } }, { overlay: M(() => [g(d(te), null, { default: M(() => [g(d(te).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: M(() => {
    var _a2;
    return [g(cf, { style: { height: "350px" }, "is-show": f2.value, "cur-key": (_a2 = k2.value) == null ? void 0 : _a2.key, onSelect: L2 }, null, 8, ["is-show", "cur-key"]), p("div", { class: c(`${d(u2)}-ok-button`) }, [g(d(ee), { class: "mr-2", onClick: _2 }, { default: M(() => o3[0] || (o3[0] = [x("清空")])), _: 1, __: [0] }), g(d(ee), { type: "primary", onClick: $2 }, { default: M(() => o3[1] || (o3[1] = [x("确定")])), _: 1, __: [1] })], 2)];
  }), _: 1 })]), _: 1 })]), default: M(() => [g(d(ee), { class: c(`${d(u2)}-drop-button`) }, { default: M(() => {
    var _a2, _b;
    return [((_a2 = k2.value) == null ? void 0 : _a2.cnName) ? (s(), r("span", df, S((_b = k2.value) == null ? void 0 : _b.cnName), 1)) : (s(), r("span", pf, "选择公式")), g(d(Be), { size: 12, icon: f2.value ? "ant-design:up-outlined" : "ant-design:down-outlined", color: i2.value ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)" }, null, 8, ["icon", "color"])];
  }), _: 1 }, 8, ["class"])]), _: 1 }, 8, ["disabled", "open"]));
} }), [["__scopeId", "data-v-4015d717"]]), hf = "displayName", gf = { config: { type: Object, default: () => ({ type: ai.param, value: "" }) }, comType: { type: String, default: "string" }, paramType: { type: String, default: "string" }, paramValue: { type: String, default: "" }, showRadio: { type: Boolean, default: true }, sqlQuery: { type: Object }, index: { type: Number, default: 0 }, queryMode: { type: Boolean, default: false } }, mf = (e2) => {
  if (!e2) return { type: ai.formula, value: null };
  const t2 = ((e2 == null ? void 0 : e2.targetParam) ? JSON.parse(e2.targetParam) : []).map((e3) => e3.paramType.startsWith("list") ? { type: ai.param, value: [{ type: ai.param, value: "" }] } : { type: ai.param, value: "" });
  return { type: ai.formula, value: { key: e2.key, cnName: e2.cnName, enName: e2.enName, targetObject: e2.targetObject, param: t2 } };
}, yf = e({ __name: "FormulaCompact", props: gf, emits: ["typeChange", "formulaSelect", "inputChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, { prefixCls: n2 } = xe("formula-compact"), i2 = ae.Group, u2 = ae.Button, y2 = m("string"), v2 = m("string"), C2 = m(), b2 = m(ai.param), k2 = m(), w2 = m([]), x2 = m(), S2 = m(false), _2 = m([]), $2 = m();
  function L2(e3) {
    a2("formulaSelect", e3 || "");
  }
  function D2() {
    a2("inputChange", void 0 === C2.value ? "" : C2.value);
  }
  function I2(e3) {
    e3.tableAlias && e3.colName && (x2.value = e3, a2("inputChange", { ...e3, [hf]: "colName" }));
  }
  function T2(e3, t3) {
    a2("inputChange", t3.realValue || "");
  }
  function N2(e3) {
    a2("typeChange", e3.target.value);
  }
  return l(() => o2.config, (e3) => {
    var _a2;
    e3 && (b2.value = e3.type, e3.type === ai.formula ? k2.value = (_a2 = e3.value) == null ? void 0 : _a2.key : C2.value = e3.value);
  }, { immediate: true }), l(() => o2.paramType, (e3) => {
    if (e3) if (e3.startsWith("list[")) {
      const t3 = /list\[(?<value>.*?)\]/u;
      v2.value = e3.replace(t3, "$<value>");
    } else v2.value = e3;
  }, { immediate: true }), l(() => o2.comType, (e3) => {
    e3 && (y2.value = e3);
  }, { immediate: true }), l(() => b2.value, (e3) => {
    var _a2;
    if (e3 === ai.param && "list" === y2.value) {
      const e4 = /@\{(?<value>.*?)\}/u, t3 = (_a2 = o2.paramValue) == null ? void 0 : _a2.replace(e4, "$<value>");
      S2.value = "fieldName" === t3, S2.value && o2.sqlQuery ? Tp(void 0, o2.sqlQuery).then((e5) => {
        w2.value = e5, x2.value = o2.config.value || {};
      }) : yi(t3).then((e5) => {
        var _a3;
        if (_2.value = [], e5 && e5.value) {
          const t4 = e5[hf];
          e5.value.forEach((e6) => {
            const o3 = e6[t4];
            _2.value.push({ label: o3, value: o3, realValue: { ...e6, [hf]: t4 } });
          }), ((_a3 = o2.config) == null ? void 0 : _a3.value) && ($2.value = o2.config.value[o2.config.value[hf]]);
        }
      });
    }
  }, { immediate: true }), (e3, t3) => (s(), r("div", { class: c(d(n2)) }, [o2.showRadio ? (s(), h(d(i2), { key: 0, disabled: o2.queryMode, class: "radio-group", value: b2.value, "onUpdate:value": t3[0] || (t3[0] = (e4) => b2.value = e4), "button-style": "solid", onChange: N2 }, { default: M(() => ["number" === v2.value ? (s(), h(d(u2), { key: 0, value: d(ai).param }, { default: M(() => [g(d(G), { placement: "left", title: "数字" }, { default: M(() => [g(d(Be), { icon: "ant-design:field-number-outlined" })]), _: 1 })]), _: 1 }, 8, ["value"])) : (s(), h(d(u2), { key: 1, value: d(ai).param }, { default: M(() => [g(d(G), { placement: "left", title: "字符" }, { default: M(() => [g(d(Be), { icon: "ant-design:field-string-outlined" })]), _: 1 })]), _: 1 }, 8, ["value"])), g(d(u2), { value: d(ai).formula }, { default: M(() => [g(d(G), { placement: "left", title: "公式" }, { default: M(() => [g(d(Be), { icon: "ant-design:function-outlined" })]), _: 1 })]), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["disabled", "value"])) : f("", true), p("div", { class: c(o2.showRadio ? "formula-select" : "formula-select-show") }, [b2.value === d(ai).param && "string" === y2.value ? (s(), h(d(H), { key: 0, disabled: o2.queryMode, value: C2.value, "onUpdate:value": t3[1] || (t3[1] = (e4) => C2.value = e4), class: "input-com", placeholder: "请输入字符常量", onChange: D2 }, null, 8, ["disabled", "value"])) : b2.value === d(ai).param && "number" === y2.value ? (s(), h(d(Q), { key: 1, disabled: o2.queryMode, value: C2.value, "onUpdate:value": t3[2] || (t3[2] = (e4) => C2.value = e4), class: "input-com", placeholder: "请输入数字常量", onChange: D2 }, null, 8, ["disabled", "value"])) : b2.value === d(ai).param && "list" === y2.value && S2.value ? (s(), h(Vp, { key: 2, "query-mode": o2.queryMode, class: "select-com", "table-fields": w2.value, value: x2.value, onChange: I2 }, null, 8, ["query-mode", "table-fields", "value"])) : b2.value !== d(ai).param || "list" !== y2.value || S2.value ? (s(), h(ff, { key: 4, "query-mode": o2.queryMode, "formula-key": k2.value, onFormulaChange: L2 }, null, 8, ["query-mode", "formula-key"])) : (s(), h(d(K), { key: 3, disabled: o2.queryMode, class: "select-com", value: $2.value, "onUpdate:value": t3[3] || (t3[3] = (e4) => $2.value = e4), options: _2.value, placeholder: "请选择参数", onSelect: T2 }, null, 8, ["disabled", "value", "options"]))], 2)], 2));
} }), vf = eo(yf, [["__scopeId", "data-v-8048866c"]]), Cf = { style: { "margin-top": "6px", display: "flex", "justify-content": "flex-end" } }, bf = e({ __name: "FormulaAround", emits: ["submit"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = m([]), l2 = m(), n2 = m(false);
  let i2;
  const { createMessage: r2 } = _e(), u2 = (e3) => {
    n2.value = e3;
  };
  function c2(e3) {
    if (!e3) return i2 = e3, void (l2.value = void 0);
    i2 = mf(e3);
    const t3 = (e3 == null ? void 0 : e3.targetParam) ? JSON.parse(e3.targetParam) : [];
    a2.value = [];
    for (const [e4, o3] of t3.entries()) a2.value.push({ label: o3.name, value: e4 });
    l2.value = a2.value.length > 0 ? 0 : void 0;
  }
  function f2() {
    n2.value = false;
  }
  function y2() {
    i2 && void 0 !== l2.value ? o2("submit", { formulaConfig: i2, paramIndex: l2.value }) : r2.error("请选择公式");
  }
  return (e3, t3) => (s(), h(d(V), { trigger: ["click"], open: n2.value, placement: "bottom", arrow: { pointAtCenter: true }, onOpenChange: u2 }, { overlay: M(() => [g(d(te), null, { default: M(() => [g(d(te).Item, { disabled: "", style: { padding: "0", cursor: "default" } }, { default: M(() => [g(d(pe), { title: "上层公式设置", bordered: false, style: { width: "240px" } }, { default: M(() => [g(ff, { onFormulaChange: c2 }), g(d(K), { style: { width: "100%", "margin-top": "6px" }, placeholder: "选择作为哪个参数", class: "select-com", value: l2.value, "onUpdate:value": t3[0] || (t3[0] = (e4) => l2.value = e4), options: a2.value }, null, 8, ["value", "options"]), p("div", Cf, [g(d(ee), { size: "small", onClick: f2 }, { default: M(() => t3[1] || (t3[1] = [x(" 取消")])), _: 1, __: [1] }), g(d(ee), { size: "small", type: "primary", style: { "margin-left": "6px" }, onClick: y2 }, { default: M(() => t3[2] || (t3[2] = [x(" 确定")])), _: 1, __: [2] })])]), _: 1 })]), _: 1 })]), _: 1 })]), default: M(() => [g(d(ee), { style: { "margin-top": "-6px" }, size: "small", type: "link" }, { icon: M(() => [g(d(G), { placement: "left", title: "添加外层公式，当前层作为公式参数" }, { default: M(() => [g(d(Be), { icon: "ant-design:node-collapse-outlined" })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["open"]));
} }), Mf = { class: "formula" }, kf = { class: "title" }, wf = { key: 0, class: "add" }, xf = e({ __name: "FormulaConfig", props: gf, emits: ["formulaChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, i2 = m(), u2 = m(), { prefixCls: C2 } = xe("formula-config"), b2 = Sr(), k2 = m(), _2 = n({ type: ai.param, value: "" }), $2 = m(0), L2 = (e3) => e3.startsWith("list"), D2 = (e3) => {
    var _a2, _b;
    return ((_b = (_a2 = k2 == null ? void 0 : k2.value) == null ? void 0 : _a2.value) == null ? void 0 : _b.param) && Array.isArray(k2 == null ? void 0 : k2.value.value.param[e3].value) ? k2 == null ? void 0 : k2.value.value.param[e3].value : [0];
  };
  function I2(e3) {
    _2.value = e3, a2("formulaChange", _2);
  }
  function T2(e3) {
    i2.value = (e3 == null ? void 0 : e3.targetParam) ? JSON.parse(e3.targetParam) : [];
    try {
      u2.value = (e3 == null ? void 0 : e3.paramDesc) ? JSON.parse(e3 == null ? void 0 : e3.paramDesc) : [];
    } catch {
      u2.value = (e3 == null ? void 0 : e3.paramDesc) ? [e3 == null ? void 0 : e3.paramDesc] : [];
    }
  }
  function N2(e3) {
    T2(e3), k2.value = mf(e3), $2.value++, a2("formulaChange", k2.value);
  }
  function B2(e3) {
    i2.value = [], a2("formulaChange", { type: e3, value: "" });
  }
  function R2(e3) {
    e3.formulaConfig.value.param[e3.paramIndex] = k2.value;
    const t3 = JSON.parse(JSON.stringify(e3.formulaConfig));
    T2(t3), a2("formulaChange", t3, true);
  }
  return l(() => o2.config, (e3) => {
    e3 && (k2.value = e3, function() {
      var _a2, _b, _c2;
      if (((_a2 = k2.value) == null ? void 0 : _a2.type) === ai.formula) {
        const e4 = b2.getFormula((_c2 = (_b = k2.value) == null ? void 0 : _b.value) == null ? void 0 : _c2.key);
        e4 && T2(e4);
      }
    }());
  }, { immediate: true }), (e3, t3) => {
    var _a2;
    const l2 = w("FormulaConfig", true);
    return s(), r("div", { class: c(d(C2)) }, [p("div", Mf, [g(vf, { "query-mode": o2.queryMode, class: "main", index: o2.index, "com-type": o2.comType, "param-type": o2.paramType, "param-value": o2.paramValue, config: k2.value, "sql-query": o2.sqlQuery, "show-radio": o2.showRadio, onInputChange: I2, onFormulaSelect: N2, onTypeChange: B2 }, null, 8, ["query-mode", "index", "com-type", "param-type", "param-value", "config", "sql-query", "show-radio"]), ((_a2 = k2.value) == null ? void 0 : _a2.type) !== d(ai).formula || o2.queryMode ? f("", true) : (s(), h(bf, { key: 0, onSubmit: R2 }))]), (s(true), r(y, null, v(i2.value, (e4, n2) => (s(), r("div", { key: `${$2.value}${n2}` }, [(s(true), r(y, null, v(D2(n2), (t4, i3) => {
      var _a3, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
      return s(), r("div", { class: "param", key: i3 }, [g(d(Be), { class: "icon", icon: "ant-design:arrow-up-outlined" }), p("span", kf, [g(d(G), { placement: "left", title: u2.value ? u2.value[n2] : "" }, { default: M(() => [x(S(e4.name), 1)]), _: 2 }, 1032, ["title"])]), g(l2, { "query-mode": o2.queryMode, index: i3, "com-type": e4.comType, "param-type": e4.paramType, "param-value": e4.value, config: L2(e4.paramType) && ((_b = (_a3 = k2.value) == null ? void 0 : _a3.value) == null ? void 0 : _b.param) && ((_e2 = (_d2 = (_c2 = k2.value) == null ? void 0 : _c2.value) == null ? void 0 : _d2.param[n2]) == null ? void 0 : _e2.value) ? (_h2 = (_g2 = (_f2 = k2.value) == null ? void 0 : _f2.value) == null ? void 0 : _g2.param[n2]) == null ? void 0 : _h2.value[i3] : (_j = (_i2 = k2.value) == null ? void 0 : _i2.value) == null ? void 0 : _j.param[n2], "sql-query": o2.sqlQuery, onFormulaChange: (t5) => function(e5, t6, o3, l3) {
        var _a4;
        ((_a4 = k2.value) == null ? void 0 : _a4.type) === ai.formula && k2.value.value && k2.value.value.param && (L2(o3) ? k2.value.value.param[t6].value ? k2.value.value.param[t6].value[l3] = e5 : k2.value.value.param[t6].value = [e5] : k2.value.value.param[t6] = e5), a2("formulaChange", k2.value);
      }(t5, n2, e4.paramType, i3) }, null, 8, ["query-mode", "index", "com-type", "param-type", "param-value", "config", "sql-query", "onFormulaChange"]), i3 > 0 ? (s(), h(d(ee), { key: 0, size: "small", type: "link", onClick: (e5) => function(e6, t5) {
        var _a4;
        ((_a4 = k2.value) == null ? void 0 : _a4.type) === ai.formula && k2.value.value && k2.value.value.param && (k2.value.value.param[e6].value.splice(t5, 1), $2.value++, a2("formulaChange", k2.value));
      }(n2, i3) }, { icon: M(() => [g(d(Be), { icon: "ant-design:delete-outlined" })]), _: 2 }, 1032, ["onClick"])) : f("", true)]);
    }), 128)), L2(e4.paramType) ? (s(), r("div", wf, [g(d(ee), { type: "primary", onClick: (e5) => function(e6) {
      k2.value && (k2.value.value.param[e6].value ? k2.value.value.param[e6].value.push({ type: ai.param, value: "" }) : k2.value.value.param[e6].value = [{ type: ai.param, value: "" }]);
    }(n2) }, { default: M(() => t3[0] || (t3[0] = [x("增加参数")])), _: 2, __: [0] }, 1032, ["onClick"])])) : f("", true)]))), 128))], 2);
  };
} }), Sf = eo(xf, [["__scopeId", "data-v-aad21227"]]), _f = e({ __name: "ParamsModal", emits: ["register", "submit"], setup(e2, { emit: t2 }) {
  const o2 = t2, [a2, { resetFields: l2, setFieldsValue: n2, validate: i2, resetSchema: r2 }] = wt({ name: "model_form_item", labelWidth: 180, baseColProps: { span: 24 }, showActionButtonGroup: false, autoSubmitOnEnter: true }), u2 = Sr(), c2 = m(), [p2, { setModalProps: f2, closeModal: y2 }] = bt(async (e3) => {
    f2({ confirmLoading: false, width: "600px", canFullscreen: false }), c2.value = e3.level;
    const t3 = u2.getVariables.filter((t4) => t4.name && e3.params.has(t4.name)).map((e4) => ({ field: e4.name, label: e4.name, component: "Input", required: e4.required || false, helpMessage: e4.remark || "", defaultValue: e4.defaultValue }));
    r2(t3).then(() => {
      l2().then(), n2(t3.reduce((e4, t4) => (t4 && (e4[t4.field] = t4.defaultValue), e4), {})).then();
    });
  });
  async function v2() {
    try {
      const e3 = await i2();
      o2("submit", e3, c2.value), y2();
    } catch (e3) {
    }
  }
  return (e3, t3) => (s(), h(d(Ct), $(e3.$attrs, { onRegister: d(p2), title: "输入参数值", onOk: v2 }), { default: M(() => [g(d(kt), { onRegister: d(a2), onSubmit: v2 }, null, 8, ["onRegister"])]), _: 1 }, 16, ["onRegister"]));
} }), $f = e({ __name: "FormulaTest", props: { open: { type: Boolean, default: false }, curQuery: { type: Object }, curParams: { type: Object } }, emits: ["close"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, n2 = Se().getThemeColor, i2 = Sr(), c2 = m(false);
  l(() => o2.open, (e3) => {
    c2.value = e3, e3 && p2();
  });
  const p2 = Te((e3) => {
    let t3 = 1, a3 = 10;
    e3 && (t3 = e3.current, a3 = e3.pageSize), Ri({ sourceId: i2.getSourceId, sourceType: i2.getSourceType, sqlQuery: o2.curQuery || {}, params: o2.curParams }, { pageNum: t3, pageSize: a3 }).then((e4) => {
      const t4 = Object.keys(e4.headers).map((e5) => ({ title: e5, dataIndex: e5 }));
      v2(t4), C2(e4.table.list), b2({ total: e4.table.total, pageSize: e4.table.pageSize, current: e4.table.pageNum });
    }).catch(() => {
      v2([]);
    });
  }, 200), [y2, { setColumns: v2, setTableData: C2, setPagination: b2 }] = _t({ bordered: true, showIndexColumn: false, isCanResizeParent: true, canResize: true, onChange: p2 }), k2 = () => {
    c2.value = false, a2("close", true);
  };
  return (e3, t3) => (s(), h(d(fe), { title: "测试结果", placement: "bottom", open: c2.value, onClose: k2, height: 450 }, { default: M(() => [g(d($t), { onRegister: d(y2) }, { bodyCell: M(({ column: e4, record: t4 }) => [(e4 == null ? void 0 : e4.key) === d($r) ? (s(), r("div", { key: 0, style: u({ color: d(n2) }) }, S(t4[d($r)]), 5)) : f("", true)]), _: 1 }, 8, ["onRegister"])]), _: 1 }, 8, ["open"]));
} }), Lf = e({ __name: "FormulaColModal", props: { queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = m(), l2 = m(), i2 = m(), u2 = n({ type: ai.formula, value: null });
  let c2;
  const p2 = m(0), v2 = Sr(), [C2, { openModal: b2 }] = Mt(), k2 = m(), w2 = m(), S2 = m(false), _2 = (e3) => {
    let t3 = "";
    return Array.isArray(e3.value) ? (e3.value.forEach((e4) => {
      t3 += `${_2(e4)},`;
    }), t3.endsWith(",") ? t3 = t3.slice(0, Math.max(0, t3.lastIndexOf(","))) : t3) : e3.type === ai.formula && e3.value ? (t3 = `${e3.value.cnName}(`, e3.value.param.forEach((e4) => {
      t3 += `${_2(e4)},`;
    }), t3.endsWith(",") && (t3 = t3.slice(0, Math.max(0, t3.lastIndexOf(",")))), t3 += ")", t3) : (e3.type === ai.param && (t3 += e3.value instanceof Object ? e3.value[e3.value[hf]] : e3.value), t3);
  }, [L2, { setModalProps: D2, closeModal: I2 }] = bt(async (e3) => {
    D2({ confirmLoading: false, width: "800px", minHeight: 500, maskClosable: false, keyboard: false }), a2.value = e3.index, l2.value = e3.isUpdate, await v2.setFormulaMap(), c2 = e3.sqlQuery, e3.isUpdate ? (u2.value = JSON.parse(JSON.stringify(e3.formulaConfig.value)), i2.value = _2(u2)) : (u2.value = null, i2.value = ""), p2.value++;
  });
  async function T2() {
    try {
      if (!u2.value) return;
      I2(), o2("submit", l2.value, a2.value, { ...u2, name: i2.value });
    } catch (e3) {
    }
  }
  function N2(e3, t3) {
    u2.value = e3.value, e3 && (i2.value = _2(e3)), t3 && p2.value++;
  }
  function B2() {
    k2.value = { schema: c2.schema, sourceTable: c2.sourceTable, joins: c2.joins, sqlQuery: c2 == null ? void 0 : c2.sqlQuery, customColumns: [{ name: $r, expressions: [{ type: ai.formula, value: u2.value }] }] };
    const e3 = Br(k2.value || {});
    e3 && e3.size > 0 ? b2(true, { params: e3, level: 1 }) : R2({});
  }
  function R2(e3) {
    w2.value = e3, S2.value = true;
  }
  return (t3, o3) => (s(), r(y, null, [g(d(Ct), $(t3.$attrs, { onRegister: d(L2), title: "公式配置", onOk: T2 }), { centerFooter: M(() => [g(d(ee), { onClick: B2, type: "primary", danger: "" }, { default: M(() => o3[1] || (o3[1] = [x("测试")])), _: 1, __: [1] })]), default: M(() => [i2.value ? (s(), h(d(he), { key: 0, class: "mb-2", message: i2.value, type: "info", "show-icon": "" }, { icon: M(() => [g(d(Be), { icon: "ant-design:function-outlined" })]), _: 1 }, 8, ["message"])) : f("", true), (s(), h(Sf, { "query-mode": e2.queryMode, key: p2.value, "sql-query": d(c2), "show-radio": false, config: u2, onFormulaChange: N2 }, null, 8, ["query-mode", "sql-query", "config"])), g($f, { "cur-query": k2.value, "cur-params": w2.value, open: S2.value, onClose: o3[0] || (o3[0] = () => S2.value = false) }, null, 8, ["cur-query", "cur-params", "open"])]), _: 1 }, 16, ["onRegister"]), g(_f, { onRegister: d(C2), onSubmit: R2 }, null, 8, ["onRegister"])], 64));
} }), Df = e({ __name: "CustomColModal", props: { sqlQuery: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["submit", "register"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, l2 = m(true), i2 = Se().getThemeColor, { prefixCls: u2 } = xe("col-modal"), f2 = m([]), C2 = n({ formula: { key: "formula", name: "公式", icon: "icon-mfish-sum", color: "#cd201f" }, add: { key: "add", name: "加号", icon: "icon-mfish-add", color: i2 }, subtract: { key: "subtract", name: "减号", icon: "icon-mfish-subtract", color: i2, slot: true }, multiply: { key: "multiply", name: "乘号", icon: "icon-mfish-multiply", color: i2, slot: true }, divide: { key: "divide", name: "除号", icon: "icon-mfish-divide", color: i2, slot: true }, leftBracket: { key: "leftBracket", name: "左括号", icon: "icon-mfish-left-bracket", color: i2, slot: true }, rightBracket: { key: "rightBracket", name: "右括号", icon: "icon-mfish-right-bracket", color: i2, slot: true } }), b2 = n({ formula: { type: ai.formula, value: "" }, add: { type: ai.operator, name: "add", value: "+", slot: true }, subtract: { type: ai.operator, name: "subtract", value: "-", slot: true }, multiply: { type: ai.operator, name: "multiply", value: "*", slot: true }, divide: { type: ai.operator, name: "divide", value: "/", slot: true }, leftBracket: { type: ai.operator, name: "leftBracket", value: "(", slot: true }, rightBracket: { type: ai.operator, name: "rightBracket", value: ")", slot: true } }), k2 = [{ field: "customCol", label: "自定义列", component: "Input", slot: "customCol" }, { field: "name", label: "名称", component: "Input", componentProps: { disabled: o2.queryMode, placeholder: "请输入名称", maxlength: 30, showCount: true }, required: true }], [S2, { resetFields: _2, setFieldsValue: L2, validate: D2 }] = wt({ name: "model_form_item", labelWidth: 100, baseColProps: { span: 24 }, schemas: k2, showActionButtonGroup: false, autoSubmitOnEnter: true }), [I2, { openModal: T2 }] = Mt(), [N2, { openModal: B2 }] = Mt(), R2 = m();
  const [A2, { setModalProps: O2, closeModal: j2 }] = bt(async (e3) => {
    _2().then(), O2({ confirmLoading: false, width: "600px", maskClosable: false }), l2.value = !!(e3 == null ? void 0 : e3.isUpdate), d(l2) ? (R2.value = e3.index, L2({ ...e3.customCol }).then(), f2.value = JSON.parse(JSON.stringify(e3.customCol.expressions))) : (R2.value = void 0, f2.value = []);
  }), [z2, { openModal: E2 }] = Mt(), F2 = m(), P2 = m(), H2 = m(false);
  async function Q2() {
    try {
      const e3 = await D2();
      a2("submit", R2.value, { name: e3.name, expressions: f2.value }), j2();
    } catch (e3) {
    }
  }
  function U2(e3, t3, a3) {
    t3.type !== ai.operator ? (a3(false, t3), B2(true, { index: e3, sqlQuery: { ...o2.sqlQuery }, isUpdate: false })) : a3(true, t3);
  }
  function V2() {
    T2(true, { sqlQuery: { ...o2.sqlQuery }, isUpdate: false });
  }
  function W2(e3, t3) {
    t3.type === ai.field && T2(true, { index: e3, field: t3, sqlQuery: { ...o2.sqlQuery }, isUpdate: true }), t3.type === ai.formula && B2(true, { index: e3, formulaConfig: t3, sqlQuery: { ...o2.sqlQuery }, isUpdate: true });
  }
  function Y2(e3, t3) {
    void 0 === e3 ? f2.value ? f2.value.push(t3) : f2.value = [t3] : f2.value && (f2.value[e3] = t3);
  }
  function Z2(e3, t3, o3) {
    e3 ? f2.value && (f2.value[t3] = o3) : f2.value ? t3 ? f2.value.splice(t3, 0, o3) : f2.value.push(o3) : f2.value = [o3];
  }
  function K2() {
    var _a2, _b, _c2, _d2;
    F2.value = { schema: (_a2 = o2.sqlQuery) == null ? void 0 : _a2.schema, sourceTable: (_b = o2.sqlQuery) == null ? void 0 : _b.sourceTable, joins: (_c2 = o2.sqlQuery) == null ? void 0 : _c2.joins, sqlQuery: (_d2 = o2.sqlQuery) == null ? void 0 : _d2.sqlQuery, customColumns: [{ name: $r, expressions: f2.value }] };
    const e3 = Br(F2.value || {});
    e3 && e3.size > 0 ? E2(true, { params: e3, level: 1 }) : X2({});
  }
  function X2(e3) {
    P2.value = e3, H2.value = true;
  }
  return (t3, a3) => {
    const l3 = w("AButton");
    return s(), r(y, null, [g(d(Ct), $(t3.$attrs, { onRegister: d(A2), title: "自定义列配置", onOk: Q2 }), { centerFooter: M(() => [g(l3, { onClick: K2, type: "primary", danger: "" }, { default: M(() => a3[1] || (a3[1] = [x("测试")])), _: 1, __: [1] })]), default: M(() => [g(d(kt), { onRegister: d(S2), onSubmit: Q2 }, { customCol: M(() => [g(d(vt), { "query-mode": e2.queryMode, "add-title": "添加字段", items: f2.value, onBlockBuild: U2, onAddBlock: V2, onEditBlock: W2 }, q({ tag: M(({ element: e3 }) => [p("div", { class: c(`${d(u2)}-slot-tag`) }, [g(d(Re), { icon: C2[e3.name].icon, color: d(i2) }, null, 8, ["icon", "color"])], 2)]), _: 2 }, [e2.queryMode ? void 0 : { name: "headerBar", fn: M(({ headerCallBack: e3 }) => [(s(true), r(y, null, v(C2, (t4, a4) => (s(), h(d(G), { key: a4, title: t4.name }, { default: M(() => [g(d(ge), { style: { cursor: "pointer" }, color: t4.color, draggable: "true", onClick: (a5) => function(e4, t5) {
      t5.type !== ai.operator ? B2(true, { index: void 0, sqlQuery: o2.sqlQuery, isUpdate: false }) : e4(t5);
    }(e3, b2[t4.key]), onDragstart: (e4) => function(e5, t5) {
      e5.dataTransfer.setData("Text", JSON.stringify(b2[t5.key])), e5.stopPropagation();
    }(e4, t4) }, { icon: M(() => [g(d(Re), { icon: t4.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["color", "onClick", "onDragstart"])]), _: 2 }, 1032, ["title"]))), 128))]), key: "0" }]), 1032, ["query-mode", "items"])]), _: 1 }, 8, ["onRegister"]), g(nf, { onRegister: d(I2), onSubmit: Y2 }, null, 8, ["onRegister"]), g(Lf, { "query-mode": e2.queryMode, onRegister: d(N2), onSubmit: Z2 }, null, 8, ["query-mode", "onRegister"]), g($f, { "cur-query": F2.value, "cur-params": P2.value, open: H2.value, onClose: a3[0] || (a3[0] = () => H2.value = false) }, null, 8, ["cur-query", "cur-params", "open"])]), _: 1 }, 16, ["onRegister"]), g(_f, { onRegister: d(z2), onSubmit: X2 }, null, 8, ["onRegister"])], 64);
  };
} }), If = eo(Df, [["__scopeId", "data-v-93a6f597"]]), Tf = e({ __name: "TableCustomCol", props: { sqlQuery: { type: Object }, level: { type: Number, default: 1 }, configMitt: { type: Object }, queryMode: { type: Boolean, default: false } }, emits: ["customColChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, i2 = m([]);
  function u2() {
    n2("customColChange");
  }
  const [c2, { openModal: p2 }] = Mt(), y2 = a(() => {
    var _a2;
    return void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.customColumns) && Tr(o2.sqlQuery, o2.level) && !o2.queryMode;
  });
  function v2() {
    p2(true, { sqlQuery: o2.sqlQuery, isUpdate: false });
  }
  function C2(e3, t3) {
    p2(true, { index: e3, customCol: { ...t3 }, sqlQuery: o2.sqlQuery, isUpdate: true });
  }
  function b2(e3) {
    n2("customColChange", [...e3]);
  }
  function w2() {
    n2("customColChange", []);
  }
  function x2(e3) {
    Nr(o2.configMitt, { ...o2.sqlQuery, customColumns: i2.value, aggregates: [], groups: [], orders: [], limit: void 0 }, e3);
  }
  function S2(e3, t3) {
    null == e3 ? i2.value ? i2.value.push(t3) : i2.value = [t3] : i2.value && (i2.value[e3] = t3), n2("customColChange", i2.value ? [...i2.value] : []);
  }
  return l(() => {
    var _a2;
    return (_a2 = o2.sqlQuery) == null ? void 0 : _a2.customColumns;
  }, (e3) => {
    i2.value = e3 ? [...e3] : [];
  }, { immediate: true }), (t3, o3) => {
    var _a2;
    return s(), r("div", null, [void 0 !== ((_a2 = e2.sqlQuery) == null ? void 0 : _a2.customColumns) ? (s(), h(Lp, { key: 0, "query-mode": e2.queryMode, icon: "ant-design:insert-row-right-outlined", title: "自定义列", onDeleteConfig: u2, onExecute: x2, full: true }, { config: M(() => [g(d(vt), { "query-mode": e2.queryMode, items: i2.value, "add-title": "添加自定义列", onAddBlock: v2, onEditBlock: C2, onDragChange: b2 }, null, 8, ["query-mode", "items"])]), _: 1 }, 8, ["query-mode"])) : f("", true), y2.value ? (s(), h(qp, { key: 1, class: "config-button", title: "自定义列", icon: "ant-design:insert-row-right-outlined", level: 0, onClick: k(w2, ["prevent"]) })) : f("", true), g(If, { "query-mode": e2.queryMode, onRegister: d(c2), "sql-query": e2.sqlQuery, onSubmit: S2 }, null, 8, ["query-mode", "onRegister", "sql-query"])]);
  };
} }), Nf = { class: "btn-bar" }, Bf = eo(e({ __name: "ApiConfig", props: { configKey: { type: Number, default: 0, require: true }, sqlQuery: { type: Object, require: true, default: void 0 }, level: { type: Number, default: 1 }, configMitt: { type: Object, default: void 0 }, queryMode: { type: Boolean, default: false } }, emits: ["configChange"], setup(e2, { emit: t2 }) {
  const o2 = e2, l2 = t2, { sqlQuery: n2 } = A(o2), { prefixCls: i2 } = xe("api-config"), y2 = Se().getThemeColor, v2 = m(), C2 = m(), { focused: b2 } = Ne(v2), { focused: M2 } = Ne(C2), k2 = Sr(), x2 = m(false), S2 = a(() => {
    var _a2;
    if (1 === k2.getSourceType || o2.queryMode) return false;
    if (o2.sqlQuery && ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.joins)) {
      for (const e3 of o2.sqlQuery.joins) if (!Bp(e3)) return false;
    }
    return true;
  }), _2 = a(() => {
    var _a2;
    return (void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.filters) || Tr(o2.sqlQuery, o2.level)) && !o2.queryMode;
  }), $2 = a(() => {
    var _a2;
    return (void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.customColumns) || Tr(o2.sqlQuery, o2.level)) && !o2.queryMode;
  }), L2 = a(() => {
    var _a2;
    return (void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.aggregates) || Tr(o2.sqlQuery, o2.level)) && !o2.queryMode;
  }), D2 = a(() => {
    var _a2;
    return void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.orders) && !o2.queryMode;
  }), I2 = a(() => {
    var _a2;
    return void 0 === ((_a2 = o2.sqlQuery) == null ? void 0 : _a2.limit) && !o2.queryMode;
  });
  function T2(e3) {
    l2("configChange", { ...o2.sqlQuery, fields: e3 }), k2.setFieldsChange(o2.level);
  }
  function N2(e3) {
    const t3 = { ...o2.sqlQuery, joins: e3 };
    P2(t3) || (l2("configChange", t3), k2.setFieldsChange(o2.level));
  }
  function B2(e3) {
    const t3 = { ...o2.sqlQuery, filters: e3 };
    P2(t3) || l2("configChange", t3);
  }
  function R2(e3) {
    const t3 = { ...o2.sqlQuery, customColumns: e3 };
    P2(t3) || (l2("configChange", t3), k2.setFieldsChange(o2.level));
  }
  function q2(e3) {
    const t3 = { ...o2.sqlQuery, aggregates: e3 };
    P2(t3) || (l2("configChange", t3), k2.setFieldsChange(o2.level));
  }
  function O2(e3) {
    const t3 = { ...o2.sqlQuery, groups: e3 };
    P2(t3) || (l2("configChange", t3), k2.setFieldsChange(o2.level));
  }
  function j2() {
    const e3 = { ...o2.sqlQuery, aggregates: void 0, groups: void 0 };
    P2(e3) || (l2("configChange", e3), k2.setFieldsChange(o2.level));
  }
  function z2(e3) {
    const t3 = { ...o2.sqlQuery, orders: e3 };
    P2(t3) || l2("configChange", t3);
  }
  function E2(e3) {
    const t3 = { ...o2.sqlQuery, limit: e3 };
    P2(t3) || l2("configChange", t3);
  }
  function F2(e3) {
    const t3 = { ...o2.sqlQuery, sqlQuery: e3 };
    P2(t3) || l2("configChange", t3);
  }
  function P2(e3) {
    return !(!(e3 == null ? void 0 : e3.sqlQuery) || !(e3 == null ? void 0 : e3.joins) || 0 !== e3.joins.length || void 0 !== e3.filters || void 0 !== e3.aggregates || void 0 !== e3.customColumns || void 0 !== e3.groups || void 0 !== e3.orders || void 0 !== e3.limit) && (l2("configChange", JSON.parse(JSON.stringify(e3.sqlQuery)), true), true);
  }
  async function H2() {
    const e3 = { sourceTable: "MFISH_ALIAS_" + o2.level, joins: [], fields: [], sqlQuery: { ...o2.sqlQuery } };
    return e3.fields = await Dr(e3), e3;
  }
  async function Q2() {
    var _a2, _b;
    if (Tr(o2.sqlQuery, o2.level)) {
      const e3 = await H2();
      return e3.joins = [], Rp(e3.joins), void l2("configChange", e3, true);
    }
    ((_a2 = n2 == null ? void 0 : n2.value) == null ? void 0 : _a2.joins) && Rp((_b = n2 == null ? void 0 : n2.value) == null ? void 0 : _b.joins);
  }
  function G2() {
    W2(["filters"]);
  }
  function U2() {
    W2(["customColumns"]);
  }
  function V2() {
    W2(["aggregates", "groups"]);
  }
  async function W2(e3) {
    let t3;
    const a2 = (t4, o3) => {
      e3.forEach((e4) => t4[e4] = []), l2("configChange", t4, o3);
    };
    if (Tr(o2.sqlQuery, o2.level)) return t3 = await H2(), void a2(t3, true);
    t3 = { ...o2.sqlQuery }, a2(t3, false);
  }
  function Y2() {
    var _a2;
    ((_a2 = n2 == null ? void 0 : n2.value) == null ? void 0 : _a2.orders) || l2("configChange", { ...o2.sqlQuery, orders: [] });
  }
  function Z2() {
    var _a2;
    ((_a2 = n2 == null ? void 0 : n2.value) == null ? void 0 : _a2.limit) || l2("configChange", { ...o2.sqlQuery, limit: 1e3 });
  }
  function K2() {
    var _a2;
    (_a2 = o2.configMitt) == null ? void 0 : _a2.emit(Lr.QUERY_SQL, o2.sqlQuery), M2.value = false;
  }
  function X2() {
    Nr(o2.configMitt, o2.sqlQuery, o2.level), b2.value = false;
  }
  return (t3, o3) => {
    var _a2;
    const a2 = w("ApiConfig", true);
    return s(), r("div", { class: c([d(i2), e2.level < d(k2).getLevel ? "inner" : "", d(k2).getShowData && d(k2).getShowDataLevel === e2.level ? "active" : ""]) }, [d(k2).getShowData && d(k2).getShowDataLevel === e2.level ? (s(), r("div", { key: 0, class: "select", style: u({ backgroundColor: d(y2) }) }, [g(d(Be), { icon: "ant-design:check-outlined", color: "#FFFFFF", size: 12 })], 4)) : f("", true), void 0 !== ((_a2 = d(n2)) == null ? void 0 : _a2.sqlQuery) ? (s(), h(a2, { key: 1, "config-key": e2.configKey, "query-mode": e2.queryMode, "sql-query": d(n2).sqlQuery, level: e2.level - 1, "config-mitt": e2.configMitt, onConfigChange: F2 }, null, 8, ["config-key", "query-mode", "sql-query", "level", "config-mitt"])) : f("", true), (s(), h(Ip, { key: e2.configKey + d(k2).getFieldsChange, class: "config", "sql-query": d(n2), "query-mode": e2.queryMode, "config-mitt": e2.configMitt, onFieldChange: T2 }, null, 8, ["sql-query", "query-mode", "config-mitt"])), (s(), h(zp, { level: e2.level, key: e2.configKey, class: "config", "sql-query": d(n2), "config-mitt": e2.configMitt, "query-mode": e2.queryMode, onJoinChange: N2 }, null, 8, ["level", "sql-query", "config-mitt", "query-mode"])), (s(), h(Kp, { "query-mode": e2.queryMode, level: e2.level, key: e2.configKey, class: "config", "sql-query": d(n2), "config-mitt": e2.configMitt, onFilterChange: B2 }, null, 8, ["query-mode", "level", "sql-query", "config-mitt"])), (s(), h(Tf, { "query-mode": e2.queryMode, level: e2.level, key: e2.configKey, class: "config", "sql-query": d(n2), "config-mitt": e2.configMitt, onCustomColChange: R2 }, null, 8, ["query-mode", "level", "sql-query", "config-mitt"])), (s(), h(tf, { "query-mode": e2.queryMode, key: e2.configKey, class: "config", "sql-query": d(n2), "config-mitt": e2.configMitt, onAggregateChange: q2, onGroupChange: O2, onDeleteAggregate: j2 }, null, 8, ["query-mode", "sql-query", "config-mitt"])), (s(), h(lf, { "query-mode": e2.queryMode, key: e2.configKey, class: "config", "sql-query": d(n2), "config-mitt": e2.configMitt, onOrderChange: z2 }, null, 8, ["query-mode", "sql-query", "config-mitt"])), (s(), h(Ep, { "query-mode": e2.queryMode, key: e2.configKey, class: "config", "sql-query": d(n2), "config-mitt": e2.configMitt, onLimitChange: E2 }, null, 8, ["query-mode", "sql-query", "config-mitt"])), p("div", Nf, [S2.value ? (s(), h(qp, { key: 0, class: "config-button", title: "关联", iconfont: "icon-mfish-join", level: e2.level, onClick: Q2 }, null, 8, ["level"])) : f("", true), _2.value ? (s(), h(qp, { key: 1, class: "config-button", title: "过滤", icon: "ant-design:filter-outlined", level: e2.level, onClick: G2 }, null, 8, ["level"])) : f("", true), $2.value ? (s(), h(qp, { key: 2, class: "config-button", title: "自定义列", icon: "ant-design:insert-row-right-outlined", level: e2.level, onClick: U2 }, null, 8, ["level"])) : f("", true), L2.value ? (s(), h(qp, { key: 3, class: "config-button", title: "聚合", iconfont: "icon-mfish-sum", level: e2.level, onClick: V2 }, null, 8, ["level"])) : f("", true), D2.value ? (s(), h(qp, { key: 4, class: "config-button", title: "排序", icon: "ant-design:sort-ascending-outlined", level: e2.level, onClick: Y2 }, null, 8, ["level"])) : f("", true), I2.value ? (s(), h(qp, { key: 5, class: "config-button", title: "行数", icon: "ant-design:column-height-outlined", level: e2.level, onClick: Z2 }, null, 8, ["level"])) : f("", true), g(qp, { class: "config-button", ref_key: "querySqlRef", ref: C2, style: u({ fontWeight: "bold", border: `1px dashed ${d(y2)}` }), title: "查看SQL", icon: "ant-design:console-sql-outlined", level: e2.level, onClick: K2 }, null, 8, ["style", "level"]), g(qp, { class: "config-button", style: u({ fontWeight: "bold", border: `1px dashed ${d(y2)}` }), ref_key: "queryDataRef", ref: v2, title: "执行", onMouseenter: o3[0] || (o3[0] = (e3) => x2.value = true), onMouseleave: o3[1] || (o3[1] = (e3) => x2.value = false), icon: !d(k2).getShowData || d(k2).getShowDataLevel !== e2.level || x2.value ? "ant-design:caret-right-outlined" : "ant-design:check-outlined", level: e2.level, onClick: X2 }, null, 8, ["style", "icon", "level"])])], 2);
  };
} }), [["__scopeId", "data-v-32695b70"]]), Rf = { key: 0 }, qf = { key: 1 }, Af = e({ __name: "SqlQueryModal", setup(e2) {
  const t2 = m(500), o2 = m(""), [a2, { setModalProps: l2 }] = bt(async (e3) => {
    l2({ width: "800px" }), o2.value = e3;
  }), { copy: n2, copied: i2 } = Ie({ legacy: true });
  function c2(e3) {
    t2.value = e3;
  }
  return (e3, l3) => {
    const p2 = w("AButton");
    return s(), h(d(Ct), $(e3.$attrs, { onRegister: d(a2), title: "SQL查看", "show-ok-btn": false, "cancel-text": "关闭", onHeightChange: c2 }), { insertFooter: M(() => [g(p2, { onClick: l3[0] || (l3[0] = (e4) => d(n2)(o2.value)), color: d(i2) ? "success" : "primary" }, { default: M(() => [d(i2) ? (s(), r("span", qf, "已拷贝")) : (s(), r("span", Rf, "拷贝"))]), _: 1 }, 8, ["color"])]), default: M(() => [g(d(Lt), { style: u({ height: `${t2.value}px` }), mode: d(Dt).JS, value: o2.value, "onUpdate:value": l3[1] || (l3[1] = (e4) => o2.value = e4), readonly: true }, null, 8, ["style", "mode", "value"])]), _: 1 }, 16, ["onRegister"]);
  };
} });
const Of = ["src"], jf = eo(e({ name: "PreviewFrame", __name: "PreviewFrame", props: { frameSrc: Tt.string.def(""), frameWidth: Tt.number.def(400), frameHeight: Tt.number.def(300) }, emits: ["message"], setup(e2, { expose: t2, emit: o2 }) {
  const l2 = e2, n2 = o2, r2 = m(true), f2 = m(), { prefixCls: g2 } = xe("preview-frame"), y2 = a(() => ({ width: `${l2.frameWidth}px`, height: `${l2.frameHeight}px` }));
  function v2() {
    r2.value = false;
  }
  const C2 = (e3) => {
    n2("message", e3.data);
  };
  return i(() => {
    window.addEventListener("message", C2);
  }), _(() => {
    window.removeEventListener("message", C2);
  }), t2({ postMessage: (e3, t3, o3) => {
    var _a2;
    const a2 = d(f2);
    a2 && ((_a2 = a2.contentWindow) == null ? void 0 : _a2.postMessage(e3, t3, o3));
  }, reload: () => {
    var _a2;
    r2.value = true;
    const e3 = f2.value;
    e3 && ((_a2 = e3.contentWindow) == null ? void 0 : _a2.location.reload(), r2.value = false);
  } }), (t3, o3) => (s(), h(d(yt), null, { default: M(() => [p("iframe", { style: u(y2.value), src: e2.frameSrc, class: c(`${d(g2)}__main`), ref_key: "frameRef", ref: f2, onLoad: v2 }, null, 46, Of)]), _: 1 }));
} }), [["__scopeId", "data-v-1bb3fd25"]]);
const zf = { class: "share-title" }, Ef = e({ __name: "ScreenPreview", props: { fixScale: { type: Number, default: 1 }, borderRadius: { type: String } }, setup(e2) {
  const t2 = e2, { prefixCls: l2 } = xe("screen-preview"), { token: C2 } = P.useToken(), b2 = a(() => C2.value.colorBorder), k2 = o("fitDomRef"), w2 = m([]), { getAntdLocale: x2 } = It(), $2 = qr(), { antTheme: L2 } = Le(a(() => $2.getTheme)), D2 = m(false), I2 = m(""), T2 = m(window.innerWidth), N2 = m(window.innerHeight), B2 = m(), R2 = a(() => [...$2.getComponentList].reverse()), q2 = n({ width: 0, height: 0 }), A2 = a(() => ({ ...Xd($2.getCanvasConfig), width: $2.getCanvasConfig.width * q2.width * t2.fixScale + "px", height: $2.getCanvasConfig.height * q2.height * t2.fixScale + "px" })), E2 = (e3) => lp({ ...e3.chartContain.dropInfo }), F2 = (e3) => {
    var _a2, _b;
    if (((_b = (_a2 = e3.chart) == null ? void 0 : _a2.events) == null ? void 0 : _b.emits) && e3.chart.events.emits.length > 0) {
      for (const t3 of e3.chart.events.emits) if (t3 === is.CHART_CLICK || t3 === is.CHART_DBLCLICK) return "allow-pointer";
    }
  }, H2 = (e3) => {
    const t3 = ap(e3);
    return t3.borderColor || (t3.borderColor = b2.value), Qe(t3, ["transform"]);
  }, Q2 = () => window.parent.document.body;
  let G2;
  const { register: U2, unRegister: V2 } = function() {
    const { getDataTable: e3 } = ls(), t3 = [], o2 = qr();
    return { register: async function() {
      const a2 = (o3) => {
        var _a2;
        ((_a2 = o3.data.autoRefresh) == null ? void 0 : _a2.open) && o3.data.autoRefresh.interval && t3.push(setInterval(() => {
          e3(o3).then((e4) => {
            var _a3;
            o3.type && ((_a3 = Zd[o3.type]) == null ? void 0 : _a3.initData(o3, e4));
          });
        }, 60 * o3.data.autoRefresh.interval * 1e3));
      };
      t3.length = 0;
      for (const e4 of o2.getComponentList) if (a2(e4.chart), e4.chart.type === as.MfCombine) for (const t4 of e4.chart.options.components) a2(t4.chart);
    }, unRegister: function() {
      for (const e4 of t3) clearInterval(e4);
    } };
  }();
  function W2(e3) {
    q2.width = e3.width, q2.height = e3.height;
  }
  return i(() => {
    setTimeout(() => {
      $2.loadingScreen().then(() => {
        var _a2;
        const { calcScale: e3, windowResize: o2, unWindowResize: a2 } = function(e4, t3, o3, a3, l4, n2 = 1) {
          const i2 = { width: 1, height: 1 }, r2 = () => {
            if (a3) {
              switch (o3) {
                case Pr.FIT_WIDTH:
                  i2.width = Number.parseFloat((window.innerWidth / e4).toFixed(5));
                  break;
                case Pr.FIT_WIDTH_SCALE:
                  i2.width = Number.parseFloat((window.innerWidth / e4).toFixed(5)), i2.height = i2.width;
                  break;
                case Pr.FIT_HEIGHT:
                  i2.height = Number.parseFloat((window.innerHeight / t3).toFixed(5));
                  break;
                case Pr.FIT_HEIGHT_SCALE:
                  i2.height = Number.parseFloat((window.innerHeight / t3).toFixed(5)), i2.width = i2.height;
                  break;
                case Pr.FIT_BOX:
                  i2.width = Number.parseFloat((window.innerWidth / e4).toFixed(5)), i2.height = Number.parseFloat((window.innerHeight / t3).toFixed(5));
              }
              a3.style.transform = `scale(${i2.width * n2}, ${i2.height * n2})`, l4 && l4(i2);
            }
          }, s2 = He(() => {
            r2();
          }, 200);
          return { windowResize: () => {
            window.addEventListener("resize", s2);
          }, unWindowResize: () => {
            window.removeEventListener("resize", s2);
          }, calcScale: r2 };
        }($2.getCanvasConfig.width, $2.getCanvasConfig.height, $2.getCanvasConfig.fitType, k2.value, W2, t2.fixScale);
        e3(), o2(), G2 = a2, U2();
        const l3 = /* @__PURE__ */ new Map();
        for (let e4 = 0; e4 < R2.value.length; e4++) {
          const t3 = R2.value[e4];
          Kd.on(Hr.EVENT_ANIMATION, (o4) => {
            Wd(o4, t3, w2.value[e4]);
          });
          const o3 = (_a2 = t3.chart.animations) == null ? void 0 : _a2.filter((e5) => !e5.events || 0 === e5.events.length);
          !o3 || 0 === o3.length || w2.value.length <= e4 || (R2.value[e4].chartContain.show && R2.value[e4].chart.type !== as.MfCombine && (R2.value[e4].chartContain.show = false, l3.set(e4, R2.value[e4])), setTimeout(() => {
            l3.has(e4) && (l3.get(e4).chartContain.show = true), Vd(w2.value[e4], o3).then();
          }, 600));
        }
      });
    }, 10), Kd.on(Hr.SHOW_MODAL, (e3) => {
      var _a2, _b, _c2, _d2, _e2, _f2;
      I2.value = e3.href, B2.value = ((_b = (_a2 = e3.jump) == null ? void 0 : _a2.page) == null ? void 0 : _b.name) || e3.href, T2.value = (_d2 = (_c2 = e3.jump) == null ? void 0 : _c2.page) == null ? void 0 : _d2.width, N2.value = (_f2 = (_e2 = e3.jump) == null ? void 0 : _e2.page) == null ? void 0 : _f2.height, D2.value = true;
    }), document.addEventListener("visibilitychange", () => {
      document.hidden ? V2 && V2() : U2();
    });
  }), _(() => {
    G2 && G2();
  }), (t3, o2) => (s(), h(d(me), { locale: d(x2), theme: d(L2) }, { default: M(() => [g(d(yt), { class: c(d(l2)), style: u({ borderRadius: e2.borderRadius }) }, { default: M(() => [p("div", { class: "screen-wrap", style: u(A2.value) }, [p("div", { class: "screen-canvas", ref_key: "fitDomRef", ref: k2 }, [d($2).getCanvasConfig.watermark ? (s(), h(d(ye), { key: 0, content: d($2).getCanvasConfig.watermark, style: u({ position: "absolute", width: `${d($2).getCanvasConfig.width}px`, height: `${d($2).getCanvasConfig.height}px` }) }, null, 8, ["content", "style"])) : f("", true), (s(true), r(y, null, v(R2.value, (e3, t4) => {
    var _a2, _b, _c2, _d2, _e2, _f2, _g2;
    return O((s(), r("div", { class: c(["chart-contain", F2(e3)]), style: u(E2(e3)), key: e3 == null ? void 0 : e3.chart.id }, [p("div", { ref_for: true, ref: (e4) => function(e5, t5) {
      w2.value[t5] = e5;
    }(e4, t4), style: u(H2(e3)) }, [(s(), h(j((e3 == null ? void 0 : e3.chart) && e3.chart.type && d(Zd)[e3.chart.type].component), { class: "component", id: `com${e3 == null ? void 0 : e3.chart.id}`, chart: e3 == null ? void 0 : e3.chart, "chart-contain": e3 == null ? void 0 : e3.chartContain }, null, 8, ["id", "chart", "chart-contain"]))], 4)], 6)), [[z, void 0 === ((_b = (_a2 = e3.chart) == null ? void 0 : _a2.showHide) == null ? void 0 : _b.show) && ((_c2 = e3.chartContain) == null ? void 0 : _c2.show) || void 0 !== ((_e2 = (_d2 = e3.chart) == null ? void 0 : _d2.showHide) == null ? void 0 : _e2.show) && ((_g2 = (_f2 = e3.chart) == null ? void 0 : _f2.showHide) == null ? void 0 : _g2.show)]]);
  }), 128))], 512)], 4)]), _: 1 }, 8, ["class", "style"]), g(d(ve), { open: D2.value, "onUpdate:open": o2[0] || (o2[0] = (e3) => D2.value = e3), "get-container": Q2, width: T2.value + 48, footer: null, mask: true, centered: true }, { title: M(() => [p("div", zf, S(B2.value), 1)]), default: M(() => [g(jf, { "frame-src": I2.value, "frame-width": T2.value, "frame-height": N2.value }, null, 8, ["frame-src", "frame-width", "frame-height"])]), _: 1 }, 8, ["open", "width"])]), _: 1 }, 8, ["locale", "theme"]));
} }), Ff = eo(Ef, [["__scopeId", "data-v-4def8031"]]), Pf = e({ __name: "ScreenSizeConfig", setup(e2) {
  const t2 = m("1k"), o2 = m([{ value: "720", label: "1280*720" }, { value: "1k", label: "1920*1080" }, { value: "2k", label: "2048*1152" }, { value: "4k", label: "4096*2160" }, { value: "自定义", label: "自定义" }]), a2 = qr(), n2 = (e3) => {
    var _a2;
    const t3 = (_a2 = o2.value) == null ? void 0 : _a2.find((t4) => t4.value === e3);
    if (t3) {
      const e4 = t3.label.split("*");
      e4 && 2 === e4.length && (a2.getCanvasConfig.width = Number(e4[0]), a2.getCanvasConfig.height = Number(e4[1]));
    }
  };
  l([() => a2.getCanvasConfig.width, () => a2.getCanvasConfig.height], ([e3, o3]) => {
    t2.value = 1280 === e3 && 720 === o3 ? "720" : 1920 === e3 && 1080 === o3 ? "1k" : 2048 === e3 && 1152 === o3 ? "2k" : 4096 === e3 && 2160 === o3 ? "4k" : "自定义";
  }, { immediate: true });
  const { prefixCls: i2 } = xe("size-config");
  return (e3, l2) => {
    const r2 = w("AInput");
    return s(), h(d(Ce), { compact: "", class: c(d(i2)) }, { default: M(() => [g(d(K), { class: "select-size", value: t2.value, "onUpdate:value": l2[0] || (l2[0] = (e4) => t2.value = e4), options: o2.value, onChange: n2 }, null, 8, ["value", "options"]), g(d(Q), { value: d(a2).getCanvasConfig.width, "onUpdate:value": l2[1] || (l2[1] = (e4) => d(a2).getCanvasConfig.width = e4), class: "input-left", placeholder: "宽度", min: 50, max: 1e4, controls: false, maxlength: 5 }, { prefix: M(() => l2[3] || (l2[3] = [p("div", { class: "prefix" }, "W", -1)])), _: 1 }, 8, ["value"]), g(r2, { class: "input-split", placeholder: "*", disabled: "" }), g(d(Q), { value: d(a2).getCanvasConfig.height, "onUpdate:value": l2[2] || (l2[2] = (e4) => d(a2).getCanvasConfig.height = e4), class: "input-right", placeholder: "高度", min: 50, max: 1e4, controls: false, maxlength: 5 }, { prefix: M(() => l2[4] || (l2[4] = [p("div", { class: "prefix" }, "H", -1)])), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["class"]);
  };
} }), Hf = eo(Pf, [["__scopeId", "data-v-148656f7"]]), Qf = { class: "label" }, Gf = { key: 2 }, Uf = { key: 0, class: "copy-action" }, Vf = { class: "child-item" }, Wf = e({ __name: "ConfigGroup", props: { title: { type: String, default: "" }, allowCollapse: { type: Boolean, default: true }, allowCheck: { type: Boolean, default: false }, titleCheck: { type: Boolean, default: false }, defaultExpand: { type: Boolean, default: true }, allowCopy: { type: Boolean, default: false }, tooltip: { type: String, default: "" } }, emits: ["checked", "copy", "paste"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, l2 = m(o2.titleCheck), n2 = m(o2.defaultExpand), { prefixCls: i2 } = xe("config-group"), u2 = qr();
  function y2() {
    o2.allowCollapse ? n2.value = !n2.value : n2.value = true;
  }
  function v2() {
    n2.value = !!l2.value, a2("checked", l2.value);
  }
  function C2() {
    a2("copy", (e3) => {
      u2.setCopyConfig(e3);
    });
  }
  function b2() {
    a2("paste", u2.getCopyConfig);
  }
  return (t3, o3) => (s(), r("div", { class: c(d(i2)) }, [p("div", { class: c(["group-title", [e2.allowCollapse ? "collapsed" : ""]]), onClick: y2 }, [p("div", Qf, [e2.allowCheck ? (s(), h(d(W), { key: 0, checked: l2.value, "onUpdate:checked": o3[0] || (o3[0] = (e3) => l2.value = e3), onClick: o3[1] || (o3[1] = k(() => {
  }, ["stop"])), onChange: v2 }, null, 8, ["checked"])) : f("", true), e2.tooltip ? (s(), h(d(G), { key: 1, title: e2.tooltip }, { default: M(() => [x(S(e2.title), 1)]), _: 1 }, 8, ["title"])) : (s(), r("span", Gf, S(e2.title), 1)), !e2.allowCheck && e2.allowCollapse || e2.allowCheck && e2.titleCheck ? (s(), h(d(Be), { key: 3, icon: `ant-design:${n2.value ? "up" : "down"}-outlined`, size: 12 }, null, 8, ["icon"])) : f("", true)]), p("div", { onClick: o3[2] || (o3[2] = k(() => {
  }, ["stop"])) }, [R(t3.$slots, "action", {}, void 0, true)]), e2.allowCopy ? (s(), r("div", Uf, [g(d(G), { placement: "top", title: `复制${e2.title}` }, { default: M(() => [g(d(Be), { "aria-hidden": "false", size: 12, icon: "iconfont:icon-mfish-copy", onClick: k(C2, ["stop"]) })]), _: 1 }, 8, ["title"]), g(d(G), { placement: "top", title: `粘贴${e2.title}` }, { default: M(() => [g(d(Be), { "aria-hidden": "false", size: 12, icon: "iconfont:icon-mfish-paste", onClick: k(b2, ["stop"]) })]), _: 1 }, 8, ["title"])])) : f("", true)], 2), g(d(Bt), { show: !e2.allowCheck && n2.value || e2.allowCheck && n2.value && e2.titleCheck }, { default: M(() => [p("div", Vf, [R(t3.$slots, "default", {}, void 0, true)])]), _: 3 }, 8, ["show"])], 2));
} }), Yf = eo(Wf, [["__scopeId", "data-v-9aa90d73"]]), Zf = { class: "table-bordered" }, Kf = e({ __name: "GlobalParamsConfig", setup(e2) {
  const { prefixCls: t2 } = xe("global-params-config"), o2 = qr(), a2 = [{ title: "参数名", dataIndex: "name", align: "center" }, { title: "默认值", dataIndex: "defaultValue", align: "center" }];
  return (e3, l2) => (s(), r("div", { class: c(d(t2)) }, [g(Yf, { title: "全局变量", tooltip: "用于大屏全局接收外部参数" }, { default: M(() => {
    var _a2;
    return [p("div", Zf, [g(d(be), { size: "small", columns: a2, "data-source": (_a2 = d(o2).getCanvasConfig) == null ? void 0 : _a2.globalParams, bordered: "", pagination: false }, null, 8, ["data-source"])])];
  }), _: 1 })], 2));
} }), Xf = { class: "title" }, Jf = { class: "title" }, eh = { class: "title" }, th = e({ __name: "CanvasConfig", setup(e2) {
  const { prefixCls: t2 } = xe("canvas-config"), o2 = qr(), a2 = m(), l2 = [{ title: "深色", value: Ge.DARK }, { title: "浅色", value: Ge.LIGHT }, { title: "跟随平台", value: Ge.SYSTEM }], u2 = n({ [Pr.FIT_BOX]: { name: "全屏铺满", icon: "carbon:fit-to-screen", description: "全屏铺满（设备与配置大屏比例不同时会变形）" }, [Pr.FIT_ORIGINAL]: { name: "原始比例", icon: "carbon:center-to-fit", description: "原始比例（保持配置大屏比例，不填充空白处）" }, [Pr.FIT_WIDTH_SCALE]: { name: "横向适配", icon: "carbon:fit-to-width", description: "横向适配-保持纵横比（横向铺满，允许纵向滚动，保持原有画布比例）" }, [Pr.FIT_HEIGHT_SCALE]: { name: "纵向适配", icon: "carbon:fit-to-height", description: "纵向适配-保持纵横比（纵向铺满，允许横向滚动，保持原有画布比例）" }, [Pr.FIT_WIDTH]: { name: "横向适配", icon: "carbon:fit-to-width", description: "横向适配（横向铺满，允许纵向滚动，会变形）" }, [Pr.FIT_HEIGHT]: { name: "纵向适配", icon: "carbon:fit-to-height", description: "纵向适配（纵向铺满，允许横向滚动，会变形）" } });
  function f2(e3) {
    C2(e3), a2.value = e3;
  }
  function C2(e3) {
    o2.getCanvasConfig.backgroundColor = e3 || "";
  }
  function b2(e3, t3) {
    t3 && t3.length > 0 && (o2.getCanvasConfig.backgroundImage = t3[0].fileKey);
  }
  function k2() {
    o2.getCanvasConfig.backgroundImage = "";
  }
  return i(() => {
    setTimeout(() => {
      o2.getCanvasConfig.backgroundColor && (a2.value = o2.getCanvasConfig.backgroundColor);
    }, 200);
  }), (e3, n2) => {
    const i2 = w("AInput");
    return s(), h(d(yt), null, { default: M(() => [p("div", { class: c(d(t2)) }, [n2[8] || (n2[8] = p("div", { class: "title" }, "大屏名称", -1)), g(i2, { value: d(o2).getCanvasConfig.screenName, "onUpdate:value": n2[0] || (n2[0] = (e4) => d(o2).getCanvasConfig.screenName = e4), "show-count": "", maxlength: 30 }, null, 8, ["value"]), n2[9] || (n2[9] = p("div", { class: "title" }, " 描述", -1)), g(d(Me), { value: d(o2).getCanvasConfig.screenDesc, "onUpdate:value": n2[1] || (n2[1] = (e4) => d(o2).getCanvasConfig.screenDesc = e4), "show-count": "", maxlength: 200 }, null, 8, ["value"]), n2[10] || (n2[10] = p("div", { class: "title" }, "大屏尺寸", -1)), g(Hf), p("div", Xf, [n2[5] || (n2[5] = x(" 主题 ")), g(d(Z), { size: "small", value: d(o2).getCanvasConfig.theme, "onUpdate:value": n2[2] || (n2[2] = (e4) => d(o2).getCanvasConfig.theme = e4) }, { default: M(() => [(s(), r(y, null, v(l2, (e4, t3) => g(d(Y), { key: t3, value: e4.value }, { default: M(() => [x(S(e4.title), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), n2[11] || (n2[11] = p("div", { class: "title" }, "背景颜色", -1)), g(d(zo), { value: a2.value, onConfirmChange: f2, onInputChange: C2 }, null, 8, ["value"]), n2[12] || (n2[12] = p("div", { class: "title" }, "背景图片", -1)), g(d(Nt), { "file-keys": d(o2).getCanvasConfig.backgroundImage, accepts: ".jpg,.jpeg,.png,.svg", "button-text": "上传背景", "max-count": 1, "is-pic": true, onSuccess: b2, onRemove: k2 }, null, 8, ["file-keys"]), p("div", Jf, [n2[6] || (n2[6] = x(" 水印 ")), p("div", null, [g(i2, { value: d(o2).getCanvasConfig.watermark, "onUpdate:value": n2[3] || (n2[3] = (e4) => d(o2).getCanvasConfig.watermark = e4), placeholder: "清空无水印", "show-count": "", maxlength: 50 }, null, 8, ["value"])])]), p("div", eh, [n2[7] || (n2[7] = x(" 适配方式 ")), p("div", null, [g(d(Z), { value: d(o2).getCanvasConfig.fitType, "onUpdate:value": n2[4] || (n2[4] = (e4) => d(o2).getCanvasConfig.fitType = e4) }, { default: M(() => [(s(true), r(y, null, v(Object.keys(u2), (e4) => (s(), h(d(G), { key: e4, placement: "bottomRight", title: u2[e4].description }, { default: M(() => [g(d(Y), { class: c(`${d(t2)}-radio-button`), value: e4 }, { default: M(() => [g(d(Be), { icon: u2[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["class", "value"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 }, 8, ["value"])])]), g(Kf)], 2)]), _: 1 });
  };
} }), oh = eo(th, [["__scopeId", "data-v-c7f8401a"]]), ah = { class: "header" }, lh = e({ name: "FrameConfig", __name: "index", props: { collapsed: Tt.bool.def(false) }, setup(e2, { expose: t2 }) {
  const o2 = e2, { prefixCls: n2 } = xe("frame-config"), i2 = a(() => [n2, { collapsed: o2.collapsed }]), u2 = m(), y2 = m(), v2 = m(), C2 = qr(), b2 = m();
  function k2(e3) {
    if (e3) {
      const t3 = Zd[e3.chart.type].config;
      u2.value = Object.keys(t3).filter((e4) => t3[e4].show).map((e4) => t3[e4]);
    } else u2.value = [{ value: "画布配置", payload: { icon: "carbon:gui-management", component: T(oh) } }];
    y2.value = u2.value[0].value, u2.value[0].payload.component ? v2.value = E(u2.value[0].payload.component) : v2.value = null;
  }
  function w2(e3) {
    var _a2;
    y2.value = e3;
    const t3 = (_a2 = u2.value) == null ? void 0 : _a2.find((t4) => t4.value === e3);
    t3.payload.component ? v2.value = E(t3.payload.component) : v2.value = null;
  }
  return l([() => C2.getCurComponent, () => {
    var _a2, _b, _c2;
    return (_c2 = (_b = (_a2 = C2.getCurComponent) == null ? void 0 : _a2.chart) == null ? void 0 : _b.options) == null ? void 0 : _c2.selectIndex;
  }], ([e3, t3]) => {
    k2(void 0 === t3 ? e3 : C2.getCurConfigComponent);
  }, { immediate: true }), t2({ rowSelect: function(e3) {
    b2.value = e3;
  } }), (e3, t3) => (s(), r("div", { class: c(i2.value) }, [p("div", ah, [g(d(U), { value: y2.value, options: u2.value, onChange: w2, block: "" }, { label: M(({ value: e4, payload: t4 }) => [t4.icon ? (s(), h(d(Be), { key: 0, icon: t4.icon }, null, 8, ["icon"])) : f("", true), x(" " + S(e4), 1)]), _: 1 }, 8, ["value", "options"])]), (s(), h(j(v2.value), { "select-data": b2.value }, { "data-select": M(() => [R(e3.$slots, "data-select", { curSelect: b2.value })]), _: 3 }, 8, ["select-data"]))], 2));
} }), nh = { class: "action" }, ih = { class: "ac-int" }, rh = e({ __name: "CanvasRulerLine", props: { lineValue: { type: Number, default: 0 }, lineList: { type: Array, default: () => [] } }, setup(e2) {
  const t2 = e2, { lineList: o2 } = t2, a2 = qr(), { prefixCls: l2 } = xe("canvas-ruler-line"), n2 = Se().getThemeColor;
  return (e3, t3) => (s(), r("div", { class: c(d(l2)) }, [(s(true), r(y, null, v(d(o2), (e4, t4) => (s(), r("div", { class: c(["line-item", { x: "x" === e4.position, y: "y" === e4.position }]), style: u({ left: "x" === e4.position ? `${Math.round(e4.offset * d(a2).getScale)}px` : 0, top: "y" === e4.position ? `${Math.round(e4.offset * d(a2).getScale)}px` : 0 }), key: `${e4}${t4}` }, [p("div", nh, [g(d(Be), { class: "ac-close", icon: "ant-design:close-outline", color: d(n2), onClick: (a3) => function(e5, t5) {
    o2.splice(t5, 1);
  }(e4.position, t4) }, null, 8, ["color", "onClick"]), p("span", ih, S(e4.value), 1)])], 6))), 128))], 2));
} }), sh = eo(rh, [["__scopeId", "data-v-91bb6b29"]]), uh = { id: "horn", class: "horn" }, ch = ["id", "width", "height"], dh = { class: "indicator-value" }, ph = ["id", "height", "width"], fh = { class: "indicator-value" }, hh = e({ __name: "CanvasRuler", props: { rulerXLeft: { type: Number, default: 0 }, rulerYTop: { type: Number, default: 0 }, rulerX: { type: Number, default: 5e3 }, rulerY: { type: Number, default: 3e3 }, drift: { type: Number, default: 0 }, rulerHeight: { type: Number, default: 28 }, rulerWidth: { type: Number, default: 38 } }, setup(e2) {
  const t2 = e2, n2 = qr(), { prefixCls: i2 } = xe("canvas-ruler"), f2 = m(0), y2 = m(true), v2 = T({}), b2 = T({}), k2 = a(() => `${t2.rulerXLeft}px`), w2 = a(() => `${t2.rulerYTop}px`), x2 = o("rulerXRef"), _2 = o("rulerYRef"), $2 = a(() => Se().getDarkMode.value === Ge.DARK ? "#999" : "#666");
  l(() => Se().getDarkMode.value, (e3, t3) => {
    e3 !== t3 && C(() => {
      j2();
    });
  }), l([() => n2.getScale, () => t2.rulerX, () => t2.rulerY], ([e3, t3, o2], [a2, l2, n3]) => {
    a2 ? (e3 !== a2 && C(() => j2()), t3 !== l2 && C(() => P2()), o2 !== n3 && C(() => H2())) : C(() => j2());
  }, { immediate: true });
  const L2 = a(() => t2.rulerX * n2.getScale), D2 = a(() => t2.rulerY * n2.getScale), I2 = (e3) => {
    v2.value = { display: "block", left: `${e3.offsetX}px`, top: 0, height: "100vh", width: "1px" };
    const o2 = Math.round(e3.offsetX / n2.getScale);
    f2.value = o2 - t2.drift;
  }, N2 = () => {
    v2.value = { display: "none" };
  }, B2 = (e3) => {
    y2.value = true;
    const o2 = Math.round(e3.offsetX / n2.getScale);
    n2.getGuideLine.lineListY.push({ position: "x", offset: o2, value: o2 - t2.drift });
  }, R2 = (e3) => {
    b2.value = { display: "block", left: 0, top: `${e3.offsetY}px`, width: "100vw", height: "1px" };
    const o2 = Math.round(e3.offsetY / n2.getScale);
    f2.value = o2 - t2.drift;
  }, q2 = () => {
    b2.value = { display: "none" };
  }, A2 = (e3) => {
    y2.value = true;
    const o2 = Math.round(e3.offsetY / n2.getScale);
    n2.getGuideLine.lineListX.push({ position: "y", offset: o2, value: o2 - t2.drift });
  };
  function j2() {
    P2(), H2();
  }
  const E2 = (e3, t3, o2, a2, l2) => {
    F2(e3, t3, $2.value, n2.getScale, o2, a2, l2);
  }, F2 = (e3, t3, o2, a2, l2, n3, i3) => {
    e3.reset(), e3.clearRect(0, 0, l2, n3), e3.beginPath(), e3.font = "10px 微软雅黑", e3.strokeStyle = o2, e3.fillStyle = o2, e3.lineWidth = 1;
    const r2 = ((e4, t4) => t4 <= 0.25 ? 40 : t4 <= 0.5 ? 20 : t4 <= 1 ? 10 : t4 <= 2 ? 5 : t4 <= 4 ? 2 : 1)(0, a2), s2 = r2 * a2;
    for (let o3 = t3, u2 = 0; o3 < t3 + l2; o3 += r2, u2++) {
      const t4 = Math.round(u2 * s2) + 0.5;
      i3 ? e3.moveTo(t4, 0) : e3.moveTo(0, t4), e3.save(), i3 ? e3.translate(t4, 0.6 * n3) : e3.translate(0.7 * n3, t4), i3 || e3.rotate(-Math.PI / 2), (a2 < 0.5 && u2 % 20 == 0 || u2 % 10 == 0) && e3.fillText(o3.toString(), 4, 8), e3.restore(), u2 % 10 == 0 ? i3 ? e3.lineTo(t4, 9 * n3 / 12) : e3.lineTo(10 * n3 / 12, t4) : u2 % 5 == 0 ? i3 ? e3.lineTo(t4, 9 * n3 / 20) : e3.lineTo(10 * n3 / 20, t4) : i3 ? e3.lineTo(t4, n3 / 4) : e3.lineTo(n3 / 4, t4);
    }
    e3.stroke(), e3.closePath();
  };
  function P2() {
    if (!x2.value) return;
    const e3 = x2.value.getContext("2d");
    e3 && E2(e3, -t2.drift, t2.rulerX, x2.value.height, true);
  }
  function H2() {
    if (!_2.value) return;
    const e3 = _2.value.getContext("2d");
    e3 && E2(e3, -t2.drift, t2.rulerY, _2.value.width, false);
  }
  const Q2 = () => {
    y2.value = !y2.value;
  };
  return (t3, o2) => (s(), r("div", { class: c(d(i2)) }, [p("div", uh, [g(d(G), { title: (y2.value ? "隐藏" : "显示") + "辅助线" }, { default: M(() => [y2.value ? (s(), h(d(Be), { key: 0, class: "icon", icon: "ant-design:eye-outlined", onClick: Q2 })) : (s(), h(d(Be), { key: 1, class: "icon", icon: "ant-design:eye-invisible-outlined", onClick: Q2 }))]), _: 1 }, 8, ["title"])]), p("div", { class: "ruler rulerX", style: u({ width: `${L2.value}px`, left: k2.value }) }, [p("canvas", { ref_key: "rulerXRef", ref: x2, id: `${d(i2)}-x`, width: L2.value, height: e2.rulerHeight, onMousemove: I2, onMouseleave: N2, onClick: B2 }, null, 40, ch), p("div", { class: "indicator x", style: u(v2.value) }, [p("div", dh, S(f2.value), 1)], 4), O(g(sh, { "line-value": f2.value, "line-list": d(n2).getGuideLine.lineListY }, null, 8, ["line-value", "line-list"]), [[z, y2.value]])], 4), p("div", { class: "ruler rulerY", style: u({ height: `${D2.value}px`, top: w2.value }) }, [p("canvas", { ref_key: "rulerYRef", ref: _2, id: `${d(i2)}-y`, height: D2.value, width: e2.rulerWidth, onMousemove: R2, onMouseleave: q2, onClick: A2 }, null, 40, ph), p("div", { class: "indicator y", style: u(b2.value) }, [p("div", fh, S(f2.value), 1)], 4), O(g(sh, { "line-value": f2.value, "line-list": d(n2).getGuideLine.lineListX }, null, 8, ["line-value", "line-list"]), [[z, y2.value]])], 4)], 2));
} }), gh = eo(hh, [["__scopeId", "data-v-eeb86e63"]]), mh = e({ __name: "CanvasBackground", props: { drift: { type: Number, default: 0 }, width: { type: Number, default: 9e3 }, height: { type: Number, default: 6e3 }, ruler: { type: Object, default: () => ({ height: 28, width: 38 }) } }, setup(e2) {
  const t2 = e2, o2 = qr(), l2 = yp(), n2 = a(() => t2.width * o2.getScale + "px"), i2 = a(() => t2.height * o2.getScale + "px"), { prefixCls: p2 } = xe("canvas-background");
  function f2(e3) {
    o2.cleanCurComponent(), 2 !== e3.button && l2.setShowMenu(false);
  }
  return (t3, a2) => (s(), r("div", { class: c(d(p2)), style: u({ width: n2.value, height: i2.value, padding: `${e2.drift * d(o2).getScale}px 0 0 ${e2.drift * d(o2).getScale}px` }), onMousedown: f2 }, [R(t3.$slots, "default", {}, void 0, true)], 38));
} }), yh = eo(mh, [["__scopeId", "data-v-2efcd248"]]), vh = { class: "scale-add-reduce" }, Ch = { class: "scale-lock" }, bh = e({ __name: "CanvasScale", props: { scale: { type: Number, default: 100 }, minScale: { type: Number, default: 20 }, maxScale: { type: Number, default: 500 } }, emits: ["addScale", "reduceScale", "changeScale", "autoScale"], setup(e2, { emit: t2 }) {
  const o2 = t2, a2 = m(true), { prefixCls: l2 } = xe("canvas-scale"), n2 = () => {
    o2("reduceScale");
  }, i2 = () => {
    o2("addScale");
  }, u2 = (e3) => {
    o2("changeScale", e3);
  }, f2 = (e3) => {
    o2("autoScale", e3), a2.value = e3;
  };
  return (t3, o3) => (s(), r("div", { class: c(d(l2)) }, [p("div", vh, [g(d(Be), { class: "scale-icon", title: "放大", size: 18, icon: "ant-design:plus-outlined", onClick: i2 }), g(d(Q), { size: "small", bordered: false, value: e2.scale, max: e2.maxScale, min: e2.minScale, step: 5, controls: false, formatter: (e3) => `${Math.round(100 * e3)}`, onChange: u2 }, null, 8, ["value", "max", "min", "formatter"]), o3[2] || (o3[2] = p("div", { class: "scale-sign" }, "%", -1)), g(d(Be), { class: "scale-icon", title: "缩小", size: 18, icon: "ant-design:minus-outlined", onClick: n2 })]), p("div", Ch, [g(d(G), { title: a2.value ? "锁定自动比例" : "解锁自动比例", placement: "right" }, { default: M(() => [a2.value ? (s(), h(d(Be), { key: 0, icon: "ant-design:unlock-outlined", onClick: o3[0] || (o3[0] = (e3) => f2(false)) })) : (s(), h(d(Be), { key: 1, icon: "ant-design:lock-outlined", onClick: o3[1] || (o3[1] = (e3) => f2(true)) }))]), _: 1 }, 8, ["title"])])], 2));
} }), Mh = e({ __name: "ShortcutViewModal", setup(e2) {
  const [t2, { setModalProps: o2 }] = bt(async () => {
    o2({ confirmLoading: false, width: "800px", cancelText: "关闭", showOkBtn: false });
  }), [a2] = _t({ columns: [{ title: "功能", dataIndex: "label", width: 120 }, { title: "Win快捷键", dataIndex: "win", width: 120 }, { title: "Mac快捷键", dataIndex: "mac", width: 120 }], dataSource: [{ label: "拖拽 / 放大缩小画布", win: "CTRL + 🖱️拖动 / 滚动", mac: "⌘ + 🖱️拖动 / 滚动", macSource: true }, { label: "向 上/右/下/左 移动", win: "CTRL + ↑ / → / ↓ / ←", mac: "⌘ + ↑" }, { label: "锁定/解锁", win: "CTRL + L / CTRL + SHIFT+ L", mac: "⌘ + L / ⌘ + ⇧ + L" }, { label: "隐藏/显示", win: "CTRL + H / CTRL + SHIFT + H", mac: "⌘ + H / ⌘ + ⇧ + H" }, { label: "组合/拆分", win: "CTRL + G / CTRL + SHIFT + G", mac: "⌘ + G / ⌘ + SHIFT + G" }, { label: "后退/前进", win: "CTRL + Z / CTRL + SHIFT + Z", mac: "⌘ + Z / ⌘ + ⇧ + Z" }, { label: "复制/粘贴", win: "CTRL + C / V", mac: "⌘ + C / V" }, { label: "多选", win: "拖动🖱️框选 / CTRL + 🖱️点击", mac: "拖动🖱️框选 / ⌘ + 🖱️点击" }, { label: "保存", win: "CTRL + S", mac: "⌘ + S" }, { label: "预览", win: "CTRL + P", mac: "⌘ + P" }, { label: "全选", win: "CTRL + A", mac: "⌘ + A" }, { label: "删除", win: "Delete", mac: "Delete" }], bordered: true, showIndexColumn: false, pagination: false, canResize: false, size: "small" });
  return (e3, o3) => (s(), h(d(Ct), { onRegister: d(t2), title: "快捷操作" }, { default: M(() => [g(d($t), { onRegister: d(a2) }, null, 8, ["onRegister"])]), _: 1 }, 8, ["onRegister"]));
} }), kh = eo(e({ __name: "CanvasOperator", setup(e2) {
  const { prefixCls: t2 } = xe("canvas-operator"), [o2, { openModal: a2 }] = Mt();
  function l2() {
    a2(true, {});
  }
  return (e3, a3) => (s(), r(y, null, [p("div", { class: c(d(t2)) }, [g(d(G), { title: "快捷方式", placement: "right" }, { default: M(() => [g(d(Be), { icon: "carbon:table-shortcut", onClick: l2 })]), _: 1 })], 2), g(Mh, { onRegister: d(o2) }, null, 8, ["onRegister"])], 64));
} }), [["__scopeId", "data-v-2148ffa6"]]), wh = { lt: function(e2, t2, o2, a2, l2, n2) {
  const { symmetricPoint: i2 } = l2;
  let r2 = Zr(t2, i2), s2 = Yr(t2, r2, -e2.rotate), u2 = Yr(i2, r2, -e2.rotate), c2 = u2.x - s2.x, d2 = u2.y - s2.y;
  if (a2) {
    c2 / d2 > o2 ? (s2.x += Math.abs(c2 - d2 * o2), c2 = d2 * o2) : (s2.y += Math.abs(d2 - c2 / o2), d2 = c2 / o2);
    const t3 = Yr(s2, r2, e2.rotate);
    r2 = Zr(t3, i2), s2 = Yr(t3, r2, -e2.rotate), u2 = Yr(i2, r2, -e2.rotate), c2 = u2.x - s2.x, d2 = u2.y - s2.y;
  }
  c2 > 10 && d2 > 10 && (e2.width = Math.round(c2 / n2), e2.height = Math.round(d2 / n2), e2.x = Math.round(s2.x / n2), e2.y = Math.round(s2.y / n2));
}, t: xh, rt: function(e2, t2, o2, a2, l2, n2) {
  const { symmetricPoint: i2 } = l2;
  let r2 = Zr(t2, i2), s2 = Yr(t2, r2, -e2.rotate), u2 = Yr(i2, r2, -e2.rotate), c2 = s2.x - u2.x, d2 = u2.y - s2.y;
  if (a2) {
    c2 / d2 > o2 ? (s2.x -= Math.abs(c2 - d2 * o2), c2 = d2 * o2) : (s2.y += Math.abs(d2 - c2 / o2), d2 = c2 / o2);
    const t3 = Yr(s2, r2, e2.rotate);
    r2 = Zr(t3, i2), s2 = Yr(t3, r2, -e2.rotate), u2 = Yr(i2, r2, -e2.rotate), c2 = s2.x - u2.x, d2 = u2.y - s2.y;
  }
  c2 > 10 && d2 > 10 && (e2.width = Math.round(c2 / n2), e2.height = Math.round(d2 / n2), e2.x = Math.round(u2.x / n2), e2.y = Math.round(s2.y / n2));
}, r: Sh, rb: function(e2, t2, o2, a2, l2, n2) {
  const { symmetricPoint: i2 } = l2;
  let r2 = Zr(t2, i2), s2 = Yr(i2, r2, -e2.rotate), u2 = Yr(t2, r2, -e2.rotate), c2 = u2.x - s2.x, d2 = u2.y - s2.y;
  if (a2) {
    c2 / d2 > o2 ? (u2.x -= Math.abs(c2 - d2 * o2), c2 = d2 * o2) : (u2.y -= Math.abs(d2 - c2 / o2), d2 = c2 / o2);
    const t3 = Yr(u2, r2, e2.rotate);
    r2 = Zr(t3, i2), s2 = Yr(i2, r2, -e2.rotate), u2 = Yr(t3, r2, -e2.rotate), c2 = u2.x - s2.x, d2 = u2.y - s2.y;
  }
  c2 > 10 && d2 > 10 && (e2.width = Math.round(c2 / n2), e2.height = Math.round(d2 / n2), e2.x = Math.round(s2.x / n2), e2.y = Math.round(s2.y / n2));
}, b: xh, lb: function(e2, t2, o2, a2, l2, n2) {
  const { symmetricPoint: i2 } = l2;
  let r2 = Zr(t2, i2), s2 = Yr(i2, r2, -e2.rotate), u2 = Yr(t2, r2, -e2.rotate), c2 = s2.x - u2.x, d2 = u2.y - s2.y;
  if (a2) {
    c2 / d2 > o2 ? (u2.x += Math.abs(c2 - d2 * o2), c2 = d2 * o2) : (u2.y -= Math.abs(d2 - c2 / o2), d2 = c2 / o2);
    const t3 = Yr(u2, r2, e2.rotate);
    r2 = Zr(t3, i2), s2 = Yr(i2, r2, -e2.rotate), u2 = Yr(t3, r2, -e2.rotate), c2 = s2.x - u2.x, d2 = u2.y - s2.y;
  }
  c2 > 10 && d2 > 10 && (e2.width = Math.round(c2 / n2), e2.height = Math.round(d2 / n2), e2.x = Math.round(u2.x / n2), e2.y = Math.round(s2.y / n2));
}, l: Sh };
function xh(e2, t2, o2, a2, l2, n2) {
  const { symmetricPoint: i2, curPoint: r2 } = l2, s2 = Yr(t2, r2, -e2.rotate), u2 = Yr({ x: r2.x, y: s2.y }, r2, e2.rotate), c2 = Math.hypot(u2.x - i2.x, u2.y - i2.y), d2 = u2.x - (u2.x - i2.x) / 2, p2 = u2.y + (i2.y - u2.y) / 2;
  let f2 = e2.width;
  a2 && (f2 = c2 * o2 / n2), c2 > 10 && (e2.width = Math.round(f2), e2.height = Math.round(c2 / n2), e2.y = Math.round((p2 - c2 / 2) / n2), e2.x = Math.round(d2 / n2 - e2.width / 2));
}
function Sh(e2, t2, o2, a2, l2, n2) {
  const { symmetricPoint: i2, curPoint: r2 } = l2, s2 = Yr(t2, r2, -e2.rotate), u2 = Yr({ x: s2.x, y: r2.y }, r2, e2.rotate), c2 = Math.hypot(u2.x - i2.x, u2.y - i2.y), d2 = u2.x - (u2.x - i2.x) / 2, p2 = u2.y + (i2.y - u2.y) / 2;
  let f2 = e2.height;
  a2 && (f2 = c2 / (o2 * n2)), c2 > 10 && (e2.height = Math.round(f2), e2.width = Math.round(c2 / n2), e2.y = Math.round(p2 / n2 - e2.height / 2), e2.x = Math.round((d2 - c2 / 2) / n2));
}
const _h = ["onMousedown"], $h = { key: 2, class: "cover-layer-out" }, Lh = { key: 0, class: "cover-hover" }, Dh = e({ name: "ChartContain", __name: "index", props: { comOption: { require: true, type: Object, default: () => ({ chart: {}, chartContain: {} }) }, index: { require: true, type: Number, default: 0 } }, setup(e2) {
  t((e3) => ({ "15d86f1b": g2.value }));
  const l2 = e2, { token: n2 } = P.useToken(), g2 = a(() => n2.value.colorInfoBg), C2 = a(() => n2.value.colorBorder), b2 = o("chartContainRef"), M2 = o("chartItemRef"), { prefixCls: w2 } = xe("chart-contain"), x2 = { points: ["lt", "t", "rt", "r", "rb", "b", "lb", "l"], initAngle: { lt: 0, t: 45, rt: 90, r: 135, rb: 180, b: 225, lb: 270, l: 315 }, pointCursor: [{ start: 338, end: 23, cursor: "nw" }, { start: 23, end: 68, cursor: "n" }, { start: 68, end: 113, cursor: "ne" }, { start: 113, end: 158, cursor: "e" }, { start: 158, end: 203, cursor: "se" }, { start: 203, end: 248, cursor: "s" }, { start: 248, end: 293, cursor: "sw" }, { start: 293, end: 338, cursor: "w" }] }, S2 = m(false), _2 = m(false), $2 = m({}), L2 = qr(), D2 = yp(), I2 = a(() => [w2, { active: q2.value || A2.value }]), T2 = a(() => {
    var _a2, _b, _c2, _d2;
    return !S2.value && !_2.value && ((_a2 = l2.comOption.chart) == null ? void 0 : _a2.id) === L2.getCurHoverComponentId || S2.value && ((_b = L2.getCurComponent) == null ? void 0 : _b.chart.id) === ((_d2 = (_c2 = l2.comOption) == null ? void 0 : _c2.chart) == null ? void 0 : _d2.id);
  }), N2 = a(() => lp({ ...l2.comOption.chartContain.dropInfo })), B2 = a(() => {
    const e3 = ap(l2.comOption);
    return e3.borderColor || (e3.borderColor = C2.value), Qe(e3, ["transform"]);
  }), q2 = a(() => {
    var _a2, _b;
    return ((_a2 = L2.getCurComponent) == null ? void 0 : _a2.chart.id) === ((_b = l2.comOption) == null ? void 0 : _b.chart.id);
  }), A2 = a(() => {
    var _a2, _b;
    return L2.getSelectArea.components.map((e3) => e3 == null ? void 0 : e3.chart.id).includes((_b = (_a2 = l2.comOption) == null ? void 0 : _a2.chart) == null ? void 0 : _b.id);
  });
  function j2(e3) {
    const { y: t2, x: o2, width: a2, height: l3, rotate: n3 } = e3;
    L2.getCurComponent && (t2 && (L2.getCurComponent.chartContain.dropInfo.y = t2), o2 && (L2.getCurComponent.chartContain.dropInfo.x = o2), a2 && (L2.getCurComponent.chartContain.dropInfo.width = a2), l3 && (L2.getCurComponent.chartContain.dropInfo.height = l3), n3 && (L2.getCurComponent.chartContain.dropInfo.rotate = n3));
  }
  async function E2(e3) {
    if (D2.setShowMenu(false), e3.ctrlKey || e3.metaKey) return void wp(l2.comOption);
    const t2 = L2.getSelectArea.components.some((e4) => e4.chart.id === l2.comOption.chart.id);
    if (t2 || L2.cleanSelectArea(), L2.setCurComponent(l2.comOption, l2.index), 0 !== e3.button || l2.comOption.chartContain.lock || !l2.comOption.chartContain.show) return;
    if (t2 && L2.getSelectArea.components.length > 100) return;
    const o2 = [];
    if (t2) L2.getSelectArea.components.forEach((e4) => {
      const t3 = { ...e4.chartContain.dropInfo }, a3 = Number(t3.y), l3 = Number(t3.x);
      e4.chartContain.lock || o2.push({ com: e4, pos: t3, startTop: a3, startLeft: l3 });
    });
    else {
      const e4 = { ...l2.comOption.chartContain.dropInfo }, t3 = Number(e4.y), a3 = Number(e4.x);
      o2.push({ com: l2.comOption, pos: e4, startTop: t3, startLeft: a3 });
    }
    let a2 = false;
    const n3 = setInterval(() => {
      a2 = true;
    }, 10), i2 = He((l3) => {
      l3.preventDefault(), a2 && (a2 = false, S2.value = true, o2.forEach((t3) => {
        t3.pos.y = Math.round((l3.clientY - e3.clientY) / L2.getScale + t3.startTop), t3.pos.x = Math.round((l3.clientX - e3.clientX) / L2.getScale + t3.startLeft), function(e4) {
          const t4 = np(e4);
          t4.y <= -1 && (e4.y = -1);
          t4.x <= -1 && (e4.x = -1);
          e4.y + e4.height > L2.getCanvasConfig.height && (e4.y = L2.getCanvasConfig.height - e4.height);
          e4.x + e4.width > L2.getCanvasConfig.width && (e4.x = L2.getCanvasConfig.width - e4.width);
        }(t3.pos), t3.com.chartContain.dropInfo.y = t3.pos.y, t3.com.chartContain.dropInfo.x = t3.pos.x;
      }), Kd.emit(Hr.MOVE, t2));
    }, 5), r2 = () => {
      d(S2) ? L2.setUndoRedoData("组件移动") : L2.cleanSelectArea(), S2.value = false, clearInterval(n3), t2 && kp(L2.getSelectArea.components), Kd.emit(Hr.UN_MOVE), document.removeEventListener("mousemove", i2), document.removeEventListener("mouseup", r2), $2.value = F2(l2.comOption);
    };
    document.addEventListener("mousemove", i2), document.addEventListener("mouseup", r2);
  }
  function F2(e3) {
    if (!e3) return;
    const { pointCursor: t2, initAngle: o2, points: a2 } = x2, l3 = Jr(e3.chartContain.dropInfo.rotate), n3 = {};
    let i2 = -1;
    return a2.forEach((e4) => {
      const a3 = Jr(o2[e4] + l3), r2 = t2.length;
      for (; ; ) {
        i2 = (i2 + 1) % r2;
        const o3 = t2[i2];
        if (a3 < 23 || a3 >= 338) return void (n3[e4] = "nw-resize");
        if (o3.start <= a3 && a3 < o3.end) return void (n3[e4] = `${o3.cursor}-resize`);
      }
    }), n3;
  }
  function H2() {
    d(S2) || L2.setCurHoverComponent(l2.comOption.chart.id);
  }
  function Q2() {
    d(S2) || L2.setCurHoverComponent("");
  }
  function G2(e3) {
    const { width: t2, height: o2 } = l2.comOption.chartContain.dropInfo, a2 = /t/.test(e3), n3 = /b/.test(e3), i2 = /l/.test(e3), r2 = /r/.test(e3);
    let s2 = 0, u2 = 0;
    return 2 === e3.length ? (s2 = i2 ? 0 : t2, u2 = a2 ? 0 : o2) : ((a2 || n3) && (s2 = t2 / 2, u2 = a2 ? 0 : o2), (i2 || r2) && (s2 = i2 ? 0 : t2, u2 = Math.floor(o2 / 2))), { marginLeft: "-6px", marginTop: "-6px", left: `${s2}px`, top: `${u2}px`, cursor: `${$2.value[e3]}` };
  }
  function U2(e3, t2) {
    if (!L2.getScreenCanvas) return;
    L2.setCurComponent(l2.comOption, l2.index);
    const o2 = { ...l2.comOption.chartContain.dropInfo }, a2 = { x: (o2.x + o2.width / 2) * L2.getScale, y: (o2.y + o2.height / 2) * L2.getScale }, n3 = L2.getScreenCanvas.getBoundingClientRect(), i2 = t2.target.getBoundingClientRect(), r2 = { x: i2.left - n3.left + t2.target.offsetWidth * L2.getScale / 2, y: i2.top - n3.top + t2.target.offsetHeight * L2.getScale / 2 }, s2 = { x: a2.x - (r2.x - a2.x), y: a2.y - (r2.y - a2.y) };
    let u2 = true;
    const c2 = function() {
      if (l2.comOption.chart.type !== as.MfCombine) return false;
      for (const e4 of l2.comOption.chart.options.components) if (![0, 90, 180, 360].includes(Jr(e4.chartContain.dropInfo.rotate))) return true;
      return false;
    }(), p2 = He((t3) => {
      if (u2) return void (u2 = false);
      S2.value = true;
      const l3 = { x: t3.clientX - n3.left, y: t3.clientY - n3.top }, i3 = o2.width / o2.height;
      !function(e4, t4, o3, a3, l4, n4, i4) {
        wh[e4](t4, o3, a3, l4, n4, i4);
      }(e3, o2, l3, i3, c2, { center: a2, curPoint: r2, symmetricPoint: s2 }, L2.getScale), j2(o2), Kd.emit(Hr.MOVE, false);
    }, 2), f2 = () => {
      d(S2) && L2.setUndoRedoData("组件大小调整"), S2.value = false, Kd.emit(Hr.UN_MOVE), document.removeEventListener("mousemove", p2), document.removeEventListener("mouseup", f2);
    };
    document.addEventListener("mousemove", p2), document.addEventListener("mouseup", f2);
  }
  function V2(e3) {
    if (!b2.value) return;
    L2.setCurComponent(l2.comOption, l2.index);
    const t2 = b2.value.getBoundingClientRect(), o2 = t2.left + t2.width / 2, a2 = t2.top + t2.height / 2, n3 = Math.atan2(e3.clientY - a2, e3.clientX - o2) / (Math.PI / 180), i2 = { ...l2.comOption.chartContain.dropInfo };
    let r2 = i2.rotate;
    r2 || (r2 = 0);
    const s2 = He((e4) => {
      const t3 = Math.atan2(e4.clientY - a2, e4.clientX - o2) / (Math.PI / 180);
      i2.rotate = Math.round(r2 + t3 - n3), j2(i2);
    }, 10), u2 = () => {
      L2.setUndoRedoData("组件旋转"), document.removeEventListener("mousemove", s2), document.removeEventListener("mouseup", u2), $2.value = F2(l2.comOption);
    };
    document.addEventListener("mousemove", s2), document.addEventListener("mouseup", u2);
  }
  return i(() => {
    l2.comOption && ($2.value = F2(l2.comOption)), Kd.on(Hr.MOVE, () => {
      l2.comOption && L2.getCurComponent && l2.comOption.chart.id !== L2.getCurComponent.chart.id && !d(_2) && (_2.value = true);
    }), Kd.on(Hr.UN_MOVE, () => {
      _2.value = false;
    }), Kd.on(Hr.PLAY_ANIMATION, () => {
      var _a2, _b;
      l2.comOption.chart.id === ((_a2 = L2.getCurComponent) == null ? void 0 : _a2.chart.id) && void 0 === ((_b = l2.comOption.chart.options) == null ? void 0 : _b.selectIndex) && Vd(M2.value, l2.comOption.chart.animations).then(() => {
        Kd.emit(Hr.PLAY_ANIMATION_COMPLETE);
      });
    }), Kd.on(Hr.EVENT_ANIMATION, (e3) => {
      M2.value && Wd(e3, l2.comOption, M2.value);
    }), Kd.on(Hr.STOP_ANIMATION, () => {
      var _a2;
      l2.comOption.chart.id === ((_a2 = L2.getCurComponent) == null ? void 0 : _a2.chart.id) && ((e3, t2 = []) => {
        if (!e3) return;
        const o2 = t2.map((e4) => `animate__${e4.value}`), a2 = t2.map((e4) => `animate__repeat-${e4.repeat}`);
        e3.classList.remove(...o2, ...a2, "animate__animated", "animate__infinite"), e3.style.removeProperty("--animate-duration");
      })(M2.value, l2.comOption.chart.animations);
    });
  }), (t2, o2) => {
    var _a2, _b, _c2, _d2, _e2, _f2, _g2;
    return s(), r("div", { ref_key: "chartContainRef", ref: b2, class: c(I2.value), style: u(N2.value), onMousedown: k(E2, ["stop"]), onMouseenter: k(H2, ["prevent", "stop"]), onMouseleave: k(Q2, ["prevent"]) }, [(s(true), r(y, null, v(q2.value && !e2.comOption.chartContain.lock && e2.comOption.chartContain.show ? x2.points : [], (e3) => (s(), r("div", { key: e3, class: "contain-point", style: u(G2(e3)), onMousedown: k((t3) => U2(e3, t3), ["stop", "prevent"]) }, null, 44, _h))), 128)), O(p("div", { ref_key: "chartItemRef", ref: M2, class: "chart-item", style: u(B2.value) }, [R(t2.$slots, "default", {}, void 0, true)], 4), [[z, void 0 === ((_b = (_a2 = e2.comOption.chart) == null ? void 0 : _a2.showHide) == null ? void 0 : _b.show) && ((_c2 = e2.comOption.chartContain) == null ? void 0 : _c2.show) || void 0 !== ((_e2 = (_d2 = e2.comOption.chart) == null ? void 0 : _d2.showHide) == null ? void 0 : _e2.show) && ((_g2 = (_f2 = e2.comOption.chart) == null ? void 0 : _f2.showHide) == null ? void 0 : _g2.show)]]), q2.value && !e2.comOption.chartContain.lock && e2.comOption.chartContain.show ? (s(), h(d(Be), { key: 0, class: "icon-rotate", icon: "ant-design:sync-outlined", size: "20", onMousedown: k(V2, ["prevent", "stop"]) })) : f("", true), e2.comOption.chartContain.lock && e2.comOption.chartContain.show ? (s(), h(d(Be), { key: 1, class: "icon-lock", icon: "ant-design:lock-outlined" })) : f("", true), q2.value || A2.value || T2.value ? (s(), r("div", $h, [T2.value ? (s(), r("div", Lh)) : f("", true)])) : f("", true)], 38);
  };
} }), Ih = eo(Dh, [["__scopeId", "data-v-2f19c653"]]), Th = "横上", Nh = "横中", Bh = "横下", Rh = "纵左", qh = "纵中", Ah = "纵右", Oh = { class: "pos" }, jh = e({ name: "ChartNearLine", __name: "index", setup(e2) {
  const t2 = n({ adsorb: 10, near: 2, lineStatus: { [Th]: { show: false, pos: 0, node: null }, [Nh]: { show: false, pos: 0, node: null }, [Bh]: { show: false, pos: 0, node: null }, [Rh]: { show: false, pos: 0, node: null }, [qh]: { show: false, pos: 0, node: null }, [Ah]: { show: false, pos: 0, node: null } } }), o2 = qr(), { prefixCls: a2 } = xe("near-line");
  function l2(e3, { x: o3, y: a3, bottom: l3, right: n2, halfWidth: i2, halfHeight: r2 }) {
    const s2 = e3.width / 2, c2 = e3.height / 2, d2 = t2.lineStatus;
    return { y: [{ isNear: u2(e3.y, a3), isAdsorb: f2(e3.y, a3), lineNode: d2[Th].node, line: Th, dragShift: a3, lineShift: a3 }, { isNear: u2(e3.bottom, a3), isAdsorb: f2(e3.bottom, a3), lineNode: d2[Th].node, line: Th, dragShift: a3 - e3.height, lineShift: a3 }, { isNear: u2(e3.y + c2, a3 + r2), isAdsorb: f2(e3.y + c2, a3 + r2), lineNode: d2[Nh].node, line: Nh, dragShift: a3 + r2 - c2, lineShift: a3 + r2 }, { isNear: u2(e3.y, l3), isAdsorb: f2(e3.y, l3), lineNode: d2[Bh].node, line: Bh, dragShift: l3, lineShift: l3 }, { isNear: u2(e3.bottom, l3), isAdsorb: f2(e3.bottom, l3), lineNode: d2[Bh].node, line: Bh, dragShift: l3 - e3.height, lineShift: l3 }], x: [{ isNear: u2(e3.x, o3), isAdsorb: f2(e3.x, o3), lineNode: d2[Rh].node, line: Rh, dragShift: o3, lineShift: o3 }, { isNear: u2(e3.right, o3), isAdsorb: f2(e3.right, o3), lineNode: d2[Rh].node, line: Rh, dragShift: o3 - e3.width, lineShift: o3 }, { isNear: u2(e3.x + s2, o3 + i2), isAdsorb: f2(e3.x + s2, o3 + i2), lineNode: d2[qh].node, line: qh, dragShift: o3 + i2 - s2, lineShift: o3 + i2 }, { isNear: u2(e3.x, n2), isAdsorb: f2(e3.x, n2), lineNode: d2[Ah].node, line: Ah, dragShift: n2, lineShift: n2 }, { isNear: u2(e3.right, n2), isAdsorb: f2(e3.right, n2), lineNode: d2[Ah].node, line: Ah, dragShift: n2 - e3.width, lineShift: n2 }] };
  }
  function u2(e3, o3) {
    return h2(e3, o3, t2.near);
  }
  function f2(e3, o3) {
    return h2(e3, o3, t2.adsorb);
  }
  function h2(e3, t3, o3) {
    return Math.abs(e3 - t3) <= o3;
  }
  async function g2() {
    Object.keys(t2.lineStatus).forEach((e3) => {
      t2.lineStatus[e3].show = false, t2.lineStatus[e3].x = 0, t2.lineStatus[e3].y = 0;
    });
  }
  return i(() => {
    Kd.on(Hr.MOVE, (e3) => {
      !async function(e4) {
        if (!o2.getCurComponent || e4 && o2.getSelectArea.components.length > 20) return;
        const a3 = [];
        e4 ? o2.getSelectArea.components.forEach((e5) => {
          a3.push({ com: e5, style: np(e5.chartContain.dropInfo) });
        }) : a3.push({ com: o2.getCurComponent, style: np(o2.getCurComponent.chartContain.dropInfo) });
        g2().then(), a3.forEach((a4) => {
          !function(e5, a5) {
            const n2 = (a6) => {
              Object.keys(a6).forEach((l3) => {
                a6[l3].forEach((a7) => {
                  C(() => {
                    if (a7.isNear && a7.lineNode) {
                      const e6 = Math.round(a7.lineShift);
                      a7.lineNode.style.transform = "x" === l3 ? `translate(${e6}px, 0px)` : `translate(0px, ${e6}px)`, t2.lineStatus[a7.line].pos = e6, t2.lineStatus[a7.line].show = true;
                    }
                    a7.isAdsorb && (e5.com.chartContain.dropInfo[l3] = 0 === o2.getCurComponent.chartContain.dropInfo.rotate ? a7.dragShift : function(e6, t3, a8) {
                      const { width: l4, height: n3 } = o2.getCurComponent.chartContain.dropInfo;
                      if ("x" === e6) return Math.round(t3.dragShift - (l4 - a8.width) / 2);
                      return Math.round(t3.dragShift - (n3 - a8.height) / 2);
                    }(l3, a7, e5.style));
                  });
                });
              });
            };
            n2(l2(e5.style, { x: o2.getCanvasConfig.width / 2, y: o2.getCanvasConfig.height / 2, bottom: 0, right: 0, halfWidth: 0, halfHeight: 0 })), n2(l2(e5.style, { x: 0, y: 0, bottom: o2.getCanvasConfig.height, right: o2.getCanvasConfig.width, halfWidth: 0, halfHeight: 0 })), o2.getGuideLine.lineListX.forEach((t3) => {
              n2(l2(e5.style, { x: 0, y: t3.value, bottom: 0, right: 0, halfWidth: 0, halfHeight: 0 }));
            }), o2.getGuideLine.lineListY.forEach((t3) => {
              n2(l2(e5.style, { x: t3.value, y: 0, bottom: 0, right: 0, halfWidth: 0, halfHeight: 0 }));
            }), o2.getComponentList.forEach((t3) => {
              if (t3 === o2.getCurComponent || a5 && o2.getSelectArea.components.some((e6) => e6.chart.id === t3.chart.id)) return;
              const i2 = np(t3.chartContain.dropInfo), { x: r2, y: s2, bottom: u3, right: c2 } = i2, d2 = i2.width / 2, p2 = i2.height / 2;
              n2(l2(e5.style, { x: r2, y: s2, bottom: u3, right: c2, halfWidth: d2, halfHeight: p2 }));
            });
          }(a4, e4);
        });
      }(e3);
    }), Kd.on(Hr.UN_MOVE, () => {
      g2();
    });
  }), (e3, o3) => (s(), r("div", { class: c(d(a2)) }, [(s(true), r(y, null, v(Object.keys(t2.lineStatus), (e4) => O((s(), r("div", { key: e4, ref_for: true, ref: (o4) => t2.lineStatus[e4].node = o4, class: c(["line", e4.includes("横") ? "xLine" : "yLine"]) }, [p("div", Oh, S(t2.lineStatus[e4].pos), 1)], 2)), [[z, t2.lineStatus[e4].show || false]])), 128))], 2));
} }), zh = eo(jh, [["__scopeId", "data-v-88d9d34f"]]), Eh = e({ name: "ChartMultiSelect", __name: "index", props: { selectArea: { type: Object, default: () => {
} } }, setup(e2) {
  const t2 = qr(), { prefixCls: o2 } = xe("select-area");
  return (a2, l2) => O((s(), r("div", { class: c(d(o2)), style: u({ transform: `translate(${e2.selectArea.x}px,${e2.selectArea.y}px)`, width: `${e2.selectArea.width}px`, height: `${e2.selectArea.height}px` }) }, l2[0] || (l2[0] = [p("div", { class: "select-area-bg" }, null, -1)]), 6)), [[z, d(t2).selectArea.show]]);
} }), Fh = eo(Eh, [["__scopeId", "data-v-e9844525"]]), Ph = e({ name: "ScreenCanvas", __name: "index", setup(e2) {
  const { prefixCls: t2 } = xe("screen-canvas"), l2 = qr(), p2 = yp(), m2 = o("screenCanvasRef"), { getAntdLocale: C2 } = It(), { antTheme: b2 } = Le(a(() => l2.getTheme)), w2 = a(() => [...l2.getComponentList].reverse()), x2 = n({ canvasX: 0, canvasY: 0, area: { show: false, x: 0, y: 0, width: 0, height: 0 }, comMoving: false, isUp: false }), S2 = a(() => ({ ...Xd(l2.getCanvasConfig), transform: `scale(${l2.getScale})` })), _2 = (e3) => {
    var _a2, _b;
    if (((_b = (_a2 = e3.chart) == null ? void 0 : _a2.events) == null ? void 0 : _b.emits) && e3.chart.events.emits.length > 0) {
      for (const t3 of e3.chart.events.emits) if (t3 === is.CHART_CLICK || t3 === is.CHART_DBLCLICK) return "allow-pointer";
    }
  };
  i(() => {
    l2.setScreenCanvas(m2.value ?? null), Kd.on(Hr.MOVE, () => {
      x2.comMoving || (x2.comMoving = true);
    }), Kd.on(Hr.UN_MOVE, () => {
      x2.comMoving = false;
    }), Kd.on(Hr.CREATE_CHART, (e3) => {
      L2(e3, 0, 0);
    });
  });
  const $2 = (e3) => {
    var _a2;
    p2.setShowMenu(false);
    const t3 = (_a2 = e3.dataTransfer) == null ? void 0 : _a2.getData(Or);
    if (!l2.getScreenCanvas || !t3) return;
    const o2 = JSON.parse(t3), a2 = l2.getScreenCanvas.getBoundingClientRect();
    let n2 = Math.round((e3.clientX - a2.left) / l2.getScale), i2 = Math.round((e3.clientY - a2.top) / l2.getScale);
    n2 + o2.chartContain.dropInfo.width > l2.getCanvasConfig.width && (n2 = l2.getCanvasConfig.width - o2.chartContain.dropInfo.width), i2 + o2.chartContain.dropInfo.height > l2.getCanvasConfig.height && (i2 = l2.getCanvasConfig.height - o2.chartContain.dropInfo.height), L2(o2, n2, i2);
  };
  function L2(e3, t3, o2) {
    e3.chartContain.dropInfo.x = t3, e3.chartContain.dropInfo.y = o2, l2.addComponent(e3, 0), l2.setCurComponent(e3, 0), I2(), l2.setUndoRedoData(`添加${e3.chart.name}`);
  }
  function D2(e3) {
    if (2 === e3.button) return void e3.stopPropagation();
    if (e3.ctrlKey || e3.metaKey || I2(), p2.setShowMenu(false), !l2.getScreenCanvas || e3.ctrlKey || e3.metaKey) return;
    const t3 = l2.getScreenCanvas.getBoundingClientRect();
    x2.canvasX = t3.x, x2.canvasY = t3.y, x2.area.x = (e3.clientX - x2.canvasX) / l2.getScale, x2.area.y = (e3.clientY - x2.canvasY) / l2.getScale, x2.area.width = 0, x2.area.height = 0, x2.area.show = true, l2.showSelectArea();
    const o2 = He((t4) => {
      x2.area.width = Math.abs((t4.clientX - e3.clientX) / l2.getScale), x2.area.height = Math.abs((t4.clientY - e3.clientY) / l2.getScale), t4.clientX < e3.clientX && (x2.area.x = (t4.clientX - x2.canvasX) / l2.getScale), t4.clientY < e3.clientY && (x2.area.y = (t4.clientY - x2.canvasY) / l2.getScale);
    }, 2), a2 = () => {
      document.removeEventListener("mousemove", o2), document.removeEventListener("mouseup", a2);
      kp(Mp(qe(x2.area)));
    };
    document.addEventListener("mousemove", o2), document.addEventListener("mouseup", a2);
  }
  function I2() {
    x2.area.show = false, x2.area.width = 0, x2.area.height = 0, l2.cleanSelectArea();
  }
  return (e3, o2) => (s(), r("div", { ref_key: "screenCanvasRef", ref: m2, class: c(d(t2)), onDrop: $2, onDragstart: o2[0] || (o2[0] = k(() => {
  }, ["prevent", "stop"])), onMousedown: D2, style: u(S2.value) }, [g(d(me), { locale: d(C2), theme: d(b2) }, { default: M(() => [d(l2).getCanvasConfig.watermark ? (s(), h(d(ye), { key: 0, content: d(l2).getCanvasConfig.watermark, style: u({ position: "absolute", width: `${d(l2).getCanvasConfig.width}px`, height: `${d(l2).getCanvasConfig.height}px` }) }, null, 8, ["content", "style"])) : f("", true), (s(true), r(y, null, v(w2.value, (e4, t3) => {
    var _a2;
    return s(), h(Ih, { key: ((_a2 = e4.chart) == null ? void 0 : _a2.id) + d(l2).getKey, index: w2.value.length - t3 - 1, "com-option": e4, class: c(_2(e4)) }, { default: M(() => {
      var _a3;
      return [(s(), h(j(e4.chart.type && d(Zd)[e4.chart.type].component), { class: c(["component", { move: x2.comMoving && e4.chart.id !== ((_a3 = d(l2).getCurComponent) == null ? void 0 : _a3.chart.id) }]), id: `com${e4.chart.id}`, chart: e4.chart, "chart-contain": e4.chartContain }, null, 8, ["class", "id", "chart", "chart-contain"]))];
    }), _: 2 }, 1032, ["index", "com-option", "class"]);
  }), 128))]), _: 1 }, 8, ["locale", "theme"]), g(Fh, { "select-area": x2.area }, null, 8, ["select-area"]), g(zh)], 38));
} }), Hh = eo(Ph, [["__scopeId", "data-v-9395352a"]]), Qh = 0.2, Gh = e({ name: "FrameCanvas", __name: "index", props: { width: { type: Number, default: 5e3 }, height: { type: Number, default: 3e3 } }, setup(e2) {
  const t2 = m(true), { prefixCls: a2 } = xe("frame-canvas"), n2 = m(0), u2 = m(0), f2 = m(1e3), h2 = m(1), y2 = qr(), v2 = o("frameCanvasRef"), C2 = o("dropContentRef");
  let b2 = [0, 0], w2 = [0, 0];
  l([() => y2.getCanvasConfig.width, () => y2.getCanvasConfig.height], () => {
    x2();
  });
  const x2 = He(() => {
    t2.value && (!function() {
      if (d(t2) && v2.value) {
        const e3 = v2.value.getBoundingClientRect(), t3 = e3.width - 50, o2 = e3.height - 40, a3 = Number.parseFloat((y2.getCanvasConfig.width / y2.getCanvasConfig.height).toFixed(5)), l2 = Number.parseFloat((t3 / o2).toFixed(5));
        h2.value = l2 > a3 ? Number.parseFloat((o2 * a3 / y2.getCanvasConfig.width).toFixed(2)) : Number.parseFloat((t3 / a3 / y2.getCanvasConfig.height).toFixed(2)), d(h2) > 5 && (h2.value = 5), d(h2) < Qh && (h2.value = Qh);
      }
      y2.setScale(d(h2));
    }(), I2());
  }, 30);
  function S2() {
    C2.value && (n2.value = -C2.value.scrollLeft, u2.value = -C2.value.scrollTop);
  }
  i(() => {
    var _a2;
    const e3 = new ResizeObserver(x2);
    e3.observe(C2.value), (_a2 = C2.value) == null ? void 0 : _a2.addEventListener("wheel", D2, { passive: false }), _(() => {
      var _a3;
      (_a3 = C2.value) == null ? void 0 : _a3.removeEventListener("wheel", D2), e3 == null ? void 0 : e3.disconnect();
    });
  });
  const $2 = He((e3) => {
    const t3 = (100 * h2.value - Math.round(100 * h2.value) % 5) / 100;
    h2.value = "add" === e3 ? Math.min(5, Number.parseFloat((t3 + 0.05).toFixed(2))) : Math.max(Qh, Number.parseFloat((t3 - 0.05).toFixed(2))), I2(), y2.setScale(h2.value);
  }, 100), L2 = He((e3) => {
    e3 && (h2.value = e3 / 100, I2(), y2.setScale(h2.value));
  }, 100), D2 = (e3) => {
    (e3.ctrlKey || e3.metaKey) && (e3.preventDefault(), e3.stopPropagation(), e3.deltaY <= 0 ? $2("add") : e3.deltaY > 0 && $2("reduce"));
  };
  function I2() {
    if (null === C2.value) return;
    if (null === v2.value) return;
    let { width: e3, height: t3 } = v2.value.getBoundingClientRect();
    0 === e3 && 0 === t3 && (e3 = 800, t3 = 450);
    const o2 = f2.value * h2.value - Math.round(e3 - y2.getCanvasConfig.width * h2.value) / 2 + 22, a3 = f2.value * h2.value - Math.round(t3 - y2.getCanvasConfig.height * h2.value) / 2 + 18;
    C2.value.scrollTop = Math.max(a3, 0), C2.value.scrollLeft = Math.max(o2, 0);
  }
  function T2(e3) {
    if (null === C2.value) return;
    const t3 = e3.pageX, o2 = e3.pageY, a3 = He((e4) => {
      if (!e4.ctrlKey && !e4.metaKey || !C2.value) return;
      const a4 = e4.pageX - t3, l3 = e4.pageY - o2, [n3, i2] = b2, [r2, s2] = w2;
      b2 = [i2, a4], w2 = [s2, l3], C2.value.scrollLeft -= i2 > n3 ? Math.abs(i2 - n3) : -Math.abs(i2 - n3), C2.value.scrollTop -= s2 > r2 ? Math.abs(s2 - r2) : -Math.abs(s2 - r2);
    }, 10), l2 = () => {
      globalThis.removeEventListener("mousemove", a3), globalThis.removeEventListener("mouseup", l2), b2 = [0, 0], w2 = [0, 0];
    };
    globalThis.addEventListener("mousemove", a3), globalThis.addEventListener("mouseup", l2);
  }
  return (o2, l2) => (s(), r("div", { class: c(d(a2)), ref_key: "frameCanvasRef", ref: v2 }, [g(gh, { "ruler-x-left": n2.value, "ruler-y-top": u2.value, drift: f2.value, "ruler-x": e2.width, "ruler-y": e2.height }, null, 8, ["ruler-x-left", "ruler-y-top", "drift", "ruler-x", "ruler-y"]), p("div", { ref_key: "dropContentRef", ref: C2, class: "drop-content", onScroll: S2 }, [g(yh, { width: e2.width, height: e2.height, drift: f2.value }, { default: M(() => [g(Hh, { draggable: "true", onDragstart: k(T2, ["prevent", "stop"]) })]), _: 1 }, 8, ["width", "height", "drift"])], 544), g(kh), g(bh, { scale: h2.value, "min-scale": 20, "max-scale": 500, onAddScale: l2[0] || (l2[0] = (e3) => d($2)("add")), onReduceScale: l2[1] || (l2[1] = (e3) => d($2)("reduce")), onChangeScale: d(L2), onAutoScale: l2[2] || (l2[2] = (e3) => t2.value = e3) }, null, 8, ["scale", "min-scale", "max-scale", "onChangeScale"])], 2));
} }), Uh = eo(Gh, [["__scopeId", "data-v-de9ae999"]]), Vh = { key: 0, class: "header" }, Wh = { class: "title" }, Yh = { class: "content" }, Zh = eo(e({ name: "FrameBox", __name: "index", props: { showHeader: { type: Boolean, default: true }, icon: { type: String, default: "" }, iconSize: { type: Number, default: 14 }, title: { type: String, default: "" }, radioData: { type: Array, default: () => [] }, span: { type: Number, default: 8 }, chart: { type: Object } }, emits: ["radioChange", "titleClick"], setup(e2, { emit: t2 }) {
  const o2 = e2, a2 = t2, { prefixCls: l2 } = xe("frame-box"), n2 = m();
  i(() => {
    var _a2;
    ((_a2 = o2.radioData) == null ? void 0 : _a2.length) > 0 && (n2.value = o2.radioData[0].value);
  });
  const u2 = () => {
    const e3 = d(n2);
    a2("radioChange", e3);
  }, C2 = () => {
    a2("titleClick");
  };
  return (t3, a3) => (s(), r("div", { class: c(d(l2)) }, [e2.showHeader ? (s(), r("div", Vh, [p("div", { class: "icon-title", onClick: C2 }, [e2.icon ? (s(), h(d(Be), { key: 0, class: "title", icon: e2.icon, size: e2.iconSize }, null, 8, ["icon", "size"])) : f("", true), p("div", Wh, S(e2.title), 1)]), g(d(Z), { class: "radio-group", size: "small", value: n2.value, "onUpdate:value": a3[0] || (a3[0] = (e3) => n2.value = e3), onChange: u2 }, { default: M(() => [(s(true), r(y, null, v(o2.radioData, (e3) => (s(), h(d(G), { key: e3.value, title: e3.tooltip }, { default: M(() => [g(d(Y), { class: "radio-button", value: e3.value }, { default: M(() => [g(d(Be), { icon: e3.icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 }, 8, ["value"])])) : f("", true), p("div", Yh, [(s(), h(j(e2.chart))), R(t3.$slots, "default", {}, void 0, true)])], 2));
} }), [["__scopeId", "data-v-8929fb33"]]), Kh = { class: "item-content" }, Xh = ["src"], Jh = { class: "title", style: { flex: "1" } }, eg = { class: "iconContain" }, tg = e({ __name: "LayerItem", props: { parentItem: { type: Object }, item: { type: Object, required: true }, showEye: { type: Boolean, default: true }, showLock: { type: Boolean, default: true }, index: { type: Number }, expand: { type: Boolean, default: false }, externalSelect: { type: Boolean, default: false }, isSelect: { type: Boolean, default: false } }, emits: ["expand", "select", "enter", "leave"], setup(e2, { emit: o2 }) {
  t((e3) => ({ "56d1bd00": C2.value }));
  const l2 = e2, n2 = o2, { prefixCls: i2 } = xe("layer-item"), u2 = qr(), g2 = Ar(), y2 = a(() => u2.getChartImg(l2.item.chart.type)), { token: v2 } = P.useToken(), C2 = a(() => v2.value.colorInfoBg), b2 = Se().getThemeColor, M2 = a(() => {
    var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k;
    return [i2, { select: l2.externalSelect && l2.isSelect || !l2.externalSelect && (((_a2 = u2.getCurComponent) == null ? void 0 : _a2.chart.id) === ((_b = l2.item) == null ? void 0 : _b.chart.id) || u2.getSelectArea.components.map((e3) => e3.chart.id).includes((_c2 = l2.item) == null ? void 0 : _c2.chart.id) || ((_d2 = u2.getCurConfigComponent) == null ? void 0 : _d2.chart.id) === ((_e2 = l2.item) == null ? void 0 : _e2.chart.id)), hover: u2.getCurHoverComponentId === ((_f2 = l2.item) == null ? void 0 : _f2.chart.id) || u2.getCurHoverComponentId === ((_g2 = l2.parentItem) == null ? void 0 : _g2.chart.id) && ((_j = (_i2 = (_h2 = l2.parentItem) == null ? void 0 : _h2.chart) == null ? void 0 : _i2.options) == null ? void 0 : _j.hoverId) === ((_k = l2.item) == null ? void 0 : _k.chart.id) }];
  }), k2 = m(false);
  function w2() {
    k2.value = true, n2("enter");
  }
  function x2() {
    k2.value = false, n2("leave");
  }
  function _2() {
    n2("expand", !l2.expand);
  }
  function $2() {
    n2("select");
  }
  return (t2, o3) => {
    var _a2;
    return s(), r("div", { class: c(M2.value), onMouseenter: w2, onMouseleave: x2, onMousedown: $2 }, [p("div", Kh, [e2.item.chart.type === d(as).MfCombine ? (s(), r("div", { key: 0, onClick: _2 }, [l2.expand ? (s(), h(d(gt), { key: 0, class: "group", "two-tone-color": d(b2) }, null, 8, ["two-tone-color"])) : (s(), h(d(mt), { key: 1, class: "group", "two-tone-color": d(b2) }, null, 8, ["two-tone-color"]))])) : (s(), r("img", { key: 1, class: "img", alt: "组件", src: y2.value }, null, 8, Xh)), p("span", Jh, S((_a2 = e2.item) == null ? void 0 : _a2.chart.name), 1), p("div", eg, [!e2.showEye || d(g2).getLayerCollapsed || !k2.value && e2.item.chartContain.show ? f("", true) : (s(), h(d(Be), { key: 0, class: "icon", icon: e2.item.chartContain.show ? "ant-design:eye-outlined" : "ant-design:eye-invisible-outlined", onClick: o3[0] || (o3[0] = () => e2.item.chartContain.show = !e2.item.chartContain.show) }, null, 8, ["icon"])), e2.showLock && !d(g2).getLayerCollapsed && (k2.value || e2.item.chartContain.lock) ? (s(), h(d(Be), { key: 1, class: "icon", icon: e2.item.chartContain.lock ? "ant-design:lock-outlined" : "ant-design:unlock-outlined", onClick: o3[1] || (o3[1] = () => e2.item.chartContain.lock = !e2.item.chartContain.lock) }, null, 8, ["icon"])) : f("", true)])])], 34);
  };
} }), og = eo(tg, [["__scopeId", "data-v-925f45da"]]), ag = e({ __name: "LayerGroup", props: { item: { type: Object, required: true }, expand: { type: Boolean, default: false }, showEye: { type: Boolean, default: true }, showLock: { type: Boolean, default: true }, showChildEye: { type: Boolean, default: true }, showChildLock: { type: Boolean, default: true }, externalSelect: { type: Boolean, default: false }, isSelect: { type: Boolean, default: false }, childSelect: { type: String, default: "" } }, emits: ["parentClick", "childClick"], setup(e2, { emit: t2 }) {
  const o2 = e2, n2 = t2, { prefixCls: i2 } = xe("layer-group"), u2 = qr(), p2 = Ar(), f2 = a(() => ({ "child-item": true, collapsed: p2.getLayerCollapsed })), C2 = m(o2.expand);
  function b2() {
    var _a2;
    u2.setCurHoverComponent((_a2 = o2.item) == null ? void 0 : _a2.chart.id);
  }
  function k2() {
    u2.setCurHoverComponent("");
  }
  function w2() {
    const e3 = u2.getComponent(u2.getCurHoverComponentId);
    e3 && (e3.chart.options.hoverId = void 0);
  }
  function x2(e3) {
    C2.value = e3;
  }
  function S2(e3) {
    n2("parentClick", e3);
  }
  return l(() => o2.expand, (e3) => C2.value = e3), (t3, o3) => (s(), r("div", { class: c(d(i2)), onMouseenter: b2, onMouseleave: k2 }, [g(og, { item: e2.item, onExpand: x2, expand: C2.value, "show-eye": e2.showEye, "show-lock": e2.showLock, "external-select": e2.externalSelect, "is-select": e2.isSelect, onClick: S2 }, null, 8, ["item", "expand", "show-eye", "show-lock", "external-select", "is-select"]), g(d(Bt), { show: C2.value, class: c(f2.value) }, { default: M(() => [(s(true), r(y, null, v(e2.item.chart.options.components, (t4, o4) => (s(), h(og, { key: t4.chart.id, "parent-item": e2.item, item: t4, index: o4, "external-select": e2.externalSelect, "is-select": e2.childSelect === t4.chart.id, "show-eye": e2.showChildEye, "show-lock": e2.showChildLock, onSelect: (t5) => function(e3, t6) {
    e3.chart.options.selectIndex = t6;
  }(e2.item, o4), onEnter: (e3) => function(e4) {
    const t5 = u2.getComponent(u2.getCurHoverComponentId);
    t5 && (t5.chart.options.hoverId = e4);
  }(t4.chart.id), onLeave: w2, onClick: (e3) => function(e4) {
    n2("childClick", e4);
  }(t4) }, null, 8, ["parent-item", "item", "index", "external-select", "is-select", "show-eye", "show-lock", "onSelect", "onEnter", "onClick"]))), 128))]), _: 1 }, 8, ["show", "class"])], 34));
} }), lg = eo(ag, [["__scopeId", "data-v-b118e01c"]]), ng = ["onDrop"], ig = e({ name: "FrameLayer", __name: "index", props: { collapsed: Tt.bool.def(false) }, setup(e2) {
  const t2 = e2, { prefixCls: o2 } = xe("frame-layer"), l2 = a(() => [o2, { collapsed: t2.collapsed }]), n2 = [{ value: "collapse", icon: "iconfont:icon-mfish-collapse-all", tooltip: "折叠分组" }, { value: "expand", icon: "iconfont:icon-mfish-expand-all", tooltip: "展开分组" }], r2 = a(() => f2.getComponentList);
  i(() => {
    const e3 = f2.getComponentList.map((e4) => e4.chart.type).join(",");
    Wi({ types: e3, pageNum: 1, pageSize: 1e4 }).then((e4) => {
      var _a2;
      e4 && ((_a2 = e4.list) == null ? void 0 : _a2.length) > 0 && e4.list.forEach((e5) => {
        f2.hasChartImg(e5.type) || dt(ct(e5 == null ? void 0 : e5.picKey), { errorMessageMode: "none" }).then((t3) => {
          f2.setChartImg(e5.type, t3);
        });
      });
    });
  });
  const u2 = m(false), f2 = qr(), y2 = Ar(), v2 = (e3) => {
    const { oldIndex: t3, newIndex: o3 } = e3.moved, a2 = f2.getComponentList.splice(t3, 1)[0];
    f2.getComponentList.splice(o3, 0, a2), f2.setCurComponentIndex(o3);
  }, C2 = () => {
    y2.setLayerCollapsed(!y2.getLayerCollapsed);
  };
  function b2(e3, t3) {
    var _a2;
    e3.stopPropagation();
    const o3 = (_a2 = e3.dataTransfer) == null ? void 0 : _a2.getData(Or);
    if (o3) {
      const e4 = JSON.parse(o3);
      if (!e4) return;
      f2.addComponent(e4, t3), f2.setCurComponent(e4, t3), f2.setUndoRedoData(`添加${e4.chart.name}`);
    }
  }
  function k2(e3, t3, o3) {
    !o3.ctrlKey && !o3.metaKey || 0 !== o3.button ? 0 === o3.button && (f2.cleanSelectArea(), f2.setCurComponent(e3, t3)) : wp(e3);
  }
  function w2() {
    f2.setCurHoverComponent("");
  }
  function x2(e3) {
    u2.value = "expand" === e3;
  }
  return (e3, t3) => (s(), h(Zh, { class: c(l2.value), title: d(y2).getLayerCollapsed ? "" : "图层", icon: "iconfont:icon-mfish-layer", "icon-size": d(y2).getLayerCollapsed ? 16 : 12, "radio-data": n2, onTitleClick: C2, onDrop: t3[1] || (t3[1] = (e4) => b2(e4, r2.value.length)), onRadioChange: x2 }, { default: M(() => [0 === r2.value.length ? (s(), h(d(ke), { key: 0, "image-style": d(y2).getLayerCollapsed ? { height: "20px" } : {}, description: "暂无图层", image: d(ot) }, null, 8, ["image-style", "image"])) : (s(), h(d(yt), { key: 1 }, { default: M(() => [g(d(Rt), { "item-key": "id", modelValue: r2.value, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.value = e4), animation: "300", "ghost-class": "ghost", onChange: v2 }, { item: M(({ index: e4, element: t4 }) => [p("div", { onDrop: (t5) => b2(t5, e4), style: { "margin-top": "4px" } }, [t4.chart.type !== d(as).MfCombine ? (s(), h(og, { key: 0, item: t4, onMousedown: (o3) => k2(t4, e4, o3), onEnter: (e5) => {
    return o3 = t4, void f2.setCurHoverComponent(o3 == null ? void 0 : o3.chart.id);
    var o3;
  }, onLeave: w2 }, null, 8, ["item", "onMousedown", "onEnter"])) : (s(), h(lg, { key: 1, item: t4, expand: u2.value, "show-child-lock": false, onMousedown: (o3) => k2(t4, e4, o3) }, null, 8, ["item", "expand", "onMousedown"]))], 40, ng)]), _: 1 }, 8, ["modelValue"])]), _: 1 }))]), _: 1 }, 8, ["class", "title", "icon-size"]));
} }), rg = eo(ig, [["__scopeId", "data-v-3b66e5f3"]]), sg = { class: "menu-item-hide-title" }, ug = { class: "title" }, cg = eo(e({ __name: "ChartMenus", props: { itemHeight: { type: Number }, width: { type: Number, default: 68 }, collapsed: { type: Boolean, default: false }, horizontal: { type: Boolean, default: false }, hideTitle: { type: Boolean, default: false }, backgroundColor: { type: Object, default: () => ({ light: "transparent", dark: "transparent" }) }, menus: { type: Array, default: () => [] } }, emits: ["menuClick", "menuChange"], setup(e2, { emit: o2 }) {
  t((e3) => ({ "0d1a8dbe": x2.value, "4d1bbc42": `${d(k2)}px`, "2f136afc": w2.value, "4b451fa0": d(k2) - 15 + "px" }));
  const n2 = e2, i2 = o2;
  l(() => n2.menus, (e3) => {
    if (e3 && e3.length > 0) {
      const t2 = e3[0].value;
      C2.value = [t2], i2("menuChange", t2, e3[0].name);
    }
  }, { immediate: true });
  const { prefixCls: f2 } = xe("chart-menus"), C2 = m([]), { backgroundColor: b2, width: k2 } = n2, w2 = a(() => b2.light), x2 = a(() => b2.dark), _2 = (e3) => {
    i2("menuClick", e3, d(C2)), i2("menuChange", e3.key, e3.item.id);
  };
  return (t2, o3) => (s(), r("div", { class: c(d(f2)) }, [g(d(te), { class: c({ collapsed: e2.collapsed }), "selected-keys": C2.value, "onUpdate:selectedKeys": o3[0] || (o3[0] = (e3) => C2.value = e3), onClick: _2 }, { default: M(() => [g(d(yt), null, { default: M(() => [(s(true), r(y, null, v(e2.menus, (t3) => (s(), h(d(we), { id: t3.name, key: t3.value, style: u({ height: `${e2.itemHeight}px` }) }, { default: M(() => [e2.hideTitle ? (s(), h(d(G), { key: 0, title: t3.name, placement: "right" }, { default: M(() => [p("div", sg, [g(d(Be), { style: u({ lineHeight: `${e2.itemHeight}px` }), icon: t3.icon }, null, 8, ["style", "icon"])])]), _: 2 }, 1032, ["title"])) : (s(), r("div", { key: 1, class: c(e2.horizontal ? "menu-item-horizontal" : "menu-item-vertical") }, [g(d(Be), { icon: t3.icon }, null, 8, ["icon"]), p("div", ug, S(t3.name), 1)], 2))]), _: 2 }, 1032, ["id", "style"]))), 128))]), _: 1 })]), _: 1 }, 8, ["class", "selected-keys"])], 2));
} }), [["__scopeId", "data-v-dea86191"]]), dg = ["onDragstart", "onDblclick"], pg = { class: "box-header" }, fg = { class: "box-header-text" }, hg = { class: "box-content" }, gg = ["src"], mg = e({ __name: "ChartItems", props: { charts: { type: Array, default: () => [] }, mode: { type: String, default: "single" } }, setup(e2) {
  const t2 = e2, { prefixCls: o2 } = xe("chart-items"), a2 = qr();
  return l(() => t2.charts, (e3) => {
    e3.forEach((e4) => {
      const t3 = e4 == null ? void 0 : e4.type;
      t3 && (e4 == null ? void 0 : e4.picKey) && !a2.hasChartImg(t3) && dt(ct(e4 == null ? void 0 : e4.picKey), { errorMessageMode: "none" }).then((e5) => {
        a2.setChartImg(t3, e5);
      });
    });
  }, { immediate: true }), (t3, l2) => (s(), h(d(yt), { class: c(d(o2)) }, { default: M(() => [p("div", { class: c(["items", "single" === e2.mode ? e2.mode : [e2.mode, "miniAnimation"]]) }, [(s(true), r(y, null, v(e2.charts, (t4) => {
    return s(), r("div", { draggable: "true", key: t4.type, class: "item-box", onDragstart: (e3) => function(e4, t5) {
      var _a2, _b, _c2;
      const o4 = op(t5);
      if (!o4) return;
      const a3 = e4.currentTarget;
      "img" === e4.target.className ? (_a2 = e4.dataTransfer) == null ? void 0 : _a2.setDragImage(a3, e4.offsetX + 15, e4.offsetY + 32) : (_b = e4.dataTransfer) == null ? void 0 : _b.setDragImage(a3, e4.offsetX, e4.offsetY), (_c2 = e4.dataTransfer) == null ? void 0 : _c2.setData(Or, JSON.stringify(o4));
    }(e3, t4), onDblclick: (e3) => function(e4) {
      const t5 = op(e4);
      t5 && Kd.emit(Hr.CREATE_CHART, t5);
    }(t4) }, [p("div", pg, [g(d(Bn), { disabled: true, size: "single" === e2.mode ? "small" : "mini" }, null, 8, ["size"]), p("span", fg, S(t4.name), 1)]), p("div", hg, [p("img", { class: "img", alt: "组件图片", src: (o3 = t4.type, a2.getChartImg(o3)) }, null, 8, gg)])], 40, dg);
    var o3;
  }), 128))], 2)]), _: 1 }, 8, ["class"]));
} }), yg = eo(mg, [["__scopeId", "data-v-74651cba"]]), vg = e({ name: "FrameChart", __name: "index", props: { collapsed: Tt.bool.def(false) }, setup(e2) {
  const t2 = e2, o2 = Ar(), l2 = m(), n2 = m(), r2 = m(""), u2 = m(/* @__PURE__ */ new Map()), f2 = a(() => n2.value && n2.value.length > 0 ? n2.value.map((e3) => ({ name: e3.categoryName, icon: e3.icon, value: e3.id, children: e3.children })) : []), y2 = a(() => {
    var _a2;
    if (l2.value) {
      const e3 = (_a2 = n2.value) == null ? void 0 : _a2.find((e4) => e4.id === l2.value);
      if ((e3 == null ? void 0 : e3.children) && e3.children.length > 0) return e3.children.map((t3) => ({ name: t3.categoryName, icon: t3.icon, value: t3.id, children: t3.children, parentId: e3.id }));
    }
    return [];
  }), { prefixCls: v2 } = xe("frame-chart"), C2 = m("single"), b2 = [{ value: "single", icon: "ant-design:group-outlined", tooltip: "单列" }, { value: "double", icon: "ant-design:appstore-outlined", tooltip: "双列" }], k2 = a(() => [v2, { collapsed: t2.collapsed }]);
  function w2(e3) {
    C2.value = e3;
  }
  i(() => {
    qt("screen_charts_type", "down").then((e3) => {
      e3 && e3.length > 0 && e3[0].children && (n2.value = e3[0].children);
    });
  });
  const x2 = (e3, t3) => {
    (t3 == null ? void 0 : t3.includes(e3.key)) ? o2.setChartCollapsed(!o2.getChartCollapsed) : o2.setChartCollapsed(false);
  }, S2 = () => {
    o2.setChartCollapsed(!o2.getChartCollapsed);
  };
  function _2(e3) {
    l2.value = e3;
  }
  function $2(e3, t3) {
    let o3;
    o3 = "所有" === t3 ? y2.value.find((t4) => t4.value === e3).parentId : e3, r2.value = o3, u2.value.has(o3) || Wi({ category: o3, pageNum: 1, pageSize: 1e3 }).then((e4) => {
      u2.value.set(o3, e4.list);
    });
  }
  return (t3, o3) => (s(), h(Zh, { title: "组件", icon: "iconfont:icon-mfish-chart", "icon-size": 12, "radio-data": b2, onRadioChange: w2, class: c(k2.value), onTitleClick: S2 }, { default: M(() => [p("div", { class: c(`${d(v2)}-content`) }, [g(cg, { menus: f2.value, "item-height": 58, "background-color": { light: "#f0f2f5", dark: "#232324" }, onMenuClick: x2, onMenuChange: _2 }, null, 8, ["menus"]), p("div", { class: c(["charts", { collapsed: e2.collapsed }]) }, [g(cg, { menus: y2.value, collapsed: e2.collapsed, "hide-title": true, "background-color": { light: "#f8f8f9", dark: "#1e1e1f" }, horizontal: true, "item-height": 28, width: 40, onMenuChange: $2 }, null, 8, ["menus", "collapsed"]), g(yg, { mode: C2.value, charts: u2.value.get(r2.value) }, null, 8, ["mode", "charts"])], 2)], 2)]), _: 1 }, 8, ["class"]));
} }), Cg = eo(vg, [["__scopeId", "data-v-3b8e6093"]]), bg = ["onClick"], Mg = { class: "name" }, kg = { class: "short-cut" }, wg = e({ __name: "SubMenu", props: { subData: { type: Array, default: () => [] } }, setup(e2, { expose: t2 }) {
  const { prefixCls: a2 } = xe("frame-shortcut"), l2 = m(false), n2 = m(0), i2 = o("subMenuRef"), C2 = Se().getThemeColor;
  return t2({ show: function(e3) {
    l2.value = true;
  }, hidden: function() {
    l2.value = false;
  } }), (t3, o2) => (s(), h(F, { name: "shortcut" }, { default: M(() => [O(p("div", { ref_key: "subMenuRef", ref: i2, class: c(d(a2)), style: u({ top: `${n2.value}px`, left: "160px" }) }, [(s(true), r(y, null, v(e2.subData, (e3) => (s(), r(y, { key: e3.name }, [p("div", { class: "menu-item", onClick: e3.action }, [g(d(Be), { icon: e3.icon, color: d(C2) }, null, 8, ["icon", "color"]), p("span", Mg, S(e3.name), 1), p("span", kg, S(e3.shortcut), 1)], 8, bg), e3.divider ? (s(), r("div", { key: 0, class: c(`${d(a2)}__divider`) }, null, 2)) : f("", true)], 64))), 128))], 6), [[z, l2.value]])]), _: 1 }));
} }), xg = eo(wg, [["__scopeId", "data-v-f4307b07"]]), Sg = { class: "short-cut" }, _g = { class: "short-cut" }, $g = { class: "short-cut" }, Lg = ["onClick"], Dg = { class: "name" }, Ig = { class: "short-cut" }, Tg = e({ name: "FrameShortcut", __name: "index", props: { menuTop: { type: Number, default: 0 }, menuLeft: { type: Number, default: 0 }, isUp: { type: Boolean, default: false } }, setup(e2, { expose: t2 }) {
  const l2 = e2, i2 = a(() => ({ top: `${l2.menuTop}px`, left: `${l2.menuLeft}px` })), m2 = Se().getThemeColor, { prefixCls: b2 } = xe("frame-shortcut"), w2 = yp(), x2 = qr(), _2 = o("frameShortcutRef"), $2 = o("canvasAlignMenuRef"), L2 = o("selectAlignMenuRef"), D2 = o("fitMenuRef"), { NoneShortcutKeyEnum: I2 } = _p(x2, w2);
  t2({ getBoundingClientRect: () => {
    var _a2;
    return (_a2 = _2.value) == null ? void 0 : _a2.getBoundingClientRect();
  } });
  const T2 = a(() => x2.getSelectArea.components.length > 1), N2 = n([{ icon: "iconfont:icon-mfish-copy", name: "复制", shortcut: "CTRL+C", action: w2.copyComponent, show: a(() => x2.getCurComponent || x2.getSelectArea.components.length > 0) }, { icon: "iconfont:icon-mfish-paste", name: "粘贴", shortcut: "CTRL+V", action: w2.pasteComponent, show: a(() => w2.getCopyData), divider: true }, { icon: "iconfont:icon-mfish-up-level", name: "上移一层", shortcut: "SHIFT+↑", action: w2.upComponent, show: a(() => x2.getCurComponent && !d(T2)) }, { icon: "iconfont:icon-mfish-down-level", name: "下移一层", shortcut: "SHIFT+↓", action: w2.downComponent, show: a(() => x2.getCurComponent && !d(T2)) }, { icon: "iconfont:icon-mfish-up-level", name: "置顶", shortcut: "CTRL+SHIFT+↑", action: w2.topComponent, show: a(() => x2.getCurComponent && !d(T2)) }, { icon: "iconfont:icon-mfish-bottom-level", name: "置底", shortcut: "CTRL+SHIFT+↓", action: w2.bottomComponent, show: a(() => x2.getCurComponent && !d(T2)), divider: true }, { icon: "iconfont:icon-mfish-combine", name: "组合", shortcut: "CTRL+G", action: w2.composeComponent, show: a(() => x2.getSelectArea.components.length > 1) }, { icon: "iconfont:icon-mfish-un-combine", name: "拆分", shortcut: "CTRL+SHIFT+G", action: w2.decomposeComponent, show: a(() => {
    var _a2;
    return ((_a2 = x2.getCurComponent) == null ? void 0 : _a2.chart.type) === as.MfCombine && !d(T2);
  }) }, { icon: "ant-design:lock-outlined", name: "锁定", shortcut: "CTRL+L", action: w2.lockComponent, show: a(() => {
    var _a2, _b;
    let e3 = (_a2 = x2.getCurComponent) == null ? void 0 : _a2.chartContain.lock;
    for (const t3 of x2.getSelectArea.components) if (!((_b = t3 == null ? void 0 : t3.chartContain) == null ? void 0 : _b.lock)) {
      e3 = false;
      break;
    }
    return void 0 !== e3 && !e3;
  }) }, { icon: "ant-design:unlock-outlined", name: "解锁", shortcut: "CTRL+SHIFT+L", action: w2.unLockComponent, show: a(() => {
    var _a2, _b;
    let e3 = (_a2 = x2.getCurComponent) == null ? void 0 : _a2.chartContain.lock;
    for (const t3 of x2.getSelectArea.components) if ((_b = t3 == null ? void 0 : t3.chartContain) == null ? void 0 : _b.lock) {
      e3 = true;
      break;
    }
    return e3;
  }) }, { icon: "ant-design:eye-invisible-outlined", name: "隐藏", shortcut: "CTRL+H", action: w2.hideComponent, show: a(() => {
    var _a2, _b;
    let e3 = (_a2 = x2.getCurComponent) == null ? void 0 : _a2.chartContain.show;
    for (const t3 of x2.getSelectArea.components) if ((_b = t3 == null ? void 0 : t3.chartContain) == null ? void 0 : _b.show) {
      e3 = true;
      break;
    }
    return e3;
  }) }, { icon: "ant-design:eye-outlined", name: "显示", shortcut: "CTRL+SHIFT+H", action: w2.showComponent, show: a(() => {
    var _a2, _b;
    let e3 = (_a2 = x2.getCurComponent) == null ? void 0 : _a2.chartContain.show;
    for (const t3 of x2.getSelectArea.components) if (!((_b = t3 == null ? void 0 : t3.chartContain) == null ? void 0 : _b.show)) {
      e3 = false;
      break;
    }
    return void 0 !== e3 && !e3;
  }) }, { icon: "ant-design:delete-outlined", name: "删除", shortcut: "DELETE", action: w2.deleteComponent, show: a(() => x2.getCurComponent || x2.getSelectArea.components.length > 0) }]), B2 = n([{ icon: "iconfont:icon-mfish-horizontal-distribution", name: "横向分布", shortcut: "", action: I2.distributeHorizontally }, { icon: "iconfont:icon-mfish-vertical-distribution", name: "纵向分布", shortcut: "", action: I2.distributeVertically, divider: true }, { icon: "iconfont:icon-mfish-left-align", name: "左对齐", shortcut: "", action: I2.alignLeft }, { icon: "iconfont:icon-mfish-horizontal-center", name: "水平居中", shortcut: "", action: I2.alignCenter }, { icon: "iconfont:icon-mfish-right-align", name: "右对齐", shortcut: "", action: I2.alignRight, divider: true }, { icon: "iconfont:icon-mfish-top-align", name: "顶端对齐", shortcut: "", action: I2.alignTop }, { icon: "iconfont:icon-mfish-vertical-center", name: "垂直居中", shortcut: "", action: I2.alignMiddle }, { icon: "iconfont:icon-mfish-bottom-align", name: "底端对齐", shortcut: "", action: I2.alignBottom, divider: true }]), R2 = n([{ icon: "carbon:fit-to-screen", name: "全屏撑满", shortcut: "", action: I2.fillScreen }, { icon: "carbon:fit-to-width", name: "横向撑满", shortcut: "", action: I2.fillWidth }, { icon: "carbon:fit-to-height", name: "纵向撑满", shortcut: "", action: I2.fillHeight }]);
  function q2() {
    var _a2;
    z2(xp.CANVAS), (_a2 = $2.value) == null ? void 0 : _a2.show(l2.isUp);
  }
  function A2() {
    var _a2;
    (_a2 = $2.value) == null ? void 0 : _a2.hidden();
  }
  function O2() {
    var _a2;
    z2(xp.GROUP), (_a2 = L2.value) == null ? void 0 : _a2.show(l2.isUp);
  }
  function j2() {
    var _a2;
    (_a2 = L2.value) == null ? void 0 : _a2.hidden();
  }
  function z2(e3) {
    w2.setAlignType(e3), 0 === x2.getSelectArea.components.length && x2.getCurComponent && w2.setAlignType(xp.CANVAS);
  }
  function E2() {
    var _a2;
    (_a2 = D2.value) == null ? void 0 : _a2.show();
  }
  function P2() {
    var _a2;
    (_a2 = D2.value) == null ? void 0 : _a2.hidden();
  }
  return (e3, t3) => (s(), h(F, { name: "shortcut" }, { default: M(() => [d(w2).getShowMenu ? (s(), r("div", { key: "shortcutMenu", ref_key: "frameShortcutRef", ref: _2, class: c(d(b2)), style: u(i2.value), onMousedown: t3[3] || (t3[3] = k(() => {
  }, ["stop"])) }, [d(x2).getCurComponent || d(x2).getSelectArea.components.length > 1 ? (s(), r("div", { key: 0, class: "menu-item", onMouseenter: q2, onMouseleave: A2, onMouseup: t3[0] || (t3[0] = k(() => {
  }, ["stop"])) }, [g(d(Be), { icon: "iconfont:icon-mfish-left-align", color: d(m2) }, null, 8, ["color"]), t3[4] || (t3[4] = p("span", { class: "name" }, "画布对齐", -1)), p("span", Sg, [g(d(Be), { icon: "ant-design:right-outlined" })]), g(xg, { ref_key: "canvasAlignMenuRef", ref: $2, "sub-data": B2 }, null, 8, ["sub-data"])], 32)) : f("", true), d(x2).getSelectArea.components.length > 1 ? (s(), r("div", { key: 1, class: "menu-item", onMouseenter: O2, onMouseleave: j2, onMouseup: t3[1] || (t3[1] = k(() => {
  }, ["stop"])) }, [g(d(Be), { icon: "iconfont:icon-mfish-left-align", color: d(m2) }, null, 8, ["color"]), t3[5] || (t3[5] = p("span", { class: "name" }, "选中对齐", -1)), p("span", _g, [g(d(Be), { icon: "ant-design:right-outlined" })]), g(xg, { ref_key: "selectAlignMenuRef", ref: L2, "sub-data": B2 }, null, 8, ["sub-data"])], 32)) : f("", true), d(x2).getCurComponent ? (s(), r("div", { key: 2, class: "menu-item", onMouseenter: E2, onMouseleave: P2, onMouseup: t3[2] || (t3[2] = k(() => {
  }, ["stop"])) }, [g(d(Be), { icon: "carbon:fit-to-screen", color: d(m2) }, null, 8, ["color"]), t3[6] || (t3[6] = p("span", { class: "name" }, "撑满", -1)), p("span", $g, [g(d(Be), { icon: "ant-design:right-outlined" })]), g(xg, { ref_key: "fitMenuRef", ref: D2, "sub-data": R2 }, null, 8, ["sub-data"])], 32)) : f("", true), d(x2).getCurComponent || d(x2).getSelectArea.components.length > 1 ? (s(), r("div", { key: 3, class: c(`${d(b2)}__divider`) }, null, 2)) : f("", true), (s(true), r(y, null, v(N2, (e4) => (s(), r(y, { key: e4.name }, [e4.show ? (s(), r("div", { key: 0, class: "menu-item", onClick: (t4) => {
    return o2 = e4.action, w2.setShowMenu(false), void C(() => {
      o2();
    });
    var o2;
  } }, [g(d(Be), { icon: e4.icon, color: d(m2) }, null, 8, ["icon", "color"]), p("span", Dg, S(e4.name), 1), p("span", Ig, S(e4.shortcut), 1)], 8, Lg)) : f("", true), e4.show && e4.divider ? (s(), r("div", { key: 1, class: c(`${d(b2)}__divider`) }, null, 2)) : f("", true)], 64))), 128))], 38)) : f("", true)]), _: 1 }));
} }), Ng = eo(Tg, [["__scopeId", "data-v-2dcb7415"]]);
export {
  pa as $,
  Za as A,
  Ko as B,
  is as C,
  Ja as D,
  ea as E,
  ol as F,
  as as G,
  lg as H,
  Rn as I,
  _r as J,
  ei as K,
  og as L,
  zo as M,
  Ei as N,
  jr as O,
  Gr as P,
  gr as Q,
  Oi as R,
  Hr as S,
  Yn as T,
  di as U,
  nl as V,
  sl as W,
  aa as X,
  ia as Y,
  ua as Z,
  eo as _,
  Ud as a,
  hi as a$,
  ga as a0,
  Ca as a1,
  ka as a2,
  vl as a3,
  Jl as a4,
  ts as a5,
  an as a6,
  cn as a7,
  Ml as a8,
  Sl as a9,
  lh as aA,
  Uh as aB,
  rg as aC,
  Cg as aD,
  Ng as aE,
  Bn as aF,
  At as aG,
  Ot as aH,
  jt as aI,
  zt as aJ,
  jn as aK,
  zn as aL,
  Zn as aM,
  Kn as aN,
  Xn as aO,
  ti as aP,
  oi as aQ,
  ai as aR,
  li as aS,
  ni as aT,
  ii as aU,
  ri as aV,
  si as aW,
  ui as aX,
  ci as aY,
  pi as aZ,
  fi as a_,
  Il as aa,
  Rl as ab,
  Fl as ac,
  Ql as ad,
  Vl as ae,
  Zl as af,
  fn as ag,
  mn as ah,
  Cn as ai,
  kn as aj,
  Sn as ak,
  Ln as al,
  Ft as am,
  Et as an,
  Jn as ao,
  Jc as ap,
  Nc as aq,
  td as ar,
  ld as as,
  Cd as at,
  Tn as au,
  pp as av,
  Bf as aw,
  Af as ax,
  _f as ay,
  Ff as az,
  Zd as b,
  Tr as b$,
  gi as b0,
  mi as b1,
  yi as b2,
  vi as b3,
  Ci as b4,
  bi as b5,
  Mi as b6,
  ki as b7,
  wi as b8,
  xi as b9,
  er as bA,
  or as bB,
  ar as bC,
  lr as bD,
  nr as bE,
  ir as bF,
  rr as bG,
  sr as bH,
  ur as bI,
  cr as bJ,
  dr as bK,
  pr as bL,
  fr as bM,
  hr as bN,
  mr as bO,
  yr as bP,
  vr as bQ,
  Cr as bR,
  br as bS,
  Mr as bT,
  kr as bU,
  wr as bV,
  xr as bW,
  $r as bX,
  Lr as bY,
  Dr as bZ,
  Ir as b_,
  Si as ba,
  _i as bb,
  $i as bc,
  Li as bd,
  Di as be,
  Ii as bf,
  Ti as bg,
  Ni as bh,
  Bi as bi,
  Ri as bj,
  qi as bk,
  Ai as bl,
  ji as bm,
  zi as bn,
  Pi as bo,
  Hi as bp,
  Qi as bq,
  Gi as br,
  Ui as bs,
  Vi as bt,
  Wi as bu,
  Yi as bv,
  Zi as bw,
  Ki as bx,
  Xi as by,
  Ji as bz,
  tr as c,
  Nr as c0,
  Br as c1,
  Rr as c2,
  Sr as c3,
  Ar as c4,
  yp as c5,
  Xd as c6,
  Jd as c7,
  ep as c8,
  tp as c9,
  op as ca,
  ap as cb,
  lp as cc,
  np as cd,
  rp as ce,
  sp as cf,
  up as cg,
  cp as ch,
  dp as ci,
  Or as cj,
  zr as ck,
  Pr as cl,
  Qr as cm,
  Ur as cn,
  Vr as co,
  Cp as cp,
  bp as cq,
  Mp as cr,
  kp as cs,
  wp as ct,
  xp as cu,
  Sp as cv,
  es as cw,
  os as cx,
  _p as cy,
  Fi as d,
  Er as e,
  Fr as f,
  rs as g,
  Yf as h,
  On as i,
  ip as j,
  Wd as k,
  ss as l,
  ks as m,
  bs as n,
  gs as o,
  Vd as p,
  _a as q,
  Da as r,
  Kd as s,
  Na as t,
  qr as u,
  qa as v,
  ja as w,
  Fa as x,
  Qa as y,
  Va as z
};
