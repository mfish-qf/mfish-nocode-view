import { u as t, D as n } from "./index.js";
import { cloneDeep as o } from "lodash-es";
function e() {
  const e2 = t();
  return { getEventComponents: function(t2) {
    const s = [], r = (n2) => n2.chart.events && n2.chart.events.emits && n2.chart.events.emits.length > 0 && (t2 && n2.chart.id !== e2.getCurConfigComponent.chart.id || !t2);
    for (const t3 of e2.getComponentList) {
      if (t3.chart.type !== n.MfCombine) {
        r(t3) && s.push(o(t3));
        continue;
      }
      const e3 = o(t3);
      e3.chart.options.components = e3.chart.options.components.filter((t4) => r(t4)), (e3.chart.options.components.length > 0 || r(e3)) && s.push(e3);
    }
    return s;
  } };
}
export {
  e as u
};
