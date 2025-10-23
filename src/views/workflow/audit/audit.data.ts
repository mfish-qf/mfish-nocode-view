import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { buildDictTag, getDictProps } from "@mfish/core/components/DictTag";
import { h } from "vue";
import { dateUtil } from "@mfish/core/utils/DateUtil";
import AuditStatusTag from "@/views/workflow/com/AuditStatusTag.vue";

/**
 * @description: 审批管理
 * @author: mfish
 * @date: 2025-10-15
 * @version: V2.2.0
 */
export const columns: BasicColumn[] = [
  {
    title: "审批类型",
    dataIndex: "processDefinitionKey",
    width: 120,
    customRender: ({ record }) => {
      return buildDictTag("workflow_process_key", record.processDefinitionKey);
    }
  },
  {
    title: "任务名称",
    dataIndex: "taskName",
    width: 120
  },
  {
    title: "审批状态",
    dataIndex: "status",
    width: 120,
    customRender: ({ record }) => {
      return h(AuditStatusTag, {
        processInstanceId: record.processInstanceId,
        status: record.status
      });
    }
  },
  {
    title: "描述",
    dataIndex: "description",
    width: 120
  },
  {
    title: "发起人",
    dataIndex: "startAccount",
    width: 120
  },
  {
    title: "发起时间",
    dataIndex: "startTime",
    width: 120
  },
  {
    title: "审批人",
    dataIndex: "assignee",
    width: 120
  },
  {
    title: "审批时间",
    dataIndex: "endTime",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "taskName",
    label: "任务名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "processDefinitionKey",
    label: "审批类型",
    component: "ApiSelect",
    componentProps: getDictProps("workflow_process_key"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "status",
    label: "审批状态",
    component: "ApiSelect",
    componentProps: getDictProps("workflow_task_status"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "startAccount",
    label: "发起人",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "[applyStartTime, applyEndTime]",
    label: "发起时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"],
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00", "HH:mm:ss"), dateUtil("23:59:59", "HH:mm:ss")]
      },
      ranges: {
        今天: [dateUtil().startOf("day"), dateUtil()],
        昨天: [dateUtil().startOf("day").subtract(1, "days"), dateUtil().endOf("day").subtract(1, "days")],
        最近一周: [dateUtil().subtract(1, "weeks"), dateUtil()],
        最近两周: [dateUtil().subtract(2, "weeks"), dateUtil()],
        最近1个月: [dateUtil().subtract(1, "months"), dateUtil()],
        最近3个月: [dateUtil().subtract(3, "months"), dateUtil()]
      }
    },
    colProps: { xl: 6, md: 10 }
  },
  {
    field: "assignee",
    label: "审批人",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "[auditStartTime, auditEndTime]",
    label: "审批时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"],
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00", "HH:mm:ss"), dateUtil("23:59:59", "HH:mm:ss")]
      },
      ranges: {
        今天: [dateUtil().startOf("day"), dateUtil()],
        昨天: [dateUtil().startOf("day").subtract(1, "days"), dateUtil().endOf("day").subtract(1, "days")],
        最近一周: [dateUtil().subtract(1, "weeks"), dateUtil()],
        最近两周: [dateUtil().subtract(2, "weeks"), dateUtil()],
        最近1个月: [dateUtil().subtract(1, "months"), dateUtil()],
        最近3个月: [dateUtil().subtract(3, "months"), dateUtil()]
      }
    },
    colProps: { xl: 6, md: 10 }
  }
];
