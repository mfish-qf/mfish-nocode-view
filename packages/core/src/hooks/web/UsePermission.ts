import type { RouteRecordRaw } from "vue-router";
import { usePermissionStore } from "@mfish/stores/modules";
import { useUserStore } from "@mfish/stores/modules";
import { useTabs } from "@core/hooks/web/UseTabs";
import { router, resetRouter } from "@core/router";
import { isArray } from "@core/utils/Is";
import { useMultipleTabStore } from "@mfish/stores/modules";

export function usePermission() {
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const { closeAll } = useTabs(router);
  const ALL_PERMISSION = "*:*:*";
  const SUPER_ROLE = "superAdmin";

  /**
   * Reset and regain authority resource information
   * 重置和重新获得权限资源信息
   *
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
    // 超户角色返回有权限
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
    // 包含*:*:*用户拥有所有按钮权限
    if (permissions.has("*:*:*")) {
      return true;
    }
    return hasValue(value, permissions);
  }

  /**
   * 判断是否为租户管理员
   */
  function hasTenant(): boolean {
    const tenants = userStore.getUserInfo?.tenants;
    if (tenants) {
      const tenant = tenants.find((tenant) => tenant.id === userStore.getTenantId);
      return !!tenant && tenant.master === 1;
    }
    return false;
  }

  function hasValue(value, values: Set<string>) {
    if (!isArray(value)) {
      return values.has(value);
    }
    for (const val of value) {
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

  /**
   * 是否租户
   */
  function isTenant() {
    return userStore.getTenantId !== undefined && userStore.getTenantId !== "";
  }

  /**
   * 是否租户管理员
   */
  function userIsSuperTenant() {
    return userStore.getTenantId === "1";
  }

  /**
   * 是否超级管理员
   */
  function isSuperAdmin(userId: string) {
    return userId === "1";
  }

  /**
   * 判断当前用户是否超户
   */
  function userIsSuperAdmin() {
    return userStore.getUserInfo?.id === "1";
  }

  /**
   * 是否超户角色
   * @param roleId 角色id
   */
  function isSuperRole(roleId: string) {
    return roleId === "1";
  }

  /**
   * 是否个人角色
   * @param roleId
   */
  function isPersonRole(roleId: string) {
    return roleId === "0";
  }

  /**
   * 是否超户组织
   * @param orgId 组织id
   */
  function isSuperOrg(orgId: string) {
    return orgId === "1";
  }

  return {
    hasPermission,
    hasRole,
    hasTenant,
    refreshMenu,
    ALL_PERMISSION,
    SUPER_ROLE,
    isTenant,
    userIsSuperTenant,
    userIsSuperAdmin,
    isSuperAdmin,
    isSuperRole,
    isSuperOrg,
    isPersonRole
  };
}
