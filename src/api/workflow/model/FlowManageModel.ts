import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 流程管理
 * @author: mfish
 * @date: 2026-03-30
 * @version: V2.3.1
 */
export interface FlowManage extends BaseEntity<string> {
  //流程key
  flowKey: string;
  //流程名称
  name?: string;
  //流程描述
  remark?: string;
  //版本号
  version?: string;
  //是否发布（0未发布 1已发布）
  released?: number;
  //流程配置
  flowConfig?: string;
  //删除标记(0未删除1删除)
  delFlag?: number;
}

export interface ReqFlowManage extends ReqPage {
  //流程key
  flowKey?: string;
  //流程名称
  name?: string;
  //是否发布（0未发布 1已发布）
  released?: number;
}

//分页结果集
export type FlowManagePageModel = PageResult<FlowManage>;
