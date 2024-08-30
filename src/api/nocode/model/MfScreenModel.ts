import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 我的大屏信息
 * @author: mfish
 * @date: 2024-08-07
 * @version: V1.3.1
 */
export interface MfScreen extends BaseEntity<string> {
  // 目录id
  folderId?: string;
  // 租户ID
  tenantId?: string;
  // 名称
  name?: string;
  // 大屏缩略图片Key
  thumbnail?: string;
  // 描述
  remark?: string;
  // 大屏基础配置信息及组件位置信息(json方式存储)
  config?: string;
}

export interface ReqMfScreen extends ReqPage {
  // 目录id
  folderId?: string;
  // 名称
  name?: string;
}

// 分页结果集
export type MfScreenPageModel = PageResult<MfScreen>;
