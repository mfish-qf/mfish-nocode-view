import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { buildDictTag, getDictProps } from "@mfish/core/components/DictTag";

/**
 * @description: HTTP请求数据源表
 * @author: mfish
 * @date: 2025-07-22
 * @version: V2.1.1
 */
export const columns: BasicColumn[] = [
  {
    customRender: ({ record }) => {
      return buildDictTag("http_request_method", record.requestMethod);
    },
    title: "请求方式（get、post、put、delete）",
    dataIndex: "requestMethod",
    width: 120
  },
  {
    title: "请求地址",
    dataIndex: "requestUrl",
    width: 120
  },
  {
    customRender: ({ record }) => {
      return buildDictTag("http_content_type", record.contentType);
    },
    title: "请求类型",
    dataIndex: "contentType",
    width: 120
  },
  {
    title: "头部参数",
    dataIndex: "headerParams",
    width: 120
  },
  {
    title: "请求参数",
    dataIndex: "bodyParams",
    width: 120
  },
  {
    title: "目录id",
    dataIndex: "folderId",
    width: 120
  },
  {
    title: "租户ID",
    dataIndex: "tenantId",
    width: 120
  },
  {
    title: "删除标记(0未删除1删除)",
    dataIndex: "delFlag",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "requestMethod",
    label: "请求方式（get、post、put、delete）",
    component: "ApiSelect",
    componentProps: getDictProps("http_request_method"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "contentType",
    label: "请求类型",
    component: "ApiSelect",
    componentProps: getDictProps("http_content_type"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "folderId",
    label: "目录id",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "tenantId",
    label: "租户ID",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const mfHttpFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "requestMethod",
    label: "请求方式（get、post、put、delete）",
    component: "ApiSelect",
    componentProps: getDictProps("http_request_method"),
    required: true
  },
  {
    field: "requestUrl",
    label: "请求地址",
    component: "Input",
    required: true
  },
  {
    field: "contentType",
    label: "请求类型",
    component: "ApiSelect",
    componentProps: getDictProps("http_content_type")
  },
  {
    field: "headerParams",
    label: "头部参数",
    component: "Input"
  },
  {
    field: "bodyParams",
    label: "请求参数",
    component: "Input"
  },
  {
    field: "folderId",
    label: "目录id",
    component: "Input"
  },
  {
    field: "tenantId",
    label: "租户ID",
    component: "Input"
  },
  {
    field: "delFlag",
    label: "删除标记(0未删除1删除)",
    component: "InputNumber"
  }
];

export class MfHttpDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "requestUrl",
      label: "请求地址"
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("http_request_method", val);
      },
      field: "requestMethod",
      label: "请求方式（get、post、put、delete）"
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("http_content_type", val);
      },
      field: "contentType",
      label: "请求类型"
    },
    {
      field: "headerParams",
      label: "头部参数"
    },
    {
      field: "bodyParams",
      label: "请求参数"
    },
    {
      field: "folderId",
      label: "目录id"
    },
    {
      field: "tenantId",
      label: "租户ID"
    },
    {
      field: "delFlag",
      label: "删除标记(0未删除1删除)"
    }
  ];
}
