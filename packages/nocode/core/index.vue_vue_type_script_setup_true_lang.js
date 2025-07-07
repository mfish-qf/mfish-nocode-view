import { defineComponent as o, ref as t, computed as r, watch as n, createBlock as e, openBlock as a, resolveDynamicComponent as c, normalizeStyle as i, withCtx as p, renderSlot as h } from "vue";
import { throttle as d } from "lodash-es";
const l = o({ name: "MfDataV", __name: "index", props: { component: { type: Object, required: true }, chart: { type: Object }, chartContain: { type: Object } }, setup(o2) {
  const l2 = o2, s = t(0), u = r(() => [l2.chart?.options.mainColor, l2.chart?.options.secondColor]);
  n([() => l2.chartContain?.dropInfo.width, () => l2.chartContain?.dropInfo.height], d(() => {
    s.value++;
  }, 100), { immediate: true, deep: true });
  const m = r(() => ({ width: l2.chartContain?.dropInfo.width, height: l2.chartContain?.dropInfo.height }));
  return (t2, r2) => (a(), e(c(o2.component), { key: s.value, style: i(m.value), color: u.value, "background-color": l2.chart?.options.backgroundColor ? l2.chart?.options.backgroundColor : "transparent" }, { default: p(() => [h(t2.$slots, "default")]), _: 3 }, 8, ["style", "color", "background-color"]));
} });
export {
  l as _
};
