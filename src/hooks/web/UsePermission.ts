import type { RouteRecordRaw } from "vue-router";
import { usePermissionStore } from "/@/store/modules/Permission";
import { useUserStore } from "/@/store/modules/User";
import { useTabs } from "./UseTabs";
import { router, resetRouter } from "/@/router";
import { isArray } from "/@/utils/Is";
import { useMultipleTabStore } from "/@/store/modules/MultipleTab";

export function usePermission() {
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const { closeAll } = useTabs(router);
  const ALL_PERMISSION = "*:*:*";
  const SUPER_ROLE = "superAdmin";

  /**
   * Reset and regain authority resource information
   * 重置和重新获得权限资源信息
   * @param id
   */
  async function resume() {
    const tabStore = useMultipleTabStore();
    tabStore.clearCacheTabs();
    resetRouter();
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });
    permissionStore.setLastBuildMenuTime();
    closeAll().then();
  }

  /**
   * 是否有角色
   * @param value
   */
  function hasRole(value: string | string[]): boolean {
    const roles = userStore.getRoleList;
    //超户角色返回有权限
    if (roles.has(SUPER_ROLE)) {
      return true;
    }
    return hasValue(value, roles);
  }

  /**
   * 是否有权限
   */
  function hasPermission(value?: string | string[], def = true): boolean {
    if (!value) {
      return def;
    }
    const permissions = permissionStore.getPermissions;
    //包含*:*:*用户拥有所有按钮权限
    if (permissions.has("*:*:*")) {
      return true;
    }
    return hasValue(value, permissions);
  }

  function hasValue(value, values: Set<string>) {
    if (!isArray(value)) {
      return values.has(value);
    }
    for (let val of value) {
      if (values.has(val)) {
        return true;
      }
    }
    return false;
  }

  /**
   * refresh menu data
   */
  async function refreshMenu() {
    resume().then();
  }

  return { hasPermission, hasRole, refreshMenu, ALL_PERMISSION, SUPER_ROLE };
}
