import { BasicColumn } from "@/components/general/Table";
import { FormSchema } from "@/components/general/Table";
import { h } from "vue";
import { Tag, Switch } from "ant-design-vue";
import { RenderCallbackParams } from "@/components/general/Form";
import { setUserStatus } from "@/api/sys/User";
import { usePermission } from "@/hooks/web/UsePermission";

export const columns: BasicColumn[] = [
  {
    title: "用户名",
    dataIndex: "account",
    width: 180
  },
  {
    title: "昵称",
    dataIndex: "nickname",
    width: 180
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
    title: "性别",
    dataIndex: "sex",
    width: 60,
    customRender: ({ record }) => {
      const sex = record.sex;
      const enable = Math.trunc(sex) === 1;
      const color = enable ? "green" : "red";
      const text = enable ? "男" : "女";
      return h(Tag, { color }, () => text);
    }
  },
  {
    title: "所属组织",
    dataIndex: "orgNames",
    width: 180,
    customRender: ({ value }) => {
      const tags: any[] = [];
      for (const tag of value) {
        tags.push(h(Tag, { class: "ml-1 mt-1" }, () => tag));
      }
      return h("div", tags);
    }
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 80,
    customRender: ({ record }) => {
      if (!Reflect.has(record, "pendingStatus")) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 0,
        checkedChildren: "已启用",
        unCheckedChildren: "已停用",
        disabled: record.id === "1" || !usePermission().hasPermission("sys:account:update"),
        loading: record.pendingStatus,
        onChange(checked: boolean | string | number) {
          record.pendingStatus = true;
          const newStatus = checked ? 0 : 1;
          setUserStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        }
      });
    }
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "account",
    label: "用户名",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "nickname",
    label: "昵称",
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
        { label: "启用", value: 0 },
        { label: "停用", value: 1 }
      ]
    },
    colProps: { lg: 4, md: 6 }
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
    component: "InputPassword",
    required: true
  },
  {
    field: "nickname",
    label: "昵称",
    component: "Input"
  },
  {
    field: "orgIds",
    label: "所属部门",
    component: "TreeSelect",
    componentProps: {
      maxTagCount: 8,
      fieldNames: {
        label: "orgName",
        key: "id",
        value: "id"
      },
      multiple: true,
      getPopupContainer: () => document.body
    },
    colProps: { span: 24 },
    dynamicDisabled: (renderCallbackParams: RenderCallbackParams) =>
      usePermission().isSuperAdmin(renderCallbackParams.values.id),
    required: true
  },
  {
    label: "角色",
    field: "roleIds",
    component: "Select",
    componentProps: {
      maxTagCount: 8,
      mode: "multiple"
    },
    colProps: { span: 24 },
    dynamicDisabled: (renderCallbackParams: RenderCallbackParams) =>
      usePermission().isSuperAdmin(renderCallbackParams.values.id)
  },
  {
    field: "phone",
    label: "手机号",
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
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD"
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
    dynamicDisabled: (renderCallbackParams: RenderCallbackParams) =>
      usePermission().isSuperAdmin(renderCallbackParams.values.id),
    required: true
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea",
    colProps: { span: 24 }
  }
];
