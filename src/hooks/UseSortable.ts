import type { Ref } from "vue";
import { nextTick, unref } from "vue";
import type { Options } from "sortablejs";

export function useSortable(el: HTMLElement | Ref<HTMLElement>, options?: Options) {
  function initSortable() {
    nextTick(async () => {
      if (!el) return;
      const sortablejs = await import("sortablejs");
      const Sortable = sortablejs.default;
      Sortable.create(unref(el), {
        animation: 500,
        delay: 400,
        delayOnTouchOnly: true,
        ...options
      });
    }).then();
  }

  return { initSortable };
}
