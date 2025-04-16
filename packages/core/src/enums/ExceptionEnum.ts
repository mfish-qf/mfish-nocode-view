/**
 * @description: 异常枚举
 * @author: mfish
 * @date: 2022/10/11 15:24
 */
export enum ExceptionEnum {
  // page not access
  PAGE_NOT_ACCESS = 403,

  // page not found
  PAGE_NOT_FOUND = 404,

  // error
  ERROR = 500,

  // net work error
  NET_WORK_ERROR = 10_000,

  // No data on the page. In fact, it is not an exception page
  PAGE_NOT_DATA = 10_100
}

export enum ErrorTypeEnum {
  VUE = "vue",
  SCRIPT = "script",
  RESOURCE = "resource",
  AJAX = "ajax",
  PROMISE = "promise"
}
