import { defHttp } from "@mfish/core/utils/http/axios";
import { MfHttp, ReqMfHttp, MfHttpPageModel } from "@/api/nocode/model/MfHttpModel";

/**
 * @description: HTTP请求数据源表
 * @author: mfish
 * @date: 2025-07-22
 * @version: V2.0.1
 */
enum Api {
  MfHttp = "/nocode/mfHttp"
}

/**
 * 分页列表查询
 *
 * @param reqMfHttp
 * @return 返回分页列表
 */
export const getMfHttpList = (reqMfHttp?: ReqMfHttp) => {
  return defHttp.get<MfHttpPageModel>({ url: Api.MfHttp, params: reqMfHttp });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getMfHttpById(id: string) {
  return defHttp.get<MfHttp>({ url: `${Api.MfHttp}/${id}` });
}

/**
 * 通过apiId查询
 * @param apiId apiId
 */
export function getMfHttpByApiId(apiId: string) {
  return defHttp.get<MfHttp>({ url: `${Api.MfHttp}/byApi/${apiId}` });
}

/**
 * 导出HTTP请求数据源表
 * @param reqMfHttp 请求参数
 */
export function exportMfHttp(reqMfHttp?: ReqMfHttp) {
  return defHttp.download({ url: `${Api.MfHttp}/export`, params: reqMfHttp });
}

/**
 * 新增HTTP请求数据源表
 *
 * @param mfHttp 请求参数
 * @return 返回结果
 */
export function insertMfHttp(mfHttp: MfHttp) {
  return defHttp.post<MfHttp>({ url: Api.MfHttp, params: mfHttp }, { successMessageMode: "message" });
}

/**
 * 修改HTTP请求数据源表
 *
 * @param mfHttp
 * @return 返回结果
 */
export function updateMfHttp(mfHttp: MfHttp) {
  return defHttp.put<MfHttp>({ url: Api.MfHttp, params: mfHttp }, { successMessageMode: "message" });
}

/**
 * 删除HTTP请求数据源表
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteMfHttp(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.MfHttp}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除HTTP请求数据源表
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchMfHttp(ids: string) {
  return defHttp.delete<boolean>({ url: `${Api.MfHttp}/batch/${ids}` }, { successMessageMode: "message" });
}

/**
 * 测试请求
 * @param mfHttp
 */
export function testMfHttp(mfHttp: MfHttp) {
  return defHttp.post<MfHttp>({ url: `${Api.MfHttp}/test`, params: mfHttp }, { completeResult: true });
}
