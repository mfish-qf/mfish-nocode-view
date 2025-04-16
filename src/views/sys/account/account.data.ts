import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { h, ref, unref } from "vue";
import { Switch, Tag } from "ant-design-vue";
import { RenderCallbackParams } from "@mfish/core/components/Form";
import { getOrgByIds, getRoleByIds, getTenantOrgByIds, getTenantRoleByIds, setUserStatus } from "@mfish/core/api";
import { usePermission } from "@mfish/core/hooks";
import { DescItem } from "@mfish/core/components/Description";
import { YNTag_Name, YNTag_Status } from "@mfish/core/components/DictTag";

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
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "nickname",
    label: "昵称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "phone",
    label: "手机号",
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
    label: "所属组织",
    component: "TreeSelect",
    componentProps: {
      maxTagCount: 8,
      treeNodeFilterProp: "orgName",
      fieldNames: {
        label: "orgName",
        key: "id",
        value: "id"
      },
      multiple: true,
      getPopupContainer: () => document.body
    },
    slot: "orgIds",
    colProps: { span: 24 },
    dynamicDisabled: (renderCallbackParams: RenderCallbackParams) =>
      usePermission().isSuperAdmin(renderCallbackParams.values.id)
  },
  {
    label: "角色",
    field: "roleIds",
    component: "Select",
    componentProps: {
      maxTagCount: 8,
      mode: "multiple",
      getPopupContainer: () => document.body
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

export class AccountDesc {
  source: number;

  constructor(s: number) {
    this.source = s;
  }

  orgNames = ref<string[]>([]);
  roleNames = ref<string[]>([]);
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "account",
      label: "用户名"
    },
    {
      field: "nickname",
      label: "昵称"
    },
    {
      field: "orgIds",
      label: "所属组织",
      span: 2,
      init: (val) => {
        if (!val || val.orgIds?.length === 0) {
          this.orgNames.value = [];
          return;
        }
        const setOrgName = (res) => {
          if (res && res.length > 0) {
            this.orgNames.value = res.map((val) => val.orgName);
          } else {
            this.orgNames.value = [];
          }
        };
        if (this.source === 1) {
          getTenantOrgByIds(val.orgIds).then((res) => setOrgName(res));
        } else {
          getOrgByIds(val.orgIds).then((res) => setOrgName(res));
        }
      },
      show: false
    },
    {
      field: "orgNames",
      label: "所属组织",
      span: 2,
      render: () => {
        return h(
          "div",
          unref(this.orgNames).map((orgName) => h(Tag, () => orgName))
        );
      }
    },
    {
      field: "roleIds",
      label: "角色",
      span: 2,
      init: (val) => {
        if (!val || !val.roleIds || val.roleIds.length === 0) {
          this.roleNames.value = [];
          return;
        }
        const setRoleNames = (res) => {
          if (res && res.length > 0) {
            this.roleNames.value = res.map((val) => val.roleName);
          } else {
            this.roleNames.value = [];
          }
        };
        if (this.source === 1) {
          getTenantRoleByIds(val.roleIds).then((res) => setRoleNames(res));
        } else {
          getRoleByIds(val.roleIds).then((res) => setRoleNames(res));
        }
      },
      show: false
    },
    {
      field: "roleNames",
      label: "角色",
      span: 2,
      render: () => {
        return h(
          "div",
          unref(this.roleNames).map((roleName) => h(Tag, () => roleName))
        );
      }
    },
    {
      field: "phone",
      label: "手机号"
    },
    {
      field: "email",
      label: "邮箱"
    },
    {
      field: "telephone",
      label: "座机"
    },
    {
      field: "birthday",
      label: "生日"
    },
    {
      field: "sex",
      label: "性别",
      render: (record) => YNTag_Name(record === 1, "男", "女")
    },
    {
      field: "status",
      label: "状态",
      render: (record) => YNTag_Status(record)
    },
    {
      field: "remark",
      label: "备注"
    }
  ];
}
