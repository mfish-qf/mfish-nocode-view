import type { RuleObject } from "ant-design-vue/lib/form/interface";
import type { ComponentType } from "./types";
import { useI18n } from "/@/hooks/web/UseI18n";
import { isNumber } from "/@/utils/Is";

const { t } = useI18n();

/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component?: ComponentType) {
  if (!component) {
    return "";
  }
  if (component.includes("Input") || component.includes("Complete")) {
    return t("common.inputText");
  }
  if (component.includes("Picker")) {
    return t("common.chooseText");
  }
  if (
    component.includes("Select") ||
    component.includes("Cascader") ||
    component.includes("Checkbox") ||
    component.includes("Radio") ||
    component.includes("Switch")
  ) {
    // return `请选择${label}`;
    return t("common.chooseText");
  }
  return "";
}

function genType() {
  return ["DatePicker", "MonthPicker", "WeekPicker", "TimePicker", "RangePicker"];
}

export function setComponentRuleType(
  rule: RuleObject,
  component: ComponentType,
  valueFormat: string
) {
  if (["DatePicker", "MonthPicker", "WeekPicker", "TimePicker"].includes(component)) {
    rule.type = valueFormat ? "string" : "object";
  } else if (["RangePicker", "Upload", "CheckboxGroup", "TimePicker"].includes(component)) {
    rule.type = "array";
  } else if (["InputNumber"].includes(component)) {
    rule.type = "number";
  }
}

export function handleInputNumberValue(component?: ComponentType, val?: any) {
  if (!component) return val;
  if (["Input", "InputPassword", "InputSearch", "InputTextArea"].includes(component)) {
    return val && isNumber(val) ? `${val}` : val;
  }
  return val;
}

/**
 * 时间字段
 */
export const dateItemType = genType();

export const defaultValueComponents = ["Input", "InputPassword", "InputSearch", "InputTextArea"];
