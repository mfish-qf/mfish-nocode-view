import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 任务订阅表
 * @author: mfish
 * @date: 2023-02-20
 * @version: V1.0.0
 */
export interface JobSubscribe extends BaseEntity<string> {
  jobId: string;
  cron: string;
  startTime: string;
  endTime: string;
  status: number;
}

export interface ReqJobSubscribe {

}

export type JobSubscribePageModel = PageResult<JobSubscribe>;