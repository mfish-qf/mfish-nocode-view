import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";

/**
 * @description: 大屏资源API
 * @author: mfish
 * @date: 2025-03-21
 * @version: V2.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "资源id",
    dataIndex: "resourceId",
    width: 120
  },
  {
    title: "原API ID",
    dataIndex: "apiId",
    width: 120
  },
  {
    title: "数据来源id",
    dataIndex: "sourceId",
    width: 120
  },
  {
    title: "数据来源类型 0 数据库 1文件 2API接口",
    dataIndex: "sourceType",
    width: 120
  },
  {
    title: "数据源SQL（原生查询方式存储）",
    dataIndex: "sourceSql",
    width: 120
  },
  {
    title: "API配置信息",
    dataIndex: "config",
    width: 120
  },
  {
    title: "重命名配置",
    dataIndex: "renameConfig",
    width: 120
  },
  {
    title: "查询类型 0 自定义查询 1原生SQL查询",
    dataIndex: "queryType",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "resourceId",
    label: "资源id",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "apiId",
    label: "原API ID",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const screenResourceApiFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "resourceId",
    label: "资源id",
    component: "Input"
  },
  {
    field: "apiId",
    label: "原API ID",
    component: "Input"
  },
  {
    field: "sourceId",
    label: "数据来源id",
    component: "Input"
  },
  {
    field: "sourceType",
    label: "数据来源类型 0 数据库 1文件 2API接口",
    component: "InputNumber"
  },
  {
    field: "sourceSql",
    label: "数据源SQL（原生查询方式存储）",
    component: "Input"
  },
  {
    field: "config",
    label: "API配置信息",
    component: "Input"
  },
  {
    field: "renameConfig",
    label: "重命名配置",
    component: "Input"
  },
  {
    field: "queryType",
    label: "查询类型 0 自定义查询 1原生SQL查询",
    component: "InputNumber"
  }
];

export class ScreenResourceApiDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "resourceId",
      label: "资源id"
    },
    {
      field: "apiId",
      label: "原API ID"
    },
    {
      field: "sourceId",
      label: "数据来源id"
    },
    {
      field: "sourceType",
      label: "数据来源类型 0 数据库 1文件 2API接口"
    },
    {
      field: "sourceSql",
      label: "数据源SQL（原生查询方式存储）"
    },
    {
      field: "config",
      label: "API配置信息"
    },
    {
      field: "renameConfig",
      label: "重命名配置"
    },
    {
      field: "queryType",
      label: "查询类型 0 自定义查询 1原生SQL查询"
    }
  ];
}
