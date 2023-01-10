import { onUnmounted, getCurrentInstance } from "vue";
import { createContextMenu, destroyContextMenu } from "/@/components/general/ContextMenu";
import type { ContextMenuItem } from "/@/components/general/ContextMenu";

export type { ContextMenuItem };

export function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }
  return [createContextMenu, destroyContextMenu];
}
