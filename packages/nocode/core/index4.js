import { defineComponent as t, computed as o, ref as e, watch as n, onMounted as r, nextTick as a, createElementBlock as h, openBlock as s, mergeProps as i, unref as c, toHandlers as p, Fragment as l, renderList as d, withDirectives as u, normalizeStyle as m, normalizeClass as C, createBlock as v, resolveDynamicComponent as f, vShow as g } from "vue";
import { useDesign as I } from "@mfish/core/hooks";
import { u as w, s as y, S as _, p as M, h as A, i as x, b as T, C as E, _ as N } from "./index.js";
import { theme as O } from "ant-design-vue";
import { throttle as S, omit as b } from "lodash-es";
const k = t({ name: "MfCombine", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const N2 = t2, { prefixCls: k2 } = I("mf-combine"), H2 = o(() => N2.chart.options?.components?.slice().reverse()), L = e(0);
  n([() => N2.chartContain?.dropInfo.width, () => N2.chartContain?.dropInfo.height], S(() => {
    L.value++;
  }, 100), { immediate: true, deep: true });
  const j = (t3) => ({ transform: t3.chartContain.groupStyle.transform, width: t3.chartContain.groupStyle.width, height: t3.chartContain.groupStyle.height, top: t3.chartContain.groupStyle.top, left: t3.chartContain.groupStyle.left }), { token: P } = O.useToken(), V = (t3, o2, e2) => {
    const n2 = [];
    if ((N2.chart.id === K.getCurHoverComponentId && N2.chart.options?.hoverId === t3.chart.id || N2.chart.id === K.getCurComponent?.chart.id && N2.chart.options?.selectIndex === o2.length - e2 - 1) && n2.push("over"), t3.chart.events?.emits && t3.chart.events.emits.length > 0) for (const o3 of t3.chart.events.emits) o3 !== E.CHART_CLICK && o3 !== E.CHART_DBLCLICK || n2.push("allow-pointer");
    return n2;
  }, q = (t3) => {
    const o2 = { ...b(t3.chartContain.groupStyle, ["width", "height", "top", "left", "transform"]), width: "100%", height: "100%" };
    return t3.chartContain.groupStyle.borderColor ? o2 : { ...o2, borderColor: P.value.colorBorder };
  }, B = e([]), K = w(), R = e(false);
  function Y() {
    if (!K.getCurComponent) return;
    const t3 = N2.chart.options?.components.findIndex((t4) => t4.chart.id === K.getCurComponent.chart.options.hoverId);
    K.getCurComponent.chart.options.selectIndex = t3 >= 0 ? t3 : void 0;
  }
  r(() => {
    y.on(_.PLAY_ANIMATION, () => {
      N2.chart.id === K.getCurComponent?.chart.id && N2.chart.options.selectIndex >= 0 && B.value && M(B.value[N2.chart.options.components.length - N2.chart.options.selectIndex - 1], K.getCurConfigComponent.chart.animations).then(() => {
        y.emit(_.PLAY_ANIMATION_COMPLETE);
      });
    }), y.on(_.MOVE, () => {
      R.value = true;
    }), y.on(_.UN_MOVE, () => {
      R.value = false;
    }), y.on(_.EVENT_ANIMATION, (t3) => {
      N2.chart.options.components.forEach((o2, e2) => {
        A(t3, o2, B.value[N2.chart.options.components.length - e2 - 1]);
      });
    }), function() {
      const t3 = /* @__PURE__ */ new Map();
      for (let o2 = 0; o2 < N2.chart.options.components.length; o2++) {
        const e2 = N2.chart.options.components[o2], n2 = e2.chart.animations?.filter((t4) => !t4.events || 0 === t4.events.length);
        n2 && 0 !== n2.length && B.value && (e2.chartContain.show && (e2.chartContain.show = false, t3.set(o2, e2)), setTimeout(() => {
          t3.has(o2) && (t3.get(o2).chartContain.show = true), a(() => {
            M(B.value[N2.chart.options.components.length - o2 - 1], n2).then();
          });
        }, 600));
      }
    }();
  });
  const { commonEvents: D } = x(N2.chart);
  return (o2, e2) => (s(), h("div", i({ class: c(k2), onClick: Y }, p(c(D), true), { key: L.value }), [(s(true), h(l, null, d(H2.value, (o3, n2) => u((s(), h("div", { class: C([V(o3, H2.value, n2), "component"]), style: m(j(o3)), ref_for: true, ref: (t3) => function(t4, o4) {
    B.value[o4] = t4;
  }(t3, n2), key: n2 }, [(s(), v(f(c(T)[o3.chart.type].component), { style: m(q(o3)), class: "component", id: `com${o3.chart.id}`, chart: o3.chart, "chart-contain": o3.chartContain, onMouseenter: (e3) => {
    return n3 = t2.chart, r2 = o3.chart.id, void (c(R) || (n3.options.hoverId = r2));
    var n3, r2;
  }, onMouseleave: e2[0] || (e2[0] = (o4) => {
    return e3 = t2.chart, void (c(R) || (e3.options.hoverId = void 0));
    var e3;
  }) }, null, 40, ["style", "id", "chart", "chart-contain", "onMouseenter"]))], 6)), [[g, void 0 === o3.chart?.showHide?.show && o3.chartContain?.show || void 0 !== o3.chart?.showHide?.show && o3.chart?.showHide?.show]])), 128))], 16));
} }), H = N(k, [["__scopeId", "data-v-ddf66623"]]);
export {
  H as default
};
