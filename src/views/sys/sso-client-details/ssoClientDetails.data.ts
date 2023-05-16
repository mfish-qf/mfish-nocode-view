import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "客户端ID",
    dataIndex: "clientId",
    width: 120
  },
  {
    title: "客户端名称",
    dataIndex: "clientName",
    width: 120
  },
  {
    title: "客户端能访问的资源集合",
    dataIndex: "resourceIds",
    width: 120
  },
  {
    title: "客户端密钥",
    dataIndex: "clientSecret",
    width: 120
  },
  {
    title: "指定客户端权限范围",
    dataIndex: "scope",
    width: 120
  },
  {
    title: "认证方式 授权码模式:authorization_code,密码模式:password,刷新token: refresh_token",
    dataIndex: "grantTypes",
    width: 120
  },
  {
    title: "客户端重定向url，authorization_code认证回调地址",
    dataIndex: "redirectUrl",
    width: 120
  },
  {
    title: "指定用户的权限范围",
    dataIndex: "authorities",
    width: 120
  },
  {
    title: "跳过授权页,默认true,适用于authorization_code模式",
    dataIndex: "autoApprove",
    width: 120
  },
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
  },
];
export const ssoClientDetailsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "clientId",
    label: "客户端ID",
    component: "Input",
    required: true
  },
  {
    field: "clientName",
    label: "客户端名称",
    component: "Input",
  },
  {
    field: "resourceIds",
    label: "客户端能访问的资源集合",
    component: "Input",
  },
  {
    field: "clientSecret",
    label: "客户端密钥",
    component: "Input",
  },
  {
    field: "scope",
    label: "指定客户端权限范围",
    component: "Input",
  },
  {
    field: "grantTypes",
    label: "认证方式 授权码模式:authorization_code,密码模式:password,刷新token: refresh_token",
    component: "Input",
  },
  {
    field: "redirectUrl",
    label: "客户端重定向url，authorization_code认证回调地址",
    component: "Input",
  },
  {
    field: "authorities",
    label: "指定用户的权限范围",
    component: "Input",
  },
  {
    field: "autoApprove",
    label: "跳过授权页,默认true,适用于authorization_code模式",
    component: "Input",
  },
];
