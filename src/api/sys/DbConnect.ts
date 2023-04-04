/**
 * @description: 数据库连接
 * @author: mfish
 * @date: 2023-03-13
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  DbConnect,
  ReqDbConnect,
  DbConnectPageModel,
  ReqTable,
  TableInfo,
  FieldInfo, DataTable
} from "/@/api/sys/model/DbConnectModel";
import { PageResult } from "/@/api/model/BaseModel";

enum Api {
  DbConnect = "/sys/dbConnect",
  TestConnect = "/sys/dbConnect/test",
  TABLES = "/sys/dbConnect/tables",
  FIELDS = "/sys/dbConnect/fields",
  DATATABLE = "/sys/dbConnect/data",
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
 * 获取表列表
 * @param params
 */
export const getTableList = (params: ReqTable) => {
  return defHttp.get<PageResult<TableInfo>>({ url: Api.TABLES, params: params });
};

/**
 * 获取字段列表
 * @param params
 */
export const getFieldList = (params: ReqTable) => {
  return defHttp.get<PageResult<FieldInfo>>({ url: Api.FIELDS, params: params });
};

/**
 * 获取表数据
 * @param params
 */
export const getDataTable = (params: ReqTable) => {
    return defHttp.get<DataTable>({ url: Api.DATATABLE, params: params });
};

/**
 * 新增数据库连接
 *
 * @param dbConnect
 * @return
 */
export function insertDbConnect(dbConnect: DbConnect) {
  return defHttp.post<DbConnect>({ url: Api.DbConnect, params: dbConnect }, { successMessageMode: "message" });
};

/**
 * 修改数据库连接
 *
 * @param dbConnect
 * @return
 */
export function updateDbConnect(dbConnect: DbConnect) {
  return defHttp.put<DbConnect>({ url: Api.DbConnect, params: dbConnect }, { successMessageMode: "message" });
};

/**
 * 删除数据库连接
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDbConnect(id: string) {
  return defHttp.delete<DbConnect>({ url: Api.DbConnect + "/" + id }, { successMessageMode: "message" });
};

/**
 * 测试数据库连接
 * @param dbConnect
 */
export function testDbConnect(dbConnect: DbConnect) {
  return defHttp.post<DbConnect>({ url: Api.TestConnect, params: dbConnect }, { successMessageMode: "message" });
};
