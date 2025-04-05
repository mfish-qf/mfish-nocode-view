import { h, Ref } from "vue";
import { Icon } from "@/components/general/Icon";
import { useGlobSetting } from "@/hooks/setting";
import { isString } from "@/utils/Is";
import { getToken } from "@/utils/auth";
import { defHttp } from "@/utils/http/axios";
import { useAppStore } from "@/store/modules/App";
import { getLocalFileUrl } from "@/api/storage/SysFile";
import logo from "/src/assets/images/logo.png";
import noImage from "/src/assets/images/noImage.png";
import { RequestOptions } from "#/axios";

/**
 * @description: 文件通用类
 * @author: mfish
 * @date: 2023/3/4 10:56
 */
export function checkFileType(file: File, accepts: string[]) {
  const newTypes = accepts.join("|");
  // const reg = /\.(jpg|jpeg|png|gif|txt|doc|docx|xls|xlsx|xml)$/i;
  const reg = new RegExp(`${String.raw`\.(` + newTypes})$`, "i");

  return reg.test(file.name);
}

export function checkImgType(file: File) {
  return isImgTypeByName(file.name);
}

export function isImgTypeByName(name: string) {
  return /\.(?:jpg|jpeg|png|gif)$/i.test(name);
}

export function getBase64WithFile(file: File) {
  return new Promise<{
    result: string;
    file: File;
  }>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => resolve({ result: reader.result as string, file }));
    // eslint-disable-next-line unicorn/prefer-add-event-listener
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
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const { apiUrl } = globSetting;
  if (apiUrl && isString(apiUrl)) {
    url = `${apiUrl}${url}`;
  }
  const token = getToken();
  if (token) {
    url += url.includes("?") ? "&" : "?";
    url += `access_token=${token}`;
  }
  return url;
};

/**
 * 异步获取图片源
 * @param url
 * @param option 请求参数
 */
export const imageSrc = async (url, option?: RequestOptions) => {
  // isTransformResponse返回值不执行普通请求的结果处理
  try {
    const img = await defHttp.get({ url, responseType: "blob" }, { isTransformResponse: false, ...option });
    if (img.type.startsWith("image")) {
      return URL.createObjectURL(img);
    }
    return "";
  } catch {
    return "";
  }
};

/**
 * 获取Base64图片
 * @param url
 */
export const imageBase64 = async (url) => {
  const img = await defHttp.get({ url, responseType: "arraybuffer" }, { isTransformResponse: false });
  return `data:image/png;base64,${btoa(new Uint8Array(img).reduce((data, byte) => data + String.fromCodePoint(byte), ""))}`;
};

/**
 * 获取文件图标
 * @param fileName
 */
export function getFileIcon(fileName: string) {
  const appStore = useAppStore();
  const color = appStore.getThemeColor;
  return h(Icon, { size: 40, icon: getFileIconName(fileName), color });
}

/**
 * 获取文件icon名称
 * @param fileName
 */
export function getFileIconName(fileName: string) {
  const index = fileName.lastIndexOf(".");
  if (index > 0) {
    let name = fileName.slice(Math.max(0, index + 1));
    switch (name) {
      case "txt": {
        name = "text";
        break;
      }
      case "doc":
      case "docx": {
        name = "word";
        break;
      }
      case "xls":
      case "xlsx":
      case "csv": {
        name = "excel";
        break;
      }
      case "md": {
        name = "markdown";
        break;
      }
      case "pptx": {
        name = "ppt";
        break;
      }
      case "rar": {
        name = "zip";
        break;
      }
      case "zip":
      case "ppt":
      case "pdf": {
        break;
      }
      default: {
        return `ant-design:file-unknown-outlined`;
      }
    }
    return `ant-design:file-${name}-outlined`;
  }
  return `ant-design:file-unknown-outlined`;
}

/**
 * 计算文件大小
 * @param fileSize
 * @param level
 */
export function calcSize(fileSize, level) {
  const size = fileSize / 1024;
  if (size >= 1024) {
    return calcSize(size, level + 1);
  }
  let unit = "";
  switch (level) {
    case 1: {
      unit = "KB";
      break;
    }
    case 2: {
      unit = "MB";
      break;
    }
    case 3: {
      unit = "GB";
      break;
    }
    case 4: {
      unit = "TB";
      break;
    }
  }
  return `${size.toFixed(2)} ${unit}`;
}

/**
 * 设置头像
 * @param fileKey 图片key
 * @param setImg 图片设置Ref对象
 */
export function setHeaderImg(fileKey, setImg: Ref) {
  setImage(fileKey, logo, setImg);
}

/**
 * 获取图片
 * @param fileKey 文件key
 * @param defaultImg 默认图片
 * @param setImg 设置引用
 */
export function setImage(fileKey: string | undefined, defaultImg: string, setImg: Ref) {
  defaultImg = defaultImg || noImage;
  if (fileKey) {
    if (fileKey.startsWith("http://") || fileKey.startsWith("https://")) {
      setImg.value = fileKey;
    } else {
      imageSrc(getLocalFileUrl(fileKey), { errorMessageMode: "none" }).then((img) => {
        setImg.value = img || defaultImg;
      });
    }
  } else {
    setImg.value = defaultImg;
  }
}
