import type { AppRouteRecordRaw } from "@/router/Types";
import { LAYOUT } from "@/router/Constant";

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
