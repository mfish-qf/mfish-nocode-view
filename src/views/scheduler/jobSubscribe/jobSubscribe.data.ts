import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 任务订阅表
 * @author: mfish
 * @date: 2023-02-20
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "任务ID",
    dataIndex: "jobId",
    width: 120
  },
  {
    title: "cron表达式",
    dataIndex: "cron",
    width: 120
  },
  {
    title: "时区",
    dataIndex: "timeZone",
    width: 120
  },
  {
    title: "优先级",
    dataIndex: "priority",
    width: 120
  },
  {
    title: "开始时间",
    dataIndex: "startTime",
    width: 120
  },
  {
    title: "结束时间",
    dataIndex: "endTime",
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
    field: "cron",
    label: "cron表达式",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "timeZone",
    label: "时区",
    component: "Input",
    colProps: { span: 4 }
  },
];
export const jobSubscribeFormSchema: FormSchema[] = [
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
  },
  {
    field: "cron",
    label: "cron表达式",
    component: "Input",
  },
  {
    field: "timeZone",
    label: "时区",
    component: "Input",
  },
  {
    field: "priority",
    label: "优先级",
    component: "Input",
  },
  {
    field: "startTime",
    label: "开始时间",
    component: "Input",
  },
  {
    field: "endTime",
    label: "结束时间",
    component: "Input",
  },
];
