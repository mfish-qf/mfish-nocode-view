/**
 * @description：组织请求类
 * @author     ：qiufeng
 * @date       ：2022/11/9 18:12
 */
import { defHttp } from "/@/utils/http/axios";
import { OrgTreeModel, SsoOrg } from "/@/api/sys/model/OrgModel";

enum Api {
  ssoOrg = "/oauth2/ssoOrg",
  ssoOrgTree = "/oauth2/ssoOrg/tree",
}

export const getSsoOrgTree = (params?: SsoOrg) => {
  return defHttp.get<OrgTreeModel>({ url: Api.ssoOrgTree, params });
};

export function insertSsoOrg(params: SsoOrg) {
  return defHttp.post<SsoOrg>({ url: Api.ssoOrg, params }, { errorMessageMode: "message" });
}

export function updateSsoOrg(params: SsoOrg) {
  return defHttp.put<SsoOrg>({ url: Api.ssoOrg, params }, { errorMessageMode: "message" });
}

export function deleteSsoOrg(params: string) {
  return defHttp.delete<SsoOrg>({ url: `${Api.ssoOrg}/${params}` }, { errorMessageMode: "message" });
}