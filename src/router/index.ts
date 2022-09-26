import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    }
  ],
  //是否禁止尾部斜杠,默认为false
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })

});

export default router;
