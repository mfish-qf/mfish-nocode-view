import { Recordable } from "@mfish/types";

/**
 * 分页查询请求参数
 */
export interface ReqPage {
  pageNum?: number;
  pageSize?: number;
}

/**
 * 分页查询结果包装类
 */
export interface PageResult<T> {
  pageNum: number;
  pageSize: number;
  pages: number;
  list: T[];
  total: number;
}

/**
 * 对象基类
 */
export interface BaseEntity<T> extends Recordable {
  id?: T;
  createBy?: string;
  createTime?: string;
  updateBy?: string;
  updateTime?: string;
}
