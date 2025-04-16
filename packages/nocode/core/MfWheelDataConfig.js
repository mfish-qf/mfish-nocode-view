import { defineComponent, computed, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { useDesign } from "@mfish/core/hooks";
import { InputNumber } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import { u as useScreenEditStore, i as useDynamicDataConfig, _ as _export_sfc } from "./index.js";
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
const fieldName = "percentage";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfWheelDataConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, setDataTable } = useDynamicDataConfig();
    const { prefixCls } = useDesign("digits-data-config");
    const title = computed(() => {
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return screenEditStore.getCurConfigComponent.chart.data.fields[fieldName] ?? [];
      }
      return [];
    });
    function dataSourceChange() {
      setDataTable();
    }
    function changeNum(data) {
      if (data.length > 0) {
        setFields(fieldName, data);
        setDataTable();
      } else {
        deleteFields(fieldName);
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
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "百分比", -1)),
          createVNode(unref(InputNumber), {
            style: { "width": "100%" },
            value: unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.percentage,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.percentage = $event),
            placeholder: "百分比",
            step: 1
          }, null, 8, ["value"])
        ]),
        "target-data": withCtx(() => [
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "百分比（不包含%）", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 150,
            onDataChange: changeNum,
            fields: title.value
          }, null, 8, ["fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfWheelDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34e64524"]]);
export {
  MfWheelDataConfig as default
};
