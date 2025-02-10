import { PageResult } from "@/api/model/BaseModel";

/**
 * @description: 任务订阅表
 * @author: mfish
 * @date: 2023-02-20
 * @version: V1.3.2
 */
export interface JobSubscribe {
  jobId: string;
  cron: string;
  startTime: string;
  endTime: string;
  status: number;
}

export interface ReqJobSubscribe {
  jobId: string;
}

export type JobSubscribePageModel = PageResult<JobSubscribe>;
