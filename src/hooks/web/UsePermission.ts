import type { RouteRecordRaw } from "vue-router";
import { useAppStore } from "/@/store/modules/App";
import { usePermissionStore } from "/@/store/modules/Permission";
import { useUserStore } from "/@/store/modules/User";
import { useTabs } from "./UseTabs";
import { router, resetRouter } from "/@/router";
import projectSetting from "/@/settings/ProjectSetting";
import { PermissionModeEnum } from "/@/enums/AppEnum";
import { intersection } from "lodash-es";
import { isArray } from "/@/utils/Is";
import { useMultipleTabStore } from "/@/store/modules/MultipleTab";

export function usePermission() {
  const userStore = useUserStore();
  const appStore = useAppStore();
  const permissionStore = usePermissionStore();
  const { closeAll } = useTabs(router);

  /**
   * Change permission mode
   */
  async function togglePermissionMode() {
    appStore.setProjectConfig({
      permissionMode:
        projectSetting.permissionMode === PermissionModeEnum.BACK
          ? PermissionModeEnum.ROUTE_MAPPING
          : PermissionModeEnum.BACK
    });
    location.reload();
  }

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
    closeAll();
  }

  /**
   * 是否有权限
   */
  function hasPermission(value?: string | string[], def = true): boolean {
    // Visible by default
    if (!value) {
      return def;
    }

    const permMode = projectSetting.permissionMode;

    if ([PermissionModeEnum.ROUTE_MAPPING, PermissionModeEnum.ROLE].includes(permMode)) {
      if (!isArray(value)) {
        return userStore.getRoleList?.includes(value);
      }
      return (intersection(value, userStore.getRoleList)).length > 0;
    }

    if (PermissionModeEnum.BACK === permMode) {
      const allCodeList = permissionStore.getPermCodeList as string[];
      if (!isArray(value)) {
        return allCodeList.includes(value);
      }
      return (intersection(value, allCodeList) as string[]).length > 0;
    }
    return true;
  }

  /**
   * refresh menu data
   */
  async function refreshMenu() {
    resume();
  }

  return { hasPermission, togglePermissionMode, refreshMenu };
}
