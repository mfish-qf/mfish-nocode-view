import { defHttp } from "/@/utils/http/axios";
import { SysLog, ReqSysLog, SysLogPageModel } from "/@/api/sys/model/SysLogModel";

/**
 * @description: 系统日志
 * @author: mfish
 * @date: 2023-01-08
 * @version: V1.2.0
 */
enum Api {
  SysLog = "/sys/sysLog"
}

/**
 * 分页列表查询
 *
 * @param reqSysLog
 * @return
 */
export const getSysLogList = (reqSysLog?: ReqSysLog) => {
  return defHttp.get<SysLogPageModel>({ url: Api.SysLog, params: reqSysLog });
};

/**
 * 新增系统日志
 *
 * @param sysLog
 * @return
 */
export function insertSysLog(sysLog: SysLog) {
  return defHttp.post<SysLog>({ url: Api.SysLog, params: sysLog }, { successMessageMode: "message" });
}

/**
 * 修改系统日志
 *
 * @param sysLog
 * @return
 */
export function updateSysLog(sysLog: SysLog) {
  return defHttp.put<SysLog>({ url: Api.SysLog, params: sysLog }, { successMessageMode: "message" });
}

/**
 * 删除系统日志
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSysLog(id: number) {
  return defHttp.delete<SysLog>({ url: Api.SysLog + "/" + id }, { successMessageMode: "message" });
}
