import { defHttp } from "/@/utils/http/axios";
import { SsoTenant, ReqSsoTenant, SsoTenantPageModel } from "/@/api/sys/model/SsoTenantModel";

/**
 * @description: 租户信息表
 * @author: mfish
 * @date: 2023-05-31
 * @version: V1.0.0
 */
enum Api {
  SsoTenant = "/oauth2/ssoTenant"
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
 * 删除租户信息表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSsoTenant(id: string) {
  return defHttp.delete<SsoTenant>({ url: Api.SsoTenant + "/" + id }, { successMessageMode: "message" });
}
