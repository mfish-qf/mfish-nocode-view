import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { setupStore } from "/@/stores";
import { setupI18n } from "/@/i18n/SetupI18n";

async function initApp() {
  const app = createApp(App);
  //配置缓存
  setupStore(app);
  await setupI18n(app);
  app.use(router);
  app.mount("#app");
}

initApp().then();