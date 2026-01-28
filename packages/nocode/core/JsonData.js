import { defineComponent as e, ref as t, openBlock as o, createElementBlock as a, normalizeClass as i, unref as n, createElementVNode as r, createTextVNode as s, toDisplayString as d, createVNode as m, withCtx as l } from "vue";
import { CodeEditor as c, MODE as p } from "@mfish/core/components/CodeEditor";
import { useDesign as u, useMessage as f } from "@mfish/core/hooks";
import { Icon as h } from "@mfish/core/components/Icon";
import { Tooltip as v } from "ant-design-vue";
import { _ as g } from "./index.js";
const _ = { class: "title" }, C = g(e({ __name: "JsonData", props: { data: { type: String, default: "" }, title: { type: String, default: "图表数据" } }, emits: ["dataChange"], setup(e2, { emit: g2 }) {
  const C2 = e2, x = g2, { prefixCls: y } = u("json-data"), { createMessage: J } = f(), S = t(C2.data);
  function j(e3) {
    try {
      const t2 = JSON.parse(e3);
      t2 && x("dataChange", t2);
    } catch {
      J.error("数据格式错误，请检查");
    }
  }
  return (t2, u2) => (o(), a("div", { class: i(n(y)) }, [r("div", _, [s(d(e2.title) + " ", 1), m(n(v), { title: "静态数据请保持下面的格式" }, { default: l(() => [m(n(h), { icon: "ant-design:exclamation-circle-outlined" })]), _: 1 })]), m(n(c), { style: { height: "100%" }, value: S.value, "onUpdate:value": u2[0] || (u2[0] = (e3) => S.value = e3), mode: n(p).JSON, onChange: j }, null, 8, ["value", "mode"])], 2));
} }), [["__scopeId", "data-v-d43d7048"]]);
export {
  C as J
};
