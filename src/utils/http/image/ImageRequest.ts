import { useGlobSetting } from "/@/hooks/setting";
import { isString } from "/@/utils/Is";
import { getToken } from "/@/utils/auth";
import { defHttp } from "/@/utils/http/axios";

/**
 * @description: 图片请求
 * @author: qiufeng
 * @date: 2023/1/6 21:14
 */
const globSetting = useGlobSetting();

/**
 * 获取图片url自动添加token防止图片无权限获取
 * 同步获取
 * @param url
 */
export const imageUrl = (url) => {
  const { apiUrl } = globSetting;
  if (apiUrl && isString(apiUrl)) {
    url = `${apiUrl}${url}`;
  }
  const token = getToken();
  if (token) {
    if (url.indexOf("?") >= 0) {
      url += "&";
    } else {
      url += "?";
    }
    url += `access_token=${token}`;
  }
  return url;
};

/**
 * 异步获取图片源
 * @param url
 */
export const imageSrc = async (url) => {
  //isTransformResponse返回值不执行普通请求的结果处理
  let img = await defHttp.get({ url, responseType: "blob" }, { isTransformResponse: false });
  return URL.createObjectURL(img);
};

/**
 * 获取Base64图片
 * @param url
 */
export const imageBase64 = async (url) => {
  let img = await defHttp.get({ url, responseType: "arraybuffer" }, { isTransformResponse: false });
  return "data:image/png;base64," + btoa(new Uint8Array(img).reduce((data, byte) => data + String.fromCharCode(byte), ""));
};