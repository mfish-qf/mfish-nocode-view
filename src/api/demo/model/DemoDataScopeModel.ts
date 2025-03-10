import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: demo_data_scope
 * @author: mfish
 * @date: 2024-09-04
 * @version: V1.3.2
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
