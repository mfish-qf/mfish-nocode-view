import { defHttp } from "@core/utils/http/axios";
import {
  LoginParams,
  AccessToken,
  SsoUser,
  SsoUserPageModel,
  OnlineUserPageModel,
  RoleInfo,
  ReqSsoUser,
  CaptchaInfo
} from "@core/api/sys/model/UserModel";
import { MessageMode } from "@mfish/types/src/type/axios";
import { ContentTypeEnum } from "@core/enums";
import { ReqPage } from "@core/api/model/BaseModel";
import { TenantVo } from "@core/api/sys/model/SsoTenantModel";

enum Api {
  Captcha = "/captcha",
  Login = "/oauth2/accessToken",
  Logout = "/oauth2/user/revoke",
  GetUserInfo = "/oauth2/user/info",
  User = "/oauth2/user",
  UserSearch = "/oauth2/user/search",
  Me = "/oauth2/user/me",
  IsAccountExist = "/oauth2/user/exist",
  Pwd = "/oauth2/user/pwd",
  SendMsg = "/oauth2/sendMsg",
  SetStatus = "/oauth2/user/status",
  Online = "/oauth2/user/online",
  UserRoles = "/oauth2/user/roles",
  Tenants = "/oauth2/user/tenants",
  UnLock = "/oauth2/unLock"
}

export function getCaptcha() {
  return defHttp.get<CaptchaInfo>({ url: Api.Captcha });
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
      errorMessageMode: mode,
      refreshToken: false
    }
  );
}

export function unLock(params: LoginParams) {
  return defHttp.post<AccessToken>({
    url: Api.UnLock,
    params,
    headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED }
  });
}

/**
 * @description: getUserInfo
 */
export function getUserInfo(refreshToken: boolean = true) {
  return defHttp.get<SsoUser>({ url: Api.GetUserInfo }, { errorMessageMode: "none", refreshToken });
}

/**
 * 通过用户ID获取用户
 * @param id
 */
export function getUserById(id: string) {
  return defHttp.get<SsoUser>({ url: `${Api.User}/${id}` });
}

/**
 * 获取用户角色信息
 * @param params
 */
export function getUserRoles(params: { userId?: string; tenantId?: string }) {
  return defHttp.get<RoleInfo[]>({ url: Api.UserRoles, params });
}

/**
 * 获取当前用户租户列表
 */
export const getUserTenants = () => {
  return defHttp.get<TenantVo[]>({ url: Api.Tenants });
};

/**
 * 当前用户登出
 */
export function doLogout() {
  return defHttp.delete({ url: Api.Logout });
}

/**
 * 登出指定用户
 * @param sid
 */
export function logoutUser(sid: string) {
  return defHttp.delete({ url: `${Api.Logout}/${sid}` });
}

/**
 * 判断帐号是否存在
 * @param account
 */
export const isAccountExist = (account: string) => {
  return defHttp.get<any>({ url: `${Api.IsAccountExist}/${account}` }, { errorMessageMode: "none" });
};

export const getUserList = (params?: ReqSsoUser) => {
  return defHttp.get<SsoUserPageModel>({ url: Api.User, params });
};

export const searchUserList = (condition?: string) => {
  return defHttp.get<SsoUser[]>({ url: Api.UserSearch, params: { condition } });
};

export function insertUser(params: SsoUser) {
  return defHttp.post<SsoUser>({ url: Api.User, params }, { successMessageMode: "message" });
}

export function updateUser(params: SsoUser) {
  return defHttp.put<SsoUser>({ url: Api.User, params }, { successMessageMode: "message" });
}

export function updateMe(params: SsoUser) {
  return defHttp.put<SsoUser>({ url: Api.Me, params }, { successMessageMode: "message" });
}

export function deleteUser(params: string) {
  return defHttp.delete<SsoUser>({ url: `${Api.User}/${params}` }, { successMessageMode: "message" });
}

export function changePwd(params: { userId: string; oldPwd?: string; newPwd: string }) {
  return defHttp.put({ url: Api.Pwd, params }, { successMessageMode: "message" });
}

export const setUserStatus = (userId: string, status: number) => {
  return defHttp.put<boolean>({ url: Api.SetStatus, params: { id: userId, status } });
};

export const getOnlineList = (params?: ReqPage) => {
  return defHttp.get<OnlineUserPageModel>({ url: Api.Online, params });
};
