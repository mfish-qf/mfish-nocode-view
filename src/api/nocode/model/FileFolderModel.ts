import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 文件目录
 * @author: mfish
 * @date: 2023-12-11
 * @version: V2.0.1
 */
export interface FileFolder extends BaseEntity<string> {
  parentId?: string;
  tenantId?: string;
  name?: string;
  folderSort?: number;
  delFlag?: number;
  children?: FileFolder[];
}

export interface ReqFolder extends ReqPage {
  parentId?: string;
  name?: string;
}

export interface FileFolderVo extends BaseEntity<string> {
  parentId?: string;
  name?: string;
  fileSize?: string;
  fType?: number;
}

export type FileFolderPageModel = PageResult<FileFolderVo>;
