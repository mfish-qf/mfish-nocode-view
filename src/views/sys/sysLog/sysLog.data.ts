import { BasicColumn } from "/@/components/Table";
import { FormSchema } from "/@/components/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { dateUtil } from "/@/utils/DateUtil";

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
    width: 150
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
    title: "请求来源",
    dataIndex: "reqSource",
    width: 120,
    customRender: ({ record }) => {
      const source = record.reqSource;
      let color;
      let text;
      if (source === 0) {
        color = "orange";
        text = "其他";
      } else if (source === 1) {
        color = "blue";
        text = "后台用户";
      } else {
        color = "pink";
        text = "手机用户";
      }
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "操作类型",
    dataIndex: "operType",
    width: 120
  },
  {
    title: "操作IP",
    dataIndex: "operIp",
    width: 120
  },
  {
    title: "操作状态",
    dataIndex: "operStatus",
    width: 120,
    customRender: ({ record }) => {
      const status = record.operStatus;
      const enable = ~~status === 0;
      const color = enable ? "green" : "red";
      const text = enable ? "正常" : "异常";
      return h(Tag, { color: color }, () => text);
    }
  },
  {
    title: "操作时间",
    dataIndex: "createTime",
    width: 180
  },
  {
    title: "操作人",
    dataIndex: "createBy",
    width: 120
  },
  {
    title: "方法",
    dataIndex: "method"
  },
  {
    title: "请求参数",
    dataIndex: "reqParam"
  }
];
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
  {
    field: "reqUri",
    label: "请求路径",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "[startTime, endTime]",
    label: "时间范围",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"],
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00", "HH:mm:ss"), dateUtil("11:59:59", "HH:mm:ss")]
      },
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [dateUtil().startOf("day").subtract(1, "days"), dateUtil().startOf("day").subtract(1, "days")],
        ["最近一周"]: [dateUtil().startOf("day").subtract(1, "weeks"), dateUtil()],
        ["最近两周"]: [dateUtil().startOf("day").subtract(2, "weeks"), dateUtil()],
        ["最近1个月"]: [dateUtil().startOf("day").subtract(1, "months"), dateUtil()],
        ["最近3个月"]: [dateUtil().startOf("day").subtract(3, "months"), dateUtil()]
      }
    },
    colProps: { span: 6 }
  },
  {
    field: "reqSource",
    label: "请求来源",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "operType",
    label: "操作类型",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "operIp",
    label: "操作IP",
    component: "Input",
    colProps: { span: 4 }
  },
  {
    field: "operStatus",
    label: "操作状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "正常", value: 0 },
        { label: "异常", value: 1 }
      ]
    },
    colProps: { span: 4 }
  }

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
    component: "Input"
  },
  {
    field: "method",
    label: "方法",
    component: "Input"
  },
  {
    field: "reqType",
    label: "请求类型",
    component: "Input"
  },
  {
    field: "reqUri",
    label: "请求路径",
    component: "Input"
  },
  {
    field: "reqParam",
    label: "请求参数",
    component: "Input"
  },
  {
    field: "reqSource",
    label: "请求来源",
    component: "Input"
  },
  {
    field: "operType",
    label: "操作类型",
    component: "Input"
  },
  {
    field: "operIp",
    label: "操作IP",
    component: "Input"
  },
  {
    field: "operStatus",
    label: "操作状态",
    component: "Input"
  },
  {
    field: "remark",
    label: "返回信息",
    component: "Input"
  }
];
