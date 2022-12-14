import type { AppRouteRecordRaw, Menu } from "/@/router/Types";
import type { Router, RouteRecordRaw } from "vue-router";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { getMenuTree } from "/@/api/sys/Menu";
import { PageEnum } from "/@/enums/PageEnum";
import { routeModuleList } from "/@/router/routers";
import { getPermissions } from "/@/api/sys/User";
import { MenuListItem, MenuType } from "/@/api/sys/model/MenuModel";
import { IFRAME, LAYOUT } from "/@/router/Constant";
import { formatPath, transformRouteToMenu } from "/@/router/helper/MenuHelper";
import { flatMultiLevelRoutes } from "/@/router/helper/RouteHelper";
import { isUrl } from "/@/utils/Is";

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
      const menus = await getMenuTree({ menuType: MenuType.菜单 });
      let menuList: Menu[] = [];
      let routes: AppRouteRecordRaw[] = [];
      const component = (path) => import(`/@/views${path}`);
      const buildMenu = (menu: MenuListItem): Menu => {
        const newMenu: Menu = {
          name: menu.menuName,
          hideMenu: !menu.isVisible,
          path: formatPath(menu.routePath),
          menuSort: menu.menuSort,
          icon: menu.menuIcon
        };
        //如果
        if (menu.menuType === MenuType.菜单 && isUrl(menu.component) && menu.isExternal) {
          newMenu.path = menu.component;
        }
        return newMenu;
      };
      const buildRoute = (menu: MenuListItem): AppRouteRecordRaw => {
        const route: AppRouteRecordRaw = {
          name: menu.menuName,
          path: formatPath(menu.routePath),
          meta: {
            title: menu.menuName,
            icon: menu.menuIcon,
            hideMenu: !menu.isVisible,
            menuSort: menu.menuSort,
            ignoreKeepAlive: !menu.isKeepalive
          }
        };
        switch (menu.menuType) {
          case MenuType.目录:
            route.component = LAYOUT;
            break;
          case MenuType.菜单:
            //如果组件是URL地址，设置frame地址
            if (isUrl(menu.component)) {
              route.meta.frameSrc = menu.component;
              //如果URL外部打开设置path为url,如果是内部打开设置基于iframe打开
              if (menu.isExternal) {
                route.path = menu.component;
              } else {
                route.component = IFRAME;
              }
            } else {
              route.component = () => component(menu.component);
            }
            break;
        }
        return route;
      };
      const index = "index";
      const directMenu = (menu: MenuListItem): Menu => {
        const newMenu: Menu = buildMenu(menu);
        newMenu.path = `${newMenu.path}/${index}`;
        newMenu.meta = { hideChildrenInMenu: true };
        return newMenu;
      };
      const directRoute = (menu: MenuListItem): AppRouteRecordRaw => {
        const route = buildRoute(menu);
        route.redirect = `${route.path}/${index}`;
        route.component = LAYOUT;
        route.children = [
          {
            path: index,
            name: menu.menuName,
            meta: { title: menu.menuName, icon: menu.menuIcon },
            component: () => component(menu.component)
          }
        ];
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
        for (let menu of menus) {
          if (menu.children != null && menu.children.length > 0) {
            let cMenu: Menu = buildMenu(menu);
            menuList.push(cMenu);
            let cRoute: AppRouteRecordRaw = buildRoute(menu);
            routes.push(cRoute);
            cMenu.children = [];
            cRoute.children = [];
            buildChildMenuRoute(menu.children, cMenu, cRoute);
            continue;
          }
          if (menu.menuType == MenuType.菜单) {
            //没有子节点而且是菜单，需要构造一个Layout壳
            menuList.push(directMenu(menu));
            routes.push(directRoute(menu));
          }
        }
      }

      /**
       * 递归构建子集目录
       * @param menus
       * @param pMenu
       * @param pRoute
       */
      function buildChildMenuRoute(menus: MenuListItem[], pMenu: Menu, pRoute: AppRouteRecordRaw) {
        let i = 0;
        for (let menu of menus) {
          let cMenu: Menu = buildMenu(menu);
          cMenu.isExternal = menu.isExternal === 1 ? true : false;
          pMenu.children?.push(cMenu);
          let cRoute: AppRouteRecordRaw = buildRoute(menu);
          if (!isUrl(menu.component)) {
            if (i++ == 0) {
              pRoute.redirect = pRoute.path + cRoute.path;
            }
            cRoute.path = cRoute.path.substring(1);
            cMenu.path = pMenu.path + cMenu.path;
          }
          pRoute.children?.push(cRoute);
          if (menu.children != null && menu.children.length > 0) {
            cMenu.children = [];
            cRoute.children = [];
            buildChildMenuRoute(menu.children, cMenu, cRoute);
          }
        }
      }

      //如果存在前端路由信息，补充到到后台
      routes.push(...routeModuleList);
      if (routeModuleList != null && routeModuleList.length > 0) {
        // 将路由转换成菜单
        const frontMenu = transformRouteToMenu(routeModuleList, true);
        menuList.push(...frontMenu);
        // 对菜单进行排序
        menuList.sort((a, b) => {
          return (a.meta?.menuSort || 0) - (b.meta?.menuSort || 0);
        });
      }
      // 设置菜单列表
      this.setMenuList(menuList);
      // 将多级路由转换为 2 级路由
      routes = flatMultiLevelRoutes(routes);
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