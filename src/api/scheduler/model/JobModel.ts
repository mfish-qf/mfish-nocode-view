import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 定时调度任务
 * @author: mfish
 * @date: 2023-02-03
 * @version: V1.0.0
 */
export interface Job extends BaseEntity<string> {
  name: string;
  group: string;
  cron: string;
  invokeMethod: string;
  invokeParam: string;
  allowConcurrent: number;
  misfireHandler: number;
  priority: number;
  startTime: string;
  endTime: string;
  timeZone: string;
  status: number;
  remark: string;
}

export interface ReqJob {

}

export type JobPageModel = PageResult<Job>;
