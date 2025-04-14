import { defineComponent, ref, watch, createElementBlock, openBlock, normalizeClass, unref, createVNode, withCtx, createElementVNode, createTextVNode } from "vue";
import { C as ConfigGroup } from "./ConfigGroup.js";
import { Select } from "ant-design-vue";
import { useDesign } from "@mfish/core";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, T as TextStyle, am as TextFont, _ as _export_sfc } from "./index2.js";
import "@mfish/core/enums";
import "@mfish/core/src/utils/Is";
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
const _hoisted_1 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EchartsSeriesLabelConfig",
  props: {
    series: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["labelChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("echarts-series-label-config");
    const curSeries = ref(props.series);
    const labelStyleInfo = ref({});
    const labelPosition = ref("inside");
    const labelPositions = [
      { label: "上", value: "top" },
      { label: "下", value: "bottom" },
      { label: "左", value: "left" },
      { label: "右", value: "right" },
      { label: "内", value: "inside" },
      { label: "内左", value: "insideLeft" },
      { label: "内右", value: "insideRight" },
      { label: "内上", value: "insideTop" },
      { label: "内下", value: "insideBottom" },
      { label: "内上左", value: "insideTopLeft" },
      { label: "内上右", value: "insideTopRight" },
      { label: "内下左", value: "insideBottomLeft" },
      { label: "内下右", value: "insideBottomRight" }
    ];
    const screenEditStore = useScreenEditStore();
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      if (((_a = curSeries.value.label) == null ? void 0 : _a.position) !== void 0) {
        labelPosition.value = curSeries.value.label.position;
      }
      labelStyleInfo.value = {};
      labelStyleInfo.value.font = (_c = (_b = curSeries.value) == null ? void 0 : _b.label) == null ? void 0 : _c.fontFamily;
      labelStyleInfo.value.fontSize = (_f = (_e = (_d = curSeries.value) == null ? void 0 : _d.label) == null ? void 0 : _e.fontSize) == null ? void 0 : _f.replace("px", "");
      labelStyleInfo.value.textColor = (_h = (_g = curSeries.value) == null ? void 0 : _g.label) == null ? void 0 : _h.color;
      const fontStyle = ((_j = (_i = curSeries.value) == null ? void 0 : _i.label) == null ? void 0 : _j.fontStyle) ? { italic: true } : {};
      const fontWeight = ((_l = (_k = curSeries.value) == null ? void 0 : _k.label) == null ? void 0 : _l.fontWeight) ? { bold: true } : {};
      labelStyleInfo.value.fontStyle = { ...fontStyle, ...fontWeight };
      labelStyleInfo.value.hAlignType = (_n = (_m = curSeries.value) == null ? void 0 : _m.label) == null ? void 0 : _n.align;
      labelStyleInfo.value.vAlignType = (_p = (_o = curSeries.value) == null ? void 0 : _o.label) == null ? void 0 : _p.verticalAlign;
    }
    function labelChecked(checked) {
      curSeries.value.label = {
        ...curSeries.value.label,
        show: checked
      };
      emit("labelChange", curSeries.value);
    }
    function hAlignChange(e) {
      curSeries.value.label.align = e.value;
      emit("labelChange", curSeries.value);
    }
    function vAlignChange(e) {
      curSeries.value.label.verticalAlign = e.value;
      emit("labelChange", curSeries.value);
    }
    function fontStyleChange(e) {
      var _a, _b, _c, _d;
      (_b = (_a = curSeries.value) == null ? void 0 : _a.label) == null ? true : delete _b.fontStyle;
      (_d = (_c = curSeries.value) == null ? void 0 : _c.label) == null ? true : delete _d.fontWeight;
      labelStyleChange(e);
    }
    function labelStyleChange(e) {
      var _a;
      curSeries.value.label = {
        ...(_a = curSeries.value) == null ? void 0 : _a.label,
        ...e.style
      };
      emit("labelChange", curSeries.value);
    }
    function labelPositionChange() {
      curSeries.value.label.position = labelPosition.value;
      emit("labelChange", curSeries.value);
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "标签设置",
          "default-expand": false,
          "allow-check": true,
          "title-check": (_b = (_a = __props.series) == null ? void 0 : _a.label) == null ? void 0 : _b.show,
          onChecked: labelChecked
        }, {
          default: withCtx(() => [
            createVNode(unref(TextStyle), {
              "hide-font-style": [unref(TextFont).Underline, unref(TextFont).Strikethrough],
              "color-type": 1,
              "vertical-align": true,
              "text-style": labelStyleInfo.value,
              onFontChange: labelStyleChange,
              onSizeChange: labelStyleChange,
              onFontStyleChange: fontStyleChange,
              onColorChange: labelStyleChange,
              onHAlignChange: hAlignChange,
              onVAlignChange: vAlignChange
            }, null, 8, ["hide-font-style", "text-style"]),
            createElementVNode("div", _hoisted_1, [
              _cache[1] || (_cache[1] = createTextVNode(" 标签位置 ")),
              createVNode(unref(Select), {
                value: labelPosition.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => labelPosition.value = $event),
                options: labelPositions,
                "show-search": false,
                "filter-option": false,
                placeholder: "请选择",
                onChange: labelPositionChange
              }, null, 8, ["value"])
            ])
          ]),
          _: 1
        }, 8, ["title-check"])
      ], 2);
    };
  }
});
const EchartsSeriesLabelConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22d2aaee"]]);
export {
  EchartsSeriesLabelConfig as E
};
