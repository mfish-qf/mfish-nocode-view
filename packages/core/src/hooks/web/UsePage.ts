import type { RouteLocationRaw, Router } from "vue-router";
import { useRouter } from "vue-router";
import { PageEnum } from "@core/enums";
import { unref } from "vue";
import { getMenu, REDIRECT_NAME, router } from "@core/router";

export type PathAsPageEnum<T> = T extends { path: string } ? T & { path: PageEnum } : T;
export type RouteLocationRawEx = PathAsPageEnum<RouteLocationRaw>;

function handleError(e: Error) {
  console.error(e);
}

/**
 * page switch
 */
export function useGo(_router?: Router) {
  const { push, replace } = _router || useRouter();

  function go(opt: RouteLocationRawEx = PageEnum.BASE_HOME, isReplace = false) {
    if (!opt) {
      return;
    }
    isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
  }

  return go;
}

/**
 * 是否外部打开 如果是外部打开
 * @param path
 */
export function externalOpen(path: string) {
  const menu = getMenu(path);
  // 如果是外部打开
  if (menu?.isExternal) {
    const routeData = router.resolve({
      path
    });
    window.open(routeData.href, "_blank");
    return true;
  }
  return false;
}

/**
 * @description: redo current page
 */
export const useRedo = (_router?: Router) => {
  const { replace, currentRoute } = _router || useRouter();
  const { query, params = {}, name, fullPath } = unref(currentRoute.value);

  function redo(): Promise<boolean> {
    return new Promise((resolve) => {
      if (name === REDIRECT_NAME) {
        resolve(false);
        return;
      }
      if (name && Object.keys(params).length > 0) {
        params._redirect_type = "name";
        params.path = String(name);
      } else {
        params._redirect_type = "path";
        params.path = fullPath;
      }
      replace({ name: REDIRECT_NAME, params, query }).then(() => resolve(true));
    });
  }

  return redo;
};
