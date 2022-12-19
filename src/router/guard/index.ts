import type { Router, RouteLocationNormalized } from "vue-router";
import { useAppStoreWithOut } from "/@/store/modules/App";
import { useUserStoreWithOut } from "/@/store/modules/User";
import { useTransitionSetting } from "/@/hooks/setting/UseTransitionSetting";
import { AxiosCanceler } from "/@/utils/http/axios/AxiosCancel";
import { Modal, notification } from "ant-design-vue";
import { warn } from "/@/utils/Log";
import { unref } from "vue";
import { setRouteChange } from "/@/logics/mitt/RouteChange";
import { createPermissionGuard } from "./PermissionGuard";
import { createStateGuard } from "./StateGuard";
import nProgress from "nprogress";
import projectSetting from "/@/settings/ProjectSetting";
import { createParamMenuGuard } from "./ParamMenuGuard";

// 不要更改创建顺序
export function setupRouterGuard(router: Router) {
  createPageGuard(router);
  createPageLoadingGuard(router);
  createHttpGuard(router);
  createScrollGuard(router);
  createMessageGuard(router);
  createProgressGuard(router);
  createPermissionGuard(router);
  // 必须在createPermissionGuard之后(菜单已完成创建)
  createParamMenuGuard(router);
  createStateGuard(router);
}

/**
 * 处理页面状态
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();
  router.beforeEach(async (to) => {
    // 页面已经加载，再次打开会更快，您不需要进行加载和其他处理
    to.meta.loaded = !!loadedPageMap.get(to.path);
    // 通知路由更改
    setRouteChange(to);
    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

// 处理页面加载状态
function createPageLoadingGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const appStore = useAppStoreWithOut();
  const { getOpenPageLoading } = useTransitionSetting();
  router.beforeEach(async (to) => {
    if (!userStore.getToken) {
      return true;
    }
    if (to.meta.loaded) {
      return true;
    }
    if (unref(getOpenPageLoading)) {
      appStore.setPageLoadingAction(true).then();
      return true;
    }
    return true;
  });
  router.afterEach(async () => {
    if (unref(getOpenPageLoading)) {
      // TODO Looking for a better way
      // 增加一个延迟防止闪烁过快
      setTimeout(() => {
        appStore.setPageLoading(false);
      }, 220);
    }
    return true;
  });
}

/**
 * 切换路由时用于关闭当前页面以完成请求
 * @param router
 */
function createHttpGuard(router: Router) {
  const { removeAllHttpPending } = projectSetting;
  let axiosCanceler: Nullable<AxiosCanceler>;
  if (removeAllHttpPending) {
    axiosCanceler = new AxiosCanceler();
  }
  router.beforeEach(async () => {
    // 切换路由将删除先前的请求
    axiosCanceler?.removeAllPending();
    return true;
  });
}

// 切换路由时返回顶部
function createScrollGuard(router: Router) {
  const isHash = (href: string) => {
    return /^#/.test(href);
  };
  const body = document.body;
  router.afterEach(async (to) => {
    // 返回顶部
    isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scrollTo(0, 0);
    return true;
  });
}

/**
 * 切换路由时关闭消息
 * @param router
 */
export function createMessageGuard(router: Router) {
  const { closeMessageOnSwitch } = projectSetting;
  router.beforeEach(async () => {
    try {
      //判断切换界面时是否删除未关闭的消息并通知
      if (closeMessageOnSwitch) {
        Modal.destroyAll();
        notification.destroy();
      }
    } catch (error) {
      warn("message guard error:" + error);
    }
    return true;
  });
}

export function createProgressGuard(router: Router) {
  const { getOpenNProgress } = useTransitionSetting();
  router.beforeEach(async (to) => {
    if (to.meta.loaded) {
      return true;
    }
    unref(getOpenNProgress) && nProgress.start();
    return true;
  });

  router.afterEach(async () => {
    unref(getOpenNProgress) && nProgress.done();
    return true;
  });
}
