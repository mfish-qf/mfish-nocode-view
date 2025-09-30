import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";

/**
 * @description: 大屏资源信息
 * @author: mfish
 * @date: 2025-03-19
 * @version: V2.2.0
 */
export const columns: BasicColumn[] = [
  {
    title: "来源id",
    dataIndex: "sourceId",
    width: 120
  },
  {
    title: "资源名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "资源描述",
    dataIndex: "remark",
    width: 120
  },
  {
    title: "资源分类",
    dataIndex: "category",
    width: 120
  },
  {
    title: "画布配置",
    dataIndex: "canvasConfig",
    width: 120
  },
  {
    title: "图片KEY",
    dataIndex: "picKey",
    width: 120
  },
  {
    title: "大屏组件容器配置-位置信息(json方式存储)",
    dataIndex: "contains",
    width: 120
  },
  {
    title: "资源价格",
    dataIndex: "price",
    width: 120
  },
  {
    title: "使用次数",
    dataIndex: "useCount",
    width: 120
  },
  {
    title: "收藏次数",
    dataIndex: "favoritesCount",
    width: 120
  },
  {
    title: "点击次数",
    dataIndex: "clickCount",
    width: 120
  },
  {
    title: "租户ID",
    dataIndex: "tenantId",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "category",
    label: "资源分类",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "sourceId",
    label: "来源id",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "name",
    label: "资源名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];

export class ScreenResourceDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "sourceId",
      label: "来源id"
    },
    {
      field: "name",
      label: "资源名称"
    },
    {
      field: "remark",
      label: "资源描述"
    },
    {
      field: "category",
      label: "资源分类"
    },
    {
      field: "canvasConfig",
      label: "画布配置"
    },
    {
      field: "picKey",
      label: "图片KEY"
    },
    {
      field: "contains",
      label: "大屏组件容器配置-位置信息(json方式存储)"
    },
    {
      field: "price",
      label: "资源价格"
    },
    {
      field: "useCount",
      label: "使用次数"
    },
    {
      field: "favoritesCount",
      label: "收藏次数"
    },
    {
      field: "clickCount",
      label: "点击次数"
    },
    {
      field: "tenantId",
      label: "租户ID"
    }
  ];
}
