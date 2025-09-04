import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 文件目录
 * @author: mfish
 * @date: 2023-12-11
 * @version: V2.1.1
 */
export interface HttpFolder extends BaseEntity<string> {
  parentId?: string;
  tenantId?: string;
  name?: string;
  folderSort?: number;
  delFlag?: number;
  children?: HttpFolder[];
}

export interface ReqFolder extends ReqPage {
  parentId?: string;
  name?: string;
}

export interface HttpFolderVo extends BaseEntity<string> {
  parentId?: string;
  name?: string;
  requestMethod?: string;
  fType?: number;
}

export type HttpFolderPageModel = PageResult<HttpFolderVo>;
