/**
 * @description: 注册全局组件
 * @author: mfish
 * @date: 2022/10/11 11:28
 */
import { App } from "vue";
import { Input, Layout } from "ant-design-vue";
import { Button } from "/@/components/general/Button";

export function registerGlobComponent(app: App) {
  app.use(Input).use(Layout).use(Button);
}
