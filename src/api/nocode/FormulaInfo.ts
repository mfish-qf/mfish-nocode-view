import { defHttp } from "@/utils/http/axios";
import {FormulaInfo, ReqFormulaInfo, FormulaInfoPageModel, FormulaTree} from "@/api/nocode/model/FormulaInfoModel";

/**
 * @description: 公式信息
 * @author: mfish
 * @date: 2023-10-27
 * @version: V1.3.2
 */
enum Api {
  FormulaInfo = "/nocode/formulaInfo",
  FormulaTree = "/nocode/formulaInfo/tree",
  ParamList = "/nocode/formulaParam"
}

/**
 * 获取公式树
 * @param reqFormulaInfo
 */
export const getFormulaTree = (reqFormulaInfo?: ReqFormulaInfo) => {
  return defHttp.get<FormulaTree[]>({ url: Api.FormulaTree, params: reqFormulaInfo });
};

/**
 * 获取公式参数列表
 * @param path 公式接口路径
 */
export const getFormulaParamList = (path: string) => {
  return defHttp.get<any[]>({ url: `${Api.ParamList}/${path}` });
};
/**
 * 分页列表查询
 *
 * @param reqFormulaInfo
 * @return 返回分页列表
 */
export const getFormulaInfoList = (reqFormulaInfo?: ReqFormulaInfo) => {
  return defHttp.get<FormulaInfoPageModel>({ url: Api.FormulaInfo, params: reqFormulaInfo });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getFormulaInfoById(id: string) {
  return defHttp.get<FormulaInfo>({ url: `${Api.FormulaInfo}/${id}` });
}

/**
 * 导出公式信息
 * @param reqFormulaInfo 请求参数
 */
export function exportFormulaInfo(reqFormulaInfo?: ReqFormulaInfo) {
  return defHttp.download({ url: Api.FormulaInfo + "/export", params: reqFormulaInfo });
}

/**
 * 新增公式信息
 *
 * @param formulaInfo 请求参数
 * @return 返回结果
 */
export function insertFormulaInfo(formulaInfo: FormulaInfo) {
  return defHttp.post<FormulaInfo>({ url: Api.FormulaInfo, params: formulaInfo }, { successMessageMode: "message" });
}

/**
 * 修改公式信息
 *
 * @param formulaInfo
 * @return 返回结果
 */
export function updateFormulaInfo(formulaInfo: FormulaInfo) {
  return defHttp.put<FormulaInfo>({ url: Api.FormulaInfo, params: formulaInfo }, { successMessageMode: "message" });
}

/**
 * 删除公式信息
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteFormulaInfo(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.FormulaInfo}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除公式信息
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchFormulaInfo(ids: string) {
  return defHttp.delete<boolean>({ url: Api.FormulaInfo + "/batch/" + ids }, { successMessageMode: "message" });
}
