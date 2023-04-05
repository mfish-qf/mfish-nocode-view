import { BasicColumn } from "/@/components/general/Table";
import { Checkbox } from "ant-design-vue";
import { h } from "vue";
/**
 * @description: 表信息
 * @author: mfish
 * @date: 2023/4/4 20:17
 */
export const columns: BasicColumn[] = [
  {
    title: "字段名称",
    dataIndex: "fieldName",
    width: 120
  },
  {
    title: "字段类型",
    dataIndex: "columnType",
    width: 120
  },
  {
    title: "非空",
    dataIndex: "nullAble",
    customRender: ({ record }) => {
      return h(Checkbox, {
        checked: !record.nullAble,
        disabled: true
      });
    },
    width: 120
  },
  {
    title: "主键",
    dataIndex: "isPrimary",
    customRender: ({ record }) => {
      return h(Checkbox, {
        checked: record.isPrimary,
        disabled: true
      });
    },
    width: 120
  },
  {
    title: "字段描述",
    dataIndex: "comment",
    width: 120
  }
];