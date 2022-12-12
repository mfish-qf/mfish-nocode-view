/**
 * @description：用户信息
 * @author     ：qiufeng
 * @date       ：2022/10/11 15:28
 */

//登录接口参数
export interface LoginParams {
  username: string;
  password: string;
  client_id: string;
  client_secret: string;
  grant_type: string;
  redirect_uri: string;
}

export interface RoleInfo {
  id: string;
  roleName: string;
  roleCode: string;
}

export interface AccessToken {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface SsoUser {
  id: string;
  orgName: string;
  account: string;
  phone: string;
  email: string;
  password: string;
  oldPassword: string;
  nickname: string;
  headImgUrl: string;
  telephone: string;
  birthday: string;
  sex: number;
  status: number;
  del_flag: number;
  salt: string;
  openid: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  roleIds: string[];
  userRoles: RoleInfo[];
  permissions: Set<string>;
}
