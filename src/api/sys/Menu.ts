import { defHttp } from "/@/utils/http/axios";
import { MenuRouteModel, MenuTreeModel, MenuParams } from "./model/MenuModel";

enum Api {
  getMenuTree = "/oauth2/ssoMenu/tree",
  getMenuRoute = "/oauth2/ssoMenu/route",
}

/**
 * 获取菜单树
 * @param params
 */
export const getMenuTree = (params?: MenuParams) => {
  return defHttp.get<MenuTreeModel>({ url: Api.getMenuTree, params });
};

/**
 * 获取菜单路由
 */
export const getMenuRoute = () =>
  defHttp.get<MenuRouteModel>({ url: Api.getMenuRoute });
