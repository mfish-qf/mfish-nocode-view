import { onUnmounted, getCurrentInstance } from "vue";
import { createContextMenu, destroyContextMenu } from "@/components/general/ContextMenu";

export function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }
  return [createContextMenu, destroyContextMenu];
}

export { type ContextMenuItem } from "@/components/general/ContextMenu";
