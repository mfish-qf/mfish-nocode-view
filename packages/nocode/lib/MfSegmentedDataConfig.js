import { defineComponent, computed, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { useDesign } from "@mfish/core/hooks";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, i as useDynamicDataConfig, _ as _export_sfc } from "./index2.js";
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
  __name: "MfSegmentedDataConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, setDataTable } = useDynamicDataConfig();
    const { prefixCls } = useDesign("segmented-data-config");
    const title = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.title) ?? [];
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
    const icon = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.icon) ?? [];
      }
      return [];
    });
    const curData = computed(() => {
      var _a;
      if ((_a = screenEditStore.getCurConfigComponent.chart.data) == null ? void 0 : _a.dataSet) {
        return JSON.stringify(screenEditStore.getCurConfigComponent.chart.data.dataSet);
      } else {
        return "";
      }
    });
    function dataSourceChange() {
      setDataTable();
    }
    function changeTitle(data) {
      if (data.length > 0) {
        setFields("title", data);
      } else {
        deleteFields("title");
      }
      setDataTable();
    }
    function changeValue(data) {
      if (data.length > 0) {
        setFields("value", data);
      } else {
        deleteFields("value");
      }
      setDataTable();
    }
    function changeIcon(data) {
      if (data.length > 0) {
        setFields("icon", data);
      } else {
        deleteFields("icon");
      }
      setDataTable();
    }
    function dataChange(value2) {
      if (value2) {
        screenEditStore.getCurConfigComponent.chart.data.dataSet = value2;
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
            data: curData.value,
            onDataChange: dataChange
          }, null, 8, ["data"])
        ]),
        "target-data": withCtx(() => [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "标签显示", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 120,
            onDataChange: changeTitle,
            fields: title.value
          }, null, 8, ["fields"]),
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "标签值", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 120,
            onDataChange: changeValue,
            fields: value.value
          }, null, 8, ["fields"]),
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "图标", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 120,
            onDataChange: changeIcon,
            fields: icon.value
          }, null, 8, ["fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfSegmentedDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a33fd08"]]);
export {
  MfSegmentedDataConfig as default
};
