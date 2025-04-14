import { createLoading } from "@core/components/Loading";
import type { App, Directive } from "vue";

const loadingDirective: Directive = {
  mounted(el, binding) {
    const tip = el.getAttribute("loading-tip");
    const background = el.getAttribute("loading-background");
    const size = el.getAttribute("loading-size");
    const fullscreen = binding.modifiers.fullscreenElement;
    el.instance = createLoading(
      {
        tip,
        background,
        size: size || "large",
        loading: !!binding.value,
        absolute: !fullscreen
      },
      fullscreen ? document.body : el
    );
  },
  updated(el, binding) {
    const instance = el.instance;
    if (!instance) return;
    instance.setTip(el.getAttribute("loading-tip"));
    if (binding.oldValue !== binding.value) {
      instance.setLoading?.(binding.value && !instance.loading);
    }
  },
  unmounted(el) {
    el?.instance?.close();
  }
};

export function setupLoadingDirective(app: App) {
  app.directive("loading", loadingDirective);
}

export default loadingDirective;
