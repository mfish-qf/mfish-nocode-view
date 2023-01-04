/**
 * @description: 菜单信息
 * @author: mfish
 * @date: 2022/10/11 15:28
 */
import type { RouteMeta } from "vue-router";

export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

export enum MenuType {
  目录,
  菜单,
  按钮
}

export interface MenuListItem {
  id: string;
  parentId: string;
  clientId: string;
  menuName: string;
  menuType: MenuType;
  menuCode: string;
  menuLevel: number;
  menuIcon: string;
  menuSort: number;
  routePath: string;
  component: string;
  isKeepalive: number;
  //外部打开
  isExternal: number;
  remark: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  isVisible: number;
  activeMenu: string;
  permissions: string;
  children: MenuListItem[];
}

export type MenuParams = {
  menuName?: string;
  menuType?: MenuType;
  status?: string;
};

/**
 * 菜单路由树
 */
export type MenuRouteModel = RouteItem[];
