import type { VNode, FunctionalComponent } from "vue";

import { h } from "vue";
import { isString } from "@vue/shared";
import { Icon } from "/@/components/general/Icon";

export const TreeIcon: FunctionalComponent = ({ props }: { props: { icon: VNode | string, color: string } }) => {
  if (!props) return null;
  if (isString(props.icon)) {
    return h(Icon, { icon: props.icon, class: "mr-1", color: props.color });
  }
  return Icon;
};
