import { UploadApiResult } from "./model/UploadModel";
import { defHttp } from "/@/utils/http/axios";
import { UploadFileParams } from "/#/axios";
import { useGlobSetting } from "/@/hooks/setting";
import { AxiosProgressEvent } from "axios";

const { uploadUrl = "" } = useGlobSetting();

/**
 * @description: Upload interface
 */
export function uploadApi(params: UploadFileParams, onUploadProgress: (progressEvent: AxiosProgressEvent) => void) {
  return defHttp.upload<UploadApiResult>(
    {
      url: uploadUrl,
      params,
      onUploadProgress
    }
  );
}
