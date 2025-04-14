import type { AppRouteRecordRaw } from "@core/router/Types";
import { REDIRECT_NAME, LAYOUT, EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME } from "@core/router/Constant";
import { PageEnum } from "@core/enums";
import { t } from "@core/hooks/web/UseI18n";

// 根路由
export const RootRoute = (redirect: string = PageEnum.BASE_HOME): AppRouteRecordRaw => {
  return {
    path: "/",
    name: "Root",
    redirect,
    meta: {
      title: "Root"
    }
  };
};

// 登录路由
export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/Login.vue"),
  meta: {
    title: t("routes.basic.login")
  }
};

// 错误登录路由
export const ErrorLoginRoute: AppRouteRecordRaw = {
  path: "/error-login",
  name: "ErrorLogin",
  component: () => import("@/views/sys/login/Login.vue"),
  meta: {
    title: t("routes.basic.login")
  }
};

// oauth2登录
export const Oauth2Route: AppRouteRecordRaw = {
  path: "/oauth2",
  name: "Oauth2",
  component: () => import("@/views/sys/login/Oauth2.vue"),
  meta: {
    title: "oauth2"
  }
};

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: "/:path(.*)*",
      name: `${PAGE_NOT_FOUND_NAME}child`,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
        hideMenu: true
      }
    }
  ]
};

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: "/redirect",
  component: LAYOUT,
  name: "RedirectTo",
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: REDIRECT_NAME,
      component: () => import("@/views/sys/redirect/index.vue"),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true
      }
    }
  ]
};

// gitee登录
export const GiteeRoute: AppRouteRecordRaw = {
  path: "/giteeOauth2",
  name: "giteeOauth2",
  component: () => import("@/views/sys/login/Gitee.vue"),
  meta: {
    title: "giteeOauth2"
  }
};
// github登录
export const GithubRoute: AppRouteRecordRaw = {
  path: "/githubOauth2",
  name: "githubOauth2",
  component: () => import("@/views/sys/login/Github.vue"),
  meta: {
    title: "githubOauth2"
  }
};

// 无需权限的基本路由
export const basicRoutes = [
  LoginRoute,
  Oauth2Route,
  ErrorLoginRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  GiteeRoute,
  GithubRoute
];
