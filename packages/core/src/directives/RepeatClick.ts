import { on, once } from "@core/utils/DomUtils";
import type { Directive, DirectiveBinding } from "vue";
import { IntervalHandle, Nullable } from "@mfish/types";

/**
 * Prevent repeated clicks
 * @Example v-repeat-click="()=>{}"
 */
const repeatDirective: Directive = {
  beforeMount(el: Element, binding: DirectiveBinding) {
    let interval: Nullable<IntervalHandle> = null;
    let startTime = 0;
    const handler = (): void => binding?.value();
    const clear = (): void => {
      if (Date.now() - startTime < 100) {
        handler();
      }
      interval && clearInterval(interval);
      interval = null;
    };

    //@ts-ignore 监听全局的点击事件
    on(el, "mousedown", (e: MouseEvent): void => {
      if ((e as any).button !== 0) return;
      startTime = Date.now();
      once(document as any, "mouseup", clear);
      interval && clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

export default repeatDirective;
