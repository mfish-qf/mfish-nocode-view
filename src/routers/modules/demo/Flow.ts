import type { AppRouteRecordRaw } from "@mfish/core/router";
import { LAYOUT } from "@mfish/core/router";
import { t } from "@mfish/core/hooks";

const flows: AppRouteRecordRaw = {
  path: "/workflow",
  name: "FlowDemo",
  component: LAYOUT,
  redirect: "/workflow/flowChart",
  meta: {
    menuSort: 998,
    icon: "tabler:chart-dots",
    title: t("routes.demo.workflow.name")
  },
  children: [
    {
      path: "flowChart",
      name: "flowChartDemo",
      component: () => import("@/views/demo/flow-chart/index.vue"),
      meta: {
        title: t("routes.demo.workflow.flowChart")
      }
    }
  ]
};

export default flows;
