/**
 * @description: 记录错误日志
 * @author: mfish
 * @date: 2022/10/9 12:01
 */
const projectName = import.meta.env.VITE_GLOB_APP_TITLE;

export function warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`);
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}
