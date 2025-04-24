import { defineComponent as t, computed as o, ref as n, watch as e, onMounted as r, nextTick as a, createElementBlock as i, openBlock as c, mergeProps as s, unref as h, toHandlers as p, Fragment as l, renderList as u, withDirectives as d, normalizeStyle as m, normalizeClass as C, createBlock as v, resolveDynamicComponent as f, vShow as g } from "vue";
import { useDesign as I } from "@mfish/core/hooks";
import { u as y, s as _, S as w, p as M, h as x, b as A, C as S, _ as b } from "./index.js";
import { theme as O } from "ant-design-vue";
import { throttle as T, omit as k } from "lodash-es";
const L = t({ name: "MfCombine", __name: "index", props: { chart: { type: Object, required: true }, chartContain: { type: Object, required: true } }, setup(t2) {
  const b2 = t2, { prefixCls: L2 } = I("mf-combine"), E2 = o(() => {
    var _a, _b;
    return (_b = (_a = b2.chart.options) == null ? void 0 : _a.components) == null ? void 0 : _b.slice().reverse();
  }), N = n(0);
  e([() => {
    var _a;
    return (_a = b2.chartContain) == null ? void 0 : _a.dropInfo.width;
  }, () => {
    var _a;
    return (_a = b2.chartContain) == null ? void 0 : _a.dropInfo.height;
  }], T(() => {
    N.value++;
  }, 100), { immediate: true, deep: true });
  const j = (t3) => ({ transform: t3.chartContain.groupStyle.transform, width: t3.chartContain.groupStyle.width, height: t3.chartContain.groupStyle.height, top: t3.chartContain.groupStyle.top, left: t3.chartContain.groupStyle.left }), { token: H } = O.useToken(), P = (t3, o2, n2) => {
    var _a, _b, _c, _d;
    const e2 = [];
    if ((b2.chart.id === K.getCurHoverComponentId && ((_a = b2.chart.options) == null ? void 0 : _a.hoverId) === t3.chart.id || b2.chart.id === ((_b = K.getCurComponent) == null ? void 0 : _b.chart.id) && ((_c = b2.chart.options) == null ? void 0 : _c.selectIndex) === o2.length - n2 - 1) && e2.push("over"), ((_d = t3.chart.events) == null ? void 0 : _d.emits) && t3.chart.events.emits.length > 0) for (const o3 of t3.chart.events.emits) o3 !== S.CHART_CLICK && o3 !== S.CHART_DBLCLICK || e2.push("allow-pointer");
    return e2;
  }, q = (t3) => {
    const o2 = { ...k(t3.chartContain.groupStyle, ["width", "height", "top", "left", "transform"]), width: "100%", height: "100%" };
    return t3.chartContain.groupStyle.borderColor ? o2 : { ...o2, borderColor: H.value.colorBorder };
  }, B = n([]), K = y(), R = n(false);
  function V() {
    var _a;
    if (!K.getCurComponent) return;
    const t3 = (_a = b2.chart.options) == null ? void 0 : _a.components.findIndex((t4) => t4.chart.id === K.getCurComponent.chart.options.hoverId);
    K.getCurComponent.chart.options.selectIndex = t3 >= 0 ? t3 : void 0;
  }
  r(() => {
    _.on(w.PLAY_ANIMATION, () => {
      var _a;
      b2.chart.id === ((_a = K.getCurComponent) == null ? void 0 : _a.chart.id) && b2.chart.options.selectIndex >= 0 && B.value && M(B.value[b2.chart.options.components.length - b2.chart.options.selectIndex - 1], K.getCurConfigComponent.chartContain.animations).then(() => {
        _.emit(w.PLAY_ANIMATION_COMPLETE);
      });
    }), _.on(w.MOVE, () => {
      R.value = true;
    }), _.on(w.UN_MOVE, () => {
      R.value = false;
    }), function() {
      const t3 = /* @__PURE__ */ new Map();
      for (let o2 = 0; o2 < b2.chart.options.components.length; o2++) {
        const n2 = b2.chart.options.components[o2];
        n2.chartContain.animations && 0 !== n2.chartContain.animations.length && B.value && (n2.chartContain.show && (n2.chartContain.show = false, t3.set(o2, n2)), setTimeout(() => {
          t3.has(o2) && (t3.get(o2).chartContain.show = true), a(() => {
            M(B.value[b2.chart.options.components.length - o2 - 1], n2.chartContain.animations).then();
          });
        }, 600));
      }
    }();
  });
  const { commonEvents: Y } = x(b2.chart);
  return (o2, n2) => (c(), i("div", s({ class: h(L2), onClick: V }, p(h(Y), true), { key: N.value }), [(c(true), i(l, null, u(E2.value, (o3, e2) => {
    var _a;
    return d((c(), i("div", { class: C([P(o3, E2.value, e2), "component"]), style: m(j(o3)), key: e2, ref_for: true, ref: (t3) => function(t4, o4) {
      B.value[o4] = t4;
    }(t3, e2) }, [(c(), v(f(h(A)[o3.chart.type].component), { style: m(q(o3)), class: "component", id: `com${o3.chart.id}`, chart: o3.chart, "chart-contain": o3.chartContain, onMouseenter: (n3) => {
      return e3 = t2.chart, r2 = o3.chart.id, void (h(R) || (e3.options.hoverId = r2));
      var e3, r2;
    }, onMouseleave: n2[0] || (n2[0] = (o4) => {
      return n3 = t2.chart, void (h(R) || (n3.options.hoverId = void 0));
      var n3;
    }) }, null, 40, ["style", "id", "chart", "chart-contain", "onMouseenter"]))], 6)), [[g, (_a = o3.chartContain) == null ? void 0 : _a.show]]);
  }), 128))], 16));
} }), E = b(L, [["__scopeId", "data-v-80ec4365"]]);
export {
  E as default
};
