import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 任务日志
 * @author: mfish
 * @date: 2023-02-14
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "任务ID",
    dataIndex: "jobId",
    width: 120
  },
  {
    title: "任务名称",
    dataIndex: "jobName",
    width: 120
  },
  {
    title: "任务组",
    dataIndex: "jobGroup",
    width: 120
  },
  {
    title: "任务类型(0 本地任务 1 RPC远程调用任务 2 MQ消息任务)",
    dataIndex: "jobType",
    width: 120
  },
  {
    title: "类名称",
    dataIndex: "className",
    width: 120
  },
  {
    title: "方法名称",
    dataIndex: "methodName",
    width: 120
  },
  {
    title: "调用参数",
    dataIndex: "params",
    width: 120
  },
  {
    title: "执行状态（0开始 1正在执行 2执行成功 3执行失败）",
    dataIndex: "status",
    width: 120
  },
  {
    title: "备注信息",
    dataIndex: "remark",
    width: 120
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "jobId",
    label: "任务ID",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "jobName",
    label: "任务名称",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "jobGroup",
    label: "任务组",
    component: "Input",
    colProps: { span: 4 }
  },
];
export const jobLogFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "jobId",
    label: "任务ID",
    component: "Input",
    required: true
  },
  {
    field: "jobName",
    label: "任务名称",
    component: "Input",
    required: true
  },
  {
    field: "jobGroup",
    label: "任务组",
    component: "Input",
    required: true
  },
  {
    field: "jobType",
    label: "任务类型(0 本地任务 1 RPC远程调用任务 2 MQ消息任务)",
    component: "Input",
  },
  {
    field: "className",
    label: "类名称",
    component: "Input",
    required: true
  },
  {
    field: "methodName",
    label: "方法名称",
    component: "Input",
  },
  {
    field: "params",
    label: "调用参数",
    component: "Input",
  },
  {
    field: "status",
    label: "执行状态（0开始 1正在执行 2执行成功 3执行失败）",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注信息",
    component: "Input",
  },
];
