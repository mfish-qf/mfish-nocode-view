import { BaseEntity, PageResult } from "@mfish/core/api";

/**
 * @description: 任务日志
 * @author: mfish
 * @date: 2023-02-14
 * @version: V2.0.1
 */
export interface JobLog extends BaseEntity<string> {
  jobId: string;
  jobName: string;
  jobGroup: string;
  jobType: number;
  className: string;
  methodName: string;
  params: string;
  status: number;
  remark: string;
}

export interface ReqJobLog {
  jobType?: number;
  jobName?: string;
  jobGroup?: string;
}

export type JobLogPageModel = PageResult<JobLog>;
