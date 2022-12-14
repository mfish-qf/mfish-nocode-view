/**
 * @description：常量
 * @author     ：qiufeng
 * @date       ：2022/10/8 18:07
 */
export const REDIRECT_NAME = "Redirect";

export const PARENT_LAYOUT_NAME = "ParentLayout";

export const PAGE_NOT_FOUND_NAME = "PageNotFound";

export const EXCEPTION_COMPONENT = () => import("/@/views/sys/exception/Exception.vue");

/**
 * @description: 默认布局
 */
export const LAYOUT = () => import("/@/layouts/default/index.vue");
export const IFRAME = () => import("/@/views/sys/iframe/FrameBlank.vue");

/**
 * @description: 父布局
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: _name || PARENT_LAYOUT_NAME
      });
    });
};

export const LayoutMap = new Map<string, () => Promise<typeof import("*.vue")>>;
LayoutMap.set("LAYOUT", LAYOUT);
LayoutMap.set("IFRAME", IFRAME);