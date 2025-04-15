import { defineComponent, useCssVars, computed, ref, createBlock, openBlock, unref, normalizeClass, withCtx, createElementVNode, createTextVNode, toDisplayString, createCommentVNode, createVNode, onMounted, onUnmounted, createElementBlock, Fragment, renderList, withModifiers, normalizeStyle, nextTick } from "vue";
import { theme, Dropdown, InputNumber, Checkbox, Empty, Tooltip, Segmented } from "ant-design-vue";
import { Icon } from "@mfish/core/components/Icon";
import { u as useScreenEditStore, _ as _export_sfc, a as animationData, s as screenEvent, S as ScreenEventEnum, p as playAnimation } from "./index2.js";
import { useDesign, useRootSetting } from "@mfish/core/hooks";
import { ThemeEnum } from "@mfish/core/enums";
import "@vueuse/core";
import { pick } from "lodash-es";
import "@mfish/core/utils/Is";
import "@mfish/core/utils/http/axios";
import { PauseCircleTwoTone, PlayCircleTwoTone } from "@ant-design/icons-vue";
import "@mfish/core/utils/Uuid";
import { ScrollContainer } from "@mfish/core/components/Container";
import "@mfish/core/components/Draggable";
import "@mfish/core/components/Modal";
import "@mfish/core/components/Form";
import "@mfish/core/components/Tree";
import "@mfish/core/components/Split";
import "@mfish/core/components/Table";
import "@mfish/core/components/CodeEditor";
import "@mfish/core/i18n/UseLocale";
import draggable from "vuedraggable";
const _hoisted_1$1 = ["onMouseenter"];
const _hoisted_2$1 = { class: "setting" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AnimationSet",
  setup(__props) {
    useCssVars((_ctx) => ({
      "6fb0308f": bgColor.value
    }));
    const screenEditStore = useScreenEditStore();
    const animationList = computed(() => screenEditStore.getCurConfigComponent.chartContain.animations);
    const enterAnimation = ref(-1);
    const { prefixCls } = useDesign("animation-set");
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const isShow = ref(false);
    function enterHandle(index2) {
      enterAnimation.value = index2;
    }
    function removeAnimation(index2) {
      screenEditStore.getCurConfigComponent.chartContain.animations.splice(index2, 1);
      enterAnimation.value = -1;
    }
    const onMoveCallback = (val) => {
      const { oldIndex, newIndex } = val.moved;
      const moveTarget = screenEditStore.getCurConfigComponent.chartContain.animations.splice(oldIndex, 1)[0];
      screenEditStore.getCurConfigComponent.chartContain.animations.splice(newIndex, 0, moveTarget);
    };
    const visibleChange = (show) => {
      isShow.value = show;
    };
    function changeRepeat(element) {
      if (element.loop) {
        element.repeat = void 0;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(draggable), {
        "item-key": "id",
        class: normalizeClass(unref(prefixCls)),
        modelValue: animationList.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => animationList.value = $event),
        animation: "300",
        "ghost-class": "ghost",
        onChange: onMoveCallback
      }, {
        item: withCtx(({ element, index: index2 }) => [
          createElementVNode("div", {
            class: "animation",
            onMouseenter: ($event) => enterHandle(index2)
          }, [
            createTextVNode(toDisplayString(element.label) + " ", 1),
            createElementVNode("div", null, [
              enterAnimation.value === index2 ? (openBlock(), createBlock(unref(Icon), {
                key: 0,
                class: "icon",
                icon: "ant-design:delete-outlined",
                onClick: ($event) => removeAnimation(index2)
              }, null, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(unref(Dropdown), {
                placement: "bottom",
                open: isShow.value && enterAnimation.value === index2,
                onOpenChange: visibleChange,
                arrow: true
              }, {
                overlay: withCtx(() => [
                  createElementVNode("div", _hoisted_2$1, [
                    createVNode(unref(InputNumber), {
                      value: element.duration,
                      "onUpdate:value": ($event) => element.duration = $event,
                      size: "small",
                      placeholder: "时长 ms",
                      step: 100,
                      min: 0,
                      max: 1e5
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(unref(InputNumber), {
                      disabled: element.loop,
                      value: element.repeat,
                      "onUpdate:value": ($event) => element.repeat = $event,
                      size: "small",
                      placeholder: "重复次数",
                      step: 1,
                      min: 0,
                      max: 3
                    }, null, 8, ["disabled", "value", "onUpdate:value"]),
                    createVNode(unref(Checkbox), {
                      checked: element.loop,
                      "onUpdate:checked": ($event) => element.loop = $event,
                      onChange: ($event) => changeRepeat(element)
                    }, {
                      default: withCtx(() => _cache[1] || (_cache[1] = [
                        createTextVNode(" 无限循环")
                      ])),
                      _: 2
                    }, 1032, ["checked", "onUpdate:checked", "onChange"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    class: "icon",
                    icon: "ant-design:setting-outlined"
                  })
                ]),
                _: 2
              }, 1032, ["open"])
            ])
          ], 40, _hoisted_1$1)
        ]),
        _: 1
      }, 8, ["class", "modelValue"]);
    };
  }
});
const AnimationSet = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3971a868"]]);
const _hoisted_1 = {
  key: 1,
  class: "animation-set"
};
const _hoisted_2 = { class: "setting" };
const _hoisted_3 = { class: "mask-layer" };
const _hoisted_4 = ["onClick", "onMouseenter"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "AnimationConfig" },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "494f91ab": bgColor.value,
      "24ffaba0": unref(color)
    }));
    const value = ref("");
    const hoverAnimation = ref("");
    const darkMode = useRootSetting().getDarkMode;
    const hoverColor = computed(() => {
      return darkMode.value === ThemeEnum.DARK ? { color: "rgba(255,255,255,0.3)" } : { color: "rgba(0,0,0,0.2)" };
    });
    const color = useRootSetting().getThemeColor;
    const screenEditStore = useScreenEditStore();
    const animationList = computed(() => screenEditStore.getCurConfigComponent.chartContain.animations);
    const data = computed(
      () => {
        var _a;
        return (_a = animationData.find((item) => item.value === value.value)) == null ? void 0 : _a.payload.data;
      }
    );
    const { token } = theme.useToken();
    const bgColor = computed(() => token.value.colorInfoBg);
    const { prefixCls } = useDesign("animation-config");
    const running = ref(false);
    const stopRun = () => {
      running.value = false;
    };
    onMounted(() => {
      value.value = animationData[0].value;
      screenEvent.on(ScreenEventEnum.PLAY_ANIMATION_COMPLETE, stopRun);
    });
    onUnmounted(() => {
      screenEvent.off(ScreenEventEnum.PLAY_ANIMATION_COMPLETE, stopRun);
    });
    function typeChange(e) {
      value.value = e;
    }
    async function runAnimation(animate) {
      hoverAnimation.value = animate.value;
      await nextTick();
      await playAnimation(animate.animationRef, [animate]);
    }
    function addAnimation(animate) {
      const value2 = pick(animate, ["label", "value"]);
      if (screenEditStore.getCurConfigComponent.chartContain.animations) {
        screenEditStore.getCurConfigComponent.chartContain.animations.push(value2);
      } else {
        screenEditStore.getCurConfigComponent.chartContain.animations = [value2];
      }
    }
    function startAnimation() {
      running.value = true;
      nextTick(() => screenEvent.emit(ScreenEventEnum.PLAY_ANIMATION));
    }
    function stopAnimation() {
      running.value = false;
      screenEvent.emit(ScreenEventEnum.STOP_ANIMATION);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls))
      }, [
        createVNode(unref(ScrollContainer), { style: { "min-height": "250px", "height": "250px" } }, {
          default: withCtx(() => [
            !animationList.value || animationList.value.length === 0 ? (openBlock(), createBlock(unref(Empty), {
              key: 0,
              description: "未添加动画",
              image: unref(Empty).PRESENTED_IMAGE_SIMPLE
            }, null, 8, ["image"])) : (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(AnimationSet),
              createElementVNode("div", _hoisted_2, [
                createVNode(unref(Tooltip), {
                  title: running.value ? "暂停动画" : "播放动画"
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", _hoisted_3, [
                      running.value ? (openBlock(), createBlock(unref(PauseCircleTwoTone), {
                        key: 0,
                        "two-tone-color": unref(color),
                        style: { fontSize: "60px" },
                        onClick: stopAnimation
                      }, null, 8, ["two-tone-color"])) : (openBlock(), createBlock(unref(PlayCircleTwoTone), {
                        key: 1,
                        "two-tone-color": unref(color),
                        style: { fontSize: "60px" },
                        onClick: startAnimation
                      }, null, 8, ["two-tone-color"]))
                    ])
                  ]),
                  _: 1
                }, 8, ["title"])
              ])
            ]))
          ]),
          _: 1
        }),
        createVNode(unref(Segmented), {
          class: "segment",
          value: value.value,
          options: unref(animationData),
          onChange: typeChange,
          block: ""
        }, {
          label: withCtx(({ value: val, payload }) => [
            payload.icon ? (openBlock(), createBlock(unref(Icon), {
              key: 0,
              icon: payload.icon
            }, null, 8, ["icon"])) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(val), 1)
          ]),
          _: 1
        }, 8, ["value", "options"]),
        createVNode(unref(ScrollContainer), null, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: "animation-contain",
              onMouseleave: _cache[0] || (_cache[0] = ($event) => hoverAnimation.value = "")
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  style: { "cursor": "pointer", "height": "28px" },
                  key: item.value,
                  onClick: ($event) => addAnimation(item),
                  onMouseenter: withModifiers(($event) => runAnimation(item), ["stop", "prevent"])
                }, [
                  createElementVNode("div", {
                    class: "animation-block",
                    style: normalizeStyle(hoverAnimation.value === item.value ? hoverColor.value : {}),
                    ref_for: true,
                    ref: (el) => {
                      item.animationRef = el;
                    }
                  }, toDisplayString(item.label), 5),
                  hoverAnimation.value === item.value ? (openBlock(), createBlock(unref(Icon), {
                    key: 0,
                    class: "mask-icon",
                    icon: "ant-design:plus-outlined",
                    size: 24
                  })) : createCommentVNode("", true)
                ], 40, _hoisted_4);
              }), 128))
            ], 32)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8561aa6"]]);
export {
  index as default
};
