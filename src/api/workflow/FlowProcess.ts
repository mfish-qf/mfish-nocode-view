import { defHttp } from "@mfish/core/utils/http/axios";
import {
  ApproveInfo,
  MfProcessPageModel,
  MfTask,
  MfTaskPageModel,
  ReqProcess,
  ReqTask,
  TaskTotal
} from "@/api/workflow/model/MfTaskModel";

/**
 * @description: 工作流接口
 * @author: mfish
 * @date: 2025/9/29
 */
enum Api {
  Process = "/workflow/process",
  Tasks = "/workflow/process/tasks",
  PendingTask = "/workflow/process/tasks/pending",
  AllTasks = "/workflow/process/tasks/all",
  TotalTasks = "/workflow/process/tasks/total",
  Approved = "/workflow/process/tasks/approved",
  Rejected = "/workflow/process/tasks/rejected"
}

/**
 * @description: 获取流程列表
 */
export const getProcessList = (reqProcess?: ReqProcess) => {
  return defHttp.get<MfProcessPageModel>({ url: Api.Process, params: reqProcess });
};

/**
 * @description: 获取待办任务列表
 */
export const getPendingTask = (reqTask?: ReqTask) => {
  return defHttp.get<MfTaskPageModel>({ url: Api.PendingTask, params: reqTask });
};

/**
 * @description: 获取所有任务列表
 */
export const getAllTasks = (reqTask?: ReqTask) => {
  return defHttp.get<MfTaskPageModel>({ url: Api.AllTasks, params: reqTask });
};

/**
 * @description: 获取所有任务总数
 */
export const getTotalTasks = (reqTask?: ReqTask) => {
  return defHttp.get<TaskTotal>({ url: Api.TotalTasks, params: reqTask });
};
/**
 * @description: 获取流程任务列表
 */
export const getProcessTasks = (processInstanceId: string) => {
  return defHttp.get<MfTask[]>({ url: `${Api.Tasks}/${processInstanceId}` });
};

/**
 * @description: 审批任务
 */
export const approveTask = (approveInfo: ApproveInfo) => {
  return defHttp.post({ url: Api.Approved, params: approveInfo });
};
/**
 * @description: 拒绝任务
 */
export const rejectTask = (approveInfo: ApproveInfo) => {
  return defHttp.post({ url: Api.Rejected, params: approveInfo });
};
