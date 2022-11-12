import { BasicFetchResult } from "/@/api/model/baseModel";

/**
 * @description：组织结构信息
 * @author     ：qiufeng
 * @date       ：2022/11/9 18:14
 */
export interface SsoOrg {
  id: string;
  parentId: string;
  clientId: string;
  orgCode: string;
  orgLevel: string;
  orgName: string;
  orgSort: string;
  leader: string;
  phone: string;
  email: string;
  status: string;
  delFlag: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  children: SsoOrg[];
}

export type OrgTreeModel = BasicFetchResult<SsoOrg>;