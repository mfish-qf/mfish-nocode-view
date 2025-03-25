import { defHttp } from "@/utils/http/axios";
import { ScreenResourceApi, ReqScreenResourceApi, ScreenResourceApiPageModel } from "@/api/nocode/model/ScreenResourceApiModel";

/**
 * @description: 大屏资源API
 * @author: mfish
 * @date: 2025-03-21
 * @version: V1.3.2
 */
enum Api {
  ScreenResourceApi = "/nocode/screenResourceApi"
}

/**
 * 分页列表查询
 *
 * @param reqScreenResourceApi
 * @return 返回分页列表
 */
export const getScreenResourceApiList = (reqScreenResourceApi?: ReqScreenResourceApi) => {
  return defHttp.get<ScreenResourceApiPageModel>({ url: Api.ScreenResourceApi, params: reqScreenResourceApi });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getScreenResourceApiById(id: string) {
  return defHttp.get<ScreenResourceApi>({ url: `${Api.ScreenResourceApi}/${id}` });
}

/**
 * 导出大屏资源API
 * @param reqScreenResourceApi 请求参数
 */
export function exportScreenResourceApi(reqScreenResourceApi?: ReqScreenResourceApi) {
  return defHttp.download({ url: Api.ScreenResourceApi + "/export", params: reqScreenResourceApi });
};

/**
 * 新增大屏资源API
 *
 * @param screenResourceApi 请求参数
 * @return 返回结果
 */
export function insertScreenResourceApi(screenResourceApi: ScreenResourceApi) {
  return defHttp.post<ScreenResourceApi>({ url: Api.ScreenResourceApi, params: screenResourceApi }, { successMessageMode: "message" });
};

/**
 * 修改大屏资源API
 *
 * @param screenResourceApi
 * @return 返回结果
 */
export function updateScreenResourceApi(screenResourceApi: ScreenResourceApi) {
  return defHttp.put<ScreenResourceApi>({ url: Api.ScreenResourceApi, params: screenResourceApi }, { successMessageMode: "message" });
};

/**
 * 删除大屏资源API
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteScreenResourceApi(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.ScreenResourceApi}/${id}` }, { successMessageMode: "message" });
};

/**
 * 批量删除大屏资源API
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchScreenResourceApi(ids: string) {
  return defHttp.delete<boolean>({ url: Api.ScreenResourceApi + "/batch/" + ids }, { successMessageMode: "message" });
};
