/**
 * @description: 文件存储
 * @author: mfish
 * @date: 2023-03-02
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { SysFile, ReqSysFile, SysFilePageModel } from "/@/api/storage/model/SysFileModel";

enum Api {
  SysFile = "/storage/sysFile",
  SetStatus = "/storage/sysFile/status"
}

/**
 * 获取本地存储文件文件路径
 * @param fileKey
 */
export const getLocalFileUrl = (fileKey: string) => {
  return "/storage/file/" + fileKey;
};

/**
 * 分页列表查询
 *
 * @param reqSysFile
 * @return
 */
export const getSysFileList = (reqSysFile?: ReqSysFile) => {
  return defHttp.get<SysFilePageModel>({ url: Api.SysFile, params: reqSysFile });
};

/**
 * 新增文件存储
 *
 * @param sysFile
 * @return
 */
export function insertSysFile(sysFile: SysFile) {
  return defHttp.post<SysFile>({ url: Api.SysFile, params: sysFile }, { successMessageMode: "message" });
};

/**
 * 修改文件存储
 *
 * @param sysFile
 * @return
 */
export function updateSysFile(sysFile: SysFile) {
  return defHttp.put<SysFile>({ url: Api.SysFile, params: sysFile }, { successMessageMode: "message" });
};

/**
 * 删除文件存储
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSysFile(id: string) {
  return defHttp.delete<SysFile>({ url: Api.SysFile + "/" + id }, { successMessageMode: "message" });
};

/**
 * 设置文件状态
 * @param fileId 文件ID
 * @param status 状态 0 公开， 1 私密
 */
export const setFileStatus = (fileId: string, status: number) => {
  return defHttp.put<Boolean>({ url: Api.SetStatus, params: { "id": fileId, "isPrivate": status } });
};