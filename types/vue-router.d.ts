export {};
declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    //菜单排序
    menuSort?: number;
    // title
    title: string;
    // Whether to ignore permissions
    ignoreAuth?: boolean;
    // Whether not to cache
    ignoreKeepAlive?: boolean;
    // icon on tab
    icon?: string;
    // Currently active menu
    currentActiveMenu?: string;
    // Never show in menu
    hideMenu?: boolean;
    // Is it fixed on tab
    affix?: boolean;
    //iframe方式
    frameSrc?: string;
  }
}
