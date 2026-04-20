import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 请假申请审批Demo
 * @author: mfish
 * @date: 2026-04-20
 * @version: V2.3.1
 */
export interface DemoLeaveApply extends BaseEntity<string> {
  //申请标题
  title: string;
  //请假类型 1事假 2病假 3年假
  leaveType?: number;
  //开始时间
  startTime?: string;
  //结束时间
  endTime?: string;
  //请假天数
  leaveDays?: number;
  //请假事由
  reason?: string;
  //审核状态 null未提交 0审核中 1已通过 2未通过
  auditState?: number;
}

export interface ReqDemoLeaveApply extends ReqPage {
  //申请标题
  title?: string;
}

//分页结果集
export type DemoLeaveApplyPageModel = PageResult<DemoLeaveApply>;
