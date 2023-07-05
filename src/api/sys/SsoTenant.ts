import { defHttp } from "/@/utils/http/axios";
import { SsoTenant, ReqSsoTenant, SsoTenantPageModel } from "/@/api/sys/model/SsoTenantModel";
import { SsoOrg } from "/@/api/sys/model/OrgModel";
import { ReqSsoRole, SsoRole } from "/@/api/sys/model/RoleModel";
import { MenuListItem, MenuParams } from "/@/api/sys/model/MenuModel";
import { ReqSsoUser, SsoUserPageModel, UserOrg } from "/@/api/sys/model/UserModel";

/**
 * @description: 租户信息表
 * @author: mfish
 * @date: 2023-05-31
 * @version: V1.0.0
 */
enum Api {
  SsoTenant = "/oauth2/ssoTenant",
  ChangeTenant = "/oauth2/ssoTenant/change",
  MeTenant = "/oauth2/ssoTenant/me",
  TenantOrg = "/oauth2/ssoTenant/org",
  TenantRole = "/oauth2/ssoTenant/role",
  TenantALLRole = "/oauth2/ssoTenant/role/all",
  TenantRoleMenu = "/oauth2/ssoTenant/role/menus",
  TenantMenuTree = "/oauth2/ssoTenant/menu/tree",
  TenantUser = "/oauth2/ssoTenant/user",
  TenantUserOrg = "/oauth2/ssoTenant/user/org"
}

/**
 * 分页列表查询
 *
 * @param reqSsoTenant
 * @return
 */
export const getSsoTenantList = (reqSsoTenant?: ReqSsoTenant) => {
  return defHttp.get<SsoTenantPageModel>({ url: Api.SsoTenant, params: reqSsoTenant });
};

/**
 * 导出租户信息表
 * @param reqSsoTenant
 */
export function exportSsoTenant(reqSsoTenant?: ReqSsoTenant) {
  return defHttp.download({ url: Api.SsoTenant + "/export", params: reqSsoTenant });
}

/**
 * 新增租户信息表
 *
 * @param ssoTenant
 * @return
 */
export function insertSsoTenant(ssoTenant: SsoTenant) {
  return defHttp.post<SsoTenant>({ url: Api.SsoTenant, params: ssoTenant }, { successMessageMode: "message" });
}

/**
 * 修改租户信息表
 *
 * @param ssoTenant
 * @return
 */
export function updateSsoTenant(ssoTenant: SsoTenant) {
  return defHttp.put<SsoTenant>({ url: Api.SsoTenant, params: ssoTenant }, { successMessageMode: "message" });
}

/**
 * 切换租户
 * @param tenantId
 */
export function changeSsoTenant(tenantId: String) {
  return defHttp.put<string>({ url: Api.ChangeTenant + "/" + tenantId }, { successMessageMode: "message" });
}

/**
 * 管理员更新自己租户信息
 * @param ssoTenant
 */
export function updateMeTenant(ssoTenant: SsoTenant) {
  return defHttp.put<SsoTenant>({ url: Api.MeTenant, params: ssoTenant }, { successMessageMode: "message" });
}

/**
 * 删除租户信息表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSsoTenant(id: string) {
  return defHttp.delete<SsoTenant>({ url: Api.SsoTenant + "/" + id }, { successMessageMode: "message" });
}

/**
 * 获取租户组织树
 * @param params
 */
export const getTenantOrgTree = (params?: SsoOrg) => {
  return defHttp.get<SsoOrg[]>({ url: Api.TenantOrg, params });
};

export function insertTenantOrg(params: SsoOrg) {
  return defHttp.post<SsoOrg>({ url: Api.TenantOrg, params }, { successMessageMode: "message" });
}

export function updateTenantOrg(params: SsoOrg) {
  return defHttp.put<SsoOrg>({ url: Api.TenantOrg, params }, { successMessageMode: "message" });
}

export function deleteTenantOrg(params: string) {
  return defHttp.delete<SsoOrg>({ url: `${Api.TenantOrg}/${params}` }, { successMessageMode: "message" });
}

export const getTenantRole = (params?: ReqSsoRole) => {
  return defHttp.get<SsoOrg[]>({ url: Api.TenantRole, params });
};

export const getTenantAllRole = (params?: ReqSsoRole) => {
  return defHttp.get<SsoRole[]>({ url: Api.TenantALLRole, params });
};

export const getTenantRoleMenus = (roleId?: string) => {
  return defHttp.get<String[]>({ url: `${Api.TenantRoleMenu}/${roleId}` });
};

/**
 * 获取租户菜单树
 * @param params
 */
export const getTenantMenuTree = (params?: MenuParams) => {
  return defHttp.get<MenuListItem[]>({ url: Api.TenantMenuTree, params });
};

export const insertTenantRole = (params: SsoRole) => {
  return defHttp.post<SsoRole>({ url: Api.TenantRole, params }, { successMessageMode: "message" });
};
export const updateTenantRole = (params: SsoRole) => {
  return defHttp.put<SsoRole>({ url: Api.TenantRole, params }, { successMessageMode: "message" });
};
export const deleteTenantRole = (params: string) => {
  return defHttp.delete({ url: `${Api.TenantRole}/${params}` }, { successMessageMode: "message" });
};

export const getTenantUserList = (params?: ReqSsoUser) => {
  return defHttp.get<SsoUserPageModel>({ url: Api.TenantUser, params });
};

export function bindUserOrg(params: UserOrg) {
  return defHttp.post<Boolean>({ url: Api.TenantUserOrg, params }, { successMessageMode: "message" });
}

export function deleteUserOrg(params: UserOrg) {
  return defHttp.delete<Boolean>({ url: Api.TenantUserOrg, params }, { successMessageMode: "message" });
}
