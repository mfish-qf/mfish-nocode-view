import type { Router } from "vue-router";
import { usePermissionStoreWithOut } from "/@/store/modules/Permission";
import { PageEnum } from "/@/enums/PageEnum";
import { useUserStoreWithOut } from "/@/store/modules/User";
import { PAGE_NOT_FOUND_ROUTE, RootRoute } from "/@/router/routers/Basic";

const LOGIN_PATH = PageEnum.BASE_LOGIN;
const ROOT_PATH = RootRoute().path;
const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    const token = userStore.getToken;
    // 白名单路径允许直接访问
    if (whitePathList.includes(to.path as PageEnum)) {
      //如果访问登陆页面且token存在，判断token是否有效直接进入redirect地址或首页地址
      if (to.path === LOGIN_PATH && token) {
        const isSessionTimeout = userStore.getSessionTimeout;
        //增加try catch方式请求异常造成无法返回首页
        try {
          await userStore.getAccountInfo();
          if (!isSessionTimeout) {
            next((to.query?.redirect as string) || "/");
            return;
          }
        } catch {
        }
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
