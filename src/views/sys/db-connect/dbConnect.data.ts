import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { getDictProps, YNTag } from "@mfish/core/components/DictTag";

/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V2.2.0
 */
export const columns: BasicColumn[] = [
  {
    title: "连接名",
    dataIndex: "dbTitle",
    width: 120
  },
  {
    title: "库类型",
    dataIndex: "dbType",
    width: 80
  },
  {
    title: "连接池",
    dataIndex: "poolType",
    width: 80
  },
  {
    title: "主机",
    dataIndex: "host",
    width: 120
  },
  {
    title: "端口号",
    dataIndex: "port",
    width: 120
  },
  {
    title: "数据库名",
    dataIndex: "dbName",
    width: 120
  },
  {
    title: "是否公开",
    dataIndex: "isPublic",
    width: 80,
    customRender: ({ value }) => YNTag(value)
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "dbTitle",
    label: "连接名",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "dbType",
    label: "库类型",
    component: "ApiSelect",
    componentProps: getDictProps("sys_db_type"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "host",
    label: "主机",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "dbName",
    label: "数据库",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const dbConnectFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "dbTitle",
    label: "连接名",
    component: "Input",
    required: true
  },
  {
    field: "dbType",
    label: "数据库类型",
    component: "ApiSelect",
    componentProps: getDictProps("sys_db_type"),
    defaultValue: 0,
    required: true
  },
  {
    field: "poolType",
    label: "连接池类型",
    component: "ApiSelect",
    componentProps: getDictProps("sys_db_pool"),
    defaultValue: "db_pool_hikari",
    required: true
  },
  {
    field: "host",
    label: "主机",
    component: "Input",
    required: true
  },
  {
    field: "port",
    label: "端口号",
    component: "InputNumber",
    required: true
  },
  {
    field: "dbName",
    label: "数据库名",
    component: "Input",
    required: true
  },
  {
    field: "username",
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
    field: "isPublic",
    label: "是否公开",
    component: "RadioButtonGroup",
    defaultValue: 0,
    helpMessage: ["（请谨慎）如果设置为公开", "所有用户都可以查看该库数据"],
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 }
      ]
    }
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea"
  }
];
