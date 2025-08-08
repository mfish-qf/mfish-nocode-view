import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: HTTP请求数据源表
 * @author: mfish
 * @date: 2025-07-22
 * @version: V2.0.1
 */
export interface MfHttp extends BaseEntity<string> {
  //请求地址
  requestUrl: string;
  //请求方式（get、post、put、delete）
  requestMethod: string;
  //请求类型
  contentType?: string;
  //头部参数
  headerParams?: string;
  //请求体参数
  bodyParams?: string;
  //返回结果映射
  responseMap?: string;
  //目录id
  folderId?: string;
  //租户ID
  tenantId?: string;
  //删除标记(0未删除1删除)
  delFlag?: number;
}

export interface ReqMfHttp extends ReqPage {
  //请求方式（get、post、put、delete）
  requestMethod?: string;
  //请求类型
  contentType?: string;
  //目录id
  folderId?: string;
  //租户ID
  tenantId?: string;
}

//分页结果集
export type MfHttpPageModel = PageResult<MfHttp>;
