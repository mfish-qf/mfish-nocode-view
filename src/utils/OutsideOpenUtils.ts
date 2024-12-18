import { onMounted, onUnmounted } from "vue";
import { buildUUID } from "@/utils/Uuid";

/**
 * @description: 外部打开窗体完成后触发通用类
 * @author: mfish
 * @date: 2024/8/7
 */
export const useOutsideOpen = (constant: string, complete?: () => void) => {
  onMounted(() => {
    globalThis.addEventListener("storage", onStorageHandle);
  });
  onUnmounted(() => {
    globalThis.removeEventListener("storage", onStorageHandle);
  });

  function onStorageHandle(e) {
    if (e.key !== constant) return;
    complete && complete();
  }

  function open(routeData: any) {
    localStorage.setItem(constant, buildUUID());
    window.open(routeData.href, "_blank");
  }
  function end() {
    localStorage.setItem(constant, buildUUID());
  }
  return { open, end };
};
