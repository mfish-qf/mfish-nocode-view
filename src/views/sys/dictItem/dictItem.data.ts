import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @description: 字典项
 * @Author: mfish
 * @Date: 2023-01-03
 * @Version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "字典编码",
    dataIndex: "dictCode",
    width: 120
  },
  {
    title: "字典标签",
    dataIndex: "dictLabel",
    width: 120
  },
  {
    title: "字典键值",
    dataIndex: "dictValue",
    width: 120
  },
  {
    title: "字典颜色",
    dataIndex: "color",
    width: 120,
    customRender: ({ record }) => {
      const color = record.color;
      if (color) {
        return h(Tag, { color: color }, () => record.color);
      }
      return color;
    }
  },
  {
    title: "值类型",
    dataIndex: "valueType",
    width: 80,
    customRender: ({ record }) => {
      const enable = ~~record.valueType === 0;
      const color = enable ? "green" : "blue";
      const text = enable ? "字符" : "数字";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "字典排序",
    dataIndex: "dictSort",
    width: 120
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
    field: "dictLabel",
    label: "字典标签",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "dictValue",
    label: "字典键值",
    component: "Input",
    colProps: { span: 4 }
  }
];
export const dictItemFormSchema: FormSchema[] = [
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
    field: "dictCode",
    label: "字典编码",
    component: "Input",
    dynamicDisabled: true
  },
  {
    field: "dictLabel",
    label: "字典标签",
    component: "Input",
    required: true
  },
  {
    field: "dictValue",
    label: "字典键值",
    component: "Input",
    required: true
  },
  {
    field: "valueType",
    label: "键值类型",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "字符", value: 0 },
        { label: "数字", value: 1 }
      ]
    }
  },
  {
    field: "dictSort",
    label: "字典排序",
    component: "InputNumber"
  },
  {
    field: "color",
    label: "字典颜色",
    component: "Input"
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea"
  }
];
