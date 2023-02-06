import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 定时调度任务
 * @author: mfish
 * @date: 2023-02-03
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
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
    title: "cron表达式",
    dataIndex: "cron",
    width: 120
  },
  {
    title: "调用方法",
    dataIndex: "invokeMethod",
    width: 120
  },
  {
    title: "调用参数",
    dataIndex: "invokeParam",
    width: 120
  },
  {
    title: "允许并发执行（1允许 0不允许）",
    dataIndex: "allowConcurrent",
    width: 120
  },
  {
    title: "任务执行出错后处理方式（1立即执行 2执行一次 3放弃执行）",
    dataIndex: "misfireHandler",
    width: 120
  },
  {
    title: "状态（0正常 1暂停）",
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
  {
    field: "cron",
    label: "cron表达式",
    component: "Input",
    colProps: { span: 4 }
  },
];
export const jobFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
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
    field: "cron",
    label: "cron表达式",
    component: "Input",
  },
  {
    field: "invokeMethod",
    label: "调用方法",
    component: "Input",
    required: true
  },
  {
    field: "invokeParam",
    label: "调用参数",
    component: "Input",
  },
  {
    field: "allowConcurrent",
    label: "允许并发执行（1允许 0不允许）",
    component: "Input",
  },
  {
    field: "misfireHandler",
    label: "任务执行出错后处理方式（1立即执行 2执行一次 3放弃执行）",
    component: "Input",
  },
  {
    field: "status",
    label: "状态（0正常 1暂停）",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注信息",
    component: "Input",
  },
];
