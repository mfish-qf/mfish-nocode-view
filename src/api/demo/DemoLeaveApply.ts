import { defHttp } from "@mfish/core/utils/http/axios";
import { DemoLeaveApply, ReqDemoLeaveApply, DemoLeaveApplyPageModel } from "@/api/demo/model/DemoLeaveApplyModel";

/**
 * @description: 请假申请审批Demo
 * @author: mfish
 * @date: 2026-04-20
 * @version: V2.3.1
 */
enum Api {
  DemoLeaveApply = "/demo/demoLeaveApply"
}

/**
 * 分页列表查询
 *
 * @param reqDemoLeaveApply
 * @return 返回分页列表
 */
export const getDemoLeaveApplyList = (reqDemoLeaveApply?: ReqDemoLeaveApply) => {
  return defHttp.get<DemoLeaveApplyPageModel>({ url: Api.DemoLeaveApply, params: reqDemoLeaveApply });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getDemoLeaveApplyById(id: string) {
  return defHttp.get<DemoLeaveApply>({ url: `${Api.DemoLeaveApply}/${id}` });
}

/**
 * 导出请假申请审批Demo
 * @param reqDemoLeaveApply 请求参数
 */
export function exportDemoLeaveApply(reqDemoLeaveApply?: ReqDemoLeaveApply) {
  return defHttp.download({ url: `${Api.DemoLeaveApply}/export`, params: reqDemoLeaveApply });
}

/**
 * 新增请假申请审批Demo
 *
 * @param demoLeaveApply 请求参数
 * @return 返回结果
 */
export function insertDemoLeaveApply(demoLeaveApply: DemoLeaveApply) {
  return defHttp.post<DemoLeaveApply>(
    { url: Api.DemoLeaveApply, params: demoLeaveApply },
    { successMessageMode: "message" }
  );
}

/**
 * 修改请假申请审批Demo
 *
 * @param demoLeaveApply
 * @return 返回结果
 */
export function updateDemoLeaveApply(demoLeaveApply: DemoLeaveApply) {
  return defHttp.put<DemoLeaveApply>(
    { url: Api.DemoLeaveApply, params: demoLeaveApply },
    { successMessageMode: "message" }
  );
}

/**
 * 删除请假申请审批Demo
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteDemoLeaveApply(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.DemoLeaveApply}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除请假申请审批Demo
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchDemoLeaveApply(ids: string) {
  return defHttp.delete<boolean>({ url: `${Api.DemoLeaveApply}/batch/${ids}` }, { successMessageMode: "message" });
}

/**
 * 提交审批请假申请审批Demo
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function submitDemoLeaveApply(id: string) {
  return defHttp.post<boolean>({ url: `${Api.DemoLeaveApply}/submit/${id}` }, { successMessageMode: "message" });
}

/**
 * 撤回审批请假申请审批Demo
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function revokeDemoLeaveApply(id: string) {
  return defHttp.post<boolean>({ url: `${Api.DemoLeaveApply}/revoke/${id}` }, { successMessageMode: "message" });
}
