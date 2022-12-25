/**
 * @description：组织请求类
 * @author     ：qiufeng
 * @date       ：2022/11/9 18:12
 */
import { defHttp } from "/@/utils/http/axios";
import { SsoOrg } from "/@/api/sys/model/OrgModel";

enum Api {
  org = "/oauth2/org",
  orgTree = "/oauth2/org/tree",
}

export const getOrgTree = (params?: SsoOrg) => {
  return defHttp.get<SsoOrg[]>({ url: Api.orgTree, params });
};

export function insertOrg(params: SsoOrg) {
  return defHttp.post<SsoOrg>({ url: Api.org, params }, { successMessageMode: "message" });
};

export function updateOrg(params: SsoOrg) {
  return defHttp.put<SsoOrg>({ url: Api.org, params }, { successMessageMode: "message" });
};

export function deleteOrg(params: string) {
  return defHttp.delete<SsoOrg>({ url: `${Api.org}/${params}` }, { successMessageMode: "message" });
};