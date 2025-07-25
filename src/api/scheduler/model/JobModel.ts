import { BaseEntity, PageResult } from "@mfish/core/api";

/**
 * @description: 定时调度任务
 * @author: mfish
 * @date: 2023-02-20
 * @version: V2.0.1
 */
export interface Job extends BaseEntity<string> {
  jobName: string;
  jobGroup: string;
  jobType: number;
  className: string;
  methodName: string;
  params: string;
  allowConcurrent: number;
  misfireHandler: number;
  status: number;
  timeZone: string;
  priority: number;
  remark: string;
}

export interface ReqJob {
  jobType?: number;
  jobName?: string;
  jobGroup?: string;
}

export type JobPageModel = PageResult<Job>;
