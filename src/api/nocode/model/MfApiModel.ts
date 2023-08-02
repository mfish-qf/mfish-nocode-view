import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: 自定义API
 * @author: mfish
 * @date: 2023-07-31
 * @version: V1.1.0
 */
export interface MfApi extends BaseEntity<string> {
  //API名称
  name?: string;
  //目录id
  folderId?: string;
  //数据来源id
  sourceId?: string;
  //数据来源类型 0 数据库 1文件 2API接口
  sourceType?: number;
  //描述
  remark?: string;
  //数据源SQL（原生查询方式存储）
  sourceSql?: string;
  //参数标签 0无参 1有参数
  paramFlag?: number;
  //API配置信息
  config?: string;
  //删除标签 0未删除 1已删除
  delFlag?: number;
  //查询类型 0 自定义查询 1原生SQL查询
  queryType?: number;
  //租户ID
  tenantId?: string;
}

export interface ReqMfApi extends ReqPage {
  //API名称
  name?: string;
  //目录id
  folderId?: string;
}

//分页结果集
export type MfApiPageModel = PageResult<MfApi>;
