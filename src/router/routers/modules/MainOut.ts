import { AppRouteRecordRaw } from "/@/router/Types";

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteRecordRaw[] = [
  {
    path: "/main-out",
    name: "MainOut",
    component: () => import("/@/views/demo/main-out/index.vue"),
    meta: {
      title: "外部页面",
      ignoreAuth: true,
      menuSort: 10000
    }
  }
];

export default mainOutRoutes;
