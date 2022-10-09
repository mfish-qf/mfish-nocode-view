/**
 * @description：html插件
 * @author     ：qiufeng
 * @date       ：2022/10/9 10:22
 */
import { GLOB_CONFIG_FILE_NAME } from "../Constant";
import pkg from "../../../package.json";
import { createHtmlPlugin } from "vite-plugin-html";

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env;
  const path = VITE_PUBLIC_PATH.endsWith("/") ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;
  const getAppConfigSrc = `${path || "/"}${GLOB_CONFIG_FILE_NAME}?v=${pkg.version}=${new Date().getTime()}`;
  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE
      },
      tags: isBuild ? [{
        tag: "script",
        attrs: {
          src: getAppConfigSrc
        }
      }] : []
    }
  });
}