import type { Menu } from "/@/router/Types";
import { usePermissionStore } from "/@/store/modules/Permission";
import { getAllParentPath } from "/@/router/helper/MenuHelper";

async function getAsyncMenus() {
  const permissionStore = usePermissionStore();
  return permissionStore.getMenuList.filter((item) => !item.meta?.hideMenu && !item.hideMenu);
}

export const getMenus = async (): Promise<Menu[]> => {
  return await getAsyncMenus();
};

export async function getCurrentParentPath(currentPath: string) {
  const menus = await getAsyncMenus();
  const allParentPath = getAllParentPath(menus, currentPath);
  return allParentPath?.[0];
}

// 获取一级菜单删除子选项
export async function getShallowMenus(): Promise<Menu[]> {
  const menus = await getAsyncMenus();
  const shallowMenuList = menus.map((item) => ({ ...item, children: undefined }));
  return shallowMenuList;
}

// 获取子菜单
export async function getChildrenMenus(parentPath: string) {
  const menus = await getMenus();
  const parent = menus.find((item) => item.path === parentPath);
  if (!parent || !parent.children || !!parent?.meta?.hideChildrenInMenu) {
    return [] as Menu[];
  }
  return parent.children;
}
