import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { type PluginOption } from "vite";

import { createAppConfigPlugin } from "./AppConfig";
import { configHtmlPlugin } from "./Html";
import { configSvgIconsPlugin } from "./SvgSprite";
import { configVisualizerConfig } from "./Visualizer";

interface Options {
  isBuild: boolean;
  root: string;
  enableAnalyze?: boolean;
}

export async function createPlugins({ isBuild, root, enableAnalyze }: Options) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];

  const appConfigPlugin = await createAppConfigPlugin({ root, isBuild });
  vitePlugins.push(appConfigPlugin);
  // 用于html模版转换，可以在html文件内进行书写模版语法
  vitePlugins.push(configHtmlPlugin({ isBuild }));
  // 快速生成 svg sprite
  vitePlugins.push(configSvgIconsPlugin({ isBuild }));
  // 只有构建时使用
  if (isBuild) {
    //用于分析打包后文件大小占比
    enableAnalyze && vitePlugins.push(configVisualizerConfig());
  }
  return vitePlugins;
}
