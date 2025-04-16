import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { h, ref } from "vue";
import { Tag } from "ant-design-vue";
import { Icon } from "@mfish/core/components/Icon";
import { DescItem } from "@mfish/core/components/Description";
import { getMenuById } from "@mfish/core/api";
import { YNTag, YNTag_Name } from "@mfish/core/components/DictTag";

export const columns: BasicColumn[] = [
  {
    title: "菜单名称",
    dataIndex: "menuName",
    width: 200,
    align: "left"
  },
  {
    dataIndex: "menuType",
    title: "菜单类型",
    width: 80,
    customRender: ({ value }) =>
      h(Tag, value === 0 ? { color: "green" } : value === 1 ? { color: "blue" } : {}, () =>
        value === 0 ? "目录" : value === 1 ? "菜单" : value === 2 ? "按钮" : "未知"
      )
  },
  {
    title: "菜单状态",
    dataIndex: "isVisible",
    width: 80,
    customRender: ({ record }) => {
      const status = record.isVisible;
      const enable = Math.trunc(status) === 1;
      const color = enable ? "green" : "red";
      const text = enable ? "显示" : "隐藏";
      return h(Tag, { color }, () => text);
    }
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
    title: "路由地址",
    dataIndex: "routePath"
  },
  {
    title: "组件",
    dataIndex: "component"
  },
  {
    title: "权限标识",
    dataIndex: "permissions",
    width: 180
  },
  {
    title: "排序",
    dataIndex: "menuSort",
    width: 50
  }
];
const isMenu = (type: number) => type === 1;
const isButton = (type: number) => type === 2;

export const searchFormSchema: FormSchema[] = [
  {
    field: "menuName",
    label: "菜单名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
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
    colProps: { xl: 5, md: 6 }
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
    colProps: { span: 24 }
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
      showSearch: true,
      treeNodeFilterProp: "menuName",
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
    ifShow: ({ values }) => isButton(values.menuType)
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
    },
    ifShow: ({ values }) => !isButton(values.menuType)
  },
  {
    field: "activeMenu",
    label: "激活菜单",
    component: "TreeSelect",
    componentProps: {
      showSearch: true,
      treeNodeFilterProp: "menuName",
      fieldNames: {
        label: "menuName",
        key: "menuCode",
        value: "menuCode"
      },
      getPopupContainer: () => document.body
    },
    ifShow: ({ values }) => isMenu(values.menuType) && values.isVisible === 0
  },
  {
    field: "isExternal",
    label: "新窗口打开",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ]
    },
    ifShow: ({ values }) => isMenu(values.menuType)
  },
  {
    field: "isKeepalive",
    label: "是否缓存",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ]
    },
    ifShow: ({ values }) => isMenu(values.menuType)
  }
];

export class MenuDesc {
  parentName = ref<string>();
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "menuType",
      label: "菜单类型",
      render: (value) =>
        h(Tag, value === 0 ? { color: "green" } : value === 1 ? { color: "blue" } : {}, () =>
          value === 0 ? "目录" : value === 1 ? "菜单" : value === 2 ? "按钮" : "未知"
        )
    },
    {
      field: "menuName",
      label: "菜单名称"
    },
    {
      field: "parentId",
      label: "上级菜单",
      render: (val) => {
        if (!val) return;
        getMenuById(val)
          .then((res) => {
            this.parentName.value = res.menuName;
          })
          .catch(() => {
            this.parentName.value = "";
          });
        return h("div", this.parentName.value);
      }
    },
    {
      field: "menuSort",
      label: "排序"
    },
    {
      field: "menuIcon",
      label: "图标",
      show: (values) => {
        if (!values) return false;
        return !isButton(values.menuType);
      }
    },
    {
      field: "routePath",
      label: "路由地址",
      show: (values) => {
        if (!values) return false;
        return !isButton(values.menuType);
      }
    },
    {
      field: "component",
      label: "组件路径",
      show: (values) => {
        if (!values) return false;
        return isMenu(values.menuType);
      }
    },
    {
      field: "permissions",
      label: "权限标识",
      show: (values) => {
        if (!values) return false;
        return isButton(values.menuType);
      }
    },
    {
      field: "isVisible",
      label: "菜单状态",
      show: (values) => {
        if (!values) return false;
        return !isButton(values.menuType);
      },
      render: (val) => YNTag_Name(val, "显示", "隐藏")
    },
    {
      field: "activeMenu",
      label: "激活菜单",
      show: (values) => {
        if (!values) return false;
        return isMenu(values.menuType) && values.isVisible === 0;
      }
    },
    {
      field: "isExternal",
      label: "新窗口打开",
      show: (values) => {
        if (!values) return false;
        return isMenu(values.menuType);
      },
      render: (val) => YNTag(val)
    },
    {
      field: "isKeepalive",
      label: "是否缓存",
      show: (values) => {
        if (!values) return false;
        return isMenu(values.menuType);
      },
      render: (val) => YNTag(val)
    }
  ];
}
