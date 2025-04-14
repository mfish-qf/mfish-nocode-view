import { SysFile } from "@core/api/storage/model/SysFileModel";
import { Fn } from "@mfish/types";
export enum UploadResultStatus {
  SUCCESS = "success",
  ERROR = "error",
  UPLOADING = "uploading"
}

export interface FileItem {
  thumbUrl?: string;
  isPrivate: number;
  path?: string;
  name: string;
  size: string | number;
  type?: string;
  percent: number;
  file: File;
  status?: UploadResultStatus;
  responseData?: SysFile;
  uuid: string;
}

export interface FileBasicColumn {
  /**
   * Renderer of the table cell. The return value should be a VNode, or an object for colSpan/rowSpan config
   * @type Function | ScopedSlot
   */
  customRender?: Fn;
  /**
   * Title of this column
   * @type any (string | slot)
   */
  title: string;

  /**
   * Width of this column
   * @type string | number
   */
  width?: number;
  /**
   * Display field of the data record, could be set like a.b.c
   * @type string
   */
  dataIndex: string;
  /**
   * specify how content is aligned
   * @default 'left'
   * @type string
   */
  align?: "left" | "right" | "center";
}
