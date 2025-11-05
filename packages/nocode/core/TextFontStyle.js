import { defineComponent as e, reactive as t, watch as o, createElementBlock as n, openBlock as a, normalizeClass as l, unref as i, Fragment as r, renderList as u, createBlock as c, createCommentVNode as d, withCtx as s, createVNode as m } from "vue";
import { Icon as h } from "@mfish/core/components/Icon";
import { Tooltip as f, RadioButton as v } from "ant-design-vue";
import { useDesign as p } from "@mfish/core/hooks";
import { O as k, _ as y } from "./index.js";
const b = y(e({ __name: "TextFontStyle", props: { bold: { type: Boolean, default: false }, italic: { type: Boolean, default: false }, strikethrough: { type: Boolean, default: false }, underline: { type: Boolean, default: false }, hide: { type: Array, default: () => [] } }, emits: ["fontStyleChange"], setup(e2, { emit: y2 }) {
  const b2 = e2, g = y2, x = t({ [k.Bold]: { name: "加粗", icon: "carbon:text-bold", value: false }, [k.Italic]: { name: "斜体", icon: "carbon:text-italic", value: false }, [k.Underline]: { name: "下划线", icon: "carbon:text-underline", value: false }, [k.Strikethrough]: { name: "删除线", icon: "carbon:text-strikethrough", value: false } }), _ = (e3) => !b2.hide.includes(e3);
  o([() => b2.bold, () => b2.italic, () => b2.strikethrough, () => b2.underline], ([e3, t2, o2, n2]) => {
    x.bold.value = e3, x.italic.value = t2, x.strikethrough.value = o2, x.underline.value = n2;
  }, { immediate: true, deep: true });
  const { prefixCls: S } = p("font-style");
  return (e3, t2) => (a(), n("div", { class: l(i(S)) }, [(a(true), n(r, null, u(Object.keys(x), (e4) => (a(), n(r, { key: e4 }, [_(e4) ? (a(), c(i(f), { key: 0, placement: "bottom", title: `${x[e4].value ? "关闭" : "打开"}${x[e4].name}` }, { default: s(() => [m(i(v), { class: "radio-button", checked: x[e4].value, onMousedown: (t3) => (function(e5) {
    if (e5) {
      x[e5].value = !x[e5].value, x[e5].value && (e5 === k.Underline && (x[k.Strikethrough].value = false), e5 === k.Strikethrough && (x[k.Underline].value = false));
      const t4 = {};
      Object.keys(x).forEach((e6) => {
        t4[e6] = x[e6].value;
      }), g("fontStyleChange", t4);
    }
  })(e4) }, { default: s(() => [m(i(h), { icon: x[e4].icon }, null, 8, ["icon"])]), _: 2 }, 1032, ["checked", "onMousedown"])]), _: 2 }, 1032, ["title"])) : d("", true)], 64))), 128))], 2));
} }), [["__scopeId", "data-v-0aa6420d"]]);
export {
  b as T
};
