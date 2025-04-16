/**
 * @description: 登录设置
 * @author: mfish
 * @date: 2023/1/17 16:51
 */
import { useGlobSetting } from "../hooks/setting";

const { oauth2Url, oauth2RedirectUri, loginType, giteeClientId, giteeRedirectUri, githubClientId, githubRedirectUri } =
  useGlobSetting();

interface OAuth2Config {
  url: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  response_type: string;
  state: string;

  [key: string]: string; // 如果有其他可能的属性
}

// oauth2配置
export const oauth2Config: OAuth2Config = {
  url: oauth2Url as string,
  client_id: "system",
  client_secret: "system",
  response_type: "code",
  redirect_uri: oauth2RedirectUri as string,
  state: "1"
};

export const giteeConfig = {
  client_id: giteeClientId as string,
  redirect_uri: giteeRedirectUri as string
};
export const githubConfig = {
  client_id: githubClientId as string,
  redirect_uri: githubRedirectUri as string
};
// 当前登录类型
export const curLoginType = loginType;
