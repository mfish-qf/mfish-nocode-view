import type { AxiosError } from "axios";
import type { MessageMode } from "#/axios";
import { useI18n } from "@/hooks/web/UseI18n";
import { messageTips } from "@/utils/http/axios/Helper";

/**
 * 判断状态码
 * @param status
 * @param msg
 * @param errorMessageMode
 * @param retryCount
 */
export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: MessageMode = "none",
  retryCount: number
): void {
  const { t } = useI18n();
  let errMessage = "";
  switch (status) {
    case 400: {
      break;
    }
    // 401: 认证失败返回401
    case 401: {
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
    messageTips(errorMessageMode, errMessage, true, retryCount);
  }
}

/**
 * 判断错误
 * @param error
 * @param errorMessageMode
 * @param retryCount
 */
export function checkError(error: AxiosError, errorMessageMode: MessageMode = "none", retryCount: number): boolean {
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
    messageTips(errorMessageMode, errMessage, true, retryCount);
    return true;
  }
  return false;
}
