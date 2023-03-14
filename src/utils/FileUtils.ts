import { h } from "vue";
import { Icon } from "/@/components/general/Icon";
import { useGlobSetting } from "/@/hooks/setting";
import { isString } from "/@/utils/Is";
import { getToken } from "/@/utils/auth";
import { defHttp } from "/@/utils/http/axios";
import { useAppStore } from "/@/store/modules/App";

/**
 * @description: 文件通用类
 * @author: mfish
 * @date: 2023/3/4 10:56
 */
export function checkFileType(file: File, accepts: string[]) {
  const newTypes = accepts.join("|");
  // const reg = /\.(jpg|jpeg|png|gif|txt|doc|docx|xls|xlsx|xml)$/i;
  const reg = new RegExp("\\.(" + newTypes + ")$", "i");

  return reg.test(file.name);
}

export function checkImgType(file: File) {
  return isImgTypeByName(file.name);
}

export function isImgTypeByName(name: string) {
  return /\.(jpg|jpeg|png|gif)$/i.test(name);
}

export function getBase64WithFile(file: File) {
  return new Promise<{
    result: string;
    file: File;
  }>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({ result: reader.result as string, file });
    reader.onerror = (error) => reject(error);
  });
}

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

/**
 * 获取文件图标
 * @param fileName
 */
export function getFileIcon(fileName: string) {
  const appStore = useAppStore();
  const color = appStore.getProjectConfig.themeColor || "#ee4f12";
  const index = fileName.lastIndexOf(".");
  if (index > 0) {
    let name = fileName.substring(index + 1);
    switch (name) {
      case "txt":
        name = "text";
        break;
      case "doc":
      case "docx":
        name = "word";
        break;
      case "xls":
      case "xlsx":
        name = "excel";
        break;
      case "pptx":
        name = "ppt";
        break;
      case "rar":
        name = "zip";
        break;
      case "zip":
      case "ppt":
      case "pdf":
        break;
      default:
        return h(Icon, { size: 40, icon: `ant-design:file-unknown-outlined`, color: color });
    }
    return h(Icon, { size: 40, icon: `ant-design:file-${name}-outlined`, color: color });
  }
  return h(Icon, { size: 40, icon: `ant-design:file-unknown-outlined`, color: color });
}

/**
 * 计算文件大小
 * @param fileSize
 * @param level
 */
export function calcSize(fileSize, level) {
  let size = fileSize / 1024;
  if (size >= 1024) {
    return calcSize(size, level + 1);
  }
  let unit = "";
  switch (level) {
    case 1:
      unit = "KB";
      break;
    case 2:
      unit = "MB";
      break;
    case 3:
      unit = "GB";
      break;
    case 4:
      unit = "TB";
      break;
  }
  return size.toFixed(2) + " " + unit;
}