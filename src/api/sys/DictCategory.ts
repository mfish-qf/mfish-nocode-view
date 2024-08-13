import { defHttp } from "@/utils/http/axios";
import { DictCategory, ReqDictCategory, DictCategoryPageModel } from "@/api/sys/model/DictCategoryModel";

/**
 * @description: 属性分类字典
 * @author: mfish
 * @date: 2024-03-12
 * @version: V1.2.0
 */
enum Api {
  DictCategory = "/sys/dictCategory",
  DictCategoryTree = "/sys/dictCategory/tree",
  DictCategoryList = "/erp/dictCategory/list",
  DictCategoryOne = "/erp/dictCategory/one"
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

export function queryCategoryOneByCode(code: string) {
  return defHttp.get<DictCategory>({ url: `${Api.DictCategoryOne}/${code}` });
}
