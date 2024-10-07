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
export type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;
export interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}
/**
 * 任意类型的异步函数
 */
type AnyPromiseFunction = (...arg: any[]) => PromiseLike<any>;

/**
 * 任意类型的普通函数
 */
type AnyNormalFunction = (...arg: any[]) => any;

/**
 * 任意类型的函数
 */
export type Fn = AnyNormalFunction | AnyPromiseFunction;

export interface ChangeEvent extends Event {
  target: HTMLInputElement;
}
