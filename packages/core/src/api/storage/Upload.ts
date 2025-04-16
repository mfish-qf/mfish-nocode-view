import { defHttp } from "@core/utils/http/axios";
import { UploadFileParams } from "@mfish/types/src/type/axios";
import { AxiosProgressEvent } from "axios";
import { SysFile } from "@core/api";

/**
 * @description: Upload interface
 */
export function uploadApi(params: UploadFileParams, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void) {
  return defHttp.upload<SysFile>({
    url: "/storage/file",
    params,
    onUploadProgress
  });
}
