import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: API目录
 * @author: mfish
 * @date: 2023-07-21
 * @version: V1.0.0
 */
export const API_SAVE = "__API_SAVE__";
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "参数类型",
    dataIndex: "paramFlag",
    width: 120
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 120
  },
  {
    title: "创建人",
    dataIndex: "createBy",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "name",
    label: "目录名称",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  }
];
export const apiFolderFormSchema: FormSchema[] = [
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
