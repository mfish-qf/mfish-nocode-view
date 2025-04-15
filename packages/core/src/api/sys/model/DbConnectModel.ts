import { BaseEntity, PageResult, ReqPage } from "../../model/BaseModel";

/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V2.0.0
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

/**
 * 数据库连接请求
 */
export interface ReqDbConnect extends ReqPage {
  dbTitle?: string;
  dbType?: number;
  host?: string;
  dbName?: string;
}

/**
 * 表信息
 */
export interface TableInfo {
  key?: string;
  idType?: string;
  tableName?: string;
  tableComment?: string;
  tableSchema?: string;
  tableType?: number;
  columns?: string;
  dbType?: number;
}

/**
 * 字段信息
 */
export interface FieldInfo {
  fieldName: string;
  isPrimary: boolean;
  type: string;
  dbType: string;
  columnType: string;
  nullAble: boolean;
  comment: string;
}

export interface DataTable {
  table: PageResult<MetaDataHeader>;
  headers: Record<string, MetaDataHeader>;
}

export type DataType = "STRING" | "NUMBER" | "DATE" | "BOOLEAN";

export interface MetaDataHeader {
  colName?: string;
  fieldName?: string;
  rename?: string;
  comment?: string;
  expression?: string;
  dataType?: DataType;
  tableAlias?: string;
  targetType?: string;
}

export interface ReqTable extends ReqPage {
  connectId: string;
  tableSchema?: string;
  tableName?: string;
}

export interface DBTreeNode {
  code: string;
  parentCode: string;
  label: string;
  type: number;
}

export type DbConnectPageModel = PageResult<DbConnect>;
