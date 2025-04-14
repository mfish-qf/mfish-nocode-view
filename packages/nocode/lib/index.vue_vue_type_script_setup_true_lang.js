import { defineComponent, ref, computed, watch, createBlock, openBlock, resolveDynamicComponent, normalizeStyle, withCtx, renderSlot } from "vue";
import { throttle } from "lodash-es";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfDataV" },
  __name: "index",
  props: {
    component: { type: Object, required: true },
    chart: { type: Object },
    chartContain: { type: Object }
  },
  setup(__props) {
    const props = __props;
    const key = ref(0);
    const color = computed(() => {
      var _a, _b;
      return [(_a = props.chart) == null ? void 0 : _a.options.mainColor, (_b = props.chart) == null ? void 0 : _b.options.secondColor];
    });
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
    const getStyle = computed(() => {
      var _a, _b;
      return {
        width: (_a = props.chartContain) == null ? void 0 : _a.dropInfo.width,
        height: (_b = props.chartContain) == null ? void 0 : _b.dropInfo.height
      };
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createBlock(resolveDynamicComponent(__props.component), {
        key: key.value,
        style: normalizeStyle(getStyle.value),
        color: color.value,
        "background-color": ((_a = props.chart) == null ? void 0 : _a.options.backgroundColor) ? (_b = props.chart) == null ? void 0 : _b.options.backgroundColor : "transparent"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["style", "color", "background-color"]);
    };
  }
});
export {
  _sfc_main as _
};
