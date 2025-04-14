import type { BarMap } from "./types";
import type { Recordable } from "@mfish/types";

export const BAR_MAP: BarMap = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};

// @ts-ignore
export function renderThumbStyle({ move, size, bar }) {
  const style = {} as any;
  const translate = `translate${bar.axis}(${move}%)`;

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
}

export function toObject<T>(arr: Array<T>): Recordable<T> {
  const res = {};
  for (const element of arr) {
    if (element) {
      Object.assign(res, element);
    }
  }
  return res;
}
