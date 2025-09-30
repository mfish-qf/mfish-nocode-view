import { defHttp } from "@mfish/core/utils/http/axios";
import { MfFile, MfFilePageModel, ReqMfFile } from "@/api/nocode/model/MfFileModel";

/**
 * @description: 文件数据源
 * @author: mfish
 * @date: 2023-12-13
 * @version: V2.2.0
 */
enum Api {
  MfFile = "/nocode/mfFile"
}

/**
 * 分页列表查询
 *
 * @param reqMfFile
 * @return
 */
export const getMfFileList = (reqMfFile?: ReqMfFile) => {
  return defHttp.get<MfFilePageModel>({ url: Api.MfFile, params: reqMfFile });
};

/**
 * 导出文件数据源
 * @param reqMfFile
 */
export function exportMfFile(reqMfFile?: ReqMfFile) {
  return defHttp.download({ url: `${Api.MfFile}/export`, params: reqMfFile });
}

/**
 * 新增文件数据源
 *
 * @param mfFiles
 * @return
 */
export function insertMfFile(mfFiles: MfFile[]) {
  return defHttp.post<MfFile[]>({ url: Api.MfFile, params: mfFiles }, { successMessageMode: "message" });
}

/**
 * 修改文件数据源
 *
 * @param mfFile
 * @return
 */
export function updateMfFile(mfFile: MfFile) {
  return defHttp.put<MfFile>({ url: Api.MfFile, params: mfFile }, { successMessageMode: "message" });
}

/**
 * 删除文件数据源
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMfFile(id: string) {
  return defHttp.delete<MfFile>({ url: `${Api.MfFile}/${id}` }, { successMessageMode: "message" });
}

/**
 * 下载文件
 * @param id 唯一ID
 */
export function downloadMfFile(id: string) {
  return defHttp.download({ url: `${Api.MfFile}/download/${id}` });
}
