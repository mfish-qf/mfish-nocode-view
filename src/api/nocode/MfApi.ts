import { defHttp } from "/@/utils/http/axios";
import { MfApi, ReqMfApi, MfApiPageModel, Config } from "/@/api/nocode/model/MfApiModel";
import { MetaDataHeader } from "/@/api/sys/model/DbConnectModel";

/**
 * @description: 自定义API
 * @author: mfish
 * @date: 2023-07-31
 * @version: V1.1.0
 */
enum Api {
  MfApi = "/nocode/mfApi",
  SQL = "/nocode/mfApi/sql",
  Fields = "/nocode/mfApi/fields"
}

/**
 * 分页列表查询
 *
 * @param reqMfApi
 * @return
 */
export const getMfApiList = (reqMfApi?: ReqMfApi) => {
  return defHttp.get<MfApiPageModel>({ url: Api.MfApi, params: reqMfApi });
};

/**
 * 导出自定义API
 * @param reqMfApi
 */
export function exportMfApi(reqMfApi?: ReqMfApi) {
  return defHttp.download({ url: Api.MfApi + "/export", params: reqMfApi });
}

/**
 * 新增自定义API
 *
 * @param mfApi
 * @return
 */
export function insertMfApi(mfApi: MfApi) {
  return defHttp.post<MfApi>({ url: Api.MfApi, params: mfApi }, { successMessageMode: "message" });
}

/**
 * 修改自定义API
 *
 * @param mfApi
 * @return
 */
export function updateMfApi(mfApi: MfApi) {
  return defHttp.put<MfApi>({ url: Api.MfApi, params: mfApi }, { successMessageMode: "message" });
}

/**
 * 删除自定义API
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMfApi(id: string) {
  return defHttp.delete<MfApi>({ url: Api.MfApi + "/" + id }, { successMessageMode: "message" });
}

export function getQuerySql(config: Config) {
  return defHttp.post<string>({ url: Api.SQL, params: config }, { errorMessageMode: "message" });
}

export function getQueryFields(config: Config) {
  return defHttp.post<MetaDataHeader[]>({ url: Api.Fields, params: config }, { errorMessageMode: "message" });
}
