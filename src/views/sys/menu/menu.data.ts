import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { Icon } from "/@/components/Icon";

export const columns: BasicColumn[] = [
  {
    title: "菜单名称",
    dataIndex: "menuName",
    width: 200,
    align: "left"
  },
  {
    title: "图标",
    dataIndex: "menuIcon",
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.menuIcon });
    }
  },
  {
    title: "权限标识",
    dataIndex: "permissions",
    width: 180
  },
  {
    title: "组件",
    dataIndex: "component"
  },
  {
    title: "排序",
    dataIndex: "menuSort",
    width: 50
  },
  {
    title: "菜单状态",
    dataIndex: "isVisible",
    width: 80,
    customRender: ({ record }) => {
      const status = record.isVisible;
      const enable = ~~status === 1;
      const color = enable ? "green" : "red";
      const text = enable ? "显示" : "隐藏";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 180
  }
];

const isDir = (type: number) => type === 0;
const isMenu = (type: number) => type === 1;
const isButton = (type: number) => type === 2;

export const searchFormSchema: FormSchema[] = [
  {
    field: "menuName",
    label: "菜单名称",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "menuType",
    label: "菜单类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "目录", value: 0 },
        { label: "菜单", value: 1 },
        { label: "按钮", value: 2 }
      ]
    },
    colProps: { span: 4 }
  },
  {
    field: "isVisible",
    label: "菜单状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "显示", value: 1 },
        { label: "隐藏", value: 0 }
      ]
    },
    colProps: { span: 4 }
  }
];

export const formSchema: FormSchema[] = [
  {
    field: "menuType",
    label: "菜单类型",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "目录", value: 0 },
        { label: "菜单", value: 1 },
        { label: "按钮", value: 2 }
      ]
    },
    colProps: { lg: 24, md: 24 }
  },
  {
    field: "menuName",
    label: "菜单名称",
    component: "Input",
    required: true
  },
  {
    field: "parentId",
    label: "上级菜单",
    component: "TreeSelect",
    componentProps: {
      fieldNames: {
        label: "menuName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "menuSort",
    label: "排序",
    component: "InputNumber",
    required: true
  },
  {
    field: "menuIcon",
    label: "图标",
    component: "IconPicker",
    required: true,
    ifShow: ({ values }) => !isButton(values.menuType)
  },
  {
    field: "routePath",
    label: "路由地址",
    component: "Input",
    required: true,
    ifShow: ({ values }) => !isButton(values.menuType)
  },
  {
    field: "component",
    label: "组件路径",
    component: "Input",
    ifShow: ({ values }) => isMenu(values.menuType)
  },
  {
    field: "permissions",
    label: "权限标识",
    component: "Input",
    ifShow: ({ values }) => !isDir(values.menuType)
  },
  {
    field: "isVisible",
    label: "菜单状态",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "显示", value: 1 },
        { label: "隐藏", value: 0 }
      ]
    }
  },
  {
    field: "isExternal",
    label: "是否外链",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ]
    },
    ifShow: ({ values }) => !isButton(values.menuType)
  },
  {
    field: "isKeepalive",
    label: "是否缓存",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 }
      ]
    },
    ifShow: ({ values }) => isMenu(values.menuType)
  }
];
