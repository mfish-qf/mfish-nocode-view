import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 大屏资源API
 * @author: mfish
 * @date: 2025-03-21
 * @version: V1.3.2
 */
export interface ScreenResourceApi extends BaseEntity<string> {
  //资源id
  resourceId?: string;
  //原API ID
  apiId?: string;
  //数据来源id
  sourceId?: string;
  //数据来源类型 0 数据库 1文件 2API接口
  sourceType?: number;
  //数据源SQL（原生查询方式存储）
  sourceSql?: string;
  //API配置信息
  config?: string;
  //重命名配置
  renameConfig?: string;
  //查询类型 0 自定义查询 1原生SQL查询
  queryType?: number;
}

export interface ReqScreenResourceApi extends ReqPage {
  //资源id
  resourceId?: string;
  //原API ID
  apiId?: string;
}

//分页结果集
export type ScreenResourceApiPageModel = PageResult<ScreenResourceApi>;
