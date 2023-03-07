import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import "/@/design/index.less";
import "virtual:svg-icons-register";
import App from "./App.vue";
import { createApp } from "vue";
import { router, setupRouter } from "./router";
import { setupStore } from "/@/store";
import { setLocal } from "/@/i18n/SetupI18n";
import { setupRouterGuard } from "/@/router/guard";
import { setupErrorHandle } from "/@/logics/error-handle";
import { isDevMode } from "/@/utils/Env";
import { registerGlobComponent } from "/@/components/RegisterGlobComponent";
import { setupGlobDirectives } from "./directives";
import { initAppConfigStore } from "/@/logics/InitAppConfig";

if (isDevMode()) {
  import("ant-design-vue/es/style");
}

async function initApp() {
  const app = createApp(App);
  //配置缓存
  setupStore(app);
  //设置国际化
  await setLocal(app);
  //注册全局组件
  registerGlobComponent(app);
  //配置路由
  setupRouter(app);
  //路由守卫
  setupRouterGuard(router);
  //注册全局指令v-loading,v-auth
  setupGlobDirectives(app);
  //配置全局错误处理
  setupErrorHandle(app);
  //初始化系统界面配置
  initAppConfigStore().then();
  app.mount("#app");
}

initApp().then();