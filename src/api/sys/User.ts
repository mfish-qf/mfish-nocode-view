import { defHttp } from "/@/utils/http/axios";
import { LoginParams, GetUserInfoModel, AccessToken } from "./model/UserModel";
import { MessageMode } from "/#/axios";
import { ContentTypeEnum } from "/@/enums/HttpEnum";

enum Api {
  Login = "/oauth2/accessToken",
  Logout = "/oauth2/user/revoke",
  GetUserInfo = "/oauth2/user/info",
  SendMsg = "/oauth2/sendMsg",
  Captche = "/captcha"
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: MessageMode = "modal") {
  return defHttp.post<AccessToken>(
    {
      url: Api.Login,
      params,
      headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED }
    },
    {
      errorMessageMode: mode
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: "none" });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.Captche });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
