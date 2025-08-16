import { defHttp } from "@mfish/core/utils/http/axios";
import { HttpFolder, HttpFolderPageModel, ReqFolder } from "@/api/nocode/model/HttpFolderModel";

/**
 * @description: Http接口目录
 * @author: mfish
 * @date: 2023-07-21
 * @version: V2.1.0
 */
enum Api {
  HttpFolderTree = "/nocode/httpFolder/tree",
  HttpFolder = "/nocode/httpFolder",
  HttpFolderDrag = "/nocode/httpFolder/drag"
}

/**
 * 查询目录树
 *
 * @param reqHttpFolder
 * @return
 */
export const getHttpFolderTree = (reqHttpFolder?: ReqFolder) => {
  return defHttp.get<HttpFolder[]>({ url: Api.HttpFolderTree, params: reqHttpFolder });
};
export const getHttpFolderAndHttp = (reqHttpFolder?: ReqFolder) => {
  return defHttp.get<HttpFolderPageModel>({ url: Api.HttpFolder, params: reqHttpFolder });
};

/**
 * 导出Http接口目录
 * @param reqHttpFolder
 */
export function exportHttpFolder(reqHttpFolder?: ReqFolder) {
  return defHttp.download({ url: `${Api.HttpFolder}/export`, params: reqHttpFolder });
}

/**
 * 新增Http接口目录
 *
 * @param httpFolder
 * @return
 */
export function insertHttpFolder(httpFolder: HttpFolder) {
  return defHttp.post<HttpFolder>({ url: Api.HttpFolder, params: httpFolder }, { successMessageMode: "message" });
}

/**
 * 修改Http接口目录
 *
 * @param httpFolder
 * @return
 */
export function updateHttpFolder(httpFolder: HttpFolder) {
  return defHttp.put<HttpFolder>({ url: Api.HttpFolder, params: httpFolder }, { successMessageMode: "message" });
}

/**
 * 拖动目录
 * @param httpFolders
 */
export function dragHttpFolder(httpFolders: HttpFolder[]) {
  return defHttp.put<HttpFolder[]>({ url: Api.HttpFolderDrag, params: httpFolders }, { successMessageMode: "message" });
}

/**
 * 删除Http接口目录
 *
 * @param id 唯一ID
 * @return
 */
export function deleteHttpFolder(id: string) {
  return defHttp.delete<HttpFolder>({ url: `${Api.HttpFolder}/${id}` }, { successMessageMode: "message" });
}
