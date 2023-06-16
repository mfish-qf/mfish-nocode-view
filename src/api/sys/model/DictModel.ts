import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: 字典
 * @Author: mfish
 * @Date: 2023-01-03
 * @Version: V1.0.0
 */
export interface Dict extends BaseEntity<string> {
  dictName: string;
  dictCode: string;
  status: number;
  remark: string;
}

export interface ReqDict extends ReqPage {
  dictName?: string;
  dictCode?: string;
  status?: number;
}

export type DictPageModel = PageResult<Dict>;
