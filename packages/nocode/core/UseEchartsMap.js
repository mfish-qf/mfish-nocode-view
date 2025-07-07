import { watch as e, nextTick as o } from "vue";
import { cloneDeep as t } from "lodash-es";
import { u as r } from "./index.js";
function l(l2) {
  const i = r();
  e(() => i?.getTheme, (e2) => {
    l2 && o().then(() => {
      !function(e3, o2) {
        const r2 = { dark: "#03133D", light: "#E9F2FA" }, l3 = { dark: "#6699FF", light: "#4486C1" }, i2 = { dark: "#1773C3", light: "#FFFFFF" }, a = { dark: "#3146B3", light: "#6699FF" };
        if (!e3.itemStyle) return e3.itemStyle = t({ color: r2[o2], areaColor: r2[o2], borderColor: l3[o2], shadowColor: i2[o2], shadowBlur: 10, borderWidth: 1 }), void (e3.emphasis = t({ itemStyle: { color: a[o2], areaColor: a[o2] } }));
        e3.itemStyle.color !== r2.dark && e3.itemStyle.color !== r2.light || (e3.itemStyle.color = r2[o2]);
        e3.itemStyle.areaColor !== r2.dark && e3.itemStyle.areaColor !== r2.light || (e3.itemStyle.areaColor = r2[o2]);
        e3.itemStyle.borderColor !== l3.dark && e3.itemStyle.borderColor !== l3.light || (e3.itemStyle.borderColor = l3[o2]);
        e3.itemStyle.shadowColor !== i2.dark && e3.itemStyle.shadowColor !== i2.light || (e3.itemStyle.shadowColor = i2[o2]);
        e3.emphasis.itemStyle.color !== a.dark && e3.emphasis.itemStyle.color !== a.light || (e3.emphasis.itemStyle.color = a[o2]);
        e3.emphasis.itemStyle.areaColor !== a.dark && e3.emphasis.itemStyle.areaColor !== a.light || (e3.emphasis.itemStyle.areaColor = a[o2]);
      }(l2, e2);
    });
  }, { immediate: true });
}
export {
  l as u
};
