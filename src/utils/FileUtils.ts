import { h } from "vue";
import { Icon } from "/@/components/general/Icon";

/**
 * @description: 文件通用类
 * @author: qiufeng
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

/**
 * 获取文件图标
 * @param fileName
 */
export function getFileIcon(fileName: string) {
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
        return h(Icon, { size: 40, icon: `ant-design:file-unknown-outlined`, color: "#ee4f12" });
    }
    return h(Icon, { size: 40, icon: `ant-design:file-${name}-outlined`, color: "#ee4f12" });
  }
  return h(Icon, { size: 40, icon: `ant-design:file-unknown-outlined`, color: "#ee4f12" });
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