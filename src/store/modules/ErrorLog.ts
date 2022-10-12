import type { ErrorLogInfo } from "/#/store";

import { defineStore } from "pinia";
import { store } from "/@/store";

import { formatToDateTime } from "/@/utils/DateUtil";
import projectSetting from "/@/settings/ProjectSetting";

import { ErrorTypeEnum } from "/@/enums/ExceptionEnum";
import dayjs from "dayjs";

export interface ErrorLogState {
  errorLogInfoList: Nullable<ErrorLogInfo[]>;
  errorLogListCount: number;
}

export const useErrorLogStore = defineStore({
  id: "app-error-log",
  state: (): ErrorLogState => ({
    errorLogInfoList: null,
    errorLogListCount: 0
  }),
  getters: {
    getErrorLogInfoList(): ErrorLogInfo[] {
      return this.errorLogInfoList || [];
    },
    getErrorLogListCount(): number {
      return this.errorLogListCount;
    }
  },
  actions: {
    addErrorLogInfo(info: ErrorLogInfo) {
      const item = {
        ...info,
        time: formatToDateTime(dayjs())
      };
      this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])];
      this.errorLogListCount += 1;
    },

    setErrorLogListCount(count: number): void {
      this.errorLogListCount = count;
    },

    /**
     * Triggered after ajax request error
     * @param error
     * @returns
     */
    addAjaxErrorInfo(error) {
      const { useErrorHandle } = projectSetting;
      if (!useErrorHandle) {
        return;
      }
      const errInfo: Partial<ErrorLogInfo> = {
        message: error.message,
        type: ErrorTypeEnum.AJAX
      };
      if (error.response) {
        const {
          config: { url = "", data: params = "", method = "get", headers = {} } = {},
          data = {}
        } = error.response;
        errInfo.url = url;
        errInfo.name = "Ajax Error!";
        errInfo.file = "-";
        errInfo.stack = JSON.stringify(data);
        errInfo.detail = JSON.stringify({ params, method, headers });
      }
      this.addErrorLogInfo(errInfo as ErrorLogInfo);
    }
  }
});

// Need to be used outside the setup
export function useErrorLogStoreWithOut() {
  return useErrorLogStore(store);
}
