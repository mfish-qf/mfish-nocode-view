import { defHttp } from "@mfish/core/utils/http/axios";
import {
  ReqSsoClientDetails,
  SsoClientDetails,
  SsoClientDetailsPageModel
} from "@/api/sys/model/SsoClientDetailsModel";

/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V2.0.1
 */
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
  return defHttp.get<SsoClientDetailsPageModel>({
    url: Api.SsoClientDetails,
    params: reqSsoClientDetails
  });
};

/**
 * 新增客户端信息
 *
 * @param ssoClientDetails
 * @return
 */
export function insertSsoClientDetails(ssoClientDetails: SsoClientDetails) {
  return defHttp.post<SsoClientDetails>(
    {
      url: Api.SsoClientDetails,
      params: ssoClientDetails
    },
    { successMessageMode: "message" }
  );
}

/**
 * 修改客户端信息
 *
 * @param ssoClientDetails
 * @return
 */
export function updateSsoClientDetails(ssoClientDetails: SsoClientDetails) {
  return defHttp.put<SsoClientDetails>(
    {
      url: Api.SsoClientDetails,
      params: ssoClientDetails
    },
    { successMessageMode: "message" }
  );
}

/**
 * 重置密钥
 * @param id
 */
export function resetSecret(id: string) {
  return defHttp.put<string>(
    {
      url: `${Api.Secret}/${id}`
    },
    { successMessageMode: "message" }
  );
}

/**
 * 获取密钥
 * @param id
 */
export function getSecret(id: string) {
  return defHttp.get<string>({
    url: `${Api.Secret}/${id}`
  });
}

/**
 * 删除客户端信息
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSsoClientDetails(id: string) {
  return defHttp.delete<SsoClientDetails>({ url: `${Api.SsoClientDetails}/${id}` }, { successMessageMode: "message" });
}
