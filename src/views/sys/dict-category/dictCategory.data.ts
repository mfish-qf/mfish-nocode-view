import { BasicColumn } from "@/components/general/Table";
import { FormSchema } from "@/components/general/Table";

/**
 * @description: 属性分类字典
 * @author: mfish
 * @date: 2024-03-12
 * @version: V1.2.0
 */
export const columns: BasicColumn[] = [
  {
    title: "分类名称",
    dataIndex: "categoryName",
    width: 120,
    align: "left"
  },
  {
    title: "分类编码",
    dataIndex: "categoryCode",
    width: 120
  },
  {
    title: "排序",
    dataIndex: "sort",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "categoryName",
    label: "分类名称",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "categoryCode",
    label: "分类编码",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  }
];
export const dictCategoryFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "categoryName",
    label: "分类名称",
    component: "Input",
    required: true
  },
  {
    field: "categoryCode",
    label: "分类编码",
    component: "Input"
  },
  {
    field: "parentId",
    label: "上级分类",
    component: "TreeSelect",
    componentProps: {
      fieldNames: {
        label: "categoryName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "sort",
    label: "排序",
    component: "InputNumber"
  }
];
