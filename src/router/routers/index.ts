import type { AppRouteModule } from "/@/router/Types";
import { LoginRoute, PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE, RootRoute } from "/@/router/routers/Basic";

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager("./modules/**/*.ts");
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default;
  if (!mod) {
    return;
  }
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});


export const asyncRoutes = routeModuleList;

// 无需权限的基本路由
export const basicRoutes = [
  RootRoute,
  LoginRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
];
