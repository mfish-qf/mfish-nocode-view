/**
 * @description: 大屏预览路由
 * @author: mfish
 * @date: 2024/12/25
 */
import type { AppRouteRecordRaw } from "@mfish/core/router";

const screenPreview: AppRouteRecordRaw = {
  path: "/low-code/mf-screen/preview/:id?",
  name: "ScreenPreview",
  component: () => import("@/views/nocode/mf-screen/PreviewIndex.vue"),
  meta: {
    menuSort: 999,
    hideMenu: true,
    title: "大屏预览"
  }
};

export default screenPreview;
