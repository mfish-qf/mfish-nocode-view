import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V1.0.0
 */
export interface DbConnect extends BaseEntity<string> {
  dbTitle: string;
  dbType: number;
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

export interface ReqTable extends ReqPage {
  connectId: string;
  tableName?: string;
}

export type DbConnectPageModel = PageResult<DbConnect>;
