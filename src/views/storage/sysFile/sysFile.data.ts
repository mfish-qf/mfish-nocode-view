import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Switch } from "ant-design-vue";
import { getToken } from "/@/utils/auth";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
import { setFileStatus } from "/@/api/storage/SysFile";

/**
 * @description: 文件存储
 * @author: mfish
 * @date: 2023-03-02
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "文件名",
    dataIndex: "fileName",
    customRender: ({ record }) => {
      return h("a", { href: record.fileUrl + "?access_token=" + getToken(), target: "_blank" }, record.fileName);
    }
  },
  {
    title: "文件",
    dataIndex: "fileUrl",
    customRender: ({ record }) => {
      const imgList = [record.fileUrl + "?access_token=" + getToken()];
      if (record.fileType.toLowerCase().startsWith("image")) {
        return h(TableImage, { size: 40, simpleShow: true, imgList: imgList });
      }
      return h("div", record.fileUrl);
    },
    width: 120
  },
  {
    title: "文件类型",
    dataIndex: "fileType",
    width: 120
  },
  {
    title: "文件大小",
    dataIndex: "fileSize",
    width: 120
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
