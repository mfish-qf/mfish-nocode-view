/**
 * @description: 大屏预览路由
 * @author: mfish
 * @date: 2024/12/25
 */
import type { AppRouteRecordRaw } from "@mfish/core/router";

const screenPreview: AppRouteRecordRaw = {
  path: "/low-code/mf-screen/resource",
  name: "ScreenResource",
  component: () => import("@/views/nocode/screen-resource/index.vue"),
  meta: {
    menuSort: 999,
    hideMenu: true,
    title: "资源中心"
  }
};

export default screenPreview;
