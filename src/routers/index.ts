import { AppRouteRecordRaw } from "@mfish/core/src/router/Types";

const modules = import.meta.glob("./modules/**/*.ts");

export const routeModuleList: AppRouteRecordRaw[] = [];
// 加入到路由集合中
Object.keys(modules).map((path) =>
  modules[path]().then((module: any) => {
    const mod = module.default;
    if (!mod) {
      return;
    }
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
  })
);
