/**
 * @description: 登录设置
 * @author: qiufeng
 * @date: 2023/1/17 16:51
 */
//登录类型
export type LoginType = "password" | "authorization_code";

//oauth2配置
export const oauth2Config = {
  url: "http://localhost:8888/oauth2/authorize",
  client_id: "system",
  client_secret: "system",
  response_type: "code",
  redirect_uri: "http://localhost:5281/oauth2",
  state: 1
};

//当前登录类型
export const curLoginType: LoginType = "authorization_code";