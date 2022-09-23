/**
 * @description：全局配置信息
 * @author     ：qiufeng
 * @date       ：2022/9/22 18:02
 */
import type {} from "vue";

declare global {
  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
  }

  declare type Recordable<T = any> = Record<string, T>;
}