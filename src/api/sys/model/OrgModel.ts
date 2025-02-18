import { PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 组织结构信息
 * @author: mfish
 * @date: 2022/11/9 18:14
 */
export interface SsoOrg {
  id: string;
  parentId: string;
  tenantId: string;
  orgCode: string;
  orgLevel: number;
  orgName: string;
  orgSort: number;
  leader: string;
  phone: string;
  email: string;
  status: number;
  delFlag: number;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  children: SsoOrg[];
  roleIds: string[];
}
export interface ReqSsoOrg extends ReqPage {
  tenantId?: string;
  orgName?: string;
  leader?: string;
  phone?: string;
  status?: number;
}

export interface ReqOrgUser extends ReqPage {
  nickname?: string;
  phone?: string;
  account?: string;
}

export type SsoOrgPageModel = PageResult<SsoOrg>;
