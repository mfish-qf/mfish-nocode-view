/**
 * @description: 组织结构信息
 * @author: mfish
 * @date: 2022/11/9 18:14
 */
export interface SsoOrg {
  id: string;
  parentId: string;
  clientId: string;
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
