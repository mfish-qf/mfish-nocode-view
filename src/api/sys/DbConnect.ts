import { defHttp } from "@/utils/http/axios";
import {
  DbConnect,
  ReqDbConnect,
  DbConnectPageModel,
  ReqTable,
  TableInfo,
  FieldInfo,
  DataTable,
  DBTreeNode,
  MetaDataHeader
} from "@/api/sys/model/DbConnectModel";
import { PageResult } from "@/api/model/BaseModel";

/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V1.3.1
 */
enum Api {
  DbConnect = "/sys/dbConnect",
  TestConnect = "/sys/dbConnect/test",
  Tables = "/sys/dbConnect/tables",
  Fields = "/sys/dbConnect/fields",
  Headers = "/sys/dbConnect/headers",
  DataTable = "/sys/dbConnect/data",
  Tree = "/sys/dbConnect/tree"
}

/**
 * 分页列表查询
 *
 * @param reqDbConnect
 * @return
 */
export const getDbConnectList = (reqDbConnect?: ReqDbConnect) => {
  return defHttp.get<DbConnectPageModel>({ url: Api.DbConnect, params: reqDbConnect });
};

/**
 * 获取数据库的树
 * @param params id不传获取数据库 传id获取数据库下的表
 */
export const getDBTree = (params?: any) => {
  return defHttp.get<DBTreeNode[]>({ url: Api.Tree, params });
};

/**
 * 获取表列表
 * @param params
 */
export const getTableList = (params: ReqTable) => {
  return defHttp.get<PageResult<TableInfo>>({ url: Api.Tables, params });
};

/**
 * 获取字段列表
 * @param params
 */
export const getFieldList = (params: ReqTable) => {
  return defHttp.get<PageResult<FieldInfo>>({ url: Api.Fields, params });
};

/**
 * 获取表数据
 * @param params
 */
export const getDataTable = (params: ReqTable) => {
  return defHttp.get<DataTable>({ url: Api.DataTable, params });
};

/**
 * 获取数据列头
 * @param params
 */
export const getDataHeaders = (params: ReqTable) => {
  return defHttp.get<MetaDataHeader[]>({ url: Api.Headers, params });
};

/**
 * 新增数据库连接
 *
 * @param dbConnect
 * @return
 */
export function insertDbConnect(dbConnect: DbConnect) {
  return defHttp.post<DbConnect>({ url: Api.DbConnect, params: dbConnect }, { successMessageMode: "message" });
}

/**
 * 修改数据库连接
 *
 * @param dbConnect
 * @return
 */
export function updateDbConnect(dbConnect: DbConnect) {
  return defHttp.put<DbConnect>({ url: Api.DbConnect, params: dbConnect }, { successMessageMode: "message" });
}

/**
 * 删除数据库连接
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDbConnect(id: string) {
  return defHttp.delete<DbConnect>({ url: `${Api.DbConnect}/${id}` }, { successMessageMode: "message" });
}

/**
 * 测试数据库连接
 * @param dbConnect
 */
export function testDbConnect(dbConnect: DbConnect) {
  return defHttp.post<DbConnect>({ url: Api.TestConnect, params: dbConnect }, { successMessageMode: "message" });
}
