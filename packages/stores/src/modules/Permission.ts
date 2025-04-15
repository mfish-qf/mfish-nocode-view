import type { AppRouteRecordRaw, Menu } from "@mfish/core/router";
import {
  flatMultiLevelRoutes,
  formatPath,
  IFRAME,
  importComponent,
  LAYOUT,
  RootRoute,
  transformRouteToMenu
} from "@mfish/core/router";
import type { Router, RouteRecordRaw } from "vue-router";
import { defineStore } from "pinia";
import { store } from "../index";
import { getRoleMenuTree, MenuListItem, MenuType } from "@mfish/core/api";
import { PageEnum } from "@mfish/core/enums";
import { routeModuleList } from "@/routers";
import { isUrl } from "@mfish/core/utils/Is";
import { Nullable } from "@mfish/types";

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

export const usePermissionStore = defineStore("app-permission", {
  state: (): PermissionState => ({
    // 权限代码列表
    permissions: new Set(),
    // 是否已经动态添加路由
    isDynamicAddedRoute: false,
    // 触发菜单更新
    lastBuildMenuTime: 0,
    // 菜单列表
    menuList: [],
    // 首页
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
    },
    getHomePath(): string {
      return this.homePath;
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
      this.lastBuildMenuTime = Date.now();
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
    // 构建路由
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const menus = await getRoleMenuTree();
      const getActiveMenu = (menus: MenuListItem[], menuCode: string): string => {
        if (!menuCode) {
          return "";
        }
        let fMenus: Nullable<MenuListItem[]> = menus;
        let path = "";
        for (let i = 0; i < menuCode.length / 5; i++) {
          if (fMenus === null) break;
          const code = menuCode.slice(0, Math.max(0, (i + 1) * 5));
          const fMenu: any = fMenus.find((menu) => menu.menuCode === code);
          if (fMenu !== undefined && fMenu !== null) {
            path += formatPath(fMenu.routePath);
            fMenus = fMenu.children;
          }
        }
        return path;
      };
      const menuList: Menu[] = [];
      const routes: AppRouteRecordRaw[] = [];
      const buildMenu = (menu: MenuListItem): Menu => {
        const newMenu: Menu = {
          name: menu.menuName,
          hideMenu: !menu.isVisible,
          path: formatPath(menu.routePath),
          menuSort: menu.menuSort,
          icon: menu.menuIcon,
          isExternal: menu.isExternal === 1
        };
        // 如果菜单类型是菜单而且是url链接并且是从外部打开，path直接使用外部路径
        if (menu.menuType === MenuType.菜单 && isUrl(menu.component) && menu.isExternal) {
          newMenu.path = menu.component;
        }
        return newMenu;
      };
      const buildRoute = (menu: MenuListItem): AppRouteRecordRaw => {
        const route: AppRouteRecordRaw = {
          name: menu.id,
          path: formatPath(menu.routePath),
          meta: {
            title: menu.menuName,
            icon: menu.menuIcon,
            hideMenu: !menu.isVisible,
            menuSort: menu.menuSort,
            keepAlive: !!menu.isKeepalive
          }
        };
        switch (menu.menuType) {
          case MenuType.目录: {
            route.component = LAYOUT;
            break;
          }
          case MenuType.菜单: {
            // 如果组件是URL地址，设置frame地址
            if (isUrl(menu.component)) {
              route.meta.frameSrc = menu.component;
              // 如果URL外部打开设置path为url,如果是内部打开设置基于iframe打开
              if (menu.isExternal) {
                route.path = menu.component;
              } else {
                route.component = IFRAME;
              }
            } else {
              route.component = importComponent(menu.component);
            }
            // 如果菜单为隐藏菜单且设置了选中时激活菜单
            if (!menu.isVisible && menu.activeMenu) {
              route.meta.currentActiveMenu = getActiveMenu(menus, menu.activeMenu);
            }
            break;
          }
        }
        return route;
      };
      const directMenu = (menu: MenuListItem): Menu => {
        const newMenu: Menu = buildMenu(menu);
        newMenu.meta = { title: newMenu.name, hideChildrenInMenu: true };
        return newMenu;
      };
      const directRoute = (menu: MenuListItem): AppRouteRecordRaw => {
        const route = buildRoute(menu);
        if (!menu.isExternal) {
          route.component = LAYOUT;
          route.children = [
            {
              path: "",
              name: `${menu.id}child`,
              meta: { title: menu.menuName, icon: menu.menuIcon },
              component: importComponent(menu.component)
            }
          ];
        }
        return route;
      };
      buildMenuRoute(menus, menuList, routes);

      /**
       * 构建第一级目录
       * @param menus
       * @param menuList
       * @param routes
       */
      function buildMenuRoute(menus: MenuListItem[], menuList: Menu[], routes: AppRouteRecordRaw[]) {
        for (const menu of menus) {
          if (menu.children !== null && menu.children.length > 0) {
            const cMenu: Menu = buildMenu(menu);
            menuList.push(cMenu);
            const cRoute: AppRouteRecordRaw = buildRoute(menu);
            routes.push(cRoute);
            cMenu.children = [];
            cRoute.children = [];
            buildChildMenuRoute(menu.children, cMenu, cRoute);
            continue;
          }
          if (menu.menuType === MenuType.菜单) {
            // 没有子节点而且是菜单，需要构造一个Layout壳
            menuList.push(directMenu(menu));
            routes.push(directRoute(menu));
          }
        }
      }

      /**
       * 递归构建子集目录
       * @param menus 菜单集合
       * @param pMenu 父菜单
       * @param pRoute 父路由
       */
      function buildChildMenuRoute(menus: MenuListItem[], pMenu: Menu, pRoute: AppRouteRecordRaw) {
        let i = 0;
        for (const menu of menus) {
          const cMenu: Menu = buildMenu(menu);
          cMenu.isExternal = menu.isExternal === 1;
          pMenu.children?.push(cMenu);
          const cRoute: AppRouteRecordRaw = buildRoute(menu);
          // 如果组件不是外部地址，采用内部路由path处理
          if (!menu.isExternal) {
            if (i++ === 0) {
              pRoute.redirect = pRoute.path + cRoute.path;
            }
            cRoute.path = cRoute.path.slice(1);
            cMenu.path = pMenu.path + cMenu.path;
          }
          if (menu.children !== null && menu.children.length > 0) {
            cMenu.children = [];
            cRoute.children = [];
            buildChildMenuRoute(menu.children, cMenu, cRoute);
          } else if (menu.menuType === MenuType.目录) {
            // 没有子菜单的目录不push到路由中
            continue;
          }
          // 如果外部打开且不是url直接添加到路由集合不使用layout包装
          if (menu.isExternal && !isUrl(menu.component)) {
            // 使用菜单全路径路由
            cRoute.path = cMenu.path;
            routes.push(cRoute);
          } else {
            pRoute.children?.push(cRoute);
          }
        }
      }

      // 如果存在前端路由信息，补充到到后台
      routes.push(...routeModuleList);
      if (routeModuleList !== null && routeModuleList.length > 0) {
        // 将路由转换成菜单
        const frontMenu = transformRouteToMenu(routeModuleList, true);
        menuList.push(...frontMenu);
        // 对菜单进行排序
        menuList.sort((a, b) => {
          return (a.menuSort || 0) - (b.menuSort || 0);
        });
      }
      if (menuList.length > 0) {
        // 设置第一个菜单为首页
        this.setHomePath(menuList[0].path);
      }
      // 设置菜单列表
      this.setMenuList(menuList);
      console.log(menuList, "菜单");
      // 将多级路由转换为 2 级路由
      const route: AppRouteRecordRaw[] = flatMultiLevelRoutes(routes);
      console.log(route, "路由");
      return route;
    },

    async addRouter(router: Router) {
      const routes = await this.buildRoutesAction();
      // 添加基础路由
      router.addRoute(RootRoute(this.getHomePath) as unknown as RouteRecordRaw);
      // 添加其他路由
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
