import { defineComponent, ref, onMounted, watch, createBlock, openBlock, unref, withCtx, createElementVNode, normalizeClass, createVNode, renderSlot, createElementBlock, createCommentVNode, createTextVNode } from "vue";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, f as ScreenInput, k as MfishColorPicker, D as _sfc_main$1, _ as _export_sfc } from "./index.js";
import { Slider } from "ant-design-vue";
import { C as ConfigGroup } from "./ConfigGroup.js";
import { ScrollContainer } from "@mfish/core/components/Container";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/components/Icon";
import { isNumber } from "@mfish/core/utils/Is";
const _hoisted_1 = { class: "position" };
const _hoisted_2 = { class: "position" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = {
  key: 0,
  class: "position"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StyleConfig",
  setup(__props) {
    const { prefixCls } = useDesign("style-config");
    const screenEditStore = useScreenEditStore();
    const opacity = ref(100);
    const background = ref();
    const borderColor = ref();
    const key = ref(0);
    onMounted(() => {
      initValue(screenEditStore.getCurComponent);
    });
    watch(
      () => screenEditStore.getCurComponent,
      (val) => {
        initValue(val);
        key.value++;
      }
    );
    function initValue(component) {
      if (!component) return;
      opacity.value = component.chartContain.opacity * 100;
      background.value = component.chartContain.background;
      borderColor.value = component.chartContain.border.color;
    }
    function xChange(e) {
      if (!e) {
        screenEditStore.getCurComponent.chartContain.dropInfo.x = 0;
      }
    }
    function yChange(e) {
      if (!e) {
        screenEditStore.getCurComponent.chartContain.dropInfo.y = 0;
      }
    }
    function rChange(e) {
      if (!e) {
        screenEditStore.getCurComponent.chartContain.dropInfo.rotate = 0;
      }
    }
    function wChange(e) {
      if (!e) {
        screenEditStore.getCurComponent.chartContain.dropInfo.width = 0;
      }
    }
    function hChange(e) {
      if (!e) {
        screenEditStore.getCurComponent.chartContain.dropInfo.height = 0;
      }
    }
    function oChange(e) {
      if (isNumber(e)) {
        screenEditStore.getCurComponent.chartContain.opacity = e / 100;
        opacity.value = e;
      } else {
        screenEditStore.getCurComponent.chartContain.opacity = 1;
        opacity.value = 100;
      }
    }
    function confirmColor(value) {
      changeColor(value);
      background.value = value;
    }
    function changeColor(value) {
      if (value) {
        screenEditStore.getCurComponent.chartContain.background = value;
      } else {
        screenEditStore.getCurComponent.chartContain.background = "";
      }
    }
    function confirmBorderColor(value) {
      changeBorderColor(value);
      borderColor.value = value;
    }
    function changeBorderColor(value) {
      if (value) {
        screenEditStore.getCurComponent.chartContain.border.color = value;
      } else {
        screenEditStore.getCurComponent.chartContain.border.color = void 0;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScrollContainer), null, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(prefixCls))
          }, [
            createVNode(ConfigGroup, { title: "通用配置" }, {
              default: withCtx(() => [
                _cache[10] || (_cache[10] = createElementVNode("div", { class: "title" }, "坐标信息", -1)),
                createElementVNode("div", _hoisted_1, [
                  createVNode(unref(ScreenInput), {
                    prefix: "X",
                    style: { "width": "108px" },
                    placeholder: "横坐标",
                    value: unref(screenEditStore).getCurComponent.chartContain.dropInfo.x,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(screenEditStore).getCurComponent.chartContain.dropInfo.x = $event),
                    step: 1,
                    min: 0,
                    max: unref(screenEditStore).getCanvasConfig.width - unref(screenEditStore).getCurComponent.chartContain.dropInfo.width,
                    maxlength: 5,
                    onChange: xChange
                  }, null, 8, ["value", "max"]),
                  createVNode(unref(ScreenInput), {
                    prefix: "Y",
                    style: { "width": "108px" },
                    placeholder: "纵坐标",
                    value: unref(screenEditStore).getCurComponent.chartContain.dropInfo.y,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(screenEditStore).getCurComponent.chartContain.dropInfo.y = $event),
                    step: 1,
                    min: 0,
                    max: unref(screenEditStore).getCanvasConfig.height - unref(screenEditStore).getCurComponent.chartContain.dropInfo.height,
                    maxlength: 5,
                    onChange: yChange
                  }, null, 8, ["value", "max"]),
                  createVNode(unref(ScreenInput), {
                    prefix: "R",
                    style: { "width": "80px" },
                    suffix: "°",
                    placeholder: "旋转角度",
                    value: unref(screenEditStore).getCurComponent.chartContain.dropInfo.rotate,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(screenEditStore).getCurComponent.chartContain.dropInfo.rotate = $event),
                    step: 1,
                    min: -360,
                    max: 360,
                    maxlength: 4,
                    onChange: rChange
                  }, null, 8, ["value"])
                ]),
                _cache[11] || (_cache[11] = createElementVNode("div", { class: "title" }, "组件大小", -1)),
                createElementVNode("div", _hoisted_2, [
                  createVNode(unref(ScreenInput), {
                    prefix: "W",
                    style: { "width": "108px" },
                    placeholder: "宽度",
                    value: unref(screenEditStore).getCurComponent.chartContain.dropInfo.width,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(screenEditStore).getCurComponent.chartContain.dropInfo.width = $event),
                    min: 0,
                    max: unref(screenEditStore).getCanvasConfig.width,
                    maxlength: 5,
                    onChange: wChange
                  }, null, 8, ["value", "max"]),
                  createVNode(unref(ScreenInput), {
                    prefix: "H",
                    style: { "width": "108px" },
                    placeholder: "高度",
                    value: unref(screenEditStore).getCurComponent.chartContain.dropInfo.height,
                    "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(screenEditStore).getCurComponent.chartContain.dropInfo.height = $event),
                    min: 0,
                    max: unref(screenEditStore).getCanvasConfig.height,
                    maxlength: 5,
                    onChange: hChange
                  }, null, 8, ["value", "max"]),
                  createVNode(unref(ScreenInput), {
                    prefix: "O",
                    suffix: "%",
                    style: { "width": "80px" },
                    value: opacity.value,
                    "onUpdate:value": _cache[5] || (_cache[5] = ($event) => opacity.value = $event),
                    placeholder: "透明度",
                    min: 0,
                    max: 100,
                    maxlength: 4,
                    onChange: oChange
                  }, null, 8, ["value"])
                ]),
                _cache[12] || (_cache[12] = createElementVNode("div", { class: "title" }, "背景色", -1)),
                createVNode(unref(MfishColorPicker), {
                  value: background.value,
                  onConfirmChange: confirmColor,
                  onInputChange: changeColor
                }, null, 8, ["value"]),
                createElementVNode("div", _hoisted_3, [
                  _cache[9] || (_cache[9] = createTextVNode(" 圆角 ")),
                  createVNode(unref(Slider), {
                    value: unref(screenEditStore).getCurComponent.chartContain.border.radius,
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(screenEditStore).getCurComponent.chartContain.border.radius = $event),
                    step: 1,
                    min: 0,
                    max: unref(screenEditStore).getCurComponent.chartContain.dropInfo.width > unref(screenEditStore).getCurComponent.chartContain.dropInfo.height ? Math.round(unref(screenEditStore).getCurComponent.chartContain.dropInfo.width / 2) : Math.round(unref(screenEditStore).getCurComponent.chartContain.dropInfo.height / 2)
                  }, null, 8, ["value", "max"])
                ]),
                createElementVNode("div", null, [
                  createVNode(unref(_sfc_main$1), {
                    checked: unref(screenEditStore).getCurComponent.chartContain.border.show,
                    "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(screenEditStore).getCurComponent.chartContain.border.show = $event),
                    title: "是否显示边框",
                    tooltip: "渐变色边框不会跟随圆角变化"
                  }, null, 8, ["checked"])
                ]),
                unref(screenEditStore).getCurComponent.chartContain.border.show ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode(unref(MfishColorPicker), {
                    placeholder: "边框颜色，清空显示默认色",
                    title: "清空显示默认色",
                    value: borderColor.value,
                    onConfirmChange: confirmBorderColor,
                    onInputChange: changeBorderColor
                  }, null, 8, ["value"]),
                  createVNode(unref(ScreenInput), {
                    prefix: "宽度",
                    suffix: "px",
                    style: { "width": "120px" },
                    value: unref(screenEditStore).getCurComponent.chartContain.border.width,
                    "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(screenEditStore).getCurComponent.chartContain.border.width = $event),
                    placeholder: "边框宽度",
                    min: 1,
                    maxlength: 4
                  }, null, 8, ["value"])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            renderSlot(_ctx.$slots, "default", { key: key.value }, void 0, true)
          ], 2)
        ]),
        _: 3
      });
    };
  }
});
const StyleConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9055bf8"]]);
export {
  StyleConfig as S
};
