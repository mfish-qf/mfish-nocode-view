import { defHttp } from "/@/utils/http/axios";
import { MenuRouteModel, MenuParams, MenuListItem } from "./model/MenuModel";

enum Api {
  Menu = "/oauth2/menu",
  MenuTree = "/oauth2/menu/tree",
  RoleMenuTree = "/oauth2/menu/roleTree",
  MenuRoute = "/oauth2/menu/route",
}

export const getMenuList = (params?: MenuParams) => {
  return defHttp.get<MenuListItem[]>({ url: Api.Menu, params });
};
/**
 * 获取菜单树
 * @param params
 */
export const getMenuTree = (params?: MenuParams) => {
  return defHttp.get<MenuListItem[]>({ url: Api.MenuTree, params });
};
/**
 * 获取角色菜单
 */
export const getRoleMenuTree = () => {
  return defHttp.get<MenuListItem[]>({ url: Api.RoleMenuTree });
};
/**
 * 插入菜单、目录、按钮
 * @param params
 */
export const insertMenu = (params: MenuListItem) => {
  return defHttp.post<MenuListItem>({ url: Api.Menu, params }, { successMessageMode: "message" });
};
export const updateMenu = (params: MenuListItem) => {
  return defHttp.put<MenuListItem>({ url: Api.Menu, params }, { successMessageMode: "message" });
};
export const deleteMenu = (params: string) => {
  return defHttp.delete({ url: `${Api.Menu}/${params}` }, { successMessageMode: "message" });
};
/**
 * 获取菜单路由
 */
export const getMenuRoute = (params?: MenuListItem) =>
  defHttp.get<MenuRouteModel>({ url: Api.MenuRoute, params }, { successMessageMode: "none" });
