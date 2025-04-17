import { defineComponent, computed, resolveComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createElementVNode, createVNode, renderSlot } from "vue";
import { D as DataConfig, a as DragInData } from "./DragInData.js";
import { IconPicker } from "@mfish/core/components/Icon";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, i as useDynamicDataConfig, j as useDataTag, _ as _export_sfc } from "./index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfDataTagDataConfig",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { setFields, deleteFields, getFields, setDataTable } = useDynamicDataConfig();
    const { clearTitle, clearIcon } = useDataTag();
    function changeIcon(e) {
      screenEditStore.getCurConfigComponent.chart.data.dataSet.icon = e;
    }
    const { prefixCls } = useDesign("tag-data-config");
    const title = computed(() => {
      var _a;
      if (screenEditStore.getCurConfigComponent.chart.data.fields) {
        return ((_a = screenEditStore.getCurConfigComponent.chart.data.fields) == null ? void 0 : _a.title) ?? [];
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
    function dataSourceChange() {
      const title2 = getFields("title");
      const icon2 = getFields("icon");
      if (title2 && title2.length > 0 || icon2 && icon2.length > 0) {
        setDataTable();
      } else {
        clearTitle(screenEditStore.getCurConfigComponent.chart);
        clearIcon(screenEditStore.getCurConfigComponent.chart);
      }
    }
    function changeTitle(data) {
      if (data.length > 0) {
        setFields("title", data);
        setDataTable();
      } else {
        deleteFields("title");
        clearTitle(screenEditStore.getCurConfigComponent.chart);
      }
    }
    function changeIcon2(data) {
      if (data.length > 0) {
        setFields("icon", data);
        setDataTable();
      } else {
        deleteFields("icon");
        clearIcon(screenEditStore.getCurConfigComponent.chart);
      }
    }
    return (_ctx, _cache) => {
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createBlock(DataConfig, {
        class: normalizeClass(unref(prefixCls)),
        onRefreshData: dataSourceChange
      }, {
        "data-select": withCtx(() => [
          renderSlot(_ctx.$slots, "data-select", {}, void 0, true)
        ]),
        "static-data": withCtx(() => [
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "title" }, "标签内容", -1)),
          createVNode(_component_AInput, {
            value: unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.title,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.title = $event),
            "show-count": "",
            maxlength: 50
          }, null, 8, ["value"]),
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "图标", -1)),
          createVNode(unref(IconPicker), {
            value: unref(screenEditStore).getCurConfigComponent.chart.data.dataSet.icon,
            onChange: changeIcon
          }, null, 8, ["value"])
        ]),
        "target-data": withCtx(() => [
          _cache[3] || (_cache[3] = createElementVNode("div", { class: "title" }, "标签内容", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 150,
            onDataChange: changeTitle,
            fields: title.value
          }, null, 8, ["fields"]),
          _cache[4] || (_cache[4] = createElementVNode("div", { class: "title" }, "图标", -1)),
          createVNode(DragInData, {
            "max-count": 1,
            height: 150,
            onDataChange: changeIcon2,
            fields: icon.value
          }, null, 8, ["fields"])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
const MfDataTagDataConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8ed5d65"]]);
export {
  MfDataTagDataConfig as default
};
