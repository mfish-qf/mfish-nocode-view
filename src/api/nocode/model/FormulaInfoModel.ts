import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 公式信息
 * @author: mfish
 * @date: 2023-10-27
 * @version: V1.3.1
 */
export interface FormulaInfo extends BaseEntity<string> {
  // 目录id
  categoryId?: string;
  // 公式名称
  enName?: string;
  // 公式中文名称
  cnName?: string;
  // 公式总体描述
  description?: string;
  // 参数描述
  paramDesc?: string;
  // 返回结果描述
  returnDesc?: string;
  // 公式对应类
  targetObject?: string;
  // 公式参数
  targetParam?: string;
  // 返回值类型
  returnType?: string;
  // 是否显示 1显示 0不显示
  display?: number;
  // 排序
  sort?: number;
  key?: string;
}

/**
 * 公式描述
 */
export interface FormulaDesc {
  description?: string;
  paramDesc?: Array<string>;
  returnDesc?: string;
}

export interface FormulaTree extends BaseEntity<string> {
  key: string;
  parentId?: string;
  children?: FormulaTree[];
  name?: string;
  formulaInfo?: FormulaInfo;
}

export interface ReqFormulaInfo extends ReqPage {
  // 公式名称
  enName?: string;
}

// 分页结果集
export type FormulaInfoPageModel = PageResult<FormulaInfo>;
