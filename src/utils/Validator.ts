/**
 * @description: 通用校验类
 * @author: mfish
 * @date: 2022/11/16 20:54
 */
import { dateUtil } from "/@/utils/DateUtil";

export const rules = {
  email(required: boolean) {
    return [
      {
        required: required,
        validator: async (_rule, value) => {
          if (required && !value) {
            return Promise.reject("请输入邮箱!");
          }
          if (!new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)) {
            return Promise.reject("请输入正确邮箱格式!");
          }
          return Promise.resolve();
        },
        trigger: "change"
      }
    ];
  },
  phone(required: boolean) {
    return [
      {
        required: required,
        validator: async (_, value) => {
          if (required && !value) {
            return Promise.reject("请输入手机号码1!");
          }
          if (!new RegExp(/^1[3-9][0-9]\d{8}$/).test(value)) {
            return Promise.reject("手机号码格式有误");
          }
          return Promise.resolve();
        },
        trigger: "change"
      }
    ];
  },
  startTime(endTime, required: boolean) {
    return [
      {
        required: required,
        validator: (_, value) => {
          if (required && !value) {
            return Promise.reject("请选择开始时间");
          }
          if (endTime && value && dateUtil(endTime).isBefore(value)) {
            return Promise.reject("开始时间需小于结束时间");
          }
          return Promise.resolve();
        },
        trigger: "change"
      }
    ];
  },
  endTime(startTime, required: boolean) {
    return [
      {
        required: required,
        validator: (_, value) => {
          if (required && !value) {
            return Promise.reject("请选择结束时间");
          }
          if (startTime && value && dateUtil(value).isBefore(startTime)) {
            return Promise.reject("结束时间需大于开始时间");
          }
          return Promise.resolve();
        },
        trigger: "change"
      }
    ];
  }
};