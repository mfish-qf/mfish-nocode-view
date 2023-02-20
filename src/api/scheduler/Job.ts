/**
 * @description: 定时调度任务
 * @author: mfish
 * @date: 2023-02-20
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Job, ReqJob, JobPageModel } from "/@/api/scheduler/model/JobModel";

enum Api {
  Job = "/scheduler/job"
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
};

/**
 * 修改定时调度任务
 *
 * @param job
 * @return
 */
export function updateJob(job: Job) {
  return defHttp.put<Job>({ url: Api.Job, params: job }, { successMessageMode: "message" });
};

/**
 * 删除定时调度任务
 *
 * @param id 唯一ID
 * @return
 */
export function deleteJob(id: string) {
  return defHttp.delete<Job>({ url: Api.Job + "/" + id }, { successMessageMode: "message" });
};
