import { defineComponent, ref, watch, createElementBlock, openBlock, normalizeClass, unref, Fragment, renderList, createVNode, createElementVNode, toDisplayString, onMounted, withCtx, reactive, createBlock, createSlots, createCommentVNode, withModifiers, resolveComponent, createTextVNode } from "vue";
import { Switch, InputGroup, TreeSelect, List, Dropdown, Input, Menu, RadioGroup, RadioButton, Empty } from "ant-design-vue";
import { ScrollContainer } from "@mfish/core/components/Container";
import { useDesign } from "@mfish/core/hooks";
import { C as ConfigGroup } from "./ConfigGroup.js";
import "@vueuse/core";
import { Icon } from "@mfish/core/components/Icon";
import "lodash-es";
import { C as ChartEventEnum, u as useScreenEditStore, b as ComponentsEnum, g as getEventName, _ as _export_sfc, c as getScreenFolderTree, d as getMfScreenList, P as PageJumpType, e as PageType, f as ScreenInput } from "./index2.js";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Modal";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import InputSearch from "@mfish/core/components/InputSearch";
import { imageUrl, getLocalFileUrl } from "@mfish/core/utils/file/FileUtils";
import { usePagination } from "@mfish/core/utils/PageUtils";
const _hoisted_1$3 = ["onClick"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EventListen",
  setup(__props) {
    const { prefixCls } = useDesign("event-listen");
    const events = ref({
      [ChartEventEnum.CHART_CLICK]: false,
      [ChartEventEnum.CHART_DBLCLICK]: false,
      [ChartEventEnum.CHART_MOUSE_ENTER]: false,
      [ChartEventEnum.CHART_MOUSE_LEAVE]: false
    });
    const screenEditStore = useScreenEditStore();
    watch(
      () => screenEditStore.getCurConfigComponent.chart.id,
      (val) => {
        var _a, _b;
        (_a = ComponentsEnum[screenEditStore.getCurConfigComponent.chart.type].customEvents) == null ? void 0 : _a.forEach((item) => {
          events.value[item.value] = false;
        });
        if (val) {
          if ((_b = screenEditStore.getCurConfigComponent.chart.events) == null ? void 0 : _b.emits) {
            screenEditStore.getCurConfigComponent.chart.events.emits.forEach((item) => {
              events.value[item] = true;
            });
          }
        } else {
          Object.keys(events.value).forEach((item) => {
            events.value[item] = false;
          });
        }
      },
      { immediate: true }
    );
    function changeEvent(item) {
      events.value[item] = !events.value[item];
      setEvent();
    }
    function setEvent() {
      if (!screenEditStore.getCurConfigComponent.chart.events.emits) {
        screenEditStore.getCurConfigComponent.chart.events = { emits: [] };
      }
      screenEditStore.getCurConfigComponent.chart.events.emits = Object.keys(unref(events)).filter((item) => events.value[item]).map((item) => item);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(events.value), (item) => {
          var _a;
          return openBlock(), createElementBlock("div", {
            class: "check-item",
            key: item
          }, [
            createVNode(unref(Switch), {
              size: "small",
              checked: events.value[item],
              "onUpdate:checked": ($event) => events.value[item] = $event,
              "checked-children": "开",
              "un-checked-children": "关",
              onChange: setEvent
            }, null, 8, ["checked", "onUpdate:checked"]),
            createElementVNode("div", {
              class: normalizeClass(events.value[item] ? "checked" : ""),
              onClick: ($event) => changeEvent(item)
            }, toDisplayString(unref(getEventName)(item, (_a = unref(screenEditStore).getCurConfigComponent) == null ? void 0 : _a.chart.type)), 11, _hoisted_1$3)
          ]);
        }), 128))
      ], 2);
    };
  }
});
const EventListen = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a24fafed"]]);
const _hoisted_1$2 = {
  target: "_blank",
  onClick: () => {
  }
};
const _hoisted_2$1 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PageList",
  emits: ["selectScreen"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const treeValue = ref();
    const treeData = ref();
    const searchValue = ref();
    const { prefixCls } = useDesign("page-list");
    const data = ref([]);
    const { paginationProp, getPageNum, setCurrentPage, getPageSize, setTotal } = usePagination(onSearch, {
      showSizeChanger: false,
      showQuickJumper: false
    });
    onMounted(() => {
      getScreenFolderTree().then((res) => {
        treeData.value = [{ name: "我的大屏", children: res, id: "" }];
      });
      onSearch(1);
    });
    function onSearch(currentPage) {
      if (currentPage) {
        setCurrentPage(currentPage);
      }
      getMfScreenList({
        folderId: treeValue.value,
        name: searchValue.value,
        pageNum: currentPage ?? getPageNum(),
        pageSize: getPageSize()
      }).then((res) => {
        data.value = res.list;
        setTotal(res.total);
      });
    }
    function selectScreen(item) {
      emit("selectScreen", item);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(unref(InputGroup), { compact: "" }, {
          default: withCtx(() => [
            createVNode(unref(TreeSelect), {
              value: treeValue.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => treeValue.value = $event),
              "tree-data": treeData.value,
              style: { "width": "35%", "border-right": "0" },
              "allow-clear": "",
              placeholder: "选择大屏目录",
              "dropdown-style": { minWidth: "300px", maxHeight: "400px", overflow: "auto" },
              "field-names": {
                children: "children",
                label: "name",
                value: "id"
              },
              "tree-node-filter-prop": "name",
              "show-search": "",
              onChange: _cache[1] || (_cache[1] = ($event) => onSearch(1))
            }, null, 8, ["value", "tree-data"]),
            createVNode(unref(InputSearch), {
              visible: true,
              value: searchValue.value,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => searchValue.value = $event),
              style: { "width": "65%", "height": "32px" },
              "allow-clear": "",
              placeholder: "输入大屏名称",
              onSearch: _cache[3] || (_cache[3] = ($event) => onSearch(1))
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(unref(ScrollContainer), {
          class: "mt-2",
          style: { "height": "45vh" }
        }, {
          default: withCtx(() => [
            createVNode(unref(List), {
              "item-layout": "horizontal",
              "data-source": data.value,
              pagination: unref(paginationProp)
            }, {
              renderItem: withCtx(({ item }) => [
                createVNode(unref(List).Item, {
                  class: "screen_item",
                  onClick: ($event) => selectScreen(item)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(List).Item.Meta, {
                      description: item.remark
                    }, {
                      title: withCtx(() => [
                        createElementVNode("a", _hoisted_1$2, toDisplayString(item.name), 1)
                      ]),
                      avatar: withCtx(() => [
                        createElementVNode("img", {
                          alt: "screen",
                          src: unref(imageUrl)(unref(getLocalFileUrl)(item.thumbnail)),
                          class: "screen_img"
                        }, null, 8, _hoisted_2$1)
                      ]),
                      _: 2
                    }, 1032, ["description"])
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 1
            }, 8, ["data-source", "pagination"])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const PageList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-efbe8537"]]);
const _hoisted_1$1 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PageSelect",
  props: { page: { type: Object } },
  emits: ["ok"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { prefixCls } = useDesign("page-select");
    const isShow = ref(false);
    const screenEditStore = useScreenEditStore();
    const isEnter = ref(false);
    const screenPage = reactive({
      name: void 0,
      value: void 0,
      img: void 0,
      width: void 0,
      height: void 0
    });
    watch(
      () => {
        var _a;
        return (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.id;
      },
      (val) => {
        var _a, _b, _c;
        isShow.value = false;
        if (val) {
          screenPage.value = (_a = props.page) == null ? void 0 : _a.value;
          screenPage.name = (_b = props.page) == null ? void 0 : _b.name;
          screenPage.img = (_c = props.page) == null ? void 0 : _c.img;
        }
      },
      { immediate: true }
    );
    const visibleChange = (show) => {
      isShow.value = show;
    };
    function clearData() {
      screenPage.value = void 0;
      screenPage.name = void 0;
      screenPage.img = void 0;
      screenPage.width = void 0;
      screenPage.height = void 0;
      emit("ok", screenPage);
    }
    function selectScreen(item) {
      isShow.value = false;
      screenPage.value = (item == null ? void 0 : item.id) ?? void 0;
      screenPage.name = (item == null ? void 0 : item.name) ?? void 0;
      screenPage.img = (item == null ? void 0 : item.thumbnail) ?? void 0;
      if (item.canvasConfig) {
        const config = JSON.parse(item.canvasConfig);
        screenPage.width = config == null ? void 0 : config.width;
        screenPage.height = config == null ? void 0 : config.height;
      }
      emit("ok", screenPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        trigger: ["click"],
        open: isShow.value,
        onOpenChange: visibleChange,
        placement: "bottom",
        arrow: { pointAtCenter: true },
        "overlay-style": { width: "400px" }
      }, {
        overlay: withCtx(() => [
          createVNode(unref(Menu), null, {
            default: withCtx(() => [
              createVNode(unref(Menu).Item, {
                disabled: "",
                style: { "padding": "0", "cursor": "default" }
              }, {
                default: withCtx(() => [
                  createVNode(PageList, { onSelectScreen: selectScreen })
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
              placeholder: "请选择页面",
              value: screenPage.name,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => screenPage.name = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => isShow.value = true)
            }, createSlots({
              suffix: withCtx(() => [
                screenPage.value && isEnter.value ? (openBlock(), createBlock(unref(Icon), {
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
              _: 2
            }, [
              screenPage.img ? {
                name: "prefix",
                fn: withCtx(() => [
                  createElementVNode("img", {
                    alt: "screen",
                    src: unref(imageUrl)(unref(getLocalFileUrl)(screenPage.img)),
                    class: "screen_img"
                  }, null, 8, _hoisted_1$1)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["class", "value"])
          ], 34)
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const PageSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6fc78000"]]);
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = {
  key: 2,
  class: "title"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "PageJumpConfig" },
  __name: "index",
  setup(__props) {
    const screenEditStore = useScreenEditStore();
    const { prefixCls } = useDesign("page-jump-config");
    const jumpTypes = [PageJumpType.CurPage, PageJumpType.NewTab, PageJumpType.Dialog];
    const jumpType = ref();
    const pageTypes = [PageType.System, PageType.External];
    const pageType = ref();
    const page = ref();
    const pageUrl = ref();
    const width = ref();
    const height = ref();
    watch(
      () => {
        var _a;
        return (_a = screenEditStore.getCurConfigComponent) == null ? void 0 : _a.chart.id;
      },
      (val) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
        if (!val) return;
        if ((_a = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _a.type) {
          jumpType.value = (_b = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _b.type;
        } else {
          jumpType.value = PageJumpType.CurPage;
          jumpTypeChange();
        }
        if ((_c = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _c.pageType) {
          pageType.value = (_d = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _d.pageType;
        } else {
          pageType.value = PageType.System;
          pageTypeChange();
        }
        if (pageType.value === PageType.System) {
          page.value = (_e = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _e.page;
        } else {
          pageUrl.value = (_g = (_f = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _f.page) == null ? void 0 : _g.value;
        }
        width.value = (_i = (_h = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _h.page) == null ? void 0 : _i.width;
        height.value = (_k = (_j = screenEditStore.getCurConfigComponent.chart.jump) == null ? void 0 : _j.page) == null ? void 0 : _k.height;
      },
      { immediate: true }
    );
    function jumpCheck(checked) {
      var _a;
      screenEditStore.getCurConfigComponent.chart.jump = {
        ...screenEditStore.getCurConfigComponent.chart.jump,
        open: checked
      };
      if (checked) {
        let emits = (_a = screenEditStore.getCurConfigComponent.chart.events) == null ? void 0 : _a.emits;
        if (!emits) {
          emits = [];
        }
        const index2 = emits.indexOf(ChartEventEnum.CHART_CLICK);
        if (index2 === -1) {
          emits.push(ChartEventEnum.CHART_CLICK);
          screenEditStore.getCurConfigComponent.chart.events = {
            ...screenEditStore.getCurConfigComponent.chart.events,
            emits
          };
        }
      }
    }
    function jumpTypeChange() {
      screenEditStore.getCurConfigComponent.chart.jump = {
        ...screenEditStore.getCurConfigComponent.chart.jump,
        type: jumpType.value
      };
    }
    function pageTypeChange() {
      screenEditStore.getCurConfigComponent.chart.jump = {
        ...screenEditStore.getCurConfigComponent.chart.jump,
        pageType: pageType.value
      };
      if (pageType.value === PageType.System) {
        pageSelect(page.value);
      } else {
        pageUrlChange();
      }
    }
    function pageSelect(item) {
      screenEditStore.getCurConfigComponent.chart.jump = {
        ...screenEditStore.getCurConfigComponent.chart.jump,
        page: item
      };
      width.value = item == null ? void 0 : item.width;
      height.value = item == null ? void 0 : item.height;
    }
    function pageUrlChange() {
      screenEditStore.getCurConfigComponent.chart.jump = {
        ...screenEditStore.getCurConfigComponent.chart.jump,
        page: { value: pageUrl.value }
      };
    }
    function wChange() {
      screenEditStore.getCurConfigComponent.chart.jump.page = {
        ...screenEditStore.getCurConfigComponent.chart.jump.page,
        width: width.value
      };
    }
    function hChange() {
      screenEditStore.getCurConfigComponent.chart.jump.page = {
        ...screenEditStore.getCurConfigComponent.chart.jump.page,
        height: height.value
      };
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(ConfigGroup, {
          title: "页面跳转",
          "allow-check": true,
          tooltip: "组件开启页面跳转功能，开启后点击组件页面跳到配置页面，配置页面不支持跳转，请在预览界面查看效果",
          "title-check": (_a = unref(screenEditStore).getCurConfigComponent.chart.jump) == null ? void 0 : _a.open,
          onChecked: jumpCheck
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              _cache[5] || (_cache[5] = createTextVNode(" 跳转方式 ")),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: jumpType.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => jumpType.value = $event),
                onChange: jumpTypeChange
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(jumpTypes, (item, index2) => {
                    return createVNode(unref(RadioButton), {
                      key: index2,
                      value: item
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            createElementVNode("div", _hoisted_2, [
              _cache[6] || (_cache[6] = createTextVNode(" 跳转页面 ")),
              createVNode(unref(RadioGroup), {
                size: "small",
                value: pageType.value,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => pageType.value = $event),
                onChange: pageTypeChange
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(pageTypes, (item, index2) => {
                    return createVNode(unref(RadioButton), {
                      key: index2,
                      value: item
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            pageType.value === unref(PageType).System ? (openBlock(), createBlock(PageSelect, {
              key: 0,
              page: page.value,
              onOk: pageSelect
            }, null, 8, ["page"])) : (openBlock(), createBlock(_component_AInput, {
              key: 1,
              placeholder: "请输入外部链接，例如https://www.bing.com",
              value: pageUrl.value,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => pageUrl.value = $event),
              onChange: pageUrlChange
            }, null, 8, ["value"])),
            jumpType.value === unref(PageJumpType).Dialog ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(unref(ScreenInput), {
                prefix: "W",
                placeholder: "宽度",
                value: width.value,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => width.value = $event),
                min: 0,
                max: 99999,
                maxlength: 5,
                onChange: wChange
              }, null, 8, ["value"]),
              createVNode(unref(ScreenInput), {
                prefix: "H",
                placeholder: "高度",
                value: height.value,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => height.value = $event),
                min: 0,
                max: 99999,
                maxlength: 5,
                onChange: hChange
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title-check"])
      ], 2);
    };
  }
});
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1a4eda71"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "AdvanceConfig" },
  __name: "index",
  setup(__props) {
    const { prefixCls } = useDesign("advance-config");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScrollContainer), null, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls))
          }, [
            createVNode(ConfigGroup, { title: "事件开启" }, {
              default: withCtx(() => [
                createVNode(EventListen)
              ]),
              _: 1
            }),
            createVNode(Index)
          ], 2),
          createVNode(unref(Empty), {
            description: "进阶配置开发中......",
            image: unref(Empty).PRESENTED_IMAGE_SIMPLE
          }, null, 8, ["image"])
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcbfd2e1"]]);
export {
  index as default
};
