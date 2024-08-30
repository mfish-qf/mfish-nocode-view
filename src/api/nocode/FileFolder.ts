import { defHttp } from "@/utils/http/axios";
import { FileFolder, FileFolderPageModel, ReqFolder } from "@/api/nocode/model/FileFolderModel";

/**
 * @description: 文件目录
 * @author: mfish
 * @date: 2023-07-21
 * @version: V1.3.1
 */
enum Api {
  FileFolderTree = "/nocode/fileFolder/tree",
  FileFolder = "/nocode/fileFolder",
  FileFolderDrag = "/nocode/fileFolder/drag"
}

/**
 * 查询目录树
 *
 * @param reqFileFolder
 * @return
 */
export const getFileFolderTree = (reqFileFolder?: ReqFolder) => {
  return defHttp.get<FileFolder[]>({ url: Api.FileFolderTree, params: reqFileFolder });
};
export const getFileFolderAndFile = (reqFileFolder?: ReqFolder) => {
  return defHttp.get<FileFolderPageModel>({ url: Api.FileFolder, params: reqFileFolder });
};
/**
 * 导出文件目录
 * @param reqFileFolder
 */
export function exportFileFolder(reqFileFolder?: ReqFolder) {
  return defHttp.download({ url: `${Api.FileFolder}/export`, params: reqFileFolder });
}

/**
 * 新增文件目录
 *
 * @param fileFolder
 * @return
 */
export function insertFileFolder(fileFolder: FileFolder) {
  return defHttp.post<FileFolder>({ url: Api.FileFolder, params: fileFolder }, { successMessageMode: "message" });
}

/**
 * 修改文件目录
 *
 * @param fileFolder
 * @return
 */
export function updateFileFolder(fileFolder: FileFolder) {
  return defHttp.put<FileFolder>({ url: Api.FileFolder, params: fileFolder }, { successMessageMode: "message" });
}

/**
 * 拖动目录
 * @param fileFolders
 */
export function dragFileFolder(fileFolders: FileFolder[]) {
  return defHttp.put<FileFolder[]>({ url: Api.FileFolderDrag, params: fileFolders }, { successMessageMode: "message" });
}

/**
 * 删除文件目录
 *
 * @param id 唯一ID
 * @return
 */
export function deleteFileFolder(id: string) {
  return defHttp.delete<FileFolder>({ url: `${Api.FileFolder}/${id}` }, { successMessageMode: "message" });
}
