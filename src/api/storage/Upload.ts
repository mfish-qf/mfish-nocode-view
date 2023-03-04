import { defHttp } from "/@/utils/http/axios";
import { UploadFileParams } from "/#/axios";
import { useGlobSetting } from "/@/hooks/setting";
import { AxiosProgressEvent } from "axios";
import { SysFile } from "/@/api/storage/model/SysFileModel";

const { uploadUrl = "" } = useGlobSetting();

/**
 * @description: Upload interface
 */
export function uploadApi(params: UploadFileParams, onUploadProgress: (progressEvent: AxiosProgressEvent) => void) {
  return defHttp.upload<SysFile>(
    {
      url: uploadUrl,
      params,
      onUploadProgress
    }
  );
}
