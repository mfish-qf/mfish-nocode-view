import type { Menu, AppRouteRecordRaw } from "../Types";
import { findPath, treeMap } from "@core/utils/helper/TreeHelper";
import { cloneDeep } from "lodash-es";
import { isUrl } from "@core/utils/Is";
import { RouteParams } from "vue-router";
import { toRaw } from "vue";
import { Recordable } from "@mfish/types";

export function getAllParentPath<T = Recordable>(treeData: T[], path: string) {
  const menuList = findPath(treeData, (n) => n.path === path) as Menu[];
  return (menuList || []).map((item) => item.path);
}

// 非URL增加 /
export function formatPath(path: string) {
  if (!!path && (path.startsWith("/") || isUrl(path))) {
    return path;
  }
  return `/${path}`;
}

// 路径处理
function joinParentPath(menus: Menu[], parentPath = "") {
  for (const menu of menus) {
    // https://next.router.vuejs.org/guide/essentials/nested-routes.html
    // Note that nested paths that start with / will be treated as a root path.
    // 请注意，以 / 开头的嵌套路径将被视为根路径。
    // This allows you to leverage the component nesting without having to use a nested URL.
    // 这允许你利用组件嵌套，而无需使用嵌套 URL。
    if (!(menu.path.startsWith("/") || isUrl(menu.path))) {
      // path doesn't start with /, nor is it a url, join parent path
      // 路径不以 / 开头，也不是 url，加入父路径
      menu.path = `${parentPath}/${menu.path}`;
    }
    if (menu?.children?.length) {
      joinParentPath(menu.children, menu.meta?.hidePathForChildren ? parentPath : menu.path);
    }
  }
}

// 将路由转换成菜单
export function transformRouteToMenu(routeModList: AppRouteRecordRaw[], routerMapping = false) {
  // 借助 lodash 深拷贝
  const cloneRouteModList = cloneDeep(routeModList);
  const routeList: AppRouteRecordRaw[] = [];
  // 对路由项进行修改
  cloneRouteModList.forEach((item) => {
    if (routerMapping && item.meta.hideChildrenInMenu && typeof item.redirect === "string") {
      item.path = item.redirect;
    }
    routeList.push(item);
  });
  // 提取树指定结构
  const list = treeMap(routeList, {
    conversion: (node: AppRouteRecordRaw) => {
      const { meta: { title, hideMenu = false } = {} } = node;

      return {
        ...node.meta,
        meta: node.meta,
        name: title,
        hideMenu,
        path: node.path,
        ...(node.redirect ? { redirect: node.redirect } : {})
      };
    }
  });
  //如果设置菜单隐藏子菜单，删除当前菜单children属性
  list.forEach((item) => {
    if (item.hideChildrenInMenu) {
      delete item.children;
    }
  });
  // 路径处理
  joinParentPath(list);
  return cloneDeep(list);
}

/**
 * config menu with given params
 */
// eslint-disable-next-line regexp/no-empty-capturing-group
const menuParamRegex = /:([\s\S]+?)((?=\/)|$)/g;

export function configureDynamicParamsMenu(menu: Menu, params: RouteParams) {
  const { path, paramPath } = toRaw(menu);
  let realPath = paramPath || path;
  const matchArr = realPath.match(menuParamRegex);

  matchArr?.forEach((it) => {
    const realIt = it.slice(1);
    if (params[realIt]) {
      realPath = realPath.replace(`:${realIt}`, params[realIt] as string);
    }
  });
  // save original param path.
  if (!paramPath && matchArr && matchArr.length > 0) {
    menu.paramPath = path;
  }
  menu.path = realPath;
  // children
  menu.children?.forEach((item) => configureDynamicParamsMenu(item, params));
}
