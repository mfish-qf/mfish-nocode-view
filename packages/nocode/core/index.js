var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { defineComponent, useCssVars, useTemplateRef, computed, watch, reactive, onMounted, createElementBlock, openBlock, normalizeStyle, normalizeClass, unref, createElementVNode, createCommentVNode, createBlock, createVNode, ref, Fragment, renderList, nextTick, toRaw, withCtx, withModifiers, resolveComponent, createTextVNode, toDisplayString, onUnmounted, mergeProps, readonly, normalizeProps, guardReactiveProps, shallowRef, toHandlers, renderSlot, onBeforeMount, createSlots, toRefs, withDirectives, resolveDynamicComponent, vShow, markRaw, Transition } from "vue";
import { theme, Input, InputNumber, Tooltip, Segmented, Dropdown, Checkbox, RadioButton, RadioGroup, Select, Image, Divider, Button, Menu, Cascader, Radio, Form, DatePicker, RangePicker, Switch, Breadcrumb, Descriptions, Row, Col, Card, Drawer, Alert, Tag, ConfigProvider, Modal, InputGroup, Empty, Textarea, Watermark, MenuItem } from "ant-design-vue";
import { useDesign, useRootSetting, useMessage, useDarkModeTheme } from "@mfish/core/hooks";
import { useEyeDropper, useClipboard, useDebounceFn, useFocus } from "@vueuse/core";
import { Icon, IconFont } from "@mfish/core/components/Icon";
import { cloneDeep, debounce, once, isElement, merge, uniqueId, sum, random, throttle, omit } from "lodash-es";
import { ThemeEnum } from "@mfish/core/enums";
import { fade } from "@jiaminghi/color";
import { buildUUID } from "@mfish/core/utils/Uuid";
import { isFunction, isArray, isObject, isString, isNumber } from "@mfish/core/utils/Is";
import { defHttp } from "@mfish/core/utils/http/axios";
import { defineStore } from "pinia";
import { useAppStore } from "@mfish/stores/modules";
import noImage from "@mfish/core/assets/images/noImage.png";
import { mitt } from "@mfish/core/utils/Mitt";
import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";
import { router } from "@mfish/core/router";
import { formatToDateTime } from "@mfish/core/utils/DateUtil";
import { imageUrl, getLocalFileUrl, imageSrc } from "@mfish/core/utils/file/FileUtils";
import { DeleteOutlined, CaretRightOutlined, CheckOutlined, FolderOpenTwoTone, FolderTwoTone } from "@ant-design/icons-vue";
import { ScrollContainer } from "@mfish/core/components/Container";
import { DraggableInput } from "@mfish/core/components/Draggable";
import { BasicModal, useModalInner, useModal } from "@mfish/core/components/Modal";
import { BasicForm, useForm } from "@mfish/core/components/Form";
import { BasicTree } from "@mfish/core/components/Tree";
import { Split } from "@mfish/core/components/Split";
import { useTable, BasicTable } from "@mfish/core/components/Table";
import { CodeEditor, MODE } from "@mfish/core/components/CodeEditor";
import { useLocale } from "@mfish/core/i18n/UseLocale";
import { propTypes } from "@mfish/core/utils/PropTypes";
import { FileUp } from "@mfish/core/components/FileUpDown";
import draggable$1 from "vuedraggable";
import { NCollapseTransition } from "naive-ui";
import { queryCategoryTreeByCode } from "@mfish/core/api";
const colorStorage = "color_recently_bi";
const gradientColorStorage = "gradient_color_recently_bi";
const recentlyColors = [
  "rgba(255, 255, 255, 1)",
  "rgba(0, 0, 0, 1)",
  "rgba(35, 69, 231, 1)",
  "rgba(35, 231, 196, 1)",
  "rgba(65, 231, 35, 1)",
  "rgba(231, 35, 35, 1)"
];
const recentlyGradientColors = [
  "linear-gradient(120deg, rgba(243,231,233,1) 0%, rgba(227,238,255,1) 100%)",
  "linear-gradient(45deg, rgba(161,140,209,1) 0%, rgba(251,194,235,1) 100%)",
  "linear-gradient(90deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%)",
  "linear-gradient(180deg, rgba(204,32,142,1) 0%, rgba(103,19,210,1) 100%)",
  "linear-gradient(-225deg, rgba(35,21,87,1) 0%, rgba(68,16,122,1) 29%, rgba(255,19,97,1) 67%, rgba(255,248,0,1) 100%)",
  "linear-gradient(180deg, rgba(30,60,114,1) 0%, rgba(30,60,114,1) 1%, rgba(42,82,152,1) 100%)",
  "linear-gradient(-20deg, rgba(43,88,118,1) 0%, rgba(78,67,118,1) 100%)",
  "linear-gradient(45deg, rgba(58,181,176,1) 0%, rgba(61,153,190,1) 31%, rgba(86,49,122,1) 100%)",
  "linear-gradient(180deg, rgba(106,17,203,1) 0%, rgba(37,117,252,1) 100%)"
];
function angleToLinearGradient(deg) {
  const rad = deg / 180 * Math.PI;
  const x1 = 0.5 - 0.5 * Math.cos(rad);
  const y1 = 0.5 - 0.5 * Math.sin(rad);
  const x2 = 0.5 + 0.5 * Math.cos(rad);
  const y2 = 0.5 + 0.5 * Math.sin(rad);
  return { x1, y1, x2, y2 };
}
function getGradientColorClass(value) {
  const colorClass = {};
  const degReg = /-?\d+deg/;
  const rgbaLengthReg = /rgba\((?:\s*\d+\s*,){3}\s*[\d.]+\s*\)\s*\d*%/g;
  const lengthReg = /\d*%/;
  const rgbaReg = /rgba\((?:\s*\d+\s*,){3}\s*[\d.]+\s*\)/;
  colorClass.deg = value.match(degReg)[0].replace("deg", "");
  const colorArr = [];
  value.match(rgbaLengthReg).forEach((item) => {
    colorArr.push({
      rgbaLength: item.match(lengthReg)[0],
      rgba: item.match(rgbaReg)[0]
    });
  });
  colorClass.colors = colorArr;
  return colorClass;
}
const hsv2hsl = function(hue, sat, val) {
  return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};
const isOnePointZero = (n) => {
  return typeof n === "string" && n.includes(".") && Number.parseFloat(n) === 1;
};
const isPercentage = (n) => {
  return typeof n === "string" && n.includes("%");
};
const bound01 = function(value, max) {
  if (isOnePointZero(value)) value = "100%";
  const processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, Number.parseFloat(`${value}`)));
  if (processPercent) {
    value = Number.parseInt(`${value * max}`, 10) / 100;
  }
  if (Math.abs(value - max) < 1e-6) {
    return 1;
  }
  return value % max / Number.parseFloat(max);
};
const INT_HEX_MAP = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
};
const hexOne = (value) => {
  value = Math.min(Math.round(value), 255);
  const high = Math.floor(value / 16);
  const low = value % 16;
  return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`;
};
const toHex = function({ r, g, b }) {
  if (Number.isNaN(+r) || Number.isNaN(+g) || Number.isNaN(+b)) return "";
  return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`;
};
const HEX_INT_MAP = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
const parseHexChannel = function(hex) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }
  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};
const hsl2hsv = function(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);
  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (light + sat) / 2;
  const sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);
  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};
const rgb2hsv = (r, g, b) => {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      }
      case g: {
        h = (b - r) / d + 2;
        break;
      }
      case b: {
        h = (r - g) / d + 4;
        break;
      }
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, v: v * 100 };
};
const hsv2rgb = function(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};
class Color {
  constructor(options = {}) {
    __publicField(this, "_hue", 0);
    __publicField(this, "_saturation", 100);
    __publicField(this, "_value", 100);
    __publicField(this, "_alpha", 100);
    __publicField(this, "enableAlpha", false);
    __publicField(this, "format", "hex");
    __publicField(this, "value", "");
    __publicField(this, "selected");
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option)) {
        this[option] = options[option];
      }
    }
    if (options.value) {
      this.fromString(options.value);
    } else {
      this.doOnChange();
    }
  }
  set(prop, value) {
    if (arguments.length === 1 && typeof prop === "object") {
      for (const p in prop) {
        if (Object.prototype.hasOwnProperty.call(prop, p)) {
          this.set(p, prop[p]);
        }
      }
      return;
    }
    this[`_${prop}`] = value;
    this.doOnChange();
  }
  get(prop) {
    if (prop === "alpha") {
      return Math.floor(this[`_${prop}`]);
    }
    return this[`_${prop}`];
  }
  toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  }
  toHex() {
    const rgb = this.toRgb();
    return toHex(rgb).slice(0, 7);
  }
  fromString(value) {
    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;
      this.doOnChange();
      return;
    }
    const fromHSV = (h, s, v) => {
      this._hue = Math.max(0, Math.min(360, h));
      this._saturation = Math.max(0, Math.min(100, s));
      this._value = Math.max(0, Math.min(100, v));
      this.doOnChange();
    };
    if (value.includes("hsl")) {
      const parts = value.replaceAll(/hsla|hsl|\(|\)/g, "").split(/\s|,/g).filter((val) => val !== "").map((val, index2) => index2 > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Number.parseFloat(parts[3].toString()) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.includes("hsv")) {
      const parts = value.replaceAll(/hsva|hsv|\(|\)/g, "").split(/\s|,/g).filter((val) => val !== "").map((val, index2) => index2 > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Number.parseFloat(parts[3].toString()) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2]);
      }
    } else if (value.includes("rgb")) {
      const parts = value.replaceAll(/rgba|rgb|\(|\)/g, "").split(/\s|,/g).filter((val) => val !== "").map((val, index2) => index2 > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Number.parseFloat(parts[3].toString()) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.includes("#")) {
      const hex = value.replace("#", "").trim();
      if (!/^[\da-f]{3}$|^[\da-f]{6}$|^[\da-f]{8}$/i.test(hex)) return;
      let r, g, b;
      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.slice(0, 2));
        g = parseHexChannel(hex.slice(2, 4));
        b = parseHexChannel(hex.slice(4, 6));
      }
      if (hex.length === 8) {
        this._alpha = parseHexChannel(hex.slice(6)) / 255 * 100;
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100;
      }
      const { h, s, v } = rgb2hsv(r, g, b);
      fromHSV(h, s, v);
    }
  }
  compare(color2) {
    return Math.abs(color2._hue - this._hue) < 2 && Math.abs(color2._saturation - this._saturation) < 1 && Math.abs(color2._value - this._value) < 1 && Math.abs(color2._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue, _saturation, _value, _alpha, format } = this;
    if (this.enableAlpha) {
      switch (format) {
        case "hsl": {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsla(${_hue}, ${Math.round(
            hsl[1] * 100
          )}%, ${Math.round(hsl[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${toHex(hsv2rgb(_hue, _saturation, _value))}${hexOne(_alpha * 255 / 100)}`;
          break;
        }
        default: {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgba(${r}, ${g}, ${b}, ${this.get("alpha") / 100})`;
        }
      }
    } else {
      switch (format) {
        case "hsl": {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsl(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`;
          break;
        }
        case "rgb": {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgb(${r}, ${g}, ${b})`;
          break;
        }
        default: {
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
        }
      }
    }
  }
}
let isDragging = false;
function draggable(element, options) {
  const moveFn = function(event) {
    var _a;
    (_a = options.drag) == null ? void 0 : _a.call(options, event);
  };
  const upFn = function(event) {
    var _a;
    document.removeEventListener("mousemove", moveFn);
    document.removeEventListener("mouseup", upFn);
    document.removeEventListener("touchmove", moveFn);
    document.removeEventListener("touchend", upFn);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    (_a = options.end) == null ? void 0 : _a.call(options, event);
  };
  const downFn = function(event) {
    var _a;
    if (isDragging) return;
    event.preventDefault();
    document.onselectstart = () => false;
    document.ondragstart = () => false;
    document.addEventListener("mousemove", moveFn);
    document.addEventListener("mouseup", upFn);
    document.addEventListener("touchmove", moveFn);
    document.addEventListener("touchend", upFn);
    isDragging = true;
    (_a = options.start) == null ? void 0 : _a.call(options, event);
  };
  element.addEventListener("mousedown", downFn);
  element.addEventListener("touchstart", downFn, { passive: false });
}
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "ColorPanel",
  props: {
    color: { type: Object, required: true },
    height: { type: Number, default: 150 },
    isShow: { type: Boolean, default: false }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "003068da": `${__props.height}px`
    }));
    const props = __props;
    const colorPanelRef = useTemplateRef("colorPanelRef");
    const colorValue = computed(() => {
      const hue = props.color.get("hue");
      const value = props.color.get("value");
      return { hue, value };
    });
    const { prefixCls } = useDesign("color-panel");
    watch(
      () => colorValue,
      () => {
        update();
      },
      { deep: true }
    );
    watch(
      () => props.isShow,
      (val) => {
        if (!val) return;
        setTimeout(() => {
          update();
          panelData.showCursor = true;
        }, 5);
      },
      { immediate: true }
    );
    const panelData = reactive({
      showCursor: false,
      cursorTop: 0,
      cursorLeft: 0,
      background: "hsl(0, 100%, 50%)",
      HSL: {}
    });
    onMounted(() => {
      if (!colorPanelRef.value) return;
      draggable(colorPanelRef.value, {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      });
    });
    function update() {
      if (!colorPanelRef.value) return;
      const saturation = props.color.get("saturation");
      const value = props.color.get("value");
      const { clientWidth: width, clientHeight: height } = colorPanelRef.value;
      panelData.cursorLeft = saturation * width / 100;
      panelData.cursorTop = (100 - value) * height / 100;
      panelData.background = `hsl(${props.color.get("hue")}, 100%, 50%)`;
    }
    function handleDrag(event) {
      const el = colorPanelRef.value;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      let left = event.clientX - rect.left;
      let top = event.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);
      top = Math.max(0, top);
      top = Math.min(top, rect.height);
      panelData.cursorLeft = left;
      panelData.cursorTop = top;
      panelData.HSL = {
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      };
      props.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        ref_key: "colorPanelRef",
        ref: colorPanelRef,
        style: normalizeStyle({
          backgroundColor: panelData.background
        })
      }, [
        _cache[1] || (_cache[1] = createElementVNode("div", { class: "color__white" }, null, -1)),
        _cache[2] || (_cache[2] = createElementVNode("div", { class: "color__black" }, null, -1)),
        panelData.showCursor ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "color-cursor",
          style: normalizeStyle({
            top: `${panelData.cursorTop}px`,
            left: `${panelData.cursorLeft}px`
          })
        }, _cache[0] || (_cache[0] = [
          createElementVNode("div", null, null, -1)
        ]), 4)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const ColorPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-696c5dfb"]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "ColorHueSlider",
  props: {
    color: { type: Object, required: true },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  emits: ["startEyeDropper", "endEyeDropper"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const thumb = reactive({
      left: 0,
      top: 0,
      hue: 0
    });
    const barRef = useTemplateRef("barRef");
    const thumbRef = useTemplateRef("thumbRef");
    const colorHueSliderRef = useTemplateRef("colorHueSliderRef");
    const { prefixCls } = useDesign("hue-slider");
    const { isSupported, open, sRGBHex } = useEyeDropper();
    const hueValue = computed(() => {
      return props.color.get("hue");
    });
    onMounted(() => {
      const bar = barRef.value;
      const thumb2 = thumbRef.value;
      if (!bar || !thumb2) return;
      const dragConfig = {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      };
      draggable(bar, dragConfig);
      draggable(thumb2, dragConfig);
      update();
    });
    watch(sRGBHex, (val) => {
      if (!val) return;
      props.color.fromString(val);
      setTimeout(() => {
        emit("endEyeDropper", val);
      }, 10);
    });
    watch(
      () => hueValue.value,
      () => {
        update();
      }
    );
    function eyeDropper() {
      emit("startEyeDropper");
      open();
    }
    function handleClick(event) {
      const thumb2 = thumbRef.value;
      const target = event.target;
      if (target !== thumb2) {
        handleDrag(event);
      }
    }
    function handleDrag(event) {
      const thumb2 = thumbRef.value;
      const slider = colorHueSliderRef.value;
      if (!thumb2 || !slider) return;
      const rect = slider.getBoundingClientRect();
      let hue;
      if (props.vertical) {
        let top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb2.offsetHeight / 2);
        top = Math.max(thumb2.offsetHeight / 2, top);
        hue = Math.round((top - thumb2.offsetHeight / 2) / (rect.height - thumb2.offsetHeight) * 360);
      } else {
        let left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb2.offsetWidth / 2);
        left = Math.max(thumb2.offsetWidth / 2, left);
        hue = Math.round((left - thumb2.offsetWidth / 2) / (rect.width - thumb2.offsetWidth) * 360);
      }
      props.color.set("hue", hue);
    }
    function update() {
      thumb.left = getThumbLeft();
      thumb.top = getThumbTop();
    }
    function getThumbLeft() {
      if (props.vertical) return 0;
      const thumb2 = thumbRef.value;
      const slider = colorHueSliderRef.value;
      if (!slider || !thumb2) return 0;
      const hue = props.color.get("hue");
      return Math.round(hue * (slider.offsetWidth - thumb2.offsetWidth / 2) / 360);
    }
    function getThumbTop() {
      if (!props.vertical) return 10;
      const thumb2 = thumbRef.value;
      const slider = colorHueSliderRef.value;
      if (!slider || !thumb2) return 10;
      const hue = props.color.get("hue");
      return Math.round(hue * (slider.offsetHeight - thumb2.offsetHeight / 2) / 360);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        unref(isSupported) ? (openBlock(), createBlock(unref(Icon), {
          key: 0,
          class: "icon",
          icon: "ion:eyedrop-outline",
          onClick: eyeDropper
        })) : createCommentVNode("", true),
        createElementVNode("div", {
          class: "bar-contain",
          ref_key: "colorHueSliderRef",
          ref: colorHueSliderRef
        }, [
          createElementVNode("div", {
            class: "bar",
            onClick: handleClick,
            ref_key: "barRef",
            ref: barRef
          }, null, 512),
          createElementVNode("div", {
            class: "thumb",
            ref_key: "thumbRef",
            ref: thumbRef,
            style: normalizeStyle({
              left: `${thumb.left}px`,
              top: `${thumb.top}px`
            })
          }, [
            createVNode(unref(Icon), {
              class: "thumb__icon",
              icon: "ant-design:caret-up-outlined"
            })
          ], 4)
        ], 512)
      ], 2);
    };
  }
});
const ColorHueSlider = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-b2d0e443"]]);
const _hoisted_1$z = { class: "background" };
const _hoisted_2$n = { class: "color-text" };
const _hoisted_3$e = { class: "color-input" };
const _hoisted_4$7 = { class: "color-input-percentage" };
const _hoisted_5$6 = { class: "color-input-percentage" };
const _hoisted_6$3 = { class: "color-input-percentage" };
const _hoisted_7 = { class: "color-input-percentage a" };
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "ColorText",
  props: {
    color: { type: Object, required: true }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "09aca737": colorBorder.value
    }));
    const props = __props;
    const customInput = ref("");
    const rgba = reactive({
      r: 0,
      g: 0,
      b: 0,
      a: 100
    });
    const { prefixCls } = useDesign("color-text");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const displayedColor = computed(() => {
      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a / 100})`;
    });
    watch(
      () => props.color,
      () => {
        const rgb = props.color.toRgb();
        rgba.r = rgb.r;
        rgba.g = rgb.g;
        rgba.b = rgb.b;
        rgba.a = props.color.get("alpha");
        customInput.value = props.color.toHex();
      },
      { immediate: true, deep: true }
    );
    watch(customInput, (val) => {
      if (!val.startsWith("#")) {
        customInput.value = `#${val}`;
      }
    });
    function changeAlpha() {
      props.color.set("alpha", rgba.a);
    }
    function change() {
      props.color.fromString(customInput.value);
      props.color.set("alpha", rgba.a);
    }
    function changeRgb() {
      props.color.fromString(unref(displayedColor));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$z, [
          createElementVNode("div", {
            class: "background-color",
            style: normalizeStyle({ backgroundColor: displayedColor.value })
          }, null, 4)
        ]),
        createElementVNode("div", _hoisted_2$n, [
          createElementVNode("div", _hoisted_3$e, [
            createVNode(unref(Input), {
              size: "small",
              value: customInput.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => customInput.value = $event),
              onPressEnter: change,
              onBlur: change,
              maxlength: 7
            }, null, 8, ["value"])
          ])
        ]),
        createElementVNode("div", _hoisted_4$7, [
          _cache[5] || (_cache[5] = createElementVNode("div", { class: "prefix" }, "R", -1)),
          createVNode(unref(InputNumber), {
            size: "small",
            value: rgba.r,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => rgba.r = $event),
            bordered: false,
            controls: false,
            onPressEnter: changeRgb,
            onBlur: changeRgb,
            step: 1,
            min: 0,
            max: 255,
            maxlength: 3
          }, null, 8, ["value"])
        ]),
        createElementVNode("div", _hoisted_5$6, [
          _cache[6] || (_cache[6] = createElementVNode("div", { class: "prefix" }, "G", -1)),
          createVNode(unref(InputNumber), {
            size: "small",
            bordered: false,
            value: rgba.g,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => rgba.g = $event),
            controls: false,
            onPressEnter: changeRgb,
            onBlur: changeRgb,
            step: 1,
            min: 0,
            max: 255,
            maxlength: 3
          }, null, 8, ["value"])
        ]),
        createElementVNode("div", _hoisted_6$3, [
          _cache[7] || (_cache[7] = createElementVNode("div", { class: "prefix" }, "B", -1)),
          createVNode(unref(InputNumber), {
            size: "small",
            bordered: false,
            value: rgba.b,
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => rgba.b = $event),
            controls: false,
            onPressEnter: changeRgb,
            onBlur: changeRgb,
            step: 1,
            min: 0,
            max: 255,
            maxlength: 3
          }, null, 8, ["value"])
        ]),
        createElementVNode("div", _hoisted_7, [
          _cache[8] || (_cache[8] = createElementVNode("div", { class: "prefix" }, "A", -1)),
          createVNode(unref(InputNumber), {
            size: "small",
            bordered: false,
            value: rgba.a,
            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => rgba.a = $event),
            controls: false,
            onPressEnter: changeAlpha,
            onChange: changeAlpha,
            step: 1,
            min: 0,
            max: 100,
            maxlength: 3
          }, null, 8, ["value"]),
          _cache[9] || (_cache[9] = createElementVNode("div", null, "%", -1))
        ])
      ], 2);
    };
  }
});
const ColorText = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-2bab5fee"]]);
const _hoisted_1$y = { class: "colors" };
const _hoisted_2$m = ["onClick"];
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "ColorRecently",
  props: {
    color: { type: Object, required: true },
    isShow: { type: Boolean, default: false }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "8433eb3a": colorBorder.value
    }));
    const props = __props;
    const colors = ref(recentlyColors);
    const rgbaColors = ref([]);
    const { prefixCls } = useDesign("color-recently");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    watch(colors, (val) => {
      rgbaColors.value = parseColors(val, props.color);
    });
    watch(
      () => props.color,
      (val) => {
        rgbaColors.value = parseColors(colors.value, val);
        rgbaColors.value.forEach((item) => {
          item.selected = val.compare(item);
        });
      },
      { deep: true }
    );
    watch(
      () => props.isShow,
      (val) => {
        if (!val) return;
        getColor2LocalStorage();
      },
      { immediate: true }
    );
    function getColor2LocalStorage() {
      const storage = localStorage.getItem(colorStorage);
      if (!storage) {
        rgbaColors.value = parseColors(unref(colors), props.color);
        return;
      }
      const oldColors = JSON.parse(storage);
      if (oldColors && oldColors.length > 0) {
        colors.value = [...oldColors].slice(0, 20);
      }
    }
    function parseColors(colors2, color2) {
      return colors2.map((value) => {
        const c = new Color();
        c.enableAlpha = true;
        c.format = "rgba";
        c.fromString(value);
        c.selected = c.value === color2.value;
        return c;
      });
    }
    function handleSelect(index2) {
      props.color.fromString(colors.value[index2]);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        _cache[0] || (_cache[0] = createElementVNode("div", { class: "last-time-text" }, "最近使用", -1)),
        createElementVNode("div", _hoisted_1$y, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(rgbaColors.value, (item, index2) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["color-selector", { selected: item.selected }]),
              key: index2,
              onClick: ($event) => handleSelect(index2)
            }, [
              createElementVNode("div", {
                class: "default",
                style: normalizeStyle({ "background-color": item.value })
              }, null, 4)
            ], 10, _hoisted_2$m);
          }), 128))
        ])
      ], 2);
    };
  }
});
const ColorRecently = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-98ec7ef1"]]);
const _hoisted_1$x = { class: "colors" };
const _hoisted_2$l = ["onClick"];
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "GradientColorRecently",
  props: {
    color: { type: String, default: "" },
    isShow: { type: Boolean, default: false }
  },
  emits: ["selectColor"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "7fb04f44": colorBorder.value
    }));
    const props = __props;
    const emit = __emit;
    const gradientColors = ref([]);
    const { prefixCls } = useDesign("color-recently");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const selectIndex = ref();
    watch(
      () => props.isShow,
      (val) => {
        if (!val) return;
        getColor2LocalStorage();
        setSelectIndex();
      },
      { immediate: true }
    );
    function setSelectIndex() {
      setTimeout(() => {
        if (!props.color) return;
        const trimValue = props.color.replaceAll(/\s*/g, "");
        for (let i = 0; i < gradientColors.value.length; i++) {
          if (gradientColors.value[i].replaceAll(/\s*/g, "") === trimValue) {
            selectIndex.value = i;
            return;
          }
        }
      }, 5);
    }
    function getColor2LocalStorage() {
      const storage = localStorage.getItem(gradientColorStorage);
      if (!storage) {
        gradientColors.value = recentlyGradientColors;
        return;
      }
      const oldColors = JSON.parse(storage);
      if (oldColors && oldColors.length > 0) {
        gradientColors.value = [...oldColors].slice(0, 20);
      }
    }
    function handleSelect(index2, item) {
      selectIndex.value = index2;
      const value = getGradientColorClass(item);
      emit("selectColor", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        _cache[0] || (_cache[0] = createElementVNode("div", { class: "last-time-text" }, "最近使用", -1)),
        createElementVNode("div", _hoisted_1$x, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(gradientColors.value, (item, index2) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["color-selector", { selected: selectIndex.value === index2 }]),
              key: index2,
              onClick: ($event) => handleSelect(index2, item)
            }, [
              createElementVNode("div", {
                class: "default",
                style: normalizeStyle({ background: item })
              }, null, 4)
            ], 10, _hoisted_2$l);
          }), 128))
        ])
      ], 2);
    };
  }
});
const GradientColorRecently = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-be7486eb"]]);
const _hoisted_1$w = { class: "hue-slider" };
const _hoisted_2$k = ["onMousedown", "onDblclick"];
const _hoisted_3$d = { class: "color-input-percentage" };
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "GradientColor",
  props: {
    isShow: { type: Boolean, default: false },
    colors: {
      type: Object,
      default: () => {
        return {
          deg: 45,
          colors: [
            {
              rgba: "rgba(255, 255, 0, 1)",
              rgbaLength: "0%"
            },
            {
              rgba: "rgba(0, 0, 255, 0.9)",
              rgbaLength: "100%"
            }
          ]
        };
      }
    }
  },
  emits: ["colorChange", "startEyeDropper", "endEyeDropper"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "40133406": colorBorder.value
    }));
    const props = __props;
    const emit = __emit;
    const color2 = ref(
      new Color({
        enableAlpha: true,
        format: "rgba"
      })
    );
    function setThumbRef(el, index2) {
      thumbRef.value[index2] = el;
    }
    const colorIndex = ref(0);
    const gradientColors = ref([]);
    const deg = ref(45);
    const background = ref();
    const barRef = useTemplateRef("barRef");
    const thumbRef = ref([]);
    const { prefixCls } = useDesign("gradient-color");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const getStyle = computed(() => {
      return background.value ? {
        background: background.value
      } : {};
    });
    watch(
      () => props.isShow,
      (val) => {
        nextTick(() => {
          if (val) {
            selectColor(props.colors);
          }
        });
      },
      { immediate: true }
    );
    watch(
      gradientColors,
      (val) => {
        if (!props.isShow) return;
        gradientColors.value = val;
        background.value = buildGradientColor();
      },
      { deep: true }
    );
    watch(
      color2,
      (val) => {
        if (!props.isShow) return;
        gradientColors.value[colorIndex.value].rgba = val.value;
      },
      { deep: true }
    );
    function selectColor(gradientColor) {
      gradientColors.value = cloneDeep(toRaw(gradientColor.colors));
      background.value = buildGradientColor(false);
      colorIndex.value = 0;
      color2.value.fromString(gradientColors.value[0].rgba);
      deg.value = gradientColor.deg;
    }
    function buildGradientColor(isEmit = true) {
      if (gradientColors.value && gradientColors.value.length > 0) {
        let colorsStr = "";
        const backgroundColor = JSON.parse(JSON.stringify(gradientColors.value)).sort((a, b) => {
          return a.rgbaLength.match(/\d*/)[0] - b.rgbaLength.match(/\d*/)[0];
        });
        backgroundColor.forEach((item, index2) => {
          if (index2 === backgroundColor.length - 1) {
            colorsStr += `${item.rgba} ${item.rgbaLength}`;
          } else {
            colorsStr += `${item.rgba} ${item.rgbaLength},`;
          }
        });
        colorsStr = `linear-gradient(${deg.value}deg, ${colorsStr})`;
        if (isEmit) {
          emit("colorChange", colorsStr);
        }
        return colorsStr;
      }
    }
    function addColor(e) {
      if (!barRef.value) return;
      const rect = barRef.value.getBoundingClientRect();
      let num = 0;
      if (e.clientX - rect.left > 0) {
        const left = e.clientX - rect.left;
        num = Math.round(left / rect.width * 100);
        if (num > 100) {
          num = 100;
        }
      }
      const curColor = gradientColors.value && gradientColors.value[0] ? gradientColors.value[0].rgba : "rgba(161, 234, 197, 0.98)";
      gradientColors.value.push({
        rgbaLength: `${num}%`,
        rgba: curColor
      });
      colorIndex.value = gradientColors.value.length - 1;
    }
    function deleteColor(index2) {
      gradientColors.value.splice(index2, 1);
    }
    function mousedown(index2) {
      if (!barRef.value || !thumbRef.value) return;
      colorIndex.value = index2;
      color2.value.fromString(gradientColors.value[index2].rgba);
      const rect = barRef.value.getBoundingClientRect();
      const thumb = thumbRef.value[index2];
      const mouseMove = (e) => {
        let num = 0;
        if (e.clientX - rect.left > 0) {
          let left = e.clientX - rect.left;
          left = Math.max(thumb.offsetWidth / 2, left);
          left = Math.min(left, rect.width - thumb.offsetWidth / 2);
          num = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100);
          if (num > 100) {
            num = 100;
          }
        }
        thumb.style.left = `${num}%`;
        gradientColors.value[index2].rgbaLength = `${num}%`;
        e.preventDefault();
      };
      const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
      };
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }
    function changeDeg() {
      if (!unref(deg)) {
        deg.value = 0;
      }
      background.value = buildGradientColor();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("div", {
          class: normalizeClass(unref(prefixCls))
        }, [
          createElementVNode("div", _hoisted_1$w, [
            createVNode(unref(Tooltip), {
              title: "点击增加新颜色",
              placement: "left"
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  class: "bar",
                  ref_key: "barRef",
                  ref: barRef,
                  onClick: withModifiers(addColor, ["stop", "prevent"]),
                  style: normalizeStyle(getStyle.value)
                }, null, 4)
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList(gradientColors.value, (item, index2) => {
              return openBlock(), createElementBlock("div", {
                class: "thumb",
                ref_for: true,
                ref: (el) => setThumbRef(el, index2),
                key: `gradientColors${index2}`,
                onMousedown: ($event) => mousedown(index2),
                onDblclick: ($event) => deleteColor(index2),
                style: normalizeStyle({
                  left: item.rgbaLength
                })
              }, [
                createVNode(unref(Icon), {
                  title: "双击取消",
                  class: normalizeClass(["thumb__icon", colorIndex.value === index2 ? "selected" : ""]),
                  icon: "ant-design:caret-up-outlined"
                }, null, 8, ["class"])
              ], 44, _hoisted_2$k);
            }), 128))
          ]),
          createElementVNode("div", _hoisted_3$d, [
            _cache[3] || (_cache[3] = createElementVNode("div", { class: "prefix" }, "D", -1)),
            createVNode(unref(InputNumber), {
              value: deg.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => deg.value = $event),
              bordered: false,
              controls: false,
              max: 360,
              min: -360,
              step: 1,
              onChange: changeDeg,
              maxlength: 4
            }, null, 8, ["value"]),
            _cache[4] || (_cache[4] = createElementVNode("div", { class: "suffix" }, "°", -1))
          ])
        ], 2),
        createVNode(ColorPanel, {
          style: { "margin-top": "4px" },
          color: color2.value,
          height: 118,
          "is-show": __props.isShow
        }, null, 8, ["color", "is-show"]),
        createVNode(ColorHueSlider, {
          style: { "margin-top": "8px" },
          color: color2.value,
          onStartEyeDropper: _cache[1] || (_cache[1] = () => emit("startEyeDropper")),
          onEndEyeDropper: _cache[2] || (_cache[2] = (val) => emit("endEyeDropper", val))
        }, null, 8, ["color"]),
        createVNode(ColorText, {
          style: { "margin-top": "15px" },
          color: color2.value
        }, null, 8, ["color"]),
        createVNode(GradientColorRecently, {
          style: { "margin-top": "8px" },
          color: background.value,
          "is-show": __props.isShow,
          onSelectColor: selectColor
        }, null, 8, ["color", "is-show"])
      ]);
    };
  }
});
const GradientColor = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-cf05475f"]]);
const _hoisted_1$v = { class: "header" };
const _hoisted_2$j = {
  key: 0,
  class: "content"
};
const _hoisted_3$c = {
  key: 1,
  class: "content"
};
const _hoisted_4$6 = { class: "confirm" };
const _hoisted_5$5 = { key: 0 };
const _hoisted_6$2 = { key: 1 };
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "PickerDropdown",
  props: {
    type: { type: Number, default: 3 },
    selectType: { type: Number, default: 1 },
    color: { type: Object, required: true },
    colors: {
      type: Object,
      default: () => {
        return {
          deg: 45,
          colors: [
            {
              rgba: "rgba(255, 255, 0, 1)",
              rgbaLength: "0%"
            },
            {
              rgba: "rgba(0, 0, 255, 0.9)",
              rgbaLength: "100%"
            }
          ]
        };
      }
    },
    isShow: { type: Boolean, default: false },
    hideConfirm: {
      type: Boolean,
      default: false
    },
    hideCancel: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "changeGradientColor",
    "pickColor",
    "restColor",
    "selectTypeChange",
    "startEyeDropper",
    "endEyeDropper"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { copy, copied } = useClipboard({ legacy: true });
    const configs = ref([
      { value: 1, payload: "纯色" },
      { value: 2, payload: "渐变色" }
    ]);
    const gradientColorValue = ref();
    const activeType = ref(props.selectType);
    watch(
      () => props.isShow,
      (val) => {
        if (!val) return;
        activeType.value = props.selectType;
        emit("selectTypeChange", unref(activeType));
      },
      { immediate: true }
    );
    onMounted(() => {
      if (props.type === 1) {
        configs.value = [configs.value[0]];
      } else if (props.type === 2) {
        configs.value = [configs.value[1]];
      }
    });
    function configChange(e) {
      activeType.value = e;
      emit("selectTypeChange", e);
    }
    const { prefixCls } = useDesign("picker-dropdown");
    function confirmValue() {
      emit("pickColor", unref(activeType) === 2 ? gradientColorValue.value : props.color.value);
    }
    function resetValue() {
      emit("restColor");
    }
    const gradientColorChange = debounce((color2) => {
      gradientColorValue.value = color2;
      emit("changeGradientColor", color2);
    }, 200);
    function copyColor() {
      const value = unref(activeType) === 2 ? gradientColorValue.value : props.color.value;
      if (value) {
        copy(value);
      }
    }
    function startEyeDropper() {
      emit("startEyeDropper");
    }
    function endEyeDropper(val) {
      emit("endEyeDropper", val);
    }
    return (_ctx, _cache) => {
      const _component_AButton = resolveComponent("AButton");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$v, [
          createVNode(unref(Segmented), {
            value: activeType.value,
            options: configs.value,
            onChange: configChange,
            block: ""
          }, {
            label: withCtx(({ payload }) => [
              createTextVNode(toDisplayString(payload), 1)
            ]),
            _: 1
          }, 8, ["value", "options"])
        ]),
        activeType.value === 1 && (__props.type === 1 || __props.type === 3) ? (openBlock(), createElementBlock("div", _hoisted_2$j, [
          createVNode(ColorPanel, {
            style: { "margin-top": "4px" },
            color: __props.color,
            "is-show": __props.isShow
          }, null, 8, ["color", "is-show"]),
          createVNode(ColorHueSlider, {
            style: { "margin-top": "8px" },
            color: __props.color,
            onEndEyeDropper: endEyeDropper,
            onStartEyeDropper: startEyeDropper
          }, null, 8, ["color"]),
          createVNode(ColorText, {
            style: { "margin-top": "15px" },
            color: __props.color
          }, null, 8, ["color"]),
          createVNode(ColorRecently, {
            style: { "margin-top": "8px" },
            color: __props.color,
            "is-show": __props.isShow
          }, null, 8, ["color", "is-show"])
        ])) : createCommentVNode("", true),
        activeType.value === 2 && (__props.type === 2 || __props.type === 3) ? (openBlock(), createElementBlock("div", _hoisted_3$c, [
          createVNode(GradientColor, {
            onColorChange: unref(gradientColorChange),
            colors: __props.colors,
            "is-show": __props.isShow,
            onStartEyeDropper: startEyeDropper,
            onEndEyeDropper: endEyeDropper
          }, null, 8, ["onColorChange", "colors", "is-show"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_4$6, [
          !props.hideCancel ? (openBlock(), createBlock(_component_AButton, {
            key: 0,
            onClick: resetValue
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("取消")
            ])),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_AButton, {
            onClick: copyColor,
            color: unref(copied) ? "warning" : "primary"
          }, {
            default: withCtx(() => [
              !unref(copied) ? (openBlock(), createElementBlock("span", _hoisted_5$5, "拷贝")) : (openBlock(), createElementBlock("span", _hoisted_6$2, "!已拷贝"))
            ]),
            _: 1
          }, 8, ["color"]),
          !props.hideConfirm ? (openBlock(), createBlock(_component_AButton, {
            key: 1,
            onClick: confirmValue,
            color: "success"
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("确定")
            ])),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$u = {
  key: 0,
  class: "color-background-text"
};
const _hoisted_2$i = { class: "color-background-show-box" };
const _hoisted_3$b = {
  key: 1,
  style: { "display": "flex" }
};
const _hoisted_4$5 = { class: "color-text" };
const _hoisted_5$4 = { class: "color-show-box" };
const _hoisted_6$1 = ["title"];
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  ...{ name: "MfishColorPicker" },
  __name: "index",
  props: {
    value: String,
    showAlpha: {
      type: Boolean,
      default: true
    },
    /**
     * 类型 1 单色 2 渐变色 3 显示全部
     */
    type: {
      type: Number,
      default: 3
    },
    isDelete: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请输入颜色，格式#FFFFFF"
    },
    title: {
      type: String,
      default: "清空则为无色"
    },
    hideConfirm: {
      type: Boolean,
      default: false
    },
    hideCancel: {
      type: Boolean,
      default: false
    }
  },
  emits: ["inputChange", "confirmChange"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "56ad25b7": colorBorder.value
    }));
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("color-picker");
    const selectType = ref(1);
    const darkMode = useRootSetting().getDarkMode;
    const mouseEnter = ref(false);
    const color2 = ref(
      new Color({
        value: unref(darkMode) === ThemeEnum.DARK ? "#000000" : "#FFFFFF",
        enableAlpha: props.showAlpha,
        format: "rgba"
      })
    );
    const colors = ref({
      deg: 120,
      colors: [
        {
          rgba: "rgba(243, 231, 233, 1)",
          rgbaLength: "0%"
        },
        {
          rgba: "rgba(227,238,255,1)",
          rgbaLength: "100%"
        }
      ]
    });
    const hex = ref("");
    const alpha = ref(100);
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const displayedColor = ref();
    const oldColor = ref();
    const backStyle = computed(() => {
      return {
        background: unref(displayedColor),
        height: "100%"
      };
    });
    watch(
      () => props.value,
      () => {
        initValue();
      },
      { immediate: true }
    );
    watch(
      color2,
      (val) => {
        if (val) {
          alpha.value = val.get("alpha");
          hex.value = val.toHex();
          changeColor();
          nextTick(() => emit("inputChange", unref(displayedColor), unref(hex)));
        }
      },
      { deep: true }
    );
    watch(hex, (val) => {
      if (!val) {
        displayedColor.value = "";
        return;
      }
      if (!val.startsWith("#")) {
        hex.value = `#${val}`;
      }
      changeColor();
    });
    const changeColor = () => {
      const { r, g, b } = color2.value.toRgb();
      displayedColor.value = `rgba(${r}, ${g}, ${b}, ${color2.value.get("alpha") / 100})`;
    };
    const isShow = ref(false);
    const visibleChange = (show) => {
      isShow.value = show;
      if (show) {
        initValue();
      } else {
        resetValue();
      }
    };
    function initValue() {
      oldColor.value = props.value;
      setValue();
    }
    function setValue() {
      if (oldColor.value && checkColor(oldColor.value)) {
        if (oldColor.value.includes("linear-gradient(")) {
          if (props.type === 1) {
            selectType.value = 1;
            displayedColor.value = "rgba(255, 255, 255, 1)";
            color2.value.fromString(displayedColor.value);
          } else {
            selectType.value = 2;
            displayedColor.value = oldColor.value;
            colors.value = getGradientColorClass(oldColor.value);
          }
        } else {
          if (oldColor.value) {
            color2.value.fromString(oldColor.value);
            hex.value = color2.value.toHex();
            displayedColor.value = oldColor.value;
            selectType.value = 1;
          }
        }
      } else {
        if (props.type === 2) {
          selectType.value = 2;
        } else {
          selectType.value = 1;
          hex.value = "";
          displayedColor.value = "";
        }
      }
      alpha.value = color2.value.get("alpha");
    }
    function checkColor(val, type) {
      if (!val) return false;
      const HEX_REG = /^#(?:[\da-f]{3}|[\da-f]{6}|[\da-f]{8})$/i;
      const RGB_REG = /^rgba?\((?:(?:25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*(?:,\s*)?(?:[01]\.?\d*)?\)$/i;
      const background_REg = (
        // eslint-disable-next-line regexp/no-super-linear-backtracking
        /^linear-gradient\s*\(-?\s*\d{1,3}\s*deg,(?:\s*rgba?\s*\((?:\s*\d+\s*,){2}\s*\d+\s*(?:,\s*)?[\d.]{1,6}\s*\)\s*\d{1,3}%\s*(?:,\s*)?)*\s*\)/i
      );
      if (type === 2) {
        return HEX_REG.test(val) || RGB_REG.test(val);
      } else {
        return HEX_REG.test(val) || RGB_REG.test(val) || background_REg.test(val);
      }
    }
    const setColorValue = () => {
      hex.value = color2.value.toHex();
      const value = color2.value.value;
      saveColor2LocalStorage(value);
      nextTick(() => emit("confirmChange", unref(displayedColor), unref(hex)));
    };
    function inputChange() {
      if (checkColor(hex.value, 2)) {
        color2.value.fromString(hex.value);
        color2.value.set("alpha", alpha.value);
        setColorValue();
        return;
      }
      hex.value = "";
      emit("confirmChange", "", "");
    }
    function alphaChange() {
      color2.value.set("alpha", alpha.value);
      setColorValue();
    }
    function gradientColorChange(color22) {
      if (color22.startsWith("linear-gradient(")) {
        displayedColor.value = color22;
        colors.value = getGradientColorClass(color22);
        emit("inputChange", color22);
      } else {
        color22.value.fromString(color22);
        hex.value = color22.value.toHex();
      }
    }
    function confirmValue(color22) {
      isShow.value = false;
      if (selectType.value === 2) {
        displayedColor.value = color22;
        colors.value = getGradientColorClass(color22);
        saveColor2LocalStorage(color22);
        nextTick(() => emit("confirmChange", unref(displayedColor), unref(hex)));
      } else {
        setColorValue();
      }
    }
    function resetValue() {
      isShow.value = false;
      setValue();
      nextTick(() => emit("confirmChange", unref(displayedColor), unref(hex)));
    }
    function saveColor2LocalStorage(value) {
      let colorRecently = [];
      const addNew = (oldColors2, defaultColors, value2) => {
        if (oldColors2) {
          const colors2 = JSON.parse(oldColors2);
          if (colors2 && colors2.length > 0) {
            colorRecently.push(...colors2);
          } else {
            colorRecently.push(...defaultColors);
          }
        } else {
          colorRecently.push(...defaultColors);
        }
        const trimValue = value2.replaceAll(/\s*/g, "");
        for (let i = 0; i < colorRecently.length; i++) {
          if (colorRecently[i].replaceAll(/\s*/g, "") === trimValue) {
            colorRecently.splice(i, 1);
          }
        }
        colorRecently.unshift(value2);
      };
      if (selectType.value === 2) {
        const oldColors2 = localStorage.getItem(gradientColorStorage);
        addNew(oldColors2, recentlyGradientColors, value);
        colorRecently = colorRecently.slice(0, 14);
        localStorage.setItem(gradientColorStorage, JSON.stringify(colorRecently));
        return;
      }
      const oldColors = localStorage.getItem(colorStorage);
      addNew(oldColors, recentlyColors, value);
      colorRecently = colorRecently.slice(0, 20);
      localStorage.setItem(colorStorage, JSON.stringify(colorRecently));
    }
    function selectTypeChange(type) {
      selectType.value = type;
      if (type === 1) {
        changeColor();
        emit("inputChange", unref(displayedColor), unref(hex));
      }
    }
    const startEye = ref(false);
    function startEyeDropper() {
      startEye.value = true;
    }
    function endEyeDropper(val) {
      startEye.value = false;
      if (selectType.value === 2) {
        return;
      }
      confirmValue(val);
    }
    function clearColor() {
      color2.value.set("alpha", 100);
      emit("confirmChange", "", "");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        trigger: ["click"],
        open: isShow.value,
        onOpenChange: visibleChange,
        placement: "bottom",
        arrow: { pointAtCenter: true }
      }, {
        overlay: withCtx(() => [
          createVNode(_sfc_main$15, {
            color: color2.value,
            colors: colors.value,
            type: __props.type,
            "select-type": selectType.value,
            "is-show": isShow.value,
            "hide-cancel": __props.hideCancel,
            "hide-confirm": __props.hideConfirm,
            onPickColor: confirmValue,
            onRestColor: resetValue,
            onChangeGradientColor: gradientColorChange,
            onSelectTypeChange: selectTypeChange,
            onMouseleave: _cache[0] || (_cache[0] = ($event) => !startEye.value && visibleChange(false)),
            onStartEyeDropper: startEyeDropper,
            onEndEyeDropper: endEyeDropper
          }, null, 8, ["color", "colors", "type", "select-type", "is-show", "hide-cancel", "hide-confirm"])
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls)),
            onMouseenter: _cache[5] || (_cache[5] = () => mouseEnter.value = true),
            onMouseleave: _cache[6] || (_cache[6] = () => mouseEnter.value = false)
          }, [
            selectType.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_1$u, [
              createElementVNode("div", _hoisted_2$i, [
                createElementVNode("div", {
                  style: normalizeStyle(backStyle.value)
                }, null, 4)
              ]),
              mouseEnter.value ? (openBlock(), createBlock(unref(Icon), {
                key: 0,
                onClick: withModifiers(clearColor, ["stop"]),
                size: "14",
                class: "close-icon",
                icon: "ant-design:close-circle-filled"
              })) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", _hoisted_3$b, [
              createElementVNode("div", _hoisted_4$5, [
                createElementVNode("div", _hoisted_5$4, [
                  createElementVNode("div", {
                    style: normalizeStyle(backStyle.value)
                  }, null, 4)
                ]),
                createElementVNode("div", {
                  class: "color-input",
                  title: __props.title,
                  onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createVNode(unref(Input), {
                    placeholder: __props.placeholder,
                    value: hex.value,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => hex.value = $event),
                    onBlur: inputChange,
                    onPressEnter: inputChange,
                    bordered: false,
                    maxlength: 7
                  }, null, 8, ["placeholder", "value"]),
                  mouseEnter.value && !!hex.value ? (openBlock(), createBlock(unref(Icon), {
                    key: 0,
                    onClick: withModifiers(clearColor, ["stop"]),
                    size: "14",
                    class: "close-icon",
                    icon: "ant-design:close-circle-filled"
                  })) : createCommentVNode("", true)
                ], 8, _hoisted_6$1)
              ]),
              __props.showAlpha ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "color-input-percentage",
                onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["stop"]))
              }, [
                createVNode(unref(InputNumber), {
                  class: "percent-input",
                  bordered: false,
                  value: alpha.value,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => alpha.value = $event),
                  min: 0,
                  max: 100,
                  step: 1,
                  controls: false,
                  onBlur: alphaChange,
                  onPressEnter: alphaChange,
                  maxlength: 3
                }, {
                  prefix: withCtx(() => _cache[7] || (_cache[7] = [
                    createElementVNode("div", { class: "prefix" }, "A", -1)
                  ])),
                  _: 1
                }, 8, ["value"]),
                _cache[8] || (_cache[8] = createElementVNode("div", { style: { "user-select": "none" } }, "%", -1))
              ])) : createCommentVNode("", true)
            ]))
          ], 34)
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const MfishColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-3d0fe0b2"]]);
function withPrefix(loggerPrefix) {
  const prefix = `[DataV - ${loggerPrefix}]`;
  return {
    info(...msg) {
      console.log(`${prefix} ${msg.join(" ")}`);
    },
    warn(...msg) {
      console.warn(`${prefix} ${msg.join(" ")}`);
    },
    error(...msg) {
      console.error(`${prefix} ${msg.join(" ")}`);
    }
  };
}
const logger = withPrefix("useResize");
function observerDomResize(dom, callback) {
  const observer = new MutationObserver(callback);
  if (!dom) return;
  observer.observe(dom, {
    attributes: true,
    attributeFilter: ["class", "style"],
    attributeOldValue: true
  });
  return observer;
}
function updateDomSize(dom, target) {
  const { clientWidth = 0, clientHeight = 0 } = dom || {};
  if (!dom) {
    logger.warn("Failed to get dom node, component rendering may be abnormal!");
  } else if (!clientWidth || !clientHeight) {
    logger.warn("Component width or height is 0px, rendering abnormality may occur!");
  }
  target.width = clientWidth;
  target.height = clientHeight;
}
function getRefDom(ref2) {
  if (isElement(ref2)) {
    return ref2;
  }
  if (isElement(ref2.$el)) {
    return ref2.$el;
  }
  return null;
}
function useResize() {
  const domRef = ref();
  const domSizeEffectDisposer = [];
  const domSize = reactive({
    width: 0,
    height: 0
  });
  const handleRomSizeChange = () => {
    updateDomSize(domRef.value, domSize);
  };
  const debouncedDomSizeChangeHandler = debounce(handleRomSizeChange, 100);
  const autoBindRef = once((ref2) => {
    const dom = getRefDom(ref2);
    if (!dom) {
      logger.error("Bind Component Dom Ref Failed!");
      return;
    }
    domRef.value = dom;
  });
  onMounted(() => {
    handleRomSizeChange();
    const observer = observerDomResize(domRef.value, debouncedDomSizeChangeHandler);
    if (!observer) return;
    window.addEventListener("resize", debouncedDomSizeChangeHandler);
    domSizeEffectDisposer.push(
      () => {
        observer.disconnect();
      },
      () => {
        window.removeEventListener("resize", debouncedDomSizeChangeHandler);
      }
    );
  });
  onUnmounted(() => {
    domSizeEffectDisposer.forEach((disposer) => disposer());
  });
  return {
    domSize,
    autoBindRef,
    refreshLayoutSize: handleRomSizeChange
  };
}
const definePropType = (val) => val;
const calcTwoPointDistance = (pointA, pointB) => {
  const minusX = Math.abs(pointA[0] - pointB[0]);
  const minusY = Math.abs(pointA[1] - pointB[1]);
  return Math.hypot(minusX, minusY);
};
function mergeColor$1(defaultColors, colors = []) {
  return merge(defaultColors, colors);
}
function createBorderBoxCommonProps() {
  return {
    color: {
      type: definePropType(Array),
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  };
}
function mergeColor(defaultColors, colors = []) {
  return merge(defaultColors, colors);
}
const __STYLED_PLACEHOLDER__ = ".__STYLED__";
function StyledComponents(classNamePrefix) {
  let innerClassNamePrefix = classNamePrefix;
  const styleComponentRenderRef = {};
  const getRenderRefCount = (id) => {
    return styleComponentRenderRef[id] ?? 0;
  };
  const addRenderRef = (id) => {
    styleComponentRenderRef[id] = (styleComponentRenderRef[id] ?? 0) + 1;
  };
  const delRenderRef = (id) => {
    let willUpdateRefCount = styleComponentRenderRef[id] - 1;
    if (willUpdateRefCount <= 0) {
      willUpdateRefCount = 0;
    }
    styleComponentRenderRef[id] = willUpdateRefCount;
  };
  const setClassNamePrefix = (classNamePrefix2) => {
    innerClassNamePrefix = classNamePrefix2;
  };
  const getFullClassName = (className, dot = true) => {
    return `${dot ? "." : ""}${innerClassNamePrefix || ""}${className}`;
  };
  const getClassNameForBind = (className) => {
    return getFullClassName(className, false);
  };
  const createStyle = (style, className) => {
    const classNameWithPrefix = getFullClassName(className);
    const styleContent = `${__STYLED_PLACEHOLDER__} {${style.toString()}}`.replaceAll(__STYLED_PLACEHOLDER__, classNameWithPrefix);
    return styleContent;
  };
  function styled2(StyledComponent) {
    return (style) => {
      const styleEle = document.createElement("style");
      const appendStyle = (className) => {
        styleEle.innerHTML = createStyle(style, className);
        const header = document.querySelector("head");
        if (header) {
          header.append(styleEle);
        }
      };
      const removeStyle = () => styleEle.remove();
      return (className) => {
        const StyledComponentWithType = StyledComponent;
        const id = uniqueId("style");
        const StyledFC = /* @__PURE__ */ defineComponent({
          setup(props, {
            slots
          }) {
            onMounted(() => {
              if (getRenderRefCount(id) === 0) {
                appendStyle(className);
              }
              addRenderRef(id);
            });
            onUnmounted(() => {
              delRenderRef(id);
              if (getRenderRefCount(id) === 0) {
                removeStyle();
              }
            });
            const fullClassName = getFullClassName(className, false);
            return () => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              createVNode(StyledComponentWithType, mergeProps(props, {
                "class": fullClassName
              }), {
                default: () => {
                  var _a;
                  return [(_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)];
                }
              })
            );
          }
        });
        return StyledFC;
      };
    };
  }
  styled2.setClassNamePrefix = setClassNamePrefix;
  styled2.getClassNameForBind = getClassNameForBind;
  styled2.span = styled2((props, {
    slots
  }) => createVNode("span", props, [slots == null ? void 0 : slots.default()]));
  styled2.div = styled2((props, {
    slots
  }) => createVNode("div", props, [slots == null ? void 0 : slots.default()]));
  styled2.img = styled2((props) => createVNode("img", props, null));
  styled2.svg = styled2((props, {
    slots
  }) => createVNode("svg", props, [slots == null ? void 0 : slots.default()]));
  return styled2;
}
const defaultClassNamePrefix = "dv-";
const styled = StyledComponents(defaultClassNamePrefix);
styled.setClassNamePrefix;
const BorderBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`("border-box");
const BorderBoxContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`("border-box-content");
const defaultColor$C = ["#2e6099", "#7ce7fd"];
const border$1 = ["left-top", "right-top", "left-bottom", "right-bottom"];
const SvgBorder = styled.svg`
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
`("border");
const BorderBox1 = /* @__PURE__ */ defineComponent({
  name: "BorderBox1",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$C, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-1"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(SvgBorder, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `10, 27 10, ${height - 27} 13, ${height - 24} 13, ${height - 21} 24, ${height - 11} 38, ${height - 11}
                41, ${height - 8} 73, ${height - 8} 75, ${height - 10} 81, ${height - 10} 85, ${height - 6}
                ${width - 85}, ${height - 6} ${width - 81}, ${height - 10} ${width - 75}, ${height - 10}
                ${width - 73}, ${height - 8} ${width - 41}, ${height - 8} ${width - 38}, ${height - 11}
                ${width - 24}, ${height - 11} ${width - 13}, ${height - 21} ${width - 13}, ${height - 24}
                ${width - 10}, ${height - 27} ${width - 10}, 27 ${width - 13}, 25 ${width - 13}, 21
                ${width - 24}, 11 ${width - 38}, 11 ${width - 41}, 8 ${width - 73}, 8 ${width - 75}, 10
                ${width - 81}, 10 ${width - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`
          }, null)]
        }), border$1.map((borderItem) => createVNode(SvgBorder, {
          "key": borderItem,
          "width": "150",
          "height": "150",
          "class": borderItem
        }, {
          default: () => [createVNode("polygon", {
            "fill": mergedColor[0],
            "points": "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
          }, [createVNode("animate", {
            "attributeName": "fill",
            "values": `${mergedColor[0]};${mergedColor[1]};${mergedColor[0]}`,
            "dur": "0.5s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "fill": mergedColor[1],
            "points": "27.6,4.8 38.4,4.8 35.4,7.8 30.6,7.8"
          }, [createVNode("animate", {
            "attributeName": "fill",
            "values": `${mergedColor[1]};${mergedColor[0]};${mergedColor[1]}`,
            "dur": "0.5s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "fill": mergedColor[0],
            "points": "9,54 9,63 7.2,66 7.2,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
          }, [createVNode("animate", {
            "attributeName": "fill",
            "values": `${mergedColor[0]};${mergedColor[1]};transparent`,
            "dur": "1s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)])]
        })), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$B = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$k = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`("border-svg-container");
const BorderBox2 = /* @__PURE__ */ defineComponent({
  name: "BorderBox2",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$B, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-2"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$k, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[1],
            "points": `6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`
          }, null), createVNode("circle", {
            "fill": mergedColor[0],
            "cx": "11",
            "cy": "11",
            "r": "1"
          }, null), createVNode("circle", {
            "fill": mergedColor[0],
            "cx": width - 11,
            "cy": "11",
            "r": "1"
          }, null), createVNode("circle", {
            "fill": mergedColor[0],
            "cx": width - 11,
            "cy": height - 11,
            "r": "1"
          }, null), createVNode("circle", {
            "fill": mergedColor[0],
            "cx": "11",
            "cy": height - 11,
            "r": "1"
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$A = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$j = styled.svg`
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
`("border-svg-container");
const BorderBox3 = /* @__PURE__ */ defineComponent({
  name: "BorderBox3",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$A, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-3"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$j, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `23, 23 ${width - 24}, 23 ${width - 24}, ${height - 24} 23, ${height - 24}`
          }, null), createVNode("polyline", {
            "class": "stroke-width-3",
            "stroke": mergedColor[0],
            "points": `4, 4 ${width - 22} ,4 ${width - 22}, ${height - 22} 4, ${height - 22} 4, 4`
          }, null), createVNode("polyline", {
            "class": "stroke-width-1",
            "stroke": mergedColor[1],
            "points": `10, 10 ${width - 16}, 10 ${width - 16}, ${height - 16} 10, ${height - 16} 10, 10`
          }, null), createVNode("polyline", {
            "class": "stroke-width-1",
            "stroke": mergedColor[1],
            "points": `16, 16 ${width - 10}, 16 ${width - 10}, ${height - 10} 16, ${height - 10} 16, 16`
          }, null), createVNode("polyline", {
            "class": "stroke-width-1",
            "stroke": mergedColor[1],
            "points": `22, 22 ${width - 4}, 22 ${width - 4}, ${height - 4} 22, ${height - 4} 22, 22`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$z = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$i = styled.svg`
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
`("border-svg-container");
const borderBox4Props = () => ({
  ...createBorderBoxCommonProps(),
  reverse: {
    type: Boolean,
    default: false
  }
});
const BorderBox4 = /* @__PURE__ */ defineComponent({
  name: "BorderBox4",
  props: borderBox4Props(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor,
        reverse
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$z, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-4"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$i, {
          "class": reverse ? "reverse" : "",
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "stroke": mergedColor[0],
            "points": `145, ${height - 5} 40, ${height - 5} 10, ${height - 35} 10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[1],
            "class": "stroke-width1",
            "points": `245, ${height - 1} 36, ${height - 1} 14, ${height - 23} 14, ${height - 100}`
          }, null), createVNode("polyline", {
            "class": "stroke-width3",
            "stroke": mergedColor[0],
            "points": `7, ${height - 40} 7, ${height - 75}`
          }, null), createVNode("polyline", {
            "class": "stroke-width3",
            "stroke": mergedColor[0],
            "points": `28, 24 13, 41 13, 64`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "stroke": mergedColor[0],
            "points": `5, 45 5, 140`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "stroke": mergedColor[1],
            "points": `14, 75 14, 180`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "stroke": mergedColor[1],
            "points": `55, 11 147, 11 167, 26 250, 26`
          }, null), createVNode("polyline", {
            "class": "stroke-width3",
            "stroke": mergedColor[1],
            "points": `158, 5 173, 16`
          }, null), createVNode("polyline", {
            "class": "stroke-width3",
            "style": {
              strokeDasharray: "100 250"
            },
            "stroke": mergedColor[0],
            "points": `200, 17 ${width - 10}, 17`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "style": {
              strokeDasharray: "80 270"
            },
            "stroke": mergedColor[1],
            "points": `385, 17 ${width - 10}, 17`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$y = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$h = styled.svg`
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
`("border-svg-container");
const borderBox5Props = () => ({
  ...createBorderBoxCommonProps(),
  reverse: {
    type: Boolean,
    default: false
  }
});
const BorderBox5 = /* @__PURE__ */ defineComponent({
  name: "BorderBox5",
  props: borderBox5Props(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor,
        reverse
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$y, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-5"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$h, {
          "class": reverse ? "reverse" : "",
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `
                  10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "stroke": mergedColor[0],
            "points": `8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
                  ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`
          }, null), createVNode("polyline", {
            "class": "stroke-width1",
            "stroke": mergedColor[1],
            "points": `3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
                  ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`
          }, null), createVNode("polyline", {
            "class": "stroke-width5",
            "stroke": mergedColor[1],
            "points": `50, 13 ${width - 35}, 13`
          }, null), createVNode("polyline", {
            "class": "stroke-width2",
            "stroke": mergedColor[1],
            "points": `15, 20 ${width - 35}, 20`
          }, null), createVNode("polyline", {
            "class": "stroke-width2",
            "stroke": mergedColor[1],
            "points": `15, ${height - 20} ${width - 110}, ${height - 20}`
          }, null), createVNode("polyline", {
            "class": "stroke-width5",
            "stroke": mergedColor[1],
            "points": `15, ${height - 13} ${width - 110}, ${height - 13}`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$x = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$g = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`("border-svg-container");
const BorderBox6 = /* @__PURE__ */ defineComponent({
  name: "BorderBox6",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$x, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-6"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$g, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `
              9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}`
          }, null), createVNode("circle", {
            "fill": mergedColor[1],
            "cx": "5",
            "cy": "5",
            "r": "2"
          }, null), createVNode("circle", {
            "fill": mergedColor[1],
            "cx": width - 5,
            "cy": "5",
            "r": "2"
          }, null), createVNode("circle", {
            "fill": mergedColor[1],
            "cx": width - 5,
            "cy": height - 5,
            "r": "2"
          }, null), createVNode("circle", {
            "fill": mergedColor[1],
            "cx": "5",
            "cy": height - 5,
            "r": "2"
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `10, 4 ${width - 10}, 4`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `10, ${height - 4} ${width - 10}, ${height - 4}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `5, 70 5, ${height - 70}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `${width - 5}, 70 ${width - 5}, ${height - 70}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `3, 10, 3, 50`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `7, 30 7, 80`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `${width - 3}, 10 ${width - 3}, 50`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `${width - 7}, 30 ${width - 7}, 80`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `3, ${height - 10} 3, ${height - 50}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `7, ${height - 30} 7, ${height - 80}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "points": `${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$w = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$f = styled.svg`
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
`("border-svg-container");
const BorderBox7 = /* @__PURE__ */ defineComponent({
  name: "BorderBox7",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$w, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-7"),
        "ref": autoBindRef,
        "style": {
          boxShadow: `inset 0 0 40px ${mergedColor[0]}`,
          border: `1px solid ${mergedColor[0]}`,
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$f, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polyline", {
            "class": "stroke-width2",
            "stroke": mergedColor[0],
            "points": `0, 25 0, 0 25, 0`
          }, null), createVNode("polyline", {
            "class": "stroke-width2",
            "stroke": mergedColor[0],
            "points": `${width - 25}, 0 ${width}, 0 ${width}, 25`
          }, null), createVNode("polyline", {
            "class": "stroke-width2",
            "stroke": mergedColor[0],
            "points": `${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`
          }, null), createVNode("polyline", {
            "class": "stroke-width2",
            "stroke": mergedColor[0],
            "points": `0, ${height - 25} 0, ${height} 25, ${height}`
          }, null), createVNode("polyline", {
            "class": "stroke-width5",
            "stroke": mergedColor[1],
            "points": `0, 10 0, 0 10, 0`
          }, null), createVNode("polyline", {
            "class": "stroke-width5",
            "stroke": mergedColor[1],
            "points": `${width - 10}, 0 ${width}, 0 ${width}, 10`
          }, null), createVNode("polyline", {
            "class": "stroke-width5",
            "stroke": mergedColor[1],
            "points": `${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`
          }, null), createVNode("polyline", {
            "class": "stroke-width5",
            "stroke": mergedColor[1],
            "points": `0, ${height - 10} 0, ${height} 10, ${height}`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
function useUuid() {
  return readonly(reactive({ id: uniqueId("datav_uuid") }));
}
const defaultColor$v = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$e = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`("border-svg-container");
const borderBox8Props = () => ({
  ...createBorderBoxCommonProps(),
  duration: {
    type: Number,
    default: 3
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
const BorderBox8 = /* @__PURE__ */ defineComponent({
  name: "BorderBox8",
  props: borderBox8Props(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    return () => {
      const {
        color: color2,
        backgroundColor,
        duration,
        reverse
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$v, color2);
      const pathId = `border-box-8-path-${uuid.id}`;
      const gradientId = `border-box-8-gradient-${uuid.id}`;
      const maskId = `border-box-8-mask-${uuid.id}`;
      const pathD = reverse ? `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5` : `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`;
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-8"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$e, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("defs", null, [createVNode("path", {
            "id": pathId,
            "d": pathD,
            "fill": "transparent"
          }, null), createVNode("radialGradient", {
            "id": gradientId,
            "cx": "50%",
            "cy": "50%",
            "r": "50%"
          }, [createVNode("stop", {
            "offset": "0%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null), createVNode("stop", {
            "offset": "100%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null)]), createVNode("mask", {
            "id": maskId
          }, [createVNode("circle", {
            "cx": "0",
            "cy": "0",
            "r": "150",
            "fill": `url(#${gradientId})`
          }, [createVNode("animateMotion", {
            "dur": `${duration}s`,
            "path": pathD,
            "rotate": "auto",
            "repeatCount": "indefinite"
          }, null)])])]), createVNode("polygon", {
            "fill": backgroundColor,
            "points": `5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`
          }, null), createVNode("use", {
            "stroke": mergedColor[0],
            "stroke-width": "1",
            "xlink:href": `#${pathId}`
          }, null), createVNode("use", {
            "stroke": mergedColor[1],
            "stroke-width": "3",
            "xlink:href": `#${pathId}`,
            "mask": `url(#${maskId})`
          }, [createVNode("animate", {
            "attributeName": "stroke-dasharray",
            "from": `0, ${length}`,
            "to": `${length}, 0`,
            "dur": `${duration}s`,
            "repeatCount": "indefinite"
          }, null)])]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$u = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$d = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`("border-svg-container");
const BorderBox9 = /* @__PURE__ */ defineComponent({
  name: "BorderBox9",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$u, color2);
      const gradientId = `border-box-9-gradient-${uuid.id}`;
      const maskId = `border-box-9-mask-${uuid.id}`;
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-9"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$d, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("defs", null, [createVNode("linearGradient", {
            "id": gradientId,
            "x1": "0%",
            "y1": "0%",
            "x2": "100%",
            "y2": "100%"
          }, [createVNode("animate", {
            "attributeName": "x1",
            "values": "0%;100%;0%",
            "dur": "10s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null), createVNode("animate", {
            "attributeName": "x2",
            "values": "100%;0%;100%",
            "dur": "10s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null), createVNode("stop", {
            "offset": "0%",
            "stop-color": mergedColor[0]
          }, [createVNode("animate", {
            "attributeName": "stop-color",
            "values": `${mergedColor[0]};${mergedColor[1]};${mergedColor[0]}`,
            "dur": "10s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("stop", {
            "offset": "100%",
            "stop-color": mergedColor[1]
          }, [createVNode("animate", {
            "attributeName": "stop-color",
            "values": `${mergedColor[1]};${mergedColor[0]};${mergedColor[1]}`,
            "dur": "10s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)])]), createVNode("mask", {
            "id": maskId
          }, [createVNode("polyline", {
            "stroke": "#fff",
            "stroke-width": "3",
            "fill": "transparent",
            "points": `8, ${height * 0.4} 8, 3, ${width * 0.4 + 7}, 3`
          }, null), createVNode("polyline", {
            "fill": "#fff",
            "points": `
                      8, ${height * 0.15} 8, 3, ${width * 0.1 + 7}, 3
                      ${width * 0.1}, 8 14, 8 14, ${height * 0.15 - 7}
                    `
          }, null), createVNode("polyline", {
            "stroke": "#fff",
            "stroke-width": "3",
            "fill": "transparent",
            "points": `${width * 0.5}, 3 ${width - 3}, 3, ${width - 3}, ${height * 0.25}`
          }, null), createVNode("polyline", {
            "fill": "#fff",
            "points": `
                      ${width * 0.52}, 3 ${width * 0.58}, 3
                      ${width * 0.58 - 7}, 9 ${width * 0.52 + 7}, 9
                    `
          }, null), createVNode("polyline", {
            "fill": "#fff",
            "points": `
                      ${width * 0.9}, 3 ${width - 3}, 3 ${width - 3}, ${height * 0.1}
                      ${width - 9}, ${height * 0.1 - 7} ${width - 9}, 9 ${width * 0.9 + 7}, 9
                    `
          }, null), createVNode("polyline", {
            "stroke": "#fff",
            "stroke-width": "3",
            "fill": "transparent",
            "points": `8, ${height * 0.5} 8, ${height - 3} ${width * 0.3 + 7}, ${height - 3}`
          }, null), createVNode("polyline", {
            "fill": "#fff",
            "points": `
                      8, ${height * 0.55} 8, ${height * 0.7}
                      2, ${height * 0.7 - 7} 2, ${height * 0.55 + 7}
                    `
          }, null), createVNode("polyline", {
            "stroke": "#fff",
            "stroke-width": "3",
            "fill": "transparent",
            "points": `${width * 0.35}, ${height - 3} ${width - 3}, ${height - 3} ${width - 3}, ${height * 0.35}`
          }, null), createVNode("polyline", {
            "fill": "#fff",
            "points": `
                      ${width * 0.92}, ${height - 3} ${width - 3}, ${height - 3} ${width - 3}, ${height * 0.8} ${width - 9}, ${height * 0.8 + 7} ${width - 9}, ${height - 9} ${width * 0.92 + 7}, ${height - 9}`
          }, null)])]), createVNode("polygon", {
            "fill": backgroundColor,
            "points": `
                  15, 9 ${width * 0.1 + 1}, 9 ${width * 0.1 + 4}, 6 ${width * 0.52 + 2}, 6
                  ${width * 0.52 + 6}, 10 ${width * 0.58 - 7}, 10 ${width * 0.58 - 2}, 6
                  ${width * 0.9 + 2}, 6 ${width * 0.9 + 6}, 10 ${width - 10}, 10 ${width - 10}, ${height * 0.1 - 6}
                  ${width - 6}, ${height * 0.1 - 1} ${width - 6}, ${height * 0.8 + 1} ${width - 10}, ${height * 0.8 + 6}
                  ${width - 10}, ${height - 10} ${width * 0.92 + 7}, ${height - 10}  ${width * 0.92 + 2}, ${height - 6}
                  11, ${height - 6} 11, ${height * 0.15 - 2} 15, ${height * 0.15 - 7}
                `
          }, null), createVNode("rect", {
            "x": "0",
            "y": "0",
            "width": width,
            "height": height,
            "fill": `url(#${gradientId})`,
            "mask": `url(#${maskId})`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$t = ["#2e6099", "#7ce7fd"];
const border = ["left-top", "right-top", "left-bottom", "right-bottom"];
const BorderSvgContainer$c = styled.svg`
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
`("border-svg-container");
const BorderBox10 = /* @__PURE__ */ defineComponent({
  name: "BorderBox10",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$t, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-10"),
        "ref": autoBindRef,
        "style": {
          boxShadow: `inset 0 0 25px 3px ${mergedColor[0]}`
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$c, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("polygon", {
            "fill": backgroundColor,
            "points": `
                  4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
                  4, ${height} 0, ${height - 4} 0, 4
                `
          }, null)]
        }), border.map((item) => {
          return createVNode(BorderSvgContainer$c, {
            "width": "150px",
            "height": "150px",
            "key": item,
            "class": item
          }, {
            default: () => [createVNode("polygon", {
              "fill": mergedColor[1],
              "points": "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
            }, null)]
          });
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$s = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$b = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`("border-svg-container");
const createBorderBox11Props = () => ({
  ...createBorderBoxCommonProps(),
  titleWidth: {
    type: Number,
    default: 250
  },
  title: {
    type: String,
    default: ""
  }
});
const BorderBox11 = /* @__PURE__ */ defineComponent({
  name: "BorderBox11",
  props: createBorderBox11Props(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    return () => {
      const {
        color: color2,
        backgroundColor,
        titleWidth,
        title
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$s, color2);
      const filterId = `border-box-11-filterId-${uuid}`;
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-11"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$b, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("defs", null, [createVNode("filter", {
            "id": filterId,
            "height": "150%",
            "width": "150%",
            "x": "-25%",
            "y": "-25%"
          }, [createVNode("feMorphology", {
            "operator": "dilate",
            "radius": "2",
            "in": "SourceAlpha",
            "result": "thicken"
          }, null), createVNode("feGaussianBlur", {
            "in": "thicken",
            "stdDeviation": "3",
            "result": "blurred"
          }, null), createVNode("feFlood", {
            "flood-color": mergedColor[1],
            "result": "glowColor"
          }, null), createVNode("feComposite", {
            "in": "glowColor",
            "in2": "blurred",
            "operator": "in",
            "result": "softGlowColored"
          }, null), createVNode("feMerge", null, [createVNode("feMergeNode", {
            "in": "softGlowColored"
          }, null), createVNode("feMergeNode", {
            "in": "SourceGraphic"
          }, null)])])]), createVNode("polygon", {
            "fill": backgroundColor,
            "points": `
                  20, 32 ${width * 0.5 - titleWidth / 2}, 32 ${width * 0.5 - titleWidth / 2 + 20}, 53
                  ${width * 0.5 + titleWidth / 2 - 20}, 53 ${width * 0.5 + titleWidth / 2}, 32
                  ${width - 20}, 32 ${width - 8}, 48 ${width - 8}, ${height - 25} ${width - 20}, ${height - 8}
                  20, ${height - 8} 8, ${height - 25} 8, 50
                `
          }, null), createVNode("polyline", {
            "stroke": mergedColor[0],
            "filter": `url(#${filterId})`,
            "points": `
                  ${(width - titleWidth) / 2}, 30
                  20, 30 7, 50 7, ${50 + (height - 167) / 2}
                  13, ${55 + (height - 167) / 2} 13, ${135 + (height - 167) / 2}
                  7, ${140 + (height - 167) / 2} 7, ${height - 27}
                  20, ${height - 7} ${width - 20}, ${height - 7} ${width - 7}, ${height - 27}
                  ${width - 7}, ${140 + (height - 167) / 2} ${width - 13}, ${135 + (height - 167) / 2}
                  ${width - 13}, ${55 + (height - 167) / 2} ${width - 7}, ${50 + (height - 167) / 2}
                  ${width - 7}, 50 ${width - 20}, 30 ${(width + titleWidth) / 2}, 30
                  ${(width + titleWidth) / 2 - 20}, 7 ${(width - titleWidth) / 2 + 20}, 7
                  ${(width - titleWidth) / 2}, 30 ${(width - titleWidth) / 2 + 20}, 52
                  ${(width + titleWidth) / 2 - 20}, 52 ${(width + titleWidth) / 2}, 30
                `
          }, null), createVNode("polygon", {
            "stroke": mergedColor[0],
            "fill": "transparent",
            "points": `
                  ${(width + titleWidth) / 2 - 5}, 30 ${(width + titleWidth) / 2 - 21}, 11
                  ${(width + titleWidth) / 2 - 27}, 11 ${(width + titleWidth) / 2 - 8}, 34
                `
          }, null), createVNode("polygon", {
            "stroke": mergedColor[0],
            "fill": "transparent",
            "points": `
                  ${(width - titleWidth) / 2 + 5}, 30 ${(width - titleWidth) / 2 + 22}, 49
                  ${(width - titleWidth) / 2 + 28}, 49 ${(width - titleWidth) / 2 + 8}, 26
                `
          }, null), createVNode("polygon", {
            "stroke": mergedColor[0],
            "fill": fade(mergedColor[1] || defaultColor$s[1], 30),
            "filter": `url(#${filterId})`,
            "points": `
                  ${(width + titleWidth) / 2 - 11}, 37 ${(width + titleWidth) / 2 - 32}, 11
                  ${(width - titleWidth) / 2 + 23}, 11 ${(width - titleWidth) / 2 + 11}, 23
                  ${(width - titleWidth) / 2 + 33}, 49 ${(width + titleWidth) / 2 - 22}, 49
                `
          }, null), createVNode("polygon", {
            "filter": `url(#${filterId})`,
            "fill": mergedColor[0],
            "opacity": "1",
            "points": `
                  ${(width - titleWidth) / 2 - 10}, 37 ${(width - titleWidth) / 2 - 31}, 37
                  ${(width - titleWidth) / 2 - 25}, 46 ${(width - titleWidth) / 2 - 4}, 46
                `
          }, [createVNode("animate", {
            "attributeName": "opacity",
            "values": "1;0.7;1",
            "dur": "2s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "filter": `url(#${filterId})`,
            "fill": mergedColor[0],
            "opacity": "0.7",
            "points": `
                  ${(width - titleWidth) / 2 - 40}, 37 ${(width - titleWidth) / 2 - 61}, 37
                  ${(width - titleWidth) / 2 - 55}, 46 ${(width - titleWidth) / 2 - 34}, 46
                `
          }, [createVNode("animate", {
            "attributeName": "opacity",
            "values": "0.7;0.4;0.7",
            "dur": "2s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "filter": `url(#${filterId})`,
            "fill": mergedColor[0],
            "opacity": "0.5",
            "points": `
                  ${(width - titleWidth) / 2 - 70}, 37 ${(width - titleWidth) / 2 - 91}, 37
                  ${(width - titleWidth) / 2 - 85}, 46 ${(width - titleWidth) / 2 - 64}, 46
                `
          }, [createVNode("animate", {
            "attributeName": "opacity",
            "values": "0.5;0.2;0.5",
            "dur": "2s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "filter": `url(#${filterId})`,
            "fill": mergedColor[0],
            "opacity": "1",
            "points": `
                  ${(width + titleWidth) / 2 + 30}, 37 ${(width + titleWidth) / 2 + 9}, 37
                  ${(width + titleWidth) / 2 + 3}, 46 ${(width + titleWidth) / 2 + 24}, 46
                `
          }, [createVNode("animate", {
            "attributeName": "opacity",
            "values": "1;0.7;1",
            "dur": "2s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "filter": `url(#${filterId})`,
            "fill": mergedColor[0],
            "opacity": "0.7",
            "points": `
                  ${(width + titleWidth) / 2 + 60}, 37 ${(width + titleWidth) / 2 + 39}, 37
                  ${(width + titleWidth) / 2 + 33}, 46 ${(width + titleWidth) / 2 + 54}, 46
                `
          }, [createVNode("animate", {
            "attributeName": "opacity",
            "values": "0.7;0.4;0.7",
            "dur": "2s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("polygon", {
            "filter": `url(#${filterId})`,
            "fill": mergedColor[0],
            "opacity": "0.5",
            "points": `
                  ${(width + titleWidth) / 2 + 90}, 37 ${(width + titleWidth) / 2 + 69}, 37
                  ${(width + titleWidth) / 2 + 63}, 46 ${(width + titleWidth) / 2 + 84}, 46
                `
          }, [createVNode("animate", {
            "attributeName": "opacity",
            "values": "0.5;0.2;0.5",
            "dur": "2s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("text", {
            "class": "dv-border-box-11-title",
            "x": `${width / 2}`,
            "y": "32",
            "fill": "#fff",
            "font-size": "18",
            "text-anchor": "middle",
            "dominant-baseline": "middle"
          }, [title]), createVNode("polygon", {
            "fill": mergedColor[0],
            "filter": `url(#${filterId})`,
            "points": `
                  7, ${53 + (height - 167) / 2} 11, ${57 + (height - 167) / 2}
                  11, ${133 + (height - 167) / 2} 7, ${137 + (height - 167) / 2}
                `
          }, null), createVNode("polygon", {
            "fill": mergedColor[0],
            "filter": `url(#${filterId})`,
            "points": `
                  ${width - 7}, ${53 + (height - 167) / 2} ${width - 11}, ${57 + (height - 167) / 2}
                  ${width - 11}, ${133 + (height - 167) / 2} ${width - 7}, ${137 + (height - 167) / 2}
                `
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$r = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$a = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`("border-svg-container");
const BorderBox12 = /* @__PURE__ */ defineComponent({
  name: "BorderBox12",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$r, color2);
      const filterId = `border-box-12-filterId-${uuid}`;
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-12"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$a, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("defs", null, [createVNode("filter", {
            "id": filterId,
            "height": "150%",
            "width": "150%",
            "x": "-25%",
            "y": "-25%"
          }, [createVNode("feMorphology", {
            "operator": "dilate",
            "radius": "1",
            "in": "SourceAlpha",
            "result": "thicken"
          }, null), createVNode("feGaussianBlur", {
            "in": "thicken",
            "stdDeviation": "2",
            "result": "blurred"
          }, null), createVNode("feFlood", {
            "flood-color": fade(mergedColor[1] || defaultColor$r[1], 70),
            "result": "glowColor"
          }, [createVNode("animate", {
            "attributeName": "flood-color",
            "values": `
                        ${fade(mergedColor[1] || defaultColor$r[1], 70)};
                        ${fade(mergedColor[1] || defaultColor$r[1], 30)};
                        ${fade(mergedColor[1] || defaultColor$r[1], 70)};
                      `,
            "dur": "3s",
            "begin": "0s",
            "repeatCount": "indefinite"
          }, null)]), createVNode("feComposite", {
            "in": "glowColor",
            "in2": "blurred",
            "operator": "in",
            "result": "softGlowColored"
          }, null), createVNode("feMerge", null, [createVNode("feMergeNode", {
            "in": "softGlowColored"
          }, null), createVNode("feMergeNode", {
            "in": "SourceGraphic"
          }, null)])])]), width && height && createVNode("path", {
            "fill": backgroundColor,
            "stroke-width": "2",
            "stroke": mergedColor[0],
            "d": `
                    M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15
                    L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${width - 15} ${height - 5}
                    L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15
                    Q 5 5 15 5
                  `
          }, null), createVNode("path", {
            "stroke-width": "2",
            "fill": "transparent",
            "stroke-linecap": "round",
            "filter": `url(#${filterId})`,
            "stroke": mergedColor[1],
            "d": `M 20 5 L 15 5 Q 5 5 5 15 L 5 20`
          }, null), createVNode("path", {
            "stroke-width": "2",
            "fill": "transparent",
            "stroke-linecap": "round",
            "filter": `url(#${filterId})`,
            "stroke": mergedColor[1],
            "d": `M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${width - 5} 15 L ${width - 5} 20`
          }, null), createVNode("path", {
            "stroke-width": "2",
            "fill": "transparent",
            "stroke-linecap": "round",
            "filter": `url(#${filterId})`,
            "stroke": mergedColor[1],
            "d": `
                  M ${width - 20} ${height - 5} L ${width - 15} ${height - 5}
                  Q ${width - 5} ${height - 5} ${width - 5} ${height - 15}
                  L ${width - 5} ${height - 20}
                `
          }, null), createVNode("path", {
            "stroke-width": "2",
            "fill": "transparent",
            "stroke-linecap": "round",
            "filter": `url(#${filterId})`,
            "stroke": mergedColor[1],
            "d": `
                  M 20 ${height - 5} L 15 ${height - 5}
                  Q 5 ${height - 5} 5 ${height - 15}
                  L 5 ${height - 20}
                `
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$q = ["#2e6099", "#7ce7fd"];
const BorderSvgContainer$9 = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`("border-svg-container");
const BorderBox13 = /* @__PURE__ */ defineComponent({
  name: "BorderBox13",
  props: createBorderBoxCommonProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        backgroundColor
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$q, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-13"),
        "ref": autoBindRef
      }, {
        default: () => [createVNode(BorderSvgContainer$9, {
          "width": width,
          "height": height
        }, {
          default: () => [createVNode("path", {
            "fill": backgroundColor,
            "stroke": mergedColor[0],
            "d": `
                  M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                  L ${width - 20} 10 L ${width - 5} 25
                  L ${width - 5} ${height - 5} L 20 ${height - 5}
                  L 5 ${height - 20} L 5 20
                `
          }, null), createVNode("path", {
            "fill": "transparent",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-dasharray": "10, 5",
            "stroke": mergedColor[0],
            "d": `M 16 9 L 61 9`
          }, null), createVNode("path", {
            "fill": "transparent",
            "stroke": mergedColor[1],
            "d": `M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`
          }, null), createVNode("path", {
            "fill": "transparent",
            "stroke": mergedColor[1],
            "d": `M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${height - 5}`
          }, null)]
        }), createVNode(BorderBoxContent, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$p = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$8 = styled.svg`
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
`("border-svg-container");
const BorderBox14 = /* @__PURE__ */ defineComponent({
  name: "BorderBox14",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$p, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-14"),
        "ref": autoBindRef,
        "style": {
          boxShadow: `inset 0 0 20px  ${mergedColor[0]}`,
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$8, {
          "width": width,
          "height": height,
          "viewBox": "0 0 550 381",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框14")]), createVNode("defs", null, [createVNode("polygon", {
            "id": "path-2",
            "points": "5 3 544 3 544 378 5 378"
          }, null)]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-108.000000, -173.000000)"
          }, [createVNode("g", {
            "id": "Group-17",
            "transform": "translate(108.000000, 173.000000)"
          }, [createVNode("g", {
            "id": "Rectangle-10",
            "opacity": "0.1"
          }, [createVNode("path", {
            "stroke": mergedColor[0],
            "stroke-width": "1",
            "d": "M5.5,3.5 L543.5,3.5 L543.5,377.5 L5.5,377.5 L5.5,3.5 Z",
            "stroke-linejoin": "square"
          }, null)]), createVNode("polygon", {
            "id": "Path-13",
            "fill": mergedColor[1],
            "points": "1.69747084 1.55770317 48.1653341 1.55770317 49.6381868 0 85.070083 0 91 3.91797929 4.80121125 3.91797929 4.80121125 63 0 55.8055067 0 26.0045497 1.69747084 26.0045497"
          }, null), createVNode("polygon", {
            "id": "Path-14",
            "fill": mergedColor[1],
            "points": "4.55395461 331 1.30691372 335.620966 1.30691372 347.342132 0 348.647402 0 363.134729 1.30691372 364.669539 1.30691372 381 31.1562076 381 34 378.600521 4.55395461 378.600521"
          }, null), createVNode("polygon", {
            "id": "Path-15",
            "fill": mergedColor[1],
            "points": "544.350896 317 550 325.634084 550 354.03362 547.175448 354.03362 547.175448 378.875648 501.587573 378.875648 501.587573 381 464.947248 381 461 375.858015 544.350896 375.858015"
          }, null), createVNode("polygon", {
            "id": "Path-16",
            "fill": mergedColor[1],
            "points": "515 3.10539542 518.151118 0 548.589245 0 548.589245 15.7681449 550 17.8992609 550 33.2427199 548.589245 35.2815965 548.589245 45.7325203 544.109167 52 544.109167 3.10539542"
          }, null)])])])]
        })]
      });
    };
  }
});
const defaultColor$o = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$7 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox15 = /* @__PURE__ */ defineComponent({
  name: "BorderBox15",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$o, color2);
      const linearGradient1 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-15"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$7, {
          "width": width,
          "height": height,
          "viewBox": "0 0 550 380",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框15")]), createVNode("defs", null, [createVNode("radialGradient", {
            "cx": "50%",
            "cy": "50%",
            "fx": "50%",
            "fy": "50%",
            "r": "76.3176911%",
            "gradientTransform": "translate(0.500000,0.500000),scale(0.690909,1.000000),rotate(90.000000),scale(1.000000,2.361703),translate(-0.500000,-0.500000)",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": "#000001",
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": "#06476F",
            "stop-opacity": "0.126024366",
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-685.000000, -174.000000)"
          }, [createVNode("g", {
            "id": "框-2",
            "transform": "translate(685.000000, 174.000000)"
          }, [createVNode("rect", {
            "id": "Combined-Shape",
            "stroke": mergedColor[0],
            "stroke-width": "2",
            "fill": `url(#${linearGradient1})`,
            "x": "0.63525",
            "y": "0.63525",
            "width": "548.7295",
            "height": "378.7295"
          }, null), createVNode("polygon", {
            "id": "Rectangle-2",
            "fill": mergedColor[1],
            "points": "0 0 25 0 25 2 2 2 2 24 0 24"
          }, null), createVNode("g", {
            "id": "Group",
            "transform": "translate(12.500000, 368.000000) scale(1, -1) translate(-12.500000, -368.000000) translate(0.000000, 356.000000)",
            "fill": mergedColor[1]
          }, [createVNode("polygon", {
            "id": "Rectangle-2",
            "points": "0 0 25 0 25 2 2 2 2 24 0 24"
          }, null)]), createVNode("g", {
            "id": "Group",
            "transform": "translate(537.500000, 368.000000) scale(-1, -1) translate(-537.500000, -368.000000) translate(525.000000, 356.000000)",
            "fill": mergedColor[1]
          }, [createVNode("polygon", {
            "id": "Rectangle-2",
            "points": "0 0 25 0 25 2 2 2 2 24 0 24"
          }, null)]), createVNode("g", {
            "id": "Group",
            "transform": "translate(537.500000, 12.000000) scale(-1, 1) translate(-537.500000, -12.000000) translate(525.000000, 0.000000)",
            "fill": mergedColor[1]
          }, [createVNode("polygon", {
            "id": "Rectangle-2",
            "points": "0 0 25 0 25 2 2 2 2 24 0 24"
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor$n = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$6 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox16 = /* @__PURE__ */ defineComponent({
  name: "BorderBox16",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$n, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-16"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$6, {
          "width": width,
          "height": height,
          "viewBox": "0 0 551 384",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框16")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "42.3038368%",
            "y1": "100%",
            "x2": "42.3038368%",
            "y2": "0%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.842264669",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.07",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "100%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "0%",
            "y1": "40.7068755%",
            "x2": "100%",
            "y2": "40.7068755%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.1",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "52.4276684%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.1",
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "3",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-1259.000000, -172.000000)",
            "fill-rule": "nonzero"
          }, [createVNode("g", {
            "id": "框3",
            "transform": "translate(1259.000000, 173.000000)"
          }, [createVNode("polygon", {
            "id": "1",
            "fill-opacity": "0.1",
            "fill": `url(#${linearGradient1})`,
            "points": "1 0 146.792531 0 151.348548 6.15549598 399.651452 6.15549598 404.207469 0 550 0 550 381 1 381"
          }, null), createVNode("g", {
            "id": "分组1"
          }, [createVNode("polyline", {
            "id": "矩形-copy-5",
            "stroke": mergedColor[0],
            "opacity": "0.200000003",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "points": "330.144628 9.10671937 399.588843 9.10671937 404.142562 5.76297903e-14 549.86157 5.91463637e-14 549.86157 192.379447"
          }, null), createVNode("line", {
            "x1": "549.86157",
            "y1": "166.726695",
            "x2": "549.86157",
            "y2": "56.3879294",
            "id": "路径-9-copy-2",
            "stroke": `url(#${linearGradient2})`,
            "opacity": "0.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null), createVNode("line", {
            "x1": "403.004132",
            "y1": "2.27667984",
            "x2": "399.588843",
            "y2": "9.10671937",
            "id": "路径-10-copy-2",
            "stroke": mergedColor[0],
            "opacity": "0.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null), createVNode("polyline", {
            "id": "矩形-copy-4",
            "stroke": mergedColor[0],
            "opacity": "0.200000003",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "transform": "translate(110.996901, 96.263931) scale(-1, 1) translate(-110.996901, -96.263931) ",
            "points": "1.13842975 9.10671937 70.5826446 9.10671937 75.1363636 5.76297903e-14 220.855372 5.91463637e-14 220.855372 192.527861"
          }, null), createVNode("path", {
            "d": "M1.13842975,166.726695 L1.13842975,56.3879294 L1.13842975,166.726695 Z",
            "id": "路径-9-copy",
            "stroke": `url(#${linearGradient2})`,
            "opacity": "0.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null), createVNode("polyline", {
            "id": "矩形-copy-3",
            "stroke": mergedColor[0],
            "opacity": "0.400000006",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "transform": "translate(475.136364, 331.517787) scale(1, -1) translate(-475.136364, -331.517787) ",
            "points": "400 282 550.272727 282 550.272727 381.035573"
          }, null), createVNode("polyline", {
            "id": "矩形-copy-14",
            "stroke": mergedColor[0],
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "transform": "translate(539.245868, 371.245059) scale(1, -1) translate(-539.245868, -371.245059) ",
            "points": "529 361 549.491736 361 549.491736 381.490119"
          }, null), createVNode("polyline", {
            "id": "矩形-copy",
            "stroke": mergedColor[0],
            "opacity": "0.400000006",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "transform": "translate(76.136364, 331.517787) scale(-1, -1) translate(-76.136364, -331.517787) ",
            "points": "1 282 151.272727 282 151.272727 381.035573"
          }, null), createVNode("polyline", {
            "id": "矩形-copy-12",
            "stroke": mergedColor[0],
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "transform": "translate(11.245868, 371.245059) scale(-1, -1) translate(-11.245868, -371.245059) ",
            "points": "1 361 21.4917355 361 21.4917355 381.490119"
          }, null), createVNode("line", {
            "x1": "151.411157",
            "y1": "2.27667984",
            "x2": "147.995868",
            "y2": "9.10671937",
            "id": "路径-10-copy",
            "stroke": mergedColor[0],
            "opacity": "0.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "transform": "translate(149.703512, 5.691700) scale(-1, 1) translate(-149.703512, -5.691700) "
          }, null), createVNode("path", {
            "d": "M181.010331,8.82213439 C214.889937,8.25296443 247.524923,7.96837945 278.915289,7.96837945 C310.305656,7.96837945 341.422736,8.25296443 372.266529,8.82213439 L372.266529,9.39130435 C342.394069,9.96047431 311.276989,10.2450593 278.915289,10.2450593 C246.55359,10.2450593 213.918603,9.96047431 181.010331,9.39130435 L181.010331,8.82213439 Z",
            "id": "矩形-copy-8",
            "fill": `url(#${linearGradient3})`
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor$m = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$5 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox17 = /* @__PURE__ */ defineComponent({
  name: "BorderBox17",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$m, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-17"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$5, {
          "width": width,
          "height": height,
          "viewBox": "0 0 550 380",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框17")]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "2",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-108.000000, -628.000000)"
          }, [createVNode("g", {
            "id": "框4",
            "transform": "translate(108.000000, 628.000000)"
          }, [createVNode("g", {
            "id": "Group-5",
            "transform": "translate(155.500000, 317.500000) scale(1, -1) translate(-155.500000, -317.500000) translate(0.000000, 256.000000)"
          }, [createVNode("polygon", {
            "id": "Triangle-2",
            "fill": mergedColor[1],
            "transform": "translate(18.346302, 17.653698) rotate(135.000000) translate(-18.346302, -17.653698) ",
            "points": "18.8360471 12.653698 28.8360471 22.653698 7.856557 21.8673362"
          }, null), createVNode("polygon", {
            "id": "Rectangle-4",
            "fill": mergedColor[1],
            "points": "278 0 302 0 311 9 287 9"
          }, null), createVNode("polygon", {
            "id": "Rectangle-4",
            "fill": mergedColor[1],
            "transform": "translate(4.146729, 106.017578) scale(-1, 1) rotate(90.000000) translate(-4.146729, -106.017578) ",
            "points": "-12.0446777 101.955322 11.9553223 101.955322 20.3381348 110.079834 -3.66186523 110.079834"
          }, null)]), createVNode("path", {
            "d": "M549.5,0.5 L549.5,365.5 L321.788993,365.5 L308.155993,379.5 L22.9818555,379.5 L0.5,359.55069 L0.5,0.5 L549.5,0.5 Z",
            "id": "形状结合",
            "stroke": mergedColor[0],
            "fill-opacity": "0.08",
            "fill": "url(#radialGradient-1)",
            "opacity": "0.764834449"
          }, null), createVNode("g", {
            "id": "Group-4",
            "transform": "translate(436.000000, 374.000000) rotate(-180.000000) translate(-436.000000, -374.000000) translate(322.000000, 370.000000)",
            "fill": mergedColor[1]
          }, [createVNode("path", {
            "d": "M33.4911192,4.2746251e-11 C34.043404,4.27419307e-11 34.4911192,0.44771525 34.4911192,1 C34.4911192,1.22655877 34.4141865,1.44640295 34.272921,1.62352701 L29.4876136,7.62352701 C29.2978694,7.86143551 29.0101197,8 28.7058118,8 L1.50888079,8 C0.956596042,8 0.508880792,7.55228475 0.508880792,7 C0.508880792,6.77344124 0.585813471,6.55359705 0.727078979,6.37647299 L5.51238642,0.376472995 C5.70213064,0.138564492 5.98988029,4.27476392e-11 6.29418824,4.2746251e-11 L33.4911192,4.2746251e-11 Z M226.496116,4.2746251e-11 C227.048401,4.27453724e-11 227.496116,0.44771525 227.496116,1 C227.496116,1.22785098 227.418305,1.44886998 227.275564,1.62646781 L222.453163,7.62646781 C222.263352,7.86263026 221.976703,8 221.673716,8 L208.503884,8 C207.951599,8 207.503884,7.55228475 207.503884,7 C207.503884,6.77214902 207.581695,6.55113002 207.724436,6.37353219 L212.546837,0.37353219 C212.736648,0.137369739 213.023297,4.27459736e-11 213.326284,4.2746251e-11 L226.496116,4.2746251e-11 Z M40.7358086,4.2746251e-11 C41.2244412,4.27461612e-11 41.6205562,0.396114992 41.6205562,0.884747597 C41.6205562,1.08729825 41.5510565,1.28371616 41.4236664,1.44119163 L36.4180824,7.62892969 C36.228222,7.86362893 35.9424989,8 35.6406202,8 L34.2641914,8 C33.7755588,8 33.3794438,7.60388501 33.3794438,7.1152524 C33.3794438,6.91270175 33.4489435,6.71628384 33.5763336,6.55880837 L38.5819176,0.371070305 C38.771778,0.136371066 39.0575011,4.27453072e-11 39.3593798,4.2746251e-11 L40.7358086,4.2746251e-11 Z M47.7358086,4.2746251e-11 C48.2244412,4.27461612e-11 48.6205562,0.396114992 48.6205562,0.884747597 C48.6205562,1.08729825 48.5510565,1.28371616 48.4236664,1.44119163 L43.4180824,7.62892969 C43.228222,7.86362893 42.9424989,8 42.6406202,8 L41.2641914,8 C40.7755588,8 40.3794438,7.60388501 40.3794438,7.1152524 C40.3794438,6.91270175 40.4489435,6.71628384 40.5763336,6.55880837 L45.5819176,0.371070305 C45.771778,0.136371066 46.0575011,4.27454832e-11 46.3593798,4.2746251e-11 L47.7358086,4.2746251e-11 Z M55.7358086,4.2746251e-11 C56.2244412,4.27461612e-11 56.6205562,0.396114992 56.6205562,0.884747597 C56.6205562,1.08729825 56.5510565,1.28371616 56.4236664,1.44119163 L51.4180824,7.62892969 C51.228222,7.86362893 50.9424989,8 50.6406202,8 L49.2641914,8 C48.7755588,8 48.3794438,7.60388501 48.3794438,7.1152524 C48.3794438,6.91270175 48.4489435,6.71628384 48.5763336,6.55880837 L53.5819176,0.371070305 C53.771778,0.136371066 54.0575011,4.27453072e-11 54.3593798,4.2746251e-11 L55.7358086,4.2746251e-11 Z M62.7358086,4.2746251e-11 C63.2244412,4.27461612e-11 63.6205562,0.396114992 63.6205562,0.884747597 C63.6205562,1.08729825 63.5510565,1.28371616 63.4236664,1.44119163 L58.4180824,7.62892969 C58.228222,7.86362893 57.9424989,8 57.6406202,8 L56.2641914,8 C55.7755588,8 55.3794438,7.60388501 55.3794438,7.1152524 C55.3794438,6.91270175 55.4489435,6.71628384 55.5763336,6.55880837 L60.5819176,0.371070305 C60.771778,0.136371066 61.0575011,4.27454832e-11 61.3593798,4.2746251e-11 L62.7358086,4.2746251e-11 Z M69.7358086,4.2746251e-11 C70.2244412,4.27461612e-11 70.6205562,0.396114992 70.6205562,0.884747597 C70.6205562,1.08729825 70.5510565,1.28371616 70.4236664,1.44119163 L65.4180824,7.62892969 C65.228222,7.86362893 64.9424989,8 64.6406202,8 L63.2641914,8 C62.7755588,8 62.3794438,7.60388501 62.3794438,7.1152524 C62.3794438,6.91270175 62.4489435,6.71628384 62.5763336,6.55880837 L67.5819176,0.371070305 C67.771778,0.136371066 68.0575011,4.27453072e-11 68.3593798,4.2746251e-11 L69.7358086,4.2746251e-11 Z M76.7358086,4.2746251e-11 C77.2244412,4.27461612e-11 77.6205562,0.396114992 77.6205562,0.884747597 C77.6205562,1.08729825 77.5510565,1.28371616 77.4236664,1.44119163 L72.4180824,7.62892969 C72.228222,7.86362893 71.9424989,8 71.6406202,8 L70.2641914,8 C69.7755588,8 69.3794438,7.60388501 69.3794438,7.1152524 C69.3794438,6.91270175 69.4489435,6.71628384 69.5763336,6.55880837 L74.5819176,0.371070305 C74.771778,0.136371066 75.0575011,4.27454832e-11 75.3593798,4.2746251e-11 L76.7358086,4.2746251e-11 Z M83.7358086,4.2746251e-11 C84.2244412,4.27461612e-11 84.6205562,0.396114992 84.6205562,0.884747597 C84.6205562,1.08729825 84.5510565,1.28371616 84.4236664,1.44119163 L79.4180824,7.62892969 C79.228222,7.86362893 78.9424989,8 78.6406202,8 L77.2641914,8 C76.7755588,8 76.3794438,7.60388501 76.3794438,7.1152524 C76.3794438,6.91270175 76.4489435,6.71628384 76.5763336,6.55880837 L81.5819176,0.371070305 C81.771778,0.136371066 82.0575011,4.27467505e-11 82.3593798,4.2746251e-11 L83.7358086,4.2746251e-11 Z M91.7358086,4.2746251e-11 C92.2244412,4.27461612e-11 92.6205562,0.396114992 92.6205562,0.884747597 C92.6205562,1.08729825 92.5510565,1.28371616 92.4236664,1.44119163 L87.4180824,7.62892969 C87.228222,7.86362893 86.9424989,8 86.6406202,8 L85.2641914,8 C84.7755588,8 84.3794438,7.60388501 84.3794438,7.1152524 C84.3794438,6.91270175 84.4489435,6.71628384 84.5763336,6.55880837 L89.5819176,0.371070305 C89.771778,0.136371066 90.0575011,4.27454832e-11 90.3593798,4.2746251e-11 L91.7358086,4.2746251e-11 Z M98.7358086,4.2746251e-11 C99.2244412,4.27461612e-11 99.6205562,0.396114992 99.6205562,0.884747597 C99.6205562,1.08729825 99.5510565,1.28371616 99.4236664,1.44119163 L94.4180824,7.62892969 C94.228222,7.86362893 93.9424989,8 93.6406202,8 L92.2641914,8 C91.7755588,8 91.3794438,7.60388501 91.3794438,7.1152524 C91.3794438,6.91270175 91.4489435,6.71628384 91.5763336,6.55880837 L96.5819176,0.371070305 C96.771778,0.136371066 97.0575011,4.27467505e-11 97.3593798,4.2746251e-11 L98.7358086,4.2746251e-11 Z M105.735809,4.2746251e-11 C106.224441,4.27461612e-11 106.620556,0.396114992 106.620556,0.884747597 C106.620556,1.08729825 106.551056,1.28371616 106.423666,1.44119163 L101.418082,7.62892969 C101.228222,7.86362893 100.942499,8 100.64062,8 L99.2641914,8 C98.7755588,8 98.3794438,7.60388501 98.3794438,7.1152524 C98.3794438,6.91270175 98.4489435,6.71628384 98.5763336,6.55880837 L103.581918,0.371070305 C103.771778,0.136371066 104.057501,4.27454832e-11 104.35938,4.2746251e-11 L105.735809,4.2746251e-11 Z M112.735809,4.2746251e-11 C113.224441,4.27461612e-11 113.620556,0.396114992 113.620556,0.884747597 C113.620556,1.08729825 113.551056,1.28371616 113.423666,1.44119163 L108.418082,7.62892969 C108.228222,7.86362893 107.942499,8 107.64062,8 L106.264191,8 C105.775559,8 105.379444,7.60388501 105.379444,7.1152524 C105.379444,6.91270175 105.448944,6.71628384 105.576334,6.55880837 L110.581918,0.371070305 C110.771778,0.136371066 111.057501,4.27453072e-11 111.35938,4.2746251e-11 L112.735809,4.2746251e-11 Z M120.735809,4.2746251e-11 C121.224441,4.27461612e-11 121.620556,0.396114992 121.620556,0.884747597 C121.620556,1.08729825 121.551056,1.28371616 121.423666,1.44119163 L116.418082,7.62892969 C116.228222,7.86362893 115.942499,8 115.64062,8 L114.264191,8 C113.775559,8 113.379444,7.60388501 113.379444,7.1152524 C113.379444,6.91270175 113.448944,6.71628384 113.576334,6.55880837 L118.581918,0.371070305 C118.771778,0.136371066 119.057501,4.27454832e-11 119.35938,4.2746251e-11 L120.735809,4.2746251e-11 Z M127.735809,4.2746251e-11 C128.224441,4.27461612e-11 128.620556,0.396114992 128.620556,0.884747597 C128.620556,1.08729825 128.551056,1.28371616 128.423666,1.44119163 L123.418082,7.62892969 C123.228222,7.86362893 122.942499,8 122.64062,8 L121.264191,8 C120.775559,8 120.379444,7.60388501 120.379444,7.1152524 C120.379444,6.91270175 120.448944,6.71628384 120.576334,6.55880837 L125.581918,0.371070305 C125.771778,0.136371066 126.057501,4.27453072e-11 126.35938,4.2746251e-11 L127.735809,4.2746251e-11 Z M134.735809,4.2746251e-11 C135.224441,4.27461612e-11 135.620556,0.396114992 135.620556,0.884747597 C135.620556,1.08729825 135.551056,1.28371616 135.423666,1.44119163 L130.418082,7.62892969 C130.228222,7.86362893 129.942499,8 129.64062,8 L128.264191,8 C127.775559,8 127.379444,7.60388501 127.379444,7.1152524 C127.379444,6.91270175 127.448944,6.71628384 127.576334,6.55880837 L132.581918,0.371070305 C132.771778,0.136371066 133.057501,4.27454832e-11 133.35938,4.2746251e-11 L134.735809,4.2746251e-11 Z M141.735809,4.2746251e-11 C142.224441,4.27461612e-11 142.620556,0.396114992 142.620556,0.884747597 C142.620556,1.08729825 142.551056,1.28371616 142.423666,1.44119163 L137.418082,7.62892969 C137.228222,7.86362893 136.942499,8 136.64062,8 L135.264191,8 C134.775559,8 134.379444,7.60388501 134.379444,7.1152524 C134.379444,6.91270175 134.448944,6.71628384 134.576334,6.55880837 L139.581918,0.371070305 C139.771778,0.136371066 140.057501,4.27453072e-11 140.35938,4.2746251e-11 L141.735809,4.2746251e-11 Z M148.735809,4.2746251e-11 C149.224441,4.27461612e-11 149.620556,0.396114992 149.620556,0.884747597 C149.620556,1.08729825 149.551056,1.28371616 149.423666,1.44119163 L144.418082,7.62892969 C144.255345,7.83010047 144.022178,7.95903014 143.768775,7.99176166 L143.64062,8 L143.64062,8 L142.264191,8 C141.775559,8 141.379444,7.60388501 141.379444,7.1152524 C141.379444,6.91270175 141.448944,6.71628384 141.576334,6.55880837 L146.581918,0.371070305 C146.771778,0.136371066 147.057501,4.27467505e-11 147.35938,4.2746251e-11 L148.735809,4.2746251e-11 Z M156.735809,4.2746251e-11 C157.224441,4.27461612e-11 157.620556,0.396114992 157.620556,0.884747597 C157.620556,1.08729825 157.551056,1.28371616 157.423666,1.44119163 L152.418082,7.62892969 C152.228222,7.86362893 151.942499,8 151.64062,8 L150.264191,8 C149.775559,8 149.379444,7.60388501 149.379444,7.1152524 C149.379444,6.91270175 149.448944,6.71628384 149.576334,6.55880837 L154.581918,0.371070305 C154.771778,0.136371066 155.057501,4.27454832e-11 155.35938,4.2746251e-11 L156.735809,4.2746251e-11 Z M163.735809,4.2746251e-11 C164.224441,4.27461612e-11 164.620556,0.396114992 164.620556,0.884747597 C164.620556,1.08729825 164.551056,1.28371616 164.423666,1.44119163 L159.418082,7.62892969 C159.228222,7.86362893 158.942499,8 158.64062,8 L157.264191,8 C156.775559,8 156.379444,7.60388501 156.379444,7.1152524 C156.379444,6.91270175 156.448944,6.71628384 156.576334,6.55880837 L161.581918,0.371070305 C161.771778,0.136371066 162.057501,4.27467505e-11 162.35938,4.2746251e-11 L163.735809,4.2746251e-11 Z M170.735809,4.2746251e-11 C171.224441,4.27461612e-11 171.620556,0.396114992 171.620556,0.884747597 C171.620556,1.08729825 171.551056,1.28371616 171.423666,1.44119163 L166.418082,7.62892969 C166.228222,7.86362893 165.942499,8 165.64062,8 L164.264191,8 C163.775559,8 163.379444,7.60388501 163.379444,7.1152524 C163.379444,6.91270175 163.448944,6.71628384 163.576334,6.55880837 L168.581918,0.371070305 C168.771778,0.136371066 169.057501,4.27454832e-11 169.35938,4.2746251e-11 L170.735809,4.2746251e-11 Z M177.735809,4.2746251e-11 C178.224441,4.27461612e-11 178.620556,0.396114992 178.620556,0.884747597 C178.620556,1.08729825 178.551056,1.28371616 178.423666,1.44119163 L173.418082,7.62892969 C173.228222,7.86362893 172.942499,8 172.64062,8 L171.264191,8 C170.775559,8 170.379444,7.60388501 170.379444,7.1152524 C170.379444,6.91270175 170.448944,6.71628384 170.576334,6.55880837 L175.581918,0.371070305 C175.771778,0.136371066 176.057501,4.27453072e-11 176.35938,4.2746251e-11 L177.735809,4.2746251e-11 Z M184.735809,4.2746251e-11 C185.224441,4.27461612e-11 185.620556,0.396114992 185.620556,0.884747597 C185.620556,1.08729825 185.551056,1.28371616 185.423666,1.44119163 L180.418082,7.62892969 C180.228222,7.86362893 179.942499,8 179.64062,8 L178.264191,8 C177.775559,8 177.379444,7.60388501 177.379444,7.1152524 C177.379444,6.91270175 177.448944,6.71628384 177.576334,6.55880837 L182.581918,0.371070305 C182.771778,0.136371066 183.057501,4.27454832e-11 183.35938,4.2746251e-11 L184.735809,4.2746251e-11 Z M206.735809,4.2746251e-11 C207.224441,4.27461612e-11 207.620556,0.396114992 207.620556,0.884747597 C207.620556,1.08729825 207.551056,1.28371616 207.423666,1.44119163 L202.418082,7.62892969 C202.228222,7.86362893 201.942499,8 201.64062,8 L200.264191,8 C199.775559,8 199.379444,7.60388501 199.379444,7.1152524 C199.379444,6.91270175 199.448944,6.71628384 199.576334,6.55880837 L204.581918,0.371070305 C204.771778,0.136371066 205.057501,4.27454832e-11 205.35938,4.2746251e-11 L206.735809,4.2746251e-11 Z M199.735809,4.2746251e-11 C200.224441,4.27461612e-11 200.620556,0.396114992 200.620556,0.884747597 C200.620556,1.08729825 200.551056,1.28371616 200.423666,1.44119163 L195.418082,7.62892969 C195.228222,7.86362893 194.942499,8 194.64062,8 L193.264191,8 C192.775559,8 192.379444,7.60388501 192.379444,7.1152524 C192.379444,6.91270175 192.448944,6.71628384 192.576334,6.55880837 L197.581918,0.371070305 C197.771778,0.136371066 198.057501,4.27453072e-11 198.35938,4.2746251e-11 L199.735809,4.2746251e-11 Z M192.735809,4.2746251e-11 C193.224441,4.27461612e-11 193.620556,0.396114992 193.620556,0.884747597 C193.620556,1.08729825 193.551056,1.28371616 193.423666,1.44119163 L188.418082,7.62892969 C188.228222,7.86362893 187.942499,8 187.64062,8 L186.264191,8 C185.775559,8 185.379444,7.60388501 185.379444,7.1152524 C185.379444,6.91270175 185.448944,6.71628384 185.576334,6.55880837 L190.581918,0.371070305 C190.771778,0.136371066 191.057501,4.27454832e-11 191.35938,4.2746251e-11 L192.735809,4.2746251e-11 Z",
            "id": "形状结合"
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor$l = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$4 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox18 = /* @__PURE__ */ defineComponent({
  name: "BorderBox18",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$l, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-18"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$4, {
          "width": width,
          "height": height,
          "viewBox": "0 0 550 381",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框18")]), createVNode("defs", null, [createVNode("polygon", {
            "id": "path18-1",
            "points": "33.8251065 0 532.838033 0 549 17.1369358 549 348.609342 526.820348 380 25.2742898 380 0 350.531484 0 163.323634 18.3 140.790415 18.3 12.9030282"
          }, null)]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-685.000000, -627.000000)"
          }, [createVNode("g", {
            "id": "框5",
            "transform": "translate(685.000000, 627.000000)"
          }, [createVNode("g", {
            "id": "仪表盘",
            "opacity": "0.764834449",
            "transform": "translate(274.500000, 190.000000) scale(-1, -1) translate(-274.500000, -190.000000) "
          }, [createVNode("path", {
            "stroke": mergedColor[0],
            "stroke-width": "2",
            "d": "M532.6223,0.5 L548.5,17.3355203 L548.5,348.450522 L526.561415,379.5 L25.5041651,379.5 L0.5,350.346435 L0.5,163.501093 L18.8,140.967873 L18.8,13.1376167 L34.0057597,0.5 L532.6223,0.5 Z",
            "stroke-linejoin": "square"
          }, null)]), createVNode("g", {
            "id": "Group-4",
            "transform": "translate(546.000000, 311.000000) scale(-1, 1) rotate(90.000000) translate(-546.000000, -311.000000) translate(476.000000, 307.000000)",
            "fill": mergedColor[1]
          }, [createVNode("path", {
            "d": "M2.71119426,0 L34.136503,0 C34.6887877,1.00876996e-15 35.136503,0.44771525 35.136503,1 C35.136503,1.13296129 35.1099875,1.26458761 35.0585077,1.38717855 L33.2108105,5.78717855 C33.0548976,6.15846068 32.6914958,6.4 32.2888057,6.4 L0.863497035,6.4 C0.311212285,6.4 -0.136502965,5.95228475 -0.136502965,5.4 C-0.136502965,5.26703871 -0.10998748,5.13541239 -0.0585077212,5.01282145 L1.7891895,0.612821449 C1.94510244,0.24153932 2.30850422,7.39729597e-17 2.71119426,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M121.98823,0.8 L138.310437,0.8 C138.862722,0.8 139.310437,1.24771525 139.310437,1.8 C139.310437,1.94054325 139.280812,2.07950817 139.223494,2.20783216 L137.25816,6.60783216 C137.097264,6.96804813 136.73962,7.2 136.345103,7.2 L120.022896,7.2 C119.470612,7.2 119.022896,6.75228475 119.022896,6.2 C119.022896,6.05945675 119.052521,5.92049183 119.10984,5.79216784 L121.075173,1.39216784 C121.23607,1.03195187 121.593714,0.8 121.98823,0.8 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M40.9012197,0 L42.4646838,0 C43.0169685,1.20591542e-16 43.4646838,0.44771525 43.4646838,1 C43.4646838,1.12319713 43.4419191,1.24533373 43.3975363,1.36025848 L41.6982995,5.76025848 C41.5494152,6.14577913 41.1787177,6.4 40.765447,6.4 L39.2019829,6.4 C38.6496981,6.4 38.2019829,5.95228475 38.2019829,5.4 C38.2019829,5.27680287 38.2247476,5.15466627 38.2691304,5.03974152 L39.9683672,0.639741519 C40.1172514,0.254220867 40.4879489,5.20005813e-16 40.9012197,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M49.234553,0 L50.7980171,0 C51.3503019,1.20591542e-16 51.7980171,0.44771525 51.7980171,1 C51.7980171,1.12319713 51.7752524,1.24533373 51.7308696,1.36025848 L50.0316328,5.76025848 C49.8827486,6.14577913 49.5120511,6.4 49.0987803,6.4 L47.5353162,6.4 C46.9830315,6.4 46.5353162,5.95228475 46.5353162,5.4 C46.5353162,5.27680287 46.5580809,5.15466627 46.6024637,5.03974152 L48.3017005,0.639741519 C48.4505848,0.254220867 48.8212823,5.20005813e-16 49.234553,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M57.5678863,0 L59.1313504,0 C59.6836352,1.20591542e-16 60.1313504,0.44771525 60.1313504,1 C60.1313504,1.12319713 60.1085858,1.24533373 60.064203,1.36025848 L58.3649662,5.76025848 C58.2160819,6.14577913 57.8453844,6.4 57.4321137,6.4 L55.8686496,6.4 C55.3163648,6.4 54.8686496,5.95228475 54.8686496,5.4 C54.8686496,5.27680287 54.8914142,5.15466627 54.935797,5.03974152 L56.6350338,0.639741519 C56.7839181,0.254220867 57.1546156,5.20005813e-16 57.5678863,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M64.234553,0 L65.7980171,0 C66.3503019,-7.67586877e-16 66.7980171,0.44771525 66.7980171,1 C66.7980171,1.12319713 66.7752524,1.24533373 66.7308696,1.36025848 L65.0316328,5.76025848 C64.8827486,6.14577913 64.5120511,6.4 64.0987803,6.4 L62.5353162,6.4 C61.9830315,6.4 61.5353162,5.95228475 61.5353162,5.4 C61.5353162,5.27680287 61.5580809,5.15466627 61.6024637,5.03974152 L63.3017005,0.639741519 C63.4505848,0.254220867 63.8212823,2.97961208e-16 64.234553,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M72.5678863,0 L74.1313504,0 C74.6836352,1.20591542e-16 75.1313504,0.44771525 75.1313504,1 C75.1313504,1.12319713 75.1085858,1.24533373 75.064203,1.36025848 L73.3649662,5.76025848 C73.2160819,6.14577913 72.8453844,6.4 72.4321137,6.4 L70.8686496,6.4 C70.3163648,6.4 69.8686496,5.95228475 69.8686496,5.4 C69.8686496,5.27680287 69.8914142,5.15466627 69.935797,5.03974152 L71.6350338,0.639741519 C71.7839181,0.254220867 72.1546156,5.20005813e-16 72.5678863,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M80.9012197,0 L82.4646838,0 C83.0169685,1.20591542e-16 83.4646838,0.44771525 83.4646838,1 C83.4646838,1.12319713 83.4419191,1.24533373 83.3975363,1.36025848 L81.6982995,5.76025848 C81.5494152,6.14577913 81.1787177,6.4 80.765447,6.4 L79.2019829,6.4 C78.6496981,6.4 78.2019829,5.95228475 78.2019829,5.4 C78.2019829,5.27680287 78.2247476,5.15466627 78.2691304,5.03974152 L79.9683672,0.639741519 C80.1172514,0.254220867 80.4879489,5.20005813e-16 80.9012197,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M89.234553,0 L90.7980171,0 C91.3503019,1.20591542e-16 91.7980171,0.44771525 91.7980171,1 C91.7980171,1.12319713 91.7752524,1.24533373 91.7308696,1.36025848 L90.0316328,5.76025848 C89.8827486,6.14577913 89.5120511,6.4 89.0987803,6.4 L87.5353162,6.4 C86.9830315,6.4 86.5353162,5.95228475 86.5353162,5.4 C86.5353162,5.27680287 86.5580809,5.15466627 86.6024637,5.03974152 L88.3017005,0.639741519 C88.4505848,0.254220867 88.8212823,5.20005813e-16 89.234553,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M97.5678863,0 L99.1313504,0 C99.6836352,1.20591542e-16 100.13135,0.44771525 100.13135,1 C100.13135,1.12319713 100.108586,1.24533373 100.064203,1.36025848 L98.3649662,5.76025848 C98.2160819,6.14577913 97.8453844,6.4 97.4321137,6.4 L95.8686496,6.4 C95.3163648,6.4 94.8686496,5.95228475 94.8686496,5.4 C94.8686496,5.27680287 94.8914142,5.15466627 94.935797,5.03974152 L96.6350338,0.639741519 C96.7839181,0.254220867 97.1546156,5.20005813e-16 97.5678863,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M104.234553,0 L105.798017,0 C106.350302,1.20591542e-16 106.798017,0.44771525 106.798017,1 C106.798017,1.12319713 106.775252,1.24533373 106.73087,1.36025848 L105.031633,5.76025848 C104.882749,6.14577913 104.512051,6.4 104.09878,6.4 L102.535316,6.4 C101.983031,6.4 101.535316,5.95228475 101.535316,5.4 C101.535316,5.27680287 101.558081,5.15466627 101.602464,5.03974152 L103.3017,0.639741519 C103.450585,0.254220867 103.821282,5.20005813e-16 104.234553,0 Z",
            "id": "Rectangle-3"
          }, null), createVNode("path", {
            "d": "M112.567886,0 L114.13135,0 C114.683635,1.20591542e-16 115.13135,0.44771525 115.13135,1 C115.13135,1.12319713 115.108586,1.24533373 115.064203,1.36025848 L113.364966,5.76025848 C113.216082,6.14577913 112.845384,6.4 112.432114,6.4 L110.86865,6.4 C110.316365,6.4 109.86865,5.95228475 109.86865,5.4 C109.86865,5.27680287 109.891414,5.15466627 109.935797,5.03974152 L111.635034,0.639741519 C111.783918,0.254220867 112.154616,5.20005813e-16 112.567886,0 Z",
            "id": "Rectangle-3"
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor$k = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$3 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox19 = /* @__PURE__ */ defineComponent({
  name: "BorderBox19",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$k, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-19"),
        "ref": autoBindRef,
        "style": {
          backgroundColor,
          boxShadow: `inset 0 0 20px ${mergedColor[0]}`
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$3, {
          "width": width,
          "height": height,
          "viewBox": "0 0 551 381",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框19")]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-1261.000000, -627.000000)"
          }, [createVNode("g", {
            "id": "框6",
            "transform": "translate(1261.000000, 627.000000)"
          }, [createVNode("g", {
            "id": "Rectangle-7-Copy"
          }, [createVNode("path", {
            "stroke": mergedColor[0],
            "stroke-width": "1.5",
            "d": "M549.5,1.5 L549.5,380.5 L0.5,380.5 L0.5,1.5 L549.5,1.5 Z",
            "stroke-linejoin": "square"
          }, null)]), createVNode("g", {
            "id": "Group-34-Copy-2",
            "transform": "translate(64.848457, 17.179245) rotate(180.000000) translate(-64.848457, -17.179245) translate(0.348457, 0.679245)",
            "stroke": mergedColor[1],
            "stroke-width": "1"
          }, [createVNode("polyline", {
            "id": "Path-28",
            "points": "8.0365245 7.7352773 34.6174397 24.5734706 119.713108 24.5734706 128.214043 32.2709303"
          }, null), createVNode("ellipse", {
            "id": "Oval-8",
            "cx": "4.79242287",
            "cy": "4.81091236",
            "rx": "4.79242287",
            "ry": "4.81091236"
          }, null)]), createVNode("g", {
            "id": "Group-34-Copy-2",
            "transform": "translate(421.348457, 347.679245)",
            "stroke": mergedColor[1],
            "stroke-width": "1"
          }, [createVNode("polyline", {
            "id": "Path-28",
            "points": "8.0365245 7.7352773 34.6174397 24.5734706 119.713108 24.5734706 128.214043 32.2709303"
          }, null), createVNode("ellipse", {
            "id": "Oval-8",
            "cx": "4.79242287",
            "cy": "4.81091236",
            "rx": "4.79242287",
            "ry": "4.81091236"
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor$j = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$2 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox20 = /* @__PURE__ */ defineComponent({
  name: "BorderBox20",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$j, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-20"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$2, {
          "width": width,
          "height": height,
          "viewBox": "0 0 550 383",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框20")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "50%",
            "y1": "-18.59375%",
            "x2": "50%",
            "y2": "116.930339%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "19.7596837%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.262404786",
            "offset": "79.7943755%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "100%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "27.6041667%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "65.8658854%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-108.000000, -1082.000000)"
          }, [createVNode("g", {
            "id": "框7",
            "transform": "translate(108.000000, 1082.000000)"
          }, [createVNode("path", {
            "d": "M549,1 L549,382 L1,382 L1,1 L549,1 Z",
            "id": "矩形备份-2",
            "stroke": `url(#${linearGradient2})`,
            "stroke-width": "3",
            "fill": `url(#${linearGradient1})`,
            "opacity": "0.520086118"
          }, null), createVNode("polygon", {
            "id": "Rectangle-11",
            "fill": mergedColor[1],
            "points": "3.01645338 3 11.0603291 3 11.0603291 11 3.01645338 11"
          }, null), createVNode("polygon", {
            "id": "Rectangle-11",
            "fill": mergedColor[1],
            "points": "538.939671 3 546.983547 3 546.983547 11 538.939671 11"
          }, null), createVNode("polygon", {
            "id": "Rectangle-11",
            "fill": mergedColor[1],
            "points": "538.939671 372 546.983547 372 546.983547 380 538.939671 380"
          }, null), createVNode("polygon", {
            "id": "Rectangle-11",
            "fill": mergedColor[1],
            "points": "3.01645338 372 11.0603291 372 11.0603291 380 3.01645338 380"
          }, null)])])])]
        })]
      });
    };
  }
});
const defaultColor$i = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer$1 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox21 = /* @__PURE__ */ defineComponent({
  name: "BorderBox21",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$i, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      const linearGradient4 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-21"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer$1, {
          "width": width,
          "height": height,
          "viewBox": "0 0 558 387",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框21")]), createVNode("defs", null, [createVNode("radialGradient", {
            "cx": "50%",
            "cy": "50%",
            "fx": "50%",
            "fy": "50%",
            "r": "78.2465983%",
            "gradientTransform": "translate(0.500000,0.500000),scale(0.680738,1.000000),rotate(65.192947),scale(1.000000,1.675302),translate(-0.500000,-0.500000)",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.737007473",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "0.561602852%",
            "y1": "36.9338719%",
            "x2": "99.0453895%",
            "y2": "36.9338719%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.2",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "50.299211%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.1",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "1.82798159%",
            "y1": "50%",
            "x2": "100%",
            "y2": "50%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "48.5230181%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "0%",
            "y1": "4.34021734%",
            "x2": "97.00853%",
            "y2": "92.9279852%",
            "id": linearGradient4
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "48.6587213%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "100%"
          }, null)]), createVNode("polygon", {
            "id": "path-b215",
            "points": "517.148362 0 537.283237 0 550 12.557377 550 31.3934426 547.880539 31.3934426 547.880539 13.6038251 536.223507 2.09289617 517.148362 2.09289617"
          }, null), createVNode("polygon", {
            "id": "path-7",
            "points": "0 0 20.1348748 0 32.8516378 12.557377 32.8516378 31.3934426 30.7321773 31.3934426 30.7321773 13.6038251 19.0751445 2.09289617 0 2.09289617"
          }, null), createVNode("polygon", {
            "id": "path-9",
            "points": "517.148362 351.606557 537.283237 351.606557 550 364.163934 550 383 547.880539 383 547.880539 365.210383 536.223507 353.699454 517.148362 353.699454"
          }, null), createVNode("polygon", {
            "id": "path-11",
            "points": "0 351.606557 20.1348748 351.606557 32.8516378 364.163934 32.8516378 383 30.7321773 383 30.7321773 365.210383 19.0751445 353.699454 0 353.699454"
          }, null)]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-681.000000, -1080.000000)"
          }, [createVNode("g", {
            "id": "框8",
            "transform": "translate(685.000000, 1082.000000)"
          }, [createVNode("g", {
            "id": "Group-11"
          }, [createVNode("rect", {
            "id": "Rectangle-6",
            "stroke": `url(#${linearGradient2})`,
            "stroke-width": "2.5",
            "fill-opacity": "0.2",
            "fill": `url(#${linearGradient1})`,
            "x": "11.5973025",
            "y": "11.4644809",
            "width": "526.805395",
            "height": "357.978142"
          }, null), createVNode("g", {
            "id": "Group-7",
            "transform": "translate(115.510597, 3.139344)",
            "fill": `url(#${linearGradient3})`,
            "opacity": "0.543801444"
          }, [createVNode("rect", {
            "id": "Rectangle-2",
            "x": "0",
            "y": "0",
            "width": "317.919075",
            "height": "1.04644809"
          }, null), createVNode("rect", {
            "id": "Rectangle-2备份",
            "x": "0",
            "y": "373.581967",
            "width": "317.919075",
            "height": "1.04644809"
          }, null)]), createVNode("g", {
            "id": "path-b2112"
          }, [createVNode("use", {
            "fill": "black",
            "fill-opacity": "1",
            "xlink:href": "#path-b215"
          }, null), createVNode("use", {
            "fill": `url(#${linearGradient4})`,
            "fill-rule": "evenodd",
            "xlink:href": "#path-b215"
          }, null)]), createVNode("g", {
            "id": "path-b2112",
            "transform": "translate(16.425819, 15.696721) scale(-1, 1) translate(-16.425819, -15.696721) "
          }, [createVNode("use", {
            "fill": "black",
            "fill-opacity": "1",
            "xlink:href": "#path-7"
          }, null), createVNode("use", {
            "fill": `url(#${linearGradient4})`,
            "fill-rule": "evenodd",
            "xlink:href": "#path-7"
          }, null)]), createVNode("g", {
            "id": "path-b2112",
            "transform": "translate(533.574181, 367.303279) scale(1, -1) translate(-533.574181, -367.303279) "
          }, [createVNode("use", {
            "fill": "black",
            "fill-opacity": "1",
            "xlink:href": "#path-9"
          }, null), createVNode("use", {
            "fill": `url(#${linearGradient4})`,
            "fill-rule": "evenodd",
            "xlink:href": "#path-9"
          }, null)]), createVNode("g", {
            "id": "path-b2112",
            "transform": "translate(16.425819, 367.303279) scale(-1, -1) translate(-16.425819, -367.303279) "
          }, [createVNode("use", {
            "fill": "black",
            "fill-opacity": "1",
            "xlink:href": "#path-11"
          }, null), createVNode("use", {
            "fill": `url(#${linearGradient4})`,
            "fill-rule": "evenodd",
            "xlink:href": "#path-11"
          }, null)])]), createVNode("g", {
            "id": "Group-9",
            "transform": "translate(17.187500, 17.000000)"
          }, null)])])])]
        })]
      });
    };
  }
});
const defaultColor$h = ["#7ce7fd", "#2e6099"];
const BorderSvgContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("border-svg-container");
const BorderBox22 = /* @__PURE__ */ defineComponent({
  name: "BorderBox22",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$h, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("border-box-22"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(BorderSvgContainer, {
          "width": width,
          "height": height,
          "viewBox": "0 0 551 381",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("框22")]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "2",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-外框素材",
            "transform": "translate(-1259.000000, -1082.000000)"
          }, [createVNode("g", {
            "id": "内容框底色",
            "transform": "translate(1259.000000, 1082.000000)"
          }, [createVNode("path", {
            "d": "M528.792893,0.5 L550.5,22.2071068 L550.5,380.5 L22.2071068,380.5 L0.5,358.792893 L0.5,0.5 L528.792893,0.5 Z",
            "id": "形状结合",
            "stroke": mergedColor[0],
            "fill-opacity": "0.1",
            "fill": "#0D305C"
          }, null), createVNode("line", {
            "x1": "541.5",
            "y1": "2.5",
            "x2": "548.5",
            "y2": "9.5",
            "id": "直线",
            "stroke": mergedColor[1],
            "stroke-linecap": "square"
          }, null), createVNode("line", {
            "x1": "3",
            "y1": "372",
            "x2": "10",
            "y2": "379",
            "id": "直线",
            "stroke": mergedColor[1],
            "stroke-linecap": "square"
          }, null), createVNode("line", {
            "x1": "524.5",
            "y1": "5.5",
            "x2": "545.5",
            "y2": "26.5",
            "id": "直线",
            "stroke": mergedColor[1],
            "stroke-linecap": "square"
          }, null), createVNode("line", {
            "x1": "5.5",
            "y1": "354.5",
            "x2": "26.5",
            "y2": "375.5",
            "id": "直线备份",
            "stroke": mergedColor[1],
            "stroke-linecap": "square"
          }, null), createVNode("line", {
            "x1": "3.5",
            "y1": "140.371019",
            "x2": "3.5",
            "y2": "241.101686",
            "id": "直线-2备份",
            "stroke": mergedColor[1],
            "stroke-linecap": "square"
          }, null), createVNode("line", {
            "x1": "547.5",
            "y1": "140.371019",
            "x2": "547.5",
            "y2": "241.101686",
            "id": "直线-2",
            "stroke": mergedColor[1],
            "stroke-linecap": "square"
          }, null)])])])]
        })]
      });
    };
  }
});
function createColorProps() {
  return {
    color: {
      type: definePropType(Array),
      default: () => []
    }
  };
}
function createReverseProps() {
  return {
    reverse: {
      type: Boolean,
      default: false
    }
  };
}
function createDurationProps(duration) {
  return {
    duration: {
      type: Number,
      default: duration
    }
  };
}
function calcPointsPosition$2({
  width,
  height,
  rowPoints: rowPoints2,
  rowCount: rowCount2
}) {
  const horizontalGap = width / (rowPoints2 + 1);
  const verticalGap = height / (rowCount2 + 1);
  return Array.from({
    length: rowCount2
  }).fill(0).flatMap((_, i) => Array.from({
    length: rowPoints2
  }).fill(0).map((_2, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)]));
}
const defaultColor$g = ["#2e6099", "#7ce7fd"];
const defaultSvgWidth$1 = 200;
const defaultSvgHeight$1 = 50;
const rowPoints$2 = 20;
const rowCount$2 = 4;
const pointSideLength$1 = 2.5;
const halfPointSideLength$1 = pointSideLength$1 / 2;
const pointPositions$1 = calcPointsPosition$2({
  width: defaultSvgWidth$1,
  height: defaultSvgHeight$1,
  rowPoints: rowPoints$2,
  rowCount: rowCount$2
});
const leftRectPosition = pointPositions$1[rowPoints$2 * 2 - 1];
const rightRectPosition = pointPositions$1[rowPoints$2 * 2 - 3];
const DecorationContainer$a = styled.div`
  width: 100%;
  height: 100%;

  svg {
    transform-origin: left top;
  }
`("decoration-1");
const Decoration1 = /* @__PURE__ */ defineComponent({
  name: "Decoration1",
  props: createColorProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2
      } = props;
      const {
        width,
        height
      } = domSize;
      const mergedColor = mergeColor(defaultColor$g, color2);
      const svgStyle = {
        transform: `scale(${width / defaultSvgWidth$1},${height / defaultSvgHeight$1})`
      };
      return createVNode(DecorationContainer$a, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": defaultSvgWidth$1,
          "height": defaultSvgHeight$1,
          "style": svgStyle
        }, [pointPositions$1.map(([px, py], i) => {
          const x = px - halfPointSideLength$1;
          const y = py - halfPointSideLength$1;
          return Math.random() > 0.6 ? createVNode("rect", {
            "key": i,
            "x": x,
            "y": y,
            "width": pointSideLength$1,
            "height": pointSideLength$1,
            "fill": mergedColor[0]
          }, [Math.random() > 0.6 && createVNode("animate", {
            "attributeName": "fill",
            "values": `${mergedColor[0]};transparent`,
            "dur": "1s",
            "begin": Math.random() * 2,
            "repeatCount": "indefinite"
          }, null)]) : null;
        }), createVNode("rect", {
          "fill": mergedColor[1],
          "x": leftRectPosition[0] - pointSideLength$1,
          "y": leftRectPosition[1] - pointSideLength$1,
          "width": pointSideLength$1 * 2,
          "height": pointSideLength$1 * 2
        }, [createVNode("animate", {
          "attributeName": "width",
          "values": `0;${pointSideLength$1 * 2}`,
          "dur": "2s",
          "repeatCount": "indefinite"
        }, null), createVNode("animate", {
          "attributeName": "height",
          "values": `0;${pointSideLength$1 * 2}`,
          "dur": "2s",
          "repeatCount": "indefinite"
        }, null), createVNode("animate", {
          "attributeName": "x",
          "values": `${leftRectPosition[0]};${leftRectPosition[0] - pointSideLength$1}`,
          "dur": "2s",
          "repeatCount": "indefinite"
        }, null), createVNode("animate", {
          "attributeName": "y",
          "values": `${leftRectPosition[1]};${leftRectPosition[1] - pointSideLength$1}`,
          "dur": "2s",
          "repeatCount": "indefinite"
        }, null)]), createVNode("rect", {
          "fill": mergedColor[1],
          "x": rightRectPosition[0] - pointSideLength$1,
          "y": rightRectPosition[1] - pointSideLength$1,
          "width": pointSideLength$1 * 2,
          "height": pointSideLength$1 * 2
        }, [createVNode("animate", {
          "attributeName": "width",
          "values": "0;40;0",
          "dur": "2s",
          "repeatCount": "indefinite"
        }, null), createVNode("animate", {
          "attributeName": "x",
          "values": `${rightRectPosition[0]};${rightRectPosition[0] - 40};${rightRectPosition[0]}`,
          "dur": "2s",
          "repeatCount": "indefinite"
        }, null)])])]
      });
    };
  }
});
const defaultColor$f = ["#2e6099", "#7ce7fd"];
function createDecoration2Props() {
  return {
    ...createColorProps(),
    ...createReverseProps(),
    ...createDurationProps(6)
  };
}
function calcSVGData$1(reverse, width, height) {
  if (reverse) {
    return {
      width: 1,
      height,
      x: width / 2,
      y: 0
    };
  } else {
    return {
      width,
      height: 1,
      x: 0,
      y: height / 2
    };
  }
}
const DecorationContainer$9 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-2");
const Decoration2 = /* @__PURE__ */ defineComponent({
  name: "Decoration2",
  props: createDecoration2Props(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2,
        reverse,
        duration
      } = props;
      const mergedColor = mergeColor(defaultColor$f, color2);
      const {
        x,
        y,
        width: svgWidth2,
        height: svgHeight2
      } = calcSVGData$1(reverse, width, height);
      return createVNode(DecorationContainer$9, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": width,
          "height": height
        }, [createVNode("rect", {
          "x": x,
          "y": y,
          "width": svgWidth2,
          "height": svgHeight2,
          "fill": mergedColor[0]
        }, [createVNode("animate", {
          "attributeName": reverse ? "height" : "width",
          "from": "0",
          "to": reverse ? height : width,
          "dur": `${duration}s`,
          "calcMode": "spline",
          "keyTimes": "0;1",
          "keySplines": ".42,0,.58,1",
          "repeatCount": "indefinite"
        }, null)]), createVNode("rect", {
          "x": x,
          "y": y,
          "width": "1",
          "height": "1",
          "fill": mergedColor[1]
        }, [createVNode("animate", {
          "attributeName": reverse ? "y" : "x",
          "from": "0",
          "to": reverse ? height : width,
          "dur": `${duration}s`,
          "calcMode": "spline",
          "keyTimes": "0;1",
          "keySplines": "0.42,0,0.58,1",
          "repeatCount": "indefinite"
        }, null)])])]
      });
    };
  }
});
function calcPointsPosition$1({
  width,
  height,
  rowPoints: rowPoints2,
  rowCount: rowCount2
}) {
  const horizontalGap = width / (rowPoints2 + 1);
  const verticalGap = height / (rowCount2 + 1);
  return Array.from({
    length: rowCount2
  }).fill(0).flatMap((_, i) => Array.from({
    length: rowPoints2
  }).fill(0).map((_2, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)]));
}
const defaultColor$e = ["#7ce7fd", "transparent"];
const defaultSvgWidth = 300;
const defaultSvgHeight = 35;
const rowPoints$1 = 25;
const rowCount$1 = 2;
const pointSideLength = 7;
const halfPointSideLength = pointSideLength / 2;
const pointPositions = calcPointsPosition$1({
  width: defaultSvgWidth,
  height: defaultSvgHeight,
  rowPoints: rowPoints$1,
  rowCount: rowCount$1
});
const DecorationContainer$8 = styled.div`
  width: 100%;
  height: 100%;

  svg {
    transform-origin: left top;
  }
`("decoration-3");
const Decoration3 = /* @__PURE__ */ defineComponent({
  name: "Decoration3",
  props: createColorProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$e, color2);
      return createVNode(DecorationContainer$8, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": defaultSvgWidth,
          "height": defaultSvgHeight,
          "style": {
            transform: `scale(${width / defaultSvgWidth},${height / defaultSvgHeight})`
          }
        }, [pointPositions.map(([px, py], i) => {
          const x = px - halfPointSideLength;
          const y = py - halfPointSideLength;
          return Math.random() > 0.6 ? createVNode("rect", {
            "key": i,
            "x": x,
            "y": y,
            "width": pointSideLength,
            "height": pointSideLength,
            "fill": mergedColor[0]
          }, [Math.random() > 0.6 && createVNode("animate", {
            "attributeName": "fill",
            "values": mergedColor.join(";"),
            "dur": `${Math.random() + 1}s`,
            "begin": Math.random() * 2,
            "repeatCount": "indefinite"
          }, null)]) : null;
        })])]
      });
    };
  }
});
const _hoisted_1$t = ["width", "height"];
const _hoisted_2$h = ["stroke", "points"];
const _hoisted_3$a = ["stroke", "points"];
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  ...{ name: "Decoration4" },
  __name: "index",
  props: {
    ...createColorProps(),
    ...createReverseProps(),
    ...createDurationProps(3)
  },
  setup(__props) {
    const defaultColor2 = ["#2e6099", "#7ce7fd"];
    const decoration4Ref = useTemplateRef("decoration4Ref");
    const width = computed(() => {
      var _a;
      return (_a = decoration4Ref.value) == null ? void 0 : _a.clientWidth;
    });
    const height = computed(() => {
      var _a;
      return (_a = decoration4Ref.value) == null ? void 0 : _a.clientHeight;
    });
    const mergedColor = computed(() => mergeColor$1(defaultColor2, __props.color));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "dv-decoration-4",
        ref_key: "decoration4Ref",
        ref: decoration4Ref
      }, [
        createElementVNode("div", {
          class: normalizeClass(`container ${_ctx.reverse ? "reverse" : "normal"}`),
          style: normalizeStyle(
            _ctx.reverse ? `width:${width.value}px;height:5px;animation-duration:${_ctx.duration}s` : `width:5px;height:${height.value}px;animation-duration:${_ctx.duration}s`
          )
        }, [
          (openBlock(), createElementBlock("svg", {
            width: _ctx.reverse ? width.value : 5,
            height: _ctx.reverse ? 5 : height.value
          }, [
            createElementVNode("polyline", {
              stroke: mergedColor.value[0],
              points: _ctx.reverse ? `0, 2.5 ${width.value}, 2.5` : `2.5, 0 2.5, ${height.value}`
            }, null, 8, _hoisted_2$h),
            createElementVNode("polyline", {
              class: "bold-line",
              stroke: mergedColor.value[1],
              "stroke-width": "3",
              "stroke-dasharray": "20, 80",
              "stroke-dashoffset": "-30",
              points: _ctx.reverse ? `0, 2.5 ${width.value}, 2.5` : `2.5, 0 2.5, ${height.value}`
            }, null, 8, _hoisted_3$a)
          ], 8, _hoisted_1$t))
        ], 6)
      ], 512);
    };
  }
});
const Decoration4 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-97e7e3ce"]]);
const defaultColor$d = ["#2e6099", "#7ce7fd"];
function createDecoration5Props() {
  return {
    ...createColorProps(),
    ...createDurationProps(1.2)
  };
}
function getPointDistances(points2) {
  return Array.from({
    length: points2.length - 1
  }).fill(0).map((_, i) => calcTwoPointDistance(points2[i], points2[i + 1]));
}
function calcSVGData(width, height) {
  const line1Points = [[0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4], [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4], [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]];
  const line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]];
  return {
    line1Sum: sum(getPointDistances(line1Points)),
    line2Sum: sum(getPointDistances(line2Points)),
    line1Point: line1Points.map((point) => point.join(",")).join(" "),
    line2Point: line2Points.map((point) => point.join(",")).join(" ")
  };
}
const DecorationContainer$7 = styled.div`
  width: 100%;
  height: 100%;
`("decoration-5");
const Decoration5 = /* @__PURE__ */ defineComponent({
  name: "Decoration5",
  props: createDecoration5Props(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2,
        duration
      } = props;
      const mergedColor = mergeColor(defaultColor$d, color2);
      const {
        line1Sum,
        line2Sum,
        line1Point,
        line2Point
      } = calcSVGData(width, height);
      return createVNode(DecorationContainer$7, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": width,
          "height": height
        }, [createVNode("polyline", {
          "fill": "transparent",
          "stroke": mergedColor[0],
          "stroke-width": "3",
          "points": line1Point
        }, [createVNode("animate", {
          "attributeName": "stroke-dasharray",
          "attributeType": "XML",
          "from": `0, ${line1Sum / 2}, 0, ${line1Sum / 2}`,
          "to": `0, 0, ${line1Sum}, 0`,
          "dur": `${duration}s`,
          "begin": "0s",
          "calcMode": "spline",
          "keyTimes": "0;1",
          "keySplines": "0.4,1,0.49,0.98",
          "repeatCount": "indefinite"
        }, null)]), createVNode("polyline", {
          "fill": "transparent",
          "stroke": mergedColor[1],
          "stroke-width": "2",
          "points": line2Point
        }, [createVNode("animate", {
          "attributeName": "stroke-dasharray",
          "attributeType": "XML",
          "from": `0, ${line2Sum / 2}, 0, ${line2Sum / 2}`,
          "to": `0, 0, ${line2Sum}, 0`,
          "dur": `${duration}s`,
          "begin": "0s",
          "calcMode": "spline",
          "keyTimes": "0;1",
          "keySplines": ".4,1,.49,.98",
          "repeatCount": "indefinite"
        }, null)])])]
      });
    };
  }
});
const defaultColor$c = ["#7ce7fd", "#7ce7fd"];
const defaultSvgW = 300;
const defaultSvgH = 35;
const rowCount = 1;
const rowPoints = 40;
const rectWidth = 7;
const halfRectWidth = rectWidth / 2;
const DecorationContainer$6 = styled.div`
  width: 100%;
  height: 100%;

  .svg-origin {
    transform-origin: left top;
  }
`("decoration-6");
function calcPointsPosition({
  width,
  height,
  rowPoints: rowPoints2,
  rowCount: rowCount2
}) {
  const horizontalGap = width / (rowPoints2 + 1);
  const verticalGap = height / (rowCount2 + 1);
  const points2 = Array.from({
    length: rowCount2
  }).fill(0).flatMap((_, i) => Array.from({
    length: rowPoints2
  }).fill(0).map((_2, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)]));
  const heights2 = Array.from({
    length: rowCount2 * rowPoints2
  }).fill(0).map(() => Math.random() > 0.8 ? random(0.7 * height, height) : random(0.2 * height, 0.5 * height));
  const minHeights2 = Array.from({
    length: rowCount2 * rowPoints2
  }).fill(0).map((_, i) => heights2[i] * Math.random());
  const randoms2 = Array.from({
    length: rowCount2 * rowPoints2
  }).fill(0).map(() => Math.random() + 1.5);
  return {
    points: points2,
    heights: heights2,
    minHeights: minHeights2,
    randoms: randoms2
  };
}
const {
  points,
  heights,
  minHeights,
  randoms
} = calcPointsPosition({
  width: defaultSvgW,
  height: defaultSvgH,
  rowPoints,
  rowCount
});
const Decoration6 = /* @__PURE__ */ defineComponent({
  name: "Decoration6",
  props: createColorProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$c, color2);
      const svgStyle = {
        transform: `scale(${width / defaultSvgW},${height / defaultSvgH})`
      };
      const randomColor = () => mergedColor[Math.random() > 0.5 ? 0 : 1];
      return createVNode(DecorationContainer$6, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "class": "svg-origin",
          "width": width,
          "height": height,
          "style": svgStyle
        }, [points.map(([x, y], i) => createVNode("rect", {
          "key": `rect${i}`,
          "fill": randomColor(),
          "x": x - halfRectWidth,
          "y": y - heights[i],
          "width": rectWidth,
          "height": heights[i]
        }, [createVNode("animate", {
          "attributeName": "y",
          "values": `${y - minHeights[i] / 2};${y - heights[i] / 2};${y - minHeights[i] / 2}`,
          "dur": randoms[i],
          "keyTimes": "0;0.5;1",
          "calcMode": "spline",
          "keySplines": "0.42,0,0.58,1;0.42,0,0.58,1",
          "begin": "0s",
          "repeatCount": "indefinite"
        }, null), createVNode("animate", {
          "attributeName": "height",
          "values": `${minHeights[i]};${heights[i]};${minHeights[i]}`,
          "dur": randoms[i],
          "keyTimes": "0;0.5;1",
          "calcMode": "spline",
          "keySplines": "0.42,0,0.58,1;0.42,0,0.58,1",
          "begin": "0s",
          "repeatCount": "indefinite"
        }, null)]))])]
      });
    };
  }
});
const DecorationContainer$5 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-7");
const defaultColor$b = ["#2e6099", "#7ce7fd"];
const Decoration7 = /* @__PURE__ */ defineComponent({
  name: "Decoration7",
  props: createColorProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$b, color2);
      return createVNode(DecorationContainer$5, {
        "ref": autoBindRef
      }, {
        default: () => {
          var _a;
          return [createVNode("svg", {
            "width": "21px",
            "height": "20px"
          }, [createVNode("polyline", {
            "stroke-width": "4",
            "fill": "transparent",
            "stroke": mergedColor[0],
            "points": "10, 0 19, 10 10, 20"
          }, null), createVNode("polyline", {
            "stroke-width": "2",
            "fill": "transparent",
            "stroke": mergedColor[1],
            "points": "2, 0 11, 10 2, 20"
          }, null)]), (_a = slots.default) == null ? void 0 : _a.call(slots), createVNode("svg", {
            "width": "21px",
            "height": "20px"
          }, [createVNode("polyline", {
            "stroke-width": "4",
            "fill": "transparent",
            "stroke": mergedColor[0],
            "points": "11, 0 2, 10 11, 20"
          }, null), createVNode("polyline", {
            "stroke-width": "2",
            "fill": "transparent",
            "stroke": mergedColor[1],
            "points": "19, 0 10, 10 19, 20"
          }, null)])];
        }
      });
    };
  }
});
const defaultColor$a = ["#2e6099", "#7ce7fd"];
function createDecoration8Props() {
  return {
    ...createColorProps(),
    ...createReverseProps()
  };
}
const DecorationContainer$4 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`("decoration-8");
const Decoration8 = /* @__PURE__ */ defineComponent({
  name: "Decoration8",
  props: createDecoration8Props(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        color: color2,
        reverse
      } = props;
      const {
        width,
        height
      } = domSize;
      const xPos = (pos) => {
        if (!reverse) return pos;
        return width - pos;
      };
      const mergedColor = mergeColor(defaultColor$a, color2);
      return createVNode(DecorationContainer$4, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": width,
          "height": height
        }, [createVNode("polyline", {
          "stroke": mergedColor[0],
          "stroke-width": "2",
          "fill": "transparent",
          "points": `${xPos(0)}, 0 ${xPos(30)}, ${height / 2}`
        }, null), createVNode("polyline", {
          "stroke": mergedColor[0],
          "stroke-width": "2",
          "fill": "transparent",
          "points": `${xPos(20)}, 0 ${xPos(50)}, ${height / 2} ${xPos(width)}, ${height / 2}`
        }, null), createVNode("polyline", {
          "stroke": mergedColor[1],
          "fill": "transparent",
          "stroke-width": "3",
          "points": `${xPos(0)}, ${height - 3}, ${xPos(200)}, ${height - 3}`
        }, null)])]
      });
    };
  }
});
function createDecoration9Props() {
  return {
    ...createColorProps(),
    ...createDurationProps(3)
  };
}
const defaultColor$9 = ["#2e6099", "#7ce7fd"];
const svgWidth = 100;
const svgHeight = 100;
const DecorationContainer$3 = styled.div`
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
`("decoration-9");
const Decoration9 = /* @__PURE__ */ defineComponent({
  name: "Decoration9",
  props: createDecoration9Props(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    const polygonId = `decoration-9-polygon-${uuid.id}`;
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2,
        duration
      } = props;
      const mergedColor = mergeColor(defaultColor$9, color2);
      const svgStyle = {
        transform: `scale(${width / svgWidth},${height / svgHeight})`
      };
      return createVNode(DecorationContainer$3, {
        "ref": autoBindRef
      }, {
        default: () => {
          var _a;
          return [createVNode("svg", {
            "class": "svg-origin",
            "width": svgWidth,
            "height": svgHeight,
            "style": svgStyle
          }, [createVNode("defs", null, [createVNode("polygon", {
            "id": polygonId,
            "points": "15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"
          }, null)]), createVNode("circle", {
            "cx": "50",
            "cy": "50",
            "r": "45",
            "fill": "transparent",
            "stroke": mergedColor[1],
            "stroke-width": "10",
            "stroke-dasharray": "80, 100, 30, 100"
          }, [createVNode("animateTransform", {
            "attributeName": "transform",
            "type": "rotate",
            "values": "0 50 50;360 50 50",
            "dur": `${duration}s`,
            "repeatCount": "indefinite"
          }, null)]), createVNode("circle", {
            "cx": "50",
            "cy": "50",
            "r": "45",
            "fill": "transparent",
            "stroke": mergedColor[0],
            "stroke-width": "6",
            "stroke-dasharray": "50, 66, 100, 66"
          }, [createVNode("animateTransform", {
            "attributeName": "transform",
            "type": "rotate",
            "values": "0 50 50;-360 50 50",
            "dur": `${duration}s`,
            "repeatCount": "indefinite"
          }, null)]), createVNode("circle", {
            "cx": "50",
            "cy": "50",
            "r": "38",
            "fill": "transparent",
            "stroke": fade(mergedColor[1] || defaultColor$9[1], 30),
            "stroke-width": "1",
            "stroke-dasharray": "5, 1"
          }, null), Array.from({
            length: 20
          }).fill(0).map((foo, i) => {
            return createVNode("use", {
              "key": i,
              "xlink:href": `#${polygonId}`,
              "stroke": mergedColor[1],
              "fill": Math.random() > 0.4 ? "transparent" : mergedColor[0]
            }, [createVNode("animateTransform", {
              "attributeName": "transform",
              "type": "rotate",
              "values": "0 50 50;360 50 50",
              "dur": `${duration}s`,
              "begin": `${i * duration / 20}s`,
              "repeatCount": "indefinite"
            }, null)]);
          }), createVNode("circle", {
            "cx": "50",
            "cy": "50",
            "r": "26",
            "fill": "transparent",
            "stroke": fade(mergedColor[1] || defaultColor$9[1], 30),
            "stroke-width": "1",
            "stroke-dasharray": "5, 1"
          }, null)]), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
const DecorationContainer$2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-10");
const defaultColor$8 = ["#2e6099", "#7ce7fd"];
const Decoration10 = /* @__PURE__ */ defineComponent({
  name: "Decoration10",
  props: createColorProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    const animationId1 = `d10ani${uuid.id}1`;
    const animationId2 = `d10ani${uuid.id}2`;
    const animationId3 = `d10ani${uuid.id}3`;
    const animationId4 = `d10ani${uuid.id}4`;
    const animationId5 = `d10ani${uuid.id}5`;
    const animationId6 = `d10ani${uuid.id}6`;
    const animationId7 = `d10ani${uuid.id}7`;
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$8, color2);
      return createVNode(DecorationContainer$2, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": width,
          "height": height
        }, [createVNode("polyline", {
          "stroke": mergedColor[1],
          "stroke-width": "2",
          "points": `0, ${height / 2} ${width}, ${height / 2}`
        }, null), createVNode("polyline", {
          "stroke": mergedColor[0],
          "stroke-width": "2",
          "points": `5, ${height / 2} ${width * 0.2 - 3}, ${height / 2}`,
          "stroke-dasharray": `0, ${width * 0.2}`,
          "fill": "freeze"
        }, [createVNode("animate", {
          "id": animationId2,
          "attributeName": "stroke-dasharray",
          "values": `0, ${width * 0.2};${width * 0.2}, 0;`,
          "dur": "3s",
          "begin": `${animationId1}.end`,
          "fill": "freeze"
        }, null), createVNode("animate", {
          "attributeName": "stroke-dasharray",
          "values": `${width * 0.2}, 0;0, ${width * 0.2}`,
          "dur": "0.01s",
          "begin": `${animationId7}.end`,
          "fill": "freeze"
        }, null)]), createVNode("polyline", {
          "stroke": mergedColor[0],
          "stroke-width": "2",
          "points": `${width * 0.2 + 3}, ${height / 2} ${width * 0.8 - 3}, ${height / 2}`,
          "stroke-dasharray": `0, ${width * 0.6}`
        }, [createVNode("animate", {
          "id": animationId4,
          "attributeName": "stroke-dasharray",
          "values": `0, ${width * 0.6};${width * 0.6}, 0`,
          "dur": "3s",
          "begin": `${animationId3}.end + 1s`,
          "fill": "freeze"
        }, null), createVNode("animate", {
          "attributeName": "stroke-dasharray",
          "values": `${width * 0.6}, 0;0, ${width * 0.6}`,
          "dur": "0.01s",
          "begin": `${animationId7}.end`,
          "fill": "freeze"
        }, null)]), createVNode("polyline", {
          "stroke": mergedColor[0],
          "stroke-width": "2",
          "points": `${width * 0.8 + 3}, ${height / 2} ${width - 5}, ${height / 2}`,
          "stroke-dasharray": `0, ${width * 0.2}`
        }, [createVNode("animate", {
          "id": animationId6,
          "attributeName": "stroke-dasharray",
          "values": `0, ${width * 0.2};${width * 0.2}, 0`,
          "dur": "3s",
          "begin": `${animationId5}.end + 1s`,
          "fill": "freeze"
        }, null), createVNode("animate", {
          "attributeName": "stroke-dasharray",
          "values": `${width * 0.2}, 0;0, ${width * 0.3}`,
          "dur": "0.01s",
          "begin": `${animationId7}.end`,
          "fill": "freeze"
        }, null)]), createVNode("circle", {
          "cx": "2",
          "cy": height / 2,
          "r": "2",
          "fill": mergedColor[1]
        }, [createVNode("animate", {
          "id": animationId1,
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[0]}`,
          "begin": `0s;${animationId7}.end`,
          "dur": "0.3s",
          "fill": "freeze"
        }, null)]), createVNode("circle", {
          "cx": width * 0.2,
          "cy": height / 2,
          "r": "2",
          "fill": mergedColor[1]
        }, [createVNode("animate", {
          "id": animationId3,
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[0]}`,
          "begin": `${animationId2}.end`,
          "dur": "0.3s",
          "fill": "freeze"
        }, null), createVNode("animate", {
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[1]}`,
          "dur": "0.01s",
          "begin": `${animationId7}.end`,
          "fill": "freeze"
        }, null)]), createVNode("circle", {
          "cx": width * 0.8,
          "cy": height / 2,
          "r": "2",
          "fill": mergedColor[1]
        }, [createVNode("animate", {
          "id": animationId5,
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[0]}`,
          "begin": `${animationId4}.end`,
          "dur": "0.3s",
          "fill": "freeze"
        }, null), createVNode("animate", {
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[1]}`,
          "dur": "0.01s",
          "begin": `${animationId7}.end`,
          "fill": "freeze"
        }, null)]), createVNode("circle", {
          "cx": width - 2,
          "cy": height / 2,
          "r": "2",
          "fill": mergedColor[1]
        }, [createVNode("animate", {
          "id": animationId7,
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[0]}`,
          "begin": `${animationId6}.end`,
          "dur": "0.3s",
          "fill": "freeze"
        }, null), createVNode("animate", {
          "attributeName": "fill",
          "values": `${mergedColor[1]};${mergedColor[1]}`,
          "dur": "0.01s",
          "begin": `${animationId7}.end`,
          "fill": "freeze"
        }, null)])])]
      });
    };
  }
});
const DecorationContainer$1 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-11");
const DecorationContentContainer$1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content");
const defaultColor$7 = ["#2e6099", "#7ce7fd"];
const Decoration11 = /* @__PURE__ */ defineComponent({
  name: "Decoration11",
  props: createColorProps(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$7, color2);
      return createVNode(DecorationContainer$1, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": width,
          "height": height
        }, [createVNode("polygon", {
          "fill": fade(mergedColor[1] || defaultColor$7[1], 10),
          "stroke": mergedColor[1],
          "points": "20 10, 25 4, 55 4 60 10"
        }, null), createVNode("polygon", {
          "fill": fade(mergedColor[1] || defaultColor$7[1], 10),
          "stroke": mergedColor[1],
          "points": `20 ${height - 10}, 25 ${height - 4}, 55 ${height - 4} 60 ${height - 10}`
        }, null), createVNode("polygon", {
          "fill": fade(mergedColor[1] || defaultColor$7[1], 10),
          "stroke": mergedColor[1],
          "points": `${width - 20} 10, ${width - 25} 4, ${width - 55} 4 ${width - 60} 10`
        }, null), createVNode("polygon", {
          "fill": fade(mergedColor[1] || defaultColor$7[1], 10),
          "stroke": mergedColor[1],
          "points": `${width - 20} ${height - 10}, ${width - 25} ${height - 4}, ${width - 55} ${height - 4} ${width - 60} ${height - 10}`
        }, null), createVNode("polygon", {
          "fill": fade(mergedColor[0] || defaultColor$7[0], 20),
          "stroke": mergedColor[0],
          "points": `
        20 10, 5 ${height / 2} 20 ${height - 10}
        ${width - 20} ${height - 10} ${width - 5} ${height / 2} ${width - 20} 10
      `
        }, null), createVNode("polyline", {
          "fill": "transparent",
          "stroke": fade(mergedColor[0] || defaultColor$7[0], 70),
          "points": `25 18, 15 ${height / 2} 25 ${height - 18}`
        }, null), createVNode("polyline", {
          "fill": "transparent",
          "stroke": fade(mergedColor[0] || defaultColor$7[0], 70),
          "points": `${width - 25} 18, ${width - 15} ${height / 2} ${width - 25} ${height - 18}`
        }, null)]), createVNode(DecorationContentContainer$1, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const DecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-12");
const DecorationContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content");
const defaultColor$6 = ["#2e6099", "#7ce7fd"];
const segment = 30;
const sectorAngle = Math.PI / 3;
const ringNum = 3;
const ringWidth = 1;
const calcPathColor = (color2, segment2) => {
  const colorGap = 100 / (segment2 - 1);
  return Array.from({
    length: segment2
  }).fill(color2).map((_, i) => fade(color2, 100 - i * colorGap));
};
function createDecoration12Props() {
  return {
    ...createColorProps(),
    scanDuration: {
      type: Number,
      default: 3
    },
    haloDuration: {
      type: Number,
      default: 2
    }
  };
}
const getCircleRadianPoint = (x, y, radius, radian) => {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius];
};
const calcPathD = ({
  x,
  y,
  width,
  segment: segment2,
  sectorAngle: sectorAngle2
}) => {
  const startAngle = -Math.PI / 2;
  const angleGap = sectorAngle2 / segment2;
  const r = width / 4;
  let lastEndPoints = getCircleRadianPoint(x, y, r, startAngle);
  return Array.from({
    length: segment2
  }).fill("").map((_, i) => {
    const endPoints = getCircleRadianPoint(x, y, r, startAngle - (i + 1) * angleGap).map((_2) => _2.toFixed(5));
    const d = `M${lastEndPoints.join(",")} A${r}, ${r} 0 0 0 ${endPoints.join(",")}`;
    lastEndPoints = endPoints;
    return d;
  });
};
const calcCircleR = ({
  ringNum: ringNum2,
  width,
  ringWidth: ringWidth2
}) => {
  const radiusGap = (width / 2 - ringWidth2 / 2) / ringNum2;
  return Array.from({
    length: ringNum2
  }).fill(0).map((_, i) => radiusGap * (i + 1));
};
const calcSplitLinePoints = ({
  x,
  y,
  width
}) => {
  const angleGap = Math.PI / 6;
  const r = width / 2;
  return Array.from({
    length: 6
  }).fill("").map((_, i) => {
    const startAngle = angleGap * (i + 1);
    const endAngle = startAngle + Math.PI;
    const startPoint = getCircleRadianPoint(x, y, r, startAngle);
    const endPoint = getCircleRadianPoint(x, y, r, endAngle);
    return `${startPoint.join(",")} ${endPoint.join(",")}`;
  });
};
const calcArcD = ({
  x,
  y,
  width
}) => {
  const angleGap = Math.PI / 6;
  const r = width / 2 - 1;
  return Array.from({
    length: 4
  }).fill("").map((_, i) => {
    const startAngle = angleGap * (3 * i + 1);
    const endAngle = startAngle + angleGap;
    const startPoint = getCircleRadianPoint(x, y, r, startAngle);
    const endPoint = getCircleRadianPoint(x, y, r, endAngle);
    return `M${startPoint.join(",")} A${x}, ${y} 0 0 1 ${endPoint.join(",")}`;
  });
};
const Decoration12 = /* @__PURE__ */ defineComponent({
  name: "Decoration12",
  props: createDecoration12Props(),
  setup(props, {
    slots,
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    const uuid = useUuid();
    return () => {
      const {
        width,
        height
      } = domSize;
      const centerX = width / 2;
      const centerY = height / 2;
      const {
        color: color2,
        scanDuration,
        haloDuration
      } = props;
      const gId = `decoration-12-g-${uuid.id}`;
      const gradientId = `decoration-12-gradient-${uuid.id}`;
      const mergedColor = mergeColor(defaultColor$6, color2);
      const pathColor = calcPathColor(mergedColor[0], segment);
      const pathD = calcPathD({
        x: centerX,
        y: centerY,
        width,
        segment,
        sectorAngle
      });
      const circleR = calcCircleR({
        ringNum,
        ringWidth,
        width
      });
      const splitLinePoints = calcSplitLinePoints({
        x: centerX,
        y: centerY,
        width
      });
      const arcD = calcArcD({
        x: centerX,
        y: centerY,
        width
      });
      return createVNode(DecorationContainer, {
        "ref": autoBindRef
      }, {
        default: () => [createVNode("svg", {
          "width": width,
          "height": height
        }, [createVNode("defs", null, [createVNode("g", {
          "id": gId
        }, [pathD.map((d, k) => createVNode("path", {
          "stroke": pathColor[k],
          "stroke-width": width / 2,
          "fill": "transparent",
          "key": d,
          "d": d
        }, null))]), createVNode("radialGradient", {
          "id": gradientId,
          "cx": "50%",
          "cy": "50%",
          "r": "50%"
        }, [createVNode("stop", {
          "offset": "0%",
          "stop-color": "transparent",
          "stop-opacity": "1"
        }, null), createVNode("stop", {
          "offset": "100%",
          "stop-color": fade(mergedColor[1] || defaultColor$6[1], 30),
          "stop-opacity": "1"
        }, null)])]), circleR.map((r) => createVNode("circle", {
          "r": r,
          "cx": centerX,
          "cy": centerY,
          "stroke": mergedColor[1],
          "stroke-width": "0.5",
          "fill": "transparent"
        }, null)), createVNode("circle", {
          "r": "1",
          "cx": centerX,
          "cy": centerY,
          "stroke": "transparent",
          "fill": `url(#${gradientId})`
        }, [createVNode("animate", {
          "attributeName": "r",
          "values": `1;${width / 2}`,
          "dur": `${haloDuration}s`,
          "repeatCount": "indefinite"
        }, null), createVNode("animate", {
          "attributeName": "opacity",
          "values": "1;0",
          "dur": `${haloDuration}s`,
          "repeatCount": "indefinite"
        }, null)]), createVNode("circle", {
          "r": "2",
          "cx": centerX,
          "cy": centerY,
          "fill": mergedColor[1]
        }, null), createVNode("g", null, [splitLinePoints.map((p) => createVNode("polyline", {
          "key": p,
          "points": p,
          "stroke": mergedColor[1],
          "stroke-width": "0.5",
          "opacity": "0.5"
        }, null))]), arcD.map((d) => createVNode("path", {
          "key": d,
          "d": d,
          "stroke": mergedColor[1],
          "stroke-width": "2",
          "fill": "transparent"
        }, null)), createVNode("use", {
          "xlink:href": `#${gId}`
        }, [createVNode("animateTransform", {
          "attributeName": "transform",
          "type": "rotate",
          "values": `0, ${centerX} ${centerY};360, ${centerX} ${centerY}`,
          "dur": `${scanDuration}s`,
          "repeatCount": "indefinite"
        }, null)])]), createVNode(DecorationContentContainer, null, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    };
  }
});
const defaultColor$5 = ["#0042A2", "#0042A2"];
const HeaderSvgContainer$5 = styled.svg`
  position: absolute;
  top: 0;
  left: 4px;
  width: 100%;
  height: 100%;
`("header-svg-container");
const Header1 = /* @__PURE__ */ defineComponent({
  name: "Header1",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$5, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      const linearGradient4 = buildUUID();
      const linearGradient5 = buildUUID();
      const linearGradient6 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("header-1"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(HeaderSvgContainer$5, {
          "width": width,
          "height": height,
          "viewBox": "0 0 1920 76",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("导航1")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "90.1729911%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.282219733",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "32.4599473%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.183433266",
            "offset": "100%"
          }, null)]), createVNode("polygon", {
            "id": "path-3",
            "points": "12.423552 3.0356786e-14 706.941248 6.0905055e-14 719.893999 20.0956358 675.962761 75 48.3985693 75 0 20.3481229"
          }, null), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0.677614796%",
            "x2": "50%",
            "y2": "100%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.0116641171",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0.677614796%",
            "x2": "50%",
            "y2": "100%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.0116641171",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "99.7433963%",
            "y1": "49.7433963%",
            "x2": "0.256603748%",
            "y2": "49.7433963%",
            "id": linearGradient4
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "54.4973093%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "138.999809%",
            "y1": "49.9523588%",
            "x2": "0%",
            "y2": "50.0476412%",
            "id": linearGradient5
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "138.999809%",
            "y1": "49.9515511%",
            "x2": "0%",
            "y2": "50.0484489%",
            "id": linearGradient6
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "导航1",
            "transform": "translate(0.000000, -1411.000000)"
          }, [createVNode("g", {
            "transform": "translate(0.000000, 1411.000000)"
          }, [createVNode("g", {
            "id": "矩形",
            "opacity": "0.699999988",
            "transform": "translate(600.000000, 0.000000)"
          }, [createVNode("mask", {
            "id": "mask-4",
            "fill": "white"
          }, [createVNode("use", {
            "xlink:href": "#path-3"
          }, null)]), createVNode("use", {
            "id": "蒙版",
            "fill": `url(#${linearGradient1})`,
            "opacity": "0.74046689",
            "xlink:href": "#path-3"
          }, null)]), createVNode("polygon", {
            "id": "Rectangle-18",
            "fill": `url(#${linearGradient2})`,
            "opacity": "0.5",
            "points": "1305.12397 0 1920 0 1920 20.0704225 1318.40447 20.0704225"
          }, null), createVNode("polygon", {
            "id": "Rectangle-18",
            "fill": `url(#${linearGradient3})`,
            "opacity": "0.5",
            "transform": "translate(306.446281, 10.035211) scale(-1, 1) translate(-306.446281, -10.035211) ",
            "points": "0 0 612.892562 0 612.892562 20.0704225 12.4704007 20.0704225"
          }, null), createVNode("polyline", {
            "id": "Rectangle-34",
            "stroke": mergedColor[1],
            "points": "649.586777 68.6619718 607.933884 19.2333343 620.019616 3.16901408"
          }, null), createVNode("rect", {
            "id": "Rectangle-23",
            "stroke": mergedColor[1],
            "x": "649.095041",
            "y": "68.1056338",
            "width": "621.809917",
            "height": "1"
          }, null), createVNode("rect", {
            "id": "Rectangle-23备份",
            "stroke": `url(#${linearGradient4})`,
            "x": "649.095041",
            "y": "75.1056338",
            "width": "621.809917",
            "height": "1"
          }, null), createVNode("polyline", {
            "id": "Rectangle-34",
            "stroke": mergedColor[1],
            "transform": "translate(1292.330579, 35.746479) scale(-1, 1) translate(-1292.330579, -35.746479) ",
            "points": "1312.66116 68.4929577 1272 19.0573969 1283.83528 3"
          }, null), createVNode("polyline", {
            "id": "Path-16",
            "stroke": `url(#${linearGradient5})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "transform": "translate(1573.830579, 34.000000) scale(-1, -1) translate(-1573.830579, -34.000000) ",
            "points": "1833 26 1819.93141 42 1314.66116 42"
          }, null), createVNode("polyline", {
            "id": "Path-16备份-2",
            "stroke": `url(#${linearGradient6})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "transform": "translate(1574.000000, 9.000000) scale(-1, 1) translate(-1574.000000, -9.000000) ",
            "points": "1831 1 1820.27025 17 1317 17"
          }, null), createVNode("polyline", {
            "id": "Path-16备份",
            "stroke": `url(#${linearGradient6})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "points": "602 1 591.270255 17 88 17"
          }, null), createVNode("polyline", {
            "id": "Path-16备份",
            "stroke": `url(#${linearGradient6})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "transform": "translate(349.000000, 34.000000) scale(1, -1) translate(-349.000000, -34.000000) ",
            "points": "606 26 591.270255 42 92 42"
          }, null)])])])]
        })]
      });
    };
  }
});
const defaultColor$4 = ["#0077CF", "#0042A2"];
const HeaderSvgContainer$4 = styled.svg`
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  height: 100%;
`("header-svg-container");
const Header2 = /* @__PURE__ */ defineComponent({
  name: "Header2",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$4, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      const linearGradient4 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("header-2"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(HeaderSvgContainer$4, {
          "width": width,
          "height": height,
          "viewBox": "0 0 1920 80",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("导航2")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "100%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "72.202846%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "72.202846%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "0%",
            "x2": "50%",
            "y2": "72.202846%",
            "id": linearGradient4
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-头部素材",
            "transform": "translate(1.000000, -1085.000000)"
          }, [createVNode("g", {
            "id": "导航",
            "transform": "translate(-1.000000, 1085.000000)"
          }, [createVNode("path", {
            "d": "M1918.18628,0.5 L1884.46176,42.3799336 L1410.16051,42.3799336 L1397.00421,53.2643777 L1128.92285,53.3791297 L1114.87529,68.2703465 L800.006564,68.2703338 L785.959019,53.3791297 L518.196384,53.3791297 L504.721197,42.3799336 L30.4428759,42.3799336 L1.1171313,1.29046247 L956.825895,0.5 L1918.18628,0.5 Z",
            "id": "Combined-Shape",
            "stroke": mergedColor[0],
            "fill-opacity": "0.365517437",
            "fill": mergedColor[0]
          }, null), createVNode("g", {
            "transform": "translate(561.902273, 8.663981)",
            "id": "Rectangle-2"
          }, [createVNode("polygon", {
            "fill": `url(#${linearGradient1})`,
            "points": "113.383852 8.44738114 677.292919 8.44738114 691.030046 26.3541589 662.221318 61.0088638 136.944368 61.0088638 102.698076 26.1797894"
          }, null), createVNode("polygon", {
            "fill": `url(#${linearGradient2})`,
            "opacity": "0.200000003",
            "points": "18.8136922 0 781.1445 0 798.161907 25.4739865 760.048858 70.3948429 42.047344 70.3948429 0.290794433 28.7856581"
          }, null), createVNode("polygon", {
            "fill": `url(#${linearGradient3})`,
            "opacity": "0.400000006",
            "points": "46.638359 1.87719581 748.784949 1.87719581 767.36426 26.8955516 732.956067 68.0483481 67.8512948 68.0483481 27.40029 27.1451689"
          }, null), createVNode("polygon", {
            "fill": `url(#${linearGradient4})`,
            "opacity": "0.400000006",
            "points": "75.7564672 5.16228848 715.672851 5.16228848 732.141766 27.7558158 700.901937 65.2325544 98.9452132 65.2325544 62.7469036 28.5185552"
          }, null)]), createVNode("g", {
            "id": "Group-17",
            "transform": "translate(40.637575, 49.817889)"
          }, [createVNode("g", {
            "id": "Group-16",
            "transform": "translate(1083.800132, 0.000000)"
          }, [createVNode("path", {
            "d": "M22.5497346,8.64414182 L29.0531687,14.4020467 L25.1954999,14.4020467 L18.6920658,8.64414182 L22.5497346,8.64414182 Z M14.0657744,8.64414182 L20.5692085,14.4020467 L16.7115397,14.4020467 L10.2081057,8.64414182 L14.0657744,8.64414182 Z M5.58181428,8.64414182 L12.0852483,14.4020467 L8.22757956,14.4020467 L1.7241455,8.64414182 L5.58181428,8.64414182 Z",
            "id": "Combined-Shape",
            "stroke": mergedColor[0],
            "transform": "translate(15.388657, 11.523094) scale(-1, 1) translate(-15.388657, -11.523094) "
          }, null), createVNode("polyline", {
            "id": "Path-10",
            "stroke": mergedColor[1],
            "points": "26.2077068 11.5230943 256.98704 11.5230943 270.569967 0 754.772244 0"
          }, null)]), createVNode("g", {
            "id": "Group-16",
            "transform": "translate(374.103918, 7.529412) scale(-1, 1) translate(-374.103918, -7.529412) translate(0.043973, 0.000000)"
          }, [createVNode("path", {
            "d": "M20.61633,8.64414182 L26.3217289,13.5276875 L23.6411661,14.4020467 L17.9357672,9.51850103 L20.61633,8.64414182 Z M12.1323698,8.64414182 L17.8377687,13.5276875 L15.1572059,14.4020467 L9.45180703,9.51850103 L12.1323698,8.64414182 Z M3.64840965,8.64414182 L9.35380856,13.5276875 L6.67324577,14.4020467 L0.967846865,9.51850103 L3.64840965,8.64414182 Z",
            "id": "Combined-Shape",
            "stroke": mergedColor[0],
            "transform": "translate(13.644788, 11.523094) scale(-1, 1) translate(-13.644788, -11.523094) "
          }, null), createVNode("polyline", {
            "id": "Path-10",
            "stroke": mergedColor[1],
            "points": "24.4638375 11.5230943 255.243171 11.5230943 268.826098 0 748.011391 0"
          }, null)])])])])])]
        })]
      });
    };
  }
});
const defaultColor$3 = ["#0077CF", "#0042A2"];
const HeaderSvgContainer$3 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("header-svg-container");
const Header3 = /* @__PURE__ */ defineComponent({
  name: "Header3",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$3, color2);
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("header-3"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(HeaderSvgContainer$3, {
          "width": width,
          "height": height,
          "viewBox": "0 0 1920 75",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("导航3")]), createVNode("defs", null, [createVNode("polygon", {
            "id": "path-1",
            "points": "0 0 1920 0 1920 59.3320313 1197.34432 59.3320313 1186.95023 74.1189134 738.175482 74.1189134 728.75456 60.1189134 0 60.1189134"
          }, null)]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-头部素材",
            "transform": "translate(0.000000, -427.000000)"
          }, [createVNode("g", {
            "id": "导航3",
            "transform": "translate(0.000000, 427.000000)"
          }, [createVNode("g", {
            "id": "Group"
          }, [createVNode("mask", {
            "id": "mask-h32",
            "fill": "white"
          }, [createVNode("use", {
            "xlink:href": "#path-1"
          }, null)]), createVNode("g", {
            "opacity": "0.54904655",
            "mask": "url(#mask-h32)",
            "fill": mergedColor[1],
            "fill-rule": "nonzero",
            "id": "Shape"
          }, [createVNode("g", {
            "transform": "translate(419.099368, 30.618913) rotate(90.000000) translate(-419.099368, -30.618913) translate(375.576699, -389.381087)"
          }, [createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 38.3876986 0.8193914 30.360123 5.45666057 22.3347002 14.729045 22.3347002 19.3663142 30.360123 14.729045 38.3876986"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 19.1486417 0.8193914 11.1232189 5.45666057 3.09564326 14.729045 3.09564326 19.3663142 11.1232189 14.729045 19.1486417"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 57.6246028 0.8193914 49.5991799 5.45666057 41.5716043 14.729045 41.5716043 19.3663142 49.5991799 14.729045 57.6246028"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 76.8636597 0.8193914 68.8360841 5.45666057 60.8106612 14.729045 60.8106612 19.3663142 68.8360841 14.729045 76.8636597"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 96.1005638 0.8193914 88.075141 5.45666057 80.0475654 14.729045 80.0475654 19.3663142 88.075141 14.729045 96.1005638"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 115.337468 0.8193914 107.312045 5.45666057 99.2844695 14.729045 99.2844695 19.3663142 107.312045 14.729045 115.337468"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 134.576525 0.8193914 126.551102 5.45666057 118.523526 14.729045 118.523526 19.3663142 126.551102 14.729045 134.576525"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 153.815582 0.8193914 145.788006 5.45666057 137.762583 14.729045 137.762583 19.3663142 145.788006 14.729045 153.815582"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "5.45666057 173.052486 0.8193914 165.027063 5.45666057 156.999487 14.729045 156.999487 19.3663142 165.027063 14.729045 173.052486"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 192.291543 0.8193914 184.263967 5.45666057 176.236392 14.729045 176.236392 19.3663142 184.263967 14.729045 192.291543"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 211.528447 0.8193914 203.503024 5.45666057 195.475448 14.729045 195.475448 19.3663142 203.503024 14.729045 211.528447"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 230.765351 0.8193914 222.739928 5.45666057 214.712353 14.729045 214.712353 19.3663142 222.739928 14.729045 230.765351"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 250.004408 0.8193914 241.978985 5.45666057 233.95141 14.729045 233.95141 19.3663142 241.978985 14.729045 250.004408"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 269.243465 0.8193914 261.215889 5.45666057 253.190466 14.729045 253.190466 19.3663142 261.215889 14.729045 269.243465"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 288.480369 0.8193914 280.454946 5.45666057 272.427371 14.729045 272.427371 19.3663142 280.454946 14.729045 288.480369"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 307.717273 0.8193914 299.69185 5.45666057 291.664275 14.729045 291.664275 19.3663142 299.69185 14.729045 307.717273"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 326.95633 0.8193914 318.930907 5.45666057 310.903332 14.729045 310.903332 19.3663142 318.930907 14.729045 326.95633"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 346.193234 0.8193914 338.167811 5.45666057 330.140236 14.729045 330.140236 19.3663142 338.167811 14.729045 346.193234"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 365.432291 0.8193914 357.404716 5.45666057 349.379293 14.729045 349.379293 19.3663142 357.404716 14.729045 365.432291"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 384.669195 0.8193914 376.643772 5.45666057 368.616197 14.729045 368.616197 19.3663142 376.643772 14.729045 384.669195"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 403.908252 0.8193914 395.880677 5.45666057 387.853101 14.729045 387.853101 19.3663142 395.880677 14.729045 403.908252"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 423.145156 0.8193914 415.119733 5.45666057 407.092158 14.729045 407.092158 19.3663142 415.119733 14.729045 423.145156"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 442.386366 0.8193914 434.35879 5.45666057 426.331215 14.729045 426.331215 19.3663142 434.35879 14.729045 442.386366"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 461.621117 0.8193914 453.593542 5.45666057 445.568119 14.729045 445.568119 19.3663142 453.593542 14.729045 461.621117"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 480.860174 0.8193914 472.834751 5.45666057 464.805023 14.729045 464.805023 19.3663142 472.834751 14.729045 480.860174"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 500.099231 0.8193914 492.071656 5.45666057 484.04408 14.729045 484.04408 19.3663142 492.071656 14.729045 500.099231"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 519.336135 0.8193914 511.310712 5.45666057 503.283137 14.729045 503.283137 19.3663142 511.310712 14.729045 519.336135"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 538.573039 0.8193914 530.547617 5.45666057 522.522194 14.729045 522.522194 19.3663142 530.547617 14.729045 538.573039"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 557.809944 0.8193914 549.784521 5.45666057 541.756945 14.729045 541.756945 19.3663142 549.784521 14.729045 557.809944"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 577.051153 0.8193914 569.023578 5.45666057 560.996002 14.729045 560.996002 19.3663142 569.023578 14.729045 577.051153"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 596.288057 0.8193914 588.260482 5.45666057 580.235059 14.729045 580.235059 19.3663142 588.260482 14.729045 596.288057"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 615.524962 0.8193914 607.497386 5.45666057 599.471963 14.729045 599.471963 19.3663142 607.497386 14.729045 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 634.761866 0.8193914 626.736443 5.45666057 618.708867 14.729045 618.708867 19.3663142 626.736443 14.729045 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 654.000923 0.8193914 645.9755 5.45666057 637.945771 14.729045 637.945771 19.3663142 645.9755 14.729045 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 673.239979 0.8193914 665.214557 5.45666057 657.186981 14.729045 657.186981 19.3663142 665.214557 14.729045 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 692.476884 0.8193914 684.449308 5.45666057 676.423885 14.729045 676.423885 19.3663142 684.449308 14.729045 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 711.713788 0.8193914 703.688365 5.45666057 695.660789 14.729045 695.660789 19.3663142 703.688365 14.729045 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 730.952845 0.8193914 722.925269 5.45666057 714.899846 14.729045 714.899846 19.3663142 722.925269 14.729045 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 750.191902 0.8193914 742.164326 5.45666057 734.13675 14.729045 734.13675 19.3663142 742.164326 14.729045 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 769.428806 0.8193914 761.40123 5.45666057 753.375807 14.729045 753.375807 19.3663142 761.40123 14.729045 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 788.66571 0.8193914 780.640287 5.45666057 772.612711 14.729045 772.612711 19.3663142 780.640287 14.729045 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 807.904767 0.8193914 799.879344 5.45666057 791.851768 14.729045 791.851768 19.3663142 799.879344 14.729045 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 827.141671 0.8193914 819.116248 5.45666057 811.088672 14.729045 811.088672 19.3663142 819.116248 14.729045 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 830.327729 0.8193914 838.353152 1.65939836 839.806253 18.5284611 839.806253 19.3663142 838.353152 14.729045 830.327729"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 28.7175807 17.6173766 20.6921579 22.2524919 12.6645823 31.5248764 12.6645823 36.1621456 20.6921579 31.5248764 28.7175807"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "18.4552297 0 17.6173766 1.45310097 22.2524919 9.48067658 31.5248764 9.48067658 36.1621456 1.45310097 35.3242925 0"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 47.9566376 17.6173766 39.9312148 22.2524919 31.9036392 31.5248764 31.9036392 36.1621456 39.9312148 31.5248764 47.9566376"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 67.1935418 17.6173766 59.1681189 22.2524919 51.1405433 31.5248764 51.1405433 36.1621456 59.1681189 31.5248764 67.1935418"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 86.4325987 17.6173766 78.4050231 22.2524919 70.3796002 31.5248764 70.3796002 36.1621456 78.4050231 31.5248764 86.4325987"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 105.669503 17.6173766 97.64408 22.2524919 89.6165044 31.5248764 89.6165044 36.1621456 97.64408 31.5248764 105.669503"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 124.90856 17.6173766 116.880984 22.2524919 108.853409 31.5248764 108.853409 36.1621456 116.880984 31.5248764 124.90856"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 144.145464 17.6173766 136.120041 22.2524919 128.092465 31.5248764 128.092465 36.1621456 136.120041 31.5248764 144.145464"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 163.384521 17.6173766 155.356945 22.2524919 147.331522 31.5248764 147.331522 36.1621456 155.356945 31.5248764 163.384521"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 182.621425 17.6173766 174.596002 22.2524919 166.568426 31.5248764 166.568426 36.1621456 174.596002 31.5248764 182.621425"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 201.860482 17.6173766 193.832906 22.2524919 185.805331 31.5248764 185.805331 36.1621456 193.832906 31.5248764 201.860482"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 221.097386 17.6173766 213.071963 22.2524919 205.044387 31.5248764 205.044387 36.1621456 213.071963 31.5248764 221.097386"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 240.33429 17.6173766 232.308867 22.2524919 224.281292 31.5248764 224.281292 36.1621456 232.308867 31.5248764 240.33429"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 259.573347 17.6173766 251.547924 22.2524919 243.520349 31.5248764 243.520349 36.1621456 251.547924 31.5248764 259.573347"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 278.812404 17.6173766 270.784828 22.2524919 262.759405 31.5248764 262.759405 36.1621456 270.784828 31.5248764 278.812404"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 298.049308 17.6173766 290.023885 22.2524919 281.99631 31.5248764 281.99631 36.1621456 290.023885 31.5248764 298.049308"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 317.286212 17.6173766 309.260789 22.2524919 301.233214 31.5248764 301.233214 36.1621456 309.260789 31.5248764 317.286212"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 336.525269 17.6173766 328.499846 22.2524919 320.472271 31.5248764 320.472271 36.1621456 328.499846 31.5248764 336.525269"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 355.764326 17.6173766 347.73675 22.2524919 339.711328 31.5248764 339.711328 36.1621456 347.73675 31.5248764 355.764326"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 375.00123 17.6173766 366.975807 22.2524919 358.948232 31.5248764 358.948232 36.1621456 366.975807 31.5248764 375.00123"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 394.240287 17.6173766 386.212711 22.2524919 378.185136 31.5248764 378.185136 36.1621456 386.212711 31.5248764 394.240287"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 413.477191 17.6173766 405.451768 22.2524919 397.424193 31.5248764 397.424193 36.1621456 405.451768 31.5248764 413.477191"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 432.716248 17.6173766 424.690825 22.2524919 416.661097 31.5248764 416.661097 36.1621456 424.690825 31.5248764 432.716248"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 451.950999 17.6173766 443.925577 22.2524919 435.898001 31.5248764 435.898001 36.1621456 443.925577 31.5248764 451.950999"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 471.190056 17.6173766 463.164634 22.2524919 455.134905 31.5248764 455.134905 36.1621456 463.164634 31.5248764 471.190056"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 490.429113 17.6173766 482.40369 22.2524919 474.376115 31.5248764 474.376115 36.1621456 482.40369 31.5248764 490.429113"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 509.66817 17.6173766 501.640595 22.2524919 493.613019 31.5248764 493.613019 36.1621456 501.640595 31.5248764 509.66817"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 528.905074 17.6173766 520.877499 22.2524919 512.852076 31.5248764 512.852076 36.1621456 520.877499 31.5248764 528.905074"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 548.141978 17.6173766 540.116556 22.2524919 532.08898 31.5248764 532.08898 36.1621456 540.116556 31.5248764 548.141978"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 567.381035 17.6173766 559.35346 22.2524919 551.325884 31.5248764 551.325884 36.1621456 559.35346 31.5248764 567.381035"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 586.61794 17.6173766 578.592517 22.2524919 570.564941 31.5248764 570.564941 36.1621456 578.592517 31.5248764 586.61794"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 605.854844 17.6173766 597.829421 22.2524919 589.803998 31.5248764 589.803998 36.1621456 597.829421 31.5248764 605.854844"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 625.093901 17.6173766 617.066325 22.2524919 609.038749 31.5248764 609.038749 36.1621456 617.066325 31.5248764 625.093901"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 644.330805 17.6173766 636.305382 22.2524919 628.277806 31.5248764 628.277806 36.1621456 636.305382 31.5248764 644.330805"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 663.572014 17.6173766 655.544439 22.2524919 647.516863 31.5248764 647.516863 36.1621456 655.544439 31.5248764 663.572014"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 682.806766 17.6173766 674.77919 22.2524919 666.753767 31.5248764 666.753767 36.1621456 674.77919 31.5248764 682.806766"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 702.045823 17.6173766 694.018247 22.2524919 685.990671 31.5248764 685.990671 36.1621456 694.018247 31.5248764 702.045823"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 721.282727 17.6173766 713.257304 22.2524919 705.229728 31.5248764 705.229728 36.1621456 713.257304 31.5248764 721.282727"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 740.521784 17.6173766 732.496361 22.2524919 724.468785 31.5248764 724.468785 36.1621456 732.496361 31.5248764 740.521784"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 759.758688 17.6173766 751.733265 22.2524919 743.707842 31.5248764 743.707842 36.1621456 751.733265 31.5248764 759.758688"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 778.997745 17.6173766 770.970169 22.2524919 762.944746 31.5248764 762.944746 36.1621456 770.970169 31.5248764 778.997745"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 798.236802 17.6173766 790.209226 22.2524919 782.18165 31.5248764 782.18165 36.1621456 790.209226 31.5248764 798.236802"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 817.473706 17.6173766 809.44613 22.2524919 801.418555 31.5248764 801.418555 36.1621456 809.44613 31.5248764 817.473706"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 836.71061 17.6173766 828.685187 22.2524919 820.657611 31.5248764 820.657611 36.1621456 828.685187 31.5248764 836.71061"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 38.3876986 34.413208 30.360123 39.0483233 22.3347002 48.3207078 22.3347002 52.9601308 30.360123 48.3207078 38.3876986"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 19.1486417 34.413208 11.1232189 39.0483233 3.09564326 48.3207078 3.09564326 52.9601308 11.1232189 48.3207078 19.1486417"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 57.6246028 34.413208 49.5991799 39.0483233 41.5716043 48.3207078 41.5716043 52.9601308 49.5991799 48.3207078 57.6246028"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 76.8636597 34.413208 68.8360841 39.0483233 60.8106612 48.3207078 60.8106612 52.9601308 68.8360841 48.3207078 76.8636597"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 96.1005638 34.413208 88.075141 39.0483233 80.0475654 48.3207078 80.0475654 52.9601308 88.075141 48.3207078 96.1005638"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 115.337468 34.413208 107.312045 39.0483233 99.2844695 48.3207078 99.2844695 52.9601308 107.312045 48.3207078 115.337468"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 134.576525 34.413208 126.551102 39.0483233 118.523526 48.3207078 118.523526 52.9601308 126.551102 48.3207078 134.576525"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 153.815582 34.413208 145.788006 39.0483233 137.762583 48.3207078 137.762583 52.9601308 145.788006 48.3207078 153.815582"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 173.052486 34.413208 165.027063 39.0483233 156.999487 48.3207078 156.999487 52.9601308 165.027063 48.3207078 173.052486"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 192.291543 34.413208 184.263967 39.0483233 176.236392 48.3207078 176.236392 52.9601308 184.263967 48.3207078 192.291543"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 211.528447 34.413208 203.503024 39.0483233 195.475448 48.3207078 195.475448 52.9601308 203.503024 48.3207078 211.528447"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 230.765351 34.413208 222.739928 39.0483233 214.712353 48.3207078 214.712353 52.9601308 222.739928 48.3207078 230.765351"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 250.004408 34.413208 241.978985 39.0483233 233.95141 48.3207078 233.95141 52.9601308 241.978985 48.3207078 250.004408"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 269.243465 34.413208 261.215889 39.0483233 253.190466 48.3207078 253.190466 52.9601308 261.215889 48.3207078 269.243465"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 288.480369 34.413208 280.454946 39.0483233 272.427371 48.3207078 272.427371 52.9601308 280.454946 48.3207078 288.480369"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 307.717273 34.413208 299.69185 39.0483233 291.664275 48.3207078 291.664275 52.9601308 299.69185 48.3207078 307.717273"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 326.95633 34.413208 318.930907 39.0483233 310.903332 48.3207078 310.903332 52.9601308 318.930907 48.3207078 326.95633"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 346.193234 34.413208 338.167811 39.0483233 330.140236 48.3207078 330.140236 52.9601308 338.167811 48.3207078 346.193234"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 365.432291 34.413208 357.404716 39.0483233 349.379293 48.3207078 349.379293 52.9601308 357.404716 48.3207078 365.432291"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 384.669195 34.413208 376.643772 39.0483233 368.616197 48.3207078 368.616197 52.9601308 376.643772 48.3207078 384.669195"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 403.908252 34.413208 395.880677 39.0483233 387.853101 48.3207078 387.853101 52.9601308 395.880677 48.3207078 403.908252"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "39.0483233 423.145156 34.413208 415.119733 39.0483233 407.092158 48.3207078 407.092158 52.9601308 415.119733 48.3207078 423.145156"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 442.386366 34.413208 434.35879 39.0483233 426.331215 48.3207078 426.331215 52.9601308 434.35879 48.3207078 442.386366"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 461.621117 34.413208 453.593542 39.0483233 445.568119 48.3207078 445.568119 52.9601308 453.593542 48.3207078 461.621117"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 480.860174 34.413208 472.834751 39.0483233 464.805023 48.3207078 464.805023 52.9601308 472.834751 48.3207078 480.860174"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "39.0483233 500.099231 34.413208 492.071656 39.0483233 484.04408 48.3207078 484.04408 52.9601308 492.071656 48.3207078 500.099231"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 519.336135 34.413208 511.310712 39.0483233 503.283137 48.3207078 503.283137 52.9601308 511.310712 48.3207078 519.336135"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 538.573039 34.413208 530.547617 39.0483233 522.522194 48.3207078 522.522194 52.9601308 530.547617 48.3207078 538.573039"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 557.809944 34.413208 549.784521 39.0483233 541.756945 48.3207078 541.756945 52.9601308 549.784521 48.3207078 557.809944"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 577.051153 34.413208 569.023578 39.0483233 560.996002 48.3207078 560.996002 52.9601308 569.023578 48.3207078 577.051153"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 596.288057 34.413208 588.260482 39.0483233 580.235059 48.3207078 580.235059 52.9601308 588.260482 48.3207078 596.288057"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 615.524962 34.413208 607.497386 39.0483233 599.471963 48.3207078 599.471963 52.9601308 607.497386 48.3207078 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 634.761866 34.413208 626.736443 39.0483233 618.708867 48.3207078 618.708867 52.9601308 626.736443 48.3207078 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 654.000923 34.413208 645.9755 39.0483233 637.945771 48.3207078 637.945771 52.9601308 645.9755 48.3207078 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 673.239979 34.413208 665.214557 39.0483233 657.186981 48.3207078 657.186981 52.9601308 665.214557 48.3207078 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 692.476884 34.413208 684.449308 39.0483233 676.423885 48.3207078 676.423885 52.9601308 684.449308 48.3207078 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 711.713788 34.413208 703.688365 39.0483233 695.660789 48.3207078 695.660789 52.9601308 703.688365 48.3207078 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 730.952845 34.413208 722.925269 39.0483233 714.899846 48.3207078 714.899846 52.9601308 722.925269 48.3207078 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 750.191902 34.413208 742.164326 39.0483233 734.13675 48.3207078 734.13675 52.9601308 742.164326 48.3207078 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 769.428806 34.413208 761.40123 39.0483233 753.375807 48.3207078 753.375807 52.9601308 761.40123 48.3207078 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 788.66571 34.413208 780.640287 39.0483233 772.612711 48.3207078 772.612711 52.9601308 780.640287 48.3207078 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 807.904767 34.413208 799.879344 39.0483233 791.851768 48.3207078 791.851768 52.9601308 799.879344 48.3207078 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 827.141671 34.413208 819.116248 39.0483233 811.088672 48.3207078 811.088672 52.9601308 819.116248 48.3207078 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 830.327729 34.4110542 838.353152 35.2510611 839.806253 52.1201239 839.806253 52.9601308 838.353152 48.3207078 830.327729"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 28.7175807 51.2090394 20.6921579 55.8441547 12.6645823 65.1165392 12.6645823 69.7538083 20.6921579 65.1165392 28.7175807"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "52.0468925 0 51.2090394 1.45310097 55.8441547 9.48067658 65.1165392 9.48067658 69.7538083 1.45310097 68.9138014 0"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 47.9566376 51.2090394 39.9312148 55.8441547 31.9036392 65.1165392 31.9036392 69.7538083 39.9312148 65.1165392 47.9566376"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 67.1935418 51.2090394 59.1681189 55.8441547 51.1405433 65.1165392 51.1405433 69.7538083 59.1681189 65.1165392 67.1935418"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 86.4325987 51.2090394 78.4050231 55.8441547 70.3796002 65.1165392 70.3796002 69.7538083 78.4050231 65.1165392 86.4325987"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 105.669503 51.2090394 97.64408 55.8441547 89.6165044 65.1165392 89.6165044 69.7538083 97.64408 65.1165392 105.669503"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 124.90856 51.2090394 116.880984 55.8441547 108.853409 65.1165392 108.853409 69.7538083 116.880984 65.1165392 124.90856"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 144.145464 51.2090394 136.120041 55.8441547 128.092465 65.1165392 128.092465 69.7538083 136.120041 65.1165392 144.145464"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 163.384521 51.2090394 155.356945 55.8441547 147.331522 65.1165392 147.331522 69.7538083 155.356945 65.1165392 163.384521"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 182.621425 51.2090394 174.596002 55.8441547 166.568426 65.1165392 166.568426 69.7538083 174.596002 65.1165392 182.621425"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 201.860482 51.2090394 193.832906 55.8441547 185.805331 65.1165392 185.805331 69.7538083 193.832906 65.1165392 201.860482"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 221.097386 51.2090394 213.071963 55.8441547 205.044387 65.1165392 205.044387 69.7538083 213.071963 65.1165392 221.097386"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 240.33429 51.2090394 232.308867 55.8441547 224.281292 65.1165392 224.281292 69.7538083 232.308867 65.1165392 240.33429"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 259.573347 51.2090394 251.547924 55.8441547 243.520349 65.1165392 243.520349 69.7538083 251.547924 65.1165392 259.573347"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 278.812404 51.2090394 270.784828 55.8441547 262.759405 65.1165392 262.759405 69.7538083 270.784828 65.1165392 278.812404"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 298.049308 51.2090394 290.023885 55.8441547 281.99631 65.1165392 281.99631 69.7538083 290.023885 65.1165392 298.049308"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 317.286212 51.2090394 309.260789 55.8441547 301.233214 65.1165392 301.233214 69.7538083 309.260789 65.1165392 317.286212"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 336.525269 51.2090394 328.499846 55.8441547 320.472271 65.1165392 320.472271 69.7538083 328.499846 65.1165392 336.525269"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 355.764326 51.2090394 347.73675 55.8441547 339.711328 65.1165392 339.711328 69.7538083 347.73675 65.1165392 355.764326"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 375.00123 51.2090394 366.975807 55.8441547 358.948232 65.1165392 358.948232 69.7538083 366.975807 65.1165392 375.00123"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 394.240287 51.2090394 386.212711 55.8441547 378.185136 65.1165392 378.185136 69.7538083 386.212711 65.1165392 394.240287"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 413.477191 51.2090394 405.451768 55.8441547 397.424193 65.1165392 397.424193 69.7538083 405.451768 65.1165392 413.477191"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 432.716248 51.2090394 424.690825 55.8441547 416.661097 65.1165392 416.661097 69.7538083 424.690825 65.1165392 432.716248"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 451.950999 51.2090394 443.925577 55.8441547 435.898001 65.1165392 435.898001 69.7538083 443.925577 65.1165392 451.950999"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 471.190056 51.2090394 463.164634 55.8441547 455.134905 65.1165392 455.134905 69.7538083 463.164634 65.1165392 471.190056"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 490.429113 51.2090394 482.40369 55.8441547 474.376115 65.1165392 474.376115 69.7538083 482.40369 65.1165392 490.429113"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 509.66817 51.2090394 501.640595 55.8441547 493.613019 65.1165392 493.613019 69.7538083 501.640595 65.1165392 509.66817"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 528.905074 51.2090394 520.877499 55.8441547 512.852076 65.1165392 512.852076 69.7538083 520.877499 65.1165392 528.905074"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 548.141978 51.2090394 540.116556 55.8441547 532.08898 65.1165392 532.08898 69.7538083 540.116556 65.1165392 548.141978"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 567.381035 51.2090394 559.35346 55.8441547 551.325884 65.1165392 551.325884 69.7538083 559.35346 65.1165392 567.381035"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 586.61794 51.2090394 578.592517 55.8441547 570.564941 65.1165392 570.564941 69.7538083 578.592517 65.1165392 586.61794"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 605.854844 51.2090394 597.829421 55.8441547 589.803998 65.1165392 589.803998 69.7538083 597.829421 65.1165392 605.854844"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 625.093901 51.2090394 617.066325 55.8441547 609.038749 65.1165392 609.038749 69.7538083 617.066325 65.1165392 625.093901"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 644.330805 51.2090394 636.305382 55.8441547 628.277806 65.1165392 628.277806 69.7538083 636.305382 65.1165392 644.330805"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 663.572014 51.2090394 655.544439 55.8441547 647.516863 65.1165392 647.516863 69.7538083 655.544439 65.1165392 663.572014"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 682.806766 51.2090394 674.77919 55.8441547 666.753767 65.1165392 666.753767 69.7538083 674.77919 65.1165392 682.806766"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "55.8441547 702.045823 51.2090394 694.018247 55.8441547 685.990671 65.1165392 685.990671 69.7538083 694.018247 65.1165392 702.045823"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 721.282727 51.2090394 713.257304 55.8441547 705.229728 65.1165392 705.229728 69.7538083 713.257304 65.1165392 721.282727"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 740.521784 51.2090394 732.496361 55.8441547 724.468785 65.1165392 724.468785 69.7538083 732.496361 65.1165392 740.521784"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 759.758688 51.2090394 751.733265 55.8441547 743.707842 65.1165392 743.707842 69.7538083 751.733265 65.1165392 759.758688"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 778.997745 51.2090394 770.970169 55.8441547 762.944746 65.1165392 762.944746 69.7538083 770.970169 65.1165392 778.997745"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 798.236802 51.2090394 790.209226 55.8441547 782.18165 65.1165392 782.18165 69.7538083 790.209226 65.1165392 798.236802"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 817.473706 51.2090394 809.44613 55.8441547 801.418555 65.1165392 801.418555 69.7538083 809.44613 65.1165392 817.473706"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 836.71061 51.2090394 828.685187 55.8441547 820.657611 65.1165392 820.657611 69.7538083 828.685187 65.1165392 836.71061"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 38.3876986 68.0048708 30.360123 72.6399861 22.3347002 81.9123705 22.3347002 86.5496397 30.360123 81.9123705 38.3876986"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 19.1486417 68.0048708 11.1232189 72.6399861 3.09564326 81.9123705 3.09564326 86.5496397 11.1232189 81.9123705 19.1486417"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 57.6246028 68.0048708 49.5991799 72.6399861 41.5716043 81.9123705 41.5716043 86.5496397 49.5991799 81.9123705 57.6246028"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 76.8636597 68.0048708 68.8360841 72.6399861 60.8106612 81.9123705 60.8106612 86.5496397 68.8360841 81.9123705 76.8636597"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 96.1005638 68.0048708 88.075141 72.6399861 80.0475654 81.9123705 80.0475654 86.5496397 88.075141 81.9123705 96.1005638"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 115.337468 68.0048708 107.312045 72.6399861 99.2844695 81.9123705 99.2844695 86.5496397 107.312045 81.9123705 115.337468"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 134.576525 68.0048708 126.551102 72.6399861 118.523526 81.9123705 118.523526 86.5496397 126.551102 81.9123705 134.576525"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 153.815582 68.0048708 145.788006 72.6399861 137.762583 81.9123705 137.762583 86.5496397 145.788006 81.9123705 153.815582"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 173.052486 68.0048708 165.027063 72.6399861 156.999487 81.9123705 156.999487 86.5496397 165.027063 81.9123705 173.052486"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 192.291543 68.0048708 184.263967 72.6399861 176.236392 81.9123705 176.236392 86.5496397 184.263967 81.9123705 192.291543"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 211.528447 68.0048708 203.503024 72.6399861 195.475448 81.9123705 195.475448 86.5496397 203.503024 81.9123705 211.528447"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 230.765351 68.0048708 222.739928 72.6399861 214.712353 81.9123705 214.712353 86.5496397 222.739928 81.9123705 230.765351"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 250.004408 68.0048708 241.978985 72.6399861 233.95141 81.9123705 233.95141 86.5496397 241.978985 81.9123705 250.004408"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 269.243465 68.0048708 261.215889 72.6399861 253.190466 81.9123705 253.190466 86.5496397 261.215889 81.9123705 269.243465"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 288.480369 68.0048708 280.454946 72.6399861 272.427371 81.9123705 272.427371 86.5496397 280.454946 81.9123705 288.480369"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 307.717273 68.0048708 299.69185 72.6399861 291.664275 81.9123705 291.664275 86.5496397 299.69185 81.9123705 307.717273"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 326.95633 68.0048708 318.930907 72.6399861 310.903332 81.9123705 310.903332 86.5496397 318.930907 81.9123705 326.95633"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 346.193234 68.0048708 338.167811 72.6399861 330.140236 81.9123705 330.140236 86.5496397 338.167811 81.9123705 346.193234"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 365.432291 68.0048708 357.404716 72.6399861 349.379293 81.9123705 349.379293 86.5496397 357.404716 81.9123705 365.432291"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 384.669195 68.0048708 376.643772 72.6399861 368.616197 81.9123705 368.616197 86.5496397 376.643772 81.9123705 384.669195"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 403.908252 68.0048708 395.880677 72.6399861 387.853101 81.9123705 387.853101 86.5496397 395.880677 81.9123705 403.908252"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 423.145156 68.0048708 415.119733 72.6399861 407.092158 81.9123705 407.092158 86.5496397 415.119733 81.9123705 423.145156"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 442.386366 68.0048708 434.35879 72.6399861 426.331215 81.9123705 426.331215 86.5496397 434.35879 81.9123705 442.386366"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 461.621117 68.0048708 453.593542 72.6399861 445.568119 81.9123705 445.568119 86.5496397 453.593542 81.9123705 461.621117"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 480.860174 68.0048708 472.834751 72.6399861 464.805023 81.9123705 464.805023 86.5496397 472.834751 81.9123705 480.860174"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 500.099231 68.0048708 492.071656 72.6399861 484.04408 81.9123705 484.04408 86.5496397 492.071656 81.9123705 500.099231"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 519.336135 68.0048708 511.310712 72.6399861 503.283137 81.9123705 503.283137 86.5496397 511.310712 81.9123705 519.336135"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 538.573039 68.0048708 530.547617 72.6399861 522.522194 81.9123705 522.522194 86.5496397 530.547617 81.9123705 538.573039"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 557.809944 68.0048708 549.784521 72.6399861 541.756945 81.9123705 541.756945 86.5496397 549.784521 81.9123705 557.809944"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 577.051153 68.0048708 569.023578 72.6399861 560.996002 81.9123705 560.996002 86.5496397 569.023578 81.9123705 577.051153"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 596.288057 68.0048708 588.260482 72.6399861 580.235059 81.9123705 580.235059 86.5496397 588.260482 81.9123705 596.288057"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 615.524962 68.0048708 607.497386 72.6399861 599.471963 81.9123705 599.471963 86.5496397 607.497386 81.9123705 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 634.761866 68.0048708 626.736443 72.6399861 618.708867 81.9123705 618.708867 86.5496397 626.736443 81.9123705 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 654.000923 68.0048708 645.9755 72.6399861 637.945771 81.9123705 637.945771 86.5496397 645.9755 81.9123705 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 673.239979 68.0048708 665.214557 72.6399861 657.186981 81.9123705 657.186981 86.5496397 665.214557 81.9123705 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 692.476884 68.0048708 684.449308 72.6399861 676.423885 81.9123705 676.423885 86.5496397 684.449308 81.9123705 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 711.713788 68.0048708 703.688365 72.6399861 695.660789 81.9123705 695.660789 86.5496397 703.688365 81.9123705 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 730.952845 68.0048708 722.925269 72.6399861 714.899846 81.9123705 714.899846 86.5496397 722.925269 81.9123705 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 750.191902 68.0048708 742.164326 72.6399861 734.13675 81.9123705 734.13675 86.5496397 742.164326 81.9123705 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 769.428806 68.0048708 761.40123 72.6399861 753.375807 81.9123705 753.375807 86.5496397 761.40123 81.9123705 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 788.66571 68.0048708 780.640287 72.6399861 772.612711 81.9123705 772.612711 86.5496397 780.640287 81.9123705 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 807.904767 68.0048708 799.879344 72.6399861 791.851768 81.9123705 791.851768 86.5496397 799.879344 81.9123705 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 827.141671 68.0048708 819.116248 72.6399861 811.088672 81.9123705 811.088672 86.5496397 819.116248 81.9123705 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 830.327729 68.0027169 838.353152 68.8427239 839.806253 85.7117866 839.806253 86.5496397 838.353152 81.9123705 830.327729"
          }, null)])]), createVNode("g", {
            "opacity": "0.54904655",
            "mask": "url(#mask-h32)",
            "fill": mergedColor[1],
            "fill-rule": "nonzero",
            "id": "Shape"
          }, [createVNode("g", {
            "transform": "translate(1259.537096, 30.618913) scale(-1, 1) rotate(90.000000) translate(-1259.537096, -30.618913) translate(1216.014427, -389.381087)"
          }, [createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 38.3876986 0.8193914 30.360123 5.45666057 22.3347002 14.729045 22.3347002 19.3663142 30.360123 14.729045 38.3876986"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 19.1486417 0.8193914 11.1232189 5.45666057 3.09564326 14.729045 3.09564326 19.3663142 11.1232189 14.729045 19.1486417"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 57.6246028 0.8193914 49.5991799 5.45666057 41.5716043 14.729045 41.5716043 19.3663142 49.5991799 14.729045 57.6246028"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 76.8636597 0.8193914 68.8360841 5.45666057 60.8106612 14.729045 60.8106612 19.3663142 68.8360841 14.729045 76.8636597"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 96.1005638 0.8193914 88.075141 5.45666057 80.0475654 14.729045 80.0475654 19.3663142 88.075141 14.729045 96.1005638"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 115.337468 0.8193914 107.312045 5.45666057 99.2844695 14.729045 99.2844695 19.3663142 107.312045 14.729045 115.337468"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 134.576525 0.8193914 126.551102 5.45666057 118.523526 14.729045 118.523526 19.3663142 126.551102 14.729045 134.576525"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 153.815582 0.8193914 145.788006 5.45666057 137.762583 14.729045 137.762583 19.3663142 145.788006 14.729045 153.815582"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "5.45666057 173.052486 0.8193914 165.027063 5.45666057 156.999487 14.729045 156.999487 19.3663142 165.027063 14.729045 173.052486"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 192.291543 0.8193914 184.263967 5.45666057 176.236392 14.729045 176.236392 19.3663142 184.263967 14.729045 192.291543"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 211.528447 0.8193914 203.503024 5.45666057 195.475448 14.729045 195.475448 19.3663142 203.503024 14.729045 211.528447"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 230.765351 0.8193914 222.739928 5.45666057 214.712353 14.729045 214.712353 19.3663142 222.739928 14.729045 230.765351"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 250.004408 0.8193914 241.978985 5.45666057 233.95141 14.729045 233.95141 19.3663142 241.978985 14.729045 250.004408"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 269.243465 0.8193914 261.215889 5.45666057 253.190466 14.729045 253.190466 19.3663142 261.215889 14.729045 269.243465"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 288.480369 0.8193914 280.454946 5.45666057 272.427371 14.729045 272.427371 19.3663142 280.454946 14.729045 288.480369"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 307.717273 0.8193914 299.69185 5.45666057 291.664275 14.729045 291.664275 19.3663142 299.69185 14.729045 307.717273"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 326.95633 0.8193914 318.930907 5.45666057 310.903332 14.729045 310.903332 19.3663142 318.930907 14.729045 326.95633"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 346.193234 0.8193914 338.167811 5.45666057 330.140236 14.729045 330.140236 19.3663142 338.167811 14.729045 346.193234"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 365.432291 0.8193914 357.404716 5.45666057 349.379293 14.729045 349.379293 19.3663142 357.404716 14.729045 365.432291"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 384.669195 0.8193914 376.643772 5.45666057 368.616197 14.729045 368.616197 19.3663142 376.643772 14.729045 384.669195"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 403.908252 0.8193914 395.880677 5.45666057 387.853101 14.729045 387.853101 19.3663142 395.880677 14.729045 403.908252"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 423.145156 0.8193914 415.119733 5.45666057 407.092158 14.729045 407.092158 19.3663142 415.119733 14.729045 423.145156"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 442.386366 0.8193914 434.35879 5.45666057 426.331215 14.729045 426.331215 19.3663142 434.35879 14.729045 442.386366"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 461.621117 0.8193914 453.593542 5.45666057 445.568119 14.729045 445.568119 19.3663142 453.593542 14.729045 461.621117"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 480.860174 0.8193914 472.834751 5.45666057 464.805023 14.729045 464.805023 19.3663142 472.834751 14.729045 480.860174"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 500.099231 0.8193914 492.071656 5.45666057 484.04408 14.729045 484.04408 19.3663142 492.071656 14.729045 500.099231"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 519.336135 0.8193914 511.310712 5.45666057 503.283137 14.729045 503.283137 19.3663142 511.310712 14.729045 519.336135"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 538.573039 0.8193914 530.547617 5.45666057 522.522194 14.729045 522.522194 19.3663142 530.547617 14.729045 538.573039"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 557.809944 0.8193914 549.784521 5.45666057 541.756945 14.729045 541.756945 19.3663142 549.784521 14.729045 557.809944"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 577.051153 0.8193914 569.023578 5.45666057 560.996002 14.729045 560.996002 19.3663142 569.023578 14.729045 577.051153"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 596.288057 0.8193914 588.260482 5.45666057 580.235059 14.729045 580.235059 19.3663142 588.260482 14.729045 596.288057"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 615.524962 0.8193914 607.497386 5.45666057 599.471963 14.729045 599.471963 19.3663142 607.497386 14.729045 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 634.761866 0.8193914 626.736443 5.45666057 618.708867 14.729045 618.708867 19.3663142 626.736443 14.729045 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 654.000923 0.8193914 645.9755 5.45666057 637.945771 14.729045 637.945771 19.3663142 645.9755 14.729045 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 673.239979 0.8193914 665.214557 5.45666057 657.186981 14.729045 657.186981 19.3663142 665.214557 14.729045 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 692.476884 0.8193914 684.449308 5.45666057 676.423885 14.729045 676.423885 19.3663142 684.449308 14.729045 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 711.713788 0.8193914 703.688365 5.45666057 695.660789 14.729045 695.660789 19.3663142 703.688365 14.729045 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 730.952845 0.8193914 722.925269 5.45666057 714.899846 14.729045 714.899846 19.3663142 722.925269 14.729045 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 750.191902 0.8193914 742.164326 5.45666057 734.13675 14.729045 734.13675 19.3663142 742.164326 14.729045 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 769.428806 0.8193914 761.40123 5.45666057 753.375807 14.729045 753.375807 19.3663142 761.40123 14.729045 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 788.66571 0.8193914 780.640287 5.45666057 772.612711 14.729045 772.612711 19.3663142 780.640287 14.729045 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 807.904767 0.8193914 799.879344 5.45666057 791.851768 14.729045 791.851768 19.3663142 799.879344 14.729045 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 827.141671 0.8193914 819.116248 5.45666057 811.088672 14.729045 811.088672 19.3663142 819.116248 14.729045 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 830.327729 0.8193914 838.353152 1.65939836 839.806253 18.5284611 839.806253 19.3663142 838.353152 14.729045 830.327729"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 28.7175807 17.6173766 20.6921579 22.2524919 12.6645823 31.5248764 12.6645823 36.1621456 20.6921579 31.5248764 28.7175807"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "18.4552297 0 17.6173766 1.45310097 22.2524919 9.48067658 31.5248764 9.48067658 36.1621456 1.45310097 35.3242925 0"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 47.9566376 17.6173766 39.9312148 22.2524919 31.9036392 31.5248764 31.9036392 36.1621456 39.9312148 31.5248764 47.9566376"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 67.1935418 17.6173766 59.1681189 22.2524919 51.1405433 31.5248764 51.1405433 36.1621456 59.1681189 31.5248764 67.1935418"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 86.4325987 17.6173766 78.4050231 22.2524919 70.3796002 31.5248764 70.3796002 36.1621456 78.4050231 31.5248764 86.4325987"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.433662041",
            "points": "22.2524919 105.669503 17.6173766 97.64408 22.2524919 89.6165044 31.5248764 89.6165044 36.1621456 97.64408 31.5248764 105.669503"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 124.90856 17.6173766 116.880984 22.2524919 108.853409 31.5248764 108.853409 36.1621456 116.880984 31.5248764 124.90856"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 144.145464 17.6173766 136.120041 22.2524919 128.092465 31.5248764 128.092465 36.1621456 136.120041 31.5248764 144.145464"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 163.384521 17.6173766 155.356945 22.2524919 147.331522 31.5248764 147.331522 36.1621456 155.356945 31.5248764 163.384521"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 182.621425 17.6173766 174.596002 22.2524919 166.568426 31.5248764 166.568426 36.1621456 174.596002 31.5248764 182.621425"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 201.860482 17.6173766 193.832906 22.2524919 185.805331 31.5248764 185.805331 36.1621456 193.832906 31.5248764 201.860482"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 221.097386 17.6173766 213.071963 22.2524919 205.044387 31.5248764 205.044387 36.1621456 213.071963 31.5248764 221.097386"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 240.33429 17.6173766 232.308867 22.2524919 224.281292 31.5248764 224.281292 36.1621456 232.308867 31.5248764 240.33429"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 259.573347 17.6173766 251.547924 22.2524919 243.520349 31.5248764 243.520349 36.1621456 251.547924 31.5248764 259.573347"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 278.812404 17.6173766 270.784828 22.2524919 262.759405 31.5248764 262.759405 36.1621456 270.784828 31.5248764 278.812404"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 298.049308 17.6173766 290.023885 22.2524919 281.99631 31.5248764 281.99631 36.1621456 290.023885 31.5248764 298.049308"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 317.286212 17.6173766 309.260789 22.2524919 301.233214 31.5248764 301.233214 36.1621456 309.260789 31.5248764 317.286212"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 336.525269 17.6173766 328.499846 22.2524919 320.472271 31.5248764 320.472271 36.1621456 328.499846 31.5248764 336.525269"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 355.764326 17.6173766 347.73675 22.2524919 339.711328 31.5248764 339.711328 36.1621456 347.73675 31.5248764 355.764326"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 375.00123 17.6173766 366.975807 22.2524919 358.948232 31.5248764 358.948232 36.1621456 366.975807 31.5248764 375.00123"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 394.240287 17.6173766 386.212711 22.2524919 378.185136 31.5248764 378.185136 36.1621456 386.212711 31.5248764 394.240287"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 413.477191 17.6173766 405.451768 22.2524919 397.424193 31.5248764 397.424193 36.1621456 405.451768 31.5248764 413.477191"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 432.716248 17.6173766 424.690825 22.2524919 416.661097 31.5248764 416.661097 36.1621456 424.690825 31.5248764 432.716248"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 451.950999 17.6173766 443.925577 22.2524919 435.898001 31.5248764 435.898001 36.1621456 443.925577 31.5248764 451.950999"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 471.190056 17.6173766 463.164634 22.2524919 455.134905 31.5248764 455.134905 36.1621456 463.164634 31.5248764 471.190056"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 490.429113 17.6173766 482.40369 22.2524919 474.376115 31.5248764 474.376115 36.1621456 482.40369 31.5248764 490.429113"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 509.66817 17.6173766 501.640595 22.2524919 493.613019 31.5248764 493.613019 36.1621456 501.640595 31.5248764 509.66817"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 528.905074 17.6173766 520.877499 22.2524919 512.852076 31.5248764 512.852076 36.1621456 520.877499 31.5248764 528.905074"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 548.141978 17.6173766 540.116556 22.2524919 532.08898 31.5248764 532.08898 36.1621456 540.116556 31.5248764 548.141978"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 567.381035 17.6173766 559.35346 22.2524919 551.325884 31.5248764 551.325884 36.1621456 559.35346 31.5248764 567.381035"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 586.61794 17.6173766 578.592517 22.2524919 570.564941 31.5248764 570.564941 36.1621456 578.592517 31.5248764 586.61794"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 605.854844 17.6173766 597.829421 22.2524919 589.803998 31.5248764 589.803998 36.1621456 597.829421 31.5248764 605.854844"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 625.093901 17.6173766 617.066325 22.2524919 609.038749 31.5248764 609.038749 36.1621456 617.066325 31.5248764 625.093901"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 644.330805 17.6173766 636.305382 22.2524919 628.277806 31.5248764 628.277806 36.1621456 636.305382 31.5248764 644.330805"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 663.572014 17.6173766 655.544439 22.2524919 647.516863 31.5248764 647.516863 36.1621456 655.544439 31.5248764 663.572014"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 682.806766 17.6173766 674.77919 22.2524919 666.753767 31.5248764 666.753767 36.1621456 674.77919 31.5248764 682.806766"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 702.045823 17.6173766 694.018247 22.2524919 685.990671 31.5248764 685.990671 36.1621456 694.018247 31.5248764 702.045823"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 721.282727 17.6173766 713.257304 22.2524919 705.229728 31.5248764 705.229728 36.1621456 713.257304 31.5248764 721.282727"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 740.521784 17.6173766 732.496361 22.2524919 724.468785 31.5248764 724.468785 36.1621456 732.496361 31.5248764 740.521784"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 759.758688 17.6173766 751.733265 22.2524919 743.707842 31.5248764 743.707842 36.1621456 751.733265 31.5248764 759.758688"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 778.997745 17.6173766 770.970169 22.2524919 762.944746 31.5248764 762.944746 36.1621456 770.970169 31.5248764 778.997745"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 798.236802 17.6173766 790.209226 22.2524919 782.18165 31.5248764 782.18165 36.1621456 790.209226 31.5248764 798.236802"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 817.473706 17.6173766 809.44613 22.2524919 801.418555 31.5248764 801.418555 36.1621456 809.44613 31.5248764 817.473706"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 836.71061 17.6173766 828.685187 22.2524919 820.657611 31.5248764 820.657611 36.1621456 828.685187 31.5248764 836.71061"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 38.3876986 34.413208 30.360123 39.0483233 22.3347002 48.3207078 22.3347002 52.9601308 30.360123 48.3207078 38.3876986"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 19.1486417 34.413208 11.1232189 39.0483233 3.09564326 48.3207078 3.09564326 52.9601308 11.1232189 48.3207078 19.1486417"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 57.6246028 34.413208 49.5991799 39.0483233 41.5716043 48.3207078 41.5716043 52.9601308 49.5991799 48.3207078 57.6246028"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 76.8636597 34.413208 68.8360841 39.0483233 60.8106612 48.3207078 60.8106612 52.9601308 68.8360841 48.3207078 76.8636597"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 96.1005638 34.413208 88.075141 39.0483233 80.0475654 48.3207078 80.0475654 52.9601308 88.075141 48.3207078 96.1005638"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 115.337468 34.413208 107.312045 39.0483233 99.2844695 48.3207078 99.2844695 52.9601308 107.312045 48.3207078 115.337468"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 134.576525 34.413208 126.551102 39.0483233 118.523526 48.3207078 118.523526 52.9601308 126.551102 48.3207078 134.576525"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 153.815582 34.413208 145.788006 39.0483233 137.762583 48.3207078 137.762583 52.9601308 145.788006 48.3207078 153.815582"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 173.052486 34.413208 165.027063 39.0483233 156.999487 48.3207078 156.999487 52.9601308 165.027063 48.3207078 173.052486"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 192.291543 34.413208 184.263967 39.0483233 176.236392 48.3207078 176.236392 52.9601308 184.263967 48.3207078 192.291543"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 211.528447 34.413208 203.503024 39.0483233 195.475448 48.3207078 195.475448 52.9601308 203.503024 48.3207078 211.528447"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 230.765351 34.413208 222.739928 39.0483233 214.712353 48.3207078 214.712353 52.9601308 222.739928 48.3207078 230.765351"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 250.004408 34.413208 241.978985 39.0483233 233.95141 48.3207078 233.95141 52.9601308 241.978985 48.3207078 250.004408"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 269.243465 34.413208 261.215889 39.0483233 253.190466 48.3207078 253.190466 52.9601308 261.215889 48.3207078 269.243465"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 288.480369 34.413208 280.454946 39.0483233 272.427371 48.3207078 272.427371 52.9601308 280.454946 48.3207078 288.480369"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 307.717273 34.413208 299.69185 39.0483233 291.664275 48.3207078 291.664275 52.9601308 299.69185 48.3207078 307.717273"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 326.95633 34.413208 318.930907 39.0483233 310.903332 48.3207078 310.903332 52.9601308 318.930907 48.3207078 326.95633"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 346.193234 34.413208 338.167811 39.0483233 330.140236 48.3207078 330.140236 52.9601308 338.167811 48.3207078 346.193234"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 365.432291 34.413208 357.404716 39.0483233 349.379293 48.3207078 349.379293 52.9601308 357.404716 48.3207078 365.432291"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 384.669195 34.413208 376.643772 39.0483233 368.616197 48.3207078 368.616197 52.9601308 376.643772 48.3207078 384.669195"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 403.908252 34.413208 395.880677 39.0483233 387.853101 48.3207078 387.853101 52.9601308 395.880677 48.3207078 403.908252"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "39.0483233 423.145156 34.413208 415.119733 39.0483233 407.092158 48.3207078 407.092158 52.9601308 415.119733 48.3207078 423.145156"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 442.386366 34.413208 434.35879 39.0483233 426.331215 48.3207078 426.331215 52.9601308 434.35879 48.3207078 442.386366"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 461.621117 34.413208 453.593542 39.0483233 445.568119 48.3207078 445.568119 52.9601308 453.593542 48.3207078 461.621117"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 480.860174 34.413208 472.834751 39.0483233 464.805023 48.3207078 464.805023 52.9601308 472.834751 48.3207078 480.860174"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "39.0483233 500.099231 34.413208 492.071656 39.0483233 484.04408 48.3207078 484.04408 52.9601308 492.071656 48.3207078 500.099231"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 519.336135 34.413208 511.310712 39.0483233 503.283137 48.3207078 503.283137 52.9601308 511.310712 48.3207078 519.336135"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 538.573039 34.413208 530.547617 39.0483233 522.522194 48.3207078 522.522194 52.9601308 530.547617 48.3207078 538.573039"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 557.809944 34.413208 549.784521 39.0483233 541.756945 48.3207078 541.756945 52.9601308 549.784521 48.3207078 557.809944"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 577.051153 34.413208 569.023578 39.0483233 560.996002 48.3207078 560.996002 52.9601308 569.023578 48.3207078 577.051153"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 596.288057 34.413208 588.260482 39.0483233 580.235059 48.3207078 580.235059 52.9601308 588.260482 48.3207078 596.288057"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 615.524962 34.413208 607.497386 39.0483233 599.471963 48.3207078 599.471963 52.9601308 607.497386 48.3207078 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 634.761866 34.413208 626.736443 39.0483233 618.708867 48.3207078 618.708867 52.9601308 626.736443 48.3207078 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 654.000923 34.413208 645.9755 39.0483233 637.945771 48.3207078 637.945771 52.9601308 645.9755 48.3207078 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 673.239979 34.413208 665.214557 39.0483233 657.186981 48.3207078 657.186981 52.9601308 665.214557 48.3207078 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 692.476884 34.413208 684.449308 39.0483233 676.423885 48.3207078 676.423885 52.9601308 684.449308 48.3207078 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 711.713788 34.413208 703.688365 39.0483233 695.660789 48.3207078 695.660789 52.9601308 703.688365 48.3207078 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 730.952845 34.413208 722.925269 39.0483233 714.899846 48.3207078 714.899846 52.9601308 722.925269 48.3207078 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 750.191902 34.413208 742.164326 39.0483233 734.13675 48.3207078 734.13675 52.9601308 742.164326 48.3207078 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 769.428806 34.413208 761.40123 39.0483233 753.375807 48.3207078 753.375807 52.9601308 761.40123 48.3207078 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 788.66571 34.413208 780.640287 39.0483233 772.612711 48.3207078 772.612711 52.9601308 780.640287 48.3207078 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 807.904767 34.413208 799.879344 39.0483233 791.851768 48.3207078 791.851768 52.9601308 799.879344 48.3207078 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 827.141671 34.413208 819.116248 39.0483233 811.088672 48.3207078 811.088672 52.9601308 819.116248 48.3207078 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 830.327729 34.4110542 838.353152 35.2510611 839.806253 52.1201239 839.806253 52.9601308 838.353152 48.3207078 830.327729"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 28.7175807 51.2090394 20.6921579 55.8441547 12.6645823 65.1165392 12.6645823 69.7538083 20.6921579 65.1165392 28.7175807"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "52.0468925 0 51.2090394 1.45310097 55.8441547 9.48067658 65.1165392 9.48067658 69.7538083 1.45310097 68.9138014 0"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 47.9566376 51.2090394 39.9312148 55.8441547 31.9036392 65.1165392 31.9036392 69.7538083 39.9312148 65.1165392 47.9566376"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 67.1935418 51.2090394 59.1681189 55.8441547 51.1405433 65.1165392 51.1405433 69.7538083 59.1681189 65.1165392 67.1935418"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 86.4325987 51.2090394 78.4050231 55.8441547 70.3796002 65.1165392 70.3796002 69.7538083 78.4050231 65.1165392 86.4325987"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 105.669503 51.2090394 97.64408 55.8441547 89.6165044 65.1165392 89.6165044 69.7538083 97.64408 65.1165392 105.669503"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 124.90856 51.2090394 116.880984 55.8441547 108.853409 65.1165392 108.853409 69.7538083 116.880984 65.1165392 124.90856"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 144.145464 51.2090394 136.120041 55.8441547 128.092465 65.1165392 128.092465 69.7538083 136.120041 65.1165392 144.145464"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 163.384521 51.2090394 155.356945 55.8441547 147.331522 65.1165392 147.331522 69.7538083 155.356945 65.1165392 163.384521"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 182.621425 51.2090394 174.596002 55.8441547 166.568426 65.1165392 166.568426 69.7538083 174.596002 65.1165392 182.621425"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 201.860482 51.2090394 193.832906 55.8441547 185.805331 65.1165392 185.805331 69.7538083 193.832906 65.1165392 201.860482"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 221.097386 51.2090394 213.071963 55.8441547 205.044387 65.1165392 205.044387 69.7538083 213.071963 65.1165392 221.097386"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 240.33429 51.2090394 232.308867 55.8441547 224.281292 65.1165392 224.281292 69.7538083 232.308867 65.1165392 240.33429"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 259.573347 51.2090394 251.547924 55.8441547 243.520349 65.1165392 243.520349 69.7538083 251.547924 65.1165392 259.573347"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "51.2090394 270.784828 55.8441547 262.759405 65.1165392 262.759405 69.7538083 270.784828 65.1165392 278.812404 55.8441547 278.812404"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 298.049308 51.2090394 290.023885 55.8441547 281.99631 65.1165392 281.99631 69.7538083 290.023885 65.1165392 298.049308"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 317.286212 51.2090394 309.260789 55.8441547 301.233214 65.1165392 301.233214 69.7538083 309.260789 65.1165392 317.286212"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 336.525269 51.2090394 328.499846 55.8441547 320.472271 65.1165392 320.472271 69.7538083 328.499846 65.1165392 336.525269"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 355.764326 51.2090394 347.73675 55.8441547 339.711328 65.1165392 339.711328 69.7538083 347.73675 65.1165392 355.764326"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 375.00123 51.2090394 366.975807 55.8441547 358.948232 65.1165392 358.948232 69.7538083 366.975807 65.1165392 375.00123"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 394.240287 51.2090394 386.212711 55.8441547 378.185136 65.1165392 378.185136 69.7538083 386.212711 65.1165392 394.240287"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 413.477191 51.2090394 405.451768 55.8441547 397.424193 65.1165392 397.424193 69.7538083 405.451768 65.1165392 413.477191"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 432.716248 51.2090394 424.690825 55.8441547 416.661097 65.1165392 416.661097 69.7538083 424.690825 65.1165392 432.716248"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 451.950999 51.2090394 443.925577 55.8441547 435.898001 65.1165392 435.898001 69.7538083 443.925577 65.1165392 451.950999"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 471.190056 51.2090394 463.164634 55.8441547 455.134905 65.1165392 455.134905 69.7538083 463.164634 65.1165392 471.190056"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 490.429113 51.2090394 482.40369 55.8441547 474.376115 65.1165392 474.376115 69.7538083 482.40369 65.1165392 490.429113"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 509.66817 51.2090394 501.640595 55.8441547 493.613019 65.1165392 493.613019 69.7538083 501.640595 65.1165392 509.66817"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 528.905074 51.2090394 520.877499 55.8441547 512.852076 65.1165392 512.852076 69.7538083 520.877499 65.1165392 528.905074"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 548.141978 51.2090394 540.116556 55.8441547 532.08898 65.1165392 532.08898 69.7538083 540.116556 65.1165392 548.141978"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 567.381035 51.2090394 559.35346 55.8441547 551.325884 65.1165392 551.325884 69.7538083 559.35346 65.1165392 567.381035"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 586.61794 51.2090394 578.592517 55.8441547 570.564941 65.1165392 570.564941 69.7538083 578.592517 65.1165392 586.61794"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 605.854844 51.2090394 597.829421 55.8441547 589.803998 65.1165392 589.803998 69.7538083 597.829421 65.1165392 605.854844"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 625.093901 51.2090394 617.066325 55.8441547 609.038749 65.1165392 609.038749 69.7538083 617.066325 65.1165392 625.093901"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 644.330805 51.2090394 636.305382 55.8441547 628.277806 65.1165392 628.277806 69.7538083 636.305382 65.1165392 644.330805"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 663.572014 51.2090394 655.544439 55.8441547 647.516863 65.1165392 647.516863 69.7538083 655.544439 65.1165392 663.572014"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 682.806766 51.2090394 674.77919 55.8441547 666.753767 65.1165392 666.753767 69.7538083 674.77919 65.1165392 682.806766"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "55.8441547 702.045823 51.2090394 694.018247 55.8441547 685.990671 65.1165392 685.990671 69.7538083 694.018247 65.1165392 702.045823"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 721.282727 51.2090394 713.257304 55.8441547 705.229728 65.1165392 705.229728 69.7538083 713.257304 65.1165392 721.282727"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 740.521784 51.2090394 732.496361 55.8441547 724.468785 65.1165392 724.468785 69.7538083 732.496361 65.1165392 740.521784"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 759.758688 51.2090394 751.733265 55.8441547 743.707842 65.1165392 743.707842 69.7538083 751.733265 65.1165392 759.758688"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 778.997745 51.2090394 770.970169 55.8441547 762.944746 65.1165392 762.944746 69.7538083 770.970169 65.1165392 778.997745"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 798.236802 51.2090394 790.209226 55.8441547 782.18165 65.1165392 782.18165 69.7538083 790.209226 65.1165392 798.236802"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 817.473706 51.2090394 809.44613 55.8441547 801.418555 65.1165392 801.418555 69.7538083 809.44613 65.1165392 817.473706"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 836.71061 51.2090394 828.685187 55.8441547 820.657611 65.1165392 820.657611 69.7538083 828.685187 65.1165392 836.71061"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 38.3876986 68.0048708 30.360123 72.6399861 22.3347002 81.9123705 22.3347002 86.5496397 30.360123 81.9123705 38.3876986"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 19.1486417 68.0048708 11.1232189 72.6399861 3.09564326 81.9123705 3.09564326 86.5496397 11.1232189 81.9123705 19.1486417"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 57.6246028 68.0048708 49.5991799 72.6399861 41.5716043 81.9123705 41.5716043 86.5496397 49.5991799 81.9123705 57.6246028"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 76.8636597 68.0048708 68.8360841 72.6399861 60.8106612 81.9123705 60.8106612 86.5496397 68.8360841 81.9123705 76.8636597"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 96.1005638 68.0048708 88.075141 72.6399861 80.0475654 81.9123705 80.0475654 86.5496397 88.075141 81.9123705 96.1005638"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 115.337468 68.0048708 107.312045 72.6399861 99.2844695 81.9123705 99.2844695 86.5496397 107.312045 81.9123705 115.337468"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 134.576525 68.0048708 126.551102 72.6399861 118.523526 81.9123705 118.523526 86.5496397 126.551102 81.9123705 134.576525"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 153.815582 68.0048708 145.788006 72.6399861 137.762583 81.9123705 137.762583 86.5496397 145.788006 81.9123705 153.815582"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 173.052486 68.0048708 165.027063 72.6399861 156.999487 81.9123705 156.999487 86.5496397 165.027063 81.9123705 173.052486"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 192.291543 68.0048708 184.263967 72.6399861 176.236392 81.9123705 176.236392 86.5496397 184.263967 81.9123705 192.291543"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 211.528447 68.0048708 203.503024 72.6399861 195.475448 81.9123705 195.475448 86.5496397 203.503024 81.9123705 211.528447"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 230.765351 68.0048708 222.739928 72.6399861 214.712353 81.9123705 214.712353 86.5496397 222.739928 81.9123705 230.765351"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 250.004408 68.0048708 241.978985 72.6399861 233.95141 81.9123705 233.95141 86.5496397 241.978985 81.9123705 250.004408"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 269.243465 68.0048708 261.215889 72.6399861 253.190466 81.9123705 253.190466 86.5496397 261.215889 81.9123705 269.243465"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 288.480369 68.0048708 280.454946 72.6399861 272.427371 81.9123705 272.427371 86.5496397 280.454946 81.9123705 288.480369"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 307.717273 68.0048708 299.69185 72.6399861 291.664275 81.9123705 291.664275 86.5496397 299.69185 81.9123705 307.717273"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 326.95633 68.0048708 318.930907 72.6399861 310.903332 81.9123705 310.903332 86.5496397 318.930907 81.9123705 326.95633"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 346.193234 68.0048708 338.167811 72.6399861 330.140236 81.9123705 330.140236 86.5496397 338.167811 81.9123705 346.193234"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 365.432291 68.0048708 357.404716 72.6399861 349.379293 81.9123705 349.379293 86.5496397 357.404716 81.9123705 365.432291"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 384.669195 68.0048708 376.643772 72.6399861 368.616197 81.9123705 368.616197 86.5496397 376.643772 81.9123705 384.669195"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 403.908252 68.0048708 395.880677 72.6399861 387.853101 81.9123705 387.853101 86.5496397 395.880677 81.9123705 403.908252"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 423.145156 68.0048708 415.119733 72.6399861 407.092158 81.9123705 407.092158 86.5496397 415.119733 81.9123705 423.145156"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 442.386366 68.0048708 434.35879 72.6399861 426.331215 81.9123705 426.331215 86.5496397 434.35879 81.9123705 442.386366"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 461.621117 68.0048708 453.593542 72.6399861 445.568119 81.9123705 445.568119 86.5496397 453.593542 81.9123705 461.621117"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 480.860174 68.0048708 472.834751 72.6399861 464.805023 81.9123705 464.805023 86.5496397 472.834751 81.9123705 480.860174"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 500.099231 68.0048708 492.071656 72.6399861 484.04408 81.9123705 484.04408 86.5496397 492.071656 81.9123705 500.099231"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "72.6399861 519.336135 68.0048708 511.310712 72.6399861 503.283137 81.9123705 503.283137 86.5496397 511.310712 81.9123705 519.336135"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 538.573039 68.0048708 530.547617 72.6399861 522.522194 81.9123705 522.522194 86.5496397 530.547617 81.9123705 538.573039"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 557.809944 68.0048708 549.784521 72.6399861 541.756945 81.9123705 541.756945 86.5496397 549.784521 81.9123705 557.809944"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 577.051153 68.0048708 569.023578 72.6399861 560.996002 81.9123705 560.996002 86.5496397 569.023578 81.9123705 577.051153"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 596.288057 68.0048708 588.260482 72.6399861 580.235059 81.9123705 580.235059 86.5496397 588.260482 81.9123705 596.288057"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 615.524962 68.0048708 607.497386 72.6399861 599.471963 81.9123705 599.471963 86.5496397 607.497386 81.9123705 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 634.761866 68.0048708 626.736443 72.6399861 618.708867 81.9123705 618.708867 86.5496397 626.736443 81.9123705 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 654.000923 68.0048708 645.9755 72.6399861 637.945771 81.9123705 637.945771 86.5496397 645.9755 81.9123705 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 673.239979 68.0048708 665.214557 72.6399861 657.186981 81.9123705 657.186981 86.5496397 665.214557 81.9123705 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 692.476884 68.0048708 684.449308 72.6399861 676.423885 81.9123705 676.423885 86.5496397 684.449308 81.9123705 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 711.713788 68.0048708 703.688365 72.6399861 695.660789 81.9123705 695.660789 86.5496397 703.688365 81.9123705 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 730.952845 68.0048708 722.925269 72.6399861 714.899846 81.9123705 714.899846 86.5496397 722.925269 81.9123705 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 750.191902 68.0048708 742.164326 72.6399861 734.13675 81.9123705 734.13675 86.5496397 742.164326 81.9123705 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 769.428806 68.0048708 761.40123 72.6399861 753.375807 81.9123705 753.375807 86.5496397 761.40123 81.9123705 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 788.66571 68.0048708 780.640287 72.6399861 772.612711 81.9123705 772.612711 86.5496397 780.640287 81.9123705 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 807.904767 68.0048708 799.879344 72.6399861 791.851768 81.9123705 791.851768 86.5496397 799.879344 81.9123705 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 827.141671 68.0048708 819.116248 72.6399861 811.088672 81.9123705 811.088672 86.5496397 819.116248 81.9123705 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 830.327729 68.0027169 838.353152 68.8427239 839.806253 85.7117866 839.806253 86.5496397 838.353152 81.9123705 830.327729"
          }, null)])]), createVNode("g", {
            "opacity": "0.54904655",
            "mask": "url(#mask-h32)",
            "fill": mergedColor[1],
            "fill-rule": "nonzero",
            "id": "Shape"
          }, [createVNode("g", {
            "transform": "translate(2098.974302, 30.618913) rotate(90.000000) translate(-2098.974302, -30.618913) translate(2055.451634, -389.381087)"
          }, [createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 615.524962 0.8193914 607.497386 5.45666057 599.471963 14.729045 599.471963 19.3663142 607.497386 14.729045 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 634.761866 0.8193914 626.736443 5.45666057 618.708867 14.729045 618.708867 19.3663142 626.736443 14.729045 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 654.000923 0.8193914 645.9755 5.45666057 637.945771 14.729045 637.945771 19.3663142 645.9755 14.729045 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 673.239979 0.8193914 665.214557 5.45666057 657.186981 14.729045 657.186981 19.3663142 665.214557 14.729045 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 692.476884 0.8193914 684.449308 5.45666057 676.423885 14.729045 676.423885 19.3663142 684.449308 14.729045 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 711.713788 0.8193914 703.688365 5.45666057 695.660789 14.729045 695.660789 19.3663142 703.688365 14.729045 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 730.952845 0.8193914 722.925269 5.45666057 714.899846 14.729045 714.899846 19.3663142 722.925269 14.729045 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 750.191902 0.8193914 742.164326 5.45666057 734.13675 14.729045 734.13675 19.3663142 742.164326 14.729045 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 769.428806 0.8193914 761.40123 5.45666057 753.375807 14.729045 753.375807 19.3663142 761.40123 14.729045 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 788.66571 0.8193914 780.640287 5.45666057 772.612711 14.729045 772.612711 19.3663142 780.640287 14.729045 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 807.904767 0.8193914 799.879344 5.45666057 791.851768 14.729045 791.851768 19.3663142 799.879344 14.729045 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 827.141671 0.8193914 819.116248 5.45666057 811.088672 14.729045 811.088672 19.3663142 819.116248 14.729045 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "5.45666057 830.327729 0.8193914 838.353152 1.65939836 839.806253 18.5284611 839.806253 19.3663142 838.353152 14.729045 830.327729"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 605.854844 17.6173766 597.829421 22.2524919 589.803998 31.5248764 589.803998 36.1621456 597.829421 31.5248764 605.854844"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 625.093901 17.6173766 617.066325 22.2524919 609.038749 31.5248764 609.038749 36.1621456 617.066325 31.5248764 625.093901"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "22.2524919 644.330805 17.6173766 636.305382 22.2524919 628.277806 31.5248764 628.277806 36.1621456 636.305382 31.5248764 644.330805"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 663.572014 17.6173766 655.544439 22.2524919 647.516863 31.5248764 647.516863 36.1621456 655.544439 31.5248764 663.572014"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 682.806766 17.6173766 674.77919 22.2524919 666.753767 31.5248764 666.753767 36.1621456 674.77919 31.5248764 682.806766"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "22.2524919 702.045823 17.6173766 694.018247 22.2524919 685.990671 31.5248764 685.990671 36.1621456 694.018247 31.5248764 702.045823"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 721.282727 17.6173766 713.257304 22.2524919 705.229728 31.5248764 705.229728 36.1621456 713.257304 31.5248764 721.282727"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 740.521784 17.6173766 732.496361 22.2524919 724.468785 31.5248764 724.468785 36.1621456 732.496361 31.5248764 740.521784"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "22.2524919 759.758688 17.6173766 751.733265 22.2524919 743.707842 31.5248764 743.707842 36.1621456 751.733265 31.5248764 759.758688"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 778.997745 17.6173766 770.970169 22.2524919 762.944746 31.5248764 762.944746 36.1621456 770.970169 31.5248764 778.997745"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 798.236802 17.6173766 790.209226 22.2524919 782.18165 31.5248764 782.18165 36.1621456 790.209226 31.5248764 798.236802"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 817.473706 17.6173766 809.44613 22.2524919 801.418555 31.5248764 801.418555 36.1621456 809.44613 31.5248764 817.473706"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "22.2524919 836.71061 17.6173766 828.685187 22.2524919 820.657611 31.5248764 820.657611 36.1621456 828.685187 31.5248764 836.71061"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 615.524962 34.413208 607.497386 39.0483233 599.471963 48.3207078 599.471963 52.9601308 607.497386 48.3207078 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 634.761866 34.413208 626.736443 39.0483233 618.708867 48.3207078 618.708867 52.9601308 626.736443 48.3207078 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 654.000923 34.413208 645.9755 39.0483233 637.945771 48.3207078 637.945771 52.9601308 645.9755 48.3207078 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 673.239979 34.413208 665.214557 39.0483233 657.186981 48.3207078 657.186981 52.9601308 665.214557 48.3207078 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 692.476884 34.413208 684.449308 39.0483233 676.423885 48.3207078 676.423885 52.9601308 684.449308 48.3207078 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 711.713788 34.413208 703.688365 39.0483233 695.660789 48.3207078 695.660789 52.9601308 703.688365 48.3207078 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 730.952845 34.413208 722.925269 39.0483233 714.899846 48.3207078 714.899846 52.9601308 722.925269 48.3207078 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 750.191902 34.413208 742.164326 39.0483233 734.13675 48.3207078 734.13675 52.9601308 742.164326 48.3207078 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 769.428806 34.413208 761.40123 39.0483233 753.375807 48.3207078 753.375807 52.9601308 761.40123 48.3207078 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "39.0483233 788.66571 34.413208 780.640287 39.0483233 772.612711 48.3207078 772.612711 52.9601308 780.640287 48.3207078 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 807.904767 34.413208 799.879344 39.0483233 791.851768 48.3207078 791.851768 52.9601308 799.879344 48.3207078 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 827.141671 34.413208 819.116248 39.0483233 811.088672 48.3207078 811.088672 52.9601308 819.116248 48.3207078 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "39.0483233 830.327729 34.4110542 838.353152 35.2510611 839.806253 52.1201239 839.806253 52.9601308 838.353152 48.3207078 830.327729"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.15",
            "points": "55.8441547 605.854844 51.2090394 597.829421 55.8441547 589.803998 65.1165392 589.803998 69.7538083 597.829421 65.1165392 605.854844"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 625.093901 51.2090394 617.066325 55.8441547 609.038749 65.1165392 609.038749 69.7538083 617.066325 65.1165392 625.093901"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 644.330805 51.2090394 636.305382 55.8441547 628.277806 65.1165392 628.277806 69.7538083 636.305382 65.1165392 644.330805"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.2",
            "points": "55.8441547 663.572014 51.2090394 655.544439 55.8441547 647.516863 65.1165392 647.516863 69.7538083 655.544439 65.1165392 663.572014"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 682.806766 51.2090394 674.77919 55.8441547 666.753767 65.1165392 666.753767 69.7538083 674.77919 65.1165392 682.806766"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "55.8441547 702.045823 51.2090394 694.018247 55.8441547 685.990671 65.1165392 685.990671 69.7538083 694.018247 65.1165392 702.045823"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 721.282727 51.2090394 713.257304 55.8441547 705.229728 65.1165392 705.229728 69.7538083 713.257304 65.1165392 721.282727"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 740.521784 51.2090394 732.496361 55.8441547 724.468785 65.1165392 724.468785 69.7538083 732.496361 65.1165392 740.521784"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 759.758688 51.2090394 751.733265 55.8441547 743.707842 65.1165392 743.707842 69.7538083 751.733265 65.1165392 759.758688"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 778.997745 51.2090394 770.970169 55.8441547 762.944746 65.1165392 762.944746 69.7538083 770.970169 65.1165392 778.997745"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 798.236802 51.2090394 790.209226 55.8441547 782.18165 65.1165392 782.18165 69.7538083 790.209226 65.1165392 798.236802"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 817.473706 51.2090394 809.44613 55.8441547 801.418555 65.1165392 801.418555 69.7538083 809.44613 65.1165392 817.473706"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "55.8441547 836.71061 51.2090394 828.685187 55.8441547 820.657611 65.1165392 820.657611 69.7538083 828.685187 65.1165392 836.71061"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 615.524962 68.0048708 607.497386 72.6399861 599.471963 81.9123705 599.471963 86.5496397 607.497386 81.9123705 615.524962"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 634.761866 68.0048708 626.736443 72.6399861 618.708867 81.9123705 618.708867 86.5496397 626.736443 81.9123705 634.761866"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.06",
            "points": "72.6399861 654.000923 68.0048708 645.9755 72.6399861 637.945771 81.9123705 637.945771 86.5496397 645.9755 81.9123705 654.000923"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 673.239979 68.0048708 665.214557 72.6399861 657.186981 81.9123705 657.186981 86.5496397 665.214557 81.9123705 673.239979"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 692.476884 68.0048708 684.449308 72.6399861 676.423885 81.9123705 676.423885 86.5496397 684.449308 81.9123705 692.476884"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 711.713788 68.0048708 703.688365 72.6399861 695.660789 81.9123705 695.660789 86.5496397 703.688365 81.9123705 711.713788"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 730.952845 68.0048708 722.925269 72.6399861 714.899846 81.9123705 714.899846 86.5496397 722.925269 81.9123705 730.952845"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 750.191902 68.0048708 742.164326 72.6399861 734.13675 81.9123705 734.13675 86.5496397 742.164326 81.9123705 750.191902"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 769.428806 68.0048708 761.40123 72.6399861 753.375807 81.9123705 753.375807 86.5496397 761.40123 81.9123705 769.428806"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 788.66571 68.0048708 780.640287 72.6399861 772.612711 81.9123705 772.612711 86.5496397 780.640287 81.9123705 788.66571"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 807.904767 68.0048708 799.879344 72.6399861 791.851768 81.9123705 791.851768 86.5496397 799.879344 81.9123705 807.904767"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 827.141671 68.0048708 819.116248 72.6399861 811.088672 81.9123705 811.088672 86.5496397 819.116248 81.9123705 827.141671"
          }, null), createVNode("polygon", {
            "fill-opacity": "0.1",
            "points": "72.6399861 830.327729 68.0027169 838.353152 68.8427239 839.806253 85.7117866 839.806253 86.5496397 838.353152 81.9123705 830.327729"
          }, null)])])]), createVNode("g", {
            "id": "Group-14",
            "transform": "translate(23.011985, 31.000000)"
          }, [createVNode("g", {
            "id": "Group-50",
            "transform": "translate(1161.605003, 0.000000)"
          }, [createVNode("rect", {
            "id": "Rectangle-6",
            "fill": mergedColor[0],
            "x": "9.00468994",
            "y": "27",
            "width": "100.05211",
            "height": "1"
          }, null), createVNode("rect", {
            "id": "Rectangle-6",
            "fill": mergedColor[0],
            "x": "534.27827",
            "y": "27",
            "width": "175.091193",
            "height": "1"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "712.871287",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("line", {
            "x1": "0.89028833",
            "y1": "28.2767019",
            "x2": "9.67451272",
            "y2": "40.7232981",
            "id": "Line-5",
            "stroke": mergedColor[0],
            "stroke-linecap": "square",
            "transform": "translate(5.282401, 34.500000) scale(-1, 1) translate(-5.282401, -34.500000) "
          }, null), createVNode("g", {
            "id": "Group-32",
            "transform": "translate(15.007817, 0.000000)",
            "fill": mergedColor[0]
          }, [createVNode("rect", {
            "id": "Rectangle-3",
            "opacity": "0.200000003",
            "x": "54.0281397",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null), createVNode("rect", {
            "id": "Rectangle-3",
            "opacity": "0.400000006",
            "x": "36.0187598",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null), createVNode("rect", {
            "id": "Rectangle-3",
            "opacity": "0.699999988",
            "x": "18.0093799",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null), createVNode("rect", {
            "id": "Rectangle-3",
            "x": "0",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null)]), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "112.558624",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "252.631579",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "392.704534",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "530.776446",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(182.595102, 28.000000) scale(-1, 1) translate(-182.595102, -28.000000) translate(119.062011, 27.000000)",
            "fill": mergedColor[0]
          }, [createVNode("polygon", {
            "id": "Path",
            "points": "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "101.312044 0 108.24693 0 109.0568 2 101.974132 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "110.316734 0 117.25162 0 118.06149 2 110.978822 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "119.321424 0 126.25631 0 127.06618 2 119.983512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2"
          }, null)]), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(322.668056, 28.000000) scale(-1, 1) translate(-322.668056, -28.000000) translate(259.134966, 27.000000)",
            "fill": mergedColor[0]
          }, [createVNode("polygon", {
            "id": "Path",
            "points": "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "101.312044 0 108.24693 0 109.0568 2 101.974132 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "110.316734 0 117.25162 0 118.06149 2 110.978822 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "119.321424 0 126.25631 0 127.06618 2 119.983512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2"
          }, null)]), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(461.740490, 28.000000) scale(-1, 1) translate(-461.740490, -28.000000) translate(398.207400, 27.000000)",
            "fill": mergedColor[0]
          }, [createVNode("polygon", {
            "id": "Path",
            "points": "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "101.312044 0 108.24693 0 109.0568 2 101.974132 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "110.316734 0 117.25162 0 118.06149 2 110.978822 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "119.321424 0 126.25631 0 127.06618 2 119.983512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2"
          }, null)])]), createVNode("g", {
            "id": "Group-50",
            "transform": "translate(358.186555, 20.500000) scale(-1, 1) translate(-358.186555, -20.500000) "
          }, [createVNode("rect", {
            "id": "Rectangle-6",
            "fill": mergedColor[0],
            "x": "9.00468994",
            "y": "27",
            "width": "100.05211",
            "height": "1"
          }, null), createVNode("rect", {
            "id": "Rectangle-6",
            "fill": mergedColor[0],
            "x": "534.27827",
            "y": "27",
            "width": "175.091193",
            "height": "1"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "712.871287",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("line", {
            "x1": "0.89028833",
            "y1": "28.2767019",
            "x2": "9.67451272",
            "y2": "40.7232981",
            "id": "Line-5",
            "stroke": mergedColor[0],
            "stroke-linecap": "square",
            "transform": "translate(5.282401, 34.500000) scale(-1, 1) translate(-5.282401, -34.500000) "
          }, null), createVNode("g", {
            "id": "Group-32",
            "transform": "translate(15.007817, 0.000000)",
            "fill": mergedColor[0]
          }, [createVNode("rect", {
            "id": "Rectangle-3",
            "opacity": "0.200000003",
            "x": "54.0281397",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null), createVNode("rect", {
            "id": "Rectangle-3",
            "opacity": "0.400000006",
            "x": "36.0187598",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null), createVNode("rect", {
            "id": "Rectangle-3",
            "opacity": "0.699999988",
            "x": "18.0093799",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null), createVNode("rect", {
            "id": "Rectangle-3",
            "x": "0",
            "y": "0",
            "width": "12.0062533",
            "height": "12"
          }, null)]), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "112.558624",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "252.631579",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "392.704534",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("ellipse", {
            "id": "Oval-4",
            "stroke": mergedColor[0],
            "cx": "530.776446",
            "cy": "27.5",
            "rx": "3.50182387",
            "ry": "3.5"
          }, null), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(182.595102, 28.000000) scale(-1, 1) translate(-182.595102, -28.000000) translate(119.062011, 27.000000)",
            "fill": mergedColor[0]
          }, [createVNode("polygon", {
            "id": "Path",
            "points": "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "101.312044 0 108.24693 0 109.0568 2 101.974132 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "110.316734 0 117.25162 0 118.06149 2 110.978822 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "119.321424 0 126.25631 0 127.06618 2 119.983512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2"
          }, null)]), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(322.668056, 28.000000) scale(-1, 1) translate(-322.668056, -28.000000) translate(259.134966, 27.000000)",
            "fill": mergedColor[0]
          }, [createVNode("polygon", {
            "id": "Path",
            "points": "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "101.312044 0 108.24693 0 109.0568 2 101.974132 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "110.316734 0 117.25162 0 118.06149 2 110.978822 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "119.321424 0 126.25631 0 127.06618 2 119.983512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2"
          }, null)]), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(461.740490, 28.000000) scale(-1, 1) translate(-461.740490, -28.000000) translate(398.207400, 27.000000)",
            "fill": mergedColor[0]
          }, [createVNode("polygon", {
            "id": "Path",
            "points": "74.2979742 0 81.2328605 0 82.0427306 2 74.9600622 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "83.3026641 0 90.2375505 0 91.0474205 2 83.9647521 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "101.312044 0 108.24693 0 109.0568 2 101.974132 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "92.3073541 0 99.2422404 0 100.05211 2 92.9694421 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "110.316734 0 117.25162 0 118.06149 2 110.978822 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "119.321424 0 126.25631 0 127.06618 2 119.983512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "64.2927632 0 71.2276495 0 72.0375195 2 64.9548512 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "55.2880732 0 62.2229595 0 63.0328296 2 55.9501612 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "37.2786933 0 44.2135797 0 45.0234497 2 37.9407813 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "46.2833833 0 53.2182696 0 54.0281397 2 46.9454713 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "28.2740034 0 35.2088897 0 36.0187598 2 28.9360914 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "19.2693134 0 26.2041998 0 27.0140698 2 19.9314014 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "0.259412454 0 7.19429879 0 8.00416884 2 0.921500456 2"
          }, null), createVNode("polygon", {
            "id": "Path",
            "points": "9.2641024 0 16.1989887 0 17.0088588 2 9.9261904 2"
          }, null)])]), createVNode("rect", {
            "id": "Rectangle-7",
            "fill": mergedColor[0],
            "x": "715.37259",
            "y": "41",
            "width": "448.233455",
            "height": "1"
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor$2 = ["#0077CF", "#18DBFD"];
const HeaderSvgContainer$2 = styled.svg`
  position: absolute;
  top: 0;
  left: 3px;
  width: 100%;
  height: 100%;
`("header-svg-container");
const Header4 = /* @__PURE__ */ defineComponent({
  name: "Header4",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$2, color2);
      const linearGradient1 = buildUUID();
      const filter1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("header-4"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(HeaderSvgContainer$2, {
          "width": width,
          "height": height,
          "viewBox": "0 0 1926 115",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("导航4")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "0%",
            "y1": "40.7068755%",
            "x2": "100%",
            "y2": "40.7068755%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.1",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "52.4276684%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.1",
            "offset": "100%"
          }, null)]), createVNode("filter", {
            "x": "-4.7%",
            "y": "-800.0%",
            "width": "109.3%",
            "height": "1700.0%",
            "filterUnits": "objectBoundingBox",
            "id": filter1
          }, [createVNode("feGaussianBlur", {
            "stdDeviation": "8",
            "in": "SourceGraphic"
          }, null)]), createVNode("linearGradient", {
            "x1": "0%",
            "y1": "23.9123775%",
            "x2": "100%",
            "y2": "23.9123777%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": "#3D155F",
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.5",
            "offset": "18.4481151%"
          }, null), createVNode("stop", {
            "stop-color": "#09192F",
            "stop-opacity": "0",
            "offset": "41.5909345%"
          }, null), createVNode("stop", {
            "stop-color": "#0A1A30",
            "stop-opacity": "0",
            "offset": "58.4079639%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.498000779",
            "offset": "82.3247755%"
          }, null), createVNode("stop", {
            "stop-color": "#21538C",
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "0%",
            "y1": "49.9692469%",
            "x2": "100%",
            "y2": "49.9668157%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "49.8770032%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("polygon", {
            "id": "path-5",
            "points": "-1.04906857e-11 29.5076923 674.073225 28 714.039798 73.2307692 1168.75383 73.2307692 1209.47449 28 1902.01873 29.5076923 1902.01873 31.7692308 1209.47449 31.7692308 1168.75383 77 714.039798 77 674.073225 31.7692308 -1.04906857e-11 31.7692308"
          }, null), createVNode("filter", {
            "x": "-0.5%",
            "y": "-24.5%",
            "width": "101.1%",
            "height": "140.8%",
            "filterUnits": "objectBoundingBox",
            "id": "filter-6"
          }, [createVNode("feOffset", {
            "dx": "0",
            "dy": "-2",
            "in": "SourceAlpha",
            "result": "shadowOffsetOuter1"
          }, null), createVNode("feGaussianBlur", {
            "stdDeviation": "3",
            "in": "shadowOffsetOuter1",
            "result": "shadowBlurOuter1"
          }, null), createVNode("feColorMatrix", {
            "values": "0 0 0 0 0.0392156863   0 0 0 0 0.0823529412   0 0 0 0 0.247058824  0 0 0 1 0",
            "type": "matrix",
            "in": "shadowBlurOuter1"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "4-大屏-头部素材",
            "transform": "translate(0.000000, -748.000000)"
          }, [createVNode("g", {
            "id": "导航4",
            "transform": "translate(0.000000, 748.000000)"
          }, [createVNode("g", {
            "id": "分组-5",
            "transform": "translate(0.000000, 40.000000)",
            "fill-rule": "nonzero"
          }, [createVNode("g", {
            "id": "分组"
          }, [createVNode("polyline", {
            "id": "矩形-copy-19",
            "stroke": mergedColor[0],
            "transform": "translate(329.959066, 12.000000) scale(-1, 1) translate(-329.959066, -12.000000) ",
            "points": "656.843979 3 638.399062 21 265.401857 21 246.956941 3 3.07415279 3"
          }, null), createVNode("ellipse", {
            "id": "椭圆形",
            "fill": mergedColor[0],
            "cx": "3.07415279",
            "cy": "3",
            "rx": "3.07415279",
            "ry": "3"
          }, null), createVNode("rect", {
            "id": "矩形-copy-36",
            "fill": mergedColor[0],
            "transform": "translate(450.363383, 4.500000) scale(-1, 1) translate(-450.363383, -4.500000) ",
            "x": "426.28252",
            "y": "3",
            "width": "48.161727",
            "height": "3"
          }, null), createVNode("rect", {
            "id": "矩形-copy-38",
            "fill": mergedColor[0],
            "transform": "translate(208.017672, 22.500000) scale(-1, 1) translate(-208.017672, -22.500000) ",
            "x": "21.5190695",
            "y": "21",
            "width": "372.997205",
            "height": "3"
          }, null)]), createVNode("path", {
            "d": "M668.056129,14.5 L663.786473,19.5 L640.50824,19.5 L644.777897,14.5 L668.056129,14.5 Z",
            "id": "矩形-copy-22",
            "stroke": mergedColor[1],
            "fill-opacity": "0.6",
            "fill": mergedColor[1],
            "transform": "translate(654.282185, 17.000000) scale(-1, 1) translate(-654.282185, -17.000000) "
          }, null), createVNode("path", {
            "d": "M591.465593,14.5 L614.627017,14.5 L609.503429,19.5 L586.342005,19.5 L591.465593,14.5 Z",
            "id": "矩形-copy-40",
            "stroke-opacity": "0.3",
            "stroke": mergedColor[1],
            "fill-opacity": "0.2",
            "fill": mergedColor[1],
            "transform": "translate(600.484511, 17.000000) scale(-1, 1) translate(-600.484511, -17.000000) "
          }, null), createVNode("path", {
            "d": "M618.135239,14.5 L641.413472,14.5 L637.143815,19.5 L613.865583,19.5 L618.135239,14.5 Z",
            "id": "矩形-copy-39",
            "stroke-opacity": "0.4",
            "stroke": mergedColor[1],
            "fill-opacity": "0.3",
            "fill": mergedColor[1],
            "transform": "translate(627.639527, 17.000000) scale(-1, 1) translate(-627.639527, -17.000000) "
          }, null), createVNode("path", {
            "d": "M587.98436,14.5 L582.860772,19.5 L559.699347,19.5 L564.822935,14.5 L587.98436,14.5 Z",
            "id": "矩形-copy-41",
            "stroke-opacity": "0.2",
            "stroke": mergedColor[1],
            "fill-opacity": "0.1",
            "fill": mergedColor[1],
            "transform": "translate(573.841853, 17.000000) scale(-1, 1) translate(-573.841853, -17.000000) "
          }, null)]), createVNode("g", {
            "id": "分组-5-copy-2",
            "transform": "translate(1583.350676, 52.000000) scale(-1, 1) translate(-1583.350676, -52.000000) translate(1248.699272, 40.000000)",
            "fill-rule": "nonzero"
          }, [createVNode("g", {
            "id": "分组"
          }, [createVNode("polyline", {
            "id": "矩形-copy-19",
            "stroke": mergedColor[0],
            "transform": "translate(329.959066, 12.000000) scale(-1, 1) translate(-329.959066, -12.000000) ",
            "points": "656.843979 3 638.399062 21 265.401857 21 246.956941 3 3.07415279 3"
          }, null), createVNode("ellipse", {
            "id": "椭圆形",
            "fill": mergedColor[0],
            "cx": "3.07415279",
            "cy": "3",
            "rx": "3.07415279",
            "ry": "3"
          }, null), createVNode("rect", {
            "id": "矩形-copy-36",
            "fill": mergedColor[0],
            "transform": "translate(450.363383, 4.500000) scale(-1, 1) translate(-450.363383, -4.500000) ",
            "x": "426.28252",
            "y": "3",
            "width": "48.161727",
            "height": "3"
          }, null), createVNode("rect", {
            "id": "矩形-copy-38",
            "fill": mergedColor[0],
            "transform": "translate(208.017672, 22.500000) scale(-1, 1) translate(-208.017672, -22.500000) ",
            "x": "21.5190695",
            "y": "21",
            "width": "372.997205",
            "height": "3"
          }, null)]), createVNode("path", {
            "d": "M668.056129,14.5 L663.786473,19.5 L640.50824,19.5 L644.777897,14.5 L668.056129,14.5 Z",
            "id": "矩形-copy-22",
            "stroke": mergedColor[1],
            "fill-opacity": "0.6",
            "fill": mergedColor[1],
            "transform": "translate(654.282185, 17.000000) scale(-1, 1) translate(-654.282185, -17.000000) "
          }, null), createVNode("path", {
            "d": "M614.770814,14.5 L610.501158,19.5 L587.222925,19.5 L591.492582,14.5 L614.770814,14.5 Z",
            "id": "矩形-copy-40",
            "stroke-opacity": "0.3",
            "stroke": mergedColor[1],
            "fill-opacity": "0.2",
            "fill": mergedColor[1],
            "transform": "translate(600.996870, 17.000000) scale(-1, 1) translate(-600.996870, -17.000000) "
          }, null), createVNode("path", {
            "d": "M618.135239,14.5 L641.413472,14.5 L637.143815,19.5 L613.865583,19.5 L618.135239,14.5 Z",
            "id": "矩形-copy-39",
            "stroke-opacity": "0.4",
            "stroke": mergedColor[1],
            "fill-opacity": "0.3",
            "fill": mergedColor[1],
            "transform": "translate(627.639527, 17.000000) scale(-1, 1) translate(-627.639527, -17.000000) "
          }, null), createVNode("path", {
            "d": "M588.128157,14.5 L583.8585,19.5 L560.580268,19.5 L564.849924,14.5 L588.128157,14.5 Z",
            "id": "矩形-copy-41",
            "stroke-opacity": "0.2",
            "stroke": mergedColor[1],
            "fill-opacity": "0.1",
            "fill": mergedColor[1],
            "transform": "translate(574.354212, 17.000000) scale(-1, 1) translate(-574.354212, -17.000000) "
          }, null)]), createVNode("path", {
            "d": "M695.263195,89.125 C786.387859,88.375 874.164917,88 958.59437,88 C1043.02382,88 1126.71823,88.375 1209.67758,89.125 L1209.67758,89.875 C1129.33078,90.625 1045.63638,91 958.59437,91 C871.55236,91 783.775302,90.625 695.263195,89.875 L695.263195,89.125 Z",
            "id": "矩形-copy-8",
            "fill": `url(#${linearGradient1})`,
            "fill-rule": "nonzero"
          }, null), createVNode("path", {
            "d": "M695.263195,89.125 C786.387859,88.375 874.164917,88 958.59437,88 C1043.02382,88 1126.71823,88.375 1209.67758,89.125 L1209.67758,89.875 C1129.33078,90.625 1045.63638,91 958.59437,91 C871.55236,91 783.775302,90.625 695.263195,89.875 L695.263195,89.125 Z",
            "id": "矩形-copy-21",
            "fill": `url(#${linearGradient1})`,
            "fill-rule": "nonzero",
            "filter": `url(#${filter1})`
          }, null), createVNode("g", {
            "id": "Group-48",
            "transform": "translate(17.981270, 0.000000)"
          }, [createVNode("polygon", {
            "id": "Rectangle",
            "fill": `url(#${linearGradient2})`,
            "points": "1.15877616e-11 0 1902.01873 0 1902.01873 31.7058824 1209.47449 31.7058824 1168.75383 77 714.039798 77 674.073225 31.7058824 1.15877616e-11 31.7058824"
          }, null), createVNode("g", {
            "id": "Rectangle"
          }, [createVNode("use", {
            "fill": "black",
            "fill-opacity": "1",
            "filter": "url(#filter-6)",
            "xlink:href": "#path-5"
          }, null), createVNode("use", {
            "fill": `url(#${linearGradient3})`,
            "fill-rule": "evenodd",
            "xlink:href": "#path-5"
          }, null)])])])])])]
        })]
      });
    };
  }
});
const defaultColor$1 = ["#0077CF", "#18DBFD"];
const HeaderSvgContainer$1 = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("header-svg-container");
const Header5 = /* @__PURE__ */ defineComponent({
  name: "Header5",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor$1, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      const linearGradient4 = buildUUID();
      const linearGradient5 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("header-5"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(HeaderSvgContainer$1, {
          "width": width,
          "height": height,
          "viewBox": "0 0 1920 75",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("导航5")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "138.999809%",
            "y1": "49.9577474%",
            "x2": "0%",
            "y2": "50.0422526%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "138.999809%",
            "y1": "49.957418%",
            "x2": "0%",
            "y2": "50.042582%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "138.999809%",
            "y1": "49.9515511%",
            "x2": "0%",
            "y2": "50.0484489%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50.725168%",
            "y1": "-15.5691964%",
            "x2": "50.7251663%",
            "y2": "112.072173%",
            "id": linearGradient4
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.40967992",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50.725168%",
            "y1": "-15.5691964%",
            "x2": "50.7251663%",
            "y2": "112.072173%",
            "id": linearGradient5
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.698733883",
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "导航5",
            "transform": "translate(0.000000, -106.000000)"
          }, [createVNode("g", {
            "transform": "translate(0.000000, 106.000000)"
          }, [createVNode("rect", {
            "id": "Rectangle",
            "fill-opacity": "0.599628155",
            "fill": mergedColor[0],
            "opacity": "0.291104271",
            "x": "0",
            "y": "0",
            "width": "1920",
            "height": "75"
          }, null), createVNode("polyline", {
            "id": "Path-16",
            "stroke": `url(#${linearGradient1})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "points": "556 2 542.601667 17 40 17"
          }, null), createVNode("polyline", {
            "id": "Path-16",
            "stroke": `url(#${linearGradient1})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "transform": "translate(298.000000, 51.500000) scale(1, -1) translate(-298.000000, -51.500000) ",
            "points": "556 44 542.601667 59 40 59"
          }, null), createVNode("polyline", {
            "id": "Path-16",
            "stroke": `url(#${linearGradient2})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "transform": "translate(1623.000000, 9.500000) scale(-1, 1) translate(-1623.000000, -9.500000) ",
            "points": "1880 2 1869.27025 17 1366 17"
          }, null), createVNode("polyline", {
            "id": "Path-16",
            "stroke": `url(#${linearGradient3})`,
            "stroke-width": "2",
            "opacity": "0.800000012",
            "transform": "translate(1623.000000, 52.000000) scale(-1, -1) translate(-1623.000000, -52.000000) ",
            "points": "1880 44 1869.27025 60 1366 60"
          }, null), createVNode("g", {
            "id": "Group-12",
            "transform": "translate(553.000000, 9.000000)",
            "stroke": mergedColor[0]
          }, [createVNode("path", {
            "d": "M801.356743,1 L815.854141,19.5667453 L789.64346,62 L30.0945974,62 L1.268531,18.3431704 L17.4520298,1 L801.356743,1 Z",
            "id": "Rectangle-8",
            "stroke-width": "2",
            "fill": `url(#${linearGradient4})`
          }, null), createVNode("path", {
            "d": "M800.266678,6.1 L810.263626,18.9140796 L786.760668,57.1 L31.5783752,57.1 L7.22194802,18.9352828 L18.9985371,6.1 L800.266678,6.1 Z",
            "id": "Rectangle-8",
            "fill": `url(#${linearGradient5})`
          }, null)])])])])]
        })]
      });
    };
  }
});
const defaultColor = ["#0077CF", "#18DBFD"];
const HeaderSvgContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`("header-svg-container");
const Header6 = /* @__PURE__ */ defineComponent({
  name: "Header6",
  props: createBorderBoxCommonProps(),
  setup(props, {
    expose
  }) {
    const {
      autoBindRef,
      refreshLayoutSize,
      domSize
    } = useResize();
    expose({
      refreshLayoutSize
    });
    return () => {
      const {
        width,
        height
      } = domSize;
      const {
        backgroundColor,
        color: color2
      } = props;
      const mergedColor = mergeColor(defaultColor, color2);
      const linearGradient1 = buildUUID();
      const linearGradient2 = buildUUID();
      const linearGradient3 = buildUUID();
      const linearGradient4 = buildUUID();
      return createVNode(BorderBoxContainer, {
        "class": styled.getClassNameForBind("header-6"),
        "ref": autoBindRef,
        "style": {
          backgroundColor
        }
      }, {
        default: () => [createVNode(HeaderSvgContainer, {
          "width": width,
          "height": height,
          "viewBox": "0 0 1921 81",
          "preserveAspectRatio": "none slice"
        }, {
          default: () => [createVNode("title", null, [createTextVNode("导航6")]), createVNode("defs", null, [createVNode("linearGradient", {
            "x1": "50%",
            "y1": "29.259886%",
            "x2": "50%",
            "y2": "99.2494319%",
            "id": linearGradient1
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.670017483",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "4.57100977%",
            "y1": "49.9195778%",
            "x2": "93.9923966%",
            "y2": "50.361681%",
            "id": linearGradient2
          }, [createVNode("stop", {
            "stop-color": "#FFFFFF",
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.726246472",
            "offset": "34.798361%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "37.511574%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.838734845",
            "offset": "39.7880654%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.897232309",
            "offset": "43.7657739%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.916087117",
            "offset": "45.0478624%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.933958599",
            "offset": "46.2630868%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "50.7537676%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "57.2330882%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "61.1067878%"
          }, null), createVNode("stop", {
            "stop-color": "#FFFFFF",
            "stop-opacity": "0",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "1.5161537%",
            "y1": "50%",
            "x2": "97.0753752%",
            "y2": "50%",
            "id": linearGradient3
          }, [createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[0],
            "stop-opacity": "0.67930507",
            "offset": "100%"
          }, null)]), createVNode("linearGradient", {
            "x1": "50%",
            "y1": "100%",
            "x2": "50%",
            "y2": "1.62320524%",
            "id": linearGradient4
          }, [createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "0%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "offset": "31.1945735%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0.848721591",
            "offset": "70.6265836%"
          }, null), createVNode("stop", {
            "stop-color": mergedColor[1],
            "stop-opacity": "0",
            "offset": "100%"
          }, null)])]), createVNode("g", {
            "id": "8-19",
            "stroke": "none",
            "stroke-width": "1",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [createVNode("g", {
            "id": "导航6",
            "transform": "translate(1.000000, -1732.000000)"
          }, [createVNode("g", {
            "transform": "translate(0.000000, 1733.000000)"
          }, [createVNode("path", {
            "d": "M1920,9.21007293e-13 L1920,30.9514328 L1249.23346,30.9516462 C1229.62106,30.9646394 1212.0646,31.6123111 1195.24825,43.9783002 L1195.24825,43.9783002 L1172.28545,62.27533 C1157.7941,73.3528432 1146.99441,75.9115356 1127.47241,76.0105489 L1127.47241,76.0105489 L969.056289,76.814 L969.056604,76.9620253 L954.460289,76.888 L939.874214,76.9620253 L939.873289,76.814 L781.339362,76.0105489 C761.804976,75.9115356 750.998428,73.3528432 736.497892,62.27533 L713.520511,43.9783002 C696.693493,31.6123111 679.125893,30.9646394 659.501052,30.9516462 L1.00628931,30.9514328 L1.00628931,9.21007293e-13 L1920,9.21007293e-13 Z",
            "id": "头-蓝边",
            "opacity": "0.7"
          }, null), createVNode("path", {
            "d": "M1920,9.21007293e-13 L1920,30.9514328 L1249.23346,30.9516462 C1229.62106,30.9646394 1212.0646,31.6123111 1195.24825,43.9783002 L1195.24825,43.9783002 L1172.28545,62.27533 C1157.7941,73.3528432 1146.99441,75.9115356 1127.47241,76.0105489 L1127.47241,76.0105489 L969.056289,76.814 L969.056604,76.9620253 L954.460289,76.888 L939.874214,76.9620253 L939.873289,76.814 L781.339362,76.0105489 C761.804976,75.9115356 750.998428,73.3528432 736.497892,62.27533 L713.520511,43.9783002 C696.693493,31.6123111 679.125893,30.9646394 659.501052,30.9516462 L1.00628931,30.9514328 L1.00628931,9.21007293e-13 L1920,9.21007293e-13 Z",
            "id": "头-蓝边",
            "fill": `url(#${linearGradient1})`,
            "opacity": "0.7"
          }, null), createVNode("path", {
            "d": "M1918.99371,9.21007293e-13 L1918.99371,30.9514328 L1248.22717,30.9516462 C1228.61477,30.9646394 1211.05831,31.6123111 1194.24197,43.9783002 L1194.24197,43.9783002 L1171.27916,62.27533 C1156.78782,73.3528432 1145.98812,75.9115356 1126.46612,76.0105489 L1126.46612,76.0105489 L968.05,76.814 L968.050314,76.9620253 L953.454,76.888 L938.867925,76.9620253 L938.867,76.814 L780.333073,76.0105489 C760.798686,75.9115356 749.992139,73.3528432 735.491603,62.27533 L712.514222,43.9783002 C695.687203,31.6123111 678.119603,30.9646394 658.494763,30.9516462 L0,30.9514328 L0,9.21007293e-13 L1918.99371,9.21007293e-13 Z",
            "id": "头-金属边",
            "stroke": `url(#${linearGradient2})`,
            "stroke-width": "2",
            "opacity": "0.7",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null), createVNode("g", {
            "id": "一级菜单备份-4",
            "transform": "translate(428.679245, 16.202532)",
            "fill": `url(#${linearGradient3})`,
            "fill-opacity": "0.4",
            "stroke": `url(#${linearGradient4})`
          }, [createVNode("path", {
            "d": "M323.403583,0.572106634 C314.323188,3.31538881 305.94832,7.10321831 299.050264,12.3202049 L299.050264,12.3202049 L298.421092,12.8031984 L267.69065,38.4371861 C249.573125,54.0317123 235.863162,58.9090024 211.67108,59.1416323 L211.67108,59.1416323 L210.933951,59.1472838 L72.8532487,59.2474551 C53.5703517,59.0853612 32.9026428,58.9051122 10.8501271,58.7067081 L10.583,58.704 L10.8664919,58.650915 C15.1565562,57.8141649 19.1754676,56.6523926 22.9563015,55.231074 L23.7628482,54.922557 C32.5225158,52.367745 40.4846039,48.1068034 49.5416028,41.1949319 L49.5416028,41.1949319 L50.2459755,40.6536215 L79.3620108,17.1837703 L79.992253,16.7195607 C101.061221,1.35584379 123.070658,0.587718188 147.621298,0.573255239 L147.621298,0.573255239 Z",
            "id": "形状结合",
            "transform": "translate(163.488626, 29.910100) scale(1, -1) translate(-163.488626, -29.910100) "
          }, null), createVNode("path", {
            "d": "M1047.93188,0.572106634 C1038.85149,3.31538881 1030.47662,7.10321831 1023.57857,12.3202049 L1023.57857,12.3202049 L1022.94939,12.8031984 L992.218952,38.4371861 C974.101427,54.0317123 960.391464,58.9090024 936.199382,59.1416323 L936.199382,59.1416323 L935.462253,59.1472838 L797.381551,59.2474551 C778.098654,59.0853612 757.430945,58.9051122 735.378429,58.7067081 L735.111,58.704 L735.394794,58.650915 C739.684858,57.8141649 743.703769,56.6523926 747.484603,55.231074 L748.29115,54.922557 C757.050818,52.367745 765.012906,48.1068034 774.069905,41.1949319 L774.069905,41.1949319 L774.774277,40.6536215 L803.890313,17.1837703 L804.520555,16.7195607 C825.589523,1.35584379 847.59896,0.587718188 872.1496,0.573255239 L872.1496,0.573255239 Z",
            "id": "形状结合备份-4",
            "transform": "translate(888.016928, 29.910100) scale(-1, -1) translate(-888.016928, -29.910100) "
          }, null)]), createVNode("g", {
            "id": "一级菜单备份-7",
            "transform": "translate(1132.075472, 38.481013)"
          }, null)])])])]
        })]
      });
    };
  }
});
const _hoisted_1$s = ["onClick", "onMouseenter", "onMouseleave"];
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  ...{ name: "ScrollTable" },
  __name: "index",
  props: {
    theme: {
      type: String,
      default: "dark"
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["rowClick", "mouseover", "mouseleave"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const scrollTableRef = useTemplateRef("scrollTableRef");
    const showHeader = computed(() => {
      var _a;
      return (_a = props.config) == null ? void 0 : _a.showHeader;
    });
    const defaultConfig = {
      showHeader: true,
      /**
       * @description Board header
       * @type {Array<string>}
       * @default header = []
       * @example header = ['column1', 'column2', 'column3']
       */
      header: [],
      /**
       * @description Board data
       * @type {Array<Array>}
       * @default data = []
       */
      data: [],
      /**
       * @description Row num
       * @type {number}
       * @default rowNum = 5
       */
      rowNum: 5,
      /**
       * @description Header background color
       * @type {string}
       * @default headerBGC = '#00BAFF'
       */
      headerBGC: "#303030",
      /**
       * @description Odd row background color
       * @type {string}
       * @default oddRowBGC = '#003B51'
       */
      oddRowBGC: "#3A3A3A",
      /**
       * @description Even row background color
       * @type {string}
       * @default evenRowBGC = '#003B51'
       */
      evenRowBGC: "#4A4A4A",
      /**
       * @description Scroll wait time
       * @type {number}
       * @default waitTime = 1500
       */
      waitTime: 1500,
      /**
       * @description Header height
       * @type {number}
       * @default headerHeight = 35
       */
      headerHeight: 35,
      /**
       * @description Column width
       * @type {Array<number>}
       * @default columnWidth = []
       */
      columnWidth: [],
      /**
       * @description Column align
       * @type {Array<string>}
       * @default align = []
       * @example align = ['left', 'center', 'right']
       */
      align: [],
      /**
       * @description Show index
       * @type {boolean}
       * @default index = false
       */
      index: false,
      /**
       * @description index Header
       * @type {string}
       * @default indexHeader = '#'
       */
      indexHeader: "",
      /**
       * @description Carousel type
       * @type {string}
       * @default carousel = 'single'
       * @example carousel = 'single' | 'page'
       */
      carousel: "single",
      /**
       * @description Pause scroll when mouse hovered
       * @type {boolean}
       * @default hoverPause = true
       * @example hoverPause = true | false
       */
      hoverPause: true
    };
    const mergedConfig = ref(defaultConfig);
    const header = ref([]);
    let rowsData = [];
    const rows = ref([]);
    const widths = ref([]);
    const heights2 = ref([]);
    let avgHeight = 0;
    const aligns = ref([]);
    let animationIndex = 0;
    let animationHandler;
    let updater = 0;
    let needCalc = false;
    const height = ref(0);
    const width = ref(0);
    const darkColor = {
      headerBGC: "#303030",
      oddRowBGC: "#3A3A3A",
      evenRowBGC: "#4A4A4A"
    };
    const lightColor = {
      headerBGC: "#F0F0F0",
      oddRowBGC: "#FFFFFF",
      evenRowBGC: "#FAFAFA"
    };
    watch(
      () => props.config,
      () => {
        stopAnimation2();
        animationIndex = 0;
        calcData();
      }
    );
    watch(
      () => {
        var _a;
        return (_a = props.config) == null ? void 0 : _a.columnWidth;
      },
      throttle(() => {
        mergeConfig();
        calcWidths();
      }, 100),
      { deep: true }
    );
    watch(
      () => {
        var _a;
        return (_a = props.config) == null ? void 0 : _a.align;
      },
      () => {
        mergeConfig();
        calcAligns();
      },
      { deep: true }
    );
    watch(
      () => props.theme,
      (val) => {
        if (val === ThemeEnum.DARK) {
          if (mergedConfig.value.headerBGC === lightColor.headerBGC) {
            mergedConfig.value.headerBGC = darkColor.headerBGC;
          }
          if (mergedConfig.value.oddRowBGC === lightColor.oddRowBGC) {
            mergedConfig.value.oddRowBGC = darkColor.oddRowBGC;
          }
          if (mergedConfig.value.evenRowBGC === lightColor.evenRowBGC) {
            mergedConfig.value.evenRowBGC = darkColor.evenRowBGC;
          }
        } else {
          if (mergedConfig.value.headerBGC === darkColor.headerBGC) {
            mergedConfig.value.headerBGC = lightColor.headerBGC;
          }
          if (mergedConfig.value.oddRowBGC === darkColor.oddRowBGC) {
            mergedConfig.value.oddRowBGC = lightColor.oddRowBGC;
          }
          if (mergedConfig.value.evenRowBGC === darkColor.evenRowBGC) {
            mergedConfig.value.evenRowBGC = lightColor.evenRowBGC;
          }
        }
      },
      { immediate: true }
    );
    onMounted(() => {
      var _a, _b;
      width.value = ((_a = scrollTableRef.value) == null ? void 0 : _a.clientWidth) || 0;
      height.value = ((_b = scrollTableRef.value) == null ? void 0 : _b.clientHeight) || 0;
      calcData();
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      stopAnimation2();
      window.removeEventListener("resize", resize);
    });
    function resize() {
      var _a, _b;
      width.value = ((_a = scrollTableRef.value) == null ? void 0 : _a.clientWidth) || 0;
      height.value = ((_b = scrollTableRef.value) == null ? void 0 : _b.clientHeight) || 0;
      calcWidths();
      calcHeights(true);
    }
    function stopAnimation2() {
      updater = (updater + 1) % 999999;
      if (!animationHandler) return;
      clearTimeout(animationHandler);
    }
    function calcData() {
      mergeConfig();
      calcHeaderData();
      calcRowsData();
      calcWidths();
      calcHeights();
      calcAligns();
      animation(true);
    }
    function mergeConfig() {
      mergedConfig.value = cloneDeep({ ...defaultConfig, ...props.config });
    }
    function calcHeaderData() {
      const { header: h, index: index2, indexHeader } = mergedConfig.value;
      if (h.length === 0) {
        header.value = [];
        return;
      }
      if (index2) h.unshift(indexHeader);
      header.value = h;
    }
    function calcRowsData() {
      let { data, index: index2, rowNum } = mergedConfig.value;
      if (index2) {
        data = data.map((row, i) => {
          row = [...row];
          const indexTag = `${i + 1}`;
          row.unshift(indexTag);
          return row;
        });
      }
      data = data.map((ceils, i) => ({ ceils, rowIndex: i }));
      const rowLength = data.length;
      if (rowLength > rowNum && rowLength < 2 * rowNum) {
        data = [...data, ...data];
      }
      data = data.map((d, i) => ({ ...d, scroll: i }));
      rowsData = data;
      rows.value = data;
    }
    function calcWidths() {
      const { columnWidth, header: header2 } = mergedConfig.value;
      let usedWidth = 0;
      let useWidthColumn = 0;
      columnWidth.forEach((w) => {
        if (w) {
          useWidthColumn++;
        }
        usedWidth += w;
      });
      let columnNum = 0;
      if (rowsData[0]) {
        columnNum = rowsData[0].ceils.length;
      } else if (header2.length > 0) {
        columnNum = header2.length;
      }
      const avgWidth = (width.value - usedWidth) / (columnNum - useWidthColumn);
      const widthArray = [];
      for (let i = 0; i < columnNum; i++) {
        if (columnWidth[i]) {
          widthArray.push(columnWidth[i]);
        } else {
          widthArray.push(avgWidth);
        }
      }
      widths.value = widthArray;
    }
    function calcHeights(onresize = false) {
      const { headerHeight, rowNum, data } = mergedConfig.value;
      let allHeight = height.value;
      if (showHeader.value && header.value.length > 0) allHeight -= headerHeight;
      const avg = allHeight / rowNum;
      avgHeight = avg;
      if (!onresize) heights2.value = Array.from({ length: data.length }).fill(avg);
    }
    function calcAligns() {
      const alignArray = [];
      const { align } = mergedConfig.value;
      for (let i = 0; i < header.value.length; i++) {
        if (align[i]) {
          alignArray.push(align[i]);
        } else {
          alignArray.push("center");
        }
      }
      aligns.value = alignArray;
    }
    function emitHandle(type, ci, row, ceil) {
      const { ceils, rowIndex } = row;
      emit(type, {
        row: ceils,
        ceil,
        rowIndex,
        columnIndex: ci
      });
    }
    function handleMouseOver(ci, row, ceil) {
      emitHandle("mouseover", ci, row, ceil);
      if (!mergedConfig.value.hoverPause) return;
      stopAnimation2();
    }
    function handleMouseLeave(ci, row, ceil) {
      emitHandle("mouseleave", ci, row, ceil);
      if (!mergedConfig.value.hoverPause) return;
      animation(true);
    }
    async function animation(start = false) {
      if (needCalc) {
        calcRowsData();
        calcHeights();
        needCalc = false;
      }
      const updaterTemp = updater;
      let animationIndexTemp = animationIndex;
      const { waitTime, carousel, rowNum } = mergedConfig.value;
      const rowLength = rowsData.length;
      if (rowNum >= rowLength) return;
      if (start) {
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        if (updaterTemp !== updater) return;
      }
      const animationNum = carousel === "single" ? 1 : rowNum;
      const rowsTemp = rowsData.slice(animationIndexTemp);
      rowsTemp.push(...rowsData.slice(0, animationIndexTemp));
      rows.value = rowsTemp.slice(0, carousel === "page" ? rowNum * 2 : rowNum + 1);
      heights2.value = Array.from({ length: rowLength }).fill(avgHeight);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (updaterTemp !== updater) return;
      heights2.value.splice(0, animationNum, ...Array.from({ length: animationNum }).fill(0));
      animationIndexTemp += animationNum;
      const back = animationIndexTemp - rowLength;
      if (back >= 0) animationIndexTemp = back;
      animationIndex = animationIndexTemp;
      animationHandler = setTimeout(animation, waitTime - 300);
    }
    function updateRows(rows2, animateIndex) {
      mergedConfig.value = {
        ...mergedConfig.value,
        data: [...rows2]
      };
      needCalc = true;
      animationIndex = animateIndex;
      if (!animationHandler) animation(true);
    }
    __expose({
      resize,
      updateRows
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "dv-scroll-board",
        ref_key: "scrollTableRef",
        ref: scrollTableRef
      }, [
        showHeader.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "header",
          style: normalizeStyle(`background: ${mergedConfig.value.headerBGC};`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(header.value, (headerItem, i) => {
            return openBlock(), createElementBlock("div", {
              class: "header-item",
              key: `${headerItem}${i}`,
              style: normalizeStyle(`
          height: ${mergedConfig.value.headerHeight}px;
          line-height: ${mergedConfig.value.headerHeight}px;
          width: ${widths.value[i]}px;
          text-align: ${aligns.value[i]};
        `)
            }, toDisplayString(headerItem), 5);
          }), 128))
        ], 4)) : createCommentVNode("", true),
        mergedConfig.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "rows",
          style: normalizeStyle(`height: ${height.value - (showHeader.value ? mergedConfig.value.headerHeight : 0)}px;
      ${!showHeader.value ? "border-top-left-radius: 8px;border-top-right-radius: 8px;" : ""}`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row, ri) => {
            return openBlock(), createElementBlock("div", {
              class: "row-item",
              key: `${row.toString()}${row.scroll}`,
              style: normalizeStyle(`
          height: ${heights2.value[ri]}px;
          line-height: ${heights2.value[ri]}px;
          background: ${mergedConfig.value[row.rowIndex % 2 === 0 ? "oddRowBGC" : "evenRowBGC"]};
        `)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row.ceils, (ceil, ci) => {
                return openBlock(), createElementBlock("div", {
                  class: "ceil",
                  key: `${ceil}${ri}${ci}`,
                  style: normalizeStyle(`width: ${widths.value[ci]}px; text-align: ${aligns.value[ci]}`),
                  onClick: ($event) => emitHandle("rowClick", ci, row, ceil),
                  onMouseenter: ($event) => handleMouseOver(ci, row, ceil),
                  onMouseleave: ($event) => handleMouseLeave(ci, row, ceil)
                }, [
                  mergedConfig.value.index && ci === 0 ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: "index",
                    style: normalizeStyle(`background: ${mergedConfig.value.headerBGC};`)
                  }, toDisplayString(ceil), 5)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(ceil), 1)
                  ], 64))
                ], 44, _hoisted_1$s);
              }), 128))
            ], 4);
          }), 128))
        ], 4)) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const ScrollTable = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-ccb14245"]]);
const _hoisted_1$r = ["onClick"];
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "MacButton",
  props: {
    size: {
      type: String,
      default: () => "default"
    },
    // 禁用所有按钮
    disabled: {
      request: false,
      type: Boolean,
      default: false
    },
    // 要隐藏的按钮
    hidden: {
      request: false,
      type: Array,
      default() {
        return [];
      }
    },
    // 使用全屏功能
    narrow: {
      request: false,
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "remove", "resize", "fullResize"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("mac-btn");
    const filterBtnList = computed(() => {
      return btnList.filter((e) => {
        return !props.hidden.includes(e.key);
      });
    });
    const isFull = computed(() => {
      return props.narrow;
    });
    const btnList = [
      {
        title: "关闭",
        key: "close",
        icon: "ant-design:close-outlined"
      },
      {
        title: "缩小",
        key: "remove",
        icon: "ant-design:shrink-outlined"
      },
      {
        title: isFull.value ? "缩小" : "放大",
        key: props.narrow ? "fullResize" : "resize",
        icon: isFull.value ? "ant-design:shrink-outlined" : "ant-design:arrows-alt-outlined"
      }
    ];
    const handleClick = (key) => {
      emit(key);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(filterBtnList.value, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.key,
            class: normalizeClass(["btn", [item.key, __props.disabled && "disabled", __props.size]]),
            onClick: withModifiers(($event) => handleClick(item.key), ["stop"])
          }, [
            createVNode(unref(Icon), {
              icon: item.icon,
              size: "10",
              class: normalizeClass(["icon-base", { hover: !__props.disabled }])
            }, null, 8, ["icon", "class"])
          ], 10, _hoisted_1$r);
        }), 128))
      ], 2);
    };
  }
});
const MacButton = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-5c20d434"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  ...{ name: "ScreenCheckbox" },
  __name: "index",
  props: {
    title: { type: String },
    tooltip: { type: String }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Checkbox), normalizeProps(guardReactiveProps(_ctx.$attrs)), {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.title), 1)
          ]),
          _: 1
        }, 16),
        __props.tooltip ? (openBlock(), createBlock(unref(Tooltip), {
          key: 0,
          title: __props.tooltip
        }, {
          default: withCtx(() => [
            createVNode(unref(Icon), { icon: "ant-design:exclamation-circle-outlined" })
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$q = {
  key: 0,
  class: "prefix"
};
const _hoisted_2$g = { key: 3 };
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  ...{ name: "ScreenInput" },
  __name: "index",
  props: {
    isNumber: { type: Boolean, default: true },
    prefix: { type: String },
    suffix: { type: String }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "cd77f8d8": colorBorder.value
    }));
    const emit = __emit;
    const { prefixCls } = useDesign("screen-input");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        __props.prefix ? (openBlock(), createElementBlock("div", _hoisted_1$q, toDisplayString(__props.prefix), 1)) : createCommentVNode("", true),
        __props.isNumber ? (openBlock(), createBlock(unref(InputNumber), mergeProps({
          key: 1,
          class: "input"
        }, _ctx.$attrs, {
          onChange: _cache[0] || (_cache[0] = (e) => emit("change", e)),
          bordered: false,
          controls: false
        }), null, 16)) : (openBlock(), createBlock(unref(Input), mergeProps({
          key: 2,
          class: "input"
        }, _ctx.$attrs, {
          bordered: false,
          onChange: _cache[1] || (_cache[1] = (e) => emit("change", e))
        }), null, 16)),
        __props.suffix ? (openBlock(), createElementBlock("div", _hoisted_2$g, toDisplayString(__props.suffix), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const ScreenInput = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-107119ae"]]);
const listenGlobalKeyboard = ({ CtrlShiftKeysEnum, CtrlKeysEnum, ShiftKeysEnum, KeysEnum }) => {
  const shortKeys = (e, enums) => {
    if (!enums) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    const fun = enums[key];
    if (!fun || !isFunction(fun)) return;
    e.preventDefault();
    e.stopPropagation();
    fun();
  };
  const { prefixCls } = useDesign("chart-contain");
  function innerContain(node) {
    var _a;
    if ((_a = node.className) == null ? void 0 : _a.startsWith(`${prefixCls} active`)) {
      return true;
    }
    if (node.parentNode) {
      return innerContain(node.parentNode);
    }
    return false;
  }
  const keyDownHandle = (e) => {
    if (e.target !== document.body && !innerContain(e.target)) {
      return;
    }
    if (e.ctrlKey && e.shiftKey) {
      shortKeys(e, CtrlShiftKeysEnum);
      return;
    }
    if (e.ctrlKey) {
      shortKeys(e, CtrlKeysEnum);
      return;
    }
    if (e.shiftKey) {
      shortKeys(e, ShiftKeysEnum);
      return;
    }
    shortKeys(e, KeysEnum);
  };
  globalThis.addEventListener("keydown", keyDownHandle);
  const removeGlobalKeyboard = () => {
    globalThis.removeEventListener("keydown", keyDownHandle);
  };
  return { removeGlobalKeyboard };
};
class UndoRedoManager {
  constructor(size, data) {
    __publicField(this, "undoStack");
    __publicField(this, "redoStack");
    __publicField(this, "data");
    __publicField(this, "size", 100);
    this.undoStack = [];
    this.redoStack = [];
    if (size) {
      this.size = size;
    }
    if (data) {
      this.data = cloneDeep(data);
    }
  }
  // 设置当前数据
  setData(data) {
    if (this.data) {
      this.undoStack.push(this.data);
      if (this.undoStack.length === this.size) {
        this.undoStack.splice(0, 1);
      }
    }
    this.data = cloneDeep(data);
    this.redoStack = [];
  }
  // 执行撤回操作
  undo() {
    if (this.undoStack.length === 0 || !this.data) return;
    this.redoStack.push(this.data);
    this.data = this.undoStack.pop();
    this.applyData(this.data);
    return this.getCurrentData();
  }
  // 执行前进操作
  redo() {
    if (this.redoStack.length === 0 || !this.data) return;
    this.undoStack.push(this.data);
    this.data = this.redoStack.pop();
    this.applyData(this.data);
    return this.getCurrentData();
  }
  // 应用数据（根据实际情况实现，比如更新UI等）
  applyData(data) {
    console.log("Applied state:", data);
  }
  // 获取当前数据
  getCurrentData() {
    return cloneDeep(this.data);
  }
}
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "TextFontStyle",
  props: {
    bold: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    strikethrough: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    hide: { type: Array, default: () => [] }
  },
  emits: ["fontStyleChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const styles = reactive({
      [TextFont.Bold]: { name: "加粗", icon: "carbon:text-bold", value: false },
      [TextFont.Italic]: { name: "斜体", icon: "carbon:text-italic", value: false },
      [TextFont.Underline]: { name: "下划线", icon: "carbon:text-underline", value: false },
      [TextFont.Strikethrough]: { name: "删除线", icon: "carbon:text-strikethrough", value: false }
    });
    const showButton = (item) => {
      return !props.hide.includes(item);
    };
    watch(
      [() => props.bold, () => props.italic, () => props.strikethrough, () => props.underline],
      ([bold, italic, strikethrough, underline]) => {
        styles.bold.value = bold;
        styles.italic.value = italic;
        styles.strikethrough.value = strikethrough;
        styles.underline.value = underline;
      },
      { immediate: true, deep: true }
    );
    const { prefixCls } = useDesign("font-style");
    function handleMouseDown(e) {
      if (e) {
        styles[e].value = !styles[e].value;
        if (styles[e].value) {
          if (e === TextFont.Underline) {
            styles[TextFont.Strikethrough].value = false;
          }
          if (e === TextFont.Strikethrough) {
            styles[TextFont.Underline].value = false;
          }
        }
        const value = {};
        Object.keys(styles).forEach((key) => {
          value[key] = styles[key].value;
        });
        emit("fontStyleChange", value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(styles), (item) => {
          return openBlock(), createElementBlock(Fragment, { key: item }, [
            showButton(item) ? (openBlock(), createBlock(unref(Tooltip), {
              key: 0,
              placement: "bottom",
              title: `${styles[item].value ? "关闭" : "打开"}${styles[item].name}`
            }, {
              default: withCtx(() => [
                createVNode(unref(RadioButton), {
                  class: "radio-button",
                  checked: styles[item].value,
                  onMousedown: ($event) => handleMouseDown(item)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: styles[item].icon
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1032, ["checked", "onMousedown"])
              ]),
              _: 2
            }, 1032, ["title"])) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ], 2);
    };
  }
});
const TextFontStyle = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-3b6dd2cf"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "TextHAlignStyle",
  props: {
    alignType: { type: String, default: void 0 }
  },
  emits: ["alignChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const type = ref();
    watch(
      () => props.alignType,
      (val) => {
        type.value = val;
      },
      { immediate: true }
    );
    const { prefixCls } = useDesign("h-align-style");
    const alignTypes = reactive({
      [TextHAlign.Left]: { name: "水平居左", icon: "carbon:text-align-left", description: "文字水平居左" },
      [TextHAlign.Center]: { name: "水平居中", icon: "carbon:text-align-center", description: "文字水平居中" },
      [TextHAlign.Right]: {
        name: "水平居右",
        icon: "carbon:text-align-right",
        description: "文字水平居右"
      }
    });
    function alignChange(e) {
      const value = e.target.value;
      emit("alignChange", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(unref(RadioGroup), {
          value: type.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => type.value = $event),
          onChange: alignChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(alignTypes), (item) => {
              return openBlock(), createBlock(unref(Tooltip), {
                key: item,
                placement: "top",
                title: alignTypes[item].description
              }, {
                default: withCtx(() => [
                  createVNode(unref(RadioButton), {
                    class: "radio-button",
                    value: item
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: alignTypes[item].icon
                      }, null, 8, ["icon"])
                    ]),
                    _: 2
                  }, 1032, ["value"])
                ]),
                _: 2
              }, 1032, ["title"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["value"])
      ], 2);
    };
  }
});
const TextHAlignStyle = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-63ee2427"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "TextVAlignStyle",
  props: {
    alignType: { type: String, default: void 0 }
  },
  emits: ["alignChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const type = ref();
    watch(
      () => props.alignType,
      (val) => {
        type.value = val;
      },
      { immediate: true }
    );
    const { prefixCls } = useDesign("v-align-style");
    const alignTypes = reactive({
      [TextVAlign.Top]: { name: "垂直居上", icon: "carbon:align-vertical-top", description: "文字垂直居上" },
      [TextVAlign.Center]: { name: "垂直居中", icon: "carbon:align-vertical-center", description: "文字垂直居中" },
      [TextVAlign.Bottom]: {
        name: "垂直居下",
        icon: "carbon:align-vertical-bottom",
        description: "文字垂直居下"
      }
    });
    function alignChange(e) {
      const value = e.target.value;
      emit("alignChange", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(unref(RadioGroup), {
          value: type.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => type.value = $event),
          onChange: alignChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(alignTypes), (item) => {
              return openBlock(), createBlock(unref(Tooltip), {
                key: item,
                placement: "top",
                title: alignTypes[item].description
              }, {
                default: withCtx(() => [
                  createVNode(unref(RadioButton), {
                    class: "radio-button",
                    value: item
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: alignTypes[item].icon
                      }, null, 8, ["icon"])
                    ]),
                    _: 2
                  }, 1032, ["value"])
                ]),
                _: 2
              }, 1032, ["title"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["value"])
      ], 2);
    };
  }
});
const TextVAlignStyle = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-a40ac773"]]);
const _hoisted_1$p = { class: "line" };
const _hoisted_2$f = { class: "input" };
const _hoisted_3$9 = { class: "line" };
const _hoisted_4$4 = { style: { "flex": "1" } };
const _hoisted_5$3 = {
  key: 0,
  class: "line"
};
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  ...{ name: "TextStyle" },
  __name: "index",
  props: {
    verticalAlign: { type: Boolean, default: false },
    textStyle: {
      type: Object,
      default: () => {
      }
    },
    hideAlign: { type: Boolean, default: false },
    hideFontStyle: { type: Array, default: () => [] },
    colorType: {
      type: Number,
      default: 3
    }
  },
  emits: [
    "fontStyleChange",
    "hAlignChange",
    "vAlignChange",
    "fontChange",
    "sizeChange",
    "colorChange",
    "colorConfirm"
  ],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "954d8ee2": colorBorder.value
    }));
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("text-style");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const fontSize = ref(12);
    const font = ref(fonts[0].value);
    const textColor = ref();
    const fontStyle = ref();
    watch(
      () => props.textStyle,
      (val) => {
        var _a, _b, _c, _d;
        if (val) {
          fontSize.value = ((_a = props.textStyle) == null ? void 0 : _a.fontSize) ?? 12;
          font.value = ((_b = props.textStyle) == null ? void 0 : _b.font) ?? fonts[0].value;
          textColor.value = (_c = props.textStyle) == null ? void 0 : _c.textColor;
          fontStyle.value = (_d = props.textStyle) == null ? void 0 : _d.fontStyle;
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    function confirmColor(e) {
      const value = changeColor(e);
      textColor.value = e;
      emit("colorConfirm", value);
    }
    function changeColor(e) {
      let value;
      if (e) {
        if (e.startsWith("linear-gradient")) {
          value = {
            value: e,
            style: {
              background: e,
              color: "transparent",
              backgroundClip: "text"
            }
          };
        } else {
          value = {
            value: e,
            style: {
              color: e
            }
          };
        }
      } else {
        value = { value: "", style: {} };
      }
      emit("colorChange", value);
      underlineChange(fontStyle.value, e);
      return value;
    }
    function fontStyleChange(e) {
      fontStyle.value = e;
      underlineChange(e, textColor.value);
    }
    function underlineChange(value, color2) {
      if (!value) return;
      const isGradient = color2 == null ? void 0 : color2.startsWith("linear-gradient");
      const size = Math.round((fontSize.value ?? 12) / 10);
      const underline = (value == null ? void 0 : value.underline) && isGradient ? { borderBottom: `${size}px solid`, borderImage: `${color2} 1` } : (value == null ? void 0 : value.underline) ? { borderBottom: `${size}px solid`, borderColor: `${color2}` } : {};
      const fontWeight = value[TextFont.Bold] ? { fontWeight: "bold" } : {};
      const fontStyle2 = value[TextFont.Italic] ? { fontStyle: "italic" } : {};
      if (isGradient) {
        const colors = color2 == null ? void 0 : color2.match(new RegExp("(?<=linear-gradient.*?)(rgba\\(.*?\\))", "g"));
        if (colors && colors.length > 0) {
          color2 = colors[0];
        }
      }
      const strikethrough = value[TextFont.Strikethrough] ? { textDecoration: "line-through", textDecorationColor: color2 } : {};
      emit("fontStyleChange", {
        value,
        style: {
          ...fontWeight,
          ...fontStyle2,
          ...underline,
          ...strikethrough
        }
      });
    }
    function hAlignChange(value) {
      emit("hAlignChange", {
        value,
        style: {
          justifyContent: value === TextHAlign.Left ? "flex-start" : value === TextHAlign.Center ? "center" : value === TextHAlign.Right ? "flex-end" : "center"
        }
      });
    }
    function vAlignChange(value) {
      emit("vAlignChange", {
        value,
        style: {
          alignItems: value === TextVAlign.Top ? "flex-start" : value === TextVAlign.Center ? "center" : value === TextVAlign.Bottom ? "flex-end" : "unset"
        }
      });
    }
    function fontChange(value) {
      emit("fontChange", { value, style: { fontFamily: value } });
    }
    function sizeChange(e) {
      if (e) {
        emit("sizeChange", { value: e, style: { fontSize: `${e}px` } });
      } else {
        fontSize.value = 12;
        emit("sizeChange", { value: 12, style: { fontSize: `12px` } });
      }
      underlineChange(fontStyle.value, textColor.value);
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$p, [
          createVNode(unref(Select), {
            style: { "flex": "1" },
            value: font.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => font.value = $event),
            options: unref(fonts),
            onChange: fontChange
          }, null, 8, ["value", "options"]),
          createElementVNode("div", _hoisted_2$f, [
            createVNode(unref(InputNumber), {
              value: fontSize.value,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => fontSize.value = $event),
              bordered: false,
              placeholder: "大小",
              controls: false,
              min: 6,
              maxlength: 4,
              onChange: sizeChange
            }, null, 8, ["value"]),
            _cache[2] || (_cache[2] = createElementVNode("div", { class: "suffix" }, "px", -1))
          ]),
          !__props.hideAlign ? (openBlock(), createBlock(TextHAlignStyle, {
            key: 0,
            "align-type": (_a = __props.textStyle) == null ? void 0 : _a.hAlignType,
            onAlignChange: hAlignChange
          }, null, 8, ["align-type"])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_3$9, [
          createElementVNode("div", _hoisted_4$4, [
            createVNode(unref(MfishColorPicker), {
              type: __props.colorType,
              "direct-confirm": true,
              value: textColor.value,
              onConfirmChange: confirmColor,
              onInputChange: changeColor
            }, null, 8, ["type", "value"])
          ]),
          createVNode(TextFontStyle, mergeProps({ hide: __props.hideFontStyle }, fontStyle.value, { onFontStyleChange: fontStyleChange }), null, 16, ["hide"])
        ]),
        __props.verticalAlign ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
          createVNode(TextVAlignStyle, {
            "align-type": (_b = __props.textStyle) == null ? void 0 : _b.vAlignType,
            onAlignChange: vAlignChange
          }, null, 8, ["align-type"])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const TextStyle = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-c65c80c4"]]);
const fonts = [
  {
    value: "微软雅黑",
    label: "微软雅黑"
  },
  {
    value: "宋体",
    label: "宋体"
  },
  {
    value: "黑体",
    label: "黑体"
  },
  {
    value: "楷体",
    label: "楷体"
  },
  {
    value: "仿宋",
    label: "仿宋"
  },
  {
    value: "sans-serif",
    label: "sans-serif"
  },
  {
    value: "Arial",
    label: "Arial"
  },
  {
    value: "PingFangSC",
    label: "PingFangSC"
  },
  {
    value: "monospace",
    label: "monospace"
  },
  {
    value: "Courier New",
    label: "Courier New"
  },
  {
    value: "lcd",
    label: "lcd"
  }
];
var TextHAlign = /* @__PURE__ */ ((TextHAlign2) => {
  TextHAlign2["Left"] = "left";
  TextHAlign2["Center"] = "center";
  TextHAlign2["Right"] = "right";
  return TextHAlign2;
})(TextHAlign || {});
var TextVAlign = /* @__PURE__ */ ((TextVAlign2) => {
  TextVAlign2["Top"] = "top";
  TextVAlign2["Center"] = "center";
  TextVAlign2["Bottom"] = "bottom";
  return TextVAlign2;
})(TextVAlign || {});
var TextFont = /* @__PURE__ */ ((TextFont2) => {
  TextFont2["Bold"] = "bold";
  TextFont2["Italic"] = "italic";
  TextFont2["Underline"] = "underline";
  TextFont2["Strikethrough"] = "strikethrough";
  return TextFont2;
})(TextFont || {});
function getFieldIcon(dataType) {
  switch (dataType) {
    case "NUMBER": {
      return "ant-design:field-number-outlined";
    }
    case "DATE": {
      return "ant-design:field-time-outlined";
    }
    default: {
      return "ant-design:field-string-outlined";
    }
  }
}
var FilterCondition = /* @__PURE__ */ ((FilterCondition2) => {
  FilterCondition2["error"] = "error";
  FilterCondition2["eq"] = "=";
  FilterCondition2["ne"] = "!=";
  FilterCondition2["gt"] = ">";
  FilterCondition2["ge"] = ">=";
  FilterCondition2["lt"] = "<";
  FilterCondition2["le"] = "<=";
  FilterCondition2["between"] = "between";
  FilterCondition2["isNull"] = "isNull";
  FilterCondition2["isNotNull"] = "isNotNull";
  FilterCondition2["like"] = "like";
  FilterCondition2["notLike"] = "notLike";
  FilterCondition2["likeLeft"] = "likeLeft";
  FilterCondition2["likeRight"] = "likeRight";
  return FilterCondition2;
})(FilterCondition || {});
var AggregateType = /* @__PURE__ */ ((AggregateType2) => {
  AggregateType2["count"] = "计数";
  AggregateType2["sum"] = "求和";
  AggregateType2["avg"] = "平均";
  AggregateType2["max"] = "最大";
  AggregateType2["min"] = "最小";
  return AggregateType2;
})(AggregateType || {});
var ExpressionType = /* @__PURE__ */ ((ExpressionType2) => {
  ExpressionType2["formula"] = "formula";
  ExpressionType2["operator"] = "operator";
  ExpressionType2["field"] = "field";
  ExpressionType2["param"] = "param";
  return ExpressionType2;
})(ExpressionType || {});
const getApiFolderTree = (reqApiFolder) => {
  return defHttp.get({ url: "/nocode/apiFolder/tree", params: reqApiFolder });
};
const getApiFolderAndFile = (reqApiFolder) => {
  return defHttp.get({ url: "/nocode/apiFolder", params: reqApiFolder });
};
function exportApiFolder(reqApiFolder) {
  return defHttp.download({ url: `${"/nocode/apiFolder"}/export`, params: reqApiFolder });
}
function insertApiFolder(apiFolder) {
  return defHttp.post({ url: "/nocode/apiFolder", params: apiFolder }, { successMessageMode: "message" });
}
function updateApiFolder(apiFolder) {
  return defHttp.put({ url: "/nocode/apiFolder", params: apiFolder }, { successMessageMode: "message" });
}
function dragApiFolder(apiFolders) {
  return defHttp.put({ url: "/nocode/apiFolder/drag", params: apiFolders }, { successMessageMode: "message" });
}
function deleteApiFolder(id) {
  return defHttp.delete({ url: `${"/nocode/apiFolder"}/${id}` }, { successMessageMode: "message" });
}
const getApiParamsList = (reqApiParams) => {
  return defHttp.get({ url: "/nocode/apiParams", params: reqApiParams });
};
function exportApiParams(reqApiParams) {
  return defHttp.download({ url: `${"/nocode/apiParams"}/export`, params: reqApiParams });
}
function insertApiParams(apiParams) {
  return defHttp.post({ url: "/nocode/apiParams", params: apiParams }, { successMessageMode: "message" });
}
function updateApiParams(apiParams) {
  return defHttp.put({ url: "/nocode/apiParams", params: apiParams }, { successMessageMode: "message" });
}
function deleteApiParams(id) {
  return defHttp.delete({ url: `${"/nocode/apiParams"}/${id}` }, { successMessageMode: "message" });
}
const getFormulaTree = (reqFormulaInfo) => {
  return defHttp.get({ url: "/nocode/formulaInfo/tree", params: reqFormulaInfo });
};
const getFormulaParamList = (path) => {
  return defHttp.get({ url: `${"/nocode/formulaParam"}/${path}` });
};
const getFormulaInfoList = (reqFormulaInfo) => {
  return defHttp.get({ url: "/nocode/formulaInfo", params: reqFormulaInfo });
};
function getFormulaInfoById(id) {
  return defHttp.get({ url: `${"/nocode/formulaInfo"}/${id}` });
}
function exportFormulaInfo(reqFormulaInfo) {
  return defHttp.download({ url: "/nocode/formulaInfo/export", params: reqFormulaInfo });
}
function insertFormulaInfo(formulaInfo) {
  return defHttp.post({ url: "/nocode/formulaInfo", params: formulaInfo }, { successMessageMode: "message" });
}
function updateFormulaInfo(formulaInfo) {
  return defHttp.put({ url: "/nocode/formulaInfo", params: formulaInfo }, { successMessageMode: "message" });
}
function deleteFormulaInfo(id) {
  return defHttp.delete({ url: `${"/nocode/formulaInfo"}/${id}` }, { successMessageMode: "message" });
}
function deleteBatchFormulaInfo(ids) {
  return defHttp.delete({ url: "/nocode/formulaInfo/batch/" + ids }, { successMessageMode: "message" });
}
const getApiUrl = () => "/nocode/mfApi/api";
const getMfApiList = (reqMfApi) => {
  return defHttp.get({ url: "/nocode/mfApi", params: reqMfApi });
};
function exportMfApi(reqMfApi) {
  return defHttp.download({ url: `${"/nocode/mfApi"}/export`, params: reqMfApi });
}
function insertMfApi(mfApi) {
  return defHttp.post({ url: "/nocode/mfApi", params: mfApi }, { successMessageMode: "message" });
}
function updateMfApi(mfApi) {
  return defHttp.put({ url: "/nocode/mfApi", params: mfApi }, { successMessageMode: "message" });
}
function deleteMfApi(id) {
  return defHttp.delete({ url: `${"/nocode/mfApi"}/${id}` }, { successMessageMode: "message" });
}
function getMfApiById(id) {
  return defHttp.get({ url: `${"/nocode/mfApi"}/${id}` });
}
function getQuerySql(config) {
  return defHttp.post({ url: "/nocode/mfApi/sql", params: config }, { errorMessageMode: "message" });
}
function getQueryData(config, reqPage) {
  return defHttp.post(
    { url: `${"/nocode/mfApi/data"}?pageNum=${reqPage.pageNum}&pageSize=${reqPage.pageSize}`, params: config },
    { errorMessageMode: "message" }
  );
}
function formulaTest(config, reqPage) {
  return defHttp.post(
    { url: `${"/nocode/mfApi/formulaTest"}?pageNum=${reqPage.pageNum}&pageSize=${reqPage.pageSize}`, params: config },
    { errorMessageMode: "message" }
  );
}
function getQueryFields(config) {
  return defHttp.post({ url: "/nocode/mfApi/fields", params: config }, { errorMessageMode: "message" });
}
const getSourceHeaders = (params) => {
  return defHttp.get({ url: "/nocode/mfApi/headers", params });
};
function getDataFieldsById(id) {
  return defHttp.get({ url: `${"/nocode/mfApi/fields"}/${id}` }, { errorMessageMode: "message" });
}
function getDataTableById(id, reqPage, params) {
  return defHttp.get(
    {
      url: `${"/nocode/mfApi/table"}/${id}?pageNum=${reqPage.pageNum}&pageSize=${reqPage.pageSize}`,
      params
    },
    { errorMessageMode: "message" }
  );
}
function getApiDataById(id, reqPage, params) {
  return defHttp.get(
    { url: `${getApiUrl()}/${id}`, params: { ...reqPage, ...params } },
    { errorMessageMode: "message" }
  );
}
function renameField(id, colName, newName) {
  return defHttp.put(
    { url: "/nocode/mfApi/field/rename", params: { id, colName, newName } },
    { successMessageMode: "message" }
  );
}
const getMfScreenList = (reqMfScreen) => {
  return defHttp.get({ url: "/nocode/mfScreen", params: reqMfScreen });
};
function getMfScreenById(id, shareToken) {
  return defHttp.get({ url: `${"/nocode/mfScreen"}/${id}`, params: { _shareToken: shareToken } });
}
function insertMfScreen(mfScreen) {
  return defHttp.post({ url: "/nocode/mfScreen", params: mfScreen }, { successMessageMode: "message" });
}
function updateMfScreen(mfScreen) {
  return defHttp.put({ url: "/nocode/mfScreen", params: mfScreen }, { successMessageMode: "message" });
}
function deleteMfScreen(id) {
  return defHttp.delete({ url: `${"/nocode/mfScreen"}/${id}` }, { successMessageMode: "message" });
}
function shareMfScreenById(id, duration) {
  return defHttp.get({ url: `${"/nocode/mfScreen/share"}/${id}`, params: { duration } });
}
function shareMfScreenByQRCode(id, path, duration) {
  return defHttp.get({ url: `${"/nocode/mfScreen/share"}/code/${id}`, params: { path, duration } });
}
const getScreenChartsList = (reqScreenCharts) => {
  return defHttp.get({ url: "/nocode/screenCharts", params: reqScreenCharts });
};
function getScreenChartsById(id) {
  return defHttp.get({ url: `${"/nocode/screenCharts"}/${id}` });
}
function exportScreenCharts(reqScreenCharts) {
  return defHttp.download({ url: `${"/nocode/screenCharts"}/export`, params: reqScreenCharts });
}
function insertScreenCharts(screenCharts) {
  return defHttp.post({ url: "/nocode/screenCharts", params: screenCharts }, { successMessageMode: "message" });
}
function updateScreenCharts(screenCharts) {
  return defHttp.put({ url: "/nocode/screenCharts", params: screenCharts }, { successMessageMode: "message" });
}
function deleteScreenCharts(id) {
  return defHttp.delete({ url: `${"/nocode/screenCharts"}/${id}` }, { successMessageMode: "message" });
}
function deleteBatchScreenCharts(ids) {
  return defHttp.delete({ url: `${"/nocode/screenCharts"}/batch/${ids}` }, { successMessageMode: "message" });
}
const getScreenFolderTree = (reqScreenFolder) => {
  return defHttp.get({ url: "/nocode/screenFolder/tree", params: reqScreenFolder });
};
const getScreenFolderAndFile = (reqScreenFolder) => {
  return defHttp.get({ url: "/nocode/screenFolder", params: reqScreenFolder });
};
function exportScreenFolder(reqScreenFolder) {
  return defHttp.download({ url: `${"/nocode/screenFolder"}/export`, params: reqScreenFolder });
}
function insertScreenFolder(screenFolder) {
  return defHttp.post({ url: "/nocode/screenFolder", params: screenFolder }, { successMessageMode: "message" });
}
function updateScreenFolder(screenFolder) {
  return defHttp.put({ url: "/nocode/screenFolder", params: screenFolder }, { successMessageMode: "message" });
}
function dragScreenFolder(screenFolders) {
  return defHttp.put(
    { url: "/nocode/screenFolder/drag", params: screenFolders },
    { successMessageMode: "message" }
  );
}
function deleteScreenFolder(id) {
  return defHttp.delete({ url: `${"/nocode/screenFolder"}/${id}` }, { successMessageMode: "message" });
}
const getScreenResourceApiList = (reqScreenResourceApi) => {
  return defHttp.get({ url: "/nocode/screenResourceApi", params: reqScreenResourceApi });
};
function getScreenResourceApiById(id) {
  return defHttp.get({ url: `${"/nocode/screenResourceApi"}/${id}` });
}
function insertScreenResourceApi(screenResourceApi) {
  return defHttp.post(
    { url: "/nocode/screenResourceApi", params: screenResourceApi },
    { successMessageMode: "message" }
  );
}
function updateScreenResourceApi(screenResourceApi) {
  return defHttp.put(
    { url: "/nocode/screenResourceApi", params: screenResourceApi },
    { successMessageMode: "message" }
  );
}
function deleteScreenResourceApi(id) {
  return defHttp.delete({ url: `${"/nocode/screenResourceApi"}/${id}` }, { successMessageMode: "message" });
}
function getDataTableByResourceId(id, reqPage, params) {
  return defHttp.get(
    {
      url: `${"/nocode/screenResourceApi"}/table/${id}?pageNum=${reqPage.pageNum}&pageSize=${reqPage.pageSize}`,
      params: { ...params }
    },
    { errorMessageMode: "message" }
  );
}
function getTablesByResourceId(id) {
  return defHttp.get(
    { url: `${"/nocode/screenResourceApi"}/tables/${id}` },
    { errorMessageMode: "message" }
  );
}
function getFieldsByResourceId(id) {
  return defHttp.get(
    { url: `${"/nocode/screenResourceApi"}/fields/${id}` },
    { errorMessageMode: "message" }
  );
}
function getMfApiByResourceId(id) {
  return defHttp.get({ url: `${"/nocode/screenResourceApi"}/api/${id}` });
}
function getScreenLayers(reqScreenLayers, shareToken) {
  return defHttp.get({
    url: "/nocode/screenLayers",
    params: { ...reqScreenLayers, _shareToken: shareToken }
  });
}
const getScreenResourceList = (reqScreenResource) => {
  return defHttp.get({ url: "/nocode/screenResource", params: reqScreenResource });
};
function getScreenResourceBySourceId(sourceId) {
  return defHttp.get({ url: `${"/nocode/screenResource"}/${sourceId}` });
}
function insertScreenResource(screenResource) {
  return defHttp.post(
    { url: "/nocode/screenResource", params: screenResource },
    { successMessageMode: "message" }
  );
}
function updateScreenResource(screenResource) {
  return defHttp.put(
    { url: "/nocode/screenResource", params: screenResource },
    { successMessageMode: "message" }
  );
}
function deleteScreenResource(sourceId) {
  return defHttp.delete({ url: `${"/nocode/screenResource"}/${sourceId}` }, { successMessageMode: "message" });
}
function getLayersBySourceId(sourceId) {
  return defHttp.get({ url: `${"/nocode/screenResource"}/layers/${sourceId}` });
}
const useApiShortcut = (undo, redo, save) => {
  const interval = 150;
  const CtrlKeysEnum = {
    s: debounce(() => save(), interval),
    //保存
    z: debounce(() => undo(), interval)
    //撤销
  };
  const CtrlShiftKeysEnum = {
    z: debounce(() => redo(), interval)
    //重做
  };
  return { CtrlKeysEnum, CtrlShiftKeysEnum };
};
const useApiStore = defineStore("custom-api", {
  state: () => ({
    sourceId: "",
    sourceType: 0,
    tableName: "",
    tableFields: [],
    tableList: [],
    tableFieldsMap: /* @__PURE__ */ new Map(),
    variables: [],
    level: 1,
    fieldsChange: 1,
    showData: false,
    showDataLevel: "",
    formulaMap: /* @__PURE__ */ new Map()
  }),
  getters: {
    getSourceId() {
      return this.sourceId;
    },
    getSourceType() {
      return this.sourceType;
    },
    getTableName() {
      return this.tableName;
    },
    getTableFields() {
      return this.tableFields;
    },
    getTableList() {
      return this.tableList;
    },
    getTableFieldsMap() {
      return this.tableFieldsMap;
    },
    getVariables() {
      return this.variables;
    },
    getLevel() {
      return this.level;
    },
    getFieldsChange() {
      return this.fieldsChange;
    },
    getShowData() {
      return this.showData;
    },
    getShowDataLevel() {
      return this.showDataLevel;
    },
    getFormulaMap() {
      return this.formulaMap;
    }
  },
  actions: {
    setSourceId(sourceId) {
      this.sourceId = sourceId;
    },
    setSourceType(sourceType) {
      this.sourceType = sourceType;
    },
    setTableName(tableName) {
      if (!tableName) return;
      this.tableName = tableName;
    },
    async setTableFields(sourceId, tableName) {
      if (!tableName) return [];
      this.tableFields = await getSourceHeaders({
        sourceId,
        tableName,
        sourceType: this.sourceType
      });
      return this.tableFields;
    },
    setTableList(pageTable) {
      if ((pageTable == null ? void 0 : pageTable.list.length) > 0) {
        this.tableList = pageTable.list;
      }
    },
    setLevel(level) {
      this.level = level;
    },
    setFieldsChange(level) {
      if (level < this.getLevel) {
        this.fieldsChange++;
      }
    },
    addTableFieldsMap(tableName, headers) {
      if (tableName) {
        this.tableFieldsMap.set(tableName, headers);
      }
    },
    getTableFieldsByName(tableName) {
      if (tableName) {
        return this.tableFieldsMap.get(tableName) || [];
      }
      return [];
    },
    setShowData(show) {
      this.showData = show;
    },
    setShowDataLevel(level) {
      this.showDataLevel = level;
    },
    async setFormulaMap() {
      if (this.formulaMap && this.formulaMap.size > 0) return;
      const res = await getFormulaInfoList({ pageNum: 1, pageSize: 1e4 });
      res.list.forEach((info) => {
        const key = `${info.categoryId},${info.id}`;
        this.formulaMap.set(key, { ...info, key });
      });
    },
    getFormula(key) {
      return this.formulaMap.get(key);
    }
  }
});
const API_SAVE = "__API_SAVE__";
const formulaColName = "公式结果";
var ApiConfigEvent = /* @__PURE__ */ ((ApiConfigEvent2) => {
  ApiConfigEvent2["QUERY_SQL"] = "api_config:query_sql";
  ApiConfigEvent2["QUERY_DATA"] = "api_config:query_data";
  return ApiConfigEvent2;
})(ApiConfigEvent || {});
const getInnerFields = async (sqlQuery) => {
  const apiStore = useApiStore();
  if (!(sqlQuery == null ? void 0 : sqlQuery.sqlQuery)) return [];
  const curConfig = {
    sourceId: apiStore.getSourceId,
    sourceType: apiStore.getSourceType,
    sqlQuery: sqlQuery.sqlQuery
  };
  const fields = await getQueryFields(curConfig);
  if (fields) {
    fields.forEach((item) => item.tableAlias = sqlQuery.sourceTable);
  }
  return fields;
};
const containNest = (sqlQuery) => {
  return sqlQuery && ((sqlQuery == null ? void 0 : sqlQuery.aggregates) && sqlQuery.aggregates.length > 0 || sqlQuery.groups && sqlQuery.groups.length > 0 || sqlQuery.customColumns && sqlQuery.customColumns.length > 0);
};
const isNeedNest = (sqlQuery, level) => {
  const apiStore = useApiStore();
  return level === apiStore.getLevel && containNest(sqlQuery);
};
const queryDataEvent = (mitt2, sqlQuery, level) => {
  if (!mitt2) return;
  mitt2.emit("api_config:query_data", { sqlQuery, level });
};
const getParams = (sqlQuery) => {
  const params = /* @__PURE__ */ new Set();
  const loop = (sqlQuery2, params2) => {
    if (sqlQuery2.filters && sqlQuery2.filters.length > 0) {
      sqlQuery2.filters.forEach((item) => {
        if (item.valueType === "1" && item.value) {
          params2.add(item.value);
        }
      });
    }
    if (sqlQuery2.sqlQuery) {
      loop(sqlQuery2.sqlQuery, params2);
    }
  };
  loop(sqlQuery, params);
  return params;
};
const buildSql = async (sqlQuery) => {
  const apiStore = useApiStore();
  const params = [...getParams(sqlQuery)].reduce((prev, next) => {
    if (next) {
      prev[next] = "1";
    }
    return prev;
  }, {});
  return await getQuerySql({
    sourceId: apiStore.getSourceId,
    sourceType: apiStore.getSourceType,
    sqlQuery: sqlQuery || {},
    params
  });
};
const useScreenEditStore = defineStore("screen-edit", {
  state: () => ({
    key: 0,
    id: "",
    isResource: false,
    //画布
    screenCanvas: null,
    //画布中所有组件
    componentList: [],
    chartImgCache: /* @__PURE__ */ new Map(),
    scale: 1,
    canvasConfig: {
      width: 1920,
      height: 1080,
      theme: ThemeEnum.SYSTEM,
      backgroundColor: "",
      backgroundImage: "",
      screenName: "",
      screenDesc: "",
      watermark: "",
      fitType: FitType.FIT_BOX,
      otherSetting: {
        globalVariables: []
      }
    },
    undoRedoManager: new UndoRedoManager(100),
    curComponent: null,
    //当前组件
    curComponentIndex: -1,
    //当前组件索引
    curHoverComponentId: "",
    //鼠标移入的组件
    selectArea: {
      show: false,
      dropInfo: { x: 0, y: 0, width: 0, height: 0 },
      components: []
    },
    //选择区域
    guideLine: {
      lineListX: [],
      //X轴固定参考线
      lineListY: []
      //Y轴固定参考线
    },
    chartNameLabel: /* @__PURE__ */ new Map(),
    //组件名称缓存
    copyConfig: "",
    //复制的配置
    shareToken: void 0
  }),
  getters: {
    getKey() {
      return this.key;
    },
    getId() {
      return this.id || "";
    },
    getTheme() {
      if (this.canvasConfig.theme === ThemeEnum.SYSTEM) {
        return useAppStore().getDarkMode;
      }
      return this.canvasConfig.theme;
    },
    getScreenCanvas() {
      return this.screenCanvas;
    },
    getComponentList() {
      return this.componentList;
    },
    getScale() {
      return this.scale;
    },
    getCanvasConfig() {
      return this.canvasConfig;
    },
    getChartNameLabel() {
      return this.chartNameLabel;
    },
    getCurComponent() {
      return this.curComponent;
    },
    //获取当前正在配置的组件
    getCurConfigComponent() {
      var _a, _b, _c, _d;
      if (((_a = this.curComponent) == null ? void 0 : _a.chart.type) === ComType.MfCombine && ((_c = (_b = this.curComponent) == null ? void 0 : _b.chart.options) == null ? void 0 : _c.selectIndex) >= 0) {
        return (_d = this.curComponent) == null ? void 0 : _d.chart.options.components[this.curComponent.chart.options.selectIndex];
      }
      return this.curComponent;
    },
    getCurComponentIndex() {
      return this.curComponentIndex;
    },
    getCurHoverComponentId() {
      return this.curHoverComponentId;
    },
    getSelectArea() {
      return this.selectArea;
    },
    getGuideLine() {
      return this.guideLine;
    },
    getUndoRedoManager() {
      return this.undoRedoManager;
    },
    getCopyConfig() {
      return this.copyConfig;
    },
    getShareToken() {
      return this.shareToken;
    },
    getIsResource() {
      return this.isResource;
    }
  },
  actions: {
    setId(id) {
      this.id = id;
    },
    setIsResource(type) {
      this.isResource = type;
    },
    setScreenCanvas(screen) {
      this.screenCanvas = screen;
    },
    //设置画布比例
    setScale(scale) {
      this.scale = Number.parseFloat(scale.toFixed(2));
    },
    setCanvasConfig(canvasConfig) {
      if (canvasConfig) {
        this.canvasConfig = canvasConfig;
      }
    },
    setComponentList(componentList) {
      this.componentList = componentList;
    },
    //增加组件
    addComponent(component, index2) {
      if (index2 === void 0) {
        this.componentList.unshift(component);
      } else {
        this.componentList.splice(index2, 0, component);
      }
    },
    //设置当前组件
    setCurComponent(component, index2) {
      setTimeout(() => {
        if (component && this.curComponent && component.chart.id === this.curComponent.chart.id) return;
        if (this.curComponent && (component == null ? void 0 : component.chart.id) !== this.curComponent.chart.id) {
          this.curComponent.chartContain.dropInfo.zIndex = 0;
        }
        this.curComponent = component;
        if (component && index2 === void 0) {
          index2 = this.componentList.indexOf(component);
        }
        this.curComponentIndex = index2 === void 0 ? -1 : index2;
        nextTick(() => screenEvent.on(ScreenEventEnum.CHART_CHANGE, component)).then();
      }, 1);
    },
    setCurComponentIndex(index2) {
      return this.curComponentIndex = index2;
    },
    //清空当前组件
    cleanCurComponent() {
      this.setCurComponent(null, -1);
    },
    //设置鼠标经过的组件
    setCurHoverComponent(id) {
      this.curHoverComponentId = id;
    },
    //清空选中区域
    cleanSelectArea() {
      this.selectArea.show = false;
      this.selectArea.dropInfo = { x: 0, y: 0, width: 0, height: 0 };
      this.selectArea.components = [];
    },
    showSelectArea() {
      this.selectArea.show = true;
    },
    //设置选中区域属性
    setSelectArea(data) {
      this.selectArea = data;
    },
    setSelectedComponents(component) {
      const index2 = this.selectArea.components.findIndex((c) => c.chart.id === component.chart.id);
      if (index2 === -1) {
        this.selectArea.components.push(component);
      } else {
        this.selectArea.components.splice(index2, 1);
      }
    },
    setUndoRedoData(name2) {
      this.undoRedoManager.setData({ name: name2, value: this.componentList });
    },
    undo() {
      const data = this.undoRedoManager.undo();
      if (data && data.value) {
        this.componentList = data.value;
        this.cleanCurComponent();
        this.cleanSelectArea();
        this.key++;
      }
    },
    redo() {
      const data = this.undoRedoManager.redo();
      if (data && data.value) {
        this.componentList = data.value;
        this.cleanCurComponent();
        this.cleanSelectArea();
        this.key++;
      }
    },
    //删除组件
    deleteComponent(index2) {
      var _a, _b;
      let newIndex = index2;
      if (index2 === void 0) {
        newIndex = this.curComponentIndex;
      }
      if (newIndex === void 0) return;
      if (newIndex >= 0 && newIndex === this.curComponentIndex) {
        this.curComponentIndex = -1;
        this.curComponent = null;
      }
      if (((_b = (_a = this.selectArea) == null ? void 0 : _a.components) == null ? void 0 : _b.length) > 0) {
        this.batchDeleteComponent(this.selectArea.components);
        this.cleanSelectArea();
      } else if (newIndex >= 0) {
        this.componentList.splice(newIndex, 1);
      }
    },
    // 将已经组合组件数据从列表中删除，组合后变成一个新组件重新加入
    batchDeleteComponent(deleteData) {
      const components2 = cloneDeep(deleteData);
      for (const component of components2) {
        for (let i = 0, len = this.componentList.length; i < len; i++) {
          if (component.chart.id === this.componentList[i].chart.id) {
            this.componentList.splice(i, 1);
            break;
          }
        }
      }
    },
    setChartImg(key, value) {
      if (key && value) {
        this.chartImgCache.set(key, value);
      }
    },
    hasChartImg(key) {
      return this.chartImgCache.has(key);
    },
    getChartImg(key) {
      if (key && this.chartImgCache.has(key)) {
        return this.chartImgCache.get(key);
      }
      return noImage;
    },
    getComponent(id) {
      return getComponentById(this.componentList, id);
    },
    async initCache(cache) {
      if (cache) {
        const screen = JSON.parse(cache);
        if (!screen) return;
        this.setComponentList(screen.componentList);
        this.setCanvasConfig(screen.canvasConfig);
        initScreen(this.componentList).then((res) => {
          Promise.all(res).then(() => {
            this.setUndoRedoData("初始化");
          });
        });
      }
    },
    saveCache() {
      sessionStorage.setItem(
        `SCREEN_CONFIG_${this.getId}`,
        JSON.stringify({ componentList: this.componentList, canvasConfig: this.canvasConfig })
      );
    },
    async loadingScreen() {
      const cache = sessionStorage.getItem(`SCREEN_CONFIG_${this.getId}`);
      if (cache) {
        await this.initCache(cache);
        return this.componentList;
      }
      if (!this.getId) {
        return this.componentList;
      }
      let screen;
      if (this.isResource) {
        screen = await getScreenResourceBySourceId(this.getId);
      } else {
        screen = await getMfScreenById(this.getId, this.getShareToken);
      }
      if (!screen) {
        const { createMessage } = useMessage();
        createMessage.error("大屏不存在或无权限访问");
        return;
      }
      const canvasConfig = screen.canvasConfig ? JSON.parse(screen.canvasConfig) : void 0;
      this.setCanvasConfig(canvasConfig);
      const contains = screen.contains ? JSON.parse(screen.contains) : [];
      if (!contains || contains.length === 0) return this.componentList;
      let layers;
      if (this.isResource) {
        layers = await getLayersBySourceId(this.getId);
      } else {
        layers = await getScreenLayers({ screenId: this.getId }, this.getShareToken);
      }
      if (!layers || layers.length === 0) return this.componentList;
      const layerMap = /* @__PURE__ */ new Map();
      layers.forEach((item) => {
        layerMap.set(item.layerId, JSON.parse(item.config));
      });
      const componentList = [];
      for (const item of contains) {
        const chart = layerMap.get(item.id);
        if (!chart) continue;
        componentList.push({ chartContain: item, chart });
      }
      layerMap.clear();
      this.setComponentList(componentList);
      initScreen(this.componentList, this.isResource).then((res) => {
        Promise.all(res).then(() => {
          this.setUndoRedoData("初始化");
        });
      });
      return this.componentList;
    },
    cloneScreen() {
      const map = /* @__PURE__ */ new Map();
      const newId = (item) => {
        const id = buildUUID();
        map.set(item.chart.id, id);
        item.chartContain.id = id;
        item.chart.id = id;
      };
      this.canvasConfig.screenName = `${this.canvasConfig.screenName}_副本`;
      this.componentList.forEach((item) => {
        newId(item);
        if (item.chart.type === ComType.MfCombine) {
          item.chart.options.components.forEach((c) => {
            newId(c);
          });
        }
      });
      const newParams = (item) => {
        var _a;
        const params = item.chart.data.params;
        if (params) {
          for (const param of Object.values(params)) {
            if (isArray(param.value)) {
              param.value.forEach((v) => {
                if (v.id) {
                  v.id = map.get(v.id);
                }
              });
            } else if ((_a = param.value) == null ? void 0 : _a.id) {
              param.value.id = map.get(param.value.id);
            }
          }
        }
      };
      this.componentList.forEach((item) => {
        newParams(item);
        if (item.chart.type === ComType.MfCombine) {
          item.chart.options.components.forEach((c) => {
            newParams(c);
          });
        }
      });
    },
    setCopyConfig(config) {
      this.copyConfig = config;
    },
    setShareToken(token) {
      this.shareToken = token;
    }
  }
});
const useScreenLayoutStore = defineStore("screen-layout", {
  state: () => ({
    chartCollapsed: false,
    layerCollapsed: false,
    configCollapsed: false
  }),
  getters: {
    getChartCollapsed() {
      return this.chartCollapsed;
    },
    getLayerCollapsed() {
      return this.layerCollapsed;
    },
    getConfigCollapsed() {
      return this.configCollapsed;
    }
  },
  actions: {
    setChartCollapsed(collapsed) {
      this.chartCollapsed = collapsed;
      this.setCache();
    },
    setLayerCollapsed(collapsed) {
      this.layerCollapsed = collapsed;
      this.setCache();
    },
    setConfigCollapsed(collapsed) {
      this.configCollapsed = collapsed;
      this.setCache();
    },
    initCache() {
      const config = localStorage.getItem("SCREEN_LAYOUT_CONFIG");
      if (config) {
        const configObj = JSON.parse(config);
        this.chartCollapsed = configObj.chartCollapsed;
        this.layerCollapsed = configObj.layerCollapsed;
        this.configCollapsed = configObj.configCollapsed;
      }
    },
    setCache() {
      localStorage.setItem(
        "SCREEN_LAYOUT_CONFIG",
        JSON.stringify({
          chartCollapsed: this.chartCollapsed,
          layerCollapsed: this.layerCollapsed,
          configCollapsed: this.configCollapsed
        })
      );
    }
  }
});
const MENU_CHART_DRAG = "menu_chart_drag";
const FIELD_DATA_DRAG = "field_data_drag";
var FrameShow = /* @__PURE__ */ ((FrameShow2) => {
  FrameShow2["All"] = "all";
  FrameShow2["Chart"] = "chart";
  FrameShow2["Layer"] = "layer";
  FrameShow2["Config"] = "config";
  return FrameShow2;
})(FrameShow || {});
var PageJumpType = /* @__PURE__ */ ((PageJumpType2) => {
  PageJumpType2["CurPage"] = "当前页";
  PageJumpType2["NewTab"] = "新标签";
  PageJumpType2["Dialog"] = "弹出窗";
  return PageJumpType2;
})(PageJumpType || {});
var PageType = /* @__PURE__ */ ((PageType2) => {
  PageType2["System"] = "系统页面";
  PageType2["External"] = "外部页面";
  return PageType2;
})(PageType || {});
var FitType = /* @__PURE__ */ ((FitType2) => {
  FitType2["FIT_ORIGINAL"] = "fit_original";
  FitType2["FIT_WIDTH"] = "fit_width";
  FitType2["FIT_WIDTH_SCALE"] = "fit_width_scale";
  FitType2["FIT_HEIGHT"] = "fit_height";
  FitType2["FIT_HEIGHT_SCALE"] = "fit_height_scale";
  FitType2["FIT_BOX"] = "fit_box";
  return FitType2;
})(FitType || {});
const ScreenEventEnum = {
  CREATE_CHART: "create_chart",
  //创建组件事件
  CHART_CHANGE: "chart_change",
  //当前组件切换事件
  MOVE: "chart_move",
  //组件移动事件
  UN_MOVE: "chart_un_move",
  //组件停止移动事件
  PLAY_ANIMATION: "play_animation",
  //执行动画
  STOP_ANIMATION: "stop_animation",
  //停止动画
  PLAY_ANIMATION_COMPLETE: "play_animation_complete",
  //执行动画完成,
  DATA_RENAME: "data_rename",
  SCREEN_SAVE: "screen_save",
  //大屏保存
  SCREEN_PREVIEW: "screen_preview",
  //大屏预览
  SHOW_MODAL: "show_modal"
  //大屏弹出模态框
};
const StyleEnum = {
  x: "x",
  //横坐标位置
  y: "y",
  //纵坐标位置
  z: "z",
  //上下层位置
  width: "width",
  height: "height",
  borderWidth: "borderWidth",
  borderRadius: "borderRadius",
  borderColor: "borderColor",
  //边框颜色
  borderImage: "borderImage",
  background: "background",
  rotate: "rotate",
  opacity: "opacity",
  padding: "padding"
};
const dropInfo = {
  x: 0,
  //横坐标位置
  y: 0,
  //纵坐标位置
  zIndex: 0,
  //上下层位置
  width: 300,
  //宽度
  height: 300,
  //高度
  rotate: 0,
  //旋转度数
  proportion: 1
  //长宽比例
};
var ParamType = /* @__PURE__ */ ((ParamType2) => {
  ParamType2[ParamType2["CONSTANT"] = 0] = "CONSTANT";
  ParamType2[ParamType2["VARIABLE"] = 1] = "VARIABLE";
  ParamType2[ParamType2["EVENT"] = 2] = "EVENT";
  return ParamType2;
})(ParamType || {});
const comOption = {
  id: "",
  name: "",
  data: {
    type: 0,
    dataSet: void 0,
    limit: 100,
    maxLimit: 9999,
    priority: 0
  },
  events: {
    emits: [],
    on: []
  },
  //事件
  options: {}
};
const chartContain = {
  id: null,
  opacity: 1,
  //透明度
  animations: [],
  //动画列表
  lock: false,
  //锁定
  show: true,
  //是否显示组件
  dropInfo,
  //组件容器样式
  groupStyle: {},
  //组件被组合后的样式
  border: {
    show: false,
    color: void 0,
    width: 1,
    radius: 6
  },
  //边框宽度
  background: "",
  //背景颜色,
  padding: "1px"
};
function angleToRadian(angle) {
  return angle * Math.PI / 180;
}
function calculateRotatedPointCoordinate(point, center, rotate) {
  return {
    x: (point.x - center.x) * Math.cos(angleToRadian(rotate)) - (point.y - center.y) * Math.sin(angleToRadian(rotate)) + center.x,
    y: (point.x - center.x) * Math.sin(angleToRadian(rotate)) + (point.y - center.y) * Math.cos(angleToRadian(rotate)) + center.y
  };
}
function getCenterPoint(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2
  };
}
function sin(rotate) {
  return Math.abs(Math.sin(angleToRadian(rotate)));
}
function cos(rotate) {
  return Math.abs(Math.cos(angleToRadian(rotate)));
}
function mod360(deg) {
  return (deg + 360) % 360;
}
const comConfigDisplay = {
  style: { value: "样式", show: true, payload: { icon: "carbon:color-palette", component: null } },
  //样式设置,
  data: { value: "数据", show: true, payload: { icon: "carbon:data-structured", component: null } },
  //数据设置
  animation: {
    value: "动画",
    show: true,
    payload: {
      icon: "carbon:flow-modeler",
      component: shallowRef(
        createAsyncComponent(() => import("./index2.js"), {
          loading: true,
          size: "large"
        })
      )
    }
  },
  //动画配置
  advance: {
    value: "进阶",
    show: true,
    payload: {
      icon: "iconfont:icon-mfish-config",
      component: shallowRef(
        createAsyncComponent(() => import("./index3.js"), {
          loading: true,
          size: "large"
        })
      )
    }
  }
  //高级设置
};
const getFontStyle = (chart) => {
  var _a, _b, _c, _d, _e;
  const size = Math.round((((_a = chart == null ? void 0 : chart.options.fontSize) == null ? void 0 : _a.value) ?? 12) / 10);
  return {
    padding: `${size}px`,
    ...(_b = chart == null ? void 0 : chart.options.font) == null ? void 0 : _b.style,
    ...(_c = chart == null ? void 0 : chart.options.fontSize) == null ? void 0 : _c.style,
    ...(_d = chart == null ? void 0 : chart.options.fontStyle) == null ? void 0 : _d.style,
    ...(_e = chart == null ? void 0 : chart.options.textColor) == null ? void 0 : _e.style
  };
};
const buildHeaders = (data) => {
  const headers = {};
  if (isArray(data)) {
    data.forEach((item) => {
      headers[item] = { colName: item, dataType: "string", rename: item };
    });
  }
  return headers;
};
var ComType = /* @__PURE__ */ ((ComType2) => {
  ComType2["None"] = "none";
  ComType2["MfCombine"] = "MfCombine";
  ComType2["MfTag"] = "MfTag";
  ComType2["MfDateTime"] = "MfDateTime";
  ComType2["MfDataTag"] = "MfDataTag";
  ComType2["MfBorder1"] = "MfBorder1";
  ComType2["MfBorder2"] = "MfBorder2";
  ComType2["MfBorder3"] = "MfBorder3";
  ComType2["MfBorder4"] = "MfBorder4";
  ComType2["MfBorder5"] = "MfBorder5";
  ComType2["MfBorder6"] = "MfBorder6";
  ComType2["MfBorder7"] = "MfBorder7";
  ComType2["MfBorder8"] = "MfBorder8";
  ComType2["MfBorder9"] = "MfBorder9";
  ComType2["MfBorder10"] = "MfBorder10";
  ComType2["MfBorder11"] = "MfBorder11";
  ComType2["MfBorder12"] = "MfBorder12";
  ComType2["MfBorder13"] = "MfBorder13";
  ComType2["MfBorder14"] = "MfBorder14";
  ComType2["MfBorder15"] = "MfBorder15";
  ComType2["MfBorder16"] = "MfBorder16";
  ComType2["MfBorder17"] = "MfBorder17";
  ComType2["MfBorder18"] = "MfBorder18";
  ComType2["MfBorder19"] = "MfBorder19";
  ComType2["MfBorder20"] = "MfBorder20";
  ComType2["MfBorder21"] = "MfBorder21";
  ComType2["MfBorder22"] = "MfBorder22";
  ComType2["MfDecoration1"] = "MfDecoration1";
  ComType2["MfDecoration2"] = "MfDecoration2";
  ComType2["MfDecoration3"] = "MfDecoration3";
  ComType2["MfDecoration4"] = "MfDecoration4";
  ComType2["MfDecoration5"] = "MfDecoration5";
  ComType2["MfDecoration6"] = "MfDecoration6";
  ComType2["MfDecoration7"] = "MfDecoration7";
  ComType2["MfDecoration8"] = "MfDecoration8";
  ComType2["MfDecoration9"] = "MfDecoration9";
  ComType2["MfDecoration10"] = "MfDecoration10";
  ComType2["MfDecoration11"] = "MfDecoration11";
  ComType2["MfDecoration12"] = "MfDecoration12";
  ComType2["MfHeader1"] = "MfHeader1";
  ComType2["MfHeader2"] = "MfHeader2";
  ComType2["MfHeader3"] = "MfHeader3";
  ComType2["MfHeader4"] = "MfHeader4";
  ComType2["MfHeader5"] = "MfHeader5";
  ComType2["MfHeader6"] = "MfHeader6";
  ComType2["MfLine"] = "MfLine";
  ComType2["MfLineSmooth"] = "MfLineSmooth";
  ComType2["MfLineArea"] = "MfLineArea";
  ComType2["MfLineStack"] = "MfLineStack";
  ComType2["MfLineAreaStack"] = "MfLineAreaStack";
  ComType2["MfBar"] = "MfBar";
  ComType2["MfBarHorizontal"] = "MfBarHorizontal";
  ComType2["MfBarStack"] = "MfBarStack";
  ComType2["MfBarLine"] = "MfBarLine";
  ComType2["MfBarPlusMinus"] = "MfBarPlusMinus";
  ComType2["MfPie"] = "MfPie";
  ComType2["MfPieCircular"] = "MfPieCircular";
  ComType2["MfPieRose"] = "MfPieRose";
  ComType2["MfPieHalf"] = "MfPieHalf";
  ComType2["MfScatter"] = "MfScatter";
  ComType2["MfRadar"] = "MfRadar";
  ComType2["MfRadarCircle"] = "MfRadarCircle";
  ComType2["MfMapLine"] = "MfMapLine";
  ComType2["MfMapLine3D"] = "MfMapLine3D";
  ComType2["MfScrollTable"] = "MfScrollTable";
  ComType2["MfDigits"] = "MfDigits";
  ComType2["MfWheel"] = "MfWheel";
  ComType2["MfTireMarks"] = "MfTireMarks";
  ComType2["MfPicture"] = "MfPicture";
  ComType2["MfSegmented"] = "MfSegmented";
  return ComType2;
})(ComType || {});
function mfCombineCreate(chart) {
  chart.chartContain.padding = "0px";
  return chart;
}
const getConfig$A = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfCombineConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfCombineData = {
  type: ComType.MfCombine,
  component: createAsyncComponent(() => import("./index4.js"), {
    loading: true
  }),
  create: mfCombineCreate,
  config: getConfig$A()
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfCombineData
}, Symbol.toStringTag, { value: "Module" }));
function useDynamicData() {
  function setParamValue(chart, paramsValue) {
    if (chart.data.paramsValue) {
      chart.data.paramsValue = { ...chart.data.paramsValue, ...paramsValue };
    } else {
      chart.data.paramsValue = paramsValue;
    }
  }
  const getDataTable = async (chart, reqPage) => {
    const screenEditStore2 = useScreenEditStore();
    if (!chart || !chart.data.id) return;
    let page = {};
    if (reqPage) {
      page = { ...page, ...reqPage };
    } else {
      page = { pageNum: 1, pageSize: chart.data.limit };
    }
    let result;
    if (chart.isResource) {
      result = await getDataTableByResourceId(
        `${screenEditStore2.getId},${chart.data.id}`,
        page,
        chart.data.paramsValue
      );
    } else {
      result = await getDataTableById(chart.data.id, page, {
        ...chart.data.paramsValue,
        _shareToken: screenEditStore2.getShareToken
      });
    }
    chart.data.headers = result.headers;
    chart.data.result = result.table.list;
    return result.table;
  };
  async function setDataTable(chart) {
    let res;
    if (chart.data.id) {
      try {
        res = await getDataTable(chart);
      } catch {
      }
    }
    if (chart.type) {
      ComponentsEnum[chart.type].initData(chart, res);
    }
  }
  function eventCallback(chart, e) {
    if (e.type === EventCallbackType.PARAM_CHANGE) {
      setDataTable(chart);
    }
  }
  return { setParamValue, getDataTable, setDataTable, eventCallback };
}
const ChartEvent = mitt();
var ChartEventEnum = /* @__PURE__ */ ((ChartEventEnum2) => {
  ChartEventEnum2["CHART_CLICK"] = "click";
  ChartEventEnum2["CHART_DBLCLICK"] = "dblclick";
  ChartEventEnum2["CHART_MOUSE_ENTER"] = "mouseenter";
  ChartEventEnum2["CHART_MOUSE_LEAVE"] = "mouseLeave";
  return ChartEventEnum2;
})(ChartEventEnum || {});
var EventCallbackType = /* @__PURE__ */ ((EventCallbackType2) => {
  EventCallbackType2["PARAM_CHANGE"] = "param_change";
  EventCallbackType2["PAGE_JUMP"] = "param_jump";
  return EventCallbackType2;
})(EventCallbackType || {});
const getEventName = (eventType, comType) => {
  var _a, _b;
  switch (eventType) {
    case "click": {
      return "鼠标点击";
    }
    case "dblclick": {
      return "鼠标双击";
    }
    case "mouseenter": {
      return "鼠标进入";
    }
    case "mouseLeave": {
      return "鼠标离开";
    }
    default: {
      if (comType) {
        return ((_b = (_a = ComponentsEnum[comType].customEvents) == null ? void 0 : _a.find((item) => item.value === eventType)) == null ? void 0 : _b.name) ?? "";
      }
      return "";
    }
  }
};
function useChartEventHandle(chart, eventHandler, customEvents) {
  const screenEditStore2 = useScreenEditStore();
  const emitEvent = (eventType, e) => {
    const emit = (chart2) => {
      var _a;
      if (((_a = chart2.events) == null ? void 0 : _a.emits) && chart2.events.emits.includes(eventType)) {
        const eventId = eventType + chart2.id;
        ChartEvent.emit(eventId, { eventId, e, data: chart2.data });
        console.log(ChartEvent, eventId);
      }
    };
    emit(chart);
  };
  const mouseEnter = (e) => {
    emitEvent("mouseenter", e);
  };
  const mouseLeave = (e) => {
    emitEvent("mouseLeave", e);
  };
  const handleClick = (e) => {
    emitEvent("click", e);
  };
  const handleDblclick = (e) => {
    emitEvent("dblclick", e);
  };
  const commonEvents = {
    [
      "mouseenter"
      /* CHART_MOUSE_ENTER */
    ]: mouseEnter,
    [
      "mouseLeave"
      /* CHART_MOUSE_LEAVE */
    ]: mouseLeave,
    [
      "click"
      /* CHART_CLICK */
    ]: handleClick,
    [
      "dblclick"
      /* CHART_DBLCLICK */
    ]: handleDblclick
  };
  const paramEventOff = (params) => {
    if (!params) return;
    for (const key of Object.keys(params)) {
      if (isArray(params[key].value)) {
        params[key].value.forEach((item) => {
          ChartEvent.off(getEventId(item), paramsChangeCallBack);
        });
      }
    }
  };
  const { eventCallback } = useDynamicData();
  const paramsChangeCallBack = (e) => {
    if (chart.data.type === 0) return;
    const params = chart.data.params;
    if (params) {
      const paramsValue = {};
      for (const key of Object.keys(params)) {
        if (params[key].type === ParamType.EVENT && isArray(params[key].value)) {
          params[key].value.forEach((item) => {
            const commonEvent = Object.keys(ChartEventEnum).some((event2) => ChartEventEnum[event2] === item.event);
            if (e.eventId === getEventId(item)) {
              let dataSet;
              if (commonEvent) {
                dataSet = e.data.type === 0 ? e.data.dataSet : e.data.result;
              } else {
                dataSet = e.e;
              }
              if (isArray(dataSet)) {
                if (dataSet.length > 0) {
                  paramsValue[key] = dataSet[0][item.param];
                } else {
                  paramsValue[key] = "";
                }
              } else if (isObject(dataSet)) {
                paramsValue[key] = dataSet[item.param];
              } else if (isString(dataSet)) {
                paramsValue[key] = dataSet;
              }
            }
          });
        }
      }
      if (chart.data.paramsValue) {
        chart.data.paramsValue = { ...chart.data.paramsValue, ...paramsValue };
      } else {
        chart.data.paramsValue = paramsValue;
      }
    }
    const event = { type: "param_change", ...e };
    eventCallback(chart, event);
    if (eventHandler) {
      eventHandler(event);
    }
  };
  watch(
    () => chart.data.params,
    (params, oParams) => {
      paramsEvents(params, oParams);
    },
    { immediate: true, deep: true }
  );
  function paramsEvents(params, oParams) {
    paramEventOff(oParams);
    if (params) {
      const set = /* @__PURE__ */ new Set();
      for (const key of Object.keys(params)) {
        if (isArray(params[key].value)) {
          params[key].value.forEach((item) => {
            const id = getEventId(item);
            if (!set.has(id)) {
              set.add(id);
              ChartEvent.on(id, paramsChangeCallBack);
            }
          });
        }
      }
    }
  }
  onUnmounted(() => {
    var _a;
    paramEventOff((_a = chart.data) == null ? void 0 : _a.params);
  });
  function getEventId(item) {
    return item.event + item.id;
  }
  const jumpChangeCallBack = (e) => {
    var _a, _b, _c;
    if (globalThis.location.pathname.endsWith("/mf-screen/config") || !((_b = (_a = chart.jump) == null ? void 0 : _a.page) == null ? void 0 : _b.value)) {
      return;
    }
    const getHref = () => {
      var _a2, _b2, _c2, _d;
      let href2;
      if (((_a2 = chart.jump) == null ? void 0 : _a2.pageType) === PageType.System) {
        const routeData = router.resolve({
          name: "ScreenPreview",
          params: { id: (_b2 = chart.jump) == null ? void 0 : _b2.page.value },
          query: { shareToken: screenEditStore2.getShareToken, isResource: (_c2 = screenEditStore2.getIsResource) == null ? void 0 : _c2.toString() }
        });
        href2 = routeData.href;
      } else {
        href2 = (_d = chart.jump) == null ? void 0 : _d.page.value;
        if (!href2.startsWith("http")) {
          href2 = `http://${href2}`;
        }
      }
      return href2;
    };
    const href = getHref();
    switch ((_c = chart.jump) == null ? void 0 : _c.type) {
      case PageJumpType.CurPage: {
        globalThis.location.href = href;
        break;
      }
      case PageJumpType.NewTab: {
        window.open(href, "_blank");
        break;
      }
      case PageJumpType.Dialog: {
        screenEvent.emit(ScreenEventEnum.SHOW_MODAL, { ...e, href, jump: chart.jump });
        break;
      }
    }
  };
  watch(
    () => chart == null ? void 0 : chart.jump,
    (jump) => {
      jumpEvents(jump);
    },
    {
      immediate: true,
      deep: true
    }
  );
  function jumpEvents(jump) {
    const id = "click" + chart.id;
    ChartEvent.off(id, jumpChangeCallBack);
    if (jump == null ? void 0 : jump.open) {
      ChartEvent.on(id, jumpChangeCallBack);
    }
  }
  return { emitEvent, commonEvents, customEvents };
}
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...{ name: "MfTag" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  emits: ["eventHandler"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("mf-tag");
    const fontStyle = computed(() => getFontStyle(props.chart));
    const { emitEvent, commonEvents } = useChartEventHandle(props.chart, eventHandler, ["titleChange"]);
    function eventHandler(e) {
      emit("eventHandler", e);
    }
    watch(
      () => {
        var _a;
        return (_a = props.chart.data.dataSet) == null ? void 0 : _a.title;
      },
      (val) => {
        customEventHandle(val);
      }
    );
    function customEventHandle(e) {
      emitEvent("titleChange", e);
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return openBlock(), createElementBlock("div", mergeProps({
        class: unref(prefixCls),
        style: { ...(_b = (_a = __props.chart.options) == null ? void 0 : _a.hAlign) == null ? void 0 : _b.style }
      }, toHandlers(unref(commonEvents), true)), [
        createElementVNode("div", {
          class: "title",
          style: normalizeStyle({
            overflow: __props.chart.options.hide ? "hidden" : "",
            ...(_d = (_c = __props.chart.options) == null ? void 0 : _c.vAlign) == null ? void 0 : _d.style
          })
        }, [
          ((_e = __props.chart.data.dataSet) == null ? void 0 : _e.icon) ? (openBlock(), createBlock(unref(Icon), {
            key: 0,
            size: fontStyle.value.fontSize,
            icon: (_f = __props.chart.data.dataSet) == null ? void 0 : _f.icon,
            color: __props.chart.options.iconColor
          }, null, 8, ["size", "icon", "color"])) : createCommentVNode("", true),
          createElementVNode("span", {
            class: normalizeClass({ hide: __props.chart.options.hide }),
            style: normalizeStyle(fontStyle.value)
          }, toDisplayString((_g = __props.chart.data.dataSet) == null ? void 0 : _g.title), 7)
        ], 4)
      ], 16);
    };
  }
});
const MfTag = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-540aeb6f"]]);
function mfTagCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfTagData.defaultData);
  chart.chart.data.headers = mfTagData.defaultHeaders && mfTagData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chart.options.bordered = true;
  chart.chartContain.dropInfo.width = 80;
  chart.chartContain.dropInfo.height = 34;
  return chart;
}
const getConfig$z = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfTagConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfTagData = {
  type: ComType.MfTag,
  //组件类型
  component: MfTag,
  create: mfTagCreate,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$z(),
  //组件配置项显示
  defaultData: { title: "标签", icon: "" },
  defaultHeaders: () => {
    return cloneDeep({
      title: { colName: "title", dataType: "string", rename: "标题" },
      icon: {
        colName: "icon",
        dataType: "string",
        rename: "图标"
      }
    });
  },
  initData: () => {
  },
  customEvents: [{ name: "标签值改变", value: "titleChange" }]
};
const __vite_glob_0_68 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfTagData,
  mfTagCreate
}, Symbol.toStringTag, { value: "Module" }));
const getConfig$y = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDataTagStyleConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDataTagDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDataTagData = {
  ...mfTagData,
  type: ComType.MfDataTag,
  //组件类型
  component: createAsyncComponent(() => import("./index5.js"), {
    loading: true
  }),
  config: getConfig$y(),
  //组件配置项显示
  initData: (chart, data) => {
    const { setDynamicData } = useDataTag();
    setDynamicData(chart, data);
  }
};
function useDataTag() {
  function setDynamicData(chart, result) {
    var _a, _b, _c;
    if (!chart) return;
    if (!chart.data.dataSet) {
      chart.data.dataSet = {};
    }
    if (((_a = result == null ? void 0 : result.list) == null ? void 0 : _a.length) > 0) {
      const title = (_b = chart.data.fields) == null ? void 0 : _b.title;
      if (title && title.length > 0 && title[0].colName) {
        chart.data.dataSet.title = result.list[0][title[0].colName];
      } else {
        clearTitle(chart);
      }
      const icon = (_c = chart.data.fields) == null ? void 0 : _c.icon;
      if (icon && icon.length > 0 && icon[0].colName) {
        chart.data.dataSet.icon = result.list[0][icon[0].colName];
      } else {
        clearIcon(chart);
      }
      return;
    }
    clearTitle(chart);
    clearIcon(chart);
  }
  function clearTitle(chart) {
    var _a;
    if ((_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) {
      chart.data.dataSet.title = mfDataTagData.defaultData.title;
    }
  }
  function clearIcon(chart) {
    var _a;
    if ((_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) {
      chart.data.dataSet.icon = mfDataTagData.defaultData.icon;
    }
  }
  return { clearTitle, clearIcon, setDynamicData };
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDataTagData,
  useDataTag
}, Symbol.toStringTag, { value: "Module" }));
function useDynamicDataConfig() {
  const screenEditStore2 = useScreenEditStore();
  const { getDataTable: getData, setDataTable: setData } = useDynamicData();
  const getFields = (key) => {
    if (screenEditStore2.getCurConfigComponent.chart.data.fields) {
      return screenEditStore2.getCurConfigComponent.chart.data.fields[key];
    }
  };
  const setFields = (key, value) => {
    if (screenEditStore2.getCurConfigComponent.chart.data.fields) {
      screenEditStore2.getCurConfigComponent.chart.data.fields[key] = value;
    }
  };
  const deleteFields = (key) => {
    if (screenEditStore2.getCurConfigComponent.chart.data.fields) {
      delete screenEditStore2.getCurConfigComponent.chart.data.fields[key];
    }
  };
  const deleteFieldValue = (key, value) => {
    var _a, _b;
    const index2 = (_b = (_a = screenEditStore2.getCurConfigComponent.chart.data) == null ? void 0 : _a.fields[key]) == null ? void 0 : _b.findIndex(
      (item) => item.colName === value
    );
    if (index2 >= 0) {
      screenEditStore2.getCurConfigComponent.chart.data.fields[key].splice(index2, 1);
    }
  };
  const getDataTable = async (reqPage) => {
    return await getData(screenEditStore2.getCurConfigComponent.chart, reqPage);
  };
  const setDataTable = () => {
    setData(screenEditStore2.getCurConfigComponent.chart);
  };
  return { setFields, getFields, deleteFields, deleteFieldValue, getDataTable, setDataTable };
}
function mfDigitsCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfDigitsData.defaultData);
  chart.chart.data.headers = mfDigitsData.defaultHeaders && mfDigitsData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chartContain.dropInfo.width = 120;
  chart.chartContain.dropInfo.height = 60;
  chart.chart.options.backgroundColor = "transparent";
  return chart;
}
const getConfig$x = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDigitsConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDigitsDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDigitsData = {
  type: ComType.MfDigits,
  component: createAsyncComponent(() => import("./index6.js"), {
    loading: true
  }),
  create: mfDigitsCreate,
  config: getConfig$x(),
  defaultData: 12345,
  defaultHeaders: () => {
    return cloneDeep({
      num: { colName: "num", dataType: "number", rename: "数字" }
    });
  },
  initData: (chart, data) => {
    const { setDynamicData } = useDigitsData();
    setDynamicData(chart, data);
  }
};
function useDigitsData() {
  const { createMessage } = useMessage();
  const { deleteFields } = useDynamicDataConfig();
  function resetDefault(chart) {
    chart.data.dataSet = mfDigitsData.defaultData;
  }
  function setDynamicData(chart, result) {
    var _a;
    if (!chart) return;
    if (((_a = result == null ? void 0 : result.list) == null ? void 0 : _a.length) > 0 && chart.data.fields) {
      const num = chart.data.fields.num;
      if (num && num.length > 0 && num[0].colName) {
        const value = result.list[0][num[0].colName];
        if (!isNumber(value)) {
          createMessage.warning("显示内容必须为数字");
          deleteFields("num");
          resetDefault(chart);
          return;
        }
        chart.data.dataSet = value;
      } else {
        resetDefault(chart);
      }
      return;
    }
    resetDefault(chart);
  }
  return {
    resetDefault,
    setDynamicData
  };
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDigitsData,
  mfDigitsCreate,
  useDigitsData
}, Symbol.toStringTag, { value: "Module" }));
function mfWheelCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfWheelData.defaultData);
  chart.chart.data.headers = mfWheelData.defaultHeaders && mfWheelData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chartContain.dropInfo.width = 300;
  chart.chartContain.dropInfo.height = 300;
  chart.chart.options = {
    responsive: true,
    userOptions: {
      show: false
    },
    style: {
      chart: {
        animation: {
          speed: 0.2
        },
        backgroundColor: "transparent",
        layout: {
          wheel: {
            ticks: {
              rounded: true,
              inactiveColor: "#3A3A3A",
              activeColor: "#5f8bee",
              sizeRatio: 0.9,
              gradient: {
                show: true,
                shiftHueIntensity: 100
              }
            }
          },
          innerCircle: {
            show: true,
            stroke: "#E1E5E8",
            strokeWidth: 1
          },
          percentage: {
            show: true,
            fontSize: 48,
            rounding: 1,
            bold: true
          }
        }
      }
    }
  };
  return chart;
}
const getConfig$w = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfWheelConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfWheelDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfWheelData = {
  type: ComType.MfWheel,
  component: createAsyncComponent(() => import("./index7.js"), {
    loading: true
  }),
  create: mfWheelCreate,
  config: getConfig$w(),
  defaultData: { percentage: 68.8 },
  defaultHeaders: () => {
    return cloneDeep({
      percentage: { colName: "percentage", dataType: "number", rename: "比列" }
    });
  },
  initData: (chart, data) => {
    const { setDynamicData } = useWheelData("percentage");
    setDynamicData(chart, data);
  }
};
function useWheelData(fieldName) {
  const { createMessage } = useMessage();
  const { deleteFields } = useDynamicDataConfig();
  function resetDefault(chart) {
    chart.data.dataSet = mfWheelData.defaultData;
  }
  function setDynamicData(chart, result) {
    var _a;
    if (!chart) return;
    if (((_a = result == null ? void 0 : result.list) == null ? void 0 : _a.length) > 0 && chart.data.fields) {
      const percentage = chart.data.fields[fieldName];
      if (percentage && percentage.length > 0 && percentage[0].colName) {
        const value = result.list[0][percentage[0].colName];
        if (!isNumber(value)) {
          createMessage.warning("百分比必须为数字");
          deleteFields(fieldName);
          resetDefault(chart);
          return;
        }
        chart.data.dataSet = { percentage: value };
      } else {
        resetDefault(chart);
      }
      return;
    }
    resetDefault(chart);
  }
  return {
    resetDefault,
    setDynamicData
  };
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfWheelData,
  mfWheelCreate,
  useWheelData
}, Symbol.toStringTag, { value: "Module" }));
function mfTireMarksCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfTireMarksData.defaultData);
  chart.chart.data.headers = mfTireMarksData.defaultHeaders && mfTireMarksData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 72;
  chart.chart.options = {
    responsive: true,
    userOptions: {
      show: false
    },
    style: {
      chart: {
        animation: {
          speed: 0.2
        },
        backgroundColor: "transparent",
        layout: {
          display: "horizontal",
          crescendo: false,
          curved: false,
          curveAngleX: 10,
          curveAngleY: 10,
          activeColor: "#5F8BEE",
          inactiveColor: "#3A3A3A",
          ticks: {
            gradient: {
              show: true,
              shiftHueIntensity: 30
            }
          }
        },
        percentage: {
          show: true,
          useGradientColor: false,
          color: "#CCCCCC",
          fontSize: 16,
          bold: true,
          rounding: 1,
          verticalPosition: "bottom",
          horizontalPosition: "left"
        }
      }
    }
  };
  return chart;
}
const getConfig$v = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfTireMarksConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfWheelDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfTireMarksData = {
  ...mfWheelData,
  component: createAsyncComponent(() => import("./index8.js"), {
    loading: true
  }),
  type: ComType.MfTireMarks,
  create: mfTireMarksCreate,
  config: getConfig$v()
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfTireMarksData,
  mfTireMarksCreate
}, Symbol.toStringTag, { value: "Module" }));
function mfBorder1Create(chart) {
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 300;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  return chart;
}
const getConfig$u = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfBorderConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfBorder1Data = {
  type: ComType.MfBorder1,
  //组件类型
  component: createAsyncComponent(() => import("./index9.js"), {
    loading: true
  }),
  create: mfBorder1Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$u(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder1Data,
  mfBorder1Create
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder10Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder10,
  //组件类型
  component: createAsyncComponent(() => import("./index10.js"), {
    loading: true
  })
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder10Data
}, Symbol.toStringTag, { value: "Module" }));
function mfBorder11Create(chart) {
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 300;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.title = "标题";
  chart.chart.options.titleWidth = 200;
  return chart;
}
const getConfig$t = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfBorder11Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfBorder11Data = {
  type: ComType.MfBorder11,
  //组件类型
  component: createAsyncComponent(() => import("./index11.js"), {
    loading: true
  }),
  create: mfBorder11Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$t(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder11Data,
  mfBorder11Create
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder12Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder12,
  //组件类型
  component: createAsyncComponent(() => import("./index12.js"), {
    loading: true
  })
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder12Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder13Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder13,
  //组件类型
  component: createAsyncComponent(() => import("./index13.js"), {
    loading: true
  })
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder13Data
}, Symbol.toStringTag, { value: "Module" }));
function mfBorder14Create(chart) {
  const newChart = mfBorder1Data.create(chart);
  newChart.chartContain.border.radius = 0;
  return newChart;
}
const mfBorder14Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder14,
  component: createAsyncComponent(() => import("./index14.js"), {
    loading: true
  }),
  create: mfBorder14Create
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder14Data,
  mfBorder14Create
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder15Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder15,
  component: createAsyncComponent(() => import("./index15.js"), {
    loading: true
  })
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder15Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder16Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder16,
  component: createAsyncComponent(() => import("./index16.js"), {
    loading: true
  })
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder16Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder17Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder17,
  component: createAsyncComponent(() => import("./index17.js"), {
    loading: true
  })
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder17Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder18Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder18,
  component: createAsyncComponent(() => import("./index18.js"), {
    loading: true
  })
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder18Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder19Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder19,
  component: createAsyncComponent(() => import("./index19.js"), {
    loading: true
  })
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder19Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder2Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder2,
  component: createAsyncComponent(() => import("./index20.js"), {
    loading: true
  })
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder2Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder20Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder20,
  component: createAsyncComponent(() => import("./index21.js"), {
    loading: true
  })
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder20Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder21Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder21,
  component: createAsyncComponent(() => import("./index22.js"), {
    loading: true
  })
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder21Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder22Data = {
  ...mfBorder14Data,
  type: ComType.MfBorder22,
  component: createAsyncComponent(() => import("./index23.js"), {
    loading: true
  })
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder22Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder3Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder3,
  component: createAsyncComponent(() => import("./index24.js"), {
    loading: true
  })
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder3Data
}, Symbol.toStringTag, { value: "Module" }));
const getConfig$s = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfBorder4Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfBorder4Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder4,
  //组件类型
  component: createAsyncComponent(() => import("./index25.js"), {
    loading: true
  }),
  config: getConfig$s()
  //组件配置项显示
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder4Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder5Data = {
  ...mfBorder4Data,
  type: ComType.MfBorder5,
  //组件类型
  component: createAsyncComponent(() => import("./index26.js"), {
    loading: true
  })
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder5Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder6Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder6,
  //组件类型
  component: createAsyncComponent(() => import("./index27.js"), {
    loading: true
  })
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder6Data
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder7Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder7,
  //组件类型
  component: createAsyncComponent(() => import("./index28.js"), {
    loading: true
  })
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder7Data
}, Symbol.toStringTag, { value: "Module" }));
function mfBorder8Create(chart) {
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 300;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.duration = 3;
  return chart;
}
const getConfig$r = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfBorder8Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfBorder8Data = {
  type: ComType.MfBorder8,
  //组件类型
  component: createAsyncComponent(() => import("./index29.js"), {
    loading: true
  }),
  create: mfBorder8Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$r(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder8Data,
  mfBorder8Create
}, Symbol.toStringTag, { value: "Module" }));
const mfBorder9Data = {
  ...mfBorder1Data,
  type: ComType.MfBorder9,
  //组件类型
  component: createAsyncComponent(() => import("./index30.js"), {
    loading: true
  })
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBorder9Data
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration1Create(chart) {
  chart.chartContain.dropInfo.width = 200;
  chart.chartContain.dropInfo.height = 50;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  return chart;
}
const getConfig$q = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration1Data = {
  type: ComType.MfDecoration1,
  //组件类型
  component: createAsyncComponent(() => import("./index31.js"), {
    loading: true
  }),
  create: mfDecoration1Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$q(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration1Data,
  mfDecoration1Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration10Create(chart) {
  chart.chartContain.dropInfo.width = 200;
  chart.chartContain.dropInfo.height = 30;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  return chart;
}
const getConfig$p = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration10Data = {
  type: ComType.MfDecoration10,
  //组件类型
  component: createAsyncComponent(() => import("./index32.js"), {
    loading: true
  }),
  create: mfDecoration10Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$p(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration10Data,
  mfDecoration10Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration11Create(chart) {
  chart.chartContain.dropInfo.width = 220;
  chart.chartContain.dropInfo.height = 70;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.title = "标签";
  return chart;
}
const getConfig$o = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration7Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration11Data = {
  type: ComType.MfDecoration11,
  //组件类型
  component: createAsyncComponent(() => import("./index33.js"), {
    loading: true
  }),
  create: mfDecoration11Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$o(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration11Data,
  mfDecoration11Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration12Create(chart) {
  chart.chartContain.dropInfo.width = 200;
  chart.chartContain.dropInfo.height = 200;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.scanDuration = 3;
  chart.chart.options.haloDuration = 3;
  return chart;
}
const getConfig$n = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration12Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration12Data = {
  type: ComType.MfDecoration12,
  //组件类型
  component: createAsyncComponent(() => import("./index34.js"), {
    loading: true
  }),
  create: mfDecoration12Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$n(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration12Data,
  mfDecoration12Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration2Create(chart) {
  chart.chartContain.dropInfo.width = 200;
  chart.chartContain.dropInfo.height = 30;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.duration = 3;
  return chart;
}
const getConfig$m = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration2Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration2Data = {
  type: ComType.MfDecoration2,
  //组件类型
  component: createAsyncComponent(() => import("./index35.js"), {
    loading: true
  }),
  create: mfDecoration2Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$m(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration2Data,
  mfDecoration2Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration3Create(chart) {
  chart.chartContain.dropInfo.width = 250;
  chart.chartContain.dropInfo.height = 50;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  return chart;
}
const getConfig$l = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration3Data = {
  type: ComType.MfDecoration3,
  //组件类型
  component: createAsyncComponent(() => import("./index36.js"), {
    loading: true
  }),
  create: mfDecoration3Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$l(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration3Data,
  mfDecoration3Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration4Create(chart) {
  chart.chartContain.dropInfo.width = 30;
  chart.chartContain.dropInfo.height = 200;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.duration = 3;
  return chart;
}
const getConfig$k = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration2Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration4Data = {
  type: ComType.MfDecoration4,
  //组件类型
  component: createAsyncComponent(() => import("./index37.js"), {
    loading: true
  }),
  create: mfDecoration4Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$k(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration4Data,
  mfDecoration4Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration5Create(chart) {
  chart.chartContain.dropInfo.width = 320;
  chart.chartContain.dropInfo.height = 70;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.duration = 3;
  return chart;
}
const getConfig$j = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration5Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration5Data = {
  type: ComType.MfDecoration5,
  //组件类型
  component: createAsyncComponent(() => import("./index38.js"), {
    loading: true
  }),
  create: mfDecoration5Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$j(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration5Data,
  mfDecoration5Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration6Create(chart) {
  chart.chartContain.dropInfo.width = 320;
  chart.chartContain.dropInfo.height = 50;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  return chart;
}
const getConfig$i = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration6Data = {
  type: ComType.MfDecoration6,
  //组件类型
  component: createAsyncComponent(() => import("./index39.js"), {
    loading: true
  }),
  create: mfDecoration6Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$i(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration6Data,
  mfDecoration6Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration7Create(chart) {
  chart.chartContain.dropInfo.width = 150;
  chart.chartContain.dropInfo.height = 50;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.title = "标签";
  return chart;
}
const getConfig$h = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration7Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration7Data = {
  type: ComType.MfDecoration7,
  //组件类型
  component: createAsyncComponent(() => import("./index40.js"), {
    loading: true
  }),
  create: mfDecoration7Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$h(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration7Data,
  mfDecoration7Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration8Create(chart) {
  chart.chartContain.dropInfo.width = 320;
  chart.chartContain.dropInfo.height = 40;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  return chart;
}
const getConfig$g = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration8Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration8Data = {
  type: ComType.MfDecoration8,
  //组件类型
  component: createAsyncComponent(() => import("./index41.js"), {
    loading: true
  }),
  create: mfDecoration8Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$g(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration8Data,
  mfDecoration8Create
}, Symbol.toStringTag, { value: "Module" }));
function mfDecoration9Create(chart) {
  chart.chartContain.dropInfo.width = 200;
  chart.chartContain.dropInfo.height = 200;
  chart.chart.options.mainColor = "#2e6099";
  chart.chart.options.secondColor = "#7ce7fd";
  chart.chart.options.duration = 3;
  return chart;
}
const getConfig$f = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecoration5Config.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDecoration9Data = {
  type: ComType.MfDecoration9,
  //组件类型
  component: createAsyncComponent(() => import("./index42.js"), {
    loading: true
  }),
  create: mfDecoration9Create,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$f(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDecoration9Data,
  mfDecoration9Create
}, Symbol.toStringTag, { value: "Module" }));
function mfHeader1Create(chart) {
  chart.chartContain.dropInfo.width = 1920;
  chart.chartContain.dropInfo.height = 76;
  chart.chart.options.mainColor = "#0042A2";
  chart.chart.options.secondColor = "#0042A2";
  return chart;
}
const getConfig$e = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfHeader1Data = {
  type: ComType.MfHeader1,
  create: mfHeader1Create,
  component: createAsyncComponent(() => import("./index43.js"), {
    loading: true
  }),
  config: getConfig$e(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfHeader1Data,
  mfHeader1Create
}, Symbol.toStringTag, { value: "Module" }));
function mfHeader2Create(chart) {
  chart.chartContain.dropInfo.width = 1920;
  chart.chartContain.dropInfo.height = 80;
  chart.chart.options.mainColor = "#0077CF";
  chart.chart.options.secondColor = "#0042A2";
  return chart;
}
const getConfig$d = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfHeader2Data = {
  type: ComType.MfHeader2,
  create: mfHeader2Create,
  component: createAsyncComponent(() => import("./index44.js"), {
    loading: true
  }),
  config: getConfig$d(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfHeader2Data,
  mfHeader2Create
}, Symbol.toStringTag, { value: "Module" }));
function mfHeader3Create(chart) {
  chart.chartContain.dropInfo.width = 1920;
  chart.chartContain.dropInfo.height = 75;
  chart.chart.options.mainColor = "#0077CF";
  chart.chart.options.secondColor = "#0042A2";
  return chart;
}
const getConfig$c = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfHeader3Data = {
  type: ComType.MfHeader3,
  create: mfHeader3Create,
  component: createAsyncComponent(() => import("./index45.js"), {
    loading: true
  }),
  config: getConfig$c(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfHeader3Data,
  mfHeader3Create
}, Symbol.toStringTag, { value: "Module" }));
function mfHeader4Create(chart) {
  chart.chartContain.dropInfo.width = 1920;
  chart.chartContain.dropInfo.height = 110;
  chart.chart.options.mainColor = "#0077CF";
  chart.chart.options.secondColor = "#18DBFD";
  return chart;
}
const getConfig$b = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfHeader4Data = {
  type: ComType.MfHeader4,
  create: mfHeader4Create,
  component: createAsyncComponent(() => import("./index46.js"), {
    loading: true
  }),
  config: getConfig$b(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfHeader4Data,
  mfHeader4Create
}, Symbol.toStringTag, { value: "Module" }));
function mfHeader5Create(chart) {
  chart.chartContain.dropInfo.width = 1920;
  chart.chartContain.dropInfo.height = 75;
  chart.chart.options.mainColor = "#0077CF";
  chart.chart.options.secondColor = "#0042A2";
  return chart;
}
const getConfig$a = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfHeader5Data = {
  type: ComType.MfHeader5,
  create: mfHeader5Create,
  component: createAsyncComponent(() => import("./index47.js"), {
    loading: true
  }),
  config: getConfig$a(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfHeader5Data,
  mfHeader5Create
}, Symbol.toStringTag, { value: "Module" }));
function mfHeader6Create(chart) {
  chart.chartContain.dropInfo.width = 1920;
  chart.chartContain.dropInfo.height = 75;
  chart.chart.options.mainColor = "#18DBFD";
  chart.chart.options.secondColor = "#18DBFD";
  return chart;
}
const getConfig$9 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDecorationConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfHeader6Data = {
  type: ComType.MfHeader6,
  create: mfHeader6Create,
  component: createAsyncComponent(() => import("./index48.js"), {
    loading: true
  }),
  config: getConfig$9(),
  //组件配置项显示
  initData: () => {
  }
};
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfHeader6Data,
  mfHeader6Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDateTime" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const curChart = ref(props.chart);
    const updateTime = () => {
      var _a;
      if ((_a = props.chart.options) == null ? void 0 : _a.format) {
        curChart.value.data.dataSet.title = formatToDateTime(/* @__PURE__ */ new Date(), props.chart.options.format);
      } else {
        curChart.value.data.dataSet.title = formatToDateTime();
      }
    };
    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1e3);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MfTag, {
        "chart-contain": __props.chartContain,
        chart: curChart.value
      }, null, 8, ["chart-contain", "chart"]);
    };
  }
});
function mfDateTimeCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfDateTimeData.defaultData);
  chart.chart.data.headers = mfDateTimeData.defaultHeaders && mfDateTimeData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chartContain.dropInfo.width = 190;
  chart.chartContain.dropInfo.height = 34;
  return chart;
}
const getConfig$8 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfDataTimeConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfDateTimeData = {
  type: ComType.MfDateTime,
  //组件类型
  component: _sfc_main$V,
  create: mfDateTimeCreate,
  //组件初始化创建方法,主要设置不同组件的宽度高度
  config: getConfig$8(),
  //组件配置项显示
  defaultData: { title: "" },
  defaultHeaders: () => {
    return cloneDeep({
      title: { colName: "title", dataType: "string", rename: "标签" }
    });
  },
  initData: () => {
  }
};
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfDateTimeData,
  mfDateTimeCreate
}, Symbol.toStringTag, { value: "Module" }));
function useEchartsData() {
  const getSeries = (chart, data) => {
    var _a;
    const cache = (_a = chart == null ? void 0 : chart.options) == null ? void 0 : _a.seriesCache;
    const chartType = chart == null ? void 0 : chart.type;
    const series = [];
    if (!data) {
      return series;
    }
    for (let i = 0; i < data.length; i++) {
      if (cache && cache.length > i) {
        series.push(cache[i]);
        continue;
      }
      if (chartType) {
        const defaultSeries = ComponentsEnum[chartType].defaultSeries;
        if (defaultSeries) {
          if (defaultSeries.length > i) {
            series.push(cloneDeep(defaultSeries[i]));
          } else {
            series.push(cloneDeep(defaultSeries[0]));
          }
        } else {
          series.push({});
        }
      } else {
        series.push({});
      }
    }
    return series;
  };
  function resetDefault(chart) {
    var _a;
    if (((_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) && (chart == null ? void 0 : chart.type)) {
      chart.data.dataSet = cloneDeep(ComponentsEnum[chart.type].defaultData);
      chart.options.series = getSeries(chart, ComponentsEnum[chart.type].defaultSeries || []);
    }
  }
  function setDynamicData(chart, result) {
    var _a, _b, _c, _d;
    if (!chart) return;
    if ((result == null ? void 0 : result.list.length) > 0 && chart.data.fields && (((_b = (_a = chart.data.fields) == null ? void 0 : _a.dimensions) == null ? void 0 : _b.length) > 0 || ((_d = (_c = chart.data.fields) == null ? void 0 : _c.source) == null ? void 0 : _d.length) > 0)) {
      const { createMessage } = useMessage();
      const { deleteFieldValue } = useDynamicDataConfig();
      const dimensions = chart.data.fields.dimensions ?? [];
      const sources = chart.data.fields.source ?? [];
      if (dimensions.length === 0 || sources.length === 0) {
        resetDefault(chart);
        return;
      }
      const source = [];
      source.push([
        ...dimensions.map((dim) => dim.rename || dim.colName),
        ...sources.map((dim) => dim.rename || dim.colName)
      ]);
      for (const item of result.list) {
        const data = [];
        dimensions.forEach((dim) => {
          data.push(item[dim.colName]);
        });
        sources.forEach((dim) => {
          const value = item[dim.colName];
          if (Number.isNaN(Number.parseFloat(value))) {
            const error = `值必须为数字`;
            deleteFieldValue("source", dim.colName);
            createMessage.warning(error);
            throw new Error(error);
          } else {
            data.push(value);
          }
        });
        source.push(data);
      }
      chart.data.dataSet = {
        source
      };
      chart.options.series = getSeries(chart, sources);
      return;
    }
    resetDefault(chart);
  }
  function setStaticData(chart, data) {
    if (!chart.type) return;
    chart.data.dataSet.source = data;
    const com = ComponentsEnum[chart.type];
    chart.data.headers = com.defaultHeaders && com.defaultHeaders(chart);
    let length2 = 1;
    if (chart.data.headers) {
      length2 = Object.keys(chart.data.headers).length - 1 || 1;
    }
    chart.options.series = getSeries(chart, Array.from({ length: length2 }));
  }
  return { resetDefault, setDynamicData, setStaticData, getSeries };
}
function mfBarCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfBarData.defaultData);
  chart.chart.data.headers = mfBarData.defaultHeaders && mfBarData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 100;
  chart.chart.data.maxLimit = 1e3;
  chart.chart.options = {
    grid: { left: "10%", right: "5%", top: "10%", bottom: "10%" },
    xAxis: {
      show: true,
      type: "category"
    },
    yAxis: { show: true },
    series: cloneDeep(mfBarData.defaultSeries)
  };
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 300;
  return chart;
}
const getConfig$7 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfBarLineConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfBarLineDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfBarData = {
  type: ComType.MfBar,
  //组件类型
  component: createAsyncComponent(() => import("./index49.js"), {
    loading: true,
    size: "large"
  }),
  create: mfBarCreate,
  //组件初始化方法,主要设置不同组件的宽度高度
  config: getConfig$7(),
  //组件配置项显示
  defaultData: {
    source: [
      ["日期", "数据"],
      ["Mon", 120],
      ["Tue", 200],
      ["Wed", 150],
      ["Thu", 80],
      ["Fri", 70],
      ["Sat", 110],
      ["Sun", 130]
    ]
  },
  defaultHeaders: (chart) => {
    var _a, _b;
    return buildHeaders((_b = (_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.source[0]);
  },
  defaultSeries: [{ type: "bar" }],
  initData: (chart, data) => {
    const { setDynamicData } = useEchartsData();
    setDynamicData(chart, data);
  }
};
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBarData
}, Symbol.toStringTag, { value: "Module" }));
function mfBarHorizontalCreate(chart) {
  const newChart = mfBarData.create(chart);
  newChart.chart.options = {
    ...newChart.chart.options,
    xAxis: {
      show: true
    },
    yAxis: { show: true, type: "category" }
  };
  return newChart;
}
const mfBarHorizontalData = {
  ...mfBarData,
  type: ComType.MfBarHorizontal,
  create: mfBarHorizontalCreate
};
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBarHorizontalData
}, Symbol.toStringTag, { value: "Module" }));
function mfBarStackCreate(chart) {
  const newChart = mfBarData.create(chart);
  newChart.chart.data.dataSet = cloneDeep(mfBarStackData.defaultData);
  newChart.chart.data.headers = mfBarStackData.defaultHeaders && mfBarStackData.defaultHeaders(newChart.chart);
  newChart.chart.options.series = cloneDeep(mfBarStackData.defaultSeries);
  return newChart;
}
const mfBarStackData = {
  ...mfBarData,
  type: ComType.MfBarStack,
  create: mfBarStackCreate,
  defaultSeries: [
    { type: "bar", stack: "total" },
    { type: "bar", stack: "total" }
  ],
  defaultData: {
    source: [
      ["日期", "数据1", "数据2"],
      ["Mon", 120, 80],
      ["Tue", 200, 132],
      ["Wed", 150, 90],
      ["Thu", 80, 180],
      ["Fri", 70, 110],
      ["Sat", 110, 130],
      ["Sun", 130, 90]
    ]
  }
};
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBarStackData
}, Symbol.toStringTag, { value: "Module" }));
function mfBarLineCreate(chart) {
  const newChart = mfBarStackData.create(chart);
  newChart.chart.options.series = cloneDeep(mfBarLineData.defaultSeries);
  return newChart;
}
const mfBarLineData = {
  ...mfBarStackData,
  type: ComType.MfBarLine,
  defaultSeries: [{ type: "bar" }, { type: "line" }],
  create: mfBarLineCreate
};
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBarLineData
}, Symbol.toStringTag, { value: "Module" }));
function mfBarPlusMinusCreate(chart) {
  const newChart = mfBarData.create(chart);
  newChart.chart.data.dataSet = cloneDeep(mfBarPlusMinusData.defaultData);
  newChart.chart.data.headers = mfBarPlusMinusData.defaultHeaders && mfBarPlusMinusData.defaultHeaders(newChart.chart);
  newChart.chart.options = {
    ...newChart.chart.options,
    xAxis: {
      show: true,
      type: "value",
      position: "top",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed"
        }
      }
    },
    yAxis: {
      show: true,
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false }
    },
    series: cloneDeep(mfBarPlusMinusData.defaultSeries)
  };
  return newChart;
}
const mfBarPlusMinusData = {
  ...mfBarData,
  type: ComType.MfBarPlusMinus,
  create: mfBarPlusMinusCreate,
  defaultData: {
    source: [
      ["维度", "数据"],
      ["ten", -0.07],
      ["nine", -0.09],
      ["eight", 0.2],
      ["seven", -0.44],
      ["six", -0.23],
      ["five", 0.08],
      ["four", -0.17],
      ["three", 0.47],
      ["two", -0.36],
      ["one", 0.18]
    ]
  }
};
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfBarPlusMinusData
}, Symbol.toStringTag, { value: "Module" }));
function mfLineCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfLineData.defaultData);
  chart.chart.data.headers = mfLineData.defaultHeaders && mfLineData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 100;
  chart.chart.data.maxLimit = 1e3;
  chart.chart.options = {
    grid: { left: "10%", right: "10%", top: "10%", bottom: "10%" },
    xAxis: {
      show: true,
      type: "category"
    },
    yAxis: { show: true },
    series: cloneDeep(mfLineData.defaultSeries)
  };
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 300;
  return chart;
}
const mfLineData = {
  ...mfBarData,
  type: ComType.MfLine,
  //组件类型
  create: mfLineCreate,
  defaultSeries: [{ type: "line" }]
};
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfLineData
}, Symbol.toStringTag, { value: "Module" }));
function mfLineAreaCreate(chart) {
  const newChart = mfLineData.create(chart);
  newChart.chart.options.series = cloneDeep(mfLineAreaData.defaultSeries);
  return newChart;
}
const mfLineAreaData = {
  ...mfLineData,
  type: ComType.MfLineArea,
  //组件类型
  create: mfLineAreaCreate,
  defaultSeries: [{ type: "line", areaStyle: {} }]
};
const __vite_glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfLineAreaData
}, Symbol.toStringTag, { value: "Module" }));
function mfLineAreaStackCreate(chart) {
  const newChart = mfBarStackData.create(chart);
  newChart.chart.options.series = cloneDeep(mfLineAreaStackData.defaultSeries);
  return newChart;
}
const mfLineAreaStackData = {
  ...mfBarStackData,
  type: ComType.MfLineAreaStack,
  //组件类型
  create: mfLineAreaStackCreate,
  defaultSeries: [
    { type: "line", areaStyle: {}, stack: "total" },
    { type: "line", areaStyle: {}, stack: "total" }
  ]
};
const __vite_glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfLineAreaStackData
}, Symbol.toStringTag, { value: "Module" }));
function mfLineSmoothCreate(chart) {
  const newChart = mfLineData.create(chart);
  newChart.chart.options.series = cloneDeep(mfLineSmoothData.defaultSeries);
  return newChart;
}
const mfLineSmoothData = {
  ...mfLineData,
  type: ComType.MfLineSmooth,
  //组件类型
  create: mfLineSmoothCreate,
  defaultSeries: [{ type: "line", smooth: true }]
};
const __vite_glob_0_54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfLineSmoothData
}, Symbol.toStringTag, { value: "Module" }));
function mfLineStackCreate(chart) {
  const newChart = mfBarStackData.create(chart);
  newChart.chart.options.series = cloneDeep(mfLineStackData.defaultSeries);
  return newChart;
}
const mfLineStackData = {
  ...mfBarStackData,
  type: ComType.MfLineStack,
  //组件类型
  create: mfLineStackCreate,
  defaultSeries: [
    { type: "line", stack: "total" },
    { type: "line", stack: "total" }
  ]
};
const __vite_glob_0_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfLineStackData
}, Symbol.toStringTag, { value: "Module" }));
const color$c = ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"];
const name$c = "默认";
const customed = {
  color: color$c,
  name: name$c
};
const color$b = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"];
const name$b = "深色";
const dark = {
  color: color$b,
  name: name$b
};
const color$a = ["#fc97af", "#87f7cf", "#f7f494", "#72ccff", "#f7c5a0", "#d4a4eb", "#d2f5a6", "#76f2f2"];
const name$a = "粉青";
const chalk = {
  color: color$a,
  name: name$a
};
const color$9 = ["#893448", "#d95850", "#eb8146", "#ffb248", "#f2d643", "#ebdba4"];
const name$9 = "橘红";
const essos = {
  color: color$9,
  name: name$9
};
const color$8 = ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089"];
const name$8 = "马卡龙";
const macarons = {
  color: color$8,
  name: name$8
};
const color$7 = ["#9b8bba", "#e098c7", "#8fd3e8", "#71669e", "#cc70af", "#7cb4cc"];
const name$7 = "深紫";
const purplePassion = {
  color: color$7,
  name: name$7
};
const color$6 = ["#e01f54", "#5e4ea5", "#f5e8c8", "#b8d2c7", "#c6b38e", "#a4d8c2", "#f3d999", "#d3758f", "#dcc392", "#2e4783", "#82b6e9", "#ff6347", "#a092f1", "#0a915d", "#eaf889", "#6699FF", "#ff6666", "#3cb371", "#d5b158", "#38b6b6"];
const name$6 = "罗马";
const roma = {
  color: color$6,
  name: name$6
};
const color$5 = ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"];
const name$5 = "光亮";
const shine = {
  color: color$5,
  name: name$5
};
const color$4 = ["#d87c7c", "#919e8b", "#d7ab82", "#6e7074", "#61a0a8", "#efa18d", "#787464", "#cc7e63", "#724e58", "#4b565b"];
const name$4 = "复古";
const vintage = {
  color: color$4,
  name: name$4
};
const color$3 = ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"];
const name$3 = "蓝绿";
const walden = {
  color: color$3,
  name: name$3
};
const color$2 = ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"];
const name$2 = "灰粉";
const westeros = {
  color: color$2,
  name: name$2
};
const color$1 = ["#4ea397", "#22c3aa", "#7bd9a5", "#d0648a", "#f58db2", "#f2b3c9"];
const name$1 = "青草";
const wonderland = {
  color: color$1,
  name: name$1
};
const color = ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b", "#c6e579", "#f4e001", "#f0805a", "#26c0c0"];
const name = "鲜明";
const infographic = {
  color,
  name
};
const EchartsTheme = [
  customed,
  vintage,
  dark,
  westeros,
  essos,
  wonderland,
  walden,
  chalk,
  infographic,
  macarons,
  roma,
  shine,
  purplePassion
];
function mfMapLineCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfMapLineData.defaultData);
  chart.chart.data.headers = mfMapLineData.defaultHeaders && mfMapLineData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 100;
  chart.chart.data.maxLimit = 1e3;
  chart.chart.options = {
    tooltip: {
      show: true
    },
    geo: {
      map: "china",
      scale: true,
      // 缩放
      zoom: 1.2,
      scaleLimit: {
        min: 0.5,
        max: 2
      },
      emphasis: {
        itemStyle: {
          color: "#3146B3"
          // 高亮地图区域的颜色
        }
      },
      itemStyle: {
        // 地图区域的颜色
        color: "#03133D",
        borderColor: "#6699FF",
        shadowColor: "#1773C3",
        shadowBlur: 10,
        borderWidth: 1
      },
      label: {
        color: "#ffffff",
        emphasis: {
          color: "#ffffff"
        }
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 100,
      text: ["高", "低"],
      realtime: false,
      calculable: true,
      inRange: {
        color: cloneDeep(EchartsTheme[0].color)
      }
    },
    series: cloneDeep(mfMapLineData.defaultSeries)
  };
  chart.chartContain.dropInfo.width = 800;
  chart.chartContain.dropInfo.height = 650;
  return chart;
}
const getConfig$6 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfMapConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfMapLineDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfMapLineData = {
  type: ComType.MfMapLine,
  //组件类型
  component: createAsyncComponent(() => import("./index50.js"), {
    loading: true,
    size: "large"
  }),
  create: mfMapLineCreate,
  config: getConfig$6(),
  defaultData: {
    source: [
      ["起始", "结束", "值"],
      ["南京市", "北京市", 40],
      ["南京市", "西安市", 100],
      ["北京市", "上海市", 30],
      ["上海市", "广州市", 50],
      ["北京市", "武汉市", 20],
      ["北京市", "成都市", 80],
      ["长沙市", "北京市", 100]
    ]
  },
  defaultHeaders: (chart) => {
    var _a, _b;
    return buildHeaders((_b = (_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.source[0]);
  },
  defaultSeries: [
    {
      name: "飞线图",
      type: "lines",
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: "#fff",
        symbolSize: 3
      },
      lineStyle: {
        width: 1,
        curveness: 0.2
      }
    },
    {
      name: "城市",
      type: "effectScatter",
      coordinateSystem: "geo",
      rippleEffect: {
        brushType: "stroke"
      },
      label: {
        show: true,
        position: "right",
        formatter: "{b}"
      }
    }
  ],
  initData: (chart, data) => {
    const { setDynamicData } = useEchartsMapLineData();
    setDynamicData(chart, data);
  }
};
function useEchartsMapLineData() {
  function resetDefault(chart) {
    chart.data.dataSet = cloneDeep(mfMapLineData.defaultData);
  }
  function setDynamicData(chart, result) {
    var _a, _b, _c, _d;
    if (!chart) return;
    if ((result == null ? void 0 : result.list.length) > 0 && chart.data.fields && (((_b = (_a = chart.data.fields) == null ? void 0 : _a.start) == null ? void 0 : _b.length) > 0 || ((_d = (_c = chart.data.fields) == null ? void 0 : _c.end) == null ? void 0 : _d.length) > 0)) {
      const { createMessage } = useMessage();
      const { deleteFieldValue } = useDynamicDataConfig();
      const start = chart.data.fields.start ?? [];
      const end = chart.data.fields.end ?? [];
      const value = chart.data.fields.value ?? [];
      if (start.length === 0 || end.length === 0) {
        resetDefault(chart);
        return;
      }
      const source = [];
      source.push([
        ...start.map((dim) => dim.rename || dim.colName),
        ...end.map((dim) => dim.rename || dim.colName),
        ...value.map((dim) => dim.rename || dim.colName)
      ]);
      for (const item of result.list) {
        const data = [];
        start.forEach((dim) => {
          data.push(item[dim.colName]);
        });
        end.forEach((dim) => {
          data.push(item[dim.colName]);
        });
        value.forEach((dim) => {
          const value2 = item[dim.colName];
          if (Number.isNaN(Number.parseFloat(value2))) {
            const error = `值必须为数字`;
            deleteFieldValue("value", dim.colName);
            createMessage.warning(error).then();
            throw new Error(error);
          } else {
            data.push(value2);
          }
        });
        source.push(data);
      }
      chart.data.dataSet = {
        source
      };
      return;
    }
    resetDefault(chart);
  }
  return {
    resetDefault,
    setDynamicData
  };
}
const __vite_glob_0_56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfMapLineData,
  useEchartsMapLineData
}, Symbol.toStringTag, { value: "Module" }));
function mfMapLine3DCreate(chart) {
  var _a;
  const newChart = mfMapLineData.create(chart);
  (_a = newChart.chart.options) == null ? true : delete _a.geo;
  newChart.chart.options = {
    ...newChart.chart.options,
    geo3D: {
      map: "china",
      shading: "lambert",
      // 启用光照
      viewControl: {
        distance: 85,
        rotateSensitivity: 0,
        zoomSensitivity: 0
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        }
      },
      itemStyle: {
        color: "#03133D",
        // 地图颜色
        borderColor: "#6699FF",
        shadowColor: "#1773C3",
        shadowBlur: 10,
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          color: "#3146B3"
          // 悬浮时的颜色
        }
      },
      label: {
        distance: 0,
        color: "#ffffff",
        emphasis: {
          color: "#ffffff"
        }
      }
    },
    series: cloneDeep(mfMapLine3DData.defaultSeries)
  };
  return newChart;
}
const mfMapLine3DData = {
  ...mfMapLineData,
  type: ComType.MfMapLine3D,
  //组件类型
  component: createAsyncComponent(() => import("./index51.js"), {
    loading: true,
    size: "large"
  }),
  create: mfMapLine3DCreate,
  defaultSeries: [
    {
      name: "飞线图",
      type: "lines3D",
      coordinateSystem: "geo3D",
      effect: {
        show: true,
        trailWidth: 2,
        trailLength: 0.8,
        trailOpacity: 0.8,
        trailColor: "#fff"
      },
      lineStyle: {
        width: 1,
        curveness: 0.2
      }
    },
    {
      name: "城市",
      type: "scatter3D",
      coordinateSystem: "geo3D",
      rippleEffect: {
        brushType: "stroke"
      },
      label: {
        show: true,
        position: "right",
        formatter: "{b}"
      }
    }
  ]
};
const __vite_glob_0_57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfMapLine3DData
}, Symbol.toStringTag, { value: "Module" }));
function mfPieCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfPieData.defaultData);
  chart.chart.data.headers = mfPieData.defaultHeaders && mfPieData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 100;
  chart.chart.data.maxLimit = 1e3;
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 400;
  chart.chart.options = {
    tooltip: {
      trigger: "item"
    },
    series: cloneDeep(mfPieData.defaultSeries)
  };
  return chart;
}
const getConfig$5 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfPieConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfPieDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfPieData = {
  ...mfBarData,
  type: ComType.MfPie,
  //组件类型
  create: mfPieCreate,
  //组件初始化方法,主要设置不同组件的宽度高度
  config: getConfig$5(),
  //组件配置项显示
  defaultSeries: [
    {
      type: "pie",
      radius: ["0%", "65%"]
    }
  ]
};
const __vite_glob_0_58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfPieData
}, Symbol.toStringTag, { value: "Module" }));
function mfPieCircularCreate(chart) {
  const newChart = mfPieData.create(chart);
  newChart.chart.options.series = cloneDeep(mfPieCircularData.defaultSeries);
  return newChart;
}
const mfPieCircularData = {
  ...mfPieData,
  type: ComType.MfPieCircular,
  create: mfPieCircularCreate,
  defaultSeries: [
    {
      type: "pie",
      radius: ["30%", "65%"]
    }
  ]
};
const __vite_glob_0_59 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfPieCircularData
}, Symbol.toStringTag, { value: "Module" }));
function mfPieHalfCreate(chart) {
  const newChart = mfPieData.create(chart);
  newChart.chart.options.series = cloneDeep(mfPieHalfData.defaultSeries);
  return newChart;
}
const mfPieHalfData = {
  ...mfPieData,
  type: ComType.MfPieHalf,
  create: mfPieHalfCreate,
  defaultSeries: [
    {
      type: "pie",
      center: ["50%", "70%"],
      radius: ["30%", "65%"],
      startAngle: 180,
      endAngle: 360
    }
  ]
};
const __vite_glob_0_60 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfPieHalfData
}, Symbol.toStringTag, { value: "Module" }));
function mfPieRoseCreate(chart) {
  const newChart = mfPieData.create(chart);
  newChart.chart.options.series = cloneDeep(mfPieRoseData.defaultSeries);
  return newChart;
}
const mfPieRoseData = {
  ...mfPieData,
  type: ComType.MfPieRose,
  //组件类型
  create: mfPieRoseCreate,
  defaultSeries: [
    {
      type: "pie",
      roseType: "area",
      radius: ["10%", "65%"],
      itemStyle: {
        borderRadius: 8
      }
    }
  ]
};
const __vite_glob_0_61 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfPieRoseData
}, Symbol.toStringTag, { value: "Module" }));
function mfRadarCreate$1(chart) {
  chart.chart.data.dataSet = cloneDeep(mfRadarData.defaultData);
  chart.chart.data.headers = mfRadarData.defaultHeaders && mfRadarData.defaultHeaders();
  chart.chart.data.limit = 5;
  chart.chart.data.maxLimit = 20;
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 400;
  chart.chart.options = {
    series: cloneDeep(mfRadarData.defaultSeries)
  };
  return chart;
}
const getConfig$4 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfRadarConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfRadarDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfRadarData = {
  component: createAsyncComponent(() => import("./index52.js"), {
    loading: true,
    size: "large"
  }),
  type: ComType.MfRadar,
  create: mfRadarCreate$1,
  config: getConfig$4(),
  defaultData: {
    indicator: [
      { name: "速度" },
      { name: "转向" },
      { name: "飘移" },
      { name: "灵敏" },
      { name: "力量" },
      { name: "加速度" }
    ],
    data: [
      {
        value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3],
        name: "法拉利"
      },
      {
        value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3],
        name: "布加迪"
      }
    ]
  },
  defaultHeaders: () => {
    return cloneDeep({
      name: { colName: "name", dataType: "string", rename: "名称" },
      value: {
        colName: "value",
        dataType: "number",
        rename: "值"
      }
    });
  },
  defaultSeries: [{ type: "radar" }],
  initData: (chart, data) => {
    const { setDynamicData } = useRadarData();
    setDynamicData(chart, data);
  }
};
function useRadarData() {
  const { createMessage } = useMessage();
  const { deleteFieldValue } = useDynamicDataConfig();
  function resetDefault(chart) {
    chart.data.dataSet = cloneDeep(mfRadarData.defaultData);
  }
  function setDynamicData(chart, result) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!chart) return;
    if (!result || result.list.length === 0 || !chart.data.fields) {
      resetDefault(chart);
      return;
    }
    if (((_b = (_a = chart.data.fields) == null ? void 0 : _a.dimensions) == null ? void 0 : _b.length) > 0 || ((_d = (_c = chart.data.fields) == null ? void 0 : _c.source) == null ? void 0 : _d.length) > 0) {
      if (((_f = (_e = chart.data.fields) == null ? void 0 : _e.source) == null ? void 0 : _f.length) > 0) {
        const source = [];
        for (const item of result.list) {
          const data = [];
          chart.data.fields.source.forEach((dim) => {
            const value = item[dim.colName];
            if (Number.isNaN(Number.parseFloat(value))) {
              const error = `属性值必须为数字`;
              deleteFieldValue("source", dim.colName);
              createMessage.warning(error);
              throw new Error(error);
            } else {
              data.push(value);
            }
          });
          let name2 = "";
          if (((_g = chart.data.fields.dimensions) == null ? void 0 : _g.length) > 0) {
            name2 = item[chart.data.fields.dimensions[0].colName];
          }
          source.push({ name: name2, value: data });
        }
        chart.data.dataSet = {
          indicator: chart.data.fields.source.map((dim) => {
            return {
              name: dim.rename || dim.colName
            };
          }),
          data: source
        };
      }
      return;
    }
    resetDefault(chart);
  }
  return {
    resetDefault,
    setDynamicData
  };
}
const __vite_glob_0_62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfRadarData,
  useRadarData
}, Symbol.toStringTag, { value: "Module" }));
function mfRadarCreate(chart) {
  const newChart = mfRadarData.create(chart);
  newChart.chart.options = {
    ...newChart.chart.options,
    radar: {
      shape: "circle"
    }
  };
  return chart;
}
const mfRadarCircleData = {
  ...mfRadarData,
  type: ComType.MfRadarCircle,
  create: mfRadarCreate
};
const __vite_glob_0_63 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfRadarCircleData
}, Symbol.toStringTag, { value: "Module" }));
function mfScatterCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfScatterData.defaultData);
  chart.chart.data.headers = mfScatterData.defaultHeaders && mfScatterData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 100;
  chart.chart.data.maxLimit = 1e3;
  chart.chartContain.dropInfo.width = 400;
  chart.chartContain.dropInfo.height = 300;
  chart.chart.options = {
    grid: { left: "10%", right: "10%", top: "10%", bottom: "10%" },
    xAxis: {
      show: true
    },
    yAxis: {
      show: true
    },
    series: cloneDeep(mfScatterData.defaultSeries)
  };
  return chart;
}
const getConfig$3 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfScatterConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfScatterDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfScatterData = {
  ...mfBarData,
  type: ComType.MfScatter,
  create: mfScatterCreate,
  config: getConfig$3(),
  defaultData: {
    source: [
      ["数据1", "数据2"],
      [10, 8.04],
      [8.07, 6.95],
      [13, 7.58],
      [9.05, 8.81],
      [11, 8.33],
      [14, 7.66],
      [13.4, 6.81],
      [10, 6.33],
      [14, 8.96],
      [12.5, 6.82],
      [9.15, 7.2],
      [11.5, 7.2],
      [3.03, 4.23],
      [12.2, 7.83],
      [2.02, 4.47],
      [1.05, 3.33],
      [4.05, 4.96],
      [6.03, 7.24],
      [12, 6.26],
      [12, 8.84],
      [7.08, 5.82],
      [5.02, 5.68]
    ]
  },
  defaultSeries: [{ type: "scatter" }]
};
const __vite_glob_0_64 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfScatterData
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  ...{ name: "MfPicture" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const { commonEvents } = useChartEventHandle(props.chart);
    const picUrl = computed(() => {
      var _a;
      if ((_a = props.chart.data.dataSet) == null ? void 0 : _a.key) {
        return imageUrl(getLocalFileUrl(props.chart.data.dataSet.key));
      }
      return noImage;
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(Image), mergeProps({
        src: picUrl.value,
        alt: ((_a = __props.chart.data.dataSet) == null ? void 0 : _a.alt) || "图片"
      }, __props.chart.options, {
        width: __props.chartContain.dropInfo.width - 2,
        height: __props.chartContain.dropInfo.height - 2,
        fallback: unref(noImage)
      }, toHandlers(unref(commonEvents))), null, 16, ["src", "alt", "width", "height", "fallback"]);
    };
  }
});
function mfPictureCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfPictureData.defaultData);
  chart.chart.data.headers = mfPictureData.defaultHeaders && mfPictureData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chart.options.preview = false;
  chart.chartContain.dropInfo.width = 200;
  chart.chartContain.dropInfo.height = 200;
  return chart;
}
const getConfig$2 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfPictureConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfPictureData = {
  type: ComType.MfPicture,
  component: _sfc_main$U,
  create: mfPictureCreate,
  config: getConfig$2(),
  defaultData: { key: "", alt: "" },
  defaultHeaders: () => {
    return cloneDeep({
      key: { colName: "key", dataType: "string", rename: "图片key" },
      alt: { colName: "alt", dataType: "string", rename: "描述" }
    });
  },
  initData: () => {
  }
};
const __vite_glob_0_65 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfPictureData,
  mfPictureCreate
}, Symbol.toStringTag, { value: "Module" }));
function mfScrollTableCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfScrollTableData.defaultData);
  chart.chart.data.headers = mfScrollTableData.defaultHeaders && mfScrollTableData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 50;
  chart.chart.data.maxLimit = 1e3;
  chart.chartContain.dropInfo.width = 600;
  chart.chartContain.dropInfo.height = 300;
  chart.chart.options = {
    indexHeader: "序号",
    showHeader: true,
    index: true
  };
  return chart;
}
const getConfig$1 = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfScrollTableConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfScrollTableDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfScrollTableData = {
  type: ComType.MfScrollTable,
  component: createAsyncComponent(() => import("./index53.js"), {
    loading: true
  }),
  create: mfScrollTableCreate,
  config: getConfig$1(),
  defaultData: {
    header: ["列1", "列2", "列3", "列4", "列5"],
    data: [
      [1e4, 1e3, 100, 10, 0],
      [10001, 1001, 101, 11, 1],
      [10002, 1002, 102, 12, 2],
      [10003, 1003, 103, 13, 3],
      [10004, 1004, 104, 14, 4],
      [10005, 1005, 105, 15, 5],
      [10006, 1006, 106, 16, 6],
      [10007, 1007, 107, 17, 7],
      [10008, 1008, 108, 18, 8],
      [10009, 1009, 109, 19, 9]
    ]
  },
  defaultHeaders: (chart) => buildHeaders(chart == null ? void 0 : chart.data.dataSet.header),
  initData: (chart, data) => {
    const { setDynamicData } = useDataScrollTable();
    setDynamicData(chart, data);
  },
  customEvents: [{ name: "行点击", value: "rowClick" }]
};
function useDataScrollTable() {
  function setDynamicData(chart, result) {
    var _a, _b;
    if (!chart) return;
    const fields = (_a = chart.data.fields) == null ? void 0 : _a.fieldName;
    if (!fields || fields.length === 0) {
      resetDefault(chart);
      return;
    }
    const header = [];
    fields.forEach((field) => {
      header.push(field.rename || field.colName);
    });
    const data = [];
    for (const item of result.list) {
      const row = [];
      (_b = chart.data.fields) == null ? void 0 : _b.fieldName.forEach((dim) => {
        row.push(item[dim.colName]);
      });
      data.push(row);
    }
    chart.data.dataSet = {
      header,
      data
    };
  }
  function resetDefault(chart) {
    var _a;
    if ((_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) {
      chart.data.dataSet = cloneDeep(mfScrollTableData.defaultData);
    }
  }
  return { resetDefault, setDynamicData };
}
const __vite_glob_0_66 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfScrollTableData,
  mfScrollTableCreate,
  useDataScrollTable
}, Symbol.toStringTag, { value: "Module" }));
function mfSegmentedCreate(chart) {
  chart.chart.data.dataSet = cloneDeep(mfSegmentedData.defaultData);
  chart.chart.data.headers = mfSegmentedData.defaultHeaders && mfSegmentedData.defaultHeaders(chart.chart);
  chart.chart.data.limit = 10;
  chart.chart.data.maxLimit = 1e3;
  chart.chartContain.dropInfo.width = 600;
  chart.chartContain.dropInfo.height = 50;
  return chart;
}
const getConfig = () => {
  const config = cloneDeep(comConfigDisplay);
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfSegmentedStyleConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  config.data.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfSegmentedDataConfig.js"), {
      loading: true,
      size: "large"
    })
  );
  return config;
};
const mfSegmentedData = {
  type: ComType.MfSegmented,
  component: createAsyncComponent(() => import("./index54.js"), {
    loading: true
  }),
  create: mfSegmentedCreate,
  config: getConfig(),
  defaultData: [
    { title: "Daily", value: "1", icon: "ant-design:calendar-outlined" },
    { title: "Weekly", value: "2", icon: "" },
    { title: "Monthly", value: "3", icon: "" },
    { title: "Quarterly", value: "4", icon: "" },
    { title: "Yearly", value: "5", icon: "" }
  ],
  defaultHeaders: () => {
    return cloneDeep({
      title: { colName: "title", dataType: "string", rename: "标签显示" },
      value: { colName: "value", dataType: "string", rename: "标签值" },
      icon: {
        colName: "icon",
        dataType: "string",
        rename: "图标"
      }
    });
  },
  initData: (chart, data) => {
    const { setDynamicData } = useSegmented();
    setDynamicData(chart, data);
  },
  customEvents: [{ name: "标签切换", value: "titleChange" }]
};
function useSegmented() {
  function setDynamicData(chart, result) {
    var _a, _b, _c, _d;
    if (!chart) return;
    if (((_a = result == null ? void 0 : result.list) == null ? void 0 : _a.length) > 0) {
      chart.data.dataSet = [];
      for (const item of result.list) {
        const data = { title: "", value: "", icon: "" };
        const title = (_b = chart.data.fields) == null ? void 0 : _b.title;
        if (title && title.length > 0 && title[0].colName) {
          data.title = item[title[0].colName];
        }
        const value = (_c = chart.data.fields) == null ? void 0 : _c.value;
        if (value && value.length > 0 && value[0].colName) {
          data.value = item[value[0].colName];
        }
        const icon = (_d = chart.data.fields) == null ? void 0 : _d.icon;
        if (icon && icon.length > 0 && icon[0].colName) {
          data.icon = item[icon[0].colName];
        }
        if (data.title || data.value) {
          chart.data.dataSet.push(data);
        }
      }
      if (chart.data.dataSet.length > 0) {
        return;
      }
    }
    resetDefault(chart);
  }
  function resetDefault(chart) {
    var _a;
    if ((_a = chart == null ? void 0 : chart.data) == null ? void 0 : _a.dataSet) {
      chart.data.dataSet = cloneDeep(mfSegmentedData.defaultData);
    }
  }
  return { resetDefault, setDynamicData };
}
const __vite_glob_0_67 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mfSegmentedData,
  mfSegmentedCreate,
  useSegmented
}, Symbol.toStringTag, { value: "Module" }));
const animationData = [
  {
    value: "进入动画",
    payload: {
      icon: "carbon:login",
      data: [
        { label: "渐显", value: "fadeIn" },
        { label: "向右进入", value: "fadeInLeft" },
        { label: "向左进入", value: "fadeInRight" },
        { label: "向上进入", value: "fadeInUp" },
        { label: "向下进入", value: "fadeInDown" },
        { label: "向右长距进入", value: "fadeInLeftBig" },
        { label: "向左长距进入", value: "fadeInRightBig" },
        { label: "向上长距进入", value: "fadeInUpBig" },
        { label: "向下长距进入", value: "fadeInDownBig" },
        { label: "旋转进入", value: "rotateIn" },
        { label: "左顺时针旋转", value: "rotateInDownLeft" },
        { label: "右逆时针旋转", value: "rotateInDownRight" },
        { label: "左逆时针旋转", value: "rotateInUpLeft" },
        { label: "右逆时针旋转", value: "rotateInUpRight" },
        { label: "弹入", value: "bounceIn" },
        { label: "向右弹入", value: "bounceInLeft" },
        { label: "向左弹入", value: "bounceInRight" },
        { label: "向上弹入", value: "bounceInUp" },
        { label: "向下弹入", value: "bounceInDown" },
        { label: "光速从右进入", value: "lightSpeedInRight" },
        { label: "光速从左进入", value: "lightSpeedInLeft" },
        { label: "Y轴旋转", value: "flip" },
        { label: "中心X轴旋转", value: "flipInX" },
        { label: "中心Y轴旋转", value: "flipInY" },
        { label: "左长半径旋转", value: "rollIn" },
        { label: "由小变大进入", value: "zoomIn" },
        { label: "左变大进入", value: "zoomInLeft" },
        { label: "右变大进入", value: "zoomInRight" },
        { label: "向上变大进入", value: "zoomInUp" },
        { label: "向下变大进入", value: "zoomInDown" },
        { label: "向右滑动展开", value: "slideInLeft" },
        { label: "向左滑动展开", value: "slideInRight" },
        { label: "向上滑动展开", value: "slideInUp" },
        { label: "向下滑动展开", value: "slideInDown" }
      ]
    }
  },
  {
    value: "突出动画",
    payload: {
      icon: "carbon:loop",
      data: [
        { label: "弹跳", value: "bounce" },
        { label: "闪烁", value: "flash" },
        { label: "放大缩小", value: "pulse" },
        { label: "放大缩小弹簧", value: "rubberBand" },
        { label: "左右晃动", value: "headShake" },
        { label: "左右扇形摇摆", value: "swing" },
        { label: "放大晃动缩小", value: "tada" },
        { label: "扇形摇摆", value: "wobble" },
        { label: "左右上下晃动", value: "jello" }
      ]
    }
  },
  {
    value: "退出动画",
    payload: {
      icon: "carbon:logout",
      data: [
        { label: "渐隐", value: "fadeOut" },
        { label: "向左退出", value: "fadeOutLeft" },
        { label: "向右退出", value: "fadeOutRight" },
        { label: "向上退出", value: "fadeOutUp" },
        { label: "向下退出", value: "fadeOutDown" },
        { label: "向左长距退出", value: "fadeOutLeftBig" },
        { label: "向右长距退出", value: "fadeOutRightBig" },
        { label: "向上长距退出", value: "fadeOutUpBig" },
        { label: "向下长距退出", value: "fadeOutDownBig" },
        { label: "旋转退出", value: "rotateOut" },
        { label: "左顺时针旋转", value: "rotateOutDownLeft" },
        { label: "右逆时针旋转", value: "rotateOutDownRight" },
        { label: "左逆时针旋转", value: "rotateOutUpLeft" },
        { label: "右逆时针旋转", value: "rotateOutUpRight" },
        { label: "弹出", value: "bounceOut" },
        { label: "向左弹出", value: "bounceOutLeft" },
        { label: "向右弹出", value: "bounceOutRight" },
        { label: "向上弹出", value: "bounceOutUp" },
        { label: "向下弹出", value: "bounceOutDown" },
        { label: "光速从右退出", value: "lightSpeedOutRight" },
        { label: "光速从左退出", value: "lightSpeedOutLeft" },
        { label: "中心X轴旋转", value: "flipOutX" },
        { label: "中心Y轴旋转", value: "flipOutY" },
        { label: "左长半径旋转", value: "rollOut" },
        { label: "由小变大退出", value: "zoomOut" },
        { label: "左变大退出", value: "zoomOutLeft" },
        { label: "右变大退出", value: "zoomOutRight" },
        { label: "向上变大退出", value: "zoomOutUp" },
        { label: "向下变大退出", value: "zoomOutDown" },
        { label: "向左滑动收起", value: "slideOutLeft" },
        { label: "向右滑动收起", value: "slideOutRight" },
        { label: "向上滑动收起", value: "slideOutUp" },
        { label: "向下滑动收起", value: "slideOutDown" }
      ]
    }
  }
];
const playAnimation = async ($el, animations = []) => {
  if (!$el) return;
  const isLoop = (loop) => {
    return loop ? "animate__infinite" : "animate__no_infinite";
  };
  const play = (animation) => new Promise((resolve) => {
    const { value = "", duration, loop = false, repeat } = animation;
    if (duration) {
      $el.style.setProperty("--animate-duration", `${duration}ms`);
    }
    $el.classList.add("animate__animated", `animate__${value}`, isLoop(loop), `animate__repeat-${repeat}`);
    const removeAnimation = (event) => {
      event.stopPropagation();
      $el.removeEventListener("animationend", removeAnimation);
      $el.classList.remove("animate__animated", `animate__${value}`, isLoop(loop), `animate__repeat-${repeat}`);
      $el.style.removeProperty("--animate-duration");
      setTimeout(() => {
        resolve("end");
      }, 1);
    };
    $el.addEventListener("animationend", removeAnimation);
  });
  for (let i = 0, len = animations.length; i < len; i++) {
    await play(animations[i]);
  }
};
const stopAnimation = ($el, animations = []) => {
  if (!$el) return;
  const array = animations.map((item) => `animate__${item.value}`);
  const repeat = animations.map((item) => `animate__repeat-${item.repeat}`);
  $el.classList.remove(...array, ...repeat, "animate__animated", "animate__infinite");
  $el.style.removeProperty("--animate-duration");
};
const components = /* @__PURE__ */ Object.assign({ "./MfCombine/mfCombine.data.ts": __vite_glob_0_0, "./MfDataTag/mfDataTag.data.ts": __vite_glob_0_1, "./MfDataUi/MfDigits/mfDigits.data.ts": __vite_glob_0_2, "./MfDataUi/MfTireMarks/mfTireMarks.data.ts": __vite_glob_0_3, "./MfDataUi/MfWheel/mfWheel.data.ts": __vite_glob_0_4, "./MfDataV/MfBorder1/mfBorder1.data.ts": __vite_glob_0_5, "./MfDataV/MfBorder10/mfBorder10.data.ts": __vite_glob_0_6, "./MfDataV/MfBorder11/mfBorder11.data.ts": __vite_glob_0_7, "./MfDataV/MfBorder12/mfBorder12.data.ts": __vite_glob_0_8, "./MfDataV/MfBorder13/mfBorder13.data.ts": __vite_glob_0_9, "./MfDataV/MfBorder14/mfBorder14.data.ts": __vite_glob_0_10, "./MfDataV/MfBorder15/mfBorder15.data.ts": __vite_glob_0_11, "./MfDataV/MfBorder16/mfBorder16.data.ts": __vite_glob_0_12, "./MfDataV/MfBorder17/mfBorder17.data.ts": __vite_glob_0_13, "./MfDataV/MfBorder18/mfBorder18.data.ts": __vite_glob_0_14, "./MfDataV/MfBorder19/mfBorder19.data.ts": __vite_glob_0_15, "./MfDataV/MfBorder2/mfBorder2.data.ts": __vite_glob_0_16, "./MfDataV/MfBorder20/mfBorder20.data.ts": __vite_glob_0_17, "./MfDataV/MfBorder21/mfBorder21.data.ts": __vite_glob_0_18, "./MfDataV/MfBorder22/mfBorder22.data.ts": __vite_glob_0_19, "./MfDataV/MfBorder3/mfBorder3.data.ts": __vite_glob_0_20, "./MfDataV/MfBorder4/mfBorder4.data.ts": __vite_glob_0_21, "./MfDataV/MfBorder5/mfBorder5.data.ts": __vite_glob_0_22, "./MfDataV/MfBorder6/mfBorder6.data.ts": __vite_glob_0_23, "./MfDataV/MfBorder7/mfBorder7.data.ts": __vite_glob_0_24, "./MfDataV/MfBorder8/mfBorder8.data.ts": __vite_glob_0_25, "./MfDataV/MfBorder9/mfBorder9.data.ts": __vite_glob_0_26, "./MfDataV/MfDecoration1/mfDecoration.data.ts": __vite_glob_0_27, "./MfDataV/MfDecoration10/mfDecoration.data.ts": __vite_glob_0_28, "./MfDataV/MfDecoration11/mfDecoration.data.ts": __vite_glob_0_29, "./MfDataV/MfDecoration12/mfDecoration.data.ts": __vite_glob_0_30, "./MfDataV/MfDecoration2/mfDecoration.data.ts": __vite_glob_0_31, "./MfDataV/MfDecoration3/mfDecoration.data.ts": __vite_glob_0_32, "./MfDataV/MfDecoration4/mfDecoration.data.ts": __vite_glob_0_33, "./MfDataV/MfDecoration5/mfDecoration.data.ts": __vite_glob_0_34, "./MfDataV/MfDecoration6/mfDecoration.data.ts": __vite_glob_0_35, "./MfDataV/MfDecoration7/mfDecoration.data.ts": __vite_glob_0_36, "./MfDataV/MfDecoration8/mfDecoration.data.ts": __vite_glob_0_37, "./MfDataV/MfDecoration9/mfDecoration.data.ts": __vite_glob_0_38, "./MfDataV/MfHeader1/mfHeader1.data.ts": __vite_glob_0_39, "./MfDataV/MfHeader2/mfHeader2.data.ts": __vite_glob_0_40, "./MfDataV/MfHeader3/mfHeader3.data.ts": __vite_glob_0_41, "./MfDataV/MfHeader4/mfHeader4.data.ts": __vite_glob_0_42, "./MfDataV/MfHeader5/mfHeader5.data.ts": __vite_glob_0_43, "./MfDataV/MfHeader6/mfHeader6.data.ts": __vite_glob_0_44, "./MfDateTime/mfDateTime.data.ts": __vite_glob_0_45, "./MfEcharts/MfBar/mfBar.data.ts": __vite_glob_0_46, "./MfEcharts/MfBarHorizontal/mfBarHorizontal.data.ts": __vite_glob_0_47, "./MfEcharts/MfBarLine/mfBarLine.data.ts": __vite_glob_0_48, "./MfEcharts/MfBarPlusMinus/mfBarPlusMinus.data.ts": __vite_glob_0_49, "./MfEcharts/MfBarStack/mfBarStack.data.ts": __vite_glob_0_50, "./MfEcharts/MfLine/mfLine.data.ts": __vite_glob_0_51, "./MfEcharts/MfLineArea/mfLineArea.data.ts": __vite_glob_0_52, "./MfEcharts/MfLineAreaStack/mfLineAreaStack.data.ts": __vite_glob_0_53, "./MfEcharts/MfLineSmooth/mfLineSmooth.data.ts": __vite_glob_0_54, "./MfEcharts/MfLineStack/mfLineStack.data.ts": __vite_glob_0_55, "./MfEcharts/MfMapLine/mfMapLine.data.ts": __vite_glob_0_56, "./MfEcharts/MfMapLine3D/mfMapLine3D.data.ts": __vite_glob_0_57, "./MfEcharts/MfPie/mfPie.data.ts": __vite_glob_0_58, "./MfEcharts/MfPieCircular/mfPieCircular.data.ts": __vite_glob_0_59, "./MfEcharts/MfPieHalf/mfPieHalf.data.ts": __vite_glob_0_60, "./MfEcharts/MfPieRose/mfPieRose.data.ts": __vite_glob_0_61, "./MfEcharts/MfRadar/mfRadar.data.ts": __vite_glob_0_62, "./MfEcharts/MfRadarCircle/mfRadarCircle.data.ts": __vite_glob_0_63, "./MfEcharts/MfScatter/mfScatter.data.ts": __vite_glob_0_64, "./MfPicture/mfPicture.data.ts": __vite_glob_0_65, "./MfScrollTable/mfScrollTable.data.ts": __vite_glob_0_66, "./MfSegmented/mfSegmented.data.ts": __vite_glob_0_67, "./MfTag/mfTag.data.ts": __vite_glob_0_68 });
function buildComponents() {
  const ComponentsEnum2 = {};
  Object.keys(components).forEach((path) => {
    const com = components[path].default;
    ComponentsEnum2[com.type] = com;
  });
  return ComponentsEnum2;
}
const ComponentsEnum = {
  ...buildComponents()
};
const screenEvent = mitt();
function getCanvasStyle(canvasConfig) {
  const screenEdit = useScreenEditStore();
  let color2;
  if (screenEdit.getTheme === ThemeEnum.DARK) {
    color2 = "#ffffff";
  } else {
    color2 = "#000000";
  }
  let background;
  if (canvasConfig.backgroundImage) {
    background = `url(${imageUrl(getLocalFileUrl(canvasConfig.backgroundImage))}) 0% 0% / 100% 100% no-repeat`;
  } else {
    background = canvasConfig.backgroundColor ?? "";
  }
  return {
    width: `${canvasConfig.width}px`,
    height: `${canvasConfig.height}px`,
    background,
    color: color2
  };
}
const createChart = () => {
  const id = buildUUID();
  return {
    chartContain: { ...cloneDeep(chartContain), id },
    chart: { ...cloneDeep(comOption), id }
  };
};
function pasteChart(component, x, y) {
  const com = cloneDeep(component);
  if (!com.chart.type) return;
  if (com.chart.type === ComType.MfCombine) {
    com.chart.options.components.forEach((child) => {
      const cUuid = buildUUID();
      child.chart.id = cUuid;
      child.chartContain.id = cUuid;
    });
  }
  const id = buildUUID();
  component.chartContain.dropInfo.x = x;
  component.chartContain.dropInfo.y = y;
  com.chart.name = buildName(com.chart.type, com.chart.name);
  com.chart.id = id;
  com.chartContain.id = id;
  com.chartContain.dropInfo.x = x;
  com.chartContain.dropInfo.y = y;
  com.chartContain.dropInfo.zIndex = 0;
  return com;
}
function buildName(type, name2) {
  const screenEdit = useScreenEditStore();
  const labels = screenEdit.getChartNameLabel;
  let label = name2 || type;
  if (label.replace(/(.*_)\d+/, "$1").endsWith("_")) {
    label = label.slice(0, Math.max(0, label.lastIndexOf("_")));
  }
  let num = labels.get(label) || 0;
  labels.set(label, ++num);
  return `${label}_${num}`;
}
const chartInit = (item) => {
  const chart = createChart();
  chart.chart.type = item.type;
  chart.chart.name = buildName(item.type, item.name);
  const com = ComponentsEnum[item.type];
  return !com || !com.create ? null : calcProportion(com.create(chart));
};
function calcProportion(chart) {
  chart.chartContain.dropInfo.proportion = Number.parseFloat(
    (chart.chartContain.dropInfo.width / chart.chartContain.dropInfo.height).toFixed(2)
  );
  return chart;
}
function getComponentStyle(component, filter = []) {
  var _a;
  let color2;
  if ((_a = component.chartContain.border.color) == null ? void 0 : _a.startsWith("linear-gradient")) {
    color2 = { [StyleEnum.borderImage]: `${component.chartContain.border.color} 1` };
  } else {
    color2 = { [StyleEnum.borderColor]: component.chartContain.border.color };
  }
  return getChartStyle(
    {
      ...component.chartContain.dropInfo,
      ...color2,
      [StyleEnum.borderWidth]: component.chartContain.border.show ? component.chartContain.border.width : 0,
      [StyleEnum.borderRadius]: component.chartContain.border.radius,
      [StyleEnum.background]: component.chartContain.background,
      [StyleEnum.opacity]: component.chartContain.opacity,
      padding: component.chartContain.padding
    },
    filter
  );
}
function getChartStyle(style, filter = []) {
  const needUnit = /* @__PURE__ */ new Set([StyleEnum.width, StyleEnum.height, StyleEnum.borderWidth, StyleEnum.borderRadius]);
  const filterSet = new Set(filter);
  const transform = [];
  if (!filterSet.has(StyleEnum.x) && !filterSet.has(StyleEnum.y)) {
    transform.push(`translate(${style.x}px,${style.y}px)`);
    filterSet.add(StyleEnum.x);
    filterSet.add(StyleEnum.y);
  }
  if (!filterSet.has(StyleEnum.rotate)) {
    transform.push(`rotate(${style.rotate}deg)`);
    filterSet.add(StyleEnum.rotate);
  }
  const result = {};
  Object.keys(style).forEach((key) => {
    if (filterSet.has(key)) {
      return true;
    }
    result[key] = style[key];
    if (needUnit.has(key) && result[key]) {
      result[key] += "px";
    }
    return true;
  });
  if (transform.length > 0) {
    result.transform = transform.join(" ");
  }
  return result;
}
function getComponentRotatedStyle(comStyle) {
  const style = { ...comStyle };
  if (style.rotate !== 0) {
    const newWidth = Math.round(style.width * cos(style.rotate) + style.height * sin(style.rotate));
    const diffX = (style.width - newWidth) / 2;
    style.x += Math.round(diffX);
    style.right = style.x + newWidth;
    const newHeight = Math.round(style.height * cos(style.rotate) + style.width * sin(style.rotate));
    const diffY = (newHeight - style.height) / 2;
    style.y -= Math.round(diffY);
    style.bottom = style.y + newHeight;
    style.width = newWidth;
    style.height = newHeight;
    return style;
  }
  style.bottom = style.y + style.height;
  style.right = style.x + style.width;
  return style;
}
function getComponentById(componentList, id) {
  for (const component of componentList) {
    if (component.chart.id === id) {
      return component;
    }
    if (component.chart.type !== ComType.MfCombine) {
      continue;
    }
    for (const item of component.chart.options.components) {
      if (item.chart.id === id) {
        return item;
      }
    }
  }
}
async function initScreen(componentList, isResource) {
  const setParamValue = (chart) => {
    if (!chart) return;
    const params = chart.data.params;
    if (params) {
      const paramsValue = {};
      const setValue = (name2, param) => {
        if (!param) return;
        if (isString(param)) {
          paramsValue[name2] = param;
          return;
        }
        const component = getComponentById(componentList, param.id);
        if (!component) return;
        const dataSet = component.chart.data.type === 0 ? component.chart.data.dataSet : component.chart.data.result;
        if (isArray(dataSet)) {
          paramsValue[name2] = dataSet[0][param.param];
        } else if (dataSet) {
          paramsValue[name2] = dataSet[param.param];
        }
      };
      for (const key of Object.keys(params)) {
        if (isArray(params[key].value)) {
          params[key].value.forEach((item) => {
            setValue(key, item);
          });
        } else {
          setValue(key, params[key].value);
        }
      }
      if (chart.data.paramsValue) {
        chart.data.paramsValue = { ...chart.data.paramsValue, ...paramsValue };
      } else {
        chart.data.paramsValue = paramsValue;
      }
    }
  };
  const { getDataTable } = useDynamicData();
  const staticList = [];
  const dynamicList = [];
  const listComponents = (com) => {
    if (com.chart.data.type === 0) {
      staticList.push(com.chart);
    } else {
      dynamicList.push(com.chart);
    }
  };
  for (const com of componentList) {
    if (isResource) {
      com.chart.isResource = true;
    }
    listComponents(com);
    if (com.chart.type !== ComType.MfCombine) {
      continue;
    }
    for (const item of com.chart.options.components) {
      if (isResource) {
        item.chart.isResource = true;
      }
      listComponents(item);
    }
  }
  dynamicList.sort((chart1, chart2) => {
    if ((chart1.data.priority ?? 0) < (chart2.data.priority ?? 0)) {
      return -1;
    }
    return 1;
  });
  staticList.forEach((chart) => {
    if (chart.type) {
      const com = ComponentsEnum[chart.type];
      if (com) {
        chart.data.headers = com.defaultHeaders && com.defaultHeaders(chart);
      }
    }
  });
  let dataTable = [];
  let priority = 0;
  for (const chart of dynamicList) {
    if (chart.data.priority > priority) {
      if (dataTable.length > 0) {
        await Promise.all(dataTable);
        dataTable = [];
      }
      priority = chart.data.priority;
    }
    setParamValue(chart);
    dataTable.push(
      getDataTable(chart).then((res) => {
        var _a;
        if (chart.type) {
          (_a = ComponentsEnum[chart.type]) == null ? void 0 : _a.initData(chart, res);
        }
      })
    );
  }
  return dataTable;
}
function preSaveScreen(componentList, canvasConfig) {
  const clearData = (chart) => {
    delete chart.data.headers;
    delete chart.data.result;
    if (chart.data.type === 1 && chart.data.id) {
      delete chart.data.dataSet;
    }
    delete chart.data.paramsValue;
  };
  const list = cloneDeep(componentList);
  clearChartResource(list);
  const screen = {
    canvasConfig: JSON.stringify(canvasConfig),
    contains: [],
    layers: {}
  };
  for (const com of list) {
    clearData(com.chart);
    if (com.chart.type === ComType.MfCombine) {
      for (const item of com.chart.options.components) {
        clearData(item.chart);
      }
    }
    screen.contains.push(com.chartContain);
    screen.layers[com.chart.id] = JSON.stringify(com.chart);
  }
  return { ...screen, contains: JSON.stringify(screen.contains) };
}
function clearChartResource(componentList) {
  const screenEditStore2 = useScreenEditStore();
  if (!screenEditStore2.getIsResource) return;
  const deleteResource = (chart) => {
    delete chart.isResource;
    if (chart.data.type === 0) {
      chart.data.id = "";
    }
  };
  for (const com of componentList) {
    deleteResource(com.chart);
    if (com.chart.type === ComType.MfCombine) {
      for (const item of com.chart.options.components) {
        deleteResource(item.chart);
      }
    }
  }
}
function getChartData(chart) {
  return chart.data.type === 0 ? chart.data.dataSet : chart.data.result;
}
const screenEditStore$1 = useScreenEditStore();
const isTop = (index2) => {
  return index2 <= 0;
};
const isBottom = (index2, componentList) => {
  return index2 >= componentList.length - 1;
};
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const useScreenShortcutStore = defineStore("screen-shortcut", {
  state: () => ({
    showMenu: false,
    //是否显示右键菜单
    copyData: null,
    alignType: ALIGN_MENU_TYPE.GROUP
  }),
  getters: {
    getShowMenu() {
      return this.showMenu;
    },
    getAlignType() {
      return this.alignType;
    },
    getCopyData() {
      return this.copyData;
    }
  },
  actions: {
    //是否显示右键菜单
    setShowMenu(isShow) {
      this.showMenu = isShow;
    },
    //对齐类型
    setAlignType(type) {
      this.alignType = type;
    },
    //复制组件
    copyComponent() {
      var _a, _b;
      if (((_a = screenEditStore$1.getSelectArea) == null ? void 0 : _a.components.length) > 0) {
        this.copyData = cloneDeep((_b = screenEditStore$1.getSelectArea) == null ? void 0 : _b.components);
        return;
      }
      if (screenEditStore$1.getCurComponent) {
        this.copyData = cloneDeep(screenEditStore$1.getCurComponent);
      }
    },
    //粘贴组件
    pasteComponent() {
      if (!this.copyData) return;
      if (isArray(this.copyData)) {
        this.copyData.forEach((component) => {
          const x = component.chartContain.dropInfo.x + 10;
          const y = component.chartContain.dropInfo.y + 10;
          const com = pasteChart(component, x, y);
          if (com) {
            screenEditStore$1.addComponent(com, 0);
          }
        });
      } else {
        const x = this.copyData.chartContain.dropInfo.x + 10;
        const y = this.copyData.chartContain.dropInfo.y + 10;
        const component = pasteChart(this.copyData, x, y);
        if (component) {
          screenEditStore$1.addComponent(component, 0);
          screenEditStore$1.setCurComponent(component, 0);
        }
      }
      screenEditStore$1.setUndoRedoData("组件复制");
    },
    //移动组件 direct 方向 step移动步长
    moveComponent(direct, step) {
      if (!screenEditStore$1.getCurComponent) return;
      if (direct === "x") {
        screenEditStore$1.getCurComponent.chartContain.dropInfo.x = screenEditStore$1.getCurComponent.chartContain.dropInfo.x + step;
      }
      if (direct === "y") {
        screenEditStore$1.getCurComponent.chartContain.dropInfo.y = screenEditStore$1.getCurComponent.chartContain.dropInfo.y + step;
      }
      if (step >= 10) {
        screenEditStore$1.setUndoRedoData("组件移动");
      }
    },
    //层级上移组件
    upComponent() {
      if (isTop(screenEditStore$1.getCurComponentIndex)) return;
      swap(
        screenEditStore$1.getComponentList,
        screenEditStore$1.getCurComponentIndex,
        screenEditStore$1.getCurComponentIndex - 1
      );
      screenEditStore$1.setCurComponentIndex(screenEditStore$1.getCurComponentIndex - 1);
      screenEditStore$1.setUndoRedoData("组件上移一层");
    },
    //层级下移组件
    downComponent() {
      if (isBottom(screenEditStore$1.getCurComponentIndex, screenEditStore$1.getComponentList)) return;
      swap(
        screenEditStore$1.getComponentList,
        screenEditStore$1.getCurComponentIndex,
        screenEditStore$1.getCurComponentIndex + 1
      );
      screenEditStore$1.setCurComponentIndex(screenEditStore$1.getCurComponentIndex + 1);
      screenEditStore$1.setUndoRedoData("组件下移一层");
    },
    //置顶组件
    topComponent() {
      if (!screenEditStore$1.getCurComponent || isTop(screenEditStore$1.getCurComponentIndex)) return;
      screenEditStore$1.getComponentList.splice(screenEditStore$1.getCurComponentIndex, 1);
      screenEditStore$1.getComponentList.unshift(screenEditStore$1.getCurComponent);
      screenEditStore$1.setCurComponentIndex(0);
      screenEditStore$1.setUndoRedoData("组件置顶");
    },
    //置底组件
    bottomComponent() {
      if (!screenEditStore$1.getCurComponent || isBottom(screenEditStore$1.getCurComponentIndex, screenEditStore$1.getComponentList))
        return;
      screenEditStore$1.getComponentList.splice(screenEditStore$1.getCurComponentIndex, 1);
      screenEditStore$1.getComponentList.push(screenEditStore$1.getCurComponent);
      screenEditStore$1.setCurComponentIndex(screenEditStore$1.getComponentList.length - 1);
      screenEditStore$1.setUndoRedoData("组件置底");
    },
    //组合组件
    composeComponent() {
      if (screenEditStore$1.getSelectArea.components.length <= 1) return;
      const components2 = [];
      screenEditStore$1.getSelectArea.components.forEach((component) => {
        var _a;
        if (component.chart.type === ComType.MfCombine) {
          const parentStyle = { ...component.chartContain.dropInfo };
          const subComponents = component.chart.options.components;
          const editorRect = (_a = screenEditStore$1.getScreenCanvas) == null ? void 0 : _a.getBoundingClientRect();
          subComponents.forEach((component2) => {
            decomposeComponent(component2, editorRect, parentStyle, screenEditStore$1.getScale);
          });
          components2.push(...component.chart.options.components);
        } else {
          components2.push(component);
        }
      });
      nextTick(() => {
        const groupComponent = chartInit({ type: ComType.MfCombine, name: "组合" });
        if (groupComponent === null) return;
        console.log(screenEditStore$1.getSelectArea.dropInfo);
        groupComponent.chartContain.dropInfo = Object.assign(
          groupComponent.chartContain.dropInfo,
          screenEditStore$1.getSelectArea.dropInfo
        );
        groupComponent.chart.options.components = components2;
        createGroupStyle(groupComponent);
        screenEditStore$1.batchDeleteComponent(screenEditStore$1.getSelectArea.components);
        screenEditStore$1.addComponent(groupComponent, 0);
        screenEditStore$1.cleanSelectArea();
        screenEditStore$1.setCurComponent(groupComponent, 0);
        screenEditStore$1.setUndoRedoData("组件组合");
      });
    },
    //拆分组合组件
    decomposeComponent() {
      if (!screenEditStore$1.getCurComponent) return;
      if (screenEditStore$1.getCurComponent.chart.type !== ComType.MfCombine) {
        return;
      }
      if (!screenEditStore$1.getCurComponent.chartContain.show) {
        screenEditStore$1.getCurComponent.chartContain.show = true;
      }
      const components2 = screenEditStore$1.getCurComponent.chart.options.components;
      const list = [];
      for (const component of components2) {
        if (!component.chartContain.show) {
          component.chartContain.show = true;
          list.push(component);
        }
      }
      nextTick(() => {
        const parentStyle = { ...screenEditStore$1.getCurComponent.chartContain.dropInfo };
        if (!screenEditStore$1.getScreenCanvas) return;
        const editorRect = screenEditStore$1.getScreenCanvas.getBoundingClientRect();
        const index2 = screenEditStore$1.getCurComponentIndex;
        screenEditStore$1.deleteComponent(index2);
        for (let i = components2.length - 1; i >= 0; i--) {
          decomposeComponent(components2[i], editorRect, parentStyle, screenEditStore$1.getScale);
          screenEditStore$1.addComponent(components2[i], index2);
          screenEditStore$1.getSelectArea.components.push(components2[i]);
        }
        list.forEach((component) => {
          component.chartContain.show = false;
        });
        selectComponents(screenEditStore$1.getSelectArea.components);
        screenEditStore$1.setUndoRedoData("组件拆分");
      });
    },
    //加锁
    lockComponent() {
      this.lockUnLockComponent(true);
    },
    //解锁
    unLockComponent() {
      this.lockUnLockComponent(false);
    },
    lockUnLockComponent(lock) {
      var _a, _b;
      if (((_a = screenEditStore$1.getSelectArea) == null ? void 0 : _a.components.length) > 0) {
        (_b = screenEditStore$1.getSelectArea) == null ? void 0 : _b.components.forEach((component) => {
          component.chartContain.lock = lock;
        });
      }
      if (screenEditStore$1.getCurComponent) {
        screenEditStore$1.getCurComponent.chartContain.lock = lock;
      }
      screenEditStore$1.setUndoRedoData(lock ? "组件锁定" : "组件解锁");
    },
    hideComponent() {
      this.showHideComponent(false);
    },
    showComponent() {
      this.showHideComponent(true);
    },
    //隐藏显示组件
    showHideComponent(show) {
      var _a, _b;
      if (((_a = screenEditStore$1.getSelectArea) == null ? void 0 : _a.components.length) > 0) {
        (_b = screenEditStore$1.getSelectArea) == null ? void 0 : _b.components.forEach((component) => {
          component.chartContain.show = show;
        });
      }
      if (screenEditStore$1.getCurComponent) {
        screenEditStore$1.getCurComponent.chartContain.show = show;
      }
      screenEditStore$1.setUndoRedoData(show ? "组件显示" : "组件隐藏");
    },
    deleteComponent() {
      screenEditStore$1.deleteComponent();
      screenEditStore$1.setUndoRedoData("组件删除");
    },
    selectAllComponent() {
      selectComponents(screenEditStore$1.getComponentList);
    },
    screenSave() {
      screenEvent.emit(ScreenEventEnum.SCREEN_SAVE);
    },
    screenPreview() {
      screenEvent.emit(ScreenEventEnum.SCREEN_PREVIEW);
    }
  }
});
function toPercent(value) {
  return `${value * 100}%`;
}
function createGroupStyle(groupComponent) {
  const parentStyle = groupComponent.chartContain.dropInfo;
  groupComponent.chart.options.components.forEach((component) => {
    component.chartContain.groupStyle = getComponentStyle(component, [StyleEnum.x, StyleEnum.y]);
    component.chartContain.groupStyle.left = toPercent(
      (component.chartContain.dropInfo.x - parentStyle.x) / parentStyle.width
    );
    component.chartContain.groupStyle.top = toPercent(
      (component.chartContain.dropInfo.y - parentStyle.y) / parentStyle.height
    );
    component.chartContain.groupStyle.width = toPercent(component.chartContain.dropInfo.width / parentStyle.width);
    component.chartContain.groupStyle.height = toPercent(component.chartContain.dropInfo.height / parentStyle.height);
  });
}
function decomposeComponent(component, editorRect, parentStyle, scale) {
  const com = document.querySelector(`#com${component.chart.id}`);
  if (!com) return;
  const componentRect = com.getBoundingClientRect();
  const center = {
    x: componentRect.left - editorRect.left + componentRect.width / 2,
    y: componentRect.top - editorRect.top + componentRect.height / 2
  };
  component.chartContain.dropInfo.rotate = mod360(component.chartContain.dropInfo.rotate + parentStyle.rotate);
  component.chartContain.dropInfo.width = Math.abs(
    Math.round(Number.parseFloat(component.chartContain.groupStyle.width) / 100 * parentStyle.width)
  );
  component.chartContain.dropInfo.height = Math.abs(
    Math.round(Number.parseFloat(component.chartContain.groupStyle.height) / 100 * parentStyle.height)
  );
  component.chartContain.dropInfo.x = Math.abs(
    Math.round((center.x - component.chartContain.dropInfo.width * scale / 2) / scale)
  );
  component.chartContain.dropInfo.y = Math.abs(
    Math.round((center.y - component.chartContain.dropInfo.height * scale / 2) / scale)
  );
  component.chartContain.groupStyle = {};
}
const screenEditStore = useScreenEditStore();
function getAreaComponents(curArea) {
  const result = [];
  const { x: x1, y: y1 } = curArea;
  screenEditStore.getComponentList.forEach((component) => {
    const { x, y, width, height } = getComponentRotatedStyle(component.chartContain.dropInfo);
    if (x1 <= x && y1 <= y && x + width <= x1 + curArea.width && y + height <= y1 + curArea.height) {
      result.push(component);
    }
  });
  return result;
}
function selectComponents(areaComponents) {
  if (!areaComponents || (areaComponents == null ? void 0 : areaComponents.length) < 1) {
    screenEditStore.cleanSelectArea();
    return;
  }
  let [top, left, right, bottom] = [Infinity, Infinity, -Infinity, -Infinity];
  areaComponents.forEach((component) => {
    const style = getComponentRotatedStyle(component.chartContain.dropInfo);
    if (style.x < left) left = style.x;
    if (style.y < top) top = style.y;
    if (style.right > right) right = style.right;
    if (style.bottom > bottom) bottom = style.bottom;
  });
  const dropInfo2 = {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    rotate: 0
  };
  screenEditStore.setSelectArea({ show: false, dropInfo: dropInfo2, components: areaComponents });
  if (areaComponents.length === 1) {
    screenEditStore.setCurComponent(areaComponents[0]);
  }
}
function addSelectComponent(component) {
  if (screenEditStore.getCurComponent) {
    const index2 = screenEditStore.getSelectArea.components.findIndex(
      (c) => c.chart.id === screenEditStore.getCurComponent.chart.id
    );
    if (index2 === -1) {
      screenEditStore.getSelectArea.components.push(screenEditStore.getCurComponent);
    }
  }
  screenEditStore.cleanCurComponent();
  screenEditStore.setSelectedComponents(component);
  if (screenEditStore.getSelectArea.components.length > 1) {
    selectComponents(screenEditStore.getSelectArea.components);
  }
}
var ALIGN_MENU_TYPE = /* @__PURE__ */ ((ALIGN_MENU_TYPE2) => {
  ALIGN_MENU_TYPE2["GROUP"] = "Group";
  ALIGN_MENU_TYPE2["CANVAS"] = "Canvas";
  return ALIGN_MENU_TYPE2;
})(ALIGN_MENU_TYPE || {});
const useAlign = (screenEditStore2, screenShortcutStore) => {
  function alignLeft() {
    handleAlign((component, points2) => {
      component.chartContain.dropInfo.x = points2[0].x;
    });
  }
  function alignCenter() {
    handleAlign((component, points2) => {
      component.chartContain.dropInfo.x = (points2[0].x + points2[1].x) / 2 - component.chartContain.dropInfo.width / 2;
    });
  }
  function alignRight() {
    handleAlign((component, points2) => {
      component.chartContain.dropInfo.x = points2[1].x - component.chartContain.dropInfo.width;
    });
  }
  function alignTop() {
    handleAlign((component, points2) => {
      component.chartContain.dropInfo.y = points2[0].y;
    });
  }
  function alignMiddle() {
    handleAlign((component, points2) => {
      component.chartContain.dropInfo.y = (points2[0].y + points2[1].y) / 2 - component.chartContain.dropInfo.height / 2;
    });
  }
  function alignBottom() {
    handleAlign((component, points2) => {
      component.chartContain.dropInfo.y = points2[1].y - component.chartContain.dropInfo.height;
    });
  }
  function handleDistribute(axis) {
    const lengthType = axis === "x" ? "width" : "height";
    const middleAxis = (c) => {
      const style = getComponentRotatedStyle(c.chartContain.dropInfo);
      return (style[axis] * 2 + style[lengthType]) / 2;
    };
    let minAxis;
    let maxAxis;
    let gutter;
    let aligningComponents = getAligningComponents().sort((a, b) => {
      return middleAxis(a) < middleAxis(b) ? -1 : 1;
    });
    const gutterCalc = () => {
      return Math.round(
        (maxAxis - minAxis - aligningComponents.map((c) => c.chartContain.dropInfo[lengthType]).reduce((p, n) => p + n)) / (aligningComponents.length + 1)
      );
    };
    switch (screenShortcutStore.getAlignType) {
      case "Group": {
        minAxis = aligningComponents[0].chartContain.dropInfo[axis] + aligningComponents[0].chartContain.dropInfo[lengthType];
        maxAxis = aligningComponents[aligningComponents.length - 1].chartContain.dropInfo[axis];
        aligningComponents = aligningComponents.slice(1, -1);
        gutter = gutterCalc();
        break;
      }
      default: {
        const points2 = getRectangleOppositeAnglesPoints();
        minAxis = points2[0][axis];
        maxAxis = points2[1][axis];
        gutter = gutterCalc();
        if (gutter < 0) {
          aligningComponents[0].chartContain.dropInfo[axis] = 0;
          minAxis = aligningComponents[0].chartContain.dropInfo[lengthType];
          maxAxis = aligningComponents[aligningComponents.length - 1].chartContain.dropInfo[axis] = maxAxis - aligningComponents[aligningComponents.length - 1].chartContain.dropInfo[lengthType];
          aligningComponents = aligningComponents.slice(1, -1);
          gutter = gutterCalc();
        }
        break;
      }
    }
    aligningComponents.forEach((c) => {
      c.chartContain.dropInfo[axis] = minAxis + gutter;
      minAxis = c.chartContain.dropInfo[axis] + c.chartContain.dropInfo[lengthType];
    });
    selectComponents(screenEditStore2.getSelectArea.components);
    screenEditStore2.setUndoRedoData(axis === "x" ? "横向分布" : "纵向分布");
  }
  function distributeHorizontally() {
    handleDistribute("x");
  }
  function distributeVertically() {
    handleDistribute("y");
  }
  function getRectangleOppositeAnglesPoints() {
    if (screenShortcutStore.getAlignType === "Group") {
      const xArr = screenEditStore2.getSelectArea.components.flatMap((component) => [
        component.chartContain.dropInfo.x,
        component.chartContain.dropInfo.x + component.chartContain.dropInfo.width
      ]).sort((a, b) => a < b ? -1 : 1);
      const yArr = screenEditStore2.getSelectArea.components.flatMap((component) => [
        component.chartContain.dropInfo.y,
        component.chartContain.dropInfo.y + component.chartContain.dropInfo.height
      ]).sort((a, b) => a < b ? -1 : 1);
      return [
        { x: xArr[0], y: yArr[0] },
        { x: xArr[xArr.length - 1], y: yArr[yArr.length - 1] }
      ];
    } else {
      return [
        { x: 0, y: 0 },
        { x: screenEditStore2.canvasConfig.width, y: screenEditStore2.canvasConfig.height }
      ];
    }
  }
  function getAligningComponents() {
    if (screenEditStore2.getSelectArea.components.length > 0) {
      return screenEditStore2.getSelectArea.components;
    } else {
      return [screenEditStore2.getCurComponent];
    }
  }
  function handleAlign(handler) {
    const points2 = getRectangleOppositeAnglesPoints();
    getAligningComponents().forEach((component) => handler(component, points2));
    selectComponents(screenEditStore2.getSelectArea.components);
    screenEditStore2.setUndoRedoData("对齐");
  }
  function fillScreen() {
    fillWidth();
    fillHeight();
  }
  function fillWidth() {
    screenEditStore2.getCurComponent.chartContain.dropInfo.x = 0;
    screenEditStore2.getCurComponent.chartContain.dropInfo.width = screenEditStore2.canvasConfig.width;
  }
  function fillHeight() {
    screenEditStore2.getCurComponent.chartContain.dropInfo.y = 0;
    screenEditStore2.getCurComponent.chartContain.dropInfo.height = screenEditStore2.canvasConfig.height;
  }
  return {
    alignLeft,
    alignCenter,
    alignRight,
    alignTop,
    alignMiddle,
    alignBottom,
    distributeHorizontally,
    distributeVertically,
    fillWidth,
    fillHeight,
    fillScreen
  };
};
const useScreenShortcut = (screenEditStore2, screenShortcutStore) => {
  const interval = 150;
  const KeysEnum = {
    ArrowUp: throttle(() => screenShortcutStore.moveComponent("y", -1), interval),
    //组件在画布中上移
    ArrowDown: throttle(() => screenShortcutStore.moveComponent("y", 1), interval),
    //组件在画布中下移
    ArrowLeft: throttle(() => screenShortcutStore.moveComponent("x", -1), interval),
    //组件在画布中左移
    ArrowRight: throttle(() => screenShortcutStore.moveComponent("x", 1), interval),
    //组件在画布中右移
    Delete: debounce(() => screenShortcutStore.deleteComponent(), interval)
    //删除
  };
  const CtrlKeysEnum = {
    c: debounce(() => screenShortcutStore.copyComponent(), interval),
    //复制
    v: debounce(() => screenShortcutStore.pasteComponent(), interval),
    //粘贴
    ArrowUp: throttle(() => screenShortcutStore.moveComponent("y", -10), interval),
    //组件在画布中上移
    ArrowDown: throttle(() => screenShortcutStore.moveComponent("y", 10), interval),
    //组件在画布中下移
    ArrowLeft: throttle(() => screenShortcutStore.moveComponent("x", -10), interval),
    //组件在画布中左移
    ArrowRight: throttle(() => screenShortcutStore.moveComponent("x", 10), interval),
    //组件在画布中右移
    g: debounce(() => screenShortcutStore.composeComponent(), interval),
    //组合
    l: debounce(() => screenShortcutStore.lockComponent(), interval),
    //锁定
    h: debounce(() => screenShortcutStore.hideComponent(), interval),
    //隐藏
    a: debounce(() => screenShortcutStore.selectAllComponent(), interval),
    //全选
    p: debounce(() => screenShortcutStore.screenPreview(), interval),
    //预览
    s: debounce(() => screenShortcutStore.screenSave(), interval),
    //保存
    z: debounce(() => screenEditStore2.undo(), interval)
    //撤销
  };
  const ShiftKeysEnum = {
    ArrowUp: throttle(() => screenShortcutStore.upComponent(), interval),
    //上移一层
    ArrowDown: throttle(() => screenShortcutStore.downComponent(), interval)
    //下移一层
  };
  const CtrlShiftKeysEnum = {
    ArrowUp: debounce(() => screenShortcutStore.topComponent(), interval),
    //置顶
    ArrowDown: debounce(() => screenShortcutStore.bottomComponent(), interval),
    //置底
    g: debounce(() => screenShortcutStore.decomposeComponent(), interval),
    //拆分
    l: debounce(() => screenShortcutStore.unLockComponent(), interval),
    //解锁
    h: debounce(() => screenShortcutStore.showComponent(), interval),
    //显示
    z: debounce(() => screenEditStore2.redo(), interval)
    //重做
  };
  const NoneShortcutKeyEnum = useAlign(screenEditStore2, screenShortcutStore);
  return { KeysEnum, CtrlKeysEnum, ShiftKeysEnum, CtrlShiftKeysEnum, NoneShortcutKeyEnum };
};
const _hoisted_1$o = { class: "title" };
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "ConfigWrapper",
  props: {
    iconfont: { type: String, default: void 0 },
    icon: { type: String, default: void 0 },
    title: { type: String, default: "" },
    allowDelete: { type: Boolean, default: true },
    full: { type: Boolean, default: false },
    highlight: { type: Boolean, default: false },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["deleteConfig", "execute"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const themeColor = useRootSetting().getThemeColor;
    const { prefixCls } = useDesign("config-wrapper");
    const executeKey = buildUUID();
    const apiStore = useApiStore();
    const queryEnter = ref(false);
    function deleteClick(e) {
      emit("deleteConfig", e);
    }
    function executeClick() {
      emit("execute", executeKey);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(prefixCls), unref(apiStore).getShowData && unref(apiStore).getShowDataLevel === unref(executeKey) ? "active" : ""]),
        style: normalizeStyle(__props.highlight ? { border: `1px solid ${unref(themeColor)}` } : "")
      }, [
        unref(apiStore).getShowData && unref(apiStore).getShowDataLevel === unref(executeKey) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "select",
          style: normalizeStyle({ backgroundColor: unref(themeColor) })
        }, [
          createVNode(unref(Icon), {
            icon: "ant-design:check-outlined",
            color: "#FFFFFF",
            size: 14
          })
        ], 4)) : createCommentVNode("", true),
        __props.iconfont !== void 0 ? (openBlock(), createBlock(unref(Icon), {
          key: 1,
          color: unref(themeColor),
          icon: `iconfont:${__props.iconfont}`,
          size: 14
        }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
        __props.icon !== void 0 ? (openBlock(), createBlock(unref(Icon), {
          key: 2,
          color: unref(themeColor),
          icon: __props.icon,
          size: 14
        }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_1$o, toDisplayString(__props.title), 1),
        __props.allowDelete && !__props.queryMode ? (openBlock(), createBlock(unref(Divider), {
          key: 3,
          type: "vertical"
        })) : createCommentVNode("", true),
        !__props.queryMode ? (openBlock(), createBlock(unref(Tooltip), {
          key: 4,
          title: "删除"
        }, {
          default: withCtx(() => [
            __props.allowDelete ? (openBlock(), createBlock(unref(Button), {
              key: 0,
              size: "small",
              type: "link",
              onClick: deleteClick
            }, {
              icon: withCtx(() => [
                createVNode(unref(DeleteOutlined))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["config", __props.full ? "full" : ""])
        }, [
          renderSlot(_ctx.$slots, "config", {}, void 0, true)
        ], 2),
        createVNode(unref(Tooltip), { title: "执行" }, {
          default: withCtx(() => [
            createVNode(unref(Button), {
              size: "small",
              type: "link",
              style: { "margin": "6px" },
              onMouseenter: _cache[0] || (_cache[0] = ($event) => queryEnter.value = true),
              onMouseleave: _cache[1] || (_cache[1] = ($event) => queryEnter.value = false),
              onClick: executeClick
            }, {
              icon: withCtx(() => [
                !unref(apiStore).getShowData || unref(apiStore).getShowDataLevel !== unref(executeKey) || queryEnter.value ? (openBlock(), createBlock(unref(CaretRightOutlined), { key: 0 })) : (openBlock(), createBlock(unref(CheckOutlined), { key: 1 }))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 6);
    };
  }
});
const ConfigWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-c5dcf0b5"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "SelectFields",
  props: {
    tableFields: { type: Object, require: true, default: void 0 },
    fields: { type: Object, require: true, default: void 0 },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["fieldChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const checkFields = ref([]);
    const allCheck = ref(false);
    const { prefixCls } = useDesign("select-fields");
    const containerHeight = computed(
      () => {
        var _a, _b;
        return props.tableFields ? ((_a = props.tableFields) == null ? void 0 : _a.length) < 10 ? ((_b = props.tableFields) == null ? void 0 : _b.length) * 30 : 300 : 30;
      }
    );
    const isShow = ref(false);
    watch(
      () => props.tableFields,
      (value) => {
        var _a;
        if (value && value.length > 0) {
          setFields(props.fields || []);
          allCheck.value = value.length === ((_a = props.fields) == null ? void 0 : _a.length);
        }
      },
      {
        immediate: true
      }
    );
    function setFields(value) {
      var _a;
      checkFields.value = ((_a = props.tableFields) == null ? void 0 : _a.map((item) => ({
        checked: !!(value == null ? void 0 : value.find((field) => field.colName === item.colName)),
        ...item
      }))) || [];
    }
    let isChange = false;
    const visibleChange = (show) => {
      isShow.value = show;
      if (!show && isChange) {
        emit(
          "fieldChange",
          checkFields.value.filter((item) => item.checked).map((item) => ({
            colName: item.colName,
            fieldName: item.fieldName,
            comment: item.comment,
            expression: item.expression,
            dataType: item.dataType,
            tableAlias: item.tableAlias,
            targetType: item.targetType
          }))
        );
        isChange = false;
      }
    };
    const checkAll = (e) => {
      allCheck.value = e.target.checked;
      checkFields.value.forEach((item) => item.checked = allCheck.value);
      isChange = true;
    };
    const checkChange = (e) => {
      const field = checkFields.value.find((item) => item.colName === e.target.id);
      if (field) {
        field.checked = !field.checked;
        isChange = true;
      }
      allCheck.value = !checkFields.value.some((item) => !item.checked);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        trigger: ["click"],
        onOpenChange: visibleChange,
        placement: "bottom",
        arrow: { pointAtCenter: true }
      }, {
        overlay: withCtx(() => [
          createVNode(unref(Menu), null, {
            default: withCtx(() => [
              createVNode(unref(Menu).Item, {
                disabled: "",
                style: { "padding": "0", "cursor": "default" }
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock("div", {
                    class: normalizeClass(`${unref(prefixCls)}-check-wrapper`),
                    key: `all_check_${allCheck.value}`
                  }, [
                    createVNode(unref(Checkbox), {
                      checked: allCheck.value,
                      onChange: checkAll,
                      disabled: __props.queryMode
                    }, {
                      default: withCtx(() => _cache[0] || (_cache[0] = [
                        createTextVNode("全选")
                      ])),
                      _: 1
                    }, 8, ["checked", "disabled"])
                  ], 2)),
                  createVNode(unref(Divider), { style: { "margin": "4px 0" } }),
                  createVNode(unref(ScrollContainer), {
                    style: normalizeStyle({ height: `${containerHeight.value}px` })
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(checkFields.value, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: item.colName + item.checked,
                          class: normalizeClass(`${unref(prefixCls)}-check-wrapper`)
                        }, [
                          createVNode(unref(Checkbox), {
                            checked: item.checked,
                            id: item.colName,
                            onChange: checkChange,
                            disabled: __props.queryMode
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.colName), 1)
                            ]),
                            _: 2
                          }, 1032, ["checked", "id", "disabled"])
                        ], 2);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["style"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(Button), { type: "primary" }, {
            default: withCtx(() => [
              _cache[1] || (_cache[1] = createTextVNode(" 字段 ")),
              createVNode(unref(Icon), {
                icon: isShow.value ? "ant-design:caret-up-outlined" : "ant-design:caret-down-outlined"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const SelectFields = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-7f8e0ebf"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "TableFields",
  props: {
    sqlQuery: { type: Object, require: true, default: void 0 },
    configMitt: { type: Object, default: void 0 },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["fieldChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const AInput = Input;
    const AInputGroup = Input.Group;
    const { prefixCls } = useDesign("table-fields");
    const tableFields = ref([]);
    const apiStore = useApiStore();
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.sourceTable;
      },
      (val) => {
        if (!val) return;
        if (val === apiStore.getTableName) {
          apiStore.addTableFieldsMap(val, apiStore.getTableFields);
          tableFields.value = apiStore.getTableFields;
        } else {
          getInnerFields(props.sqlQuery).then((res) => {
            apiStore.addTableFieldsMap(val, res);
            tableFields.value = res;
          });
        }
      },
      { immediate: true }
    );
    onMounted(() => {
      var _a, _b;
      if (((_a = props.sqlQuery) == null ? void 0 : _a.sqlQuery) && ((_b = props.sqlQuery) == null ? void 0 : _b.sourceTable)) {
        getInnerFields(props.sqlQuery).then((res) => {
          var _a2, _b2, _c, _d, _e, _f, _g;
          if ((_a2 = props.sqlQuery) == null ? void 0 : _a2.sourceTable) {
            apiStore.addTableFieldsMap((_b2 = props.sqlQuery) == null ? void 0 : _b2.sourceTable, res);
            tableFields.value = apiStore.getTableFieldsMap.get((_c = props.sqlQuery) == null ? void 0 : _c.sourceTable) || [];
            const filterFields = (_e = (_d = props.sqlQuery) == null ? void 0 : _d.fields) == null ? void 0 : _e.filter(
              (item) => {
                var _a3;
                return (_a3 = tableFields.value) == null ? void 0 : _a3.find((field) => field.colName === item.colName);
              }
            );
            if ((filterFields == null ? void 0 : filterFields.length) !== ((_g = (_f = props.sqlQuery) == null ? void 0 : _f.fields) == null ? void 0 : _g.length)) {
              emit("fieldChange", filterFields);
            }
          }
        });
      }
    });
    function executeSql(key) {
      queryDataEvent(
        props.configMitt,
        {
          ...props.sqlQuery,
          aggregates: [],
          groups: [],
          joins: [],
          customColumns: [],
          filters: [],
          orders: [],
          limit: void 0
        },
        key
      );
    }
    function fieldChange(value) {
      emit("fieldChange", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ConfigWrapper, {
        iconfont: "icon-mfish-table",
        title: "数据源",
        "allow-delete": false,
        onExecute: executeSql,
        "query-mode": __props.queryMode
      }, {
        config: withCtx(() => [
          createVNode(unref(AInputGroup), {
            class: normalizeClass(unref(prefixCls)),
            compact: ""
          }, {
            default: withCtx(() => {
              var _a, _b;
              return [
                createVNode(unref(AInput), {
                  value: (_a = __props.sqlQuery) == null ? void 0 : _a.sourceTable,
                  disabled: ""
                }, null, 8, ["value"]),
                createVNode(SelectFields, mergeProps(_ctx.$attrs, {
                  "table-fields": tableFields.value,
                  fields: (_b = props.sqlQuery) == null ? void 0 : _b.fields,
                  onFieldChange: fieldChange,
                  "query-mode": __props.queryMode
                }), null, 16, ["table-fields", "fields", "query-mode"])
              ];
            }),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["query-mode"]);
    };
  }
});
const TableFields = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-5708821c"]]);
const buildTableFields = async (index2, sqlQuery) => {
  var _a, _b;
  const apiStore = useApiStore();
  const tables = [];
  tables.push({ value: sqlQuery.sourceTable, label: sqlQuery.sourceTable, realValue: sqlQuery.sourceTable });
  const count = index2 === void 0 && ((_a = sqlQuery.joins) == null ? void 0 : _a.length) ? (_b = sqlQuery.joins) == null ? void 0 : _b.length : index2 || 0;
  for (let i = 0; i < count; i++) {
    if ((sqlQuery == null ? void 0 : sqlQuery.joins) && (sqlQuery == null ? void 0 : sqlQuery.joins[i].tableAlias)) {
      tables.push({
        value: sqlQuery.joins[i].tableAlias,
        label: sqlQuery.joins[i].tableAlias,
        realValue: sqlQuery.joins[i].table || ""
      });
    }
  }
  return tables == null ? void 0 : tables.map((item) => {
    var _a2;
    return {
      ...item,
      children: (_a2 = apiStore.getTableFieldsMap.get(item.realValue)) == null ? void 0 : _a2.map((field) => ({ value: field.colName, label: field.colName, realValue: { ...field } }))
    };
  });
};
const getTableAlias = (i, alias, set) => {
  while (true) {
    if (!set.has(alias)) {
      return alias;
    }
    if (alias.endsWith(`_${i}`)) {
      alias = alias.slice(0, Math.max(0, alias.length - `${i}`.length - 1));
    }
    return getTableAlias(++i, `${alias}_${i}`, set);
  }
};
const joinComplete = (join) => {
  var _a, _b, _c, _d;
  return (join == null ? void 0 : join.table) && ((_b = (_a = join.condition) == null ? void 0 : _a.field) == null ? void 0 : _b.colName) && ((_d = (_c = join.condition) == null ? void 0 : _c.joinedField) == null ? void 0 : _d.colName);
};
const addJoin = (joins) => {
  const join = {
    fields: [],
    table: "",
    tableAlias: "",
    condition: {
      field: {
        tableAlias: "结果集"
      },
      operation: "=",
      joinedField: {}
    },
    type: "left"
  };
  if (joins) {
    joins.push(join);
  }
};
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "ConfigButton",
  props: {
    level: { type: Number, default: 1 },
    icon: { type: String, default: void 0 },
    iconfont: { type: String, default: void 0 },
    title: { type: String, default: "按钮" }
  },
  setup(__props) {
    const props = __props;
    const { prefixCls } = useDesign("config-button");
    const themeColor = useRootSetting().getThemeColor;
    const apiStore = useApiStore();
    const iconSize = computed(() => {
      if (props.level < apiStore.getLevel) return 12;
      return 14;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), mergeProps(_ctx.$attrs, {
        size: "small",
        shape: "round",
        class: unref(prefixCls),
        style: { "--hover-color--": unref(themeColor) },
        type: "link"
      }), {
        icon: withCtx(() => [
          __props.iconfont ? (openBlock(), createBlock(unref(Icon), {
            key: 0,
            icon: `iconfont:${__props.iconfont}`,
            style: { "margin-right": "8px" },
            size: iconSize.value
          }, null, 8, ["icon", "size"])) : (openBlock(), createBlock(unref(Icon), {
            key: 1,
            icon: __props.icon,
            size: iconSize.value
          }, null, 8, ["icon", "size"]))
        ]),
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(__props.level < unref(apiStore).getLevel ? "show-title" : ""),
            style: normalizeStyle({ fontSize: `${iconSize.value}px` })
          }, toDisplayString(__props.title), 7)
        ]),
        _: 1
      }, 16, ["class", "style"]);
    };
  }
});
const ConfigButton = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-749209b7"]]);
const _hoisted_1$n = { class: "condition" };
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "TableJoins",
  props: {
    sqlQuery: { type: Object, require: true },
    level: { type: Number, default: 1 },
    configMitt: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["joinChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const AMenuItem = Menu.Item;
    const AInput = Input;
    const { prefixCls } = useDesign("table-joins");
    const apiStore = useApiStore();
    const joins = ref([]);
    const firstFields = ref([]);
    const secondFields = ref([]);
    const iconColor = useRootSetting().getThemeColor;
    const joinTypes = { left: "左联", inner: "内联", right: "右联", full: "全联" };
    const showJoinButton = computed(() => {
      var _a;
      if (apiStore.getSourceType === 1 || props.queryMode) {
        return false;
      }
      if (props.sqlQuery && ((_a = props.sqlQuery) == null ? void 0 : _a.joins)) {
        for (const join of props.sqlQuery.joins) {
          if (!joinComplete(join)) return false;
        }
      }
      return isNeedNest(props.sqlQuery, props.level);
    });
    function allFields(key) {
      if (!key) return [];
      if (!apiStore.getTableFieldsMap.has(key)) {
        return [];
      }
      return apiStore.getTableFieldsMap.get(key);
    }
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.joins;
      },
      (val) => {
        if (!val) {
          joins.value = [];
          joinFieldsBind();
          return;
        }
        joins.value = val;
        joinFieldsBind();
      },
      {
        immediate: true
      }
    );
    watch(
      () => {
        var _a;
        return apiStore.getTableFieldsByName((_a = props.sqlQuery) == null ? void 0 : _a.sourceTable);
      },
      () => {
        var _a;
        if ((_a = props.sqlQuery) == null ? void 0 : _a.sourceTable) {
          joinFieldsBind();
        }
      },
      {
        immediate: true
      }
    );
    const joinTables = computed(() => {
      if (apiStore.getTableList.length > 0) {
        const data = [];
        apiStore.getTableList.forEach((r) => {
          data.push({
            value: r.tableName,
            label: r.tableName + (r.tableComment ? `[${r.tableComment}]` : "")
          });
        });
        return data;
      }
      return [];
    });
    const getFirstFields = (index2) => {
      return firstFields.value.length > index2 ? firstFields.value[index2] : [];
    };
    const getJoinTableValue = (index2) => {
      var _a, _b;
      if ((_a = props.sqlQuery) == null ? void 0 : _a.joins) {
        return (_b = props.sqlQuery) == null ? void 0 : _b.joins[index2].table;
      }
    };
    const getFirstValue = (index2) => {
      var _a, _b, _c, _d;
      if (!((_a = props.sqlQuery) == null ? void 0 : _a.joins)) return [];
      const field = (_d = (_c = (_b = props.sqlQuery) == null ? void 0 : _b.joins[index2]) == null ? void 0 : _c.condition) == null ? void 0 : _d.field;
      if ((field == null ? void 0 : field.tableAlias) && (field == null ? void 0 : field.fieldName)) {
        const { tableAlias: tableAlias2, fieldName } = field;
        if (tableAlias2 && fieldName) {
          return [tableAlias2, fieldName];
        }
      }
      return [];
    };
    const firstDisplay = (index2, labels) => {
      const field = getFirstFields(index2).find((field2) => field2.value === labels[0]);
      if (field) {
        return labels[1];
      }
      return "";
    };
    const getSecondFields = (index2) => {
      return secondFields.value.length > index2 ? toRaw(secondFields.value[index2]) : [];
    };
    const getSecondValue = (index2) => {
      var _a, _b, _c, _d;
      if (!((_a = props.sqlQuery) == null ? void 0 : _a.joins)) return [];
      const field = (_d = (_c = (_b = props.sqlQuery) == null ? void 0 : _b.joins[index2]) == null ? void 0 : _c.condition) == null ? void 0 : _d.joinedField;
      if (field == null ? void 0 : field.fieldName) {
        return [field.fieldName];
      }
      return [];
    };
    function addJoins() {
      addJoin(joins.value);
    }
    function handleMenuClick(e, join) {
      join.type = e.key;
    }
    function joinTableSelect(tableNames, join) {
      if (tableNames.length <= 0) return;
      const tableName = tableNames[0];
      if (join.table === tableName) return;
      join.table = tableName;
      join.tableAlias = tableName;
      const setJoinFields = (fields) => {
        join.fields = fields;
        if (join.condition) {
          join.condition.joinedField = {};
        }
      };
      if (apiStore.getTableFieldsMap.has(tableName)) {
        setJoinFields(apiStore.getTableFieldsMap.get(tableName));
        joinFieldsBind();
        return;
      }
      getSourceHeaders({
        sourceId: useApiStore().getSourceId,
        tableName: join.table,
        sourceType: 0
      }).then((res) => {
        apiStore.addTableFieldsMap(tableName, res);
        setJoinFields(res);
      }).finally(() => joinFieldsBind());
    }
    function fieldChange(data, index2) {
      var _a;
      if (((_a = props.sqlQuery) == null ? void 0 : _a.joins) && props.sqlQuery.joins.length > 0) {
        joins.value[index2].fields = data;
      }
      joinChange(index2);
    }
    function joinChange(index2) {
      var _a, _b, _c;
      if (((_a = props.sqlQuery) == null ? void 0 : _a.joins) && ((_b = props.sqlQuery) == null ? void 0 : _b.joins.length) > 0) {
        const join = (_c = props.sqlQuery) == null ? void 0 : _c.joins[index2];
        if (joinComplete(join)) {
          emit("joinChange", [...joins.value]);
        }
      }
    }
    function buildTableAlias(index2, tableName) {
      var _a, _b, _c, _d, _e, _f;
      const joinTables2 = (_b = (_a = props.sqlQuery) == null ? void 0 : _a.joins) == null ? void 0 : _b.map((join) => join.tableAlias);
      joinTables2 == null ? void 0 : joinTables2.splice(index2);
      if ((_c = props.sqlQuery) == null ? void 0 : _c.sourceTable) {
        joinTables2.unshift((_d = props.sqlQuery) == null ? void 0 : _d.sourceTable);
      }
      const set = new Set(joinTables2);
      const tableAlias2 = getTableAlias(0, tableName, set);
      if (((_e = props.sqlQuery) == null ? void 0 : _e.joins) && ((_f = props.sqlQuery) == null ? void 0 : _f.joins.length) >= index2) {
        joins.value[index2].tableAlias = tableAlias2;
      }
      return tableAlias2;
    }
    function joinFieldsBind() {
      var _a;
      const firstFieldsBind = async (index2) => {
        if (!props.sqlQuery) return;
        const fields = await buildTableFields(index2, props.sqlQuery);
        if (fields) {
          firstFields == null ? void 0 : firstFields.value.splice(index2, 1, fields);
        }
      };
      const secondFieldsBind = (index2) => {
        var _a2;
        const join = joins.value[index2];
        if (!join) return;
        if (join.table) {
          const fields = (_a2 = apiStore.getTableFieldsMap.get(join.table)) == null ? void 0 : _a2.map((field) => ({ value: field.colName, label: field.colName, realValue: { ...field } }));
          if (fields) {
            secondFields == null ? void 0 : secondFields.value.splice(index2, 1, fields);
          }
          return;
        }
        secondFields == null ? void 0 : secondFields.value.splice(index2, 1, []);
      };
      for (let i = 0; i < ((_a = joins == null ? void 0 : joins.value) == null ? void 0 : _a.length); i++) {
        firstFieldsBind(i).then(() => {
          var _a2, _b;
          const condition = joins.value[i].condition;
          if (firstFields.value[0][0].value === (condition == null ? void 0 : condition.field.tableAlias) && (condition == null ? void 0 : condition.field) && !((_a2 = firstFields.value[0][0].children) == null ? void 0 : _a2.some((item) => {
            var _a3;
            return item.value === ((_a3 = joins.value[i].condition) == null ? void 0 : _a3.field.colName);
          }))) {
            condition.field = { tableAlias: (_b = joins.value[i].condition) == null ? void 0 : _b.field.tableAlias };
          }
        });
        secondFieldsBind(i);
      }
    }
    function firstFieldsSelect(option, index2, join) {
      if (join.condition) {
        join.condition.field = option[1].realValue;
        join.condition.field.tableAlias = option[0].value;
        joinChange(index2);
      }
    }
    function secondFieldsSelect(option, index2, join) {
      if (join.condition) {
        join.condition.joinedField = option.realValue;
        joinChange(index2);
      }
    }
    function deleteJoin(index2) {
      joins == null ? void 0 : joins.value.splice(index2, 1);
      emit("joinChange", [...joins.value]);
    }
    function executeSql(key, index2) {
      queryDataEvent(
        props.configMitt,
        {
          ...props.sqlQuery,
          joins: joins.value.slice(0, index2 + 1),
          aggregates: [],
          groups: [],
          customColumns: [],
          filters: [],
          orders: [],
          limit: void 0
        },
        key
      );
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_AInputGroup = resolveComponent("AInputGroup");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList((_a = __props.sqlQuery) == null ? void 0 : _a.joins, (join, index2) => {
          return openBlock(), createBlock(ConfigWrapper, {
            iconfont: "icon-mfish-join",
            title: "关联",
            key: index2,
            "query-mode": __props.queryMode,
            onDeleteConfig: ($event) => deleteJoin(index2),
            onExecute: ($event) => executeSql($event, index2)
          }, {
            config: withCtx(() => {
              var _a2, _b, _c;
              return [
                index2 === 0 ? (openBlock(), createBlock(unref(AInput), {
                  key: 0,
                  class: "left-table",
                  value: (_a2 = __props.sqlQuery) == null ? void 0 : _a2.sourceTable,
                  disabled: ""
                }, null, 8, ["value"])) : (openBlock(), createBlock(unref(AInput), {
                  key: 1,
                  class: "left-table",
                  value: (_b = join.condition) == null ? void 0 : _b.field.tableAlias,
                  disabled: ""
                }, null, 8, ["value"])),
                createVNode(unref(Dropdown), {
                  class: "condition",
                  placement: "bottom",
                  arrow: { pointAtCenter: true },
                  disabled: __props.queryMode
                }, {
                  overlay: withCtx(() => [
                    createVNode(unref(Menu), {
                      onClick: ($event) => handleMenuClick($event, join),
                      "selected-keys": [join.type]
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(joinTypes), (item) => {
                          return openBlock(), createBlock(unref(AMenuItem), { key: item }, {
                            default: withCtx(() => [
                              createElementVNode("div", null, [
                                createTextVNode(toDisplayString(joinTypes[item]) + " ", 1),
                                createVNode(unref(Icon), {
                                  icon: `iconfont:icon-mfish-${item}-join`,
                                  color: unref(iconColor),
                                  size: 14
                                }, null, 8, ["icon", "color"])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["onClick", "selected-keys"])
                  ]),
                  default: withCtx(() => [
                    createElementVNode("a", {
                      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                      }, ["prevent"]))
                    }, [
                      createTextVNode(toDisplayString(joinTypes[join.type]) + " ", 1),
                      createVNode(unref(Icon), {
                        icon: `iconfont:icon-mfish-${join.type}-join`,
                        color: unref(iconColor),
                        size: 14
                      }, null, 8, ["icon", "color"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["disabled"]),
                createVNode(_component_AInputGroup, {
                  class: "right-table",
                  compact: ""
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Cascader), {
                      disabled: __props.queryMode,
                      "show-search": "",
                      "allow-clear": false,
                      class: "input-select",
                      "option-filter-prop": "label",
                      placeholder: "请输入关联表名称",
                      value: [getJoinTableValue(index2) || ""],
                      options: joinTables.value,
                      onChange: ($event) => joinTableSelect($event, join)
                    }, {
                      displayRender: withCtx(({ selectedOptions }) => {
                        var _a3;
                        return [
                          createVNode(unref(Tooltip), {
                            title: buildTableAlias(index2, (_a3 = selectedOptions[0]) == null ? void 0 : _a3.value)
                          }, {
                            default: withCtx(() => {
                              var _a4;
                              return [
                                createTextVNode(toDisplayString(buildTableAlias(index2, (_a4 = selectedOptions[0]) == null ? void 0 : _a4.value)), 1)
                              ];
                            }),
                            _: 2
                          }, 1032, ["title"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["disabled", "value", "options", "onChange"]),
                    createVNode(SelectFields, {
                      "query-mode": __props.queryMode,
                      "table-fields": allFields(join.table),
                      fields: join.fields,
                      onFieldChange: ($event) => fieldChange($event, index2)
                    }, null, 8, ["query-mode", "table-fields", "fields", "onFieldChange"])
                  ]),
                  _: 2
                }, 1024),
                createElementVNode("span", {
                  class: "condition",
                  style: normalizeStyle({ color: unref(iconColor) })
                }, "当", 4),
                createVNode(unref(Cascader), {
                  disabled: __props.queryMode,
                  "show-search": "",
                  "allow-clear": false,
                  class: "input-select",
                  "option-filter-prop": "label",
                  options: getFirstFields(index2),
                  value: getFirstValue(index2),
                  placeholder: `${(_c = __props.sqlQuery) == null ? void 0 : _c.sourceTable}字段`,
                  onChange: (_, option) => firstFieldsSelect(option, index2, join)
                }, {
                  displayRender: withCtx(({ labels }) => [
                    createVNode(unref(Tooltip), {
                      title: firstDisplay(index2, labels)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(firstDisplay(index2, labels)), 1)
                      ]),
                      _: 2
                    }, 1032, ["title"])
                  ]),
                  _: 2
                }, 1032, ["disabled", "options", "value", "placeholder", "onChange"]),
                createElementVNode("div", _hoisted_1$n, [
                  createVNode(unref(Icon), {
                    icon: "iconfont:icon-mfish-equals",
                    color: unref(iconColor),
                    size: 14
                  }, null, 8, ["color"])
                ]),
                createVNode(unref(Select), {
                  disabled: __props.queryMode,
                  "show-search": "",
                  "allow-clear": false,
                  class: "input-select",
                  "option-filter-prop": "label",
                  value: getSecondValue(index2),
                  options: getSecondFields(index2),
                  placeholder: `${join.tableAlias}字段`,
                  onSelect: (_, option) => secondFieldsSelect(option, index2, join)
                }, null, 8, ["disabled", "value", "options", "placeholder", "onSelect"])
              ];
            }),
            _: 2
          }, 1032, ["query-mode", "onDeleteConfig", "onExecute"]);
        }), 128)),
        showJoinButton.value ? (openBlock(), createBlock(ConfigButton, {
          key: 0,
          class: "config-button",
          title: "关联",
          iconfont: "icon-mfish-join",
          level: 0,
          onClick: addJoins
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const TableJoins = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-1a605ef6"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "TableLimit",
  props: {
    sqlQuery: { type: Object, require: true },
    configMitt: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["limitChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const curLimit = ref(1e3);
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.limit;
      },
      (val) => {
        if (val) {
          curLimit.value = val;
        }
      },
      { immediate: true }
    );
    function valueChange(value) {
      curLimit.value = value;
    }
    function limitChange() {
      emit("limitChange", unref(curLimit));
    }
    function deleteLimit() {
      emit("limitChange");
    }
    function executeSql(key) {
      queryDataEvent(props.configMitt, { ...props.sqlQuery, limit: curLimit.value }, key);
    }
    return (_ctx, _cache) => {
      var _a;
      return ((_a = __props.sqlQuery) == null ? void 0 : _a.limit) !== void 0 ? (openBlock(), createBlock(ConfigWrapper, {
        key: 0,
        "query-mode": __props.queryMode,
        icon: "ant-design:column-height-outlined",
        title: "行数",
        onDeleteConfig: deleteLimit,
        onExecute: executeSql
      }, {
        config: withCtx(() => [
          createVNode(unref(InputNumber), {
            disabled: __props.queryMode,
            "default-value": curLimit.value,
            "addon-after": "行",
            step: "10",
            onChange: valueChange,
            onPressEnter: limitChange,
            onBlur: limitChange
          }, null, 8, ["disabled", "default-value"])
        ]),
        _: 1
      }, 8, ["query-mode"])) : createCommentVNode("", true);
    };
  }
});
const apiParamsFormSchema = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "name",
    label: "参数名称",
    component: "Input",
    dynamicRules: () => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!/^[a-z]\w*$/i.test(value)) {
              return Promise.reject("错误：参数格式不正确！必须字符开头，不允许包含特殊字符!");
            }
            return Promise.resolve();
          },
          trigger: "blur"
        }
      ];
    }
  },
  {
    field: "required",
    label: "是否必须",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ]
    },
    required: true
  },
  {
    field: "defaultValue",
    label: "默认值",
    component: "Input"
  },
  {
    field: "remark",
    label: "参数描述",
    component: "InputTextArea"
  }
];
const _sfc_main$N = {
  name: "ApiParamsModal",
  components: { BasicModal, BasicForm },
  emits: ["addSuccess", "updateSuccess", "register", "variableChange"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      name: "model_form_item",
      labelWidth: 100,
      baseColProps: { span: 24 },
      schemas: apiParamsFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const index2 = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "600px" });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        index2.value = data.index;
        setFieldsValue({
          ...data.param
        }).then();
      }
    });
    const apiStore = useApiStore();
    const getTitle = computed(() => unref(isUpdate) ? "编辑参数" : "新增参数");
    const { createMessage } = useMessage();
    async function handleSubmit() {
      const validateName = (name2, params) => {
        if (params.some((val) => val.name === name2)) {
          const error = "错误：参数名称不允许重复!";
          createMessage.error(error);
          throw new Error(error);
        }
      };
      try {
        const values = await validate();
        if (unref(isUpdate)) {
          const vars = [...apiStore.getVariables];
          vars.splice(index2.value, 1);
          validateName(values.name, vars);
          emit("updateSuccess", index2.value, values);
        } else {
          validateName(values.name, apiStore.getVariables);
          emit("addSuccess", values);
        }
        emit("variableChange", values);
        closeModal();
      } catch (error) {
        console.log(error);
      }
    }
    return {
      registerModal,
      registerForm,
      getTitle,
      handleSubmit
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps(_ctx.$attrs, {
    onRegister: $setup.registerModal,
    title: $setup.getTitle,
    onOk: $setup.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_BasicForm, {
        onRegister: $setup.registerForm,
        onSubmit: $setup.handleSubmit
      }, null, 8, ["onRegister", "onSubmit"])
    ]),
    _: 1
  }, 16, ["onRegister", "title", "onOk"]);
}
const ApiParamsModal = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render]]);
const _hoisted_1$m = { key: 0 };
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "FilterVariable",
  props: {
    value: { type: String },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["variableChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ASelectOption = Select.Option;
    const themeColor = useRootSetting().getThemeColor;
    const { prefixCls } = useDesign("filter-variable");
    const [registerModal, { openModal }] = useModal();
    const apiStore = useApiStore();
    const selectValue = ref();
    watch(
      () => props.value,
      (val) => {
        selectValue.value = val;
      },
      { immediate: true }
    );
    const VNodes = (_, { attrs }) => {
      return attrs.vnodes;
    };
    function addVariable() {
      openModal(true, {
        isUpdate: false
      });
    }
    function updateVariable(index2, param) {
      openModal(true, {
        index: index2,
        param,
        isUpdate: true
      });
    }
    function deleteVariable(index2) {
      apiStore.getVariables.splice(index2, 1);
      if (!apiStore.getVariables.some((val) => val.name === selectValue.value)) {
        selectValue.value = "";
      }
    }
    function addSuccess(item) {
      apiStore.getVariables.push(item);
    }
    function updateSuccess(index2, item) {
      apiStore.getVariables[index2] = item;
    }
    function selectChange(value) {
      emit("variableChange", value);
    }
    function variableChange(item) {
      selectValue.value = item.name;
      emit("variableChange", item.name);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Select), {
          value: selectValue.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectValue.value = $event),
          onChange: selectChange,
          disabled: __props.queryMode
        }, {
          dropdownRender: withCtx(({ menuNode }) => [
            createVNode(VNodes, { vnodes: menuNode }, null, 8, ["vnodes"]),
            createVNode(unref(Divider), { style: { "margin": "4px 0" } }),
            createElementVNode("div", {
              style: { "padding": "4px 8px", "cursor": "pointer" },
              onClick: addVariable
            }, [
              createVNode(unref(Icon), {
                icon: "ant-design:plus-outlined",
                color: unref(themeColor)
              }, null, 8, ["color"]),
              createElementVNode("span", {
                style: normalizeStyle(`color:${unref(themeColor)};margin-left:6px`)
              }, "增加变量参数", 4)
            ])
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(apiStore).getVariables, (item, index2) => {
              return openBlock(), createBlock(unref(ASelectOption), {
                label: item.name,
                value: item.name,
                key: index2
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    class: normalizeClass(`${unref(prefixCls)}-select-option`)
                  }, [
                    createTextVNode(toDisplayString(item.name) + " ", 1),
                    createElementVNode("div", null, toDisplayString(item.remark), 1),
                    !__props.queryMode ? (openBlock(), createElementBlock("div", _hoisted_1$m, [
                      createVNode(unref(Icon), {
                        icon: "ant-design:edit-outlined",
                        color: unref(themeColor),
                        onClick: withModifiers(($event) => updateVariable(index2, item), ["stop"])
                      }, null, 8, ["color", "onClick"]),
                      createVNode(unref(Divider), { type: "vertical" }),
                      createVNode(unref(Icon), {
                        icon: "ant-design:delete-outlined",
                        color: unref(themeColor),
                        onClick: withModifiers(($event) => deleteVariable(index2), ["stop"])
                      }, null, 8, ["color", "onClick"])
                    ])) : createCommentVNode("", true)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["label", "value"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["value", "disabled"]),
        createVNode(ApiParamsModal, {
          onRegister: unref(registerModal),
          onAddSuccess: addSuccess,
          onUpdateSuccess: updateSuccess,
          onVariableChange: variableChange
        }, null, 8, ["onRegister"])
      ], 64);
    };
  }
});
const FilterVariable = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-f526817e"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "TableField",
  props: {
    tableFields: { type: Object },
    value: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const valueField = ref({ dataType: "STRING" });
    const displayField = ref([]);
    const themeColor = useRootSetting().getThemeColor;
    const fieldType = ref();
    watch(
      () => props.value,
      (val) => {
        if (val) {
          if (val.tableAlias && val.colName) {
            valueField.value = val;
            displayField.value = [val.tableAlias, val.colName];
            setFieldType(val.dataType);
          } else {
            displayField.value = [];
            valueField.value = { dataType: "STRING" };
          }
        }
      },
      { immediate: true }
    );
    function fieldsSelect(option) {
      var _a;
      if (option && option.length === 2) {
        const tableAlias2 = option[0].value;
        const field = option[1].realValue;
        displayField.value = [tableAlias2, option[1].value];
        valueField.value = field;
        if (valueField.value) {
          valueField.value.tableAlias = tableAlias2;
        }
        setFieldType((_a = valueField.value) == null ? void 0 : _a.dataType);
        emit("change", { ...valueField.value });
      }
    }
    function setFieldType(dataType) {
      fieldType.value = getFieldIcon(dataType);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Cascader), {
        disabled: __props.queryMode,
        "show-search": "",
        "allow-clear": false,
        "option-filter-prop": "label",
        options: __props.tableFields,
        value: displayField.value,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => displayField.value = $event),
        placeholder: "选择字段",
        onChange: _cache[1] || (_cache[1] = (_, option) => fieldsSelect(option))
      }, {
        displayRender: withCtx(({ labels }) => [
          createVNode(unref(Tooltip), {
            title: `${labels[0]} / ${labels[1]}`
          }, {
            default: withCtx(() => [
              createVNode(unref(Icon), {
                icon: fieldType.value,
                color: unref(themeColor)
              }, null, 8, ["icon", "color"]),
              createTextVNode(" " + toDisplayString(`${labels[0]} / ${labels[1]}`), 1)
            ]),
            _: 2
          }, 1032, ["title"])
        ]),
        _: 1
      }, 8, ["disabled", "options", "value"]);
    };
  }
});
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "FilterValue",
  props: {
    fieldType: { type: String, default: "STRING" },
    valueType: { type: String, default: "0" },
    operator: { type: String, default: "" },
    tableFields: {
      type: Array,
      default: () => []
    },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["typeChange", "variableChange", "fieldChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const AInput = Input;
    const ARadioGroup = Radio.Group;
    const ARadioButton = Radio.Button;
    const AFormItemRest = Form.ItemRest;
    const { prefixCls } = useDesign("filter-value");
    const type = ref("0");
    const apiStore = useApiStore();
    watch(
      () => props.valueType,
      (val) => {
        if (val) {
          type.value = val;
        }
      },
      { immediate: true }
    );
    function typeChange() {
      emit("typeChange", type.value);
    }
    function variableChange(name2) {
      const variable = apiStore.getVariables.find((val) => val.name === name2);
      if (variable) {
        emit("variableChange", name2, variable.required);
      }
    }
    function fieldChange(field) {
      if (field.tableAlias && field.colName) {
        emit("fieldChange", field);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(unref(ARadioGroup), {
          size: "small",
          value: type.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => type.value = $event),
          "button-style": "solid",
          onChange: typeChange,
          disabled: __props.queryMode
        }, {
          default: withCtx(() => [
            createVNode(unref(ARadioButton), { value: "0" }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("常量")
              ])),
              _: 1
            }),
            createVNode(unref(ARadioButton), { value: "1" }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("变量")
              ])),
              _: 1
            }),
            createVNode(unref(ARadioButton), { value: "2" }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("字段")
              ])),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value", "disabled"]),
        type.value === "0" ? (openBlock(), createBlock(unref(AFormItemRest), { key: 0 }, {
          default: withCtx(() => [
            __props.fieldType === "NUMBER" ? (openBlock(), createBlock(unref(InputNumber), mergeProps({ key: 0 }, _ctx.$attrs, { disabled: __props.queryMode }), null, 16, ["disabled"])) : __props.fieldType === "DATE" && __props.operator !== "between" ? (openBlock(), createBlock(unref(DatePicker), mergeProps({
              key: 1,
              disabled: __props.queryMode
            }, _ctx.$attrs, {
              "show-time": true,
              "value-format": "YYYY-MM-DD HH:mm:ss"
            }), null, 16, ["disabled"])) : __props.fieldType === "DATE" && __props.operator === "between" ? (openBlock(), createBlock(unref(RangePicker), mergeProps({
              key: 2,
              disabled: __props.queryMode
            }, _ctx.$attrs, {
              "show-time": true,
              placeholder: ["开始时间", "结束时间"],
              "value-format": "YYYY-MM-DD HH:mm:ss"
            }), null, 16, ["disabled"])) : (openBlock(), createBlock(unref(AInput), mergeProps({ key: 3 }, _ctx.$attrs, { disabled: __props.queryMode }), null, 16, ["disabled"]))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        type.value === "1" ? (openBlock(), createBlock(unref(AFormItemRest), { key: 1 }, {
          default: withCtx(() => [
            createVNode(FilterVariable, {
              "query-mode": __props.queryMode,
              value: _ctx.$attrs.value,
              onVariableChange: variableChange
            }, null, 8, ["query-mode", "value"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        type.value === "2" ? (openBlock(), createBlock(unref(AFormItemRest), { key: 2 }, {
          default: withCtx(() => [
            createVNode(_sfc_main$L, {
              "query-mode": __props.queryMode,
              "table-fields": __props.tableFields,
              value: _ctx.$attrs.value,
              onChange: fieldChange
            }, null, 8, ["query-mode", "table-fields", "value"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const FilterValue = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-d05230c2"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "FilterModal",
  props: {
    queryMode: { type: Boolean, default: false }
  },
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const AFormItem = Form.Item;
    const formState = reactive({
      field: void 0,
      operator: "",
      value: void 0
    });
    const formRef = ref();
    const tableFields = ref([]);
    const filter = reactive({
      field: { dataType: "STRING" },
      type: "1",
      valueType: "0",
      required: true
    });
    const operator = ref([]);
    const showValue = ref(true);
    const filterIndex = ref();
    const operators = {
      STRING: [
        { label: "是", value: "eq" },
        { label: "不是", value: "ne" },
        { label: "包含", value: "like" },
        { label: "不包含", value: "notLike" },
        { label: "以开始", value: "likeLeft" },
        { label: "以结束", value: "likeRight" },
        { label: "为空", value: "isNull" },
        { label: "不为空", value: "isNotNull" }
      ],
      NUMBER: [
        { label: "等于", value: "eq" },
        { label: "不等于", value: "ne" },
        { label: "大于", value: "gt" },
        { label: "大于等于", value: "ge" },
        { label: "小于", value: "lt" },
        { label: "小于等于", value: "le" },
        { label: "包含", value: "like" },
        { label: "不包含", value: "notLike" },
        { label: "以开始", value: "likeLeft" },
        { label: "以结束", value: "likeRight" },
        { label: "为空", value: "isNull" },
        { label: "不为空", value: "isNotNull" }
      ],
      DATE: [
        { label: "晚于", value: "gt" },
        { label: "晚于等于", value: "ge" },
        { label: "早于", value: "lt" },
        { label: "早于等于", value: "le" },
        // { label: "介于之间", value: "between" },
        { label: "为空", value: "isNull" },
        { label: "不为空", value: "isNotNull" }
      ]
    };
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      var _a;
      setModalProps({ confirmLoading: false, width: "600px" });
      buildTableFields(void 0, data.sqlQuery).then((res) => {
        tableFields.value = res;
      });
      if (data.isUpdate) {
        filter.field = data.field;
        filter.valueType = data.valueType;
        filter.required = data.required;
        setFieldType((_a = filter.field) == null ? void 0 : _a.dataType);
        filterIndex.value = data.index;
        formState.field = [data.field.tableAlias, data.field.colName];
        formState.operator = data.operator;
        if (data.operator === FilterCondition.between) {
          formState.value = data.value ? data.value.split(",") : [];
        } else {
          formState.value = data.value ?? "";
        }
        if (data.operator === FilterCondition.isNull || data.operator === FilterCondition.isNotNull) {
          showValue.value = false;
          formState.value = "";
        } else {
          showValue.value = true;
        }
        if (data.valueType === "2" && data.value) {
          formState.value = JSON.parse(data.value);
        }
        return;
      }
      formState.field = [];
      formState.value = void 0;
      formState.operator = "";
      filterIndex.value = void 0;
      filter.field = {};
      filter.valueType = "0";
      filter.required = true;
    });
    function fieldChange(field) {
      var _a, _b;
      if (field.tableAlias && field.colName) {
        const tableAlias2 = field.tableAlias;
        if (filter.valueType === "0" && field.dataType !== ((_a = filter.field) == null ? void 0 : _a.dataType)) {
          formState.value = void 0;
        }
        formState.field = [tableAlias2, field.colName];
        filter.field = field;
        if (filter.field) {
          filter.field.tableAlias = tableAlias2;
        }
        setFieldType((_b = filter.field) == null ? void 0 : _b.dataType);
        if (!operator.value.some((op) => formState.operator === op.value)) {
          formState.operator = "";
        }
      }
    }
    function setFieldType(dataType) {
      if (dataType) {
        operator.value = operators[dataType];
      }
    }
    function selectOperator(value) {
      var _a;
      if (value === FilterCondition.isNull || value === FilterCondition.isNotNull) {
        showValue.value = false;
        formState.value = "";
      } else {
        showValue.value = true;
      }
      if (((_a = filter.field) == null ? void 0 : _a.dataType) === "DATE") {
        if (value === FilterCondition.between) {
          formState.value = formState.value ? `${formState.value}`.split(",") : [];
        } else {
          formState.value = formState.value ? `${formState.value}`.split(",")[0] : "";
        }
      }
    }
    function calcName() {
      var _a, _b, _c;
      return `${(_a = filter.field) == null ? void 0 : _a.colName} ${formState.operator ? (_b = operator.value.find((op) => op.value === formState.operator)) == null ? void 0 : _b.label : ""}${showValue.value ? ` ${formState.value === void 0 ? "''" : filter.valueType === "0" ? formState.value === "" ? "''" : formState.value : filter.valueType === "2" ? (_c = formState.value) == null ? void 0 : _c.colName : `#{${formState.value}}`}` : ""}`;
    }
    async function submit() {
      var _a;
      try {
        const values = await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
        closeModal();
        emit("submit", filterIndex.value, {
          ...filter,
          name: calcName(),
          operator: values == null ? void 0 : values.operator,
          value: (values == null ? void 0 : values.value) === void 0 ? "" : filter.valueType === "2" ? JSON.stringify(values.value) : `${values.value}`
        });
      } catch (error) {
        console.log(error);
      }
    }
    function valueTypeChange(value) {
      formState.value = void 0;
      filter.valueType = value;
    }
    function variableChange(name2, required) {
      formState.value = name2;
      filter.required = required;
    }
    function fieldValueChange(value) {
      formState.value = value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "设置过滤条件",
        onOk: submit
      }), {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "formRef",
            ref: formRef,
            model: formState,
            "label-col": { span: 6 },
            "wrapper-col": { span: 16 }
          }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(unref(AFormItem), {
                  label: "字段",
                  name: "field",
                  rules: [{ required: true, message: "请选择字段！" }]
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$L, {
                      "query-mode": __props.queryMode,
                      "table-fields": tableFields.value,
                      value: filter.field,
                      onChange: fieldChange
                    }, null, 8, ["query-mode", "table-fields", "value"])
                  ]),
                  _: 1
                }),
                createVNode(unref(AFormItem), {
                  label: "条件",
                  name: "operator",
                  rules: [{ required: true, message: "请选择条件！" }]
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Select), {
                      disabled: __props.queryMode,
                      "show-search": "",
                      "allow-clear": false,
                      class: "input-select",
                      "option-filter-prop": "label",
                      value: formState.operator,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formState.operator = $event),
                      options: operator.value,
                      placeholder: "选择条件",
                      onSelect: selectOperator
                    }, null, 8, ["disabled", "value", "options"])
                  ]),
                  _: 1
                }),
                showValue.value ? (openBlock(), createBlock(unref(AFormItem), {
                  key: 0,
                  label: "值",
                  name: "value",
                  rules: [{ required: ((_a = filter.field) == null ? void 0 : _a.dataType) !== "STRING", message: "请选择值！" }]
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode(FilterValue, {
                        "query-mode": __props.queryMode,
                        placeholder: "输入值",
                        value: formState.value,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formState.value = $event),
                        "value-type": filter.valueType,
                        "field-type": (_a2 = filter.field) == null ? void 0 : _a2.dataType,
                        operator: formState.operator,
                        "table-fields": tableFields.value,
                        onTypeChange: valueTypeChange,
                        onVariableChange: variableChange,
                        onFieldChange: fieldValueChange
                      }, null, 8, ["query-mode", "value", "value-type", "field-type", "operator", "table-fields"])
                    ];
                  }),
                  _: 1
                }, 8, ["rules"])) : createCommentVNode("", true)
              ];
            }),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "TableFilter",
  props: {
    sqlQuery: { type: Object },
    level: { type: Number, default: 1 },
    configMitt: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["filterChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tableFilters = ref([]);
    const showFilterButton = computed(() => {
      var _a;
      return ((_a = props.sqlQuery) == null ? void 0 : _a.filters) === void 0 && isNeedNest(props.sqlQuery, props.level) && !props.queryMode;
    });
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.filters;
      },
      (val) => {
        tableFilters.value = val ? [...val] : [];
      },
      { immediate: true }
    );
    const color2 = useRootSetting().getThemeColor;
    const menus = ref([
      { name: "添加", icon: "icon-mfish-left-bracket", color: color2, value: { type: "0", name: "(", value: "(" } },
      { name: "添加", icon: "icon-mfish-right-bracket", color: color2, value: { type: "0", name: ")", value: ")" } }
    ]);
    const andBlock = {
      type: "0",
      slot: true,
      hideClose: true,
      value: "and"
    };
    const [registerModal, { openModal }] = useModal();
    function deleteFilter() {
      emit("filterChange");
    }
    function switchChange(e, index2) {
      var _a;
      if (tableFilters.value && ((_a = tableFilters.value) == null ? void 0 : _a.length) > index2) {
        tableFilters.value[index2].value = e;
        setTimeout(() => {
          if (tableFilters.value) {
            emit("filterChange", [...tableFilters.value]);
          }
        }, 300);
      }
    }
    function addFilters() {
      emit("filterChange", []);
    }
    function addFilter() {
      openModal(true, {
        sqlQuery: props.sqlQuery,
        isUpdate: false
      });
    }
    function editFilter(index2, item) {
      if (item.type === "0") return;
      openModal(true, {
        index: index2,
        ...item,
        sqlQuery: props.sqlQuery,
        isUpdate: true
      });
    }
    function createFilter(index2, filter) {
      var _a;
      if (index2 === void 0) {
        if (tableFilters.value) {
          if (((_a = tableFilters.value) == null ? void 0 : _a.findIndex((item) => item.type === "1")) >= 0) {
            tableFilters.value.push(andBlock);
          }
          tableFilters.value.push(filter);
        } else {
          tableFilters.value = [filter, andBlock];
        }
      } else {
        if (tableFilters.value) {
          tableFilters.value[index2] = filter;
        }
      }
      emit("filterChange", tableFilters.value ? [...tableFilters.value] : []);
    }
    function delFilter(index2, delItem) {
      if (delItem.type === "0") return;
      let find = false;
      const removeSign = (i) => {
        const item = tableFilters.value[i];
        if (!item) return false;
        if (item.type === "0" && (item.value === "and" || item.value === "or")) {
          tableFilters.value.splice(i, 1);
          return true;
        }
        return false;
      };
      for (let i = index2 - 1; i >= 0; i--) {
        if (!removeSign(i)) continue;
        find = true;
        return;
      }
      if (!find) {
        for (let i = index2; i < tableFilters.value.length; i++) {
          if (removeSign(i)) return;
        }
      }
    }
    function dragChange(item) {
      emit("filterChange", [...item]);
    }
    function executeSql(key) {
      queryDataEvent(
        props.configMitt,
        {
          ...props.sqlQuery,
          filters: tableFilters.value,
          aggregates: [],
          groups: [],
          customColumns: [],
          orders: [],
          limit: void 0
        },
        key
      );
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", null, [
        ((_a = __props.sqlQuery) == null ? void 0 : _a.filters) !== void 0 ? (openBlock(), createBlock(ConfigWrapper, {
          key: 0,
          "query-mode": __props.queryMode,
          icon: "ant-design:filter-outlined",
          title: "过滤",
          onDeleteConfig: deleteFilter,
          full: true,
          onExecute: executeSql
        }, {
          config: withCtx(() => [
            createVNode(unref(DraggableInput), {
              "query-mode": __props.queryMode,
              items: tableFilters.value,
              menus: menus.value,
              "add-title": "添加过滤条件",
              onAddBlock: addFilter,
              onEditBlock: editFilter,
              onCloseBlock: delFilter,
              onDragChange: dragChange
            }, {
              tag: withCtx(({ index: index2, element }) => [
                createVNode(unref(Switch), {
                  disabled: __props.queryMode,
                  style: { "margin-right": "8px" },
                  checked: element == null ? void 0 : element.value,
                  "checked-children": "且",
                  "un-checked-children": "或",
                  "checked-value": "and",
                  "un-checked-value": "or",
                  size: "small",
                  onChange: ($event) => switchChange($event, index2)
                }, null, 8, ["disabled", "checked", "onChange"])
              ]),
              _: 1
            }, 8, ["query-mode", "items", "menus"])
          ]),
          _: 1
        }, 8, ["query-mode"])) : createCommentVNode("", true),
        showFilterButton.value ? (openBlock(), createBlock(ConfigButton, {
          key: 1,
          class: "config-button",
          title: "过滤",
          icon: "ant-design:filter-outlined",
          level: 0,
          onClick: withModifiers(addFilters, ["prevent"])
        })) : createCommentVNode("", true),
        createVNode(_sfc_main$J, {
          "query-mode": __props.queryMode,
          onRegister: unref(registerModal),
          onSubmit: createFilter
        }, null, 8, ["query-mode", "onRegister"])
      ]);
    };
  }
});
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "AggregateModal",
  props: {
    queryMode: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const AFormItem = Form.Item;
    const formState = reactive({
      field: void 0,
      aggFunc: ""
    });
    const formRef = ref();
    const tableFields = ref([]);
    const aggregate = reactive({
      field: { dataType: "STRING" }
    });
    const aggFunc = Object.keys(AggregateType).map((item) => {
      return { value: item, label: AggregateType[item] };
    });
    const showField = ref(true);
    const aggregateIndex = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "600px" });
      buildTableFields(void 0, data.sqlQuery).then((res) => {
        var _a, _b;
        for (let i = 0; i < res.length; i++) {
          const item = res[i];
          if (item.children) {
            item.children = (_a = item.children) == null ? void 0 : _a.filter((child) => child.realValue.dataType === "NUMBER");
            if (((_b = item.children) == null ? void 0 : _b.length) === 0) {
              res.splice(i--, 1);
            }
            continue;
          }
          res.splice(i--, 1);
        }
        tableFields.value = res;
      });
      if (data.isUpdate) {
        formState.field = [data.field.tableAlias, data.field.colName];
        formState.aggFunc = data.aggFunc;
        aggregate.field = data.field;
        showField.value = AggregateType[formState.aggFunc] !== AggregateType.count;
        aggregateIndex.value = data.index;
        return;
      }
      formState.field = [];
      formState.aggFunc = "";
      aggregateIndex.value = void 0;
      showField.value = true;
      aggregate.field = {};
    });
    function fieldChange(field) {
      if (field.tableAlias && field.colName) {
        formState.field = [field.tableAlias, field.colName];
        aggregate.field = field;
      }
    }
    function selectAggFunc(value) {
      showField.value = AggregateType[value] !== AggregateType.count;
    }
    function calcName() {
      var _a;
      return AggregateType[formState.aggFunc] + (AggregateType[formState.aggFunc] === AggregateType.count ? "" : `(${(_a = aggregate.field) == null ? void 0 : _a.colName})`);
    }
    async function submit() {
      var _a;
      try {
        const values = await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
        closeModal();
        emit("submit", aggregateIndex.value, {
          ...aggregate,
          name: calcName(),
          aggFunc: values.aggFunc
        });
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "选择聚合字段",
        onOk: submit
      }), {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "formRef",
            ref: formRef,
            model: formState,
            "label-col": { span: 6 },
            "wrapper-col": { span: 16 }
          }, {
            default: withCtx(() => [
              createVNode(unref(AFormItem), {
                label: "聚合方式",
                name: "aggFunc",
                rules: [{ required: true, message: "请选择聚合方式！" }]
              }, {
                default: withCtx(() => [
                  createVNode(unref(Select), {
                    disabled: __props.queryMode,
                    "show-search": "",
                    "allow-clear": false,
                    "option-filter-prop": "label",
                    value: formState.aggFunc,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formState.aggFunc = $event),
                    options: unref(aggFunc),
                    placeholder: "选择聚合方式",
                    onSelect: selectAggFunc
                  }, null, 8, ["disabled", "value", "options"])
                ]),
                _: 1
              }),
              showField.value ? (openBlock(), createBlock(unref(AFormItem), {
                key: 0,
                label: "字段",
                name: "field",
                rules: [{ required: true, message: "请选择字段！" }]
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$L, {
                    "query-mode": __props.queryMode,
                    "table-fields": tableFields.value,
                    value: aggregate.field,
                    onChange: fieldChange
                  }, null, 8, ["query-mode", "table-fields", "value"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "GroupModal",
  props: {
    queryMode: { type: Boolean, default: false }
  },
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const AFormItem = Form.Item;
    const formState = reactive({
      field: void 0
    });
    const group = reactive({
      field: { dataType: "STRING" }
    });
    const formRef = ref();
    const tableFields = ref([]);
    const groupIndex = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "600px" });
      buildTableFields(void 0, data.sqlQuery).then((res) => {
        tableFields.value = res;
      });
      if (data.isUpdate) {
        formState.field = [data.field.tableAlias, data.field.colName];
        group.field = data.field;
        groupIndex.value = data.index;
        return;
      }
      formState.field = [];
      groupIndex.value = void 0;
      group.field = {};
    });
    function fieldChange(field) {
      if (field.tableAlias && field.colName) {
        formState.field = [field.tableAlias, field.colName];
        group.field = field;
      }
    }
    async function submit() {
      var _a, _b;
      try {
        await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
        closeModal();
        emit("submit", groupIndex.value, {
          ...group,
          name: (_b = group.field) == null ? void 0 : _b.colName
        });
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "选择分组字段",
        onOk: submit
      }), {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "formRef",
            ref: formRef,
            model: formState,
            "label-col": { span: 6 },
            "wrapper-col": { span: 16 }
          }, {
            default: withCtx(() => [
              createVNode(unref(AFormItem), {
                label: "字段",
                name: "field",
                rules: [{ required: true, message: "请选择字段！" }]
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$L, {
                    "query-mode": __props.queryMode,
                    "table-fields": tableFields.value,
                    value: group.field,
                    onChange: fieldChange
                  }, null, 8, ["query-mode", "table-fields", "value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "TableAggregate",
  props: {
    sqlQuery: { type: Object },
    configMitt: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["aggregateChange", "groupChange", "deleteAggregate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const themeColor = useRootSetting().getThemeColor;
    const { prefixCls } = useDesign("table-aggregate");
    const tableAggregates = ref();
    const tableGroups = ref();
    const [registerAggModal, { openModal: openAggModal }] = useModal();
    const [registerGroupModal, { openModal: openGroupModal }] = useModal();
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.aggregates;
      },
      (val) => {
        tableAggregates.value = val ? [...val] : [];
      },
      { immediate: true }
    );
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.groups;
      },
      (val) => {
        tableGroups.value = val ? [...val] : [];
      },
      { immediate: true }
    );
    async function deleteAggregate() {
      emit("deleteAggregate");
    }
    function addAggregate() {
      openAggModal(true, {
        sqlQuery: props.sqlQuery,
        isUpdate: false
      });
    }
    function createAggregate(index2, aggregate) {
      if (index2 === void 0) {
        if (tableAggregates.value) {
          tableAggregates.value.push(aggregate);
        } else {
          tableAggregates.value = [aggregate];
        }
      } else {
        if (tableAggregates.value) {
          tableAggregates.value[index2] = aggregate;
        }
      }
      emit("aggregateChange", tableAggregates.value ? [...tableAggregates.value] : []);
    }
    function editAggregate(index2, item) {
      openAggModal(true, {
        index: index2,
        ...item,
        sqlQuery: props.sqlQuery,
        isUpdate: true
      });
    }
    function dragAggregate(item) {
      emit("aggregateChange", [...item]);
    }
    function addGroup() {
      openGroupModal(true, {
        sqlQuery: props.sqlQuery,
        isUpdate: false
      });
    }
    function createGroup(index2, group) {
      if (index2 === void 0) {
        if (tableGroups.value) {
          tableGroups.value.push(group);
        } else {
          tableGroups.value = [group];
        }
      } else {
        if (tableGroups.value) {
          tableGroups.value[index2] = group;
        }
      }
      emit("groupChange", tableGroups.value ? [...tableGroups.value] : []);
    }
    function editGroup(index2, item) {
      openGroupModal(true, {
        index: index2,
        ...item,
        sqlQuery: props.sqlQuery,
        isUpdate: true
      });
    }
    function dragGroup(item) {
      emit("groupChange", [...item]);
    }
    function executeSql(key) {
      queryDataEvent(
        props.configMitt,
        {
          ...props.sqlQuery,
          aggregates: tableAggregates.value,
          groups: tableGroups.value,
          orders: [],
          limit: void 0
        },
        key
      );
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        ((_a = __props.sqlQuery) == null ? void 0 : _a.aggregates) !== void 0 ? (openBlock(), createBlock(ConfigWrapper, {
          key: 0,
          "query-mode": __props.queryMode,
          iconfont: "icon-mfish-sum",
          title: "聚合",
          onDeleteConfig: deleteAggregate,
          onExecute: executeSql,
          full: true
        }, {
          config: withCtx(() => [
            createVNode(unref(DraggableInput), {
              "query-mode": __props.queryMode,
              items: tableAggregates.value,
              "add-title": "添加聚合指标",
              onAddBlock: addAggregate,
              onEditBlock: editAggregate,
              onDragChange: dragAggregate
            }, null, 8, ["query-mode", "items"]),
            createVNode(unref(Icon), {
              class: "groupIcon",
              icon: "ant-design:group-outlined",
              color: unref(themeColor),
              style: { "font-size": "14px" }
            }, null, 8, ["color"]),
            _cache[0] || (_cache[0] = createElementVNode("div", { class: "group" }, "分组", -1)),
            createVNode(unref(DraggableInput), {
              "query-mode": __props.queryMode,
              items: tableGroups.value,
              "add-title": "添加分组指标",
              onAddBlock: addGroup,
              onEditBlock: editGroup,
              onDragChange: dragGroup
            }, null, 8, ["query-mode", "items"])
          ]),
          _: 1
        }, 8, ["query-mode"])) : createCommentVNode("", true),
        createVNode(_sfc_main$H, {
          "query-mode": __props.queryMode,
          onRegister: unref(registerAggModal),
          onSubmit: createAggregate
        }, null, 8, ["query-mode", "onRegister"]),
        createVNode(_sfc_main$G, {
          "query-mode": __props.queryMode,
          onRegister: unref(registerGroupModal),
          onSubmit: createGroup
        }, null, 8, ["query-mode", "onRegister"])
      ], 2);
    };
  }
});
const TableAggregate = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-a3fb541b"]]);
const otherField = "其他";
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "OrderModal",
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const AFormItem = Form.Item;
    const formState = reactive({
      field: void 0
    });
    const order = reactive({
      field: { dataType: "STRING" },
      order: "ASC"
    });
    const formRef = ref();
    const tableFields = ref([]);
    const orderIndex = ref();
    const apiStore = useApiStore();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "600px" });
      if (containNest(data.sqlQuery)) {
        getQueryFields({
          sourceId: apiStore.getSourceId,
          sourceType: apiStore.getSourceType,
          sqlQuery: data.sqlQuery
        }).then((res) => {
          tableFields.value = [
            {
              value: otherField,
              label: otherField,
              realValue: otherField,
              children: res.map((field) => ({ value: field.colName, label: field.colName, realValue: { ...field } }))
            }
          ];
        });
      } else {
        tableFields.value = await buildTableFields(void 0, data.sqlQuery);
      }
      if (data.isUpdate) {
        formState.field = [data.field.tableAlias, data.field.colName];
        order.field = data.field;
        orderIndex.value = data.index;
        return;
      }
      formState.field = [];
      orderIndex.value = void 0;
      order.field = {};
    });
    function fieldChange(field) {
      if (field.tableAlias && field.colName) {
        formState.field = [field.tableAlias, field.colName];
        order.field = field;
      }
    }
    async function submit() {
      var _a, _b;
      try {
        await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
        closeModal();
        if (order.field.tableAlias === otherField) {
          order.field.tableAlias = "";
        }
        emit("submit", orderIndex.value, {
          ...order,
          name: (_b = order.field) == null ? void 0 : _b.colName
        });
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "选择排序字段",
        onOk: submit
      }), {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "formRef",
            ref: formRef,
            model: formState,
            "label-col": { span: 6 },
            "wrapper-col": { span: 16 }
          }, {
            default: withCtx(() => [
              createVNode(unref(AFormItem), {
                label: "字段",
                name: "field",
                rules: [{ required: true, message: "请选择字段！" }]
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$L, {
                    "table-fields": tableFields.value,
                    value: order.field,
                    onChange: fieldChange
                  }, null, 8, ["table-fields", "value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "TableOrder",
  props: {
    sqlQuery: { type: Object, default: void 0 },
    configMitt: { type: Object, default: void 0 },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["orderChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tableOrders = ref([]);
    const [registerModal, { openModal }] = useModal();
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.orders;
      },
      (val) => {
        if (!val) {
          tableOrders.value = [];
          return;
        }
        tableOrders.value = val;
      },
      {
        immediate: true
      }
    );
    function addOrder() {
      openModal(true, {
        sqlQuery: props.sqlQuery,
        isUpdate: false
      });
    }
    function editOrder(index2, item) {
      item.order = item.order === "ASC" ? "DESC" : "ASC";
      createOrder(index2, item);
    }
    function dragOrder(item) {
      emit("orderChange", [...item]);
    }
    function deleteOrder() {
      emit("orderChange");
    }
    function createOrder(index2, order) {
      if (index2 === void 0) {
        if (tableOrders.value) {
          tableOrders.value.push(order);
        } else {
          tableOrders.value = [order];
        }
      } else {
        if (tableOrders.value) {
          tableOrders.value[index2] = order;
        }
      }
      emit("orderChange", tableOrders.value ? [...tableOrders.value] : []);
    }
    function executeSql(key) {
      queryDataEvent(props.configMitt, { ...props.sqlQuery, orders: tableOrders.value, limit: void 0 }, key);
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", null, [
        ((_a = __props.sqlQuery) == null ? void 0 : _a.orders) !== void 0 ? (openBlock(), createBlock(ConfigWrapper, {
          key: 0,
          "query-mode": __props.queryMode,
          icon: "ant-design:sort-ascending-outlined",
          title: "排序",
          onDeleteConfig: deleteOrder,
          full: true,
          onExecute: executeSql
        }, {
          config: withCtx(() => [
            createVNode(unref(DraggableInput), {
              "query-mode": __props.queryMode,
              items: tableOrders.value,
              "add-title": "添加排序指标",
              onAddBlock: addOrder,
              onEditBlock: editOrder,
              onDragChange: dragOrder
            }, {
              tagIcon: withCtx(({ element }) => [
                createVNode(unref(Icon), {
                  style: { "font-weight": "bold", "font-size": "20px" },
                  icon: element.order === "ASC" ? "ant-design:sort-descending-outlined" : "ant-design:sort-ascending-outlined"
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["query-mode", "items"])
          ]),
          _: 1
        }, 8, ["query-mode"])) : createCommentVNode("", true),
        createVNode(_sfc_main$E, {
          onRegister: unref(registerModal),
          onSubmit: createOrder
        }, null, 8, ["onRegister"])
      ]);
    };
  }
});
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "FieldColModal",
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const AFormItem = Form.Item;
    const formState = reactive({
      field: void 0
    });
    const fieldRef = ref();
    const formRef = ref();
    const tableFields = ref([]);
    const fieldIndex = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "600px" });
      buildTableFields(void 0, data.sqlQuery).then((res) => {
        tableFields.value = res;
      });
      if (data.isUpdate) {
        const field = data.field.value;
        formState.field = [field.tableAlias, field.colName];
        fieldRef.value = field;
        fieldIndex.value = data.index;
        return;
      }
      formState.field = [];
      fieldIndex.value = void 0;
      fieldRef.value = {};
    });
    function fieldChange(field) {
      if (field.tableAlias && field.colName) {
        formState.field = [field.tableAlias, field.colName];
        fieldRef.value = field;
      }
    }
    async function submit() {
      var _a, _b;
      try {
        await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
        closeModal();
        emit("submit", fieldIndex.value, {
          type: ExpressionType.field,
          value: fieldRef.value,
          name: (_b = fieldRef.value) == null ? void 0 : _b.colName
        });
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "选择字段",
        onOk: submit
      }), {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "formRef",
            ref: formRef,
            model: formState,
            "label-col": { span: 6 },
            "wrapper-col": { span: 16 }
          }, {
            default: withCtx(() => [
              createVNode(unref(AFormItem), {
                label: "字段",
                name: "field",
                rules: [{ required: true, message: "请选择字段！" }]
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$L, {
                    "table-fields": tableFields.value,
                    value: fieldRef.value,
                    onChange: fieldChange
                  }, null, 8, ["table-fields", "value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
const _hoisted_1$l = ["onClick"];
const _hoisted_2$e = ["onClick"];
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "FormulaManagement",
  props: {
    isShow: { type: Boolean, default: false },
    curKey: { type: String, default: "" }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ABreadcrumbItem = Breadcrumb.Item;
    const ADescriptionsItem = Descriptions.Item;
    const formulaList = ref([]);
    const { prefixCls } = useDesign("formula-management");
    const asyncTreeRef = ref(null);
    const color2 = useRootSetting().getThemeColor;
    const selectedKeys = ref([]);
    const startSearch = ref(false);
    const searchFormula = ref([]);
    const curNode = ref();
    const split = ref(0.4);
    const treeData = ref([]);
    const breadList = ref();
    const formulaDesc = computed(() => {
      var _a, _b;
      if (((_a = curNode.value) == null ? void 0 : _a.parentId) === "") return void 0;
      const info = (_b = curNode.value) == null ? void 0 : _b.formulaInfo;
      if (!info) return void 0;
      let paramDesc;
      try {
        paramDesc = (info == null ? void 0 : info.paramDesc) ? JSON.parse(info == null ? void 0 : info.paramDesc) : [];
      } catch {
        paramDesc = (info == null ? void 0 : info.paramDesc) ? [info == null ? void 0 : info.paramDesc] : [];
      }
      return { description: info.description, paramDesc, returnDesc: info.returnDesc };
    });
    watch(
      () => props.isShow,
      (val) => {
        if (val) {
          setTimeout(() => {
            setSelect(props.curKey);
          }, 200);
        }
      },
      { immediate: true }
    );
    function selectTree(node, parentNode) {
      const list = [];
      if (parentNode) {
        list.push({
          icon: parentNode.icon,
          title: parentNode.name,
          key: parentNode.key
        });
      } else {
        formulaList.value = node ? node.children : [];
      }
      if (node) {
        list.push({
          icon: node.icon,
          title: node.name,
          key: node.key
        });
      }
      breadList.value = list;
      curNode.value = node;
      emit("select", node);
    }
    function selectFormula(_, e) {
      var _a, _b;
      selectTree(e.node.dataRef, (_b = (_a = e.node) == null ? void 0 : _a.parent) == null ? void 0 : _b.node);
    }
    function setSelect(key) {
      var _a, _b, _c, _d;
      if (!key) {
        selectTree();
        selectedKeys.value = [];
        return;
      }
      selectedKeys.value = [key];
      const keys = key.split(",");
      if (keys && keys.length === 2) {
        (_a = asyncTreeRef.value) == null ? void 0 : _a.setExpandedKeys([keys[0]]);
        selectTree((_b = asyncTreeRef.value) == null ? void 0 : _b.getSelectedNode(key), (_c = asyncTreeRef.value) == null ? void 0 : _c.getSelectedNode(keys[0]));
        return;
      }
      selectTree((_d = asyncTreeRef.value) == null ? void 0 : _d.getSelectedNode(key));
    }
    const getFormulaList = computed(() => startSearch.value ? unref(searchFormula) : unref(formulaList));
    onBeforeMount(async () => {
      const nodes = await getFormulaTree();
      initData(void 0, nodes);
      treeData.value = nodes;
      function initData(pNode, nodes2) {
        var _a;
        for (const node of nodes2) {
          if (node.children && node.children.length > 0) {
            initData(node, node.children);
          }
          if (pNode) {
            node.icon = "ant-design:function-outlined";
            node.key = `${pNode.id},${node.id}`;
          } else {
            node.icon = "ant-design:star-outlined";
            node.key = node.id;
          }
          node.title = node.name + ((node == null ? void 0 : node.formulaInfo) ? `(${(_a = node == null ? void 0 : node.formulaInfo) == null ? void 0 : _a.enName})` : "");
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Split), {
        "default-size": split.value,
        min: 0.1,
        max: 0.5,
        class: normalizeClass(unref(prefixCls))
      }, {
        "1": withCtx(() => [
          createVNode(unref(BasicTree), {
            title: "",
            toolbar: "",
            search: "",
            ref_key: "asyncTreeRef",
            ref: asyncTreeRef,
            "tree-wrapper-class-name": "h-[calc(100%-35px)] overflow-auto",
            "selected-keys": selectedKeys.value,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => selectedKeys.value = $event),
            "tree-data": treeData.value || [],
            onSelect: selectFormula
          }, null, 8, ["selected-keys", "tree-data"])
        ]),
        "2": withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(`${unref(prefixCls)}-right h-full pt-2`)
          }, [
            createVNode(unref(Breadcrumb), {
              separator: ">",
              class: "breadcrumb"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(breadList.value, (item, index2) => {
                  return openBlock(), createBlock(unref(ABreadcrumbItem), { key: index2 }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: item.icon
                      }, null, 8, ["icon"]),
                      createElementVNode("a", {
                        onClick: ($event) => setSelect(item.key),
                        class: "fw-bold text-decoration-none"
                      }, toDisplayString(item.title), 9, _hoisted_1$l)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            }),
            curNode.value && curNode.value.parentId === "" ? (openBlock(), createBlock(unref(ScrollContainer), { key: 0 }, {
              default: withCtx(() => [
                createVNode(unref(Row), { class: "ml-6" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getFormulaList.value, (item, index2) => {
                      return openBlock(), createBlock(unref(Col), {
                        span: 22,
                        key: index2,
                        class: normalizeClass(`${unref(prefixCls)}-card`)
                      }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createElementVNode("div", {
                              class: normalizeClass(`${unref(prefixCls)}-card-item`),
                              onClick: ($event) => setSelect(item.key)
                            }, [
                              createElementVNode("div", {
                                class: normalizeClass(`${unref(prefixCls)}-card-item-info`)
                              }, [
                                createVNode(unref(Tooltip), {
                                  title: (_a = item.formulaInfo) == null ? void 0 : _a.cnName
                                }, {
                                  default: withCtx(() => {
                                    var _a2, _b2;
                                    return [
                                      createElementVNode("span", {
                                        style: normalizeStyle(`color: ${unref(color2)};font-weight: bold`)
                                      }, [
                                        createVNode(unref(Icon), {
                                          icon: "ant-design:function-outlined",
                                          color: unref(color2)
                                        }, null, 8, ["color"]),
                                        createTextVNode(" " + toDisplayString((_a2 = item.formulaInfo) == null ? void 0 : _a2.cnName) + " (" + toDisplayString((_b2 = item.formulaInfo) == null ? void 0 : _b2.enName) + ") ", 1)
                                      ], 4)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["title"]),
                                createVNode(unref(Tooltip), {
                                  title: (_b = item.formulaInfo) == null ? void 0 : _b.description
                                }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createElementVNode("span", null, toDisplayString((_a2 = item.formulaInfo) == null ? void 0 : _a2.description), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["title"])
                              ], 2)
                            ], 10, _hoisted_2$e)
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            curNode.value && curNode.value.formulaInfo ? (openBlock(), createBlock(unref(ScrollContainer), { key: 1 }, {
              default: withCtx(() => [
                createVNode(unref(Descriptions), {
                  class: "pt-3 pr-2",
                  column: 1,
                  bordered: true
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ADescriptionsItem), { label: "描述" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = formulaDesc.value) == null ? void 0 : _a.description), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(unref(ADescriptionsItem), { label: "参数" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          (openBlock(true), createElementBlock(Fragment, null, renderList((_a = formulaDesc.value) == null ? void 0 : _a.paramDesc, (item, index2) => {
                            return openBlock(), createElementBlock("div", { key: index2 }, toDisplayString(item), 1);
                          }), 128))
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(unref(ADescriptionsItem), { label: "结果" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = formulaDesc.value) == null ? void 0 : _a.returnDesc), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 1
      }, 8, ["default-size", "class"]);
    };
  }
});
const FormulaManagement = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-6dc5ed8e"]]);
const _hoisted_1$k = {
  key: 0,
  class: "content"
};
const _hoisted_2$d = {
  key: 1,
  class: "content placeholder"
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "FormulaSelect",
  props: {
    formulaKey: { type: String, default: "" },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["formulaChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isDark = computed(() => useRootSetting().getDarkMode.value === ThemeEnum.DARK);
    const { prefixCls } = useDesign("select-formula");
    const isShow = ref(false);
    let sFormula;
    const { createMessage } = useMessage();
    const apiStore = useApiStore();
    const curFormula = ref();
    const visibleChange = (show) => {
      isShow.value = show;
    };
    watch(
      () => props.formulaKey,
      (val) => {
        if (val) {
          curFormula.value = apiStore.getFormula(val);
        }
      },
      {
        immediate: true
      }
    );
    function cancelHandle() {
      isShow.value = false;
      curFormula.value = void 0;
      sFormula = void 0;
      emit("formulaChange", curFormula.value);
    }
    function okHandle() {
      var _a;
      if (!sFormula) {
        createMessage.error("请选择公式");
        return;
      }
      isShow.value = false;
      if (((_a = curFormula.value) == null ? void 0 : _a.key) === sFormula.key) return;
      curFormula.value = { key: sFormula.key, ...sFormula.formulaInfo };
      emit("formulaChange", curFormula.value);
    }
    function selectFormula(node) {
      if (node == null ? void 0 : node.formulaInfo) {
        sFormula = toRaw(node);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        disabled: __props.queryMode,
        trigger: ["click"],
        open: isShow.value,
        onOpenChange: visibleChange,
        placement: "bottom",
        arrow: { pointAtCenter: true },
        "overlay-style": { width: "500px" }
      }, {
        overlay: withCtx(() => [
          createVNode(unref(Menu), null, {
            default: withCtx(() => [
              createVNode(unref(Menu).Item, {
                disabled: "",
                style: { "padding": "0", "cursor": "default" }
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(FormulaManagement, {
                      style: { "height": "350px" },
                      "is-show": isShow.value,
                      "cur-key": (_a = curFormula.value) == null ? void 0 : _a.key,
                      onSelect: selectFormula
                    }, null, 8, ["is-show", "cur-key"]),
                    createElementVNode("div", {
                      class: normalizeClass(`${unref(prefixCls)}-ok-button`)
                    }, [
                      createVNode(unref(Button), {
                        class: "mr-2",
                        onClick: cancelHandle
                      }, {
                        default: withCtx(() => _cache[0] || (_cache[0] = [
                          createTextVNode("清空")
                        ])),
                        _: 1
                      }),
                      createVNode(unref(Button), {
                        type: "primary",
                        onClick: okHandle
                      }, {
                        default: withCtx(() => _cache[1] || (_cache[1] = [
                          createTextVNode("确定")
                        ])),
                        _: 1
                      })
                    ], 2)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(Button), {
            class: normalizeClass(`${unref(prefixCls)}-drop-button`)
          }, {
            default: withCtx(() => {
              var _a, _b;
              return [
                ((_a = curFormula.value) == null ? void 0 : _a.cnName) ? (openBlock(), createElementBlock("span", _hoisted_1$k, toDisplayString((_b = curFormula.value) == null ? void 0 : _b.cnName), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$d, "选择公式")),
                createVNode(unref(Icon), {
                  size: 12,
                  icon: isShow.value ? "ant-design:up-outlined" : "ant-design:down-outlined",
                  color: isDark.value ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)"
                }, null, 8, ["icon", "color"])
              ];
            }),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["disabled", "open"]);
    };
  }
});
const FormulaSelect = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-4015d717"]]);
const DisplayName = "displayName";
const formulaProps = {
  config: {
    type: Object,
    default: () => ({ type: ExpressionType.param, value: "" })
  },
  // 组件类型
  comType: {
    type: String,
    default: "string"
  },
  // 参数类型
  paramType: {
    type: String,
    default: "string"
  },
  // 参数值
  paramValue: {
    type: String,
    default: ""
  },
  showRadio: {
    type: Boolean,
    default: true
  },
  sqlQuery: { type: Object },
  // 组件索引，如果是可变参数需要设置该属性
  index: { type: Number, default: 0 },
  queryMode: { type: Boolean, default: false }
};
const buildFormula = (formula) => {
  if (!formula) return { type: ExpressionType.formula, value: null };
  const params = (formula == null ? void 0 : formula.targetParam) ? JSON.parse(formula.targetParam) : [];
  const param = params.map(
    (p) => p.paramType.startsWith("list") ? { type: ExpressionType.param, value: [{ type: ExpressionType.param, value: "" }] } : { type: ExpressionType.param, value: "" }
  );
  return {
    type: ExpressionType.formula,
    value: {
      key: formula.key,
      cnName: formula.cnName,
      enName: formula.enName,
      targetObject: formula.targetObject,
      param
    }
  };
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "FormulaCompact",
  props: formulaProps,
  emits: ["typeChange", "formulaSelect", "inputChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("formula-compact");
    const ARadioGroup = Radio.Group;
    const ARadioButton = Radio.Button;
    const cType = ref("string");
    const pType = ref("string");
    const inputValue = ref();
    const formulaType = ref(ExpressionType.param);
    const formulaKey = ref();
    const tableFields = ref([]);
    const fieldRef = ref();
    const isField = ref(false);
    const listValue = ref([]);
    const selectValue = ref();
    watch(
      () => props.config,
      (val) => {
        var _a;
        if (val) {
          formulaType.value = val.type;
          if (val.type === ExpressionType.formula) {
            formulaKey.value = (_a = val.value) == null ? void 0 : _a.key;
          } else {
            inputValue.value = val.value;
          }
        }
      },
      {
        immediate: true
      }
    );
    watch(
      () => props.paramType,
      (val) => {
        if (!val) return;
        if (val.startsWith("list[")) {
          const reg = /list\[(?<value>.*?)\]/u;
          pType.value = val.replace(reg, "$<value>");
        } else {
          pType.value = val;
        }
      },
      { immediate: true }
    );
    watch(
      () => props.comType,
      (val) => {
        if (val) {
          cType.value = val;
        }
      },
      { immediate: true }
    );
    watch(
      () => formulaType.value,
      (val) => {
        var _a;
        if (val === ExpressionType.param && cType.value === "list") {
          const reg = /@\{(?<value>.*?)\}/u;
          const value = (_a = props.paramValue) == null ? void 0 : _a.replace(reg, "$<value>");
          isField.value = value === "fieldName";
          if (isField.value && props.sqlQuery) {
            buildTableFields(void 0, props.sqlQuery).then((res) => {
              tableFields.value = res;
              fieldRef.value = props.config.value || {};
            });
          } else {
            getFormulaParamList(value).then((res) => {
              var _a2;
              listValue.value = [];
              if (res && res.value) {
                const name2 = res[DisplayName];
                res.value.forEach((value2) => {
                  const label = value2[name2];
                  listValue.value.push({ label, value: label, realValue: { ...value2, [DisplayName]: name2 } });
                });
                if ((_a2 = props.config) == null ? void 0 : _a2.value) {
                  selectValue.value = props.config.value[props.config.value[DisplayName]];
                }
              }
            });
          }
        }
      },
      { immediate: true }
    );
    function formulaChange(value) {
      emit("formulaSelect", value || "");
    }
    function inputChange() {
      emit("inputChange", inputValue.value === void 0 ? "" : inputValue.value);
    }
    function fieldChange(field) {
      if (field.tableAlias && field.colName) {
        fieldRef.value = field;
        emit("inputChange", { ...field, [DisplayName]: "colName" });
      }
    }
    function selectChange(_, option) {
      emit("inputChange", option.realValue || "");
    }
    function typeChange(e) {
      emit("typeChange", e.target.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        props.showRadio ? (openBlock(), createBlock(unref(ARadioGroup), {
          key: 0,
          disabled: props.queryMode,
          class: "radio-group",
          value: formulaType.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formulaType.value = $event),
          "button-style": "solid",
          onChange: typeChange
        }, {
          default: withCtx(() => [
            pType.value === "number" ? (openBlock(), createBlock(unref(ARadioButton), {
              key: 0,
              value: unref(ExpressionType).param
            }, {
              default: withCtx(() => [
                createVNode(unref(Tooltip), {
                  placement: "left",
                  title: "数字"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), { icon: "ant-design:field-number-outlined" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])) : (openBlock(), createBlock(unref(ARadioButton), {
              key: 1,
              value: unref(ExpressionType).param
            }, {
              default: withCtx(() => [
                createVNode(unref(Tooltip), {
                  placement: "left",
                  title: "字符"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), { icon: "ant-design:field-string-outlined" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])),
            createVNode(unref(ARadioButton), {
              value: unref(ExpressionType).formula
            }, {
              default: withCtx(() => [
                createVNode(unref(Tooltip), {
                  placement: "left",
                  title: "公式"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), { icon: "ant-design:function-outlined" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["disabled", "value"])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(props.showRadio ? "formula-select" : "formula-select-show")
        }, [
          formulaType.value === unref(ExpressionType).param && cType.value === "string" ? (openBlock(), createBlock(unref(Input), {
            key: 0,
            disabled: props.queryMode,
            value: inputValue.value,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => inputValue.value = $event),
            class: "input-com",
            placeholder: "请输入字符常量",
            onChange: inputChange
          }, null, 8, ["disabled", "value"])) : formulaType.value === unref(ExpressionType).param && cType.value === "number" ? (openBlock(), createBlock(unref(InputNumber), {
            key: 1,
            disabled: props.queryMode,
            value: inputValue.value,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => inputValue.value = $event),
            class: "input-com",
            placeholder: "请输入数字常量",
            onChange: inputChange
          }, null, 8, ["disabled", "value"])) : formulaType.value === unref(ExpressionType).param && cType.value === "list" && isField.value ? (openBlock(), createBlock(_sfc_main$L, {
            key: 2,
            "query-mode": props.queryMode,
            class: "select-com",
            "table-fields": tableFields.value,
            value: fieldRef.value,
            onChange: fieldChange
          }, null, 8, ["query-mode", "table-fields", "value"])) : formulaType.value === unref(ExpressionType).param && cType.value === "list" && !isField.value ? (openBlock(), createBlock(unref(Select), {
            key: 3,
            disabled: props.queryMode,
            class: "select-com",
            value: selectValue.value,
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => selectValue.value = $event),
            options: listValue.value,
            placeholder: "请选择参数",
            onSelect: selectChange
          }, null, 8, ["disabled", "value", "options"])) : (openBlock(), createBlock(FormulaSelect, {
            key: 4,
            "query-mode": props.queryMode,
            "formula-key": formulaKey.value,
            onFormulaChange: formulaChange
          }, null, 8, ["query-mode", "formula-key"]))
        ], 2)
      ], 2);
    };
  }
});
const FormulaCompact = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-8048866c"]]);
const _hoisted_1$j = { style: { "margin-top": "6px", "display": "flex", "justify-content": "flex-end" } };
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "FormulaAround",
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const params = ref([]);
    const selectValue = ref();
    const isShow = ref(false);
    let formulaConfig;
    const { createMessage } = useMessage();
    const visibleChange = (show) => {
      isShow.value = show;
    };
    function formulaChange(formula) {
      if (!formula) {
        formulaConfig = formula;
        selectValue.value = void 0;
        return;
      }
      formulaConfig = buildFormula(formula);
      const targetParams = (formula == null ? void 0 : formula.targetParam) ? JSON.parse(formula.targetParam) : [];
      params.value = [];
      for (const [i, targetParam] of targetParams.entries()) {
        params.value.push({ label: targetParam.name, value: i });
      }
      selectValue.value = params.value.length > 0 ? 0 : void 0;
    }
    function handleCancel() {
      isShow.value = false;
    }
    function handleOk() {
      if (!formulaConfig || selectValue.value === void 0) {
        createMessage.error("请选择公式");
        return;
      }
      emit("submit", { formulaConfig, paramIndex: selectValue.value });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        trigger: ["click"],
        open: isShow.value,
        placement: "bottom",
        arrow: { pointAtCenter: true },
        onOpenChange: visibleChange
      }, {
        overlay: withCtx(() => [
          createVNode(unref(Menu), null, {
            default: withCtx(() => [
              createVNode(unref(Menu).Item, {
                disabled: "",
                style: { "padding": "0", "cursor": "default" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(Card), {
                    title: "上层公式设置",
                    bordered: false,
                    style: { "width": "240px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(FormulaSelect, { onFormulaChange: formulaChange }),
                      createVNode(unref(Select), {
                        style: { "width": "100%", "margin-top": "6px" },
                        placeholder: "选择作为哪个参数",
                        class: "select-com",
                        value: selectValue.value,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectValue.value = $event),
                        options: params.value
                      }, null, 8, ["value", "options"]),
                      createElementVNode("div", _hoisted_1$j, [
                        createVNode(unref(Button), {
                          size: "small",
                          onClick: handleCancel
                        }, {
                          default: withCtx(() => _cache[1] || (_cache[1] = [
                            createTextVNode(" 取消")
                          ])),
                          _: 1
                        }),
                        createVNode(unref(Button), {
                          size: "small",
                          type: "primary",
                          style: { "margin-left": "6px" },
                          onClick: handleOk
                        }, {
                          default: withCtx(() => _cache[2] || (_cache[2] = [
                            createTextVNode(" 确定")
                          ])),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(Button), {
            style: { "margin-top": "-6px" },
            size: "small",
            type: "link"
          }, {
            icon: withCtx(() => [
              createVNode(unref(Tooltip), {
                placement: "left",
                title: "添加外层公式，当前层作为公式参数"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), { icon: "ant-design:node-collapse-outlined" })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const _hoisted_1$i = { class: "formula" };
const _hoisted_2$c = { class: "title" };
const _hoisted_3$8 = {
  key: 0,
  class: "add"
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "FormulaConfig",
  props: formulaProps,
  emits: ["formulaChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const params = ref();
    const paramsDesc = ref();
    const { prefixCls } = useDesign("formula-config");
    const apiStore = useApiStore();
    const formulaConfig = ref();
    const inputValue = reactive({
      type: ExpressionType.param,
      value: ""
    });
    const key = ref(0);
    const isListParam = (paramType) => {
      return paramType.startsWith("list");
    };
    const childParams = (index2) => {
      var _a, _b;
      if ((_b = (_a = formulaConfig == null ? void 0 : formulaConfig.value) == null ? void 0 : _a.value) == null ? void 0 : _b.param) {
        return Array.isArray(formulaConfig == null ? void 0 : formulaConfig.value.value.param[index2].value) ? formulaConfig == null ? void 0 : formulaConfig.value.value.param[index2].value : [0];
      }
      return [0];
    };
    watch(
      () => props.config,
      (val) => {
        if (val) {
          formulaConfig.value = val;
          initFormula();
        }
      },
      {
        immediate: true
      }
    );
    function inputChange(value) {
      inputValue.value = value;
      emit("formulaChange", inputValue);
    }
    function initFormula() {
      var _a, _b, _c;
      if (((_a = formulaConfig.value) == null ? void 0 : _a.type) === ExpressionType.formula) {
        const formula = apiStore.getFormula((_c = (_b = formulaConfig.value) == null ? void 0 : _b.value) == null ? void 0 : _c.key);
        if (formula) {
          buildParams(formula);
        }
      }
    }
    function buildParams(formula) {
      params.value = (formula == null ? void 0 : formula.targetParam) ? JSON.parse(formula.targetParam) : [];
      try {
        paramsDesc.value = (formula == null ? void 0 : formula.paramDesc) ? JSON.parse(formula == null ? void 0 : formula.paramDesc) : [];
      } catch {
        paramsDesc.value = (formula == null ? void 0 : formula.paramDesc) ? [formula == null ? void 0 : formula.paramDesc] : [];
      }
    }
    function formulaSelect(formula) {
      buildParams(formula);
      formulaConfig.value = buildFormula(formula);
      key.value++;
      emit("formulaChange", formulaConfig.value);
    }
    function setPramValue(value, index2, paramType, childIndex) {
      var _a;
      if (((_a = formulaConfig.value) == null ? void 0 : _a.type) === ExpressionType.formula && formulaConfig.value.value && formulaConfig.value.value.param) {
        if (isListParam(paramType)) {
          if (formulaConfig.value.value.param[index2].value) {
            formulaConfig.value.value.param[index2].value[childIndex] = value;
          } else {
            formulaConfig.value.value.param[index2].value = [value];
          }
        } else {
          formulaConfig.value.value.param[index2] = value;
        }
      }
      emit("formulaChange", formulaConfig.value);
    }
    function deleteParam(index2, childIndex) {
      var _a;
      if (((_a = formulaConfig.value) == null ? void 0 : _a.type) === ExpressionType.formula && formulaConfig.value.value && formulaConfig.value.value.param) {
        formulaConfig.value.value.param[index2].value.splice(childIndex, 1);
        key.value++;
        emit("formulaChange", formulaConfig.value);
      }
    }
    function typeChange(type) {
      params.value = [];
      emit("formulaChange", { type, value: "" });
    }
    function addParam(index2) {
      if (!formulaConfig.value) return;
      if (formulaConfig.value.value.param[index2].value) {
        formulaConfig.value.value.param[index2].value.push({
          type: ExpressionType.param,
          value: ""
        });
      } else {
        formulaConfig.value.value.param[index2].value = [
          {
            type: ExpressionType.param,
            value: ""
          }
        ];
      }
    }
    function handleAround(value) {
      value.formulaConfig.value.param[value.paramIndex] = formulaConfig.value;
      const formula = JSON.parse(JSON.stringify(value.formulaConfig));
      buildParams(formula);
      emit("formulaChange", formula, true);
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_FormulaConfig = resolveComponent("FormulaConfig", true);
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$i, [
          createVNode(FormulaCompact, {
            "query-mode": props.queryMode,
            class: "main",
            index: props.index,
            "com-type": props.comType,
            "param-type": props.paramType,
            "param-value": props.paramValue,
            config: formulaConfig.value,
            "sql-query": props.sqlQuery,
            "show-radio": props.showRadio,
            onInputChange: inputChange,
            onFormulaSelect: formulaSelect,
            onTypeChange: typeChange
          }, null, 8, ["query-mode", "index", "com-type", "param-type", "param-value", "config", "sql-query", "show-radio"]),
          ((_a = formulaConfig.value) == null ? void 0 : _a.type) === unref(ExpressionType).formula && !props.queryMode ? (openBlock(), createBlock(_sfc_main$y, {
            key: 0,
            onSubmit: handleAround
          })) : createCommentVNode("", true)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(params.value, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            key: `${key.value}${index2}`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(childParams(index2), (_, childIndex) => {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
              return openBlock(), createElementBlock("div", {
                class: "param",
                key: childIndex
              }, [
                createVNode(unref(Icon), {
                  class: "icon",
                  icon: "ant-design:arrow-up-outlined"
                }),
                createElementVNode("span", _hoisted_2$c, [
                  createVNode(unref(Tooltip), {
                    placement: "right",
                    title: paramsDesc.value ? paramsDesc.value[index2] : ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["title"])
                ]),
                createVNode(_component_FormulaConfig, {
                  "query-mode": props.queryMode,
                  index: childIndex,
                  "com-type": item.comType,
                  "param-type": item.paramType,
                  "param-value": item.value,
                  config: isListParam(item.paramType) && ((_b = (_a2 = formulaConfig.value) == null ? void 0 : _a2.value) == null ? void 0 : _b.param) && ((_e = (_d = (_c = formulaConfig.value) == null ? void 0 : _c.value) == null ? void 0 : _d.param[index2]) == null ? void 0 : _e.value) ? (_h = (_g = (_f = formulaConfig.value) == null ? void 0 : _f.value) == null ? void 0 : _g.param[index2]) == null ? void 0 : _h.value[childIndex] : (_j = (_i = formulaConfig.value) == null ? void 0 : _i.value) == null ? void 0 : _j.param[index2],
                  "sql-query": props.sqlQuery,
                  onFormulaChange: ($event) => setPramValue($event, index2, item.paramType, childIndex)
                }, null, 8, ["query-mode", "index", "com-type", "param-type", "param-value", "config", "sql-query", "onFormulaChange"]),
                childIndex > 0 ? (openBlock(), createBlock(unref(Button), {
                  key: 0,
                  size: "small",
                  type: "link",
                  onClick: ($event) => deleteParam(index2, childIndex)
                }, {
                  icon: withCtx(() => [
                    createVNode(unref(Icon), { icon: "ant-design:delete-outlined" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]);
            }), 128)),
            isListParam(item.paramType) ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
              createVNode(unref(Button), {
                type: "primary",
                onClick: ($event) => addParam(index2)
              }, {
                default: withCtx(() => _cache[0] || (_cache[0] = [
                  createTextVNode("增加参数")
                ])),
                _: 2
              }, 1032, ["onClick"])
            ])) : createCommentVNode("", true)
          ]);
        }), 128))
      ], 2);
    };
  }
});
const FormulaConfig = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-0526f220"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "ParamsModal",
  emits: ["register", "submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const [registerForm, { resetFields, setFieldsValue, validate, resetSchema }] = useForm({
      name: "model_form_item",
      labelWidth: 180,
      baseColProps: { span: 24 },
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const apiStore = useApiStore();
    const level = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(
      async (data) => {
        setModalProps({ confirmLoading: false, width: "600px", canFullscreen: false });
        level.value = data.level;
        const variables = apiStore.getVariables.filter((item) => item.name && data.params.has(item.name)).map((item) => {
          return {
            field: item.name,
            label: item.name,
            component: "Input",
            required: item.required || false,
            helpMessage: item.remark || "",
            defaultValue: item.defaultValue
          };
        });
        resetSchema(variables).then(() => {
          resetFields().then();
          setFieldsValue(
            variables.reduce((prev, next) => {
              if (next) {
                prev[next.field] = next.defaultValue;
              }
              return prev;
            }, {})
          ).then();
        });
      }
    );
    async function handleSubmit() {
      try {
        const values = await validate();
        emit("submit", values, level.value);
        closeModal();
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "输入参数值",
        onOk: handleSubmit
      }), {
        default: withCtx(() => [
          createVNode(unref(BasicForm), {
            onRegister: unref(registerForm),
            onSubmit: handleSubmit
          }, null, 8, ["onRegister"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "FormulaTest",
  props: {
    open: { type: Boolean, default: false },
    curQuery: { type: Object },
    curParams: { type: Object }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const themeColor = useRootSetting().getThemeColor;
    const apiStore = useApiStore();
    const openDrawer = ref(false);
    watch(
      () => props.open,
      (val) => {
        openDrawer.value = val;
        if (val) {
          buildTableData();
        }
      }
    );
    const buildTableData = useDebounceFn((page) => {
      let pageNum = 1;
      let pageSize = 10;
      if (page) {
        pageNum = page.current;
        pageSize = page.pageSize;
      }
      formulaTest(
        {
          sourceId: apiStore.getSourceId,
          sourceType: apiStore.getSourceType,
          sqlQuery: props.curQuery || {},
          params: props.curParams
        },
        { pageNum, pageSize }
      ).then((res) => {
        const columns = Object.keys(res.headers).map((key) => ({
          title: key,
          dataIndex: key
        }));
        setColumns(columns);
        setDataTable(res.table.list);
        setPagination({
          total: res.table.total,
          pageSize: res.table.pageSize,
          current: res.table.pageNum
        });
      }).catch(() => {
        setColumns([]);
      });
    }, 200);
    const [registerDataTable, { setColumns, setTableData: setDataTable, setPagination }] = useTable({
      bordered: true,
      showIndexColumn: false,
      isCanResizeParent: true,
      canResize: true,
      onChange: buildTableData
    });
    const onClose = () => {
      openDrawer.value = false;
      emit("close", true);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Drawer), {
        title: "测试结果",
        placement: "bottom",
        open: openDrawer.value,
        onClose,
        height: 450
      }, {
        default: withCtx(() => [
          createVNode(unref(BasicTable), { onRegister: unref(registerDataTable) }, {
            bodyCell: withCtx(({ column, record }) => [
              (column == null ? void 0 : column.key) === unref(formulaColName) ? (openBlock(), createElementBlock("div", {
                key: 0,
                style: normalizeStyle({ color: unref(themeColor) })
              }, toDisplayString(record[unref(formulaColName)]), 5)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["onRegister"])
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "FormulaColModal",
  props: {
    queryMode: { type: Boolean, default: false }
  },
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const fieldIndex = ref();
    const isUpdate = ref();
    const eName = ref();
    const formulaConfig = reactive({
      type: ExpressionType.formula,
      value: null
    });
    let sqlQuery;
    const key = ref(0);
    const apiStore = useApiStore();
    const [registerParamsModal, { openModal: openParamsModal }] = useModal();
    const curQuery = ref();
    const curParams = ref();
    const open = ref(false);
    const buildName2 = (formula) => {
      let name2 = "";
      if (Array.isArray(formula.value)) {
        formula.value.forEach((item) => {
          name2 += `${buildName2(item)},`;
        });
        return name2.endsWith(",") ? name2 = name2.slice(0, Math.max(0, name2.lastIndexOf(","))) : name2;
      }
      if (formula.type === ExpressionType.formula && formula.value) {
        name2 = `${formula.value.cnName}(`;
        formula.value.param.forEach((child) => {
          name2 += `${buildName2(child)},`;
        });
        if (name2.endsWith(",")) {
          name2 = name2.slice(0, Math.max(0, name2.lastIndexOf(",")));
        }
        name2 += ")";
        return name2;
      }
      if (formula.type === ExpressionType.param) {
        name2 += formula.value instanceof Object ? formula.value[formula.value[DisplayName]] : formula.value;
      }
      return name2;
    };
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "800px", minHeight: 500, maskClosable: false, keyboard: false });
      fieldIndex.value = data.index;
      isUpdate.value = data.isUpdate;
      await apiStore.setFormulaMap();
      sqlQuery = data.sqlQuery;
      if (data.isUpdate) {
        formulaConfig.value = JSON.parse(JSON.stringify(data.formulaConfig.value));
        eName.value = buildName2(formulaConfig);
      } else {
        formulaConfig.value = null;
        eName.value = "";
      }
      key.value++;
    });
    async function submit() {
      try {
        if (!formulaConfig.value) return;
        closeModal();
        emit("submit", isUpdate.value, fieldIndex.value, { ...formulaConfig, name: eName.value });
      } catch (error) {
        console.log(error);
      }
    }
    function formulaChange(formula, refresh) {
      formulaConfig.value = formula.value;
      if (formula) {
        eName.value = buildName2(formula);
      }
      if (refresh) {
        key.value++;
      }
    }
    function testFormula() {
      curQuery.value = {
        ...JSON.parse(JSON.stringify(sqlQuery)),
        customColumns: [
          {
            name: formulaColName,
            expressions: [{ type: ExpressionType.formula, value: formulaConfig.value }]
          }
        ]
      };
      const params = getParams(curQuery.value || {});
      if (params && params.size > 0) {
        openParamsModal(true, { params, level: 1 });
        return;
      }
      paramQuery({});
    }
    function paramQuery(data) {
      curParams.value = data;
      open.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(BasicModal), mergeProps(_ctx.$attrs, {
          onRegister: unref(registerModal),
          title: "公式配置",
          onOk: submit
        }), {
          centerFooter: withCtx(() => [
            createVNode(unref(Button), {
              onClick: testFormula,
              type: "primary",
              danger: ""
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("测试")
              ])),
              _: 1
            })
          ]),
          default: withCtx(() => [
            eName.value ? (openBlock(), createBlock(unref(Alert), {
              key: 0,
              class: "mb-2",
              message: eName.value,
              type: "info",
              "show-icon": ""
            }, {
              icon: withCtx(() => [
                createVNode(unref(Icon), { icon: "ant-design:function-outlined" })
              ]),
              _: 1
            }, 8, ["message"])) : createCommentVNode("", true),
            (openBlock(), createBlock(FormulaConfig, {
              "query-mode": __props.queryMode,
              key: key.value,
              "sql-query": unref(sqlQuery),
              "show-radio": false,
              config: formulaConfig,
              onFormulaChange: formulaChange
            }, null, 8, ["query-mode", "sql-query", "config"])),
            createVNode(_sfc_main$v, {
              "cur-query": curQuery.value,
              "cur-params": curParams.value,
              open: open.value,
              onClose: _cache[0] || (_cache[0] = () => open.value = false)
            }, null, 8, ["cur-query", "cur-params", "open"])
          ]),
          _: 1
        }, 16, ["onRegister"]),
        createVNode(_sfc_main$w, {
          onRegister: unref(registerParamsModal),
          onSubmit: paramQuery
        }, null, 8, ["onRegister"])
      ], 64);
    };
  }
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "CustomColModal",
  props: {
    sqlQuery: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["submit", "register"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isUpdate = ref(true);
    const color2 = useRootSetting().getThemeColor;
    const { prefixCls } = useDesign("col-modal");
    const expressions = ref([]);
    const dragItems = reactive({
      formula: { key: "formula", name: "公式", icon: "icon-mfish-sum", color: "#cd201f" },
      add: {
        key: "add",
        name: "加号",
        icon: "icon-mfish-add",
        color: color2
      },
      subtract: {
        key: "subtract",
        name: "减号",
        icon: "icon-mfish-subtract",
        color: color2,
        slot: true
      },
      multiply: {
        key: "multiply",
        name: "乘号",
        icon: "icon-mfish-multiply",
        color: color2,
        slot: true
      },
      divide: {
        key: "divide",
        name: "除号",
        icon: "icon-mfish-divide",
        color: color2,
        slot: true
      },
      leftBracket: {
        key: "leftBracket",
        name: "左括号",
        icon: "icon-mfish-left-bracket",
        color: color2,
        slot: true
      },
      rightBracket: {
        key: "rightBracket",
        name: "右括号",
        icon: "icon-mfish-right-bracket",
        color: color2,
        slot: true
      }
    });
    const dragValues = reactive({
      formula: { type: ExpressionType.formula, value: "" },
      add: { type: ExpressionType.operator, name: "add", value: "+", slot: true },
      subtract: { type: ExpressionType.operator, name: "subtract", value: "-", slot: true },
      multiply: { type: ExpressionType.operator, name: "multiply", value: "*", slot: true },
      divide: { type: ExpressionType.operator, name: "divide", value: "/", slot: true },
      leftBracket: { type: ExpressionType.operator, name: "leftBracket", value: "(", slot: true },
      rightBracket: { type: ExpressionType.operator, name: "rightBracket", value: ")", slot: true }
    });
    const colFormSchema = [
      {
        field: "customCol",
        label: "自定义列",
        component: "Input",
        slot: "customCol"
      },
      {
        field: "name",
        label: "名称",
        component: "Input",
        componentProps: {
          disabled: props.queryMode
        },
        required: true
      }
    ];
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      name: "model_form_item",
      labelWidth: 100,
      baseColProps: { span: 24 },
      schemas: colFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerFieldModal, { openModal: openFieldModal }] = useModal();
    const [registerFormulaModal, { openModal: openFormulaModal }] = useModal();
    const index2 = ref();
    function dragButton(e, item) {
      e.dataTransfer.setData("Text", JSON.stringify(dragValues[item.key]));
      e.stopPropagation();
    }
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "600px", maskClosable: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        index2.value = data.index;
        setFieldsValue({
          ...data.customCol
        }).then();
        expressions.value = JSON.parse(JSON.stringify(data.customCol.expressions));
      } else {
        index2.value = void 0;
        expressions.value = [];
      }
    });
    const [registerParamsModal, { openModal: openParamsModal }] = useModal();
    const curQuery = ref();
    const curParams = ref();
    const open = ref(false);
    async function handleSubmit() {
      try {
        const values = await validate();
        emit("submit", index2.value, { name: values.name, expressions: expressions.value });
        closeModal();
      } catch (error) {
        console.log(error);
      }
    }
    function blockBuild(index22, item, callback) {
      if (item.type === ExpressionType.operator) {
        callback(true, item);
        return;
      }
      callback(false, item);
      openFormulaModal(true, {
        index: index22,
        sqlQuery: { ...props.sqlQuery },
        isUpdate: false
      });
    }
    function addField() {
      openFieldModal(true, {
        sqlQuery: { ...props.sqlQuery },
        isUpdate: false
      });
    }
    function editField(index22, item) {
      if (item.type === ExpressionType.field) {
        openFieldModal(true, {
          index: index22,
          field: item,
          sqlQuery: { ...props.sqlQuery },
          isUpdate: true
        });
      }
      if (item.type === ExpressionType.formula) {
        openFormulaModal(true, {
          index: index22,
          formulaConfig: item,
          sqlQuery: { ...props.sqlQuery },
          isUpdate: true
        });
      }
    }
    function fieldCreate(index22, field) {
      if (index22 === void 0) {
        if (expressions.value) {
          expressions.value.push(field);
        } else {
          expressions.value = [field];
        }
      } else {
        if (expressions.value) {
          expressions.value[index22] = field;
        }
      }
    }
    function formulaCreate(isUpdate2, index22, formula) {
      if (isUpdate2) {
        if (expressions.value) {
          expressions.value[index22] = formula;
        }
        return;
      }
      if (!expressions.value) {
        expressions.value = [formula];
        return;
      }
      if (index22) {
        expressions.value.splice(index22, 0, formula);
      } else {
        expressions.value.push(formula);
      }
    }
    function headerBarClick(headerCallBack, item) {
      if (item.type === ExpressionType.operator) {
        headerCallBack(item);
        return;
      }
      openFormulaModal(true, {
        index: void 0,
        sqlQuery: props.sqlQuery,
        isUpdate: false
      });
      console.log(item, "item");
    }
    function testFormula() {
      curQuery.value = {
        ...JSON.parse(JSON.stringify(props.sqlQuery)),
        customColumns: [
          {
            name: formulaColName,
            expressions
          }
        ]
      };
      const params = getParams(curQuery.value || {});
      if (params && params.size > 0) {
        openParamsModal(true, { params, level: 1 });
        return;
      }
      paramQuery({});
    }
    function paramQuery(data) {
      curParams.value = data;
      open.value = true;
    }
    return (_ctx, _cache) => {
      const _component_AButton = resolveComponent("AButton");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(BasicModal), mergeProps(_ctx.$attrs, {
          onRegister: unref(registerModal),
          title: "自定义列配置",
          onOk: handleSubmit
        }), {
          centerFooter: withCtx(() => [
            createVNode(_component_AButton, {
              onClick: testFormula,
              type: "primary",
              danger: ""
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("测试")
              ])),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(BasicForm), {
              onRegister: unref(registerForm),
              onSubmit: handleSubmit
            }, {
              customCol: withCtx(() => [
                createVNode(unref(DraggableInput), {
                  "query-mode": __props.queryMode,
                  "add-title": "添加字段",
                  items: expressions.value,
                  onBlockBuild: blockBuild,
                  onAddBlock: addField,
                  onEditBlock: editField
                }, createSlots({
                  tag: withCtx(({ element }) => [
                    createElementVNode("div", {
                      class: normalizeClass(`${unref(prefixCls)}-slot-tag`)
                    }, [
                      createVNode(unref(IconFont), {
                        icon: dragItems[element.name].icon,
                        color: unref(color2)
                      }, null, 8, ["icon", "color"])
                    ], 2)
                  ]),
                  _: 2
                }, [
                  !__props.queryMode ? {
                    name: "headerBar",
                    fn: withCtx(({ headerCallBack }) => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(dragItems, (item, index22) => {
                        return openBlock(), createBlock(unref(Tooltip), {
                          key: index22,
                          title: item.name
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Tag), {
                              style: { "cursor": "pointer" },
                              color: item.color,
                              draggable: "true",
                              onClick: ($event) => headerBarClick(headerCallBack, dragValues[item.key]),
                              onDragstart: ($event) => dragButton($event, item)
                            }, {
                              icon: withCtx(() => [
                                createVNode(unref(IconFont), {
                                  icon: item.icon
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color", "onClick", "onDragstart"])
                          ]),
                          _: 2
                        }, 1032, ["title"]);
                      }), 128))
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["query-mode", "items"])
              ]),
              _: 1
            }, 8, ["onRegister"]),
            createVNode(_sfc_main$C, {
              onRegister: unref(registerFieldModal),
              onSubmit: fieldCreate
            }, null, 8, ["onRegister"]),
            createVNode(_sfc_main$u, {
              "query-mode": __props.queryMode,
              onRegister: unref(registerFormulaModal),
              onSubmit: formulaCreate
            }, null, 8, ["query-mode", "onRegister"]),
            createVNode(_sfc_main$v, {
              "cur-query": curQuery.value,
              "cur-params": curParams.value,
              open: open.value,
              onClose: _cache[0] || (_cache[0] = () => open.value = false)
            }, null, 8, ["cur-query", "cur-params", "open"])
          ]),
          _: 1
        }, 16, ["onRegister"]),
        createVNode(_sfc_main$w, {
          onRegister: unref(registerParamsModal),
          onSubmit: paramQuery
        }, null, 8, ["onRegister"])
      ], 64);
    };
  }
});
const CustomColModal = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-df8a88df"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "TableCustomCol",
  props: {
    sqlQuery: { type: Object },
    level: { type: Number, default: 1 },
    configMitt: { type: Object },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["customColChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const customColumns = ref([]);
    function deleteColumn() {
      emit("customColChange");
    }
    const [registerModal, { openModal }] = useModal();
    const showCustomColButton = computed(() => {
      var _a;
      return ((_a = props.sqlQuery) == null ? void 0 : _a.customColumns) === void 0 && isNeedNest(props.sqlQuery, props.level) && !props.queryMode;
    });
    watch(
      () => {
        var _a;
        return (_a = props.sqlQuery) == null ? void 0 : _a.customColumns;
      },
      (val) => {
        customColumns.value = val ? [...val] : [];
      },
      { immediate: true }
    );
    function addColumn() {
      openModal(true, {
        sqlQuery: props.sqlQuery,
        isUpdate: false
      });
    }
    function editColumn(index2, item) {
      openModal(true, {
        index: index2,
        customCol: { ...item },
        sqlQuery: props.sqlQuery,
        isUpdate: true
      });
    }
    function dragColumn(item) {
      emit("customColChange", [...item]);
    }
    function addCustomCols() {
      emit("customColChange", []);
    }
    function executeSql(key) {
      queryDataEvent(
        props.configMitt,
        {
          ...props.sqlQuery,
          customColumns: customColumns.value,
          aggregates: [],
          groups: [],
          orders: [],
          limit: void 0
        },
        key
      );
    }
    function createCustomCol(index2, col) {
      if (index2 == void 0) {
        if (customColumns.value) {
          customColumns.value.push(col);
        } else {
          customColumns.value = [col];
        }
      } else {
        if (customColumns.value) {
          customColumns.value[index2] = col;
        }
      }
      emit("customColChange", customColumns.value ? [...customColumns.value] : []);
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", null, [
        ((_a = __props.sqlQuery) == null ? void 0 : _a.customColumns) !== void 0 ? (openBlock(), createBlock(ConfigWrapper, {
          key: 0,
          "query-mode": __props.queryMode,
          icon: "ant-design:insert-row-right-outlined",
          title: "自定义列",
          onDeleteConfig: deleteColumn,
          onExecute: executeSql,
          full: true
        }, {
          config: withCtx(() => [
            createVNode(unref(DraggableInput), {
              "query-mode": __props.queryMode,
              items: customColumns.value,
              "add-title": "添加自定义列",
              onAddBlock: addColumn,
              onEditBlock: editColumn,
              onDragChange: dragColumn
            }, null, 8, ["query-mode", "items"])
          ]),
          _: 1
        }, 8, ["query-mode"])) : createCommentVNode("", true),
        showCustomColButton.value ? (openBlock(), createBlock(ConfigButton, {
          key: 1,
          class: "config-button",
          title: "自定义列",
          icon: "ant-design:insert-row-right-outlined",
          level: 0,
          onClick: withModifiers(addCustomCols, ["prevent"])
        })) : createCommentVNode("", true),
        createVNode(CustomColModal, {
          "query-mode": __props.queryMode,
          onRegister: unref(registerModal),
          "sql-query": __props.sqlQuery,
          onSubmit: createCustomCol
        }, null, 8, ["query-mode", "onRegister", "sql-query"])
      ]);
    };
  }
});
const _hoisted_1$h = { class: "btn-bar" };
const tableAlias = "MFISH_ALIAS_";
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ApiConfig",
  props: {
    configKey: { type: Number, default: 0, require: true },
    sqlQuery: { type: Object, require: true, default: void 0 },
    level: { type: Number, default: 1 },
    configMitt: { type: Object, default: void 0 },
    queryMode: { type: Boolean, default: false }
  },
  emits: ["configChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { sqlQuery } = toRefs(props);
    const { prefixCls } = useDesign("api-config");
    const themeColor = useRootSetting().getThemeColor;
    const queryDataRef = ref();
    const querySqlRef = ref();
    const { focused } = useFocus(queryDataRef);
    const { focused: sqlFocused } = useFocus(querySqlRef);
    const apiStore = useApiStore();
    const queryEnter = ref(false);
    const showJoinButton = computed(() => {
      var _a;
      if (apiStore.getSourceType === 1 || props.queryMode) {
        return false;
      }
      if (props.sqlQuery && ((_a = props.sqlQuery) == null ? void 0 : _a.joins)) {
        for (const join of props.sqlQuery.joins) {
          if (!joinComplete(join)) return false;
        }
      }
      return true;
    });
    const showFilterButton = computed(() => {
      var _a;
      return (((_a = props.sqlQuery) == null ? void 0 : _a.filters) === void 0 || isNeedNest(props.sqlQuery, props.level)) && !props.queryMode;
    });
    const showCustomColButton = computed(() => {
      var _a;
      return (((_a = props.sqlQuery) == null ? void 0 : _a.customColumns) === void 0 || isNeedNest(props.sqlQuery, props.level)) && !props.queryMode;
    });
    const showAggButton = computed(() => {
      var _a;
      return (((_a = props.sqlQuery) == null ? void 0 : _a.aggregates) === void 0 || isNeedNest(props.sqlQuery, props.level)) && !props.queryMode;
    });
    const showOrderButton = computed(() => {
      var _a;
      return ((_a = props.sqlQuery) == null ? void 0 : _a.orders) === void 0 && !props.queryMode;
    });
    const showLimitButton = computed(() => {
      var _a;
      return ((_a = props.sqlQuery) == null ? void 0 : _a.limit) === void 0 && !props.queryMode;
    });
    function fieldChange(fields) {
      emit("configChange", { ...props.sqlQuery, fields });
      apiStore.setFieldsChange(props.level);
    }
    function joinChange(joins) {
      const sqlQuery2 = { ...props.sqlQuery, joins };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
      apiStore.setFieldsChange(props.level);
    }
    function filterChange(filters) {
      const sqlQuery2 = { ...props.sqlQuery, filters };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
    }
    function customColChange(customColumns) {
      const sqlQuery2 = { ...props.sqlQuery, customColumns };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
      apiStore.setFieldsChange(props.level);
    }
    function aggregateChange(aggregates) {
      const sqlQuery2 = { ...props.sqlQuery, aggregates };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
      apiStore.setFieldsChange(props.level);
    }
    function groupChange(groups) {
      const sqlQuery2 = { ...props.sqlQuery, groups };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
      apiStore.setFieldsChange(props.level);
    }
    function deleteAggregate() {
      const sqlQuery2 = { ...props.sqlQuery, aggregates: void 0, groups: void 0 };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
      apiStore.setFieldsChange(props.level);
    }
    function orderChange(orders) {
      const sqlQuery2 = { ...props.sqlQuery, orders };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
    }
    function limitChange(limit) {
      const sqlQuery2 = { ...props.sqlQuery, limit };
      if (upgradeNest(sqlQuery2)) return;
      emit("configChange", sqlQuery2);
    }
    function configChange(sqlQuery2) {
      const query = { ...props.sqlQuery, sqlQuery: sqlQuery2 };
      if (upgradeNest(query)) return;
      console.log(props.level, "level");
      console.log(JSON.parse(JSON.stringify(sqlQuery2)), "sqlQuery");
      emit("configChange", query);
    }
    function upgradeNest(sqlQuery2) {
      if ((sqlQuery2 == null ? void 0 : sqlQuery2.sqlQuery) && (sqlQuery2 == null ? void 0 : sqlQuery2.joins) && sqlQuery2.joins.length === 0 && sqlQuery2.filters === void 0 && sqlQuery2.aggregates === void 0 && sqlQuery2.customColumns === void 0 && sqlQuery2.groups === void 0 && sqlQuery2.orders === void 0 && sqlQuery2.limit === void 0) {
        emit("configChange", JSON.parse(JSON.stringify(sqlQuery2.sqlQuery)), true);
        return true;
      }
      return false;
    }
    async function createNestSql() {
      const sqlQuery2 = {
        sourceTable: tableAlias + props.level,
        joins: [],
        fields: [],
        sqlQuery: { ...props.sqlQuery }
      };
      sqlQuery2.fields = await getInnerFields(sqlQuery2);
      return sqlQuery2;
    }
    async function addJoins() {
      var _a, _b;
      if (isNeedNest(props.sqlQuery, props.level)) {
        const sqlQuery2 = await createNestSql();
        sqlQuery2.joins = [];
        addJoin(sqlQuery2.joins);
        emit("configChange", sqlQuery2, true);
        return;
      }
      if ((_a = sqlQuery == null ? void 0 : sqlQuery.value) == null ? void 0 : _a.joins) {
        addJoin((_b = sqlQuery == null ? void 0 : sqlQuery.value) == null ? void 0 : _b.joins);
      }
    }
    function addFilters() {
      addConfig(["filters"]);
    }
    function addColumns() {
      addConfig(["customColumns"]);
    }
    function addAggregates() {
      addConfig(["aggregates", "groups"]);
    }
    async function addConfig(configs) {
      let query;
      const setQuery = (query2, isNest) => {
        configs.forEach((config) => query2[config] = []);
        emit("configChange", query2, isNest);
      };
      if (isNeedNest(props.sqlQuery, props.level)) {
        query = await createNestSql();
        setQuery(query, true);
        return;
      }
      query = { ...props.sqlQuery };
      setQuery(query, false);
    }
    function addOrders() {
      var _a;
      if (!((_a = sqlQuery == null ? void 0 : sqlQuery.value) == null ? void 0 : _a.orders)) {
        emit("configChange", { ...props.sqlQuery, orders: [] });
      }
    }
    function addLimit() {
      var _a;
      if (!((_a = sqlQuery == null ? void 0 : sqlQuery.value) == null ? void 0 : _a.limit)) {
        emit("configChange", { ...props.sqlQuery, limit: 1e3 });
      }
    }
    function querySql() {
      var _a;
      (_a = props.configMitt) == null ? void 0 : _a.emit(ApiConfigEvent.QUERY_SQL, props.sqlQuery);
      sqlFocused.value = false;
    }
    function queryData() {
      queryDataEvent(props.configMitt, props.sqlQuery, props.level);
      focused.value = false;
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_ApiConfig = resolveComponent("ApiConfig", true);
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(prefixCls),
          __props.level < unref(apiStore).getLevel ? "inner" : "",
          unref(apiStore).getShowData && unref(apiStore).getShowDataLevel === __props.level ? "active" : ""
        ])
      }, [
        unref(apiStore).getShowData && unref(apiStore).getShowDataLevel === __props.level ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "select",
          style: normalizeStyle({ backgroundColor: unref(themeColor) })
        }, [
          createVNode(unref(Icon), {
            icon: "ant-design:check-outlined",
            color: "#FFFFFF",
            size: 12
          })
        ], 4)) : createCommentVNode("", true),
        ((_a = unref(sqlQuery)) == null ? void 0 : _a.sqlQuery) !== void 0 ? (openBlock(), createBlock(_component_ApiConfig, {
          key: 1,
          "config-key": __props.configKey,
          "query-mode": __props.queryMode,
          "sql-query": unref(sqlQuery).sqlQuery,
          level: __props.level - 1,
          "config-mitt": __props.configMitt,
          onConfigChange: configChange
        }, null, 8, ["config-key", "query-mode", "sql-query", "level", "config-mitt"])) : createCommentVNode("", true),
        (openBlock(), createBlock(TableFields, {
          key: __props.configKey + unref(apiStore).getFieldsChange,
          class: "config",
          "sql-query": unref(sqlQuery),
          "query-mode": __props.queryMode,
          "config-mitt": __props.configMitt,
          onFieldChange: fieldChange
        }, null, 8, ["sql-query", "query-mode", "config-mitt"])),
        (openBlock(), createBlock(TableJoins, {
          level: __props.level,
          key: __props.configKey,
          class: "config",
          "sql-query": unref(sqlQuery),
          "config-mitt": __props.configMitt,
          "query-mode": __props.queryMode,
          onJoinChange: joinChange
        }, null, 8, ["level", "sql-query", "config-mitt", "query-mode"])),
        (openBlock(), createBlock(_sfc_main$I, {
          "query-mode": __props.queryMode,
          level: __props.level,
          key: __props.configKey,
          class: "config",
          "sql-query": unref(sqlQuery),
          "config-mitt": __props.configMitt,
          onFilterChange: filterChange
        }, null, 8, ["query-mode", "level", "sql-query", "config-mitt"])),
        (openBlock(), createBlock(_sfc_main$s, {
          "query-mode": __props.queryMode,
          level: __props.level,
          key: __props.configKey,
          class: "config",
          "sql-query": unref(sqlQuery),
          "config-mitt": __props.configMitt,
          onCustomColChange: customColChange
        }, null, 8, ["query-mode", "level", "sql-query", "config-mitt"])),
        (openBlock(), createBlock(TableAggregate, {
          "query-mode": __props.queryMode,
          key: __props.configKey,
          class: "config",
          "sql-query": unref(sqlQuery),
          "config-mitt": __props.configMitt,
          onAggregateChange: aggregateChange,
          onGroupChange: groupChange,
          onDeleteAggregate: deleteAggregate
        }, null, 8, ["query-mode", "sql-query", "config-mitt"])),
        (openBlock(), createBlock(_sfc_main$D, {
          "query-mode": __props.queryMode,
          key: __props.configKey,
          class: "config",
          "sql-query": unref(sqlQuery),
          "config-mitt": __props.configMitt,
          onOrderChange: orderChange
        }, null, 8, ["query-mode", "sql-query", "config-mitt"])),
        (openBlock(), createBlock(_sfc_main$O, {
          "query-mode": __props.queryMode,
          key: __props.configKey,
          class: "config",
          "sql-query": unref(sqlQuery),
          "config-mitt": __props.configMitt,
          onLimitChange: limitChange
        }, null, 8, ["query-mode", "sql-query", "config-mitt"])),
        createElementVNode("div", _hoisted_1$h, [
          showJoinButton.value ? (openBlock(), createBlock(ConfigButton, {
            key: 0,
            class: "config-button",
            title: "关联",
            iconfont: "icon-mfish-join",
            level: __props.level,
            onClick: addJoins
          }, null, 8, ["level"])) : createCommentVNode("", true),
          showFilterButton.value ? (openBlock(), createBlock(ConfigButton, {
            key: 1,
            class: "config-button",
            title: "过滤",
            icon: "ant-design:filter-outlined",
            level: __props.level,
            onClick: addFilters
          }, null, 8, ["level"])) : createCommentVNode("", true),
          showCustomColButton.value ? (openBlock(), createBlock(ConfigButton, {
            key: 2,
            class: "config-button",
            title: "自定义列",
            icon: "ant-design:insert-row-right-outlined",
            level: __props.level,
            onClick: addColumns
          }, null, 8, ["level"])) : createCommentVNode("", true),
          showAggButton.value ? (openBlock(), createBlock(ConfigButton, {
            key: 3,
            class: "config-button",
            title: "聚合",
            iconfont: "icon-mfish-sum",
            level: __props.level,
            onClick: addAggregates
          }, null, 8, ["level"])) : createCommentVNode("", true),
          showOrderButton.value ? (openBlock(), createBlock(ConfigButton, {
            key: 4,
            class: "config-button",
            title: "排序",
            icon: "ant-design:sort-ascending-outlined",
            level: __props.level,
            onClick: addOrders
          }, null, 8, ["level"])) : createCommentVNode("", true),
          showLimitButton.value ? (openBlock(), createBlock(ConfigButton, {
            key: 5,
            class: "config-button",
            title: "行数",
            icon: "ant-design:column-height-outlined",
            level: __props.level,
            onClick: addLimit
          }, null, 8, ["level"])) : createCommentVNode("", true),
          createVNode(ConfigButton, {
            class: "config-button",
            ref_key: "querySqlRef",
            ref: querySqlRef,
            style: normalizeStyle({ fontWeight: "bold", border: `1px dashed ${unref(themeColor)}` }),
            title: "查看SQL",
            icon: "ant-design:console-sql-outlined",
            level: __props.level,
            onClick: querySql
          }, null, 8, ["style", "level"]),
          createVNode(ConfigButton, {
            class: "config-button",
            style: normalizeStyle({ fontWeight: "bold", border: `1px dashed ${unref(themeColor)}` }),
            ref_key: "queryDataRef",
            ref: queryDataRef,
            title: "执行",
            onMouseenter: _cache[0] || (_cache[0] = ($event) => queryEnter.value = true),
            onMouseleave: _cache[1] || (_cache[1] = ($event) => queryEnter.value = false),
            icon: !unref(apiStore).getShowData || unref(apiStore).getShowDataLevel !== __props.level || queryEnter.value ? "ant-design:caret-right-outlined" : "ant-design:check-outlined",
            level: __props.level,
            onClick: queryData
          }, null, 8, ["style", "icon", "level"])
        ])
      ], 2);
    };
  }
});
const ApiConfig = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-32695b70"]]);
const _hoisted_1$g = { key: 0 };
const _hoisted_2$b = { key: 1 };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "SqlQueryModal",
  setup(__props) {
    const editHeight = ref(500);
    const sql = ref("");
    const [registerModal, { setModalProps }] = useModalInner(async (data) => {
      setModalProps({ width: "800px" });
      sql.value = data;
    });
    const { copy, copied } = useClipboard({ legacy: true });
    function heightChange(height) {
      editHeight.value = height;
    }
    return (_ctx, _cache) => {
      const _component_AButton = resolveComponent("AButton");
      return openBlock(), createBlock(unref(BasicModal), mergeProps(_ctx.$attrs, {
        onRegister: unref(registerModal),
        title: "SQL查看",
        "show-ok-btn": false,
        "cancel-text": "关闭",
        onHeightChange: heightChange
      }), {
        insertFooter: withCtx(() => [
          createVNode(_component_AButton, {
            onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(sql.value)),
            color: unref(copied) ? "success" : "primary"
          }, {
            default: withCtx(() => [
              !unref(copied) ? (openBlock(), createElementBlock("span", _hoisted_1$g, "拷贝")) : (openBlock(), createElementBlock("span", _hoisted_2$b, "已拷贝"))
            ]),
            _: 1
          }, 8, ["color"])
        ]),
        default: withCtx(() => [
          createVNode(unref(CodeEditor), {
            style: normalizeStyle({ height: `${editHeight.value}px` }),
            mode: unref(MODE).JS,
            value: sql.value,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => sql.value = $event),
            readonly: true
          }, null, 8, ["style", "mode", "value"])
        ]),
        _: 1
      }, 16, ["onRegister"]);
    };
  }
});
function usePreviewFit(width, height, fitType, fitDom, callback, fixScale = 1) {
  const scale = {
    width: 1,
    height: 1
  };
  const calcScale = () => {
    if (!fitDom) return;
    switch (fitType) {
      case FitType.FIT_WIDTH: {
        scale.width = Number.parseFloat((window.innerWidth / width).toFixed(5));
        break;
      }
      case FitType.FIT_WIDTH_SCALE: {
        scale.width = Number.parseFloat((window.innerWidth / width).toFixed(5));
        scale.height = scale.width;
        break;
      }
      case FitType.FIT_HEIGHT: {
        scale.height = Number.parseFloat((window.innerHeight / height).toFixed(5));
        break;
      }
      case FitType.FIT_HEIGHT_SCALE: {
        scale.height = Number.parseFloat((window.innerHeight / height).toFixed(5));
        scale.width = scale.height;
        break;
      }
      case FitType.FIT_BOX: {
        scale.width = Number.parseFloat((window.innerWidth / width).toFixed(5));
        scale.height = Number.parseFloat((window.innerHeight / height).toFixed(5));
        break;
      }
    }
    fitDom.style.transform = `scale(${scale.width * fixScale}, ${scale.height * fixScale})`;
    if (callback) {
      callback(scale);
    }
  };
  const resize = throttle(() => {
    calcScale();
  }, 200);
  const windowResize = () => {
    window.addEventListener("resize", resize);
  };
  const unWindowResize = () => {
    window.removeEventListener("resize", resize);
  };
  return {
    windowResize,
    unWindowResize,
    calcScale
  };
}
const _hoisted_1$f = ["src"];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...{ name: "PreviewFrame" },
  __name: "PreviewFrame",
  props: {
    frameSrc: propTypes.string.def(""),
    frameWidth: propTypes.number.def(400),
    frameHeight: propTypes.number.def(300)
  },
  emits: ["message"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loading = ref(true);
    const frameRef = ref();
    const { prefixCls } = useDesign("preview-frame");
    const getWrapStyle = computed(() => {
      return {
        width: `${props.frameWidth}px`,
        height: `${props.frameHeight}px`
      };
    });
    function hideLoading() {
      loading.value = false;
    }
    const messageHandler = (e) => {
      emit("message", e.data);
    };
    const postMessage = (message, targetOrigin, transfer) => {
      var _a;
      const iframe = unref(frameRef);
      if (!iframe) return;
      (_a = iframe.contentWindow) == null ? void 0 : _a.postMessage(message, targetOrigin, transfer);
    };
    const reload = () => {
      var _a;
      loading.value = true;
      const iframe = frameRef.value;
      if (!iframe) return;
      (_a = iframe.contentWindow) == null ? void 0 : _a.location.reload();
      loading.value = false;
    };
    onMounted(() => {
      window.addEventListener("message", messageHandler);
    });
    onUnmounted(() => {
      window.removeEventListener("message", messageHandler);
    });
    __expose({ postMessage, reload });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScrollContainer), null, {
        default: withCtx(() => [
          createElementVNode("iframe", {
            style: normalizeStyle(getWrapStyle.value),
            src: __props.frameSrc,
            class: normalizeClass(`${unref(prefixCls)}__main`),
            ref_key: "frameRef",
            ref: frameRef,
            onLoad: hideLoading
          }, null, 46, _hoisted_1$f)
        ]),
        _: 1
      });
    };
  }
});
const PreviewFrame = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-1bb3fd25"]]);
const _hoisted_1$e = { class: "share-title" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "ScreenPreview",
  props: {
    //固定缩放比例，默认1，不管如何计算缩放都在缩放基础上乘以该值
    fixScale: { type: Number, default: 1 },
    borderRadius: { type: String }
  },
  setup(__props) {
    const props = __props;
    const { prefixCls } = useDesign("screen-preview");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const fitDomRef = useTemplateRef("fitDomRef");
    const chartContainRef = ref([]);
    const { getAntdLocale } = useLocale();
    const screenEditStore2 = useScreenEditStore();
    const { antTheme } = useDarkModeTheme(computed(() => screenEditStore2.getTheme));
    const open = ref(false);
    const frameSrc = ref("");
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);
    const modalName = ref();
    const componentList = computed(() => {
      return [...screenEditStore2.getComponentList].reverse();
    });
    const wrapScale = reactive({
      width: 0,
      height: 0
    });
    const getWrapStyle = computed(() => {
      return {
        ...getCanvasStyle(screenEditStore2.getCanvasConfig),
        width: `${screenEditStore2.getCanvasConfig.width * wrapScale.width * props.fixScale}px`,
        height: `${screenEditStore2.getCanvasConfig.height * wrapScale.height * props.fixScale}px`
      };
    });
    const chartPosition = (item) => {
      return getChartStyle({
        ...item.chartContain.dropInfo
      });
    };
    const containClass = (item) => {
      var _a, _b;
      if (((_b = (_a = item.chart) == null ? void 0 : _a.events) == null ? void 0 : _b.emits) && item.chart.events.emits.length > 0) {
        for (const emit of item.chart.events.emits) {
          if (emit === ChartEventEnum.CHART_CLICK || emit === ChartEventEnum.CHART_DBLCLICK) {
            return "allow-pointer";
          }
        }
      }
    };
    const getStyle = (item) => {
      const style = getComponentStyle(item);
      if (!style.borderColor) {
        style.borderColor = colorBorder.value;
      }
      return omit(style, ["transform"]);
    };
    const getParentContainer = () => {
      return window.parent.document.body;
    };
    let unResize;
    onMounted(() => {
      setTimeout(() => {
        screenEditStore2.loadingScreen().then(() => {
          const { calcScale, windowResize, unWindowResize } = usePreviewFit(
            screenEditStore2.getCanvasConfig.width,
            screenEditStore2.getCanvasConfig.height,
            screenEditStore2.getCanvasConfig.fitType,
            fitDomRef.value,
            callbackScale,
            props.fixScale
          );
          calcScale();
          windowResize();
          unResize = unWindowResize;
          const map = /* @__PURE__ */ new Map();
          for (let i = 0; i < componentList.value.length; i++) {
            const component = componentList.value[i];
            if (!component.chartContain.animations || component.chartContain.animations.length === 0 || chartContainRef.value.length <= i) {
              continue;
            }
            if (componentList.value[i].chartContain.show && componentList.value[i].chart.type !== ComType.MfCombine) {
              componentList.value[i].chartContain.show = false;
              map.set(i, componentList.value[i]);
            }
            setTimeout(() => {
              if (map.has(i)) {
                map.get(i).chartContain.show = true;
              }
              playAnimation(chartContainRef.value[i], component.chartContain.animations).then();
            }, 600);
          }
        });
      }, 10);
      screenEvent.on(ScreenEventEnum.SHOW_MODAL, (e) => {
        var _a, _b, _c, _d, _e, _f;
        frameSrc.value = e.href;
        modalName.value = ((_b = (_a = e.jump) == null ? void 0 : _a.page) == null ? void 0 : _b.name) || e.href;
        width.value = (_d = (_c = e.jump) == null ? void 0 : _c.page) == null ? void 0 : _d.width;
        height.value = (_f = (_e = e.jump) == null ? void 0 : _e.page) == null ? void 0 : _f.height;
        open.value = true;
      });
    });
    onUnmounted(() => {
      unResize && unResize();
    });
    function setChartContainRef(el, index2) {
      chartContainRef.value[index2] = el;
    }
    function callbackScale(scale) {
      wrapScale.width = scale.width;
      wrapScale.height = scale.height;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ConfigProvider), {
        locale: unref(getAntdLocale),
        theme: unref(antTheme)
      }, {
        default: withCtx(() => [
          createVNode(unref(ScrollContainer), {
            class: normalizeClass(unref(prefixCls)),
            style: normalizeStyle({ borderRadius: __props.borderRadius })
          }, {
            default: withCtx(() => [
              createElementVNode("div", {
                class: "screen-wrap",
                style: normalizeStyle(getWrapStyle.value)
              }, [
                createElementVNode("div", {
                  class: "screen-canvas",
                  ref_key: "fitDomRef",
                  ref: fitDomRef
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(componentList.value, (item, index2) => {
                    return withDirectives((openBlock(), createElementBlock("div", {
                      class: normalizeClass(["chart-contain", containClass(item)]),
                      key: item == null ? void 0 : item.chart.id,
                      style: normalizeStyle(chartPosition(item))
                    }, [
                      createElementVNode("div", {
                        ref_for: true,
                        ref: (el) => setChartContainRef(el, index2),
                        style: normalizeStyle(getStyle(item))
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent((item == null ? void 0 : item.chart) && item.chart.type && unref(ComponentsEnum)[item.chart.type].component), {
                          class: "component",
                          id: `com${item == null ? void 0 : item.chart.id}`,
                          chart: item == null ? void 0 : item.chart,
                          "chart-contain": item == null ? void 0 : item.chartContain
                        }, null, 8, ["id", "chart", "chart-contain"]))
                      ], 4)
                    ], 6)), [
                      [vShow, item == null ? void 0 : item.chartContain.show]
                    ]);
                  }), 128))
                ], 512)
              ], 4)
            ]),
            _: 1
          }, 8, ["class", "style"]),
          createVNode(unref(Modal), {
            open: open.value,
            "onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event),
            "get-container": getParentContainer,
            width: width.value + 48,
            footer: null,
            mask: true,
            centered: true
          }, {
            title: withCtx(() => [
              createElementVNode("div", _hoisted_1$e, toDisplayString(modalName.value), 1)
            ]),
            default: withCtx(() => [
              createVNode(PreviewFrame, {
                "frame-src": frameSrc.value,
                "frame-width": width.value,
                "frame-height": height.value
              }, null, 8, ["frame-src", "frame-width", "frame-height"])
            ]),
            _: 1
          }, 8, ["open", "width"])
        ]),
        _: 1
      }, 8, ["locale", "theme"]);
    };
  }
});
const ScreenPreview = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-09570150"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "ScreenSizeConfig",
  setup(__props) {
    const selectValue = ref("1k");
    const options = ref([
      {
        value: "720",
        label: "1280*720"
      },
      {
        value: "1k",
        label: "1920*1080"
      },
      {
        value: "2k",
        label: "2048*1152"
      },
      {
        value: "4k",
        label: "4096*2160"
      },
      {
        value: "自定义",
        label: "自定义"
      }
    ]);
    const screenEditStore2 = useScreenEditStore();
    const selectChange = (e) => {
      var _a;
      const item = (_a = options.value) == null ? void 0 : _a.find((item2) => item2.value === e);
      if (item) {
        const wh = item.label.split("*");
        if (wh && wh.length === 2) {
          screenEditStore2.getCanvasConfig.width = Number(wh[0]);
          screenEditStore2.getCanvasConfig.height = Number(wh[1]);
        }
      }
    };
    watch(
      [() => screenEditStore2.getCanvasConfig.width, () => screenEditStore2.getCanvasConfig.height],
      ([width, height]) => {
        if (width === 1280 && height === 720) {
          selectValue.value = "720";
        } else if (width === 1920 && height === 1080) {
          selectValue.value = "1k";
        } else if (width === 2048 && height === 1152) {
          selectValue.value = "2k";
        } else if (width === 4096 && height === 2160) {
          selectValue.value = "4k";
        } else {
          selectValue.value = "自定义";
        }
      },
      { immediate: true }
    );
    const { prefixCls } = useDesign("size-config");
    return (_ctx, _cache) => {
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createBlock(unref(InputGroup), {
        compact: "",
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          createVNode(unref(Select), {
            class: "select-size",
            value: selectValue.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectValue.value = $event),
            options: options.value,
            onChange: selectChange
          }, null, 8, ["value", "options"]),
          createVNode(unref(InputNumber), {
            value: unref(screenEditStore2).getCanvasConfig.width,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore2).getCanvasConfig.width = $event),
            class: "input-left",
            placeholder: "宽度",
            min: 50,
            max: 1e4,
            controls: false,
            maxlength: 5
          }, {
            prefix: withCtx(() => _cache[3] || (_cache[3] = [
              createElementVNode("div", { class: "prefix" }, "W", -1)
            ])),
            _: 1
          }, 8, ["value"]),
          createVNode(_component_AInput, {
            class: "input-split",
            placeholder: "*",
            disabled: ""
          }),
          createVNode(unref(InputNumber), {
            value: unref(screenEditStore2).getCanvasConfig.height,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore2).getCanvasConfig.height = $event),
            class: "input-right",
            placeholder: "高度",
            min: 50,
            max: 1e4,
            controls: false,
            maxlength: 5
          }, {
            prefix: withCtx(() => _cache[4] || (_cache[4] = [
              createElementVNode("div", { class: "prefix" }, "H", -1)
            ])),
            _: 1
          }, 8, ["value"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const ScreenSizeConfig = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-148656f7"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ParamsConfig",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Empty), {
        description: "暂未开发",
        image: unref(Empty).PRESENTED_IMAGE_SIMPLE
      }, null, 8, ["image"]);
    };
  }
});
const _hoisted_1$d = { class: "title" };
const _hoisted_2$a = { class: "title" };
const _hoisted_3$7 = { class: "title" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CanvasConfig",
  setup(__props) {
    const { prefixCls } = useDesign("canvas-config");
    const screenEditStore2 = useScreenEditStore();
    const backgroundColor = ref();
    const themes = [
      { title: "深色", value: ThemeEnum.DARK },
      { title: "浅色", value: ThemeEnum.LIGHT },
      { title: "跟随平台", value: ThemeEnum.SYSTEM }
    ];
    const fitCheck = reactive({
      [FitType.FIT_BOX]: {
        name: "全屏铺满",
        icon: "carbon:fit-to-screen",
        description: "全屏铺满（设备与配置大屏比例不同时会变形）"
      },
      [FitType.FIT_ORIGINAL]: {
        name: "原始比例",
        icon: "carbon:center-to-fit",
        description: "原始比例（保持配置大屏比例，不填充空白处）"
      },
      [FitType.FIT_WIDTH_SCALE]: {
        name: "横向适配",
        icon: "carbon:fit-to-width",
        description: "横向适配-保持纵横比（横向铺满，允许纵向滚动，保持原有画布比例）"
      },
      [FitType.FIT_HEIGHT_SCALE]: {
        name: "纵向适配",
        icon: "carbon:fit-to-height",
        description: "纵向适配-保持纵横比（纵向铺满，允许横向滚动，保持原有画布比例）"
      },
      [FitType.FIT_WIDTH]: {
        name: "横向适配",
        icon: "carbon:fit-to-width",
        description: "横向适配（横向铺满，允许纵向滚动，会变形）"
      },
      [FitType.FIT_HEIGHT]: {
        name: "纵向适配",
        icon: "carbon:fit-to-height",
        description: "纵向适配（纵向铺满，允许横向滚动，会变形）"
      }
    });
    onMounted(() => {
      setTimeout(() => {
        if (screenEditStore2.getCanvasConfig.backgroundColor) {
          backgroundColor.value = screenEditStore2.getCanvasConfig.backgroundColor;
        }
      }, 200);
    });
    function confirmColor(value) {
      changeColor(value);
      backgroundColor.value = value;
    }
    function changeColor(value) {
      if (value) {
        screenEditStore2.getCanvasConfig.backgroundColor = value;
      } else {
        screenEditStore2.getCanvasConfig.backgroundColor = "";
      }
    }
    function uploadBackground(_, fileList) {
      if (fileList && fileList.length > 0) {
        screenEditStore2.getCanvasConfig.backgroundImage = fileList[0].fileKey;
      }
    }
    function removeBackground() {
      screenEditStore2.getCanvasConfig.backgroundImage = "";
    }
    return (_ctx, _cache) => {
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createBlock(unref(ScrollContainer), null, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls))
          }, [
            _cache[8] || (_cache[8] = createElementVNode("div", { class: "title" }, "大屏名称", -1)),
            createVNode(_component_AInput, {
              value: unref(screenEditStore2).getCanvasConfig.screenName,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore2).getCanvasConfig.screenName = $event),
              "show-count": "",
              maxlength: 30
            }, null, 8, ["value"]),
            _cache[9] || (_cache[9] = createElementVNode("div", { class: "title" }, "大屏尺寸", -1)),
            createVNode(ScreenSizeConfig),
            createElementVNode("div", _hoisted_1$d, [
              _cache[5] || (_cache[5] = createTextVNode(" 主题 ")),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: unref(screenEditStore2).getCanvasConfig.theme,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore2).getCanvasConfig.theme = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(themes, (item, index2) => {
                    return createVNode(unref(RadioButton), {
                      key: index2,
                      value: item.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _cache[10] || (_cache[10] = createElementVNode("div", { class: "title" }, "背景颜色", -1)),
            createVNode(unref(MfishColorPicker), {
              value: backgroundColor.value,
              onConfirmChange: confirmColor,
              onInputChange: changeColor
            }, null, 8, ["value"]),
            _cache[11] || (_cache[11] = createElementVNode("div", { class: "title" }, "背景图片", -1)),
            createVNode(unref(FileUp), {
              "file-keys": unref(screenEditStore2).getCanvasConfig.backgroundImage,
              accepts: ".jpg,.jpeg,.png,.svg",
              "button-text": "上传背景",
              "max-count": 1,
              "is-pic": true,
              onSuccess: uploadBackground,
              onRemove: removeBackground
            }, null, 8, ["file-keys"]),
            createElementVNode("div", _hoisted_2$a, [
              _cache[6] || (_cache[6] = createTextVNode(" 水印 ")),
              createElementVNode("div", null, [
                createVNode(_component_AInput, {
                  value: unref(screenEditStore2).getCanvasConfig.watermark,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore2).getCanvasConfig.watermark = $event),
                  placeholder: "清空无水印",
                  "show-count": "",
                  maxlength: 50
                }, null, 8, ["value"])
              ])
            ]),
            createElementVNode("div", _hoisted_3$7, [
              _cache[7] || (_cache[7] = createTextVNode(" 适配方式 ")),
              createElementVNode("div", null, [
                createVNode(unref(RadioGroup), {
                  value: unref(screenEditStore2).getCanvasConfig.fitType,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(screenEditStore2).getCanvasConfig.fitType = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(fitCheck), (item) => {
                      return openBlock(), createBlock(unref(Tooltip), {
                        key: item,
                        placement: "bottomRight",
                        title: fitCheck[item].description
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(RadioButton), {
                            class: normalizeClass(`${unref(prefixCls)}-radio-button`),
                            value: item
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: fitCheck[item].icon
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["class", "value"])
                        ]),
                        _: 2
                      }, 1032, ["title"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["value"])
              ])
            ]),
            _cache[12] || (_cache[12] = createElementVNode("div", { class: "title" }, "全局参数", -1)),
            createVNode(_sfc_main$m),
            _cache[13] || (_cache[13] = createElementVNode("div", { class: "title" }, " 描述", -1)),
            createVNode(unref(Textarea), {
              value: unref(screenEditStore2).getCanvasConfig.screenDesc,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(screenEditStore2).getCanvasConfig.screenDesc = $event),
              "show-count": "",
              maxlength: 200
            }, null, 8, ["value"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const CanvasConfig = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-b101a035"]]);
const _hoisted_1$c = { class: "header" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...{ name: "FrameConfig" },
  __name: "index",
  props: {
    collapsed: propTypes.bool.def(false)
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { prefixCls } = useDesign("frame-config");
    const getClass = computed(() => {
      return [
        prefixCls,
        {
          collapsed: props.collapsed
        }
      ];
    });
    const configs = ref();
    const value = ref();
    const curConfig = ref();
    const screenEditStore2 = useScreenEditStore();
    const curSelect = ref();
    watch(
      [() => screenEditStore2.getCurComponent, () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.options) == null ? void 0 : _c.selectIndex;
      }],
      ([com, index2]) => {
        if (index2 === void 0) {
          setCurConfig(com);
        } else {
          setCurConfig(screenEditStore2.getCurConfigComponent);
        }
      },
      { immediate: true }
    );
    function setCurConfig(component) {
      if (component) {
        const config = ComponentsEnum[component.chart.type].config;
        configs.value = Object.keys(config).filter((key) => config[key].show).map((key) => config[key]);
      } else {
        configs.value = [
          { value: "画布配置", payload: { icon: "carbon:gui-management", component: shallowRef(CanvasConfig) } }
        ];
      }
      value.value = configs.value[0].value;
      if (configs.value[0].payload.component) {
        curConfig.value = markRaw(configs.value[0].payload.component);
      } else {
        curConfig.value = null;
      }
    }
    function configChange(e) {
      var _a;
      value.value = e;
      const config = (_a = configs.value) == null ? void 0 : _a.find((config2) => config2.value === e);
      if (config.payload.component) {
        curConfig.value = markRaw(config.payload.component);
      } else {
        curConfig.value = null;
      }
    }
    function rowSelect(e) {
      curSelect.value = e;
    }
    __expose({ rowSelect });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClass.value)
      }, [
        createElementVNode("div", _hoisted_1$c, [
          createVNode(unref(Segmented), {
            value: value.value,
            options: configs.value,
            onChange: configChange,
            block: ""
          }, {
            label: withCtx(({ value: val, payload }) => [
              payload.icon ? (openBlock(), createBlock(unref(Icon), {
                key: 0,
                icon: payload.icon
              }, null, 8, ["icon"])) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(val), 1)
            ]),
            _: 1
          }, 8, ["value", "options"])
        ]),
        (openBlock(), createBlock(resolveDynamicComponent(curConfig.value), { "select-data": curSelect.value }, {
          "data-select": withCtx(() => [
            renderSlot(_ctx.$slots, "data-select", { curSelect: curSelect.value })
          ]),
          _: 3
        }, 8, ["select-data"]))
      ], 2);
    };
  }
});
const _hoisted_1$b = { class: "action" };
const _hoisted_2$9 = { class: "ac-int" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CanvasRulerLine",
  props: {
    lineValue: { type: Number, default: 0 },
    lineList: { type: Array, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const { lineList } = props;
    const screenEditStore2 = useScreenEditStore();
    const { prefixCls } = useDesign("canvas-ruler-line");
    const color2 = useRootSetting().getThemeColor;
    function lineClose(direction, index2) {
      lineList.splice(index2, 1);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(lineList), (item, index2) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["line-item", { x: item.position === "x", y: item.position === "y" }]),
            style: normalizeStyle({
              left: item.position === "x" ? `${Math.round(item.offset * unref(screenEditStore2).getScale)}px` : 0,
              top: item.position === "y" ? `${Math.round(item.offset * unref(screenEditStore2).getScale)}px` : 0
            }),
            key: `${item}${index2}`
          }, [
            createElementVNode("div", _hoisted_1$b, [
              createVNode(unref(Icon), {
                class: "ac-close",
                icon: "ant-design:close-outline",
                color: unref(color2),
                onClick: ($event) => lineClose(`${item.position === "x" ? "x" : "y"}`, index2)
              }, null, 8, ["color", "onClick"]),
              createElementVNode("span", _hoisted_2$9, toDisplayString(item.value), 1)
            ])
          ], 6);
        }), 128))
      ], 2);
    };
  }
});
const CanvasRulerLine = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-91bb6b29"]]);
const _hoisted_1$a = {
  id: "horn",
  class: "horn"
};
const _hoisted_2$8 = ["id", "width", "height"];
const _hoisted_3$6 = { class: "indicator-value" };
const _hoisted_4$3 = ["id", "height", "width"];
const _hoisted_5$2 = { class: "indicator-value" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "CanvasRuler",
  props: {
    rulerXLeft: { type: Number, default: 0 },
    rulerYTop: { type: Number, default: 0 },
    rulerX: { type: Number, default: 5e3 },
    rulerY: { type: Number, default: 3e3 },
    drift: { type: Number, default: 0 },
    rulerHeight: { type: Number, default: 28 },
    rulerWidth: { type: Number, default: 38 }
  },
  setup(__props) {
    const props = __props;
    const screenEditStore2 = useScreenEditStore();
    const { prefixCls } = useDesign("canvas-ruler");
    const lineValue = ref(0);
    const showLine = ref(true);
    const indicatorXStyle = shallowRef({});
    const indicatorYStyle = shallowRef({});
    const xLeft = computed(() => `${props.rulerXLeft}px`);
    const yTop = computed(() => `${props.rulerYTop}px`);
    const rulerXRef = useTemplateRef("rulerXRef");
    const rulerYRef = useTemplateRef("rulerYRef");
    const fontColor = computed(() => useRootSetting().getDarkMode.value === ThemeEnum.DARK ? "#999" : "#666");
    watch(
      () => useRootSetting().getDarkMode.value,
      (val, oldValue) => {
        if (val !== oldValue) {
          nextTick(() => {
            setScale();
          });
        }
      }
    );
    watch(
      [() => screenEditStore2.getScale, () => props.rulerX, () => props.rulerY],
      ([scale, rulerX, rulerY], [oScale, oRulerX, oRulerY]) => {
        if (!oScale) {
          nextTick(() => setScale());
          return;
        }
        if (scale !== oScale) {
          nextTick(() => setScale());
        }
        if (rulerX !== oRulerX) {
          nextTick(() => setScaleX());
        }
        if (rulerY !== oRulerY) {
          nextTick(() => setScaleY());
        }
      },
      {
        immediate: true
      }
    );
    const calcRulerX = computed(() => props.rulerX * screenEditStore2.getScale);
    const calcRulerY = computed(() => props.rulerY * screenEditStore2.getScale);
    const rulerXMove = (e) => {
      indicatorXStyle.value = {
        display: "block",
        left: `${e.offsetX}px`,
        top: 0,
        height: "100vh",
        width: "1px"
      };
      const value = Math.round(e.offsetX / screenEditStore2.getScale);
      lineValue.value = value - props.drift;
    };
    const rulerXLeave = () => {
      indicatorXStyle.value = {
        display: "none"
      };
    };
    const rulerXClick = (e) => {
      showLine.value = true;
      const value = Math.round(e.offsetX / screenEditStore2.getScale);
      screenEditStore2.getGuideLine.lineListY.push({
        position: "x",
        offset: value,
        value: value - props.drift
      });
    };
    const rulerYMove = (e) => {
      indicatorYStyle.value = {
        display: "block",
        left: 0,
        top: `${e.offsetY}px`,
        width: "100vw",
        height: "1px"
      };
      const value = Math.round(e.offsetY / screenEditStore2.getScale);
      lineValue.value = value - props.drift;
    };
    const rulerYLeave = () => {
      indicatorYStyle.value = {
        display: "none"
      };
    };
    const rulerYClick = (e) => {
      showLine.value = true;
      const value = Math.round(e.offsetY / screenEditStore2.getScale);
      screenEditStore2.getGuideLine.lineListX.push({
        position: "y",
        offset: value,
        value: value - props.drift
      });
    };
    function setScale() {
      setScaleX();
      setScaleY();
    }
    const getGridInterval = (width, scale) => {
      if (scale <= 0.25) return 40;
      if (scale <= 0.5) return 20;
      if (scale <= 1) return 10;
      if (scale <= 2) return 5;
      if (scale <= 4) return 2;
      return 1;
    };
    const drawRuler = (canvasContext, start, rulerWidth, rulerHeight, h) => {
      drawCanvasRuler(canvasContext, start, fontColor.value, screenEditStore2.getScale, rulerWidth, rulerHeight, h);
    };
    const drawCanvasRuler = (ctx, startNum, fontColor2, scale, width, height, h) => {
      ctx.reset();
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.font = "10px 微软雅黑";
      ctx.strokeStyle = fontColor2;
      ctx.fillStyle = fontColor2;
      ctx.lineWidth = 1;
      const gridSize = getGridInterval(width, scale);
      const gridPixel = gridSize * scale;
      for (let value = startNum, count = 0; value < startNum + width; value += gridSize, count++) {
        const x = Math.round(count * gridPixel) + 0.5;
        h ? ctx.moveTo(x, 0) : ctx.moveTo(0, x);
        ctx.save();
        h ? ctx.translate(x, height * 0.6) : ctx.translate(height * 0.7, x);
        if (!h) {
          ctx.rotate(-Math.PI / 2);
        }
        if (scale < 0.5 && count % 20 === 0) {
          ctx.fillText(value.toString(), 4, 8);
        } else if (count % 10 === 0) {
          ctx.fillText(value.toString(), 4, 8);
        }
        ctx.restore();
        if (count % 10 === 0) {
          h ? ctx.lineTo(x, height * 9 / 12) : ctx.lineTo(height * 10 / 12, x);
        } else if (count % 5 === 0) {
          h ? ctx.lineTo(x, height * 9 / 20) : ctx.lineTo(height * 10 / 20, x);
        } else {
          h ? ctx.lineTo(x, height / 4) : ctx.lineTo(height / 4, x);
        }
      }
      ctx.stroke();
      ctx.closePath();
    };
    function setScaleX() {
      if (!rulerXRef.value) return;
      const ctxTop = rulerXRef.value.getContext("2d");
      if (!ctxTop) return;
      drawRuler(ctxTop, -props.drift, props.rulerX, rulerXRef.value.height, true);
    }
    function setScaleY() {
      if (!rulerYRef.value) return;
      const ctxLeft = rulerYRef.value.getContext("2d");
      if (!ctxLeft) return;
      drawRuler(ctxLeft, -props.drift, props.rulerY, rulerYRef.value.width, false);
    }
    const changeShowLine = () => {
      showLine.value = !showLine.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$a, [
          createVNode(unref(Tooltip), {
            title: `${showLine.value ? "隐藏" : "显示"}辅助线`
          }, {
            default: withCtx(() => [
              showLine.value ? (openBlock(), createBlock(unref(Icon), {
                key: 0,
                class: "icon",
                icon: "ant-design:eye-outlined",
                onClick: changeShowLine
              })) : (openBlock(), createBlock(unref(Icon), {
                key: 1,
                class: "icon",
                icon: "ant-design:eye-invisible-outlined",
                onClick: changeShowLine
              }))
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        createElementVNode("div", {
          class: "ruler rulerX",
          style: normalizeStyle({ width: `${calcRulerX.value}px`, left: xLeft.value })
        }, [
          createElementVNode("canvas", {
            ref_key: "rulerXRef",
            ref: rulerXRef,
            id: `${unref(prefixCls)}-x`,
            width: calcRulerX.value,
            height: __props.rulerHeight,
            onMousemove: rulerXMove,
            onMouseleave: rulerXLeave,
            onClick: rulerXClick
          }, null, 40, _hoisted_2$8),
          createElementVNode("div", {
            class: "indicator x",
            style: normalizeStyle(indicatorXStyle.value)
          }, [
            createElementVNode("div", _hoisted_3$6, toDisplayString(lineValue.value), 1)
          ], 4),
          withDirectives(createVNode(CanvasRulerLine, {
            "line-value": lineValue.value,
            "line-list": unref(screenEditStore2).getGuideLine.lineListY
          }, null, 8, ["line-value", "line-list"]), [
            [vShow, showLine.value]
          ])
        ], 4),
        createElementVNode("div", {
          class: "ruler rulerY",
          style: normalizeStyle({ height: `${calcRulerY.value}px`, top: yTop.value })
        }, [
          createElementVNode("canvas", {
            ref_key: "rulerYRef",
            ref: rulerYRef,
            id: `${unref(prefixCls)}-y`,
            height: calcRulerY.value,
            width: __props.rulerWidth,
            onMousemove: rulerYMove,
            onMouseleave: rulerYLeave,
            onClick: rulerYClick
          }, null, 40, _hoisted_4$3),
          createElementVNode("div", {
            class: "indicator y",
            style: normalizeStyle(indicatorYStyle.value)
          }, [
            createElementVNode("div", _hoisted_5$2, toDisplayString(lineValue.value), 1)
          ], 4),
          withDirectives(createVNode(CanvasRulerLine, {
            "line-value": lineValue.value,
            "line-list": unref(screenEditStore2).getGuideLine.lineListX
          }, null, 8, ["line-value", "line-list"]), [
            [vShow, showLine.value]
          ])
        ], 4)
      ], 2);
    };
  }
});
const CanvasRuler = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-eeb86e63"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CanvasBackground",
  props: {
    drift: { type: Number, default: 0 },
    width: { type: Number, default: 9e3 },
    height: { type: Number, default: 6e3 },
    ruler: {
      type: Object,
      default: () => {
        return { height: 28, width: 38 };
      }
    }
  },
  setup(__props) {
    const props = __props;
    const screenEditStore2 = useScreenEditStore();
    const screenShortcutStore = useScreenShortcutStore();
    const calcRulerX = computed(() => `${props.width * screenEditStore2.getScale}px`);
    const calcRulerY = computed(() => `${props.height * screenEditStore2.getScale}px`);
    const { prefixCls } = useDesign("canvas-background");
    function cleanCurComponent(e) {
      screenEditStore2.cleanCurComponent();
      if (e.button !== 2) {
        screenShortcutStore.setShowMenu(false);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        style: normalizeStyle({
          width: calcRulerX.value,
          height: calcRulerY.value,
          padding: `${__props.drift * unref(screenEditStore2).getScale}px 0 0 ${__props.drift * unref(screenEditStore2).getScale}px`
        }),
        onMousedown: cleanCurComponent
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 38);
    };
  }
});
const CanvasBackground = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-2efcd248"]]);
const _hoisted_1$9 = { class: "scale-add-reduce" };
const _hoisted_2$7 = { class: "scale-lock" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "CanvasScale",
  props: {
    scale: { type: Number, default: 100 },
    minScale: { type: Number, default: 20 },
    maxScale: { type: Number, default: 500 }
  },
  emits: ["addScale", "reduceScale", "changeScale", "autoScale"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const autoScale = ref(true);
    const { prefixCls } = useDesign("canvas-scale");
    const reduceScale = () => {
      emit("reduceScale");
    };
    const addScale = () => {
      emit("addScale");
    };
    const changeScale = (value) => {
      emit("changeScale", value);
    };
    const handleAutoScale = (value) => {
      emit("autoScale", value);
      autoScale.value = value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", _hoisted_1$9, [
          createVNode(unref(Icon), {
            class: "scale-icon",
            title: "放大",
            size: 18,
            icon: "ant-design:plus-outlined",
            onClick: addScale
          }),
          createVNode(unref(InputNumber), {
            size: "small",
            bordered: false,
            value: __props.scale,
            max: __props.maxScale,
            min: __props.minScale,
            step: 5,
            controls: false,
            formatter: (value) => `${Math.round(value * 100)}`,
            onChange: changeScale
          }, null, 8, ["value", "max", "min", "formatter"]),
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "scale-sign" }, "%", -1)),
          createVNode(unref(Icon), {
            class: "scale-icon",
            title: "缩小",
            size: 18,
            icon: "ant-design:minus-outlined",
            onClick: reduceScale
          })
        ]),
        createElementVNode("div", _hoisted_2$7, [
          createVNode(unref(Tooltip), {
            title: autoScale.value ? "锁定自动比例" : "解锁自动比例",
            placement: "right"
          }, {
            default: withCtx(() => [
              autoScale.value ? (openBlock(), createBlock(unref(Icon), {
                key: 0,
                icon: "ant-design:unlock-outlined",
                onClick: _cache[0] || (_cache[0] = ($event) => handleAutoScale(false))
              })) : (openBlock(), createBlock(unref(Icon), {
                key: 1,
                icon: "ant-design:lock-outlined",
                onClick: _cache[1] || (_cache[1] = ($event) => handleAutoScale(true))
              }))
            ]),
            _: 1
          }, 8, ["title"])
        ])
      ], 2);
    };
  }
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ShortcutViewModal",
  setup(__props) {
    const shortcutColumn = [
      {
        title: "功能",
        dataIndex: "label",
        width: 120
      },
      {
        title: "Win快捷键",
        dataIndex: "win",
        width: 120
      },
      {
        title: "Mac快捷键",
        dataIndex: "mac",
        width: 120
      }
    ];
    const shortcutKeyOptions = [
      {
        label: "拖拽 / 放大缩小画布",
        win: "CTRL + 🖱️拖动 / 滚动",
        mac: "⌘ + 🖱️拖动 / 滚动",
        macSource: true
      },
      {
        label: "向 上/右/下/左 移动",
        win: "CTRL + ↑ / → / ↓ / ←",
        mac: "⌘ + ↑"
      },
      {
        label: "锁定/解锁",
        win: "CTRL + L / CTRL + SHIFT+ L",
        mac: "⌘ + L / ⌘ + ⇧ + L"
      },
      {
        label: "隐藏/显示",
        win: "CTRL + H / CTRL + SHIFT + H",
        mac: "⌘ + H / ⌘ + ⇧ + H"
      },
      {
        label: "组合/拆分",
        win: "CTRL + G / CTRL + SHIFT + G",
        mac: "⌘ + G / ⌘ + SHIFT + G"
      },
      {
        label: "后退/前进",
        win: "CTRL + Z / CTRL + SHIFT + Z",
        mac: "⌘ + Z / ⌘ + ⇧ + Z"
      },
      {
        label: "复制/粘贴",
        win: "CTRL + C / V",
        mac: "⌘ + C / V"
      },
      {
        label: "多选",
        win: "拖动🖱️框选 / CTRL + 🖱️点击",
        mac: "拖动🖱️框选 / ⌘ + 🖱️点击"
      },
      {
        label: "保存",
        win: "CTRL + S",
        mac: "⌘ + S"
      },
      {
        label: "预览",
        win: "CTRL + P",
        mac: "⌘ + P"
      },
      {
        label: "全选",
        win: "CTRL + A",
        mac: "⌘ + A"
      },
      {
        label: "删除",
        win: "Delete",
        mac: "Delete"
      }
    ];
    const [registerModal, { setModalProps }] = useModalInner(async () => {
      setModalProps({
        confirmLoading: false,
        width: "800px",
        cancelText: "关闭",
        showOkBtn: false
      });
    });
    const [registerTable] = useTable({
      columns: shortcutColumn,
      dataSource: shortcutKeyOptions,
      bordered: true,
      showIndexColumn: false,
      pagination: false,
      canResize: false
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), {
        onRegister: unref(registerModal),
        title: "快捷操作"
      }, {
        default: withCtx(() => [
          createVNode(unref(BasicTable), { onRegister: unref(registerTable) }, null, 8, ["onRegister"])
        ]),
        _: 1
      }, 8, ["onRegister"]);
    };
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CanvasOperator",
  setup(__props) {
    const { prefixCls } = useDesign("canvas-operator");
    const [registerViewModal, { openModal }] = useModal();
    function showShortcut() {
      openModal(true, {});
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass(unref(prefixCls))
        }, [
          createVNode(unref(Tooltip), {
            title: "快捷方式",
            placement: "right"
          }, {
            default: withCtx(() => [
              createVNode(unref(Icon), {
                icon: "carbon:table-shortcut",
                onClick: showShortcut
              })
            ]),
            _: 1
          })
        ], 2),
        createVNode(_sfc_main$f, { onRegister: unref(registerViewModal) }, null, 8, ["onRegister"])
      ], 64);
    };
  }
});
const CanvasOperator = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-2148ffa6"]]);
const calcPoints = {
  lt: calcLeftTop,
  t: calcTopBottom,
  rt: calcRightTop,
  r: calcLeftRight,
  rb: calcRightBottom,
  b: calcTopBottom,
  lb: calcLeftBottom,
  l: calcLeftRight
};
function calcLeftTop(style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  const { symmetricPoint } = pointInfo;
  let newCenterPoint = getCenterPoint(curPosition, symmetricPoint);
  let newTopLeftPoint = calculateRotatedPointCoordinate(curPosition, newCenterPoint, -style.rotate);
  let newBottomRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
  let newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
  let newHeight = newBottomRightPoint.y - newTopLeftPoint.y;
  if (needLockProportion) {
    if (newWidth / newHeight > proportion) {
      newTopLeftPoint.x += Math.abs(newWidth - newHeight * proportion);
      newWidth = newHeight * proportion;
    } else {
      newTopLeftPoint.y += Math.abs(newHeight - newWidth / proportion);
      newHeight = newWidth / proportion;
    }
    const rotatedTopLeftPoint = calculateRotatedPointCoordinate(newTopLeftPoint, newCenterPoint, style.rotate);
    newCenterPoint = getCenterPoint(rotatedTopLeftPoint, symmetricPoint);
    newTopLeftPoint = calculateRotatedPointCoordinate(rotatedTopLeftPoint, newCenterPoint, -style.rotate);
    newBottomRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
    newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
    newHeight = newBottomRightPoint.y - newTopLeftPoint.y;
  }
  if (newWidth > 10 && newHeight > 10) {
    style.width = Math.round(newWidth / scale);
    style.height = Math.round(newHeight / scale);
    style.x = Math.round(newTopLeftPoint.x / scale);
    style.y = Math.round(newTopLeftPoint.y / scale);
  }
}
function calcRightTop(style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  const { symmetricPoint } = pointInfo;
  let newCenterPoint = getCenterPoint(curPosition, symmetricPoint);
  let newTopRightPoint = calculateRotatedPointCoordinate(curPosition, newCenterPoint, -style.rotate);
  let newBottomLeftPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
  let newWidth = newTopRightPoint.x - newBottomLeftPoint.x;
  let newHeight = newBottomLeftPoint.y - newTopRightPoint.y;
  if (needLockProportion) {
    if (newWidth / newHeight > proportion) {
      newTopRightPoint.x -= Math.abs(newWidth - newHeight * proportion);
      newWidth = newHeight * proportion;
    } else {
      newTopRightPoint.y += Math.abs(newHeight - newWidth / proportion);
      newHeight = newWidth / proportion;
    }
    const rotatedTopRightPoint = calculateRotatedPointCoordinate(newTopRightPoint, newCenterPoint, style.rotate);
    newCenterPoint = getCenterPoint(rotatedTopRightPoint, symmetricPoint);
    newTopRightPoint = calculateRotatedPointCoordinate(rotatedTopRightPoint, newCenterPoint, -style.rotate);
    newBottomLeftPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
    newWidth = newTopRightPoint.x - newBottomLeftPoint.x;
    newHeight = newBottomLeftPoint.y - newTopRightPoint.y;
  }
  if (newWidth > 10 && newHeight > 10) {
    style.width = Math.round(newWidth / scale);
    style.height = Math.round(newHeight / scale);
    style.x = Math.round(newBottomLeftPoint.x / scale);
    style.y = Math.round(newTopRightPoint.y / scale);
  }
}
function calcRightBottom(style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  const { symmetricPoint } = pointInfo;
  let newCenterPoint = getCenterPoint(curPosition, symmetricPoint);
  let newTopLeftPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
  let newBottomRightPoint = calculateRotatedPointCoordinate(curPosition, newCenterPoint, -style.rotate);
  let newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
  let newHeight = newBottomRightPoint.y - newTopLeftPoint.y;
  if (needLockProportion) {
    if (newWidth / newHeight > proportion) {
      newBottomRightPoint.x -= Math.abs(newWidth - newHeight * proportion);
      newWidth = newHeight * proportion;
    } else {
      newBottomRightPoint.y -= Math.abs(newHeight - newWidth / proportion);
      newHeight = newWidth / proportion;
    }
    const rotatedBottomRightPoint = calculateRotatedPointCoordinate(newBottomRightPoint, newCenterPoint, style.rotate);
    newCenterPoint = getCenterPoint(rotatedBottomRightPoint, symmetricPoint);
    newTopLeftPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
    newBottomRightPoint = calculateRotatedPointCoordinate(rotatedBottomRightPoint, newCenterPoint, -style.rotate);
    newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
    newHeight = newBottomRightPoint.y - newTopLeftPoint.y;
  }
  if (newWidth > 10 && newHeight > 10) {
    style.width = Math.round(newWidth / scale);
    style.height = Math.round(newHeight / scale);
    style.x = Math.round(newTopLeftPoint.x / scale);
    style.y = Math.round(newTopLeftPoint.y / scale);
  }
}
function calcLeftBottom(style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  const { symmetricPoint } = pointInfo;
  let newCenterPoint = getCenterPoint(curPosition, symmetricPoint);
  let newTopRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
  let newBottomLeftPoint = calculateRotatedPointCoordinate(curPosition, newCenterPoint, -style.rotate);
  let newWidth = newTopRightPoint.x - newBottomLeftPoint.x;
  let newHeight = newBottomLeftPoint.y - newTopRightPoint.y;
  if (needLockProportion) {
    if (newWidth / newHeight > proportion) {
      newBottomLeftPoint.x += Math.abs(newWidth - newHeight * proportion);
      newWidth = newHeight * proportion;
    } else {
      newBottomLeftPoint.y -= Math.abs(newHeight - newWidth / proportion);
      newHeight = newWidth / proportion;
    }
    const rotatedBottomLeftPoint = calculateRotatedPointCoordinate(newBottomLeftPoint, newCenterPoint, style.rotate);
    newCenterPoint = getCenterPoint(rotatedBottomLeftPoint, symmetricPoint);
    newTopRightPoint = calculateRotatedPointCoordinate(symmetricPoint, newCenterPoint, -style.rotate);
    newBottomLeftPoint = calculateRotatedPointCoordinate(rotatedBottomLeftPoint, newCenterPoint, -style.rotate);
    newWidth = newTopRightPoint.x - newBottomLeftPoint.x;
    newHeight = newBottomLeftPoint.y - newTopRightPoint.y;
  }
  if (newWidth > 10 && newHeight > 10) {
    style.width = Math.round(newWidth / scale);
    style.height = Math.round(newHeight / scale);
    style.x = Math.round(newBottomLeftPoint.x / scale);
    style.y = Math.round(newTopRightPoint.y / scale);
  }
}
function calcTopBottom(style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  const { symmetricPoint, curPoint } = pointInfo;
  const rotatedCurPosition = calculateRotatedPointCoordinate(curPosition, curPoint, -style.rotate);
  const rotatedMiddlePoint = calculateRotatedPointCoordinate(
    {
      x: curPoint.x,
      y: rotatedCurPosition.y
    },
    curPoint,
    style.rotate
  );
  const newHeight = Math.hypot(rotatedMiddlePoint.x - symmetricPoint.x, rotatedMiddlePoint.y - symmetricPoint.y);
  const newCenter = {
    x: rotatedMiddlePoint.x - (rotatedMiddlePoint.x - symmetricPoint.x) / 2,
    y: rotatedMiddlePoint.y + (symmetricPoint.y - rotatedMiddlePoint.y) / 2
  };
  let width = style.width;
  if (needLockProportion) {
    width = newHeight * proportion / scale;
  }
  if (newHeight > 10) {
    style.width = Math.round(width);
    style.height = Math.round(newHeight / scale);
    style.y = Math.round((newCenter.y - newHeight / 2) / scale);
    style.x = Math.round(newCenter.x / scale - style.width / 2);
  }
}
function calcLeftRight(style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  const { symmetricPoint, curPoint } = pointInfo;
  const rotatedCurPosition = calculateRotatedPointCoordinate(curPosition, curPoint, -style.rotate);
  const rotatedMiddlePoint = calculateRotatedPointCoordinate(
    {
      x: rotatedCurPosition.x,
      y: curPoint.y
    },
    curPoint,
    style.rotate
  );
  const newWidth = Math.hypot(rotatedMiddlePoint.x - symmetricPoint.x, rotatedMiddlePoint.y - symmetricPoint.y);
  const newCenter = {
    x: rotatedMiddlePoint.x - (rotatedMiddlePoint.x - symmetricPoint.x) / 2,
    y: rotatedMiddlePoint.y + (symmetricPoint.y - rotatedMiddlePoint.y) / 2
  };
  let height = style.height;
  if (needLockProportion) {
    height = newWidth / (proportion * scale);
  }
  if (newWidth > 10) {
    style.height = Math.round(height);
    style.width = Math.round(newWidth / scale);
    style.y = Math.round(newCenter.y / scale - style.height / 2);
    style.x = Math.round((newCenter.x - newWidth / 2) / scale);
  }
}
function calcComponentPositionAndSize(point, style, curPosition, proportion, needLockProportion, pointInfo, scale) {
  calcPoints[point](style, curPosition, proportion, needLockProportion, pointInfo, scale);
}
const _hoisted_1$8 = ["onMousedown"];
const _hoisted_2$6 = {
  key: 2,
  class: "cover-layer-out"
};
const _hoisted_3$5 = {
  key: 0,
  class: "cover-hover"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...{ name: "ChartContain" },
  __name: "index",
  props: {
    //组件属性
    comOption: {
      require: true,
      type: Object,
      default: () => {
        return { chart: {}, chartContain: {} };
      }
    },
    //组件索引
    index: {
      require: true,
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "5851a81c": bgColor.value
    }));
    const props = __props;
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const colorBorder = computed(() => token.value.colorBorder);
    const chartContainRef = useTemplateRef("chartContainRef");
    const chartItemRef = useTemplateRef("chartItemRef");
    const { prefixCls } = useDesign("chart-contain");
    const selectBorder = {
      //组件容器中8个点 分别为: lt 左上 t 上 rt 右上 r 右 rb 右下 b下 lb 左下 l 左
      points: ["lt", "t", "rt", "r", "rb", "b", "lb", "l"],
      //初始角度
      initAngle: { lt: 0, t: 45, rt: 90, r: 135, rb: 180, b: 225, lb: 270, l: 315 },
      // 每个点对应的光标
      pointCursor: [
        { start: 338, end: 23, cursor: "nw" },
        { start: 23, end: 68, cursor: "n" },
        { start: 68, end: 113, cursor: "ne" },
        { start: 113, end: 158, cursor: "e" },
        { start: 158, end: 203, cursor: "se" },
        { start: 203, end: 248, cursor: "s" },
        { start: 248, end: 293, cursor: "sw" },
        { start: 293, end: 338, cursor: "w" }
      ]
    };
    const isMoving = ref(false);
    const isOtherMoving = ref(false);
    const cursors = ref({});
    const screenEditStore2 = useScreenEditStore();
    const screenShortcutStore = useScreenShortcutStore();
    const getClass = computed(() => {
      return [
        prefixCls,
        {
          active: isActive.value || isSelect.value
        }
      ];
    });
    const hover = computed(() => {
      var _a, _b, _c, _d;
      return !isMoving.value && !isOtherMoving.value && ((_a = props.comOption.chart) == null ? void 0 : _a.id) === screenEditStore2.getCurHoverComponentId || isMoving.value && ((_b = screenEditStore2.getCurComponent) == null ? void 0 : _b.chart.id) === ((_d = (_c = props.comOption) == null ? void 0 : _c.chart) == null ? void 0 : _d.id);
    });
    const getPosition = computed(() => {
      return getChartStyle({
        ...props.comOption.chartContain.dropInfo
      });
    });
    const getStyle = computed(() => {
      const style = getComponentStyle(props.comOption);
      if (!style.borderColor) {
        style.borderColor = colorBorder.value;
      }
      return omit(style, ["transform"]);
    });
    const isActive = computed(() => {
      var _a, _b;
      return ((_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chart.id) === ((_b = props.comOption) == null ? void 0 : _b.chart.id);
    });
    const isSelect = computed(
      () => {
        var _a, _b;
        return screenEditStore2.getSelectArea.components.map((i) => i == null ? void 0 : i.chart.id).includes((_b = (_a = props.comOption) == null ? void 0 : _a.chart) == null ? void 0 : _b.id);
      }
    );
    onMounted(() => {
      if (props.comOption) {
        cursors.value = getCursor(props.comOption);
      }
      screenEvent.on(ScreenEventEnum.MOVE, () => {
        if (!props.comOption || !screenEditStore2.getCurComponent || props.comOption.chart.id === screenEditStore2.getCurComponent.chart.id || unref(isOtherMoving))
          return;
        isOtherMoving.value = true;
      });
      screenEvent.on(ScreenEventEnum.UN_MOVE, () => {
        isOtherMoving.value = false;
      });
      screenEvent.on(ScreenEventEnum.PLAY_ANIMATION, () => {
        var _a, _b;
        if (props.comOption.chart.id === ((_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chart.id) && ((_b = props.comOption.chart.options) == null ? void 0 : _b.selectIndex) === void 0) {
          playAnimation(chartItemRef.value, props.comOption.chartContain.animations).then(() => {
            screenEvent.emit(ScreenEventEnum.PLAY_ANIMATION_COMPLETE);
          });
        }
      });
      screenEvent.on(ScreenEventEnum.STOP_ANIMATION, () => {
        var _a;
        if (props.comOption.chart.id === ((_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chart.id)) {
          stopAnimation(chartItemRef.value, props.comOption.chartContain.animations);
        }
      });
    });
    function setChartContainPosition(dropInfo2) {
      const { y, x, width, height, rotate } = dropInfo2;
      if (!screenEditStore2.getCurComponent) return;
      if (y) screenEditStore2.getCurComponent.chartContain.dropInfo.y = y;
      if (x) screenEditStore2.getCurComponent.chartContain.dropInfo.x = x;
      if (width) screenEditStore2.getCurComponent.chartContain.dropInfo.width = width;
      if (height) screenEditStore2.getCurComponent.chartContain.dropInfo.height = height;
      if (rotate) screenEditStore2.getCurComponent.chartContain.dropInfo.rotate = rotate;
    }
    async function dragComponent(e) {
      screenShortcutStore.setShowMenu(false);
      if (e.ctrlKey || e.metaKey) {
        addSelectComponent(props.comOption);
        return;
      }
      const isMulti = screenEditStore2.getSelectArea.components.some((i) => i.chart.id === props.comOption.chart.id);
      if (!isMulti) {
        screenEditStore2.cleanSelectArea();
      }
      screenEditStore2.setCurComponent(props.comOption, props.index);
      if (e.button !== 0 || props.comOption.chartContain.lock || !props.comOption.chartContain.show) {
        return;
      }
      if (isMulti && screenEditStore2.getSelectArea.components.length > 100) {
        return;
      }
      const positions = [];
      if (isMulti) {
        screenEditStore2.getSelectArea.components.forEach((com) => {
          const pos = { ...com.chartContain.dropInfo };
          const startTop = Number(pos.y);
          const startLeft = Number(pos.x);
          if (!com.chartContain.lock) {
            positions.push({ com, pos, startTop, startLeft });
          }
        });
      } else {
        const pos = { ...props.comOption.chartContain.dropInfo };
        const startTop = Number(pos.y);
        const startLeft = Number(pos.x);
        positions.push({ com: props.comOption, pos, startTop, startLeft });
      }
      let dragFlag = false;
      const timer = setInterval(() => {
        dragFlag = true;
      }, 10);
      const move = throttle((moveEvent) => {
        moveEvent.preventDefault();
        if (!dragFlag) return;
        dragFlag = false;
        isMoving.value = true;
        positions.forEach((item) => {
          item.pos.y = Math.round((moveEvent.clientY - e.clientY) / screenEditStore2.getScale + item.startTop);
          item.pos.x = Math.round((moveEvent.clientX - e.clientX) / screenEditStore2.getScale + item.startLeft);
          moveLimit(item.pos);
          item.com.chartContain.dropInfo.y = item.pos.y;
          item.com.chartContain.dropInfo.x = item.pos.x;
        });
        screenEvent.emit(ScreenEventEnum.MOVE, isMulti);
      }, 5);
      const up = () => {
        if (unref(isMoving)) {
          screenEditStore2.setUndoRedoData("组件移动");
        } else {
          screenEditStore2.cleanSelectArea();
        }
        isMoving.value = false;
        clearInterval(timer);
        if (isMulti) {
          selectComponents(screenEditStore2.getSelectArea.components);
        }
        screenEvent.emit(ScreenEventEnum.UN_MOVE);
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        cursors.value = getCursor(props.comOption);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    }
    function moveLimit(pos) {
      const style = getComponentRotatedStyle(pos);
      if (style.y <= -1) {
        pos.y = -1;
      }
      if (style.x <= -1) {
        pos.x = -1;
      }
      const bottom = pos.y + pos.height;
      if (bottom > screenEditStore2.getCanvasConfig.height) {
        pos.y = screenEditStore2.getCanvasConfig.height - pos.height;
      }
      const right = pos.x + pos.width;
      if (right > screenEditStore2.getCanvasConfig.width) {
        pos.x = screenEditStore2.getCanvasConfig.width - pos.width;
      }
    }
    function getCursor(component) {
      if (!component) return;
      const { pointCursor, initAngle, points: points2 } = selectBorder;
      const rotate = mod360(component.chartContain.dropInfo.rotate);
      const result = {};
      let lastMatchIndex = -1;
      points2.forEach((point) => {
        const angle = mod360(initAngle[point] + rotate);
        const len = pointCursor.length;
        while (true) {
          lastMatchIndex = (lastMatchIndex + 1) % len;
          const angleLimit = pointCursor[lastMatchIndex];
          if (angle < 23 || angle >= 338) {
            result[point] = "nw-resize";
            return;
          }
          if (angleLimit.start <= angle && angle < angleLimit.end) {
            result[point] = `${angleLimit.cursor}-resize`;
            return;
          }
        }
      });
      return result;
    }
    function mouseEnter() {
      if (!unref(isMoving)) {
        screenEditStore2.setCurHoverComponent(props.comOption.chart.id);
      }
    }
    function mouseLeave() {
      if (!unref(isMoving)) {
        screenEditStore2.setCurHoverComponent("");
      }
    }
    function getPointStyle(point) {
      const { width, height } = props.comOption.chartContain.dropInfo;
      const hasT = /t/.test(point);
      const hasB = /b/.test(point);
      const hasL = /l/.test(point);
      const hasR = /r/.test(point);
      let newLeft = 0;
      let newTop = 0;
      if (point.length === 2) {
        newLeft = hasL ? 0 : width;
        newTop = hasT ? 0 : height;
      } else {
        if (hasT || hasB) {
          newLeft = width / 2;
          newTop = hasT ? 0 : height;
        }
        if (hasL || hasR) {
          newLeft = hasL ? 0 : width;
          newTop = Math.floor(height / 2);
        }
      }
      return {
        marginLeft: "-6px",
        marginTop: "-6px",
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: `${cursors.value[point]}`
      };
    }
    function changeSizeComponent(point, e) {
      if (!screenEditStore2.getScreenCanvas) return;
      screenEditStore2.setCurComponent(props.comOption, props.index);
      const style = { ...props.comOption.chartContain.dropInfo };
      const center = {
        x: (style.x + style.width / 2) * screenEditStore2.getScale,
        y: (style.y + style.height / 2) * screenEditStore2.getScale
      };
      const canvasRect = screenEditStore2.getScreenCanvas.getBoundingClientRect();
      const pointRect = e.target.getBoundingClientRect();
      const curPoint = {
        x: pointRect.left - canvasRect.left + e.target.offsetWidth * screenEditStore2.getScale / 2,
        y: pointRect.top - canvasRect.top + e.target.offsetHeight * screenEditStore2.getScale / 2
      };
      const symmetricPoint = {
        x: center.x - (curPoint.x - center.x),
        y: center.y - (curPoint.y - center.y)
      };
      let isFirst = true;
      const needLockProportion = isNeedLockProportion();
      const move = throttle((moveEvent) => {
        if (isFirst) {
          isFirst = false;
          return;
        }
        isMoving.value = true;
        const curPosition = {
          x: moveEvent.clientX - canvasRect.left,
          y: moveEvent.clientY - canvasRect.top
        };
        const proportion = style.width / style.height;
        calcComponentPositionAndSize(
          point,
          style,
          curPosition,
          proportion,
          needLockProportion,
          {
            center,
            curPoint,
            symmetricPoint
          },
          screenEditStore2.getScale
        );
        setChartContainPosition(style);
        screenEvent.emit(ScreenEventEnum.MOVE, false);
      }, 2);
      const up = () => {
        if (unref(isMoving)) {
          screenEditStore2.setUndoRedoData("组件大小调整");
        }
        isMoving.value = false;
        screenEvent.emit(ScreenEventEnum.UN_MOVE);
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    }
    function isNeedLockProportion() {
      if (props.comOption.chart.type !== ComType.MfCombine) return false;
      for (const component of props.comOption.chart.options.components) {
        if (![0, 90, 180, 360].includes(mod360(component.chartContain.dropInfo.rotate))) {
          return true;
        }
      }
      return false;
    }
    function handleRotate(e) {
      if (!chartContainRef.value) return;
      screenEditStore2.setCurComponent(props.comOption, props.index);
      const rect = chartContainRef.value.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateDegreeBefore = Math.atan2(e.clientY - centerY, e.clientX - centerX) / (Math.PI / 180);
      const pos = { ...props.comOption.chartContain.dropInfo };
      let startRotate = pos.rotate;
      if (!startRotate) {
        startRotate = 0;
      }
      const move = throttle((moveEvent) => {
        const rotateDegreeAfter = Math.atan2(moveEvent.clientY - centerY, moveEvent.clientX - centerX) / (Math.PI / 180);
        pos.rotate = Math.round(startRotate + rotateDegreeAfter - rotateDegreeBefore);
        setChartContainPosition(pos);
      }, 10);
      const up = () => {
        screenEditStore2.setUndoRedoData("组件旋转");
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        cursors.value = getCursor(props.comOption);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        ref_key: "chartContainRef",
        ref: chartContainRef,
        class: normalizeClass(getClass.value),
        style: normalizeStyle(getPosition.value),
        onMousedown: withModifiers(dragComponent, ["stop"]),
        onMouseenter: withModifiers(mouseEnter, ["prevent", "stop"]),
        onMouseleave: withModifiers(mouseLeave, ["prevent"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(isActive.value && !__props.comOption.chartContain.lock && __props.comOption.chartContain.show ? selectBorder.points : [], (item) => {
          return openBlock(), createElementBlock("div", {
            key: item,
            class: "contain-point",
            style: normalizeStyle(getPointStyle(item)),
            onMousedown: withModifiers(($event) => changeSizeComponent(item, $event), ["stop", "prevent"])
          }, null, 44, _hoisted_1$8);
        }), 128)),
        withDirectives(createElementVNode("div", {
          ref_key: "chartItemRef",
          ref: chartItemRef,
          class: "chart-item",
          style: normalizeStyle(getStyle.value)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4), [
          [vShow, (_a = __props.comOption) == null ? void 0 : _a.chartContain.show]
        ]),
        isActive.value && !__props.comOption.chartContain.lock && __props.comOption.chartContain.show ? (openBlock(), createBlock(unref(Icon), {
          key: 0,
          class: "icon-rotate",
          icon: "ant-design:sync-outlined",
          size: "20",
          onMousedown: withModifiers(handleRotate, ["prevent", "stop"])
        })) : createCommentVNode("", true),
        __props.comOption.chartContain.lock && __props.comOption.chartContain.show ? (openBlock(), createBlock(unref(Icon), {
          key: 1,
          class: "icon-lock",
          icon: "ant-design:lock-outlined"
        })) : createCommentVNode("", true),
        isActive.value || isSelect.value || hover.value ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
          hover.value ? (openBlock(), createElementBlock("div", _hoisted_3$5)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 38);
    };
  }
});
const ChartContain = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-bdd5aa92"]]);
const LinesEnum = {
  rt: "横上",
  rm: "横中",
  rb: "横下",
  cl: "纵左",
  cm: "纵中",
  cr: "纵右"
};
const _hoisted_1$7 = { class: "pos" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...{ name: "ChartNearLine" },
  __name: "index",
  setup(__props) {
    const nearLines = reactive({
      adsorb: 10,
      // 相距N个像素将自动吸附
      near: 2,
      //相距N个像素显示线条
      lineStatus: {
        [LinesEnum.rt]: { show: false, pos: 0, node: null },
        [LinesEnum.rm]: { show: false, pos: 0, node: null },
        [LinesEnum.rb]: { show: false, pos: 0, node: null },
        [LinesEnum.cl]: { show: false, pos: 0, node: null },
        [LinesEnum.cm]: { show: false, pos: 0, node: null },
        [LinesEnum.cr]: { show: false, pos: 0, node: null }
      }
    });
    const screenEditStore2 = useScreenEditStore();
    const { prefixCls } = useDesign("near-line");
    onMounted(() => {
      screenEvent.on(ScreenEventEnum.MOVE, (isMulti) => {
        showLine(isMulti);
      });
      screenEvent.on(ScreenEventEnum.UN_MOVE, () => {
        hideLine();
      });
    });
    function showLineCondition(curComponentStyle, { x, y, bottom, right, halfWidth, halfHeight }) {
      const curComponentHalfWidth = curComponentStyle.width / 2;
      const curComponentHalfHeight = curComponentStyle.height / 2;
      const lines = nearLines.lineStatus;
      return {
        y: [
          {
            isNear: isNear(curComponentStyle.y, y),
            isAdsorb: isAdsorb(curComponentStyle.y, y),
            lineNode: lines[LinesEnum.rt].node,
            line: LinesEnum.rt,
            dragShift: y,
            lineShift: y
          },
          {
            isNear: isNear(curComponentStyle.bottom, y),
            isAdsorb: isAdsorb(curComponentStyle.bottom, y),
            lineNode: lines[LinesEnum.rt].node,
            line: LinesEnum.rt,
            dragShift: y - curComponentStyle.height,
            lineShift: y
          },
          {
            //判断中间是否对齐
            isNear: isNear(curComponentStyle.y + curComponentHalfHeight, y + halfHeight),
            isAdsorb: isAdsorb(curComponentStyle.y + curComponentHalfHeight, y + halfHeight),
            lineNode: lines[LinesEnum.rm].node,
            line: LinesEnum.rm,
            dragShift: y + halfHeight - curComponentHalfHeight,
            lineShift: y + halfHeight
          },
          {
            isNear: isNear(curComponentStyle.y, bottom),
            isAdsorb: isAdsorb(curComponentStyle.y, bottom),
            lineNode: lines[LinesEnum.rb].node,
            line: LinesEnum.rb,
            dragShift: bottom,
            lineShift: bottom
          },
          {
            isNear: isNear(curComponentStyle.bottom, bottom),
            isAdsorb: isAdsorb(curComponentStyle.bottom, bottom),
            lineNode: lines[LinesEnum.rb].node,
            line: LinesEnum.rb,
            dragShift: bottom - curComponentStyle.height,
            lineShift: bottom
          }
        ],
        x: [
          {
            isNear: isNear(curComponentStyle.x, x),
            isAdsorb: isAdsorb(curComponentStyle.x, x),
            lineNode: lines[LinesEnum.cl].node,
            line: LinesEnum.cl,
            dragShift: x,
            lineShift: x
          },
          {
            isNear: isNear(curComponentStyle.right, x),
            isAdsorb: isAdsorb(curComponentStyle.right, x),
            lineNode: lines[LinesEnum.cl].node,
            line: LinesEnum.cl,
            dragShift: x - curComponentStyle.width,
            lineShift: x
          },
          {
            isNear: isNear(curComponentStyle.x + curComponentHalfWidth, x + halfWidth),
            isAdsorb: isAdsorb(curComponentStyle.x + curComponentHalfWidth, x + halfWidth),
            lineNode: lines[LinesEnum.cm].node,
            line: LinesEnum.cm,
            dragShift: x + halfWidth - curComponentHalfWidth,
            lineShift: x + halfWidth
          },
          {
            isNear: isNear(curComponentStyle.x, right),
            isAdsorb: isAdsorb(curComponentStyle.x, right),
            lineNode: lines[LinesEnum.cr].node,
            line: LinesEnum.cr,
            dragShift: right,
            lineShift: right
          },
          {
            isNear: isNear(curComponentStyle.right, right),
            isAdsorb: isAdsorb(curComponentStyle.right, right),
            lineNode: lines[LinesEnum.cr].node,
            line: LinesEnum.cr,
            dragShift: right - curComponentStyle.width,
            lineShift: right
          }
        ]
      };
    }
    function calcCurComponentShift(key, condition, curComponentStyle) {
      const { width, height } = screenEditStore2.getCurComponent.chartContain.dropInfo;
      if (key === "x") {
        return Math.round(condition.dragShift - (width - curComponentStyle.width) / 2);
      }
      return Math.round(condition.dragShift - (height - curComponentStyle.height) / 2);
    }
    function isNear(dragValue, targetValue) {
      return calcDistance(dragValue, targetValue, nearLines.near);
    }
    function isAdsorb(dragValue, targetValue) {
      return calcDistance(dragValue, targetValue, nearLines.adsorb);
    }
    function calcDistance(dragValue, targetValue, distance) {
      return Math.abs(dragValue - targetValue) <= distance;
    }
    async function hideLine() {
      Object.keys(nearLines.lineStatus).forEach((line) => {
        nearLines.lineStatus[line].show = false;
        nearLines.lineStatus[line].x = 0;
        nearLines.lineStatus[line].y = 0;
      });
    }
    async function showLine(isMulti) {
      if (!screenEditStore2.getCurComponent || isMulti && screenEditStore2.getSelectArea.components.length > 20) {
        return;
      }
      const styles = [];
      if (isMulti) {
        screenEditStore2.getSelectArea.components.forEach((com) => {
          styles.push({ com, style: getComponentRotatedStyle(com.chartContain.dropInfo) });
        });
      } else {
        styles.push({
          com: screenEditStore2.getCurComponent,
          style: getComponentRotatedStyle(screenEditStore2.getCurComponent.chartContain.dropInfo)
        });
      }
      hideLine().then();
      styles.forEach((style) => {
        showComponentLine(style, isMulti);
      });
    }
    function showComponentLine(style, isMulti) {
      const show = (conditions) => {
        Object.keys(conditions).forEach((key) => {
          conditions[key].forEach((condition) => {
            nextTick(() => {
              if (condition.isNear && condition.lineNode) {
                const shift = Math.round(condition.lineShift);
                if (key === "x") {
                  condition.lineNode.style.transform = `translate(${shift}px, 0px)`;
                } else {
                  condition.lineNode.style.transform = `translate(0px, ${shift}px)`;
                }
                nearLines.lineStatus[condition.line].pos = shift;
                nearLines.lineStatus[condition.line].show = true;
              }
              if (!condition.isAdsorb) return;
              style.com.chartContain.dropInfo[key] = screenEditStore2.getCurComponent.chartContain.dropInfo.rotate === 0 ? condition.dragShift : calcCurComponentShift(key, condition, style.style);
            });
          });
        });
      };
      show(
        showLineCondition(style.style, {
          x: screenEditStore2.getCanvasConfig.width / 2,
          y: screenEditStore2.getCanvasConfig.height / 2,
          bottom: 0,
          right: 0,
          halfWidth: 0,
          halfHeight: 0
        })
      );
      show(
        showLineCondition(style.style, {
          x: 0,
          y: 0,
          bottom: screenEditStore2.getCanvasConfig.height,
          right: screenEditStore2.getCanvasConfig.width,
          halfWidth: 0,
          halfHeight: 0
        })
      );
      screenEditStore2.getGuideLine.lineListX.forEach((line) => {
        show(
          showLineCondition(style.style, {
            x: 0,
            y: line.value,
            bottom: 0,
            right: 0,
            halfWidth: 0,
            halfHeight: 0
          })
        );
      });
      screenEditStore2.getGuideLine.lineListY.forEach((line) => {
        show(
          showLineCondition(style.style, {
            x: line.value,
            y: 0,
            bottom: 0,
            right: 0,
            halfWidth: 0,
            halfHeight: 0
          })
        );
      });
      screenEditStore2.getComponentList.forEach((component) => {
        if (component === screenEditStore2.getCurComponent || isMulti && screenEditStore2.getSelectArea.components.some((com) => com.chart.id === component.chart.id))
          return;
        const componentStyle = getComponentRotatedStyle(component.chartContain.dropInfo);
        const { x, y, bottom, right } = componentStyle;
        const halfWidth = componentStyle.width / 2;
        const halfHeight = componentStyle.height / 2;
        show(showLineCondition(style.style, { x, y, bottom, right, halfWidth, halfHeight }));
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(nearLines.lineStatus), (line) => {
          return withDirectives((openBlock(), createElementBlock("div", {
            key: line,
            ref_for: true,
            ref: (el) => nearLines.lineStatus[line].node = el,
            class: normalizeClass(["line", line.includes("横") ? "xLine" : "yLine"])
          }, [
            createElementVNode("div", _hoisted_1$7, toDisplayString(nearLines.lineStatus[line].pos), 1)
          ], 2)), [
            [vShow, nearLines.lineStatus[line].show || false]
          ]);
        }), 128))
      ], 2);
    };
  }
});
const ChartNearLine = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-88d9d34f"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{ name: "ChartMultiSelect" },
  __name: "index",
  props: {
    selectArea: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const screenEditStore2 = useScreenEditStore();
    const { prefixCls } = useDesign("select-area");
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        style: normalizeStyle({
          transform: `translate(${__props.selectArea.x}px,${__props.selectArea.y}px)`,
          width: `${__props.selectArea.width}px`,
          height: `${__props.selectArea.height}px`
        })
      }, _cache[0] || (_cache[0] = [
        createElementVNode("div", { class: "select-area-bg" }, null, -1)
      ]), 6)), [
        [vShow, unref(screenEditStore2).selectArea.show]
      ]);
    };
  }
});
const ChartMultiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e9844525"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{ name: "ScreenCanvas" },
  __name: "index",
  setup(__props) {
    const { prefixCls } = useDesign("screen-canvas");
    const screenEditStore2 = useScreenEditStore();
    const screenShortcutStore = useScreenShortcutStore();
    const screenCanvasRef = useTemplateRef("screenCanvasRef");
    const { getAntdLocale } = useLocale();
    const { antTheme } = useDarkModeTheme(computed(() => screenEditStore2.getTheme));
    const componentList = computed(() => {
      return [...screenEditStore2.getComponentList].reverse();
    });
    const canvasScreen = reactive({
      canvasX: 0,
      canvasY: 0,
      area: {
        show: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      comMoving: false,
      isUp: false
    });
    const canvasStyle = computed(() => {
      return {
        ...getCanvasStyle(screenEditStore2.getCanvasConfig),
        transform: `scale(${screenEditStore2.getScale})`
      };
    });
    const containClass = (item) => {
      var _a, _b;
      if (((_b = (_a = item.chart) == null ? void 0 : _a.events) == null ? void 0 : _b.emits) && item.chart.events.emits.length > 0) {
        for (const emit of item.chart.events.emits) {
          if (emit === ChartEventEnum.CHART_CLICK || emit === ChartEventEnum.CHART_DBLCLICK) {
            return "allow-pointer";
          }
        }
      }
    };
    onMounted(() => {
      screenEditStore2.setScreenCanvas(screenCanvasRef.value ?? null);
      screenEvent.on(ScreenEventEnum.MOVE, () => {
        if (!canvasScreen.comMoving) canvasScreen.comMoving = true;
      });
      screenEvent.on(ScreenEventEnum.UN_MOVE, () => {
        canvasScreen.comMoving = false;
      });
      screenEvent.on(ScreenEventEnum.CREATE_CHART, (e) => {
        createChart2(e, 0, 0);
      });
    });
    const handleDrop = (e) => {
      var _a;
      screenShortcutStore.setShowMenu(false);
      const com = (_a = e.dataTransfer) == null ? void 0 : _a.getData(MENU_CHART_DRAG);
      if (!screenEditStore2.getScreenCanvas || !com) {
        return;
      }
      const component = JSON.parse(com);
      const rectInfo = screenEditStore2.getScreenCanvas.getBoundingClientRect();
      let x = Math.round((e.clientX - rectInfo.left) / screenEditStore2.getScale);
      let y = Math.round((e.clientY - rectInfo.top) / screenEditStore2.getScale);
      if (x + component.chartContain.dropInfo.width > screenEditStore2.getCanvasConfig.width) {
        x = screenEditStore2.getCanvasConfig.width - component.chartContain.dropInfo.width;
      }
      if (y + component.chartContain.dropInfo.height > screenEditStore2.getCanvasConfig.height) {
        y = screenEditStore2.getCanvasConfig.height - component.chartContain.dropInfo.height;
      }
      createChart2(component, x, y);
    };
    function createChart2(component, x, y) {
      component.chartContain.dropInfo.x = x;
      component.chartContain.dropInfo.y = y;
      screenEditStore2.addComponent(component, 0);
      screenEditStore2.setCurComponent(component, 0);
      hideSelectArea();
      screenEditStore2.setUndoRedoData(`添加${component.chart.name}`);
    }
    function handleMouseDown(e) {
      if (e.button === 2) {
        e.stopPropagation();
        return;
      }
      if (!e.ctrlKey && !e.metaKey) {
        hideSelectArea();
      }
      screenShortcutStore.setShowMenu(false);
      if (!screenEditStore2.getScreenCanvas || e.ctrlKey || e.metaKey) return;
      const canvas = screenEditStore2.getScreenCanvas.getBoundingClientRect();
      canvasScreen.canvasX = canvas.x;
      canvasScreen.canvasY = canvas.y;
      canvasScreen.area.x = (e.clientX - canvasScreen.canvasX) / screenEditStore2.getScale;
      canvasScreen.area.y = (e.clientY - canvasScreen.canvasY) / screenEditStore2.getScale;
      canvasScreen.area.width = 0;
      canvasScreen.area.height = 0;
      canvasScreen.area.show = true;
      screenEditStore2.showSelectArea();
      const move = throttle((moveEvent) => {
        canvasScreen.area.width = Math.abs((moveEvent.clientX - e.clientX) / screenEditStore2.getScale);
        canvasScreen.area.height = Math.abs((moveEvent.clientY - e.clientY) / screenEditStore2.getScale);
        if (moveEvent.clientX < e.clientX) {
          canvasScreen.area.x = (moveEvent.clientX - canvasScreen.canvasX) / screenEditStore2.getScale;
        }
        if (moveEvent.clientY < e.clientY) {
          canvasScreen.area.y = (moveEvent.clientY - canvasScreen.canvasY) / screenEditStore2.getScale;
        }
      }, 2);
      const up = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        const curArea = cloneDeep(canvasScreen.area);
        const areaComponents = getAreaComponents(curArea);
        selectComponents(areaComponents);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    }
    function hideSelectArea() {
      canvasScreen.area.show = false;
      canvasScreen.area.width = 0;
      canvasScreen.area.height = 0;
      screenEditStore2.cleanSelectArea();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "screenCanvasRef",
        ref: screenCanvasRef,
        class: normalizeClass(unref(prefixCls)),
        onDrop: handleDrop,
        onDragstart: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent", "stop"])),
        onMousedown: handleMouseDown,
        style: normalizeStyle(canvasStyle.value)
      }, [
        createVNode(unref(ConfigProvider), {
          locale: unref(getAntdLocale),
          theme: unref(antTheme)
        }, {
          default: withCtx(() => [
            unref(screenEditStore2).getCanvasConfig.watermark ? (openBlock(), createBlock(unref(Watermark), {
              key: 0,
              content: unref(screenEditStore2).getCanvasConfig.watermark,
              style: normalizeStyle({
                position: "absolute",
                width: `${unref(screenEditStore2).getCanvasConfig.width}px`,
                height: `${unref(screenEditStore2).getCanvasConfig.height}px`
              })
            }, null, 8, ["content", "style"])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(componentList.value, (item, index2) => {
              var _a;
              return withDirectives((openBlock(), createBlock(ChartContain, {
                key: ((_a = item.chart) == null ? void 0 : _a.id) + unref(screenEditStore2).getKey,
                index: componentList.value.length - index2 - 1,
                "com-option": item,
                class: normalizeClass(containClass(item))
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(item.chart.type && unref(ComponentsEnum)[item.chart.type].component), {
                      class: normalizeClass(["component", { move: canvasScreen.comMoving && item.chart.id !== ((_a2 = unref(screenEditStore2).getCurComponent) == null ? void 0 : _a2.chart.id) }]),
                      id: `com${item.chart.id}`,
                      chart: item.chart,
                      "chart-contain": item.chartContain
                    }, null, 8, ["class", "id", "chart", "chart-contain"]))
                  ];
                }),
                _: 2
              }, 1032, ["index", "com-option", "class"])), [
                [vShow, computed(() => {
                  var _a2;
                  return (_a2 = item.chartContain) == null ? void 0 : _a2.show;
                })]
              ]);
            }), 128))
          ]),
          _: 1
        }, 8, ["locale", "theme"]),
        createVNode(ChartMultiSelect, {
          "select-area": canvasScreen.area
        }, null, 8, ["select-area"]),
        createVNode(ChartNearLine)
      ], 38);
    };
  }
});
const ScreenCanvas = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-17c82941"]]);
const minScale = 0.2;
const maxScale = 5;
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{ name: "FrameCanvas" },
  __name: "index",
  props: {
    width: {
      type: Number,
      default: 5e3
    },
    height: {
      type: Number,
      default: 3e3
    }
  },
  setup(__props) {
    const autoScale = ref(true);
    const { prefixCls } = useDesign("frame-canvas");
    const xLeft = ref(0);
    const yTop = ref(0);
    const drift = ref(1e3);
    const scale = ref(1);
    const screenEditStore2 = useScreenEditStore();
    const frameCanvasRef = useTemplateRef("frameCanvasRef");
    const dropContentRef = useTemplateRef("dropContentRef");
    let moveXValue = [0, 0];
    let moveYValue = [0, 0];
    watch([() => screenEditStore2.getCanvasConfig.width, () => screenEditStore2.getCanvasConfig.height], () => {
      handleResize();
    });
    const handleResize = throttle(() => {
      if (autoScale.value) {
        calcScale();
        setScrollPos();
      }
    }, 30);
    onMounted(() => {
      var _a;
      const observer = new ResizeObserver(handleResize);
      observer.observe(dropContentRef.value);
      (_a = dropContentRef.value) == null ? void 0 : _a.addEventListener("wheel", handleMouseWheel, { passive: false });
      onUnmounted(() => {
        var _a2;
        (_a2 = dropContentRef.value) == null ? void 0 : _a2.removeEventListener("wheel", handleMouseWheel);
        observer == null ? void 0 : observer.disconnect();
      });
    });
    function calcScale() {
      if (unref(autoScale) && frameCanvasRef.value) {
        const rect = frameCanvasRef.value.getBoundingClientRect();
        const width = rect.width - 50;
        const height = rect.height - 40;
        const baseProportion = Number.parseFloat(
          (screenEditStore2.getCanvasConfig.width / screenEditStore2.getCanvasConfig.height).toFixed(5)
        );
        const currentRate = Number.parseFloat((width / height).toFixed(5));
        if (currentRate > baseProportion) {
          scale.value = Number.parseFloat((height * baseProportion / screenEditStore2.getCanvasConfig.width).toFixed(2));
        } else {
          scale.value = Number.parseFloat((width / baseProportion / screenEditStore2.getCanvasConfig.height).toFixed(2));
        }
        if (unref(scale) > maxScale) {
          scale.value = maxScale;
        }
        if (unref(scale) < minScale) {
          scale.value = minScale;
        }
      }
      screenEditStore2.setScale(unref(scale));
    }
    function scrollRuler() {
      if (!dropContentRef.value) return;
      xLeft.value = -dropContentRef.value.scrollLeft;
      yTop.value = -dropContentRef.value.scrollTop;
    }
    const handleScale = throttle((type) => {
      const value = (scale.value * 100 - Math.round(scale.value * 100) % 5) / 100;
      if (type === "add") {
        scale.value = Math.min(maxScale, Number.parseFloat((value + 0.05).toFixed(2)));
      } else {
        scale.value = Math.max(minScale, Number.parseFloat((value - 0.05).toFixed(2)));
      }
      setScrollPos();
      screenEditStore2.setScale(scale.value);
    }, 100);
    const changeScale = throttle((value) => {
      if (value) {
        scale.value = value / 100;
        setScrollPos();
        screenEditStore2.setScale(scale.value);
      }
    }, 100);
    const handleMouseWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY <= 0) {
          handleScale("add");
        } else if (e.deltaY > 0) {
          handleScale("reduce");
        }
      }
    };
    function setScrollPos() {
      if (dropContentRef.value === null) return;
      if (frameCanvasRef.value === null) return;
      let { width, height } = frameCanvasRef.value.getBoundingClientRect();
      if (width === 0 && height === 0) {
        width = 800;
        height = 450;
      }
      const left = drift.value * scale.value - Math.round(width - screenEditStore2.getCanvasConfig.width * scale.value) / 2 + 22;
      const top = drift.value * scale.value - Math.round(height - screenEditStore2.getCanvasConfig.height * scale.value) / 2 + 18;
      dropContentRef.value.scrollTop = Math.max(top, 0);
      dropContentRef.value.scrollLeft = Math.max(left, 0);
    }
    function dragScreen(e) {
      if (dropContentRef.value === null) return;
      const startX = e.pageX;
      const startY = e.pageY;
      const mouseMove = throttle((e2) => {
        if (!e2.ctrlKey && !e2.metaKey || !dropContentRef.value) return;
        const nx = e2.pageX - startX;
        const ny = e2.pageY - startY;
        const [moveX1, moveX2] = moveXValue;
        const [moveY1, moveY2] = moveYValue;
        moveXValue = [moveX2, nx];
        moveYValue = [moveY2, ny];
        dropContentRef.value.scrollLeft -= moveX2 > moveX1 ? Math.abs(moveX2 - moveX1) : -Math.abs(moveX2 - moveX1);
        dropContentRef.value.scrollTop -= moveY2 > moveY1 ? Math.abs(moveY2 - moveY1) : -Math.abs(moveY2 - moveY1);
      }, 10);
      const mouseUp = () => {
        globalThis.removeEventListener("mousemove", mouseMove);
        globalThis.removeEventListener("mouseup", mouseUp);
        moveXValue = [0, 0];
        moveYValue = [0, 0];
      };
      globalThis.addEventListener("mousemove", mouseMove);
      globalThis.addEventListener("mouseup", mouseUp);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        ref_key: "frameCanvasRef",
        ref: frameCanvasRef
      }, [
        createVNode(CanvasRuler, {
          "ruler-x-left": xLeft.value,
          "ruler-y-top": yTop.value,
          drift: drift.value,
          "ruler-x": __props.width,
          "ruler-y": __props.height
        }, null, 8, ["ruler-x-left", "ruler-y-top", "drift", "ruler-x", "ruler-y"]),
        createElementVNode("div", {
          ref_key: "dropContentRef",
          ref: dropContentRef,
          class: "drop-content",
          onScroll: scrollRuler
        }, [
          createVNode(CanvasBackground, {
            width: __props.width,
            height: __props.height,
            drift: drift.value
          }, {
            default: withCtx(() => [
              createVNode(ScreenCanvas, {
                draggable: "true",
                onDragstart: withModifiers(dragScreen, ["prevent", "stop"])
              })
            ]),
            _: 1
          }, 8, ["width", "height", "drift"])
        ], 544),
        createVNode(CanvasOperator),
        createVNode(_sfc_main$g, {
          scale: scale.value,
          "min-scale": minScale * 100,
          "max-scale": maxScale * 100,
          onAddScale: _cache[0] || (_cache[0] = ($event) => unref(handleScale)("add")),
          onReduceScale: _cache[1] || (_cache[1] = ($event) => unref(handleScale)("reduce")),
          onChangeScale: unref(changeScale),
          onAutoScale: _cache[2] || (_cache[2] = (val) => autoScale.value = val)
        }, null, 8, ["scale", "min-scale", "max-scale", "onChangeScale"])
      ], 2);
    };
  }
});
const index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-de9ae999"]]);
const _hoisted_1$6 = {
  key: 0,
  class: "header"
};
const _hoisted_2$5 = { class: "title" };
const _hoisted_3$4 = { class: "content" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{ name: "FrameBox" },
  __name: "index",
  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: Number,
      default: 14
    },
    title: {
      type: String,
      default: ""
    },
    radioData: {
      type: Array,
      default: () => []
    },
    span: {
      type: Number,
      default: 8
    },
    chart: {
      type: Object
    }
  },
  emits: ["radioChange", "titleClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("frame-box");
    const curRadio = ref();
    onMounted(() => {
      var _a;
      if (((_a = props.radioData) == null ? void 0 : _a.length) > 0) {
        curRadio.value = props.radioData[0].value;
      }
    });
    const handleChange = () => {
      const value = unref(curRadio);
      emit("radioChange", value);
    };
    const titleClick = () => {
      emit("titleClick");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        __props.showHeader ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
          createElementVNode("div", {
            class: "icon-title",
            onClick: titleClick
          }, [
            __props.icon ? (openBlock(), createBlock(unref(Icon), {
              key: 0,
              class: "title",
              icon: __props.icon,
              size: __props.iconSize
            }, null, 8, ["icon", "size"])) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_2$5, toDisplayString(__props.title), 1)
          ]),
          createVNode(unref(RadioGroup), {
            class: "radio-group",
            size: "small",
            value: curRadio.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => curRadio.value = $event),
            onChange: handleChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.radioData, (item) => {
                return openBlock(), createBlock(unref(Tooltip), {
                  key: item.value,
                  title: item.tooltip
                }, {
                  default: withCtx(() => [
                    createVNode(unref(RadioButton), {
                      class: "radio-button",
                      value: item.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: item.icon
                        }, null, 8, ["icon"])
                      ]),
                      _: 2
                    }, 1032, ["value"])
                  ]),
                  _: 2
                }, 1032, ["title"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$4, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.chart))),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 2);
    };
  }
});
const FrameBox = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8929fb33"]]);
const _hoisted_1$5 = { class: "item-content" };
const _hoisted_2$4 = ["src"];
const _hoisted_3$3 = {
  class: "title",
  style: { "flex": "1" }
};
const _hoisted_4$2 = { class: "iconContain" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LayerItem",
  props: {
    parentItem: { type: Object },
    item: { type: Object, required: true },
    showEye: { type: Boolean, default: true },
    showLock: { type: Boolean, default: true },
    index: { type: Number },
    expand: { type: Boolean, default: false },
    externalSelect: { type: Boolean, default: false },
    //外部设置选中效果开关，配合isSelect使用
    isSelect: { type: Boolean, default: false }
    //外部设置选中效果
  },
  emits: ["expand", "select", "enter", "leave"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "56d1bd00": bgColor.value
    }));
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("layer-item");
    const screenEditStore2 = useScreenEditStore();
    const screenLayoutStore = useScreenLayoutStore();
    const img = computed(() => {
      return screenEditStore2.getChartImg(props.item.chart.type);
    });
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const color2 = useRootSetting().getThemeColor;
    const getClass = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      return [
        prefixCls,
        {
          select: props.externalSelect && props.isSelect || !props.externalSelect && (((_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chart.id) === ((_b = props.item) == null ? void 0 : _b.chart.id) || screenEditStore2.getSelectArea.components.map((i) => i.chart.id).includes((_c = props.item) == null ? void 0 : _c.chart.id) || ((_d = screenEditStore2.getCurConfigComponent) == null ? void 0 : _d.chart.id) === ((_e = props.item) == null ? void 0 : _e.chart.id)),
          hover: screenEditStore2.getCurHoverComponentId === ((_f = props.item) == null ? void 0 : _f.chart.id) || screenEditStore2.getCurHoverComponentId === ((_g = props.parentItem) == null ? void 0 : _g.chart.id) && ((_j = (_i = (_h = props.parentItem) == null ? void 0 : _h.chart) == null ? void 0 : _i.options) == null ? void 0 : _j.hoverId) === ((_k = props.item) == null ? void 0 : _k.chart.id)
        }
      ];
    });
    const isEnter = ref(false);
    function enterHandle() {
      isEnter.value = true;
      emit("enter");
    }
    function leaveHandle() {
      isEnter.value = false;
      emit("leave");
    }
    function handleExpand() {
      emit("expand", !props.expand);
    }
    function mouseDownHandle() {
      emit("select");
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClass.value),
        onMouseenter: enterHandle,
        onMouseleave: leaveHandle,
        onMousedown: mouseDownHandle
      }, [
        createElementVNode("div", _hoisted_1$5, [
          __props.item.chart.type === unref(ComType).MfCombine ? (openBlock(), createElementBlock("div", {
            key: 0,
            onClick: handleExpand
          }, [
            props.expand ? (openBlock(), createBlock(unref(FolderOpenTwoTone), {
              key: 0,
              class: "group",
              "two-tone-color": unref(color2)
            }, null, 8, ["two-tone-color"])) : (openBlock(), createBlock(unref(FolderTwoTone), {
              key: 1,
              class: "group",
              "two-tone-color": unref(color2)
            }, null, 8, ["two-tone-color"]))
          ])) : (openBlock(), createElementBlock("img", {
            key: 1,
            class: "img",
            alt: "组件",
            src: img.value
          }, null, 8, _hoisted_2$4)),
          createElementVNode("span", _hoisted_3$3, toDisplayString((_a = __props.item) == null ? void 0 : _a.chart.name), 1),
          createElementVNode("div", _hoisted_4$2, [
            __props.showEye && !unref(screenLayoutStore).getLayerCollapsed && (isEnter.value || !__props.item.chartContain.show) ? (openBlock(), createBlock(unref(Icon), {
              key: 0,
              class: "icon",
              icon: __props.item.chartContain.show ? "ant-design:eye-outlined" : "ant-design:eye-invisible-outlined",
              onClick: _cache[0] || (_cache[0] = () => __props.item.chartContain.show = !__props.item.chartContain.show)
            }, null, 8, ["icon"])) : createCommentVNode("", true),
            __props.showLock && !unref(screenLayoutStore).getLayerCollapsed && (isEnter.value || __props.item.chartContain.lock) ? (openBlock(), createBlock(unref(Icon), {
              key: 1,
              class: "icon",
              icon: __props.item.chartContain.lock ? "ant-design:lock-outlined" : "ant-design:unlock-outlined",
              onClick: _cache[1] || (_cache[1] = () => __props.item.chartContain.lock = !__props.item.chartContain.lock)
            }, null, 8, ["icon"])) : createCommentVNode("", true)
          ])
        ])
      ], 34);
    };
  }
});
const LayerItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-925f45da"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LayerGroup",
  props: {
    item: { type: Object, required: true },
    expand: { type: Boolean, default: false },
    showEye: { type: Boolean, default: true },
    showLock: { type: Boolean, default: true },
    showChildEye: { type: Boolean, default: true },
    showChildLock: { type: Boolean, default: true },
    externalSelect: { type: Boolean, default: false },
    //外部设置选中效果开关，配合isSelect使用
    isSelect: { type: Boolean, default: false },
    //外部设置选中效果
    childSelect: { type: String, default: "" }
  },
  emits: ["parentClick", "childClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("layer-group");
    const screenEditStore2 = useScreenEditStore();
    const screenLayoutStore = useScreenLayoutStore();
    const childClass = computed(() => {
      return {
        "child-item": true,
        collapsed: screenLayoutStore.getLayerCollapsed
      };
    });
    const expand = ref(props.expand);
    watch(
      () => props.expand,
      (val) => expand.value = val
    );
    function selectHandle(item, index2) {
      item.chart.options.selectIndex = index2;
    }
    function itemEnter() {
      var _a;
      screenEditStore2.setCurHoverComponent((_a = props.item) == null ? void 0 : _a.chart.id);
    }
    function itemLeave() {
      screenEditStore2.setCurHoverComponent("");
    }
    function childEnter(id) {
      const com = screenEditStore2.getComponent(screenEditStore2.getCurHoverComponentId);
      if (com) {
        com.chart.options.hoverId = id;
      }
    }
    function childLeave() {
      const com = screenEditStore2.getComponent(screenEditStore2.getCurHoverComponentId);
      if (com) {
        com.chart.options.hoverId = void 0;
      }
    }
    function expandHandle(e) {
      expand.value = e;
    }
    function parentClick(e) {
      emit("parentClick", e);
    }
    function childClick(child) {
      emit("childClick", child);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        onMouseenter: itemEnter,
        onMouseleave: itemLeave
      }, [
        createVNode(LayerItem, {
          item: __props.item,
          onExpand: expandHandle,
          expand: expand.value,
          "show-eye": __props.showEye,
          "show-lock": __props.showLock,
          "external-select": __props.externalSelect,
          "is-select": __props.isSelect,
          onClick: parentClick
        }, null, 8, ["item", "expand", "show-eye", "show-lock", "external-select", "is-select"]),
        createVNode(unref(NCollapseTransition), {
          show: expand.value,
          class: normalizeClass(childClass.value)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.chart.options.components, (child, index2) => {
              return openBlock(), createBlock(LayerItem, {
                key: child.chart.id,
                "parent-item": __props.item,
                item: child,
                index: index2,
                "external-select": __props.externalSelect,
                "is-select": __props.childSelect === child.chart.id,
                "show-eye": __props.showChildEye,
                "show-lock": __props.showChildLock,
                onSelect: ($event) => selectHandle(__props.item, index2),
                onEnter: ($event) => childEnter(child.chart.id),
                onLeave: childLeave,
                onClick: ($event) => childClick(child)
              }, null, 8, ["parent-item", "item", "index", "external-select", "is-select", "show-eye", "show-lock", "onSelect", "onEnter", "onClick"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["show", "class"])
      ], 34);
    };
  }
});
const LayerGroup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b118e01c"]]);
const _hoisted_1$4 = ["onDrop"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ name: "FrameLayer" },
  __name: "index",
  props: {
    collapsed: propTypes.bool.def(false)
  },
  setup(__props) {
    const props = __props;
    const { prefixCls } = useDesign("frame-layer");
    const getClass = computed(() => {
      return [
        prefixCls,
        {
          collapsed: props.collapsed
        }
      ];
    });
    const radioData = [
      { value: "collapse", icon: "iconfont:icon-mfish-collapse-all", tooltip: "折叠分组" },
      { value: "expand", icon: "iconfont:icon-mfish-expand-all", tooltip: "展开分组" }
    ];
    const componentList = computed(() => {
      return screenEditStore2.getComponentList;
    });
    onMounted(() => {
      const types = screenEditStore2.getComponentList.map((item) => item.chart.type).join(",");
      getScreenChartsList({ types, pageNum: 1, pageSize: 1e4 }).then((res) => {
        var _a;
        if (res && ((_a = res.list) == null ? void 0 : _a.length) > 0) {
          res.list.forEach((item) => {
            if (!screenEditStore2.hasChartImg(item.type)) {
              imageSrc(getLocalFileUrl(item == null ? void 0 : item.picKey), { errorMessageMode: "none" }).then((img) => {
                screenEditStore2.setChartImg(item.type, img);
              });
            }
          });
        }
      });
    });
    const expand = ref(false);
    const screenEditStore2 = useScreenEditStore();
    const screenLayoutStore = useScreenLayoutStore();
    const onMoveCallback = (val) => {
      const { oldIndex, newIndex } = val.moved;
      const moveTarget = screenEditStore2.getComponentList.splice(oldIndex, 1)[0];
      screenEditStore2.getComponentList.splice(newIndex, 0, moveTarget);
      screenEditStore2.setCurComponentIndex(newIndex);
    };
    const collapseLayer = () => {
      screenLayoutStore.setLayerCollapsed(!screenLayoutStore.getLayerCollapsed);
    };
    function handleDropItem(e, index2) {
      var _a;
      e.stopPropagation();
      const com = (_a = e.dataTransfer) == null ? void 0 : _a.getData(MENU_CHART_DRAG);
      if (com) {
        const chart = JSON.parse(com);
        if (!chart) return;
        screenEditStore2.addComponent(chart, index2);
        screenEditStore2.setCurComponent(chart, index2);
        screenEditStore2.setUndoRedoData(`添加${chart.chart.name}`);
      }
    }
    function changeCurComponent(item, index2, e) {
      if ((e.ctrlKey || e.metaKey) && e.button === 0) {
        addSelectComponent(item);
        return;
      }
      if (e.button === 0) {
        screenEditStore2.cleanSelectArea();
        screenEditStore2.setCurComponent(item, index2);
      }
    }
    function itemEnter(item) {
      screenEditStore2.setCurHoverComponent(item == null ? void 0 : item.chart.id);
    }
    function itemLeave() {
      screenEditStore2.setCurHoverComponent("");
    }
    function expandHandle(e) {
      expand.value = e === "expand";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(FrameBox, {
        class: normalizeClass(getClass.value),
        title: unref(screenLayoutStore).getLayerCollapsed ? "" : "图层",
        icon: "iconfont:icon-mfish-layer",
        "icon-size": unref(screenLayoutStore).getLayerCollapsed ? 16 : 12,
        "radio-data": radioData,
        onTitleClick: collapseLayer,
        onDrop: _cache[1] || (_cache[1] = ($event) => handleDropItem($event, componentList.value.length)),
        onRadioChange: expandHandle
      }, {
        default: withCtx(() => [
          componentList.value.length === 0 ? (openBlock(), createBlock(unref(Empty), {
            key: 0,
            "image-style": unref(screenLayoutStore).getLayerCollapsed ? {
              height: "20px"
            } : {},
            description: "暂无图层",
            image: unref(noImage)
          }, null, 8, ["image-style", "image"])) : (openBlock(), createBlock(unref(ScrollContainer), { key: 1 }, {
            default: withCtx(() => [
              createVNode(unref(draggable$1), {
                "item-key": "id",
                modelValue: componentList.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => componentList.value = $event),
                animation: "300",
                "ghost-class": "ghost",
                onChange: onMoveCallback
              }, {
                item: withCtx(({ index: index2, element }) => [
                  createElementVNode("div", {
                    onDrop: ($event) => handleDropItem($event, index2),
                    style: { "margin-top": "4px" }
                  }, [
                    element.chart.type !== unref(ComType).MfCombine ? (openBlock(), createBlock(LayerItem, {
                      key: 0,
                      item: element,
                      onMousedown: ($event) => changeCurComponent(element, index2, $event),
                      onEnter: ($event) => itemEnter(element),
                      onLeave: itemLeave
                    }, null, 8, ["item", "onMousedown", "onEnter"])) : (openBlock(), createBlock(LayerGroup, {
                      key: 1,
                      item: element,
                      expand: expand.value,
                      "show-child-lock": false,
                      onMousedown: ($event) => changeCurComponent(element, index2, $event)
                    }, null, 8, ["item", "expand", "onMousedown"]))
                  ], 40, _hoisted_1$4)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["class", "title", "icon-size"]);
    };
  }
});
const index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3b66e5f3"]]);
const _hoisted_1$3 = { class: "menu-item-hide-title" };
const _hoisted_2$3 = { class: "title" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChartMenus",
  props: {
    itemHeight: { type: Number },
    width: { type: Number, default: 68 },
    collapsed: { type: Boolean, default: false },
    horizontal: { type: Boolean, default: false },
    hideTitle: { type: Boolean, default: false },
    backgroundColor: {
      type: Object,
      default: () => {
        return { light: "transparent", dark: "transparent" };
      }
    },
    menus: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menuClick", "menuChange"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "0d1a8dbe": darkBack.value,
      "4d1bbc42": `${unref(width)}px`,
      "2f136afc": lightBack.value,
      "4b451fa0": `${unref(width) - 15}px`
    }));
    const props = __props;
    const emit = __emit;
    watch(
      () => props.menus,
      (val) => {
        if (val && val.length > 0) {
          const key = val[0].value;
          selectedKeys.value = [key];
          emit("menuChange", key, val[0].name);
        }
      },
      { immediate: true }
    );
    const { prefixCls } = useDesign("chart-menus");
    const selectedKeys = ref([]);
    const { backgroundColor, width } = props;
    const lightBack = computed(() => {
      return backgroundColor.light;
    });
    const darkBack = computed(() => {
      return backgroundColor.dark;
    });
    const menuClick = (e) => {
      emit("menuClick", e, unref(selectedKeys));
      emit("menuChange", e.key, e.item.id);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(unref(Menu), {
          class: normalizeClass({ collapsed: __props.collapsed }),
          "selected-keys": selectedKeys.value,
          "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => selectedKeys.value = $event),
          onClick: menuClick
        }, {
          default: withCtx(() => [
            createVNode(unref(ScrollContainer), null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.menus, (item) => {
                  return openBlock(), createBlock(unref(MenuItem), {
                    id: item.name,
                    key: item.value,
                    style: normalizeStyle({ height: `${__props.itemHeight}px` })
                  }, {
                    default: withCtx(() => [
                      __props.hideTitle ? (openBlock(), createBlock(unref(Tooltip), {
                        key: 0,
                        title: item.name,
                        placement: "right"
                      }, {
                        default: withCtx(() => [
                          createElementVNode("div", _hoisted_1$3, [
                            createVNode(unref(Icon), {
                              style: normalizeStyle({ lineHeight: `${__props.itemHeight}px` }),
                              icon: item.icon
                            }, null, 8, ["style", "icon"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["title"])) : (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(__props.horizontal ? "menu-item-horizontal" : "menu-item-vertical")
                      }, [
                        createVNode(unref(Icon), {
                          icon: item.icon
                        }, null, 8, ["icon"]),
                        createElementVNode("div", _hoisted_2$3, toDisplayString(item.name), 1)
                      ], 2))
                    ]),
                    _: 2
                  }, 1032, ["id", "style"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class", "selected-keys"])
      ], 2);
    };
  }
});
const ChartMenus = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-dea86191"]]);
const _hoisted_1$2 = ["onDragstart", "onDblclick"];
const _hoisted_2$2 = { class: "box-header" };
const _hoisted_3$2 = { class: "box-header-text" };
const _hoisted_4$1 = { class: "box-content" };
const _hoisted_5$1 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartItems",
  props: {
    charts: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "single"
    }
  },
  setup(__props) {
    const props = __props;
    const { prefixCls } = useDesign("chart-items");
    const screenEditStore2 = useScreenEditStore();
    const imgSrc = (type) => {
      return screenEditStore2.getChartImg(type);
    };
    watch(
      () => props.charts,
      (val) => {
        val.forEach((item) => {
          const type = item == null ? void 0 : item.type;
          if (type && (item == null ? void 0 : item.picKey) && !screenEditStore2.hasChartImg(type)) {
            imageSrc(getLocalFileUrl(item == null ? void 0 : item.picKey), { errorMessageMode: "none" }).then((img) => {
              screenEditStore2.setChartImg(type, img);
            });
          }
        });
      },
      { immediate: true }
    );
    function dragstart(event, item) {
      var _a, _b, _c;
      const chart = chartInit(item);
      if (!chart) return;
      const target = event.currentTarget;
      if (event.target.className === "img") {
        (_a = event.dataTransfer) == null ? void 0 : _a.setDragImage(target, event.offsetX + 15, event.offsetY + 32);
      } else {
        (_b = event.dataTransfer) == null ? void 0 : _b.setDragImage(target, event.offsetX, event.offsetY);
      }
      (_c = event.dataTransfer) == null ? void 0 : _c.setData(MENU_CHART_DRAG, JSON.stringify(chart));
    }
    function dblClick(item) {
      const chart = chartInit(item);
      if (!chart) return;
      screenEvent.emit(ScreenEventEnum.CREATE_CHART, chart);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScrollContainer), {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(["items", __props.mode === "single" ? __props.mode : [__props.mode, "miniAnimation"]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.charts, (item) => {
              return openBlock(), createElementBlock("div", {
                draggable: "true",
                key: item.type,
                class: "item-box",
                onDragstart: ($event) => dragstart($event, item),
                onDblclick: ($event) => dblClick(item)
              }, [
                createElementVNode("div", _hoisted_2$2, [
                  createVNode(unref(MacButton), {
                    disabled: true,
                    size: __props.mode === "single" ? "small" : "mini"
                  }, null, 8, ["size"]),
                  createElementVNode("span", _hoisted_3$2, toDisplayString(item.name), 1)
                ]),
                createElementVNode("div", _hoisted_4$1, [
                  createElementVNode("img", {
                    class: "img",
                    alt: "组件图片",
                    src: imgSrc(item.type)
                  }, null, 8, _hoisted_5$1)
                ])
              ], 40, _hoisted_1$2);
            }), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const ChartItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74651cba"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ name: "FrameChart" },
  __name: "index",
  props: {
    collapsed: propTypes.bool.def(false)
  },
  setup(__props) {
    const props = __props;
    const screenLayoutStore = useScreenLayoutStore();
    const oneLevelSelect = ref();
    const categoryList = ref();
    const category = ref("");
    const screenCharts = ref(/* @__PURE__ */ new Map());
    const chartTypes = computed(() => {
      if (categoryList.value && categoryList.value.length > 0) {
        return categoryList.value.map((item) => {
          return { name: item.categoryName, icon: item.icon, value: item.id, children: item.children };
        });
      }
      return [];
    });
    const chartTypes2 = computed(() => {
      var _a;
      if (oneLevelSelect.value) {
        const category2 = (_a = categoryList.value) == null ? void 0 : _a.find((item) => item.id === oneLevelSelect.value);
        if ((category2 == null ? void 0 : category2.children) && category2.children.length > 0) {
          return category2.children.map((item) => {
            return {
              name: item.categoryName,
              icon: item.icon,
              value: item.id,
              children: item.children,
              parentId: category2.id
            };
          });
        }
      }
      return [];
    });
    const { prefixCls } = useDesign("frame-chart");
    const itemMode = ref("single");
    const radioData = [
      { value: "single", icon: "ant-design:group-outlined", tooltip: "单列" },
      { value: "double", icon: "ant-design:appstore-outlined", tooltip: "双列" }
    ];
    const getClass = computed(() => {
      return [
        prefixCls,
        {
          collapsed: props.collapsed
        }
      ];
    });
    onMounted(() => {
      queryCategoryTreeByCode("screen_charts_type", "down").then((res) => {
        if (res && res.length > 0 && res[0].children) {
          categoryList.value = res[0].children;
        }
      });
    });
    function radioChangeHandle(value) {
      itemMode.value = value;
    }
    const menuClick = (e, selectedKeys) => {
      if (selectedKeys == null ? void 0 : selectedKeys.includes(e.key)) {
        screenLayoutStore.setChartCollapsed(!screenLayoutStore.getChartCollapsed);
        return;
      }
      screenLayoutStore.setChartCollapsed(false);
    };
    const collapseChart = () => {
      screenLayoutStore.setChartCollapsed(!screenLayoutStore.getChartCollapsed);
    };
    function menuChange(e) {
      oneLevelSelect.value = e;
    }
    function menuChange2(key, name2) {
      let id;
      if (name2 === "所有") {
        id = chartTypes2.value.find((item) => item.value === key).parentId;
      } else {
        id = key;
      }
      category.value = id;
      if (screenCharts.value.has(id)) {
        return;
      }
      getScreenChartsList({ category: id, pageNum: 1, pageSize: 1e3 }).then((res) => {
        screenCharts.value.set(id, res.list);
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(FrameBox, {
        title: "组件",
        icon: "iconfont:icon-mfish-chart",
        "icon-size": 12,
        "radio-data": radioData,
        onRadioChange: radioChangeHandle,
        class: normalizeClass(getClass.value),
        onTitleClick: collapseChart
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(`${unref(prefixCls)}-content`)
          }, [
            createVNode(ChartMenus, {
              menus: chartTypes.value,
              "item-height": 58,
              "background-color": { light: "#f0f2f5", dark: "#232324" },
              onMenuClick: menuClick,
              onMenuChange: menuChange
            }, null, 8, ["menus"]),
            createElementVNode("div", {
              class: normalizeClass(["charts", { collapsed: __props.collapsed }])
            }, [
              createVNode(ChartMenus, {
                menus: chartTypes2.value,
                collapsed: __props.collapsed,
                "hide-title": true,
                "background-color": { light: "#f8f8f9", dark: "#1e1e1f" },
                horizontal: true,
                "item-height": 28,
                width: 40,
                onMenuChange: menuChange2
              }, null, 8, ["menus", "collapsed"]),
              createVNode(ChartItems, {
                mode: itemMode.value,
                charts: screenCharts.value.get(category.value)
              }, null, 8, ["mode", "charts"])
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3b8e6093"]]);
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = { class: "name" };
const _hoisted_3$1 = { class: "short-cut" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubMenu",
  props: {
    subData: {
      type: Array,
      default: () => []
    }
  },
  setup(__props, { expose: __expose }) {
    const { prefixCls } = useDesign("frame-shortcut");
    const visible = ref(false);
    const menuY = ref(0);
    const subMenuRef = useTemplateRef("subMenuRef");
    const color2 = useRootSetting().getThemeColor;
    function show(isUp) {
      visible.value = true;
      console.log(isUp);
    }
    function hidden() {
      visible.value = false;
    }
    __expose({ show, hidden });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "shortcut" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "subMenuRef",
            ref: subMenuRef,
            class: normalizeClass(unref(prefixCls)),
            style: normalizeStyle({ top: `${menuY.value}px`, left: "160px" })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.subData, (item) => {
              return openBlock(), createElementBlock(Fragment, {
                key: item.name
              }, [
                createElementVNode("div", {
                  class: "menu-item",
                  onClick: item.action
                }, [
                  createVNode(unref(Icon), {
                    icon: item.icon,
                    color: unref(color2)
                  }, null, 8, ["icon", "color"]),
                  createElementVNode("span", _hoisted_2$1, toDisplayString(item.name), 1),
                  createElementVNode("span", _hoisted_3$1, toDisplayString(item.shortcut), 1)
                ], 8, _hoisted_1$1),
                item.divider ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(`${unref(prefixCls)}__divider`)
                }, null, 2)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ], 6), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
const AlignMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4307b07"]]);
const _hoisted_1 = { class: "short-cut" };
const _hoisted_2 = { class: "short-cut" };
const _hoisted_3 = { class: "short-cut" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "name" };
const _hoisted_6 = { class: "short-cut" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "FrameShortcut" },
  __name: "index",
  props: {
    menuTop: { type: Number, default: 0 },
    menuLeft: { type: Number, default: 0 },
    isUp: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const getStyle = computed(() => {
      return {
        top: `${props.menuTop}px`,
        left: `${props.menuLeft}px`
      };
    });
    const color2 = useRootSetting().getThemeColor;
    const { prefixCls } = useDesign("frame-shortcut");
    const screenShortcutStore = useScreenShortcutStore();
    const screenEditStore2 = useScreenEditStore();
    const frameShortcutRef = useTemplateRef("frameShortcutRef");
    const canvasAlignMenuRef = useTemplateRef("canvasAlignMenuRef");
    const selectAlignMenuRef = useTemplateRef("selectAlignMenuRef");
    const fitMenuRef = useTemplateRef("fitMenuRef");
    const { NoneShortcutKeyEnum } = useScreenShortcut(screenEditStore2, screenShortcutStore);
    __expose({ getBoundingClientRect: () => {
      var _a;
      return (_a = frameShortcutRef.value) == null ? void 0 : _a.getBoundingClientRect();
    } });
    const isMulti = computed(() => screenEditStore2.getSelectArea.components.length > 1);
    const ctrlShortcut = reactive([
      {
        icon: "iconfont:icon-mfish-copy",
        name: "复制",
        shortcut: "CTRL+C",
        action: screenShortcutStore.copyComponent,
        show: computed(() => screenEditStore2.getCurComponent || screenEditStore2.getSelectArea.components.length > 0)
      },
      {
        icon: "iconfont:icon-mfish-paste",
        name: "粘贴",
        shortcut: "CTRL+V",
        action: screenShortcutStore.pasteComponent,
        show: computed(() => screenShortcutStore.getCopyData),
        divider: true
      },
      {
        icon: "iconfont:icon-mfish-up-level",
        name: "上移一层",
        shortcut: "SHIFT+↑",
        action: screenShortcutStore.upComponent,
        show: computed(() => screenEditStore2.getCurComponent && !unref(isMulti))
      },
      {
        icon: "iconfont:icon-mfish-down-level",
        name: "下移一层",
        shortcut: "SHIFT+↓",
        action: screenShortcutStore.downComponent,
        show: computed(() => screenEditStore2.getCurComponent && !unref(isMulti))
      },
      {
        icon: "iconfont:icon-mfish-up-level",
        name: "置顶",
        shortcut: "CTRL+SHIFT+↑",
        action: screenShortcutStore.topComponent,
        show: computed(() => screenEditStore2.getCurComponent && !unref(isMulti))
      },
      {
        icon: "iconfont:icon-mfish-bottom-level",
        name: "置底",
        shortcut: "CTRL+SHIFT+↓",
        action: screenShortcutStore.bottomComponent,
        show: computed(() => screenEditStore2.getCurComponent && !unref(isMulti)),
        divider: true
      },
      {
        icon: "iconfont:icon-mfish-combine",
        name: "组合",
        shortcut: "CTRL+G",
        action: screenShortcutStore.composeComponent,
        show: computed(() => screenEditStore2.getSelectArea.components.length > 1)
      },
      {
        icon: "iconfont:icon-mfish-un-combine",
        name: "拆分",
        shortcut: "CTRL+SHIFT+G",
        action: screenShortcutStore.decomposeComponent,
        show: computed(() => {
          var _a;
          return ((_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chart.type) === ComType.MfCombine && !unref(isMulti);
        })
      },
      {
        icon: "ant-design:lock-outlined",
        name: "锁定",
        shortcut: "CTRL+L",
        action: screenShortcutStore.lockComponent,
        show: computed(() => {
          var _a, _b;
          let isLock = (_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chartContain.lock;
          for (const com of screenEditStore2.getSelectArea.components) {
            if (!((_b = com == null ? void 0 : com.chartContain) == null ? void 0 : _b.lock)) {
              isLock = false;
              break;
            }
          }
          return isLock !== void 0 && !isLock;
        })
      },
      {
        icon: "ant-design:unlock-outlined",
        name: "解锁",
        shortcut: "CTRL+SHIFT+L",
        action: screenShortcutStore.unLockComponent,
        show: computed(() => {
          var _a, _b;
          let isLock = (_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chartContain.lock;
          for (const com of screenEditStore2.getSelectArea.components) {
            if ((_b = com == null ? void 0 : com.chartContain) == null ? void 0 : _b.lock) {
              isLock = true;
              break;
            }
          }
          return isLock;
        })
      },
      {
        icon: "ant-design:eye-invisible-outlined",
        name: "隐藏",
        shortcut: "CTRL+H",
        action: screenShortcutStore.hideComponent,
        show: computed(() => {
          var _a, _b;
          let isShow = (_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chartContain.show;
          for (const com of screenEditStore2.getSelectArea.components) {
            if ((_b = com == null ? void 0 : com.chartContain) == null ? void 0 : _b.show) {
              isShow = true;
              break;
            }
          }
          return isShow;
        })
      },
      {
        icon: "ant-design:eye-outlined",
        name: "显示",
        shortcut: "CTRL+SHIFT+H",
        action: screenShortcutStore.showComponent,
        show: computed(() => {
          var _a, _b;
          let isShow = (_a = screenEditStore2.getCurComponent) == null ? void 0 : _a.chartContain.show;
          for (const com of screenEditStore2.getSelectArea.components) {
            if (!((_b = com == null ? void 0 : com.chartContain) == null ? void 0 : _b.show)) {
              isShow = false;
              break;
            }
          }
          return isShow !== void 0 && !isShow;
        })
      },
      {
        icon: "ant-design:delete-outlined",
        name: "删除",
        shortcut: "DELETE",
        action: screenShortcutStore.deleteComponent,
        show: computed(() => screenEditStore2.getCurComponent || screenEditStore2.getSelectArea.components.length > 0)
      }
    ]);
    const alignData = reactive([
      {
        icon: "iconfont:icon-mfish-horizontal-distribution",
        name: "横向分布",
        shortcut: "",
        action: NoneShortcutKeyEnum.distributeHorizontally
      },
      {
        icon: "iconfont:icon-mfish-vertical-distribution",
        name: "纵向分布",
        shortcut: "",
        action: NoneShortcutKeyEnum.distributeVertically,
        divider: true
      },
      {
        icon: "iconfont:icon-mfish-left-align",
        name: "左对齐",
        shortcut: "",
        action: NoneShortcutKeyEnum.alignLeft
      },
      {
        icon: "iconfont:icon-mfish-horizontal-center",
        name: "水平居中",
        shortcut: "",
        action: NoneShortcutKeyEnum.alignCenter
      },
      {
        icon: "iconfont:icon-mfish-right-align",
        name: "右对齐",
        shortcut: "",
        action: NoneShortcutKeyEnum.alignRight,
        divider: true
      },
      {
        icon: "iconfont:icon-mfish-top-align",
        name: "顶端对齐",
        shortcut: "",
        action: NoneShortcutKeyEnum.alignTop
      },
      {
        icon: "iconfont:icon-mfish-vertical-center",
        name: "垂直居中",
        shortcut: "",
        action: NoneShortcutKeyEnum.alignMiddle
      },
      {
        icon: "iconfont:icon-mfish-bottom-align",
        name: "底端对齐",
        shortcut: "",
        action: NoneShortcutKeyEnum.alignBottom,
        divider: true
      }
    ]);
    const fillData = reactive([
      {
        icon: "carbon:fit-to-screen",
        name: "全屏撑满",
        shortcut: "",
        action: NoneShortcutKeyEnum.fillScreen
      },
      {
        icon: "carbon:fit-to-width",
        name: "横向撑满",
        shortcut: "",
        action: NoneShortcutKeyEnum.fillWidth
      },
      {
        icon: "carbon:fit-to-height",
        name: "纵向撑满",
        shortcut: "",
        action: NoneShortcutKeyEnum.fillHeight
      }
    ]);
    function showCanvasSubMenu() {
      var _a;
      setAlignType(ALIGN_MENU_TYPE.CANVAS);
      (_a = canvasAlignMenuRef.value) == null ? void 0 : _a.show(props.isUp);
    }
    function hiddenCanvasSubMenu() {
      var _a;
      (_a = canvasAlignMenuRef.value) == null ? void 0 : _a.hidden();
    }
    function showSelectSubMenu() {
      var _a;
      setAlignType(ALIGN_MENU_TYPE.GROUP);
      (_a = selectAlignMenuRef.value) == null ? void 0 : _a.show(props.isUp);
    }
    function hiddenSelectSubMenu() {
      var _a;
      (_a = selectAlignMenuRef.value) == null ? void 0 : _a.hidden();
    }
    function setAlignType(alignType) {
      screenShortcutStore.setAlignType(alignType);
      if (screenEditStore2.getSelectArea.components.length === 0 && screenEditStore2.getCurComponent) {
        screenShortcutStore.setAlignType(ALIGN_MENU_TYPE.CANVAS);
      }
    }
    function showFitSubMenu() {
      var _a;
      (_a = fitMenuRef.value) == null ? void 0 : _a.show();
    }
    function hiddenFitSubMenu() {
      var _a;
      (_a = fitMenuRef.value) == null ? void 0 : _a.hidden();
    }
    function handleClick(action) {
      screenShortcutStore.setShowMenu(false);
      nextTick(() => {
        action();
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "shortcut" }, {
        default: withCtx(() => [
          unref(screenShortcutStore).getShowMenu ? (openBlock(), createElementBlock("div", {
            key: "shortcutMenu",
            ref_key: "frameShortcutRef",
            ref: frameShortcutRef,
            class: normalizeClass(unref(prefixCls)),
            style: normalizeStyle(getStyle.value),
            onMousedown: _cache[3] || (_cache[3] = withModifiers(() => {
            }, ["stop"]))
          }, [
            unref(screenEditStore2).getCurComponent || unref(screenEditStore2).getSelectArea.components.length > 1 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "menu-item",
              onMouseenter: showCanvasSubMenu,
              onMouseleave: hiddenCanvasSubMenu,
              onMouseup: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createVNode(unref(Icon), {
                icon: "iconfont:icon-mfish-left-align",
                color: unref(color2)
              }, null, 8, ["color"]),
              _cache[4] || (_cache[4] = createElementVNode("span", { class: "name" }, "画布对齐", -1)),
              createElementVNode("span", _hoisted_1, [
                createVNode(unref(Icon), { icon: "ant-design:right-outlined" })
              ]),
              createVNode(AlignMenu, {
                ref_key: "canvasAlignMenuRef",
                ref: canvasAlignMenuRef,
                "sub-data": alignData
              }, null, 8, ["sub-data"])
            ], 32)) : createCommentVNode("", true),
            unref(screenEditStore2).getSelectArea.components.length > 1 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "menu-item",
              onMouseenter: showSelectSubMenu,
              onMouseleave: hiddenSelectSubMenu,
              onMouseup: _cache[1] || (_cache[1] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createVNode(unref(Icon), {
                icon: "iconfont:icon-mfish-left-align",
                color: unref(color2)
              }, null, 8, ["color"]),
              _cache[5] || (_cache[5] = createElementVNode("span", { class: "name" }, "选中对齐", -1)),
              createElementVNode("span", _hoisted_2, [
                createVNode(unref(Icon), { icon: "ant-design:right-outlined" })
              ]),
              createVNode(AlignMenu, {
                ref_key: "selectAlignMenuRef",
                ref: selectAlignMenuRef,
                "sub-data": alignData
              }, null, 8, ["sub-data"])
            ], 32)) : createCommentVNode("", true),
            unref(screenEditStore2).getCurComponent ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "menu-item",
              onMouseenter: showFitSubMenu,
              onMouseleave: hiddenFitSubMenu,
              onMouseup: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createVNode(unref(Icon), {
                icon: "carbon:fit-to-screen",
                color: unref(color2)
              }, null, 8, ["color"]),
              _cache[6] || (_cache[6] = createElementVNode("span", { class: "name" }, "撑满", -1)),
              createElementVNode("span", _hoisted_3, [
                createVNode(unref(Icon), { icon: "ant-design:right-outlined" })
              ]),
              createVNode(AlignMenu, {
                ref_key: "fitMenuRef",
                ref: fitMenuRef,
                "sub-data": fillData
              }, null, 8, ["sub-data"])
            ], 32)) : createCommentVNode("", true),
            unref(screenEditStore2).getCurComponent || unref(screenEditStore2).getSelectArea.components.length > 1 ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(`${unref(prefixCls)}__divider`)
            }, null, 2)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(ctrlShortcut, (item) => {
              return openBlock(), createElementBlock(Fragment, {
                key: item.name
              }, [
                item.show ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "menu-item",
                  onClick: ($event) => handleClick(item.action)
                }, [
                  createVNode(unref(Icon), {
                    icon: item.icon,
                    color: unref(color2)
                  }, null, 8, ["icon", "color"]),
                  createElementVNode("span", _hoisted_5, toDisplayString(item.name), 1),
                  createElementVNode("span", _hoisted_6, toDisplayString(item.shortcut), 1)
                ], 8, _hoisted_4)) : createCommentVNode("", true),
                item.show && item.divider ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(`${unref(prefixCls)}__divider`)
                }, null, 2)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ], 38)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dcb7415"]]);
export {
  BorderBox8 as $,
  BorderBox21 as A,
  BorderBox1 as B,
  ChartEventEnum as C,
  _sfc_main$10 as D,
  API_SAVE as E,
  getFieldIcon as F,
  renameField as G,
  FIELD_DATA_DRAG as H,
  getComponentById as I,
  ComType as J,
  LayerGroup as K,
  LayerItem as L,
  MfTag as M,
  ParamType as N,
  getFieldsByResourceId as O,
  PageJumpType as P,
  getDataFieldsById as Q,
  getApiParamsList as R,
  ScreenEventEnum as S,
  TextStyle as T,
  BorderBox22 as U,
  BorderBox3 as V,
  BorderBox4 as W,
  BorderBox5 as X,
  BorderBox6 as Y,
  BorderBox7 as Z,
  _export_sfc as _,
  animationData as a,
  getFormulaParamList as a$,
  BorderBox9 as a0,
  Decoration1 as a1,
  Decoration10 as a2,
  getFontStyle as a3,
  Decoration11 as a4,
  Decoration12 as a5,
  Decoration2 as a6,
  Decoration3 as a7,
  Decoration4 as a8,
  Decoration5 as a9,
  index$1 as aA,
  index as aB,
  MacButton as aC,
  colorStorage as aD,
  gradientColorStorage as aE,
  recentlyColors as aF,
  recentlyGradientColors as aG,
  listenGlobalKeyboard as aH,
  UndoRedoManager as aI,
  fonts as aJ,
  TextHAlign as aK,
  TextVAlign as aL,
  FilterCondition as aM,
  AggregateType as aN,
  ExpressionType as aO,
  getApiFolderTree as aP,
  getApiFolderAndFile as aQ,
  exportApiFolder as aR,
  insertApiFolder as aS,
  updateApiFolder as aT,
  dragApiFolder as aU,
  deleteApiFolder as aV,
  exportApiParams as aW,
  insertApiParams as aX,
  updateApiParams as aY,
  deleteApiParams as aZ,
  getFormulaTree as a_,
  Decoration6 as aa,
  Decoration7 as ab,
  Decoration8 as ac,
  Decoration9 as ad,
  Header1 as ae,
  Header2 as af,
  Header3 as ag,
  Header4 as ah,
  Header5 as ai,
  Header6 as aj,
  getGradientColorClass as ak,
  angleToLinearGradient as al,
  TextFont as am,
  EchartsTheme as an,
  useEchartsData as ao,
  useEchartsMapLineData as ap,
  useRadarData as aq,
  ScrollTable as ar,
  getChartData as as,
  ApiConfig as at,
  _sfc_main$q as au,
  _sfc_main$w as av,
  ScreenPreview as aw,
  _sfc_main$k as ax,
  index$3 as ay,
  index$2 as az,
  ComponentsEnum as b,
  buildSql as b$,
  getFormulaInfoList as b0,
  getFormulaInfoById as b1,
  exportFormulaInfo as b2,
  insertFormulaInfo as b3,
  updateFormulaInfo as b4,
  deleteFormulaInfo as b5,
  deleteBatchFormulaInfo as b6,
  getApiUrl as b7,
  getMfApiList as b8,
  exportMfApi as b9,
  insertScreenFolder as bA,
  updateScreenFolder as bB,
  dragScreenFolder as bC,
  deleteScreenFolder as bD,
  getScreenResourceApiList as bE,
  getScreenResourceApiById as bF,
  insertScreenResourceApi as bG,
  updateScreenResourceApi as bH,
  deleteScreenResourceApi as bI,
  getDataTableByResourceId as bJ,
  getTablesByResourceId as bK,
  getMfApiByResourceId as bL,
  getScreenLayers as bM,
  getScreenResourceList as bN,
  getScreenResourceBySourceId as bO,
  insertScreenResource as bP,
  updateScreenResource as bQ,
  deleteScreenResource as bR,
  getLayersBySourceId as bS,
  useApiShortcut as bT,
  formulaColName as bU,
  ApiConfigEvent as bV,
  getInnerFields as bW,
  containNest as bX,
  isNeedNest as bY,
  queryDataEvent as bZ,
  getParams as b_,
  insertMfApi as ba,
  updateMfApi as bb,
  deleteMfApi as bc,
  getMfApiById as bd,
  getQuerySql as be,
  getQueryData as bf,
  formulaTest as bg,
  getQueryFields as bh,
  getSourceHeaders as bi,
  getDataTableById as bj,
  getApiDataById as bk,
  getMfScreenById as bl,
  insertMfScreen as bm,
  updateMfScreen as bn,
  deleteMfScreen as bo,
  shareMfScreenById as bp,
  shareMfScreenByQRCode as bq,
  getScreenChartsList as br,
  getScreenChartsById as bs,
  exportScreenCharts as bt,
  insertScreenCharts as bu,
  updateScreenCharts as bv,
  deleteScreenCharts as bw,
  deleteBatchScreenCharts as bx,
  getScreenFolderAndFile as by,
  exportScreenFolder as bz,
  getScreenFolderTree as c,
  useApiStore as c0,
  useScreenLayoutStore as c1,
  useScreenShortcutStore as c2,
  getCanvasStyle as c3,
  createChart as c4,
  pasteChart as c5,
  buildName as c6,
  chartInit as c7,
  getComponentStyle as c8,
  getChartStyle as c9,
  getComponentRotatedStyle as ca,
  initScreen as cb,
  preSaveScreen as cc,
  clearChartResource as cd,
  MENU_CHART_DRAG as ce,
  FrameShow as cf,
  FitType as cg,
  StyleEnum as ch,
  comOption as ci,
  chartContain as cj,
  createGroupStyle as ck,
  decomposeComponent as cl,
  getAreaComponents as cm,
  selectComponents as cn,
  addSelectComponent as co,
  ALIGN_MENU_TYPE as cp,
  useAlign as cq,
  comConfigDisplay as cr,
  buildHeaders as cs,
  useScreenShortcut as ct,
  getMfScreenList as d,
  PageType as e,
  ScreenInput as f,
  getEventName as g,
  useChartEventHandle as h,
  useDynamicDataConfig as i,
  useDataTag as j,
  MfishColorPicker as k,
  BorderBox10 as l,
  BorderBox11 as m,
  BorderBox12 as n,
  BorderBox13 as o,
  playAnimation as p,
  BorderBox14 as q,
  BorderBox15 as r,
  screenEvent as s,
  BorderBox16 as t,
  useScreenEditStore as u,
  BorderBox17 as v,
  BorderBox18 as w,
  BorderBox19 as x,
  BorderBox2 as y,
  BorderBox20 as z
};
