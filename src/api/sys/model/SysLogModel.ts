import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 系统日志
 * @author: mfish
 * @date: 2023-01-08
 * @version: V2.1.1
 */
export interface SysLog extends BaseEntity<number> {
  title: string;
  method: string;
  reqType: string;
  reqUri: string;
  reqParam: string;
  reqSource: number;
  operType: string;
  operIp: string;
  operStatus: number;
  remark: string;
}

export interface ReqSysLog extends ReqPage {
  title?: string;
  method?: string;
  reqType?: string;
  reqUri?: string;
  reqSource?: number;
  operType?: string;
  operIp?: string;
  operStatus?: number;
  startTime?: string;
  endTime?: string;
}

export type SysLogPageModel = PageResult<SysLog>;
