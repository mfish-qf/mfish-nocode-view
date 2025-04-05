import { defHttp } from "@/utils/http/axios";
import { ScreenResource, ReqScreenResource, ScreenResourcePageModel } from "@/api/nocode/model/ScreenResourceModel";
import { ScreenLayers } from "@/api/nocode/model/ScreenLayersModel";

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
 * @param sourceId 唯一ID
 * @return 返回结果
 */
export function deleteScreenResource(sourceId: string) {
  return defHttp.delete<boolean>({ url: `${Api.ScreenResource}/${sourceId}` }, { successMessageMode: "message" });
}

/**
 * 通过资源id查询图层信息
 * @param sourceId
 */
export function getLayersBySourceId(sourceId: string) {
  return defHttp.get<ScreenLayers[]>({ url: `${Api.ScreenResource}/layers/${sourceId}` });
}
