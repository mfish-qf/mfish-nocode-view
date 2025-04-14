import { defineComponent, ref, watch, resolveComponent, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createTextVNode, Fragment, renderList, createBlock, toDisplayString, normalizeStyle, renderSlot } from "vue";
import { RadioGroup, Tooltip, RadioButton, Select, SelectOption } from "ant-design-vue";
import { useDesign } from "@mfish/core";
import "@vueuse/core";
import { Icon } from "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, T as TextStyle, am as TextFont, f as ScreenInput, _ as _export_sfc, an as EchartsTheme } from "./index2.js";
import "@mfish/core/enums";
import "@mfish/core/src/utils/Is";
import { C as ConfigGroup } from "./ConfigGroup.js";
import "@mfish/core/src/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/src/utils/Uuid";
import "@mfish/core/src/components/Container";
import "@mfish/core/src/components/Draggable";
import "@mfish/core/src/components/Modal";
import "@mfish/core/src/components/Form";
import "@mfish/core/src/hooks/web/UseMessage";
import "@mfish/core/src/components/Tree";
import "@mfish/core/src/components/Split";
import "@mfish/core/src/components/Table";
import "@mfish/core/src/components/CodeEditor";
import "@mfish/core/src/i18n/UseLocale";
import "@mfish/core/src/hooks/setting/UseDarkModeTheme";
const _hoisted_1$1 = { class: "title" };
const _hoisted_2 = { style: { "display": "flex", "gap": "6px" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EchartsTitleConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const textStyleInfo = ref({});
    const subtextStyleInfo = ref({});
    const { prefixCls } = useDesign("echarts-title-config");
    const leftPositions = [
      { title: "左", value: "left", icon: "iconfont:icon-mfish-left-align" },
      { title: "中", value: "center", icon: "iconfont:icon-mfish-horizontal-center" },
      { title: "右", value: "right", icon: "iconfont:icon-mfish-right-align" }
    ];
    const topPositions = [
      { title: "上", value: "top", icon: "iconfont:icon-mfish-top-align" },
      { title: "中", value: "middle", icon: "iconfont:icon-mfish-vertical-center" },
      { title: "下", value: "bottom", icon: "iconfont:icon-mfish-bottom-align" }
    ];
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (val) {
          initValue();
        }
      },
      { immediate: true }
    );
    function initValue() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      textStyleInfo.value = {};
      const title = (_c = (_b = (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.options) == null ? void 0 : _c.title;
      if (!title) return;
      textStyleInfo.value.font = (_d = title == null ? void 0 : title.textStyle) == null ? void 0 : _d.fontFamily;
      textStyleInfo.value.fontSize = (_f = (_e = title == null ? void 0 : title.textStyle) == null ? void 0 : _e.fontSize) == null ? void 0 : _f.replace("px", "");
      textStyleInfo.value.textColor = (_g = title == null ? void 0 : title.textStyle) == null ? void 0 : _g.color;
      textStyleInfo.value.fontStyle = ((_h = title == null ? void 0 : title.textStyle) == null ? void 0 : _h.fontStyle) ? { italic: true } : {};
      textStyleInfo.value.hAlignType = title == null ? void 0 : title.left;
      subtextStyleInfo.value = {};
      subtextStyleInfo.value.font = (_i = title == null ? void 0 : title.subtextStyle) == null ? void 0 : _i.fontFamily;
      subtextStyleInfo.value.fontSize = (_k = (_j = title == null ? void 0 : title.subtextStyle) == null ? void 0 : _j.fontSize) == null ? void 0 : _k.replace("px", "");
      subtextStyleInfo.value.textColor = (_l = title == null ? void 0 : title.subtextStyle) == null ? void 0 : _l.color;
      const fontStyle = ((_m = title == null ? void 0 : title.subtextStyle) == null ? void 0 : _m.fontStyle) ? { italic: true } : {};
      const fontWeight = ((_n = title == null ? void 0 : title.subtextStyle) == null ? void 0 : _n.fontWeight) ? { bold: true } : {};
      subtextStyleInfo.value.fontStyle = { ...fontStyle, ...fontWeight };
      subtextStyleInfo.value.hAlignType = title == null ? void 0 : title.left;
    }
    function hAlignChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.title.left = e.value;
      textStyleInfo.value.hAlignType = e.value;
      subtextStyleInfo.value.hAlignType = e.value;
    }
    function fontStyleChange(e) {
      var _a, _b;
      (_a = screenEditStore.getCurConfigComponent.chart.options.title.textStyle) == null ? true : delete _a.fontStyle;
      (_b = screenEditStore.getCurConfigComponent.chart.options.title.textStyle) == null ? true : delete _b.fontWeight;
      textStyleChange(e);
    }
    function textStyleChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.title.textStyle = {
        ...screenEditStore.getCurConfigComponent.chart.options.title.textStyle,
        ...e.style
      };
    }
    function subFontStyleChange(e) {
      var _a, _b;
      (_a = screenEditStore.getCurConfigComponent.chart.options.title.subtextStyle) == null ? true : delete _a.fontStyle;
      (_b = screenEditStore.getCurConfigComponent.chart.options.title.subtextStyle) == null ? true : delete _b.fontWeight;
      subtextStyleChange(e);
    }
    function subtextStyleChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.title.subtextStyle = {
        ...screenEditStore.getCurConfigComponent.chart.options.title.subtextStyle,
        ...e.style
      };
    }
    function titleChecked(checked) {
      screenEditStore.getCurConfigComponent.chart.options.title = {
        ...screenEditStore.getCurConfigComponent.chart.options.title,
        show: checked
      };
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "标题",
          "default-expand": false,
          "allow-check": true,
          "title-check": (_a = unref(screenEditStore).getCurConfigComponent.chart.options.title) == null ? void 0 : _a.show,
          onChecked: titleChecked
        }, {
          default: withCtx(() => [
            _cache[7] || (_cache[7] = createElementVNode("div", { class: "title" }, " 主标题 ", -1)),
            createVNode(_component_AInput, {
              value: unref(screenEditStore).getCurConfigComponent.chart.options.title.text,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title.text = $event),
              "show-count": "",
              maxlength: 50
            }, null, 8, ["value"]),
            createVNode(unref(TextStyle), {
              "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough, unref(TextFont).Bold],
              "hide-align": true,
              "color-type": 1,
              "text-style": textStyleInfo.value,
              onFontChange: textStyleChange,
              onSizeChange: textStyleChange,
              onHAlignChange: hAlignChange,
              onFontStyleChange: fontStyleChange,
              onColorChange: textStyleChange
            }, null, 8, ["hide-font-style", "text-style"]),
            _cache[8] || (_cache[8] = createElementVNode("div", { class: "title" }, " 副标题 ", -1)),
            createVNode(_component_AInput, {
              value: unref(screenEditStore).getCurConfigComponent.chart.options.title.subtext,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title.subtext = $event),
              "show-count": "",
              maxlength: 50
            }, null, 8, ["value"]),
            createVNode(unref(TextStyle), {
              "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough],
              "hide-align": true,
              "color-type": 1,
              "text-style": subtextStyleInfo.value,
              onFontChange: subtextStyleChange,
              onSizeChange: subtextStyleChange,
              onHAlignChange: hAlignChange,
              onFontStyleChange: subFontStyleChange,
              onColorChange: subtextStyleChange
            }, null, 8, ["hide-font-style", "text-style"]),
            createElementVNode("div", _hoisted_1$1, [
              _cache[6] || (_cache[6] = createTextVNode(" 标题位置 ")),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.title.left,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title.left = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(leftPositions, (item) => {
                    return createVNode(unref(Tooltip), {
                      key: item.value,
                      placement: "top",
                      title: item.title
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(RadioButton), {
                          class: "radio-button",
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              size: 12,
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1032, ["title"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"]),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.title.top,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title.top = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(topPositions, (item) => {
                    return createVNode(unref(Tooltip), {
                      key: item.value,
                      placement: "top",
                      title: item.title
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(RadioButton), {
                          class: "radio-button",
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              size: 12,
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1032, ["title"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            createElementVNode("div", _hoisted_2, [
              createVNode(unref(ScreenInput), {
                prefix: "左",
                "is-number": false,
                placeholder: "数字或百分比",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.title.left,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title.left = $event)
              }, null, 8, ["value"]),
              createVNode(unref(ScreenInput), {
                prefix: "上",
                "is-number": false,
                placeholder: "数字或百分比",
                value: unref(screenEditStore).getCurConfigComponent.chart.options.title.top,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.options.title.top = $event)
              }, null, 8, ["value"])
            ])
          ]),
          _: 1
        }, 8, ["title-check"])
      ], 2);
    };
  }
});
const EchartsTitleConfig = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0f2ebdeb"]]);
const _hoisted_1 = { class: "color-contain" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EchartsThemeConfig",
  props: {
    color: { type: String, default: "默认" }
  },
  emits: ["themeChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = ref(props.color);
    const { prefixCls } = useDesign("echarts-theme-config");
    function selectChange() {
      const theme = EchartsTheme.find((item) => item.name === value.value);
      if (!theme) return;
      emit("themeChange", theme);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Select), {
        value: value.value,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        placeholder: "选择一个主题",
        onChange: selectChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(EchartsTheme), (item, index) => {
            return openBlock(), createBlock(unref(SelectOption), {
              label: item.name,
              value: item.name,
              key: index
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  class: normalizeClass(unref(prefixCls))
                }, [
                  createTextVNode(toDisplayString(item.name) + " ", 1),
                  createElementVNode("div", _hoisted_1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.color, (col) => {
                      return openBlock(), createElementBlock("div", {
                        class: "color-box",
                        style: normalizeStyle({ backgroundColor: col }),
                        key: col
                      }, null, 4);
                    }), 128))
                  ])
                ], 2)
              ]),
              _: 2
            }, 1032, ["label", "value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
});
const EchartsThemeConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4656db1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EchartsBaseConfig",
  emits: ["themeChange"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("echarts-base-config");
    function themeChange(e) {
      screenEditStore.getCurConfigComponent.chart.options.themeColor = e.name;
      screenEditStore.getCurConfigComponent.chart.options.color = e.color;
      emit("themeChange", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, { title: "基础配置" }, {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, " 主题 ", -1)),
            createVNode(EchartsThemeConfig, {
              color: unref(screenEditStore).getCurConfigComponent.chart.options.themeColor,
              onThemeChange: themeChange
            }, null, 8, ["color"]),
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
const EchartsBaseConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-498bbe1b"]]);
export {
  EchartsTitleConfig as E,
  EchartsBaseConfig as a
};
