/**
 * @description: 通用类型
 * @author: mfish
 * @date: 2024/8/11
 */
import type { CSSProperties } from "vue";

export type Recordable<T = any> = Record<string, T> | any;
export type Nullable<T> = T | null;
export type StyleValue = string | CSSProperties | Array<StyleValue>;
export type TimeoutHandle = ReturnType<typeof setTimeout>;
export type IntervalHandle = ReturnType<typeof setInterval>;
export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };
export type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
export interface ChangeEvent extends Event {
  target: HTMLInputElement;
}
