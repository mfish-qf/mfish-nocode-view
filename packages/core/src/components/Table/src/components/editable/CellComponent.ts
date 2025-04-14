import type { defineComponent } from "vue";
import type { ComponentType } from "../../types/ComponentType";
import { componentMap } from "@core/components/Table/src/ComponentMap";

import { Popover } from "ant-design-vue";
import { h } from "vue";

export interface ComponentProps {
  component: ComponentType;
  rule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
  getPopupContainer?: Fn;
}

export const CellComponent = (
  { component = "Input", rule = true, ruleMessage, popoverVisible, getPopupContainer }: ComponentProps,
  { attrs }
) => {
  const Comp = componentMap.get(component) as typeof defineComponent;

  const DefaultComp = h(Comp, attrs);
  if (!rule) {
    return DefaultComp;
  }
  return h(
    Popover,
    {
      overlayClassName: "edit-cell-rule-popover",
      open: popoverVisible,
      ...(getPopupContainer ? { getPopupContainer } : {})
    },
    {
      default: () => DefaultComp,
      content: () => ruleMessage
    }
  );
};
