import type { RouteLocationNormalized } from "vue-router";

export enum TabContentEnum {
  TAB_TYPE,
  EXTRA_TYPE
}

export interface TabContentProps {
  tabItem: RouteLocationNormalized;
  type?: TabContentEnum;
  trigger?: ("click" | "hover" | "contextmenu")[];
}

export enum MenuEventEnum {
  REFRESH_PAGE,
  CLOSE_CURRENT,
  CLOSE_LEFT,
  CLOSE_RIGHT,
  CLOSE_OTHER,
  CLOSE_ALL,
  SCALE
}

export { type DropMenu } from "@mfish/core/src/components/Dropdown";
