import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 大屏目录
 * @author: mfish
 * @date: 2024-01-08
 * @version: V1.3.2
 */
export interface ScreenFolder extends BaseEntity<string> {
  // 父节点
  parentId?: string;
  // 租户ID
  tenantId?: string;
  // 目录名称
  name?: string;
  // 文件夹排序
  folderSort?: number;
  // 删除标签
  delFlag?: number;
}

export interface ReqScreenFolder extends ReqPage {
  parentId?: string;
  name?: string;
}

export interface FolderVo extends BaseEntity<string> {
  parentId?: string;
  name?: string;
  thumbnail?: string;
  remark?: string;
  fType?: number;
}

// 分页结果集
export type ScreenFolderPageModel = PageResult<ScreenFolder>;
