import { ButtonProps } from "ant-design-vue/es/button/buttonTypes";
import { TooltipProps } from "ant-design-vue/es/tooltip/Tooltip";

export interface ActionItem extends ButtonProps {
  onClick?: Fn;
  label?: string;
  color?: "success" | "error" | "warning" | any;
  icon?: string;
  popConfirm?: PopConfirm;
  disabled?: boolean;
  divider?: boolean;
  // 权限编码控制是否显示
  auth?: string | string[];
  // 业务控制是否显示
  ifShow?: boolean | ((action: ActionItem) => boolean);
  tooltip?: string | TooltipProps;
  slot?: string;
}

export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: Fn;
  cancel?: Fn;
  icon?: string;
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | "bottomLeft"
    | "bottomRight";
}
