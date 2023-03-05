import { defHttp } from "/@/utils/http/axios";
import { UploadFileParams } from "/#/axios";
import { AxiosProgressEvent } from "axios";
import { SysFile } from "/@/api/storage/model/SysFileModel";

/**
 * @description: Upload interface
 */
export function uploadApi(params: UploadFileParams, onUploadProgress: (progressEvent: AxiosProgressEvent) => void) {
  return defHttp.upload<SysFile>(
    {
      url: "/storage/file",
      params,
      onUploadProgress
    }
  );
}
