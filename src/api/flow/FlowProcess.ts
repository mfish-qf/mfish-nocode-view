import { defHttp } from "@mfish/core/utils/http/axios";
import { MfProcessPageModel, MfTaskPageModel, ReqProcess, ReqTask } from "@/api/flow/model/MfTaskModel";

/**
 * @description: 工作流接口
 * @author: mfish
 * @date: 2025/9/29
 */
enum Api {
  Process = "/workflow/process",
  PendingTask = "/workflow/process/pendingTasks"
}

/**
 * @description: 获取流程列表
 */
export const getProcessList = (reqProcess?: ReqProcess) => {
  return defHttp.get<MfProcessPageModel>({ url: Api.Process, params: reqProcess });
};

export const getPendingTask = (reqTask?: ReqTask) => {
  return defHttp.get<MfTaskPageModel>({ url: Api.PendingTask, params: reqTask });
};
