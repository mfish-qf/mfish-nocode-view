import { BaseEntity, PageResult, ReqPage } from "@mfish/core/src/api/model/BaseModel";

/**
 * @description: 字典
 * @Author: mfish
 * @Date: 2023-01-03
 * @version: V2.0.0
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
