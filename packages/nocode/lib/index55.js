import { defineComponent, useCssVars, computed, ref, watch, createBlock, openBlock, unref, mergeProps, toHandlers, withCtx, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { Segmented } from "ant-design-vue";
import { Icon } from "@mfish/core/src/components/Icon";
import { h as useChartEventHandle, as as getChartData } from "./index2.js";
import { useDesign } from "@mfish/core";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "2b53066a": `${height.value - 6}px`,
      "5a3f19c5": textColor.value,
      "f6063940": font.value,
      "32fee75e": `${fontSize.value}px`,
      "f609dcd4": bold.value,
      "3eb09101": italic.value,
      "5c6db25b": underline.value,
      "1896b8e9": selectTextColor.value,
      "381f5dbc": selectFont.value,
      "93734796": `${selectFontSize.value}px`,
      "381d8bf2": selectBold.value,
      "99c43746": selectItalic.value,
      "1ac5517f": selectUnderline.value
    }));
    const props = __props;
    const { commonEvents, emitEvent } = useChartEventHandle(props.chart, void 0, ["titleChange"]);
    const options = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.map((item, index) => {
          return {
            title: item.title,
            value: item.value || item.title,
            payload: {
              icon: item.icon,
              index
            }
          };
        });
      }
    );
    const textColor = computed(() => {
      var _a, _b;
      return (_b = (_a = props.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.textColor;
    });
    const font = computed(() => {
      var _a, _b;
      return (_b = (_a = props.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.font;
    });
    const fontSize = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontSize) || 14;
    });
    const bold = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : "";
    });
    const italic = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : "";
    });
    const underline = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.chart.options) == null ? void 0 : _a.textStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : "";
    });
    const selectTextColor = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.textColor) || textColor.value;
    });
    const selectFont = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.font) || font.value;
    });
    const selectFontSize = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontSize) || fontSize.value;
    });
    const selectBold = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.bold) ? "bold" : bold.value;
    });
    const selectItalic = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.italic) ? "italic" : italic.value;
    });
    const selectUnderline = computed(
      () => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = props.chart.options) == null ? void 0 : _a.selectStyle) == null ? void 0 : _b.fontStyle) == null ? void 0 : _c.underline) ? "underline" : underline.value;
      }
    );
    const value = ref("");
    const { prefixCls } = useDesign("mf-segmented");
    const height = computed(() => {
      var _a, _b;
      return (_b = (_a = props.chartContain) == null ? void 0 : _a.dropInfo) == null ? void 0 : _b.height;
    });
    watch(
      () => {
        var _a, _b;
        return (_b = (_a = props.chart) == null ? void 0 : _a.data) == null ? void 0 : _b.dataSet;
      },
      (val) => {
        if (val) {
          setDefaultValue(val);
        }
      },
      { immediate: true, deep: true }
    );
    function setDefaultValue(data) {
      if ((data == null ? void 0 : data.length) > 0) {
        value.value = data[0].value || data[0].title || "";
      }
    }
    function tabChange(e) {
      var _a, _b;
      value.value = e;
      const index = (_b = (_a = options.value.find((item) => item.value === e)) == null ? void 0 : _a.payload) == null ? void 0 : _b.index;
      if (index >= 0) {
        const data = getChartData(props.chart);
        if (data.length > index) {
          emitEvent("titleChange", data[index]);
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Segmented), mergeProps({
        class: unref(prefixCls),
        value: value.value,
        options: options.value,
        onChange: tabChange,
        block: ""
      }, toHandlers(unref(commonEvents))), {
        label: withCtx(({ title, payload }) => [
          payload.icon ? (openBlock(), createBlock(unref(Icon), {
            key: 0,
            icon: payload.icon,
            size: fontSize.value
          }, null, 8, ["icon", "size"])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(title), 1)
        ]),
        _: 1
      }, 16, ["class", "value", "options"]);
    };
  }
});
export {
  _sfc_main as default
};
