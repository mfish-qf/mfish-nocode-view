import { defHttp } from "@mfish/core/src/utils/http/axios";
import { Job, ReqJob, JobPageModel } from "@/api/scheduler/model/JobModel";

/**
 * @description: 定时调度任务
 * @author: mfish
 * @date: 2023-02-20
 * @version: V2.0.0
 */
enum Api {
  Job = "/scheduler/job",
  SetStatus = "/scheduler/job/status",
  ExecuteJob = "/scheduler/job/execute"
}

/**
 * 分页列表查询
 *
 * @param reqJob
 * @return
 */
export const getJobList = (reqJob?: ReqJob) => {
  return defHttp.get<JobPageModel>({ url: Api.Job, params: reqJob });
};

/**
 * 新增定时调度任务
 *
 * @param job
 * @return
 */
export function insertJob(job: Job) {
  return defHttp.post<Job>({ url: Api.Job, params: job }, { successMessageMode: "message" });
}

/**
 * 修改定时调度任务
 *
 * @param job
 * @return
 */
export function updateJob(job: Job) {
  return defHttp.put<Job>({ url: Api.Job, params: job }, { successMessageMode: "message" });
}

/**
 * 删除定时调度任务
 *
 * @param id 唯一ID
 * @return
 */
export function deleteJob(id: string) {
  return defHttp.delete<Job>({ url: `${Api.Job}/${id}` }, { successMessageMode: "message" });
}

/**
 * 设置任务状态
 * @param jobId
 * @param status
 */
export const setJobStatus = (jobId: string, status: number) => {
  return defHttp.put<boolean>({ url: Api.SetStatus, params: { id: jobId, status } });
};

/**
 * 立即执行任务
 * @param job
 */
export function executeJob(job: Job) {
  return defHttp.put<boolean>({ url: Api.ExecuteJob, params: job }, { successMessageMode: "message" });
}
