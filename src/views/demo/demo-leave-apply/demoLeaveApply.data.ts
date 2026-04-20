import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { Tag } from "ant-design-vue";
import { h } from "vue";
import AuditStatusTag from "@/views/workflow/com/AuditStatusTag.vue";

/**
 * @description: 请假申请审批Demo
 * @author: mfish
 * @date: 2026-04-20
 * @version: V2.3.1
 */
export const columns: BasicColumn[] = [
  {
    title: "申请标题",
    dataIndex: "title",
    width: 120
  },
  {
    title: "请假类型",
    dataIndex: "leaveType",
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
  {
    title: "请假天数",
    dataIndex: "leaveDays",
    width: 120
  },
  {
    title: "请假事由",
    dataIndex: "reason",
    width: 120
  },
  {
    title: "审核状态",
    dataIndex: "auditState",
    width: 120,
    customRender: ({ record }) => {
      const statusMap: Record<string, { text: string; color: string }> = {
        "-1": { text: "未提交", color: "default" },
        0: { text: "审核中", color: "processing" },
        1: { text: "已通过", color: "success" },
        2: { text: "未通过", color: "error" }
      };
      const status = statusMap[record.auditState] ?? -1;
      return h(
        AuditStatusTag,
        {
          businessKey: record.id,
          defaultTag: false
        },
        {
          default: () => h(Tag, { color: status.color }, () => status.text)
        }
      );
    }
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "title",
    label: "申请标题",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const demoLeaveApplyFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "title",
    label: "申请标题",
    component: "Input",
    required: true
  },
  {
    field: "leaveType",
    label: "请假类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "事假", value: 1 },
        { label: "病假", value: 2 },
        { label: "年假", value: 3 }
      ]
    },
    required: true
  },
  {
    field: "startTime",
    label: "开始时间",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    },
    required: true
  },
  {
    field: "endTime",
    label: "结束时间",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    },
    required: true
  },
  {
    field: "reason",
    label: "请假事由",
    component: "InputTextArea",
    colProps: { span: 24 }
  }
];

export class DemoLeaveApplyDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "title",
      label: "申请标题"
    },
    {
      field: "leaveType",
      label: "请假类型"
    },
    {
      field: "startTime",
      label: "开始时间"
    },
    {
      field: "endTime",
      label: "结束时间"
    },
    {
      field: "leaveDays",
      label: "请假天数"
    },
    {
      field: "reason",
      label: "请假事由"
    },
    {
      field: "auditState",
      label: "审核状态",
      render: (text, record) => {
        const statusMap: Record<number, { text: string; color: string }> = {
          "-1": { text: "未提交", color: "default" },
          0: { text: "审核中", color: "processing" },
          1: { text: "已通过", color: "success" },
          2: { text: "未通过", color: "error" }
        };
        const status = statusMap[text] ?? -1;
        return h(
          AuditStatusTag,
          {
            businessKey: record.id,
            defaultTag: false
          },
          {
            default: () => h(Tag, { color: status.color }, () => status.text)
          }
        );
      }
    }
  ];
}
