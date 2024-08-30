import { defHttp } from "@/utils/http/axios";
import { FormulaInfo, ReqFormulaInfo, FormulaInfoPageModel, FormulaTree } from "@/api/nocode/model/FormulaInfoModel";

/**
 * @description: 公式信息
 * @author: mfish
 * @date: 2023-10-27
 * @version: V1.3.1
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
 * @return
 */
export const getFormulaInfoList = (reqFormulaInfo?: ReqFormulaInfo) => {
  return defHttp.get<FormulaInfoPageModel>({ url: Api.FormulaInfo, params: reqFormulaInfo });
};

/**
 * 导出公式信息
 * @param reqFormulaInfo
 */
export function exportFormulaInfo(reqFormulaInfo?: ReqFormulaInfo) {
  return defHttp.download({ url: `${Api.FormulaInfo}/export`, params: reqFormulaInfo });
}

/**
 * 新增公式信息
 *
 * @param formulaInfo
 * @return
 */
export function insertFormulaInfo(formulaInfo: FormulaInfo) {
  return defHttp.post<FormulaInfo>({ url: Api.FormulaInfo, params: formulaInfo }, { successMessageMode: "message" });
}

/**
 * 修改公式信息
 *
 * @param formulaInfo
 * @return
 */
export function updateFormulaInfo(formulaInfo: FormulaInfo) {
  return defHttp.put<FormulaInfo>({ url: Api.FormulaInfo, params: formulaInfo }, { successMessageMode: "message" });
}

/**
 * 删除公式信息
 *
 * @param id 唯一ID
 * @return
 */
export function deleteFormulaInfo(id: string) {
  return defHttp.delete<FormulaInfo>({ url: `${Api.FormulaInfo}/${id}` }, { successMessageMode: "message" });
}
