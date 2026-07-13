import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { h } from "vue";
import { Switch } from "ant-design-vue";
import { buildDictTag, getDictProps, YNTag_Name } from "@mfish/core/components/DictTag";
import { updateAiModelConfig } from "@/api/ai/AiModelConfig.ts";

/**
 * @description: AI模型配置信息
 * @author: mfish
 * @date: 2026-07-03
 * @version: V2.4.0
 */
export const columns: BasicColumn[] = [
  {
    title: "供应商",
    dataIndex: "provider",
    width: 120
  },
  {
    title: "模型",
    dataIndex: "modelName",
    width: 120
  },
  {
    title: "接入协议",
    dataIndex: "protocol",
    customRender: ({ record }) => {
      if (!record.protocol) return record.protocol;
      return buildDictTag("ai_model_protocol", record.protocol);
    },
    width: 120
  },
  {
    title: "API Key",
    dataIndex: "apiKey",
    width: 120
  },
  {
    title: "请求地址",
    dataIndex: "baseUrl",
    width: 120
  },
  {
    title: "是否启用",
    dataIndex: "enabled",
    customRender: ({ record }) => {
      if (!Reflect.has(record, "pendingStatus")) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.enabled === 1,
        checkedChildren: "已启用",
        unCheckedChildren: "已停用",
        loading: record.pendingStatus,
        onChange: (checked: any) => {
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 0;
          updateAiModelConfig({ id: record.id, enabled: newStatus })
            .then(() => {
              record.enabled = newStatus;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        }
      });
    },
    width: 120
  },
  {
    title: "排序",
    dataIndex: "sortOrder",
    width: 120
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 150
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "modelName",
    label: "模型",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "provider",
    label: "供应商",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "protocol",
    label: "接入协议",
    component: "ApiSelect",
    componentProps: getDictProps("ai_model_protocol"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "enabled",
    label: "是否启用",
    component: "Select",
    componentProps: {
      options: [
        { label: "启用", value: "0" },
        { label: "停用", value: "1" }
      ]
    },
    colProps: { xl: 5, md: 6 }
  }
];
export const aiModelConfigFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "provider",
    label: "供应商",
    component: "Input"
  },
  {
    field: "modelName",
    label: "模型",
    component: "Input",
    required: true
  },
  {
    field: "protocol",
    label: "接入协议",
    component: "ApiSelect",
    componentProps: getDictProps("ai_model_protocol"),
    defaultValue: "openai",
    required: true
  },
  {
    field: "apiKey",
    label: "API Key",
    component: "Input"
  },
  {
    field: "baseUrl",
    label: "请求地址",
    component: "Input",
    colProps: { span: 24 }
  },
  {
    field: "maxTokens",
    label: "最大token数",
    component: "InputNumber"
  },
  {
    field: "temperature",
    label: "温度参数",
    component: "InputNumber"
  },
  {
    field: "topP",
    label: "top_p",
    component: "InputNumber"
  },
  {
    field: "completionsPath",
    label: "补全项路径",
    component: "Input"
  },
  {
    field: "enabled",
    label: "是否启用",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "启用", value: 1 },
        { label: "停用", value: 0 }
      ]
    }
  },
  {
    field: "sortOrder",
    label: "排序",
    component: "InputNumber",
    defaultValue: 0,
    required: true
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea",
    colProps: { span: 24 }
  }
];

export class AiModelConfigDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "provider",
      label: "供应商"
    },
    {
      field: "modelName",
      label: "模型"
    },
    {
      field: "protocol",
      label: "接入协议",
      render: (val) => {
        if (!val) return val;
        return buildDictTag("ai_model_protocol", val);
      }
    },
    {
      field: "apiKey",
      label: "API Key"
    },
    {
      field: "baseUrl",
      label: "请求地址",
      span: 2
    },
    {
      field: "maxTokens",
      label: "最大token数"
    },
    {
      field: "temperature",
      label: "温度参数"
    },
    {
      field: "topP",
      label: "top_p"
    },
    {
      field: "completionsPath",
      label: "补全项路径"
    },
    {
      field: "enabled",
      label: "是否启用",
      render: (val) => YNTag_Name(val === 1, "已启用", "已停用")
    },
    {
      field: "sortOrder",
      label: "排序"
    },
    {
      field: "remark",
      label: "备注",
      span: 2
    }
  ];
}
