import type { Router } from "vue-router";
import { usePermissionStoreWithOut } from "/@/store/modules/Permission";
import { PageEnum } from "/@/enums/PageEnum";
import { useUserStoreWithOut } from "/@/store/modules/User";
import { PAGE_NOT_FOUND_ROUTE, RootRoute } from "/@/router/routers/Basic";

const LOGIN_PATH = PageEnum.BASE_LOGIN;
const ROOT_PATH = RootRoute.path;
const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    if (
      from.path === ROOT_PATH &&
      to.path === PageEnum.BASE_HOME &&
      userStore.getUserInfo.homePath &&
      userStore.getUserInfo.homePath !== PageEnum.BASE_HOME
    ) {
      next(userStore.getUserInfo.homePath);
      return;
    }
    const token = userStore.getToken;
    // 白名单路径允许直接访问
    if (whitePathList.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        const isSessionTimeout = userStore.getSessionTimeout;
        await userStore.afterLoginAction();
        if (!isSessionTimeout) {
          next((to.query?.redirect as string) || "/");
          return;
        }
      }
      next();
      return;
    }
    // 如果token不存在
    if (!token) {
      // 如果设置ignoreAuth为true，允许直接访问
      if (to.meta.ignoreAuth) {
        next();
        return;
      }
      //重定向到登录页面
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: LOGIN_PATH,
        replace: true
      };
      if (to.path) {
        redirectData.query = { redirect: to.path };
      }
      next(redirectData);
      return;
    }
    // 处理登录后跳转到404页面
    if (
      from.path === LOGIN_PATH &&
      to.name === PAGE_NOT_FOUND_ROUTE.name &&
      to.fullPath !== (userStore.getUserInfo.homePath || PageEnum.BASE_HOME)
    ) {
      next(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
      return;
    }
    // 如果还未获取用户信息，获取用户信息
    if (userStore.getLastUpdateTime === 0) {
      try {
        await userStore.getUserInfoAction();
      } catch (err) {
        next();
        return;
      }
    }
    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }
    await permissionStore.addRouter(router);
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
