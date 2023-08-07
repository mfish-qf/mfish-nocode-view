/**
 * @description: 自助API路由
 * @author: mfish
 * @date: 2023/8/4
 */
import type { AppRouteRecordRaw } from "/@/router/Types";

const apiConfig: AppRouteRecordRaw = {
  path: "/low-code/mf-api/config",
  name: "ApiConfig",
  component: () => import("/@/views/nocode/mf-api/index.vue"),
  meta: {
    menuSort: 999,
    hideMenu: true,
    title: "API配置"
  }
};

export default apiConfig;
