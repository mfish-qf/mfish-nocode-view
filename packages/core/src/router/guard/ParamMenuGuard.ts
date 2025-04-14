import type { Router } from "vue-router";
import { configureDynamicParamsMenu } from "@core/router/helper/MenuHelper";
import { Menu } from "@core/router/Types";
import { usePermissionStoreWithOut } from "@mfish/stores/modules";

export function createParamMenuGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, _, next) => {
    // 过滤没有name的路由
    if (!to.name) {
      next();
      return;
    }
    // 是否已经动态添加路由
    if (!permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }
    const menus: Menu[] = permissionStore.getMenuList;
    menus.forEach((item) => configureDynamicParamsMenu(item, to.params));
    next();
  });
}
