import { FormSchema } from "/@/components/general/Form/index";

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}

// tab的list
export const settingList = [
  {
    key: "1",
    name: "个人信息",
    component: "BaseSetting"
  },
  {
    key: "2",
    name: "安全设置",
    component: "SecureSetting"
  },
  {
    key: "3",
    name: "租户信息",
    component: "TenantSetting"
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

// 新消息通知 list
export const msgNotifyList: ListItem[] = [
  {
    key: "1",
    title: "账户密码",
    description: "其他用户的消息将以站内信的形式通知"
  },
  {
    key: "2",
    title: "系统消息",
    description: "系统消息将以站内信的形式通知"
  },
  {
    key: "3",
    title: "待办任务",
    description: "待办任务将以站内信的形式通知"
  }
];
