import { BasicColumn } from "@mfish/core/src/components/Table";
import { FormSchema } from "@mfish/core/src/components/Table";
import { buildDictTag, getDictProps } from "@mfish/core/src/components/DictTag";
import { DescItem } from "@mfish/core/src/components/Description";
import { Tag } from "ant-design-vue";
import { h } from "vue";

/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V2.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "客户端名称",
    dataIndex: "clientName",
    width: 180
  },
  {
    title: "客户端ID",
    dataIndex: "clientId",
    width: 260
  },
  {
    title: "客户端密钥",
    dataIndex: "clientSecret",
    width: 260
  },
  {
    title: "认证方式",
    dataIndex: "grantTypes"
  },
  {
    title: "回调地址",
    dataIndex: "redirectUrl"
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "clientName",
    label: "客户端名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "clientId",
    label: "客户端ID",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const ssoClientDetailsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "clientName",
    label: "客户端名称",
    component: "Input",
    required: true
  },
  {
    field: "grantTypeGroup",
    label: "认证方式",
    component: "ApiSelect",
    componentProps: { ...getDictProps("sso_grant_type"), mode: "multiple" },
    required: true
  },
  {
    field: "redirectUrl",
    label: "回调地址",
    component: "InputTextArea",
    helpMessage: ["必须是http://或者https:// 开头", "多个回调地址英文逗号分隔，不能以逗号结尾"],
    required: true
  }
];

export class SsoClientDetailsDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "clientName",
      label: "客户端名称"
    },
    {
      field: "clientId",
      label: "客户端ID"
    },
    {
      field: "clientSecret",
      label: "客户端密钥"
    },
    {
      field: "scope",
      label: "权限范围"
    },
    {
      field: "grantTypes",
      label: "认证方式",
      render: (val) => {
        if (!val) return;
        const types: string[] = val.split(",");
        return types.map((type) => h("div", { class: "mt-1 mb-1" }, buildDictTag("sso_grant_type", type)));
      }
    },
    {
      field: "redirectUrl",
      label: "回调地址",
      render: (val) => {
        if (!val) return;
        const types: string[] = val.split(",");
        return types.map((type) =>
          h(
            "div",
            { class: "mt-1 mb-1" },
            h(Tag, () => type)
          )
        );
      }
    }
  ];
}
