export interface PageResult<T> {
  pageNum: number;
  pageSize: number;
  list: T[];
  total: number;
}