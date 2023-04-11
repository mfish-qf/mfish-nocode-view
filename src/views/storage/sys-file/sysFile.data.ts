import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Switch } from "ant-design-vue";
import { getToken } from "/@/utils/auth";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
import { getLocalFileUrl, setFileStatus } from "/@/api/storage/SysFile";
import { getFileIcon, calcSize, imageUrl } from "/@/utils/FileUtils";

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
      const imgList = [imageUrl(getLocalFileUrl(record.fileKey))];
      if (record.fileType.toLowerCase().startsWith("image")) {
        return h(TableImage, { size: 40, simpleShow: true, imgList: imgList });
      }
      return getFileIcon(record.fileName);
    },
    width: 60
  },
  {
    title: "文件名",
    dataIndex: "fileName",
    customRender: ({ record }) => {
      //超链接访问文件，直接访问后台存储文件地址
      return h("a", { href: record.fileUrl + "?access_token=" + getToken(), target: "_blank" }, record.fileName);
    },
    width: 260
  },
  {
    title: "文件类型",
    dataIndex: "fileType",
    width: 200
  },
  {
    title: "文件大小",
    dataIndex: "fileSize",
    width: 100,
    customRender: ({ record }) => {
      if (record.fileSize) {
        return calcSize(record.fileSize, 1);
      }
      return "";
    }
  },
  {
    title: "上传时间",
    dataIndex: "createTime",
    width: 120
  },
  {
    title: "存储路径",
    dataIndex: "filePath",
    width: 150
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
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "fileType",
    label: "文件类型",
    component: "Input",
    colProps: { lg: 4, md: 6 }
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
