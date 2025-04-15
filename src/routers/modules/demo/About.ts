import type { AppRouteRecordRaw } from "@mfish/core/router";
import { LAYOUT } from "@mfish/core/router";

const abouts: AppRouteRecordRaw = {
  name: "About",
  path: "/about",
  component: LAYOUT,
  meta: {
    title: "关于",
    icon: "simple-icons:aboutdotme",
    hideMenu: false,
    menuSort: 999,
    keepAlive: true,
    hideChildrenInMenu: true
  },
  children: [
    {
      path: "",
      name: "AboutChild",
      meta: {
        title: "关于",
        icon: "simple-icons:aboutdotme"
      },
      component: () => import("@/views/sys/about/index.vue")
    }
  ]
};

export default abouts;
