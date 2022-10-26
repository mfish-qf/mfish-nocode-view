import { defHttp } from "/@/utils/http/axios";
import { LoginParams, GetUserInfoModel, AccessToken } from "./model/UserModel";
import { ErrorMessageMode, Result } from "/#/axios";
import { ContentTypeEnum } from "/@/enums/HttpEnum";

enum Api {
  Login = "/oauth2/accessToken",
  Logout = "/logout",
  GetUserInfo = "/oauth2/user/info",
  GetPermCode = "/getPermCode",
  TestRetry = "/testRetry",
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = "modal") {
  return defHttp.post<Result<AccessToken>>(
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
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000
      }
    }
  );
}
