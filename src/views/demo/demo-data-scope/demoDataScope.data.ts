import { BasicColumn } from "@/components/general/Table";
import { DescItem } from "@/components/general/Description";

/**
 * @description: demo_data_scope
 * @author: mfish
 * @date: 2024-09-04
 * @version: V1.3.2
 */
export const columns: BasicColumn[] = [
  {
    title: "角色id",
    dataIndex: "roleId",
    width: 120
  },
  {
    title: "租户id",
    dataIndex: "tenantId",
    width: 120
  },
  {
    title: "组织id",
    dataIndex: "orgId",
    width: 120
  },
  {
    title: "名称",
    dataIndex: "name",
    width: 120
  }
];

export class DemoDataScopeDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "roleId",
      label: "角色id"
    },
    {
      field: "tenantId",
      label: "租户id"
    },
    {
      field: "orgId",
      label: "组织id"
    },
    {
      field: "name",
      label: "名称"
    }
  ];
}
