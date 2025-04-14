/**
 * @description: 通用校验类
 * @author: mfish
 * @date: 2022/11/16 20:54
 */
import { dateUtil } from "./DateUtil";
import { RuleObject } from "ant-design-vue/lib/form/interface";

export const rules = {
  email(required: boolean): RuleObject[] {
    return [
      {
        required,
        validator: async (_rule, value) => {
          if (required && !value) {
            throw "请输入邮箱!";
          }
          if (
            !new RegExp(
              /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\da-z\-]+\.)+[a-z]{2,}))$/i
            ).test(value)
          ) {
            throw "请输入正确邮箱格式!";
          }
        },
        trigger: "change"
      }
    ];
  },
  phone(required: boolean): RuleObject[] {
    return [
      {
        required,
        validator: async (_, value) => {
          if (required && !value) {
            throw "请输入手机号码1!";
          }
          if (!new RegExp(/^1[3-9]\d{9}$/).test(value)) {
            throw "手机号码格式有误";
          }
        },
        trigger: "change"
      }
    ];
  },
  startTime(endTime, required: boolean): RuleObject[] {
    return [
      {
        required,
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
  endTime(startTime, required: boolean): RuleObject[] {
    return [
      {
        required,
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
