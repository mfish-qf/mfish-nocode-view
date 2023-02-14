import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 任务日志
 * @author: mfish
 * @date: 2023-02-14
 * @version: V1.0.0
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

}

export type JobLogPageModel = PageResult<JobLog>;
