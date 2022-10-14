/**
 * @description：插件引用
 * @author     ：qiufeng
 * @date       ：2022/9/23 22:21
 */
import purgeIcons from "vite-plugin-purge-icons";
import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import vueSetupExtend from "vite-plugin-vue-setup-extend";
import VitePluginCertificate from "vite-plugin-mkcert";
import { configHtmlPlugin } from "./Html";
import { configSvgIconsPlugin } from "./SvgSprite";
import Windicss from "vite-plugin-windicss";
import legacy from "@vitejs/plugin-legacy";
import { configStyleImportPlugin } from "./StyleImport";
import { configThemePlugin } from "./Theme";
import { configImageminPlugin } from "./Imagemin";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_USE_IMAGEMIN } = viteEnv;
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    // support name
    // vueSetupExtend(),
    VitePluginCertificate({
      source: "coding"
    })
  ];
  VITE_LEGACY && isBuild && vitePlugins.push(legacy());
  // 用于html模版转换，可以在html文件内进行书写模版语法
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  // 快速生成 svg sprite
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  //组件样式按需引入
  vitePlugins.push(configStyleImportPlugin(isBuild));
  //引入windi css
  vitePlugins.push(Windicss());
  //请求icon不产生http请求
  vitePlugins.push(purgeIcons());
  //配置主题
  vitePlugins.push(configThemePlugin(isBuild));
  if (isBuild) {
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());
  }
  return vitePlugins;
}