import { FormSchema } from "@mfish/core/components/Form";

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
  tenantType?: number;
}

// tab的list
export const settingList = [
  {
    key: 1,
    name: "个人信息",
    component: "BaseSetting"
  },
  {
    key: 2,
    name: "安全设置",
    component: "SecureSetting"
  },
  {
    key: 3,
    name: "租户信息",
    component: "TenantSetting",
    auth: "sys:tenant:query"
  },
  {
    key: 4,
    name: "租户组织",
    component: "TenantOrgSetting",
    auth: "sys:tenantOrg:query"
  },
  {
    key: 5,
    name: "租户角色",
    component: "TenantRoleSetting",
    auth: "sys:tenantRole:query"
  },
  {
    key: 6,
    name: "租户人员",
    component: "TenantUserSetting",
    auth: "sys:tenantUser:query"
  }
];

// 基础设置 form
export const baseSetSchemas: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "account",
    component: "Input",
    label: "账号",
    componentProps: {
      disabled: true
    },
    colProps: { span: 18 }
  },
  {
    field: "",
    component: "Button",
    slot: "changeAccount",
    colProps: { span: 1 }
  },

  {
    field: "nickname",
    component: "Input",
    label: "昵称",
    colProps: { span: 18 }
  },
  {
    field: "sex",
    label: "性别",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "男", value: 1 },
        { label: "女", value: 0 }
      ]
    },
    colProps: { span: 18 }
  },
  {
    field: "phone",
    component: "Input",
    label: "手机号",
    colProps: { span: 18 }
  },
  {
    field: "email",
    component: "Input",
    label: "邮箱",
    colProps: { span: 18 }
  },
  {
    field: "telephone",
    label: "座机",
    component: "Input",
    colProps: { span: 18 }
  },
  {
    field: "birthday",
    label: "生日",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD"
    },
    colProps: { span: 18 }
  },
  {
    field: "remark",
    component: "InputTextArea",
    label: "个人简介",
    colProps: { span: 18 }
  }
];
