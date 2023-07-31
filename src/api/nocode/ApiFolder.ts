import { defHttp } from "/@/utils/http/axios";
import { ApiFolder, ReqApiFolder } from "/@/api/nocode/model/ApiFolderModel";

/**
 * @description: API目录
 * @author: mfish
 * @date: 2023-07-21
 * @version: V1.0.0
 */
enum Api {
  APIFolderTree = "/nocode/apiFolder/tree",
  ApiFolder = "/nocode/apiFolder",
  ApiFolderDrag = "/nocode/apiFolder/drag"
}

/**
 * 查询目录树
 *
 * @param reqApiFolder
 * @return
 */
export const getApiFolderTree = (reqApiFolder?: ReqApiFolder) => {
  return defHttp.get<ApiFolder[]>({ url: Api.APIFolderTree, params: reqApiFolder });
};

/**
 * 导出API目录
 * @param reqApiFolder
 */
export function exportApiFolder(reqApiFolder?: ReqApiFolder) {
  return defHttp.download({ url: Api.ApiFolder + "/export", params: reqApiFolder });
}

/**
 * 新增API目录
 *
 * @param apiFolder
 * @return
 */
export function insertApiFolder(apiFolder: ApiFolder) {
  return defHttp.post<ApiFolder>({ url: Api.ApiFolder, params: apiFolder }, { successMessageMode: "message" });
}

/**
 * 修改API目录
 *
 * @param apiFolder
 * @return
 */
export function updateApiFolder(apiFolder: ApiFolder) {
  return defHttp.put<ApiFolder>({ url: Api.ApiFolder, params: apiFolder }, { successMessageMode: "message" });
}

/**
 * 拖动目录
 * @param apiFolders
 */
export function dragApiFolder(apiFolders: ApiFolder[]) {
  return defHttp.put<ApiFolder[]>({ url: Api.ApiFolderDrag, params: apiFolders }, { successMessageMode: "message" });
}

/**
 * 删除API目录
 *
 * @param id 唯一ID
 * @return
 */
export function deleteApiFolder(id: string) {
  return defHttp.delete<ApiFolder>({ url: Api.ApiFolder + "/" + id }, { successMessageMode: "message" });
}
