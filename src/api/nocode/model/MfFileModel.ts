import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 文件数据源
 * @author: mfish
 * @date: 2023-12-13
 * @version: V2.2.0
 */
export interface MfFile extends BaseEntity<string> {
  // 目录id
  folderId?: string;
  // 租户ID
  tenantId?: string;
  // 文件名
  fileName?: string;
  // 文件大小
  fileSize?: number;
}

export interface ReqMfFile extends ReqPage {
  // 文件名称
  name?: string;
  // 目录id
  folderId?: string;
}

// 分页结果集
export type MfFilePageModel = PageResult<MfFile>;
