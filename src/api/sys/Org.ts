import { defHttp } from "@/utils/http/axios";
import { ReqOrgUser, SsoOrg } from "@/api/sys/model/OrgModel";
import { RoleInfo, SsoUserPageModel } from "@/api/sys/model/UserModel";

/**
 * @description: 组织请求类
 * @author: mfish
 * @date: 2022/11/9 18:12
 */
enum Api {
  Org = "/oauth2/org",
  OrgTree = "/oauth2/org/tree",
  OrgRoles = "/oauth2/org/roles",
  OrgByCode = "/oauth2/org/code",
  UserByOrgCode = "/oauth2/org/user"
}

export const getOrgTree = (params?: SsoOrg) => {
  return defHttp.get<SsoOrg[]>({ url: Api.OrgTree, params });
};

export function getOrgByIds(ids: string) {
  return defHttp.get<SsoOrg[]>({ url: `${Api.Org}/${ids}` });
}

export function insertOrg(params: SsoOrg) {
  return defHttp.post<SsoOrg>({ url: Api.Org, params }, { successMessageMode: "message" });
}

export function updateOrg(params: SsoOrg) {
  return defHttp.put<SsoOrg>({ url: Api.Org, params }, { successMessageMode: "message" });
}

export function deleteOrg(params: string) {
  return defHttp.delete<SsoOrg>({ url: `${Api.Org}/${params}` }, { successMessageMode: "message" });
}

/**
 * 获取组织角色
 * @param orgId
 */
export function getOrgRoles(orgId: string) {
  return defHttp.get<RoleInfo[]>({ url: `${Api.OrgRoles}/${orgId}` });
}

/**
 * 根据固定编码获取组织
 * @param code 组织编码
 * @param direction 查询方向
 */
export function getOrgByCode(code: string, direction: "up" | "down" | "all") {
  return defHttp.get<SsoOrg[]>({ url: `${Api.OrgByCode}/${code}`, params: { direction } });
}

/**
 * 根据固定组织编码获取组织及子组织下所有用户
 * @param code 组织编码
 * @param params 参数
 */
export function getUserByOrgCode(code: string, params: ReqOrgUser) {
  return defHttp.get<SsoUserPageModel[]>({ url: `${Api.UserByOrgCode}/${code}`, params });
}
