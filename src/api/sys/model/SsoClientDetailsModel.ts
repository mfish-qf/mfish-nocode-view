import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 客户端信息
 * @author: mfish
 * @date: 2023-05-12
 * @version: V2.1.0
 */
export interface SsoClientDetails extends BaseEntity<string> {
  clientId: string;
  clientName: string;
  resourceIds: string;
  clientSecret: string;
  scope: string;
  grantTypes: string;
  grantTypeGroup: string[];
  redirectUrl: string;
  authorities: string;
  autoApprove: string;
}

export interface ReqSsoClientDetails extends ReqPage {
  clientName: string;
  clientId: string;
}

export type SsoClientDetailsPageModel = PageResult<SsoClientDetails>;
