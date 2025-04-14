import { BaseEntity, PageResult } from "@core/api/model/BaseModel";

/**
 * @description: 文件存储
 * @author: mfish
 * @date: 2023-03-02
 * @version: V2.0.0
 */
export interface SysFile extends BaseEntity<string> {
  fileKey: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  filePath: string;
  isPrivate: number;
  delFlag: number;
}

export interface ReqSysFile {
  fileName?: string;
  fileType?: string;
}

export type SysFilePageModel = PageResult<SysFile>;
