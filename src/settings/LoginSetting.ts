/**
 * @description: 登录设置
 * @author: qiufeng
 * @date: 2023/1/17 16:51
 */
import { useGlobSetting } from "/@/hooks/setting";

const { oauth2Url, oauth2RedirectUri, loginType } = useGlobSetting();

//oauth2配置
export const oauth2Config = {
  url: oauth2Url as string,
  client_id: "system",
  client_secret: "system",
  response_type: "code",
  redirect_uri: oauth2RedirectUri as string,
  state: 1
};

//当前登录类型
export const curLoginType = loginType;