import { BasicColumn } from "@mfish/core/components/Table";

/**
 * @description: 文件目录
 * @author: mfish
 * @date: 2023/12/12
 */
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "请求地址",
    dataIndex: "requestUrl",
    width: 300
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 120
  },
  {
    title: "创建人",
    dataIndex: "createBy",
    width: 120
  }
];
