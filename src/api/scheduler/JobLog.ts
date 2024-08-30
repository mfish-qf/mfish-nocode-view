import { defHttp } from "@/utils/http/axios";
import { JobLog, ReqJobLog, JobLogPageModel } from "@/api/scheduler/model/JobLogModel";

/**
 * @description: 任务日志
 * @author: mfish
 * @date: 2023-02-14
 * @version: V1.3.1
 */
enum Api {
  JobLog = "/scheduler/jobLog"
}

/**
 * 分页列表查询
 *
 * @param reqJobLog
 * @return
 */
export const getJobLogList = (reqJobLog?: ReqJobLog) => {
  return defHttp.get<JobLogPageModel>({ url: Api.JobLog, params: reqJobLog });
};

/**
 * 新增任务日志
 *
 * @param jobLog
 * @return
 */
export function insertJobLog(jobLog: JobLog) {
  return defHttp.post<JobLog>({ url: Api.JobLog, params: jobLog }, { successMessageMode: "message" });
}

/**
 * 修改任务日志
 *
 * @param jobLog
 * @return
 */
export function updateJobLog(jobLog: JobLog) {
  return defHttp.put<JobLog>({ url: Api.JobLog, params: jobLog }, { successMessageMode: "message" });
}

/**
 * 删除任务日志
 *
 * @param id 唯一ID
 * @return
 */
export function deleteJobLog(id: string) {
  return defHttp.delete<JobLog>({ url: `${Api.JobLog}/${id}` }, { successMessageMode: "message" });
}
