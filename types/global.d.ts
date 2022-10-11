/**
 * @description：全局配置信息定义
 * @author     ：qiufeng
 * @date       ：2022/9/22 18:02
 */
import type {} from "vue";

declare global {
  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
    VITE_DROP_CONSOLE: boolean;
    VITE_GLOB_APP_TITLE: string;
    VITE_GLOB_APP_SHORT_NAME: string;
    VITE_USE_CDN: boolean;
    VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_LEGACY: boolean;
    VITE_USE_IMAGEMIN: boolean;
    VITE_GENERATE_UI: string;
    VITE_USE_MOCK: boolean;
    VITE_USE_PWA: boolean;
  }

  declare type Recordable<T = any> = Record<string, T>;

  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  declare type Nullable<T> = T | null;
  declare type PropType<T> = VuePropType<T>;

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]>; };

}
