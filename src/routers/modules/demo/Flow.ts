import type { AppRouteRecordRaw } from "@mfish/core/src/router/Types";
import { LAYOUT } from "@mfish/core/src/router/Constant";
import { t } from "@mfish/core/src/hooks/web/UseI18n";

const flows: AppRouteRecordRaw = {
  path: "/flow",
  name: "FlowDemo",
  component: LAYOUT,
  redirect: "/flow/flowChart",
  meta: {
    menuSort: 998,
    icon: "tabler:chart-dots",
    title: t("routes.demo.flow.name")
  },
  children: [
    {
      path: "flowChart",
      name: "flowChartDemo",
      component: () => import("@/views/demo/flow-chart/index.vue"),
      meta: {
        title: t("routes.demo.flow.flowChart")
      }
    }
  ]
};

export default flows;
