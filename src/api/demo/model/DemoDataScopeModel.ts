import { BaseEntity, PageResult } from "@mfish/core/api";

/**
 * @description: demo_data_scope
 * @author: mfish
 * @date: 2024-09-04
 * @version: V2.1.1
 */
export interface DemoDataScope extends BaseEntity<number> {
  //角色id
  roleId?: string;
  //租户id
  tenantId?: string;
  //组织id
  orgId?: string;
  //名称
  name?: string;
}

//分页结果集
export type DemoDataScopePageModel = PageResult<DemoDataScope>;
