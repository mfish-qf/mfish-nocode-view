import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
import { DescItem } from "/@/components/general/Description";
import { buildJsonPreview } from "/@/utils/HBuildUtils";

/**
 * @description: 任务日志
 * @author: mfish
 * @date: 2023-02-14
 * @version: V1.1.0
 */
export const columns: BasicColumn[] = [
  {
    title: "任务ID",
    dataIndex: "jobId",
    width: 120,
    defaultHidden: true
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
    title: "任务类型",
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
    title: "cron表达式",
    dataIndex: "cron",
    width: 100
  },
  {
    title: "执行状态",
    dataIndex: "status",
    width: 120
  },
  {
    title: "执行时间",
    dataIndex: "createTime",
    width: 150
  },
  {
    title: "耗时(ms)",
    dataIndex: "costTime",
    width: 80
  },
  {
    title: "生效时间",
    dataIndex: "startTime",
    width: 150
  },
  {
    title: "失效时间",
    dataIndex: "endTime",
    width: 150
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "jobType",
    label: "任务类型",
    component: "ApiSelect",
    componentProps: getDictProps("sys_job_type"),
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "jobName",
    label: "任务名称",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "jobGroup",
    label: "任务组",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  },
  {
    field: "cron",
    label: "cron表达式",
    component: "Input",
    colProps: { lg: 4, md: 6 }
  }
];
export const jobLogSchema: DescItem[] = [
  {
    field: "jobName",
    label: "任务名称",
    labelMinWidth: 60
  },
  {
    field: "jobGroup",
    label: "任务组",
    labelMinWidth: 60
  },
  {
    field: "jobTypesTag",
    label: "任务类型",
    labelMinWidth: 60
  },
  {
    field: "cron",
    label: "cron表达式",
    labelMinWidth: 60
  },
  {
    field: "className",
    label: "类名称",
    labelMinWidth: 60
  },
  {
    field: "methodName",
    label: "方法名称",
    labelMinWidth: 60
  },
  {
    field: "params",
    label: "参数名称",
    render: (record) => buildJsonPreview(record),
    span: 2
  },
  {
    field: "startTime",
    label: "生效时间",
    labelMinWidth: 60
  },
  {
    field: "endTime",
    label: "失效时间",
    labelMinWidth: 60
  },
  {
    field: "costTime",
    label: "耗时(ms)",
    labelMinWidth: 60
  },
  {
    field: "jobStatusTag",
    label: "执行状态",
    labelMinWidth: 60
  },
  {
    field: "createTime",
    label: "创建时间",
    labelMinWidth: 60
  },
  {
    field: "createTime",
    label: "更新时间",
    labelMinWidth: 60
  },
  {
    field: "remark",
    label: "备注信息",
    span: 2
  }
];
