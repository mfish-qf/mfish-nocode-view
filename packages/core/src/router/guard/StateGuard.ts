import type { Router } from "vue-router";
import { useAppStore } from "@mfish/stores/modules";
import { useMultipleTabStore } from "@mfish/stores/modules";
import { useUserStore } from "@mfish/stores/modules";
import { usePermissionStore } from "@mfish/stores/modules";
import { PageEnum } from "@core/enums";
import { removeTabChangeListener } from "@core/logics/mitt/RouteChange";

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // 只需进入登录页面并清除身份验证信息
    if (to.path === PageEnum.BASE_LOGIN) {
      const tabStore = useMultipleTabStore();
      const userStore = useUserStore();
      const appStore = useAppStore();
      const permissionStore = usePermissionStore();
      appStore.resetAllState().then();
      permissionStore.resetState();
      tabStore.resetState();
      userStore.resetState();
      removeTabChangeListener();
    }
  });
}
