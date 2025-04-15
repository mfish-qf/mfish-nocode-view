import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import type { App } from "vue";
import { basicRoutes } from "./routers/Basic";

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
getRouteNames(basicRoutes);

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  // 创建一个hash历史记录，统一认证不能使用hash方式
  // history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 创建一个历史记录。
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export * from "./Types.ts";
export * from "./Constant.ts";
export * from "./guard/index.ts";
export * from "./menus/index.ts";
export * from "./helper/MenuHelper.ts";
export * from "./helper/RouteHelper.ts";
export * from "./routers/Basic.ts";
