import type { Router } from "vue-router";
import { usePermissionStoreWithOut, useUserStoreWithOut } from "@mfish/stores/modules";
import { PageEnum } from "@core/enums";
import { PAGE_NOT_FOUND_ROUTE, RootRoute } from "@core/router";
import { curLoginType, oauth2Config } from "@core/settings/LoginSetting";
import type { Recordable } from "@mfish/types";

const ROOT_PATH = RootRoute().path;
const whitePathList: Set<PageEnum> = new Set([
  PageEnum.BASE_LOGIN,
  PageEnum.OAUTH_LOGIN,
  PageEnum.ERROR_LOGIN,
  PageEnum.GITEE_LOGIN,
  PageEnum.GITHUB_LOGIN
]);

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    const token = userStore.getToken;
    const refreshToken = userStore.getRefreshToken;
    if (!token && refreshToken) {
      // 如果token过期，刷新token
      try {
        await userStore.refreshTokenAction();
        next(to.path);
        return;
      } catch {
        userStore.setRefreshToken(undefined);
      }
    }
    // 白名单路径允许直接访问
    if (whitePathList.has(to.path as PageEnum)) {
      // 如果访问登陆页面且token存在，判断token是否有效直接进入redirect地址或首页地址
      if (to.path === PageEnum.BASE_LOGIN && token) {
        // 增加try catch方式请求异常造成无法返回首页
        try {
          //获取用户信息成功，进入首页，失败如果返回401会自动刷新
          await userStore.getAccountInfo();
          next((to.query?.redirect as string) || "/");
          return;
        } catch {
          userStore.setToken(undefined);
        }
        if (refreshToken) {
          // 如果token过期，刷新token
          try {
            await userStore.refreshTokenAction();
            next(to.query?.redirect as string);
            return;
          } catch {
            userStore.setRefreshToken(undefined);
          }
        }
      }
      // 如果登录类型为code方式走统一认证登录
      if (to.path === PageEnum.BASE_LOGIN && curLoginType === "authorization_code") {
        let url = `${oauth2Config.url}?`;
        const redirect_uri = to.redirectedFrom?.fullPath;
        Object.keys(oauth2Config).forEach((key) => {
          if (key === "url" || key === "client_secret") return;
          // 如果存在当前域的重定向地址，补充回调地址。否则使用默认回调地址
          url +=
            key === "redirect_uri" && redirect_uri
              ? `${key}=${oauth2Config[key]}?redirect=${redirect_uri}&`
              : `${key}=${oauth2Config[key]}&`;
        });
        if (url.endsWith("&")) {
          url = url.slice(0, Math.max(0, url.length - 1));
        }
        if (userStore.getIsLogout) {
          url += "&force_login=1";
          userStore.setIsLogout(false);
        }
        globalThis.location.href = url;
        next(false);
        return;
      }
      next();
      return;
    }
    const user = userStore.getUserInfo;
    // 如果token或者user不存在
    if (!token || !user) {
      // 如果设置ignoreAuth为true，允许直接访问
      if (to.meta.ignoreAuth) {
        next();
        return;
      }
      // 重定向到登录页面
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: PageEnum.BASE_LOGIN,
        replace: true
      };
      if (to.path) {
        redirectData.query = { redirect: to.fullPath };
      }
      next(redirectData);
      return;
    }
    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }
    await permissionStore.addRouter(router);
    if (from.path === ROOT_PATH && to.path === PageEnum.BASE_HOME && permissionStore.homePath !== PageEnum.BASE_HOME) {
      next(permissionStore.homePath);
      return;
    }
    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      next(nextData);
    }
  });
}
