import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V1.0.0
 */
export interface SsoClientDetails extends BaseEntity<string> {
  clientId: string;
  clientName: string;
  resourceIds: string;
  clientSecret: string;
  scope: string;
  grantTypes: string;
  redirectUrl: string;
  authorities: string;
  autoApprove: string;
}

export interface ReqSsoClientDetails {
 clientName: string;
 clientId: string;
}

export type SsoClientDetailsPageModel = PageResult<SsoClientDetails>;
