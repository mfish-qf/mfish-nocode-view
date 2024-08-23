/**
 * @description: 自助API路由
 * @author: mfish
 * @date: 2024/8/7
 */
import type { AppRouteRecordRaw } from "@/router/Types";

const screenConfig: AppRouteRecordRaw = {
  path: "/low-code/mf-screen/config",
  name: "ScreenConfig",
  component: () => import("@/views/nocode/mf-screen/index.vue"),
  meta: {
    menuSort: 999,
    hideMenu: true,
    title: "大屏配置"
  }
};

export default screenConfig;
