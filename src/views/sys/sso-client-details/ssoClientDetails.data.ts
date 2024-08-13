import { BasicColumn } from "@/components/general/Table";
import { FormSchema } from "@/components/general/Table";
import { getDictProps } from "@/utils/DictUtils";

/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V1.2.0
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
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "clientId",
    label: "客户端ID",
    component: "Input",
    colProps: { lg: 4, md: 5 }
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
