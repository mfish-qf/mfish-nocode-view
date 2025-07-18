import { defHttp } from "@core/utils/http/axios";
import { DictCategory, DictCategoryPageModel, ReqDictCategory } from "@core/api";

/**
 * @description: 属性分类字典
 * @author: mfish
 * @date: 2024-03-12
 * @version: V2.0.1
 */
enum Api {
  DictCategory = "/sys/dictCategory",
  DictCategoryTree = "/sys/dictCategory/tree",
  DictCategoryList = "/sys/dictCategory/list",
  DictCategoryOne = "/sys/dictCategory/one"
}

/**
 * 分页列表查询
 *
 * @param reqDictCategory
 * @return
 */
export const getDictCategoryList = (reqDictCategory?: ReqDictCategory) => {
  return defHttp.get<DictCategoryPageModel>({ url: Api.DictCategory, params: reqDictCategory });
};

export const getDictCategoryTree = (reqDictCategory?: ReqDictCategory) => {
  return defHttp.get<DictCategory[]>({ url: Api.DictCategoryTree, params: reqDictCategory });
};

/**
 * 导出属性分类字典
 * @param reqDictCategory
 */
export function exportDictCategory(reqDictCategory?: ReqDictCategory) {
  return defHttp.download({ url: `${Api.DictCategory}/export`, params: reqDictCategory });
}

/**
 * 新增属性分类字典
 *
 * @param dictCategory
 * @return
 */
export function insertDictCategory(dictCategory: DictCategory) {
  return defHttp.post<DictCategory>({ url: Api.DictCategory, params: dictCategory }, { successMessageMode: "message" });
}

/**
 * 修改属性分类字典
 *
 * @param dictCategory
 * @return
 */
export function updateDictCategory(dictCategory: DictCategory) {
  return defHttp.put<DictCategory>({ url: Api.DictCategory, params: dictCategory }, { successMessageMode: "message" });
}

/**
 * 删除属性分类字典
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDictCategory(id: string) {
  return defHttp.delete<DictCategory>({ url: `${Api.DictCategory}/${id}` }, { successMessageMode: "message" });
}

/**
 * 通过编码获取目录树
 * @param code
 * @param direction
 */
export function queryCategoryTreeByCode(code: string, direction: "up" | "down" | "all") {
  return defHttp.get<DictCategory[]>({ url: `${Api.DictCategoryTree}/${code}`, params: { direction } });
}

/**
 * 通过编码获取目录列表
 * @param code
 * @param direction
 */
export function queryCategoryListByCode(code: string, direction: "up" | "down" | "all") {
  return defHttp.get<DictCategory[]>({ url: `${Api.DictCategoryList}/${code}`, params: { direction } });
}

/**
 * 通过id获取目录树
 * @param id
 * @param direction
 */
export function queryCategoryTreeById(id: string, direction: "up" | "down" | "all") {
  return defHttp.get<DictCategory[]>({ url: `${Api.DictCategoryTree}/id/${id}`, params: { direction } });
}

/**
 * 通过id获取目录列表
 * @param id
 * @param direction
 */
export function queryCategoryListById(id: string, direction: "up" | "down" | "all") {
  return defHttp.get<DictCategory[]>({ url: `${Api.DictCategoryList}/id/${id}`, params: { direction } });
}

export function queryCategoryOneByCode(code: string) {
  return defHttp.get<DictCategory>({ url: `${Api.DictCategoryOne}/${code}` });
}
