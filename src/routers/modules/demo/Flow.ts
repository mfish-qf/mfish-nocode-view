import type { AppRouteRecordRaw } from "@mfish/core/router";
import { LAYOUT } from "@mfish/core/router";

const flows: AppRouteRecordRaw = {
  path: "/workflow",
  name: "FlowDemo",
  component: LAYOUT,
  redirect: "/workflow/flowChart",
  meta: {
    menuSort: 998,
    icon: "tabler:chart-dots",
    title: "图形编辑器"
  },
  children: [
    {
      path: "flowChart",
      name: "flowChartDemo",
      component: () => import("@/views/demo/flow-chart/index.vue"),
      meta: {
        title: "流程图"
      }
    }
  ]
};

export default flows;
