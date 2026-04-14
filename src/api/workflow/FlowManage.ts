import { defHttp } from "@mfish/core/utils/http/axios";
import { FlowManage, ReqFlowManage, FlowManagePageModel } from "@/api/workflow/model/FlowManageModel";

/**
 * @description: 流程管理
 * @author: mfish
 * @date: 2026-03-30
 * @version: V2.3.1
 */
enum Api {
  FlowManage = "/workflow/flowManage"
}

/**
 * 分页列表查询
 *
 * @param reqFlowManage
 * @return 返回分页列表
 */
export const getFlowManageList = (reqFlowManage?: ReqFlowManage) => {
  return defHttp.get<FlowManagePageModel>({ url: Api.FlowManage, params: reqFlowManage });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getFlowManageById(id: string) {
  return defHttp.get<FlowManage>({ url: `${Api.FlowManage}/${id}` });
}

/**
 * 导出流程管理
 * @param reqFlowManage 请求参数
 */
export function exportFlowManage(reqFlowManage?: ReqFlowManage) {
  return defHttp.download({ url: `${Api.FlowManage}/export`, params: reqFlowManage });
}

/**
 * 新增流程管理
 *
 * @param flowManage 请求参数
 * @return 返回结果
 */
export function insertFlowManage(flowManage: FlowManage) {
  return defHttp.post<FlowManage>({ url: Api.FlowManage, params: flowManage }, { successMessageMode: "message" });
}

/**
 * 修改流程管理
 *
 * @param flowManage
 * @return 返回结果
 */
export function updateFlowManage(flowManage: FlowManage) {
  return defHttp.put<FlowManage>({ url: Api.FlowManage, params: flowManage }, { successMessageMode: "message" });
}

/**
 * 删除流程管理
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteFlowManage(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.FlowManage}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除流程管理
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchFlowManage(ids: string) {
  return defHttp.delete<boolean>({ url: `${Api.FlowManage}/batch/${ids}` }, { successMessageMode: "message" });
}

/**
 * 发布流程
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function publishFlowManage(id: string) {
  return defHttp.put<boolean>({ url: `${Api.FlowManage}/publish/${id}` }, { successMessageMode: "message" });
}

/**
 * 撤回发布流程
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function unpublishFlowManage(id: string) {
  return defHttp.put<boolean>({ url: `${Api.FlowManage}/unpublish/${id}` }, { successMessageMode: "message" });
}
