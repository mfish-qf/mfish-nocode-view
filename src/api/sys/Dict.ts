import { defHttp } from "@mfish/core/utils/http/axios";
import { Dict, DictPageModel, ReqDict } from "@/api/sys/model/DictModel";

/**
 * @description: 字典
 * @Author: mfish
 * @Date: 2023-01-03
 * @version: V2.1.0
 */
enum Api {
  Dict = "/sys/dict",
  Export = "/sys/dict/export"
}

/**
 * 分页列表查询
 *
 * @param reqDict
 * @return
 */
export const getDictList = (reqDict?: ReqDict) => {
  return defHttp.get<DictPageModel>({ url: Api.Dict, params: reqDict });
};

/**
 * 导出字典
 * @param reqDict
 */
export function exportDict(reqDict?: ReqDict) {
  return defHttp.download({ url: Api.Export, params: reqDict });
}

/**
 * 新增字典
 *
 * @param dict
 * @return
 */
export function insertDict(dict: Dict) {
  return defHttp.post<Dict>({ url: Api.Dict, params: dict }, { successMessageMode: "message" });
}

/**
 * 修改字典
 *
 * @param dict
 * @return
 */
export function updateDict(dict: Dict) {
  return defHttp.put<Dict>({ url: Api.Dict, params: dict }, { successMessageMode: "message" });
}

/**
 * 删除字典
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDict(id: string) {
  return defHttp.delete<Dict>({ url: `${Api.Dict}/${id}` }, { successMessageMode: "message" });
}
