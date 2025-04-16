/**
 * @description: 缓存主文件
 * @author: mfish
 * @date: 2022/9/26 15:29
 */
import { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
