import { defHttp } from "@mfish/core/utils/http/axios";
import { DemoOrder, DemoOrderPageModel, ReqDemoOrder } from "@/api/demo/model/DemoOrderModel";

/**
 * @description: 销售订单
 * @author: mfish
 * @date: 2024-09-13
 * @version: V2.0.0
 */
enum Api {
  DemoOrder = "/demo/demoOrder"
}

/**
 * 分页列表查询
 *
 * @param reqDemoOrder
 * @return 返回分页列表
 */
export const getDemoOrderList = (reqDemoOrder?: ReqDemoOrder) => {
  return defHttp.get<DemoOrderPageModel>({ url: Api.DemoOrder, params: reqDemoOrder });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getDemoOrderById(id: string) {
  return defHttp.get<DemoOrder>({ url: `${Api.DemoOrder}/${id}` });
}

/**
 * 导出销售订单
 * @param reqDemoOrder 请求参数
 */
export function exportDemoOrder(reqDemoOrder?: ReqDemoOrder) {
  return defHttp.download({ url: Api.DemoOrder + "/export", params: reqDemoOrder });
}

/**
 * 新增销售订单
 *
 * @param demoOrder 请求参数
 * @return 返回结果
 */
export function insertDemoOrder(demoOrder: DemoOrder) {
  return defHttp.post<DemoOrder>({ url: Api.DemoOrder, params: demoOrder }, { successMessageMode: "message" });
}

/**
 * 修改销售订单
 *
 * @param demoOrder
 * @return 返回结果
 */
export function updateDemoOrder(demoOrder: DemoOrder) {
  return defHttp.put<DemoOrder>({ url: Api.DemoOrder, params: demoOrder }, { successMessageMode: "message" });
}

/**
 * 删除销售订单
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteDemoOrder(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.DemoOrder}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除销售订单
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchDemoOrder(ids: string) {
  return defHttp.delete<boolean>({ url: Api.DemoOrder + "/batch/" + ids }, { successMessageMode: "message" });
}
