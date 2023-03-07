/**
 * 分页查询包装类
 */
export interface PageResult<T> {
  pageNum: number;
  pageSize: number;
  list: T[];
  total: number;
}

/**
 * 对象基类
 */
export interface BaseEntity<T> {
  id?: T;
  createBy?: string;
  createTime?: string;
  updateBy?: string;
  updateTime?: string;
}