import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";
import { MetaDataHeader } from "@/api/sys/model/DbConnectModel";
import { ApiParams } from "@/api/nocode/model/ApiParamsModel";

/**
 * @description: 自定义API
 * @author: mfish
 * @date: 2023-07-31
 * @version: V1.2.0
 */
export interface MfApi extends BaseEntity<string> {
  // API名称
  name?: string;
  // 目录id
  folderId?: string;
  // 数据来源id
  sourceId?: string;
  // 数据来源类型 0 数据库 1文件 2API接口
  sourceType?: number;
  // 描述
  remark?: string;
  // 数据源SQL（原生查询方式存储）
  sourceSql?: string;
  // 参数标签 0无参 1有参数
  paramFlag?: number;
  // API配置信息
  config?: string;
  // 删除标签 0未删除 1已删除
  delFlag?: number;
  // 查询类型 0 自定义查询 1原生SQL查询
  queryType?: number;
  // 租户ID
  tenantId?: string;
  params?: ApiParams[];
}

export interface ReqMfApi extends ReqPage {
  // API名称
  name?: string;
  // 目录id
  folderId?: string;
}

export interface ReqSource {
  sourceType: number;
  sourceId: string;
  tableName: string;
}

export interface Config {
  sourceType: number;
  sourceId: string;
  sqlQuery: SqlQuery;
  params?: object;
}

export interface FieldCheck extends MetaDataHeader {
  checked: boolean;
}

export interface SqlQuery {
  schema?: string;
  sourceTable?: string;
  fields?: MetaDataHeader[];
  joins?: Join[];
  filters?: Filter[];
  aggregates?: Aggregate[];
  groups?: Group[];
  orders?: Order[];
  customColumns?: CustomColumn[];
  limit?: number;
  sqlQuery?: SqlQuery;
}
export interface Join {
  fields?: MetaDataHeader[];
  schema?: string;
  table?: string;
  tableAlias?: string;
  condition?: JoinCondition;
  type: "left" | "inner" | "right" | "full";
}

export interface JoinCondition {
  field: MetaDataHeader;
  operation: string;
  joinedField: MetaDataHeader;
}

export interface Filter {
  type: "0" | "1"; // 0符号 and,or,(,) 1表达式
  field?: MetaDataHeader;
  operator?:
    | "eq"
    | "ne"
    | "gt"
    | "ge"
    | "lt"
    | "le"
    | "between"
    | "isNull"
    | "isNotNull"
    | "like"
    | "notLike"
    | "likeLeft"
    | "likeRight";
  value?: string;
  valueType?: "0" | "1" | "2"; // 0常量 1变量 2字段
  required?: boolean;
}

export enum FilterCondition {
  error = "error",
  eq = "=",
  ne = "!=",
  gt = ">",
  ge = ">=",
  lt = "<",
  le = "<=",
  between = "between",
  isNull = "isNull",
  isNotNull = "isNotNull",
  like = "like",
  notLike = "notLike",
  likeLeft = "likeLeft",
  likeRight = "likeRight"
}

export interface Aggregate {
  aggFunc?: string;
  field?: MetaDataHeader;
}

export enum AggregateType {
  count = "计数",
  sum = "求和",
  avg = "平均",
  max = "最大",
  min = "最小"
}

export interface Group {
  field: MetaDataHeader;
}

export interface Order {
  field: MetaDataHeader;
  order: "ASC" | "DESC";
}
export interface CustomColumn {
  name: string;
  expressions: PExpression[];
}

export enum ExpressionType {
  formula = "formula",
  operator = "operator",
  field = "field",
  param = "param"
}
export interface PExpression {
  type: ExpressionType;
  value: any;
  name?: string;
}
// 分页结果集
export type MfApiPageModel = PageResult<MfApi>;
