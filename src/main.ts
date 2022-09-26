import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { setupStore } from "/@/stores";

async function initApp() {
  const app = createApp(App);
  //配置缓存
  setupStore(app);
  app.use(router);
  app.mount("#app");
}
initApp().then();