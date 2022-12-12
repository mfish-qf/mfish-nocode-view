import { LAYOUT } from "/@/router/Constant";
import { t } from "/@/hooks/web/UseI18n";
import { AppRouteRecordRaw } from "/@/router/Types";

const dashboard: AppRouteRecordRaw = {
  path: "/dashboard",
  name: "仪表板",
  component: LAYOUT,
  redirect: "/dashboard/workbench",
  meta: {
    menuSort: 1,
    icon: "ion:grid-outline",
    title: t("routes.dashboard.dashboard")
  },
  children: [
    {
      path: "workbench",
      name: "工作台",
      component: () => import("/@/views/dashboard/workbench/index.vue"),
      meta: {
        title: t("routes.dashboard.workbench")
      }
    }
  ]
};

export default dashboard;
