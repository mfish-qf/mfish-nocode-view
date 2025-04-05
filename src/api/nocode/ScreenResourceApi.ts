import { defHttp } from "@/utils/http/axios";
import {
  ScreenResourceApi,
  ReqScreenResourceApi,
  ScreenResourceApiPageModel
} from "@/api/nocode/model/ScreenResourceApiModel";
import { DataTable, MetaDataHeader } from "@/api/sys/model/DbConnectModel";
import { ReqPage } from "@/api/model/BaseModel";
import { MfApi } from "@/api/nocode/model/MfApiModel";

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
 * 新增大屏资源API
 *
 * @param screenResourceApi 请求参数
 * @return 返回结果
 */
export function insertScreenResourceApi(screenResourceApi: ScreenResourceApi) {
  return defHttp.post<ScreenResourceApi>(
    { url: Api.ScreenResourceApi, params: screenResourceApi },
    { successMessageMode: "message" }
  );
}

/**
 * 修改大屏资源API
 *
 * @param screenResourceApi
 * @return 返回结果
 */
export function updateScreenResourceApi(screenResourceApi: ScreenResourceApi) {
  return defHttp.put<ScreenResourceApi>(
    { url: Api.ScreenResourceApi, params: screenResourceApi },
    { successMessageMode: "message" }
  );
}

/**
 * 删除大屏资源API
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteScreenResourceApi(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.ScreenResourceApi}/${id}` }, { successMessageMode: "message" });
}

/**
 * 查询API结果数据 包含表头
 * @param id 大屏id,api_id
 * @param reqPage
 * @param params
 */
export function getDataTableByResourceId(id: string, reqPage: ReqPage, params: any) {
  return defHttp.get<DataTable>(
    {
      url: `${Api.ScreenResourceApi}/table/${id}?pageNum=${reqPage.pageNum}&pageSize=${reqPage.pageSize}`,
      params: { ...params }
    },
    { errorMessageMode: "message" }
  );
}

/**
 * 查询API字段
 * @param id 大屏id,api_id
 */
export function getFieldsByResourceId(id: string) {
  return defHttp.get<MetaDataHeader[]>(
    { url: `${Api.ScreenResourceApi}/fields/${id}` },
    { errorMessageMode: "message" }
  );
}

/**
 * 获取API信息
 * @param id 大屏id,api_id
 */
export function getMfApiByResourceId(id: string) {
  return defHttp.get<ScreenResourceApi>({ url: `${Api.ScreenResourceApi}/api/${id}` });
}
