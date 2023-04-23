import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { Switch } from "ant-design-vue";
import { setJobStatus } from "/@/api/scheduler/Job";

/**
 * @description: 定时调度任务
 * @author: mfish
 * @date: 2023-02-20
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
    title: "任务类型",
    dataIndex: "jobType",
    width: 120
  },
  {
    title: "调用类",
    dataIndex: "className"
  },
  {
    title: "调用方法",
    dataIndex: "methodName",
    width: 120
  },
  {
    title: "调用参数",
    dataIndex: "params"
  },
  {
    title: "允许并发",
    dataIndex: "allowConcurrent",
    width: 100,
    customRender: ({ record }) => {
      const enable = ~~record.allowConcurrent === 1;
      const color = enable ? "green" : "red";
      const text = enable ? "允许" : "不允许";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "优先级",
    dataIndex: "priority",
    width: 80
  },
  {
    title: "时区",
    dataIndex: "timeZone",
    width: 120
  },
  {
    title: "过期策略",
    dataIndex: "misfireHandler",
    width: 120
  },
  {
    title: "任务状态",
    dataIndex: "status",
    width: 100,
    customRender: ({ record }) => {
      if (!Reflect.has(record, "pendingStatus")) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 0,
        checkedChildren: "已启用",
        unCheckedChildren: "已停用",
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? 0 : 1;
          setJobStatus(record.id, newStatus).then(() => {
            record.status = newStatus;
          }).finally(() => {
            record.pendingStatus = false;
          });
        }
      });
    }
  },
  {
    title: "备注信息",
    dataIndex: "remark"
  }
];
export const searchFormSchema: FormSchema[] = [
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
    field: "jobType",
    label: "任务类型",
    component: "ApiSelect",
    componentProps: getDictProps("sys_job_type"),
    colProps: { lg: 4, md: 6 }
  },
  {
    label: "任务状态",
    field: "status",
    component: "Select",
    componentProps: {
      options: [
        { label: "启用", value: 0 },
        { label: "停用", value: 1 }
      ]
    },
    colProps: { lg: 4, md: 6 }
  }
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
    field: "jobType",
    label: "任务类型",
    component: "ApiSelect",
    componentProps: getDictProps("sys_job_type"),
    required: true
  },
  {
    field: "status",
    label: "状态",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "启用", value: 0 },
        { label: "停用", value: 1 }
      ]
    },
    required: true
  },
  {
    field: "priority",
    label: "优先级",
    component: "InputNumber",
    defaultValue: 1
  },
  {
    field: "timeZone",
    label: "时区",
    component: "ApiSelect",
    componentProps: getDictProps("sys_time_zone"),
    defaultValue: "Asia/Shanghai"
  },
  {
    field: "allowConcurrent",
    label: "允许并发",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "不允许", value: 0 },
        { label: "允许", value: 1 }
      ]
    }
  },
  {
    field: "misfireHandler",
    label: "过期策略",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "立即执行", value: 1 },
        { label: "放弃执行", value: 2 }
      ]
    }
  },
  {
    field: "className",
    label: "调用类",
    helpMessage: ["调用类包含包名全路径 例如：", "cn.com.mfish.scheduler.job.MfJob"],
    component: "Input",
    required: true
  },
  {
    field: "methodName",
    label: "调用方法",
    helpMessage: ["执行方法 例如：", "test"],
    helpComponentProps: { position: "left" },
    component: "Input",
    required: true
  },
  {
    field: "params",
    label: "调用参数",
    helpMessage: ["参数支持普通对象数组类型 例如:[\"****\",11]", "复杂对象数组类型，属性包括type、value 例如：", "[{\"type\":\"java.lang.String\",\"value\":\"inner\"},{\"type\":\"cn.com.mfish.sys.api.entity.SysLog\",\"value\":{\"title\":\"aaaa\"}}]"],
    slot: "params",
    component: "Input",
    colProps: { span: 24 }
  },
  {
    label: "备注",
    field: "remark",
    component: "InputTextArea",
    colProps: { span: 24 }
  }
];

