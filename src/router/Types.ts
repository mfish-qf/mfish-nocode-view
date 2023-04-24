import type { RouteRecordRaw, RouteMeta } from "vue-router";
import { defineComponent } from "vue";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "children"> {
  name: string;
  meta: RouteMeta;
  redirect?: string;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface MenuTag {
  type?: "primary" | "error" | "warn" | "success";
  content?: string;
  dot?: boolean;
}

export interface Menu {
  name: string;
  icon?: string;
  path: string;
  // path contains param, auto assignment.
  paramPath?: string;
  disabled?: boolean;
  children?: Menu[];
  menuSort?: number;
  roles?: string[];
  meta?: Partial<RouteMeta>;
  tag?: MenuTag;
  hideMenu?: boolean;
  isExternal?: boolean;
  //隐藏子菜单，当只有一级菜单时为true
  hideChildrenInMenu?: boolean;
}
