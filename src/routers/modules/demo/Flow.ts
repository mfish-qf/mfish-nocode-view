import type { AppRouteRecordRaw } from "@mfish/core/router";
import { LAYOUT } from "@mfish/core/router";

const flows: AppRouteRecordRaw = {
  path: "/workflow",
  name: "FlowDemo",
  component: LAYOUT,
  redirect: "/workflow/flowChart",
  meta: {
    menuSort: 998,
    icon: "ant-design:apartment-outline",
    title: "流程表单"
  },
  children: [
    {
      path: "flowChart",
      name: "flowChartDemo",
      component: () => import("@/views/demo/flow-chart/index.vue"),
      meta: {
        title: "流程图",
        keepAlive: true,
        icon: "ant-design:apartment-outline"
      }
    },
    {
      path: "formDesigner",
      name: "formDesignerDemo",
      component: () => import("@/views/demo/form-designer/index.vue"),
      meta: {
        title: "表单设计器",
        keepAlive: true,
        icon: "ant-design:form-outlined"
      }
    }
  ]
};

export default flows;
