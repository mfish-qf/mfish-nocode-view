import ResizeObserver from "resize-observer-polyfill";

const isServer = typeof globalThis === "undefined";

/* istanbul ignore next */
function resizeHandler(entries: any[]) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length > 0) {
      listeners.forEach((fn: () => any) => {
        fn();
      });
    }
  }
}

/* istanbul ignore next */
export function addResizeListener(element: any, fn: () => any) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
}

/* istanbul ignore next */
export function removeResizeListener(element: any, fn: () => any) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (element.__resizeListeners__.length === 0) {
    element.__ro__.disconnect();
  }
}

export function triggerWindowResize() {
  const event = document.createEvent("HTMLEvents");
  event.initEvent("resize", true, true);
  (event as any).eventType = "message";
  globalThis.dispatchEvent(event);
}
