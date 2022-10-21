import type { AxiosRequestConfig, Canceler } from "axios";
import axios from "axios";
import { isFunction } from "/@/utils/Is";

// 用于存储每个请求的标识和取消功能
let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join("&");

export class AxiosCanceler {
  /**
   * 增加请求
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          // 如果当前没有挂起的请求，请将其添加
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * 清除所有的挂起操作
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  /**
   * 删除请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);

    if (pendingMap.has(url)) {
      // 如果存在未完成请求标识符，当前请求需要取消并删除
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * 重置
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
}
