/**
 * @description: 公用方法
 * @author: mfish
 * @date: 2022/10/9 17:49
 */
import { App, Plugin, unref } from "vue";
import { isObject } from "./Is";
import type { RouteLocationNormalized, RouteRecordNormalized } from "vue-router";
import { Recordable, TargetContext } from "@mfish/types";

export const noop = () => {};
// 组件安装
export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.__name, comp);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

// 深度合并
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = "";
  for (const key in obj) {
    parameters += `${key}=${encodeURIComponent(obj[key])}&`;
  }
  parameters = parameters.replace(/&$/, "");
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, "?") + parameters;
}

export function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  if (!route) return route;
  const { matched, ...opt } = route;
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path
        }))
      : undefined) as RouteRecordNormalized[]
  };
}

export function openWindow(
  url: string,
  opt?: {
    target?: TargetContext | string;
    noopener?: boolean;
    noreferrer?: boolean;
  }
) {
  const { target = "__blank", noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];
  noopener && feature.push("noopener=yes");
  noreferrer && feature.push("noreferrer=yes");
  window.open(url, target, feature.join(","));
}

/**
 * 获取上层容器
 */
export function getPopupContainer(node?: HTMLElement): HTMLElement {
  return (node?.parentNode as HTMLElement) ?? document.body;
}

// 获取动态属性
export function getDynamicProps<T extends object, U>(props: T): Partial<U> {
  const ret: Recordable = {};
  Object.keys(props).map((key) => (ret[key] = unref((props as Recordable)[key])));

  return ret as Partial<U>;
}
