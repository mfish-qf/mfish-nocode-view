import { defineComponent as t, ref as e, watch as o, createBlock as n, openBlock as a, normalizeClass as l, unref as i, withCtx as r, createElementVNode as u, createVNode as s, createTextVNode as c } from "vue";
import { S as C } from "./StyleConfig.js";
import { useDesign as p } from "@mfish/core/hooks";
import { Input as h } from "ant-design-vue";
import { u as f, T as g, ao as m, I as d, _ as v } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const S = { class: "title" }, y = v(t({ __name: "MfSelectConfig", setup(t2) {
  const { prefixCls: v2 } = p("select-style-config"), y2 = f(), x = e({}), k = e(false), _ = e(false), w = e(false), I = e();
  function U(t3) {
    y2.getCurConfigComponent.chart.options.textStyle = { ...y2.getCurConfigComponent.chart.options?.textStyle, textColor: t3.value };
  }
  function V(t3) {
    y2.getCurConfigComponent.chart.options.textStyle = { ...y2.getCurConfigComponent.chart.options?.textStyle, font: t3.value };
  }
  function j(t3) {
    y2.getCurConfigComponent.chart.options.textStyle = { ...y2.getCurConfigComponent.chart.options?.textStyle, fontSize: t3.value };
  }
  function z(t3) {
    y2.getCurConfigComponent.chart.options.textStyle = { ...y2.getCurConfigComponent.chart.options?.textStyle, fontStyle: t3.value };
  }
  function F() {
    y2.getCurConfigComponent.chart.options.showSearch = _.value;
  }
  function b() {
    y2.getCurConfigComponent.chart.options.allowClear = w.value;
  }
  function B() {
    y2.getCurConfigComponent.chart.data.defaultValue = I.value;
  }
  return o(() => y2.getCurConfigComponent, (t3) => {
    var e2;
    t3 && (e2 = t3, x.value = e2.chart?.options?.textStyle, k.value = e2.chart?.options?.transparent || false, w.value = e2.chart?.options?.allowClear || false, _.value = e2.chart?.options?.showSearch || false, e2.chart.data?.defaultValue && (I.value = e2.chart.data.defaultValue));
  }, { immediate: true }), (t3, e2) => (a(), n(C, { class: l(i(v2)) }, { default: r(() => [e2[4] || (e2[4] = u("div", { class: "title" }, "文本样式", -1)), s(i(g), { "color-type": 1, "text-style": x.value, "hide-align": true, "hide-font-style": [i(m).Strikethrough, i(m).Bold], onColorChange: U, onFontChange: V, onSizeChange: j, onFontStyleChange: z }, null, 8, ["text-style", "hide-font-style"]), s(i(d), { checked: _.value, "onUpdate:checked": e2[0] || (e2[0] = (t4) => _.value = t4), title: "开启过滤", tooltip: "勾选后允许通过标签名称过滤", onChange: F }, null, 8, ["checked"]), s(i(d), { checked: w.value, "onUpdate:checked": e2[1] || (e2[1] = (t4) => w.value = t4), title: "允许清空", tooltip: "勾选后允许清空选中值", onChange: b }, null, 8, ["checked"]), u("div", S, [e2[3] || (e2[3] = c(" 默认值 ")), u("div", null, [s(i(h), { value: I.value, "onUpdate:value": e2[2] || (e2[2] = (t4) => I.value = t4), onChange: B }, null, 8, ["value"])])])]), _: 1, __: [4] }, 8, ["class"]));
} }), [["__scopeId", "data-v-32e0db08"]]);
export {
  y as default
};
