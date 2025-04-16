import { defineComponent, computed, ref, watch, onMounted, nextTick, createElementBlock, openBlock, mergeProps, unref, toHandlers, Fragment, renderList, withDirectives, normalizeStyle, normalizeClass, createBlock, resolveDynamicComponent, vShow } from "vue";
import { useDesign } from "@mfish/core/hooks";
import { u as useScreenEditStore, s as screenEvent, S as ScreenEventEnum, p as playAnimation, h as useChartEventHandle, b as ComponentsEnum, C as ChartEventEnum, _ as _export_sfc } from "./index.js";
import { theme } from "ant-design-vue";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import { throttle, omit } from "lodash-es";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfCombine" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const { prefixCls } = useDesign("mf-combine");
    const components = computed(() => {
      var _a, _b;
      return (_b = (_a = props.chart.options) == null ? void 0 : _a.components) == null ? void 0 : _b.slice().reverse();
    });
    const key = ref(0);
    watch(
      [() => {
        var _a;
        return (_a = props.chartContain) == null ? void 0 : _a.dropInfo.width;
      }, () => {
        var _a;
        return (_a = props.chartContain) == null ? void 0 : _a.dropInfo.height;
      }],
      throttle(() => {
        key.value++;
      }, 100),
      { immediate: true, deep: true }
    );
    const position = (item) => {
      return {
        transform: item.chartContain.groupStyle.transform,
        width: item.chartContain.groupStyle.width,
        height: item.chartContain.groupStyle.height,
        top: item.chartContain.groupStyle.top,
        left: item.chartContain.groupStyle.left
      };
    };
    const { token } = theme.useToken();
    const containClass = (item, components2, index2) => {
      var _a, _b, _c, _d;
      const cls = [];
      if (props.chart.id === screenEditStore.getCurHoverComponentId && ((_a = props.chart.options) == null ? void 0 : _a.hoverId) === item.chart.id || props.chart.id === ((_b = screenEditStore.getCurComponent) == null ? void 0 : _b.chart.id) && ((_c = props.chart.options) == null ? void 0 : _c.selectIndex) === components2.length - index2 - 1) {
        cls.push("over");
      }
      if (((_d = item.chart.events) == null ? void 0 : _d.emits) && item.chart.events.emits.length > 0) {
        for (const emit of item.chart.events.emits) {
          if (emit === ChartEventEnum.CHART_CLICK || emit === ChartEventEnum.CHART_DBLCLICK) {
            cls.push("allow-pointer");
          }
        }
      }
      return cls;
    };
    const componentStyle = (item) => {
      const style = {
        ...omit(item.chartContain.groupStyle, ["width", "height", "top", "left", "transform"]),
        width: "100%",
        height: "100%"
      };
      return item.chartContain.groupStyle.borderColor ? style : {
        ...style,
        borderColor: token.value.colorBorder
      };
    };
    const combineRef = ref([]);
    const screenEditStore = useScreenEditStore();
    const isMove = ref(false);
    function setCombineRef(el, index2) {
      combineRef.value[index2] = el;
    }
    onMounted(() => {
      screenEvent.on(ScreenEventEnum.PLAY_ANIMATION, () => {
        var _a;
        if (props.chart.id === ((_a = screenEditStore.getCurComponent) == null ? void 0 : _a.chart.id) && props.chart.options.selectIndex >= 0 && combineRef.value) {
          playAnimation(
            combineRef.value[props.chart.options.components.length - props.chart.options.selectIndex - 1],
            screenEditStore.getCurConfigComponent.chartContain.animations
          ).then(() => {
            screenEvent.emit(ScreenEventEnum.PLAY_ANIMATION_COMPLETE);
          });
        }
      });
      screenEvent.on(ScreenEventEnum.MOVE, () => {
        isMove.value = true;
      });
      screenEvent.on(ScreenEventEnum.UN_MOVE, () => {
        isMove.value = false;
      });
      runAnimation();
    });
    function mouseEnter(chart, id) {
      if (!unref(isMove)) {
        chart.options.hoverId = id;
      }
    }
    function mouseLeave(chart) {
      if (!unref(isMove)) {
        chart.options.hoverId = void 0;
      }
    }
    function handleSelect() {
      var _a;
      if (!screenEditStore.getCurComponent) return;
      const index2 = (_a = props.chart.options) == null ? void 0 : _a.components.findIndex(
        (item) => item.chart.id === screenEditStore.getCurComponent.chart.options.hoverId
      );
      screenEditStore.getCurComponent.chart.options.selectIndex = index2 >= 0 ? index2 : void 0;
    }
    function runAnimation() {
      const map = /* @__PURE__ */ new Map();
      for (let i = 0; i < props.chart.options.components.length; i++) {
        const component = props.chart.options.components[i];
        if (!component.chartContain.animations || component.chartContain.animations.length === 0 || !combineRef.value) {
          continue;
        }
        if (component.chartContain.show) {
          component.chartContain.show = false;
          map.set(i, component);
        }
        setTimeout(() => {
          if (map.has(i)) {
            map.get(i).chartContain.show = true;
          }
          nextTick(() => {
            playAnimation(
              combineRef.value[props.chart.options.components.length - i - 1],
              component.chartContain.animations
            ).then();
          });
        }, 600);
      }
    }
    const { commonEvents } = useChartEventHandle(props.chart);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: unref(prefixCls),
        onClick: handleSelect
      }, toHandlers(unref(commonEvents), true), { key: key.value }), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(components.value, (item, index2) => {
          var _a;
          return withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass([containClass(item, components.value, index2), "component"]),
            style: normalizeStyle(position(item)),
            key: index2,
            ref_for: true,
            ref: (el) => setCombineRef(el, index2)
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(ComponentsEnum)[item.chart.type].component), {
              style: normalizeStyle(componentStyle(item)),
              class: "component",
              id: `com${item.chart.id}`,
              chart: item.chart,
              "chart-contain": item.chartContain,
              onMouseenter: ($event) => mouseEnter(__props.chart, item.chart.id),
              onMouseleave: _cache[0] || (_cache[0] = ($event) => mouseLeave(__props.chart))
            }, null, 40, ["style", "id", "chart", "chart-contain", "onMouseenter"]))
          ], 6)), [
            [vShow, (_a = item.chartContain) == null ? void 0 : _a.show]
          ]);
        }), 128))
      ], 16);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25e5ed82"]]);
export {
  index as default
};
