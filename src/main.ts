import "virtual:uno.css";
import "virtual:unocss-devtools";
import "@mfish/styles";
import "virtual:svg-icons-register";
import "ant-design-vue/dist/reset.css";
// 引入动画
import "animate.css/animate.min.css";
import App from "./App.vue";
import { createApp } from "vue";
import { router, setupRouter, setupRouterGuard } from "@mfish/core/router";
import { setupStore } from "@mfish/stores";
import { setLocal } from "@mfish/core/i18n/SetupI18n";
import { setupErrorHandle } from "@mfish/core/logics/error-handle";
import { isDevMode } from "@mfish/core/utils/Env";
import { registerGlobComponent } from "@mfish/core/components/RegisterGlobComponent";
import { setupGlobDirectives } from "@mfish/core/directives";
import { initAppConfigStore } from "@mfish/core/logics/InitAppConfig";

if (isDevMode()) {
  import("ant-design-vue/es/style");
}

async function initApp() {
  const app = createApp(App);
  // 配置缓存
  setupStore(app);
  // 设置国际化
  await setLocal(app);
  // 注册全局组件
  registerGlobComponent(app);
  // 配置路由
  setupRouter(app);
  // 路由守卫
  setupRouterGuard(router);
  // 注册全局指令v-loading,v-auth
  setupGlobDirectives(app);
  // 配置全局错误处理
  setupErrorHandle(app);
  // 初始化系统界面配置
  initAppConfigStore().then();
  app.mount("#app");
}

initApp().then();
