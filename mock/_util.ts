import { ResultEnum } from "/@/enums/HttpEnum";

export function resultSuccess<T = Recordable>(data: T, { msg = "ok" } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    data,
    msg,
    success: true
  };
}

export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = "ok" } = {}
) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length
    }),
    message
  };
}

export function resultError(msg = "Request failed", { code = ResultEnum.ERROR, data = null } = {}) {
  return {
    code,
    data,
    msg,
    success: false
  };
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize));
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization;
}
