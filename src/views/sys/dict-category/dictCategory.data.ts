import { BasicColumn } from "@/components/general/Table";
import { FormSchema } from "@/components/general/Table";
import { Icon } from "@/components/general/Icon";
import { h } from "vue";

/**
 * @description: 属性分类字典
 * @author: mfish
 * @date: 2024-03-12
 * @version: V1.3.2
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
    title: "图标",
    dataIndex: "icon",
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    }
  },
  {
    title: "备注",
    dataIndex: "remark",
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
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "categoryCode",
    label: "分类编码",
    component: "Input",
    colProps: { xl: 5, md: 6 }
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
    component: "Input",
    helpMessage: ["用于快速检索到当前分类", "一般用于父级分类（全局唯一）"]
  },
  {
    field: "parentId",
    label: "上级分类",
    component: "TreeSelect",
    componentProps: {
      showSearch: true,
      treeNodeFilterProp: "categoryName",
      fieldNames: {
        label: "categoryName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "icon",
    label: "图标",
    component: "IconPicker"
  },
  {
    field: "sort",
    label: "排序",
    component: "InputNumber"
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea"
  }
];
