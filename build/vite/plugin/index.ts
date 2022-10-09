/**
 * @description：插件引用
 * @author     ：qiufeng
 * @date       ：2022/9/23 22:21
 */
import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import VitePluginCertificate from "vite-plugin-mkcert";
import { configHtmlPlugin } from "./html";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {} = viteEnv;
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // support name
    vueSetupExtend(),
    VitePluginCertificate({
      source: "coding"
    })
  ];
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  return vitePlugins;
}