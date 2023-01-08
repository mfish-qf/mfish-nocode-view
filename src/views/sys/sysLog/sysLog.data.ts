import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";

/**
 * @description: 系统日志
 * @author: mfish
 * @date: 2023-01-08
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "中文标题",
    dataIndex: "title",
    width: 120
  },
  {
    title: "方法",
    dataIndex: "method",
    width: 120
  },
  {
    title: "请求类型",
    dataIndex: "reqType",
    width: 120
  },
  {
    title: "请求路径",
    dataIndex: "reqUri",
    width: 120
  },
  {
    title: "请求参数",
    dataIndex: "reqParam",
    width: 120
  },
  {
    title: "请求来源（0其它 1后台用户 2手机端用户）",
    dataIndex: "reqSource",
    width: 120
  },
  {
    title: "操作类型（0其它 1查询 2新增 3修改 4删除 5授权 6导入 7导出...）",
    dataIndex: "operType",
    width: 120
  },
  {
    title: "操作IP",
    dataIndex: "operIp",
    width: 120
  },
  {
    title: "操作状态（0正常 1异常）",
    dataIndex: "operStatus",
    width: 120
  },
  {
    title: "描述信息",
    dataIndex: "remark",
    width: 120
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "title",
    label: "中文标题",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "method",
    label: "方法",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "reqType",
    label: "请求类型",
    component: "Input",
    colProps: { span: 4 }
  },
];
export const sysLogFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "title",
    label: "中文标题",
    component: "Input",
  },
  {
    field: "method",
    label: "方法",
    component: "Input",
  },
  {
    field: "reqType",
    label: "请求类型",
    component: "Input",
  },
  {
    field: "reqUri",
    label: "请求路径",
    component: "Input",
  },
  {
    field: "reqParam",
    label: "请求参数",
    component: "Input",
  },
  {
    field: "reqSource",
    label: "请求来源（0其它 1后台用户 2手机端用户）",
    component: "Input",
  },
  {
    field: "operType",
    label: "操作类型（0其它 1查询 2新增 3修改 4删除 5授权 6导入 7导出...）",
    component: "Input",
  },
  {
    field: "operIp",
    label: "操作IP",
    component: "Input",
  },
  {
    field: "operStatus",
    label: "操作状态（0正常 1异常）",
    component: "Input",
  },
  {
    field: "remark",
    label: "描述信息",
    component: "Input",
  },
];
