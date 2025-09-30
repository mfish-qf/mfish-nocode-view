import { PageResult } from "@mfish/core/api";

/**
 * @description: 任务订阅表
 * @author: mfish
 * @date: 2023-02-20
 * @version: V2.2.0
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
