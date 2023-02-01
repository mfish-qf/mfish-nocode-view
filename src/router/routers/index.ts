import {
  ErrorLoginRoute,
  LoginRoute,
  Oauth2Route,
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE
} from "/@/router/routers/Basic";
import { AppRouteRecordRaw } from "/@/router/Types";

const modules = import.meta.glob("./modules/**/*.ts");

export const routeModuleList: AppRouteRecordRaw[] = [];
// 加入到路由集合中
Object.keys(modules).map((path)=>{
  modules[path]().then((module: any) => {
    const mod = module.default;
    if (!mod) {
      return;
    }
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
  });
})

// 无需权限的基本路由
export const basicRoutes = [
  LoginRoute,
  Oauth2Route,
  ErrorLoginRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
];
