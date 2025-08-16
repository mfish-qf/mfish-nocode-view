import { defHttp } from "@mfish/core/utils/http/axios";
import { DemoOrderDetail, DemoOrderDetailPageModel, ReqDemoOrderDetail } from "@/api/demo/model/DemoOrderDetailModel";

/**
 * @description: 销售订单明细
 * @author: mfish
 * @date: 2024-09-02
 * @version: V2.1.0
 */
enum Api {
  DemoOrderDetail = "/demo/demoOrderDetail"
}

/**
 * 分页列表查询
 *
 * @param reqDemoOrderDetail
 * @return 返回分页列表
 */
export const getDemoOrderDetailList = (reqDemoOrderDetail?: ReqDemoOrderDetail) => {
  return defHttp.get<DemoOrderDetailPageModel>({ url: Api.DemoOrderDetail, params: reqDemoOrderDetail });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getDemoOrderDetailById(id: string) {
  return defHttp.get<DemoOrderDetail>({ url: `${Api.DemoOrderDetail}/${id}` });
}

/**
 * 导出销售订单明细
 * @param reqDemoOrderDetail 请求参数
 */
export function exportDemoOrderDetail(reqDemoOrderDetail?: ReqDemoOrderDetail) {
  return defHttp.download({ url: Api.DemoOrderDetail + "/export", params: reqDemoOrderDetail });
}

/**
 * 新增销售订单明细
 *
 * @param demoOrderDetail 请求参数
 * @return 返回结果
 */
export function insertDemoOrderDetail(demoOrderDetail: DemoOrderDetail) {
  return defHttp.post<DemoOrderDetail>(
    { url: Api.DemoOrderDetail, params: demoOrderDetail },
    { successMessageMode: "message" }
  );
}

/**
 * 修改销售订单明细
 *
 * @param demoOrderDetail
 * @return 返回结果
 */
export function updateDemoOrderDetail(demoOrderDetail: DemoOrderDetail) {
  return defHttp.put<DemoOrderDetail>(
    { url: Api.DemoOrderDetail, params: demoOrderDetail },
    { successMessageMode: "message" }
  );
}

/**
 * 删除销售订单明细
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteDemoOrderDetail(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.DemoOrderDetail}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除销售订单明细
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchDemoOrderDetail(ids: string) {
  return defHttp.delete<boolean>({ url: Api.DemoOrderDetail + "/batch/" + ids }, { successMessageMode: "message" });
}
