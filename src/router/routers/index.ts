import type { AppRouteRecordRaw, AppRouteModule } from "/@/router/Types";

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "/@/router/routers/Basic";

import { mainOutRoutes } from "./MainOut";
import { PageEnum } from "/@/enums/PageEnum";
import { t } from "/@/hooks/web/UseI18n";

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
// const modules = import.meta.glob("./modules/**/*.ts", { eager: true });
const modules = []
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root"
  }
};

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/sys/login/Login.vue"),
  meta: {
    title: t("routes.basic.login")
  }
};

// 无需权限的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
];
