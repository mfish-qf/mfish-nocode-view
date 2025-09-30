import { PageResult } from "@mfish/core/api";

/**
 * @description: 流程任务
 * @author: mfish
 * @date: 2025/9/29
 */
export interface MfProcess {
  processDefinitionKey: string;
  processDefinitionName: string;
  processDefinitionId: string;
  deploymentId: string;
  processInstanceId: string;
  businessKey: string;
  startUserId: string;
  startTime: string;
  endTime: string;
  deleteReason: string;
}

export interface MfTask {
  id: string;
  processInstanceId: string;
  processDefinitionId: string;
  processDefinitionKey: string;
  name: string;
  processName: string;
  businessKey: string;
  description: string;
  candidateUsers: string[];
  candidateGroups: string[];
  formKey: string;
  assignee: string;
  startTime: string;
  endTime: string;
  status: string;
  comments: string[];
}
export type MfProcessPageModel = PageResult<MfProcess>;
export type MfTaskPageModel = PageResult<MfTask>;

export interface ReqProcess {
  flowKey: string;
  businessKey: string;
  processInstanceIds: string;
}
export interface ReqTask {
  startTime?: string;
  endTime?: string;
  taskName?: string;
}
