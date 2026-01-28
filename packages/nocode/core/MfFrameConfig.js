import { defineComponent as e, ref as a, watch as t, resolveComponent as o, openBlock as n, createBlock as u, normalizeClass as l, unref as r, withCtx as p, createElementVNode as s, createTextVNode as i, createVNode as m, createElementBlock as C, Fragment as g, renderList as v, toDisplayString as f } from "vue";
import { S as c } from "./StyleConfig.js";
import { useDesign as d } from "@mfish/core/hooks";
import { RadioGroup as h, RadioButton as y } from "ant-design-vue";
import { P as S, u as _, _ as k } from "./index.js";
import { P as x, J as P } from "./JumpParams.js";
const j = { class: "title" }, w = k(e({ __name: "MfFrameConfig", setup(e2) {
  const { prefixCls: k2 } = d("frame-config"), w2 = [S.System, S.External], I = a(S.System), J = _(), T = a(), U = a();
  function b() {
    J.getCurConfigComponent.chart.options.pageType = I.value, I.value === S.System ? z(T.value) : A();
  }
  function z(e3) {
    J.getCurConfigComponent.chart.options.page = e3, J.getCurConfigComponent.chart.data.dataSet.value = e3.value;
  }
  function A() {
    J.getCurConfigComponent.chart.options.page = { value: U.value }, J.getCurConfigComponent.chart.data.dataSet.value = U.value;
  }
  function E(e3) {
    J.getCurConfigComponent.chart.options.params = e3;
  }
  return t(() => J.getCurConfigComponent, (e3) => {
    e3 && (I.value = J.getCurConfigComponent.chart.options.pageType || S.System, T.value = J.getCurConfigComponent.chart.options.page, U.value = J.getCurConfigComponent.chart.options.page?.value || "");
  }, { immediate: true }), (e3, a2) => {
    const t2 = o("AInput");
    return n(), u(c, { class: l(r(k2)) }, { default: p(() => [s("div", j, [a2[2] || (a2[2] = i(" 组件类型 ", -1)), m(r(h), { size: "small", value: I.value, "onUpdate:value": a2[0] || (a2[0] = (e4) => I.value = e4), onChange: b }, { default: p(() => [(n(), C(g, null, v(w2, (e4, a3) => m(r(y), { key: a3, value: e4 }, { default: p(() => [i(f(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), I.value === r(S).System ? (n(), u(x, { key: 0, page: T.value, onOk: z }, null, 8, ["page"])) : (n(), u(t2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: U.value, "onUpdate:value": a2[1] || (a2[1] = (e4) => U.value = e4), onChange: A }, null, 8, ["value"])), a2[3] || (a2[3] = s("div", { class: "title" }, " 传入参数 ", -1)), m(P, { "params-value": r(J).getCurConfigComponent.chart.options?.params, onParamsChange: E }, null, 8, ["params-value"])]), _: 1 }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-148a837e"]]);
export {
  w as default
};
