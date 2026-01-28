import { defineComponent as o, watch as t, openBlock as e, createBlock as n, normalizeClass as r, unref as i, withCtx as a, createVNode as s, createTextVNode as p, createElementVNode as c } from "vue";
import { Checkbox as f } from "ant-design-vue";
import m from "./MfDecorationConfig.js";
import { useDesign as C } from "@mfish/core/hooks";
import { u, e as h, _ as g } from "./index.js";
import "@vueuse/core";
import "@mfish/core/components/Icon";
import "lodash-es";
import "@mfish/core/enums";
import "@mfish/core/utils/Is";
const d = { class: "title" }, l = g(o({ __name: "MfDecoration2Config", setup(o2) {
  const { prefixCls: g2 } = C("decoration2-config"), l2 = u();
  return t(() => l2.getCurConfigComponent.chart.options.reverse, () => {
    const o3 = l2.getCurConfigComponent.chartContain.dropInfo.width;
    l2.getCurConfigComponent.chartContain.dropInfo.width = l2.getCurConfigComponent.chartContain.dropInfo.height, l2.getCurConfigComponent.chartContain.dropInfo.height = o3;
  }), (o3, t2) => (e(), n(m, { class: r(i(g2)) }, { default: a(() => [s(i(f), { checked: i(l2).getCurConfigComponent.chart.options.reverse, "onUpdate:checked": t2[0] || (t2[0] = (o4) => i(l2).getCurConfigComponent.chart.options.reverse = o4) }, { default: a(() => [...t2[2] || (t2[2] = [p(" 是否反转", -1)])]), _: 1 }, 8, ["checked"]), c("div", d, [t2[3] || (t2[3] = p(" 单次动画时长 ", -1)), s(i(h), { suffix: "秒", value: i(l2).getCurConfigComponent.chart.options.duration, "onUpdate:value": t2[1] || (t2[1] = (o4) => i(l2).getCurConfigComponent.chart.options.duration = o4), placeholder: "单次动画时长", min: 1, max: 100, maxlength: 3 }, null, 8, ["value"])])]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-2a42f210"]]);
export {
  l as default
};
