import { BasicColumn, FormSchema } from "@mfish/core/components/Table";

/**
 * @description: 大屏目录
 * @author: mfish
 * @date: 2024-01-08
 * @version: V2.0.0
 */
export const SCREEN_SAVE = "__SCREEN_SAVE__";
export const columns: BasicColumn[] = [
  {
    title: "父节点",
    dataIndex: "parentId",
    width: 120
  },
  {
    title: "租户ID",
    dataIndex: "tenantId",
    width: 120
  },
  {
    title: "目录名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "文件夹排序",
    dataIndex: "folderSort",
    width: 120
  },
  {
    title: "删除标签",
    dataIndex: "delFlag",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "目录名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "parentId",
    label: "父节点",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "tenantId",
    label: "租户ID",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const screenFolderFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "parentId",
    label: "父节点",
    component: "Input"
  },
  {
    field: "tenantId",
    label: "租户ID",
    component: "Input"
  },
  {
    field: "name",
    label: "目录名称",
    component: "Input"
  },
  {
    field: "folderSort",
    label: "文件夹排序",
    component: "Input"
  },
  {
    field: "delFlag",
    label: "删除标签",
    component: "Input"
  }
];
