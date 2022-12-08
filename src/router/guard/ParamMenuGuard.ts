import type { Router } from "vue-router";
import { configureDynamicParamsMenu } from "../helper/MenuHelper";
import { Menu } from "../Types";
import { PermissionModeEnum } from "/@/enums/AppEnum";
import { useAppStoreWithOut } from "/@/store/modules/App";
import { usePermissionStoreWithOut } from "/@/store/modules/Permission";

export function createParamMenuGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, _, next) => {
    // 过滤没有name的路由
    if (!to.name) {
      next();
      return;
    }
    //是否已经动态添加路由
    if (!permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }
    let menus: Menu[] = [];
    if (isBackMode()) {
      menus = permissionStore.getBackMenuList;
    } else if (isRouteMappingMode()) {
      menus = permissionStore.getFrontMenuList;
    }
    menus.forEach((item) => configureDynamicParamsMenu(item, to.params));

    next();
  });
}

const getPermissionMode = () => {
  const appStore = useAppStoreWithOut();
  return appStore.getProjectConfig.permissionMode;
};

const isBackMode = () => {
  return getPermissionMode() === PermissionModeEnum.BACK;
};

const isRouteMappingMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROUTE_MAPPING;
};
