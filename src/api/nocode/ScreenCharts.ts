import { defHttp } from "@/utils/http/axios";
import { ScreenCharts, ReqScreenCharts, ScreenChartsPageModel } from "@/api/nocode/model/ScreenChartsModel";

/**
 * @description: 组件基础信息
 * @author: mfish
 * @date: 2024-11-19
 * @version: V1.3.2
 */
enum Api {
  ScreenCharts = "/nocode/screenCharts"
}

/**
 * 分页列表查询
 *
 * @param reqScreenCharts
 * @return 返回分页列表
 */
export const getScreenChartsList = (reqScreenCharts?: ReqScreenCharts) => {
  return defHttp.get<ScreenChartsPageModel>({ url: Api.ScreenCharts, params: reqScreenCharts });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getScreenChartsById(id: string) {
  return defHttp.get<ScreenCharts>({ url: `${Api.ScreenCharts}/${id}` });
}

/**
 * 导出组件基础信息
 * @param reqScreenCharts 请求参数
 */
export function exportScreenCharts(reqScreenCharts?: ReqScreenCharts) {
  return defHttp.download({ url: Api.ScreenCharts + "/export", params: reqScreenCharts });
};

/**
 * 新增组件基础信息
 *
 * @param screenCharts 请求参数
 * @return 返回结果
 */
export function insertScreenCharts(screenCharts: ScreenCharts) {
  return defHttp.post<ScreenCharts>({ url: Api.ScreenCharts, params: screenCharts }, { successMessageMode: "message" });
};

/**
 * 修改组件基础信息
 *
 * @param screenCharts
 * @return 返回结果
 */
export function updateScreenCharts(screenCharts: ScreenCharts) {
  return defHttp.put<ScreenCharts>({ url: Api.ScreenCharts, params: screenCharts }, { successMessageMode: "message" });
};

/**
 * 删除组件基础信息
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteScreenCharts(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.ScreenCharts}/${id}` }, { successMessageMode: "message" });
};

/**
 * 批量删除组件基础信息
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchScreenCharts(ids: string) {
  return defHttp.delete<boolean>({ url: Api.ScreenCharts + "/batch/" + ids }, { successMessageMode: "message" });
};
