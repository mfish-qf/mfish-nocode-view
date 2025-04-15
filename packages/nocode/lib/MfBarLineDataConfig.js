import { defineComponent, computed, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, toDisplayString, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { useDesign } from "@mfish/core/hooks";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, i as useDynamicDataConfig, ao as useEchartsData, _ as _export_sfc } from "./index2.js";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Modal";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { J as JsonData } from "./JsonData.js";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfBarLineDataConfig",
  props: {
    xTitle: {
      type: String,
      default: "X轴 / 维度"
    },
    yTitle: {
      type: String,
      default: "Y轴 / 值"
    },
    xMaxCount: {
      type: Number,
      default: 1
    },
    yMaxCount: {
      type: Number,
      default: 100
    }
  },
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, getFields, setDataTable } = useDynamicDataConfig();
    const { resetDefault, setStaticData } = useEchartsData();
    const { prefixCls } = useDesign("bar-line-data-config");
    const curData = computed(() => {
      var _a, _b;
      if ((_b = (_a = screenEditStore.getCurConfigComponent.chart.data) == null ? void 0 : _a.dataSet) == null ? void 0 : _b.source) {
        return JSON.stringify(screenEditStore.getCurConfigComponent.chart.data.dataSet.source);
      } else {
        return "";
      }
    });
    const dimensions = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.dimensions) ?? [];
      }
      return [];
    });
    const source = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.source) ?? [];
      }
      return [];
    });
    function dataSourceChange() {
      const dimensions2 = getFields("dimensions");
      if (dimensions2 && dimensions2.length > 0) {
        setDataTable();
      } else {
        resetDefault(screenEditStore.getCurConfigComponent.chart);
      }
    }
    function changeDimensions(data) {
      if ((data == null ? void 0 : data.length) > 0) {
        setFields("dimensions", data);
      } else {
        deleteFields("dimensions");
      }
      dataSourceChange();
    }
    function changeSource(data) {
      if (data.length > 0) {
        setFields("source", data);
      } else {
        deleteFields("source");
      }
      dataSourceChange();
    }
    function dataChange(data) {
      setStaticData(screenEditStore.getCurConfigComponent.chart, data);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(DataConfig, {
        class: normalizeClass(unref(prefixCls)),
        onRefreshData: dataSourceChange
      }, {
        "data-select": withCtx(() => [
          renderSlot(_ctx.$slots, "data-select", {}, void 0, true)
        ]),
        "static-data": withCtx(() => [
          createVNode(JsonData, {
            data: curData.value,
            onDataChange: dataChange
          }, null, 8, ["data"])
        ]),
        "target-data": withCtx(() => [
          createElementVNode("div", _hoisted_1, toDisplayString(__props.xTitle), 1),
          createVNode(DragInData, {
            "max-count": __props.xMaxCount,
            height: 150,
            onDataChange: changeDimensions,
            fields: dimensions.value
          }, null, 8, ["max-count", "fields"]),
          createElementVNode("div", _hoisted_2, toDisplayString(__props.yTitle), 1),
          createVNode(DragInData, {
            "max-count": __props.yMaxCount,
            height: 150,
            onDataChange: changeSource,
            fields: source.value
          }, null, 8, ["max-count", "fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfBarLineDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8e656d0"]]);
export {
  MfBarLineDataConfig as default
};
