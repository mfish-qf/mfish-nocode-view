import { LoginRoute, PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "/@/router/routers/Basic";
import { AppRouteRecordRaw } from "/@/router/Types";

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager("./modules/**/*.ts");
export const routeModuleList: AppRouteRecordRaw[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default;
  if (!mod) {
    return;
  }
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 无需权限的基本路由
export const basicRoutes = [
  LoginRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
];
