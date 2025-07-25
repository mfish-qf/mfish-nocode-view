<template>
  <div :class="[prefixCls, getAlign]" @click="onCellClick">
    <template v-for="(action, index) in getActions" :key="`${index}-${action.label}`">
      <template v-if="action.slot">
        <slot :name="action.slot"></slot>
      </template>
      <Tooltip v-else-if="action.tooltip" v-bind="getTooltip(action.tooltip)">
        <PopConfirmButton v-bind="omit(action, 'icon')">
          <Icon
            :icon="action.icon"
            :class="{ 'mr-1': !!action.label }"
            :color="action?.disabled ? undefined : action?.color"
            v-if="action.icon"
          />
          <template v-if="action.label">{{ action.label }}</template>
        </PopConfirmButton>
      </Tooltip>
      <PopConfirmButton v-else v-bind="omit(action, 'icon')">
        <Icon
          :icon="action.icon"
          :class="{ 'mr-1': !!action.label }"
          :color="action?.disabled ? undefined : action?.color"
          v-if="action.icon"
        />
        <template v-if="action.label">{{ action.label }}</template>
      </PopConfirmButton>
      <Divider type="vertical" class="action-divider" v-if="divider && index < getActions.length - 1" />
    </template>
    <Dropdown
      :trigger="['hover']"
      :drop-menu-list="getDropdownList"
      popconfirm
      v-if="dropDownActions && getDropdownList.length > 0"
    >
      <slot name="more"></slot>
      <a-button type="link" size="small" v-if="!$slots.more">
        <MoreOutlined class="icon-more" />
      </a-button>
    </Dropdown>
  </div>
</template>
<script lang="ts" setup>
  import { computed, PropType, toRaw, unref } from "vue";
  import { MoreOutlined } from "@ant-design/icons-vue";
  import { Divider, Tooltip, TooltipProps } from "ant-design-vue";
  import { Icon } from "@core/components/Icon";
  import { ActionItem, TableActionType } from "@core/components/Table";
  import { PopConfirmButton } from "@core/components/Button";
  import { Dropdown } from "@core/components/Dropdown";
  import { useDesign, usePermission } from "@core/hooks";
  import { useTableContext } from "../hooks/UseTableContext";
  import { isBoolean, isFunction, isString } from "@core/utils/Is";
  import { propTypes } from "@core/utils/PropTypes";
  import { ACTION_COLUMN_FLAG } from "../Const";
  import { omit } from "lodash-es";

  defineOptions({ name: "TableAction" });

  const props = defineProps({
    actions: {
      type: Array as PropType<ActionItem[]>,
      default: null
    },
    dropDownActions: {
      type: Array as PropType<ActionItem[]>,
      default: null
    },
    divider: propTypes.bool.def(true),
    outside: propTypes.bool,
    stopButtonPropagation: propTypes.bool.def(false)
  });

  const { prefixCls } = useDesign("basic-table-action");
  let table: Partial<TableActionType> = {};
  if (!props.outside) {
    table = useTableContext();
  }

  const { hasPermission } = usePermission();

  function isIfShow(action: ActionItem): boolean {
    const ifShow = action.ifShow;

    let isIfShow = true;

    if (isBoolean(ifShow)) {
      isIfShow = ifShow;
    }
    if (isFunction(ifShow)) {
      isIfShow = ifShow(action);
    }
    return isIfShow;
  }

  const getActions = computed(() => {
    return (toRaw(props.actions) || [])
      .filter((action) => {
        return hasPermission(action.auth) && isIfShow(action);
      })
      .map((action) => {
        const { popConfirm } = action;
        return {
          getPopupContainer: () => unref((table as any)?.wrapRef) ?? document.body,
          type: "link",
          size: "small",
          ...action,
          ...popConfirm,
          onConfirm: popConfirm?.confirm,
          onCancel: popConfirm?.cancel,
          enable: !!popConfirm
        };
      });
  });

  const getDropdownList = computed((): any[] => {
    const list = (toRaw(props.dropDownActions) || []).filter((action) => {
      return hasPermission(action.auth) && isIfShow(action);
    });
    return list.map((action, index) => {
      const { label, popConfirm } = action;
      return {
        ...action,
        ...popConfirm,
        onConfirm: popConfirm?.confirm,
        onCancel: popConfirm?.cancel,
        text: label,
        divider: index < list.length - 1 ? props.divider : false
      };
    });
  });

  const getAlign = computed(() => {
    const columns = (table as TableActionType)?.getColumns?.() || [];
    const actionColumn = columns.find((item) => item.flag === ACTION_COLUMN_FLAG);
    return actionColumn?.align ?? "left";
  });

  function getTooltip(data: string | TooltipProps): TooltipProps {
    return {
      getPopupContainer: () => unref((table as any)?.wrapRef) ?? document.body,
      placement: "bottom",
      ...(isString(data) ? { title: data } : data)
    };
  }

  function onCellClick(e: MouseEvent) {
    if (!props.stopButtonPropagation) return;
    const path = e.composedPath() as HTMLElement[];
    const isInButton = path.find((ele) => {
      return ele.tagName?.toUpperCase() === "BUTTON";
    });
    isInButton && e.stopPropagation();
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-basic-table-action";

  .@{prefix-cls} {
    display: flex;
    align-items: center;

    .action-divider {
      display: table;
    }

    &.left {
      justify-content: flex-start;
    }

    &.center {
      justify-content: center;
    }

    &.right {
      justify-content: flex-end;
    }

    button {
      display: flex;
      align-items: center;

      span {
        margin-left: 0 !important;
      }
    }

    button.ant-btn-circle {
      span {
        margin: auto !important;
      }
    }

    .ant-divider,
    .ant-divider-vertical {
      margin: 0 2px;
    }

    .icon-more {
      transform: rotate(90deg);

      svg {
        font-size: 1.1em;
        font-weight: 700;
      }
    }
  }
</style>
