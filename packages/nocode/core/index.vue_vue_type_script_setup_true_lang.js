import { defineComponent as o, ref as t, computed as r, watch as n, createBlock as e, openBlock as a, resolveDynamicComponent as c, normalizeStyle as i, withCtx as p, renderSlot as h } from "vue";
import { throttle as d } from "lodash-es";
const l = o({ name: "MfDataV", __name: "index", props: { component: { type: Object, required: true }, chart: { type: Object }, chartContain: { type: Object } }, setup(o2) {
  const l2 = o2, s = t(0), u = r(() => {
    var _a, _b;
    return [(_a = l2.chart) == null ? void 0 : _a.options.mainColor, (_b = l2.chart) == null ? void 0 : _b.options.secondColor];
  });
  n([() => {
    var _a;
    return (_a = l2.chartContain) == null ? void 0 : _a.dropInfo.width;
  }, () => {
    var _a;
    return (_a = l2.chartContain) == null ? void 0 : _a.dropInfo.height;
  }], d(() => {
    s.value++;
  }, 100), { immediate: true, deep: true });
  const m = r(() => {
    var _a, _b;
    return { width: (_a = l2.chartContain) == null ? void 0 : _a.dropInfo.width, height: (_b = l2.chartContain) == null ? void 0 : _b.dropInfo.height };
  });
  return (t2, r2) => {
    var _a, _b;
    return a(), e(c(o2.component), { key: s.value, style: i(m.value), color: u.value, "background-color": ((_a = l2.chart) == null ? void 0 : _a.options.backgroundColor) ? (_b = l2.chart) == null ? void 0 : _b.options.backgroundColor : "transparent" }, { default: p(() => [h(t2.$slots, "default")]), _: 3 }, 8, ["style", "color", "background-color"]);
  };
} });
export {
  l as _
};
