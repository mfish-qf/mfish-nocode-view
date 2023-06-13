import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: 租户信息表
 * @author: mfish
 * @date: 2023-05-31
 * @version: V1.0.1
 */
export interface SsoTenant extends BaseEntity<string> {
  name?: string;
  city?: string;
  province?: string;
  county?: string;
  address?: string;
  corpSize?: string;
  corpYears?: string;
  trade?: string;
  status?: number;
  logo?: string;
  domain?: string;
  delFlag?: number;
  userId?: string;
  tenantType?: number;
}

export interface ReqSsoTenant extends ReqPage {
  domain?: string;
  name?: string;
}

export type SsoTenantPageModel = PageResult<SsoTenant>;
