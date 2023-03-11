import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Switch } from "ant-design-vue";
import { setRoleStatus } from "/@/api/sys/Role";
import { RenderCallbackParams } from "/@/components/general/Form";

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
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, "pendingStatus")) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 0,
        checkedChildren: "已启用",
        unCheckedChildren: "已停用",
        disabled: record.id === "1",
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? 0 : 1;
          setRoleStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        }
      });
    }
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
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "roleCode",
    label: "角色编码",
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
    component: "Input",
    dynamicDisabled: ((renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values["roleCode"] === "admin" ? true : false)
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
