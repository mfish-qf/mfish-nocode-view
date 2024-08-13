import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: API目录
 * @author: mfish
 * @date: 2023-07-21
 * @version: V1.2.0
 */
export interface ApiFolder extends BaseEntity<string> {
  parentId?: string;
  tenantId?: string;
  name?: string;
  folderSort?: number;
  delFlag?: number;
  children?: ApiFolder[];
}

export interface ReqApiFolder extends ReqPage {
  parentId?: string;
  name?: string;
}
export interface FolderVo extends BaseEntity<string> {
  parentId?: string;
  name?: string;
  remark?: string;
  fType?: number;
  paramFlag?: number;
}
export type ApiFolderPageModel = PageResult<FolderVo>;
