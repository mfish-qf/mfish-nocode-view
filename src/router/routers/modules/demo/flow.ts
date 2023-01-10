import type { AppRouteRecordRaw } from "/@/router/Types";
import { LAYOUT } from "/@/router/Constant";
import { t } from "/@/hooks/web/UseI18n";

const charts: AppRouteRecordRaw = {
  path: "/flow",
  name: "FlowDemo",
  component: LAYOUT,
  redirect: "/flow/flowChart",
  meta: {
    orderNo: 5000,
    icon: "tabler:chart-dots",
    title: t("routes.demo.flow.name")
  },
  children: [
    {
      path: "flowChart",
      name: "flowChartDemo",
      component: () => import("/@/views/demo/flow-chart/index.vue"),
      meta: {
        title: t("routes.demo.flow.flowChart")
      }
    }
  ]
};

export default charts;
