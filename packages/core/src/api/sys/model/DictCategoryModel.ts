import { BaseEntity, PageResult, ReqPage } from "@core/api/model/BaseModel.ts";

/**
 * @description: 属性分类字典
 * @author: mfish
 * @date: 2024-03-12
 * @version: V2.1.0
 */
export interface DictCategory extends BaseEntity<string> {
  // 父分类id
  parentId?: string;
  // 分类编码
  categoryCode: string;
  // 分类名称
  categoryName: string;
  // 分类树编码（系统自动编码）
  treeCode?: string;
  // 分类树层级（自动生成）
  treeLevel: number;
  //图标
  icon?: string;
  //备注
  remark?: string;
  // 排序
  sort?: number;
  children?: DictCategory[];
}

export interface ReqDictCategory extends ReqPage {
  // 分类名称
  categoryName?: string;
  // 分类编码
  categoryCode?: string;
}

// 分页结果集
export type DictCategoryPageModel = PageResult<DictCategory>;
