import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V1.0.0
 */
export interface DbConnect extends BaseEntity<string> {
  dbTitle: string;
  dbType: string;
  poolType: string;
  host: string;
  port: string;
  dbName: string;
  username: string;
  password: string;
  options: string;
  remark: string;
}

export interface ReqDbConnect {

}

export type DbConnectPageModel = PageResult<DbConnect>;
