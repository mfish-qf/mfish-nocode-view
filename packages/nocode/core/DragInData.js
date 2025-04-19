import { defineComponent, createBlock, openBlock, unref, withCtx, renderSlot, useCssVars, computed, watch, reactive, ref, createElementBlock, normalizeClass, createElementVNode, createVNode, createCommentVNode, normalizeStyle, toDisplayString, withModifiers, resolveComponent, Fragment, renderList, nextTick, createTextVNode, onMounted, onUnmounted } from "vue";
import { theme, Tooltip, Empty, Dropdown, Button, Menu, Input, RadioGroup, RadioButton, Divider } from "ant-design-vue";
import { useMessage, useDesign } from "@mfish/core/hooks";
import { Icon } from "@mfish/core/components/Icon";
import { useModalInner, BasicModal, useModal } from "@mfish/core/components/Modal";
import { router } from "@mfish/core/router";
import { useOutsideOpen } from "@mfish/core/utils/OutsideOpenUtils";
import { E as API_SAVE, _ as _export_sfc, u as useScreenEditStore, F as getFieldIcon, G as renameField, s as screenEvent, S as ScreenEventEnum, H as FIELD_DATA_DRAG, I as getComponentById, J as ComType, L as LayerItem, K as LayerGroup, g as getEventName, N as ParamType, i as useDynamicDataConfig, b as ComponentsEnum, O as getFieldsByResourceId, Q as getDataFieldsById, R as getApiParamsList, f as ScreenInput } from "./index.js";
import "@vueuse/core";
import { debounce, omit, cloneDeep, throttle, pick } from "lodash-es";
import "@mfish/core/enums";
import { isArray } from "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import { ScrollContainer } from "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { C as ConfigGroup } from "./ConfigGroup.js";
import draggable from "vuedraggable";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DataSelectModal",
  props: {
    selectData: {
      type: Object
    }
  },
  emits: ["success", "register"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async () => {
      setModalProps({ confirmLoading: false, width: "1200px", defaultFullscreen: true });
    });
    const { createMessage } = useMessage();
    function handleSubmit() {
      if (props.selectData) {
        emit("success", props.selectData);
        closeModal();
        return;
      }
      createMessage.warning("请选择数据源");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), {
        width: "1200px",
        onRegister: unref(registerModal),
        title: "数据来源",
        onOk: handleSubmit
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["onRegister"]);
    };
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "placeholder"
};
const _hoisted_2$6 = {
  key: 0,
  class: "warning"
};
const _hoisted_3$3 = {
  key: 2,
  class: "icon-group"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DataSelect",
  props: {
    selectData: {
      type: Object
    },
    dataId: { type: String, default: "" },
    dataName: { type: String, default: "" },
    isResource: { type: Boolean, default: false },
    screenId: { type: String, default: "" }
  },
  emits: ["dataChange", "dataRefresh"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "54d92964": colorBorder.value
    }));
    const props = __props;
    const emit = __emit;
    watch(
      () => props.dataId,
      (val) => {
        if (val) {
          data.id = val;
          data.name = props.dataName;
        } else {
          data.id = "";
          data.name = "";
        }
      }
    );
    const { prefixCls } = useDesign("data-select");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const icon = ref("");
    const [registerModal, { openModal }] = useModal();
    const data = reactive({
      id: props.dataId,
      name: props.dataName
    });
    const spin = ref(false);
    const { open } = useOutsideOpen(API_SAVE, refreshData);
    function handleEnter() {
      if (data.id) {
        icon.value = "ant-design:close-circle-filled";
      }
    }
    function handleLeave() {
      icon.value = "";
    }
    function handleClick() {
      openModal(true, {});
    }
    function handleSuccess(e) {
      data.id = e.id;
      data.name = e.name;
      emit("dataChange", unref(data));
    }
    function handleDelete() {
      data.id = "";
      data.name = "";
      emit("dataChange", unref(data));
    }
    function handleEdit() {
      let query;
      if (props.isResource) {
        query = { configId: data.id, screenId: props.screenId };
      } else {
        query = { configId: data.id };
      }
      const routeData = router.resolve({
        path: "/low-code/mf-api/config",
        query
      });
      open(routeData);
    }
    const clickRefresh = debounce(() => refreshData(), 200);
    function refreshData() {
      spin.value = true;
      setTimeout(() => {
        spin.value = false;
      }, 1e3);
      emit("dataRefresh");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", {
          class: "input",
          onMouseenter: handleEnter,
          onMouseleave: handleLeave,
          onClick: handleClick
        }, [
          !data.id ? (openBlock(), createElementBlock("div", _hoisted_1$6, "请选择数据来源")) : (openBlock(), createBlock(unref(Tooltip), {
            key: 1,
            title: data.name
          }, {
            default: withCtx(() => [
              createElementVNode("div", {
                class: "title",
                style: normalizeStyle(__props.isResource ? { textDecoration: "line-through", color: "#999" } : {})
              }, toDisplayString(data.name), 5),
              __props.isResource ? (openBlock(), createElementBlock("div", _hoisted_2$6, " 注意：请将样例数据更换为自己的数据")) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["title"])),
          icon.value ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
            createVNode(unref(Tooltip), {
              title: __props.isResource ? "查看样例数据源配置" : "编辑数据源"
            }, {
              default: withCtx(() => [
                createVNode(unref(Icon), {
                  class: "icon",
                  icon: __props.isResource ? "ant-design:search-outlined" : "ant-design:edit-outlined",
                  onClick: withModifiers(handleEdit, ["stop"])
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["title"]),
            createVNode(unref(Tooltip), { title: "清空数据源" }, {
              default: withCtx(() => [
                createVNode(unref(Icon), {
                  class: "delete-icon",
                  size: 14,
                  icon: icon.value,
                  onClick: withModifiers(handleDelete, ["stop"])
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          createVNode(_sfc_main$8, {
            onRegister: unref(registerModal),
            onSuccess: handleSuccess,
            "select-data": __props.selectData
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["onRegister", "select-data"])
        ], 32),
        createVNode(unref(Tooltip), { title: "刷新数据源" }, {
          default: withCtx(() => [
            createVNode(unref(Icon), {
              class: "icon",
              icon: "ant-design:sync-outlined",
              onClick: unref(clickRefresh),
              spin: spin.value
            }, null, 8, ["onClick", "spin"])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const DataSelect = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3a060ac3"]]);
const _hoisted_1$5 = ["draggable", "onMouseenter", "onDragstart"];
const _hoisted_2$5 = { class: "title" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FieldConfig",
  props: {
    fieldList: { type: Array, default: () => [] }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "699b0e88": bgColor.value
    }));
    const props = __props;
    const enterField = ref(-1);
    const editField = ref(-1);
    const editValue = ref("");
    const { prefixCls } = useDesign("field-config");
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const curInput = ref();
    const screenEditStore = useScreenEditStore();
    function enterHandle(index) {
      enterField.value = index;
    }
    function leaveHandle() {
      enterField.value = -1;
    }
    function editHandle() {
      editField.value = enterField.value;
      editValue.value = props.fieldList[enterField.value].rename ?? props.fieldList[enterField.value].colName;
      nextTick(() => {
        var _a, _b;
        (_a = curInput.value) == null ? void 0 : _a.focus();
        (_b = curInput.value) == null ? void 0 : _b.select();
      });
    }
    async function saveHandle(item) {
      if (editValue.value !== item.rename) {
        const res = await renameField(screenEditStore.getCurConfigComponent.chart.data.id, item.colName, editValue.value);
        if (res) {
          item.rename = editValue.value;
        }
      }
      restoreHandle();
      screenEvent.emit(ScreenEventEnum.DATA_RENAME, item);
    }
    function restoreHandle() {
      editField.value = -1;
      editValue.value = "";
    }
    function dragstart(event, item) {
      var _a;
      (_a = event.dataTransfer) == null ? void 0 : _a.setData(FIELD_DATA_DRAG, JSON.stringify(item));
    }
    return (_ctx, _cache) => {
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.fieldList, (item, index) => {
          return openBlock(), createElementBlock("div", {
            class: "field-block",
            key: item.id,
            draggable: editField.value !== index,
            onMouseenter: ($event) => enterHandle(index),
            onMouseleave: leaveHandle,
            onDragstart: ($event) => dragstart($event, item)
          }, [
            createVNode(unref(Icon), {
              class: "icon",
              icon: unref(getFieldIcon)(item.dataType)
            }, null, 8, ["icon"]),
            editField.value !== index ? (openBlock(), createBlock(unref(Tooltip), {
              key: 0,
              title: item.colName + (item.comment ? `[${item.comment}]` : ""),
              placement: "left"
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2$5, toDisplayString(item.rename ?? item.colName), 1)
              ]),
              _: 2
            }, 1032, ["title"])) : (openBlock(), createBlock(_component_AInput, {
              key: 1,
              bordered: false,
              value: editValue.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => editValue.value = $event),
              ref_for: true,
              ref: (el) => curInput.value = el,
              onPressEnter: ($event) => saveHandle(item),
              onBlur: restoreHandle
            }, null, 8, ["value", "onPressEnter"])),
            enterField.value === index && editField.value !== index ? (openBlock(), createBlock(unref(Tooltip), {
              key: 2,
              title: "重命名"
            }, {
              default: withCtx(() => [
                createVNode(unref(Icon), {
                  class: "icon edit",
                  icon: "ant-design:edit-outlined",
                  onClick: editHandle
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            editField.value === index ? (openBlock(), createBlock(unref(Tooltip), {
              key: 3,
              title: "保存"
            }, {
              default: withCtx(() => [
                createVNode(unref(Icon), {
                  class: "icon edit",
                  icon: "ant-design:save-outlined",
                  onClick: ($event) => saveHandle(item)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)) : createCommentVNode("", true)
          ], 40, _hoisted_1$5);
        }), 128))
      ], 2);
    };
  }
});
const FieldConfig = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-20f7782b"]]);
const _hoisted_1$4 = {
  key: 0,
  class: "header",
  style: { "width": "120px" }
};
const _hoisted_2$4 = {
  key: 0,
  class: "divide-line"
};
const _hoisted_3$2 = ["title", "onClick"];
const _hoisted_4$2 = ["title", "onClick"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EventSelectItems",
  props: {
    componentList: { type: Array, default: () => [] },
    value: {
      type: Object,
      default: () => {
      }
    },
    hideEvent: { type: Boolean, default: false }
  },
  emits: ["selectChange"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "803cda50": bgColor.value
    }));
    const props = __props;
    const emit = __emit;
    const selectValue = reactive({
      id: "",
      event: "",
      param: ""
    });
    watch(
      () => props.value,
      (val) => {
        if (val) {
          selectValue.id = val.id;
          selectValue.event = val.event;
          selectValue.param = val.param;
        } else {
          selectValue.id = "";
          selectValue.event = "";
          selectValue.param = "";
        }
      },
      { immediate: true }
    );
    const { prefixCls } = useDesign("event-select-items");
    const curComponent = computed(() => {
      return getComponentById(props.componentList, selectValue.id);
    });
    const events = computed(() => {
      var _a;
      const com = curComponent.value;
      if (com) {
        if (!((_a = com.chart.events) == null ? void 0 : _a.emits)) return [];
        return com.chart.events.emits;
      }
      return [];
    });
    const fields = computed(() => {
      var _a;
      const com = curComponent.value;
      if (com) {
        if (!((_a = com.chart.data) == null ? void 0 : _a.headers)) return [];
        const fields2 = Object.values(com.chart.data.headers);
        return fields2 ?? [];
      }
      return [];
    });
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const screenEditStore = useScreenEditStore();
    function mouseEnter(item) {
      screenEditStore.setCurHoverComponent(item.chart.id);
    }
    function mouseLeave() {
      screenEditStore.setCurHoverComponent("");
    }
    function setComponent(id) {
      if (selectValue.id === id) {
        return;
      }
      selectValue.id = id;
      if (events.value && events.value.length > 0) {
        selectValue.event = events.value[0];
      } else {
        selectValue.event = "";
      }
      if (fields.value && fields.value.length > 0) {
        selectValue.param = fields.value[0].colName ?? "";
      } else {
        selectValue.param = "";
      }
      selectChange();
    }
    function setChildComponent(item) {
      setComponent(item.chart.id);
    }
    function setEvent(event) {
      if (selectValue.event === event) {
        return;
      }
      selectValue.event = event;
      selectChange();
    }
    function setParam(param) {
      if (selectValue.param === param) {
        return;
      }
      selectValue.param = param ?? "";
      selectChange();
    }
    function selectChange() {
      if (props.hideEvent) {
        emit("selectChange", omit(unref(selectValue), "event"));
      } else {
        emit("selectChange", unref(selectValue));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createElementVNode("div", {
          class: normalizeClass(`${unref(prefixCls)}-headers`)
        }, [
          _cache[0] || (_cache[0] = createElementVNode("div", {
            class: "header",
            style: { "width": "150px" }
          }, "组件", -1)),
          !__props.hideEvent ? (openBlock(), createElementBlock("div", _hoisted_1$4, "事件")) : createCommentVNode("", true),
          _cache[1] || (_cache[1] = createElementVNode("div", {
            class: "header",
            style: { "width": "120px" }
          }, "参数", -1))
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(`${unref(prefixCls)}-container`)
        }, [
          createVNode(unref(ScrollContainer), {
            class: normalizeClass(`${unref(prefixCls)}-items`),
            style: { "width": "150px" }
          }, {
            default: withCtx(() => {
              var _a;
              return [
                ((_a = __props.componentList) == null ? void 0 : _a.length) > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.componentList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.chart.id
                  }, [
                    item.chart.type !== unref(ComType).MfCombine ? (openBlock(), createBlock(LayerItem, {
                      key: 0,
                      style: { "margin": "2px 6px 0 6px" },
                      "external-select": true,
                      "is-select": selectValue.id === item.chart.id,
                      item,
                      "show-eye": false,
                      "show-lock": false,
                      onClick: ($event) => setComponent(item.chart.id),
                      onEnter: ($event) => mouseEnter(item),
                      onLeave: mouseLeave
                    }, null, 8, ["is-select", "item", "onClick", "onEnter"])) : (openBlock(), createBlock(LayerGroup, {
                      key: 1,
                      style: { "margin": "2px", "font-size": "12px" },
                      "external-select": true,
                      "is-select": selectValue.id === item.chart.id,
                      item,
                      "show-eye": false,
                      "show-lock": false,
                      "show-child-eye": false,
                      "show-child-lock": false,
                      expand: true,
                      "child-select": selectValue.id,
                      onParentClick: ($event) => setComponent(item.chart.id),
                      onChildClick: setChildComponent
                    }, null, 8, ["is-select", "item", "child-select", "onParentClick"]))
                  ]);
                }), 128)) : (openBlock(), createBlock(unref(Empty), {
                  key: 1,
                  description: "暂无组件",
                  image: unref(Empty).PRESENTED_IMAGE_SIMPLE
                }, null, 8, ["image"]))
              ];
            }),
            _: 1
          }, 8, ["class"]),
          !__props.hideEvent ? (openBlock(), createElementBlock("div", _hoisted_2$4)) : createCommentVNode("", true),
          !__props.hideEvent ? (openBlock(), createBlock(unref(ScrollContainer), {
            key: 1,
            class: normalizeClass(`${unref(prefixCls)}-items`),
            style: { "width": "120px" }
          }, {
            default: withCtx(() => [
              events.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(events.value, (item) => {
                var _a;
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(["item", selectValue.event === item ? "select" : ""]),
                  title: item,
                  key: item,
                  onClick: ($event) => setEvent(item)
                }, [
                  createElementVNode("div", null, toDisplayString(unref(getEventName)(item, (_a = curComponent.value) == null ? void 0 : _a.chart.type)), 1)
                ], 10, _hoisted_3$2);
              }), 128)) : (openBlock(), createBlock(unref(Empty), {
                key: 1,
                description: "暂无事件",
                image: unref(Empty).PRESENTED_IMAGE_SIMPLE
              }, null, 8, ["image"]))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true),
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "divide-line" }, null, -1)),
          createVNode(unref(ScrollContainer), {
            class: normalizeClass(`${unref(prefixCls)}-items`),
            style: { "width": "120px" }
          }, {
            default: withCtx(() => [
              fields.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(fields.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(["item", selectValue.param === item.colName ? "select" : ""]),
                  title: `${item.colName}${item.rename ? `[${item.rename}]` : ""}`,
                  key: index,
                  onClick: ($event) => setParam(item.colName)
                }, [
                  createElementVNode("div", null, toDisplayString(item.rename ?? item.colName), 1)
                ], 10, _hoisted_4$2);
              }), 128)) : (openBlock(), createBlock(unref(Empty), {
                key: 1,
                description: "暂无参数",
                image: unref(Empty).PRESENTED_IMAGE_SIMPLE
              }, null, 8, ["image"]))
            ]),
            _: 1
          }, 8, ["class"])
        ], 2)
      ], 2);
    };
  }
});
const EventSelectItems = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ba31ce1b"]]);
const _hoisted_1$3 = ["onMouseenter"];
const _hoisted_2$3 = { class: "title" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EventSelect",
  props: {
    events: { type: Array, default: () => [] },
    //是否过滤掉自己 不允许自己触发自己时需过滤
    filterSelf: { type: Boolean, default: false }
  },
  emits: ["ok", "delete", "eventLose"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "00be537e": bgColor.value
    }));
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("event-select");
    const isShow = ref(false);
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const componentList = ref([]);
    const screenEditStore = useScreenEditStore();
    const selectEvent = ref();
    const enterParam = ref(-1);
    const modifyIndex = ref(-1);
    const eventDisplays = computed(() => {
      if (props.events && props.events.length > 0) {
        const events = [];
        for (const event of props.events) {
          const com = getComponentById(screenEditStore.getComponentList, event.id);
          if (!com) {
            emit("eventLose", event.id);
            continue;
          }
          let param;
          if (com.chart.data.headers) {
            param = com.chart.data.headers[event.param];
          }
          if (param) {
            events.push(
              `${com.chart.name} / ${getEventName(event.event, com.chart.type)} / ${param.rename ?? param.colName}`
            );
          } else {
            events.push(`${com.chart.name} / ${getEventName(event.event, com.chart.type)}`);
          }
        }
        return events;
      }
      return [];
    });
    watch(
      () => {
        var _a;
        return (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.id;
      },
      () => {
        isShow.value = false;
      }
    );
    function cancelHandle() {
      isShow.value = false;
    }
    function okHandle() {
      emit("ok", { event: cloneDeep(selectEvent.value), modifyIndex: modifyIndex.value });
      isShow.value = false;
    }
    const visibleChange = (show) => {
      isShow.value = show;
      modifyIndex.value = -1;
      if (show) {
        setComponentList();
      }
      selectEvent.value = void 0;
    };
    function setComponentList() {
      componentList.value = [];
      const isExist = (com) => {
        return com.chart.events && com.chart.events.emits && com.chart.events.emits.length > 0 && (props.filterSelf && com.chart.id !== screenEditStore.getCurConfigComponent.chart.id || !props.filterSelf);
      };
      for (const com of screenEditStore.getComponentList) {
        if (com.chart.type !== ComType.MfCombine) {
          if (isExist(com)) {
            componentList.value.push(cloneDeep(com));
          }
          continue;
        }
        const newCom = cloneDeep(com);
        newCom.chart.options.components = newCom.chart.options.components.filter((item) => isExist(item));
        if (newCom.chart.options.components.length > 0) {
          componentList.value.push(newCom);
        } else if (isExist(newCom)) {
          componentList.value.push(newCom);
        }
      }
    }
    function selectChange(event) {
      selectEvent.value = event;
    }
    function enterHandle(index) {
      enterParam.value = index;
    }
    function leaveHandle() {
      enterParam.value = -1;
    }
    function editHandle(index) {
      setComponentList();
      selectEvent.value = props.events[index];
      modifyIndex.value = index;
      isShow.value = true;
    }
    function deleteHandle(index) {
      emit("delete", index);
      isShow.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        trigger: ["click"],
        open: isShow.value,
        onOpenChange: visibleChange,
        placement: "bottom",
        arrow: { pointAtCenter: true },
        "overlay-style": { width: "380px" }
      }, {
        overlay: withCtx(() => [
          createVNode(unref(Menu), null, {
            default: withCtx(() => [
              createVNode(unref(Menu).Item, {
                disabled: "",
                style: { "padding": "0", "cursor": "default" }
              }, {
                default: withCtx(() => [
                  createVNode(EventSelectItems, {
                    value: selectEvent.value,
                    "component-list": componentList.value,
                    onSelectChange: selectChange
                  }, null, 8, ["value", "component-list"]),
                  createElementVNode("div", {
                    class: normalizeClass(`${unref(prefixCls)}-ok-button`)
                  }, [
                    createVNode(unref(Button), {
                      class: "mr-2",
                      onClick: cancelHandle
                    }, {
                      default: withCtx(() => _cache[1] || (_cache[1] = [
                        createTextVNode("取消")
                      ])),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "primary",
                      onClick: okHandle
                    }, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("确定")
                      ])),
                      _: 1
                    })
                  ], 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(eventDisplays.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "item",
                key: index,
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => isShow.value = false, ["stop"])),
                onMouseenter: ($event) => enterHandle(index),
                onMouseleave: leaveHandle
              }, [
                createVNode(unref(Tooltip), {
                  title: item,
                  placement: "left"
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", _hoisted_2$3, toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1032, ["title"]),
                enterParam.value === index ? (openBlock(), createBlock(unref(Tooltip), {
                  key: 0,
                  title: "修改"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      class: "icon",
                      icon: "ant-design:edit-outlined",
                      onClick: withModifiers(($event) => editHandle(index), ["stop"])
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                enterParam.value === index ? (openBlock(), createBlock(unref(Tooltip), {
                  key: 1,
                  title: "删除"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      class: "icon",
                      icon: "ant-design:delete-outlined",
                      onClick: ($event) => deleteHandle(index)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ], 40, _hoisted_1$3);
            }), 128)),
            createVNode(unref(Button), {
              size: "small",
              type: "link",
              class: normalizeClass(`${unref(prefixCls)}-drop-button`)
            }, {
              icon: withCtx(() => [
                createVNode(unref(Icon), {
                  size: 12,
                  icon: "ant-design:plus-outlined"
                })
              ]),
              default: withCtx(() => [
                _cache[3] || (_cache[3] = createElementVNode("span", { class: "content" }, "绑定已开启事件", -1))
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const EventSelect = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f8f8b1d8"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VariableSelect",
  props: {
    variable: {
      type: Object,
      default: () => {
      }
    },
    //是否过滤自己 不允许自己触发自己时需要过滤
    filterSelf: { type: Boolean, default: false }
  },
  emits: ["ok"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("variable-select");
    const isShow = ref(false);
    const screenEditStore = useScreenEditStore();
    const selectVariable = ref();
    const componentList = ref([]);
    const inputValue = ref("");
    const isEnter = ref(false);
    const variableDisplay = () => {
      var _a;
      if ((_a = props.variable) == null ? void 0 : _a.id) {
        const com = getComponentById(screenEditStore.getComponentList, props.variable.id);
        if (!com) {
          emit("ok");
          return "";
        }
        let param;
        if (com.chart.data.headers) {
          param = com.chart.data.headers[props.variable.param];
        }
        if (param) {
          return `${com.chart.name} / ${param.rename ?? param.colName}`;
        }
      }
      return "";
    };
    watch(
      () => {
        var _a;
        return (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.id;
      },
      () => {
        isShow.value = false;
      }
    );
    watch(
      () => props.variable,
      () => {
        inputValue.value = variableDisplay();
      },
      {
        deep: true,
        immediate: true
      }
    );
    function setComponentList() {
      componentList.value = [];
      const isExist = (com) => {
        return com.chart.data && com.chart.data.dataSet && (props.filterSelf && com.chart.id !== screenEditStore.getCurConfigComponent.chart.id || !props.filterSelf);
      };
      for (const com of screenEditStore.getComponentList) {
        if (com.chart.type !== ComType.MfCombine) {
          if (isExist(com)) {
            componentList.value.push(cloneDeep(com));
          }
          continue;
        }
        const newCom = cloneDeep(com);
        newCom.chart.options.components = newCom.chart.options.components.filter((item) => isExist(item));
        if (newCom.chart.options.components.length > 0) {
          componentList.value.push(newCom);
        } else if (isExist(newCom)) {
          componentList.value.push(newCom);
        }
      }
    }
    function cancelHandle() {
      isShow.value = false;
      inputValue.value = variableDisplay();
    }
    function okHandle() {
      emit("ok", cloneDeep(selectVariable.value));
      isShow.value = false;
    }
    const visibleChange = (show) => {
      isShow.value = show;
      if (show) {
        setComponentList();
      } else {
        inputValue.value = variableDisplay();
      }
      selectVariable.value = cloneDeep(props.variable);
    };
    function selectChange(event) {
      selectVariable.value = event;
    }
    function clearData() {
      emit("ok", {});
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        trigger: ["click"],
        open: isShow.value,
        onOpenChange: visibleChange,
        placement: "bottom",
        arrow: { pointAtCenter: true },
        "overlay-style": { width: "270px" }
      }, {
        overlay: withCtx(() => [
          createVNode(unref(Menu), null, {
            default: withCtx(() => [
              createVNode(unref(Menu).Item, {
                disabled: "",
                style: { "padding": "0", "cursor": "default" }
              }, {
                default: withCtx(() => [
                  createVNode(EventSelectItems, {
                    "hide-event": true,
                    value: selectVariable.value,
                    "component-list": componentList.value,
                    onSelectChange: selectChange
                  }, null, 8, ["value", "component-list"]),
                  createElementVNode("div", {
                    class: normalizeClass(`${unref(prefixCls)}-ok-button`)
                  }, [
                    createVNode(unref(Button), {
                      class: "mr-2",
                      onClick: cancelHandle
                    }, {
                      default: withCtx(() => _cache[4] || (_cache[4] = [
                        createTextVNode("取消")
                      ])),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      type: "primary",
                      onClick: okHandle
                    }, {
                      default: withCtx(() => _cache[5] || (_cache[5] = [
                        createTextVNode("确定")
                      ])),
                      _: 1
                    })
                  ], 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls)),
            onMouseenter: _cache[2] || (_cache[2] = ($event) => isEnter.value = true),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => isEnter.value = false)
          }, [
            createVNode(unref(Input), {
              class: normalizeClass(`${unref(prefixCls)}-drop-input`),
              placeholder: "请选择参数来源",
              value: inputValue.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => isShow.value = true)
            }, {
              suffix: withCtx(() => [
                isEnter.value && inputValue.value ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  class: "delete-icon",
                  size: 14,
                  icon: "ant-design:close-circle-filled",
                  onClick: withModifiers(clearData, ["stop"])
                })) : createCommentVNode("", true),
                createVNode(unref(Icon), {
                  class: "drop-icon",
                  size: 12,
                  icon: isShow.value ? "ant-design:up-outlined" : "ant-design:down-outlined"
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["class", "value"])
          ], 34)
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const VariableSelect = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e10c5339"]]);
const _hoisted_1$2 = { class: "title" };
const _hoisted_2$2 = { class: "param" };
const _hoisted_3$1 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = { key: 2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataParamsConfig",
  props: { params: { type: Array, default: () => [] } },
  emits: ["paramChange"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "71549546": colorBorder.value
    }));
    const emit = __emit;
    const { prefixCls } = useDesign("data-params-config");
    const { token } = theme.useToken();
    const colorBorder = computed(() => token.value.colorBorder);
    const screenEditStore = useScreenEditStore();
    const { createMessage } = useMessage();
    function submitEvent(e, item) {
      const event = e.event;
      const params = cloneDeep(screenEditStore.getCurConfigComponent.chart.data.params);
      let isChange = false;
      if (!params[item.name].value) {
        params[item.name].value = [];
        isChange = true;
      }
      const index = params[item.name].value.findIndex((item2) => item2.id === event.id && item2.event === event.event);
      if (index === -1) {
        if (e.modifyIndex >= 0) {
          params[item.name].value.splice(e.modifyIndex, 1, event);
        } else {
          params[item.name].value.push(event);
        }
        isChange = true;
      } else {
        if (params[item.name].value.param !== event.param) {
          params[item.name].value.splice(index, 1, event);
          isChange = true;
        }
      }
      if (isChange) {
        setParamValue(getParamValue(e.event, item));
        screenEditStore.getCurConfigComponent.chart.data.params = params;
      }
    }
    function deleteEvent(index, item) {
      var _a;
      const params = cloneDeep(screenEditStore.getCurConfigComponent.chart.data.params);
      params[item.name].value.splice(index, 1);
      if (((_a = params[item.name].value) == null ? void 0 : _a.length) > 0) {
        setParamValue(getParamValue(params[item.name].value[0], item));
      } else {
        setParamValue({ [item.name]: void 0 });
      }
      screenEditStore.getCurConfigComponent.chart.data.params = params;
    }
    function changeType(type, item) {
      var _a;
      const params = cloneDeep(screenEditStore.getCurConfigComponent.chart.data.params);
      switch ((_a = type.target) == null ? void 0 : _a.value) {
        case ParamType.VARIABLE: {
          params[item.name].value = void 0;
          break;
        }
        case ParamType.EVENT: {
          params[item.name].value = [];
          break;
        }
        default: {
          params[item.name].value = item.defaultValue;
          if (item.defaultValue) {
            setParamValue({ [item.name]: item.defaultValue });
          }
          break;
        }
      }
      screenEditStore.getCurConfigComponent.chart.data.params = params;
    }
    const getParamValue = (param, item) => {
      const throwError = () => {
        const error = "错误：组件参数存在循环引用，请检查";
        createMessage.error(error);
        throw new Error(error);
      };
      const checkCycle = (id) => {
        const com = screenEditStore.getComponent(id);
        if (com == null ? void 0 : com.chart.data.params) {
          for (const item2 of Object.values(com == null ? void 0 : com.chart.data.params)) {
            if (!(item2 == null ? void 0 : item2.value)) continue;
            if (isArray(item2.value)) {
              for (const p of item2.value) {
                if (p.id === screenEditStore.getCurConfigComponent.chart.id) {
                  throwError();
                }
                checkCycle(p.id);
              }
              continue;
            }
            if (item2.value.id === screenEditStore.getCurConfigComponent.chart.id) {
              throwError();
            } else {
              checkCycle(item2.value.id);
            }
          }
        }
        return com;
      };
      if (param) {
        const com = checkCycle(param.id);
        if (!com) return;
        if (screenEditStore.getCurConfigComponent.chart.data.priority === void 0) {
          screenEditStore.getCurConfigComponent.chart.data.priority = 0;
        }
        if (screenEditStore.getCurConfigComponent.chart.data.priority <= (com.chart.data.priority ?? 0)) {
          screenEditStore.getCurConfigComponent.chart.data.priority = com.chart.data.priority + 1;
        }
        const result = (com == null ? void 0 : com.chart.data.type) === 0 ? com == null ? void 0 : com.chart.data.dataSet : com == null ? void 0 : com.chart.data.result;
        if (isArray(result)) {
          return { [item.name]: result[0][param.param] };
        } else if (result) {
          return { [item.name]: result[param.param] };
        }
      }
    };
    function setParamValue(paramsValue) {
      const chart = screenEditStore.getCurConfigComponent.chart;
      if (chart.data.paramsValue) {
        chart.data.paramsValue = { ...chart.data.paramsValue, ...paramsValue };
      } else {
        chart.data.paramsValue = paramsValue;
      }
      emit("paramChange");
    }
    function eventLose(id, item) {
      var _a;
      const params = cloneDeep(screenEditStore.getCurConfigComponent.chart.data.params);
      params[item.name].value = params[item.name].value.filter((item2) => item2.id !== id);
      if (((_a = params[item.name].value) == null ? void 0 : _a.length) > 0) {
        setParamValue(getParamValue(params[item.name].value[0], item));
      } else {
        setParamValue({ [item.name]: void 0 });
      }
      screenEditStore.getCurConfigComponent.chart.data.params = params;
    }
    function submitVariable(e, item) {
      const params = cloneDeep(screenEditStore.getCurConfigComponent.chart.data.params);
      params[item.name].value = e;
      setParamValue(getParamValue(e, item));
      screenEditStore.getCurConfigComponent.chart.data.params = params;
    }
    const constantChange = throttle((e, item) => {
      setParamValue({ [item.name]: e.target.value });
    }, 500);
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.params, (item) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(unref(prefixCls)),
          key: item.name
        }, [
          createElementVNode("div", _hoisted_1$2, [
            createVNode(unref(Tooltip), {
              title: item.remark
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2$2, [
                  item.required === 1 ? (openBlock(), createElementBlock("span", _hoisted_3$1, "*")) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(item.name), 1)
                ])
              ]),
              _: 2
            }, 1032, ["title"]),
            createVNode(unref(Tooltip), { placement: "topRight" }, {
              title: withCtx(() => _cache[0] || (_cache[0] = [
                createElementVNode("div", null, [
                  createElementVNode("span", { style: { "font-weight": "700" } }, "常量："),
                  createTextVNode("设置固定参数")
                ], -1),
                createElementVNode("div", null, [
                  createElementVNode("span", { style: { "font-weight": "700" } }, "变量："),
                  createTextVNode("设置其他组件数据或全局参数（第一次加载设置，不会随前者变化） ")
                ], -1),
                createElementVNode("div", null, [
                  createElementVNode("span", { style: { "font-weight": "700" } }, "事件："),
                  createTextVNode(" 其他组件事件触发设置（绑定多个事件时，以最后触发事件的组件为准） ")
                ], -1)
              ])),
              default: withCtx(() => [
                unref(screenEditStore).getCurConfigComponent.chart.data.params && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name] ? (openBlock(), createBlock(unref(RadioGroup), {
                  key: 0,
                  class: "radio-group",
                  size: "small",
                  value: unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].type,
                  "onUpdate:value": ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].type = $event,
                  onChange: ($event) => changeType($event, item)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(RadioButton), {
                      class: "radio-button",
                      value: unref(ParamType).CONSTANT
                    }, {
                      default: withCtx(() => _cache[1] || (_cache[1] = [
                        createTextVNode("常量")
                      ])),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(unref(RadioButton), {
                      class: "radio-button",
                      value: unref(ParamType).VARIABLE
                    }, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("变量")
                      ])),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(unref(RadioButton), {
                      class: "radio-button",
                      value: unref(ParamType).EVENT
                    }, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("事件")
                      ])),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 2
                }, 1032, ["value", "onUpdate:value", "onChange"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          unref(screenEditStore).getCurConfigComponent.chart.data.params && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name] && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].type === unref(ParamType).CONSTANT ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            createVNode(unref(Input), {
              value: unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].value,
              "onUpdate:value": ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].value = $event,
              placeholder: "请输入常量参数",
              onChange: ($event) => unref(constantChange)($event, item)
            }, null, 8, ["value", "onUpdate:value", "onChange"])
          ])) : createCommentVNode("", true),
          unref(screenEditStore).getCurConfigComponent.chart.data.params && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name] && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].type === unref(ParamType).VARIABLE ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
            createVNode(VariableSelect, {
              "filter-self": true,
              variable: unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].value,
              onOk: ($event) => submitVariable($event, item)
            }, null, 8, ["variable", "onOk"])
          ])) : createCommentVNode("", true),
          unref(screenEditStore).getCurConfigComponent.chart.data.params && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name] && unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].type === unref(ParamType).EVENT ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            createVNode(EventSelect, {
              "filter-self": true,
              events: unref(screenEditStore).getCurConfigComponent.chart.data.params[item.name].value,
              onOk: ($event) => submitEvent($event, item),
              onDelete: ($event) => deleteEvent($event, item),
              onEventLose: ($event) => eventLose($event, item)
            }, null, 8, ["events", "onOk", "onDelete", "onEventLose"])
          ])) : createCommentVNode("", true)
        ], 2);
      }), 128);
    };
  }
});
const DataParamsConfig = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-004f2837"]]);
const _hoisted_1$1 = { class: "title" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "data-header" };
const _hoisted_5 = { class: "data-set" };
const _hoisted_6 = { class: "target-data" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataConfig",
  props: {
    selectData: {
      type: Object
    }
  },
  emits: ["refreshData"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const screenEditStore = useScreenEditStore();
    const dataTypes = [
      {
        label: "静态数据",
        value: 0
      },
      {
        label: "动态数据",
        value: 1
      }
    ];
    const { prefixCls } = useDesign("data-config");
    const fieldList = ref([]);
    const paramList = ref([]);
    const { setDataTable } = useDynamicDataConfig();
    function dataChange(e) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.data.id = e.id;
      (_a = screenEditStore.getCurConfigComponent.chart) == null ? true : delete _a.isResource;
      screenEditStore.getCurConfigComponent.chart.data.name = e.name;
    }
    onMounted(() => {
      screenEvent.on(ScreenEventEnum.DATA_RENAME, renameField2);
    });
    watch(
      () => {
        var _a;
        return (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.data.type;
      },
      (val) => {
        var _a;
        if (val === 0) {
          const com = ComponentsEnum[(_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.type];
          screenEditStore.getCurConfigComponent.chart.data.headers = com.defaultHeaders && com.defaultHeaders(screenEditStore.getCurConfigComponent.chart);
          return;
        }
        dataRefresh();
      },
      { immediate: true }
    );
    watch(
      () => {
        var _a;
        return (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.data.id;
      },
      () => {
        var _a;
        if (((_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.data.type) === 0) {
          return;
        }
        dataRefresh();
        setDataTable();
      }
    );
    function dataRefresh() {
      var _a, _b, _c, _d, _e, _f;
      const id = ((_b = (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart) == null ? void 0 : _b.isResource) ? `${screenEditStore.getId},${(_c = screenEditStore.getCurConfigComponent) == null ? void 0 : _c.chart.data.id}` : (_d = screenEditStore.getCurConfigComponent) == null ? void 0 : _d.chart.data.id;
      if (id) {
        const req = [];
        const getFields = ((_f = (_e = screenEditStore.getCurConfigComponent) == null ? void 0 : _e.chart) == null ? void 0 : _f.isResource) ? getFieldsByResourceId : getDataFieldsById;
        req.push(
          getFields(id).then((res) => {
            fieldList.value = res;
            setHeaders(res);
            setFields(res);
          }).catch(() => {
            fieldList.value = [];
          }),
          getParams()
        );
        Promise.all(req).then(() => {
          emit("refreshData");
        });
      } else {
        fieldList.value = [];
        paramList.value = [];
        screenEditStore.getCurConfigComponent.chart.data.fields = {};
      }
    }
    async function getParams() {
      var _a;
      const res = await getApiParamsList({
        apiId: (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.data.id,
        pageNum: 1,
        pageSize: 1e4
      });
      if (res.total > 0) {
        paramList.value = res.list;
        initParams(res.list);
      } else {
        paramList.value = [];
        screenEditStore.getCurConfigComponent.chart.data.params = void 0;
      }
    }
    function initParams(list) {
      var _a;
      const newParams = () => {
        const params = {};
        const paramsValue = {};
        list.forEach((item) => {
          params[item.name] = {
            type: ParamType.CONSTANT,
            value: item.defaultValue
          };
          if (item.defaultValue) {
            paramsValue[item.name] = item.defaultValue;
          }
        });
        screenEditStore.getCurConfigComponent.chart.data.params = params;
        screenEditStore.getCurConfigComponent.chart.data.paramsValue = paramsValue;
      };
      if (!((_a = screenEditStore.getCurConfigComponent.chart.data) == null ? void 0 : _a.params)) {
        newParams();
        return;
      }
      let isChange = false;
      for (const item of list) {
        if (!screenEditStore.getCurConfigComponent.chart.data.params[item.name]) {
          isChange = true;
          break;
        }
      }
      for (const item of Object.keys(screenEditStore.getCurConfigComponent.chart.data.params)) {
        if (!list.some((i) => i.name === item)) {
          isChange = true;
          break;
        }
      }
      if (isChange) {
        newParams();
      }
    }
    function setHeaders(list) {
      const headers = {};
      list.forEach((item) => {
        if (item.colName) {
          headers[item.colName] = {
            colName: item.colName,
            rename: item.rename,
            dataType: item.dataType
          };
        }
      });
      screenEditStore.getCurConfigComponent.chart.data.headers = headers;
    }
    function setFields(list) {
      if (!screenEditStore.getCurConfigComponent.chart.data.fields) {
        screenEditStore.getCurConfigComponent.chart.data.fields = {};
        return;
      }
      const keys = Object.keys(screenEditStore.getCurConfigComponent.chart.data.fields);
      for (const key of keys) {
        const fields = screenEditStore.getCurConfigComponent.chart.data.fields[key];
        for (let i = 0; i < fields.length; i++) {
          const field = fields[i];
          const item = list.find((item2) => item2.colName === field.colName);
          if (item) {
            field.rename = item.rename;
            field.dataType = item.dataType;
          } else {
            fields.splice(i--, 1);
          }
        }
      }
    }
    function renameField2(field) {
      var _a;
      if ((_a = screenEditStore.getCurConfigComponent.chart.data) == null ? void 0 : _a.headers) {
        const col = screenEditStore.getCurConfigComponent.chart.data.headers[field.colName];
        if (col) {
          col.rename = field.rename;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScrollContainer), null, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls))
          }, [
            createElementVNode("div", _hoisted_1$1, [
              _cache[3] || (_cache[3] = createTextVNode(" 数据类型 ")),
              createVNode(unref(RadioGroup), {
                value: unref(screenEditStore).getCurConfigComponent.chart.data.type,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.type = $event),
                options: dataTypes,
                "option-type": "button",
                "button-style": "solid",
                size: "small"
              }, null, 8, ["value"])
            ]),
            createVNode(unref(Divider), { style: { "margin": "0" } }),
            unref(screenEditStore).getCurConfigComponent.chart.data.type === 0 ? renderSlot(_ctx.$slots, "static-data", { key: 0 }, void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createElementVNode("div", _hoisted_2$1, [
                createVNode(unref(Tooltip), {
                  title: "点击右侧输入框切换数据源",
                  placement: "left"
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [
                    createTextVNode(" 数据来源")
                  ])),
                  _: 1
                }),
                createVNode(DataSelect, {
                  "select-data": __props.selectData,
                  "data-id": unref(screenEditStore).getCurConfigComponent.chart.data.id,
                  "data-name": unref(screenEditStore).getCurConfigComponent.chart.data.name,
                  "is-resource": unref(screenEditStore).getCurConfigComponent.chart.isResource,
                  "screen-id": unref(screenEditStore).getId,
                  onDataChange: dataChange,
                  onDataRefresh: dataRefresh
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "data-select", {}, void 0, true)
                  ]),
                  _: 3
                }, 8, ["select-data", "data-id", "data-name", "is-resource", "screen-id"])
              ]),
              createElementVNode("div", _hoisted_3, [
                createVNode(unref(Tooltip), {
                  title: "接口允许返回数据的最大条数",
                  placement: "left"
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode(" 数据限制")
                  ])),
                  _: 1
                }),
                createVNode(unref(ScreenInput), {
                  value: unref(screenEditStore).getCurConfigComponent.chart.data.limit,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurConfigComponent.chart.data.limit = $event),
                  max: unref(screenEditStore).getCurConfigComponent.chart.data.maxLimit <= 0 ? Infinity : unref(screenEditStore).getCurConfigComponent.chart.data.maxLimit,
                  min: 1,
                  suffix: "条"
                }, null, 8, ["value", "max"])
              ]),
              paramList.value && paramList.value.length > 0 ? (openBlock(), createBlock(ConfigGroup, {
                key: 0,
                title: "参数设置"
              }, {
                default: withCtx(() => [
                  createVNode(DataParamsConfig, {
                    params: paramList.value,
                    onParamChange: _cache[2] || (_cache[2] = () => {
                      emit("refreshData");
                    })
                  }, null, 8, ["params"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              fieldList.value && fieldList.value.length > 0 ? (openBlock(), createBlock(ConfigGroup, {
                key: 1,
                title: "数据设置",
                "allow-collapse": false
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_4, [
                    _cache[6] || (_cache[6] = createElementVNode("div", null, "源数据", -1)),
                    createVNode(unref(Icon), { icon: "ant-design:double-right-outlined" }),
                    _cache[7] || (_cache[7] = createElementVNode("div", null, "目标数据", -1))
                  ]),
                  createElementVNode("div", _hoisted_5, [
                    createVNode(FieldConfig, { "field-list": fieldList.value }, null, 8, ["field-list"]),
                    _cache[8] || (_cache[8] = createElementVNode("div", { class: "divide-line" }, null, -1)),
                    createElementVNode("div", _hoisted_6, [
                      renderSlot(_ctx.$slots, "target-data", {}, void 0, true)
                    ])
                  ])
                ]),
                _: 3
              })) : createCommentVNode("", true)
            ], 64)),
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2)
        ]),
        _: 3
      });
    };
  }
});
const DataConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b903d006"]]);
const _hoisted_1 = ["onMouseenter"];
const _hoisted_2 = { class: "title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DragInData",
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    maxCount: {
      type: Number,
      default: 9999
    },
    height: {
      type: Number,
      default: 0
    }
  },
  emits: ["dataChange"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "4bae6fc2": bgColor.value
    }));
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("drag-in-data");
    const fieldList = ref(props.fields);
    const enterField = ref(-1);
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    watch(
      () => props.fields,
      () => {
        fieldList.value = props.fields;
      }
    );
    const handleDrop = (e) => {
      var _a;
      const strField = (_a = e.dataTransfer) == null ? void 0 : _a.getData(FIELD_DATA_DRAG);
      if (!strField) return;
      const newField = JSON.parse(strField);
      const exist = fieldList.value.some((item) => item.colName === newField.colName && item.rename === newField.rename);
      if (exist) return;
      if (fieldList.value.length >= props.maxCount) {
        fieldList.value.shift();
      }
      fieldList.value.push(pick(newField, ["colName", "rename", "dataType"]));
      emit("dataChange", fieldList.value);
    };
    function enterHandle(index) {
      enterField.value = index;
    }
    function leaveHandle() {
      enterField.value = -1;
    }
    function renameField2(field) {
      const index = fieldList.value.findIndex((item) => item.colName === field.colName);
      if (index !== -1) {
        fieldList.value[index].rename = field.rename;
        emit("dataChange", fieldList.value);
      }
    }
    function onMoveCallback() {
      emit("dataChange", fieldList.value);
    }
    onMounted(() => {
      screenEvent.on(ScreenEventEnum.DATA_RENAME, renameField2);
    });
    onUnmounted(() => {
      screenEvent.off(ScreenEventEnum.DATA_RENAME, renameField2);
    });
    function deleteField(index) {
      fieldList.value.splice(index, 1);
      emit("dataChange", fieldList.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        style: normalizeStyle(__props.height > 0 ? { height: `${__props.height}px` } : {}),
        onDrop: handleDrop
      }, [
        fieldList.value.length === 0 ? (openBlock(), createBlock(unref(Empty), {
          key: 0,
          class: "empty",
          description: "拖动数据到此处",
          image: unref(Empty).PRESENTED_IMAGE_SIMPLE
        }, null, 8, ["image"])) : (openBlock(), createBlock(unref(ScrollContainer), { key: 1 }, {
          default: withCtx(() => [
            createVNode(unref(draggable), {
              "item-key": "id",
              modelValue: fieldList.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fieldList.value = $event),
              animation: "300",
              "ghost-class": "ghost",
              class: "drag-data",
              onChange: onMoveCallback
            }, {
              item: withCtx(({ index, element }) => [
                createElementVNode("div", {
                  class: "field-block",
                  onMouseenter: ($event) => enterHandle(index),
                  onMouseleave: leaveHandle
                }, [
                  createVNode(unref(Icon), {
                    class: "icon",
                    icon: unref(getFieldIcon)(element.dataType)
                  }, null, 8, ["icon"]),
                  createElementVNode("div", _hoisted_2, toDisplayString(element.rename ?? element.colName), 1),
                  enterField.value === index ? (openBlock(), createBlock(unref(Icon), {
                    key: 0,
                    class: "icon",
                    icon: "ant-design:delete-outlined",
                    onClick: ($event) => deleteField(index)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ], 40, _hoisted_1)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }))
      ], 38);
    };
  }
});
const DragInData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c9719241"]]);
export {
  DataConfig as D,
  DragInData as a
};
