import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { RenderCallbackParams } from "/@/components/Form";

export const columns: BasicColumn[] = [
  {
    title: "用户名",
    dataIndex: "account",
    width: 120
  },
  {
    title: "昵称",
    dataIndex: "nickname",
    width: 120
  },
  {
    title: "手机号",
    dataIndex: "phone",
    width: 120
  },
  {
    title: "组织",
    dataIndex: "orgName",
    width: 120
  },
  {
    title: "邮箱",
    dataIndex: "email",
    width: 120
  },
  {
    title: "座机",
    dataIndex: "telephone",
    width: 120
  },
  {
    title: "性别",
    dataIndex: "sex",
    width: 60,
    customRender: ({ record }) => {
      const sex = record.sex;
      const enable = ~~sex === 1;
      const color = enable ? "green" : "red";
      const text = enable ? "男" : "女";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "生日",
    dataIndex: "birthday",
    width: 180
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
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "account",
    label: "用户名",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "nickname",
    label: "昵称",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "phone",
    label: "手机号",
    component: "Input",
    colProps: { span: 4 }
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
    colProps: { span: 4 }
  }
];
export const accountFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "account",
    label: "用户名",
    component: "Input",
    required: true
  },
  {
    field: "password",
    label: "密码",
    component: "InputPassword"
  },
  {
    field: "phone",
    label: "手机号",
    component: "Input"
  },
  {
    label: "角色",
    field: "roles",
    component: "Select",
    componentProps: {
      mode: "multiple",
    },
    rules: [{ required: true, message: "请选择角色",type: "array" }],
    dynamicDisabled: ((renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values["account"] === "admin" ? true : false)
  },
  {
    field: "orgId",
    label: "所属部门",
    component: "TreeSelect",
    componentProps: {
      fieldNames: {
        label: "orgName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    },
    required: true
  },
  {
    field: "nickname",
    label: "昵称",
    component: "Input"
  },
  {
    label: "邮箱",
    field: "email",
    component: "Input"
  },
  {
    field: "telephone",
    label: "座机",
    component: "Input"
  },
  {
    field: "birthday",
    label: "生日",
    component: "DatePicker",
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD',
    }
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
    required: true
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
  }
];
