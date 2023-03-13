import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V1.0.0
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
    width: 120
  },
  {
    title: "连接池",
    dataIndex: "poolType",
    width: 120
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
    title: "用户名",
    dataIndex: "username",
    width: 120
  },
  {
    title: "密码",
    dataIndex: "password",
    width: 120
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
    colProps: { span: 4 }
  },
  {
    field: "dbType",
    label: "库类型",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "host",
    label: "主机",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "dbName",
    label: "数据库",
    component: "Input",
    colProps: { span: 4 }
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
    component: "Input"
  },
  {
    field: "dbType",
    label: "数据库类型",
    component: "Input",
    required: true
  },
  {
    field: "poolType",
    label: "连接池类型",
    component: "Input",
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
    component: "Input",
    required: true
  },
  {
    field: "dbName",
    label: "数据库名",
    component: "Input"
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
    component: "Input",
    required: true
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea"
  }
];
