/**
 * @description: 字典
 * @Author: mfish
 * @Date: 2023-01-03
 * @Version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Dict, ReqDict, DictPageModel } from "/@/api/sys/model/DictModel";

enum Api {
  Dict = "/sys/dict"
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
 * 新增字典
 *
 * @param dict
 * @return
 */
export function insertDict(dict: Dict) {
  return defHttp.post<Dict>({ url: Api.Dict, params: dict }, { successMessageMode: "message" });
};

/**
 * 修改字典
 *
 * @param dict
 * @return
 */
export function updateDict(dict: Dict) {
  return defHttp.put<Dict>({ url: Api.Dict, params: dict }, { successMessageMode: "message" });
};

/**
 * 删除字典
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDict(id: string) {
  return defHttp.delete<Dict>({ url: Api.Dict + "/" + id }, { successMessageMode: "message" });
};
