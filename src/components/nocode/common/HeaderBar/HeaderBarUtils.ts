import { Ref } from "vue";

/**
 * @description: 头部通用类
 * @author: mfish
 * @date: 2023/9/5
 */
export interface HeaderBarAction {
  showDivider?: boolean;
  hideLabel?: boolean;
  label?: string;
  icon?: string;
  color?: any;
  tooltip?: string;
  click?: (e) => void;
  disabled?: boolean | Ref<boolean>;
  isLoading?: boolean | Ref<boolean>;
}
