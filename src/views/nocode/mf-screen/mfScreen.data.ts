import { BasicColumn, FormSchema } from "@mfish/core/components/Table";

/**
 * @description: 我的大屏信息
 * @author: mfish
 * @date: 2024-08-07
 * @version: V2.0.1
 */
export const columns: BasicColumn[] = [
  {
    title: "目录id",
    dataIndex: "folderId",
    width: 120
  },
  {
    title: "租户ID",
    dataIndex: "tenantId",
    width: 120
  },
  {
    title: "名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "大屏缩略图片Key",
    dataIndex: "thumbnail",
    width: 120
  },
  {
    title: "描述",
    dataIndex: "remark",
    width: 120
  },
  {
    title: "大屏基础配置信息及组件位置信息(json方式存储)",
    dataIndex: "config",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "folderId",
    label: "目录id",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "name",
    label: "名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const mfScreenFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "folderId",
    label: "目录id",
    component: "Input"
  },
  {
    field: "tenantId",
    label: "租户ID",
    component: "Input"
  },
  {
    field: "name",
    label: "名称",
    component: "Input"
  },
  {
    field: "thumbnail",
    label: "大屏缩略图片Key",
    component: "Input"
  },
  {
    field: "remark",
    label: "描述",
    component: "Input"
  },
  {
    field: "config",
    label: "大屏基础配置信息及组件位置信息(json方式存储)",
    component: "Input"
  }
];
