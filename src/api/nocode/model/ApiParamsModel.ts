import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: API请求参数
 * @author: mfish
 * @date: 2023-08-25
 * @version: V1.1.0
 */
export interface ApiParams extends BaseEntity<number> {
  //接口ID
  apiId?: string;
  //参数名称
  name?: string;
  //默认值
  defaultValue?: string;
  //是否使用
  isUse?: string;
  //参数描述
  remark?: string;
  //是否必须 0否 1是
  required?: number;
}

export type ReqApiParams = ReqPage;

//分页结果集
export type ApiParamsPageModel = PageResult<ApiParams>;
