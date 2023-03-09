import { BasicColumn } from "/@/components/general/Table";

export const columns: BasicColumn[] = [
  {
    title: "用户",
    dataIndex: "account",
    width: 200,
  },
  {
    title: "登录IP",
    dataIndex: "ip",
    width: 150,
  },
  {
    title: "登录模式",
    dataIndex: "loginMode",
    width: 150,
  },
  {
    title: "登录时间",
    dataIndex: "loginTime",
    width: 200,
  },
  {
    title: "过期时间",
    dataIndex: "expire",
    width: 180
  }
];
