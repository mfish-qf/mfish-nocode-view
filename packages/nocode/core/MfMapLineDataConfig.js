import { defineComponent, computed, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { useDesign } from "@mfish/core/hooks";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, i as useDynamicDataConfig, ap as useEchartsMapLineData, _ as _export_sfc } from "./index.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfMapLineDataConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, getFields, setDataTable } = useDynamicDataConfig();
    const { prefixCls } = useDesign("map-line-data-config");
    const { resetDefault } = useEchartsMapLineData();
    const start = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.start) ?? [];
      }
      return [];
    });
    const end = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.end) ?? [];
      }
      return [];
    });
    const value = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.value) ?? [];
      }
      return [];
    });
    const curData = computed(() => {
      var _a;
      if ((_a = screenEditStore.getCurConfigComponent.chart.data.dataSet) == null ? void 0 : _a.source) {
        return JSON.stringify(screenEditStore.getCurConfigComponent.chart.data.dataSet.source);
      } else {
        return "";
      }
    });
    function dataSourceChange() {
      const start2 = getFields("start");
      const end2 = getFields("end");
      if (start2 && start2.length > 0 && end2 && end2.length > 0) {
        setDataTable();
      } else {
        resetDefault(screenEditStore.getCurConfigComponent.chart);
      }
    }
    const changeData = (field, data) => {
      if ((data == null ? void 0 : data.length) > 0) {
        setFields(field, data);
      } else {
        deleteFields(field);
      }
      dataSourceChange();
    };
    function changeStart(data) {
      changeData("start", data);
    }
    function changeEnd(data) {
      changeData("end", data);
    }
    function changeValue(data) {
      changeData("value", data);
    }
    function dataChange(data) {
      var _a;
      if (data) {
        screenEditStore.getCurConfigComponent.chart.data.dataSet.source = data;
      } else {
        (_a = screenEditStore.getCurConfigComponent.chart.data.dataSet) == null ? true : delete _a.source;
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
            title: "地图数据",
            data: curData.value,
            onDataChange: dataChange
          }, null, 8, ["data"])
        ]),
        "target-data": withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "开始地", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 100,
            onDataChange: changeStart,
            fields: start.value
          }, null, 8, ["fields"]),
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "结束地", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 100,
            onDataChange: changeEnd,
            fields: end.value
          }, null, 8, ["fields"]),
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "数据值", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 100,
            onDataChange: changeValue,
            fields: value.value
          }, null, 8, ["fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfMapLineDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31f5509f"]]);
export {
  MfMapLineDataConfig as default
};
