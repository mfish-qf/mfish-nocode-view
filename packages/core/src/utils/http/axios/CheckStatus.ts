import type { AxiosError } from "axios";
import type { MessageMode } from "@mfish/types/src/type/axios";
import { useI18n } from "@core/hooks";
import { messageTips } from "./Helper";
import { useUserStoreWithOut } from "@mfish/stores/modules";
import { router } from "@core/router";

/**
 * 判断状态码
 * @param status 状态码
 * @param msg 错误信息
 * @param errorMessageMode 错误信息弹窗模式
 * @param messageCode 信息弹窗code
 * @param retryCount 接口请求失败重试次数
 * @param refreshToken 接口请求失败是否直接刷新token
 */
export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: MessageMode = "none",
  messageCode: number[] = [],
  retryCount: number,
  refreshToken: boolean
): void {
  const { t } = useI18n();
  const userStore = useUserStoreWithOut();
  let errMessage = "";
  switch (status) {
    case 400: {
      break;
    }
    // 401: 认证失败返回401
    case 401: {
      // 接口请求认证失败，自动刷新token
      if (refreshToken) {
        userStore.setToken(undefined);
        userStore.setUserInfo(null);
        router.go(0);
      }
      errMessage = t("sys.api.errMsg401");
      break;
    }
    case 403: {
      errMessage = t("sys.api.errMsg403");
      break;
    }
    case 404: {
      errMessage = t("sys.api.errMsg404");
      break;
    }
    case 405: {
      errMessage = t("sys.api.errMsg405");
      break;
    }
    case 408: {
      errMessage = t("sys.api.errMsg408");
      break;
    }
    case 500: {
      errMessage = t("sys.api.errMsg500");
      break;
    }
    case 501: {
      errMessage = t("sys.api.errMsg501");
      break;
    }
    case 502: {
      errMessage = t("sys.api.errMsg502");
      break;
    }
    case 503: {
      errMessage = t("sys.api.errMsg503");
      break;
    }
    case 504: {
      errMessage = t("sys.api.errMsg504");
      break;
    }
    case 505: {
      errMessage = t("sys.api.errMsg505");
      break;
    }
    default: {
      break;
    }
  }
  // 优先使用后台返回的错误信息
  if (msg !== undefined && msg !== null && msg !== "") {
    errMessage = msg;
  }
  if (errMessage) {
    messageTips(errorMessageMode, messageCode, errMessage, status, true, retryCount);
  }
}

/**
 * 判断错误
 * @param error
 * @param errorMessageMode
 * @param messageCode
 * @param status
 * @param retryCount
 */
export function checkError(
  error: AxiosError,
  errorMessageMode: MessageMode = "none",
  messageCode: number[] = [],
  status: number,
  retryCount: number
): boolean {
  const { code, message } = error;
  const { t } = useI18n();
  const err: string = error?.toString?.() ?? "";
  let errMessage = "";
  if (code === "ECONNABORTED" && message.includes("timeout")) {
    errMessage = t("sys.api.apiTimeoutMessage");
  }
  if (err?.includes("Network Error")) {
    errMessage = t("sys.api.networkExceptionMsg");
  }
  if (errMessage) {
    messageTips(errorMessageMode, messageCode, errMessage, status, true, retryCount);
    return true;
  }
  return false;
}
