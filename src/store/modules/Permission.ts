import type { AppRouteRecordRaw, Menu } from "/@/router/Types";
import type { Router, RouteRecordRaw } from "vue-router";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useAppStoreWithOut } from "./App";
import { transformObjToRoute, flatMultiLevelRoutes } from "/@/router/helper/RouteHelper";
import { transformRouteToMenu } from "/@/router/helper/MenuHelper";
import projectSetting from "/@/settings/ProjectSetting";
import { PermissionModeEnum } from "/@/enums/AppEnum";
import { asyncRoutes } from "/@/router/routers";
import { filter } from "/@/utils/helper/TreeHelper";
import { getMenuRoute } from "/@/api/sys/Menu";
import { getPermCode } from "/@/api/sys/User";
import { useMessage } from "/@/hooks/web/UseMessage";
import { PageEnum } from "/@/enums/PageEnum";

interface PermissionState {
  // 权限代码列表
  permCodeList: string[] | number[];
  // 是否已经动态添加路由
  isDynamicAddedRoute: boolean;
  // 触发菜单更新
  lastBuildMenuTime: number;
  // 后台菜单列表
  backMenuList: Menu[];
  // 菜单列表
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore({
  id: "app-permission",
  state: (): PermissionState => ({
    // 权限代码列表
    permCodeList: [],
    // 是否已经动态添加路由
    isDynamicAddedRoute: false,
    // 触发菜单更新
    lastBuildMenuTime: 0,
    // 后台菜单列表
    backMenuList: [],
    // menu List
    // 菜单列表
    frontMenuList: []
  }),
  getters: {
    getPermCodeList(): string[] | number[] {
      return this.permCodeList;
    },
    getBackMenuList(): Menu[] {
      return this.backMenuList;
    },
    getFrontMenuList(): Menu[] {
      return this.frontMenuList;
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    }
  },
  actions: {
    setPermCodeList(codeList: string[]) {
      this.permCodeList = codeList;
    },

    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
      list?.length > 0 && this.setLastBuildMenuTime();
    },

    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },

    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },

    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.permCodeList = [];
      this.backMenuList = [];
      this.lastBuildMenuTime = 0;
    },
    async changePermissionCode() {
      const codeList = await getPermCode();
      this.setPermCodeList(codeList);
    },

    // 构建路由
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const { t } = useI18n();
      const appStore = useAppStoreWithOut();
      let routes: AppRouteRecordRaw[] = [];
      const { permissionMode = projectSetting.permissionMode } = appStore.getProjectConfig;
      const routeRemoveIgnoreFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        // ignoreRoute 为true 则路由仅用于菜单生成，不会在实际的路由表中出现
        const { ignoreRoute } = meta || {};
        // arr.filter 返回 true 表示该元素通过测试
        return !ignoreRoute;
      };
      /**
       * @description 根据设置的首页path，修正routes中的affix标记（固定首页）
       * */
      const patchHomeAffix = (routes: AppRouteRecordRaw[]) => {
        if (!routes || routes.length === 0) return;
        let homePath: string = PageEnum.BASE_HOME;

        function patcher(routes: AppRouteRecordRaw[], parentPath = "") {
          if (parentPath) parentPath = parentPath + "/";
          for (let route of routes) {
            const { path, children, redirect } = route;
            const currentPath = path.startsWith("/") ? path : parentPath + path;
            if (currentPath === homePath) {
              if (!redirect) {
                route.meta = Object.assign({}, route.meta, { affix: true });
                break;

              }
              homePath = route.redirect! as string;
            }
            children && children.length > 0 && patcher(children, currentPath);
          }
        }

        patcher(routes);
        return;
      };
      routes = asyncRoutes;
      console.log(routes, "routes");
      switch (permissionMode) {
        // 路由映射， 默认进入该case
        case PermissionModeEnum.ROUTE_MAPPING:
          // 将路由转换成菜单
          const menuList = transformRouteToMenu(routes, true);
          // 移除掉 ignoreRoute: true 的路由 非一级路由
          routes = filter(routes, routeRemoveIgnoreFilter);
          // 移除掉 ignoreRoute: true 的路由 一级路由；
          routes = routes.filter(routeRemoveIgnoreFilter);
          // 对菜单进行排序
          menuList.sort((a, b) => {
            return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0);
          });
          // 设置菜单列表
          this.setFrontMenuList(menuList);
          // Convert multi-level routing to level 2 routing
          // 将多级路由转换为 2 级路由
          routes = flatMultiLevelRoutes(routes);
          break;
        //  如果确定不需要做后台动态权限，请在下方评论整个判断
        case PermissionModeEnum.BACK:
          const { createMessage } = useMessage();
          createMessage.loading({
            content: t("sys.app.menuLoading"),
            duration: 1
          });
          // 模拟从后台获取权限码，
          // 这个功能可能只需要执行一次，实际项目可以自己放在合适的时间
          let routeList: AppRouteRecordRaw[] = [];
          try {
            await this.changePermissionCode();
            routeList = (await getMenuRoute()) as AppRouteRecordRaw[];
          } catch (error) {
            console.error(error);
          }
          // 动态引入组件
          routeList = transformObjToRoute(routeList);
          //  后台路由到菜单结构
          const backMenuList = transformRouteToMenu(routeList);
          this.setBackMenuList(backMenuList);
          // 删除 meta.ignoreRoute 项
          routeList = filter(routeList, routeRemoveIgnoreFilter);
          routeList = routeList.filter(routeRemoveIgnoreFilter);
          routes = flatMultiLevelRoutes(routeList);
          break;
      }
      patchHomeAffix(routes);
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
