import type { Menu } from "/@/router/Types";
import { usePermissionStore } from "/@/store/modules/Permission";
import { getAllParentPath } from "/@/router/helper/MenuHelper";

export function getAllMenus() {
  const permissionStore = usePermissionStore();
  return permissionStore.getMenuList;
}

export function getMenus() {
  const permissionStore = usePermissionStore();
  const menuFilter = (items) => {
    return items.filter((item) => {
      const show = !item.meta?.hideMenu && !item.hideMenu;
      if (show && item.children) {
        item.children = menuFilter(item.children);
      }
      return show;
    });
  };
  return menuFilter(permissionStore.getMenuList);
}

export function getMenu(path: string) {
  if (!path) return undefined;
  let fMenu: Menu | undefined;
  const loop = (menus: Menu[] | undefined) => {
    if (!menus) {
      return;
    }
    for (const menu of menus) {
      if (menu.path === path) {
        fMenu = menu;
        return;
      }
      loop(menu?.children);
    }
    return undefined;
  };
  const menus = getAllMenus();
  loop(menus);
  return fMenu;
}

export async function getCurrentParentPath(currentPath: string) {
  const menus = getMenus();
  const allParentPath = getAllParentPath(menus, currentPath);
  return allParentPath?.[0];
}

// 获取一级菜单删除子选项
export async function getShallowMenus(): Promise<Menu[]> {
  const menus = getMenus();
  const shallowMenuList = menus.map((item) => ({ ...item, children: undefined }));
  return shallowMenuList;
}

// 获取子菜单
export async function getChildrenMenus(parentPath: string) {
  const menus = getMenus();
  const parent = menus.find((item) => item.path === parentPath);
  if (!parent || !parent.children || !!parent?.meta?.hideChildrenInMenu) {
    return [] as Menu[];
  }
  return parent.children;
}
