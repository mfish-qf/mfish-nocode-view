import { defHttp } from "@/utils/http/axios";
import { ScreenResource, ReqScreenResource, ScreenResourcePageModel } from "@/api/nocode/model/ScreenResourceModel";

/**
 * @description: 大屏资源信息
 * @author: mfish
 * @date: 2025-03-19
 * @version: V1.3.2
 */
enum Api {
  ScreenResource = "/nocode/screenResource"
}

/**
 * 分页列表查询
 *
 * @param reqScreenResource
 * @return 返回分页列表
 */
export const getScreenResourceList = (reqScreenResource?: ReqScreenResource) => {
  return defHttp.get<ScreenResourcePageModel>({ url: Api.ScreenResource, params: reqScreenResource });
};

/**
 * 通过sourceId查询
 *
 * @param sourceId 来源id
 * @return 返回分页列表
 */
export function getScreenResourceBySourceId(sourceId: string) {
  return defHttp.get<ScreenResource>({ url: `${Api.ScreenResource}/${sourceId}` });
}

/**
 * 导出大屏资源信息
 * @param reqScreenResource 请求参数
 */
export function exportScreenResource(reqScreenResource?: ReqScreenResource) {
  return defHttp.download({ url: Api.ScreenResource + "/export", params: reqScreenResource });
}

/**
 * 新增大屏资源信息
 *
 * @param screenResource 请求参数
 * @return 返回结果
 */
export function insertScreenResource(screenResource: ScreenResource) {
  return defHttp.post<ScreenResource>(
    { url: Api.ScreenResource, params: screenResource },
    { successMessageMode: "message" }
  );
}

/**
 * 修改大屏资源信息
 *
 * @param screenResource
 * @return 返回结果
 */
export function updateScreenResource(screenResource: ScreenResource) {
  return defHttp.put<ScreenResource>(
    { url: Api.ScreenResource, params: screenResource },
    { successMessageMode: "message" }
  );
}

/**
 * 删除大屏资源信息
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteScreenResource(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.ScreenResource}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除大屏资源信息
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchScreenResource(ids: string) {
  return defHttp.delete<boolean>({ url: Api.ScreenResource + "/batch/" + ids }, { successMessageMode: "message" });
}
