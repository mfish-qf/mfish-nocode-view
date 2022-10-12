import type { Router } from "vue-router";
import { useAppStore } from "/@/store/modules/App";
import { useMultipleTabStore } from "/@/store/modules/MultipleTab";
import { useUserStore } from "/@/store/modules/User";
import { usePermissionStore } from "/@/store/modules/Permission";
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
