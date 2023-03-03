export type MessageMode = "none" | "modal" | "message" | undefined;

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  // Whether to process the request result
  isTransformResponse?: boolean;
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // Error message prompt type
  errorMessageMode?: MessageMode;
  //成功信息弹窗模式
  successMessageMode?: MessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
}

export interface RetryRequest {
  isOpenRetry: boolean;
  count: number;
  waitTime: number;
}

export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  msg: string;
  data: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // 文件
  file: File | Blob;
  //文件名(不传直接采用file中的名称)
  fileName?: string;
  // 路径 设置默认路径(后端会再按照日期生成子目录)
  path?: string;
  // 是否私有路径
  isPrivate?: number;
}
