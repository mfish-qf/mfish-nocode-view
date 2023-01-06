import { useGlobSetting } from "/@/hooks/setting";
import { isString } from "/@/utils/Is";
import { getToken } from "/@/utils/auth";

/**
 * @description: 图片请求
 * @author: qiufeng
 * @date: 2023/1/6 21:14
 */
const globSetting = useGlobSetting();

/**
 * 获取图片url自动添加token防止图片无权限获取
 * @param url
 */
export const imageUrl = (url) => {
  const { apiUrl } = globSetting;
  const token = getToken();
  if (apiUrl && isString(apiUrl)) {
    url = `${apiUrl}${url}`;
  }
  if (url.indexOf("?") >= 0) {
    url += "&";
  } else {
    url += "?";
  }
  url += `access_token=${token}`;
  return url;
};