import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { h, ref } from "vue";
import { Tag } from "ant-design-vue";
import { Icon } from "@mfish/core/components/Icon";
import { useAppStore } from "@mfish/stores/modules";
import { DescItem } from "@mfish/core/components/Description";
import { YNTag_Status } from "@mfish/core/components/DictTag";
import { getOrgByIds, getRoleByIds, getTenantOrgByIds, getTenantRoleByIds } from "@mfish/core/api";

export const columns: BasicColumn[] = [
  {
    title: "组织名称",
    dataIndex: "orgName",
    width: 240,
    align: "left",
    customRender: ({ record }) => {
      const appStore = useAppStore();
      const tenantId = record.tenantId;
      if (tenantId) {
        return h("div", { style: "display: flex;align-items: center;" }, [
          h(Icon, { icon: "ion:business", color: appStore.getThemeColor }),
          h("div", { style: `margin-left: 12px;color:${appStore.getThemeColor}` }, record.orgName)
        ]);
      }
      return record.orgName;
    }
  },
  {
    dataIndex: "orgFixCode",
    title: "组织编码",
    width: 160
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
      const enable = Math.trunc(status) === 0;
      const color = enable ? "green" : "red";
      const text = enable ? "启用" : "停用";
      return h(Tag, { color }, () => text);
    }
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: "orgName",
    label: "组织名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "leader",
    label: "负责人",
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
        { label: "启用", value: "0" },
        { label: "停用", value: "1" }
      ]
    },
    colProps: { xl: 5, md: 6 }
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
    field: "tenantId",
    label: "tenantId",
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
    field: "orgFixCode",
    label: "组织编码",
    component: "Input"
  },
  {
    field: "parentId",
    label: "上级组织",
    component: "TreeSelect",
    componentProps: {
      getPopupContainer: () => document.body
    },
    slot: "parentId"
  },
  {
    label: "角色",
    field: "roleIds",
    component: "Select",
    componentProps: {
      mode: "multiple",
      showSearch: true,
      optionFilterProp: "label",
      getPopupContainer: () => document.body
    }
  },
  {
    field: "orgSort",
    label: "排序",
    component: "InputNumber"
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

export class OrgDesc {
  source: number;

  constructor(s: number) {
    this.source = s;
  }

  orgName = ref("");
  roleNames = ref<string[]>([]);
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "orgName",
      label: "组织名称"
    },
    {
      field: "orgFixCode",
      label: "组织编码"
    },
    {
      field: "parentId",
      label: "上级组织",
      render: (val) => {
        if (!val) return;
        const setOrgName = (res) => {
          if (res && res.length > 0) {
            this.orgName.value = res[0].orgName;
          } else {
            this.orgName.value = "";
          }
        };
        if (this.source === 1) {
          getTenantOrgByIds(val).then((res) => setOrgName(res));
        } else {
          getOrgByIds(val).then((res) => setOrgName(res));
        }
        return h(Tag, () => this.orgName.value);
      }
    },
    {
      label: "角色",
      field: "roleIds",
      init: (val: any) => {
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
      label: "角色",
      field: "roleNames",
      render: () => {
        return h(
          "div",
          this.roleNames.value.map((roleName) => h(Tag, () => roleName))
        );
      }
    },
    {
      field: "orgSort",
      label: "排序"
    },
    {
      field: "leader",
      label: "负责人"
    },
    {
      field: "phone",
      label: "联系电话"
    },
    {
      field: "email",
      label: "邮箱"
    },
    {
      field: "status",
      label: "状态",
      render: (val) => YNTag_Status(val),
      span: 2
    },
    {
      field: "remark",
      label: "备注"
    }
  ];
}
