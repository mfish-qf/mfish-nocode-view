import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

export const columns: BasicColumn[] = [
  {
    title: "组织名称",
    dataIndex: "orgName",
    width: 160,
    align: "left"
  },
  {
    title: "排序",
    dataIndex: "orgSort",
    width: 50
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? "green" : "red";
      const text = enable ? "启用" : "停用";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "负责人",
    dataIndex: "leader",
    width: 120
  },
  {
    title: "手机号",
    dataIndex: "phone",
    width: 120
  },
  {
    title: "邮箱",
    dataIndex: "email",
    width: 180
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 180
  },
  {
    title: "备注",
    dataIndex: "remark"
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: "orgName",
    label: "组织名称",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "leader",
    label: "负责人",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "phone",
    label: "手机号",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "status",
    label: "状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "启用", value: "0" },
        { label: "停用", value: "1" }
      ]
    },
    colProps: { lg: 4, md: 6 }
  }
];

export const formSchema: FormSchema[] = [
  {
    field: "id",
    label: "id",
    component: "Input",
    show: false
  },
  {
    field: "orgName",
    label: "组织名称",
    component: "Input",
    required: true
  },
  {
    field: "parentId",
    label: "上级部门",
    component: "TreeSelect",
    componentProps: {
      fieldNames: {
        label: "orgName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "orgSort",
    label: "排序",
    component: "InputNumber",
    required: true
  },
  {
    field: "leader",
    label: "负责人",
    component: "Input"
  },
  {
    field: "phone",
    label: "手机号",
    component: "Input"
  },
  {
    field: "email",
    label: "邮箱",
    component: "Input"
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
    },
    required: true
  },
  {
    label: "备注",
    field: "remark",
    component: "InputTextArea",
    colProps: { span: 24 }
  }
];
