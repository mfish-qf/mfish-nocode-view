import { defineComponent as e, ref as a, watch as t, resolveComponent as o, createBlock as n, openBlock as u, normalizeClass as l, unref as r, withCtx as p, createElementVNode as s, createVNode as i, createTextVNode as m, createElementBlock as C, Fragment as g, renderList as v, toDisplayString as f } from "vue";
import { S as c } from "./StyleConfig.js";
import { useDesign as d } from "@mfish/core/hooks";
import { RadioGroup as h, RadioButton as y } from "ant-design-vue";
import { c as _, u as S, _ as k } from "./index.js";
import { P as x, J as j } from "./JumpParams.js";
const w = { class: "title" }, P = k(e({ __name: "MfFrameConfig", setup(e2) {
  const { prefixCls: k2 } = d("frame-config"), P2 = [_.System, _.External], I = a(_.System), J = S(), T = a(), U = a();
  function b() {
    J.getCurConfigComponent.chart.options.pageType = I.value, I.value === _.System ? z(T.value) : A();
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
    e3 && (I.value = J.getCurConfigComponent.chart.options.pageType || _.System, T.value = J.getCurConfigComponent.chart.options.page, U.value = J.getCurConfigComponent.chart.options.page?.value || "");
  }, { immediate: true }), (e3, a2) => {
    const t2 = o("AInput");
    return u(), n(c, { class: l(r(k2)) }, { default: p(() => [s("div", w, [a2[2] || (a2[2] = m(" 组件类型 ")), i(r(h), { size: "small", value: I.value, "onUpdate:value": a2[0] || (a2[0] = (e4) => I.value = e4), onChange: b }, { default: p(() => [(u(), C(g, null, v(P2, (e4, a3) => i(r(y), { key: a3, value: e4 }, { default: p(() => [m(f(e4), 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), I.value === r(_).System ? (u(), n(x, { key: 0, page: T.value, onOk: z }, null, 8, ["page"])) : (u(), n(t2, { key: 1, placeholder: "请输入外部链接，例如https://www.bing.com", value: U.value, "onUpdate:value": a2[1] || (a2[1] = (e4) => U.value = e4), onChange: A }, null, 8, ["value"])), a2[3] || (a2[3] = s("div", { class: "title" }, " 传入参数 ", -1)), i(j, { "params-value": r(J).getCurConfigComponent.chart.options?.params, onParamsChange: E }, null, 8, ["params-value"])]), _: 1, __: [3] }, 8, ["class"]);
  };
} }), [["__scopeId", "data-v-148a837e"]]);
export {
  P as default
};
