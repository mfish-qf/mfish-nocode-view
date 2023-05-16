/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  SsoClientDetails,
  ReqSsoClientDetails,
  SsoClientDetailsPageModel
} from "/@/api/sys/model/SsoClientDetailsModel";

enum Api {
  SsoClientDetails = "/oauth2/ssoClientDetails",
  Secret = "/oauth2/ssoClientDetails/secret"
}

/**
 * 分页列表查询
 *
 * @param reqSsoClientDetails
 * @return
 */
export const getSsoClientDetailsList = (reqSsoClientDetails?: ReqSsoClientDetails) => {
  return defHttp.get<SsoClientDetailsPageModel>({ url: Api.SsoClientDetails, params: reqSsoClientDetails });
};

/**
 * 导出客户端信息
 * @param reqSsoClientDetails
 */
export function exportSsoClientDetails(reqSsoClientDetails?: ReqSsoClientDetails) {
  return defHttp.download({ url: Api.SsoClientDetails + "/export", params: reqSsoClientDetails });
};

/**
 * 新增客户端信息
 *
 * @param ssoClientDetails
 * @return
 */
export function insertSsoClientDetails(ssoClientDetails: SsoClientDetails) {
  return defHttp.post<SsoClientDetails>({
    url: Api.SsoClientDetails,
    params: ssoClientDetails
  }, { successMessageMode: "message" });
};

/**
 * 修改客户端信息
 *
 * @param ssoClientDetails
 * @return
 */
export function updateSsoClientDetails(ssoClientDetails: SsoClientDetails) {
  return defHttp.put<SsoClientDetails>({
    url: Api.SsoClientDetails,
    params: ssoClientDetails
  }, { successMessageMode: "message" });
};

/**
 * 重置密钥
 * @param id
 */
export function resetSecret(id: string) {
  return defHttp.put<SsoClientDetails>({
    url: Api.Secret + "/" + id
  }, { successMessageMode: "message" });
};

/**
 * 删除客户端信息
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSsoClientDetails(id: string) {
  return defHttp.delete<SsoClientDetails>({ url: Api.SsoClientDetails + "/" + id }, { successMessageMode: "message" });
};
