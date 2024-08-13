import { defHttp } from "@/utils/http/axios";
import { ScreenFolder, ReqScreenFolder, ScreenFolderPageModel } from "@/api/nocode/model/ScreenFolderModel";

/**
 * @description: 大屏目录
 * @author: mfish
 * @date: 2024-01-08
 * @version: V1.2.0
 */
enum Api {
  ScreenFolderTree = "/nocode/screenFolder/tree",
  ScreenFolder = "/nocode/screenFolder",
  ScreenFolderDrag = "/nocode/screenFolder/drag"
}

export const getScreenFolderTree = (reqScreenFolder?: ReqScreenFolder) => {
  return defHttp.get<ScreenFolder[]>({ url: Api.ScreenFolderTree, params: reqScreenFolder });
};

export const getScreenFolderAndFile = (reqScreenFolder?: ReqScreenFolder) => {
  return defHttp.get<ScreenFolderPageModel>({ url: Api.ScreenFolder, params: reqScreenFolder });
};

/**
 * 导出大屏目录
 * @param reqScreenFolder
 */
export function exportScreenFolder(reqScreenFolder?: ReqScreenFolder) {
  return defHttp.download({ url: `${Api.ScreenFolder}/export`, params: reqScreenFolder });
}

/**
 * 新增大屏目录
 *
 * @param screenFolder
 * @return
 */
export function insertScreenFolder(screenFolder: ScreenFolder) {
  return defHttp.post<ScreenFolder>({ url: Api.ScreenFolder, params: screenFolder }, { successMessageMode: "message" });
}

/**
 * 修改大屏目录
 *
 * @param screenFolder
 * @return
 */
export function updateScreenFolder(screenFolder: ScreenFolder) {
  return defHttp.put<ScreenFolder>({ url: Api.ScreenFolder, params: screenFolder }, { successMessageMode: "message" });
}

/**
 * 拖动目录
 * @param screenFolders
 */
export function dragScreenFolder(screenFolders: ScreenFolder[]) {
  return defHttp.put<ScreenFolder[]>(
    { url: Api.ScreenFolderDrag, params: screenFolders },
    { successMessageMode: "message" }
  );
}

/**
 * 删除大屏目录
 *
 * @param id 唯一ID
 * @return
 */
export function deleteScreenFolder(id: string) {
  return defHttp.delete<ScreenFolder>({ url: `${Api.ScreenFolder}/${id}` }, { successMessageMode: "message" });
}
