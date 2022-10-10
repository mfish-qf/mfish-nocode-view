/**
 * @description：公用方法
 * @author     ：qiufeng
 * @date       ：2022/10/9 17:49
 */
import { App, Plugin } from "vue";

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, comp);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};