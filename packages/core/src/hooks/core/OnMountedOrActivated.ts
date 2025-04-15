import { nextTick, onActivated, onMounted } from "vue";
import { Fn } from "@mfish/types";

export function onMountedOrActivated(hook: Fn) {
  let mounted: boolean;

  onMounted(() => {
    hook();
    nextTick(() => {
      mounted = true;
    }).then();
  });

  onActivated(() => {
    if (mounted) {
      hook();
    }
  });
}
