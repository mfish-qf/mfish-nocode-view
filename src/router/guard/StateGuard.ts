import type { Router } from "vue-router";
import { useAppStore } from "/@/stores/modules/App";
import { useMultipleTabStore } from "/@/stores/modules/MultipleTab";
import { useUserStore } from "/@/stores/modules/User";
import { usePermissionStore } from "/@/stores/modules/Permission";
import { PageEnum } from "/@/enums/PageEnum";
import { removeTabChangeListener } from "/@/logics/mitt/RouteChange";

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // Just enter the login page and clear the authentication information
    if (to.path === PageEnum.BASE_LOGIN) {
      const tabStore = useMultipleTabStore();
      const userStore = useUserStore();
      const appStore = useAppStore();
      const permissionStore = usePermissionStore();
      appStore.resetAllState();
      permissionStore.resetState();
      tabStore.resetState();
      userStore.resetState();
      removeTabChangeListener();
    }
  });
}
