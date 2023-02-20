/**
 * @description: 任务订阅表
 * @author: mfish
 * @date: 2023-02-20
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { JobSubscribe, ReqJobSubscribe, JobSubscribePageModel } from "/@/api/scheduler/model/JobSubscribeModel";

enum Api {
  JobSubscribe = "/scheduler/jobSubscribe"
}

/**
 * 分页列表查询
 *
 * @param reqJobSubscribe
 * @return
 */
export const getJobSubscribeList = (reqJobSubscribe?: ReqJobSubscribe) => {
  return defHttp.get<JobSubscribePageModel>({ url: Api.JobSubscribe, params: reqJobSubscribe });
};

/**
 * 新增任务订阅表
 *
 * @param jobSubscribe
 * @return
 */
export function insertJobSubscribe(jobSubscribe: JobSubscribe) {
  return defHttp.post<JobSubscribe>({ url: Api.JobSubscribe, params: jobSubscribe }, { successMessageMode: "message" });
};

/**
 * 修改任务订阅表
 *
 * @param jobSubscribe
 * @return
 */
export function updateJobSubscribe(jobSubscribe: JobSubscribe) {
  return defHttp.put<JobSubscribe>({ url: Api.JobSubscribe, params: jobSubscribe }, { successMessageMode: "message" });
};

/**
 * 删除任务订阅表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteJobSubscribe(id: string) {
  return defHttp.delete<JobSubscribe>({ url: Api.JobSubscribe + "/" + id }, { successMessageMode: "message" });
};
