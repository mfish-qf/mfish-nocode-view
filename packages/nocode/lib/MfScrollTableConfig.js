import { defineComponent, ref, computed, watch, resolveComponent, createBlock, openBlock, normalizeClass, unref, withCtx, createVNode, createCommentVNode, createElementVNode, createTextVNode, createElementBlock, Fragment, renderList, toDisplayString } from "vue";
import { S as StyleConfig } from "./StyleConfig.js";
import { u as useScreenEditStore, k as MfishColorPicker, _ as _export_sfc } from "./index2.js";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { useDesign } from "@mfish/core/hooks";
import { Slider, RadioGroup, RadioButton, Checkbox } from "ant-design-vue";
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
import "@vueuse/core";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import { C as ConfigGroup } from "./ConfigGroup.js";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { style: { "width": "90px", "font-weight": "500" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MfScrollTableConfig",
  setup(__props) {
    const { prefixCls } = useDesign("scroll-table-config");
    const headerBGC = ref();
    const oddRowBGC = ref();
    const evenRowBGC = ref();
    const screenEditStore = useScreenEditStore();
    const headerHeight = ref(35);
    const rowNum = ref(5);
    const waitTime = ref(1.5);
    const maxHeight = computed(() => {
      return Math.round(screenEditStore.getCurConfigComponent.chartContain.dropInfo.height / 2);
    });
    const indexHeader = ref("");
    const hoverPause = ref(true);
    const carousel = ref("single");
    const carousels = [
      { title: "单条", value: "single" },
      { title: "整页", value: "page" }
    ];
    const align = ref([]);
    const aligns = [
      { title: "左", value: "left" },
      { title: "中", value: "center" },
      { title: "右", value: "right" }
    ];
    const columns = computed(() => {
      var _a;
      let cols;
      if (screenEditStore.getCurConfigComponent.chart.data.dataSet.data && screenEditStore.getCurConfigComponent.chart.data.dataSet.data.length > 0) {
        cols = screenEditStore.getCurConfigComponent.chart.data.dataSet.data[0].length;
      } else if (screenEditStore.getCurConfigComponent.chart.data.dataSet.header && screenEditStore.getCurConfigComponent.chart.data.dataSet.header.length > 0) {
        cols = screenEditStore.getCurConfigComponent.chart.data.dataSet.header.length;
      }
      if ((_a = screenEditStore.getCurConfigComponent.chart.options) == null ? void 0 : _a.index) {
        cols = cols + 1;
      }
      return cols;
    });
    const columnWidth = ref([]);
    watch(
      () => screenEditStore.getCurConfigComponent,
      (val) => {
        if (!val) return;
        initValue();
      },
      { immediate: true }
    );
    function initValue() {
      headerBGC.value = screenEditStore.getCurConfigComponent.chart.options.headerBGC;
      oddRowBGC.value = screenEditStore.getCurConfigComponent.chart.options.oddRowBGC;
      evenRowBGC.value = screenEditStore.getCurConfigComponent.chart.options.evenRowBGC;
      if (screenEditStore.getCurConfigComponent.chart.options.headerHeight !== void 0) {
        headerHeight.value = screenEditStore.getCurConfigComponent.chart.options.headerHeight;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.waitTime !== void 0) {
        waitTime.value = screenEditStore.getCurConfigComponent.chart.options.waitTime / 1e3;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.rowNum !== void 0) {
        rowNum.value = screenEditStore.getCurConfigComponent.chart.options.rowNum;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.indexHeader !== void 0) {
        indexHeader.value = screenEditStore.getCurConfigComponent.chart.options.indexHeader;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.hoverPause !== void 0) {
        hoverPause.value = screenEditStore.getCurConfigComponent.chart.options.hoverPause;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.carousel !== void 0) {
        carousel.value = screenEditStore.getCurConfigComponent.chart.options.carousel;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.columnWidth === void 0) {
        for (let i = 0; i < columns.value; i++) {
          columnWidth.value.push(0);
        }
      } else {
        const widths = [];
        for (let i = 0; i < columns.value; i++) {
          if (screenEditStore.getCurConfigComponent.chart.options.columnWidth[i]) {
            widths.push(screenEditStore.getCurConfigComponent.chart.options.columnWidth[i]);
          } else {
            widths.push(0);
          }
        }
        columnWidth.value = widths;
      }
      if (screenEditStore.getCurConfigComponent.chart.options.align === void 0) {
        for (let i = 0; i < columns.value; i++) {
          align.value.push("center");
        }
      } else {
        const aligns2 = [];
        for (let i = 0; i < columns.value; i++) {
          if (screenEditStore.getCurConfigComponent.chart.options.align[i]) {
            aligns2.push(screenEditStore.getCurConfigComponent.chart.options.align[i]);
          } else {
            aligns2.push("center");
          }
        }
        align.value = aligns2;
      }
    }
    function confirmHeaderBGC(e) {
      changeHeaderBGC(e);
      headerBGC.value = e;
    }
    function changeHeaderBGC(e) {
      screenEditStore.getCurConfigComponent.chart.options.headerBGC = e;
    }
    function rowNumChange() {
      screenEditStore.getCurConfigComponent.chart.options.rowNum = rowNum.value;
    }
    function confirmOddRowBGC(e) {
      changeOddRowBGC(e);
      oddRowBGC.value = e;
    }
    function changeOddRowBGC(e) {
      screenEditStore.getCurConfigComponent.chart.options.oddRowBGC = e;
    }
    function confirmEvenRowBGC(e) {
      changeEvenRowBGC(e);
      evenRowBGC.value = e;
    }
    function changeEvenRowBGC(e) {
      screenEditStore.getCurConfigComponent.chart.options.evenRowBGC = e;
    }
    function headerCheck(checked) {
      screenEditStore.getCurConfigComponent.chart.options.showHeader = checked;
    }
    function headerHeightChange() {
      screenEditStore.getCurConfigComponent.chart.options.headerHeight = headerHeight.value;
    }
    function waitTimeChange() {
      screenEditStore.getCurConfigComponent.chart.options.waitTime = waitTime.value * 1e3;
    }
    function headerIndexCheck(checked) {
      screenEditStore.getCurConfigComponent.chart.options.index = checked;
    }
    function indexHeaderChange() {
      screenEditStore.getCurConfigComponent.chart.options.indexHeader = indexHeader.value;
    }
    function hoverPauseChange() {
      screenEditStore.getCurConfigComponent.chart.options.hoverPause = hoverPause.value;
    }
    function carouselChange() {
      screenEditStore.getCurConfigComponent.chart.options.carousel = carousel.value;
    }
    function alignChange() {
      screenEditStore.getCurConfigComponent.chart.options.align = align.value;
    }
    function widthChange() {
      screenEditStore.getCurConfigComponent.chart.options.columnWidth = columnWidth.value;
    }
    return (_ctx, _cache) => {
      const _component_AInput = resolveComponent("AInput");
      return openBlock(), createBlock(StyleConfig, {
        class: normalizeClass(unref(prefixCls))
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(ConfigGroup, {
              title: "表头设置",
              "allow-check": true,
              "title-check": (_a = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a.showHeader,
              onChecked: headerCheck
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  _cache[8] || (_cache[8] = createElementVNode("div", { class: "title" }, " 背景颜色", -1)),
                  createVNode(unref(MfishColorPicker), {
                    placeholder: "设置背景颜色，格式#FFFFFF",
                    value: headerBGC.value,
                    onConfirmChange: confirmHeaderBGC,
                    onInputChange: changeHeaderBGC
                  }, null, 8, ["value"]),
                  createElementVNode("div", _hoisted_1, [
                    _cache[6] || (_cache[6] = createTextVNode(" 表头高度 ")),
                    createVNode(unref(Slider), {
                      value: headerHeight.value,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => headerHeight.value = $event),
                      min: 0,
                      max: maxHeight.value,
                      onChange: headerHeightChange
                    }, null, 8, ["value", "max"])
                  ]),
                  createVNode(ConfigGroup, {
                    title: "行号设置",
                    "allow-check": true,
                    "title-check": (_a2 = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a2.index,
                    onChecked: headerIndexCheck
                  }, {
                    default: withCtx(() => [
                      _cache[7] || (_cache[7] = createElementVNode("div", { class: "title" }, " 行号表头名称", -1)),
                      createVNode(_component_AInput, {
                        value: indexHeader.value,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => indexHeader.value = $event),
                        onChange: indexHeaderChange
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["title-check"])
                ];
              }),
              _: 1
            }, 8, ["title-check"]),
            createVNode(ConfigGroup, { title: "表体设置" }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2, [
                  _cache[9] || (_cache[9] = createTextVNode(" 表行数（行） ")),
                  createVNode(unref(Slider), {
                    value: rowNum.value,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => rowNum.value = $event),
                    min: 1,
                    max: 50,
                    onChange: rowNumChange
                  }, null, 8, ["value"])
                ]),
                _cache[13] || (_cache[13] = createElementVNode("div", { class: "title" }, " 奇数行颜色", -1)),
                createVNode(unref(MfishColorPicker), {
                  placeholder: "设置奇数行颜色，格式#FFFFFF",
                  value: oddRowBGC.value,
                  onConfirmChange: confirmOddRowBGC,
                  onInputChange: changeOddRowBGC
                }, null, 8, ["value"]),
                _cache[14] || (_cache[14] = createElementVNode("div", { class: "title" }, " 偶数行颜色", -1)),
                createVNode(unref(MfishColorPicker), {
                  placeholder: "设置偶数行颜色，格式#FFFFFF",
                  value: evenRowBGC.value,
                  onConfirmChange: confirmEvenRowBGC,
                  onInputChange: changeEvenRowBGC
                }, null, 8, ["value"]),
                createElementVNode("div", _hoisted_3, [
                  _cache[10] || (_cache[10] = createTextVNode(" 轮播方式 ")),
                  createElementVNode("div", null, [
                    createVNode(unref(RadioGroup), {
                      size: "small",
                      value: carousel.value,
                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => carousel.value = $event),
                      onChange: carouselChange
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createElementBlock(Fragment, null, renderList(carousels, (item) => {
                          return createVNode(unref(RadioButton), {
                            key: item.value,
                            value: item.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ])
                ]),
                createElementVNode("div", _hoisted_4, [
                  _cache[11] || (_cache[11] = createTextVNode(" 轮播间隔（秒） ")),
                  createVNode(unref(Slider), {
                    value: waitTime.value,
                    "onUpdate:value": _cache[4] || (_cache[4] = ($event) => waitTime.value = $event),
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    onChange: waitTimeChange
                  }, null, 8, ["value"])
                ]),
                createVNode(unref(Checkbox), {
                  checked: hoverPause.value,
                  "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => hoverPause.value = $event),
                  onChange: hoverPauseChange
                }, {
                  default: withCtx(() => _cache[12] || (_cache[12] = [
                    createTextVNode(" 悬浮暂停轮播")
                  ])),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            }),
            columns.value > 0 ? (openBlock(), createBlock(ConfigGroup, {
              key: 0,
              title: "列配置"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (index) => {
                  var _a2;
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "title"
                  }, [
                    createTextVNode(toDisplayString(((_a2 = unref(screenEditStore).getCurConfigComponent.chart.options) == null ? void 0 : _a2.index) && index === 1 ? `行号` : `${index}列`) + " 宽度 ", 1),
                    createVNode(unref(Slider), {
                      value: columnWidth.value[index - 1],
                      "onUpdate:value": ($event) => columnWidth.value[index - 1] = $event,
                      min: 0,
                      max: 500,
                      onChange: widthChange
                    }, null, 8, ["value", "onUpdate:value"]),
                    createElementVNode("span", _hoisted_5, [
                      createVNode(unref(RadioGroup), {
                        size: "small",
                        value: align.value[index - 1],
                        "onUpdate:value": ($event) => align.value[index - 1] = $event,
                        onChange: alignChange
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList(aligns, (item) => {
                            return createVNode(unref(RadioButton), {
                              key: item.value,
                              value: item.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"])
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const MfScrollTableConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-031127ec"]]);
export {
  MfScrollTableConfig as default
};
