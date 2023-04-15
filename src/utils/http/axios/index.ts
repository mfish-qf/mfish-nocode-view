import type { AxiosResponse, AxiosInstance } from "axios";
import axios from "axios";
import { clone } from "lodash-es";
import type { RequestOptions, Result } from "/#/axios";
import type { AxiosTransform, CreateAxiosOptions } from "./AxiosTransform";
import { VAxios } from "./Axios";
import { checkError, checkStatus } from "./CheckStatus";
import { useGlobSetting } from "/@/hooks/setting";
import { ContentTypeEnum, RequestEnum, ResultEnum } from "/@/enums/HttpEnum";
import { isString } from "/@/utils/Is";
import { getToken } from "/@/utils/auth";
import { deepMerge, setObjToUrlParams } from "/@/utils";
import { useErrorLogStoreWithOut } from "/@/store/modules/ErrorLog";
import { useI18n } from "/@/hooks/web/UseI18n";
import { formatRequestDate, joinTimestamp, messageTips } from "./Helper";
import { useUserStoreWithOut } from "/@/store/modules/User";
import { AxiosRetry } from "/@/utils/http/axios/AxiosRetry";

const globSetting = useGlobSetting();

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理响应数据。如果数据不是预期格式，可直接抛出错误
   */
  transformResponseHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options;
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data;
    }
    const { data } = res;
    const { t } = useI18n();
    if (!data) {
      // 抛出请求异常
      throw new Error(t("sys.api.apiRequestFailed"));
    }
    let { code, msg } = data;
    const hasSuccess = data && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      if (msg === null || msg === undefined || msg === "") {
        msg = t("sys.api.operationSuccess");
      }
      messageTips(options.successMessageMode, msg, false, 0);
      return data.data;
    }
    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    switch (code) {
      case ResultEnum.TIMEOUT:
        msg = t("sys.api.timeoutMessage");
        const userStore = useUserStoreWithOut();
        userStore.setToken(undefined);
        userStore.logout(true);
        break;
    }
    // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
    // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
    messageTips(options.errorMessageMode, msg, true, 0);
    throw new Error(msg || t("sys.api.apiRequestFailed"));
  },
  //下载文件返回处理
  downloadResponseHook: (res: any) => {
    const { data } = res;
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    const fileName = res.headers["content-disposition"].split("=")[1];
    if (fileName) {
      link.download = fileName;
    }
    link.click();
    URL.revokeObjectURL(url);
  },
  /**
   * 请求之前处理config
   * @param config
   * @param options
   */
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinParamsToUrl, formatDate, joinTime = true } = options;
    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    const data = config.data || false;
    formatDate && data && !isString(data) && formatRequestDate(data);
    formatDate && !isString(params) && formatRequestDate(params);
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (isString(params)) {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      } else {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      }
      return config;
    }
    if (isString(params)) {
      // 兼容restful风格
      config.url = config.url + params;
      config.params = undefined;
      return config;
    }
    if (Reflect.has(config, "data") && config.data && (Object.keys(config.data).length > 0 || config.data instanceof FormData)) {
      config.data = data;
      config.params = params;
    } else {
      // 非GET请求如果没有提供data，则将params视为data
      config.data = params;
      config.params = undefined;
    }
    if (joinParamsToUrl) {
      config.url = setObjToUrlParams(
        config.url as string,
        Object.assign({}, config.params, config.data)
      );
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    const token = getToken();
    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // jwt token
      (config as Recordable).headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (axiosInstance: AxiosInstance, error: any) => {
    const errorLogStore = useErrorLogStoreWithOut();
    errorLogStore.addAjaxErrorInfo(error);
    const { response, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || "none";
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    const retryCount = config?.__retryCount ?? 0;
    if (checkError(error, errorMessageMode, retryCount)) {
      return Promise.reject(error);
    }
    //后台返回信息包括错误信息
    const msg: string = response?.data?.msg ?? "";
    checkStatus(error?.response?.status, msg, errorMessageMode, retryCount);
    // 添加自动重试机制 保险起见 只针对GET请求
    const retryRequest = new AxiosRetry();
    const { isOpenRetry } = config.requestOptions?.retryRequest;
    config.method?.toUpperCase() === RequestEnum.GET && isOpenRetry &&
    retryRequest.retry(axiosInstance, error);
    return Promise.reject(error);
  }
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    // 深度合并
    deepMerge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        authenticationScheme: "Bearer",
        timeout: 15 * 1000,
        // 数据处理方式
        transform: clone(transform),
        headers: { "Content-Type": ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED },
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 错误消息提示类型
          errorMessageMode: "message",
          // 接口地址
          apiUrl: globSetting.apiUrl,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
          retryRequest: {
            isOpenRetry: true,
            count: 1,
            waitTime: 100
          }
        }
      },
      opt || {}
    )
  );
}

export const defHttp = createAxios();
