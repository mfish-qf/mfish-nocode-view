import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Switch } from "ant-design-vue";
import { getToken } from "/@/utils/auth";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
import { setFileStatus } from "/@/api/storage/SysFile";
import { Icon } from "/@/components/general/Icon/index";

/**
 * @description: 文件存储
 * @author: mfish
 * @date: 2023-03-02
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "文件",
    dataIndex: "fileUrl",
    customRender: ({ record }) => {
      const imgList = [record.fileUrl + "?access_token=" + getToken()];
      if (record.fileType.toLowerCase().startsWith("image")) {
        return h(TableImage, { size: 40, simpleShow: true, imgList: imgList });
      }
      const index = record.fileName.lastIndexOf(".");
      if (index > 0) {
        let name = record.fileName.substring(index + 1);
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
    },
    width: 120
  },
  {
    title: "文件名",
    dataIndex: "fileName",
    customRender: ({ record }) => {
      return h("a", { href: record.fileUrl + "?access_token=" + getToken(), target: "_blank" }, record.fileName);
    }
  },
  {
    title: "文件类型",
    dataIndex: "fileType",
    width: 260
  },
  {
    title: "文件大小",
    dataIndex: "fileSize",
    width: 120,
    customRender: ({ record }) => {
      function calcSize(fileSize, level) {
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

      if (record.fileSize) {
        return calcSize(record.fileSize, 1);
      }
      return "";
    }
  },
  {
    title: "存储路径",
    dataIndex: "filePath",
    width: 200
  },
  {
    title: "文件公开",
    dataIndex: "isPrivate",
    width: 100,
    customRender: ({ record }) => {
      if (!Reflect.has(record, "pendingStatus")) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.isPrivate === 0,
        checkedChildren: "已公开",
        unCheckedChildren: "已私密",
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? 0 : 1;
          setFileStatus(record.id, newStatus).then(() => {
            record.isPrivate = newStatus;
          }).finally(() => {
            record.pendingStatus = false;
          });
        }
      });
    }
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "fileName",
    label: "文件名",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "fileType",
    label: "文件类型",
    component: "Input",
    colProps: { span: 4 }
  }
];
export const sysFileFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "fileName",
    label: "文件名",
    component: "Input",
    required: true
  },
  {
    field: "fileType",
    label: "文件类型",
    component: "Input",
    required: true
  },
  {
    field: "fileSize",
    label: "文件大小",
    component: "Input"
  },
  {
    field: "fileUrl",
    label: "文件访问链接",
    component: "Input"
  },
  {
    field: "filePath",
    label: "存储路径",
    component: "Input"
  },
  {
    field: "isPrivate",
    label: "是否私密文件 0为公开的  1为私密文件",
    component: "Input"
  },
  {
    field: "delFlag",
    label: "删除标记(0未删除1删除)",
    component: "Input"
  }
];
