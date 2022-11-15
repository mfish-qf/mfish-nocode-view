import { BasicFetchResult } from "/@/api/model/baseModel";

/**
 * @description：角色信息
 * @author     ：qiufeng
 * @date       ：2022/11/14 16:24
 */
export interface SsoRole {
  id: string;
  clientId: string;
  roleName: string;
  roleCode: string;
  roleSort: number;
  remark: string;
  delFlag: number;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
}

export type RoleListModel = BasicFetchResult<SsoRole>;