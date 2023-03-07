/**
 * @description: 通用方法
 * @author: mfish
 * @date: 2023/3/7 16:32
 */

/**
 * 随眠等待
 * @param time
 */
export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}