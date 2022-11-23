import { isObject, isString } from "/@/utils/Is";
import { MessageMode } from "/#/axios";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useMessage } from "/@/hooks/web/UseMessage";

const { createMessage, createErrorModal, createSuccessModal } = useMessage();

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function joinTimestamp<T extends boolean>(
  join: boolean,
  restful: T
): T extends true ? string : object;

export function joinTimestamp(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? "" : {};
  }
  const now = new Date().getTime();
  if (restful) {
    return `?_t=${now}`;
  }
  return { _t: now };
}

/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: Recordable) {
  if (Object.prototype.toString.call(params) !== "[object Object]") {
    return;
  }

  for (const key in params) {
    const format = params[key]?.format ?? null;
    if (format && typeof format === "function") {
      params[key] = params[key].format(DATE_TIME_FORMAT);
    }
    if (isString(key)) {
      const value = params[key];
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value;
        } catch (error: any) {
          throw new Error(error);
        }
      }
    }
    if (isObject(params[key])) {
      formatRequestDate(params[key]);
    }
  }
}

export function messageTips(messageMode: MessageMode, msg: string, isError: boolean, retryCount: number = 0): void {
  const { t } = useI18n();
  if (messageMode === "message") {
    if (!isError) {
      createMessage.success(msg);
      return;
    }
    //重试请求不重复进行错误提示
    if (retryCount > 0) {
      return;
    }
    createMessage.error(msg);
    return;
  }
  if (messageMode === "modal") {
    if (!isError) {
      createSuccessModal({ title: t("sys.api.successTip"), content: msg });
    }
    if (retryCount > 0) {
      return;
    }
    createErrorModal({ title: t("sys.api.errorTip"), content: msg });
    return;
  }
}
