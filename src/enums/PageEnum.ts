/**
 * @description: 页面枚举
 * @author: mfish
 * @date: 2022/10/11 15:32
 */
export enum PageEnum {
  // 登录页路径
  BASE_LOGIN = "/login",
  // oauth2登录页面
  OAUTH_LOGIN = "/oauth2",
  // oauth2登录出错后使用应急登录页面
  ERROR_LOGIN = "/error-login",
  // 首页路径
  BASE_HOME = "/dashboard",
  // 错误页路径
  ERROR_PAGE = "/exception",
  // 错误日志页
  ERROR_LOG_PAGE = "/error-log/list",
}