import { isObject, isString } from "../../../utils/Is";
import { MessageMode } from "@mfish/types/src/type/axios";
import { useI18n, useMessage } from "@core/hooks";
import { Recordable } from "@mfish/types";

const { createMessage, createErrorModal, createSuccessModal } = useMessage();

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function joinTimestamp<T extends boolean>(join: boolean, restful: T): T extends true ? string : object;

export function joinTimestamp(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? "" : {};
  }
  const now = Date.now();
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

export function messageTips(
  messageMode: MessageMode,
  messageCode: number[] = [],
  msg: string,
  code: number,
  isError: boolean,
  retryCount = 0
): void {
  let tip = true;
  //默认根据提示模式进行错误提示
  // 如果设置了错误编码，用于指定哪些错误码需要进行告警提示 未指定的不提示
  if (messageCode && messageCode.length > 0) {
    tip = messageCode.includes(code);
  }
  if (!tip) return;
  const { t } = useI18n();
  if (messageMode === "message") {
    if (!isError) {
      createMessage.success(msg).then();
      return;
    }
    // 重试请求不重复进行错误提示
    if (retryCount > 0) {
      return;
    }
    createMessage.error(msg).then();
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
  }
}
