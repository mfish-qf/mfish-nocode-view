import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @description: 字典
 * @Author: mfish
 * @Date: 2023-01-03
 * @version: V1.1.0
 */
export const columns: BasicColumn[] = [
  {
    title: "字典名称",
    dataIndex: "dictName",
    width: 180
  },
  {
    title: "字典编码",
    dataIndex: "dictCode",
    width: 150
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 60,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? "green" : "red";
      const text = enable ? "启用" : "停用";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "备注",
    dataIndex: "remark"
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "dictName",
    label: "字典名称",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "dictCode",
    label: "字典编码",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "status",
    label: "状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "启用", value: 0 },
        { label: "停用", value: 1 }
      ]
    },
    colProps: { lg: 4, md: 6 }
  }
];
export const dictFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "status",
    label: "状态",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "启用", value: 0 },
        { label: "停用", value: 1 }
      ]
    }
  },
  {
    field: "dictName",
    label: "字典名称",
    component: "Input",
    required: true
  },
  {
    field: "dictCode",
    label: "字典编码",
    component: "Input",
    required: true
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea"
  }
];
