import { defHttp } from "@core/utils/http/axios";
import { ReqSysFile, SysFile, SysFilePageModel } from "@core/api/model/BaseModel.ts";

/**
 * @description: 文件存储
 * @author: mfish
 * @date: 2023-03-02
 * @version: V2.2.0
 */
enum Api {
  SysFile = "/storage/sysFile",
  SetStatus = "/storage/sysFile/status",
  LogicDeleteFile = "/storage/sysFile/logic",
  RestoreFile = "/storage/sysFile/restore"
}

/**
 * 分页列表查询
 *
 * @param reqSysFile
 * @return
 */
export const getSysFileList = (reqSysFile?: ReqSysFile) => {
  return defHttp.get<SysFilePageModel>({ url: Api.SysFile, params: reqSysFile });
};

export const getSysFileByKey = (fileKey: string) => {
  return defHttp.get<SysFile>({ url: `${Api.SysFile}/${fileKey}` }, { errorMessageMode: "none" });
};

/**
 * 新增文件存储
 *
 * @param sysFile
 * @return
 */
export function insertSysFile(sysFile: SysFile) {
  return defHttp.post<SysFile>({ url: Api.SysFile, params: sysFile }, { successMessageMode: "message" });
}

/**
 * 修改文件存储
 *
 * @param sysFile
 * @return
 */
export function updateSysFile(sysFile: SysFile) {
  return defHttp.put<SysFile>({ url: Api.SysFile, params: sysFile }, { successMessageMode: "message" });
}

/**
 * 逻辑删除文件
 *
 * @param id 唯一ID
 * @return
 */
export function logicDeleteFile(id: string) {
  return defHttp.delete<SysFile>({ url: `${Api.LogicDeleteFile}/${id}` });
}

/**
 * 逻辑删除文件恢复
 *
 * @param id 唯一ID
 * @return
 */
export function restoreFile(id: string) {
  return defHttp.put<SysFile>({ url: `${Api.RestoreFile}/${id}` });
}

/**
 * 删除文件存储
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSysFile(id: string) {
  return defHttp.delete<SysFile>({ url: `${Api.SysFile}/${id}` }, { successMessageMode: "message" });
}

/**
 * 设置文件状态
 * @param fileId 文件ID
 * @param status 状态 0 公开， 1 私密
 */
export const setFileStatus = (fileId: string, status: number) => {
  return defHttp.put<boolean>({ url: Api.SetStatus, params: { id: fileId, isPrivate: status } });
};
