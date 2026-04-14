import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { buildDictTag, getDictProps, YNTag_Name } from "@mfish/core/components/DictTag";

/**
 * @description: 流程管理
 * @author: mfish
 * @date: 2026-03-30
 * @version: V2.3.1
 */
export const columns: BasicColumn[] = [
  {
    customRender: ({ record }) => {
      return buildDictTag("workflow_process_key", record.flowKey);
    },
    title: "流程key",
    dataIndex: "flowKey",
    width: 120
  },
  {
    title: "流程名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "流程描述",
    dataIndex: "remark",
    width: 120
  },
  {
    title: "版本号",
    dataIndex: "version",
    width: 120,
    customRender: ({ record }) => {
      return record.version ? `V${record.version}` : "-";
    }
  },
  {
    title: "发布状态",
    dataIndex: "released",
    width: 120,
    customRender: ({ record }) => {
      return YNTag_Name(record.released === 1, "已发布", "未发布");
    }
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "flowKey",
    label: "流程key",
    component: "ApiSelect",
    componentProps: getDictProps("workflow_process_key"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "name",
    label: "流程名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "released",
    label: "发布状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "已发布", value: 1 },
        { label: "未发布", value: 0 }
      ]
    },
    colProps: { xl: 5, md: 6 }
  }
];
export const flowManageFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "flowKey",
    label: "流程key",
    component: "ApiSelect",
    slot: "flowKeyConfig",
    required: true
  },
  {
    field: "name",
    label: "流程名称",
    component: "Input",
    show: false
  },
  {
    field: "remark",
    label: "流程描述",
    component: "Input",
    show: false
  }
];

export class FlowManageDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("workflow_process_key", val);
      },
      field: "flowKey",
      label: "流程key"
    },
    {
      field: "name",
      label: "流程名称"
    },
    {
      field: "version",
      label: "版本号",
      render: (val) => {
        return val ? `V${val}` : "-";
      }
    },
    {
      field: "released",
      label: "发布状态",
      render: (val) => {
        return YNTag_Name(val === 1, "已发布", "未发布");
      }
    },
    {
      field: "remark",
      label: "流程描述",
      span: 2
    }
  ];
}
