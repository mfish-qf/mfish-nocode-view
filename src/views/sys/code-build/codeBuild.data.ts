import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 代码构建
 * @author: mfish
 * @date: 2023-04-11
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "数据库连接ID",
    dataIndex: "connectId",
    width: 120
  },
  {
    title: "表名",
    dataIndex: "tableName",
    width: 120
  },
  {
    title: "接口路径前缀 例如:/oauth2/user接口前缀为oauth2(不传会使用packageName，最底层包名 例如:cn.com.mfish.sys包会使用sys)",
    dataIndex: "apiPrefix",
    width: 120
  },
  {
    title: "实体类名(不传会使用表名驼峰化)",
    dataIndex: "entityName",
    width: 120
  },
  {
    title: "项目包名(不传使用默认包名 cn.com.mfish.web)",
    dataIndex: "packageName",
    width: 120
  },
  {
    title: "表描述(不传会获取数据库表中的中文描述，如果也为空则使用表名)",
    dataIndex: "tableComment",
    width: 120
  },
  {
    title: "Form查询条件(json串)",
    dataIndex: "queryParams",
    width: 120
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "connectId",
    label: "数据库连接ID",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "tableName",
    label: "表名",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "apiPrefix",
    label: "接口路径前缀 例如:/oauth2/user接口前缀为oauth2(不传会使用packageName，最底层包名 例如:cn.com.mfish.sys包会使用sys)",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
];
export const codeBuildFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "connectId",
    label: "数据库连接ID",
    component: "Input",
  },
  {
    field: "tableName",
    label: "表名",
    component: "Input",
    required: true
  },
  {
    field: "apiPrefix",
    label: "接口路径前缀 例如:/oauth2/user接口前缀为oauth2(不传会使用packageName，最底层包名 例如:cn.com.mfish.sys包会使用sys)",
    component: "Input",
  },
  {
    field: "entityName",
    label: "实体类名(不传会使用表名驼峰化)",
    component: "Input",
  },
  {
    field: "packageName",
    label: "项目包名(不传使用默认包名 cn.com.mfish.web)",
    component: "Input",
  },
  {
    field: "tableComment",
    label: "表描述(不传会获取数据库表中的中文描述，如果也为空则使用表名)",
    component: "Input",
  },
  {
    field: "queryParams",
    label: "Form查询条件(json串)",
    component: "Input",
  },
];
