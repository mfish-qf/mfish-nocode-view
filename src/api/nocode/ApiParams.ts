import { defHttp } from "@/utils/http/axios";
import { ApiParams, ReqApiParams, ApiParamsPageModel } from "@/api/nocode/model/ApiParamsModel";

/**
 * @description: API请求参数
 * @author: mfish
 * @date: 2023-08-25
 * @version: V1.2.0
 */
enum Api {
  ApiParams = "/nocode/apiParams"
}

/**
 * 分页列表查询
 *
 * @param reqApiParams
 * @return
 */
export const getApiParamsList = (reqApiParams?: ReqApiParams) => {
  return defHttp.get<ApiParamsPageModel>({ url: Api.ApiParams, params: reqApiParams });
};

/**
 * 导出API请求参数
 * @param reqApiParams
 */
export function exportApiParams(reqApiParams?: ReqApiParams) {
  return defHttp.download({ url: `${Api.ApiParams}/export`, params: reqApiParams });
}

/**
 * 新增API请求参数
 *
 * @param apiParams
 * @return
 */
export function insertApiParams(apiParams: ApiParams) {
  return defHttp.post<ApiParams>({ url: Api.ApiParams, params: apiParams }, { successMessageMode: "message" });
}

/**
 * 修改API请求参数
 *
 * @param apiParams
 * @return
 */
export function updateApiParams(apiParams: ApiParams) {
  return defHttp.put<ApiParams>({ url: Api.ApiParams, params: apiParams }, { successMessageMode: "message" });
}

/**
 * 删除API请求参数
 *
 * @param id 唯一ID
 * @return
 */
export function deleteApiParams(id: string) {
  return defHttp.delete<ApiParams>({ url: `${Api.ApiParams}/${id}` }, { successMessageMode: "message" });
}
