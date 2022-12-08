/**
 The routing of this file will not show the layout.
 It is an independent new page.
 the contents of the file still need to log in to access
 */
import type { AppRouteModule } from "/@/router/Types";

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteModule[] = [
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
