import { tryOnMounted, tryOnUnmounted, useDebounceFn } from "@vueuse/core";
import type { Fn } from "@mfish/types";

interface WindowSizeOptions {
  wait?: number;
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}

export function useWindowSizeFn(fn: Fn, options: WindowSizeOptions = {}) {
  const { wait = 150, immediate } = options;
  let handler = () => {
    fn();
  };

  handler = useDebounceFn(handler, wait);

  const start = () => {
    if (immediate) {
      handler();
    }
    window.addEventListener("resize", handler);
  };

  const stop = () => {
    window.removeEventListener("resize", handler);
  };

  tryOnMounted(() => {
    start();
  });

  tryOnUnmounted(() => {
    stop();
  });
  return { start, stop };
}
