import { BasicColumn } from "@mfish/core/components/Table";
import { h } from "vue";
import { Input, RangePicker, Switch } from "ant-design-vue";
import { dateUtil, formatToDateTime } from "@mfish/core/utils/DateUtil";

/**
 * @description: 任务订阅表
 * @author: mfish
 * @date: 2023-02-20
 * @version: V2.0.1
 */
export const columns: BasicColumn[] = [
  {
    title: "调度周期",
    width: 350,
    customRender: ({ record }) => {
      return h(RangePicker, {
        format: "YYYY-MM-DD HH:mm:ss",
        placeholder: ["开始时间", "结束时间"],
        showTime: {
          hideDisabledOptions: true,
          defaultValue: [dateUtil(), dateUtil("23:59:59", "HH:mm:ss")]
        },
        defaultValue: [dateUtil(record.startTime), dateUtil(record.endTime)],
        ranges: {
          一周: [dateUtil(), dateUtil().add(1, "weeks")],
          一月: [dateUtil(), dateUtil().add(1, "months")],
          三个月: [dateUtil(), dateUtil().add(3, "months")],
          一年: [dateUtil(), dateUtil().add(1, "years")],
          两年: [dateUtil(), dateUtil().add(2, "years")],
          三年: [dateUtil(), dateUtil().add(3, "years")]
        },
        onChange(value: any) {
          if (value && value.length === 2) {
            record.startTime = formatToDateTime(value[0]);
            record.endTime = formatToDateTime(value[1]);
          } else {
            record.startTime = null;
            record.endTime = null;
          }
        }
      });
    }
  },
  {
    title: "cron表达式",
    customRender: ({ record }) => {
      return h(Input, {
        defaultValue: record.cron,
        placeholder: "输入cron表达式:格式0 1 * ? * *",
        onChange(e) {
          record.cron = e.target.value;
        }
      });
    }
  },
  {
    title: "状态",
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
        onChange(checked: boolean | string | number) {
          record.pendingStatus = true;
          record.status = checked ? 0 : 1;
          record.pendingStatus = false;
        }
      });
    }
  }
];
