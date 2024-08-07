import purgeIcons from "vite-plugin-purge-icons";
import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VitePluginCertificate from "vite-plugin-mkcert";
import { configHtmlPlugin } from "./Html";
import { configSvgIconsPlugin } from "./SvgSprite";
import UnoCSS from "unocss/vite";
import legacy from "@vitejs/plugin-legacy";
import { configImageminPlugin } from "./Imagemin";
import { configMockPlugin } from "./Mock";
import { configVisualizerConfig } from "./Visualizer";

/**
 * @description: 插件引用
 * @author: mfish
 * @date: 2022/9/23 22:21
 */
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_USE_IMAGEMIN, VITE_USE_MOCK, VITE_USE_VISUALIZER } = viteEnv;
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    VitePluginCertificate({
      source: "coding"
    })
  ];
  VITE_LEGACY && isBuild && vitePlugins.push(legacy());
  // 用于html模版转换，可以在html文件内进行书写模版语法
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  // 快速生成 svg sprite
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  // 使用mock调试
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));
  vitePlugins.push(UnoCSS());
  //请求icon不产生http请求
  vitePlugins.push(purgeIcons());

  if (isBuild) {
    //用于分析打包后文件大小占比
    VITE_USE_VISUALIZER && vitePlugins.push(configVisualizerConfig());
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());
  }
  return vitePlugins;
}
