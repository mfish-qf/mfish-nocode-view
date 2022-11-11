import type { AppRouteModule } from "/@/router/Types";

import { LAYOUT } from "/@/router/Constant";
import { t } from "/@/hooks/web/UseI18n";

const system: AppRouteModule = {
  path: "/system",
  name: "System",
  component: LAYOUT,
  redirect: "/system/account",
  meta: {
    orderNo: 2000,
    icon: "ion:settings-outline",
    title: t("sys.system.moduleName")
  },
  children: [
    {
      path: "account",
      name: "AccountManagement",
      meta: {
        title: t("sys.system.account"),
        ignoreKeepAlive: false
      },
      component: () => import("/@/views/sys/account/index.vue")
    },
    {
      path: "account_detail/:id",
      name: "AccountDetail",
      meta: {
        hideMenu: true,
        title: t("sys.system.account_detail"),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: "/account"
      },
      component: () => import("/@/views/sys/account/AccountDetail.vue")
    },
    {
      path: "role",
      name: "RoleManagement",
      meta: {
        title: t("sys.system.role"),
        ignoreKeepAlive: true
      },
      component: () => import("/@/views/sys/role/index.vue")
    },

    {
      path: "menu",
      name: "MenuManagement",
      meta: {
        title: t("sys.system.menu"),
        ignoreKeepAlive: true
      },
      component: () => import("/@/views/sys/menu/index.vue")
    },
    {
      path: "org",
      name: "DeptManagement",
      meta: {
        title: t("sys.system.org"),
        ignoreKeepAlive: true
      },
      component: () => import("/@/views/sys/org/index.vue")
    },
    {
      path: "changePassword",
      name: "ChangePassword",
      meta: {
        title: t("sys.system.password"),
        ignoreKeepAlive: true
      },
      component: () => import("/@/views/sys/password/index.vue")
    }
  ]
};

export default system;
