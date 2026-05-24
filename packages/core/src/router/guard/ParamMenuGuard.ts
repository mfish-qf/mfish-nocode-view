import type { Router } from "vue-router";
import { configureDynamicParamsMenu, Menu } from "@core/router";
import { usePermissionStoreWithOut } from "@mfish/stores/modules";

export function createParamMenuGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to) => {
    // 过滤没有name的路由
    if (!to.name) {
      return true;
    }
    // 是否已经动态添加路由
    if (!permissionStore.getIsDynamicAddedRoute) {
      return true;
    }
    const menus: Menu[] = permissionStore.getMenuList;
    menus.forEach((item) => configureDynamicParamsMenu(item, to.params));
    return true;
  });
}
