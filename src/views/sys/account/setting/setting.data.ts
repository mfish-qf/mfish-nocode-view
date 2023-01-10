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
    name: "基本设置",
    component: "BaseSetting"
  },
  {
    key: "2",
    name: "安全设置",
    component: "SecureSetting"
  },
  {
    key: "3",
    name: "账号绑定",
    component: "AccountBind"
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

// 账号绑定 list
export const accountBindList: ListItem[] = [
  {
    key: "1",
    title: "绑定淘宝",
    description: "当前未绑定淘宝账号",
    extra: "绑定",
    avatar: "ri:taobao-fill",
    color: "#ff4000"
  },
  {
    key: "2",
    title: "绑定支付宝",
    description: "当前未绑定支付宝账号",
    extra: "绑定",
    avatar: "fa-brands:alipay",
    color: "#2eabff"
  },
  {
    key: "3",
    title: "绑定钉钉",
    description: "当前未绑定钉钉账号",
    extra: "绑定",
    avatar: "ri:dingding-fill",
    color: "#2eabff"
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
