/**
 * @description：菜单信息
 * @author     ：qiufeng
 * @date       ：2022/10/11 15:28
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

export interface MenuListItem {
  id: string;
  parentId: string;
  clientId: string;
  menuName: string;
  menuType: number;
  menuIcon: string;
  menuSort: number;
  routePath: string;
  component: string;
  isKeepalive: number;
  isExternal: number;
  remark: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  isVisible: number;
  permissions: string;
  children: MenuListItem[];
}

export type MenuParams = {
  menuName?: string;
  menuType?: number;
  status?: string;
};

/**
 * 菜单路由树
 */
export type MenuRouteModel = RouteItem[];
