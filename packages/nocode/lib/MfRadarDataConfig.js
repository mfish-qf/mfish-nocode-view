import { defineComponent, computed, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { useDesign } from "@mfish/core";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, i as useDynamicDataConfig, aq as useRadarData, _ as _export_sfc } from "./index2.js";
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
import { J as JsonData } from "./JsonData.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfRadarDataConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, getFields, setDataTable } = useDynamicDataConfig();
    const { prefixCls } = useDesign("radar-data-config");
    const { resetDefault } = useRadarData();
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
    const curIndicator = computed(() => {
      var _a;
      if ((_a = screenEditStore.getCurConfigComponent.chart.data.dataSet) == null ? void 0 : _a.indicator) {
        return JSON.stringify(screenEditStore.getCurConfigComponent.chart.data.dataSet.indicator);
      } else {
        return "";
      }
    });
    const curData = computed(() => {
      var _a;
      if ((_a = screenEditStore.getCurConfigComponent.chart.data.dataSet) == null ? void 0 : _a.data) {
        return JSON.stringify(screenEditStore.getCurConfigComponent.chart.data.dataSet.data);
      } else {
        return "";
      }
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
    function indicatorChange(data) {
      if (data) {
        screenEditStore.getCurConfigComponent.chart.data.dataSet.indicator = data;
      } else {
        delete screenEditStore.getCurConfigComponent.chart.data.dataSet.indicator;
      }
    }
    function dataChange(data) {
      if (data) {
        screenEditStore.getCurConfigComponent.chart.data.dataSet.data = data;
      } else {
        delete screenEditStore.getCurConfigComponent.chart.data.dataSet.data;
      }
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
            title: "维度名",
            data: curIndicator.value,
            onDataChange: indicatorChange
          }, null, 8, ["data"]),
          createVNode(JsonData, {
            title: "维度值",
            data: curData.value,
            onDataChange: dataChange
          }, null, 8, ["data"])
        ]),
        "target-data": withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "类型", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 100,
            onDataChange: changeDimensions,
            fields: dimensions.value
          }, null, 8, ["fields"]),
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "维度值", -1)),
          createVNode(DragInData, {
            "max-count": 10,
            height: 250,
            onDataChange: changeSource,
            fields: source.value
          }, null, 8, ["fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfRadarDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fd0dc44"]]);
export {
  MfRadarDataConfig as default
};
