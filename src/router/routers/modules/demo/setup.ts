import { LAYOUT } from "/@/router/Constant";
import { t } from "/@/hooks/web/UseI18n";
import { AppRouteRecordRaw } from "/@/router/Types";

const setup: AppRouteRecordRaw = {
  path: "/setup",
  name: "SetupDemo",
  component: LAYOUT,
  redirect: "/setup/index",
  meta: {
    menuSort: 21,
    hideChildrenInMenu: true,
    icon: "whh:paintroll",
    title: t("routes.demo.setup.page")
  },
  children: [
    {
      path: "index",
      name: "SetupDemoPage",
      component: () => import("/@/views/demo/setup/index.vue"),
      meta: {
        title: t("routes.demo.setup.page"),
        icon: "whh:paintroll",
        hideMenu: true
      }
    }
  ]
};

export default setup;
