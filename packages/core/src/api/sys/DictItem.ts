import { defHttp } from "../../utils/http/axios";
import { DictItem, DictItemPageModel, ReqDictItem } from "./model/DictItemModel";

/**
 * @description: 字典项
 * @Author: mfish
 * @Date: 2023-01-03
 * @version: V2.0.0
 */
enum Api {
  DictItem = "/sys/dictItem"
}

/**
 * 分页列表查询
 *
 * @param reqDictItem
 * @return
 */
export const getDictItemList = (reqDictItem?: ReqDictItem) => {
  return defHttp.get<DictItemPageModel>({ url: Api.DictItem, params: reqDictItem });
};

/**
 * 通过字典编码获取字典项目
 * @param dictCode
 */
export const getDictItems = (dictCode: string) => {
  return defHttp.get<DictItem[]>({ url: `${Api.DictItem}/${dictCode}` });
};

/**
 * 新增字典项
 *
 * @param dictItem
 * @return
 */
export function insertDictItem(dictItem: DictItem) {
  return defHttp.post<DictItem>({ url: Api.DictItem, params: dictItem }, { successMessageMode: "message" });
}

/**
 * 修改字典项
 *
 * @param dictItem
 * @return
 */
export function updateDictItem(dictItem: DictItem) {
  return defHttp.put<DictItem>({ url: Api.DictItem, params: dictItem }, { successMessageMode: "message" });
}

/**
 * 删除字典项
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDictItem(id: string) {
  return defHttp.delete<DictItem>({ url: `${Api.DictItem}/${id}` }, { successMessageMode: "message" });
}
