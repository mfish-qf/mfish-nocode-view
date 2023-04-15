import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from "axios";
import type { RequestOptions, Result } from "/#/axios";
import type { CreateAxiosOptions } from "./AxiosTransform";
import axios from "axios";
import qs from "qs";
import { AxiosCanceler } from "./AxiosCancel";
import { isFunction } from "/@/utils/Is";
import { cloneDeep } from "lodash-es";
import { ContentTypeEnum, RequestEnum } from "/@/enums/HttpEnum";

export * from "./AxiosTransform";

/**
 * @description: axios module
 */
export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  /**
   * @description: Create axios instance
   */
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config);
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  getOptions(): CreateAxiosOptions {
    return this.options;
  }

  /**
   * @description: Reconfigure axios
   */
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) {
      return;
    }
    this.createAxios(config);
  }

  /**
   * @description: Set general header
   */
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return;
    }
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  /**
   * @description: Interceptor configuration 拦截器配置
   */
  private setupInterceptors() {
    const { transform } = this.options;
    if (!transform) {
      return;
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform;
    const axiosCanceler = new AxiosCanceler();
    // 请求拦截器配置处理
    this.axiosInstance.interceptors.request.use((config: CreateAxiosOptions) => {
      // 如果取消重复请求已打开，则禁止取消重复请求
      const ignoreCancelToken = config?.requestOptions?.ignoreCancelToken ?? true;
      !ignoreCancelToken && axiosCanceler.addPending(config);
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options);
      }
      return config;
    }, undefined);
    // 请求拦截器错误捕获
    requestInterceptorsCatch &&
    isFunction(requestInterceptorsCatch) &&
    this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);

    // 响应结果拦截器处理
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res);
      }
      return res;
    }, undefined);

    // 响应结果拦截器错误捕获
    responseInterceptorsCatch && isFunction(responseInterceptorsCatch) &&
    this.axiosInstance.interceptors.response.use(undefined, (error) => {
      console.log(error, "error");
      return responseInterceptorsCatch(this.axiosInstance, error);
    });
  }

  // support form-data
  supportFormData(config: CreateAxiosOptions) {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.["Content-Type"] || headers?.["content-type"];
    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, "data") ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config;
    }
    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: "brackets" })
    };
  }

  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: "GET" }, options);
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: "POST" }, options);
  }

  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: "PUT" }, options);
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: "DELETE" }, options);
  }

  upload<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    const formData = new window.FormData();
    const params = config.params;
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });
    //参数已添加到formData中，删除params
    delete config.params;
    return this.request({
      ...config,
      method: "POST",
      data: formData,
      headers: { "Content-Type": ContentTypeEnum.FORM_DATA, ignoreCancelToken: true }
    }, options);
  }

  download<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({
      ...config,
      method: "get",
      responseType: "blob",
      // headers: { "Content-Type": ContentTypeEnum.OCTET_STREAM}
    }, options,this.options.transform?.downloadResponseHook);
  }

  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions, transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any): Promise<T> {
    let conf = <CreateAxiosOptions>cloneDeep(config);
    const { transform, requestOptions } = this.options;
    const opt: RequestOptions = Object.assign({}, requestOptions, options);
    const { beforeRequestHook, requestCatchHook } = transform || {};
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }
    if(!transformResponseHook){
      transformResponseHook = transform?.transformResponseHook;
    }
    conf.requestOptions = opt;
    conf = this.supportFormData(conf);
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformResponseHook && isFunction(transformResponseHook)) {
            try {
              const ret = transformResponseHook(res, opt);
              resolve(ret);
            } catch (err) {
              reject(err || new Error("请求错误!"));
            }
            return;
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt));
            return;
          }
          if (axios.isAxiosError(e)) {
            // rewrite error message from axios in here
          }
          reject(e);
        });
    });
  }
}
