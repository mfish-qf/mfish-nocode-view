import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { buildDictTag, getDictProps, YNTag } from "@mfish/core/components/DictTag";
import { buildJsonPreview } from "@mfish/core/utils/HBuildUtils";

/**
 * @description: 公式信息
 * @author: mfish
 * @date: 2025-02-11
 * @version: V2.0.1
 */
export const columns: BasicColumn[] = [
  {
    customRender: ({ record }) => {
      return buildDictTag("nc_formula_type", record.categoryId);
    },
    title: "类型",
    dataIndex: "categoryId",
    width: 80
  },
  {
    title: "函数",
    dataIndex: "enName",
    width: 80
  },
  {
    title: "公式名称",
    dataIndex: "cnName",
    width: 120
  },
  {
    title: "描述",
    dataIndex: "description",
    width: 150
  },
  {
    title: "返回结果描述",
    dataIndex: "returnDesc",
    width: 120
  },
  {
    title: "公式处理类",
    dataIndex: "targetObject",
    width: 120
  },
  {
    title: "返回值类型",
    dataIndex: "returnType",
    width: 80,
    customRender: ({ record }) => {
      return record.returnType === "date" ? "日期" : record.returnType === "number" ? "数字" : "字符";
    }
  },
  {
    title: "是否显示",
    dataIndex: "display",
    width: 60,
    customRender: ({ record }) => {
      return YNTag(record.display);
    }
  },
  {
    title: "排序",
    dataIndex: "sort",
    width: 80
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "categoryId",
    label: "类型",
    component: "ApiSelect",
    componentProps: getDictProps("nc_formula_type"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "enName",
    label: "函数",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "cnName",
    label: "公式名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "targetObject",
    label: "公式处理类",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const formulaInfoFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "categoryId",
    label: "类型",
    component: "ApiSelect",
    componentProps: getDictProps("nc_formula_type")
  },
  {
    field: "sort",
    label: "排序",
    component: "InputNumber"
  },
  {
    field: "cnName",
    label: "公式名称",
    component: "Input"
  },
  {
    field: "enName",
    label: "函数",
    component: "Input"
  },

  {
    field: "display",
    label: "是否显示",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "是", value: 1 },
        { label: "否", value: 0 }
      ]
    }
  },
  {
    field: "description",
    label: "描述",
    component: "InputTextArea",
    colProps: { xl: 24, md: 24 }
  },
  {
    field: "returnDesc",
    label: "返回结果描述",
    component: "InputTextArea",
    colProps: { xl: 24, md: 24 }
  },
  {
    field: "targetObject",
    label: "公式处理类",
    component: "Input"
  },
  {
    field: "returnType",
    label: "返回值类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "字符", value: "string" },
        { label: "数字", value: "number" },
        { label: "日期", value: "date" }
      ]
    }
  },
  {
    field: "targetParam",
    label: "公式参数",
    component: "Input",
    slot: "targetParam",
    colProps: { xl: 24, md: 24 }
  },
  {
    field: "paramDesc",
    label: "参数描述",
    component: "Input",
    slot: "paramDesc",
    colProps: { xl: 24, md: 24 }
  }
];

export class FormulaInfoDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("nc_formula_type", val);
      },
      field: "categoryId",
      label: "类型",
      span: 2
    },
    {
      field: "cnName",
      label: "公式名称"
    },
    {
      field: "enName",
      label: "函数"
    },
    {
      field: "targetObject",
      label: "公式处理类"
    },
    {
      field: "description",
      label: "描述",
      span: 2
    },
    {
      field: "targetParam",
      label: "公式参数",
      render: (record) => buildJsonPreview(record),
      span: 2
    },
    {
      field: "paramDesc",
      label: "参数描述",
      render: (record) => buildJsonPreview(record),
      span: 2
    },
    {
      field: "returnType",
      label: "返回值类型",
      render: (val) => {
        return val === "date" ? "日期" : val === "number" ? "数字" : "字符";
      }
    },
    {
      field: "returnDesc",
      label: "返回结果描述"
    },
    {
      field: "display",
      label: "是否显示",
      render: (val) => YNTag(val)
    },
    {
      field: "sort",
      label: "排序"
    }
  ];
}
