/**
 * @description：菜单信息
 * @author     ：qiufeng
 * @date       ：2022/10/11 15:28
 */
import type { RouteMeta } from "vue-router";
import { BasicFetchResult } from "/@/api/model/baseModel";

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
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

export type MenuParams = {
  menuName?: string;
  status?: string;
};

/**
 * 菜单路由树
 */
export type MenuRouteModel = RouteItem[];

/**
 * 菜单列表树
 */
export type MenuTreeModel = BasicFetchResult<MenuListItem>;