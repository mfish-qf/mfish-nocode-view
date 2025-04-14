import { defineComponent, computed, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { useDesign } from "@mfish/core";
import "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/src/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, i as useDynamicDataConfig, _ as _export_sfc } from "./index2.js";
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
const fieldName = "fieldName";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfScrollTableDataConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, setDataTable } = useDynamicDataConfig();
    const { prefixCls } = useDesign("scroll-table-data-config");
    const headerName = computed(() => {
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return screenEditStore.getCurConfigComponent.chart.data.fields[fieldName] ?? [];
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
    function changeField(data) {
      if (data.length > 0) {
        setFields(fieldName, data);
        setDataTable();
      } else {
        deleteFields(fieldName);
      }
    }
    function dataChange(value) {
      if (value) {
        screenEditStore.getCurConfigComponent.chart.data.dataSet = value;
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
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "title" }, "显示内容", -1)),
          createVNode(DragInData, {
            height: 500,
            onDataChange: changeField,
            fields: headerName.value
          }, null, 8, ["fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfScrollTableDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9cb2c5e7"]]);
export {
  MfScrollTableDataConfig as default
};
