/**
 * @description: HTTP请求枚举
 * @author: mfish
 * @date: 2022/10/11 17:08
 */
//请求结果
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = -1,
  TIMEOUT = 401,
  TYPE = 'success',
}

//请求方法
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

//ContentType类型
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}