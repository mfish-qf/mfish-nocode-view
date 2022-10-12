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
import { configHtmlPlugin } from "./Html";
import { configSvgIconsPlugin } from "./SvgSprite";
import Windicss from "vite-plugin-windicss";
import legacy from "@vitejs/plugin-legacy";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY } = viteEnv;
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
  VITE_LEGACY && isBuild && vitePlugins.push(legacy());
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  vitePlugins.push(Windicss());
  return vitePlugins;
}