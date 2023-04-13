import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 代码构建
 * @author: mfish
 * @date: 2023-04-11
 * @version: V1.0.0
 */
export interface CodeBuild extends BaseEntity<number> {
  connectId: string;
  tableName: string;
  apiPrefix: string;
  entityName: string;
  packageName: string;
  tableComment: string;
  queryParams: string;
}

export interface CodeVo {
  path: string;
  name: string;
  code: string;
}

export interface ReqCodeBuild {

}

export type CodeBuildPageModel = PageResult<CodeBuild>;
