import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { YNTag_Status } from "@mfish/core/components/DictTag";

export const columns: BasicColumn[] = [
  {
    title: "角色名称",
    dataIndex: "roleName",
    width: 200
  },
  {
    title: "角色编码",
    dataIndex: "roleCode",
    width: 180
  },
  {
    title: "排序",
    dataIndex: "roleSort",
    width: 50
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 120
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
    field: "roleName",
    label: "角色名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "roleCode",
    label: "角色编码",
    component: "Input",
    colProps: { xl: 5, md: 6 }
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
    colProps: { xl: 5, md: 6 }
  }
];

export const formSchema: FormSchema[] = [
  {
    label: "id",
    field: "id",
    component: "Input",
    show: false
  },
  {
    field: "roleName",
    label: "角色名称",
    required: true,
    component: "Input"
  },
  {
    field: "roleCode",
    label: "角色编码",
    required: true,
    component: "Input"
  },
  {
    label: "排序",
    field: "roleSort",
    component: "InputNumber"
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
    label: "备注",
    field: "remark",
    component: "InputTextArea",
    colProps: { span: 24 }
  },
  {
    label: " ",
    field: "menus",
    slot: "menus",
    component: "Input",
    colProps: { span: 24 }
  }
];

export class RoleDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "roleName",
      label: "角色名称"
    },
    {
      field: "roleCode",
      label: "角色编码"
    },
    {
      field: "roleSort",
      label: "显示顺序"
    },
    {
      field: "status",
      label: "状态",
      render: (val) => YNTag_Status(val)
    },
    {
      field: "remark",
      label: "备注"
    }
  ];
}
