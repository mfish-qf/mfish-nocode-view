import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @Description: 字典项
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
    dataIndex: "remark",
    width: 120
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
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
  },
];
export const dictItemFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "dictCode",
    label: "字典编码",
    component: "Input",
  },
  {
    field: "dictLabel",
    label: "字典标签",
    component: "Input",
  },
  {
    field: "dictValue",
    label: "字典键值",
    component: "Input",
  },
  {
    field: "dictSort",
    label: "字典排序",
    component: "Input",
  },
  {
    field: "status",
    label: "状态(0正常 1停用)",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
];
