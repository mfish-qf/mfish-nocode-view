import type { ErrorLogInfo } from "@mfish/types/src/type/store";
import { defineStore } from "pinia";
import { store } from "../index";
import projectSetting from "@mfish/core/settings/ProjectSetting";
import { ErrorTypeEnum } from "@mfish/core/enums";
import dayjs from "dayjs";
import { Nullable } from "@mfish/types";

export interface ErrorLogState {
  errorLogInfoList: Nullable<ErrorLogInfo[]>;
  errorLogListCount: number;
}

export const useErrorLogStore = defineStore("app-error-log", {
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
        time: dayjs().format("YYYY-MM-DD HH:mm:ss")
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
    addAjaxErrorInfo(error: any) {
      const { useErrorHandle } = projectSetting;
      if (!useErrorHandle) {
        return;
      }
      const errInfo: Partial<ErrorLogInfo> = {
        message: error.message,
        type: ErrorTypeEnum.AJAX
      };
      if (error.response) {
        const { config: { url = "", data: params = "", method = "get", headers = {} } = {}, data = {} } =
          error.response;
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
