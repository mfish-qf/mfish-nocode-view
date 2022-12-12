import type { AppRouteRecordRaw, Menu } from "/@/router/Types";
import type { Router, RouteRecordRaw } from "vue-router";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { transformObjToRoute, flatMultiLevelRoutes } from "/@/router/helper/RouteHelper";
import { transformRouteToMenu } from "/@/router/helper/MenuHelper";
import { getMenuRoute } from "/@/api/sys/Menu";
import { PageEnum } from "/@/enums/PageEnum";
import { routeModuleList } from "/@/router/routers";
import { getPermissions } from "/@/api/sys/User";

interface PermissionState {
  // 权限代码列表
  permissions: Set<string>;
  // 是否已经动态添加路由
  isDynamicAddedRoute: boolean;
  // 触发菜单更新
  lastBuildMenuTime: number;
  // 菜单列表
  menuList: Menu[];
  // 首页
  homePath: string;
}

export const usePermissionStore = defineStore({
  id: "app-permission",
  state: (): PermissionState => ({
    // 权限代码列表
    permissions: new Set(),
    // 是否已经动态添加路由
    isDynamicAddedRoute: false,
    // 触发菜单更新
    lastBuildMenuTime: 0,
    // 菜单列表
    menuList: [],
    //首页
    homePath: PageEnum.BASE_HOME
  }),
  getters: {
    getPermissions(): Set<string> {
      return this.permissions;
    },
    getMenuList(): Menu[] {
      return this.menuList;
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    }
  },
  actions: {
    setPermissions(permissions: Set<string>) {
      this.permissions = permissions;
    },
    setMenuList(list: Menu[]) {
      this.menuList = list;
      list?.length > 0 && this.setLastBuildMenuTime();
    },
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    setHomePath(homePath: string) {
      this.homePath = homePath || PageEnum.BASE_HOME;
    },
    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.permissions = new Set();
      this.menuList = [];
      this.lastBuildMenuTime = 0;
    },
    async changePermissionCode() {
      const permissions = await getPermissions();
      this.setPermissions(permissions);
    },
    // 构建路由
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      let routes: AppRouteRecordRaw[] = [];
      try {
        routes = <AppRouteRecordRaw[]>await getMenuRoute() ?? [];
        if (routes !== null) {
          // 动态引入组件
          transformObjToRoute<AppRouteRecordRaw>(routes);
        }
      } catch (error) {
        console.error(error);
      }
      routes.push(...routeModuleList);
      // 将路由转换成菜单
      const menuList = transformRouteToMenu(routes, true);
      // 对菜单进行排序
      menuList.sort((a, b) => {
        return (a.meta?.menuSort || 0) - (b.meta?.menuSort || 0);
      });
      if (menuList.length > 0) {
        //设置第一个菜单为首页
        this.setHomePath(menuList[0].path);
      }
      // 设置菜单列表
      this.setMenuList(menuList);
      console.log(menuList, "菜单");
      // 将多级路由转换为 2 级路由
      routes = flatMultiLevelRoutes(routes);
      console.log(routes, "路由");
      return routes;
    },

    async addRouter(router: Router) {
      const routes = await this.buildRoutesAction();
      routes.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw);
      });
      this.setDynamicAddedRoute(true);
    }
  }
});

// 需要在设置之外使用
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}