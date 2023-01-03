import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @Description: 字典项
 * @Author: mfish
 * @Date: 2023-01-03
 * @Version: V1.0.0
 */
export interface DictItem extends BaseEntity<string> {
  dictCode: string
  dictLabel: string
  dictValue: string
  dictSort: number
  status: number
  remark: string
}

export interface ReqDictItem {

}

export type DictItemPageModel = PageResult<DictItem>;
