<template>
  <ADropdown :trigger="trigger" v-bind="$attrs">
    <span>
      <slot></slot>
    </span>
    <template #overlay>
      <AMenu :selected-keys="selectedKeys">
        <template v-for="item in dropMenuList" :key="`${item.event}`">
          <AMenuItem v-bind="getAttr(item.event)" @click="handleClickMenu(item)" :disabled="item.disabled">
            <APopconfirm v-if="popconfirm && item.popConfirm" v-bind="getPopConfirmAttrs(item.popConfirm)">
              <template #icon v-if="item.popConfirm.icon">
                <Icon :icon="item.popConfirm.icon" :color="item.color" />
              </template>
              <div>
                <Icon :icon="item.icon" v-if="item.icon" :color="item.color" />
                <span class="ml-1">{{ item.text }}</span>
              </div>
            </APopconfirm>
            <template v-else>
              <Icon :icon="item.icon" v-if="item.icon" :color="item.color" />
              <span class="ml-1">{{ item.text }}</span>
            </template>
          </AMenuItem>
          <AMenuDivider v-if="item.divider" :key="`d-${item.event}`" />
        </template>
      </AMenu>
    </template>
  </ADropdown>
</template>

<script lang="ts" setup>
  import { computed, PropType } from "vue";
  import type { DropMenu } from "./typing";
  import { Dropdown, Menu, Popconfirm } from "ant-design-vue";
  import { Icon } from "../../Icon";
  import { omit } from "lodash-es";
  import { isFunction } from "../../../utils/Is";
  import { Recordable } from "@mfish/types";

  const props = defineProps({
    popconfirm: Boolean,
    /**
     * the trigger mode which executes the drop-down action
     * @default ['hover']
     * @type string[]
     */
    trigger: {
      type: [Array] as PropType<("contextmenu" | "click" | "hover")[]>,
      default: () => {
        return ["contextmenu"];
      }
    },
    dropMenuList: {
      type: Array as PropType<(DropMenu & Recordable)[]>,
      default: () => []
    },
    selectedKeys: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  });
  const emit = defineEmits(["menuEvent"]);
  const ADropdown = Dropdown;
  const AMenu = Menu;
  const AMenuItem = Menu.Item;
  const AMenuDivider = Menu.Divider;
  const APopconfirm = Popconfirm;

  function handleClickMenu(item: DropMenu) {
    const { event } = item;
    const menu = props.dropMenuList.find((item) => `${item.event}` === `${event}`);
    emit("menuEvent", menu);
    item.onClick?.();
  }

  const getPopConfirmAttrs = computed(() => {
    return (attrs) => {
      const originAttrs = omit(attrs, ["confirm", "cancel", "icon"]);
      if (!attrs.onConfirm && attrs.confirm && isFunction(attrs.confirm)) originAttrs.onConfirm = attrs.confirm;
      if (!attrs.onCancel && attrs.cancel && isFunction(attrs.cancel)) originAttrs.onCancel = attrs.cancel;
      return originAttrs;
    };
  });

  const getAttr = (key: string | number) => ({ key });
</script>
