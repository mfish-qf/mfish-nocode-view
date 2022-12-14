import { defHttp } from "/@/utils/http/axios";
import { MenuRouteModel, MenuParams, MenuListItem } from "./model/MenuModel";

enum Api {
  menu = "/oauth2/menu",
  menuTree = "/oauth2/menu/tree",
  menuRoute = "/oauth2/menu/route",
}

/**
 * 获取菜单树
 * @param params
 */
export const getMenuTree = (params?: MenuParams) => {
  return defHttp.get<MenuListItem[]>({ url: Api.menuTree, params });
};
/**
 * 插入菜单、目录、按钮
 * @param params
 */
export const insertMenu = (params: MenuListItem) => {
  return defHttp.post<MenuListItem>({ url: Api.menu, params }, { successMessageMode: "message" });
};
export const updateMenu = (params: MenuListItem) => {
  return defHttp.put<MenuListItem>({ url: Api.menu, params }, { successMessageMode: "message" });
};
export const deleteMenu = (params: string) => {
  return defHttp.delete({ url: `${Api.menu}/${params}` }, { successMessageMode: "message" });
};
/**
 * 获取菜单路由
 */
export const getMenuRoute = (params?: MenuListItem) =>
  defHttp.get<MenuRouteModel>({ url: Api.menuRoute, params }, { successMessageMode: "none" });
